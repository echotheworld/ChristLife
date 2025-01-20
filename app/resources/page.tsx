"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import AnimatedGridPattern from "@/components/magicui/animated-grid-pattern";

// Book categories data
const bookCategories = [
  {
    id: 1,
    title: "Discovering Faith: First Steps (Start Here)",
    description: "Essential foundations for new believers and seekers",
    books: [
      {
        title: "Simply Christian",
        author: "N.T. Wright",
        description: "Ever wondered why we crave justice, spirituality, relationships, and beauty? Wright brilliantly shows how Christianity uniquely makes sense of our deepest human longings. Perfect for both skeptics and seekers!",
        link: "https://www.amazon.com/Simply-Christian-Christianity-Makes-Sense/dp/0061920622",
        coverImage: "https://images-na.ssl-images-amazon.com/images/P/0061920622.01.L.jpg"
      },
      {
        title: "Simply Jesus",
        author: "N.T. Wright",
        description: "Forget everything you thought you knew about Jesus. Wright strips away centuries of misunderstanding to reveal the radical and fascinating figure who stands at the heart of history. You'll never see Jesus the same way again!",
        link: "https://www.amazon.com/Simply-Jesus-Vision-What-Matters/dp/0062084399",
        coverImage: "https://images-na.ssl-images-amazon.com/images/P/0062084399.01.L.jpg"
      },
      {
        title: "Simply Good News",
        author: "N.T. Wright",
        description: "What if the 'good news' is way better than you imagined? Wright unpacks how the gospel isn't just about getting to heaven - it's about God's power transforming our world right now. Get ready to be amazed!",
        link: "https://www.amazon.com/Simply-Good-News-Gospel-Means/dp/0062334344",
        coverImage: "https://images-na.ssl-images-amazon.com/images/P/0062334344.01.L.jpg"
      },
      {
        title: "What Does God Want?",
        author: "Michael S. Heiser",
        description: "Wondering about God's ultimate plan for humanity? Heiser breaks down complex theological concepts into clear, accessible insights about what God really wants from us. A perfect guide for understanding God's heart and purpose!",
        link: "https://www.amazon.com/What-Does-Want-Michael-Heiser/dp/0692199047",
        coverImage: "https://images-na.ssl-images-amazon.com/images/P/0692199047.01.L.jpg"
      },
      {
        title: "What is the Bible?",
        author: "Rob Bell",
        description: "Struggling with those weird or troubling Bible passages? Bell's fresh take will help you discover the Bible as a library of radical, inspiring, and human books that still speak powerfully today. Warning: May cause enlightenment!",
        link: "https://www.amazon.com/What-Bible-Ancient-Revolution-Transform/dp/0062194275",
        coverImage: "https://images-na.ssl-images-amazon.com/images/P/0062194275.01.L.jpg"
      },
      {
        title: "Everything is Spiritual",
        author: "Rob Bell",
        description: "Where does science meet faith? Through personal stories and mind-expanding insights, Bell weaves together quantum physics, evolution, and ancient wisdom to show how everything - yes, everything - connects to the spiritual journey.",
        link: "https://www.amazon.com/Everything-Spiritual-Who-Are-Where/dp/1250620562",
        coverImage: "https://images-na.ssl-images-amazon.com/images/P/1250620562.01.L.jpg"
      },
      {
        title: "What We Talk About When We Talk About God",
        author: "Rob Bell",
        description: "Does God feel distant or outdated? Bell masterfully bridges the gap between ancient faith and modern life, showing how God is not who you thought but better than you imagined. A game-changer for spiritual conversations!",
        link: "https://www.amazon.com/What-Talk-About-When-God/dp/0062049682/",
        coverImage: "https://images-na.ssl-images-amazon.com/images/P/0062049682.01.L.jpg"
      },
      {
        title: "Irresistible",
        author: "Andy Stanley",
        description: "Tired of complicated religion? Stanley peels back 2000 years of added layers to reveal the simple, powerful, and truly irresistible message at Christianity's core. Prepare to have your faith refreshed and renewed!",
        link: "https://www.amazon.com/Irresistible-Reclaiming-Jesus-American-Evangelicalism/dp/0310536979",
        coverImage: "https://images-na.ssl-images-amazon.com/images/P/0310536979.01.L.jpg"
      }
    ]
  },
  {
    id: 2,
    title: "Reading Scripture Well: Tools & Methods",
    description: "Approaches to understanding and interpreting the Bible",
    books: [
      {
        title: "How to Read the Bible for All Its Worth",
        author: "Gordon Fee",
        description: "Ever felt lost trying to understand the Bible? This classic guide will give you the tools to read any part of Scripture with confidence and clarity. A must-have for every serious Bible reader!",
        link: "https://www.amazon.com/How-Read-Bible-All-Worth/dp/0310517826",
        coverImage: "https://images-na.ssl-images-amazon.com/images/P/0310517826.01.L.jpg"
      },
      {
        title: "Brief Insights on Mastering Bible Study",
        author: "Michael Heiser",
        description: "Want to study the Bible like a scholar? Dr. Heiser breaks down complex study methods into bite-sized, practical tools you can use right away. Perfect for taking your Bible study to the next level!",
        link: "https://www.amazon.com/Brief-Insights-Mastering-Bible-Study/dp/0310566568",
        coverImage: "https://images-na.ssl-images-amazon.com/images/P/0310566568.01.L.jpg"
      },
      {
        title: "Brief Insights on Mastering the Bible",
        author: "Michael Heiser",
        description: "Confused by biblical context and interpretation? This guide unlocks the secrets of understanding Scripture in its original setting. You'll discover how ancient readers would have understood these texts!",
        link: "https://www.amazon.com/Brief-Insights-Mastering-Bible-Explained/dp/0310566606/",
        coverImage: "https://images-na.ssl-images-amazon.com/images/P/0310566606.01.L.jpg"
      },
      {
        title: "How The Bible Actually Works",
        author: "Pete Enns",
        description: "Think the Bible is just a rulebook? Think again! Enns shows how this ancient library of books invites us into a conversation about wisdom for today. Warning: May completely transform how you read Scripture!",
        link: "https://www.amazon.com/How-Bible-Actually-Works-Surprising/dp/0062686747",
        coverImage: "https://images-na.ssl-images-amazon.com/images/P/0062686747.01.L.jpg"
      },
      {
        title: "Inspired",
        author: "Rachel Held Evans",
        description: "Love stories? Evans brilliantly weaves personal narrative with biblical insight to show how these ancient tales still captivate and transform us today. Get ready to fall in love with the Bible all over again!",
        link: "https://www.amazon.com/Inspired-Slaying-Giants-Walking-Loving/dp/0718022319",
        coverImage: "https://images-na.ssl-images-amazon.com/images/P/0718022319.01.L.jpg"
      },
      {
        title: "How to Study the Bible's Use of the Bible",
        author: "Matthew S. Harmon",
        description: "Ready to dive deep? Discover how biblical authors interpreted and used other Scriptures in their writing. A fascinating journey into the Bible's internal dialogue that will revolutionize your study!",
        link: "https://www.amazon.com/How-Study-Bibles-Bible-Hermeneutical/dp/0310142458/",
        coverImage: "https://images-na.ssl-images-amazon.com/images/P/0310142458.01.L.jpg"
      }
    ]
  },
  {
    id: 3,
    title: "Hebrew Wisdom: Old Testament Foundations",
    description: "Ancient context, meaning, and relevance for today",
    books: [
      {
        title: "Bearing God's Name",
        author: "Carmen Joy Imes",
        description: "Ever wondered what it really means to be God's people? Discover how the commandments aren't just rules, but an invitation to represent God in the world. You'll never look at the Old Testament the same way!",
        link: "https://www.amazon.com/Bearing-Gods-Name-Reading-Commandment/dp/0830852697",
        coverImage: "https://images-na.ssl-images-amazon.com/images/P/0830852697.01.L.jpg"
      },
      {
        title: "Being God's Image",
        author: "Carmen Joy Imes",
        description: "What does it mean to be human? Through fresh eyes, Imes reveals how being made in God's image is more amazing and challenging than you ever imagined. Get ready to rethink everything you thought you knew about human purpose!",
        link: "https://www.amazon.com/Being-Gods-Image-Creation-Matters/dp/1514000202",
        coverImage: "https://images-na.ssl-images-amazon.com/images/P/1514000202.01.L.jpg"
      },
      {
        title: "Unveiling Mercy",
        author: "Chad Bird",
        description: "Think the God of the Old Testament is all about judgment? Think again! Bird masterfully reveals the golden thread of mercy woven throughout the Hebrew Scriptures. Prepare to be amazed by God's consistent character of love!",
        link: "https://www.amazon.com/Unveiling-Mercy-Devotions-Insights-Testament/dp/1948969408",
        coverImage: "https://images-na.ssl-images-amazon.com/images/P/1948969408.01.L.jpg"
      },
      {
        title: "Limping with God",
        author: "Chad Bird",
        description: "Feel like your faith journey is messy? You're in good company! Through the story of Jacob, discover how God works through (and often because of) our struggles and failures. A powerful reminder that God loves using imperfect people!",
        link: "https://www.amazon.com/Limping-God-Jacob-Testament-Discipleship/dp/1948969823",
        coverImage: "https://images-na.ssl-images-amazon.com/images/P/1948969823.01.L.jpg"
      },
      {
        title: "Old Testament Theology",
        author: "John H. Walton",
        description: "Want to grasp the big picture of the Old Testament? Walton brilliantly connects the dots between ancient stories and timeless truths. Perfect for seeing how the whole Bible tells one amazing story!",
        link: "https://www.amazon.com/Old-Testament-Theology-Christians-Enduring/dp/0830851925/",
        coverImage: "https://images-na.ssl-images-amazon.com/images/P/0830851925.01.L.jpg"
      },
      {
        title: "Ancient Eastern Thought And The Old Testament",
        author: "John H. Walton",
        description: "Ever wondered how ancient people actually thought about God and the world? Step into the fascinating world of ancient Near Eastern culture and see the Old Testament come alive in its original context!",
        link: "https://www.amazon.com/Ancient-Near-Eastern-Thought-Testament/dp/0801027500",
        coverImage: "https://images-na.ssl-images-amazon.com/images/P/0801027500.01.L.jpg"
      }
    ]
  },
  {
    id: 4,
    title: "Jesus & His World: New Testament Insights",
    description: "Historical context and early Christian understanding",
    books: [
      {
        title: "The New Testament In Its World",
        author: "N.T. Wright & Michael F. Bird",
        description: "Want to understand the world Jesus lived in? Step into a time machine with Wright and Bird as your guides to explore the vibrant, complex world of the first Christians. You'll never read the New Testament the same way again!",
        link: "https://www.amazon.com/New-Testament-Its-World-Introduction/dp/0310499305",
        coverImage: "https://images-na.ssl-images-amazon.com/images/P/0310499305.01.L.jpg"
      },
      {
        title: "Why the Gospel?",
        author: "Matthew W. Bates",
        description: "Ready to explore what the gospel really means? Bates reveals how understanding Jesus as King transforms everything about how we live and share our faith. A fresh perspective that will revolutionize your understanding of the good news!",
        link: "https://www.amazon.com/Why-Gospel-Living-Jesus-Purpose/dp/0802881688/",
        coverImage: "https://images-na.ssl-images-amazon.com/images/P/0802881688.01.L.jpg"
      },
      {
        title: "Jesus and the Forces of Death",
        author: "Matthew Thiessen",
        description: "Ever wondered why Jesus spent so much time dealing with 'unclean' things? Thiessen reveals how Jesus' radical actions challenged and transformed his culture's understanding of purity and power. A mind-blowing new perspective!",
        link: "https://www.amazon.com/Jesus-Forces-Death-Portrayal-First-Century/dp/154096194X",
        coverImage: "https://images-na.ssl-images-amazon.com/images/P/154096194X.01.L.jpg"
      },
      {
        title: "Caesar And The Sacrament",
        author: "R. Alan Streett",
        description: "Think baptism is just a religious ritual? Think again! Discover how this powerful act was actually a declaration of allegiance to Jesus over Caesar. A revolutionary look at early Christian resistance!",
        link: "https://www.amazon.com/Caesar-Sacrament-Baptism-Rite-Resistance/dp/1498228402",
        coverImage: "https://images-na.ssl-images-amazon.com/images/P/1498228402.01.L.jpg"
      },
      {
        title: "Honor Patronage Kinship Purity",
        author: "David A. deSilva",
        description: "Want to unlock the cultural codes of the New Testament? DeSilva reveals the four key values that shaped Jesus' world. You'll discover how these ancient values still influence us today!",
        link: "https://www.amazon.com/Honor-Patronage-Kinship-Purity-Unlocking/dp/0830815724",
        coverImage: "https://images-na.ssl-images-amazon.com/images/P/0830815724.01.L.jpg"
      },
      {
        title: "Jesus And The Future",
        author: "Andreas J. Köstenberger",
        description: "Confused about Jesus' teachings on the end times? Köstenberger cuts through the confusion to show what Jesus really said about the future. A clear guide through complex prophecies!",
        link: "https://www.amazon.com/Jesus-Future-Understanding-Taught-about/dp/1941337813",
        coverImage: "https://images-na.ssl-images-amazon.com/images/P/1941337813.01.L.jpg"
      },
      {
        title: "Jesus and the Victory of God",
        author: "N.T. Wright",
        description: "Ready to meet Jesus as his contemporaries would have known him? Wright masterfully reconstructs Jesus' world, message, and mission in this groundbreaking exploration. Prepare to have your perspective transformed!",
        link: "https://www.amazon.com/Jesus-Victory-Christian-Origins-Question/dp/0800626826",
        coverImage: "https://images-na.ssl-images-amazon.com/images/P/0800626826.01.L.jpg"
      },
      {
        title: "The Mary We Forgot",
        author: "Jennifer Powell McNutt",
        description: "Discover the fascinating story of Mary Magdalene that history forgot! McNutt unveils the true story of this misunderstood disciple and her pivotal role in early Christianity. Get ready to meet the real Mary!",
        link: "https://www.amazon.com/Mary-We-Forgot-Apostle-Apostles/dp/1587436175",
        coverImage: "https://images-na.ssl-images-amazon.com/images/P/1587436175.01.L.jpg"
      }
    ]
  },
  {
    id: 5,
    title: "Biblical Vision: Theology That Matters",
    description: "Core doctrines and theological frameworks",
    books: [
      {
        title: "The Bible Tells Me So",
        author: "Pete Enns",
        description: "Struggling with difficult Bible passages? Enns shows how embracing the Bible's messy and human elements actually deepens our faith. Get ready for an honest, refreshing approach to Scripture!",
        link: "https://www.amazon.com/Bible-Tells-Me-Defending-Scripture/dp/0062272039",
        coverImage: "https://images-na.ssl-images-amazon.com/images/P/0062272039.01.L.jpg"
      },
      {
        title: "Gospel Allegiance",
        author: "Matthew Bates",
        description: "Think you know what faith in Jesus means? This eye-opening book reveals how 'believing' meant something far more radical in the first century. Prepare to see salvation in a whole new light!",
        link: "https://www.amazon.com/Gospel-Allegiance-Faith-Works-Salvation/dp/1587434296",
        coverImage: "https://images-na.ssl-images-amazon.com/images/P/1587434296.01.L.jpg"
      },
      {
        title: "Supernatural",
        author: "Michael S. Heiser",
        description: "Ever wondered about angels, demons, and the supernatural world? Heiser unveils the fascinating supernatural worldview of the Bible that most of us have missed. Warning: Mind-blowing revelations ahead!",
        link: "https://www.amazon.com/Supernatural-What-Bible-Teaches-Unseen/dp/1577995589",
        coverImage: "https://images-na.ssl-images-amazon.com/images/P/1577995589.01.L.jpg"
      },
      {
        title: "On Earth As In Heaven",
        author: "N.T. Wright",
        description: "What if God's kingdom isn't just about the future? Wright shows how Jesus' prayer shapes our mission today. Discover how heaven and earth are meant to overlap in your everyday life!",
        link: "https://www.amazon.com/Earth-Heaven-Twenty-First-Century-Christians/dp/0063210894/",
        coverImage: "https://images-na.ssl-images-amazon.com/images/P/0063210894.01.L.jpg"
      },
      {
        title: "The Unseen Realm",
        author: "Michael S. Heiser",
        description: "Ready to explore the supernatural world of the Bible? Dive deep into the fascinating divine council, spiritual beings, and cosmic geography that shaped biblical theology. Your view of Scripture will never be the same!",
        link: "https://www.amazon.com/Unseen-Realm-Recovering-Supernatural-Worldview/dp/1577995562",
        coverImage: "https://images-na.ssl-images-amazon.com/images/P/1577995562.01.L.jpg"
      },
      {
        title: "After You Believe",
        author: "N.T. Wright",
        description: "Want to know what happens after salvation? Wright reveals how character formation and virtue are at the heart of the Christian life. A game-changing guide to spiritual transformation!",
        link: "https://www.amazon.com/After-You-Believe-Christian-Character/dp/0061730548",
        coverImage: "https://images-na.ssl-images-amazon.com/images/P/0061730548.01.L.jpg"
      },
      {
        title: "Salvation By Allegiance Alone",
        author: "Matthew W. Bates",
        description: "What if we've misunderstood what 'faith' means? Discover how allegiance to Jesus as King reshapes our understanding of salvation. A revolutionary perspective that will transform your faith!",
        link: "https://www.amazon.com/Salvation-Allegiance-Alone-Rethinking-Gospel/dp/0801097975",
        coverImage: "https://images-na.ssl-images-amazon.com/images/P/0801097975.01.L.jpg"
      },
      {
        title: "Brief Insights on Mastering Bible Doctrine",
        author: "Michael Heiser",
        description: "Want to understand core Christian beliefs without getting lost in theological jargon? Heiser makes complex doctrines clear and practical. Perfect for building a solid theological foundation!",
        link: "https://www.amazon.com/Brief-Insights-Mastering-Bible-Doctrine/dp/0310566525",
        coverImage: "https://images-na.ssl-images-amazon.com/images/P/0310566525.01.L.jpg"
      },
      {
        title: "Paul and the Faithfulness of God",
        author: "N.T. Wright",
        description: "Ready for a deep dive into Paul's world-changing theology? Wright masterfully shows how Paul's thought revolutionized the ancient world and still challenges us today. An epic journey through the mind of Christianity's greatest theologian!",
        link: "https://www.amazon.com/Paul-Faithfulness-God-Christian-Question/dp/0800626834",
        coverImage: "https://images-na.ssl-images-amazon.com/images/P/0800626834.01.L.jpg"
      },
      {
        title: "For the Glory of God",
        author: "Daniel I. Block",
        description: "What does true worship look like? Block uncovers the rich biblical theology of worship that will transform your understanding of how we honor God. Get ready to experience worship in a whole new way!",
        link: "https://www.amazon.com/Glory-God-Recovering-Biblical-Theology/dp/0801098564/",
        coverImage: "https://images-na.ssl-images-amazon.com/images/P/0801098564.01.L.jpg"
      }
    ]
  },
  {
    id: 6,
    title: "Faith in Motion: The Spiritual Journey",
    description: "Personal growth, doubt, deconstruction, and reconstruction",
    books: [
      {
        title: "Searching For Sunday",
        author: "Rachel Held Evans",
        description: "Feel like you don't fit in church anymore? Join Rachel's raw and honest journey of loving, leaving, and finding church again. A beautiful reminder that doubt and faith can coexist!",
        link: "https://www.amazon.com/Searching-Sunday-Loving-Leaving-Finding/dp/0718022122",
        coverImage: "https://images-na.ssl-images-amazon.com/images/P/0718022122.01.L.jpg"
      },
      {
        title: "Faith Unraveled",
        author: "Rachel Held Evans",
        description: "What happens when your faith starts asking hard questions? Evans shares her journey from certainty through doubt to a deeper, more authentic faith. Perfect for anyone wrestling with big questions!",
        link: "https://www.amazon.com/Faith-Unraveled-Answers-Questions-Having/dp/0310339162",
        coverImage: "https://images-na.ssl-images-amazon.com/images/P/0310339162.01.L.jpg"
      },
      {
        title: "A Year of Slowing Down",
        author: "Alan Fadling",
        description: "Feeling rushed, anxious, or spiritually exhausted? These daily reflections will help you find peace, purpose, and God's presence in life's busy moments. Start your journey to an unhurried life!",
        link: "https://www.amazon.com/Year-Slowing-Down-Devotions-Unhurried/dp/151400318X/",
        coverImage: "https://images-na.ssl-images-amazon.com/images/P/151400318X.01.L.jpg"
      },
      {
        title: "Emotionally Healthy Discipleship",
        author: "Peter Scazzero",
        description: "Ready to go beneath the surface of your spiritual life? Discover how emotional health and spiritual maturity are inseparable. Transform your relationship with God, yourself, and others!",
        link: "https://www.amazon.com/Emotionally-Healthy-Discipleship-People-Beneath/dp/0310109485",
        coverImage: "https://images-na.ssl-images-amazon.com/images/P/0310109485.01.L.jpg"
      },
      {
        title: "Attached to God",
        author: "Krispin Mayfield",
        description: "Ever wonder why your relationship with God feels different from others? Explore how your attachment style shapes your spiritual experience. A game-changing perspective on connecting with God!",
        link: "https://www.amazon.com/Attached-God-Practical-Spiritual-Experience/dp/0310363799/",
        coverImage: "https://images-na.ssl-images-amazon.com/images/P/0310363799.01.L.jpg"
      },
      {
        title: "Curveball: When Your Faith Takes Turns",
        author: "Pete Enns",
        description: "Life thrown you a spiritual curveball? Enns shows how unexpected turns in our faith journey can lead to deeper trust and authenticity. Hope and humor for when your faith doesn't go as planned!",
        link: "https://www.amazon.com/Curveball-Coming-Stumbled-Tripped-Finding-ebook/dp/B09ZYDLLSH",
        coverImage: "https://images-na.ssl-images-amazon.com/images/P/B09ZYDLLSH.01.L.jpg"
      },
      {
        title: "The Wisdom Pattern",
        author: "Richard Rohr",
        description: "Feel like your faith is falling apart? Rohr reveals how spiritual growth follows a pattern: order, disorder, reorder. Discover how your struggles might be the very path to transformation!",
        link: "https://www.amazon.com/Wisdom-Pattern-Order-Disorder-Reorder/dp/1632533464",
        coverImage: "https://images-na.ssl-images-amazon.com/images/P/1632533464.01.L.jpg"
      },
      {
        title: "An Untidy Faith",
        author: "Kate Boyd",
        description: "Tired of trying to keep your faith neat and tidy? Boyd invites you into the beautiful mess of authentic spirituality. Perfect for those ready to embrace a more honest journey with Jesus!",
        link: "https://www.amazon.com/Untidy-Faith-Journeying-Following-Jesus/dp/1513811797/",
        coverImage: "https://images-na.ssl-images-amazon.com/images/P/1513811797.01.L.jpg"
      },
      {
        title: "After Evangelicalism",
        author: "David Gushee",
        description: "Questioning your evangelical background? Gushee offers a thoughtful path forward that maintains faith while engaging tough questions. A hopeful guide for those seeking a new way forward!",
        link: "https://www.amazon.com/After-Evangelicalism-Path-New-Christianity/dp/0664266118",
        coverImage: "https://images-na.ssl-images-amazon.com/images/P/0664266118.01.L.jpg"
      }
    ]
  },
  {
    id: 7,
    title: "Building Community: Church Life Together",
    description: "Healthy church culture and authentic fellowship",
    books: [
      {
        title: "A Church Called Tov",
        author: "Scot McKnight",
        description: "Want to help build a healthier church? McKnight shows how to create a culture of goodness that resists toxicity and promotes healing. A practical guide for transforming your church community!",
        link: "https://www.amazon.com/Church-Called-Tov-Forming-Goodness/dp/1496446003",
        coverImage: "https://images-na.ssl-images-amazon.com/images/P/1496446003.01.L.jpg"
      },
      {
        title: "Pivot",
        author: "Scot McKnight",
        description: "Ready to transform your church culture? Learn the practical steps and proven practices for shifting from toxic patterns to life-giving community. Your roadmap to creating lasting positive change!",
        link: "https://www.amazon.com/Pivot-Priorities-Practices-Transform-Culture/dp/149646673X/",
        coverImage: "https://images-na.ssl-images-amazon.com/images/P/149646673X.01.L.jpg"
      },
      {
        title: "Accidental Saints",
        author: "Nadia Bolz-Weber",
        description: "Think God only works through perfect people? Think again! Through raw and honest stories, discover how God shows up in the most unexpected people and places. A refreshing look at authentic community!",
        link: "https://www.amazon.com/Accidental-Saints-Finding-Perfectly-Imperfect/dp/1601427557",
        coverImage: "https://images-na.ssl-images-amazon.com/images/P/1601427557.01.L.jpg"
      },
      {
        title: "Convictions",
        author: "Marcus Borg",
        description: "How does faith actually work in real life? Borg shares profound insights about what matters most in our spiritual journey together. A wise guide for connecting faith and community!",
        link: "https://www.amazon.com/Convictions-Learned-What-Matters-Most/dp/0062269976",
        coverImage: "https://images-na.ssl-images-amazon.com/images/P/0062269976.01.L.jpg"
      },
      {
        title: "Something's Not Right",
        author: "Wade Mullen",
        description: "Feel like something's off but can't put your finger on it? Mullen helps you recognize and respond to manipulation in religious contexts. Essential reading for creating safer church communities!",
        link: "https://www.amazon.com/Somethings-Not-Right-Decoding-Abuse/dp/1496444701",
        coverImage: "https://images-na.ssl-images-amazon.com/images/P/1496444701.01.L.jpg"
      },
      {
        title: "When Narcissism Comes to Church",
        author: "Chuck DeGroat",
        description: "Struggling with toxic leadership in your church? DeGroat provides wisdom for recognizing narcissistic patterns and finding paths toward healing. Hope and help for wounded communities!",
        link: "https://www.amazon.com/When-Narcissism-Comes-Church-Community/dp/0830841598",
        coverImage: "https://images-na.ssl-images-amazon.com/images/P/0830841598.01.L.jpg"
      },
      {
        title: "Bully Pulpit",
        author: "Michael J. Kruger",
        description: "Concerned about spiritual abuse in church leadership? Kruger offers clear insights for identifying and addressing bullying from the pulpit. A powerful resource for protecting church communities!",
        link: "https://www.amazon.com/Bully-Pulpit-Confronting-Problem-Spiritual/dp/0310136385/",
        coverImage: "https://images-na.ssl-images-amazon.com/images/P/0310136385.01.L.jpg"
      }
    ]
  },
  {
    id: 8,
    title: "Servant Leadership: Ministry with Purpose",
    description: "Practical wisdom for ministry and leadership",
    books: [
      {
        title: "The 360 Degree Leader",
        author: "John C. Maxwell",
        description: "Feel stuck in the middle? Maxwell shows how to lead effectively from any position in your organization. Learn to influence up, across, and down - a game-changer for every leader!",
        link: "https://www.amazon.com/360-Degree-Leader-Developing-Organization/dp/1400203597",
        coverImage: "https://images-na.ssl-images-amazon.com/images/P/1400203597.01.L.jpg"
      },
      {
        title: "10 Power Principles for Christian Service",
        author: "Warren Wiersbe",
        description: "Want to make a lasting impact in ministry? Discover ten transformative principles that will energize your service and avoid burnout. Your guide to sustainable, joy-filled ministry!",
        link: "https://www.amazon.com/10-Power-Principles-Christian-Service/dp/0801072581",
        coverImage: "https://images-na.ssl-images-amazon.com/images/P/0801072581.01.L.jpg"
      },
      {
        title: "On Being a Servant of God",
        author: "Warren W. Wiersbe",
        description: "Looking to deepen your ministry impact? Wiersbe shares timeless wisdom on serving God with humility and joy. Essential insights for anyone called to serve in God's kingdom!",
        link: "https://www.amazon.com/Being-Servant-God-Warren-Wiersbe/dp/0801068193/",
        coverImage: "https://images-na.ssl-images-amazon.com/images/P/0801068193.01.L.jpg"
      },
      {
        title: "On Being a Leader for God",
        author: "Warren W. Wiersbe",
        description: "Want to lead with godly wisdom and purpose? Learn from Wiersbe's decades of experience in biblical leadership. Practical guidance for every Christian leader's journey!",
        link: "https://www.amazon.com/Being-Leader-God-Warren-Wiersbe/dp/0801013828/",
        coverImage: "https://images-na.ssl-images-amazon.com/images/P/0801013828.01.L.jpg"
      },
      {
        title: "Strengthening the Soul of Your Leadership",
        author: "Ruth Haley Barton",
        description: "Feeling spiritually drained by leadership? Barton guides you to lead from a place of deep spiritual health and authentic connection with God. Transform your leadership by nurturing your soul!",
        link: "https://www.amazon.com/Strengthening-Soul-Your-Leadership-Transforming/dp/083084645X",
        coverImage: "https://images-na.ssl-images-amazon.com/images/P/083084645X.01.L.jpg"
      },
      {
        title: "A Little Handbook for Preachers",
        author: "Mary S. Hulst",
        description: "Want to connect more deeply with your listeners? Discover practical tips and inspiring insights for crafting messages that transform lives. Your guide to more engaging and effective preaching!",
        link: "https://www.amazon.com/Little-Handbook-Preachers-Practical-Better/dp/0830841288",
        coverImage: "https://images-na.ssl-images-amazon.com/images/P/0830841288.01.L.jpg"
      }
    ]
  },
  {
    id: 9,
    title: "Faith Engaging Culture: Contemporary Questions",
    description: "Thoughtful responses to modern challenges",
    books: [
      {
        title: "Love Matters More",
        author: "Jared Byas",
        description: "Tired of endless debates about truth? Discover how Jesus' radical emphasis on love changes everything. A refreshing guide to engaging culture without losing your soul!",
        link: "https://www.amazon.com/Love-Matters-More-Fighting-Loving/dp/0310358604",
        coverImage: "https://images-na.ssl-images-amazon.com/images/P/0310358604.01.L.jpg"
      },
      {
        title: "Love Wins",
        author: "Rob Bell",
        description: "Ever wondered about heaven, hell, and God's ultimate plan? Bell's provocative exploration will challenge your assumptions and expand your vision of God's love. Get ready for a mind-opening journey!",
        link: "https://www.amazon.com/Love-Wins-About-Heaven-Person-ebook/dp/B004IWR3CE",
        coverImage: "https://images-na.ssl-images-amazon.com/images/P/B004IWR3CE.01.L.jpg"
      },
      {
        title: "The Irresistible Revolution",
        author: "Shane Claiborne",
        description: "Ready for a radical faith that changes everything? Claiborne shares inspiring stories and practical insights about living out the revolutionary way of Jesus in today's world. A compelling call to love extraordinarily!",
        link: "https://www.amazon.com/Irresistible-Revolution-Updated-Expanded-Ordinary/dp/0310343704/",
        coverImage: "https://images-na.ssl-images-amazon.com/images/P/0310343704.01.L.jpg"
      },
      {
        title: "God and the Gay Christian",
        author: "Matthew Vines",
        description: "Seeking to understand what Scripture really says about same-sex relationships? Vines combines personal experience with careful biblical scholarship to offer fresh insights. A thoughtful exploration of faith and sexuality!",
        link: "https://www.amazon.com/God-Gay-Christian-Biblical-Relationships/dp/160142518X",
        coverImage: "https://images-na.ssl-images-amazon.com/images/P/160142518X.01.L.jpg"
      },
      {
        title: "UnClobber",
        author: "Colby Martin",
        description: "Want to dig deeper into those 'clobber passages'? Martin walks through each text with clarity and compassion, revealing surprising insights from Scripture. A game-changing look at the Bible and sexuality!",
        link: "https://www.amazon.com/UnClobber-Rethinking-Misuse-Bible-Homosexuality/dp/066426221X",
        coverImage: "https://images-na.ssl-images-amazon.com/images/P/066426221X.01.L.jpg"
      },
      {
        title: "Changing Our Mind",
        author: "David Gushee",
        description: "Curious about how a leading evangelical ethicist changed his views? Follow Gushee's compelling journey of biblical reflection and moral reasoning. A courageous exploration of faith and inclusion!",
        link: "https://www.amazon.com/Changing-Our-Mind-David-Gushee/dp/1939880769",
        coverImage: "https://images-na.ssl-images-amazon.com/images/P/1939880769.01.L.jpg"
      },
      {
        title: "The Widening of God's Mercy",
        author: "Christopher Hays",
        description: "Ready for a deep dive into biblical interpretation and sexuality? Hays brings scholarly expertise and pastoral sensitivity to this crucial conversation. An enlightening journey through Scripture!",
        link: "https://www.amazon.com/Widening-Gods-Mercy-Sexuality-Biblical/dp/0300273428",
        coverImage: "https://images-na.ssl-images-amazon.com/images/P/0300273428.01.L.jpg"
      },
      {
        title: "Scripture, Ethics, and the Possibility of Same-Sex Relationships",
        author: "Karen Keen",
        description: "Looking for a balanced approach to this complex issue? Keen carefully examines biblical ethics while maintaining deep respect for Scripture. A thoughtful guide through challenging terrain!",
        link: "https://www.amazon.com/Scripture-Ethics-Possibility-Same-Sex-Relationships/dp/0802876544",
        coverImage: "https://images-na.ssl-images-amazon.com/images/P/0802876544.01.L.jpg"
      },
      {
        title: "Sex God",
        author: "Rob Bell",
        description: "Ever wondered how sexuality and spirituality connect? Bell explores the profound relationship between our physical and spiritual lives. A fascinating journey into what makes us fully human!",
        link: "https://www.amazon.com/Sex-God-Exploring-Connections-Spirituality/dp/0062197231/",
        coverImage: "https://images-na.ssl-images-amazon.com/images/P/0062197231.01.L.jpg"
      }
    ]
  },
  {
    id: 10,
    title: "New Creation: Heaven, Earth & Resurrection",
    description: "Understanding hope, renewal, and God's future",
    books: [
      {
        title: "Surprised by Hope",
        author: "N.T. Wright",
        description: "Think heaven is just about floating on clouds? Think again! Wright reveals how resurrection hope transforms everything - our future, our present, and our mission. Get ready for a revolutionary vision of Christian hope!",
        link: "https://www.amazon.com/Surprised-Hope-Rethinking-Resurrection-Mission/dp/0062089978",
        coverImage: "https://images-na.ssl-images-amazon.com/images/P/0062089978.01.L.jpg"
      },
      {
        title: "Revelation for Normal People",
        author: "Robyn Whitaker",
        description: "Intimidated by the book of Revelation? Whitaker makes this mysterious book accessible and relevant for today's readers. Finally, a guide that helps normal people understand this powerful text!",
        link: "https://www.amazon.com/Revelation-Normal-People-Strangest-Dangerous/dp/1736468685/",
        coverImage: "https://images-na.ssl-images-amazon.com/images/P/1736468685.01.L.jpg"
      },
      {
        title: "A New Heaven and a New Earth",
        author: "J. Richard Middleton",
        description: "Ever wondered about God's ultimate plan for creation? Discover how the Bible's story ends not with escape to heaven, but with the renewal of the entire cosmos. A mind-expanding journey into biblical hope!",
        link: "https://www.amazon.com/New-Heaven-Earth-Reclaiming-Eschatology/dp/0801048680",
        coverImage: "https://images-na.ssl-images-amazon.com/images/P/0801048680.01.L.jpg"
      },
      {
        title: "Revelation for the Rest of Us",
        author: "Scot McKnight",
        description: "Want to hear Revelation through fresh ears? McKnight uncovers how this powerful book speaks hope to the marginalized and challenges to the powerful. A timely perspective on this ancient message!",
        link: "https://www.amazon.com/Revelation-Rest-Us-Prophetic-Dissident/dp/0310135788/",
        coverImage: "https://images-na.ssl-images-amazon.com/images/P/0310135788.01.L.jpg"
      },
      {
        title: "Her Gates Will Never Be Shut",
        author: "Brad Jersak",
        description: "Worried about hell and God's judgment? Jersak explores the stunning breadth of God's reconciling love and the hope of universal restoration. A healing journey through difficult questions!",
        link: "https://www.amazon.com/Her-Gates-Will-Never-Shut/dp/1606088823",
        coverImage: "https://images-na.ssl-images-amazon.com/images/P/1606088823.01.L.jpg"
      },
      {
        title: "The Inescapable Love of God",
        author: "Thomas Talbott",
        description: "Could God's love really save everyone? Through careful reasoning and biblical exploration, Talbott makes a compelling case for universal salvation. A hope-filled vision of God's ultimate victory!",
        link: "https://www.amazon.com/Inescapable-Love-God-Second/dp/B010BW6GNG/",
        coverImage: "https://m.media-amazon.com/images/I/8140F7C4Q+L._SL1500_.jpg"
      },
      {
        title: "That All Shall Be Saved",
        author: "David Bentley Hart",
        description: "Ready for a philosophical deep dive into universal salvation? Hart brilliantly argues why God's goodness ensures the ultimate restoration of all things. A masterful defense of cosmic hope!",
        link: "https://www.amazon.com/That-All-Shall-Be-Saved-audiobook/dp/B07XSHBBPZ/",
        coverImage: "https://images-na.ssl-images-amazon.com/images/P/0300246226.01.L.jpg"
      },
      {
        title: "The End of the World as You Know It",
        author: "Matthew L. Halsted",
        description: "Confused by end times prophecies? Halsted cuts through the confusion to reveal what the Bible actually says about the future. A refreshing look at eschatology without the sensationalism!",
        link: "https://www.amazon.com/End-World-You-Know-Really/dp/1683597125/",
        coverImage: "https://images-na.ssl-images-amazon.com/images/P/1683597125.01.L.jpg"
      }
    ]
  }
];

export default function Resources() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState<number[]>([]);

  const toggleCategory = (categoryId: number) => {
    setExpandedCategories(prev => 
      prev.includes(categoryId) 
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  return (
    <main className="min-h-screen flex flex-col">
      {/* Navigation Bar */}
      <nav className="bg-white/80 backdrop-blur-sm shadow-lg sticky top-0 z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* Logo/Brand */}
            <div className="w-[140px] sm:w-[180px] flex justify-start">
              <Link href="/" className="flex items-center group">
                <span className="text-xl sm:text-2xl font-bold text-[#3945cb] group-hover:text-[#868de4] transition-colors duration-200">ChristLife.</span>
              </Link>
            </div>
            
            {/* Navigation Links - Hidden on Mobile */}
            <div className="hidden md:flex flex-1 items-center justify-center">
              <div className="flex items-center space-x-8 lg:space-x-12">
                <Link href="/" className="text-gray-600 hover:text-[#3945cb] transition-all duration-200 py-2 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-[#3945cb] after:transition-all after:duration-300">
                  Home
                </Link>
                <Link href="/calendar" className="text-gray-600 hover:text-[#3945cb] transition-all duration-200 py-2 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-[#3945cb] after:transition-all after:duration-300">
                  Calendar
                </Link>
                <Link href="/leadership" className="text-gray-600 hover:text-[#3945cb] transition-all duration-200 py-2 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-[#3945cb] after:transition-all after:duration-300">
                  Leadership
                </Link>
                <Link href="/resources" className="text-[#3945cb] hover:text-[#868de4] transition-all duration-200 py-2 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-[#868de4] after:transition-all after:duration-300">
                  Resources
                </Link>
                <Link href="/about" className="text-gray-600 hover:text-[#3945cb] transition-all duration-200 py-2 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-[#3945cb] after:transition-all after:duration-300">
                  About Us
                </Link>
              </div>
            </div>

            {/* Social Media Links - Hidden on Mobile */}
            <div className="hidden md:flex w-[140px] sm:w-[180px] justify-end items-center space-x-4 lg:space-x-6">
              <a 
                href="https://www.facebook.com/ChristLifeBacoor"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#3945cb] transition-colors duration-200"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a 
                href="https://www.instagram.com/christlifebacoor"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#3945cb] transition-colors duration-200"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-md text-gray-600 hover:text-[#3945cb] focus:outline-none"
              >
                <svg 
                  className="h-6 w-6 transition-transform duration-300" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                  style={{ transform: isMobileMenuOpen ? 'rotate(90deg)' : 'none' }}
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d={isMobileMenuOpen 
                      ? "M6 18L18 6M6 6l12 12" 
                      : "M4 6h16M4 12h16M4 18h16"
                    } 
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div 
          className={cn(
            "md:hidden transition-all duration-300 ease-in-out",
            isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
          )}
        >
          <div className="px-4 pt-2 pb-3 space-y-2 bg-white/95 backdrop-blur-sm border-t border-gray-100">
            <Link href="/" className="block px-3 py-2 text-gray-600 hover:text-[#3945cb] hover:bg-[#3945cb]/10 rounded-lg transition-all duration-200">
              Home
            </Link>
            <Link href="/calendar" className="block px-3 py-2 text-gray-600 hover:text-[#3945cb] hover:bg-[#3945cb]/10 rounded-lg transition-all duration-200">
              Calendar
            </Link>
            <Link href="/leadership" className="block px-3 py-2 text-gray-600 hover:text-[#3945cb] hover:bg-[#3945cb]/10 rounded-lg transition-all duration-200">
              Leadership
            </Link>
            <Link href="/resources" className="block px-3 py-2 text-[#3945cb] hover:bg-[#3945cb]/10 rounded-lg transition-all duration-200">
              Resources
            </Link>
            <Link href="/about" className="block px-3 py-2 text-gray-600 hover:text-[#3945cb] hover:bg-[#3945cb]/10 rounded-lg transition-all duration-200">
              About Us
            </Link>
            {/* Social Media Links for Mobile */}
            <div className="flex items-center space-x-4 px-3 py-2">
              <a 
                href="https://www.facebook.com/ChristLifeBacoor"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#3945cb] transition-colors duration-200"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a 
                href="https://www.instagram.com/christlifebacoor"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#3945cb] transition-colors duration-200"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Banner - 1/3 Size */}
      <section className="relative w-full min-h-[33vh] bg-white overflow-hidden">
        <AnimatedGridPattern
          numSquares={30}
          maxOpacity={0.1}
          duration={3}
          repeatDelay={1}
          className={cn(
            "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
            "absolute inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
          )}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl sm:text-5xl font-bold text-[#3945cb] mb-4">
              Resources
            </h1>
            <p className="text-lg text-gray-600">
              Access our collection of spiritual resources, study materials, and tools to help you grow in your faith journey.
            </p>
          </div>
        </div>
      </section>

      {/* Content Area */}
      <section className="bg-[#f8f8ff] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Reading List Introduction */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#3945cb] mb-6">
              77 Recommended Books
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We&apos;ve been building our church with one simple foundation: following the way of Jesus. Throughout this journey, we&apos;ve found these scholarly and academic books to be invaluable resources. These resources emphasize academic research and historical context, prioritizing data over dogma, while maintaining deep respect for the transformative power of faith.
            </p>
          </div>

          {/* Library Categories */}
          <div className="max-w-4xl mx-auto">
            {bookCategories.map((category) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: category.id * 0.1 }}
                className="mb-4"
              >
                <div 
                  key={category.id} 
                  className={`border-b border-gray-100 last:border-b-0 rounded-lg shadow-sm hover:shadow-md ${expandedCategories.includes(category.id) ? 'bg-white' : 'bg-white/50'}`}
                >
                  <button
                    onClick={() => toggleCategory(category.id)}
                    className="w-full px-5 py-4 flex items-start justify-between transition-all duration-200"
                  >
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="text-lg font-semibold text-[#3945cb] text-left leading-tight">
                          {category.title}
                        </h3>
                        <span className="text-sm text-gray-500 flex-shrink-0 pt-1">
                          ({category.books.length} books)
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm mt-1 text-left line-clamp-2">
                        {category.description}
                      </p>
                    </div>
                    <div className="ml-4 flex-shrink-0 pt-1.5">
                      <svg
                        className={`w-5 h-5 text-gray-400 transform transition-transform duration-200 ${
                          expandedCategories.includes(category.id) ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>
                </div>

                {/* Expanded Content */}
                {expandedCategories.includes(category.id) && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4"
                  >
                    {category.books.map((book, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        className="flex gap-4 p-4 bg-white rounded-lg border border-gray-100 hover:border-[#3945cb]/20 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
                      >
                        {/* Book Cover Image */}
                        <div className="w-[80px] sm:w-[100px] h-[120px] sm:h-[140px] flex-shrink-0 overflow-hidden rounded shadow-sm group-hover:shadow-md transition-shadow duration-200">
                          <img
                            src={book.coverImage}
                            alt={`Cover of ${book.title}`}
                            className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.style.display = 'none';
                              target.parentElement!.classList.add('bg-gradient-to-br', 'from-gray-100', 'to-gray-50');
                            }}
                          />
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <a
                            href={book.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block font-medium text-gray-900 hover:text-[#3945cb] transition-colors duration-200"
                          >
                            <span className="relative">
                              {book.title}
                              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#3945cb] transition-all duration-300 group-hover:w-full"></span>
                            </span>
                          </a>
                          <p className="text-sm text-gray-500 mt-1">by {book.author}</p>
                          <p className="text-sm text-gray-600 mt-2 line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
                            {book.description}
                          </p>
                          <div className="mt-3 flex items-center gap-2">
                            <a
                              href={book.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center text-xs font-medium text-[#3945cb] hover:text-[#868de4] transition-colors duration-200 group"
                            >
                              View on Amazon
                              <motion.svg 
                                className="w-4 h-4 ml-1"
                                animate={{ x: [0, 4, 0] }}
                                transition={{ duration: 1, repeat: Infinity, repeatDelay: 1 }}
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                              </motion.svg>
                            </a>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bible Study Tools & Podcasts Section */}
      <section className="bg-[#f8f8ff] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Bible Study Tools */}
            <div>
              <div className="text-center lg:text-left mb-6">
                <h2 className="text-3xl font-bold text-[#3945cb] mb-2">
                  Bible Study Tools & Resources
                </h2>
                <p className="text-lg text-gray-600">
                  Enhance your Bible study with these powerful digital tools.
                </p>
              </div>
              <div className="grid gap-4">
                {/* Logos */}
                <a 
                  href="https://www.logos.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-white rounded-xl p-4 shadow hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group h-[120px]"
                >
                  <div className="flex items-start gap-4 h-full">
                    <div className="h-10 w-10 bg-[#3945cb]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-[#3945cb]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-[#3945cb] transition-colors">Logos Bible Software</h3>
                      <p className="text-gray-600 mt-1 text-sm line-clamp-2">Professional-grade Bible study software with extensive libraries and tools.</p>
                    </div>
                  </div>
                </a>

                {/* Blue Letter Bible */}
                <a 
                  href="https://www.blueletterbible.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-white rounded-xl p-4 shadow hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group h-[120px]"
                >
                  <div className="flex items-start gap-4 h-full">
                    <div className="h-10 w-10 bg-[#3945cb]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-[#3945cb]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-[#3945cb] transition-colors">Blue Letter Bible</h3>
                      <p className="text-gray-600 mt-1 text-sm line-clamp-2">Free online Bible study tools with Greek and Hebrew resources.</p>
                    </div>
                  </div>
                </a>

                {/* Life Bible */}
                <a 
                  href="https://lifebible.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-white rounded-xl p-4 shadow hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group h-[120px]"
                >
                  <div className="flex items-start gap-4 h-full">
                    <div className="h-10 w-10 bg-[#3945cb]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-[#3945cb]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-[#3945cb] transition-colors">Life Bible</h3>
                      <p className="text-gray-600 mt-1 text-sm line-clamp-2">Modern Bible study platform with interactive features and resources.</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            {/* Podcasts */}
            <div>
              <div className="text-center lg:text-left mb-6">
                <h2 className="text-3xl font-bold text-[#3945cb] mb-2">
                  Featured Podcasts
                </h2>
                <p className="text-lg text-gray-600">
                  Dive deeper into Scripture through these thought-provoking podcasts.
                </p>
              </div>
              <div className="grid gap-4">
                {/* The Bible Project */}
                <a 
                  href="https://open.spotify.com/show/6f2oD3RtQY1rOeyfF2OeOa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-white rounded-xl p-4 shadow hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group h-[120px]"
                >
                  <div className="flex items-start gap-4 h-full">
                    <div className="h-10 w-10 bg-[#3945cb]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-[#3945cb]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15.536a5 5 0 001.414 1.414m2.828-9.9a9 9 0 012.828-2.828" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-[#3945cb] transition-colors">The Bible Project</h3>
                      <p className="text-gray-600 mt-1 text-sm line-clamp-2">Presents engaging discussions on key themes, characters, and narratives within the Bible, aimed at enhancing understanding for listener</p>
                    </div>
                  </div>
                </a>

                {/* The Bible for Normal People */}
                <a 
                  href="https://open.spotify.com/show/2991KOQDSOZK59jopj5jjv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-white rounded-xl p-4 shadow hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group h-[120px]"
                >
                  <div className="flex items-start gap-4 h-full">
                    <div className="h-10 w-10 bg-[#3945cb]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-[#3945cb]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-[#3945cb] transition-colors">The Bible for Normal People</h3>
                      <p className="text-gray-600 mt-1 text-sm line-clamp-2">Aims to make biblical scholarship accessible to everyday individuals through conversations with experts, addressing fundamental questions about the Bible and its relevance</p>
                    </div>
                  </div>
                </a>

                {/* The Naked Bible */}
                <a 
                  href="https://open.spotify.com/show/6Oi74KyatPWSb6I06e1vK1?si=2a8bb3d93dbc4cb7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-white rounded-xl p-4 shadow hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group h-[120px]"
                >
                  <div className="flex items-start gap-4 h-full">
                    <div className="h-10 w-10 bg-[#3945cb]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-[#3945cb]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-[#3945cb] transition-colors">The Naked Bible</h3>
                      <p className="text-gray-600 mt-1 text-sm line-clamp-2">Offers a scholarly exploration of biblical theology, focusing on context while stripping away denominational biases and theological systems</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Biblical Education Section */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Academic Resources */}
            <div>
              <div className="text-center lg:text-left mb-6">
                <h2 className="text-3xl font-bold text-[#3945cb] mb-2">
                  Academic Resources
                </h2>
                <p className="text-lg text-gray-600">
                  Access scholarly biblical research and academic perspectives.
                </p>
              </div>
              <div className="grid gap-4">
                <a 
                  href="https://www.thetorah.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-white rounded-xl p-4 shadow hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group h-[120px]"
                >
                  <div className="flex items-start gap-4 h-full">
                    <div className="h-10 w-10 bg-[#3945cb]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-[#3945cb]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-[#3945cb] transition-colors">TheTorah.com</h3>
                      <p className="text-gray-600 mt-1 text-sm line-clamp-2">Academic study of the Hebrew Bible in its historical context.</p>
                    </div>
                  </div>
                </a>

                <a 
                  href="https://biologos.org/common-questions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-white rounded-xl p-4 shadow hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group h-[120px]"
                >
                  <div className="flex items-start gap-4 h-full">
                    <div className="h-10 w-10 bg-[#3945cb]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-[#3945cb]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-[#3945cb] transition-colors">BioLogos</h3>
                      <p className="text-gray-600 mt-1 text-sm line-clamp-2">Exploring the harmony between science and biblical faith.</p>
                    </div>
                  </div>
                </a>

                <a 
                  href="https://www.bibleodyssey.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-white rounded-xl p-4 shadow hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group h-[120px]"
                >
                  <div className="flex items-start gap-4 h-full">
                    <div className="h-10 w-10 bg-[#3945cb]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-[#3945cb]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-[#3945cb] transition-colors">Bible Odyssey</h3>
                      <p className="text-gray-600 mt-1 text-sm line-clamp-2">Exploring the Bible through history and literature.</p>
                    </div>
                  </div>
                </a>

                <a 
                  href="https://weekly.israelbiblecenter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-white rounded-xl p-4 shadow hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group h-[120px]"
                >
                  <div className="flex items-start gap-4 h-full">
                    <div className="h-10 w-10 bg-[#3945cb]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-[#3945cb]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-[#3945cb] transition-colors">Israel Bible Center</h3>
                      <p className="text-gray-600 mt-1 text-sm line-clamp-2">Weekly insights into biblical Hebrew culture and context.</p>
                    </div>
                  </div>
                </a>

                <a 
                  href="https://drmsh.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-white rounded-xl p-4 shadow hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group h-[120px]"
                >
                  <div className="flex items-start gap-4 h-full">
                    <div className="h-10 w-10 bg-[#3945cb]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-[#3945cb]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-[#3945cb] transition-colors">Dr. Michael Heiser&apos;s Blog</h3>
                      <p className="text-gray-600 mt-1 text-sm line-clamp-2">Scholar&apos;s perspective on biblical supernatural worldview.</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            {/* Educational Platforms */}
            <div>
              <div className="text-center lg:text-left mb-6">
                <h2 className="text-3xl font-bold text-[#3945cb] mb-2">
                  Educational Platforms
                </h2>
                <p className="text-lg text-gray-600">
                  Learn from trusted biblical education resources and platforms.
                </p>
              </div>
              <div className="grid gap-4">
                <a 
                  href="https://bibleproject.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-white rounded-xl p-4 shadow hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group h-[120px]"
                >
                  <div className="flex items-start gap-4 h-full">
                    <div className="h-10 w-10 bg-[#3945cb]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-[#3945cb]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-[#3945cb] transition-colors">The Bible Project</h3>
                      <p className="text-gray-600 mt-1 text-sm line-clamp-2">Visual explanations of biblical themes and books.</p>
                    </div>
                  </div>
                </a>

                <a 
                  href="https://thebiblefornormalpeople.com/blog/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-white rounded-xl p-4 shadow hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group h-[120px]"
                >
                  <div className="flex items-start gap-4 h-full">
                    <div className="h-10 w-10 bg-[#3945cb]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-[#3945cb]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-[#3945cb] transition-colors">The Bible for Normal People Blog</h3>
                      <p className="text-gray-600 mt-1 text-sm line-clamp-2">Making biblical scholarship accessible to everyone.</p>
                    </div>
                  </div>
                </a>

                <a 
                  href="https://www.1517.org/articles"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-white rounded-xl p-4 shadow hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group h-[120px]"
                >
                  <div className="flex items-start gap-4 h-full">
                    <div className="h-10 w-10 bg-[#3945cb]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-[#3945cb]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-[#3945cb] transition-colors">1517 Articles</h3>
                      <p className="text-gray-600 mt-1 text-sm line-clamp-2">Theological articles and biblical commentary.</p>
                    </div>
                  </div>
                </a>

                <a 
                  href="https://www.logos.com/grow/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-white rounded-xl p-4 shadow hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group h-[120px]"
                >
                  <div className="flex items-start gap-4 h-full">
                    <div className="h-10 w-10 bg-[#3945cb]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-[#3945cb]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-[#3945cb] transition-colors">Logos Grow</h3>
                      <p className="text-gray-600 mt-1 text-sm line-clamp-2">Bible study resources and learning materials.</p>
                    </div>
                  </div>
                </a>

                <a 
                  href="https://blog.faithlife.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-white rounded-xl p-4 shadow hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group h-[120px]"
                >
                  <div className="flex items-start gap-4 h-full">
                    <div className="h-10 w-10 bg-[#3945cb]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-[#3945cb]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-[#3945cb] transition-colors">Faithlife Blog</h3>
                      <p className="text-gray-600 mt-1 text-sm line-clamp-2">Ministry resources and biblical insights.</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design & Creative Tools Section */}
      <section className="bg-[#f8f8ff] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-[#3945cb] mb-2">
              Design & Creative Tools
            </h2>
            <p className="text-lg text-gray-600">
              Essential resources for creating beautiful church media and content.
            </p>
          </div>

          {/* First Row - 3 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {/* Design Software */}
            <div className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-semibold text-[#3945cb] mb-4">Design/Video Software</h3>
              <div className="space-y-2">
                <a href="https://www.canva.com/" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-600 hover:text-[#3945cb] transition-colors">
                  <span className="w-6 h-6 mr-2 flex-shrink-0 text-[#3945cb]/60">→</span>
                  <span className="text-sm">Canva</span>
                </a>
                <a href="https://affinity.serif.com/" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-600 hover:text-[#3945cb] transition-colors">
                  <span className="w-6 h-6 mr-2 flex-shrink-0 text-[#3945cb]/60">→</span>
                  <span className="text-sm">Affinity</span>
                </a>
                <a href="https://www.figma.com/" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-600 hover:text-[#3945cb] transition-colors">
                  <span className="w-6 h-6 mr-2 flex-shrink-0 text-[#3945cb]/60">→</span>
                  <span className="text-sm">Figma</span>
                </a>
                <a href="https://www.gimp.org/" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-600 hover:text-[#3945cb] transition-colors">
                  <span className="w-6 h-6 mr-2 flex-shrink-0 text-[#3945cb]/60">→</span>
                  <span className="text-sm">GIMP</span>
                </a>
                <a href="https://www.capcut.com/" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-600 hover:text-[#3945cb] transition-colors">
                  <span className="w-6 h-6 mr-2 flex-shrink-0 text-[#3945cb]/60">→</span>
                  <span className="text-sm">CapCut</span>
                </a>
              </div>
            </div>

            {/* Color Resources */}
            <div className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-semibold text-[#3945cb] mb-4">Color Resources</h3>
              <div className="space-y-2">
                <a href="https://color.adobe.com/explore" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-600 hover:text-[#3945cb] transition-colors">
                  <span className="w-6 h-6 mr-2 flex-shrink-0 text-[#3945cb]/60">→</span>
                  <span className="text-sm">Adobe Color</span>
                </a>
                <a href="https://colorhunt.co/" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-600 hover:text-[#3945cb] transition-colors">
                  <span className="w-6 h-6 mr-2 flex-shrink-0 text-[#3945cb]/60">→</span>
                  <span className="text-sm">Color Hunt</span>
                </a>
                <a href="https://coolors.co/" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-600 hover:text-[#3945cb] transition-colors">
                  <span className="w-6 h-6 mr-2 flex-shrink-0 text-[#3945cb]/60">→</span>
                  <span className="text-sm">Coolors</span>
                </a>
              </div>
            </div>

            {/* Typography */}
            <div className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-semibold text-[#3945cb] mb-4">Typography</h3>
              <div className="space-y-2">
                <a href="https://fonts.google.com/" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-600 hover:text-[#3945cb] transition-colors">
                  <span className="w-6 h-6 mr-2 flex-shrink-0 text-[#3945cb]/60">→</span>
                  <span className="text-sm">Google Fonts</span>
                </a>
                <a href="https://www.creativefabrica.com/freebies/free-fonts/" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-600 hover:text-[#3945cb] transition-colors">
                  <span className="w-6 h-6 mr-2 flex-shrink-0 text-[#3945cb]/60">→</span>
                  <span className="text-sm">Creative Fabrica Fonts</span>
                </a>
                <a href="https://www.fontsquirrel.com/" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-600 hover:text-[#3945cb] transition-colors">
                  <span className="w-6 h-6 mr-2 flex-shrink-0 text-[#3945cb]/60">→</span>
                  <span className="text-sm">Font Squirrel</span>
                </a>
              </div>
            </div>
          </div>

          {/* Second Row - 4 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Icons & Illustrations */}
            <div className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-semibold text-[#3945cb] mb-4">Icons & Illustrations</h3>
              <div className="space-y-2">
                <a href="https://fonts.google.com/icons" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-600 hover:text-[#3945cb] transition-colors">
                  <span className="w-6 h-6 mr-2 flex-shrink-0 text-[#3945cb]/60">→</span>
                  <span className="text-sm">Google Icons</span>
                </a>
                <a href="https://undraw.co/illustrations" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-600 hover:text-[#3945cb] transition-colors">
                  <span className="w-6 h-6 mr-2 flex-shrink-0 text-[#3945cb]/60">→</span>
                  <span className="text-sm">unDraw Illustrations</span>
                </a>
                <a href="https://icons8.com/illustrations/styles/free-1" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-600 hover:text-[#3945cb] transition-colors">
                  <span className="w-6 h-6 mr-2 flex-shrink-0 text-[#3945cb]/60">→</span>
                  <span className="text-sm">Icons8 Illustrations</span>
                </a>
              </div>
            </div>

            {/* Stock Media */}
            <div className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-semibold text-[#3945cb] mb-4">Stock Media</h3>
              <div className="space-y-2">
                <a href="https://www.pexels.com/" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-600 hover:text-[#3945cb] transition-colors">
                  <span className="w-6 h-6 mr-2 flex-shrink-0 text-[#3945cb]/60">→</span>
                  <span className="text-sm">Pexels</span>
                </a>
                <a href="https://unsplash.com/" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-600 hover:text-[#3945cb] transition-colors">
                  <span className="w-6 h-6 mr-2 flex-shrink-0 text-[#3945cb]/60">→</span>
                  <span className="text-sm">Unsplash</span>
                </a>
                <a href="https://pixabay.com/" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-600 hover:text-[#3945cb] transition-colors">
                  <span className="w-6 h-6 mr-2 flex-shrink-0 text-[#3945cb]/60">→</span>
                  <span className="text-sm">Pixabay</span>
                </a>
              </div>
            </div>

            {/* Creative Inspiration */}
            <div className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-semibold text-[#3945cb] mb-4">Creative Inspiration</h3>
              <div className="space-y-2">
                <a href="https://www.pinterest.com/ideas/" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-600 hover:text-[#3945cb] transition-colors">
                  <span className="w-6 h-6 mr-2 flex-shrink-0 text-[#3945cb]/60">→</span>
                  <span className="text-sm">Pinterest</span>
                </a>
                <a href="https://www.behance.net/" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-600 hover:text-[#3945cb] transition-colors">
                  <span className="w-6 h-6 mr-2 flex-shrink-0 text-[#3945cb]/60">→</span>
                  <span className="text-sm">Behance</span>
                </a>
                <a href="https://dribbble.com/" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-600 hover:text-[#3945cb] transition-colors">
                  <span className="w-6 h-6 mr-2 flex-shrink-0 text-[#3945cb]/60">→</span>
                  <span className="text-sm">Dribbble</span>
                </a>
              </div>
            </div>

            {/* Church Administration */}
            <div className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-semibold text-[#3945cb] mb-4">Church Administration</h3>
              <div className="space-y-2">
                <a href="https://www.notion.com/" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-600 hover:text-[#3945cb] transition-colors">
                  <span className="w-6 h-6 mr-2 flex-shrink-0 text-[#3945cb]/60">→</span>
                  <span className="text-sm">Notion</span>
                </a>
                <a href="https://about.google/products/" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-600 hover:text-[#3945cb] transition-colors">
                  <span className="w-6 h-6 mr-2 flex-shrink-0 text-[#3945cb]/60">→</span>
                  <span className="text-sm">Google Workspace</span>
                </a>
                <a href="https://wetransfer.com/" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-600 hover:text-[#3945cb] transition-colors">
                  <span className="w-6 h-6 mr-2 flex-shrink-0 text-[#3945cb]/60">→</span>
                  <span className="text-sm">WeTransfer</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-center text-gray-500 text-sm">
            ©2025 Christ Life Bacoor. All rights reserved
          </p>
        </div>
      </footer>
    </main>
  );
}