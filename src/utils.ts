import {
  Gender,
  NewPatientInfo,
  NewEntryInfo,
  HealthCheckEntry,
  OccupationalHealthcareEntry,
  HospitalEntry,
} from './types';

// helper, type guard with type predicate
const isString = (text: unknown): text is string => {
  return typeof text === 'string' || text instanceof String;
};

const parseName = (name: unknown): string => {
  if (!name || !isString(name)) {
    throw new Error('Incorrect or missing name');
  }
  return name;
};

// helper
const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date));
};

const parseDateOfBirth = (date: unknown): string => {
  if (!date || !isString(date) || !isDate(date)) {
    throw new Error('Incorrect or missing date: ' + date);
  }
  return date;
};

const parseSSN = (ssn: unknown): string => {
  if (!ssn || !isString(ssn)) {
    throw new Error('Incorrect or missing SSN');
  }
  return ssn;
};

const parseOccupation = (occupation: unknown): string => {
  if (!occupation || !isString(occupation)) {
    throw new Error('Incorrect or missing occupation');
  }
  return occupation;
};

const isGender = (param: string): param is Gender => {
  return Object.values(Gender)
    .map((v) => v.toString())
    .includes(param);
};

const parseGender = (gender: unknown): Gender => {
  if (!gender || !isString(gender) || !isGender(gender)) {
    throw new Error('Incorrect or misssing gender: ' + gender);
  }
  return gender;
};

export function toNewPatient(object: unknown): NewPatientInfo {
  if (!object || typeof object !== 'object') {
    throw new Error('Incorrect or missing data');
  }

  if (
    'name' in object &&
    'dateOfBirth' in object &&
    'ssn' in object &&
    'gender' in object &&
    'occupation' in object
  ) {
    const newPatientInfo: NewPatientInfo = {
      name: parseName(object.name),
      dateOfBirth: parseDateOfBirth(object.dateOfBirth),
      ssn: parseSSN(object.ssn),
      gender: parseGender(object.gender),
      occupation: parseOccupation(object.occupation),
    };

    return newPatientInfo;
  }

  throw new Error('Incorrect data: some fields are missing');
}

// supporting parse functions would go here...

export function toNewPatientEntry(object: unknown): NewEntryInfo | void {
  if (!object || typeof object !== 'object') {
    throw new Error('Incorrect or missing data');
  }

  if ('type' in object) {
    switch (object.type) {
      case 'Hospital':
        if (
          'description' in object &&
          'date' in object &&
          'specialist' in object
        ) {
          return object as HospitalEntry;
        }
        throw new Error('Incorrect data: some required fields are missing');

      case 'OccupationalHealthcare':
        if (
          'description' in object &&
          'date' in object &&
          'specialist' in object &&
          'employerName' in object
        ) {
          return object as OccupationalHealthcareEntry;
        }
        throw new Error('Incorrect data: some required fields are missing');

      case 'HealthCheck':
        if (
          'description' in object &&
          'date' in object &&
          'specialist' in object &&
          'healthCheckRating' in object
        ) {
          return object as HealthCheckEntry;
        }
        throw new Error('Incorrect data: some required fields are missing');

      default:
        throw new Error('Incorrect data: entry type is not defined');
    }
  }
}
