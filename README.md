Back-End-Architect

## Andrew Benedict

### Live Backend URL: https://dbase.wtf

### **Register a user**

_method url_: `/api/user/register`

_http method_: **[POST]**

#### Headers

| name           | type   | required | description              |
| -------------- | ------ | -------- | ------------------------ |
| `Content-Type` | String | Yes      | Must be application/json |

#### Body

| name       | type   | required | description    |
| ---------- | ------ | -------- | -------------- |
| `username` | String | Yes      | Must be unique |
| `password` | String | Yes      |                |
| `email`    | String | No       | Must be unique |

#### Example

```
  {
    "username": "frodo",
    "password": "pass",
    "email": "f_bag@gmail.com",
  }
```

#### Response

##### 201 (created)

###### Example Response

```
  [
    2
  ]
```

##### 400 (Bad Request)

```
  {
    "errorMessage": "missing ${itemMissing}"
  }
```

### **Login a user**

_method url_: `/api/user/login`

_http method_: **[POST]**

#### Headers

| name           | type   | required | description              |
| -------------- | ------ | -------- | ------------------------ |
| `Content-Type` | String | Yes      | Must be application/json |

#### Body

| name       | type   | required | description             |
| ---------- | ------ | -------- | ----------------------- |
| `username` | String | Yes      | must be registered user |
| `password` | String | Yes      |                         |

#### Example

```
  {
    "username": "frodo",
    "password": "pass",
  }
```

#### Response

##### 200 (ok)

> no issues logging in

###### Example response

```
{
    "id": 2,
    "username": "frodo",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNTUyMzQ1ODQxLCJleHAiOjE1ODM5MDM0NDF9.3vQ4kTKKJBHGMbOVTLGSKP7HKNd3fR7aBCwu45T4JCI"
}
```

##### 400 (Bad Request)

```
  {
    errorMessage: 'missing ${itemMissing}'
  }
```

##### 401 (Unauthorized)

```
{
  errorMessage: "passwords don't match"
}
```

### **get a single event**

_method url_: `/api/gundata/:id`

_http method_: **[GET]**

#### Response

##### 200 (ok)

###### Example response

```
{
    "incident_id": 478855,
    "date": "2013-01-01",
    "state": "Ohio",
    "city_or_county": "Lorain",
    "address": "1776 East 28th Street",
    "n_killed": 1,
    "n_injured": 3,
    "incident_url": "http://www.gunviolencearchive.org/incident/478855",
    "source_url": "http://chronicle.northcoastnow.com/2013/02/14/2-men-indicted-in-new-years-day-lorain-murder/",
    "incident_url_fields_missing": "False",
    "congressional_district": 9,
    "gun_stolen": "0::Unknown||1::Unknown",
    "gun_type": "0::Unknown||1::Unknown",
    "incident_characteristics": "Shot - Wounded/Injured||Shot - Dead (murder, accidental, suicide)||Shots Fired - No Injuries||Bar/club incident - in or around establishment",
    "latitude": 41.4455,
    "location_description": "Cotton Club",
    "longitude": -82.1377,
    "n_guns_involved": "2",
    "notes": "",
    "participant_age": "0::25||1::31||2::33||3::34||4::33",
    "participant_age_group": "0::Adult 18+||1::Adult 18+||2::Adult 18+||3::Adult 18+||4::Adult 18+",
    "participant_gender": "0::Male||1::Male||2::Male||3::Male||4::Male",
    "participant_name": "0::Damien Bell||1::Desmen Noble||2::Herman Seagers||3::Ladd Tate Sr||4::Tallis Moore",
    "participant_relationship": "",
    "participant_status": "0::Injured, Unharmed, Arrested||1::Unharmed, Arrested||2::Killed||3::Injured||4::Injured",
    "participant_type": "0::Subject-Suspect||1::Subject-Suspect||2::Victim||3::Victim||4::Victim",
    "sources": "http://www.morningjournal.com/general-news/20130222/lorain-man-pleads-innocent-to-new-years-murder||http://chronicle.northcoastnow.com/2013/02/14/2-men-indicted-in-new-years-day-lorain-murder/",
    "state_house_district": "56",
    "state_senate_district": "13"
}
```
