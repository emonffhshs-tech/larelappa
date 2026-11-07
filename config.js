
const tourConfig = {
  autoLoad: true,
  pitch: 0,
  yaw: 0,
  type: "equirectangular",
  panorama: "./data/panorama.jpg",
  hotSpots: [
    {
      pitch: 0,
      yaw: 0,
      type: "info",
      text: "Virtual Tour"
    }
  ]
};

window.tourConfig = tourConfig;
