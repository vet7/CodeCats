// Meet the Team section, function to show each person's profile on click
function showProfile1(imgs) {

  document.getElementById("CB").style.opacity = "1";
  document.getElementById("JK").style.opacity = "0.6";
  document.getElementById("JR").style.opacity = "0.6";
  document.getElementById("EM").style.opacity = "0.6";
  document.getElementById("AN").style.opacity = "0.6";
  document.getElementById("YY").style.opacity = "0.6";

  var profileImg = document.getElementById("profileimg");
  profileImg.src = "assets/Personality_Tests/Chelsea.jpg";
  profileimg.parentElement.style.display = "block";
  document.getElementById('name').innerHTML = "Chelsea Bragg";
  document.getElementById("bio").innerHTML = "Chelsea currently lives in Townsville QLD, where she works as a Daycare Teacher. She has always had an interest in IT, particularly when it comes to videogames. Videogames have always been a massive part of her life. She would use them as an escape when she was a child, often spending hours on her Game Boy trying to complete her Pokédex in Pokémon Yellow. She dabbled in a few IT classes in high school, obtaining Certificate I and II in IT. Career-wise, she spent a few years as an IT Support Technician, offering rudimentary tech support, which usually involved assisting elderly customers with their emails. Although she enjoyed this role, she did not find it particularly challenging, which is a big part as to why she has decided to enter into a Bachelor of Information Technology at RMIT. Outside of IT, her hobbies include drawing, cooking and learning Japanese. ";
  document.getElementById("overview").innerHTML = "Overview: Chelsea is an INFJ. INFJs are considered to be creative, nurturing, insightful and future-oriented individuals. They are described as deep and complex idealists; despite being reserved and quiet. They are considered natural and passionate leaders and are constantly seeking meaning and purpose in everything, but they also have the ability to work logically and rationally when necessary. INFJs tend to have excellent communication skills, especially when it comes to writing. Warm and affirming, they are committed to a better tomorrow and will continuously try to make everyone's life a little bit better. They are also passionate, with a strong sense of personal integrity, and when they determine that something is important to them, they will pursue that goal no matter what. Because of this, they tend to burn out easily. Their sensitive nature leads them to be very private and selective when sharing thoughts and information. Because of this, they can be reluctant to approach or engage people who differ from them, making them hard to get to know (NERIS Analytics 2021)."
  document.getElementById("reflection").innerHTML = "Reflection: As indicated in the results, an INFJs traits are very conflicting, with which I resonate. Personally, I do not consider myself a leader in any sense of the word. I am, however, very passionate and goal orientated, and so when it comes to seeing those goals to fruition, I can be quite outspoken and yet, in all other aspects of my life, come across as very reserved, timid even. I often try to find ways to express myself creatively, but as someone very private and sensitive to criticism, I tend to be very selective of who I choose to share that side of myself with. I am extremely loyal and regularly put the needs of friends and family before my own, often leading me to take on too much. To reach a healthy balance, I need to open myself up and have a little more faith in the decision's others make.";
}

function showProfile2(imgs) {
  document.getElementById("CB").style.opacity = "0.6";
  document.getElementById("JK").style.opacity = "1";
  document.getElementById("JR").style.opacity = "0.6";
  document.getElementById("EM").style.opacity = "0.6";
  document.getElementById("AN").style.opacity = "0.6";
  document.getElementById("YY").style.opacity = "0.6";

  var profileImg = document.getElementById("profileimg");
  profileImg.src = "assets/Personality_Tests/Jake.jpg";
  profileimg.parentElement.style.display = "block";
  document.getElementById('name').innerHTML = "Jake Kent";
  document.getElementById("bio").innerHTML = "Jake is an aspiring web developer and IT professional who grew up in a small town in NSW. While working he has found a love for problem solving and data analysis and decided that the right field for him to be in would be IT. In 2020 he obtained Diploma of Information Technology through TAFE Digital, and in March 2021 began a bachelor degree through RMIT via Open Universities. In his spare time he likes to grow chilis, adding a healthy amount to every meal he cooks. He also tries to slowly learn Spanish to communicate with work colleagues and friends. ";
  document.getElementById("overview").innerHTML = "Overview: Jake is an advocate INFJ-T. ‘Being creative, insightful, principled, passionate, and altruistic are strengths. Advocates stand out for imagination, compassion, integrity, and deeply held principles. Unlike many other idealistic types, however, they are also capable of turning their ideals into plans and executing them. There are challenges too. The most idealistic and dedicated of personality types can become frustrated when it comes to navigating interpersonal conflicts, confronting unpleasant facts, pursuing self-realization, or finding a fulfilling career path. They can be sensitive to criticism, reluctant to open up and can be easily burnout’ (NERIS Analytics 2021). "
  document.getElementById("reflection").innerHTML = "Reflection: The tests reflect my character decently. The tests highlight that I am emotionally aware and that I care for and feel empathy for the people around me, as well as helping to increase the happiness of the people I interact with. All of these traits are goals that I actively strive for and want to be hallmarks of my personality. ";
}

function showProfile3(imgs) {
  document.getElementById("CB").style.opacity = "0.6";
  document.getElementById("JK").style.opacity = "0.6";
  document.getElementById("JR").style.opacity = "1";
  document.getElementById("EM").style.opacity = "0.6";
  document.getElementById("AN").style.opacity = "0.6";
  document.getElementById("YY").style.opacity = "0.6";

  var profileImg = document.getElementById("profileimg");
  profileImg.src = "assets/Personality_Tests/Ashvin.jpg";
  profileimg.parentElement.style.display = "block";
  document.getElementById('name').innerHTML = "Joseph Ashwin Royan";
  document.getElementById("bio").innerHTML = "Ashwin was born in Singapore and grew up in Malaysia. He moved to Australia to study and work, and he currently lives in Perth. Apart from English he can speak Malay conversationally. He has a background in industrial design and has some experience with graphic design and illustration. He has been fascinated with computers and technology since he was young. He especially likes the act of creating something new and thinking about possible implications and applications. He doesn’t have any professional experience with IT, but he has self-learned some rudimentary Flash, HTML, CSS and Python. In his free time, he likes to exercise - specifically power and Olympic lifting or ride my bicycle around the nearby lake. He also enjoys playing video games, cooking, listening to history and philosophy podcasts, and petting his cat Nebby.  ";
  document.getElementById("overview").innerHTML = "Overview: For the Myers Briggs personality test, Ashwin Royan’s results are INFP-T or a ‘Turbulent Mediator’ personality. Mediators are quiet and private with idealistic perspectives. Mediators typically get along with others and try to resolve problems and antagonisms. Turbulent mediators tend to use their idealism to determine the best course of action to improve themselves and resolve problems. Their weaknesses tend to be expecting too much of themselves and getting overwhelmed with unrealistic expectations. Small mistakes, in their eyes tend to lead to doubts and passivity. As for the learning style test, Ashwin Royan scored high on the ‘reflector’ learning style. Reflectors prefer to observe and absorb information cautiously – collecting and analysing before reaching a conclusion. Reflectors usually see a big picture using previous experience and the current situation (NERIS Analytics 2021). "
  document.getElementById("reflection").innerHTML = "Reflection: The Discussions, time to absorb information and feedback from others are useful for this learning style. As for the Big 5 personality test; Ashwin Royan got a low score on extroversion and a higher score for intellect, imagination, and agreeableness. The scores are a scale relative to other people who have taken the test. I think that this test is accurate in that I do tend to be quite introverted and quiet. This tends to lead in my neglecting to mention as much information is necessary or getting help before I need it. These results help me be more aware of my strengths and weaknesses and help me realise what I can work on to improve in a team setting. For example, I can improve by communicating more – both my opinions and problems. The results also help me understand that I need time to process information so should refrain from doing work at the last minute.  ";
}

function showProfile4(imgs) {
  document.getElementById("CB").style.opacity = "0.6";
  document.getElementById("JK").style.opacity = "0.6";
  document.getElementById("JR").style.opacity = "0.6";
  document.getElementById("EM").style.opacity = "1";
  document.getElementById("AN").style.opacity = "0.6";
  document.getElementById("YY").style.opacity = "0.6";

  var profileImg = document.getElementById("profileimg");
  profileImg.src = "assets/Personality_Tests/Eun_Mi.jpg";
  profileimg.parentElement.style.display = "block";
  document.getElementById('name').innerHTML = "Eun Mi Seo";
  document.getElementById("bio").innerHTML = "Eun Mi is from South Korea and migrated to Melbourne 10 years ago. Back in Korea, she received a Bachelor of Arts, specialising in literature, and worked at one of the biggest retail companies there for ten years. Currently she is working at an online security company as an authentication analyst, and she wants to develop her career in IT industry. She started her job without any IT knowledge or tech skills and believes understanding the IT industry with some technical skills is crucial to her career development and she also would like to learn more about Cybersecurity. In her spare time, she enjoys watching AFL and cricket games and listening to music.  ";
  document.getElementById("overview").innerHTML = "Overview: Eunmi is an ‘Assertive Defender’. Defenders prefer to support others over taking the lead. They are generous in sharing their knowledge and experience with others, and feel pride in making contributions that go beyond what others may expect. Defenders feel a deep sense of responsibility towards their peers, which means they are very reliable and will consistently exercise patience and respectful behaviour. Given their nature, however, Defenders can appear introverted, as their strong empathetic nature causes them to fear they may offend others, often deterring them from expressing their ideas and feelings. In terms of learning style, Eunmi is a ‘Theorist’. Theorists tend to adopt a logical approach, preferring facts and objectivity to imagination and speculation. They like to find patterns in data, and make assessments and evaluations according to accepted principles and theoretical models. Their desire for structure makes Theorists disciplined and highly organised. In Big Five Tests, Eunmi was strong in Emotional Stability and Conscientiousness, which is consistent with her results as both an Assertive Defender and a Theorist. Overall, Eunmi is organised, disciplined and thorough; consequently, she likes routine and planning. These traits, however, can lead her to be anxious and stressed if she encounters situations that are less structured or concrete. (NERIS Analytics 2021). "
  document.getElementById("reflection").innerHTML = "Reflection: The results provided me with valuable information, analysing my strengths and weaknesses, and gave me some ideas about working in a team more efficiently. I am shy and humble, so I will not be suitable as a leader, however I can help others by being supportive, reliable, patient, and empathetic. I can contribute to creating an amicable and comfortable environment throughout the group project. As shown in the test results, I am strong at organising, planning, checking details, and finishing things on time. I can utilise these strengths in the group to organise meetings, taking meeting minutes, and checking our timeline to ensure everyone is on track to complete the assignment. In the meantime, I will need to be careful not to take things too personally and try to speak up and share my ideas instead of suppressing myself. Opening myself up and proactively communicating with others will help me release any stress and worries. ";
}

function showProfile5(imgs) {
  document.getElementById("CB").style.opacity = "0.6";
  document.getElementById("JK").style.opacity = "0.6";
  document.getElementById("JR").style.opacity = "0.6";
  document.getElementById("EM").style.opacity = "0.6";
  document.getElementById("AN").style.opacity = "1";
  document.getElementById("YY").style.opacity = "0.6";

  var profileImg = document.getElementById("profileimg");
  profileImg.src = "assets/Personality_Tests/Arian.jpg";
  profileimg.parentElement.style.display = "block";
  document.getElementById('name').innerHTML = "Arian Najafi Yamchelo";
  document.getElementById("bio").innerHTML = "Arian is from Iran and he migrated to Melbourne, Australia 10 years ago. He graduated from high school in Iran before moving out. He speaks Farsi and Turkish, studied a couple of certificates in spoken and written English upon arrival in Australia. Besides that, he has completed a Certificate IV in programming. He is interested in game development and always wanted to work with popular gaming studios. His eldest brother, a computer hardware engineer bought him the first laptop. Since then, his passion for coding started, and he wants to be a software developer. In his spare time, he likes to play video games and workout. Being an animal lover, he has three dogs, Sunny, Heeva (German Shepherds) and Teddy (Samoyed), and a cat named Barfi (Persian Cat). ";
  document.getElementById("overview").innerHTML = "Overview: ‘The Defender personality type is quite unique, as many of their qualities defy the definition of their individual traits. Though sensitive, Defenders have excellent analytical abilities; though reserved, they have well-developed people skills and robust social relationships; and though they are generally a conservative type, Defenders are often receptive to change and new ideas. As with so many things, people with the Defender personality type are more than the sum of their parts, and it is the way they use these strengths that defines who they are. There’s hardly a better type to make up such a large proportion of the population, nearly 13%. Combining the best of tradition and the desire to do good, Defenders are found in lines of work with a sense of history behind them, such as medicine, academics and charitable social work’ (NERIS Analytics 2021). "
  document.getElementById("reflection").innerHTML = "Reflection: The results reflect who I am fairly well, I prefer solitary activities and tend to be quiet and listen more which I don’t enjoy about myself. I am more of an observant individual and highly practical in gathering information from the world around me. Emotionally expressive, sensitive feelings and empathic though highly organised and value clarity. ";
}

function showProfile6(imgs) {
  document.getElementById("CB").style.opacity = "0.6";
  document.getElementById("JK").style.opacity = "0.6";
  document.getElementById("JR").style.opacity = "0.6";
  document.getElementById("EM").style.opacity = "0.6";
  document.getElementById("AN").style.opacity = "0.6";
  document.getElementById("YY").style.opacity = "1";

  var profileImg = document.getElementById("profileimg");
  profileImg.src = "assets/Personality_Tests/Yvette.jpg";
  profileimg.parentElement.style.display = "block";
  document.getElementById('name').innerHTML = "Yvette Yang";
  document.getElementById("bio").innerHTML = "Yvette was born in the United States and raised in Australia. Currently she lives in Sydney. Apart from English, she speaks basic mandarin. She has previously completed a Diploma in Communication & Media and has recently transferred from a Bachelor of Design in Architecture to a Bachelor in Information Technology. She is interested in IT because it is an industry that is fast, innovative, dynamic and progressive, and likes to both problem-solve and explore new ways of doing things. Her best buddy is Kaya, she’s a border-collie cross kelpie. In her spare time, she loves to surf, hike, travel, hang out at gigs, and read. Presently, Yvette is in a phase of collecting and reading graphic novels (manga) and comics. Among them, she finds The Walking Dead particularly fascinating. ";
  document.getElementById("overview").innerHTML = "Overview: Yvette is an ENFP. People of this type tend to see their colleagues as friends and enjoy building genuine relationships with others. They thrive in supportive environments where everyone is seen as equal and are open about their ideas and opinions. As they value freedom above all else, ENFP’s are highly independent and perform best when they are not being micromanaged even though this may sometimes be necessary. They are not usually known to be great at administrative tasks involving routine upkeep and needs someone to handle organisational matters. They also tend to overthink, get stressed easily and are prone to being too hard on themselves especially in situations where they believe they have made a mistake. However, these types are generally open-minded, creative and particularly adaptable to almost every other personality type and can easily adopt new ways of thinking and communication styles into their vocabulary. ENFP’s are exceedingly growth-orientated individuals who believe that there will always be room for improvement (NERIS Analytics 2021). "
  document.getElementById("reflection").innerHTML = "Reflection: I think this is a good indication of my personality. I am extroverted as I get most of my energy from spending time with others, but I also need time to myself too. There are certain aspects that I believe, due to the process of active development, have improved over time; especially in terms of routine upkeep, I am a lot more structured when it comes to work or study than I use to be; this is perhaps most apparent in my Big-Five conscientiousness scores. I strongly believe that none of us will ever be perfect and that we as individuals should always strive to better ourselves in areas where we are weak. Where I am currently wishing to improve most is my tendency to overthink, especially when it comes to other people’s feelings. I think a good strategy for me is to give people the benefit of the doubt and take less time trying to make sure everyone is happy, although I probably will not ever be able to not care at all as I would not be true to myself then. As for learning styles I am fairly balanced and learn best through incorporating all four approaches. At the end of the day, I like to see how theory can be put into practice.";
}

// Individual reflections section, function to show individual reflections on click
function show_ref1() {
  document.getElementById("reflections_container").style.display = "block";
  document.getElementById("ref_name").innerHTML = "Chelsea";
  document.getElementById("first_a").innerHTML = "Our group was formed very quickly and organically, which allowed us to really take our time with our tasks instead of rushing to get things done. With people from all backgrounds and varying skill sets, we were able to break our tasks down and assign them based on the skills best suited to each of us. As we all joined the group independently and early on, as opposed to waiting for an automatically allocated group, we were able to build a great rapport, which definitely made a difference in terms of communication and collaboration.";
  document.getElementById("second_a").innerHTML = "As we all worked very well together, any improvements would be minor. I think that as we are all very supportive individuals, when it came to providing feedback or suggestions to others concerning their individual contributions, we were a bit hesitant to speak up so as not to offend anyone. Going forward into A3, we should be a bit more open in terms of providing constructive feedback.";
  document.getElementById("third_a").innerHTML = "With course content being delivered completely online, I initially thought our group might struggle with communication. However, early on, we set our group up in MS Teams and decided on days/times for group meetings. We also set up a team server on Discord where we could discuss topics outside of our assignment, such as gaming and our pets, which played a defining role in coming up with our team name, Code-Cats.";
  document.getElementById("forth_a").innerHTML = "Overall, I have learnt that building a great foundation of communication and trust is essential for a group to run smoothly. I have also learnt that assigning defined tasks early on is vital when it comes to meeting deadlines.";
}

function show_ref2() {
  document.getElementById("reflections_container").style.display = "block";
  document.getElementById("ref_name").innerHTML = "Jake";
  document.getElementById("first_a").innerHTML = "The way that our group formed so quickly and proactively was fantastic and changed my perspective on how I thought the task was going to be moving forward. Previously I had always felt that group tasks were an inherent struggle, however with how quickly our group formed and how friendly/ready everybody in the group was, it has made for a really wonderful experience. The communication around all of our tasks has been great and everyone in our team is so helpful, honest, and understanding when it comes to task completion.";
  document.getElementById("second_a").innerHTML = "I think I could have communicated a bit better individually with my group mates 1 on 1, most of my communication with everyone was through the group chat and I didn’t really devote much time to building rapport outside of the group context. I think this is a bit of a shame because we have such a good group and I didn’t make the time to learn about their lives and families and hobbies.";
  document.getElementById("third_a").innerHTML = "The main thing that surprised me was that everyone in the group was reliable and none slacked off. In all of the group work that I have done in the past, even playing in bands, there is one or two people who create a dragnet that either slows down the group’s progression, or you have to chase them to keep them on track.";
  document.getElementById("forth_a").innerHTML = "One major thing that I’ve learnt about groups from this assessment is that joining a group early increases the chance that you will be paired up with like-minded proactive people. I feel that it is a self explanatory phenomenon, however until I joined this group I didn’t think that a group like ours would be a realistic experience for me. In the future I am definitely going to join project groups well ahead of the assessment start date.";
}


function show_ref3() {
  document.getElementById("reflections_container").style.display = "block";
  document.getElementById("ref_name").innerHTML = "Yvette";
  document.getElementById("first_a").innerHTML = "I think our group works particularly well because we all respect one another, and we all put in the effort to make things work. Due to this, I find that the group is very considerate and are always happy to help each other out, even when things don’t go according to plan. I believe that the aforementioned is perhaps the most important aspect of group work. People can have different personalities, communication styles, or ideas; so long as we are deferential to each other, we will always be able to find a balance and make it work.";
  document.getElementById("second_a").innerHTML = "Given that I really enjoy working with my group, this is perhaps just a bonus and an aspect we may wish to work on altogether. I usually find it easier to work in an environment where people are more openly analytical or commentative because it allows each member to bounce off each other’s ideas more freely. If we were all more aligned with being more openly critical, it would help generate better ideas as a whole and be more beneficial for us as well as the outcome. There is always something that can be improved.";
  document.getElementById("third_a").innerHTML = "As this is my first time working with people I have never met online, I have noticed how much I rely a lot on none-verbal cues offline and that I need to learn how to overcome this challenge in an online context. This experience is surprising and challenging but it also gives me the chance to learn and adapt to the online aspect of group work.";
  document.getElementById("forth_a").innerHTML = "With the help of my group I have learned how to structure a group project more effectively such as having a task-based timeline and keeping well documented minutes through MS Teams.";
}

function show_ref4() {
  document.getElementById("reflections_container").style.display = "block";
  document.getElementById("ref_name").innerHTML = "Ashwin";
  document.getElementById("first_a").innerHTML = "I think that for the most part, this group has been one of the better group experiences I have had so far. Everyone does their own part and work is done promptly and well. Communication is good too, with issues and uncertainties cleared up quickly and efficiently. I liked that everyone was very supportive and understanding of each other.";
  document.getElementById("second_a").innerHTML = "The only thing that could be improved is that we should have defined clearer leadership early on and managed dividing tasks a little better. For most of the start of this assignment, we did not assign a leadership role as it did not seem like one was necessary at the time. I feel that this might have been a mistake as it made delegation and a better structure to our work a little harder to assign. Fortunately, we did realize this, and Chelsea took the initiative to fill a leadership position. After this, our work became a lot more structured and organized.";
  document.getElementById("third_a").innerHTML = "One thing that surprised me is how diligent and earnest my groupmates are. Everyone was dependable and met deadlines promptly. Criticism was always constructive, and everyone had a strong mutual respect.";
  document.getElementById("forth_a").innerHTML = "I have learnt that groups can work well together if everyone is clear about what roles they need to fill and if they all trust and support each other. I have also learned that communication is key and not to be afraid to speak up to resolve any issues that are faced.";
}

function show_ref5() {
  document.getElementById("reflections_container").style.display = "block";
  document.getElementById("ref_name").innerHTML = "Arian";
  document.getElementById("first_a").innerHTML = "Everyone is considerate and happy to help, we were able to communicate effectively and complete the tasks that everyone was assigned to. Everyone was reliable and helpful. Group was able to maintain the in group due dates and show effort towards completing the initial drafts, I did not feel under pressure as everyone was able to contribute equally and ready to help others at any point upon request.";
  document.getElementById("second_a").innerHTML = "Communication could be improved as sometimes I found myself lost and had to ask about how to go about tasks. I had to refer to the assignment information PDF which is mostly my own problem.";
  document.getElementById("third_a").innerHTML = "I was surprised at how easy it was to organise and complete tasks online, and I was assigned with the tasks that I could complete without having to many troubles and I was able to contribute to the group work effectively.";
  document.getElementById("forth_a").innerHTML = "I have learned how to deal with groups in an online environment. Additionally, I have learned how to manage my time and distribute equal time to work and study at the same time and not compromise any of them in any way. Overall, it was a wonderful experience for me and learned a lot from it.";
}

function show_ref6() {
  document.getElementById("reflections_container").style.display = "block";
  document.getElementById("ref_name").innerHTML = "Eun Mi";
  document.getElementById("first_a").innerHTML = "Meeting new people causes me to feel anxious, regardless of the context. Fortunately, every member was kind, friendly, and polite, which quickly made me comfortable enough to open up. It was a great decision to start having small talks via Discord, sharing our hobbies, details of pets and daily life stories. Through continuous casual conversation every day, we came to understand each other’s personalities, build our relationships, and learn how to collaborate. Throughout the assignment period, we also kept communicating by sharing information and feedback, and offering help. There was not a single day we failed to speak: we stayed close and always connected regardless of what we were doing and where we were.";
  document.getElementById("second_a").innerHTML = "We could have nominated a leader sooner, which could have helped us move forward more efficiently with tasks and create a productive team structure in which we could exchange our suggestions or feedback more freely without worrying too much about hurting others’ feelings. Now that we have a lead role and a better-structured team, it will improve our efficiency in working on future assignments.";
  document.getElementById("third_a").innerHTML = "I often hear the lack of bonding and response are the common challenges in a group, but we did not experience such issues. Everyone must have had other matters to deal with, such as other courses, work and family, but our group members have always been reliable and responsive. It was a pleasant surprise to find out every one of us was responsible and accountable.";
  document.getElementById("forth_a").innerHTML = "Throughout the assignment, I learned that good communication and building relationships are the keys to success. There were many challenges, especially as all of our work is conducted online, but engaging everyone and continuing to converse online was a significant contribution to our team’s success.";
}

// Industry data reflections, function to show industry data reflections on click
function show_id_ref1() {
  document.getElementById("id_reflections_container").style.display = "block";
  document.getElementById("industrydata_ref_name").innerHTML = "Chelsea";
  document.getElementById("industrydata_ref").innerHTML = "After reviewing the Burning Glass data, my opinion of my ideal job has not changed. Although the data does not specifically mention my ideal job of game programmer in its statistics in terms of demand, it does indicate some overlap in highly sought-after skills, both technical and general. Based on the provided data, the top three general skills in demand are communication, problem-solving and organisational. Personally, I believe that I already have a great understanding of these skills and continue to strengthen them daily. Regarding specific IT skill requirements, my ideal job requires applicants to have an in-depth understanding of programming languages, C++ specifically. Although C++ is rated relatively average in terms of demand, Microsoft C# appears quite high, and as a lot of game development utilises C#, I can focus on creating a solid foundation of knowledge, which will provide the potential to shift between alternative projects that rely more on C#.";
}

function show_id_ref2() {
  document.getElementById("id_reflections_container").style.display = "block";
  document.getElementById("industrydata_ref_name").innerHTML = "Jake";
  document.getElementById("industrydata_ref").innerHTML = "After reviewing the Burning Glass data my opinion of full stack development as my ideal job has not changed. While Full Stack Developer is 17th in the list of Top IT Job Titles the skillset that is acquired by a full stack developer is utilised in most of the positions ranked higher up on the industry data list; two major full stack skills (SQL, and JavaScript) are also the top two IT skills in greatest demand. The vast scope of skills that a full stack developer requires is what makes this role so attractive to me, as the drive of continually learning and finding more efficient or effective ways to work are dominant forces in my approach to life.";
}

function show_id_ref3() {
  document.getElementById("id_reflections_container").style.display = "block";
  document.getElementById("industrydata_ref_name").innerHTML = "Yvette";
  document.getElementById("industrydata_ref").innerHTML = "Reflecting upon the Burning Glass data, I think it is now more practical for me to aim at becoming a software developer. This is partly due to the title being in the top 3 in terms of highest in demand (BGT 2018c). Software developers also require a comprehensive and flexible skillset which gives me the option of applying for other positions – e.g., full stack developer – in the future. After some further research, a software developer generally allows for: (1) flexible hours - normally there is only a timeframe for the developer to work on; (2) flexible locations to work from and less travelling; (3) allows for an abundance of creativity as well as skills.";
}

function show_id_ref4() {
  document.getElementById("id_reflections_container").style.display = "block";
  document.getElementById("industrydata_ref_name").innerHTML = "Ashwin";
  document.getElementById("industrydata_ref").innerHTML = "Reviewing the burning glass data, I have not changed my opinion on my ideal job. I would still like to be a software programmer. Conversely, the data has highlighted the necessity of learning multiple skills over a broad range of professions, and there are many overlaps between the skills required for the different roles. I would like to consider a role in full-stack web development though as the data has shown me that many of the skills required are ones that I have some background in such as graphic design, colour theory and typography. I do however still prefer software development and the data has shown me what skills I need to expand or take steps towards acquiring. In terms of general skills, the data has shown me that I need to develop skills that may not necessarily be on the job description such as the three skills - organization, writing and planning that were not on any of our job requirements, yet highly sought after by employers.";
}

function show_id_ref5() {
  document.getElementById("id_reflections_container").style.display = "block";
  document.getElementById("industrydata_ref_name").innerHTML = "Arian";
  document.getElementById("industrydata_ref").innerHTML = "After reviewing the burning glass data, my opinion hasn’t changed about my ideal job. Although there’s no mention of game developer nor game designer in the statistics, Java, Python, C# and most importantly C++ are the most important programming languages when it comes to developing games and according to the data they are considered high IT skill demand in IT industry.  My ideal job requires me to have sound knowledge of content creation and working on mobile apps which mostly involves programming using C# and C++. According to IGEA (2018) the gaming industry is growing although there are some challenges in the gaming industry the income generated by the Australian game development studios were over $115 million which is increasing every year. ";
}

function show_id_ref6() {
  document.getElementById("id_reflections_container").style.display = "block";
  document.getElementById("industrydata_ref_name").innerHTML = "Eun Mi";
  document.getElementById("industrydata_ref").innerHTML = "After examining the Burning Glass data, it was apparent the industry demands various IT-specific skills; SQL, JavaScript and JAVA are the most sought-after of these. Indeed, skills related to programming and development are generally favoured. It seems vital to equip oneself with some of these technical skills to start a professional career in the IT industry, which raises many questions for me. Initially, my ideal job was a cybersecurity analyst, which usually requires an IT degree, an understanding of a range of IT technologies, and experience in the field. Although some technical skills, such as network and systems security, are specified, it appears cybersecurity analysts require a broad general knowledge of IT. It may, therefore, be best for me to begin by obtaining some IT-specific skills, perhaps by working in IT support. With several years of experience, I could progress into the area of cybersecurity. In my current employment, I have already begun to develop general skills in high demand, such as communication skills, problem-solving, organisational skills; the next step for me is to obtain greater technical proficiency. ";
}

// Mobile layout for the navigation bar, function to add responsive class to the navigation bar
function mobile_layout() {
  var x = document.getElementById("myTopNav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// Function to animate the menu button on click
function animatedmenu(x) {
  x.classList.toggle("change");
}

// Expand the articles, function to expand the articles on click
function expandAV() {
  var s = document.getElementById("scrolltoAV");
  var x = document.getElementById("expandarticleAV");
  var z = document.getElementById("expandarticleBC");
  var y = document.getElementById("expandarticleCS");
  var t = document.getElementById("expandarticleML");
  var g = document.getElementById("expandarticleIW");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
    s.scrollIntoView();
    z.style.display = "none";
    y.style.display = "none";
    t.style.display = "none";
    g.style.display = "none";
  }
}

function expandBC() {
  var s = document.getElementById("scrolltoBC");
  var x = document.getElementById("expandarticleBC");
  var y = document.getElementById("expandarticleCS");
  var t = document.getElementById("expandarticleML");
  var z = document.getElementById("expandarticleAV");
  var g = document.getElementById("expandarticleIW");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
    s.scrollIntoView();
    z.style.display = "none";
    y.style.display = "none";
    t.style.display = "none";
    g.style.display = "none";
  }
}

function expandCS() {
  var s = document.getElementById("scrolltoCS");
  var x = document.getElementById("expandarticleCS");
  var t = document.getElementById("expandarticleML");
  var z = document.getElementById("expandarticleAV");
  var y = document.getElementById("expandarticleBC");
  var g = document.getElementById("expandarticleIW");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
    s.scrollIntoView();
    z.style.display = "none";
    y.style.display = "none";
    t.style.display = "none";
    g.style.display = "none";
  }
}

function expandML() {
  var s = document.getElementById("scrolltoML");
  var x = document.getElementById("expandarticleML");
  var t = document.getElementById("expandarticleAV");
  var z = document.getElementById("expandarticleBC");
  var y = document.getElementById("expandarticleCS");
  var g = document.getElementById("expandarticleIW");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
    s.scrollIntoView();
    z.style.display = "none";
    y.style.display = "none";
    t.style.display = "none";
    g.style.display = "none";
  }
}

function expandIW() {
  var s = document.getElementById("scrolltoIW");
  var x = document.getElementById("expandarticleIW");
  var g = document.getElementById("expandarticleML");
  var t = document.getElementById("expandarticleAV");
  var z = document.getElementById("expandarticleBC");
  var y = document.getElementById("expandarticleCS");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
    s.scrollIntoView();
    z.style.display = "none";
    y.style.display = "none";
    t.style.display = "none";
    g.style.display = "none";
  }
}

// function to expand the references list on click
function expandRef() {
  var x = document.getElementById("hideref_team");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
