import OpenAI from 'openai'
import dotenv from 'dotenv';
import axios from 'axios';



dotenv.config();


const sample = `Question 1: What is the email of the employee with employeeId "E12345"?

Query:
json
[
  { "$match": { "employeeId": "E12345" } },
  { "$project": { "email": 1, "_id": 0 } }
]

Question 2: How many employees are in the "Engineering" department, and what is their average salary?

Query:
json
[
  { "$match": { "department": "Engineering" } },
  { "$group": { 
      "_id": null, 
      "totalEmployees": { "$sum": 1 }, 
      "averageSalary": { "$avg": "$salary" } 
    } 
  }
]

Question 3: What is the phone number and address of the employee with employeeId "E67890"?

Query:
json
[
  { "$match": { "employeeId": "E67890" } },
  { "$project": { 
      "phone": 1, 
      "address": 1, 
      "_id": 0 
    } 
  }
]

Question 4: List all employees who were hired in the year 2021.

Query:
json
[
  { "$match": { "hireDate": { "$gte": ISODate("2021-01-01T00:00:00Z"), "$lt": ISODate("2022-01-01T00:00:00Z") } } }
]

Question 5: Find the details of employees with status "Active".

Query:
json
[
  { "$match": { "status": "Active" } }
]

Question 6: How many employees have a salary greater than $80,000?

Query:
json
[
  { "$match": { "salary": { "$gt": 80000 } } },
  { "$count": "totalEmployees" }
]

Question 7: What are the maximum and minimum salaries among employees?

Query:
json
[
  { "$group": { 
      "_id": null, 
      "maxSalary": { "$max": "$salary" }, 
      "minSalary": { "$min": "$salary" } 
    } 
  }
]
`


async function translateQuery(query) {




  const messages = [
    {
      role: 'system',
      content: `
                You are a very intelligent AI assistant who is an expert in identifying relevant questions from users and converting them into MongoDB aggregation pipeline queries. Note: You have to just return the query as used in aggregation pipeline nothing else . Don't return any other thing. Please use the below schema to write the MongoDB queries, don't use any other queries.

schema:
The mentioned MongoDB collection talks about employees in a company. The schema for this document represents the structure of the data, describing various properties related to the employee, including personal information, job details, and contact information. Your job is to get MongoDB aggregation pipeline queries based on the user question. Here’s a breakdown of its schema with descriptions for each field:

{
  "_id": ObjectId,
  "employeeId": "string",  // Unique identifier for the employee
  "firstName": "string",
  "lastName": "string",
  "email": "string",
  "phone": "string",
  "position": "string",
  "department": "string",
  "hireDate": "ISODate",  // Date the employee was hired
  "salary": "number",    // Numeric value representing the salary
  "address": {
    "street": "string",
    "city": "string",
    "state": "string",
    "postalCode": "string"
  },
  "status": "string"     // E.g., "Active", "On Leave", "Inactive"
}

sample_question: ${sample}`
    },
    {
      role: 'user',
      content: `input: ${query}`
    }
  ];





  const openai = new OpenAI({
    apiKey: "My Api Key",
    baseURL: "https://api.pawan.krd/v1",
  });

  const response = await openai.chat.completions.create({
    messages: messages,
    model: 'pai-001',
  });










  console.log('OpenAI response:', response?.data?.choices?.[0]?.message?.content?.trim());
  const response2 = JSON.stringify(response?.choices?.[0]?.message?.content?.trim());
  const response3 = response2.replace("json", "");



  //const mongoQuery = JSON.parse(response3);

  //console.log('MongoDB Query:', mongoQuery);

  return response3;
}



export default translateQuery;
