#!/usr/bin/env node

'use strict';

import a from "@downzoo/a"
import cli from "../lib";

// eslint-disable-next-line no-unused-expressions
cli().parse(process.argv.slice(2));

console.log('a => ', a())
