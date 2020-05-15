import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

import FormControl from '@material-ui/core/FormControl';

import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(0),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default ({ handleChange, input }) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Form Profile
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField id="name" label="Nama Lengkap" name="name" value={input.name} onChange={handleChange} fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField id="usia" label="Usia" type="number" name="age" value={input.age} onChange={handleChange} fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <FormControl className={classes.formControl} fullWidth>
            <InputLabel >Jenis Kelamin</InputLabel>
            <Select
              value={input.gender}
              onChange={handleChange}
              name="gender"
            >
              <MenuItem value="L">Laki-laki</MenuItem>
              <MenuItem value="P">Perempuan</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6}>
          <FormControl className={classes.formControl} fullWidth>
            <InputLabel>Pekerjaan</InputLabel>
            <Select
              value={input.occupation}
              onChange={handleChange}
              name="occupation"
            >
              <MenuItem value="Guru, Dosen atau Pengajar">Guru, Dosen atau Pengajar</MenuItem>
              <MenuItem value="Ibu Rumah Tangga">Ibu Rumah Tangga</MenuItem>
              <MenuItem value="Jasa Transportasi (Sopir,	Ojek dll)">Jasa Transportasi (Sopir,	Ojek dll)</MenuItem>
              <MenuItem value="Karyawan Swasta Umum">Karyawan Swasta Umum</MenuItem>
              <MenuItem value="Pelajar">Pelajar</MenuItem>
              <MenuItem value="Nelayan">Nelayan</MenuItem>
              <MenuItem value="Petani">Petani</MenuItem>
              <MenuItem value="Pensiunan">Pensiunan</MenuItem>
              <MenuItem value="Pekerja Perkebunan">Pekerja Perkebunan</MenuItem>
              <MenuItem value="Buruh Bangunan">Buruh Bangunan</MenuItem>
              <MenuItem value="Pegawai BUMN	atau BUMD">Pegawai BUMN	atau BUMD</MenuItem>
              <MenuItem value="Pegawai Negeri Sipil">Pegawai Negeri Sipil</MenuItem>
              <MenuItem value="Profesional (Dokter,	Pengacara, Freelancer	dll)">Profesional (Dokter, Pengacara, Freelancer dll)</MenuItem>
              <MenuItem value="Wiraswata">Wiraswata</MenuItem>
              <MenuItem value="Pengangguran">Pengangguran</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}