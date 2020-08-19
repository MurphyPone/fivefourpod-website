var i = 0;
var list = [ 
            "\"A podcast about how much the supreme court sucks\"", 
            "\"The only legal podcast without a pending Title IX investigation\"", 
            "\"A podcast where we dissect and analyze the Supreme Court decisions that have made this country –by a wide margin– the worst country in the world\"", 
            "\"A podcast where we dissect and analyze Supreme Court decisions whose collective weight have crushed the American soul, like stones laid atop an accused witch\"", 
            "\"A podcast where we dissect and analyze Supreme Court decisions that have washed over American life, like waves over the rocks, reducing once proud boulders to sandy rubble\"", 
            "\"A podcast where we dissect and analyze Supreme Court decisions that have weighed down american life, like stones in the pocket of a struggling swimmer, steadily dragging him towards the bottom of the ocean while he struggles towards the surface, water slowly his lungs\"", 
            "\"A podcast where we dissect and analyze the Supreme Court cases that have slowly poisoned American life, like toxic runoff into a mountain stream\"",
            "\"A podcast where we dissect and analyze the Supreme Court cases that have eaten away at this nation, like termites in our floorboards\"",
            "\"A podcast where we dissect and analyze the Supreme Court cases that have weakened America, like rust slowly eating a steal beam\"",
            "\"A podcast where we dissect and analyze the Supreme Court cases that have left America cracked and barren, like hot sunlight beaming down on a drought-stricken plane\"",
            "\"A podcast where we dissect and analyze the Supreme Court cases that have eaten away at the fabric of American society, like moths in our collective closet\"",
            "\"A podcast where we dissect and analyze the Supreme Court cases that have latched onto American society, like viruses onto a host cell\"",
            "\"A podcast where we dissect and analyze the Supreme Court cases that hover over America, like vultures over a dying man in the desert\"",
            "\"A podcast where we dissect and analyze the Supreme Court cases that have burrowed into America's chest cavity, like that little alien in the 1979 movie Alien\"",
            "\"A podcast where we dissect and analyze the Supreme Court cases that undermined America's integrity, like water seeping into our home's foundation\"",
            "\"A podcast where we dissect and analyze the Supreme Court cases that have eaten away at America, like maggots on a rotting carcass\"",
            "\"A podcast where we dissect and analyze the cases that have swarmed American life, like locusts over a grassy plane\"",
            "\"A podcast where we dissect and analyze the Supreme Court cases that have burned through America, like a dry-season brushfire through a grassland plane\"",
            "\"A podcast where we dissect and analyze the Supreme Court cases that have clogged up the American spirit, like cholesterol in our collective aorta\"",
            "\"A podcast where we dissect and analyze the Supreme Court decicions that have born down on Americans, like unfilitered ultraviolet light on a pale, nude body\"",
            "\"A podcast where we dissect and analyze the Supreme Court cases that have leeched America's nutrients, like a tapeworm from its unsuspecting host\"",
            "\"A podcast where we dissect and analyze the Supreme Court decisions that have broken down American society, like radiation on human DNA\"",
            "\"A podcast where we dissect and analyze the Supreme Court cases that have burned through American life, like hot lava through the streets of Pompei\"",
            "\"A podcast where we dissect and analyze the Supreme Court cases that have spread like rabies through the American nervous system\"",
            "\"A podcast where we dissect and analyze the Supreme Court cases that have unraveled the fabric of American society, like a nail caught in a sweater\"" /* Boy Scouts of America v. Dale */
            ]

var txt = list[Math.floor(Math.random() * list.length)]
var sum = 0

function typeWriter() {
  var speed = 30  /* The speed/duration of the effect in milliseconds */
  // console.log(speed)
  if (i < txt.length) {
    document.getElementById("blurb").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

/// Automatic tiling thing

var title_ids = ["my-title-0", "my-title-1", "my-title-2", "my-title-3", "my-title-4", "my-title-5"]
var description_ids = ["my-description-0", "my-description-1", "my-description-2", "my-description-3", "my-description-4", "my-description-5"]
var summary_ids = ["my-summay-0", "my-summay-1", "my-summay-2", "my-summay-3", "my-summay-4", "my-summay-5"]
var card_title_ids = ["card-title-0", "card-title-1", "card-title-2", "card-title-3", "card-title-4", "card-title-5",]
var date_ids = ["my-date-0", "my-date-1", "my-date-2", "my-date-3", "my-date-4", "my-date-5"]

// for(var i = 0; i < descriptions.length; i++) {
//   var element = document.getElementById(descriptions[i])
//   console.log(element)
// }

function doLoad() {
  typeWriter() // call the typewriter
  // for(var i = 0; i < title_ids.length; i++) {
  //   var title_elem = document.getElementById(title_ids[i])
  //   var descr_elem = document.getElementById(description_ids[i])
  //   var summary_elem = document.getElementById(summary_ids[i])
  //   var date_elem = document.getElementById(date_ids[i])
  //   var card_title_elem = document.getElementById(card_title_ids[i])

  //   // read latest 6 from file
  //   var title = "title " + i
  //   var description = "description " + i
  //   var summary = "summary " + i
  //   var date = "2020, month, " + i

  //   title_elem.innerHTML = title
  //   card_title_elem.innerHTML = title
  //   descr_elem.innerHTML = summary
  //   summary_elem.innerHTML = "descr" + i
  //   date_elem.innerHTML = date
  // }
  
  
}