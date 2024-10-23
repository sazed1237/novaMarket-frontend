import React from 'react';
import { Star, ThinStar, RoundedStar, ThinRoundedStar, StickerStar } from '@smastrom/react-rating';
import { Rating } from '@smastrom/react-rating'

const ProductRating = ({product}) => {

    const includedShapesStyles = [ThinStar].map(
        (itemShapes) => ({ itemShapes, activeFillColor: '#f59e0b', inactiveFillColor: '#ffedd5' })
    );

    return (
        <div>
            {includedShapesStyles.map((itemStyles, index) => (
                <Rating
                    key={`shape_${index}`}
                    style={{ maxWidth: 100, marginTop: -5 }}
                    value={product?.rating}
                    readOnly
                    itemStyles={itemStyles}
                />
            ))}
        </div>
    );
};

export default ProductRating;