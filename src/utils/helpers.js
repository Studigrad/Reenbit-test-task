const getUpdateTripCards = (tripCards,id) =>{
    const updatedTripCards = tripCards.map((tripCard) => {
        if (tripCard.id === id) {
          if (tripCard.highlighted) {
            return { ...tripCard };
          }
          return { ...tripCard, highlighted: !tripCard.highlighted };
        } else {
          return { ...tripCard, highlighted: false };
        }
      });
      return updatedTripCards
}



export { getUpdateTripCards };