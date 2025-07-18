import React from "react";
import Particles from "react-tsparticles";
import { loadLinksPreset } from "tsparticles-preset-links";

const ParticlesBackground = () => {
  const particlesInit = async (engine) => {
    await loadLinksPreset(engine);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        preset: "links",
        fullScreen: { enable: true, zIndex: -1 },
        background: {
          color: {
            value: "#000000"
          }
        },
        particles: {
          color: {
            value: "#ffffff"
          },
          links: {
            color: "#FC530A",
            distance: 150,
            enable: true,
            opacity: 0.4,
            width: 1
          },
          move: {
            enable: true,
            speed: 1
          },
          number: {
            value: 80
          },
          size: {
            value: 2
          }
        }
      }}
    />
  );
};

export default ParticlesBackground;
