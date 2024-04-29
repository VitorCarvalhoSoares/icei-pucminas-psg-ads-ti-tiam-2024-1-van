CREATE TABLE Motorista (
    ID_Motorista INT PRIMARY KEY,
    Nome VARCHAR(100)
);

CREATE TABLE Estudante (
    ID_Estudante INT PRIMARY KEY,
    Nome VARCHAR(100),
    Status VARCHAR(50)
);

CREATE TABLE Van (
    ID_Van INT PRIMARY KEY,
    Localizacao VARCHAR(100),
    ID_Motorista INT,
    FOREIGN KEY (ID_Motorista) REFERENCES Motorista(ID_Motorista)
);

CREATE TABLE Motorista_Dirige_Van (
    ID_Motorista INT,
    ID_Van INT,
    Data DATE,
    PRIMARY KEY (ID_Motorista, ID_Van),
    FOREIGN KEY (ID_Motorista) REFERENCES Motorista(ID_Motorista),
    FOREIGN KEY (ID_Van) REFERENCES Van(ID_Van)
);

CREATE TABLE Estudante_Usa_Van (
    ID_Estudante INT,
    ID_Van INT,
    Data DATE,
    PRIMARY KEY (ID_Estudante, ID_Van),
    FOREIGN KEY (ID_Estudante) REFERENCES Estudante(ID_Estudante),
    FOREIGN KEY (ID_Van) REFERENCES Van(ID_Van)
);