let searchIndex = [
    {
        title: `Bush v. Gore`,
        date: `FEB 25, 2020`,
        slug: `bush-v-gore`,
        content: ``,
        description: `The debut episode of 5-4, presented by Leon Neyfakh (@leoncrawl) and hosted by Peter (@The_Law_Boy), Rhiannon (@AywaRhiannon), and Michael (@_FleerUltra), focuses on the ruling that ended the 2000 Florida recount and put George W. Bush in the White House.`,
        blurb: `The only legal podcast without a pending Title IX investigation`,
        index: 1
    },
    {
        title: `Citizens United v. FEC`,
        date: `MAR 3, 2020`,
        slug: `citizens-united-v-fec`,
        content: ``,
        description: `On the second episode of 5-4, Peter (@The_Law_Boy), Rhiannon (@AywaRhiannon), and Michael (@_FleerUltra), talk about the 2010 ruling that used the First Amendment as a basis for unleashing corporate spending in politics.`,
        blurb: `A podcast about how much the supreme court sucks`,
        index: 2
    },
    {
        title: `Fisher v. University of Texas`,
        date: `MAR 10, 2020`,
        slug: `fisher-v-university-of-texas`,
        content: ``,
        description: `On the third episode of 5-4, Peter (@The_Law_Boy), Rhiannon (@AywaRhiannon), and Michael (@_FleerUltra) talk about the affirmative action case that flipped the Equal Protection Clause on its head.`,
        blurb: `A podcast where we dissect and analyze Supreme Court decisions whose collective weight have crushed the American soul, like stones laid atop an accused witch`,
        index: 3
    },
    {
        title: `Shelby County v. Holder`,
        date: `MAR 17, 2020`,
        slug: `shelby-county-v-holder`,
        content: ``,
        description: `On the fourth episode of 5-4, Peter (@The_Law_Boy), Rhiannon (@AywaRhiannon), and Michael (@_FleerUltra) talk about the 2013 ruling by the Roberts Court that defanged a key component of the Voting Rights Act.`,
        blurb: `A podcast where we dissect and analyze Supreme Court decisions that have washed over American life, like waves over the rocks, reducing once proud boulders to sandy rubble`,
        index: 4
    },
    {
        title: `Terry v. Ohio`,
        date: `MAR 24, 2020`,
        slug: `terry-v-ohio`,
        content: ``,
        description: `On the fifth episode of 5-4, Peter (@The_Law_Boy), Rhiannon (@AywaRhiannon), and Michael (@_FleerUltra) talk about the 1968 ruling by the Warren Court that that paved the way for stop-and-frisk laws around the country.`,
        blurb: `A podcast where we dissect and analyze Supreme Court decisions that have weighed down american life, like stones in the pocket of a struggling swimmer, steadily dragging him towards the bottom of the ocean while he struggles towards the surface, water slowly filling his lungs`,
        index: 5
    },
    {
        title: `NFIB v. Sebelius`,
        date: `MAR 31, 2020`,
        slug: `nfib-v-sebelius`,
        content: ``,
        description: `On the sixth episode of 5-4, Peter (@The_Law_Boy), Rhiannon (@AywaRhiannon), and Michael (@_FleerUltra) take on the Obamacare ruling in 2012, which isn’t as great as ACA fans might think.`,
        blurb: `A podcast where we dissect and analyze the Supreme Court cases that have slowly poisoned American life, like toxic runoff into a mountain stream`,
        index: 6
    },
    {
        title: `Trump v. Hawaii`,
        date: `APR 7, 2020`,
        slug: `trump-v-hawaii`,
        content: ``,
        description: `On the seventh episode of 5-4, Peter (@The_Law_Boy), Rhiannon (@AywaRhiannon), and Michael (@_FleerUltra) talk about the 2018 travel ban case, which tested the Supreme Court’s willingness to serve as a check on Donald Trump.`,
        blurb: `A podcast where we dissect and analyze the Supreme Court cases that have eaten away at this nation, like termites in our floorboards`,
        index: 7
    },
    {
        title: `Emergency Episode: RNC v. DNC`,
        date: `APR 8, 2020`,
        slug: `emergency-episode--rnc-v-dnc`,
        content: ``,
        description: `On a special episode of 5-4, Peter (@The_Law_Boy), Rhiannon (@AywaRhiannon), and Michael (@_FleerUltra) talk about the Supreme Court’s decision to block the state of Wisconsin from accepting late absentee ballots in the midst of the COVID-19 pandemic.`,
        blurb: `Hi, fuck the Supreme Court, hi`,
        index: 8
    },
    {
        title: `Castle Rock v. Gonzalez`,
        date: `APR 14, 2020`,
        slug: `castle-rock-v-gonzalez`,
        content: ``,
        description: `On the ninth episode of 5-4, Peter (@The_Law_Boy), Rhiannon (@AywaRhiannon), and Michael (@_FleerUltra) talk about a domestic violence case in Colorado that led to the death of three children and a Supreme Court ruling that affirmed a broad vision of police discretion.`,
        blurb: `A podcast where we dissect and analyze the Supreme Court cases that have weakened America, like rust slowly eating a steel beam`,
        index: 9
    },
    {
        title: `Kelo v. New London`,
        date: `APR 21, 2020`,
        slug: `kelo-v-new-london`,
        content: ``,
        description: `On the tenth episode of 5-4, Peter (@The_Law_Boy), Rhiannon (@AywaRhiannon), and Michael (@_FleerUltra) take aim at the liberals on the Court who ruled that the government can seize people’s land and hand it over to private developers.`,
        blurb: `A podcast where we dissect and analyze the Supreme Court cases that have left America cracked and barren, like hot sunlight beaming down on a drought-stricken plane`,
        index: 10
    },
    {
        title: `DC v. Heller`,
        date: `APR 28, 2020`,
        slug: `dc-v-heller`,
        content: ``,
        description: `On the eleventh episode of 5-4, Peter (@The_Law_Boy), Rhiannon (@AywaRhiannon), and Michael (@_FleerUltra) discuss the 2008 ruling that granted individuals the right to own guns, breaking with more than a century of precedent.`,
        blurb: `A podcast where we dissect and analyze the Supreme Court cases that have eaten away at the fabric of American society, like moths in our collective closet`,
        index: 11
    },
    {
        title: `The Biden Court`,
        date: `May 5, 2020`,
        slug: `the-biden-court`,
        content: ``,
        description: `On this week’s episode of 5-4, Peter (@The_Law_Boy), Rhiannon (@AywaRhiannon), and Michael (@_FleerUltra) discuss what’s at stake for the Supreme Court in the 2020 election, and what the Court might look like under Joe Biden.`,
        blurb: `The first in an ongoing series of non-case episodes`,
        index: 12
    },
    {
        title: `Clapper v. Amnesty International`,
        date: `May 12, 2020`,
        slug: `clapper-v-amnesty-international`,
        content: ``,
        description: `On this week’s episode of 5-4, Peter (@The_Law_Boy), Rhiannon (@AywaRhiannon), and Michael (@_FleerUltra) discuss a 2013 case that tested the National Security Administration's ability to conduct surveillance on Americans without probable cause.`,
        blurb: `A podcast where we dissect and analyze the Supreme Court cases that have latched onto American society, like viruses onto a host cell`,
        index: 13
    },
    {
        title: `Tison v. Arizona`,
        date: `May 19, 2020`,
        slug: `tison-v-arizona`,
        content: ``,
        description: `On this week’s episode of 5-4, Peter (@The_Law_Boy), Rhiannon (@AywaRhiannon), and Michael (@_FleerUltra) discuss a 1987 case on felony murder, and whether it’s eligible for the death penalty.`,
        blurb: `A podcast where we dissect and analyze the Supreme Court cases that hover over America, like vultures over a dying man in the desert`,
        index: 14
    },
    {
        title: `Buck v. Bell`,
        date: `May 26, 2020`,
        slug: `buck-v-bell`,
        content: ``,
        description: `On this week’s episode of 5-4, Peter (@The_Law_Boy), Rhiannon (@AywaRhiannon), and Michael (@_FleerUltra) go back to a 1927 case that gave rise to eugenics programs throughout the US.`,
        blurb: `A podcast where we dissect and analyze the Supreme Court cases that have burrowed into America's chest cavity, like that little alien in the 1979 movie Alien`,
        index: 15
    },
    {
        title: `Burwell v. Hobby Lobby`,
        date: `JUN 2, 2020`,
        slug: `burwell-v-hobby-lobby`,
        content: ``,
        description: `On this week’s episode of 5-4, Peter (@The_Law_Boy), Rhiannon (@AywaRhiannon), and Michael (@_FleerUltra) talk about the religious freedoms enjoyed by corporations.`,
        blurb: `A podcast where we dissect and analyze the Supreme Court cases that undermined America's integrity, like water seeping into our home's foundation`,
        index: 16
    },
    {
        title: `Hernandez v. Mesa`,
        date: `JUN 9, 2020`,
        slug: `hernandez-v-mesa`,
        content: ``,
        description: `On this week’s episode of 5-4, Peter (@The_Law_Boy), Rhiannon (@AywaRhiannon), and Michael (@_FleerUltra) talk about a case involving a Border Patrol agent who shot a teenager across the U.S.-Mexico border. The hosts are joined by Steven Vladeck, who argued the case before the Supreme Court on behalf of the victim’s family.`,
        blurb: `A podcast where we dissect and analyze the Supreme Court cases that have eaten away at America, like maggots on a rotting carcass`,
        index: 17
    },
    {
        title: `Bostock v. Clayton County, Georgia`,
        date: `JUN 16, 2020`,
        slug: `bostock-v-clayton-county-georgia`,
        content: ``,
        description: `On this week’s bonus episode of 5-4, Peter (@The_Law_Boy), Rhiannon (@AywaRhiannon), and Michael (@_FleerUltra) talk about the Court’s surprise decision affirming that the Civil Rights Act prevents employers from discriminating against people on the basis of their gender identity or sexual orientation. The hosts pay special attention to Justice Alito’s special dissent.`,
        blurb: `Emergency Episode!`,
        index: 18
    },
    {
        title: `Exxon Shipping v. Baker`,
        date: `JUN 17, 2020`,
        slug: `exxon-shipping-v-baker`,
        content: ``,
        description: `On this week’s episode of 5-4, Peter (@The_Law_Boy), Rhiannon (@AywaRhiannon), and Michael (@_FleerUltra) discuss a decision that limited damages in the case of the Exxon Valdez oil spill, one of the worst environmental disasters in US history. The ruling also capped damages that can be sought in all maritime law cases.`,
        blurb: `A podcast where we dissect and analyze the cases that have swarmed American life, like locusts over a grassy plane`,
        index: 19
    },
    {
        title: `Qualified Immunity`,
        date: `JUN 23, 2020`,
        slug: `qualified-immunity`,
        content: ``,
        description: `On this week’s episode of 5-4, Peter (@The_Law_Boy), Rhiannon (@AywaRhiannon), and Michael (@_FleerUltra) examine the doctrine of qualified immunity, which protects police and other officials from being sued for civil rights and other abuses.`,
        blurb: `A podcast where we dissect and analyze the Supreme Court cases that have burned through America, like a dry-season brushfire through a grassland plane`,
        index: 20
    },
    {
        title: `Janus v. AFSCME`,
        date: `JUN 30, 2020`,
        slug: `janus-v-afscme`,
        content: ``,
        description: `On this week’s episode of 5-4, Peter (@The_Law_Boy), Rhiannon (@AywaRhiannon), and Michael (@_FleerUltra) are joined by special guest Sam Bagenstos, professor at the University of Michigan Law School, to discuss a case that made it harder for unions to collect fees.`,
        blurb: `A podcast where we dissect and analyze the Supreme Court cases that have clogged up the American spirit, like cholesterol in our collective aorta`,
        index: 21
    },
    {
        title: `Buckley v. Valeo`,
        date: `JUL 7, 2020`,
        slug: `buckley-v-valeo`,
        content: ``,
        description: `On this week’s episode of 5-4, Peter (@The_Law_Boy), Rhiannon (@AywaRhiannon), and Michael (@_FleerUltra) talk about campaign finance in Buckley v. Valeo. The decision established that, when it comes to elections, money is speech based on the First Amendment.`,
        blurb: `A podcast where we dissect and analyze the Supreme Court decicions that have born down on Americans, like unfiltered ultraviolet light on a pale, nude body`,
        index: 22
    },
    {
        title: `Epic Systems v. Lewis`,
        date: `JUL 14, 2020`,
        slug: `epic-systems-v-lewis`,
        content: ``,
        description: `On this week’s episode of 5-4, Peter (@The_Law_Boy), Rhiannon (@AywaRhiannon), and Michael (@_FleerUltra) discuss a decision that let employers pressure workers into signing away their rights to class action suits.`,
        blurb: `A podcast where we dissect and analyze the Supreme Court cases that have leeched America's nutrients, like a tapeworm from its unsuspecting host`,
        index: 23
    },
    {
        title: `Bennis v. Michigan`,
        date: `JUL 21, 2020`,
        slug: `bennis-v-michigan`,
        content: ``,
        description: `On this week’s episode of 5-4, Peter (@The_Law_Boy), Rhiannon (@AywaRhiannon), and Michael (@_FleerUltra) talk about civil forfeiture, the practice that lets police seize private property if it’s suspected of being involved in a crime.`,
        blurb: `A podcast where we dissect and analyze the Supreme Court decisions that have broken down American society, like radiation on human DNA`,
        index: 24
    },
    {
        title: `Term Recap: 2019-2020`,
        date: `AUG 4, 2020`,
        slug: `term-recap--2019-2020`,
        content: ``,
        description: `On this week’s episode of 5-4, Peter (@The_Law_Boy), Rhiannon (@AywaRhiannon), and Michael (@_FleerUltra) look back at the most recent Supreme Court term.`,
        blurb: `A podcast where we dissect and analyze the Supreme Court cases that have burned through American life, like hot lava through the streets of Pompei`,
        index: 25
    },
    {
        title: `Miliken v. Bradley`,
        date: `AUG 11, 2020`,
        slug: `miliken-v-bradley`,
        content: ``,
        description: `On this week’s episode of 5-4, Peter (@The_Law_Boy), Rhiannon (@AywaRhiannon), and special guest Leon Neyfakh (@Leoncrawl) discuss the 1974 case that effectively ended school desegregation efforts.`,
        blurb: `A podcast where we dissect and analyze the Supreme Court cases that have spread like rabies through the American nervous system`,
        index: 26
    },
    {
        title: `Boys Scouts of America v. Dale`,
        date: `AUG 18, 2020`,
        slug: `boys-scouts-of-america-v-dale`,
        content: ``,
        description: `On this week’s episode of 5-4, Peter (@The_Law_Boy), Rhiannon (@AywaRhiannon), and Michael (@_FleerUltra) talk about the 2000 case that allowed Boy Scouts to discriminate against gay scout leaders.`,
        blurb: `A podcast where we dissect and analyze the Supreme Court cases that have unraveled the fabric of American society, like a nail caught in a sweater`,
        index: 27
    },
    {
        title: `Nielsen v. Preap`,
        date: `AUG 25, 2020`,
        slug: `nielsen-v-preap`,
        content: ``,
        description: `On this week’s episode of 5-4, Peter (@The_Law_Boy), Rhiannon (@AywaRhiannon), and Michael (@_FleerUltra) talk about the 2019 case that denied immigrants who have committed certain crimes the right to a bond hearing, and illustrated the futility of objectively interpreting the law.`,
        blurb: `A podcast where we dissect and analyze the Supreme Court cases that have slowly ravaged America, like the Mongol invasions of Central Asia`,
        index: 28
    },
    {
        title: `Flood v. Kuhn`,
        date: `SEP 1, 2020`,
        slug: `flood-v-kuhn`,
        content: ``,
        description: `On this week’s episode of 5-4, Peter (@The_Law_Boy) and Rhiannon (@AywaRhiannon) are joined by their friend Adam to discuss the 1972 case that exempted professional baseball from antitrust law.`,
        blurb: `A podcast where we dissect and analyze the Supreme Court cases that have brought American civil rights to the brink of extinction, much like poachers have to the Leatherback sea turtles`,
        index: 29
    },
    {
        title: `Voting Rights`,
        date: `SEP 8, 2020`,
        slug: `voting-rights`,
        content: ``,
        description: `On this week’s episode of 5-4, Peter, Rhiannon, and Michael are discussing the right to vote. As the 2020 presidential election draws near, the Trump campaign has already started suing states over the use of mail-in ballots. The hosts talk through the basics of election law history and explain how individual citizens' right to vote is only sort of provided for in the Constitution.`,
        blurb: `A podcast where we dissect and analyze the Supreme Court cases that have toyed with American freedoms, like a cat batting around a half-dead bird`,
        index: 30
    },
    {
        title: `LA v. Lyons`,
        date: `SEP 15, 2020`,
        slug: `la-v-lyons`,
        content: ``,
        description: `On this week’s episode of 5-4, Peter, Rhiannon, and Michael are talking about police use of chokeholds. In 1983, the Supreme Court held in City of Los Angeles v. Lyons that a man who had been injured by a brutal police chokehold did not have standing to sue for an injunction—in other words, he could not ask the Court to order the police to stop using chokeholds. The Court’s decision allowed the practice to continue, and chokeholds have been a focus of police reform efforts and protests since then, particularly after the 2014 death of Eric Garner.`,
        blurb: `A podcast where we dissect and analyze the Supreme Court cases that have cut off America's circulation, like Raynaud's disease`,
        index: 31
    },
    {
        title: `What RBG Didn't Understand`,
        date: `SEP 21, 2020`,
        slug: `what-rbg-didnt-understand`,
        content: ``,
        description: `On this week's episode of 5-4, Peter, Rhiannon, and Michael are discussing the death of Ruth Bader Ginsburg. Specifically, the hosts talk about the consequences of RBG's decision not to step down from the Court during Barack Obama's presidency, what that decision tells us about her, and what lies ahead.`,
        blurb: `WE ARE IN HELL`,
        index: 32
    },
    {
        title: `Amy Coney Barrett is a Right Wing Freak`,
        date: `SEP 29, 2020`,
        slug: `amy-coney-barrett-is-a-right-wing-freak`,
        content: ``,
        description: `The hosts talk about Amy Coney Barrett, who has been nominated to replace Ruth Bader Ginsburg on the Supreme Court. They discuss the nominee's judicial record, her faith, and what it means to be nominated by President Trump at this time.`,
        blurb: `A podcast where we dissect and analyze the Supreme Court cases that have rained down hellfire upon us, like God onto Sodom; leaving nothing but ashes where our hopes once were`,
        index: 33
    },
    {
        title: `What if Trump Dies? And Other Questions`,
        date: `OCT 6, 2020`,
        slug: `what-if-trump-dies-and-other-questions`,
        content: ``,
        description: `The hosts discuss the recent news that Donald Trump has contracted COVID-19 and what implications it might have for the upcoming election and the Supreme Court. Then they answer listener questions, covering everything from court reform to how to decide if you should go to law school.`,
        blurb: `Special listener Q&A episode`,
        index: 34
    },
    {
        title: `The Electoral College Coup is Coming`,
        date: `OCT 13, 2020`,
        slug: `the-electoral-college-coup-is-coming`,
        content: ``,
        description: `The hosts discuss the past, present, and future of the Electoral College, and all the ways it could be used to stage a procedural coup in the upcoming election. They also talk about how the Electoral College could be restructured to give greater representation to states with large populations, like California. But if it were up to them, they’d get rid of this undemocratic institution all together, and switch to a system in which the president is chosen by popular vote.`,
        blurb: `A podcast where we dissect and analyze the Supreme Court cases that have weakened America's immune system, like a lifetime of poor nutrition`,
        index: 35
    },
    {
        title: `Rucho v. Common Cause`,
        date: `OCT 20, 2020`,
        slug: `rucho-v-common-cause`,
        content: ``,
        description: `The hosts reflect on the Amy Coney Barrett confirmation hearings, then move on to discussing gerrymandering, the practice of drawing up voting districts to favor a particular political party. Specifically, they talk about Rucho v. Common Cause, a 2019 case in which the Supreme Court not only refused to rule on two states’ gerrymandered maps, they found all partisan gerrymandering to be outside the purview of the Court going forward.`,
        blurb: `A podcast where we dissect and analyze the Supreme Court cases that have sapped oxygen from America's bloodstream like the novel virus COVID-19`,
        index: 36
    },
    {
        title: `How to Fix the Court feat. Rep Ro Khanna`,
        date: `OCT 27, 2020`,
        slug: `how-to-fix-the-court-feat-rep-ro-khanna`,
        content: ``,
        description: `The hosts discuss options for reforming the court — from court packing, to term limits for judges, to stripping the court of jurisdiction to hear cases pertaining to new laws. They also speak to Congressman Ro Khanna about court reform, and about the bill he has introduced to limit Supreme Court Justices' tenure. But they remain clear on their preferred option: packing the court to include more liberal justices.`,
        blurb: `A podcast where we dissect and analyze the Supreme Court cases that have taken control of American life, like that fungus that takes control of ants' brains and turns them into zombies`,
        index: 37
    },
    {
        title: `The Courts Can't Save Him`,
        date: `NOV 10, 2020`,
        slug: `the-courts-cant-save-him`,
        content: ``,
        description: `The hosts look back at the week-long presidential election, which Joe Biden won. They discuss the challenges mounted by the Trump campaign in various states and explain why none of them is likely to change the outcome of the election. They also reflect on some state-level initiatives and put forth their strategy for how President Biden should deal with a split Senate, especially on matters pertaining to the Supreme Court.`,
        blurb: `A podcast where we dissect and analyze the Supreme Court cases that have left America flailing and helpless, like an outgoing president who is emotionally incapable of admitting defeat`,
        index: 38
    },
    {
        title: `Arizona Free Enterprise v. Bennett`,
        date: `NOV 17, 2020`,
        slug: `arizona-free-enterprise-v-bennett`,
        content: ``,
        description: `The hosts return to examining cases with a little-known campaign finance decision from 2011: Arizona Free Enterprise Club PAC v. Bennett. They discuss the Supreme Court’s ruling, which declared unconstitutional a matching funds program for political candidates who opt out of private fundraising, effectively killing public campaign financing. The hosts also talk about the Trump campaign’s ongoing efforts -- in the courts and otherwise -- to contest the results of the 2020 election, and how likely they are to affect the Biden victory.`,
        blurb: `A podcast where we dissect and analyze the Supreme Court cases that have infiltrated American life, like an invasive species`,
        index: 39
    },
    {
        title: `Ashcroft v. Iqbal`,
        date: `DEC 1, 2020`,
        slug: `ashcroft-v-iqbal`,
        content: ``,
        description: `The hosts discuss Ashcroft v. Iqbal, a 2008 case in which the Court created a new pleading standard for legal complaints that made it much harder for plaintiffs to bring their cases. Here, a Pakistani immigrant who claimed he was detained and tortured in the wake of 9/11 had his case dismissed because, according to the Court, his allegations that Bush administration officials were responsible for his treatment were not “plausible.”`,
        blurb: `A podcast where we dissect and analyze the Supreme Court cases that have blocked out America's sun, like a California brushfire`,
        index: 40
    },
    {
        title: `Roman Catholic Diocese v. Cuomo`,
        date: `DEC 8, 2020`,
        slug: `roman-catholic-diocese-v-cuomo`,
        content: ``,
        description: `The hosts discuss Roman Catholic Diocese of Brooklyn v. Cuomo, a recent case about COVID-19-related restrictions on religious gatherings. In it, the Supreme Court struck down hard capacity caps on religious gatherings in high-risk areas. The case has already spawned more challenges to pandemic-related restrictions on religious gatherings and likely foreshadows the expansion of legal exemptions for religious groups.`,
        blurb: `A podcast where we dissect and analyze the Supreme Court cases that have coalesced like that garbage island in the Pacific Ocean; together a monument to the sheer scale of man's folley`,
        index: 41
    },
    {
        title: `Herrera v. Collins`,
        date: `DEC 15, 2020`,
        slug: `herrera-v-collins`,
        content: ``,
        description: `The hosts take on a 1993 death penalty case that has been called one of the worst decisions in capital punishment jurisprudence. Herrera v. Collins asks whether someone on death row can have new evidence of their innocence reviewed in federal habeas corpus proceedings, often the last resort for someone who has exhausted their appeals. In a 6-to-3 vote, the Court rejected the claim, barely shying away from holding that the Constitution does not protect against an innocent person being executed.`,
        blurb: `A podcast where we dissect and analyze the Supreme Court cases that have killed off our civil liberties in the service of a misguided intellectual experiment, like Edison killed Topsy the elephant`,
        index: 42
    },
    {
        title: `5-4 x Know Your Enemy`,
        date: `DEC 29, 2020`,
        slug: `5-4-x-know-your-enemy`,
        content: ``,
        description: `Peter, Rhiannon, and Michael join the hosts of the podcast Know Your Enemy for a conversation about the conservative legal movement. They discuss the origins of conservative doctrines like originalism and textualism, and the rise of the Federalist Society from a small group of conservative students and academics to an organization whose members constitute the majority of the Supreme Court.`,
        blurb: `Last week, we guested Know Your Enemy. An extremely good podcast about the Conservative movement to discuss the Conservative legal movement`,
        index: 43
    },
    {
        title: `The Rise and Fall of Roe v. Wade, Pt. 1`,
        date: `JAN 12, 2021`,
        slug: `the-rise-and-fall-of-roe-v-wade-pt-1`,
        content: ``,
        description: `The hosts take on one of the Supreme Court’s most famous decisions, Roe v. Wade. In this first episode of a two-part series, they look at the legal and factual origins of Roe v. Wade. They also discuss how Roe was weaponized by the conservative legal movement to rally against an interpretation of the Constitution that allows for flexibility in favor of a far more rigid approach.`,
        blurb: `A podcast where we dissect and analyze the Supreme Court cases that have caused our civil liberties to disappear, like Amelia Earhart over the Pacific`,
        index: 44
    },
    {
        title: `The Rise and Fall of Roe v. Wade, Pt. 2`,
        date: `JAN 19, 2021`,
        slug: `the-rise-and-fall-of-roe-v-wade-pt-2`,
        content: ``,
        description: `In the second part of a two-episode series on abortion rights, the hosts discuss Planned Parenthood v. Casey, a 1992 case in which the Supreme Court made it easier for states to restrict abortion access so long as abortion regulations don’t create an “undue burden.” The vague standard set lawmakers on a new path of attacking abortion access and fueled anti-abortion groups’ efforts to spread stigma and misinformation, setting up Roe v. Wade for a death by a thousand cuts.`,
        blurb: `A podcast where we dissect and analyze the Supreme Court cases that have dissolved our liberties, like cotton candy into water.`,
        index: 45
    },
    {
        title: `Morse v. Frederick`,
        date: `JAN 26, 2021`,
        slug: `morse-v-frederick`,
        content: ``,
        description: `In 2002, a student held up a banner that said “Bong Hits 4 Jesus” at an Olympic torch relay, in full view of his classmates and teachers. When he was suspended, he claimed his banner was protected free speech under the First Amendment. The Supreme Court disagreed. In this episode, your hosts discuss the contours of student free speech, the Court’s puritanical moralizing on marijuana, and the importance of absurdist speech in creating real change.`,
        blurb: `A podcast where we dissect and analyze the Supreme Court cases that have, like a mighty river, wound their way over the great rock of our liberty, reducing it over many years to a canyon of despair`,
        index: 46
    },
    {
        title: `Navarette v. California`,
        date: `FEB 2, 2021`,
        slug: `navarette-v-california`,
        content: ``,
        description: `Your hosts discuss Navarette v. California, which held that an unverified anonymous tip about reckless driving could be sufficient grounds for the police to pull over a car. The case exemplifies how deferential the Supreme Court is to police power, and has resulted in an increased reliance on anonymous tips by the cops, and a corresponding erosion of citizens’ privacy rights.`,
        blurb: `A podcast where we dissect and analyze the Supreme Court cases that have driven our liberties to the outer edges of their habitats, like the American settlers did to the Grey Wolf`,
        index: 47
    },
    {
        title: `US v. Morrison`,
        date: `FEB 9, 2021`,
        slug: `us-v-morrison`,
        content: ``,
        description: `The hosts discuss a case in which the Supreme Court struck down a provision of the Violence Against Women Act (VAWA) that allowed women to sue abusers in federal court for damages. In the process, the Court constrained the ability of Congress to regulate interstate commerce, not only weakening an important civil rights law, but also making it more difficult for Congress to pass progressive legislation going forward.`,
        blurb: `A podcast where we dissect and analyze the Supreme Court cases that have caused our freedoms to fade away, like the colors of a painting in the sunlight`,
        index: 48
    },
    {
        title: `Atkins v. Virginia`,
        date: `FEB 16, 2021`,
        slug: `atkins-v-virginia`,
        content: ``,
        description: `The hosts discuss Atkins v. Virginia, a case in which the Supreme Court held that it is unconstitutional to impose the death penalty on people with intellectual disabilities. But the Court also created a loophole by allowing states to decide the standard for who qualifies as intellectually disabled. As a result of the Court’s lack of clarity, some states have continued to execute people with intellectual disabilities to this day.`,
        blurb: `A podcast where we dissect and analyze the Supreme Court cases that have pecked away at our civil rights, like a nervous bird plucking at its feathers`,
        index: 49
    },
    {
        title: `McCleskey v. Kemp ft. Josie Duffy Rice`,
        date: `FEB 23, 2021`,
        slug: `mccleskey-v-kemp-ft-josie-duffy-rice`,
        content: ``,
        description: `The hosts are joined by Josie Duffy Rice of The Appeal to discuss another death penalty case — McCleskey v. Kemp. In this 1987 decision, the Supreme Court held that statistical evidence of systemic racial disparities is not enough to prove discrimination. Instead, defendants have to show that individual prosecutors, judges or juries pursued them with racist intent. As a result, states were basically let off the hook for perpetuating systemic racism in death penalty cases.`,
        blurb: `A podcast where we dissect and analyze the Supreme Court cases that have bulldozed our civil rights, like the Cargill corporation has bulldozed the Amazon Rainforest`,
        index: 50
    },
    {
        title: `San Antonio ISD v. Rodriguez ft. Alec Karakatsanis`,
        date: `MAR 9, 2021`,
        slug: `san-antonio-isd-v-rodriguez-ft-alec-karakatsanis`,
        content: ``,
        description: `The hosts are joined by Alec Karakatsanis (@equalityAlec), founder and executive director of Civil Rights Corps, and the author of Usual Cruelty: The Complicity of Lawyers in the Criminal Injustice System. They discuss San Antonio ISD v Rodriguez, an equal protection case from 1973, which is widely cited by conservatives as holding that the equal protection clause does not protect impoverished people. The hosts beg to differ.`,
        blurb: `A podcast where we dissect and analyze the Supreme Court cases that have dilapidated our liberty, like rising ocean temperatures have bleached the Great Barrier Reef`,
        index: 51
    },
    {
        title: `Toyota Motor Manufacturing, Kentucky Inc. v. Williams`,
        date: `MAR 16, 2021`,
        slug: `toyota-motor-manufacturing-kentucky-inc-v-williams`,
        content: ``,
        description: `The hosts discuss Toyota Motor Manufacturing v. Williams,where the Supreme Court unanimously narrowed the definition of disability under the Americans with Disabilities Act.`,
        blurb: `A podcast where we dissect and analyze the Supreme Court cases that have ground our liberties to the bone, like the cartilage in a veteran NBA player's knees`,
        index: 52
    },
    {
        title: `Connick v. Thompson`,
        date: `MAR 30, 2021`,
        slug: `connick-v-thompson`,
        content: ``,
        description: `The hosts discuss Connick v. Thompson, a 5-4 decision in which the Supreme Court holds that a conspiracy to convict an innocent man, by systematically withholding evidence that could prove his innocence, does not constitute a 'pattern.'  Where's your dictionary now, Scalia?`,
        blurb: `A podcast where we dissect and analyze the Supreme Court cases that have left our civil rights weak and emaciated, like a cat on a vegan diet`,
        index: 53
    },
    {
        title: `5-4 x Even More News`,
        date: `APR 6, 2021`,
        slug: `5-4-x-even-more-news`,
        content: ``,
        description: `The hosts appear on Even More News, with hosts Katy Stoll and Cody Johnston, to talk about voting rights cases at the Supreme Court, and H.R.1.`,
        blurb: `A podcast where we dissect and analyze... Hahaa, I would never`,
        index: 54
    },
    {
        title: `Hoffman Plastic Compounds, Inc. v. National Labor Relations Board`,
        date: `APR 13, 2021`,
        slug: `hoffman-plastic-compounds-inc-v-national-labor-relations-board`,
        content: ``,
        description: `The hosts discuss Hoffman Plastic Compounds, Inc. v. National Labor Relations Board (NLRB), a 5-4 decision in which the Supreme Court denied a worker back pay that he was owed after being unlawfully terminated for union organizing, citing his lack of authorization to work in the United States. The decision completely rejected the ruling of the NLRB, guidance from the Department of Justice, standing immigration law, and basic human decency.`,
        blurb: `A podcast where we dissect and analyze the Supreme Court cases that have rendered our liberties completely immobile, like a cargo ship turned sideways in the Suez Canal`,
        index: 55
    },
    {
        title: `Bowles v. Russell`,
        date: `APR 27, 2021`,
        slug: `bowles-v-russell`,
        content: ``,
        description: `The hosts are joined by Josie Duffy Rice and Jay Willis of The Appeal, to discuss 'Worst Supreme Court Justice of All Time' bracketology, and simple arithmetic. This week's case is Bowles v. Russell, in which the petitioner sought to have his appeal heard because a judge had miscalculated a deadline, and his lawyer had the audacity to adhere to it. The court denied the petitioner, citing 'rules are rules, even when they aren't actually rules.'`,
        blurb: `A podcast where we dissect and analyze the Supreme Court cases that have devastated American civil liberties, like domesticated cats have devastated local bird populations`,
        index: 56
    },
    {
        title: `Get Us to Seven feat. Rep. Mondaire Jones`,
        date: `MAY 4, 2021`,
        slug: `get-us-to-seven-feat-rep-mondaire-jones`,
        content: ``,
        description: `The hosts are joined by Rep. Mondaire Jones to discuss the Judiciary Act of 2021, Supreme Court reform, and the Biden Commission.`,
        blurb: `A podcast where we dissect and analyze the Supreme Court cases that have swarmed our nation, like a brood of cicadas`,
        index: 57
    },
    {
        title: `Jones v. Mississippi`,
        date: `MAY 18, 2021`,
        slug: `jones-v-mississippi`,
        content: ``,
        description: `The hosts discuss the 8th Amendment and juvenile life without parole, and the tension between modern neuroscience, and the conservative impulse to maintain 200-year-old traditions of punishment.`,
        blurb: `A podcast where we dissect and analyze the Supreme Court cases that have frayed and flattened our civil rights, like the bristles of an overused toothbrush`,
        index: 58
    },
    {
        title: `Wal-Mart Stores, Inc. v. Dukes`,
        date: `MAY 25, 2021`,
        slug: `wal-mart-stores-inc-v-dukes`,
        content: ``,
        description: `The hosts discuss a case in which the Supreme Court denied 'class' status to female Wal-Mart employees in a gender discrimination class action, proving in this 5-4 decision that boys will be boys.`,
        blurb: `A podcast where we dissect and analyze the Supreme Court cases that have sent our nation's values spiraling downward, like Bitcoin after an Elon Musk tweet`,
        index: 59
    },
    {
        title: `5-4 x Even More News - Abortion Rights`,
        date: `JUNE 8, 2021`,
        slug: `5-4-x-even-more-news-abortion-rights`,
        content: ``,
        description: `The hosts join Katy Stoll and Cody Johnston from Even More News, to talk about what the Supreme Court's decision to hear a Mississippi abortion ban case means.`,
        blurb: `Another crossover episode with our friends from Even More News`,
        index: 60
    },
    {
        title: `Smith v. Maryland`,
        date: `JUNE 15, 2021`,
        slug: `smith-v-maryland`,
        content: ``,
        description: `Warrantless police surveillance of your telephone is A-OK, according to the holding in Smith v. Maryland - as long as the cops only look at WHO you call, not WHAT you say.`,
        blurb: `A podcast where we dissect and analyze the Supreme Court cases that have filled America's shoes with pebbles of injustice`,
        index: 61
    },
    {
        title: `Meet Nick Wallace`,
        date: `JUNE 21, 2021`,
        slug: `meet-nick-wallace`,
        content: ``,
        description: `Congrats grads! Our gift to you is an interview with Nick Wallace. Nick is the former Stanford law student who was threatened with having his diploma withheld because the snowflakes in his campus' Federalist Society were triggered.`,
        blurb: `Why he did it, what exactly happened, and what's next`,
        index: 62
    },
    {
        title: `Fulton v. Philadelphia`,
        date: `JUNE 29, 2021`,
        slug: `fulton-v-philadelphia`,
        content: ``,
        description: `In this emergency episode, the hosts discuss one of the spiciest cases from this term, Fulton v. Philadelphia. And you know how conservatives hate spice, so suffice it to say, this holding didn't come out great!`,
        blurb: `An emergency broadcast of 5-4 where we dissect and analyze the Supreme Court cases that have brought American liberty to the brink of extinction, like the widespread use of DDT did to the Bald Eagle`,
        index: 63
    },
    {
        title: `Cedar Point Nursery v. Hassid`,
        date: `JULY 6, 2021`,
        slug: `cedar-point-nursery-v-hassid`,
        content: ``,
        description: `You know what's exactly the same? When the government kicks you out of your house so it can build a military base, and when a union organizer gives a farm worker a pamphlet. Or at least that's what the majority of justices on the Supreme Court think, based on the ruling in Cedar Point Nursery v. Hassid. We want to know what you think about 5-4 - give us your feedback on this survey!`,
        blurb: `A podcast where we dissect and analyze the Supreme Court cases that have left our nation parched and weak, like a record-breaking heatwave`,
        index: 64
    },
    {
        title: `Brnovich v. Democratic National Committee`,
        date: `AUGUST 3, 2021`,
        slug: `brnovich-v-democratic-national-committee`,
        content: ``,
        description: `In this voting rights case from Arizona, the Supreme Court says you can DO racism, you just can't MEAN to do racism, deep down in your cold little withered heart.`,
        blurb: `A podcast where we dissect and analyze the Supreme Court cases that are decimating our civil liberties, like positive marijuana tests have decimated the U.S. Olympic team`,
        index: 65
    },
    {
        title: `Americans for Prosperity v. Bonta`,
        date: `AUGUST 10, 2021`,
        slug: `americans-for-prosperity-v-bonta`,
        content: ``,
        description: `The First Amendment protects the rights of very rich people to be anonymous, unbothered, moisturized, in their lane, well-hydrated, flourishing, when it comes to their charitable contributions. Not you though. Signing that petition to free Mumia in 11th grade is going on your permanent record.`,
        blurb: `A podcast where we dissect and analyze the Supreme Court cases are being force-fed to the American people, like we're a goose being fattened up to make Foie Gras`,
        index: 66
    },
    {
        title: `Nestlé v. Doe`,
        date: `AUGUST 24, 2021`,
        slug: `nestlé-v-doe`,
        content: ``,
        description: `Is it wrong to enslave children on a cocoa plantation? We'll never know! The Supreme Court dismissed the case!`,
        blurb: `A podcast where we dissect and analyze the Supreme Court cases have caused our civil rights to collapse, like an American puppet government in the Middle East`,
        index: 67
    },
    {
        title: `Welcome to Law School`,
        date: `AUGUST 31, 2021`,
        slug: `welcome-to-law-school`,
        content: ``,
        description: `What, like it's hard? This one goes out to all those incoming, current and former Elle Woodses.  You're doing amazing sweetie!`,
        blurb: `A podcast where we dissect and analyze the Supreme Court cases that have eaten away at our civil liberties, like rabbits to a suburban vegetable garden`,
        index: 68
    },
    {
        title: `SB8: Whole Woman’s Health v. Jackson`,
        date: `SEPTEMBER 3, 2021`,
        slug: `sb8--whole-woman’s-health-v-jackson`,
        content: ``,
        description: `In this emergency episode, the hosts discuss Whole Woman’s Health v. Jackson, the case where the Supreme Court declined to stay SB8. SB8 is the monstrous Texas law that allows anyone to sue anyone who even intends to help someone get an abortion after 6 weeks of pregnancy. The effect is that while very early term abortions are still legal in Texas, private individuals have been deputized to bounty hunt abortion providers, activists, and even Uber drivers.`,
        blurb: `This is a tough way to start the day...`,
        index: 69
    },
    {
        title: `Adoptive Couple v. Baby Girl`,
        date: `SEPTEMBER 21, 2021`,
        slug: `adoptive-couple-v-baby-girl`,
        content: ``,
        description: `A treaty or law not honored by the United States? It's more likely than you think! In a rare child custody case, the Supreme Court rules on the Indian Child Welfare Act, and finds that when you squint your eyes and look at the law kinda sideways in the dark, Congress must not have meant for the law to actually keep Native families together. Land back.`,
        blurb: `A podcast where we dissect and analyze the Supreme Court cases that have caused our civil rights to fade out of view, like a dying star in the night sky`,
        index: 70
    },
    {
        title: `Nieves v. Bartlett`,
        date: `OCTOBER 5, 2021`,
        slug: `nieves-v-bartlett`,
        content: ``,
        description: `This case originates out of an incident at opposite Burning Man, a ski race in Alaska called Arctic Man. The ruling is about opposite free speech, wherein the justices vote to protect cops' First Amendment right to accidentally say the quiet part out loud when they're doing a retaliatory arrest.`,
        blurb: `A podcast where we dissect and analyze the Supreme Court cases that have thinned the ranks of our civil rights, like vaccine mandates have thinned the ranks of our nation's police departments`,
        index: 71
    },
    {
        title: `2021-2022 Supreme Court Term Preview`,
        date: `OCTOBER 12, 2021`,
        slug: `2021-2022-supreme-court-term-preview`,
        content: ``,
        description: `The 2022 Supreme Court term is shaping up to be pretty gnarly. We brought on The Nation's justice correspondent, Elie Mystal, to walk us through the cases he's watching.`,
        blurb: `A podcast where we dissect and analyze the Supreme Court cases that hover menacingly over America, like Kyrsten Sinema over a clearance rack at Forever 21`,
        index: 72
    },
    {
        title: `Younger v. Harris`,
        date: `OCTOBER 26, 2021`,
        slug: `younger-v-harris`,
        content: ``,
        description: `Oof, this is a tough one: Protect the Constitutional rights of actual people, or clutch the vague concept of 'federalism' in my grubby little hands like Gollum with that ring. TBH probably gonna go with my precious.`,
        blurb: `A podcast where we dissect and analyze the Supreme Court cases that left American civil liberties brittle and weak, like the femur of a man with osteoperosis`,
        index: 73
    },
    {
        title: `Hamdi v. Rumsfeld`,
        date: `NOVEMBER 2, 2021`,
        slug: `hamdi-v-rumsfeld`,
        content: ``,
        description: `A foreign 'prisoner of war' can communicate with their family. An American 'traitor' can argue their case in court. An American 'enemy combatant' can do neither, according to the Supreme Court, creating a third category of prisoner with very few legal rights. America immediately post-9/11 was very chill and normal.`,
        blurb: `A podcast where we dissect and analyze the Supreme Court cases that have caused America's lofty promise to fall like a dying satellite slowly crashing back to earth`,
        index: 74
    },
    {
        title: `'This Is A Captured Institution' - An Interview with Senator Sheldon Whitehouse`,
        date: `NOVEMBER 9, 2021`,
        slug: `this-is-a-captured-institution-an-interview-with-senator-sheldon-whitehouse`,
        content: ``,
        description: `Senator Sheldon Whitehouse (D-RI) joins us to talk dark money, judicial nominations, and whether the Democrats have any hope of getting things done without filibuster reform.`,
        blurb: `A podcast where we dissect and analyze the Supreme Court cases that have destroyed American democracy, like the filibuster has destroyed the Senate`,
        index: 75
    },
    {
        title: `Michigan v. Environmental Protection Agency`,
        date: `NOVEMBER 16, 2021`,
        slug: `michigan-v-environmental-protection-agency`,
        content: ``,
        description: `What's the return on investment on not having an asthma attack? If you can't count it, it doesn't count, according to the majority in this 5-4 ruling, which turned back EPA rules on mercury emissions from power plants. As a result, the power industry won't be burdened by those costly regulations, so you can breathe easy. LOL.`,
        blurb: `A podcast where we dissect and analyze the Supreme Court cases that have caused our liberties to dwindle, like our honeybee populations`,
        index: 76
    },
    {
        title: `Town of Greece v. Galloway`,
        date: `DECEMBER 7, 2021`,
        slug: `town-of-greece-v-galloway`,
        content: ``,
        description: `Let us now bow our heads in observance of this episode about why the Supreme Court thinks it's OK for a government to have prayer before public meetings, but NOT OK for the town to manage who gives that prayer or what they pray about. Amen.`,
        blurb: `A podcast where we dissect and analyze the Supreme Court cases that have caused our rights to short circuit, like the electricity of co-host's home`,
        index: 77
    },
    {
        title: `The 5-4 Giving Guide: How to Help`,
        date: `DECEMBER 24, 2021`,
        slug: `the-5-4-giving-guide--how-to-help`,
        content: ``,
        description: `We're sorry for bumming you out all year - but the antidote to a crumbling democracy is mutual aid! In this episode we've got some organizations that you can share your resources with, to help take the edge off of 2021's agony. Happy New Year! Better luck next year!`,
        blurb: `A podcast where we dissect and analyze the Supreme Court cases that have delivered violence upon our civil rights, like Santa delivering gifts to children across the world, and also primarily to the benefit of wealthy Christians, in both cases`,
        index: 78
    },
    {
        title: `Florida v. Riley`,
        date: `JANUARY 18, 2022`,
        slug: `florida-v-riley`,
        content: ``,
        description: `Go-go-gadget surveillance state! In this case the Court holds that cops can hover a helicopter over your house and peer into it without a warrant. That set a new standard for the Fourth Amendment - namely that it doesn't really exist, and if you wanted privacy then you should have been richer.`,
        blurb: `A podcast where we dissect and analyze the Supreme Court cases that have attacked our most cherished rights like an autoimmune disease attacking healthy cells.`,
        index: 79
    },
    {
        title: `NFIB v. Department of Labor`,
        date: `JANUARY 25, 2022`,
        slug: `nfib-v-department-of-labor`,
        content: ``,
        description: `In this ongoing case, the Court holds that requirements that employees mask and test weekly, or get vaccinated, cannot be enforced while a challenge makes its way through the judiciary. It's good news for ... I don't know, hermits living in caves who never interact with humans, or people who are already dead? For everyone else, it's not so great.`,
        blurb: `A podcast where we dissect and analyze the Supreme Court cases that have let our rights drift ever further from us, like the decaying orbit of a distant planet from the warmth of its sun`,
        index: 80
    },
    {
        title: `Parents Involved in Community Schools v. Seattle School District No. 1`,
        date: `FEBRUARY 8, 2022`,
        slug: `parents-involved-in-community-schools-v-seattle-school-district-no-1`,
        content: ``,
        description: `Racism equals bad so acknowledging race bad too so reverse racism real so white girl go to preferred school, yes?`,
        blurb: `A podcast where we dissect and analyze the Supreme Court cases that have abandoned the principles of our founding, like Democrats have abandoned teachers' unions`,
        index: 81
    },
    {
        title: `Ingraham v. Wright`,
        date: `FEBRUARY 15, 2022`,
        slug: `ingraham-v-wright`,
        content: ``,
        description: `This episode contains references to physical abuse of children. Take care when listening.  The standing law on corporal punishment - physically punishing children - in schools, is that it's legal because 8th Amendment protections against cruel and unusual punishment only applies to CRIMES. Failure to get your keister in line mister, is not a crime, and therefore, punishable by beating.`,
        blurb: `A podcast where we dissect and analyze the Supreme Court cases that have spread the seeds of hopelessness across the country, like wind to a dandelion`,
        index: 82
    },
    {
        title: `Merrill v. Milligan`,
        date: `MARCH 1, 2022`,
        slug: `merrill-v-milligan`,
        content: ``,
        description: `The Supreme Court says there's simply no time before elections that are months away, to redraw racist Congressional district maps, that took all of one week to make initially.  If you're a fan of democracy that probably sounds bad, but listen, nothing in the Constitution explicitly says that fascism is expressly prohibited.`,
        blurb: `A podcast where we dissect and analyze the Supreme Court cases that have put our rights on indefinite hold, like Delta Airlines when I try to call about the flight voucher they owe me`,
        index: 83
    },
    {
        title: `We Need To Talk About Ginni`,
        date: `MARCH 8, 2022`,
        slug: `we-need-to-talk-about-ginni`,
        content: ``,
        description: `In this long-anticipated episode we finally get into The Ginni Problem. New Yorker chief Washington correspondent Jane Mayer joins us to talk cults, insurrection, and other super normal Supreme Court stuff.`,
        blurb: `A podcast where we dissect and analyze the Supreme Court cases that have undermined our democracy, like the CIA is undermining the Russian war effort`,
        index: 84
    },
    {
        title: `Strickland v. Washington`,
        date: `MARCH 22, 2022`,
        slug: `strickland-v-washington`,
        content: ``,
        description: `In this case, eight Supreme Court justices felt like it was totally fine to let the state kill a man, even though his lawyer prepared exactly NOTHING to present mitigating factors during the sentencing phase of his trial.`,
        blurb: `A podcast where we dissect and analyze the Supreme Court cases that have sunk the ship of Liberty, like that fire sunk the ship of Audis in the Atlantic Ocean`,
        index: 85
    },
    {
        title: `Lorillard v. Reilly`,
        date: `MARCH 29, 2022`,
        slug: `lorillard-v-reilly`,
        content: ``,
        description: `To review: If you are an anonymous donor, using your money to drown out the voices of everyone else in an election, that is free speech. If you are a citizen who wants to tell a cop to f**k off, that is NOT free speech. And if you are a tobacco company that wants to tell children about the rich, smooth taste of a product that will addict and kill them, that is free speech.`,
        blurb: `A podcast where we dissect and analyze the Supreme Court cases that have stifled our liberty, like allergy season have stuffed our nasal passages`,
        index: 86
    },
    {
        title: `Immigration and Naturalization Service v. Elias-Zacarias`,
        date: `APRIL 5, 2022`,
        slug: `immigration-and-naturalization-service-v-elias-zacarias`,
        content: ``,
        description: `A difference of political opinion is when one person wants the coal industry to get tax breaks, but another person wants the oil industry to get tax breaks. Not wanting to be conscripted into an army to fight in a war against your will is NOT a political opinion. Therefore, it is totally fine for the United States - the nation that instigated the war mind you - to deny you an asylum hearing and send you back to face that certain fate.`,
        blurb: `A podcast where we dissect and analyze the Supreme Court cases that have left our naiton tired and overburdened, like an accountant during tax season`,
        index: 87
    },
    {
        title: `Lassiter v. Department of Social Services`,
        date: `APRIL 26, 2022`,
        slug: `lassiter-v-department-of-social-services`,
        content: ``,
        description: `In this case, the Supreme Court rules that a mother who is at risk of losing parental rights for her child is not entitled to a lawyer during the proceedings. This episode features discussions of families interacting with social services and the foster system. Please take care while listening.`,
        blurb: `A podcast where we dissect and analyze the Supreme Court cases that have conducted a hostile take over of our Constitution like Elon Musk is doing to Twitter`,
        index: 88
    },
    {
        title: `Dobbs v. Jackson Women's Health: The End of Roe`,
        date: `MAY 4, 2022`,
        slug: `dobbs-v-jackson-womens-health--the-end-of-roe`,
        content: ``,
        description: `In this emergency episode, the hosts are talking about what happens now that a draft of Dobbs v. Jackson Women's Health Organization decision has been leaked.  Roe v. Wade will almost certainly be overturned, and abortion will likely become illegal in almost half of the country. But other rights predicated on due process, like birth control, marriage equality, and desegregation, are at risk too. To learn more about joining a network of lawyers for reproductive justice, visit https://www.ifwhenhow.org/. To donate to a coalition of more than 80 abortion funds, or donate to your local fund, visit https://abortionfunds.org/. If you or someone you know needs abortion access, visit https://www.ineedana.com/. To learn more about self-managed abortion at home, visit https://www.plancpills.org/.`,
        blurb: `No patience for a cute little metaphor this week, I'm afraid... I think we're going in. Let's fucking go`,
        index: 89
    },
    {
        title: `United States v. Vaello Madero`,
        date: `MAY 19, 2022`,
        slug: `united-states-v-vaello-madero`,
        content: ``,
        description: `In this ruling from just last month, the Supreme Court ruled that Puerto Ricans are not entitled to equal protection under the Fifth Amendment because … unclear. Citizens who live in DC and the Northern Mariana Islands? Yes - equal citizens under the law. Puerto Ricans and Guamamians? Sorry, no, try again next century.`,
        blurb: `A podcast where we dissect and analyze the Supreme Court cases that have left our nation frightened and cowering, like a Supreme Court Justice when peaceful protesters assemble on a nearby sidewalk`,
        index: 90
    },
    {
        title: `Whren v. United States`,
        date: `MAY 24, 2022`,
        slug: `whren-v-united-states`,
        content: ``,
        description: `This unanimous decision holds that cops who don't deal with traffic enforcement are allowed to tail you until you commit a minor offense, and then literally dive head first into your car to nab you on an unrelated drug charge. It's just another case in a long line of Supreme Court jurisprudence that is preferential to the "I Do What I Want" brand of policing... and completely antithetical to the Fourth Amendment.`,
        blurb: `A podcast where we dissect and analyze the Supreme Court cases that have frozen our civil liberties, like my zoom freezes, every recording`,
        index: 91
    },
    {
        title: `Brett Kavanaugh - Unlocked Premium Episode`,
        date: `MAY 31, 2022`,
        slug: `brett-kavanaugh-unlocked-premium-episode`,
        content: ``,
        description: `The hosts pound some brewskis with Supreme Court Justice Brett Kavanaugh. Normally there would be no episode in the free feed this week, but we decided to do something special for ya. This episode was originally exclusively available to our Patreon members, but we're giving you a peek into the premium feed. If you enjoyed the episode and want to unlock more like it, like our just-released episode about Originalism, join our Patreon at $5 a month, at patreon.com/fivefourpod`,
        blurb: `A special treat for our non-patreon subscribing fans`,
        index: 92
    },
    {
        title: `Federal Election Commission v. Ted Cruz for Senate`,
        date: `JUNE 7, 2022`,
        slug: `federal-election-commission-v-ted-cruz-for-senate`,
        content: ``,
        description: `This week, the hosts use a variety of film and television references to try and capture the pure villainy of a recent ruling that allows candidates to "loan" their campaigns unlimited money and be paid back, with donor funds, AFTER they're elected. We're talking tie-a-damsel-to-the-tracks-twirl-your-mustache level.`,
        blurb: `A podcast where we dissect and analyze the Supreme Court cases that have sent our civil liberties into gradual decline, like the quality of Netflix's movie library`,
        index: 93
    },
    {
        title: `Egbert v. Boule`,
        date: `JUNE 21, 2022`,
        slug: `egbert-v-boule`,
        content: ``,
        description: `In this case the Court holds that you have no right to sue a federal official, even if a border agent trespasses on your property, knocks you to the ground, and calls the IRS on you for having the gall to file a complaint about it. So if you're keeping track at home, the Court is saying that First Amendment and Fourth Amendment don't actually mean anything.`,
        blurb: `A podcast where we dissect and analyze the Supreme Court cases that have left our civil rights weak and cowering, like a police officer during a school shooting`,
        index: 94
    },
    {
        title: `Emergency Episode: Roe Is Overturned`,
        date: `JUNE 25, 2022`,
        slug: `emergency-episode--roe-is-overturned`,
        content: ``,
        description: `The Supreme Court has released the long-awaited Dobbs v. Jackson Women's Health Organization decision. The news is bad. Ruling in favor of Mississippi, the Court allows the state to ban nearly all abortions after 15 weeks. The opinion is written by Justice Samuel Alito, and is largely the same as the opinion that was leaked earlier this year. Alito writes, "The Constitution does not confer a right to abortion; Roe and Casey are overruled; and the authority to regulate abortion is returned to the people and their elected representatives." Roe v. Wade, precedent that has guaranteed privacy and bodily autonomy for half a century, is dead, imperiling the access to reproductive healthcare for millions of people. We know this has been a hard week, but what makes it a little lighter for us is knowing that you all are out there. Thanks for being a listener.`,
        blurb: `Where we are sad all the time...`,
        index: 95
    },
    {
        title: `Shinn v. Ramirez`,
        date: `JUNE 28, 2022`,
        slug: `shinn-v-ramirez`,
        content: ``,
        description: `This episode contains descriptions of violence against a child that may be challenging for some listeners. Please take care while listening.`,
        blurb: `A podcast where we dissect and analyze the Supreme Court cases that have buried our civil rights, like a politician burying evidence of his son's DUIs`,
        index: 96
    },
    {
        title: `Kennedy v. Bremerton School District`,
        date: `JULY 12, 2022`,
        slug: `kennedy-v-bremerton-school-district`,
        content: ``,
        description: `In this case from the most recent term, the Court once again says we should look to history and tradition to determine what's appropriate. Which is gonna be a tough one to parse, because the founders didn't really give us a strong sense of how they felt about junior varsity football games at public high schools. Probably because none of those things had been invented yet..`,
        blurb: `A podcast where we dissect and analyze the Supreme Court cases that have devoured our civil rights, like my cat devouring the salmon I made when I'm not looking`,
        index: 97
    },
    {
        title: `West Virginia v. Environmental Protection Agency`,
        date: `JULY 19, 2022`,
        slug: `west-virginia-v-environmental-protection-agency`,
        content: ``,
        description: `John Roberts has decided that the standard for whether or not something is a "major question" is whether or not it "raises an eyebrow." But like, let's not beat around the bush, John - you can just say vibe check.`,
        blurb: `A podcast where we dissect and analyze the Supreme Court cases that have washed away our civil rights, like the ocean will wash away our beachfront properties`,
        index: 98
    },
    {
        title: `WTF Are The Dems Doing? with Jamelle Bouie`,
        date: `JULY 26, 2022`,
        slug: `wtf-are-the-dems-doing-with-jamelle-bouie`,
        content: ``,
        description: `Imagine you are given a month and a half head start on a race. Do you A) start running, B) wait around until the official start time to run, or C) act surprised when the race starts and chastise any of your teammates who tell you that it's time to start running?  If you chose C, congratulations, you are the Democratic Party responding to the Dobb decision!`,
        blurb: ``,
        index: 99
    },
    {
        title: `"We can make Roe the law everywhere" - An Interview with Senator Elizabeth Warren`,
        date: `JULY 28, 2022`,
        slug: `we-can-make-roe-the-law-everywhere-an-interview-with-senator-elizabeth-warren`,
        content: ``,
        description: `Senator Elizabeth Warren, we can only assume against the advice of counsel, agreed to come on 5-4. We talked about the filibuster, the Democratic response to Dobbs, and Peter and Michael's beards.`,
        blurb: ``,
        index: 100
    },
    {
        title: `Oklahoma v. Castro-Huerta`,
        date: `AUGUST 9, 2022`,
        slug: `oklahoma-v-castro-huerta`,
        content: ``,
        description: `Continuing its trajectory of abandoning tests that don't pass the vibe check, the Supreme Court ruled that states can prosecute crimes committed by non-Natives on Native land.  The holding overturns literally centuries of precedent and clears the way to eliminate tribal sovereignty all together.`,
        blurb: `A podcast where we dissect and analyze the Supreme Court cases that have ruined our nation's promise, like a shark sighting ruining our producer's beach day`,
        index: 101
    },
    {
        title: `New York State Rifle and Pistol Association v. Bruen`,
        date: `AUGUST 16, 2022`,
        slug: `new-york-state-rifle-and-pistol-association-v-bruen`,
        content: ``,
        description: `The United States has a long, complex, and often contradictory history of firearm regulation. Clarence Thomas reached into that history, selected the parts he liked, discarded the parts he didn’t, and used it to overturn New York’s longstanding handgun licensing law.`,
        blurb: `A podcast where we dissect and analyze the Supreme Court cases that have contaminated our nation, like microplastics have contaminated our bloodstreams`,
        index: 102
    },
    {
        title: `Welcome to Law School (Again)`,
        date: `AUGUST 30, 2022`,
        slug: `welcome-to-law-school-again`,
        content: ``,
        description: `Oh my god, MORE of you decided to go to law school? Even after we released this episode last year? Welp. We can't stop you. But we can offer you an encore of our Welcome to Law School episode, where we break down why it's not you - it's law school.`,
        blurb: `A podcast where we dissect and analyze the Supreme Court cases that have eaten away at our civil liberties, like rabbits to a suburban vegetable garden`,
        index: 103
    },
    {
        title: `Vega v. Tekoh`,
        date: `SEPTEMBER 13, 2022`,
        slug: `vega-v-tekoh`,
        content: ``,
        description: `Cops have to read you your Miranda rights. If they don't ... nothing happens, according to this recent Supreme Court ruling. Probably nothing to worry about here.`,
        blurb: `A podcast where we dissect and analyze the Supreme Court cases that have ravaged our nation like long-COVID is ravaging my lungs`,
        index: 104
    },
    {
        title: `Minor v. Happersett`,
        date: `SEPTEMBER 20, 2022`,
        slug: `minor-v-happersett`,
        content: ``,
        description: `Welcome to citizenship in the United States of America - you knew that you weren't guaranteed to get health care, housing, economic security, or education … but did you know that you ALSO aren't guaranteed the right to vote?!`,
        blurb: `A podcast where we dissect and analyze the Supreme Court cases that have killed off our civil liberties, like syphilis killed off the founding fathers`,
        index: 105
    },
    {
        title: `2022-2023 Supreme Court Term Preview`,
        date: `OCTOBER 3, 2022`,
        slug: `2022-2023-supreme-court-term-preview`,
        content: ``,
        description: `Having accomplished their big goals of overturning Roe and giving a praying football coach back a job he never actually lost and apparently does not want to anymore, conservatives are now looking to the next Supreme Court term. This year, as part of their continued campaign to prove that racism does not exist, they'll try to eliminate affirmative action and federal Indian Law.`,
        blurb: `A podcast where we dissect and analyze the Supreme Court cases that have left our rights dark and murky, like the water in Jackson, Mississippi`,
        index: 106
    },
    {
        title: `Tanner v. United States`,
        date: `OCTOBER 11, 2022`,
        slug: `tanner-v-united-states`,
        content: ``,
        description: `Fun party idea: convene 11 strangers, get zooted at lunch, deal some weed, do a little coke in the bathroom of a courthouse, then determine whether or not you're going to put a human in a cage for a substantial chunk of their life.`,
        blurb: `A podcast where we dissect and analyze the Supreme Court cases that have infested our law, like Lantern Flies have infested New York.`,
        index: 107
    },
    {
        title: `Independent State Legislature Theory`,
        date: `OCTOBER 25, 2022`,
        slug: `independent-state-legislature-theory`,
        content: ``,
        description: `The first time the Supreme Court flirted with Independent State Legislature doctrine, George W. Bush wound up in the presidency. Next time, if conservatives on the court get their way in an upcoming case, your vote - depending on where you live - could lose all meaning.`,
        blurb: `A podcast where we dissect and analyze the Supreme Court cases that have caused our civil rights to fall far short of their promise, like a Russell Wilson pass falling far short of his intended receiver`,
        index: 108
    },
    {
        title: `Bowers v. Hardwick`,
        date: `NOVEMBER 1, 2022`,
        slug: `bowers-v-hardwick`,
        content: ``,
        description: `This episode quotes outdated language about homosexuality that maybe painful to hear. Please take care while listening.`,
        blurb: `A podcast where we dissect and analyze the Supreme Court cases that have caused our liberty to die off, like the Alaskan Snow Crab population`,
        index: 109
    },
    {
        title: `Utah v. Strieff`,
        date: `NOVEMBER 15, 2022`,
        slug: `utah-v-strieff`,
        content: ``,
        description: `The Fourth Amendment protects you from unreasonable search and seizure by the government. Unless the government wants to unreasonably search and/or seize. In that case, the Supreme Court says "go for it babes!"`,
        blurb: `A podcast where we dissect and analyze the Supreme Court cases that have banned our civil rights, like an Elon Musk parody being banned from Twitter`,
        index: 110
    },
    {
        title: `Glossip v. Gross`,
        date: `NOVEMBER 22, 2022`,
        slug: `glossip-v-gross`,
        content: ``,
        description: `This episode contains graphic depictions of an execution. Please take care while listening.`,
        blurb: `A podcast where we dissect and analyze the Supreme Court cases that have disrupted our civil rights, like the construction outside my apartment has disrupted my sleep`,
        index: 111
    },
    {
        title: `The Pelican Brief`,
        date: `DECEMBER 13, 2022`,
        slug: `the-pelican-brief`,
        content: ``,
        description: `For some strange reason, there aren't many thrillers about the Supreme Court. The Pelican Brief remedies this obvious oversight by Hollywood. If you'd like to option 5-4 for film and television, we're all ears.`,
        blurb: `A podcast where we dissect and analyze the Supreme Court cases that have caused our nation to collapse, like Ticketmaster during a Taylor Swift presale`,
        index: 112
    },
    {
        title: `The 2022 Five Four Giving Guide: More Ways to Help`,
        date: `DECEMBER 20, 2022`,
        slug: `the-2022-five-four-giving-guide--more-ways-to-help`,
        content: ``,
        description: `We spend the better part of the year bumming you out about the many ways the law fails to actually provide justice. Thankfully, there are organizations that provide mutual aid and support to right some of the wrongs committed by our judiciary. Here are some of our favorite orgs that are offering healing, advocacy and care, to build the future that we want. https://reprolegaldefensefund.org/, https://bailproject.org/, https://www.thetrevorproject.org/, https://ysrp.org/, https://www.raicestexas.org, https://narf.org/, https://www.yasproject.com/, https://freedomreads.org/, https://www.heartsandbonesrescue.com/, https://www.ourchildrenstrust.org/`,
        blurb: `A podcast where we dissect and analyze the Supreme Court cases that have caused our nation to fall short of its promise, like France in the World Cup`,
        index: 113
    },
    {
        title: `5-4 Presents: If Books Could Kill - Outliers""`,
        date: `DECEMBER 27, 2022`,
        slug: `5-4-presents--if-books-could-kill-outliers`,
        content: ``,
        description: `This week, 5-4 invites you to check out an episode of If Books Could Kill, featuring Michael Hobbes, of Maintenance Phase, and 5-4's own Peter. If Books Could Kill deconstructs the airport bestsellers that captured our hearts and ruined our minds. From The Game to Freakonomics, if an idea is bad enough, someone has written a book about it, and Peter and Michael are here to rip it to shreds.`,
        blurb: `A podcast where we promote the other projects that we're working on very shamelessly`,
        index: 114
    },
    {
        title: `McDonnell v. United States`,
        date: `JANUARY 10, 2023`,
        slug: `mcdonnell-v-united-states`,
        content: ``,
        description: `The dictionary defines quid pro quo" as "when a businessman walks up to a Congressman in the Capitol and hands him a check with the words 'bribe for doing a favor for me' written on the memo line." Nothing else constitutes bribery. It is so ordered."`,
        blurb: `A podcast where we dissect and analyze the Supreme Court cases that have caused our nation to collapse, like my wife when she works out after forgetting to eat`,
        index: 115
    },
    {
        title: `Giles v. Harris`,
        date: `JANUARY 17, 2023`,
        slug: `giles-v-harris`,
        content: ``,
        description: `Don't get it twisted: the point" whizzing high over the heads of Supreme Court justices is a tradition as old as the Court itself. This case`,
        blurb: ` where the Court holds that it cannot declare discriminatory voter registration unconstitutional because that would "legitimize it`,
        index: 116
    },
    {
        title: `Korematsu v. United States`,
        date: `JANUARY 31, 2023`,
        slug: `korematsu-v-united-states`,
        content: ``,
        description: `In this case from 1944 the Court decides that arresting someone on "suspicion of being Japanese" and putting them in a concentration camp is not racially motivated. And while we're at it`,
        blurb: ` don't call it a "concentration camp`,
        index: 117
    },
    {
        title: `Jones Day Made Trump" - Live at Harvard Law with David Enrich"`,
        date: `FEBRUARY 7, 2023`,
        slug: `jones-day-made-trump-live-at-harvard-law-with-david-enrich`,
        content: ``,
        description: `Recorded live at Harvard Law School's Corporate Capture of the Legal System conference`,
        blurb: ` we're talking about Jones Day. The law firm jumps into bed with all manner of villains with the justification that "everyone deserves representation." But as David Enrich`,
        index: 118
    },
    {
        title: `Connick v. Thompson Encore`,
        date: `FEBRUARY 14, 2023`,
        slug: `connick-v-thompson-encore`,
        content: ``,
        description: `What is the greater crime? Missing a recording and pushing an episode back by a week … or using the full power of the state to prosecute a man for something he did not do, confining him in solitary as he awaits execution, and then appealing the remedy that he is awarded when exculpatory evidence (that the prosecution probably hid from the defense) resurfaces? Anyway, here's an encore of Connick v. Thompson to help you get hype for next week's Premium episode about prosecutorial immunity.`,
        blurb: `A podcast where we sometiems we say that we're going to do an episode, but then we don't do an episode`,
        index: 119
    },
    {
        title: `In re Gault with Josie Duffy Rice`,
        date: `FEBRUARY 28, 2023`,
        slug: `in-re-gault-with-josie-duffy-rice`,
        content: ``,
        description: `It's not easy being a kid. Especially when the state thinks you don't have any constitutional rights. Thank goodness for this week's case, In re Gault, where the Court decides you can have a little rights, as a treat.`,
        blurb: `A podcast where we dissect and analyze the Supreme Court cases that have left our nation fatigued and struggling, like a podcaster with a sinus infection`,
        index: 120
    },
    {
        title: `Boyle v. United Technologies Corporation`,
        date: `MARCH 21, 2023`,
        slug: `boyle-v-united-technologies-corporation`,
        content: ``,
        description: `What does a military contractor have in common with Justice Antonin Scalia? They both manufacture things! The contractor manufactures helicopters with faulty escape hatches. Scalia manufactures, out of whole cloth, new laws about who can be held liable for deaths. Neither of them care if you live or die, as long as the designs are to spec!`,
        blurb: `A podcast where we dissect and analyze the Supreme Court cases that have left us drained and dying, like an insolvent venture capital bank`,
        index: 121
    },
    {
        title: `5-4 x Bloc Party: Michael on How the Dems Flopped on Debt Relief`,
        date: `MARCH 28, 2023`,
        slug: `5-4-x-bloc-party--michael-on-how-the-dems-flopped-on-debt-relief`,
        content: ``,
        description: `Breaking news! It's not just the Supreme Court that sucks - it's ALSO the executive and legislative branches!  This week we're sharing Michael's appearance on Bloc Party, talking about how oral arguments went down in the SCOTUS cases that could make or break Biden’s student loan cancellation initiative.  Eleni Schirmer from the Debt Collective also joins in, to cringe at Roberts’ lawnmower commentary and reflect on the way Biden is (or more notably…is not) exercising his executive authority. Bloc Party is a show from Justice Democrats about the fight for the soul of the Democratic Party, featuring progressive champions challenging the status quo from inside the halls of power and the organizers transforming the party’s agenda from the outside. You can find it wherever you found this podcast.`,
        blurb: `We do class warfare from 9 to 5 PM everybody`,
        index: 122
    },
    {
        title: `Cruzan v. Missouri Department of Health`,
        date: `APRIL 4, 2023`,
        slug: `cruzan-v-missouri-department-of-health`,
        content: ``,
        description: `This episode contains discussions about the right to die, end of life matters, and suicide, which may be uncomfortable for some listeners. If you or someone you know is struggling with thoughts of suicide, please seek help immediately. Resources and support for those in need can be found at the National Suicide Prevention Lifeline at 988lifeline.org, or by dialing 988. Please take care while listening.`,
        blurb: `A podcast where we dissect and analyze the Supreme Court cases that are sinking our civil liberties, like Ron DeSantis sinking his fingers into a cup of pudding`,
        index: 123
    },
    {
        title: `Ewing v. California`,
        date: `APRIL 18, 2023`,
        slug: `ewing-v-california`,
        content: ``,
        description: `The tension is palpable with the count tied at 3-2 ... the defendant steps up to the plate and … OH! Swing and a miss! That's the third strike for our defendant which means the Court is going home with the win and the defendant is going to jail forever!  Tax payers will also move down in the standings; they'll be footing the bill for senseless incarceration for 25 years to life. The 8th Amendment also takes a hit with this loss, moving down from "Constitutional law" to "that's just your opinion, man." If you think this episode description is dumb, wait until you hear the rationale in the decision.`,
        blurb: `A podcast where we dissect and analyze the Supreme Court cases that have left our liberties frayed and fading like a set of Nazi linens at a billionare's dinner party`,
        index: 124
    },
    {
        title: `Palmer v. Thompson`,
        date: `May 2, 2023`,
        slug: `palmer-v-thompson`,
        content: ``,
        description: `Jackson, Mississippi out here with the supervillian-level attitude towards public goods - "if I have to share, then no one can have it."`,
        blurb: `A podcast where we dissect and analyze the Supreme Court cases that have left our civil rights empty, like Fox News' prime time lineup without Tucker Carlson`,
        index: 125
    },
    {
        title: `The Shadow Docket with Steve Vladeck`,
        date: `May 9, 2023`,
        slug: `the-shadow-docket-with-steve-vladeck`,
        content: ``,
        description: `As the Court has moved right, it's been using the "shadow docket" to execute on more of its agenda. Previously reserved for emergencies, like stays of executions, the process of hearing cases outside of the Court's ordinary calendar is now frequently used to issue unsigned and unexplained decisions that overturn the status quo. We'll dig into it with University of Texas School of Law professor Steve Vladeck, and author of The Shadow Docket: How the Supreme Court Uses Stealth Rulings to Amass Power and Undermine the Republic.`,
        blurb: `A podcast where we dissect and analyze the Supreme Court cases that left our civil rights weak, embarrassing, and pathetic like a Twitter Blue subscriber trying to go viral`,
        index: 126
    },
    {
        title: `United States v. O'Brien`,
        date: `May 23, 2023`,
        slug: `united-states-v-obrien`,
        content: ``,
        description: `War, huh, yeah. What is it good for? Curtailing the First Amendment!`,
        blurb: `A podcast where we dissect and analyze the Supreme Court cases that have left our liberties ailing, like me sickly cohosts`,
        index: 127
    },
    {
        title: `Sierra Club v. Morton`,
        date: `June 6, 2023`,
        slug: `sierra-club-v-morton`,
        content: ``,
        description: `I am Bill Douglas, I speak for the trees.  I speak for the trees, for the trees have no tongues. And I'm asking you, sir, at the top of my lungs - who does have standing? Unless … 👉👈`,
        blurb: `A podcast where we dissect and analyze the Supreme Court cases that are sinking our civil rights, like orcas are sinking boats off the coast of Gibraltar`,
        index: 128
    },
    {
        title: `American Ship Building Company v. National Labor Relations Board`,
        date: `June 13, 2023`,
        slug: `american-ship-building-company-v-national-labor-relations-board`,
        content: ``,
        description: `When the union's inspiration through the workers' blood shall run. There can be no power greater anywhere beneath the sun. Unless the highest court in all the land decides that you are done. Then your union job is gone.`,
        blurb: `A podcast where we dissect and analyze the Supreme Court cases that are destroying our rights, like a middle-aged man in Oakleys destroying a pride display at Target`,
        index: 129
    },
    {
        title: `Protecting Trans Rights with Erin Reed [UNLOCKED]`,
        date: `June 22, 2023`,
        slug: `protecting-trans-rights-with-erin-reed-[unlocked]`,
        content: ``,
        description: `This episode was available early to Premium members. If you'd like that kind of perk, consider joining at fivefourpod.com/support.  Journalist Erin Reed monitors assaults to trans rights across the country. We talked to her about the evolution of anti-trans legislation, common conservative strategies, and what cases might end up before the Supreme Court. You can find Erin's incredible "Anti-Trans Legislative Risk Map" at erininthemorning.com. It's a map of "two Americas - one where trans people have full legal protections, and one where they are persecuted by the state."`,
        blurb: `A podcast where we dissect and analyze the Supreme Court cases that have ruined our country, like cops ruining a pride parade`,
        index: 130
    },
    {
        title: `Sackett v. EPA (Sackett II)`,
        date: `June 27, 2023`,
        slug: `sackett-v-epa-sackett-ii`,
        content: ``,
        description: `What has a head and a mouth, but cannot wear a hat? A river! What has its head up its ass, and cannot interpret the Clean Water Act correctly? The Supreme Court!`,
        blurb: `A podcast where we dissect and analyze the Supreme Court cases that have banned our civil rights, like Twitter banning its bravest and coolest posters`,
        index: 131
    },
    {
        title: `303 Creative LLC v. Elenis`,
        date: `July 4, 2023`,
        slug: `303-creative-llc-v-elenis`,
        content: ``,
        description: `In this case from this past Friday, the Court has added a giant loophole to our anti-discrimination laws. How big is the loophole? About the size of a 161'6" super yacht or a Bombardier Global 5000 private jet.`,
        blurb: `A podcast where we dissect and analyze the Supreme Court cases that have choked our civil rights, like smoke from Canadian wildfires choking New York City`,
        index: 132
    },
    {
        title: `Biden v. Nebraska`,
        date: `July 11, 2023`,
        slug: `biden-v-nebraska`,
        content: ``,
        description: `Absolutely f**k the major questions doctrine, fuck this Court, and f**k student loan debt. Come get pissed with us.`,
        blurb: `A podcast where we dissect and analyze the Supreme Court cases that have weighed down our nation, like student debt weighing down a liberal arts student's finances`,
        index: 133
    },
    {
        title: `DeShaney v. Winnebago County Department of Social Services`,
        date: `July 18, 2023`,
        slug: `deshaney-v-winnebago-county-department-of-social-services`,
        content: ``,
        description: `This episode discusses child abuse. We urge you to take care while listening.`,
        blurb: `A podcast where we dissect and analyze the Supreme Court cases that are imploding our civil rights, like a homemade submersible imploding at the bottom of the Atlantic`,
        index: 134
    },
    {
        title: `Harisiades v. Shaughnessy`,
        date: `August 8, 2023`,
        slug: `harisiades-v-shaughnessy`,
        content: ``,
        description: `The lapsed memberships of your youth can be held against you in immigration proceedings. It's only a matter of time until all Neopets users are deported.`,
        blurb: `A podcast where we dissect and analyze the Supreme Court cases that have abandoned our civil rights, like our co-host Rhiannon abandoning us when we cover 1st amendment cases`,
        index: 135
    },
    {
        title: `Students for Fair Admissions v. Harvard`,
        date: `August 15, 2023`,
        slug: `students-for-fair-admissions-v-harvard`,
        content: ``,
        description: `The Supreme Court has overturned one of our nation's only proactive strategies for addressing its foundational sin. But what's worse, the most annoying guy on the cross country team just lost his last best excuse for why he didn't get into Harvard. Enjoy SUNY Binghamton, Bronckton!.`,
        blurb: `A podcast where we dissect and analyze the Supreme Court cases that have left our civil rights struggling, like a young white white boy trying to get into Emory`,
        index: 136
    },
    {
        title: `Welcome to Law School 2023`,
        date: `August 29, 2023`,
        slug: `welcome-to-law-school-2023`,
        content: ``,
        description: `Just like clockwork, the Spirit Halloweens are popping up and law students are heading back to campus, which means it's time for our Welcome to Law School episode. Come for the updates, and stay for the milk crate challenge!`,
        blurb: `A podcast where we usually dissect and analyze the Supreme Court cases that, blah, blah, blah.`,
        index: 137
    },
    {
        title: `United States v. Sioux Nation with Nick Estes`,
        date: `September 5, 2023`,
        slug: `united-states-v-sioux-nation-with-nick-estes`,
        content: ``,
        description: `We're joined by Nick Estes, of The Red Nation podcast to talk about Indigenous sovereignty, land back, and how stupid Mount Rushmore is.  You can find Nick's work at www.therednation.org.`,
        blurb: `A podcast where we dissect and analyze the Supreme Court cases that are breaking our civil rights, like mercury breaking through our thermometers`,
        index: 138
    },
    {
        title: `2023-2024 Term Preview with Chris Geidner`,
        date: `September 20, 2023`,
        slug: `2023-2024-term-preview-with-chris-geidner`,
        content: ``,
        description: `Doesn't it feel like we JUST did a term recap episode? What if the Supreme Court just like took a gap year or something, and left us all in peace for once. Wouldn't that be nice? Alas, no such luck. You're losing more rights this year … AGAIN.`,
        blurb: `A podcast where we dissect and analyze the Supreme Court cases that have rattled our civil liberties, like repeated sacks rattling a quarterback's brain`,
        index: 139
    },
    {
        title: `Hampton v. United States`,
        date: `September 26, 2023`,
        slug: `hampton-v-united-states`,
        content: ``,
        description: `My life is a movie! A movie where a federal agent sets me up to do a drug deal by providing the buyers and the drugs but somehow that's not entrapment! A horror movie if you will. Here's the This American Life episode that Michael recommends, "What I Did for Love." https://www.thisamericanlife.org/457/what-i-did-for-love`,
        blurb: `A podcast where we dissect and analyze the Supreme Court cases that have jerked around our civil rights, like a Republican congresswoman, jerking off her boyfriend in a public theater`,
        index: 140
    },
    {
        title: `Berghuis v. Thompkins`,
        date: `October 10, 2023`,
        slug: `berghuis-v-thompkins`,
        content: ``,
        description: `In a world where the police are charged with protecting your Constitutional rights, they'd be climbing all over themselves to read you your Miranda Rights. We don't live in that world.`,
        blurb: `A podcast where we dissect and analyze the Supreme Court cases that have disrupted our civil rights, like shots of Taylor Swift disrupting an NFL broadcast`,
        index: 141
    },
    {
        title: `Geduldig v. Aiello`,
        date: `October 17, 2023`,
        slug: `geduldig-v-aiello`,
        content: ``,
        description: `This case about discrimination on the basis of pregnancy might have you thinking that Potter Stewart said "trans rights are human rights." Absolutely not. Mans said "get back in the kitchen, wench"`,
        blurb: `A podcast where we dissect and analyze the Supreme Court cases that have interrupted the arc of history, like Michael's dogs interupting our recordings`,
        index: 142
    },
    {
        title: `Palestine Legal: "The Great Difference a Movement Lawyer Can Make"`,
        date: `October 24, 2023`,
        slug: `palestine-legal--the-great-difference-a-movement-lawyer-can-make`,
        content: ``,
        description: `We're sharing this episode of Rhiannon's movement lawyering series with all of our listeners. Our Patreon subscribers heard it first, back in March. In this episode, Rhiannon talks with Palestine Legal's senior staff attorney Radhika Sainath and staff attorney Dylan Saba about their mission to protect Palestinian activists from harassment, and the power of intersectional liberation movements. You can learn more about Palestine Legal here: https://palestinelegal.org/. And if you'd like to join the network of attorneys that Palestine Legal works with to defend activists, reach out here: https://palestinelegal.org/contact. This episode is living proof that if you're not a 5-4 Premium member, you're not hearing every episode! To get exclusive Premium-only episodes, access to our Slack community, and more, join at fivefourpod.com/support.`,
        blurb: `A podcast about how much the Supreme Court, and apartheid, suck`,
        index: 143
    },
    {
        title: `Schenk v. United States`,
        date: `November 14, 2023`,
        slug: `schenk-v-united-states`,
        content: ``,
        description: `War! Huh! Yeah! What is it good for? Absolutely suppressing speech! Read "The Anti-Surveillance Coalition's Highest-Stakes Gamble" by Spencer Ackerman https://foreverwars.ghost.io/the-anti-surveillance-coalitions-highest-stakes-gamble/ Listen to Know Your Enemy: Elon Musk, the Jews, and the ADL, with Mari Cohen, Alex Kane, and Peter Beinart https://www.dissentmagazine.org/blog/know-your-enemy-elon-musk-adl/`,
        blurb: `A podcast where we dissect and analyze the Supreme Court decisions that have left us blinded and aimless like NFT owners after a Bored Ape yacht club event`,
        index: 144
    },
    {
        title: `Richardson v. Ramirez`,
        date: `November 21, 2023`,
        slug: `richardson-v-ramirez`,
        content: ``,
        description: `We want to dedicate this episode to Vermont and Maine, the only two states in this whole goddamn country that let everyone exercise their Constitutional right to vote. What are they putting in that syrup? Everywhere else, you've got Richardson v. Ramirez to thank for the movement to disenfranchise people who've been caught up in the criminal punishment system.`,
        blurb: `A podcast where we dissect and analyze the Supreme Court cases that have burned down our civil rights, like a person trying to deep-fry a turkey burning down their home`,
        index: 145
    },
    {
        title: `Glacier Northwest, Inc. v. International Brotherhood of Teamsters`,
        date: `December 6, 2023`,
        slug: `glacier-northwest-inc-v-international-brotherhood-of-teamsters`,
        content: ``,
        description: `Our nation has laws, procedures, and courts for settling labor disputes. But what if you're a concrete company and you don't wannnnnnnnnnnnnna go through the system that Congress authorized specifically for this purpose? Then you take it to state court baybeeee - and see if SCOTUS will let you sneak out of the National Labor Relations Board process.`,
        blurb: `A podcast where we dissect and analyze the Supreme Court cases that have left us draped in darkness, like daylight savings time during the winter`,
        index: 146
    },
    {
        title: `How to Lose Your Job by Supporting Palestine [UNLOCKED]`,
        date: `December 21, 2023`,
        slug: `how-to-lose-your-job-by-supporting-palestine-[unlocked]`,
        content: ``,
        description: `This episode was available early to Premium members. If you'd like that kind of perk, consider joining at fivefourpod.com/support. Ryna Workman and Jinan Chehade were both knocked off the Big Law course they thought they were on, after expressing solidarity with Palestine. Now they're on a mission to make some good trouble.`,
        blurb: `A podcast where we dissect and analyze the Supreme Court cases that have rescinded our civil rights, like a law firm rescinding a Palestinian activist's job offer`,
        index: 147
    },
    {
        title: `The 5-4 Giving Guide 2023`,
        date: `December 22, 2023`,
        slug: `the-5-4-giving-guide-2023`,
        content: ``,
        description: `Every year we like to shout out organizations that inspire us or have deeply embarrassing kompromat on us. Good luck guessing which is which!`,
        blurb: `A podcast where we celebrate Christmas, guys. The birth of our Lord and savior Jesus Christ. THE OFFICIAL GOD of the 5-4 podcast.`,
        index: 148
    },
    {
        title: `The Federalist Society, part 1: Immodest Origins`,
        date: `January 23, 2024`,
        slug: `the-federalist-society-part-1--immodest-origins`,
        content: ``,
        description: `There's a powerfully connected right-wing organization operating at every elite law school in the nation. It built itself by leveraging the conservative victim complex, the Reagan revolution, networks of judges and activists, and cold hard psycho millionaire cash.  This is the story of the Federalist Society. If you can't get enough of these monsters, you may want to read The Rise of the Conservative Legal Movement: The Battle for Control of the Law (Princeton, 2008) by Steven Teles, or listen to ProPublica and WNYC's "We Don't Talk About Leonard" series on On the Media.`,
        blurb: `A podcast where we dissect and analyze the Supreme Court cases that have ruined our constitution like the polar vortex is ruining my week`,
        index: 149
    },
    {
        title: `The Federalist Society, part 2: The Debate Club`,
        date: `January 30, 2024`,
        slug: `the-federalist-society-part-2--the-debate-club`,
        content: ``,
        description: `First you get the money, then you get the power. But FIRST first you get the law students. This week we're exploring the tentacles of the Federalist Society, and how a so-called debate club pulls levers across government, the legal profession, and academia, to achieve its conservative ideological goals.`,
        blurb: `A podcast where we dissect and analyze the Supreme Court cases that have torn apart our country, like award season is tearing apart my household`,
        index: 150
    },
    {
        title: `The Federalist Society, part 3: The Spoils`,
        date: `February 6, 2024`,
        slug: `the-federalist-society-part-3--the-spoils`,
        content: ``,
        description: `The greatest trick the Devil ever pulled was convincing the world he didn’t exist. He learned it from the Federalist Society, by watching them steadily shift the terms on which all contemporary legal issues are argued. Now even progressive jurists feel compelled to debate the debate club on its own turf. The Devil is duly impressed. For more about what Fed Soc hath wrought, check out Amanda Hollis-Brusky's Ideas with Consequences: The Federalist Society and the Conservative Counterrevolution (Oxford University Press, 2019).`,
        blurb: `A podcast where we dissect and analyze the Supreme Court cases that have ruined our constitution, like construction noises ruining my week`,
        index: 151
    },
    {
        title: `Maryland v. Shatzer`,
        date: `February 20, 2024`,
        slug: `maryland-v-shatzer`,
        content: ``,
        description: `Groundhog Day but make it interrogation. The Supreme Court says cops are welcome to keep hauling you in for questioning as long as they honor an arbitrary waiting period.`,
        blurb: `A podcast where we dissect and analyze the Supreme Court cases that have caused our nation to collapse, like Kyle Shanahan in the super bowl.`,
        index: 152
    },
    {
        title: `Trump v. Anderson`,
        date: `March 7, 2024`,
        slug: `trump-v-anderson`,
        content: ``,
        description: `We're joined by Balls and Strikes' Jay Willis in this emergency episode to talk about Trump v. Anderson, which challenged Colorado removing Trump from the primary ballot. In a shocking twist, the Court held that Colorado can't do that. JK that's not shocking - the twist is that the dogs you hear barking in this episode are Jay's, not Michael's.`,
        blurb: `A podcast where we dissect and analyze the Supreme Court cases that have abandoned our civil liberties like Peter abandoning the podcast this week`,
        index: 153
    },
    {
        title: `Illinois v. Caballes`,
        date: `March 19, 2024`,
        slug: `illinois-v-caballes`,
        content: ``,
        description: `This is the story of a man with the worst luck in the whole world, and how Jay-Z called the whole thing.`,
        blurb: `A podcast where we dissect and analyze the Supreme Court cases that have confiscated our liberty like airport security confiscating my water bottles`,
        index: 154
    },

    // More content...
];

(function () {
    // Get the DOM elements
    let form = document.querySelector('#form-search');
    let input = document.querySelector('#input-search');
    let resultList = document.querySelector('#search-results');
    let searchStatus = document.querySelector('#search-status');
    
    if (!form || !input || !resultList || !searchStatus || !searchIndex) return;

    form.addEventListener('submit', submitHandler);
    // console.log('loaded listener')


    /**
     * Handle submit events
     */
    function submitHandler (event) {
        event.preventDefault();
        search(input.value);
    }

    let stopWords = ['a', 'an', 'and', 'are', 'aren\'t', 'as', 'by', 'can', 'cannot', 'can\'t', 'could', 'couldn\'t', 'how', 'is', 'isn\'t', 'it', 'its', 'it\'s', 'that', 'the', 'their', 'there', 'they', 'they\'re', 'them', 'to', 'too', 'us', 'very', 'was', 'we', 'well', 'were', 'what', 'whatever', 'when', 'whenever', 'where', 'with', 'would', 'yet', 'you', 'your', 'yours', 'yourself', 'yourselves', 'the', 'vanilla', 'javascript', 'js'];

/**
 * Search for matches
 * @param  {String} query The term to search for
 */
function search (query) {
    // console.log(query)

    // Create a regex for each query
    let regMap = query.toLowerCase().split(' ').filter(function (word) {
        return word.length && !stopWords.includes(word);
    }).map(function (word) {
        return new RegExp(word, 'i');
    });

    
    // Get and sort the results
    let results = searchIndex.reduce(function (results, article, index) {
        // Setup priority count
        let priority = 0;

        // Assign priority
        for (let reg of regMap) {
            if (reg.test(article.title)) { priority += 100; }
            let contentOccurences = article.content.match(reg);
            let descriptionOccurences = article.description.match(reg);
            let blurbOccurences = article.blurb.match(reg);
            
            if (contentOccurences) { priority += contentOccurences.length; }
            if (descriptionOccurences) { priority += descriptionOccurences.length; }
            if (blurbOccurences) { priority += blurbOccurences.length; }
        }

        // If any matches, push to results
        if (priority > 0) {
            results.push({
                priority: priority,
                article: article
            });
        }

        return results;
    }, []).sort(function (article1, article2) {
        return article2.priority - article1.priority;
    });

    // Display the results
    showResults(results);
}

/**
 * Show the search results in the UI
 * @param  {Array}  results The results to display
 */
function showResults (results) {
    if (results.length) {
        searchStatus.innerHTML = `<p>Found ${results.length} matching episodes</p>`;
        resultList.innerHTML = myTemplate(results);
        var coll = document.getElementsByClassName("collapsible");

        for (var i = 0; i < coll.length; i++) {
            coll[i].addEventListener("click", function() {
                this.classList.toggle("active");
                var content = this.nextElementSibling;
                if (content.style.maxHeight) content.style.maxHeight = null;
                else content.style.maxHeight = content.scrollHeight + "px"; 
            });
        }
    } else {
        searchStatus.innerHTML = '<p>Sorry, no matches were found.</p>';
        resultList.innerHTML = '';
    }
}

/**
 * Show the search results in the UI
 * @param  {Array}  results The results to display
 */
 function myTemplate (results) {
    // console.log(results)
    const r = results.flatMap((res) => {
        return `
        <div class="collapsible">${res.article.title}<a style=float:right;>${res.article.index}</a></div>
            <div class="content">
                <div>
                    <p>${res.article.description}</p>
                    <div class="transcript-wrapper">
                        <a href="/episodes/${res.article.slug}/" class="transcript-btn">TRANSCRIPT</a>
                    </div>
                </div>
            </div>
        `
    }).join('')
    return r
}

})();
