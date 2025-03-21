export interface User {
  id: {
    name: string;
    value: string;
  };
  name: {
    first: string;
    last: string;
  };

  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  email: string;

  location: {
    country: string;
  };
}
