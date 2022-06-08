import Header from "./shared/Header";
import Error from "./ui/Error";

function NotFound() {
  return (
    <>
      <Header />
      <Error
        message="Page not found!"
        messageClasses="font-extrabold md:text-5xl text-4xl my-5"
        submessage="  Please check the url and try again"
        submessageClasses="font-thin md:text-2xl text-xl text-red-500"
        imgClasses="h-56 w-56 mt-5"
      />
    </>
  );
}

export default NotFound;
