# User Registration Endpoint

## Endpoint: `/users/register`

### Method: POST

### Description

This endpoint allows for the registration of a new user. It requires the user's first name, last name, email, and password.

### Request Body

The request body must be a JSON object containing the following fields:

- `firstname` (string, required): The first name of the user.
- `lastname` (string, optional): The last name of the user.
- `email` (string, required): The email address of the user.
- `password` (string, required): The password for the user.

### Example Request

```json
{
    "firstname": "John",
    "lastname": "Doe",
    "email": "john.doe@example.com",
    "password": "securepassword123"
}
```

### Response

On successful registration, the endpoint will return a JSON object containing the newly created user's details and a token.

### Example Response

```json
{
    "token": "jwt_token_here",
    "user": {
        "fullname": {
            "firstname": "John",
            "lastname": "Doe"
        },
        "email": "john.doe@example.com"
    }
}
```

### Status Codes

- `201 Created`: User successfully registered.
- `400 Bad Request`: Validation error or missing required fields.

### Error Handling

If any of the required fields (`firstname`, `email`, `password`) are missing, the endpoint will return an error message:

```json
{
    "error": "All Fields Are Required!"
}
```

If there are validation errors, the endpoint will return an array of error messages:

```json
{
    "errors": [
        {
            "msg": "Invalid Email",
            "param": "email",
            "location": "body"
        },
        {
            "msg": "First name must be at least 3 characters long!!",
            "param": "fullname.firstname",
            "location": "body"
        },
        {
            "msg": "Password must be at least 6 characters long",
            "param": "password",
            "location": "body"
        }
    ]
}
```
