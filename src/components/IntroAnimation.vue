<template>
    <div class="intro-animation-wrapper delay-3">
        <div id="stage">
            <div id="shape" class="cube backfaces">
            <div class="plane one">
                <img src="../assets/img/technologies/react.png" alt="react">
            </div>
            <div class="plane two">
                <img src="../assets/img/technologies/html-5.png" alt="html">
            </div>
            <div class="plane three">
                <img src="../assets/img/technologies/css.png" alt="css">
            </div>
            <div class="plane four">
                <img src="../assets/img/technologies/javascript.png" alt="javascript">
            </div>
            <div class="plane five">
                <img src="../assets/img/technologies/vue.png" alt="vue">
            </div>
            <div class="plane six">
                <img src="../assets/img/technologies/jquery.png" alt="jquery">
            </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'IntroAnimation'
}
</script>

<style>
.intro-animation-wrapper {
  background-repeat: no-repeat;
  width: 100%;
  -webkit-perspective: 800;
  -webkit-perspective-origin: 50% 225px;
  min-height: 26rem;
  overflow: visible;
}

#stage {
  width: 100%;
  height: 2rem;
  -webkit-transition: -webkit-transform 2s;
  -webkit-transform-style: preserve-3d;
}

#shape {
  position: relative;
  top: 5rem;
  margin: 0 auto;
  height: 12.5rem;
  width: 12.5rem;
  -webkit-transform-style: preserve-3d;
}

.plane {
  position: absolute;
  height: 12.5rem;
  width: 12.5rem;
  border: 2px solid #2196F3;
  -webkit-border-radius: 12px;
  -webkit-box-sizing: border-box;
  color: black;
  background-color: rgba(0, 0, 0, 0.99);
  -webkit-transition: -webkit-transform 2s, opacity 2s;
  -webkit-backface-visibility: hidden;
  display: grid;
  place-items: center center;
}

.plane img {
  width: 60%;
  height: auto;
}

#shape.backfaces .plane {
  -webkit-backface-visibility: visible;
}

#shape {
  -webkit-animation: spin 24s infinite linear;
}

@-webkit-keyframes spin {
  from {
    -webkit-transform: rotateY(0);
  }
  to {
    -webkit-transform: rotateY(-360deg);
  }
}


/* ---------- cube styles ------------- */

.cube>.one {
  opacity: 0.5;
  -webkit-transform: scale3d(1.2, 1.2, 1.2) rotateX(90deg) translateZ(100px);
}

.cube>.two {
  opacity: 0.5;
  -webkit-transform: scale3d(1.2, 1.2, 1.2) translateZ(100px);
}

.cube>.three {
  opacity: 0.5;
  -webkit-transform: scale3d(1.2, 1.2, 1.2) rotateY(90deg) translateZ(100px);
}

.cube>.four {
  opacity: 0.5;
  -webkit-transform: scale3d(1.2, 1.2, 1.2) rotateY(180deg) translateZ(100px);
}

.cube>.five {
  opacity: 0.5;
  -webkit-transform: scale3d(1.2, 1.2, 1.2) rotateY(-90deg) translateZ(100px);
}

.cube>.six {
  opacity: 0.5;
  -webkit-transform: scale3d(1.2, 1.2, 1.2) rotateX(-90deg) translateZ(100px) rotate(180deg);
}


/* ---------- ring styles ------------- */

.ring>.one {
  -webkit-transform: translateZ(380px);
}

.ring>.two {
  -webkit-transform: rotateY(30deg) translateZ(380px);
}

.ring>.three {
  -webkit-transform: rotateY(60deg) translateZ(380px);
}

.ring>.four {
  -webkit-transform: rotateY(90deg) translateZ(380px);
}

.ring>.five {
  -webkit-transform: rotateY(120deg) translateZ(380px);
}

.ring>.six {
  -webkit-transform: rotateY(150deg) translateZ(380px);
}

@media (max-width: 400px) {
  .intro-animation-wrapper {
    min-height: 55vh;
  }
}
</style>