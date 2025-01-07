# Firebase Security Rule Bug: Nested Field Access

This repository demonstrates a common yet subtle bug in Firebase security rules.  The issue stems from a mismatch between the expected data access and the actual permissions granted by the security rules. Specifically, the rules might allow access to a parent node but deny access to a child node within that parent, leading to unexpected errors.

## Bug Description
The bug involves attempting to access a nested field in the Firebase Realtime Database. While the parent node might be accessible, the specific child node (in this case, the 'city' field) is not accessible due to a poorly configured security rule. This results in an error, often without a clear indication that the problem originates from the security rules.

## Solution
The solution involves adjusting the security rules to grant appropriate read access to the nested 'city' field within the user's profile.  Make sure that your security rules allow read access to the specific nested path you are trying to access.  This requires careful review of the security rules and potentially adding more granular permissions.