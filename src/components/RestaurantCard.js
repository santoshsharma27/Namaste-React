import { CDN_URL } from "../utils/constant";

const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    sla,
    locality,
  } = resData;

  return (
    <div className="m-4 p-4 w-full max-w-[250px] sm:max-w-[300px] lg:max-w-[320px] rounded-lg bg-gray-100 hover:bg-gray-200 flex flex-col shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105">
      <img
        className="rounded-xl w-full h-[150px] sm:h-[180px] md:h-[200px] object-cover"
        src={CDN_URL + cloudinaryImageId}
        alt="res-logo"
        loading="lazy"
      />
      <h3 className="font-semibold text-lg text-gray-800 pt-3">
        {name.slice(0, 30)}
      </h3>

      <div className="mt-auto flex items-center justify-start text-sm">
        <span className="bg-green-600 rounded-full flex items-center justify-center w-5 h-5 text-white">
          <span>✭</span>
        </span>

        <span className="px-1 py-1">{avgRating}</span>
        <h4 className="font-bold text-gray-600 px-1">•</h4>
        <h4 className="text-gray-600 font-bold px-1">{sla?.slaString}</h4>
      </div>
      <div>
        <h4 className="text-sm text-gray-500 truncate">
          {cuisines.join(", ")}
        </h4>
        <h4 className="text-sm text-gray-500 truncate">{locality}</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
