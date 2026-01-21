import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";

// ⚠️ Replace these URLs with your actual images (e.g., imports from assets)
const galleryImages = [
  {
    src: "https://res.cloudinary.com/dvneefjpi/image/upload/v1767773000/345699526_632234488811167_9193590834147068485_n_iafmbq.jpg",
    alt: "Interns collaborating in a meeting"
  },
  {
    src: "https://res.cloudinary.com/dvneefjpi/image/upload/v1767773810/ekpedmaakenaam_worldrecord_internshipwithmayorInternship_with_mayor_students_played_an_impact_1_puyqo1.jpg",
    alt: "Field work and site inspection"
  },
  {
    src: "https://res.cloudinary.com/dvneefjpi/image/upload/v1767773009/472545215_1669875810576187_2809314555655141950_n_ioro9j.jpg",
    alt: "Team presentation session"
  },
  {
    src: "https://res.cloudinary.com/dvneefjpi/image/upload/v1768982089/IMG-20260114-WA0089_di3f2n.jpg",
    alt: "Group photo"
  },
  {
    src: "https://res.cloudinary.com/dvneefjpi/image/upload/v1767773811/ekpedmaakenaam_worldrecord_internshipwithmayorInternship_with_mayor_students_played_an_impact_3_bedyzj.jpg",
    alt: "Group photo"
  },
  {
    src: "https://res.cloudinary.com/dvneefjpi/image/upload/v1767774131/get_balm0m.jpg",
    alt: "Group photo "
  },
  {
    src: "https://res.cloudinary.com/dvneefjpi/image/upload/v1768370653/PXL_20251130_075041052.RAW-01.COVER_v8ggj9.jpg",
    alt: "Group photo "
  },
];

export function HomeGallery() {
  return (
    <section className="py-12 bg-muted/30 w-full">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold tracking-tighter text-primary">
            Life at IWM
          </h2>
          <p className="text-muted-foreground mt-2 text-lg">
            Glimpses from our previous cohorts and field visits
          </p>
        </div>

        <div className="flex justify-center">
          <Carousel
            plugins={[Autoplay({ delay: 3000 })]}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-5xl"
          >
            <CarouselContent>
              {galleryImages.map((img, index) => (
                // basis-1/2 means 2 images visible on tablet, basis-1/3 means 3 on desktop
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-4">
                  <div className="p-1">
                    <Card className="border-0 shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300">
                      <CardContent className="flex aspect-video items-center justify-center p-0 overflow-hidden rounded-lg">
                        <img
                          src={img.src}
                          alt={img.alt}
                          className="w-full h-full object-cover"
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12" />
            <CarouselNext className="hidden md:flex -right-12" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}