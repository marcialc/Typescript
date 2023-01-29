var palette = {
    red: [255, 0, 0],
    green: "#00ff00",
    blue: [0, 0, 255]
    //  ~~~~ The typo is now caught!
};
// Both of these methods are still accessible!
var redComponent = palette.red[0];
var greenNormalized = palette.green.toUpperCase();
console.log(redComponent);
