import React from "react";
import { Button } from "./ui/button";
import { Filter } from "lucide-react";
import { Badge } from "./ui/badge";

export default function FilterSection() {
  const categories = [
    "All",
    "Trending",
    "Abstract",
    "Digital",
    "Portrait",
    "Nature",
    "Character",
  ];
  return (
    <section className="px-4 mb-8">
      <div className="container mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-semibold text-foreground">
            Featured Collection
          </h3>
          <Button variant="outline" size="sm">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
        </div>
        <div className="flex gap-2 overflow-x-auto pb-2">
          {categories.map((category) => (
            <Badge
              key={category}
              variant={category === "All" ? "default" : "secondary"}
              className="whitespace-nowrap cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              {category}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
}
