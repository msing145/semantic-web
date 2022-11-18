import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import './FormPage.css';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import { useHistory } from "react-router-dom";

export default function FormPage(props) {

    const [value, setValue] = React.useState(null);
    const [difficultyValue, setDifficultyValue] = React.useState(2);
    const [open, setOpen] = React.useState(false);
    const [category, setCategory] = React.useState('Select');
    const [questionsValue, setQuestionaValue] = React.useState('Select');
    const history = useHistory();

    const handleChange = (event) => {
        setCategory(event.target.value);
        console.log(category,"categ");
      };

    const handleClose = () => {
        setOpen(false);
      };

      const handleOpen = () => {
        setOpen(true);
      };

      const handleQuestionsChange = event => {
        setQuestionaValue(event.target.value);
      };

      const handleSubmit=(e)=>
    {
        // e.preventDefault();
        console.log(value, difficultyValue,category,questionsValue);
        //make post api call.
        props.handleApiResponse(value);
        history.push("/QuestionsPage");
    };
  return (
    <React.Fragment>
      <Grid className="Form-Container" container spacing={3}>
      <div className="Title" >
        Movie Ontology
      </div>
        <Grid className="Form-Elements" item xs={12} md={6}>
        <div className="From-Label" component="legend">Please Select From Date</div>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label="From Date"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
        </Grid>
        <Grid  className="Form-Elements" item xs={12} md={6}>
        <div className="From-Label" component="legend">Please Select Movie Genre</div>
        <Select
        style={{width:"200px"}}
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={category}
          onChange={handleChange}
        >
          <MenuItem value={10}>Action</MenuItem>
          <MenuItem value={20}>Comedy</MenuItem>
          <MenuItem value={30}>Romance</MenuItem>
          <MenuItem value={40}>Thriller</MenuItem>
          <MenuItem value={50}>Horror</MenuItem>
        </Select>
        </Grid>
        <Grid className="Form-Elements" item xs={12} md={6}>
        <div className="From-Label" component="legend">Please Enter Number of Questions</div>
          <TextField
            required
            id="number_of_questions"
            label="Number of Questions"
            fullWidth
            variant="standard"
            onChange={handleQuestionsChange}
            value={questionsValue}
          />
        </Grid>
        <Grid className="Form-Elements" item xs={12} md={6}>
        <div className="From-Label" component="legend">Please Select Dificulty Rating</div>
      <Rating
      size="large"
        name="simple-controlled"
        value={difficultyValue}
        onChange={(event, newValue) => {
            setDifficultyValue(newValue);
        }}
      />
        </Grid>
        <Grid className="Form-Elements" item xs={12} md={6}>
        <Button className="Button-Elements" variant="outlined" size="large" onClick={()=>{handleSubmit()}}>Submit</Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}