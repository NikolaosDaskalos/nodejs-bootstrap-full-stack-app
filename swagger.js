const m2s = require('mongoose-to-swagger')
const User = require('./models/user.model')
const Product = require('./models/product.model')

exports.options = {
    "definitions": {
        "User": m2s(User),
        "Product": m2s(Product)
    },
    "swagger": "2.0",
    "info": {
        'version': '1.0.0',
        'description': 'Products Project Application API',
        'title': 'Products CRUD API'
    },
    'host': 'localhost:3000',
    'basePath': '/',
    'tags': [
        {
            'name': 'Users',
            'description': "API for users"
        },
        {
            'name': 'Users and Products',
            'description': 'API for users and their products'
        }
    ],
    "schemes": ["htttp"],
    "consumes": ["application/json"],
    "produces": ["application/json"],
    "paths": {
        "api/user/findAll": {
            "get": {
                "tags": ["Users"],
                "summary": "Get all users from system",
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/User"
                        }
                    }
                }
            }
        }
    },
    "api/user/findOne/{username}": {
        "get": {
            "tags": ["Users"],
            "parameters": [
                {

                }],
            "summary": "Get all users from system",
            "responses": {
                "200": {
                    "description": "OK",
                    "schema": {
                        "$ref": "#/definitions/User"
                    }
                }
            }
        }
    },
    "api/user/create": {
        "post": {
            "tags": [
                "Users"
            ],
            "description": "Create new user in app",
            "parameters": [{
                "name": "Create User",
                "in": "body",
                "description": "Users parameters that we will create",
                "schema": {
                    //"$ref": "#/definitions/User"
                    "type": "object",
                    "properties": {
                        "name": { "type": "String" },
                        "password": { "type": "string" },
                        "username": { "type": "String" },
                        "surname": { "type": "String" },
                        "email": { "type": "String" },
                        "address": {
                            "type": "object",
                            "properties": {
                                "area": { "type": "string" },
                                "road": { "type": "string" }
                            }
                        },
                        "phone": {
                            "type": "array",
                            "items": {
                                "type": "object",
                                "properties": {
                                    "type": { "type": "String" },
                                    "number": { "type": "String" }
                                }
                            }
                        }
                    },
                    "required": ["username", "email"]
                }
            }],
            "produces": ["application/json"],
            "responses": {
                "200": {
                    "description": "New user is created",
                    "schema": {
                        "$ref": "#/definitions/User"
                    }
                }
            }
        },
        '/api/user/update': {
            "patch": {
                "tags": [
                    "Users"
                ],
                "description": "Update User in system",
                "parameters": [{
                    "name": "Update User in system",
                    "in": "body",
                    "description": "User that we will update",
                    "schema": {
                        "type": "0bject",
                        "properties": {
                            "username": { "type": "string" },
                            "name": { "type": "string" },
                            "email": { "type": "string" },
                            "surname": { "type": "string" },
                            "address": {
                                "type": "object",
                                "propetries": {
                                    "area": { "type": "string" },
                                    "road": { "type": "string" }
                                }
                            },
                            "phone": {
                                "type": "array",
                                "items": {
                                    "type": "object",
                                    "properties": {
                                        "type": { "type": "string" },
                                        "number": { "type": "string" }
                                    }
                                }
                            }

                        },

                        "required": ["username", "email"]
                    }

                }],
                "produces": ["application/json"],
                "responses": {
                    "200": {
                        "description": "Updated user"
                    }
                }
            }
        },
        '/api/user/delete/{username}': {
            "delete": {
                "tags": [
                    "Users"
                ],
                "description": "Deletes user from the system",
                "parameters": [{
                    "name": "username",
                    "in": "path",
                    "description": "Username that we will delete"
                }],
                "resposnes": {
                    "200": {
                        "description": "Delete user"
                    }
                }
            }
        }


    }

}



