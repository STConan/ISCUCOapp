CREATE TABLE IF NOT EXISTS Locale(
    Location_id INTEGER NOT_NULL PRIMARY KEY ,
    Location_Store TEXT
);
INSERT or IGNORE INTO Locale(Location_id, Location_Store) VALUES (1, 'NYC');
INSERT or IGNORE INTO Locale(Location_id, Location_Store) VALUES (2, 'El Paso');
INSERT or IGNORE INTO Locale(Location_id, Location_Store) VALUES (3, 'LA');
INSERT or IGNORE INTO Locale(Location_id, Location_Store) VALUES (4, 'Chicago');
CREATE TABLE IF NOT EXISTS surveytable(
    id AUTO_INCREMENT INTEGER NOT_NULL PRIMARY KEY, 
    Location_Store INTEGER, 
    q1 TEXT, 
    q2 TEXT,
    q3 TEXT,
    q4 TEXT,
    q5 TEXT,
    q6 TEXT,
    q7 TEXT,
    q8 TEXT,
    q9 TEXT,
    q10 TEXT,
    q11 TEXT,
    q12 TEXT,
    q13 TEXT,
    q14 TEXT,
    q15 TEXT,
    q16 TEXT,
    q17 TEXT,
    q18 TEXT,
    q19 TEXT,
    q20 TEXT,
    q21 TEXT,
    q22 TEXT,
    q23 TEXT,
    q24 TEXT,
    q25 TEXT,
    q26 TEXT,
    q27 TEXT,
    q28 TEXT,
    q29 TEXT,
    q30 TEXT,
    q31 TEXT,
    q32 TEXT,
    q33 TEXT,
    q34 TEXT,
    q35 TEXT,
    q36 TEXT,
    q37 TEXT,
    q38 TEXT,
    q39 TEXT,
    q40 TEXT,
    q41 TEXT,
    q42 TEXT,
    q43 TEXT,
    q44 TEXT,
    q45 TEXT,
    q46 TEXT,
    q47 TEXT,
    q48 TEXT,
    q49 TEXT,
    q50 TEXT,
    q51 TEXT,
    q52 TEXT,
    q53 TEXT,
    q54 TEXT,
    q55 TEXT,
    q56 TEXT,
    q57 TEXT,
    q58 TEXT,
    q59 TEXT,
    q60 TEXT,
    q61 TEXT,
    q62 TEXT,
    q63 TEXT,
    q64 TEXT,
    q65 TEXT,
    q66 TEXT,
    q67 TEXT,
    q68 TEXT,
    q69 TEXT,
    q70 TEXT,
    q71 TEXT,
    q72 TEXT,
    q73 TEXT,
    q74 TEXT,
    q75 TEXT,
    q76 TEXT,
    q77 TEXT,
    q78 TEXT,
    FOREIGN KEY(Location_Store) REFERENCES Locale(Location_id)
);
INSERT or IGNORE INTO surveytable(
    id,
    Location_Store,
    q1,
    q2, 
    q3, 
    q4, 
    q5, 
    q6, 
    q7, 
    q8, 
    q9, 
    q10, 
    q11, 
    q12, 
    q13,
    q14, 
    q15, 
    q16, 
    q17, 
    q18, 
    q19, 
    q20, 
    q21, 
    q22, 
    q23, 
    q24, 
    q25, 
    q26, 
    q27, 
    q28, 
    q29, 
    q30, 
    q31, 
    q32, 
    q33, 
    q34, 
    q35, 
    q36, 
    q37, 
    q38, 
    q39, 
    q40, 
    q41, 
    q42, 
    q43, 
    q44, 
    q45, 
    q46, 
    q47, 
    q48, 
    q49, 
    q50, 
    q51, 
    q52, 
    q53, 
    q54, 
    q55, 
    q56, 
    q57, 
    q58, 
    q59, 
    q60, 
    q61, 
    q62, 
    q63, 
    q64, 
    q65, 
    q66, 
    q67, 
    q68, 
    q69, 
    q70, 
    q71, 
    q72, 
    q73, 
    q74, 
    q75, 
    q76, 
    q77,
    q78
    )
    VALUES (1, 2,  'Hispanic', 'Country of Origin', 'Born in US', 'Moved to US @ 13', 'Preferred Language', 'Home Preferred Language', 'Age', 'Gender', '# of People in Household', '# of Children in Household', 'Over 65 in Household', 'Disabled', 'Disabled in Household', 'Annual Income', 'Shop for Food', 'Food Stamps', 'Food from Food Bank', 'Gets food from pantry for', 'Previous question-Specific', 'Car', 'Car Available', 'Public Transportation', 'Car services', 'Carpool', 'Importance of Specific Times', 'Before or After Work', 'After Children Go to School', 'Weekends', 'Weekdays', 'Other Specific Times', 'Importance of Near Location', 'Near Children School', 'Near Work', 'Other Specific Places', 'Departs From', 'Previous Question-Other', 'Importance of Kind of Food', 'Native Food', 'Prep Food or Supplies', 'Food Need', 'Previous Question-Other', 'Internet Use', 'Connection From', 'Previous Question-Other', 'Deviced Used to Connect', 'Alge of Device', 'Owner of Device', 'Second Device', 'Type of Device', 'Age of 2nd Device', 'Owner of 2nd Device', 'Type of Internet Connection', 'Average time online', 'Issues while online', 'Social Media', 'Previous Question-Other', 'Main Device Usage', 'Previous Question-Other', 'Use of Online Info', 'Rank Food for the Community', 'Rank Food for your Family', 'Rank Food you need', 'Rank Charitable food', 'Rank Food supplies', 'Rank Food Stamps', 'Rank It is on the Internet', 'Rank This is the sort of thing that always would trust', 'Rank It has photographs and endorsements from example users', 'Rank It has an endorsement from the city or other government', 'Rank It has an endorsement from a church or temple', 'Rank It has a rating from users (not people I know)', 'Rank I can see that friends have used it', 'Rank It was sent by a friend', 'Rank Internet (social media) link', 'Comfortable with Online Maps', 'Register to Access Info', '2FactAuth', 'Use of 2FactAuth');
