import { PhoneIcon, XMarkIcon, CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import { ContactModal } from "../../commonUI/ContactModal";
import { Modal } from "../../commonUI/Modal";

export const ContactUs = () => {
  const [showModal, setShowModal] = useState(false);
  const [isMailSent, setIsMailSent] = useState(false); 
  const [showMail, setShowMail] = useState(false);
  return (
    <React.Fragment>
      <div class="fixed bottom-0 w-full right-10">
        <button
          class={`bottom-0 my-8 float-right p-5 bg-red-500 text-white text-sm font-bold tracking-wide rounded-full focus:outline-none`}
          onClick={() => setShowModal((isShow) => !isShow)}
        >
          {showModal ? (
            <XMarkIcon className="h-8 w-8" />
          ) : (
            <PhoneIcon className="h-8 w-8" />
          )}
        </button>
      </div>
      <div class="fixed bottom-20 right-24">
      {showModal ? (
        <ContactModal open={showModal} setShowModal={setShowModal} setIsMailSent={setIsMailSent} setShowMail={setShowMail}/>
      ) : null}
      {
        showMail ? (
          <Modal 
          open={showMail} 
          setShowModal={setShowMail}
          body={
          <div className="flex flex-col items-center justify-center">
            { isMailSent ? 
            <React.Fragment>
              <CheckCircleIcon className="h-24 w-24 text-green-400"/>
              <p className="text-lg font-bold pt-4">Submitted Successfully</p> 
              <p className=" text-slate-500 pt-2">
                  Your response has been recorded Successfully. You will get a call shortly.
              </p>
              </React.Fragment> : 
              <React.Fragment>
              <XCircleIcon className="h-24 w-24 text-red-400"/>
              <p className="text-lg font-bold pt-4">Something Went Wrong</p> 
              <p className=" text-slate-500 pt-2">
                  We were unable to record your response. You can call us at +123456.
              </p>
              </React.Fragment>

              } 
          </div>}
          />
        ) : null
      }
      </div>
    </React.Fragment>
  );
};
