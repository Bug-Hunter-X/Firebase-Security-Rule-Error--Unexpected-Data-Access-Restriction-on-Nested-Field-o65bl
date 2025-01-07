To fix this, modify the Firebase security rules to explicitly grant read access to the `city` field.  The following rule example demonstrates how to allow access to the `city` field under the user's profile:

```javascript
"rules": {
  "users": {
    "$uid": {
      "profile": {
        "address": {
          "city": {
            '.read': true 
          }
        }
      }
    }
  }
}
```
This updated rule ensures that authenticated users have read access to the `city` field within their profile. Remember to deploy these updated security rules to your Firebase project for the changes to take effect.  If you need more granular control, use additional rules and conditions to specify who can access this data.