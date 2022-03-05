create database Risk_Predictor;
use Risk_Predictor;

create table USER(
user_id int NOT NULL AUTO_INCREMENT ,
age int ,
height float,
weight float,
blood_group varchar(10),
gender varchar(8),
vaccine_type varchar(20),
living_area varchar(20),

Swelling float,
Redness float,
Itching float,
Fever float,
 Headache float,
 Muscle_Pain float,
 Tiredness float,
 Coughing float,
 Diarrhea float,
 Nausea_and_vomiting float ,
 Breathlessness float,
 Joint_Pain float,
  Fainted float,
  Anaphylactic_Reaction float,
  Tingling float,
  Swollen_Lymph_Nodes float ,
 
PRIMARY KEY (user_id)

);