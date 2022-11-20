import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const intro = () => {
  const [section, setSection] = useState("main");
  if (section == "main") {
    return (
      <div className="flex flex-row h-screen w-screen justify-center gap-x-10">
        <div className="flex flex-col font-sans h-screen w-screen pl-32 pr-14 content-center">
          <div className="pt-0 text-7xl text-white mb-10 mt-28">
            Introduction
          </div>
          <div className="pt-0 text-2xl bg-clip-text text-white">
            As the name suggests, this project will explain the rise in
            popularity of some very famous streaming services such as Netflix,
            Spotify, Hulu, Apple Music, etc. via the help of visual data.
          </div>
          <br />
          <div className="text-2xl">
            This data essay also explains why platforms like Napster and
            Blockbuster failed in this "Streaming Age".
          </div>
          <div className="mt-10">
            <button onClick={() => setSection("ref")}>References</button>
          </div>
          <div className="mt-10">
            <button onClick={() => setSection("history")}>CONTINUE</button>
          </div>
        </div>
      </div>
    );
  } else if (section == "ref") {
    return (
      <div className="flex flex-col font-sans h-screen w-screen pl-32 pr-14 content-center">
        <div className="pt-0 text-7xl text- mb-10 mt-28">References</div>
        <div className="pt-0 text-2xl bg-clip-text space-y-3">
          <div>
            <Link href="https://constellate.org/builder/?unigrams=netflix%2C+blockbuster%2C+youtube">
              Constellete for Video Streaming
            </Link>
          </div>
          <br />
          <div>
            <Link href="https://www.businessinsider.in/entertainment/news/the-rise-and-fall-of-blockbuster/articleshow/73310964.cms">
              The rise and fall of Blockbuster
            </Link>
          </div>
          <br />
          <div>
            <Link href="https://www.makeuseof.com/how-when-netflix-start-brief-company-history/">
              How and When Did Netflix Start? A Brief History of the Company
            </Link>
          </div>
          <br />
          <div>
            <Link href="https://www.officetimeline.com/blog/youtube-history-timeline/">
              History of YouTube: a timeline
            </Link>
          </div>
          <br />
          <div>
            <Link href="https://constellate.org/builder/?unigrams=spotify%2C+napster%2C+apple+music/">
              Constellete for Music Streaming
            </Link>
          </div>
          <br />
          <div>
            <Link href="https://timelines.issarice.com/wiki/Timeline_of_Spotify/">
              Timeline of Spotify
            </Link>
          </div>
        </div>
        <div className="mt-10 space-y-3">
          <button onClick={() => setSection("main")}>
            <Link href="">BACK</Link>
          </button>
        </div>
      </div>
    );
  } else if (section == "history") {
    return (
      <div className="flex flex-col font-sans h-screen w-screen pl-32 pr-14 content-center">
        <div className="pt-0 text-7xl text-white mb-10 mt-28">
          Everything has a beginning...
        </div>
        <div className="pt-0 text-2xl bg-clip-text text-white">
          ...and the streaming service industry had one too. It all starts in
          the good old ninetees. The first ever streamed video with audio was of
          a band called "Severe Tire Damage" in 1993. From there, the story
          began. After a year Rolling Stones became the first mainstream popular
          band to join the streaming world and after that, ESPN started to take
          advantage of audio streaming services.
        </div>
        <br />
        <div className="text-2xl">
          These all became stepping stones for the players who are ruing the
          streaming service game today. From Flash Drives to Cloud based
          streaming, the industry grew to be one of the most successful industry
          in today's era and the pandemic was one of the major factors for the
          rise in its popularity.
        </div>
        <div className="mt-10 space-y-3">
          <button onClick={() => setSection("vss")}>
            <Link href="">Video Streaming Services</Link>
          </button>
          <br />
          <button onClick={() => setSection("mss")}>
            <Link href="">Music Streaming Services</Link>
          </button>
          <br />
          <button onClick={() => setSection("main")}>
            <Link href="">BACK</Link>
          </button>
        </div>
      </div>
    );
  } else if (section == "vss") {
    return (
      <div className="flex flex-col font-sans w-screen pl-32 pr-14 content-center mb-10">
        <div className="pt-0 text-7xl text-white mb-10 mt-28">
          Video Streaming Services
        </div>
        <div className="pt-0 text-xl bg-clip-text text-white">
          Today, no one thinks about waiting for hours for a movie or video to
          be downloaded. We just start streaming it on Netflix or YouTube or
          other platforms. But a decade or two decades ago this was merely a
          sci-fi story. At that time some pioneers started to make that story a
          reality. Explore the stories of Blockbuster - one of the pioneers
          along with Netflix and YouTube up ahead.
        </div>
        <br />
        <div className="text-xl">
          The following graph shows the frequency of terms appearing in the
          documents from 1995-2019. I have kept 3 services - Blockbuster,
          Netflix and YouTube as my keywords. We can see from the graph that as
          the platforms' popularity rose, their frequency increased and with
          that they also diminsihed the effect of their competitors as seen with
          Netflix and Blockbuster.
        </div>
        <div className="flex">
          <Image
            src="/videoGraph.jpeg"
            alt="Picture of the author"
            width={500}
            height={500}
          />
        </div>
        <div className="mt-10 space-y-3">
          <div> Know more at below given links</div>
          <button onClick={() => setSection("bb")}>
            <Link href="">Blockbuster</Link>
          </button>
          <br />
          <button onClick={() => setSection("netflix")}>
            <Link href="">Netflix</Link>
          </button>
          <br />
          <button onClick={() => setSection("yt")}>
            <Link href="">Youtube</Link>
          </button>
          <br />
          <button onClick={() => setSection("history")}>
            <Link href="">BACK</Link>
          </button>
        </div>
      </div>
    );
  } else if (section == "bb") {
    return (
      <div className="flex flex-col font-sans w-screen pl-32 pr-14 content-center mb-10">
        <div className="pt-0 text-7xl text-white mb-10 mt-28">Blockbuster</div>
        <div className="pt-0 text-xl bg-clip-text text-white space-y-3">
          <div>Founded: 1985</div>
          <div>Offered selection of 8000 VHS tapes n its first year.</div>
          <div>
            In 1987, 3 major investors invested $18.5 Million in Blockbuster.
          </div>
          <div>
            In 1994, Viacom purchased the company for $8.4 Billion as they open
            6000th store globally.
          </div>
          <div>
            By 1997, Blockbuster made $800 Million or 16% of its revenue from
            late fees. The ridiculously high late fees led to birth of Netflix.
          </div>
          <div>
            In 2000, Blockbuster made the grave mistake of not buying Netflix
            for $50 Million.
          </div>
          <div>
            In 2004, despite having competitors, the company had 9000 working
            stores globally, 60,000 employees and generated revenue of $5.9
            Billion.
          </div>
          <div>
            Same year, they launched Blockbuster Online but was already behind
            Netflix.
          </div>
          <div>
            By 2005, company lost 75% of its market value according to Forbes.
          </div>
          <div>
            In 2010, the company filed for bankruptcy as they couldn't pay $1
            Billion in debt.
          </div>
          <div>
            In 2011, Dish Network bought the company out of bankruptcy for $320
            million in hopes of keeping 600 stores open.
          </div>
          <div>By 2014, the last store of Blockbuster got shut down. </div>
          <div>So this was the journey of Blockbuster. </div>
        </div>
        <div className="mt-10 space-y-3">
          <button onClick={() => setSection("vss")}>
            <Link href="">BACK</Link>
          </button>
        </div>
      </div>
    );
  } else if (section == "netflix") {
    return (
      <div className="flex flex-col font-sans w-screen pl-32 pr-14 content-center mb-10">
        <div className="pt-0 text-7xl text-white mb-10 mt-28">Netflix</div>
        <div className="pt-0 text-xl bg-clip-text text-white space-y-3">
          <div>Founded: 1997</div>
          <div>It started as video rental service.</div>
          <div>
            In 1998, they launched the website. There are roughly 900 titles in
            the video collection. Within 15 minutes, as additional orders begin
            to come in, the website crashes, causing them to rush to the store
            to buy new servers. They had 137 orders booked by the end of the
            first day.
          </div>

          <div>
            By 1999, 239,000 subscribers sign up. Netflix's video library
            expands to 3,100 titles.
          </div>

          <div>
            In 2001,Netflix registers 1 Million users and continues to grow.
          </div>

          <div>
            In 2002, Netflix goes public. Netflix is worth $309.7 million after
            the IPO raises $82.1 million. Netflix responds to complaints from
            subscribers that it took too long to receive their DVDs by opening
            regional warehouses and introducing overnight delivery.
          </div>

          <div>
            In 2006, Netflix finally becomes profitable, generating more than
            $80 million. Subscriber count rises to 6.3 million.
          </div>

          <div>
            In 2007, Netflix begins streaming content, delivering directly to
            TVs, computers, and tablets through its Watch Now service. Thus
            finally entering Internet Streaming Service domain.
          </div>

          <div>
            By 2010, Netflix becomes a complete streaming service company and
            starts to close DVD rental service.
          </div>

          <div>
            Netflix begins producing original content. Lilyhammer premieres
            first, followed in 2013 by House of Cards. Since then, more than
            1,900 originals have been made (becoming one of the best streaming
            services for original content).
          </div>

          <div>
            By 2016, Netflix goes live in 130 countries simultaneously and adds
            local languages to its user interface, subtitles, and dubbing.
          </div>

          <div>
            In 2017, Netflix hits 100 Million subscribers worldwide. By 2021,
            over 190 countries now have 209 million subscribers of Netflix. It
            generates more than $25 billion in annual revenue and has more than
            15,000 titles in all of its worldwide libraries.
          </div>

          <div>
            In 2022, Netflix loses 200,000 subscribers for the first time in a
            decade. So this is the rise in popularity of Netflix.
          </div>
        </div>
        <br />
        <div className="mt-10 space-y-3">
          <button onClick={() => setSection("vss")}>
            <Link href="">BACK</Link>
          </button>
        </div>
      </div>
    );
  } else if (section == "yt") {
    return (
      <div className="flex flex-col font-sans w-screen pl-32 pr-14 content-center mb-10">
        <div className="pt-0 text-7xl text-white mb-10 mt-28">Youtube</div>
        <div className="pt-0 text-xl bg-clip-text text-white space-y-3">
          <div>Founded: 2005</div>
          <div>In 2006, Google buys the company for $1.65 Billion.</div>
          <div>
            In 2007, YouTube Partner Program was launched. YouTube made it
            possible for regular people to get rewarded for their popular
            content by adopting this action. As a result, some people are making
            six-figure salaries from YouTube by successfully converting their
            passions into successful businesses.
          </div>
          <div>In 2012, YouTube got its first 1 Billion- hit video.</div>
          <div>By 2013, YouTube reaches 1 Billion unique monthly visitors.</div>
          <div>
            In 2014, Subscription service Music Key is added to the site.
          </div>
          <div>
            By 2018, they launched YouTube Premium, which allowed ad-free video
            streaming.
          </div>
          <div>
            By 2022, YouTube is ranked as the second most popular social network
            worldwide. According to statista.com, YouTube ranks currently as the
            second most used platform, with 2.2 billion monthly active users.
          </div>
          <div>So this is how YouTube grew as a streaming service.</div>
        </div>
        <br />
        <div className="mt-10 space-y-3">
          <button onClick={() => setSection("vss")}>
            <Link href="">BACK</Link>
          </button>
        </div>
      </div>
    );
  } else if (section == "mss") {
    return (
      <div className="flex flex-col font-sans w-screen pl-32 pr-14 content-center mb-10">
        <div className="pt-0 text-7xl text-white mb-10 mt-28">
          Music Streaming Services
        </div>
        <div className="pt-0 text-xl bg-clip-text text-white space-y-3">
          Do you still remember the days when songs were to be listened on radio
          or had to be downloaded to play on iPod or Walkman? That all seems way
          old now, is't it? It is because of the rise in poularity and
          availibility of music streaming services. This project explores the
          popular music services like Napster, Spotify and Apple Music. In the
          graph below, we can clearly see that, napster ruled in the nintees and
          then spotify took over. Apple Music also has steadily increased its
          popularity since its release. The graph shows frequency of the
          keywords to have appeared in documents related to music streaming.
        </div>
        <br />
        <div className="text-xl">
          The following graph shows the frequency of terms appearing in the
          documents from 1995-2019. I have kept 3 services - Blockbuster,
          Netflix and YouTube as my keywords. We can see from the graph that as
          the platforms' popularity rose, their frequency increased and with
          that they also diminsihed the effect of their competitors as seen with
          Netflix and Blockbuster.
        </div>
        <div className="flex">
          <Image
            src="/audioGraph.jpeg"
            alt="Picture of the author"
            width={500}
            height={500}
          />
        </div>
        <div className="mt-10 space-y-3">
          <div> Know more at below given links</div>
          <button onClick={() => setSection("nap")}>
            <Link href="">Napster</Link>
          </button>
          <br />
          <button onClick={() => setSection("spotify")}>
            <Link href="">Spotify</Link>
          </button>
          <br />
          <button onClick={() => setSection("am")}>
            <Link href="">Apple Music</Link>
          </button>
          <br />
          <button onClick={() => setSection("history")}>
            <Link href="">BACK</Link>
          </button>
        </div>
      </div>
    );
  } else if (section == "nap") {
    return (
      <div className="flex flex-col font-sans w-screen pl-32 pr-14 content-center mb-10">
        <div className="pt-0 text-7xl text-white mb-10 mt-28">Napstar</div>
        <div className="pt-0 text-xl bg-clip-text text-white space-y-3">
          <div>Founded: 1999</div>
          <div>By 2001, it had 80 million registered users.</div>
          <div>
            In 2002, following multiple lawsuits, the company declared
            bankruptcy.
          </div>
          <div>In the same year, Roxio acquires Napster for $5.3 million.</div>
          <div>
            By 2011, Best Buy takes over Napster for $121 million. At that time
            Napster had 700,000 registered users.
          </div>
          <div>
            By 2016, Napster's services were available in more than 14
            countries.
          </div>
          <div>
            Thus, this was how Napster became very popular, got shut down and
            then got re opened by new buyers. At present it is still growing but
            is facing severe competetion from other players like Spotify, Apple
            Music, Amazon Music, etc.
          </div>
        </div>
        <br />
        <div className="mt-10 space-y-3">
          <button onClick={() => setSection("mss")}>
            <Link href="">BACK</Link>
          </button>
        </div>
      </div>
    );
  } else if (section == "spotify") {
    return (
      <div className="flex flex-col font-sans w-screen pl-32 pr-14 content-center mb-10">
        <div className="pt-0 text-7xl text-white mb-10 mt-28">Spotify</div>
        <div className="pt-0 text-xl bg-clip-text text-white space-y-3">
          <div>Founded: 2006</div>
          <div>In 2008, it got launched in Scandanavian countries.</div>
          <div>
            In 2011, Spotify recieves $100 million in funding so that it can be
            launched in the USA.
          </div>
          <div>
            In the same year, Spotify financials concludes year with a loss of
            nearly $60 million on revenues of $244 million.
          </div>
          <div>
            In 2012, according to Spotify, its customers have listened to 1,500
            years of music in just three months. The business also reports that
            there are 10 million active users worldwide, 3 million of whom have
            paid for the service, or a so-called "conversion rate" of 30%.
          </div>
          <div>
            In 2015, Sotify recieves backlash from artists due to low pay and
            poor quakity of music. Spotify losses $241.6 million, whit sales
            reported at $2.014 billion.
          </div>
          <div>
            In 2016, Spotify announces losses at $581.4 million and revenues at
            $3.064 billion.
          </div>
          <div>In 2017, Spotify announces 140 million active users.</div>
          <div>
            Since 2017, Spotify has only seen rise in its popularity. So this
            was how Spotify became popular since its release.
          </div>
        </div>
        <br />
        <div className="mt-10 space-y-3">
          <button onClick={() => setSection("mss")}>
            <Link href="">BACK</Link>
          </button>
        </div>
      </div>
    );
  } else if (section == "am") {
    return (
      <div className="flex flex-col font-sans w-screen pl-32 pr-14 content-center mb-10">
        <div className="pt-0 text-7xl text-white mb-10 mt-28">Apple Music</div>
        <div className="pt-0 text-xl bg-clip-text text-white space-y-3">
          <div>Founded: 2015</div>
          <div>In 2016, it reached 10 million paying subscribers.</div>
          <div>In 2017, it reached 27 million paying subscribers.</div>
          <div>
            In 2018, it reached 56 million paying subscribers. It surpassed
            Spotify in number of paying users in the USA.
          </div>
          <div>In 2019, it reached 60 million paying subscribers.</div>
          <div>
            As of 2022, it has 98 million subscribers around the world with 100
            million songs in its catalog and operating in 167 countries with
            cross-platform applications.
          </div>
          <div>
            This statistics clearly shows the growth of Apple Music since its
            release in 2015.
          </div>
        </div>
        <br />
        <div className="mt-10 space-y-3">
          <button onClick={() => setSection("mss")}>
            <Link href="">BACK</Link>
          </button>
        </div>
      </div>
    );
  } else {
    return <div>Error Occured</div>;
  }
};

export default intro;
