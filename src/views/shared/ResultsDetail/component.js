import React from 'react';
import * as S from './styled';

const ResultsDetail = ({ result }) => {
	return (
		<S.View>
			<S.Image source={{ uri: result.image_url }}/>
			<S.Text isBold>{result.name}</S.Text>
			<S.Text>
				{result.rating} Stars, {result.review_count} Reviews
			</S.Text>
		</S.View>
	);
};

export default ResultsDetail;
