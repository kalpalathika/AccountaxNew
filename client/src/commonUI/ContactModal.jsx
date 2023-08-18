import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Input } from "./Input";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { PhoneIcon } from "@heroicons/react/24/solid";
import { Button } from "./Button";
import { contactApi } from "../components/ContactUs/contact.api";

const formFields = [
  {
    id: "fname",
    label: "First Name",
    type: "text",
    required: true,
  },
  {
    id: "lname",
    label: "Last Name",
    type: "text",
    required: true,
  },
  {
    id: "email",
    label: "Email",
    type: "email",
    required: true,
  },
  {
    id: "phone",
    label: "Phone Number",
    type: "number",
    required: true,
  },
  {
    id: "city",
    label: "City",
    type: "text",
    required: true,
  },
  {
    id: "comments",
    label: "Comments",
    type: "text",
    required: false,
  },
];

export const  ContactModal = ({ open = false, setShowModal, setIsMailSent, setShowMail }) => {
  const [form, setFormData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const handleFormData = ({id, e}) => {
    const value = e.target.value;
    let formData = {};   
    if(id){
      formData = {...form,[id]: value};
      setFormData(formData);
    }

  };


  const handleSubmit = async (e) => {
      e.preventDefault();
      if(!Object.keys(form ?? {}).length) return 
      setIsLoading(true);
      const contactDataSent = await contactApi({body: form})
      setIsLoading(false);
      setShowMail(true);
      setIsMailSent(contactDataSent?.status ?? false);
      setShowModal(false);
  }

  


  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setShowModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-0 left-0 -ml-8 flex pt-4 pr-2 sm:-ml-10 sm:pr-4">
                      <button
                        type="button"
                        className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                        onClick={() => setShowModal(false)}
                      >
                        <span className="sr-only">Close panel</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="flex h-full flex-col  bg-white py-6 shadow-xl">
                    <div className="px-4 sm:px-6">
                      <Dialog.Title className="text-lg font-medium text-gray-900">
                        <div className="flex span-1 items-center gap-1 justify-center">
                          <PhoneIcon className="h-4 w-4" />
                          <span>Request a Call</span>
                        </div>
                      </Dialog.Title>
                    </div>
                    <div className=" mt-6 px-4 overflow-y-scroll sm:px-6">
                      {/* Replace with your content */}
                      <div className=" inset-0 px-4 sm:px-6">
                        {/* <div className="h-full border-2 border-dashed border-gray-200" aria-hidden="true" /> */}
                        <form className="rounded pt-6 pb-8 w-full " id="contact-form" onSubmit={(e)=>handleSubmit(e)}>
                          {formFields.map((field) => (
                            <div className=" items-center pb-4">
                              <div className="flex gap-1">
                                <label
                                  htmlFor="first-name"
                                  className="text-sm font-medium text-gray-500"
                                >
                                  {field.label}
                                </label>

                                {field?.required ? (
                                  <span className="text-red-500">*</span>
                                ) : null}
                              </div>

                              <Input
                              onChange={(e)=>handleFormData({id: field.id,e})}
                              type={field.type}
                              required= {field?.required}
                               />
                            </div>
                          ))}
                        </form>
                      </div>
                    </div>
                    <div className="fixed bottom-0 bg-white shadow-md p-2 w-full border border-t-2">
                    <div className="max-w-md px-8">
                      <Button form="contact-form" className="float-right mr-3" isLoading={isLoading}>Submit</Button>
                      
                    </div>
                  </div>

                    {/* /End replace */}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
