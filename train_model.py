import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import classification_report
import joblib
import matplotlib.pyplot as plt

def load_data(filepath):
    df = pd.read_csv(filepath)
    # print(f"Dataset loaded. Shape: {df.shape}")
    # print(df.head())
    return df

def prepare_features_labels(df):
    features = ['WBC', 'RBC', 'HGB', 'HCT', 'MCV', 'MCH', 'MCHC', 'RDW',
            'PLT', 'MPV', 'NEUT%', 'LYMPH%', 'MONO%', 'EO%', 'BASO%']
    
    X= df[features]
    y= df['Needs_Review'].map({"No":0,"Yes":1})
    return X,y

def split_into_sets(X,y):
    X_train,X_test,y_train,y_test = train_test_split(X,y,test_size=0.2,stratify=y,random_state=42)
    return X_train,X_test,y_train,y_test

def train_model(X_train,y_train):
    model = RandomForestClassifier(class_weight="balanced",random_state=42)
    model.fit(X_train,y_train)
    return model

def evaluate_model(model,X_test,y_test):
    y_pred = model.predict(X_test)
    print(classification_report(y_test, y_pred))

def save_model(model):
    joblib.dump(model,"models/cbc_ai_model.pkl")



if __name__ == "__main__":
    filepath = "data/simulated_cbc_dataset.csv"
    df = load_data(filepath)
    X, y = prepare_features_labels(df)
    X_train, X_test, y_train, y_test = split_into_sets(X, y)
    model = train_model(X_train, y_train)
    evaluate_model(model, X_test, y_test)
    save_model(model)

    importances = model.feature_importances_
    features = X_train.columns 


    plt.figure(figsize=(8, 6))
    plt.barh(features, importances, color='teal')
    plt.xlabel("Feature importance")
    plt.title("What the model thinks matters")
    plt.tight_layout()
    plt.show()

