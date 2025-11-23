import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface Service {
  title: string;
  description: string;
}

interface ServicesSectionProps {
  services: Service[];
}

const ServicesSection: React.FC<ServicesSectionProps> = ({ services }) => {
  return (
    <section className="container py-12">
      <h2 className="text-3xl font-semibold text-center mb-8 text-primary-foreground">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <Card key={index} className="bg-secondary shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-lg font-medium text-primary-foreground">{service.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-sm text-secondary-foreground">{service.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;