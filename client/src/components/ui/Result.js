//Data results component
function Result(props) {
  return (
    <div className="mt-2">
      <p className="font-bold text-xl">
        Your Tinified URL :{" "}
        <a href={`${props.data}`} className="hover:text-green-500">
          {" "}
          {props.data}
        </a>
      </p>
    </div>
  );
}

export default Result;
