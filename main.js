function startClassification() {
  navigator.mediaDevices.getUserMedia({
    audio: true,
    video: false
  });
  classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/u02fOYRBx/model.json', {
    probabilityThreshold: 0.7
  }, modelReady);
}

function modelReady() {
  classifier.classify(gotResults);
}
var dog = 0;
var cat = 0;

function gotResults(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    random_number_r = math.floor(math.random() * 225) + 1;
    random_number_g = math.floor(math.random() * 225) + 1;
    random_number_b = math.floor(math.random() * 225) + 1;
    document.getElementById("result_label").innerHTML = "Detected voice is of-" + results[0].label;
    document.getElementById("result_count").innerHTML = "Detected dog-" + dog + "Detected cat" + cat;
    document.getElementById("result_label").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_r + ")";
    document.getElementById("result_count").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_r + ")";
    img = document.getElementById("animal_image");
    if (results[0].label == "barking") {
      img.src = "bark.gif";
      dog = dog + 1;
    } else if (results[0].label == "meowing") {
      img.src = cat.gif;
      cat = cat + 1;
    } else {
      img.src = listen.gif;
    }
  }
}