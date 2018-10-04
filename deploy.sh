#!/bin/bash
npm run-script build && \
    aws s3 sync build/ s3://ff4fe-tracker.enewey.com && \
    aws cloudfront create-invalidation --distribution-id E2WZK668UD8B4A --paths "/*"
