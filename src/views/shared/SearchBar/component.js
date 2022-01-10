import React from 'react';
import * as S from './styled';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <S.View>
	    <S.Icon name="search"/>
	    <S.TextInput
		    autoCapitalize="none"
		    autoCorrect={false}
		    placeholder="Search"
		    value={term}
		    onChangeText={onTermChange}
		    onEndEditing={onTermSubmit}
		    autoFocus
		    // keyboardType="numeric"
	    />
    </S.View>
  );
};

export default SearchBar;
