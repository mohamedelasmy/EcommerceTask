// Exporting an interface named User, which can be used to define the structure of a user object.
export interface User {
  // A string property representing the unique identifier for the user.
  Id: string;

  // A string property representing the name of the user.
  Name: string;

  // A string property representing the email address of the user.
  Email: string;

  // A string property representing the phone number of the user.
  Phone: string;

  // A string property representing the address of the user.
  Address: string;

  // A Date property representing the registration date of the user.
  RegisterDate: Date;
}
