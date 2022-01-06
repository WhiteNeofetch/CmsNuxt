<template>
  <canvas id="renderCanvas"></canvas>
</template>

<script>
import * as BABYLON from 'babylonjs'
export default {
  mounted() {
    /**
    Attribution:
    - Low poly X-Wing model by PixelOz
    - Low poly TIE Fighter model by lengyel109
    - Star Wars Battle Theme by John Williams
 */

    const rndJitter = () => (Math.random() * 2 - 1) * 0.02
    document.addEventListener('DOMContentLoaded', () => {
      if (!BABYLON.Engine.isSupported()) return

      const canvas = document.getElementById('renderCanvas')
      const engine = new BABYLON.Engine(canvas, true)
      const scene = new BABYLON.Scene(engine)
      scene.clearColor = new BABYLON.Color3(0, 0, 0)
      const music = new BABYLON.Sound(
        'bgm',
        'https://s3-ap-southeast-2.amazonaws.com/c17-galaxy.kvn.io/star_wars_battle.mp3',
        scene,
        null,
        { loop: true, autoplay: true }
      )
      const light = new BABYLON.HemisphericLight(
        'light',
        new BABYLON.Vector3(0, 20, 0),
        scene
      )

      const loader = new BABYLON.AssetsManager(scene)

      const skybox = BABYLON.Mesh.CreateBox('skybox', 100.0, scene)
      const skyboxMaterial = new BABYLON.StandardMaterial('skybox', scene)
      skyboxMaterial.backFaceCulling = false
      skyboxMaterial.disableLighting = true
      skybox.material = skyboxMaterial
      skybox.infiniteDistance = true
      skybox.renderingGroupId = 0
      skyboxMaterial.disableLighting = true
      skyboxMaterial.reflectionTexture = new BABYLON.CubeTexture(
        'https://s3-ap-southeast-2.amazonaws.com/c17-galaxy.kvn.io/space/space',
        scene
      )
      skyboxMaterial.reflectionTexture.coordinatesMode =
        BABYLON.Texture.SKYBOX_MODE

      const taskTieFighter = loader.addMeshTask(
        'tie',
        '',
        'https://s3-ap-southeast-2.amazonaws.com/c17-galaxy.kvn.io/',
        'tie.obj'
      )
      let meshTieFighter = []
      taskTieFighter.onSuccess = task =>
        task.loadedMeshes.forEach(m => meshTieFighter.push(m))

      const taskXwing = loader.addMeshTask(
        'xwing',
        '',
        'https://s3-ap-southeast-2.amazonaws.com/c17-galaxy.kvn.io/',
        'xwing.obj'
      )
      let meshXwing = []
      taskXwing.onSuccess = task =>
        task.loadedMeshes.forEach(m => meshXwing.push(m))

      const camera = new BABYLON.FollowCamera(
        'cam',
        BABYLON.Vector3.Zero(),
        scene
      )
      camera.radius = 20 // 15
      camera.heightOffset = 5
      camera.rotationOffset = 0 // -90
      camera.cameraAcceleration = 0.01
      setInterval(() => {
        const view = parseInt(Math.floor(Math.random() * 3))
        let rndSign = Math.round(Math.random()) * 2 - 1
        rndSign /= rndSign
        switch (view) {
          case 0:
            camera.lockedTarget = meshXwing[0]
            camera.radius = 20
            camera.rotationOffset = 0
            break
          case 1:
            camera.lockedTarget = meshXwing[0]
            camera.radius = 40
            camera.rotationOffset = 180 * rndSign
            break
          default:
          case 2:
            camera.lockedTarget = meshTieFighter[0]
            camera.radius = 15
            camera.rotationOffset = -90
            break
        }
      }, 5000)

      let lasers = []
      for (let i = 0; i < 5; i++) {
        const laser = BABYLON.Mesh.CreateCylinder(
          'laser1',
          1,
          0.1,
          0.1,
          12,
          1,
          scene
        )
        const laserMaterial = new BABYLON.StandardMaterial(
          'laserMaterial',
          scene
        )
        laserMaterial.emissiveColor = new BABYLON.Color3(1.0, 0.1, 0.0)
        laser.material = laserMaterial
        laser.isVisible = false
        laser.rotation.x = Math.PI / 2
        laser.position.z += i * 20 + (Math.random() * 9 - 18)
        lasers.push(laser)
      }

      loader.onFinish = tasks => {
        meshTieFighter.forEach(m => {
          m.rotation.y = -Math.PI / 2
          m.renderingGroupId = 1
        })
        camera.lockedTarget = meshXwing[0]

        meshXwing.forEach(m => {
          m.scaling = new BABYLON.Vector3(2.0, 2.0, 2.0)
          m.position.z = 20
          m.renderingGroupId = 1
        })

        engine.runRenderLoop(() => {
          scene.render()
        })

        let xwingTargetX = 0
        let xwingTargetY = 0

        setInterval(() => {
          // Position
          if (
            meshXwing[0].position.x !== xwingTargetX ||
            meshTieFighter[0].position.x !== xwingTargetX
          ) {
            meshXwing.forEach(
              m =>
                (m.position.x += (xwingTargetX - meshXwing[0].position.x) / 100)
            )
            meshTieFighter.forEach(
              m =>
                (m.position.x +=
                  (xwingTargetX - meshTieFighter[0].position.x) / 200)
            )
          }
          if (
            meshXwing[0].position.y !== xwingTargetY ||
            meshTieFighter[0].position.z !== xwingTargetY
          ) {
            meshXwing.forEach(
              m =>
                (m.position.y += (xwingTargetY - meshXwing[0].position.y) / 100)
            )
            meshTieFighter.forEach(
              m =>
                (m.position.z +=
                  (xwingTargetY - meshTieFighter[0].position.z) / 200)
            )
          }

          // Rotation
          const deltaX = meshTieFighter[0].position.x - meshXwing[0].position.x
          const deltaY = meshTieFighter[0].position.y - meshXwing[0].position.y
          const deltaZ = meshTieFighter[0].position.z - meshXwing[0].position.z
          const tieRotY = Math.atan(deltaX / deltaZ)
          const tieRotX = Math.atan(deltaY / deltaZ)

          // xwing - roll
          if (xwingTargetX > 0 && meshXwing[0].rotation.z > -Math.PI / 6) {
            meshXwing.forEach(m => (m.rotation.z -= Math.PI / 96))
          } else if (
            xwingTargetX < 0 &&
            meshXwing[0].rotation.z < Math.PI / 6
          ) {
            meshXwing.forEach(m => (m.rotation.z += Math.PI / 96))
          }
          // tie - roll
          if (xwingTargetX > 0 && meshTieFighter[0].rotation.x > -Math.PI / 8) {
            meshTieFighter.forEach(m => (m.rotation.x -= Math.PI / 288))
          } else if (
            xwingTargetX < 0 &&
            meshTieFighter[0].rotation.x < Math.PI / 8
          ) {
            meshTieFighter.forEach(m => (m.rotation.x += Math.PI / 288))
          }
          // tie - pitch
          if (xwingTargetY > 0 && meshTieFighter[0].rotation.z < Math.PI / 12) {
            meshTieFighter.forEach(m => (m.rotation.z += Math.PI / 288))
          } else if (
            xwingTargetY < 0 &&
            meshTieFighter[0].rotation.z > -Math.PI / 12
          ) {
            meshTieFighter.forEach(m => (m.rotation.z -= Math.PI / 288))
          }
        }, 10)

        setInterval(() => {
          // Jitter
          let jitter = rndJitter()
          meshXwing.forEach(m => (m.rotation.z += jitter))
          jitter = rndJitter()
          meshTieFighter.forEach(m => (m.rotation.x += jitter))
          jitter = rndJitter()
          meshTieFighter.forEach(m => (m.rotation.z += jitter))
        }, 100)

        const XWING_XRANGE = 30
        setInterval(() => {
          xwingTargetX = Math.random() * XWING_XRANGE - XWING_XRANGE / 2
        }, 1500)

        const XWING_YRANGE = 20
        setInterval(() => {
          xwingTargetY = Math.random() * XWING_YRANGE - XWING_YRANGE / 2
        }, 1500)

        // Lasers
        const blaster = new BABYLON.Sound(
          'blaster',
          'https://s3-ap-southeast-2.amazonaws.com/c17-galaxy.kvn.io/tie_fighter_blaster.mp3',
          scene,
          null,
          { volume: 0.4 }
        )
        setInterval(() => {
          lasers.forEach(l => {
            if (l.position.z < 500) {
              if (!l.isVisible) {
                l.isVisible = true
                blaster.play()
              }
              l.position.z += 1
            } else {
              l.isVisible = false
              l.position = meshTieFighter[0].position.clone()
            }
          })
        }, 10)
      }

      loader.load()

      window.addEventListener('resize', () => engine.resize())
    })
  },
  methods: {
    randomInteger(min, max) {
      return Math.floor(Math.random() * (max - min)) + min
    },
    createScene() {}
  }
}
</script>

<style>
html,
body {
  height: 100%;
  width: 100%;
  padding: 0;
  margin: 0;
  overflow: hidden;
}

body {
  background-image: url('https://s3-ap-southeast-2.amazonaws.com/c17-galaxy.kvn.io/intergalactic_pursuit_preview.jpg');
  background-size: cover;
  background-position: center;
}

#renderCanvas {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
</style>
