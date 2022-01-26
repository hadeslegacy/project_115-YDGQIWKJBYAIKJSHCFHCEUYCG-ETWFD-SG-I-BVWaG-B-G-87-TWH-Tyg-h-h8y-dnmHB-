noseX = 0
noseY = 0

function preload() {
    noset = loadImage("https://i.postimg.cc/ZY37QB1d/pixel.png");
}

function setup() {
    canvas = createCanvas(300, 300)
    canvas.center();
    video = createCapture(VIDEO)
    video.size(300, 300)
    video.hide();

    poseNet = ml5.poseNet(video, modelloaded)

    poseNet.on('pose', ppppppppp)
}

function ppppppppp(result) {
    if (result.length > 0) {
        console.log(result)
        console.log("nose x= " + result[0].pose.rightEye.x )
        console.log("nose y= " + result[0].pose.rightEye.y )
        noseX = result[0].pose.rightEye.x - 20
        noseY = result[0].pose.rightEye.y - 20
    }
}

function modelloaded() {
    console.log("i like food")
}

function take_spamshot() {
    save('yofoodface>:).png')
}

function draw() {
    image(video, 0, 0, 300, 300)
    image(noset, noseX, noseY, 100, 50)

}