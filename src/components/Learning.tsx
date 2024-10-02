import { ArrowBack, VolumeUp } from "@mui/icons-material";
import { Button, Container, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react"
import { useNavigate, useSearchParams } from "react-router-dom";
import { tranlateWords } from "../utils/features";


const Learning = () => {

  const [count, setCount] = useState(0);
  const params = useSearchParams()[0].get("langugae") as LangType;
  const navigate = useNavigate();
  const nextHandler = () => {
    setCount((prev) => prev + 1);
  }

  useEffect(() =>{
    tranlateWords("bg").then(()=> {
      console.log("Words Translated");
    })
  }, [])

  return (
    <Container maxWidth={"md"} sx={{
      padding: "1rem",
    }}>
      <Button onClick={
        count === 0 ? () => navigate("/") : () => setCount((prev) => prev - 1)}>
        <ArrowBack />
      </Button>
      <Typography m={"2rem 0"}>
        Learning {params} Language;
      </Typography>

      <Stack direction={"row"} spacing={"1rem"}>
        <Typography variant={"h4"}>
          {count + 1}/10
        </Typography>
        <Typography color="blue" variant="h4">
          {count === 10 ? "Completed" : "Learning"}
        </Typography>
        <Button  sx={{
          borderRadius: "50%",
        }}>
          <VolumeUp />
        </Button>
        <Button sx={{
          margin: "3rem"
        }}
        fullWidth
        variant="contained"
        onClick={count === 9 ? () => navigate("/quiz") : nextHandler}
        >
          {count === 9 ? "Test": "Next"}
        </Button>
      </Stack>
    </Container>
  )
}

export default Learning