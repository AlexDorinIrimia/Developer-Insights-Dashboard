import pandas as pd

def analyze_data(df, country=None, experience=None):

    df = df.copy()

    # -----------------------------
    # CLEAN BASIC DATA
    # -----------------------------
    df = df.dropna(subset=["Country"])

    # Convert numeric safely
    if "ConvertedCompYearly" in df.columns:
        df["ConvertedCompYearly"] = pd.to_numeric(df["ConvertedCompYearly"], errors="coerce")

    # -----------------------------
    # FILTERS (SAFE)
    # -----------------------------
    if country and country != "All":
        df = df[df["Country"] == country]

    if experience and experience != "All":
        df = df[df["YearsCode"] == experience]

    result = {}

    # -----------------------------
    # LANGUAGES (SAFE SPLIT)
    # -----------------------------
    if "LanguageHaveWorkedWith" in df.columns:
        langs = df["LanguageHaveWorkedWith"].dropna().astype(str).str.split(";")
        result["top_languages"] = langs.explode().value_counts().head(10).to_dict()

    # -----------------------------
    # DEV ROLES
    # -----------------------------
    if "DevType" in df.columns:
        roles = df["DevType"].dropna().astype(str).str.split(";")
        result["top_roles"] = roles.explode().value_counts().head(10).to_dict()

    # -----------------------------
    # COUNTRIES
    # -----------------------------
    result["countries"] = df["Country"].value_counts().head(10).to_dict()

    # -----------------------------
    # REMOTE WORK
    # -----------------------------
    if "RemoteWork" in df.columns:
        result["remote_work"] = df["RemoteWork"].value_counts().to_dict()

    # -----------------------------
    # SALARY (SAFE)
    # -----------------------------
    if "ConvertedCompYearly" in df.columns:
        salaries = df["ConvertedCompYearly"].dropna()
        if len(salaries) > 0:
            result["avg_salary"] = int(salaries.mean())
        else:
            result["avg_salary"] = 0

    # -----------------------------
    # JOB SATISFACTION
    # -----------------------------
    if "JobSat" in df.columns:
        result["job_satisfaction"] = df["JobSat"].value_counts().to_dict()

    # -----------------------------
    # FILTER OPTIONS (SAFE UNIQUE)
    # -----------------------------
    result["filters"] = {
        "countries": ["All"] + sorted(df["Country"].dropna().unique().tolist())[:30],
        "experience": ["All"] + sorted(df["YearsCode"].dropna().unique().tolist())
    }

    return result