create database Risk_Predictor;
use Risk_Predictor;

create table DataSet(
age int ,
height float,
weight float,
blood_group varchar(10),
gender varchar(8),
vaccine_type varchar(20),
living_area varchar(20),

Swelling varchar(3),
Redness varchar(3),
Itching varchar(3),
Fever varchar(3),
 Headache varchar(3),
 Muscle_Pain varchar(3),
 Tiredness varchar(3),
 Coughing varchar(3),
 Diarrhea varchar(3),
 Nausea_and_vomiting varchar(3) ,
 Breathlessness varchar(3),
 Joint_Pain varchar(3),
  Fainted varchar(3),
  Anaphylactic_Reaction varchar(3),
  Tingling varchar(3),
  Swollen_Lymph_Nodes varchar(3)
 
);

create table UserFormData(
NIC varchar(20) ,
age int ,
height float,
weight float,
blood_group varchar(10),
gender varchar(8),
vaccine_type varchar(20),
living_area varchar(20),

Swelling varchar(3),
Redness varchar(3),
Itching varchar(3),
Fever varchar(3),
 Headache varchar(3),
 Muscle_Pain varchar(3),
 Tiredness varchar(3),
 Coughing varchar(3),
 Diarrhea varchar(3),
 Nausea_and_vomiting varchar(3) ,
 Breathlessness varchar(3),
 Joint_Pain varchar(3),
  Fainted varchar(3),
  Anaphylactic_Reaction varchar(3),
  Tingling varchar(3),
  Swollen_Lymph_Nodes varchar(3),
  primary key (NIC)
 
);

create table UserFeedbackData(
NIC varchar(20) ,

Swelling varchar(3),
Redness varchar(3),
Itching varchar(3),
Fever varchar(3),
 Headache varchar(3),
 Muscle_Pain varchar(3),
 Tiredness varchar(3),
 Coughing varchar(3),
 Diarrhea varchar(3),
 Nausea_and_vomiting varchar(3) ,
 Breathlessness varchar(3),
 Joint_Pain varchar(3),
  Fainted varchar(3),
  Anaphylactic_Reaction varchar(3),
  Tingling varchar(3),
  Swollen_Lymph_Nodes varchar(3),
  primary key (NIC)
 
);





