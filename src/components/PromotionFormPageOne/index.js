import React from "react";
import {
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";

const PromotionFormPageOne = () => {
  return (
    <section>
      <h1>Add a new applicant</h1>
      <form>
        <div className={`flex margin-top`}>
          <TextField
            id="applicant-name"
            label="Applicant name"
            variant="outlined"
            sx={{ width: "30%" }}
          />
          <FormControl sx={{ width: "30%" }}>
            <InputLabel id="demo-simple-select-label">Department</InputLabel>
            <Select
              labelId="department-label"
              id="department"
              label="Department"
            >
              <MenuItem value="">Chemistry</MenuItem>
              <MenuItem value="">Computer Science</MenuItem>
              <MenuItem value="">Earth Science</MenuItem>
              <MenuItem value="">Physics</MenuItem>
              <MenuItem value="">Mathematics</MenuItem>
              <MenuItem value="">Statistics &#38; Actuarial Science</MenuItem>
            </Select>
          </FormControl>

          <FormControl sx={{ width: "30%" }}>
            <InputLabel id="demo-simple-select-label">
              Present status
            </InputLabel>
            <Select
              labelId="status-label"
              id="present-status"
              label="Present status"
            >
              <MenuItem value="">Assistant Lecturer</MenuItem>
              <MenuItem value="">Lecturer</MenuItem>
              <MenuItem value="">Senior Lecturer</MenuItem>
              <MenuItem value="">Associate Professor</MenuItem>
              <MenuItem value="">Professor</MenuItem>
              <MenuItem value="">Professor Emeritus</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className={`flex margin-top`}>
          <FormControl sx={{ width: "30%" }}>
            <InputLabel id="demo-simple-select-label">
              Position sought
            </InputLabel>
            <Select
              labelId="status-label"
              id="position-sought"
              label="Position sought"
            >
              <MenuItem value="">Assistant Lecturer</MenuItem>
              <MenuItem value="">Lecturer</MenuItem>
              <MenuItem value="">Senior Lecturer</MenuItem>
              <MenuItem value="">Associate Professor</MenuItem>
              <MenuItem value="">Professor</MenuItem>
              <MenuItem value="">Professor Emeritus</MenuItem>
            </Select>
          </FormControl>
          <TextField
            id="application-received-date"
            label="Date application was received"
            variant="outlined"
            sx={{ width: "30%" }}
          />
          <TextField
            id="date-application-put-before-smc"
            label="Date application was put before S.M.C"
            variant="outlined"
            sx={{ width: "30%" }}
          />
        </div>
        <div className={`flex margin-top`}>
          <TextField
            id="smc-recommendation"
            label="S.M.C's recommendation"
            variant="outlined"
            sx={{ width: "93%" }}
          />
        </div>
        <div className={`flex margin-top`}>
          <TextField
            id="date-letter-was-sent-to-hod-for-ext-assessors-details"
            label="Date letter was sent to H.o.D for external assessor details"
            variant="outlined"
            sx={{ width: "30%" }}
          />
          <TextField
            id="hod-response-date"
            label="Date response was received from H.o.D"
            variant="outlined"
            sx={{ width: "30%" }}
          />
        </div>
        <h5 className="margin-top">Name and addresses of external assessors</h5>
        <div className={`flex margin-top`}>
          <TextField
            id="name-of-ext-assessor-1"
            label="Name of external assessor 1"
            variant="outlined"
            sx={{ width: "45.9%" }}
          />
          <TextField
            id="address-of-ext-assessor-1"
            label="Address of external assessor 1"
            variant="outlined"
            sx={{ width: "45.9%" }}
          />
        </div>
        <div className={`flex margin-top`}>
          <TextField
            id="name-of-ext-assessor-2"
            label="Name of external assessor 2"
            variant="outlined"
            sx={{ width: "45.9%" }}
          />
          <TextField
            id="address-of-ext-assessor"
            label="Address of external assessor 2"
            variant="outlined"
            sx={{ width: "45.9%" }}
          />
        </div>
        <div className={`flex margin-top`}>
          <TextField
            id="name-of-ext-assessor-3"
            label="Name of external assessor 3"
            variant="outlined"
            sx={{ width: "45.9%" }}
          />
          <TextField
            id="address-of-ext-assessor"
            label="Address of external assessor 3"
            variant="outlined"
            sx={{ width: "45.9%" }}
          />
        </div>
        <h5 className="margin-top">Date on which assessors were written to</h5>
        <div className={`flex margin-top`}>
          <TextField
            id="assessor-1"
            label="Assessor 1"
            variant="outlined"
            sx={{ width: "30%" }}
          />
          <TextField
            id="assessor-2"
            label="Assessor 2"
            variant="outlined"
            sx={{ width: "30%" }}
          />
          <TextField
            id="assessor-3"
            label="Assessor 3"
            variant="outlined"
            sx={{ width: "30%" }}
          />
        </div>
        <h5 className="margin-top">Date reply was received</h5>
        <div className={`flex margin-top`}>
          <TextField
            id="assessor-1-reply"
            label="Assessor 1"
            variant="outlined"
            sx={{ width: "30%" }}
          />
          <TextField
            id="assessor-2-reply"
            label="Assessor 2"
            variant="outlined"
            sx={{ width: "30%" }}
          />
          <TextField
            id="assessor-3-reply"
            label="Assessor 3"
            variant="outlined"
            sx={{ width: "30%" }}
          />
        </div>
        <h5 className="margin-top">Date on which publications were sent </h5>
        <div className={`flex margin-top`}>
          <TextField
            id="pub-date-1"
            label="Assessor 1"
            variant="outlined"
            sx={{ width: "30%" }}
          />
          <TextField
            id="pub-date-2"
            label="Assessor 2"
            variant="outlined"
            sx={{ width: "30%" }}
          />
          <TextField
            id="pub-date-3"
            label="Assessor 3"
            variant="outlined"
            sx={{ width: "30%" }}
          />
        </div>
        <h5 className="margin-top">Date on which reminders were sent </h5>
        <div className={`flex margin-top`}>
          <TextField
            id="reminder-date-1"
            label="Assessor 1"
            variant="outlined"
            sx={{ width: "30%" }}
          />
          <TextField
            id="preminder-date-2"
            label="Assessor 2"
            variant="outlined"
            sx={{ width: "30%" }}
          />
          <TextField
            id="reminder-date-3"
            label="Assessor 3"
            variant="outlined"
            sx={{ width: "30%" }}
          />
        </div>
        <h5 className="margin-top">Date on which assessments were received </h5>
        <div className={`flex margin-top`}>
          <TextField
            id=""
            label="Assessor 1"
            variant="outlined"
            sx={{ width: "30%" }}
          />
          <TextField
            id=""
            label="Assessor 2"
            variant="outlined"
            sx={{ width: "30%" }}
          />
          <TextField
            id=""
            label="Assessor 3"
            variant="outlined"
            sx={{ width: "30%" }}
          />
        </div>
        <h5 className="margin-top">Nature of response </h5>
        <div className={`flex margin-top`}>
          <TextField
            id=""
            label="Assessor 1"
            variant="outlined"
            sx={{ width: "30%" }}
          />
          <TextField
            id=""
            label="Assessor 2"
            variant="outlined"
            sx={{ width: "30%" }}
          />
          <TextField
            id=""
            label="Assessor 3"
            variant="outlined"
            sx={{ width: "30%" }}
          />
        </div>
        <h5 className="margin-top">Format of report </h5>
        <div className={`flex margin-top`}>
          <TextField
            id=""
            label="Assessor 1"
            variant="outlined"
            sx={{ width: "30%" }}
          />
          <TextField
            id=""
            label="Assessor 2"
            variant="outlined"
            sx={{ width: "30%" }}
          />
          <TextField
            id=""
            label="Assessor 3"
            variant="outlined"
            sx={{ width: "30%" }}
          />
        </div>
        <h5 className="margin-top">
          Date on which acknowledgement letters were sent{" "}
        </h5>
        <div className={`flex margin-top`}>
          <TextField
            id="reminder-date-1"
            label="Assessor 1"
            variant="outlined"
            sx={{ width: "30%" }}
          />
          <TextField
            id="preminder-date-2"
            label="Assessor 2"
            variant="outlined"
            sx={{ width: "30%" }}
          />
          <TextField
            id="reminder-date-3"
            label="Assessor 3"
            variant="outlined"
            sx={{ width: "30%" }}
          />
        </div>
        <h5 className="margin-top">Further actions taken</h5>
        <div className={`flex margin-top`}>
          <TextField
            id="further actions taken"
            label="What further actions were taken?"
            variant="outlined"
            sx={{ width: "93%" }}
          />
        </div>
        <div className={`flex margin-top`}>
          <TextField
            id="dossier-dispatch-date"
            label="Dossier dispatch date"
            variant="outlined"
            sx={{ width: "93%" }}
          />
        </div>
        <div className={`flex margin-top`}>
        
        </div>
      </form>
    </section>
  );
};

export default PromotionFormPageOne;
