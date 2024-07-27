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
import music_recc from "../assets/music_recommender.png"
function Projects() {
  return (
    <div id="projects" className="h-[100vh]">
      <h1 className="font-bold text-4xl my-2">Projects</h1>
      <p className="text-gray-700">My Technical and Miscellanous Skills</p>
      <div className="w-[90%] flex justify-center my-20">
        <Carousel
          className="w-[100%] max-w-4xl"
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 4000,
            }),
          ]}
        >
          <CarouselContent>
            <CarouselItem>
              <Card>
                <CardContent className="flex  items-center justify-center p-5">
                  <div className="flex justify-between items-center text-start ">
                    <div className="">
                      <img src="https://picsum.photos/300?random=1766" alt="" />
                    </div>
                    <div className="p-5 w-[65%]">
                      <h1 className="text-3xl mb-5">OnlyGANS</h1>
                      <p className="text-xl mb-5">
                        An Open-source end-to-end library containing all
                        implementations of GANs with pretrained weights,
                        training &amp; evaulating functionalities, and other
                        zero-shot features. Under early-development stages.
                      </p>
                      <div className="rounded bg-[#6e57e0] mb-5 text-white px-3 py-1 w-fit">
                        View
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
            <CarouselItem>
              <Card>
              <CardContent className="flex  items-center justify-center p-5">
                  <div className="flex justify-between items-center text-start ">
                    <div className="">
                      <img className="max-w-xs" src={music_recc} alt="" />
                    </div>
                    <div className="p-5 w-[65%]">
                      <h1 className="text-3xl mb-5">Music Recommender</h1>
                      <p className="text-xl mb-5">
                       A Music Recommender System Trained on "Spotify milion dataset" 
                       made using concept of nlp and cosine similarity &amp; deployed using streamlite.
                       It uses a concept of nltk and tfidf 
                      </p>
                      <div className="rounded bg-[#6e57e0] mb-5 text-white px-3 py-1 w-fit">
                        <a href="https://github.com/Prathmesh-rajurkar/MusicRecommendation" target="_blank">View</a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
            <CarouselItem>
              <Card>
              <CardContent className="flex  items-center justify-center p-5">
                  <div className="flex justify-between items-center text-start ">
                    <div className="">
                      <img src="https://picsum.photos/300?random=1746" alt="" />
                    </div>
                    <div className="p-5 w-[65%]">
                      <h1 className="text-3xl mb-5">OnlyGANS</h1>
                      <p className="text-xl mb-5">
                        An Open-source end-to-end library containing all
                        implementations of GANs with pretrained weights,
                        training &amp; evaulating functionalities, and other
                        zero-shot features. Under early-development stages.
                      </p>
                      <div className="rounded bg-[#6e57e0] mb-5 text-white px-3 py-1 w-fit">
                        View
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
            <CarouselItem>
              <Card>
              <CardContent className="flex  items-center justify-center p-5">
                  <div className="flex justify-between items-center text-start ">
                    <div className="">
                      <img src="https://picsum.photos/300?random=1736" alt="" />
                    </div>
                    <div className="p-5 w-[65%]">
                      <h1 className="text-3xl mb-5">OnlyGANS</h1>
                      <p className="text-xl mb-5">
                        An Open-source end-to-end library containing all
                        implementations of GANs with pretrained weights,
                        training &amp; evaulating functionalities, and other
                        zero-shot features. Under early-development stages.
                      </p>
                      <div className="rounded bg-[#6e57e0] mb-5 text-white px-3 py-1 w-fit">
                        View
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
            <CarouselItem>
              <Card>
              <CardContent className="flex  items-center justify-center p-5">
                  <div className="flex justify-between items-center text-start ">
                    <div className="">
                      <img src="https://picsum.photos/300?random=1726" alt="" />
                    </div>
                    <div className="p-5 w-[65%]">
                      <h1 className="text-3xl mb-5">OnlyGANS</h1>
                      <p className="text-xl mb-5">
                        An Open-source end-to-end library containing all
                        implementations of GANs with pretrained weights,
                        training &amp; evaulating functionalities, and other
                        zero-shot features. Under early-development stages.
                      </p>
                      <div className="rounded bg-[#6e57e0] mb-5 text-white px-3 py-1 w-fit">
                        View
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
            <CarouselItem>
              <Card>
              <CardContent className="flex  items-center justify-center p-5">
                  <div className="flex justify-between items-center text-start ">
                    <div className="">
                      <img src="https://picsum.photos/300?random=1716" alt="" />
                    </div>
                    <div className="p-5 w-[65%]">
                      <h1 className="text-3xl mb-5">OnlyGANS</h1>
                      <p className="text-xl mb-5">
                        An Open-source end-to-end library containing all
                        implementations of GANs with pretrained weights,
                        training &amp; evaulating functionalities, and other
                        zero-shot features. Under early-development stages.
                      </p>
                      <div className="rounded bg-[#6e57e0] mb-5 text-white px-3 py-1 w-fit">
                        View
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}

export default Projects;
