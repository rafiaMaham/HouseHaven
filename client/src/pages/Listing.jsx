import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { useSelector } from "react-redux";
import { Navigation } from "swiper/modules";
import "swiper/css/bundle";
import {
  FaBath,
  FaBed,
  FaChair,
  FaMapMarkedAlt,
  FaMapMarkerAlt,
  FaParking,
  FaShare,
} from "react-icons/fa";

const Listing = () => {
  SwiperCore.use([Navigation]);
  const [listing, setListing] = useState(null);
  const [loading, setLaoding] = useState(false);
  const [error, setError] = useState(false);

  const params = useParams();
  useEffect(() => {
    const fetchListing = async () => {
      try {
        setLaoding(true);
        const res = await fetch(`/api/listing/get/${params.listingId}`);
        const data = await res.json();
        if (data.success === false) {
          setError(true);
          setLaoding(false);

          return;
        }
        setListing(data);
        setLaoding(false);
        setError(false);
      } catch (error) {
        setError(true);
        setLaoding(false);
      }
    };

    fetchListing();
  }, [params.listingId]);

  return (
    <main>
      {loading && (
        <p className="text-center my-7 text-2xl text-maroon font-semibold font-montserrat">
          Loading...
        </p>
      )}
      {error && (
        <p className="text-center my-7 text-2xl text-red-500">
          Something went wrong!
        </p>
      )}

      {listing && !loading && !error && (
        <div>
          <Swiper navigation>
            {listing.imageUrls.map((url) => (
              <SwiperSlide key={url}>
                <div
                  className="h-[700px]"
                  style={{
                    background: `url(${url}) center no-repeat`,
                    backgroundSize: "cover",
                  }}
                ></div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </main>
  );
};

export default Listing;