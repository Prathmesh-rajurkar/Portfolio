import React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import music_recc from "../assets/music_recommender.png";

function Projects() {
  return (
    <div id="projects" className="h-full ">
      <h1 className="font-bold text-4xl my-2">Projects</h1>
      <p className="text-gray-700">My Technical and Miscellanous Skills</p>
      <div className="w-full flex flex-wrap justify-center my-20">
        <Carousel
          className="w-full md:max-w-4xl"
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 400000,
            }),
          ]}
        >
          <CarouselContent className="sm:text-left">
            
            <CarouselItem>
              <Card>
                <CardContent className="flex flex-col md:flex-row items-center justify-center gap-9 p-5">
                  <div className="flex-shrink-0 mb-5 md:mb-0 mr-5 md:mr-0">
                    <img className="max-w-xs" src={music_recc} alt="" />
                  </div>
                  <div className="w-full">
                    <h1 className="text-3xl mb-5">Music Recommender</h1>
                    <p className="text-xl mb-5">
                      A Music Recommender System Trained on "Spotify milion
                      dataset" made using concepts of NLP and cosine similarity
                      &amp; deployed using streamlit. It uses a concept of nltk
                      and tfidf.
                    </p>
                    <div className="rounded bg-[#6e57e0] text-white px-3 md:m-0 m-auto py-1 w-fit">
                      <a
                        href="https://github.com/Prathmesh-rajurkar/MusicRecommendation"
                        target="_blank"
                      >
                        View
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>

            <CarouselItem>
              <Card>
                <CardContent className="flex flex-col md:flex-row items-center justify-center gap-9 p-5">
                  <div className="flex-shrink-0 mb-5 md:mb-0 mr-5 md:mr-0">
                    <img className="max-w-xs" src={music_recc} alt="" />
                  </div>
                  <div className="w-full">
                    <h1 className="text-3xl mb-5">Music Recommender</h1>
                    <p className="text-xl mb-5">
                      A Music Recommender System Trained on "Spotify milion
                      dataset" made using concepts of NLP and cosine similarity
                      &amp; deployed using streamlit. It uses a concept of nltk
                      and tfidf.
                    </p>
                    <div className="rounded bg-[#6e57e0] text-white px-3 py-1 w-fit md:m-0 m-auto">
                      <a
                        href="https://github.com/Prathmesh-rajurkar/MusicRecommendation"
                        target="_blank"
                      >
                        View
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>

            <CarouselItem>
              <Card>
                <CardContent className="flex flex-col md:flex-row items-center justify-center  gap-9 p-5">
                  <div className="flex-shrink-0 mb-5 md:mb-0 mr-5 md:mr-0">
                    <img className="max-w-xs" src={music_recc} alt="" />
                  </div>
                  <div className="w-full">
                    <h1 className="text-3xl mb-5">Music Recommender</h1>
                    <p className="text-xl mb-5">
                      A Music Recommender System Trained on "Spotify milion
                      dataset" made using concepts of NLP and cosine similarity
                      &amp; deployed using streamlit. It uses a concept of nltk
                      and tfidf.
                    </p>
                    <div className="rounded bg-[#6e57e0] text-white md:m-0 m-auto px-3 py-1 w-fit">
                      <a
                        href="https://github.com/Prathmesh-rajurkar/MusicRecommendation"
                        target="_blank"
                      >
                        View
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>

            <CarouselItem>
              <Card>
                <CardContent className="flex flex-col md:flex-row items-center justify-center gap-9 p-5">
                  <div className="flex-shrink-0 mb-5 md:mb-0 mr-5 md:mr-0">
                    <img className="max-w-xs" src={music_recc} alt="" />
                  </div>
                  <div className="w-full">
                    <h1 className="text-3xl mb-5">Music Recommender</h1>
                    <p className="text-xl mb-5">
                      A Music Recommender System Trained on "Spotify milion
                      dataset" made using concepts of NLP and cosine similarity
                      &amp; deployed using streamlit. It uses a concept of nltk
                      and tfidf.
                    </p>
                    <div className="rounded bg-[#6e57e0] text-white md:m-0 m-auto px-3 py-1 w-fit">
                      <a
                        href="https://github.com/Prathmesh-rajurkar/MusicRecommendation"
                        target="_blank"
                      >
                        View
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>

            <CarouselItem>
              <Card>
                <CardContent className="flex flex-col md:flex-row items-center justify-center gap-9 p-5">
                  <div className="flex-shrink-0 mb-5 md:mb-0 mr-5 md:mr-0">
                    <img className="max-w-xs" src={music_recc} alt="" />
                  </div>
                  <div className="w-full">
                    <h1 className="text-3xl mb-5">Music Recommender</h1>
                    <p className="text-xl mb-5">
                      A Music Recommender System Trained on "Spotify milion
                      dataset" made using concepts of NLP and cosine similarity
                      &amp; deployed using streamlit. It uses a concept of nltk
                      and tfidf.
                    </p>
                    <div className="rounded bg-[#6e57e0] text-white md:m-0 m-auto px-3 py-1 w-fit">
                      <a
                        href="https://github.com/Prathmesh-rajurkar/MusicRecommendation"
                        target="_blank"
                      >
                        View
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>


          </CarouselContent>
          <CarouselPrevious className="hidden md:block" />
          <CarouselNext className="hidden md:block" />
        </Carousel>
      </div>
    </div>
  );
}

export default Projects;
