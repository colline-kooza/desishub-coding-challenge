export type CategoryProps = {
  title: string;
  slug: string;
  imageUrl: string;
  description: string;
};
export type UserProps = {
  name: string;
  firstName: string;
  lastName: string;
  phone: string;
  image: string;
  email: string;
  password: string;
};
export type LoginProps = {
  email: string;
  password: string;
};


export interface ProductProps {
  title: string;
  slug?: string;
  description?: string;
  categoryId: string;
  qty: number; 
  sellingPrice: number;
  images?: string[];
}
