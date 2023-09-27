"use client";
import React from "react";
import { features } from "@/data";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import FeatureChip from "./FeatureChip";

export default function CreateListingForm({ register, handleSubmit }) {
  const [section, setSection] = React.useState("details");

  return (
    <div>
      <form className="flex w-full flex-col" onSubmit={handleSubmit}>
        <div className="overflow-auto space-y-16 h-screen px-20 pr-10">
          <Accordion.Root
            className="AccordionRoot"
            type="single"
            collapsible
            value={section}
          >
            <Accordion.Item
              className="AccordionItem border rounded-md p-6 mb-6"
              value="details"
              data-state={section === "details" ? "open" : "closed"}
            >
              <Accordion.Header>
                <Accordion.Trigger
                  className="font-bold text-xl"
                  onClick={() => setSection("details")}
                >
                  Property Details
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content>
                <fieldset
                  name="details"
                  className="flex flex-col space-y-10 pt-10"
                >
                  <div>
                    <label
                      htmlFor="address"
                      className="font-light mb-2 inline-block"
                    >
                      Address
                    </label>
                    <input
                      type="text"
                      name="address"
                      className="block w-full flex-1 rounded-md border-0 p-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      required
                      {...register("address", { required: true })}
                    />
                  </div>
                  <div className="flex flex-row gap-6">
                    <div>
                      <label
                        htmlFor="type"
                        className="font-light mb-2 inline-block"
                      >
                        Property Type
                      </label>
                      <select
                        name="type"
                        {...register("type", { required: true })}
                        className="block flex-1 rounded-md border-0 p-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        style={{ appearance: "none" }}
                      >
                        <option value="house">House</option>
                        <option value="apartment">Apartment</option>
                        <option value="condo">Condo</option>
                        <option value="townhouse">Townhouse</option>
                        <option value="duplex">Duplex</option>
                      </select>
                    </div>
                    <div>
                      <label
                        htmlFor="yearBuilt"
                        className="font-light mb-2 inline-block"
                      >
                        Year of Construction
                      </label>
                      <input
                        name="yearBuilt"
                        type="number"
                        className="block flex-1 rounded-md border-0 p-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        required
                        {...register("yearBuilt", { required: true })}
                      />
                    </div>
                  </div>
                  <div className="flex flex-row gap-4">
                    <div>
                      <label
                        htmlFor="bedrooms"
                        className="font-light mb-2 inline-block"
                      >
                        Bedrooms
                      </label>
                      <input
                        name="bedrooms"
                        className="block flex-1 rounded-md border-0 p-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        required
                        {...register("bedrooms", { required: true })}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="bathrooms"
                        className="font-light mb-2 inline-block"
                      >
                        Bathrooms
                      </label>
                      <input
                        name="bathrooms"
                        className="block flex-1 rounded-md border-0 p-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        required
                        {...register("bathrooms", { required: true })}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="square-feet"
                        className="font-light mb-2 inline-block"
                      >
                        Square footage
                      </label>
                      <input
                        name="square-feet"
                        className="block flex-1 rounded-md border-0 p-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        required
                        {...register("square-feet", { required: true })}
                      />
                    </div>
                  </div>
                  <div>
                    <button
                      onClick={() => setSection("features")}
                      className="w-full rounded-md border border-indigo-600 py-2 px-3 text-sm font-semibold text-indigo-600 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                    >
                      Next add some property features...
                    </button>
                  </div>
                </fieldset>
              </Accordion.Content>
            </Accordion.Item>

            <Accordion.Item
              className="AccordionItem border rounded-md p-6"
              value="features"
              data-state={section === "details" ? "open" : "closed"}
            >
              <Accordion.Header>
                <Accordion.Trigger
                  className="font-bold text-xl"
                  onClick={() => setSection("features")}
                >
                  Features
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content>
                <fieldset
                  name="features"
                  className="flex flex-col space-y-4 pt-10"
                >
                  {Object.keys(features).map((category) => (
                    <div key={category}>
                      <h3 className="font-light pb-4">{category}</h3>
                      <div className="flex flex-row flex-wrap gap-2">
                        {features[category].map((feature) => (
                          <FeatureChip
                            key={feature}
                            feature={feature}
                            register={register}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </fieldset>
              </Accordion.Content>
            </Accordion.Item>
          </Accordion.Root>
        </div>

        <div className="sticky bottom-0 w-full bg-white border-t p-10">
          <button
            type="submit"
            className="w-full rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          >
            Generate a description for this listing
          </button>
        </div>
      </form>
    </div>
  );
}
