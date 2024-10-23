'use client';
import Button from '@/components/Button';

const contactUs = () => {

const handleClick = () => {
        alert('Form Submited');
      };
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl pt-6 font-sans font-bold">Contact Us</h1>
      <form action="contact" className="flex flex-col w-1/2">
        <label htmlFor="name" className="pt-5 pb-1 font-bold">Name: </label>
        <input 
        type="text"
        placeholder='Enter your name'
        className="border-2 border-gray-300 p-2"
        />
        <label htmlFor="email" className="pt-5 pb-1 font-bold">E-mail: </label>
        <input 
        type={'email'}
        placeholder='Enter your E-mail'
        className="border-2 border-gray-300 p-2"
        required
        />
        <label htmlFor="message" className="pt-5 pb-1 font-bold">Message: </label>
        <textarea
        id='message'
        rows={6}
        className="border-2 border-gray-300 p-2"
        placeholder='Enter your message'
        />
      </form>
      <Button label="Click Me" onClick={handleClick} />
    </div>
  )
}

export default contactUs
