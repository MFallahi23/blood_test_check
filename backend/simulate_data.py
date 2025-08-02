import numpy as np
import pandas as pd

def generate_sample(normal=True):
    
    sample = {
        'WBC': np.random.normal(7, 1),
        'RBC': np.random.normal(5, 0.4),
        'HGB': np.random.normal(15, 1),
        'HCT': np.random.normal(44, 3),
        'MCV': np.random.normal(90, 5),
        'MCH': np.random.normal(30, 2),
        'MCHC': np.random.normal(34, 1),
        'RDW': np.random.normal(13, 0.5),
        'PLT': np.random.normal(250, 40),
        'MPV': np.random.normal(10, 1),
        'NEUT%': np.random.normal(55, 5),
        'LYMPH%': np.random.normal(30, 5),
        'MONO%': np.random.normal(8, 2),
        'EO%': np.random.normal(3, 1),
        'BASO%': np.random.normal(1, 0.5),
        'Needs_Review': "No"
    }

    if normal:
        return sample

    condition = np.random.choice(["anemia", "thrombocytopenia", "leukocytosis", "leukemia", "macrocytosis"])
    
    # Anemia
    if condition == "anemia":
        if np.random.rand() < 0.3:  # 30% severe cases
            sample['HGB'] = np.random.uniform(2.5, 5.5)
        else:
            sample['HGB'] = np.random.uniform(5.5, 9.5)
        sample['HCT'] = np.random.uniform(18, 30)
        sample['RBC'] = np.random.uniform(2.5, 3.8)
        if np.random.rand() < 0.5:
            sample['PLT'] = np.random.uniform(400, 600)  # reactive thrombocytosis
        else:
            sample['PLT'] = np.random.normal(250, 40)
        sample['Needs_Review'] = "Yes"

    # Thrombocytopenia
    elif condition == "thrombocytopenia":
        sample['PLT'] = np.random.uniform(10, 100)
        sample['Needs_Review'] = "Yes"

    # Leukocytosis
    elif condition == "leukocytosis":
        sample['WBC'] = np.random.uniform(25, 60)
        sample['NEUT%'] = np.random.uniform(70, 95)
        sample['Needs_Review'] = "Yes"

    # Leukemia
    elif condition == "leukemia":
        sample['WBC'] = np.random.uniform(60, 150)
        sample['LYMPH%'] = np.random.uniform(50, 90)
        sample['PLT'] = np.random.uniform(20, 100)
        sample['HGB'] = np.random.uniform(7, 11)
        sample['Needs_Review'] = "Yes"
    
    # Macrocytosis
    elif condition == "macrocytosis":
        sample['MCV'] = np.random.uniform(105, 120)
        sample['MCH'] = np.random.uniform(34, 38)
        sample['Needs_Review'] = "Yes"
    
    return sample

def generate_dataset(n_normal=800,n_suspicious=200):
    normal_samples = [generate_sample(normal=True) for _ in range(n_normal)]
    suspicious_samples = [generate_sample(normal=False) for _ in range(n_suspicious)]
    all_samples = normal_samples+suspicious_samples
    np.random.shuffle(all_samples)
    return pd.DataFrame(all_samples)

def save_dataset(df,filepath="data/simulated_cbc_dataset.csv"):
    df.to_csv(filepath, index=False)
    print(f"✅ Dataset saved to {filepath}. Shape: {df.shape}")

if __name__ == "__main__":
    df = generate_dataset(800,200)
    save_dataset(df)