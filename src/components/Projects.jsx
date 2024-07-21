import React from "react";
import Autoplay from "embla-carousel-autoplay"
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function Projects() {
  return (
    <div id="projects" className="h-[100vh]">
      <h1 className="font-bold text-4xl my-2">Projects</h1>
      <p className="text-gray-700">My Technical and Miscellanous Skills</p>
      <div className="w-[90%] flex justify-center my-20">
        <Carousel
          className="w-[100%] max-w-2xl"
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
                <CardContent className="flex  items-center justify-center ">
                  <div className="flex justify-between items-center text-start">
                    <img src="https://picsum.photos/200?random=1767" alt="" />
                    <div>
                      <h1 className="text-xl">OnlyGANS</h1>
                      <p>
                        An Open-source end-to-end library containing all
                        implementations of GANs with pretrained weights,
                        training &amp; evaulating functionalities, and other
                        zero-shot features. Under early-development stages.
                      </p>
                      <div className="rounded bg-[#6e57e0] text-white px-3 py-1 w-fit">View</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
            <CarouselItem>
              <Card>
                <CardContent className="flex  items-center justify-center p-6">
                <div className="flex justify-between items-center text-start">
                    <img src="https://picsum.photos/200?random=1767" alt="" />
                    <div>
                      <h1 className="text-xl">OnlyGANS</h1>
                      <p>
                        An Open-source end-to-end library containing all
                        implementations of GANs with pretrained weights,
                        training &amp; evaulating functionalities, and other
                        zero-shot features. Under early-development stages.
                      </p>
                      <div className="rounded bg-[#6e57e0] text-white px-3 py-1 w-fit">View</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
            <CarouselItem>
              <Card>
                <CardContent className="flex  items-center justify-center p-6">
                <div className="flex justify-between items-center text-start">
                    <img src="https://picsum.photos/200?random=1767" alt="" />
                    <div>
                      <h1 className="text-xl">OnlyGANS</h1>
                      <p>
                        An Open-source end-to-end library containing all
                        implementations of GANs with pretrained weights,
                        training &amp; evaulating functionalities, and other
                        zero-shot features. Under early-development stages.
                      </p>
                      <div className="rounded bg-[#6e57e0] text-white px-3 py-1 w-fit">View</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
            <CarouselItem>
              <Card>
                <CardContent className="flex  items-center justify-center p-6">
                <div className="flex justify-between items-center text-start">
                    <img src="https://picsum.photos/200?random=1767" alt="" />
                    <div>
                      <h1 className="text-xl">OnlyGANS</h1>
                      <p>
                        An Open-source end-to-end library containing all
                        implementations of GANs with pretrained weights,
                        training &amp; evaulating functionalities, and other
                        zero-shot features. Under early-development stages.
                      </p>
                      <div className="rounded bg-[#6e57e0] text-white px-3 py-1 w-fit">View</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
            <CarouselItem>
              <Card>
                <CardContent className="flex items-center justify-center p-6">
                <div className="flex justify-between items-center text-start">
                    <img src="https://picsum.photos/200?random=1767" alt="" />
                    <div>
                      <h1 className="text-xl">OnlyGANS</h1>
                      <p>
                        An Open-source end-to-end library containing all
                        implementations of GANs with pretrained weights,
                        training &amp; evaulating functionalities, and other
                        zero-shot features. Under early-development stages.
                      </p>
                      <div className="rounded bg-[#6e57e0] text-white px-3 py-1 w-fit">View</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
            <CarouselItem>
              <Card>
                <CardContent className="flex  items-center justify-center p-6">
                <div className="flex justify-between items-center text-start">
                    <img src="https://picsum.photos/200?random=1767" alt="" />
                    <div>
                      <h1 className="text-xl">OnlyGANS</h1>
                      <p>
                        An Open-source end-to-end library containing all
                        implementations of GANs with pretrained weights,
                        training &amp; evaulating functionalities, and other
                        zero-shot features. Under early-development stages.
                      </p>
                      <div className="rounded bg-[#6e57e0] text-white px-3 py-1 w-fit">View</div>
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
