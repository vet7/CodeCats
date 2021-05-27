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
  document.getElementById("first_a").innerHTML = "Similarly to Assignment 2, our group worked very well together on Assignment 3. From the beginning we knew this assignment would be very involved and include more collaborative tasks as opposed to A2. Taking this into account, we organised our tasks and responsibilities early on in MS Teams to ensure that everyone knew what they were doing and when.";
  document.getElementById("second_a").innerHTML = "Our group has continued to improve in our overall communication, utilising MS Teams meetings and announcements as well as Discord. Although communication has been great, similarly to A2, I felt that some group members were initially hesitant to speak up when it came to providing feedback. As the weeks progressed however, I noticed a shift in this and those members were able to confidently speak up. ";
  document.getElementById("third_a").innerHTML = "One thing that surprised me was how genuinely supportive and caring each and every member of our group is. Halfway through our assignment period, I had a family emergency and so was unavailable to my team at some times.";
  document.getElementById("forth_a").innerHTML = "At no point did anyone in the group express any concerns about me not completing tasks on time as a result, instead, expressed concern for only for my wellbeing. As a result of this, I have learned that despite a group being formed completely online, you can still communicate effectively and efficiently, whilst making genuine connections with people.";
}

function show_ref2() {
  document.getElementById("reflections_container").style.display = "block";
  document.getElementById("ref_name").innerHTML = "Jake";
  document.getElementById("first_a").innerHTML = "From my perspective all of our collaborative efforts, from individual communication to produced work, has all gone well and far exceeded the expectations that I had for any kind of group assessment. Our communication via MS Teams through discussion posts, chats, and video conference calls was something that made helped our assessments flow well, ensuring that all members knew what tasks needed to be completed, when, and who should be involved in each task. This easy culture of communication we built also contributed to the work that we produced, giving us a foundation to develop high quality resource drafts that we were able to pool together for our final submission. ";
  document.getElementById("second_a").innerHTML = "I think that the way that I managed my work could have improved. Typically I handed in my work just on time, finishing on the afternoon that work was due, while it felt to me as if my groupmates were much more on top of their work timetables. With my future studies I will spend more time to planning my daily timetables and understanding the realistic timeframes that maximize work completion and quality, while minimizing the associated stress and time spent on each task. ";
  document.getElementById("third_a").innerHTML = "The thing that surprised me the most is how dedicated our group has been for the duration of this course, especially with the challenges we have faced. While our group has been working together we have all, to some extent or another, had to overcome difficulties which altered the focus of our day to day practices. It surprised me how our group was able to take this perspective shifts on board and still maintain their commitments to completing each of the tasks falling under the purview of their assessment portion. ";
  document.getElementById("forth_a").innerHTML = "One thing that I learnt about groups from this course is that it pays to be proactive when it comes to getting involved in all aspects of group work, even from the very beginning when you are trying to find a group. I attribute a lot of our group’s smooth operation to the fact that we all made an effort to form a group as soon as the first group assessment of this course was announced. Being early adopters gave us lots of time to get to know each other’s work styles and understand the time and quality expectations of each other group member. ";
}


function show_ref3() {
  document.getElementById("reflections_container").style.display = "block";
  document.getElementById("ref_name").innerHTML = "Yvette";
  document.getElementById("first_a").innerHTML = "As a group, we continued to strengthen our relationships through daily communications and weekly meetings which in turn consolidated our respect and value for one another. All members continued to be supportive and understanding and this made collaborative tasks work effortlessly. As we were in sync for Assignment 3 and 5, this allowed us to meet the strained demands of the timeline harmoniously and with assurance. Each member trusted one another to meet the needs of the group and worked uniformly to complete our project.";
  document.getElementById("second_a").innerHTML = "Room for improvement would be minimal and this would have inevitably resolved by itself over time; considering this, we would have been more efficient if each member were more prepared for meetings, effectively bringing more ideas, suggestions and questions to discuss. However, in saying that, a lot of us had limited time dedicated to our project and thus we all did our best as a whole. ";
  document.getElementById("third_a").innerHTML = "The support given by all group members has been paramount to our success as a team. I appreciate how well our group worked together as a unit with a common goal. This entire experience has been surprising as I was unsure how the online aspect of group work would have worked out. Initially I was skeptical about how we will be able to sustain online communications, however, each member was responsible and intrinsically motivated to help one another throughout its entirety. ";
  document.getElementById("forth_a").innerHTML = "One thing I have learned about groups is that seemingly different personalities, along with its various communication styles, preferences and expectations can empower each other to do their best, even when unforeseen circumstances occur. I highly respect each member and I appreciate the effort they have all put in to this group.  ";
}

function show_ref4() {
  document.getElementById("reflections_container").style.display = "block";
  document.getElementById("ref_name").innerHTML = "Ashwin";
  document.getElementById("first_a").innerHTML = "As a group we learnt much about how to function as a group and which each other personally from Assignment 2 and this fact augmented our workflow for Assignment 3 and 5. We had clear leadership and were much more organized for this assignment – as a result we got much more done and with less repeated work this time around. We all played to each other’s strengths and weaknesses while still adhering to the core principles of respect and efficiency we have had since the group was formed. ";
  document.getElementById("second_a").innerHTML = "In my opinion not much can be improved in terms of group chemistry or communication – possibly making decisions faster to increase efficiency and leave more time for error testing and unexpected issues.  ";
  document.getElementById("third_a").innerHTML = "Similar to what I experienced in Assignment 2, one thing that surprised me about this group was how diligent, punctual and earnest all my team-mates were. I was also surprised how important communication was in resolving issues or finding ways to make adjustment to each other’s personal circumstances while still upholding a high standard of work. It is my opinion that this contributed to a higher standard of work as opposed to being inflexible.";
  document.getElementById("forth_a").innerHTML = "One thing that I have learned is that groups can function well together if everyone puts effort into making it work and that communication, again is key to having a happy, effective and efficient workflow. ";
}

function show_ref5() {
  document.getElementById("reflections_container").style.display = "block";
  document.getElementById("ref_name").innerHTML = "Arian";
  document.getElementById("first_a").innerHTML = "Our group worked well together, everyone in the group worked hard towards completing the assignments and none lacked in terms of contribution. We had amazing communication and we knew exactly what we were doing every week. We had two meetings per week on the Microsoft Teams to discuss upcoming tasks and challenges, and for other times we used Discord to keep each other updated. For Assignment 3 and Assignment 5, Chelsea the group’s coordinator has set up an interactive excel sheet that helped to assign roles to each member of the group, and that made it easy to follow up with the tasks and see what everyone has done, as a result, we were more organised for A3 and A5 compared to A2. ";
  document.getElementById("second_a").innerHTML = "In terms of improvements, I don’t see much that could be improved, since everything worked so well, but for me, I think I needed to ask more questions and communicated better with my team.   ";
  document.getElementById("third_a").innerHTML = "What surprised me was that how we have managed to communicate effectively in terms of completing tasks promptly. Everyone was willing to help each other without any hesitation. ";
  document.getElementById("forth_a").innerHTML = "I have learned a lot about groups and working in a group setting, but one thing that I have learned is that I need to be more initiative and not reserved to be more effective in a group environment.  ";
}

function show_ref6() {
  document.getElementById("reflections_container").style.display = "block";
  document.getElementById("ref_name").innerHTML = "Eun Mi";
  document.getElementById("first_a").innerHTML = "I think organising tasks and planning a timeline for assignments went well. At the beginning of the assignment, our team leader, Chelsea, created a task list, meeting minute tables and organised meeting chairs. She added the rubric description to each task list so that we did not need to constantly refer to the rubric. Through the poll, everyone applied for tasks they felt were suitable and achievable given their personal interests and skills. Most tasks had a lead contributor together with co-contributors to ensure we could collaborate and have a say in the direction of broad variety of tasks. We were more organised than we were in Assignment 2 as we were able to draw on our experiences.";
  document.getElementById("second_a").innerHTML = "There was not much that could be improved, other than one instance in which we interpreted the requirements of the career plan task; this produced inconsistencies in the individual report, making it difficult to put together for the whole team’s career plans comparison later. Since then, we communicated more to make sure we were all on the same page in terms of creating content. ";
  document.getElementById("third_a").innerHTML = "During this assignment, again, we felt so strong as a team. We had already had experience working as a team through Assignment 2 and had found everyone to be reliable and supportive. The bonds, trust, responsibility and good communication we built last time came into effect. Everyone did his or her best on the assigned tasks and volunteered to help others when required. In this period, every member was busier with other courses and personal matters; however, no one lost any integrity.";
  document.getElementById("forth_a").innerHTML = "It was a lovely surprise when we completed more tasks on time within a smaller timeframe, proving our efficiency and organisation as a team. At times we were overwhelmed with juggling work, study and personal matters, but we had great fun as well. When we discussed the game and character name and saw Arian’s comic creation, we had a lot of laughs. I learnt we could achieve goals as a team and have fun when it comes to a well-formed group. ";
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
  var av = document.getElementById("scrolltoAV");
  var x = document.getElementById("expandarticleAV");
  var z = document.getElementById("expandarticleBC");
  var y = document.getElementById("expandarticleCS");
  var t = document.getElementById("expandarticleML");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
    av.scrollIntoView();
    z.style.display = "none";
    y.style.display = "none";
    t.style.display = "none";
  }
}

function expandBC() {
  var bc = document.getElementById("scrolltoBC");
  var x = document.getElementById("expandarticleBC");
  var y = document.getElementById("expandarticleCS");
  var t = document.getElementById("expandarticleML");
  var z = document.getElementById("expandarticleAV");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
    bc.scrollIntoView();
    z.style.display = "none";
    y.style.display = "none";
    t.style.display = "none";
  }
}

function expandCS() {
  var cs = document.getElementById("scrolltoCS");
  var x = document.getElementById("expandarticleCS");
  var t = document.getElementById("expandarticleML");
  var z = document.getElementById("expandarticleAV");
  var y = document.getElementById("expandarticleBC");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
    cs.scrollIntoView();
    z.style.display = "none";
    y.style.display = "none";
    t.style.display = "none";
  }
}

function expandML() {
  var ml = document.getElementById("scrolltoML");
  var x = document.getElementById("expandarticleML");
  var t = document.getElementById("expandarticleAV");
  var z = document.getElementById("expandarticleBC");
  var y = document.getElementById("expandarticleCS");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
    ml.scrollIntoView();
    z.style.display = "none";
    y.style.display = "none";
    t.style.display = "none";
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
