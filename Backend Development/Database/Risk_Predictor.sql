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

Swelling bool default false,
Redness bool default false,
Itching bool default false,
Fever bool default false,
Headache bool default false,
Muscle_Pain bool default false,
Tiredness bool default false,
Coughing bool default false,
Diarrhea bool default false,
Nausea_and_vomiting bool default false,
Breathlessness bool default false,
Joint_Pain bool default false,
Fainted bool default false,
Anaphylactic_Reaction bool default false,
Tingling bool default false,
Swollen_Lymph_Nodes bool default false,
 
PRIMARY KEY (user_id)

);