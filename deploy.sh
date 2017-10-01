#!/usr/bin/env bash

ssh markstarkman.com rm -rf apps/resume-react.markstarkman.com/*

scp out/index.html markstarkman.com:apps/resume-react.markstarkman.com
scp -r out/_next markstarkman.com:apps/resume-react.markstarkman.com
scp -r out/static markstarkman.com:apps/resume-react.markstarkman.com
