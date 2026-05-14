

export const Navbar = ({ handleOnFetchByGenre, handleOnTrending }) => {
  return (
    <>
      <div className="nav  ">
        <div className="navigation-bar d-flex justify-content-between align-items-center container">
          <div className="left d-flex gap-3 justify-content-between align-items-center ">
            <i className="fa-solid fa-video"></i>
           CineTrial
          </div>
          <div className="right d-flex gap-4">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleOnTrending();
              }}
            >
              Trending
            </a>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleOnFetchByGenre(28, "Action Movies");
              }}
            >
              Action
            </a>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleOnFetchByGenre(35, "Comedy movies");
              }}
            >
              Comedy
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
