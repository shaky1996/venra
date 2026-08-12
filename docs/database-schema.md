# Database Schema

No database schema has been implemented yet. PostgreSQL tables and Flyway migrations will be introduced only when the first persistent feature is selected.

## Planned entity areas

The following entities are placeholders for future domain planning, not a committed schema:

- Company and operating profile
- User and company membership
- Driver
- Truck
- Trailer
- Document and document type
- Expiration or renewal requirement
- Inspection
- Ticket or violation
- Claim
- Insurance recovery
- IFTA record
- Compliance requirement
- FMCSA record or snapshot

## Future design considerations

When implementation begins, the schema should define ownership, lifecycle, audit fields, relationships, and data retention one feature at a time. Sensitive information and uploaded files will require explicit access and storage decisions before they are added.
