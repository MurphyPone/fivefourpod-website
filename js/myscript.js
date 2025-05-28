var list = [
  '"A podcast about how much the supreme court sucks"',
  '"The only legal podcast without a pending Title IX investigation"' /* bush v. gore */,
  '"A podcast where we dissect and analyze the Supreme Court decisions that have made this country –by a wide margin– the worst country in the world"' /* citizens united */,
  '"A podcast where we dissect and analyze Supreme Court decisions whose collective weight have crushed the American soul, like stones laid atop an accused witch"' /* Fisher v. University of Texas */,
  '"A podcast where we dissect and analyze Supreme Court decisions that have washed over American life, like waves over the rocks, reducing once proud boulders to sandy rubble"' /* Shelby county */,
  '"A podcast where we dissect and analyze Supreme Court decisions that have weighed down american life, like stones in the pocket of a struggling swimmer, steadily dragging him towards the bottom of the ocean while he struggles towards the surface, water slowly filling his lungs"' /* Terry v Ohio */,
  '"A podcast where we dissect and analyze the Supreme Court cases that have slowly poisoned American life, like toxic runoff into a mountain stream"' /* NFIB v. Sebelius */,
  '"A podcast where we dissect and analyze the Supreme Court cases that have eaten away at this nation, like termites in our floorboards"' /* Trumpe v. Hawaii */,
  '"A podcast where we dissect and analyze the Supreme Court cases that have weakened America, like rust slowly eating a steel beam"' /* Castle Rock v. Gonzalex */ /* Hi, fuck the supreme court, hi */ /* RNC v. DNC */,
  '"A podcast where we dissect and analyze the Supreme Court cases that have left America cracked and barren, like hot sunlight beaming down on a drought-stricken plane"' /* Kelo v. New London */,
  '"A podcast where we dissect and analyze the Supreme Court cases that have eaten away at the fabric of American society, like moths in our collective closet"' /* DC v. Heller */ /* The Biden Court */,
  '"A podcast where we dissect and analyze the Supreme Court cases that have latched onto American society, like viruses onto a host cell"' /* Amnesty International */,
  '"A podcast where we dissect and analyze the Supreme Court cases that hover over America, like vultures over a dying man in the desert"' /* Tison v. Arizona */,
  '"A podcast where we dissect and analyze the Supreme Court cases that have burrowed into America\'s chest cavity, like that little alien in the 1979 movie Alien"' /*Buck v. Bell */,
  "\"A podcast where we dissect and analyze the Supreme Court cases that undermined America's integrity, like water seeping into our home's foundation\"" /* Hobby Lobby */,
  '"A podcast where we dissect and analyze the Supreme Court cases that have eaten away at America, like maggots on a rotting carcass"' /* Hernandez v. Mesa */ /* Bostock v. Clayton county */,
  '"A podcast where we dissect and analyze the cases that have swarmed American life, like locusts over a grassy plane"' /* Exxon v. Baker */,
  '"A podcast where we dissect and analyze the Supreme Court cases that have burned through America, like a dry-season brushfire through a grassland plane"' /* qualified immunity */,
  '"A podcast where we dissect and analyze the Supreme Court cases that have clogged up the American spirit, like cholesterol in our collective aorta"' /* Janus v. AFSCME */,
  '"A podcast where we dissect and analyze the Supreme Court decicions that have born down on Americans, like unfiltered ultraviolet light on a pale, nude body"' /* Buckley v. Valeo */,
  '"A podcast where we dissect and analyze the Supreme Court cases that have leeched America\'s nutrients, like a tapeworm from its unsuspecting host"' /* Epic Systems */,
  '"A podcast where we dissect and analyze the Supreme Court decisions that have broken down American society, like radiation on human DNA"' /* Bennis v. Michigan */,
  '"A podcast where we dissect and analyze the Supreme Court cases that have burned through American life, like hot lava through the streets of Pompei"' /* term recap */,
  '"A podcast where we dissect and analyze the Supreme Court cases that have spread like rabies through the American nervous system"' /* Miliken v. Bradley */,
  '"A podcast where we dissect and analyze the Supreme Court cases that have unraveled the fabric of American society, like a nail caught in a sweater"' /* Boy Scouts v. Dale */,
  '"A podcast where we dissect and analyze the Supreme Court cases that have slowly ravaged America, like the Mongol invasions of Central Asia"' /*Nielsen v. Preap */,
  '"A podcast where we dissect and analyze the Supreme Court cases that have brought American civil rights to the brink of extinction, much like poachers have to the Leatherback sea turtles"' /* Flood v. Kuhn */,
  '"A podcast where we dissect and analyze the Supreme Court cases that have toyed with American freedoms, like a cat batting around a half-dead bird"' /* Voting Rights */,
  "\"A podcast where we dissect and analyze the Supreme Court cases that have cut off America's circulation, like Raynaud's disease\"" /* LA v. Lyons */,
  '"A podcast where we dissect and analyze the Supreme Court cases that have rained down hellfire upon us, like God onto Sodom; leaving nothing but ashes where our hopes once were"' /* ACB is a RWF */,
  '"A podcast where we dissect and analyze the Supreme Court cases that have weakened America\'s immune system, like a lifetime of poor nutrition"' /* EC Coup */,
  '"A podcast where we dissect and analyze the Supreme Court cases that have sapped oxygen from America\'s bloodstream like the novel virus COVID-19"' /* Rucho v. Common Cause */,
  '"A podcast where we dissect and analyze the Supreme Court cases that have taken control of American life, like that fungus that takes control of ants\' brains and turns them into zombies"' /* How to Diz the Courts */,
  '"A podcast where we dissect and analyze the Supreme Court cases that have left America flailing and helpless, like an outgoing president who is emotionally incapable of admitting defeat"' /* The Courts Can't Save Him */,
  '"A podcast where we dissect and analyze the Supreme Court cases that have infiltrated American life, like an invasive species"' /* AZ Free Eneterprise v. Bennett */,
  '"A podcast where we dissect and analyze the Supreme Court cases that have blocked out America\'s sun, like a California brushfire"' /*Ashcroft v. Iqbal */,
  '"A podcast where we dissect and analyze the Supreme Court cases that have coalesced like that garbage island in the Pacific Ocean; together a monument to the sheer scale of man\'s folley"' /* Roman Catholic Diocese v. Cuomo*/ /* Freedom is Contagious */,
  '"A podcast where we dissect and analyze the Supreme Court cases that have killed off our civil liberties in the service of a misguided intellectual experiment, like Edison killed Topsy the elephant"' /* Herrera v. Collins */,
  '"A podcast where we dissect and analyze the Supreme Court cases that have caused our civil liberties to disappear, like Amelia Earhart over the Pacific"' /* Roe v. Wade, Pt. 1 */,
  '"A podcast where we dissect and analyze the Supreme Court cases that have dissolved our liberties, like cotton candy into water."' /* Roe v. Wade, Pt. 2 */,
  '"A podcast where we dissect and analyze the Supreme Court cases that have, like a mighty river, wound their way over the great rock of our liberty, reducing it over many years to a canyon of despair"' /* Morse v. Frederick*/,
  '"A podcast where we dissect and analyze the Supreme Court cases that have driven our liberties to the outer edges of their habitats, like the American settlers did to the Grey Wolf"' /* Navarette v. California*/,
  '"A podcast where we dissect and analyze the Supreme Court cases that have caused our freedoms to fade away, like the colors of a painting in the sunlight"' /* US v. Morrison */,
  '"A podcast where we dissect and analyze the Supreme Court cases that have pecked away at our civil rights, like a nervous bird plucking at its feathers"' /* Atkins v. Virginia */,
  '"A podcast where we dissect and analyze the Supreme Court cases that have bulldozed our civil rights, like the Cargill corporation has bulldozed the Amazon Rainforest"' /* McCleskey v. Klemp */,
  '"A podcast where we dissect and analyze the Supreme Court cases that have dilapidated our liberty, like rising ocean temperatures have bleached the Great Barrier Reef"' /* San Antonio ISD v. Rodriguez */,
  '"A podcast where we dissect and analyze the Supreme Court cases that have conquered the peaceful island of our liberties, like the Moors conquered Sicily"' /* Scalia */,
  '"A podcast where we dissect and analyze the Supreme Court cases that have ground our liberties to the bone, like the cartilage in a veteran NBA player\'s knees"' /* Toyota v. Williams */,
  '"A podcast where we dissect and analyze the Supreme Court cases that have left our civil rights weak and emaciated, like a cat on a vegan diet"' /* Connick v. Thomspon */,
  '"A podcast where we dissect and analyze the Supreme Court cases that have rendered our liberties completely immobile, like a cargo ship turned sideways in the Suez Canal"' /* Hoffman v. NLRB */,
  '"A podcast where we dissect and analyze the Supreme Court cases that have devastated American civil liberties, like domesticated cats have devastated local bird populations"' /* Bowles v. Russell */,
  '"A podcast where we dissect and analyze the Supreme Court cases that have swarmed our nation, like a brood of cicadas"' /* Get Us to v. Seven */,
  '"A podcast where we dissect and analyze the Supreme Court cases that have frayed and flattened our civil rights, like the bristles of an overused toothbrush"' /* Jones v. Mississippi */,
  '"A podcast where we dissect and analyze the Supreme Court cases that have sent our nation\'s values spiraling downward, like Bitcoin after an Elon Musk tweet"' /* Walmart v. Dukes */,
  '"A podcast where we dissect and analyze the Supreme Court cases that have filled America\'s shoes with pebbles of injustice"' /* Smith v. Maryland */,
  '"A podcast where we dissect and analyze the Supreme Court cases that have brought American liberty to the brink of extinction, like the widespread use of DDT did to the Bald Eagle"' /* Fulton v. Philly */,
  '"A podcast where we dissect and analyze the Supreme Court cases that have left our nation parched and weak, like a record-breaking heatwave"' /* Cedar Point Nursery v. Hassid */,
  '"A podcast where we dissect and analyze the Supreme Court cases that are decimating our civil liberties, like positive marijuana tests have decimated the U.S. Olympic team"' /* Brnovich*/,
  '"A podcast where we dissect and analyze the Supreme Court cases are being force-fed to the American people, like we\'re a goose being fattened up to make Foie Gras"' /* Americans for Prosperity */,
  '"A podcast where we dissect and analyze the Supreme Court cases have caused our civil rights to collapse, like an American puppet government in the Middle East"' /* Nestle */,
  '"A podcast where we dissect and analyze the Supreme Court cases that have eaten away at our civil liberties, like rabbits to a suburban vegetable garden"' /* Welcome to Law School */,
  '"A podcast where we dissect and analyze the Supreme Court cases that have caused our civil rights to fade out of view, like a dying star in the night sky"' /* Adoptive Couple v. */,
  '"A podcast where we dissect and analyze the Supreme Court cases that have thinned the ranks of our civil rights, like vaccine mandates have thinned the ranks of our nation\'s police departments"' /* Nieves v. Bartlet*/,
  '"A podcast where we dissect and analyze the Supreme Court cases that hover menacingly over America, like Kyrsten Sinema over a clearance rack at Forever 21"' /* 21-22 term preview*/,
  '"A podcast where we dissect and analyze the Supreme Court cases that left American civil liberties brittle and weak, like the femur of a man with osteoperosis"' /* Younger v. Harris */,
  '"A podcast where we dissect and analyze the Supreme Court cases that have caused America\'s lofty promise to fall like a dying satellite slowly crashing back to earth"' /* Hamdi v. Rumsfeld */,
  '"A podcast where we dissect and analyze the Supreme Court cases that have destroyed American democracy, like the filibuster has destroyed the Senate"' /* Captured Institution */,
  '"A podcast where we dissect and analyze the Supreme Court cases that have caused our liberties to dwindle, like our honeybee populations"' /* Michigan v. EPA */,
  '"A podcast where we dissect and analyze the Supreme Court cases that have caused our rights to short circuit, like the electricity of co-host\'s home"' /* Greece v. Galloway */,
  '"A podcast where we dissect and analyze the Supreme Court cases that have delivered violence upon our civil rights, like Santa delivering gifts to children across the world, and also primarily to the benefit of wealthy Christians, in both cases"' /* how to give */,
  '"A podcast where we dissect and analyze the Supreme Court cases that have attacked our most cherished rights like an autoimmune disease attacking healthy cells."' /* Riley v. Florida */,
  '"A podcast where we dissect and analyze the Supreme Court cases that have let our rights drift ever further from us, like the decaying orbit of a distant planet from the warmth of its sun"' /* NFIB v. DOL */,
  '"A podcast where we dissect and analyze the Supreme Court cases that have abandoned the principles of our founding, like Democrats have abandoned teachers\' unions"' /* Parents Involved vs. Seattles No. 1 */,
  '"A podcast where we dissect and analyze the Supreme Court cases that have spread the seeds of hopelessness across the country, like wind to a dandelion"' /* Ingraham v. Wright */,
  '"A podcast where we dissect and analyze the Supreme Court cases that have put our rights on indefinite hold, like Delta Airlines when I try to call about the flight voucher they owe me"' /* Merrill v. Milligan */,
  '"A podcast where we dissect and analyze the Supreme Court cases that have undermined our democracy, like the CIA is undermining the Russian war effort"' /* Ginni Mayer */,
  '"A podcast where we dissect and analyze the Supreme Court cases that have sunk the ship of Liberty, like that fire sunk the ship of Audis in the Atlantic Ocean"' /* Strickland v. Washington */,
  '"A podcast where we dissect and analyze the Supreme Court cases that have stifled our liberty, like allergy season have stuffed our nasal passages"' /* Lorillard v. Reilly */,
  '"A podcast where we dissect and analyze the Supreme Court cases that have left our nation tired and overburdened, like an accountant during tax season"' /* INS */,
  '"A podcast where we dissect and analyze the Supreme Court cases that have conducted a hostile take over of our Constitution like Elon Musk is doing to Twitter"' /* Lassiter v. Department of Social Services */,
  '"A podcast where we dissect and analyze the Supreme Court cases that have left our nation frightened and cowering, like a Supreme Court Justice when peaceful protesters assemble on a nearby sidewalk"' /* United States v. Vaello Madero */,
  '"A podcast where we dissect and analyze the Supreme Court cases that have frozen our civil liberties, like my zoom freezes, every recording"' /* Whren v. United States */,
  '"A podcast where we dissect and analyze the Supreme Court cases that have sent our civil liberties into gradual decline, like the quality of Netflix\'s movie library"' /* Cruz v. FEC */,
  '"A podcast where we dissect and analyze the Supreme Court cases that have left our civil rights weak and cowering, like a police officer during a school shooting"' /* Egbert v. Boule */,
  '"A podcast where we are sad all the time"' /* Roe overturned */,
  '"A podcast where we dissect and analyze the Supreme Court cases that have buried our civil rights, like a politician burying evidence of his son\'s DUIs"' /* Shinn v. Ramirez */,
  '"A podcast where we dissect and analyze the Supreme Court cases that have devoured our civil rights, like my cat devouring the salmon I made when I\'m not looking"' /* Kennedy v. Bremerton School District */,
  '"A podcast where we dissect and analyze the Supreme Court cases that have washed away our civil rights, like the ocean will wash away our beachfront properties"' /* West Virginia v. Environmental Protection Agency */,
  "\"A podcast where we dissect and analyze the Supreme Court cases that have ruined our nation's promise, like a shark sighting ruining our producer's beach day\"" /* Oklahoma v. Castro-Huerta */,
  '"A podcast where we dissect and analyze the Supreme Court cases that have contaminated our nation, like microplastics have contaminated our bloodstreams"' /* New York State Rifle and Pistol Association v. Bruen */,
  '"A podcast where we dissect and analyze the Supreme Court cases that have eaten away at our civil liberties, like rabbits to a suburban vegetable garden"' /* Welcome to Law School (Again) */,
  '"A podcast where we dissect and analyze the Supreme Court cases that have ravaged our nation like long-COVID is ravaging my lungs"' /* Vega v. Tekoh */,
  '"A podcast where we dissect and analyze the Supreme Court cases that have killed off our civil liberties, like syphilis killed off the founding fathers"' /* Minor v. Happersett */,
  '"A podcast where we dissect and analyze the Supreme Court cases that have left our rights dark and murky, like the water in Jackson, Mississippi"' /* 2022-2023 Supreme Court Term Preview */,
  '"A podcast where we dissect and analyze the Supreme Court cases that have infested our law, like Lantern Flies have infested New York."' /* Tanner v. United States */,
  '"A podcast where we dissect and analyze the Supreme Court cases that have caused our civil rights to fall far short of their promise, like a Russell Wilson pass falling far short of his intended receiver"' /* Independent State Legislature Theory */,
  '"A podcast where we dissect and analyze the Supreme Court cases that have caused our liberty to die off, like the Alaskan Snow Crab population"' /* Bowers v. Hardwick */,
  '"A podcast where we dissect and analyze the Supreme Court cases that have banned our civil rights, like an Elon Musk parody being banned from Twitter"' /* Utah v. Strieff */,
  '"A podcast where we dissect and analyze the Supreme Court cases that have disrupted our civil rights, like the construction outside my apartment has disrupted my sleep"' /* Glossip v. Gross */,
  '"A podcast where we dissect and analyze the Supreme Court cases that have caused our nation to collapse, like Ticketmaster during a Taylor Swift presale"' /* The Pelican Brief */,
  '"A podcast where we dissect and analyze the Supreme Court cases that have caused our nation to fall short of its promise, like France in the World Cup"' /* Gift Guide 2022 */,
  '"A podcast where we promote the other projects that we\'re working on very shamelessly"' /* Outliers */,
  '"A podcast where we dissect and analyze the Supreme Court cases that have caused our nation to collapse, like my wife when she works out after forgetting to eat"' /* McDonnell v. United states */,
  '"A podcast where we dissect and analyze the Supreme Court cases that have flattened our civil rights, like a four-wheeled high flyer Phaeton carriage flattening a local street urchin"' /* Giles v. Harris */,
  '"A podcast where we dissect and analyze the Supreme Court cases that A podcast where we dissect and analyze the Supreme Court cases that have cancelled our civil liberties, like Netflix cancelling your favorite show"' /* Korematsu v. United States */,
  "\"A podcast where we A podcast where we sometiems we say that we're going to do an episode, but then we don't do an episode\"" /* Connick v. Thompson */,
  '"A podcast where we dissect and analyze the Supreme Court cases that have left our nation fatigued and struggling, like a podcaster with a sinus infection"' /* In re Gault with Josie Duffy Rice */,
  '"A podcast where we dissect and analyze the Supreme Court cases that have left us drained and dying, like an insolvent venture capital bank"' /* Boyle v. United Technologies Corporation */,
  '"We do class warfare from 9 to 5 PM everybody"' /* 5-4 x Bloc Party */,
  '"A podcast where we dissect and analyze the Supreme Court cases that are sinking our civil liberties, like Ron DeSantis sinking his fingers into a cup of pudding"' /* Cruzan v. Missouri Department of Health */,
  '"A podcast where we dissect and analyze the Supreme Court cases that have left our liberties frayed and fading like a set of Nazi linens at a billionare\'s dinner party"' /* Ewing v. California */,
  '"A podcast where we dissect and analyze the Supreme Court cases that have left our civil rights empty, like Fox News\' prime time lineup without Tucker Carlson"' /* Palmer v. Thompson */,
  '"A podcast where we dissect and analyze the Supreme Court cases that left our civil rights weak, embarrassing, and pathetic like a Twitter Blue subscriber trying to go viral"' /* The Shadow Docket with Steve Vladeck */,
  '"A podcast where we dissect and analyze the Supreme Court cases that have left our liberties ailing, like me sickly cohosts"' /* United Stats v. O'brien */,
  '"A podcast where we dissect and analyze the Supreme Court cases that are sinking our civil rights, like orcas are sinking boats off the coast of Gibraltar"' /* Sierra Club v. Morton */,
  '"A podcast where we dissect and analyze the Supreme Court cases that are destroying our rights, like a middle-aged man in Oakleys destroying a pride display at Target"' /* American Ship Building Company v. National Labor Relations Board */,
  '"A podcast where we dissect and analyze the Supreme Court cases that have ruined our country, like cops ruining a pride parade"' /* Protecting Trans Rights with Erin Reed [UNLOCKED] */,
  '"A podcast where we dissect and analyze the Supreme Court cases that have banned our civil rights, like Twitter banning its bravest and coolest posters"' /* Sacket v. EPA */,
  '"A podcast where we dissect and analyze the Supreme Court cases that have choked our civil rights, like smoke from Canadian wildfires choking New York City"' /* 303 Creative LLC v. Elenis */,
  '"A podcast where we dissect and analyze the Supreme Court cases that have weighed down our nation, like student debt weighing down a liberal arts student\'s finances"' /* Biden v. Nebraska */,
  '"A podcast where we dissect and analyze the Supreme Court cases that are imploding our civil rights, like a homemade submersible imploding at the bottom of the Atlantic"' /* DeShaney v. Winnebago County Department of Social Services */,
  '"A podcast where we dissect and analyze the Supreme Court cases that have abandoned our civil rights, like our co-host Rhiannon abandoning us when we cover 1st amendment cases"' /* Harisiades v. Shaughnessy */,
  '"A podcast where we dissect and analyze the Supreme Court cases that have left our civil rights struggling, like a young white white boy trying to get into Emory"' /* SFFA v. Harvard */,
  '"A podcast where we usually dissect and analyze the Supreme Court cases that, blah, blah, blah."' /* Welcome to Law School 2023 */,
  '"A podcast where we dissect and analyze the Supreme Court cases that are breaking our civil rights, like mercury breaking through our thermometers"' /* United States v. Sioux Nation with Nick Estes */,
  '"A podcast where we dissect and analyze the Supreme Court cases that have jerked around our civil rights, like a Republican congresswoman, jerking off her boyfriend in a public theater"' /* Hampton v. United States */,
  '"A podcast where we dissect and analyze the Supreme Court cases that have disrupted our civil rights, like shots of Taylor Swift disrupting an NFL broadcast"' /* Berghuis v. Thompkins */,
  '"A podcast where we dissect and analyze the Supreme Court cases that have interrupted the arc of history, like Michael\'s dogs interupting our recordings"' /* Geduldig v. Aiello */,
  '"A podcast about how much the Supreme Court, and apartheid, suck"' /* Palestine Legal */,
  '"A podcast where we dissect and analyze the Supreme Court decisions that have left us blinded and aimless like NFT owners after a Bored Ape yacht club event"' /* Schenck v. United States */,
  '"A podcast where we dissect and analyze the Supreme Court cases that have burned down our civil rights, like a person trying to deep-fry a turkey burning down their home"' /* Richardson v. Ramirez */,
  '"A podcast where we dissect and analyze the Supreme Court cases that have left us draped in darkness, like daylight savings time during the winter"' /* Glacier Northwest, Inc. v. International Brotherhood of Teamsters */,
  '"A podcast where we dissect and analyze the Supreme Court cases that have rescinded our civil rights, like a law firm rescinding a Palestinian activist\'s job offer"' /* How to Lose Your Job by Supporting Palestine [UNLOCKED] */,
  '"A podcast where we celebrate Christmas, guys. The birth of our Lord and savior Jesus Christ. THE OFFICIAL GOD of the 5-4 podcast"' /* The 5-4 Giving Guide 2023 */,
  '"A podcast where we dissect and analyze the Supreme Court cases that have ruined our constitution like the polar vortex is ruining my week"' /* The Federalist Society, part 1: Immodest Origins */,
  '"A podcast where we dissect and analyze the Supreme Court cases that have ruined our constitution like the polar vortex is ruining my week"' /* The Federalist Society, part 1: Immodest Origins */,
  '"A podcast where we dissect and analyze the Supreme Court cases that have torn apart our country, like award season is tearing apart my household"' /* The Federalist Society, part 2: The Debate Club */,
  '"A podcast where we dissect and analyze the Supreme Court cases that have ruined our constitution, like construction noises ruining my week"' /* The Federalist Society, part 2: The Debate Club */,
  '"A podcast where we dissect and analyze the Supreme Court cases that have caused our nation to collapse, like Kyle Shanahan in the super bowl"' /* Maryland v. Shatzer */,
  '"A podcast where we dissect and analyze the Supreme Court cases that have abandoned our civil liberties like Peter abandoning the podcast this week"' /* Trump v. Anderson */,
  '"A podcast where we dissect and analyze the Supreme Court cases that have confiscated our liberty like airport security confiscating my water bottles"' /* Illinois v. Caballes */,
  '"A podcast where we dissect and analyze the Supreme Court cases that have drained our nation, like trying to buy a house has drained me"' /* United States v. Jones */,
  '"A podcast where we dissect and analyze the Supreme Court cases that have destroyed our civil rights, like an eclipse destroying Donald Trump\'s retinas"' /* Holder v. Humanitarian Law Project */,
  '"A podcast where we dissect and analyze the Supreme Court cases that have broken our nation, like a cop on the subway breaking his Candy Crush high score"' /* Hans v. Louisiana */,
  '"A podcast where we dissect and analyze the Supreme Court cases that have failed our nation, like a future cop failing 9th grade English"' /* Free Rhiannon! Campus Protests and the First Amendment */,
  '"A podcast where we dissect and analyze the Supreme Court cases that have canceled our civil liberties, like a cowardly university cancelling commencement"' /* Maryland v. King */,
  '"A podcast where we dissect and analyze the Supreme Court cases that have flipped our civil liberties upside down, like the Alito family\'s American flag"' /* Arizona v. Navajo Nation */,
  '"A podcast where we dissect and analyze the Supreme Court cases that have wasted away our nation, like me wasting away my afternoons, playing video games"' /* Alexander v. South Carolina NAACP */,
  '"A podcast where we dissect and analyze the Supreme Court cases that have plowed through our civil liberties, like a lifted pickup plowing through a crosswalk"' /* Garland v. Cargill */,
  '"A podcast where we dissect and analyze the Supreme Court cases that have left our democracy weak and sputtering, like Joe Biden at a debate"' /* Trump v. United States */,
  '"A podcast where we dissect and analyze the Supreme Court cases that have left our civil rights confused and sad, like a young gay man just coming out of a K-hole two weeks after pride"' /* Snyder v. United States */,
  '"A podcast where we dissect and analyze the Supreme Court cases that have humiliated our nation, like me humiliating myself in front of a customer service agent"' /* Loper Bright Enterprises v. Raimondo */,
  '"A podcast where we dissect and analyze the Supreme Court cases that have sickened our nation like Olympic swimmers in the Sienet"' /* Grants Pass v. Johnson */,
  '"A podcast where we dissect and analyze the Supreme Court cases that have ravaged our nation, like racoons ravaging my trashcans"' /* Fischer v. United States */,
  '"A podcast where we dissect and analyze the Supreme Court cases that make our country bad, or whatever. No metaphor. Because ... this is a re-run"' /* Welcome to Law School 2024 */,
  '"A podcast where we dissect and analyze the Supreme Court cases that have wittled away at our nation, like sports betting apps wittling at men\'s bank accounts"' /* United States v. Stanley */,
  '"A podcast where we dissect and analyze the Supreme Court cases that have wrestled our rights to the ground like  Miami police taking down Tyreek Hill"' /* Securities and Exchange Commission v. Jarkesy */,
  '"A podcast where we dissect and analyze the Supreme Court cases that have arrested our civil liberties, like Donald Trump arresting us in four months"' /* 2024-2025 Supreme Court Term Preview */,
  '"A podcast where we dissect and analyze the Supreme Court cases that have chased away our civil liberties, like Michael\'s dog chasing away a coyote"' /* Mackenzie v. Hare */,
  '"A podcast where we dissect and analyze the Supreme Court cases that have brought our nation\'s progress to a halt, like Donald Trump bringing a town hall to a halt so he can listen to music"' /* The Coming Battle Over Reproductive Rights */,
  '"A podcast where we dissect and analyze the Supreme Court cases that have left our nation wandering aimlessly, like me a Trader Joe\'s looking for snacks"' /* Elon Musk’s War on Workers */,
  '"A podcast where we dissect and analyze the Supreme Court cases that have steered our country toward disaster like Kamala Harris steering a hurricane toward red counties"', /* The Year Ahead for Trans Rights [UNLOCKED] */,
  '"A podcast where we dissect and analyze the Supreme Court cases that have left us abandoned, like Hispanic men abandoning the Democratic party"' /* First as Farce, Then as Tragedy */,
  '"A podcast where we dissect and analyze the Supreme Court cases that have left us pathetic and flailing like Drake suing Kendrick Lamar\'s label"' /* United States v 95 Barrels of Vinegar */,
  '"A podcast where we dissect and analyze the Supreme Court cases that have been stalking our civil rights, like drones stalking New Jersey"' /* The 2024 5-4 Giving Guide */,
  '"A podcast where we dissect and analyze the Supreme Court cases that have annexed our civil right, like Trump\'s gonna annex Greenland"' /* 5-4 x Know Your Enemy: Trump 2.0 and the Courts */,
  '"A podcast where we dissect and analyze the Supreme Court cases that have caused our civil rights to collapse, like the inaugural stage beneath Donald Trump"' /* Murphy v. NCAA */,
  '"A podcast where we dissect and analyze the Supreme Court cases that have left our civil rights snowed in, like Rhiannon when it snows half an inch in Texas"' /* Tik Tok v. Garland */,
  '"A podcast where we dissect and analyze the Supreme Court cases that have eliminated our civil rights like Donald Trump eliminating entire federal agencies"' /* Trump's Opening Salvo */,
  '"A podcast where we dissect and analyze the Supreme Court cases that have frozen our civil liberties, like Donald Trump freezing the federal budget"' /* Your Trump 2.0 Questions, Answered [UNLOCKED] */,
  '"A podcast where we dissect and analyze the Supreme Court cases that have poked holes in our civil rights, like Elon Musk poking holes in his brain with amphetamines"' /* NIFLA v. Becerra [UNLOCKED] */,
  '"A podcast where we dissect and analyze the Supreme Court cases that have our civil liberties falling from the sky like airplanes during the Trump administration"' /* McCutcheon v. FEC */,
  '"A podcast where we dissect and analyze the Supreme Court cases that have caused our civil rights to collapse like the stock market under Donald Trump."' /* San Francisco v. EPA */,
  '"A podcast where we dissect and analyze the Supreme Court cases that have caused our civil rights to fall apart like my March Madness bracket on day one."'/* Mobile v. Bolden */,
  '"A podcast where we dissect and analyze the Supreme Court cases that have caused our civil liberties to decline, like Tesla\'s sales figures."'/* Department of State v. Muñoz */,
  '"A podcast where we dissect and analyze the Supreme Court cases that have destabilized our civil rights like Trump destabilizing the economy."'/* Trump v. J.G.G. */,
  '"A podcast where we dissect and analyze the Supreme Court cases that are bankrupting our civil rights like the words "please" and "thank you" are bankrupting OpenAI"'/* US v. Zubaydah */,
  '"A podcast where we dissect and analyze the Supreme Court cases that have radicalized our nation like group chats radicalizing our nation\'s billionaires"'/* Hazelwood School District v. Kuhlmeier */,
  '"A podcast where we dissect and analyze the Supreme Court cases that have killed off our civil rights, like old age killing off congressional democrats"'/* Jones v. North Carolina Prisoners' Labor Union */,
];

var txt = list[Math.floor(Math.random() * list.length)];
var sum = 0;

var t = 0;
function typeWriter() {
  var speed = 30; /* The speed/duration of the effect in milliseconds */

  // console.log(speed)
  if (t < txt.length) {
    document.getElementById("blurb").innerHTML += txt.charAt(t);
    t++;
    setTimeout(typeWriter, speed);
  }
}

/// Automatic tiling thing
var title_ids = [
  "my-title-0",
  "my-title-1",
  "my-title-2",
  "my-title-3",
  "my-title-4",
  "my-title-5",
];
var description_ids = [
  "my-description-0",
  "my-description-1",
  "my-description-2",
  "my-description-3",
  "my-description-4",
  "my-description-5",
];
var summary_ids = [
  "my-summay-0",
  "my-summay-1",
  "my-summay-2",
  "my-summay-3",
  "my-summay-4",
  "my-summay-5",
];
var card_title_ids = [
  "card-title-0",
  "card-title-1",
  "card-title-2",
  "card-title-3",
  "card-title-4",
  "card-title-5",
];
var date_ids = [
  "my-date-0",
  "my-date-1",
  "my-date-2",
  "my-date-3",
  "my-date-4",
  "my-date-5",
];

function doLoad() {
  typeWriter(); // call the typewriter
  parseCSV();
}

function parseCSV() {
  d3.csv("scripts/latest.csv").then(function (data) {
    // console.log(data);
    for (var i = 0; i < title_ids.length; i++) {
      // console.log(data[i])
      var title_elem = document.getElementById(title_ids[i]);
      var descr_elem = document.getElementById(description_ids[i]);
      var summary_elem = document.getElementById(summary_ids[i]);
      var date_elem = document.getElementById(date_ids[i]);
      var card_title_elem = document.getElementById(card_title_ids[i]);

      title_elem.innerHTML = data[i]["title"];
      card_title_elem.innerHTML = data[i]["title"];
      descr_elem.innerHTML = cleanSummary(data[i]["summary"]);
      summary_elem.innerHTML = data[i]["summary"];
      date_elem.innerHTML = data[i]["date"];
    }
  });
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function cleanSummary(summary) {
  var pronouns = [
    "The hosts",
    "The fellas and Rhiannon",
    "Rhiannon and the guys",
    "The legal folks",
    "Peter, Michael, and Rhiannon",
    "Michael, Peter, and Rhiannon",
    "Rhiannon, Michael, and Peter",
  ];
  var pronoun = pronouns[getRandomInt(pronouns.length - 1)];
  return summary.replace(
    "On this week’s episode of 5-4, Peter (@The_Law_Boy), Rhiannon (@AywaRhiannon), and Michael (@_FleerUltra)",
    pronoun
  );
}
