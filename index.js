red = [0, 100, 63];
orange = [40, 100, 60];
green = [75, 100, 40];
blue = [196, 77, 55];
purple = [280, 50, 100];
letterColors = [red, orange, green, blue, purple];

mouseResponseThreshold = 50;

friction = 0.85;

rotationForce = 0.0;

message = 'Change the physics!';

drawName(message, letterColors);
bounceBubbles();
