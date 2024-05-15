import React, { useState } from 'react';
import { Button, Container, Grid, Typography } from '@mui/material';
import axios from 'axios';

const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [filename, setfileName] = useState(null);
  const [filepath, setfilepath] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    try {
      const formData = new FormData();
      formData.append('file', selectedFile , filename , filepath);

      await axios.post('http://localhost:5000/fileup', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      alert('File uploaded successfully');
    } catch (error) {
      console.error('Error uploading file:', error);
      alert('An error occurred while uploading the file');
    }
  };

  return (
    <Container style={{ marginTop: 20 }}>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12}>
          <Typography variant="h5">Upload a File</Typography>
        </Grid>
        <Grid item xs={12}>
          <input
            accept="*"
            style={{ display: 'none' }}
            id="file-upload"
            type="file"
            value={filename}
            onChange={handleFileChange}
          />
          <label htmlFor="file-upload">
            <Button variant="contained" component="span">
              Choose File
            </Button>
          </label>
          {selectedFile && <Typography variant="body1">Selected file: {selectedFile.name}</Typography>}
          
          
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            value={filepath}
            onClick={handleUpload}
            disabled={!selectedFile}
            style={{ marginTop: 10 }}
          >
            Upload
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default FileUpload;
