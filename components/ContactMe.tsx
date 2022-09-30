import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";

type Props = {};

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function ContactMe({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:dan1lpanov@mail?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`
  };

  return (
    <div className='h-full md:h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
      <div className='flex flex-col space-y-10 w-screen'>
        <h4 className='text-4xl font-semibold text-center mt-12 md:mt-0'>
          I have got just what you need.{" "}
          <span className='decoration-[#eda200]/50 underline'>Lets Talk</span>
        </h4>
        <div className='space-y-10'>
          <div className='flex items-center space-x-5 justify-center'>
            <PhoneIcon className='text-[#eda200] h-7 w-7 animate-pulse' />
            <p className='text-2xl'>+79039109854</p>
          </div>
          <div className='flex items-center space-x-5 justify-center'>
            <EnvelopeIcon className='text-[#eda200] h-7 w-7 animate-pulse' />
            <p className='text-2xl'>dan1lpanov@mail.ru</p>
          </div>
          <div className='flex items-center space-x-5 justify-center'>
            <MapPinIcon className='text-[#eda200] h-7 w-7 animate-pulse' />
            <p className='text-2xl'>Moscow</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className='flex flex-col space-y-2 w-fit mx-auto'>
          <div className='flex-col sm:flex-row sm:space-x-2'>
            <input
              {...register("name")}
              placeholder='Имя'
              type='text'
              className='contactInput'
            />
            <input
              {...register("email")}
              placeholder='Email'
              type='email'
              className='contactInput'
            />
          </div>
          <input {...register('subject')} placeholder='Тема' type='text' className='contactInput' />
          <textarea {...register('message')} placeholder='Сообщение' className='contactInput' />
          <button
            type='submit'
            className='bg-[#eda200] py-5 rounded-md text-black font-bold text-lg'>
            Отправить
          </button>
        </form>
      </div>
    </div>
  );
}
