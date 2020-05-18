import React from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';

import Question from '../../components/question/Question';

const data = [
  {
    id: 1,
    question: `Bagaimana kondisi kesehatan Fisikmu saat ini ?`,
    answer: ['Semakin Sehat','Biasa Saja','Semakin Buruk'],
  },
  {
    id: 2,
    question: `Bagaimana kondisi kesehatan Psikologimu saat ini ?`,
    answer: ['Semakin Sehat','Biasa Saja','Semakin Buruk'],
  },
  {
    id: 3,
    question: `Bagaimana Aktifitas Pekerjaanmu saat ini ?`,
    answer: ['Berhenti/Dihentikan','Tetap berlangsung dengan Jangka Waktu Tertentu','Normal	seperti biasa', 'Semakin padat'],
  },
  {
    id: 4,
    question: `Apakah Kamu kehilangan pekerjaan akibat bencana Pandemi Virus	
    Covid-19	ini ?`,
    answer: ['Ya','Tidak'],
  },
  {
    id: 5,
    question: `Bagaimana kondisi Penghasilanmu saat ini ?`,
    answer: ['Bertambah banyak','Berkurang', 'Tidak Ada	penghasilan'],
  },
  {
    id: 6,
    question: `Bagaimana kondisi keuanganmu saat ini ?`,
    answer: ['Cukup untukmemenuhi kebutuhan hidup 1	Tahun ke depan','Cukup untukmemenuhi kebutuhan hidup 3	Bulan ke depan','Cukup untukmemenuhi kebutuhan hidup 1	Bulan ke depan','Cukup untukmemenuhi kebutuhan hidup 7	Hari ke depan','Cukup untukmemenuhi kebutuhan hidupHari ini, tetapi Saya tidak tahu bagaimana memenuhi kebutuhan hidup esok hari','Saya sudah tidak bisa memenuhi kebutuhan hidup hari ini'],
  },
  {
    id: 7,
    question: `Bagaimana tingkat kepedulian masyarakat di	lingkungan tempat
    tinggalmu saat ini ?`,
    answer: ['Lebih pedulisatu sama lain','Biasa Saja','Lebih mementingkan kehidupan masing-masing'],
  },
  {
    id: 8,
    question: `Bagaimana kondisi keamanan dan ketertiban sosial di	lingkungan
    tempat tinggalmu saat ini ?`,
    answer: ['Lebih Aman dan Tertib','Biasa Saja','Tidak Aman dan Tertib'],
  },
  {
    id: 9,
    question: `Bagaimana aktifitas fisik dalam keseharianmu saat ini ?`,
    answer: ['Lebih Menjaga Jarak','Biasa Saja','Tidak memperdulikan jarak dalam aktifitas fisik'],
  },
  {
    id: 10,
    question: `Seberapa sering Kamu menggunakan masker	ketika beraktifitas
    diluar rumah ?`,
    answer: ['Selalu','Sering','Biasa Saja', 'Jarang', 'Tidak Pernah'],
  },
  {
    id: 11,
    question: `Seberapa sering Kamu mencuci tangan dengan Sabun atau
    Handsanitizer setelah melakukan aktivitas diluar rumah ?`,
    answer: ['Selalu','Sering','Biasa Saja', 'Jarang', 'Tidak Pernah'],
  },
  {
    id: 12,
    question: `Seberapa sering Kamu melakukan pertemuan/perkumpulan diluar
    rumah bersama 4	orang	atau lebih,	dengan jarak satu sama lain	kurang
    dari 2	meter	?`,
    answer: ['Setiap Hari','Sering','Biasa Saja', 'Jarang', 'Tidak Pernah'],
  },
  {
    id: 13,
    question: `Seberapa sering Kamu bertanya kepada Keluargamu,	mengenai
    Kabar atau Kondisi kehidupannya saat ini?`,
    answer: ['Setiap Hari','Sering','Biasa Saja', 'Jarang', 'Tidak Pernah'],
  },
  {
    id: 14,
    question: `Seberapa sering Kamu bertanya kepada Sanak Saudaramu, mengenai
    Kabar atau Kondisi kehidupannya saat ini ?`,
    answer: ['Setiap Hari','Sering','Biasa Saja', 'Jarang', 'Tidak Pernah'],
  },
  {
    id: 15,
    question: `Seberapa sering Kamu bertanya kepada Tetanggamu, mengenai
    Kabar atau Kondisi kehidupannya saat ini ?`,
    answer: ['Setiap Hari','Sering','Biasa Saja', 'Jarang', 'Tidak Pernah'],
  },
  {
    id: 16,
    question: `Seberapa sering Kamu bertanya kepada Temanmu, mengenai Kabar
    atau Kondisi kehidupannya saat ini ?`,
    answer: ['Setiap Hari','Sering','Biasa Saja', 'Jarang', 'Tidak Pernah'],
  },
  {
    id: 17,
    question: `Secara umum,	bagaimana Kabarmu Hari Ini ?`,
    answer: ['Baik','Sedang mengharapkan bantuan'],
  },
  {
    id: 18,
    question: `Silahkan masukkan alamat Email	Anda,	jika Anda ingin orang	lain	bisa mencari Kabar Anda melalui layanan
    “Cari Kabar” yang kami sediakan. Hanya Jawaban yang	Anda pilih pada pertanyaan No.	 17,	yang	akan kami	berikan kepada seseorang yang	
    mencari Kabar Anda melalui layanan “Cari Kabar”.`,
    answer: ['Inputan Email','Saya tidak ingin orang	lain	mengetahui Kabar Saya'],
  },
  {
    id: 19,
    question: `Apakah setelah mengikuti kegiatan Penggalangan Kabar ini,	Anda akan melakukan gerakan “Tanya	
    Kabar”	dengan cara menghubungi orang-orang	terdekat Anda dan menanyakan kondisi kehidupan
    mereka saat ini ?`,
    answer: ['Ya','Tidak'],
  },
  {
    id: 20,
    question: `Bagaimana penilaian Anda mengenai Aksi Penggalangan Kabar ini ?`,
    answer: ['Saya Suka','Biasa Saja','Tidak Suka'],
  },
]

export default ({ handleChange, input, reCaptcha}) => {

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom style={{marginBottom: '20px'}}>
        Form Kuesioner
      </Typography>
      <Grid container spacing={3}>
        {data.map((item) => {
          return(
          <Grid item xs={12}>
            <Question data={item} handleChange={handleChange} />
          </Grid>
          )
        })}
        {/* <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveData" value="yes" />}
            label="Isi apa nich"
          />
        </Grid> */}
        <Grid item xs={12}>
        <ReCAPTCHA
          sitekey="6Le4MfkUAAAAADUWxQazqhFsBDSgVPEdfy_r_0A9"
          onChange={reCaptcha}
        />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}