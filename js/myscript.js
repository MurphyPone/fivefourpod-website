var list = [ 
            "\"A podcast about how much the supreme court sucks\"", 
            "\"The only legal podcast without a pending Title IX investigation\"", /* bush v. gore */
            "\"A podcast where we dissect and analyze the Supreme Court decisions that have made this country –by a wide margin– the worst country in the world\"", /* citizens united */
            "\"A podcast where we dissect and analyze Supreme Court decisions whose collective weight have crushed the American soul, like stones laid atop an accused witch\"", /* Fisher v. University of Texas */
            "\"A podcast where we dissect and analyze Supreme Court decisions that have washed over American life, like waves over the rocks, reducing once proud boulders to sandy rubble\"", /* Shelby county */
            "\"A podcast where we dissect and analyze Supreme Court decisions that have weighed down american life, like stones in the pocket of a struggling swimmer, steadily dragging him towards the bottom of the ocean while he struggles towards the surface, water slowly filling his lungs\"", /* Terry v Ohio */
            "\"A podcast where we dissect and analyze the Supreme Court cases that have slowly poisoned American life, like toxic runoff into a mountain stream\"", /* NFIB v. Sebelius */
            "\"A podcast where we dissect and analyze the Supreme Court cases that have eaten away at this nation, like termites in our floorboards\"", /* Trumpe v. Hawaii */
            "\"A podcast where we dissect and analyze the Supreme Court cases that have weakened America, like rust slowly eating a steel beam\"", /* Castle Rock v. Gonzalex */ /* Hi, fuck the supreme court, hi */ /* RNC v. DNC */
            "\"A podcast where we dissect and analyze the Supreme Court cases that have left America cracked and barren, like hot sunlight beaming down on a drought-stricken plane\"", /* Kelo v. New London */
            "\"A podcast where we dissect and analyze the Supreme Court cases that have eaten away at the fabric of American society, like moths in our collective closet\"", /* DC v. Heller */ /* The Biden Court */
            "\"A podcast where we dissect and analyze the Supreme Court cases that have latched onto American society, like viruses onto a host cell\"", /* Amnesty International */ 
            "\"A podcast where we dissect and analyze the Supreme Court cases that hover over America, like vultures over a dying man in the desert\"", /* Tison v. Arizona */
            "\"A podcast where we dissect and analyze the Supreme Court cases that have burrowed into America's chest cavity, like that little alien in the 1979 movie Alien\"", /*Buck v. Bell */
            "\"A podcast where we dissect and analyze the Supreme Court cases that undermined America's integrity, like water seeping into our home's foundation\"", /* Hobby Lobby */
            "\"A podcast where we dissect and analyze the Supreme Court cases that have eaten away at America, like maggots on a rotting carcass\"", /* Hernandez v. Mesa */ /* Bostock v. Clayton county */
            "\"A podcast where we dissect and analyze the cases that have swarmed American life, like locusts over a grassy plane\"", /* Exxon v. Baker */
            "\"A podcast where we dissect and analyze the Supreme Court cases that have burned through America, like a dry-season brushfire through a grassland plane\"", /* qualified immunity */
            "\"A podcast where we dissect and analyze the Supreme Court cases that have clogged up the American spirit, like cholesterol in our collective aorta\"", /* Janus v. AFSCME */
            "\"A podcast where we dissect and analyze the Supreme Court decicions that have born down on Americans, like unfilitered ultraviolet light on a pale, nude body\"", /* Buckley v. Valeo */
            "\"A podcast where we dissect and analyze the Supreme Court cases that have leeched America's nutrients, like a tapeworm from its unsuspecting host\"",  /* Epic Systems */
            "\"A podcast where we dissect and analyze the Supreme Court decisions that have broken down American society, like radiation on human DNA\"", /* Bennis v. Michigan */
            "\"A podcast where we dissect and analyze the Supreme Court cases that have burned through American life, like hot lava through the streets of Pompei\"", /* term recap */
            "\"A podcast where we dissect and analyze the Supreme Court cases that have spread like rabies through the American nervous system\"", /* Miliken v. Bradley */
            "\"A podcast where we dissect and analyze the Supreme Court cases that have unraveled the fabric of American society, like a nail caught in a sweater\"", /* Boy Scouts v. Dale */
            "\"A podcast where we dissect and analyze the Supreme Court cases that have slowly ravaged America, like the Mongol invasions of Central Asia\"", /*Nielsen v. Preap */
            "\"A podcast where we dissect and analyze the Supreme Court cases that have brought American civil rights to the brink of extinction, much like poachers have to the Leatherback sea turtles\"", /* Flood v. Kuhn */
            "\"A podcast where we dissect and analyze the Supreme Court cases that have toyed with American freedoms, like a cat batting around a half-dead bird\"", /* Voting Rights */
            "\"A podcast where we dissect and analyze the Supreme Court cases that have cut off America's circulation, like Raynaud's disease\"", /* LA v. Lyons */
            "\"A podcast where we dissect and analyze the Supreme Court cases that have rained down hellfire upon us, like God onto Sodom; leaving nothing but ashes where our hopes once were\"", /* ACB is a RWF */
            "\"A podcast where we dissect and analyze the Supreme Court cases that have weakened America's immune system, like a lifetime of poor nutrition\"",  /* EC Coup */
            "\"A podcast where we dissect and analyze the Supreme Court cases that have sapped oxygen from America's bloodstream like the novel virus COVID-19\"",  /* Rucho v. Common Cause */
            "\"A podcast where we dissect and analyze the Supreme Court cases that have taken control of American life, like that fungus that takes control of ants' brains and turns them into zombies\"", /* How to Diz the Courts */
            "\"A podcast where we dissect and analyze the Supreme Court cases that have left America flailing and helpless, like an outgoing president who is emotionally incapable of admitting defeat\"", /* The Courts Can't Save Him */
            "\"A podcast where we dissect and analyze the Supreme Court cases that have infiltrated American life, like an invasive species\"", /* AZ Free Eneterprise v. Bennett */
            "\"A podcast where we dissect and analyze the Supreme Court cases that have blocked out America's sun, like a California brushfire\"", /*Ashcroft v. Iqbal */
            "\"A podcast where we dissect and analyze the Supreme Court cases that have coalesced like that garbage island in the Pacific Ocean; together a monument to the sheer scale of man's folley\"", /* Roman Catholic Diocese v. Cuomo*/ /* Freedom is Contagious */
            "\"A podcast where we dissect and analyze the Supreme Court cases that have killed off our civil liberties in the service of a misguided intellectual experiment, like Edison killed Topsy the elephant\"", /* Herrera v. Collins */
            "\"A podcast where we dissect and analyze the Supreme Court cases that have caused our civil liberties to disappear, like Amelia Earhart over the Pacific\"", /* Roe v. Wade, Pt. 1 */
            "\"A podcast where we dissect and analyze the Supreme Court cases that have dissolved our liberties, like cotton candy into water.\"", /* Roe v. Wade, Pt. 2 */
            "\"A podcast where we dissect and analyze the Supreme Court cases that have, like a mighty river, wound their way over the great rock of our liberty, reducing it over many years to a canyon of despair\"", /* Morse v. Frederick*/
            "\"A podcast where we dissect and analyze the Supreme Court cases that have driven our liberties to the outer edges of their habitats, like the American settlers did to the Grey Wolf\"", /* Navarette v. California*/
            "\"A podcast where we dissect and analyze the Supreme Court cases that have caused our freedoms to fade away, like the colors of a painting in the sunlight\"", /* US v. Morrison */
            "\"A podcast where we dissect and analyze the Supreme Court cases that have pecked away at our civil rights, like a nervous bird plucking at its feathers\"", /* Atkins v. Virginia */
            "\"A podcast where we dissect and analyze the Supreme Court cases that have bulldozed our civil rights, like the Cargill corporation has bulldozed the Amazon Rainforest\"", /* McCleskey v. Klemp */
            "\"A podcast where we dissect and analyze the Supreme Court cases that have dilapidated our liberty, like rising ocean temperatures have bleached the Great Barrier Reef\"", /* San Antonio ISD v. Rodriguez */
            "\"A podcast where we dissect and analyze the Supreme Court cases that have conquered the peaceful island of our liberties, like the Moors conquered Sicily\"", /* Scalia */
            "\"A podcast where we dissect and analyze the Supreme Court cases that have ground our liberties to the bone, like the cartilage in a veteran NBA player's knees\"", /* Toyota v. Williams */
            "\"A podcast where we dissect and analyze the Supreme Court cases that have left our civil rights weak and emaciated, like a cat on a vegan diet\"", /* Connick v. Thomspon */
            "\"A podcast where we dissect and analyze the Supreme Court cases that have rendered our liberties completely immobile, like a cargo ship turned sideways in the Suez Canal\"", /* Hoffman v. NLRB */
            "\"A podcast where we dissect and analyze the Supreme Court cases that have devastated American civil liberties, like domesticated cats have devastated local bird populations\"", /* Bowles v. Russell */
            "\"A podcast where we dissect and analyze the Supreme Court cases that have swarmed our nation, like a brood of cicadas\"", /* Get Us to v. Seven */
            "\"A podcast where we dissect and analyze the Supreme Court cases that have frayed and flattened our civil rights, like the bristles of an overused toothbrush\"", /* Jones v. Mississippi */
            "\"A podcast where we dissect and analyze the Supreme Court cases that have sent our nation's values spiraling downward, like Bitcoin after an Elon Musk tweet\"", /* Walmart v. Dukes */
            "\"A podcast where we dissect and analyze the Supreme Court cases that have filled America's shoes with pebbles of injustice\"", /* Smith v. Maryland */ 
            "\"A podcast where we dissect and analyze the Supreme Court cases that have brought American liberty to the brink of extinction, like the widespread use of DDT did to the Bald Eagle\"", /* Fulton v. Philly */ 
            "\"A podcast where we dissect and analyze the Supreme Court cases that have left our nation parched and weak, like a record-breaking heatwave\"", /* Cedar Point Nursery v. Hassid */ 
            "\"A podcast where we dissect and analyze the Supreme Court cases that are decimating our civil liberties, like positive marijuana tests have decimated the U.S. Olympic team\"", /* Brnovich*/
            "\"A podcast where we dissect and analyze the Supreme Court cases are being force-fed to the American people, like we're a goose being fattened up to make Foie Gras\"", /* Americans for Prosperity */
            "\"A podcast where we dissect and analyze the Supreme Court cases have caused our civil rights to collapse, like an American puppet government in the Middle East\"", /* Nestle */
            "\"A podcast where we dissect and analyze the Supreme Court cases that have eaten away at our civil liberties, like rabbits to a suburban vegetable garden\"", /* Welcome to Law School */
            "\"A podcast where we dissect and analyze the Supreme Court cases that have caused our civil rights to fade out of view, like a dying star in the night sky\"",  /* Adoptive Couple v. */
            "\"A podcast where we dissect and analyze the Supreme Court cases that have thinned the ranks of our civil rights, like vaccine mandates have thinned the ranks of our nation's police departments\"", /* Nieves v. Bartlet*/
            "\"A podcast where we dissect and analyze the Supreme Court cases that hover menacingly over America, like Kyrsten Sinema over a clearance rack at Forever 21\"", /* 21-22 term preview*/
            "\"A podcast where we dissect and analyze the Supreme Court cases that left American civil liberties brittle and weak, like the femur of a man with osteoperosis\"", /* Younger v. Harris */
            "\"A podcast where we dissect and analyze the Supreme Court cases that have caused America's lofty promise to fall like a dying satellite slowly crashing back to earth\"", /* Hamdi v. Rumsfeld */
            "\"A podcast where we dissect and analyze the Supreme Court cases that have destroyed American democracy, like the filibuster has destroyed the Senate\"", /* Captured Institution */
            "\"A podcast where we dissect and analyze the Supreme Court cases that have caused our liberties to dwindle, like our honeybee populations\"", /* Michigan v. EPA */
            "\"A podcast where we dissect and analyze the Supreme Court cases that have caused our rights to short circuit, like the electricity of co-host's home\"", /* Greece v. Galloway */
            "\"A podcast where we dissect and analyze the Supreme Court cases that have delivered violence upon our civil rights, like Santa delivering gifts to children across the world, and also primarily to the benefit of wealthy Christians, in both cases\"", /* how to give */
            "\"A podcast where we dissect and analyze the Supreme Court cases that have attacked our most cherished rights like an autoimmune disease attacking healthy cells.\"", /* Riley v. Florida */
            "\"A podcast where we dissect and analyze the Supreme Court cases that have let our rights drift ever further from us, like the decaying orbit of a distant planet from the warmth of its sun\"", /* NFIB v. DOL */
            "\"A podcast where we dissect and analyze the Supreme Court cases that have abandoned the principles of our founding, like Democrats have abandoned teachers' unions\"", /* Parents Involved vs. Seattles No. 1 */
            "\"A podcast where we dissect and analyze the Supreme Court cases that have spread the seeds of hopelessness across the country, like wind to a dandelion\"", /* Ingraham v. Wright */
            "\"A podcast where we dissect and analyze the Supreme Court cases that have put our rights on indefinite hold, like Delta Airlines when I try to call about the flight voucher they owe me\"", /* Merrill v. Milligan */
            "\"A podcast where we dissect and analyze the Supreme Court cases that have undermined our democracy, like the CIA is undermining the Russian war effort\"", /* Ginni Mayer */
            "\"A podcast where we dissect and analyze the Supreme Court cases that have sunk the ship of Liberty, like that fire sunk the ship of Audis in the Atlantic Ocean\"", /* Strickland v. Washington */
            "\"A podcast where we dissect and analyze the Supreme Court cases that have stifled our liberty, like allergy season have stuffed our nasal passages\"", /* Lorillard v. Reilly */
            "\"A podcast where we dissect and analyze the Supreme Court cases that have left our nation tired and overburdened, like an accountant during tax season\"", /* INS */
            "\"A podcast where we dissect and analyze the Supreme Court cases that have conducted a hostile take over of our Constitution like Elon Musk is doing to Twitter\"", /* Lassiter v. Department of Social Services */
            "\"A podcast where we dissect and analyze the Supreme Court cases that have left our nation frightened and cowering, like a Supreme Court Justice when peaceful protesters assemble on a nearby sidewalk\"" /* United States v. Vaello Madero */
          ]

var txt = list[Math.floor(Math.random() * list.length)]
var sum = 0

var t = 0;
function typeWriter() {
  var speed = 30  /* The speed/duration of the effect in milliseconds */
    
  // console.log(speed)
  if (t < txt.length) {
    document.getElementById("blurb").innerHTML += txt.charAt(t);
    t++;
    setTimeout(typeWriter, speed);
  }
}

/// Automatic tiling thing
var title_ids = ["my-title-0", "my-title-1", "my-title-2", "my-title-3", "my-title-4", "my-title-5"]
var description_ids = ["my-description-0", "my-description-1", "my-description-2", "my-description-3", "my-description-4", "my-description-5"]
var summary_ids = ["my-summay-0", "my-summay-1", "my-summay-2", "my-summay-3", "my-summay-4", "my-summay-5"]
var card_title_ids = ["card-title-0", "card-title-1", "card-title-2", "card-title-3", "card-title-4", "card-title-5",]
var date_ids = ["my-date-0", "my-date-1", "my-date-2", "my-date-3", "my-date-4", "my-date-5"]


function doLoad() {
  typeWriter() // call the typewriter
  parseCSV()
}

function parseCSV() {
  d3.csv("scripts/latest.csv").then(
    function(data) {
      // console.log(data);
      for(var i = 0; i < title_ids.length; i++) {
        // console.log(data[i])
        var title_elem = document.getElementById(title_ids[i])
        var descr_elem = document.getElementById(description_ids[i])
        var summary_elem = document.getElementById(summary_ids[i])
        var date_elem = document.getElementById(date_ids[i])
        var card_title_elem = document.getElementById(card_title_ids[i])
    
        title_elem.innerHTML = data[i]['title']
        card_title_elem.innerHTML = data[i]['title']
        descr_elem.innerHTML = cleanSummary(data[i]['summary'])
        summary_elem.innerHTML = data[i]['summary']
        date_elem.innerHTML = data[i]['date']
      }
    }
  );
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}


function cleanSummary(summary) {
  var pronouns = [
    'The hosts',
    'The fellas and Rhiannon',
    'Rhiannon and the guys',
    'The legal folks',
    'Peter, Michael, and Rhiannon',
    'Michael, Peter, and Rhiannon',
    'Rhiannon, Michael, and Peter'
  ]
  var pronoun = pronouns[getRandomInt(pronouns.length - 1)]
  return summary.replace("On this week’s episode of 5-4, Peter (@The_Law_Boy), Rhiannon (@AywaRhiannon), and Michael (@_FleerUltra)", pronoun)
}
