#!/bin/bash
npm run-script build && aws s3 sync build/ s3://ff4fe-tracker.enewey.com
