import {
  Box,
  useMediaQuery,
} from "@mui/material";
import Header from "../components/Header";
import { useGetProductsQuery } from "../redux/api";
import SingleProduct from '../components/SingleProduct'
import Typography from "@mui/material/Typography";


const Products = () => {
    const { data, isLoading } = useGetProductsQuery(null)
    const isNonMobile = useMediaQuery("(min-width: 1000px)");
  
    return (
      <Box m="1.5rem 2.5rem">
        <Header title="PRODUCTS" subtitle="See your list of products." />
        {data || !isLoading ? (
          <Box
            mt="20px"
            display="grid"
            gridTemplateColumns="repeat(4, minmax(0, 1fr))"
            justifyContent="space-between"
            rowGap="20px"
            columnGap="1.33%"
            sx={{
              "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
            }}
          >
            {data?.map(
              ({
                _id,
                name,
                description,
                price,
                rating,
                category,
                supply,
                stat,
              }) => (
                <SingleProduct
                  key={_id}
                  _id={_id}
                  name={name}
                  description={description}
                  price={price}
                  rating={rating}
                  category={category}
                  supply={supply}
                  stat={stat}
                />
              )
            )}
          </Box>
        ) : (
          <Typography color='#a19696'>Loading...</Typography>
        )}
      </Box>
    );
  };

export default Products