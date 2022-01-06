<template>
  <div>
    <!--/ My brand
-->
    <div class="brand">
      <a href="https://www.jamiecoulter.co.uk" target="_blank">
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/logo.png"
        />
      </a>
    </div>
    <!--/ Begin Body
-->
    <div class="swanky">
      <!--/ Introduction Block
  -->
      <div class="swanky_title">
        <h1>Swanky Lil Drop Down Menu V2.0</h1>
        <p>
          Pure CSS Drop down menu. Nice little addition to any non-javascript
          user interface. Uses the labels for trick to toggle animations.
        </p>
        <div class="swanky_title__social">
          <a href="https://www.twitter.com/jamiecoulter89" target="_blank">
            <div class="slide">
              <div class="arrow">
                <div class="stem"></div>
                <div class="point"></div>
              </div>
            </div>
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/tw.png"
            />
            Twitter
          </a>
        </div>
        <div class="swanky_title__social">
          <a href="https://www.codepen.io/jcoulterdesign/" target="_blank">
            <div class="slide">
              <div class="arrow">
                <div class="stem"></div>
                <div class="point"></div>
              </div>
            </div>
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/cp.png"
            />
            Codepen
          </a>
        </div>
      </div>
      <!--/////////// Begin Dropdown ////////////
  -->
      <div class="swanky_wrapper">
        <input id="Dashboard" name="radio" type="radio" />
        <label for="Dashboard">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/dash.png"
          />
          <span>Dashboard</span>
          <div class="lil_arrow"></div>
          <div class="bar"></div>
          <div class="swanky_wrapper__content">
            <ul>
              <li>Tools</li>
              <li>Reports</li>
              <li>Analytics</li>
              <li>Code Blocks</li>
            </ul>
          </div>
        </label>
        <input id="Sales" name="radio" type="radio" />
        <label for="Sales">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/del.png"
          />
          <span>Sales</span>
          <div class="lil_arrow"></div>
          <div class="bar"></div>
          <div class="swanky_wrapper__content">
            <ul>
              <li>New Sales</li>
              <li>Expired Sales</li>
              <li>Sales Reports</li>
              <li>Deliveries</li>
            </ul>
          </div>
        </label>
        <input id="Messages" name="radio" type="radio" />
        <label for="Messages">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/mess.png"
          />
          <span>Messages</span>
          <div class="lil_arrow"></div>
          <div class="bar"></div>
          <div class="swanky_wrapper__content">
            <ul>
              <li>Inbox</li>
              <li>Outbox</li>
              <li>Sent</li>
              <li>Archived</li>
            </ul>
          </div>
        </label>
        <input id="Users" name="radio" type="radio" />
        <label for="Users">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/users.png"
          />
          <span>Users</span>
          <div class="lil_arrow"></div>
          <div class="bar"></div>
          <div class="swanky_wrapper__content">
            <ul>
              <li>New User</li>
              <li>User Groups</li>
              <li>Permissions</li>
              <li>Passwords</li>
            </ul>
          </div>
        </label>
        <input id="Settings" name="radio" type="radio" />
        <label for="Settings">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/set.png"
          />
          <span>Settings</span>
          <div class="lil_arrow"></div>
          <div class="swanky_wrapper__content">
            <ul>
              <li>Databases</li>
              <li>Design</li>
              <li>Change User</li>
              <li>Log Out</li>
            </ul>
          </div>
        </label>
      </div>
      <!--/////////// End Dropdown ////////////
  -->
    </div>
    <!--/ My Footer
-->
    <div class="love">
      <p>
        Made with
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/love_copy.png"
        />
        by
        <a href="https://www.jamiecoulter.co.uk" target="_blank">
          Jcoulterdesign
        </a>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  layout: 'new'
}
</script>

<style lang="scss">
// Import Fonts

// Variables

$default-font: 'Roboto', sans-serif; // Roboto Google font
$global-font-size: 12px; // Global font sizing
$global-font-weight: 500; // Global font weight
$global-font-smoothing: antialiased; // Global smoothing method
$content-width: 700px; // Width of wrapper
$background: linear-gradient(
  135deg,
  #8254ea 0%,
  #e86dec 100%
); // Body background
$full-height: 100vh; // Height of body

$title-width: 400px; // Width of title block

// Reset

ul {
  padding: 0;
  margin: 0;
}
li {
  list-style-type: none;
}
input[type='radio'] {
  display: none;
}
label {
  cursor: pointer;
}
::-webkit-scrollbar {
  display: none;
}

// Placeholders

%center {
  margin: auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

// Styles

body {
  height: $full-height;
  font-weight: $global-font-weight;
  font-family: $default-font;
  background: $background;
  -webkit-font-smoothing: $global-font-smoothing;
  font-size: $global-font-size;
  .swanky {
    @extend %center;
    perspective: 600px;
    width: $content-width;
    position: absolute;
    margin: auto;
    height: 360px;
    &_title {
      float: right;
      text-align: left;
      width: $title-width;
      color: white;
      position: relative;
      top: 70px;
      &__social a {
        position: relative;
        overflow: hidden;
        .slide {
          height: 45px;
          width: 100px;
          float: left;
          position: absolute;
          transform: skew(20deg);
          left: -120px;
          transition-property: left;
          transition-duration: 0.2s;
          background: white;
          .arrow {
            position: absolute;
            right: 31px;
            top: 24px;
            opacity: 0;
            transform: skew(-20deg);
            .stem {
              width: 10px;
              height: 2px;
              background: rgb(133, 132, 144);
            }
            .point {
              width: 6px;
              height: 6px;
              border-right: 2px solid rgb(133, 132, 144);
              top: -3px;
              right: 1px;
              position: absolute;
              transform: rotate(45deg);
              border-top: 2px solid rgb(133, 132, 144);
            }
          }
        }
        width: 140px;
        margin-right: 15px;
        text-decoration: none;
        padding: 0px 0px 5px 0px;
        height: 40px;
        border: 2px solid white;
        float: left;
        color: white;
        font-size: 12px;
        font-weight: 400;
        margin-top: 20px;
        img {
          width: 16px;
          margin-left: 10px;
          position: relative;
          margin-right: 8px;
          transition-property: margin-left;
          transition-duration: 0.1s;
          margin-top: 10px;
          top: 4px;
        }
        &:hover > .slide {
          left: -70px;
          transition-property: left;
          transition-duration: 0.1s;
        }
        &:hover > img {
          margin-left: 40px;
          transition-property: margin-left;
          transition-duration: 0.1s;
        }
        &:hover > .slide .arrow {
          right: 11px;
          opacity: 1;
          transition-property: right, opacity;
          transition-delay: 0.07s;
          transition-duration: 0.2s;
        }
      }
    }
    .intro {
      float: right;
      color: white;
      width: 370px;
      top: 50px;
      position: relative;
      h1 {
        text-shadow: 0px 2px rgba(0, 0, 0, 0.26);
      }
      p {
        line-height: 20px;
        text-shadow: 0px 1px rgba(0, 0, 0, 0.26);
      }
    }
    &_wrapper {
      width: 225px;
      //transform: rotateY(14deg) rotateX(-2deg) rotateZ(-2deg);
      height: auto;
      overflow: hidden;
      border-radius: 4px;
      background: #2a394f;
      label {
        padding: 25px;
        float: left;
        height: 72px;
        border-bottom: 1px solid #293649;
        position: relative;
        width: 100%;
        color: rgb(239, 244, 250);
        transition: text-indent 0.15s, height 0.3s;
        box-sizing: border-box;
        img {
          margin-right: 10px;
          position: relative;
          top: 2px;
          width: 16px;
        }
        span {
          position: relative;
          top: -3px;
        }
        &:hover {
          background: rgb(33, 46, 65);
          border-bottom: 1px solid #2a394f;
          text-indent: 4px;
        }
        &:hover .bar {
          width: 100%;
        }
        .bar {
          width: 0px;
          transition: width 0.15s;
          height: 2px;
          position: absolute;
          display: block;
          background: rgb(53, 87, 137);
          bottom: 0;
          left: 0;
        }
        .lil_arrow {
          width: 5px;
          height: 5px;
          -webkit-transition: transform 0.8s;
          transition: transform 0.8s;
          -webkit-transition-timing-function: cubic-bezier(
            0.68,
            -0.55,
            0.265,
            1.55
          );
          border-top: 2px solid white;
          border-right: 2px solid white;
          float: right;
          position: relative;
          top: 6px;
          right: 2px;
          transform: rotate(45deg);
        }
      }
      &__content {
        position: absolute;
        display: none;
        overflow: hidden;
        left: 0;
        width: 100%;
        li {
          width: 100%;
          opacity: 0;
          left: -100%;
          background: #15a4fa;
          padding: 25px 0px;
          text-indent: 25px;
          box-shadow: 0px 0px #126ca1 inset;
          transition: box-shadow 0.3s, text-indent 0.3s;
          position: relative;
          &:hover {
            background: #0c93e4;
            box-shadow: 3px 0px #126ca1 inset;
            transition: box-shadow 0.3s linear, text-indent 0.3s linear;
            text-indent: 31px;
          }
        }
        .clear {
          clear: both;
        }
      }
    }
  }
}

// Hide show content

input[type='radio']:checked + label .swanky_wrapper__content {
  display: block;
  top: 68px;
  border-bottom: 1px solid rgb(33, 46, 65);
}
input[type='radio']:checked + label > .lil_arrow {
  -webkit-transition: -webkit-transform 0.8s;
  transition: transform 0.8s;
  -webkit-transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  -webkit-transform: rotate(135deg);
  -ms-transform: rotate(135deg);
  transform: rotate(135deg);
  border-top: 2px solid rgb(20, 163, 249);
  border-right: 2px solid rgb(20, 163, 249);
}
input[type='radio']:checked + label {
  height: 325px;
  background: #212e41;
  text-indent: 4px;
  transition-property: height;
  transition-duration: 0.6s;
  -webkit-transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
input[type='radio']:checked + label .bar {
  width: 0;
}

input[type='radio']:checked + label {
  @for $i from 1 through 4 {
    li:nth-of-type(#{$i}) {
      animation: in 0.15s 0.45s + $i * 0.125 forwards;
      -webkit-transition-timing-function: cubic-bezier(
        0.68,
        -0.55,
        0.265,
        1.55
      );
      -moz-animation: in 0.15s 0.45s + $i * 0.125 forwards;
      -moz-transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
    }
  }
}

// Animations

@keyframes in {
  from {
    left: -100%;
    opacity: 0;
  }
  to {
    left: 0;
    opacity: 1;
  }
}

// My Styles

.love {
  position: absolute;
  right: 20px;
  bottom: 0px;
  font-size: 11px;
  font-weight: normal;
  p {
    color: white;
    font-weight: normal;
    font-family: 'Open Sans', sans-serif;
  }
  a {
    color: white;
    font-weight: 700;
    text-decoration: none;
  }
  img {
    position: relative;
    top: 3px;
    margin: 0px 4px;
    width: 10px;
  }
}
.brand {
  position: absolute;
  left: 20px;
  bottom: 14px;
  img {
    width: 30px;
  }
}
</style>
