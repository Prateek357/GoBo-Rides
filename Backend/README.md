# User Registration and Login Endpoints

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

## Endpoint: `/users/login`

### Method: POST

### Description

This endpoint allows for the login of an existing user. It requires the user's email and password.

### Request Body

The request body must be a JSON object containing the following fields:

- `email` (string, required): The email address of the user.
- `password` (string, required): The password for the user.

### Example Request

```json
{
    "email": "john.doe@example.com",
    "password": "securepassword123"
}
```

### Response

On successful login, the endpoint will return a JSON object containing the user's details and a token.

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

- `200 OK`: User successfully logged in.
- `400 Bad Request`: Validation error or missing required fields.
- `401 Unauthorized`: Invalid email or password.

### Error Handling

If any of the required fields (`email`, `password`) are missing, the endpoint will return an error message:

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
            "msg": "Password must be at least 6 characters long",
            "param": "password",
            "location": "body"
        }
    ]
}
```

If the email or password is incorrect, the endpoint will return an error message:

```json
{
    "message": "Invalid email or password"
}
```

## Endpoint: `/users/profile`

### Method: GET

### Description

This endpoint retrieves the profile information of the authenticated user.

### Authentication

Requires a valid JWT token in the Authorization header:

```
Authorization: Bearer <jwt_token>
```

### Response

Returns the user's profile information.

### Example Response

```json
{
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

- `200 OK`: Successfully retrieved profile
- `401 Unauthorized`: Invalid or missing authentication token

## Endpoint: `/users/logout`

### Method: POST

### Description

This endpoint logs out the current user by invalidating their authentication token.

### Authentication

Requires a valid JWT token in the Authorization header:

```
Authorization: Bearer <jwt_token>
```

### Response

Returns a success message upon logout.

### Example Response

```json
{
    "message": "Successfully logged out"
}
```

### Status Codes

- `200 OK`: Successfully logged out
- `401 Unauthorized`: Invalid or missing authentication token

# Captain Registration and Login Endpoints

## Endpoint: `/captains/register`

### Method: POST

### Description

This endpoint allows for the registration of a new captain. It requires the captain's first name, last name, email, password, and vehicle details.

### Request Body

The request body must be a JSON object containing the following fields:

- `fullname` (object, required): The full name of the captain.
  - `firstname` (string, required): The first name of the captain.
  - `lastname` (string, required): The last name of the captain.
- `email` (string, required): The email address of the captain.
- `password` (string, required): The password for the captain.
- `vehicle` (object, required): The vehicle details of the captain.
  - `color` (string, required): The color of the vehicle.
  - `plate` (string, required): The plate number of the vehicle.
  - `capacity` (number, required): The capacity of the vehicle.
  - `vehicleType` (string, required): The type of the vehicle (car, motorcycle, auto).

### Example Request

```json
{
    "fullname": {
        "firstname": "Jane",
        "lastname": "Doe"
    },
    "email": "jane.doe@example.com",
    "password": "securepassword123",
    "vehicle": {
        "color": "red",
        "plate": "ABC123",
        "capacity": 4,
        "vehicleType": "car"
    }
}
```

### Response

On successful registration, the endpoint will return a JSON object containing the newly created captain's details and a token.

### Example Response

```json
{
    "token": "jwt_token_here",
    "captain": {
        "fullname": {
            "firstname": "Jane",
            "lastname": "Doe"
        },
        "email": "jane.doe@example.com",
        "vehicle": {
            "color": "red",
            "plate": "ABC123",
            "capacity": 4,
            "vehicleType": "car"
        }
    }
}
```

### Status Codes

- `201 Created`: Captain successfully registered.
- `400 Bad Request`: Validation error or missing required fields.

### Error Handling

If any of the required fields are missing, the endpoint will return an error message:

```json
{
    "error": "All fields are required"
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
        },
        {
            "msg": "Color must be at least 3 characters long",
            "param": "vehicle.color",
            "location": "body"
        },
        {
            "msg": "Plate must be at least 3 characters long",
            "param": "vehicle.plate",
            "location": "body"
        },
        {
            "msg": "Capacity must be at least 1",
            "param": "vehicle.capacity",
            "location": "body"
        },
        {
            "msg": "Invalid Vehicle Type",
            "param": "vehicle.vehicleType",
            "location": "body"
        }
    ]
}
```

## Endpoint: `/captains/login`

### Method: POST

### Description

This endpoint allows for the login of an existing captain. It requires the captain's email and password.

### Request Body

The request body must be a JSON object containing the following fields:

- `email` (string, required): The email address of the captain.
- `password` (string, required): The password for the captain.

### Example Request

```json
{
    "email": "jane.doe@example.com",
    "password": "securepassword123"
}
```

### Response

On successful login, the endpoint will return a JSON object containing the captain's details and a token.

### Example Response

```json
{
    "token": "jwt_token_here",
    "captain": {
        "fullname": {
            "firstname": "Jane",
            "lastname": "Doe"
        },
        "email": "jane.doe@example.com",
        "vehicle": {
            "color": "red",
            "plate": "ABC123",
            "capacity": 4,
            "vehicleType": "car"
        }
    }
}
```

### Status Codes

- `200 OK`: Captain successfully logged in.
- `400 Bad Request`: Validation error or missing required fields.
- `401 Unauthorized`: Invalid email or password.

### Error Handling

If any of the required fields (`email`, `password`) are missing, the endpoint will return an error message:

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
            "msg": "Password must be at least 6 characters long",
            "param": "password",
            "location": "body"
        }
    ]
}
```

If the email or password is incorrect, the endpoint will return an error message:

```json
{
    "message": "Invalid email or password"
}
```

## Endpoint: `/captains/profile`

### Method: GET

### Description

This endpoint retrieves the profile information of the authenticated captain.

### Authentication

Requires a valid JWT token in the Authorization header:

```
Authorization: Bearer <jwt_token>
```

### Response

Returns the captain's profile information.

### Example Response

```json
{
    "captain": {
        "fullname": {
            "firstname": "Jane",
            "lastname": "Doe"
        },
        "email": "jane.doe@example.com",
        "vehicle": {
            "color": "red",
            "plate": "ABC123",
            "capacity": 4,
            "vehicleType": "car"
        }
    }
}
```

### Status Codes

- `200 OK`: Successfully retrieved profile
- `401 Unauthorized`: Invalid or missing authentication token

## Endpoint: `/captains/logout`

### Method: GET

### Description

This endpoint logs out the current captain by invalidating their authentication token.

### Authentication

Requires a valid JWT token in the Authorization header:

```
Authorization: Bearer <jwt_token>
```

### Response

Returns a success message upon logout.

### Example Response

```json
{
    "message": "Successfully logged out"
}
```

### Status Codes

- `200 OK`: Successfully logged out
- `401 Unauthorized`: Invalid or missing authentication token
