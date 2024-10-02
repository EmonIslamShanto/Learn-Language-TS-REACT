import { Button, Container, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Typography } from "@mui/material";
import { useState } from "react"
import { useNavigate } from "react-router-dom";


const Quiz = () => {
  const [result, setResult] = useState<string[]>([]);

  const [count, setCount] = useState<number>(0);

  const [ans, setAns] = useState<string>("");

  const  navigate = useNavigate();

  const nextHandler = () => {
    setResult((prev) => [...prev, ans]);
    setCount((prev) => prev + 1);
    setAns("");
  }
  return (
    <Container maxWidth="md" sx={{
      padding: "1rem",
    }}>
      <Typography m={"2rem 0"}>
        Quiz
      </Typography>
      <Typography>
        {count + 1}. {"Question"}
      </Typography>

      <FormControl>
        <FormLabel sx={{
          mt: "2rem",
          mb: "1rem"
        }}>
          Options
        </FormLabel>
        <RadioGroup value={ans} onChange={(e) => setAns(e.target.value)}>
          <FormControlLabel value="option1" control={<Radio />} label="Option 1" />
        </RadioGroup>
      </FormControl>
      <Button sx={{
        margin: "2rem 0"
      }}
      variant="contained" fullWidth
      onClick={nextHandler}
      disabled = {ans === ""}>
        {count === 9 ? "Submit" : "Next"}
      </Button>
    </Container>
  )
}

export default Quiz