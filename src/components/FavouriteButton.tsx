import { Heart } from "lucide-react";
import useFavoriteStore from "@/store/favouriteStore";
import { Product } from "@/types/types"; 

interface FavoriteButtonProps {
  product: Product;
  className?: string;
}

const FavoriteButton = ({ product }: FavoriteButtonProps) => {
  const { addToFavorites, removeFromFavorites, favorites } = useFavoriteStore(
    (state) => state
  );

  const isFavorite = (productId : number) => favorites.some((item) => item.id === productId)


  const handleFavoriteToggle = () => {
    if (isFavorite(product.id)) {
      removeFromFavorites(product.id);
    } else {
      addToFavorites(product);
    }
  };

  return (

      <Heart
      fill={isFavorite(product?.id) ? "white" : "none" }
            onClick={handleFavoriteToggle}
            //className={` ${className}`}
            aria-label={isFavorite(product.id) ? "Remove from favorites" : "Add to favorites"}
        className={`w-7 h-7 ${isFavorite(product.id) ?  "text-white" : ""} `}
      />
  );
};

export default FavoriteButton;
