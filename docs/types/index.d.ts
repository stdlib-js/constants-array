/*
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

// TypeScript Version: 4.1

/* tslint:disable:max-line-length */
/* tslint:disable:max-file-line-count */

import MAX_ARRAY_LENGTH = require( '@stdlib/constants-array-max-array-length' );
import MAX_TYPED_ARRAY_LENGTH = require( '@stdlib/constants-array-max-typed-array-length' );

/**
* Interface describing the `array` namespace.
*/
interface Namespace {
	/**
	* Maximum length of a generic array.
	*
	* @example
	* var len = ns.MAX_ARRAY_LENGTH;
	* // returns 4294967295
	*/
	MAX_ARRAY_LENGTH: typeof MAX_ARRAY_LENGTH;

	/**
	* Maximum length of a typed array.
	*
	* @example
	* var len = ns.MAX_TYPED_ARRAY_LENGTH;
	* // returns 9007199254740991
	*/
	MAX_TYPED_ARRAY_LENGTH: typeof MAX_TYPED_ARRAY_LENGTH;
}

/**
* Array constants.
*/
declare var ns: Namespace;


// EXPORTS //

export = ns;