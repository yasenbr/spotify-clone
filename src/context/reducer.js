export const initialState = {
  user: null,
  playlist: [],
  playing: false,
  item: null,
  //remove after dev fnished
  token: 'BQDeYE3mIpaZHZ9t1e4ePDN_REhUP_AtTF83FPjZ19NCuBSxmn175s7Ip1u18iqHTceIgaGTb1rUb_b9h1e8SXd6fbHpCwJOnKoPFgVKbOP-D77LcTkgueYbb58ilBXgtJVHjZXzf5aNLT--oijKBrCTI2q9Qgl1lWpQu-bq-493be5Q',
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

      case 'SET_TOKEN':
        return{
          ...state,
          token: action.token
        }
    default:
      return;
  }
};

export default reducer;
