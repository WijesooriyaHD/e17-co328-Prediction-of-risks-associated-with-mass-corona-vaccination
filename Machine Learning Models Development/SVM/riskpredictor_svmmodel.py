# -*- coding: utf-8 -*-
"""RiskPredictor_SVMModel.ipynb

Automatically generated by Colaboratory.

Original file is located at
    https://colab.research.google.com/drive/12hLbJL7584cx5qVBWVaweX0yi9h6YyZH

# ***SVM Model***

## Import essential libraries
"""

# Commented out IPython magic to ensure Python compatibility.
# for data analysis
import numpy as np 
import pandas as pd


# to visualize data
from matplotlib import pyplot as plt
import seaborn as sns; sns.set(font_scale=1.2)

# to split the dataset
from sklearn.model_selection import train_test_split

# to access the svm model
from sklearn import svm

# to test the accuracy of the model
from sklearn.metrics import accuracy_score,confusion_matrix

# %matplotlib inline

"""## Read data from the CSV file"""

# load dataset from the google drive
url='https://drive.google.com/file/d/1yFKIb7GCgKPWR-g7q8DZTLzXOCVxd99n/view?usp=sharing'
url=url='https://drive.google.com/uc?id=' + url.split('/')[-2]
dataset_df=pd.read_csv(url)

# get the shape of the dataset
rows,cols=dataset_df.shape

print('No of rows = ',rows)
print('No of columns = ',cols)

# first 10 data records
dataset_df.head(10)

# last 10 data records
dataset_df.tail(10)

# get some information about the dataset
dataset_df.info()

# check for the null values
dataset_df.isnull().sum()

"""## Statistical Analysis"""

# statistical analysis on numerical data
dataset_df.describe()

"""## Data Pre-processing

#### Format Features
"""

# Gender
# Male - 1 Female -0
dataset_df.Sex=dataset_df.Sex.map({'Male':1,'Female':0})
dataset_df['Sex'].value_counts()

# Living Area
# DownTown -1 Outskirt -0
dataset_df.Living_Area=dataset_df.Living_Area.map({'Downtown':1,'Outskirt':0})
dataset_df['Living_Area'].value_counts()

# Vaccine Type
# 'Pfizer':0  'Moderna':1  'Sinopharm':2  'Astrazeneca':3
dataset_df.vaccine_type=dataset_df.vaccine_type.map({'Pfizer':0,'Moderna':1,'Sinopharm':2,'Astrazeneca':3})
dataset_df['vaccine_type'].value_counts()

# Blood group
# A+ :0 A- :1 AB+ :2 AB- :3 B+ :4 B- :5   O+ :6 O- :7
dataset_df.blood_group=dataset_df.blood_group .map({'A+':0,'A-':1,'AB+':2,'AB-':3,'B+':4,'B-':5,'O+':6,'O-':7})
dataset_df['blood_group'].value_counts()

"""### Format Targets"""

# get the side effects and store them in an array
sideEffects=dataset_df.columns[7:23].tolist()
print(sideEffects)
print('size = ' ,len(sideEffects))

# a loop to fromat side effets
for index in range(0,len(sideEffects)):
  name=sideEffects[index]
  dataset_df[name]=dataset_df[name].map({'Yes':1,'No':0})
  dataset_df[name].value_counts()

# a loop to view formated side effects
for index in range(0,len(sideEffects)):
  print(dataset_df[sideEffects[index]].value_counts())
  print('\n')

"""## Model Training"""

# features of the dataset
features=dataset_df.iloc[:,0:7]
X=features
print(X)

# function to get predictions on side effects
# One side effect per time

def get_predictions(Y,X,input):

  X=X.values

  # split the dataset 80% train data , 20% test data
  X_train,X_test,Y_train,Y_test=train_test_split(X,Y,test_size=0.2,random_state=0)
  #print(X.shape,X_train.shape,X_test.shape)

  # Get the model
  model=svm.SVC(kernel='linear')
  # train the svm model with train data
  model.fit(X_train,Y_train)

  # get the predtions for the user inputs
  output=model.predict(input)
  return output


# a function to get model accuracy on a particular side effect
def get_model_accuracy(Y):

  # split the dataset 80% train data , 20% test data
  X_train,X_test,Y_train,Y_test=train_test_split(X,Y,test_size=0.2,random_state=0)

  # Get the model
  model=svm.SVC(kernel='linear')
  # train the svm model with train data
  model.fit(X_train,Y_train)
  
  #Accuracy of the trainning dataset
  Y_train_prediction=model.predict(X_train)
  training_data_accuracy=accuracy_score(Y_train_prediction,Y_train)
  print('Accuracy on trainning data: ',training_data_accuracy)

  #Accuracy on Test data
  Y_test_prediction=model.predict(X_test)
  test_data_accuracy=accuracy_score(Y_test_prediction,Y_test)
  print('Accuracy on test data: ',test_data_accuracy)


# model accuracy using confusing mtarix
def accuracy_confusion_matrix(Y):

  # split the dataset 80% train data , 20% test data
  X_train,X_test,Y_train,Y_test=train_test_split(X,Y,test_size=0.2,random_state=0)

  # Get the model
  model=svm.SVC(kernel='linear')
  # train the svm model with train data
  model.fit(X_train,Y_train)
    

  #Accuracy on Test data
  Y_test_prediction=model.predict(X_test)
  test_data_accuracy=confusion_matrix(Y_test_prediction,Y_test)
  print(test_data_accuracy)

# predictions on swelling
target=dataset_df.iloc[:,7]
Y1=target
#print(Y1)
#print('\n')

# example on user inputs
input=[[1,51,1,1.71,82,2,0]]

output=get_predictions(Y1,X,input)

if(output==0):
  result='No'
else:
  result='Yes'

print('Swelling = ',result)

# model accuracy on swelling
get_model_accuracy(Y1)

"""## Predictions on all the side effects"""

# predictions on all side effects

# example on user inputs
input=[[1,51,1,1.71,82,2,0]]

# an array to store possible side effects
possible_side_effects=[]

index=0
for count in range(7,23):
  if(sideEffects[index]!='Itching'):  # to avoid column 'Itching'
    Y=dataset_df.iloc[:,count]
    output=get_predictions(Y,X,input)
    if(output==0):
      result='No'
    else:
      result='Yes'
      possible_side_effects.append(sideEffects[index])

    #print(sideEffects[index]+' = ',result)
  index=index+1

print('Possible Sideeffects =',possible_side_effects)

# accurcy on all side effects (using accuracy scores)
index=0
for count in range(7,23):
  if(sideEffects[index]!='Itching'):  # to avoid column 'Itching'
    Y=dataset_df.iloc[:,count]
    print('Accuracy on '+sideEffects[index])
    get_model_accuracy(Y)
    print('\n')

  index=index+1

# accurcy on all side effects (using confusion matrix scores)

index=0
for count in range(7,23):
  if(sideEffects[index]!='Itching'):  # to avoid column 'Itching'
    Y=dataset_df.iloc[:,count]
    print('Accuracy on '+sideEffects[index])
    accuracy_confusion_matrix(Y)
    print('\n')

  index=index+1