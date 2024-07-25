import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
  export function Questions() {
    return (
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger className="font-semibold text-left" >What makes Media Magnet different?</AccordionTrigger>
          <AccordionContent>
          Our innovative approach, commitment to excellence, and tailored strategies set us apart. We focus on delivering high-quality services and achieving efficient, high-impact results that differentiate your brand from competitors.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="font-semibold text-left">What is WAAS, and how can it benefit my business?</AccordionTrigger>
          <AccordionContent>
            WAAS stands for Websites as a Service. We design and develop custom applications and websites that deliver seamless user experiences.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="font-semibold text-left">How do your digital advertising services work?</AccordionTrigger>
          <AccordionContent>
          We create and manage ads across various platforms, including Google Ads, Facebook Ads, and more.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className="font-semibold">How can I get started with Media Magnet?</AccordionTrigger>
          <AccordionContent>
          To get started, contact us via our website, email, or phone. You can also book an appointment on our website. We&apos;ll schedule a consultation to create a customized digital marketing strategy tailored to your business goals.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    )
  }
  