"use client";
import React from "react";
import ReactMarkdown from "react-markdown";
import { useForm } from "react-hook-form";
import TopNav from "@/components/TopNav";
import CreateListingForm from "./CreateListingForm";

export default function CreateListing() {
  const [serverResponse, setServerResponse] = React.useState();

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    const endpoint = "/api/createListing";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    const response = await fetch(endpoint, options);

    const result = await response.text();

    setServerResponse(result);
  };

  return (
    <>
      <TopNav title="Create a Listing" />
      <main className="w-full flex flex-row">
        <div className="w-2/5 border-r pt-20">
          <CreateListingForm
            register={register}
            handleSubmit={handleSubmit(onSubmit)}
          />
        </div>
        <div className="pl-10 pt-20 h-screen overflow-auto w-full">
          {isSubmitting ? (
            <div className="flex items-center justify-center">
              <div className="h-32 w-32 animate-spin rounded-full border-b-2 border-gray-900"></div>
            </div>
          ) : (
            <article className="prose">
              {/* eslint-disable-next-line react/no-children-prop */}
              <ReactMarkdown children={serverResponse} />
            </article>
          )}
        </div>
      </main>
    </>
  );
}
