import CircularProgress from '@mui/material/CircularProgress';

function Loader() {
  return (
    <div className="justify-center items-center align-middle">
      <div className="pt-40 flex flex-col items-center space-y-4">
         <CircularProgress color="success" />
      </div>
    </div>
  );
}

export default Loader;
