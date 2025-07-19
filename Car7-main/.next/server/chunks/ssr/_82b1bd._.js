module.exports = {

"[project]/node_modules/@google/generative-ai/dist/index.mjs [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/**
 * Contains the list of OpenAPI data types
 * as defined by https://swagger.io/docs/specification/data-models/data-types/
 * @public
 */ __turbopack_esm__({
    "BlockReason": (()=>BlockReason),
    "ChatSession": (()=>ChatSession),
    "DynamicRetrievalMode": (()=>DynamicRetrievalMode),
    "ExecutableCodeLanguage": (()=>ExecutableCodeLanguage),
    "FinishReason": (()=>FinishReason),
    "FunctionCallingMode": (()=>FunctionCallingMode),
    "GenerativeModel": (()=>GenerativeModel),
    "GoogleGenerativeAI": (()=>GoogleGenerativeAI),
    "GoogleGenerativeAIError": (()=>GoogleGenerativeAIError),
    "GoogleGenerativeAIFetchError": (()=>GoogleGenerativeAIFetchError),
    "GoogleGenerativeAIRequestInputError": (()=>GoogleGenerativeAIRequestInputError),
    "GoogleGenerativeAIResponseError": (()=>GoogleGenerativeAIResponseError),
    "HarmBlockThreshold": (()=>HarmBlockThreshold),
    "HarmCategory": (()=>HarmCategory),
    "HarmProbability": (()=>HarmProbability),
    "Outcome": (()=>Outcome),
    "POSSIBLE_ROLES": (()=>POSSIBLE_ROLES),
    "SchemaType": (()=>SchemaType),
    "TaskType": (()=>TaskType)
});
var SchemaType;
(function(SchemaType) {
    /** String type. */ SchemaType["STRING"] = "string";
    /** Number type. */ SchemaType["NUMBER"] = "number";
    /** Integer type. */ SchemaType["INTEGER"] = "integer";
    /** Boolean type. */ SchemaType["BOOLEAN"] = "boolean";
    /** Array type. */ SchemaType["ARRAY"] = "array";
    /** Object type. */ SchemaType["OBJECT"] = "object";
})(SchemaType || (SchemaType = {}));
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * @public
 */ var ExecutableCodeLanguage;
(function(ExecutableCodeLanguage) {
    ExecutableCodeLanguage["LANGUAGE_UNSPECIFIED"] = "language_unspecified";
    ExecutableCodeLanguage["PYTHON"] = "python";
})(ExecutableCodeLanguage || (ExecutableCodeLanguage = {}));
/**
 * Possible outcomes of code execution.
 * @public
 */ var Outcome;
(function(Outcome) {
    /**
     * Unspecified status. This value should not be used.
     */ Outcome["OUTCOME_UNSPECIFIED"] = "outcome_unspecified";
    /**
     * Code execution completed successfully.
     */ Outcome["OUTCOME_OK"] = "outcome_ok";
    /**
     * Code execution finished but with a failure. `stderr` should contain the
     * reason.
     */ Outcome["OUTCOME_FAILED"] = "outcome_failed";
    /**
     * Code execution ran for too long, and was cancelled. There may or may not
     * be a partial output present.
     */ Outcome["OUTCOME_DEADLINE_EXCEEDED"] = "outcome_deadline_exceeded";
})(Outcome || (Outcome = {}));
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Possible roles.
 * @public
 */ const POSSIBLE_ROLES = [
    "user",
    "model",
    "function",
    "system"
];
/**
 * Harm categories that would cause prompts or candidates to be blocked.
 * @public
 */ var HarmCategory;
(function(HarmCategory) {
    HarmCategory["HARM_CATEGORY_UNSPECIFIED"] = "HARM_CATEGORY_UNSPECIFIED";
    HarmCategory["HARM_CATEGORY_HATE_SPEECH"] = "HARM_CATEGORY_HATE_SPEECH";
    HarmCategory["HARM_CATEGORY_SEXUALLY_EXPLICIT"] = "HARM_CATEGORY_SEXUALLY_EXPLICIT";
    HarmCategory["HARM_CATEGORY_HARASSMENT"] = "HARM_CATEGORY_HARASSMENT";
    HarmCategory["HARM_CATEGORY_DANGEROUS_CONTENT"] = "HARM_CATEGORY_DANGEROUS_CONTENT";
})(HarmCategory || (HarmCategory = {}));
/**
 * Threshold above which a prompt or candidate will be blocked.
 * @public
 */ var HarmBlockThreshold;
(function(HarmBlockThreshold) {
    // Threshold is unspecified.
    HarmBlockThreshold["HARM_BLOCK_THRESHOLD_UNSPECIFIED"] = "HARM_BLOCK_THRESHOLD_UNSPECIFIED";
    // Content with NEGLIGIBLE will be allowed.
    HarmBlockThreshold["BLOCK_LOW_AND_ABOVE"] = "BLOCK_LOW_AND_ABOVE";
    // Content with NEGLIGIBLE and LOW will be allowed.
    HarmBlockThreshold["BLOCK_MEDIUM_AND_ABOVE"] = "BLOCK_MEDIUM_AND_ABOVE";
    // Content with NEGLIGIBLE, LOW, and MEDIUM will be allowed.
    HarmBlockThreshold["BLOCK_ONLY_HIGH"] = "BLOCK_ONLY_HIGH";
    // All content will be allowed.
    HarmBlockThreshold["BLOCK_NONE"] = "BLOCK_NONE";
})(HarmBlockThreshold || (HarmBlockThreshold = {}));
/**
 * Probability that a prompt or candidate matches a harm category.
 * @public
 */ var HarmProbability;
(function(HarmProbability) {
    // Probability is unspecified.
    HarmProbability["HARM_PROBABILITY_UNSPECIFIED"] = "HARM_PROBABILITY_UNSPECIFIED";
    // Content has a negligible chance of being unsafe.
    HarmProbability["NEGLIGIBLE"] = "NEGLIGIBLE";
    // Content has a low chance of being unsafe.
    HarmProbability["LOW"] = "LOW";
    // Content has a medium chance of being unsafe.
    HarmProbability["MEDIUM"] = "MEDIUM";
    // Content has a high chance of being unsafe.
    HarmProbability["HIGH"] = "HIGH";
})(HarmProbability || (HarmProbability = {}));
/**
 * Reason that a prompt was blocked.
 * @public
 */ var BlockReason;
(function(BlockReason) {
    // A blocked reason was not specified.
    BlockReason["BLOCKED_REASON_UNSPECIFIED"] = "BLOCKED_REASON_UNSPECIFIED";
    // Content was blocked by safety settings.
    BlockReason["SAFETY"] = "SAFETY";
    // Content was blocked, but the reason is uncategorized.
    BlockReason["OTHER"] = "OTHER";
})(BlockReason || (BlockReason = {}));
/**
 * Reason that a candidate finished.
 * @public
 */ var FinishReason;
(function(FinishReason) {
    // Default value. This value is unused.
    FinishReason["FINISH_REASON_UNSPECIFIED"] = "FINISH_REASON_UNSPECIFIED";
    // Natural stop point of the model or provided stop sequence.
    FinishReason["STOP"] = "STOP";
    // The maximum number of tokens as specified in the request was reached.
    FinishReason["MAX_TOKENS"] = "MAX_TOKENS";
    // The candidate content was flagged for safety reasons.
    FinishReason["SAFETY"] = "SAFETY";
    // The candidate content was flagged for recitation reasons.
    FinishReason["RECITATION"] = "RECITATION";
    // The candidate content was flagged for using an unsupported language.
    FinishReason["LANGUAGE"] = "LANGUAGE";
    // Token generation stopped because the content contains forbidden terms.
    FinishReason["BLOCKLIST"] = "BLOCKLIST";
    // Token generation stopped for potentially containing prohibited content.
    FinishReason["PROHIBITED_CONTENT"] = "PROHIBITED_CONTENT";
    // Token generation stopped because the content potentially contains Sensitive Personally Identifiable Information (SPII).
    FinishReason["SPII"] = "SPII";
    // The function call generated by the model is invalid.
    FinishReason["MALFORMED_FUNCTION_CALL"] = "MALFORMED_FUNCTION_CALL";
    // Unknown reason.
    FinishReason["OTHER"] = "OTHER";
})(FinishReason || (FinishReason = {}));
/**
 * Task type for embedding content.
 * @public
 */ var TaskType;
(function(TaskType) {
    TaskType["TASK_TYPE_UNSPECIFIED"] = "TASK_TYPE_UNSPECIFIED";
    TaskType["RETRIEVAL_QUERY"] = "RETRIEVAL_QUERY";
    TaskType["RETRIEVAL_DOCUMENT"] = "RETRIEVAL_DOCUMENT";
    TaskType["SEMANTIC_SIMILARITY"] = "SEMANTIC_SIMILARITY";
    TaskType["CLASSIFICATION"] = "CLASSIFICATION";
    TaskType["CLUSTERING"] = "CLUSTERING";
})(TaskType || (TaskType = {}));
/**
 * @public
 */ var FunctionCallingMode;
(function(FunctionCallingMode) {
    // Unspecified function calling mode. This value should not be used.
    FunctionCallingMode["MODE_UNSPECIFIED"] = "MODE_UNSPECIFIED";
    // Default model behavior, model decides to predict either a function call
    // or a natural language repspose.
    FunctionCallingMode["AUTO"] = "AUTO";
    // Model is constrained to always predicting a function call only.
    // If "allowed_function_names" are set, the predicted function call will be
    // limited to any one of "allowed_function_names", else the predicted
    // function call will be any one of the provided "function_declarations".
    FunctionCallingMode["ANY"] = "ANY";
    // Model will not predict any function call. Model behavior is same as when
    // not passing any function declarations.
    FunctionCallingMode["NONE"] = "NONE";
})(FunctionCallingMode || (FunctionCallingMode = {}));
/**
 * The mode of the predictor to be used in dynamic retrieval.
 * @public
 */ var DynamicRetrievalMode;
(function(DynamicRetrievalMode) {
    // Unspecified function calling mode. This value should not be used.
    DynamicRetrievalMode["MODE_UNSPECIFIED"] = "MODE_UNSPECIFIED";
    // Run retrieval only when system decides it is necessary.
    DynamicRetrievalMode["MODE_DYNAMIC"] = "MODE_DYNAMIC";
})(DynamicRetrievalMode || (DynamicRetrievalMode = {}));
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Basic error type for this SDK.
 * @public
 */ class GoogleGenerativeAIError extends Error {
    constructor(message){
        super(`[GoogleGenerativeAI Error]: ${message}`);
    }
}
/**
 * Errors in the contents of a response from the model. This includes parsing
 * errors, or responses including a safety block reason.
 * @public
 */ class GoogleGenerativeAIResponseError extends GoogleGenerativeAIError {
    constructor(message, response){
        super(message);
        this.response = response;
    }
}
/**
 * Error class covering HTTP errors when calling the server. Includes HTTP
 * status, statusText, and optional details, if provided in the server response.
 * @public
 */ class GoogleGenerativeAIFetchError extends GoogleGenerativeAIError {
    constructor(message, status, statusText, errorDetails){
        super(message);
        this.status = status;
        this.statusText = statusText;
        this.errorDetails = errorDetails;
    }
}
/**
 * Errors in the contents of a request originating from user input.
 * @public
 */ class GoogleGenerativeAIRequestInputError extends GoogleGenerativeAIError {
}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const DEFAULT_BASE_URL = "https://generativelanguage.googleapis.com";
const DEFAULT_API_VERSION = "v1beta";
/**
 * We can't `require` package.json if this runs on web. We will use rollup to
 * swap in the version number here at build time.
 */ const PACKAGE_VERSION = "0.22.0";
const PACKAGE_LOG_HEADER = "genai-js";
var Task;
(function(Task) {
    Task["GENERATE_CONTENT"] = "generateContent";
    Task["STREAM_GENERATE_CONTENT"] = "streamGenerateContent";
    Task["COUNT_TOKENS"] = "countTokens";
    Task["EMBED_CONTENT"] = "embedContent";
    Task["BATCH_EMBED_CONTENTS"] = "batchEmbedContents";
})(Task || (Task = {}));
class RequestUrl {
    constructor(model, task, apiKey, stream, requestOptions){
        this.model = model;
        this.task = task;
        this.apiKey = apiKey;
        this.stream = stream;
        this.requestOptions = requestOptions;
    }
    toString() {
        var _a, _b;
        const apiVersion = ((_a = this.requestOptions) === null || _a === void 0 ? void 0 : _a.apiVersion) || DEFAULT_API_VERSION;
        const baseUrl = ((_b = this.requestOptions) === null || _b === void 0 ? void 0 : _b.baseUrl) || DEFAULT_BASE_URL;
        let url = `${baseUrl}/${apiVersion}/${this.model}:${this.task}`;
        if (this.stream) {
            url += "?alt=sse";
        }
        return url;
    }
}
/**
 * Simple, but may become more complex if we add more versions to log.
 */ function getClientHeaders(requestOptions) {
    const clientHeaders = [];
    if (requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.apiClient) {
        clientHeaders.push(requestOptions.apiClient);
    }
    clientHeaders.push(`${PACKAGE_LOG_HEADER}/${PACKAGE_VERSION}`);
    return clientHeaders.join(" ");
}
async function getHeaders(url) {
    var _a;
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("x-goog-api-client", getClientHeaders(url.requestOptions));
    headers.append("x-goog-api-key", url.apiKey);
    let customHeaders = (_a = url.requestOptions) === null || _a === void 0 ? void 0 : _a.customHeaders;
    if (customHeaders) {
        if (!(customHeaders instanceof Headers)) {
            try {
                customHeaders = new Headers(customHeaders);
            } catch (e) {
                throw new GoogleGenerativeAIRequestInputError(`unable to convert customHeaders value ${JSON.stringify(customHeaders)} to Headers: ${e.message}`);
            }
        }
        for (const [headerName, headerValue] of customHeaders.entries()){
            if (headerName === "x-goog-api-key") {
                throw new GoogleGenerativeAIRequestInputError(`Cannot set reserved header name ${headerName}`);
            } else if (headerName === "x-goog-api-client") {
                throw new GoogleGenerativeAIRequestInputError(`Header name ${headerName} can only be set using the apiClient field`);
            }
            headers.append(headerName, headerValue);
        }
    }
    return headers;
}
async function constructModelRequest(model, task, apiKey, stream, body, requestOptions) {
    const url = new RequestUrl(model, task, apiKey, stream, requestOptions);
    return {
        url: url.toString(),
        fetchOptions: Object.assign(Object.assign({}, buildFetchOptions(requestOptions)), {
            method: "POST",
            headers: await getHeaders(url),
            body
        })
    };
}
async function makeModelRequest(model, task, apiKey, stream, body, requestOptions = {}, // Allows this to be stubbed for tests
fetchFn = fetch) {
    const { url, fetchOptions } = await constructModelRequest(model, task, apiKey, stream, body, requestOptions);
    return makeRequest(url, fetchOptions, fetchFn);
}
async function makeRequest(url, fetchOptions, fetchFn = fetch) {
    let response;
    try {
        response = await fetchFn(url, fetchOptions);
    } catch (e) {
        handleResponseError(e, url);
    }
    if (!response.ok) {
        await handleResponseNotOk(response, url);
    }
    return response;
}
function handleResponseError(e, url) {
    let err = e;
    if (!(e instanceof GoogleGenerativeAIFetchError || e instanceof GoogleGenerativeAIRequestInputError)) {
        err = new GoogleGenerativeAIError(`Error fetching from ${url.toString()}: ${e.message}`);
        err.stack = e.stack;
    }
    throw err;
}
async function handleResponseNotOk(response, url) {
    let message = "";
    let errorDetails;
    try {
        const json = await response.json();
        message = json.error.message;
        if (json.error.details) {
            message += ` ${JSON.stringify(json.error.details)}`;
            errorDetails = json.error.details;
        }
    } catch (e) {
    // ignored
    }
    throw new GoogleGenerativeAIFetchError(`Error fetching from ${url.toString()}: [${response.status} ${response.statusText}] ${message}`, response.status, response.statusText, errorDetails);
}
/**
 * Generates the request options to be passed to the fetch API.
 * @param requestOptions - The user-defined request options.
 * @returns The generated request options.
 */ function buildFetchOptions(requestOptions) {
    const fetchOptions = {};
    if ((requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.signal) !== undefined || (requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.timeout) >= 0) {
        const controller = new AbortController();
        if ((requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.timeout) >= 0) {
            setTimeout(()=>controller.abort(), requestOptions.timeout);
        }
        if (requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.signal) {
            requestOptions.signal.addEventListener("abort", ()=>{
                controller.abort();
            });
        }
        fetchOptions.signal = controller.signal;
    }
    return fetchOptions;
}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Adds convenience helper methods to a response object, including stream
 * chunks (as long as each chunk is a complete GenerateContentResponse JSON).
 */ function addHelpers(response) {
    response.text = ()=>{
        if (response.candidates && response.candidates.length > 0) {
            if (response.candidates.length > 1) {
                console.warn(`This response had ${response.candidates.length} ` + `candidates. Returning text from the first candidate only. ` + `Access response.candidates directly to use the other candidates.`);
            }
            if (hadBadFinishReason(response.candidates[0])) {
                throw new GoogleGenerativeAIResponseError(`${formatBlockErrorMessage(response)}`, response);
            }
            return getText(response);
        } else if (response.promptFeedback) {
            throw new GoogleGenerativeAIResponseError(`Text not available. ${formatBlockErrorMessage(response)}`, response);
        }
        return "";
    };
    /**
     * TODO: remove at next major version
     */ response.functionCall = ()=>{
        if (response.candidates && response.candidates.length > 0) {
            if (response.candidates.length > 1) {
                console.warn(`This response had ${response.candidates.length} ` + `candidates. Returning function calls from the first candidate only. ` + `Access response.candidates directly to use the other candidates.`);
            }
            if (hadBadFinishReason(response.candidates[0])) {
                throw new GoogleGenerativeAIResponseError(`${formatBlockErrorMessage(response)}`, response);
            }
            console.warn(`response.functionCall() is deprecated. ` + `Use response.functionCalls() instead.`);
            return getFunctionCalls(response)[0];
        } else if (response.promptFeedback) {
            throw new GoogleGenerativeAIResponseError(`Function call not available. ${formatBlockErrorMessage(response)}`, response);
        }
        return undefined;
    };
    response.functionCalls = ()=>{
        if (response.candidates && response.candidates.length > 0) {
            if (response.candidates.length > 1) {
                console.warn(`This response had ${response.candidates.length} ` + `candidates. Returning function calls from the first candidate only. ` + `Access response.candidates directly to use the other candidates.`);
            }
            if (hadBadFinishReason(response.candidates[0])) {
                throw new GoogleGenerativeAIResponseError(`${formatBlockErrorMessage(response)}`, response);
            }
            return getFunctionCalls(response);
        } else if (response.promptFeedback) {
            throw new GoogleGenerativeAIResponseError(`Function call not available. ${formatBlockErrorMessage(response)}`, response);
        }
        return undefined;
    };
    return response;
}
/**
 * Returns all text found in all parts of first candidate.
 */ function getText(response) {
    var _a, _b, _c, _d;
    const textStrings = [];
    if ((_b = (_a = response.candidates) === null || _a === void 0 ? void 0 : _a[0].content) === null || _b === void 0 ? void 0 : _b.parts) {
        for (const part of (_d = (_c = response.candidates) === null || _c === void 0 ? void 0 : _c[0].content) === null || _d === void 0 ? void 0 : _d.parts){
            if (part.text) {
                textStrings.push(part.text);
            }
            if (part.executableCode) {
                textStrings.push("\n```" + part.executableCode.language + "\n" + part.executableCode.code + "\n```\n");
            }
            if (part.codeExecutionResult) {
                textStrings.push("\n```\n" + part.codeExecutionResult.output + "\n```\n");
            }
        }
    }
    if (textStrings.length > 0) {
        return textStrings.join("");
    } else {
        return "";
    }
}
/**
 * Returns functionCall of first candidate.
 */ function getFunctionCalls(response) {
    var _a, _b, _c, _d;
    const functionCalls = [];
    if ((_b = (_a = response.candidates) === null || _a === void 0 ? void 0 : _a[0].content) === null || _b === void 0 ? void 0 : _b.parts) {
        for (const part of (_d = (_c = response.candidates) === null || _c === void 0 ? void 0 : _c[0].content) === null || _d === void 0 ? void 0 : _d.parts){
            if (part.functionCall) {
                functionCalls.push(part.functionCall);
            }
        }
    }
    if (functionCalls.length > 0) {
        return functionCalls;
    } else {
        return undefined;
    }
}
const badFinishReasons = [
    FinishReason.RECITATION,
    FinishReason.SAFETY,
    FinishReason.LANGUAGE
];
function hadBadFinishReason(candidate) {
    return !!candidate.finishReason && badFinishReasons.includes(candidate.finishReason);
}
function formatBlockErrorMessage(response) {
    var _a, _b, _c;
    let message = "";
    if ((!response.candidates || response.candidates.length === 0) && response.promptFeedback) {
        message += "Response was blocked";
        if ((_a = response.promptFeedback) === null || _a === void 0 ? void 0 : _a.blockReason) {
            message += ` due to ${response.promptFeedback.blockReason}`;
        }
        if ((_b = response.promptFeedback) === null || _b === void 0 ? void 0 : _b.blockReasonMessage) {
            message += `: ${response.promptFeedback.blockReasonMessage}`;
        }
    } else if ((_c = response.candidates) === null || _c === void 0 ? void 0 : _c[0]) {
        const firstCandidate = response.candidates[0];
        if (hadBadFinishReason(firstCandidate)) {
            message += `Candidate was blocked due to ${firstCandidate.finishReason}`;
            if (firstCandidate.finishMessage) {
                message += `: ${firstCandidate.finishMessage}`;
            }
        }
    }
    return message;
}
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ /* global Reflect, Promise, SuppressedError, Symbol */ function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}
function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i;
    "TURBOPACK unreachable";
    function verb(n) {
        if (g[n]) i[n] = function(v) {
            return new Promise(function(a, b) {
                q.push([
                    n,
                    v,
                    a,
                    b
                ]) > 1 || resume(n, v);
            });
        };
    }
    function resume(n, v) {
        try {
            step(g[n](v));
        } catch (e) {
            settle(q[0][3], e);
        }
    }
    function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
    }
    function fulfill(value) {
        resume("next", value);
    }
    function reject(value) {
        resume("throw", value);
    }
    function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
    }
}
typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const responseLineRE = /^data\: (.*)(?:\n\n|\r\r|\r\n\r\n)/;
/**
 * Process a response.body stream from the backend and return an
 * iterator that provides one complete GenerateContentResponse at a time
 * and a promise that resolves with a single aggregated
 * GenerateContentResponse.
 *
 * @param response - Response from a fetch call
 */ function processStream(response) {
    const inputStream = response.body.pipeThrough(new TextDecoderStream("utf8", {
        fatal: true
    }));
    const responseStream = getResponseStream(inputStream);
    const [stream1, stream2] = responseStream.tee();
    return {
        stream: generateResponseSequence(stream1),
        response: getResponsePromise(stream2)
    };
}
async function getResponsePromise(stream) {
    const allResponses = [];
    const reader = stream.getReader();
    while(true){
        const { done, value } = await reader.read();
        if (done) {
            return addHelpers(aggregateResponses(allResponses));
        }
        allResponses.push(value);
    }
}
function generateResponseSequence(stream) {
    return __asyncGenerator(this, arguments, function* generateResponseSequence_1() {
        const reader = stream.getReader();
        while(true){
            const { value, done } = yield __await(reader.read());
            if (done) {
                break;
            }
            yield yield __await(addHelpers(value));
        }
    });
}
/**
 * Reads a raw stream from the fetch response and join incomplete
 * chunks, returning a new stream that provides a single complete
 * GenerateContentResponse in each iteration.
 */ function getResponseStream(inputStream) {
    const reader = inputStream.getReader();
    const stream = new ReadableStream({
        start (controller) {
            let currentText = "";
            return pump();
            "TURBOPACK unreachable";
            function pump() {
                return reader.read().then(({ value, done })=>{
                    if (done) {
                        if (currentText.trim()) {
                            controller.error(new GoogleGenerativeAIError("Failed to parse stream"));
                            return;
                        }
                        controller.close();
                        return;
                    }
                    currentText += value;
                    let match = currentText.match(responseLineRE);
                    let parsedResponse;
                    while(match){
                        try {
                            parsedResponse = JSON.parse(match[1]);
                        } catch (e) {
                            controller.error(new GoogleGenerativeAIError(`Error parsing JSON response: "${match[1]}"`));
                            return;
                        }
                        controller.enqueue(parsedResponse);
                        currentText = currentText.substring(match[0].length);
                        match = currentText.match(responseLineRE);
                    }
                    return pump();
                });
            }
        }
    });
    return stream;
}
/**
 * Aggregates an array of `GenerateContentResponse`s into a single
 * GenerateContentResponse.
 */ function aggregateResponses(responses) {
    const lastResponse = responses[responses.length - 1];
    const aggregatedResponse = {
        promptFeedback: lastResponse === null || lastResponse === void 0 ? void 0 : lastResponse.promptFeedback
    };
    for (const response of responses){
        if (response.candidates) {
            let candidateIndex = 0;
            for (const candidate of response.candidates){
                if (!aggregatedResponse.candidates) {
                    aggregatedResponse.candidates = [];
                }
                if (!aggregatedResponse.candidates[candidateIndex]) {
                    aggregatedResponse.candidates[candidateIndex] = {
                        index: candidateIndex
                    };
                }
                // Keep overwriting, the last one will be final
                aggregatedResponse.candidates[candidateIndex].citationMetadata = candidate.citationMetadata;
                aggregatedResponse.candidates[candidateIndex].groundingMetadata = candidate.groundingMetadata;
                aggregatedResponse.candidates[candidateIndex].finishReason = candidate.finishReason;
                aggregatedResponse.candidates[candidateIndex].finishMessage = candidate.finishMessage;
                aggregatedResponse.candidates[candidateIndex].safetyRatings = candidate.safetyRatings;
                /**
                 * Candidates should always have content and parts, but this handles
                 * possible malformed responses.
                 */ if (candidate.content && candidate.content.parts) {
                    if (!aggregatedResponse.candidates[candidateIndex].content) {
                        aggregatedResponse.candidates[candidateIndex].content = {
                            role: candidate.content.role || "user",
                            parts: []
                        };
                    }
                    const newPart = {};
                    for (const part of candidate.content.parts){
                        if (part.text) {
                            newPart.text = part.text;
                        }
                        if (part.functionCall) {
                            newPart.functionCall = part.functionCall;
                        }
                        if (part.executableCode) {
                            newPart.executableCode = part.executableCode;
                        }
                        if (part.codeExecutionResult) {
                            newPart.codeExecutionResult = part.codeExecutionResult;
                        }
                        if (Object.keys(newPart).length === 0) {
                            newPart.text = "";
                        }
                        aggregatedResponse.candidates[candidateIndex].content.parts.push(newPart);
                    }
                }
            }
            candidateIndex++;
        }
        if (response.usageMetadata) {
            aggregatedResponse.usageMetadata = response.usageMetadata;
        }
    }
    return aggregatedResponse;
}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function generateContentStream(apiKey, model, params, requestOptions) {
    const response = await makeModelRequest(model, Task.STREAM_GENERATE_CONTENT, apiKey, /* stream */ true, JSON.stringify(params), requestOptions);
    return processStream(response);
}
async function generateContent(apiKey, model, params, requestOptions) {
    const response = await makeModelRequest(model, Task.GENERATE_CONTENT, apiKey, /* stream */ false, JSON.stringify(params), requestOptions);
    const responseJson = await response.json();
    const enhancedResponse = addHelpers(responseJson);
    return {
        response: enhancedResponse
    };
}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function formatSystemInstruction(input) {
    // null or undefined
    if (input == null) {
        return undefined;
    } else if (typeof input === "string") {
        return {
            role: "system",
            parts: [
                {
                    text: input
                }
            ]
        };
    } else if (input.text) {
        return {
            role: "system",
            parts: [
                input
            ]
        };
    } else if (input.parts) {
        if (!input.role) {
            return {
                role: "system",
                parts: input.parts
            };
        } else {
            return input;
        }
    }
}
function formatNewContent(request) {
    let newParts = [];
    if (typeof request === "string") {
        newParts = [
            {
                text: request
            }
        ];
    } else {
        for (const partOrString of request){
            if (typeof partOrString === "string") {
                newParts.push({
                    text: partOrString
                });
            } else {
                newParts.push(partOrString);
            }
        }
    }
    return assignRoleToPartsAndValidateSendMessageRequest(newParts);
}
/**
 * When multiple Part types (i.e. FunctionResponsePart and TextPart) are
 * passed in a single Part array, we may need to assign different roles to each
 * part. Currently only FunctionResponsePart requires a role other than 'user'.
 * @private
 * @param parts Array of parts to pass to the model
 * @returns Array of content items
 */ function assignRoleToPartsAndValidateSendMessageRequest(parts) {
    const userContent = {
        role: "user",
        parts: []
    };
    const functionContent = {
        role: "function",
        parts: []
    };
    let hasUserContent = false;
    let hasFunctionContent = false;
    for (const part of parts){
        if ("functionResponse" in part) {
            functionContent.parts.push(part);
            hasFunctionContent = true;
        } else {
            userContent.parts.push(part);
            hasUserContent = true;
        }
    }
    if (hasUserContent && hasFunctionContent) {
        throw new GoogleGenerativeAIError("Within a single message, FunctionResponse cannot be mixed with other type of part in the request for sending chat message.");
    }
    if (!hasUserContent && !hasFunctionContent) {
        throw new GoogleGenerativeAIError("No content is provided for sending chat message.");
    }
    if (hasUserContent) {
        return userContent;
    }
    return functionContent;
}
function formatCountTokensInput(params, modelParams) {
    var _a;
    let formattedGenerateContentRequest = {
        model: modelParams === null || modelParams === void 0 ? void 0 : modelParams.model,
        generationConfig: modelParams === null || modelParams === void 0 ? void 0 : modelParams.generationConfig,
        safetySettings: modelParams === null || modelParams === void 0 ? void 0 : modelParams.safetySettings,
        tools: modelParams === null || modelParams === void 0 ? void 0 : modelParams.tools,
        toolConfig: modelParams === null || modelParams === void 0 ? void 0 : modelParams.toolConfig,
        systemInstruction: modelParams === null || modelParams === void 0 ? void 0 : modelParams.systemInstruction,
        cachedContent: (_a = modelParams === null || modelParams === void 0 ? void 0 : modelParams.cachedContent) === null || _a === void 0 ? void 0 : _a.name,
        contents: []
    };
    const containsGenerateContentRequest = params.generateContentRequest != null;
    if (params.contents) {
        if (containsGenerateContentRequest) {
            throw new GoogleGenerativeAIRequestInputError("CountTokensRequest must have one of contents or generateContentRequest, not both.");
        }
        formattedGenerateContentRequest.contents = params.contents;
    } else if (containsGenerateContentRequest) {
        formattedGenerateContentRequest = Object.assign(Object.assign({}, formattedGenerateContentRequest), params.generateContentRequest);
    } else {
        // Array or string
        const content = formatNewContent(params);
        formattedGenerateContentRequest.contents = [
            content
        ];
    }
    return {
        generateContentRequest: formattedGenerateContentRequest
    };
}
function formatGenerateContentInput(params) {
    let formattedRequest;
    if (params.contents) {
        formattedRequest = params;
    } else {
        // Array or string
        const content = formatNewContent(params);
        formattedRequest = {
            contents: [
                content
            ]
        };
    }
    if (params.systemInstruction) {
        formattedRequest.systemInstruction = formatSystemInstruction(params.systemInstruction);
    }
    return formattedRequest;
}
function formatEmbedContentInput(params) {
    if (typeof params === "string" || Array.isArray(params)) {
        const content = formatNewContent(params);
        return {
            content
        };
    }
    return params;
}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ // https://ai.google.dev/api/rest/v1beta/Content#part
const VALID_PART_FIELDS = [
    "text",
    "inlineData",
    "functionCall",
    "functionResponse",
    "executableCode",
    "codeExecutionResult"
];
const VALID_PARTS_PER_ROLE = {
    user: [
        "text",
        "inlineData"
    ],
    function: [
        "functionResponse"
    ],
    model: [
        "text",
        "functionCall",
        "executableCode",
        "codeExecutionResult"
    ],
    // System instructions shouldn't be in history anyway.
    system: [
        "text"
    ]
};
function validateChatHistory(history) {
    let prevContent = false;
    for (const currContent of history){
        const { role, parts } = currContent;
        if (!prevContent && role !== "user") {
            throw new GoogleGenerativeAIError(`First content should be with role 'user', got ${role}`);
        }
        if (!POSSIBLE_ROLES.includes(role)) {
            throw new GoogleGenerativeAIError(`Each item should include role field. Got ${role} but valid roles are: ${JSON.stringify(POSSIBLE_ROLES)}`);
        }
        if (!Array.isArray(parts)) {
            throw new GoogleGenerativeAIError("Content should have 'parts' property with an array of Parts");
        }
        if (parts.length === 0) {
            throw new GoogleGenerativeAIError("Each Content should have at least one part");
        }
        const countFields = {
            text: 0,
            inlineData: 0,
            functionCall: 0,
            functionResponse: 0,
            fileData: 0,
            executableCode: 0,
            codeExecutionResult: 0
        };
        for (const part of parts){
            for (const key of VALID_PART_FIELDS){
                if (key in part) {
                    countFields[key] += 1;
                }
            }
        }
        const validParts = VALID_PARTS_PER_ROLE[role];
        for (const key of VALID_PART_FIELDS){
            if (!validParts.includes(key) && countFields[key] > 0) {
                throw new GoogleGenerativeAIError(`Content with role '${role}' can't contain '${key}' part`);
            }
        }
        prevContent = true;
    }
}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Do not log a message for this error.
 */ const SILENT_ERROR = "SILENT_ERROR";
/**
 * ChatSession class that enables sending chat messages and stores
 * history of sent and received messages so far.
 *
 * @public
 */ class ChatSession {
    constructor(apiKey, model, params, _requestOptions = {}){
        this.model = model;
        this.params = params;
        this._requestOptions = _requestOptions;
        this._history = [];
        this._sendPromise = Promise.resolve();
        this._apiKey = apiKey;
        if (params === null || params === void 0 ? void 0 : params.history) {
            validateChatHistory(params.history);
            this._history = params.history;
        }
    }
    /**
     * Gets the chat history so far. Blocked prompts are not added to history.
     * Blocked candidates are not added to history, nor are the prompts that
     * generated them.
     */ async getHistory() {
        await this._sendPromise;
        return this._history;
    }
    /**
     * Sends a chat message and receives a non-streaming
     * {@link GenerateContentResult}.
     *
     * Fields set in the optional {@link SingleRequestOptions} parameter will
     * take precedence over the {@link RequestOptions} values provided to
     * {@link GoogleGenerativeAI.getGenerativeModel }.
     */ async sendMessage(request, requestOptions = {}) {
        var _a, _b, _c, _d, _e, _f;
        await this._sendPromise;
        const newContent = formatNewContent(request);
        const generateContentRequest = {
            safetySettings: (_a = this.params) === null || _a === void 0 ? void 0 : _a.safetySettings,
            generationConfig: (_b = this.params) === null || _b === void 0 ? void 0 : _b.generationConfig,
            tools: (_c = this.params) === null || _c === void 0 ? void 0 : _c.tools,
            toolConfig: (_d = this.params) === null || _d === void 0 ? void 0 : _d.toolConfig,
            systemInstruction: (_e = this.params) === null || _e === void 0 ? void 0 : _e.systemInstruction,
            cachedContent: (_f = this.params) === null || _f === void 0 ? void 0 : _f.cachedContent,
            contents: [
                ...this._history,
                newContent
            ]
        };
        const chatSessionRequestOptions = Object.assign(Object.assign({}, this._requestOptions), requestOptions);
        let finalResult;
        // Add onto the chain.
        this._sendPromise = this._sendPromise.then(()=>generateContent(this._apiKey, this.model, generateContentRequest, chatSessionRequestOptions)).then((result)=>{
            var _a, _b;
            if (result.response.candidates && result.response.candidates.length > 0 && ((_a = result.response.candidates[0]) === null || _a === void 0 ? void 0 : _a.content) !== undefined) {
                this._history.push(newContent);
                const responseContent = Object.assign({
                    parts: [],
                    // Response seems to come back without a role set.
                    role: "model"
                }, (_b = result.response.candidates) === null || _b === void 0 ? void 0 : _b[0].content);
                this._history.push(responseContent);
            } else {
                const blockErrorMessage = formatBlockErrorMessage(result.response);
                if (blockErrorMessage) {
                    console.warn(`sendMessage() was unsuccessful. ${blockErrorMessage}. Inspect response object for details.`);
                }
            }
            finalResult = result;
        });
        await this._sendPromise;
        return finalResult;
    }
    /**
     * Sends a chat message and receives the response as a
     * {@link GenerateContentStreamResult} containing an iterable stream
     * and a response promise.
     *
     * Fields set in the optional {@link SingleRequestOptions} parameter will
     * take precedence over the {@link RequestOptions} values provided to
     * {@link GoogleGenerativeAI.getGenerativeModel }.
     */ async sendMessageStream(request, requestOptions = {}) {
        var _a, _b, _c, _d, _e, _f;
        await this._sendPromise;
        const newContent = formatNewContent(request);
        const generateContentRequest = {
            safetySettings: (_a = this.params) === null || _a === void 0 ? void 0 : _a.safetySettings,
            generationConfig: (_b = this.params) === null || _b === void 0 ? void 0 : _b.generationConfig,
            tools: (_c = this.params) === null || _c === void 0 ? void 0 : _c.tools,
            toolConfig: (_d = this.params) === null || _d === void 0 ? void 0 : _d.toolConfig,
            systemInstruction: (_e = this.params) === null || _e === void 0 ? void 0 : _e.systemInstruction,
            cachedContent: (_f = this.params) === null || _f === void 0 ? void 0 : _f.cachedContent,
            contents: [
                ...this._history,
                newContent
            ]
        };
        const chatSessionRequestOptions = Object.assign(Object.assign({}, this._requestOptions), requestOptions);
        const streamPromise = generateContentStream(this._apiKey, this.model, generateContentRequest, chatSessionRequestOptions);
        // Add onto the chain.
        this._sendPromise = this._sendPromise.then(()=>streamPromise)// This must be handled to avoid unhandled rejection, but jump
        // to the final catch block with a label to not log this error.
        .catch((_ignored)=>{
            throw new Error(SILENT_ERROR);
        }).then((streamResult)=>streamResult.response).then((response)=>{
            var _a;
            if (response.candidates && response.candidates.length > 0 && ((_a = response.candidates[0]) === null || _a === void 0 ? void 0 : _a.content) !== undefined) {
                this._history.push(newContent);
                const responseContent = Object.assign({}, response.candidates[0].content);
                // Response seems to come back without a role set.
                if (!responseContent.role) {
                    responseContent.role = "model";
                }
                this._history.push(responseContent);
            } else {
                const blockErrorMessage = formatBlockErrorMessage(response);
                if (blockErrorMessage) {
                    console.warn(`sendMessageStream() was unsuccessful. ${blockErrorMessage}. Inspect response object for details.`);
                }
            }
        }).catch((e)=>{
            // Errors in streamPromise are already catchable by the user as
            // streamPromise is returned.
            // Avoid duplicating the error message in logs.
            if (e.message !== SILENT_ERROR) {
                // Users do not have access to _sendPromise to catch errors
                // downstream from streamPromise, so they should not throw.
                console.error(e);
            }
        });
        return streamPromise;
    }
}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function countTokens(apiKey, model, params, singleRequestOptions) {
    const response = await makeModelRequest(model, Task.COUNT_TOKENS, apiKey, false, JSON.stringify(params), singleRequestOptions);
    return response.json();
}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function embedContent(apiKey, model, params, requestOptions) {
    const response = await makeModelRequest(model, Task.EMBED_CONTENT, apiKey, false, JSON.stringify(params), requestOptions);
    return response.json();
}
async function batchEmbedContents(apiKey, model, params, requestOptions) {
    const requestsWithModel = params.requests.map((request)=>{
        return Object.assign(Object.assign({}, request), {
            model
        });
    });
    const response = await makeModelRequest(model, Task.BATCH_EMBED_CONTENTS, apiKey, false, JSON.stringify({
        requests: requestsWithModel
    }), requestOptions);
    return response.json();
}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Class for generative model APIs.
 * @public
 */ class GenerativeModel {
    constructor(apiKey, modelParams, _requestOptions = {}){
        this.apiKey = apiKey;
        this._requestOptions = _requestOptions;
        if (modelParams.model.includes("/")) {
            // Models may be named "models/model-name" or "tunedModels/model-name"
            this.model = modelParams.model;
        } else {
            // If path is not included, assume it's a non-tuned model.
            this.model = `models/${modelParams.model}`;
        }
        this.generationConfig = modelParams.generationConfig || {};
        this.safetySettings = modelParams.safetySettings || [];
        this.tools = modelParams.tools;
        this.toolConfig = modelParams.toolConfig;
        this.systemInstruction = formatSystemInstruction(modelParams.systemInstruction);
        this.cachedContent = modelParams.cachedContent;
    }
    /**
     * Makes a single non-streaming call to the model
     * and returns an object containing a single {@link GenerateContentResponse}.
     *
     * Fields set in the optional {@link SingleRequestOptions} parameter will
     * take precedence over the {@link RequestOptions} values provided to
     * {@link GoogleGenerativeAI.getGenerativeModel }.
     */ async generateContent(request, requestOptions = {}) {
        var _a;
        const formattedParams = formatGenerateContentInput(request);
        const generativeModelRequestOptions = Object.assign(Object.assign({}, this._requestOptions), requestOptions);
        return generateContent(this.apiKey, this.model, Object.assign({
            generationConfig: this.generationConfig,
            safetySettings: this.safetySettings,
            tools: this.tools,
            toolConfig: this.toolConfig,
            systemInstruction: this.systemInstruction,
            cachedContent: (_a = this.cachedContent) === null || _a === void 0 ? void 0 : _a.name
        }, formattedParams), generativeModelRequestOptions);
    }
    /**
     * Makes a single streaming call to the model and returns an object
     * containing an iterable stream that iterates over all chunks in the
     * streaming response as well as a promise that returns the final
     * aggregated response.
     *
     * Fields set in the optional {@link SingleRequestOptions} parameter will
     * take precedence over the {@link RequestOptions} values provided to
     * {@link GoogleGenerativeAI.getGenerativeModel }.
     */ async generateContentStream(request, requestOptions = {}) {
        var _a;
        const formattedParams = formatGenerateContentInput(request);
        const generativeModelRequestOptions = Object.assign(Object.assign({}, this._requestOptions), requestOptions);
        return generateContentStream(this.apiKey, this.model, Object.assign({
            generationConfig: this.generationConfig,
            safetySettings: this.safetySettings,
            tools: this.tools,
            toolConfig: this.toolConfig,
            systemInstruction: this.systemInstruction,
            cachedContent: (_a = this.cachedContent) === null || _a === void 0 ? void 0 : _a.name
        }, formattedParams), generativeModelRequestOptions);
    }
    /**
     * Gets a new {@link ChatSession} instance which can be used for
     * multi-turn chats.
     */ startChat(startChatParams) {
        var _a;
        return new ChatSession(this.apiKey, this.model, Object.assign({
            generationConfig: this.generationConfig,
            safetySettings: this.safetySettings,
            tools: this.tools,
            toolConfig: this.toolConfig,
            systemInstruction: this.systemInstruction,
            cachedContent: (_a = this.cachedContent) === null || _a === void 0 ? void 0 : _a.name
        }, startChatParams), this._requestOptions);
    }
    /**
     * Counts the tokens in the provided request.
     *
     * Fields set in the optional {@link SingleRequestOptions} parameter will
     * take precedence over the {@link RequestOptions} values provided to
     * {@link GoogleGenerativeAI.getGenerativeModel }.
     */ async countTokens(request, requestOptions = {}) {
        const formattedParams = formatCountTokensInput(request, {
            model: this.model,
            generationConfig: this.generationConfig,
            safetySettings: this.safetySettings,
            tools: this.tools,
            toolConfig: this.toolConfig,
            systemInstruction: this.systemInstruction,
            cachedContent: this.cachedContent
        });
        const generativeModelRequestOptions = Object.assign(Object.assign({}, this._requestOptions), requestOptions);
        return countTokens(this.apiKey, this.model, formattedParams, generativeModelRequestOptions);
    }
    /**
     * Embeds the provided content.
     *
     * Fields set in the optional {@link SingleRequestOptions} parameter will
     * take precedence over the {@link RequestOptions} values provided to
     * {@link GoogleGenerativeAI.getGenerativeModel }.
     */ async embedContent(request, requestOptions = {}) {
        const formattedParams = formatEmbedContentInput(request);
        const generativeModelRequestOptions = Object.assign(Object.assign({}, this._requestOptions), requestOptions);
        return embedContent(this.apiKey, this.model, formattedParams, generativeModelRequestOptions);
    }
    /**
     * Embeds an array of {@link EmbedContentRequest}s.
     *
     * Fields set in the optional {@link SingleRequestOptions} parameter will
     * take precedence over the {@link RequestOptions} values provided to
     * {@link GoogleGenerativeAI.getGenerativeModel }.
     */ async batchEmbedContents(batchEmbedContentRequest, requestOptions = {}) {
        const generativeModelRequestOptions = Object.assign(Object.assign({}, this._requestOptions), requestOptions);
        return batchEmbedContents(this.apiKey, this.model, batchEmbedContentRequest, generativeModelRequestOptions);
    }
}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Top-level class for this SDK
 * @public
 */ class GoogleGenerativeAI {
    constructor(apiKey){
        this.apiKey = apiKey;
    }
    /**
     * Gets a {@link GenerativeModel} instance for the provided model name.
     */ getGenerativeModel(modelParams, requestOptions) {
        if (!modelParams.model) {
            throw new GoogleGenerativeAIError(`Must provide a model name. ` + `Example: genai.getGenerativeModel({ model: 'my-model-name' })`);
        }
        return new GenerativeModel(this.apiKey, modelParams, requestOptions);
    }
    /**
     * Creates a {@link GenerativeModel} instance from provided content cache.
     */ getGenerativeModelFromCachedContent(cachedContent, modelParams, requestOptions) {
        if (!cachedContent.name) {
            throw new GoogleGenerativeAIRequestInputError("Cached content must contain a `name` field.");
        }
        if (!cachedContent.model) {
            throw new GoogleGenerativeAIRequestInputError("Cached content must contain a `model` field.");
        }
        /**
         * Not checking tools and toolConfig for now as it would require a deep
         * equality comparison and isn't likely to be a common case.
         */ const disallowedDuplicates = [
            "model",
            "systemInstruction"
        ];
        for (const key of disallowedDuplicates){
            if ((modelParams === null || modelParams === void 0 ? void 0 : modelParams[key]) && cachedContent[key] && (modelParams === null || modelParams === void 0 ? void 0 : modelParams[key]) !== cachedContent[key]) {
                if (key === "model") {
                    const modelParamsComp = modelParams.model.startsWith("models/") ? modelParams.model.replace("models/", "") : modelParams.model;
                    const cachedContentComp = cachedContent.model.startsWith("models/") ? cachedContent.model.replace("models/", "") : cachedContent.model;
                    if (modelParamsComp === cachedContentComp) {
                        continue;
                    }
                }
                throw new GoogleGenerativeAIRequestInputError(`Different value for "${key}" specified in modelParams` + ` (${modelParams[key]}) and cachedContent (${cachedContent[key]})`);
            }
        }
        const modelParamsFromCache = Object.assign(Object.assign({}, modelParams), {
            model: cachedContent.model,
            tools: cachedContent.tools,
            toolConfig: cachedContent.toolConfig,
            systemInstruction: cachedContent.systemInstruction,
            cachedContent
        });
        return new GenerativeModel(this.apiKey, modelParamsFromCache, requestOptions);
    }
}
;
 //# sourceMappingURL=index.mjs.map
}}),
"[project]/node_modules/typeid-js/node_modules/uuid/dist/esm-node/rng.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>rng)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__ = __turbopack_import__("[externals]/node:crypto [external] (node:crypto, cjs)");
;
const rnds8Pool = new Uint8Array(256); // # of random values to pre-allocate
let poolPtr = rnds8Pool.length;
function rng() {
    if (poolPtr > rnds8Pool.length - 16) {
        __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__["default"].randomFillSync(rnds8Pool);
        poolPtr = 0;
    }
    return rnds8Pool.slice(poolPtr, poolPtr += 16);
}
}}),
"[project]/node_modules/typeid-js/node_modules/uuid/dist/esm-node/regex.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
const __TURBOPACK__default__export__ = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/i;
}}),
"[project]/node_modules/typeid-js/node_modules/uuid/dist/esm-node/validate.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$typeid$2d$js$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$regex$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/typeid-js/node_modules/uuid/dist/esm-node/regex.js [app-rsc] (ecmascript)");
;
function validate(uuid) {
    return typeof uuid === 'string' && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$typeid$2d$js$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$regex$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].test(uuid);
}
const __TURBOPACK__default__export__ = validate;
}}),
"[project]/node_modules/typeid-js/node_modules/uuid/dist/esm-node/stringify.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__),
    "unsafeStringify": (()=>unsafeStringify)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$typeid$2d$js$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/typeid-js/node_modules/uuid/dist/esm-node/validate.js [app-rsc] (ecmascript)");
;
/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */ const byteToHex = [];
for(let i = 0; i < 256; ++i){
    byteToHex.push((i + 0x100).toString(16).slice(1));
}
function unsafeStringify(arr, offset = 0) {
    // Note: Be careful editing this code!  It's been tuned for performance
    // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
    //
    // Note to future-self: No, you can't remove the `toLowerCase()` call.
    // REF: https://github.com/uuidjs/uuid/pull/677#issuecomment-1757351351
    return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
}
function stringify(arr, offset = 0) {
    const uuid = unsafeStringify(arr, offset);
    // Consistency check for valid UUID.  If this throws, it's likely due to one
    // of the following:
    // - One or more input array values don't map to a hex octet (leading to
    // "undefined" in the uuid)
    // - Invalid input values for the RFC `version` or `variant` fields
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$typeid$2d$js$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(uuid)) {
        throw TypeError('Stringified UUID is invalid');
    }
    return uuid;
}
const __TURBOPACK__default__export__ = stringify;
}}),
"[project]/node_modules/typeid-js/node_modules/uuid/dist/esm-node/v7.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$typeid$2d$js$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$rng$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/typeid-js/node_modules/uuid/dist/esm-node/rng.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$typeid$2d$js$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$stringify$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/typeid-js/node_modules/uuid/dist/esm-node/stringify.js [app-rsc] (ecmascript)");
;
;
/**
 * UUID V7 - Unix Epoch time-based UUID
 *
 * The IETF has published RFC9562, introducing 3 new UUID versions (6,7,8). This
 * implementation of V7 is based on the accepted, though not yet approved,
 * revisions.
 *
 * RFC 9562:https://www.rfc-editor.org/rfc/rfc9562.html Universally Unique
 * IDentifiers (UUIDs)

 *
 * Sample V7 value:
 * https://www.rfc-editor.org/rfc/rfc9562.html#name-example-of-a-uuidv7-value
 *
 * Monotonic Bit Layout: RFC rfc9562.6.2 Method 1, Dedicated Counter Bits ref:
 *     https://www.rfc-editor.org/rfc/rfc9562.html#section-6.2-5.1
 *
 *   0                   1                   2                   3 0 1 2 3 4 5 6
 *   7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1
 *  +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
 *  |                          unix_ts_ms                           |
 *  +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
 *  |          unix_ts_ms           |  ver  |        seq_hi         |
 *  +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
 *  |var|               seq_low               |        rand         |
 *  +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
 *  |                             rand                              |
 *  +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
 *
 * seq is a 31 bit serialized counter; comprised of 12 bit seq_hi and 19 bit
 * seq_low, and randomly initialized upon timestamp change. 31 bit counter size
 * was selected as any bitwise operations in node are done as _signed_ 32 bit
 * ints. we exclude the sign bit.
 */ let _seqLow = null;
let _seqHigh = null;
let _msecs = 0;
function v7(options, buf, offset) {
    options = options || {};
    // initialize buffer and pointer
    let i = buf && offset || 0;
    const b = buf || new Uint8Array(16);
    // rnds is Uint8Array(16) filled with random bytes
    const rnds = options.random || (options.rng || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$typeid$2d$js$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$rng$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])();
    // milliseconds since unix epoch, 1970-01-01 00:00
    const msecs = options.msecs !== undefined ? options.msecs : Date.now();
    // seq is user provided 31 bit counter
    let seq = options.seq !== undefined ? options.seq : null;
    // initialize local seq high/low parts
    let seqHigh = _seqHigh;
    let seqLow = _seqLow;
    // check if clock has advanced and user has not provided msecs
    if (msecs > _msecs && options.msecs === undefined) {
        _msecs = msecs;
        // unless user provided seq, reset seq parts
        if (seq !== null) {
            seqHigh = null;
            seqLow = null;
        }
    }
    // if we have a user provided seq
    if (seq !== null) {
        // trim provided seq to 31 bits of value, avoiding overflow
        if (seq > 0x7fffffff) {
            seq = 0x7fffffff;
        }
        // split provided seq into high/low parts
        seqHigh = seq >>> 19 & 0xfff;
        seqLow = seq & 0x7ffff;
    }
    // randomly initialize seq
    if (seqHigh === null || seqLow === null) {
        seqHigh = rnds[6] & 0x7f;
        seqHigh = seqHigh << 8 | rnds[7];
        seqLow = rnds[8] & 0x3f; // pad for var
        seqLow = seqLow << 8 | rnds[9];
        seqLow = seqLow << 5 | rnds[10] >>> 3;
    }
    // increment seq if within msecs window
    if (msecs + 10000 > _msecs && seq === null) {
        if (++seqLow > 0x7ffff) {
            seqLow = 0;
            if (++seqHigh > 0xfff) {
                seqHigh = 0;
                // increment internal _msecs. this allows us to continue incrementing
                // while staying monotonic. Note, once we hit 10k milliseconds beyond system
                // clock, we will reset breaking monotonicity (after (2^31)*10000 generations)
                _msecs++;
            }
        }
    } else {
        // resetting; we have advanced more than
        // 10k milliseconds beyond system clock
        _msecs = msecs;
    }
    _seqHigh = seqHigh;
    _seqLow = seqLow;
    // [bytes 0-5] 48 bits of local timestamp
    b[i++] = _msecs / 0x10000000000 & 0xff;
    b[i++] = _msecs / 0x100000000 & 0xff;
    b[i++] = _msecs / 0x1000000 & 0xff;
    b[i++] = _msecs / 0x10000 & 0xff;
    b[i++] = _msecs / 0x100 & 0xff;
    b[i++] = _msecs & 0xff;
    // [byte 6] - set 4 bits of version (7) with first 4 bits seq_hi
    b[i++] = seqHigh >>> 4 & 0x0f | 0x70;
    // [byte 7] remaining 8 bits of seq_hi
    b[i++] = seqHigh & 0xff;
    // [byte 8] - variant (2 bits), first 6 bits seq_low
    b[i++] = seqLow >>> 13 & 0x3f | 0x80;
    // [byte 9] 8 bits seq_low
    b[i++] = seqLow >>> 5 & 0xff;
    // [byte 10] remaining 5 bits seq_low, 3 bits random
    b[i++] = seqLow << 3 & 0xff | rnds[10] & 0x07;
    // [bytes 11-15] always random
    b[i++] = rnds[11];
    b[i++] = rnds[12];
    b[i++] = rnds[13];
    b[i++] = rnds[14];
    b[i++] = rnds[15];
    return buf || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$typeid$2d$js$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$stringify$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["unsafeStringify"])(b);
}
const __TURBOPACK__default__export__ = v7;
}}),
"[project]/node_modules/typeid-js/node_modules/uuid/dist/esm-node/v7.js [app-rsc] (ecmascript) <export default as v7>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({
    "v7": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$typeid$2d$js$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v7$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$typeid$2d$js$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v7$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/typeid-js/node_modules/uuid/dist/esm-node/v7.js [app-rsc] (ecmascript)");
}}),
"[project]/node_modules/typeid-js/node_modules/uuid/dist/esm-node/stringify.js [app-rsc] (ecmascript) <export default as stringify>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({
    "stringify": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$typeid$2d$js$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$stringify$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$typeid$2d$js$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$stringify$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/typeid-js/node_modules/uuid/dist/esm-node/stringify.js [app-rsc] (ecmascript)");
}}),
"[project]/node_modules/typeid-js/dist/index.mjs [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// src/typeid.ts
__turbopack_esm__({
    "TypeID": (()=>TypeID),
    "fromString": (()=>fromString),
    "fromUUID": (()=>fromUUID),
    "fromUUIDBytes": (()=>fromUUIDBytes),
    "getSuffix": (()=>getSuffix),
    "getType": (()=>getType),
    "parseTypeId": (()=>parseTypeId),
    "toUUID": (()=>toUUID),
    "toUUIDBytes": (()=>toUUIDBytes),
    "typeid": (()=>typeid),
    "typeidUnboxed": (()=>typeidUnboxed)
});
// src/unboxed/typeid.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$typeid$2d$js$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v7$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__v7$3e$__ = __turbopack_import__("[project]/node_modules/typeid-js/node_modules/uuid/dist/esm-node/v7.js [app-rsc] (ecmascript) <export default as v7>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$typeid$2d$js$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$stringify$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__stringify$3e$__ = __turbopack_import__("[project]/node_modules/typeid-js/node_modules/uuid/dist/esm-node/stringify.js [app-rsc] (ecmascript) <export default as stringify>");
;
// src/parse_uuid.ts
function parseUUID(uuid) {
    let v;
    const arr = new Uint8Array(16);
    arr[0] = (v = parseInt(uuid.slice(0, 8), 16)) >>> 24;
    arr[1] = v >>> 16 & 255;
    arr[2] = v >>> 8 & 255;
    arr[3] = v & 255;
    arr[4] = (v = parseInt(uuid.slice(9, 13), 16)) >>> 8;
    arr[5] = v & 255;
    arr[6] = (v = parseInt(uuid.slice(14, 18), 16)) >>> 8;
    arr[7] = v & 255;
    arr[8] = (v = parseInt(uuid.slice(19, 23), 16)) >>> 8;
    arr[9] = v & 255;
    arr[10] = (v = parseInt(uuid.slice(24, 36), 16)) / 1099511627776 & 255;
    arr[11] = v / 4294967296 & 255;
    arr[12] = v >>> 24 & 255;
    arr[13] = v >>> 16 & 255;
    arr[14] = v >>> 8 & 255;
    arr[15] = v & 255;
    return arr;
}
// src/base32.ts
var alphabet = "0123456789abcdefghjkmnpqrstvwxyz";
var dec = new Uint8Array([
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    255,
    18,
    19,
    255,
    20,
    21,
    255,
    22,
    23,
    24,
    25,
    26,
    255,
    27,
    28,
    29,
    30,
    31,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255,
    255
]);
function encode(src) {
    const dst = new Array(26).fill("");
    if (src.length !== 16) {
        throw new Error(`Invalid length. Expected 16 bytes, got ${src.length}. Input: ${src}`);
    }
    dst[0] = alphabet[(src[0] & 224) >> 5];
    dst[1] = alphabet[src[0] & 31];
    dst[2] = alphabet[(src[1] & 248) >> 3];
    dst[3] = alphabet[(src[1] & 7) << 2 | (src[2] & 192) >> 6];
    dst[4] = alphabet[(src[2] & 62) >> 1];
    dst[5] = alphabet[(src[2] & 1) << 4 | (src[3] & 240) >> 4];
    dst[6] = alphabet[(src[3] & 15) << 1 | (src[4] & 128) >> 7];
    dst[7] = alphabet[(src[4] & 124) >> 2];
    dst[8] = alphabet[(src[4] & 3) << 3 | (src[5] & 224) >> 5];
    dst[9] = alphabet[src[5] & 31];
    dst[10] = alphabet[(src[6] & 248) >> 3];
    dst[11] = alphabet[(src[6] & 7) << 2 | (src[7] & 192) >> 6];
    dst[12] = alphabet[(src[7] & 62) >> 1];
    dst[13] = alphabet[(src[7] & 1) << 4 | (src[8] & 240) >> 4];
    dst[14] = alphabet[(src[8] & 15) << 1 | (src[9] & 128) >> 7];
    dst[15] = alphabet[(src[9] & 124) >> 2];
    dst[16] = alphabet[(src[9] & 3) << 3 | (src[10] & 224) >> 5];
    dst[17] = alphabet[src[10] & 31];
    dst[18] = alphabet[(src[11] & 248) >> 3];
    dst[19] = alphabet[(src[11] & 7) << 2 | (src[12] & 192) >> 6];
    dst[20] = alphabet[(src[12] & 62) >> 1];
    dst[21] = alphabet[(src[12] & 1) << 4 | (src[13] & 240) >> 4];
    dst[22] = alphabet[(src[13] & 15) << 1 | (src[14] & 128) >> 7];
    dst[23] = alphabet[(src[14] & 124) >> 2];
    dst[24] = alphabet[(src[14] & 3) << 3 | (src[15] & 224) >> 5];
    dst[25] = alphabet[src[15] & 31];
    return dst.join("");
}
function decode(s) {
    if (s.length !== 26) {
        throw new Error(`Invalid length. Expected 26 bytes, got ${s.length}. Input: ${s}`);
    }
    const encoder = new TextEncoder();
    const v = encoder.encode(s);
    if (dec[v[0]] === 255 || dec[v[1]] === 255 || dec[v[2]] === 255 || dec[v[3]] === 255 || dec[v[4]] === 255 || dec[v[5]] === 255 || dec[v[6]] === 255 || dec[v[7]] === 255 || dec[v[8]] === 255 || dec[v[9]] === 255 || dec[v[10]] === 255 || dec[v[11]] === 255 || dec[v[12]] === 255 || dec[v[13]] === 255 || dec[v[14]] === 255 || dec[v[15]] === 255 || dec[v[16]] === 255 || dec[v[17]] === 255 || dec[v[18]] === 255 || dec[v[19]] === 255 || dec[v[20]] === 255 || dec[v[21]] === 255 || dec[v[22]] === 255 || dec[v[23]] === 255 || dec[v[24]] === 255 || dec[v[25]] === 255) {
        throw new Error("Invalid base32 character");
    }
    const id = new Uint8Array(16);
    id[0] = dec[v[0]] << 5 | dec[v[1]];
    id[1] = dec[v[2]] << 3 | dec[v[3]] >> 2;
    id[2] = (dec[v[3]] & 3) << 6 | dec[v[4]] << 1 | dec[v[5]] >> 4;
    id[3] = (dec[v[5]] & 15) << 4 | dec[v[6]] >> 1;
    id[4] = (dec[v[6]] & 1) << 7 | dec[v[7]] << 2 | dec[v[8]] >> 3;
    id[5] = (dec[v[8]] & 7) << 5 | dec[v[9]];
    id[6] = dec[v[10]] << 3 | dec[v[11]] >> 2;
    id[7] = (dec[v[11]] & 3) << 6 | dec[v[12]] << 1 | dec[v[13]] >> 4;
    id[8] = (dec[v[13]] & 15) << 4 | dec[v[14]] >> 1;
    id[9] = (dec[v[14]] & 1) << 7 | dec[v[15]] << 2 | dec[v[16]] >> 3;
    id[10] = (dec[v[16]] & 7) << 5 | dec[v[17]];
    id[11] = dec[v[18]] << 3 | dec[v[19]] >> 2;
    id[12] = (dec[v[19]] & 3) << 6 | dec[v[20]] << 1 | dec[v[21]] >> 4;
    id[13] = (dec[v[21]] & 15) << 4 | dec[v[22]] >> 1;
    id[14] = (dec[v[22]] & 1) << 7 | dec[v[23]] << 2 | dec[v[24]] >> 3;
    id[15] = (dec[v[24]] & 7) << 5 | dec[v[25]];
    return id;
}
;
// src/prefix.ts
function isValidPrefix(str) {
    if (str.length > 63) {
        return false;
    }
    let code;
    let i;
    let len;
    for(i = 0, len = str.length; i < len; i += 1){
        code = str.charCodeAt(i);
        const isLowerAtoZ = code > 96 && code < 123;
        const isUnderscore = code === 95;
        if ((i === 0 || i === len - 1) && !isLowerAtoZ) {
            return false;
        }
        if (!(isLowerAtoZ || isUnderscore)) {
            return false;
        }
    }
    return true;
}
// src/unboxed/error.ts
var InvalidPrefixError = class extends Error {
    constructor(prefix){
        super(`Invalid prefix "${prefix}". Must be at most 63 ASCII letters [a-z_]`);
        this.name = "InvalidPrefixError";
    }
};
var PrefixMismatchError = class extends Error {
    constructor(expected, actual){
        super(`Invalid TypeId. Prefix mismatch. Expected ${expected}, got ${actual}`);
        this.name = "PrefixMismatchError";
    }
};
var EmptyPrefixError = class extends Error {
    constructor(typeId){
        super(`Invalid TypeId. Prefix cannot be empty when there's a separator: ${typeId}`);
        this.name = "EmptyPrefixError";
    }
};
var InvalidSuffixLengthError = class extends Error {
    constructor(length){
        super(`Invalid length. Suffix should have 26 characters, got ${length}`);
        this.name = "InvalidSuffixLengthError";
    }
};
var InvalidSuffixCharacterError = class extends Error {
    constructor(firstChar){
        super(`Invalid suffix. First character "${firstChar}" must be in the range [0-7]`);
        this.name = "InvalidSuffixCharacterError";
    }
};
var TypeIDConversionError = class extends Error {
    constructor(actualPrefix, expectedPrefix){
        super(`Cannot convert TypeID of type ${actualPrefix} to type ${expectedPrefix}`);
        this.name = "TypeIDConversionError";
    }
};
// src/unboxed/typeid.ts
function typeidUnboxed(prefix = "", suffix = "") {
    if (!isValidPrefix(prefix)) {
        throw new InvalidPrefixError(prefix);
    }
    let finalSuffix;
    if (suffix) {
        finalSuffix = suffix;
    } else {
        const buffer = new Uint8Array(16);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$typeid$2d$js$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v7$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__v7$3e$__["v7"])(void 0, buffer);
        finalSuffix = encode(buffer);
    }
    if (finalSuffix.length !== 26) {
        throw new InvalidSuffixLengthError(finalSuffix.length);
    }
    if (finalSuffix[0] > "7") {
        throw new InvalidSuffixCharacterError(finalSuffix[0]);
    }
    decode(finalSuffix);
    if (prefix === "") {
        return finalSuffix;
    } else {
        return `${prefix}_${finalSuffix}`;
    }
}
function fromString(typeId, prefix) {
    let p;
    let s;
    const underscoreIndex = typeId.lastIndexOf("_");
    if (underscoreIndex === -1) {
        p = "";
        s = typeId;
    } else {
        p = typeId.substring(0, underscoreIndex);
        s = typeId.substring(underscoreIndex + 1);
        if (!p) {
            throw new EmptyPrefixError(typeId);
        }
    }
    if (!s) {
        throw new InvalidSuffixLengthError(0);
    }
    if (prefix && p !== prefix) {
        throw new PrefixMismatchError(prefix, p);
    }
    return typeidUnboxed(p, s);
}
function parseTypeId(typeId) {
    return {
        prefix: getType(typeId),
        suffix: getSuffix(typeId)
    };
}
function getType(typeId) {
    const underscoreIndex = typeId.lastIndexOf("_");
    if (underscoreIndex === -1) {
        return "";
    }
    return typeId.substring(0, underscoreIndex);
}
function getSuffix(typeId) {
    const underscoreIndex = typeId.lastIndexOf("_");
    if (underscoreIndex === -1) {
        return typeId;
    }
    return typeId.substring(underscoreIndex + 1);
}
function toUUIDBytes(typeId) {
    return decode(getSuffix(typeId));
}
function toUUID(typeId) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$typeid$2d$js$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$stringify$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__stringify$3e$__["stringify"])(toUUIDBytes(typeId));
}
function fromUUIDBytes(prefix, bytes) {
    const suffix = encode(bytes);
    return prefix ? `${prefix}_${suffix}` : suffix;
}
function fromUUID(uuid, prefix) {
    const suffix = encode(parseUUID(uuid));
    return prefix ? `${prefix}_${suffix}` : suffix;
}
// src/typeid.ts
var TypeID = class {
    constructor(prefix, suffix = ""){
        this.prefix = prefix;
        this.suffix = suffix;
        const typeIdRaw = typeidUnboxed(prefix, suffix);
        this.prefix = getType(typeIdRaw);
        this.suffix = getSuffix(typeIdRaw);
    }
    getType() {
        return this.prefix;
    }
    getSuffix() {
        return this.suffix;
    }
    asType(prefix) {
        const self = this;
        if (self.prefix !== prefix) {
            throw new TypeIDConversionError(self.prefix, prefix);
        }
        return self;
    }
    toUUIDBytes() {
        return decode(this.suffix);
    }
    toUUID() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$typeid$2d$js$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$stringify$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__stringify$3e$__["stringify"])(this.toUUIDBytes());
    }
    toString() {
        if (this.prefix === "") {
            return this.suffix;
        }
        return `${this.prefix}_${this.suffix}`;
    }
    static fromString(str, prefix) {
        const typeIdRaw = fromString(str, prefix);
        return new TypeID(getType(typeIdRaw), getSuffix(typeIdRaw));
    }
    static fromUUIDBytes(prefix, bytes) {
        const suffix = encode(bytes);
        return new TypeID(prefix, suffix);
    }
    static fromUUID(prefix, uuid) {
        const suffix = encode(parseUUID(uuid));
        return new TypeID(prefix, suffix);
    }
};
function typeid(prefix = "", suffix = "") {
    return new TypeID(prefix, suffix);
}
;
 //# sourceMappingURL=index.mjs.map
}}),
"[project]/node_modules/@arcjet/analyze/index.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "detectBot": (()=>detectBot),
    "detectSensitiveInfo": (()=>detectSensitiveInfo),
    "generateFingerprint": (()=>generateFingerprint),
    "isValidEmail": (()=>isValidEmail)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$analyze$2d$wasm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@arcjet/analyze-wasm/index.js [app-rsc] (ecmascript)");
;
const FREE_EMAIL_PROVIDERS = [
    "gmail.com",
    "yahoo.com",
    "hotmail.com",
    "aol.com",
    "hotmail.co.uk"
];
function noOpSensitiveInfoDetect() {
    return [];
}
function noOpBotsDetect() {
    return [];
}
function createCoreImports(detect) {
    if (typeof detect !== "function") {
        detect = noOpSensitiveInfoDetect;
    }
    return {
        "arcjet:js-req/bot-identifier": {
            detect: noOpBotsDetect
        },
        "arcjet:js-req/email-validator-overrides": {
            isFreeEmail (domain) {
                if (FREE_EMAIL_PROVIDERS.includes(domain)) {
                    return "yes";
                }
                return "unknown";
            },
            isDisposableEmail () {
                return "unknown";
            },
            hasMxRecords () {
                return "unknown";
            },
            hasGravatar () {
                return "unknown";
            }
        },
        "arcjet:js-req/sensitive-information-identifier": {
            detect
        },
        "arcjet:js-req/verify-bot": {
            verify () {
                return "unverifiable";
            }
        }
    };
}
/**
 * Generate a fingerprint for the client. This is used to identify the client
 * across multiple requests.
 * @param context - The Arcjet Analyze context.
 * @param request - The request to fingerprint.
 * @returns A SHA-256 string fingerprint.
 */ async function generateFingerprint(context, request) {
    const { log } = context;
    const coreImports = createCoreImports();
    const analyze = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$analyze$2d$wasm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["initializeWasm"])(coreImports);
    if (typeof analyze !== "undefined") {
        return analyze.generateFingerprint(JSON.stringify(request), context.characteristics);
    } else {
        log.debug("WebAssembly is not supported in this runtime");
    }
    return "";
}
async function isValidEmail(context, candidate, options) {
    const { log } = context;
    const coreImports = createCoreImports();
    const analyze = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$analyze$2d$wasm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["initializeWasm"])(coreImports);
    if (typeof analyze !== "undefined") {
        return analyze.isValidEmail(candidate, options);
    } else {
        log.debug("WebAssembly is not supported in this runtime");
        // Skip the local evaluation of the rule if WASM is not available
        return {
            validity: "valid",
            blocked: []
        };
    }
}
async function detectBot(context, request, options) {
    const { log } = context;
    const coreImports = createCoreImports();
    const analyze = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$analyze$2d$wasm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["initializeWasm"])(coreImports);
    if (typeof analyze !== "undefined") {
        return analyze.detectBot(JSON.stringify(request), options);
    } else {
        log.debug("WebAssembly is not supported in this runtime");
        // Skip the local evaluation of the rule if Wasm is not available
        return {
            allowed: [],
            denied: [],
            spoofed: false,
            verified: false
        };
    }
}
async function detectSensitiveInfo(context, candidate, entities, contextWindowSize, detect) {
    const { log } = context;
    const coreImports = createCoreImports(detect);
    const analyze = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$analyze$2d$wasm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["initializeWasm"])(coreImports);
    if (typeof analyze !== "undefined") {
        const skipCustomDetect = typeof detect !== "function";
        return analyze.detectSensitiveInfo(candidate, {
            entities,
            contextWindowSize,
            skipCustomDetect
        });
    } else {
        log.debug("WebAssembly is not supported in this runtime");
        throw new Error("SENSITIVE_INFO rule failed to run because Wasm is not supported in this environment.");
    }
}
;
}}),
"[project]/node_modules/@arcjet/duration/index.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// This Parser is a TypeScript implementation of similar code in the Go stdlib
// with deviations made to support usage in the Arcjet SDK.
//
// Parser source:
// https://github.com/golang/go/blob/c18ddc84e1ec6406b26f7e9d0e1ee3d1908d7c27/src/time/format.go#L1589-L1686
//
// Licensed: BSD 3-Clause "New" or "Revised" License
// Copyright (c) 2009 The Go Authors. All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are
// met:
//
//    * Redistributions of source code must retain the above copyright
// notice, this list of conditions and the following disclaimer.
//    * Redistributions in binary form must reproduce the above
// copyright notice, this list of conditions and the following disclaimer
// in the documentation and/or other materials provided with the
// distribution.
//    * Neither the name of Google Inc. nor the names of its
// contributors may be used to endorse or promote products derived from
// this software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
// A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
// OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
// THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
__turbopack_esm__({
    "parse": (()=>parse)
});
const second = 1;
const minute = 60 * second;
const hour = 60 * minute;
const day = 24 * hour;
const maxUint32 = 4294967295;
const units = new Map([
    [
        "s",
        second
    ],
    [
        "m",
        minute
    ],
    [
        "h",
        hour
    ],
    [
        "d",
        day
    ]
]);
const integers = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9"
];
// leadingInt consumes the leading [0-9]* from s.
function leadingInt(s) {
    let i = 0;
    let x = 0;
    for(; i < s.length; i++){
        const c = s[i];
        if (!integers.includes(c)) {
            break;
        }
        x = x * 10 + parseInt(c, 10);
        if (x > maxUint32) {
            // overflow
            throw new Error("bad [0-9]*"); // never printed
        }
    }
    return [
        x,
        s.slice(i)
    ];
}
/**
 * Parses a duration into a number representing seconds while ensuring the value
 * fits within an unsigned 32-bit integer.
 *
 * If a JavaScript number is provided to the function, it is validated and
 * returned verbatim.
 *
 * If a string is provided to the function, it must be in the form of digits
 * followed by a unit. Supported units are `s` (seconds), `m` (minutes), `h`
 * (hours), and `d` (days).
 *
 * @param s The value to parse into seconds.
 * @returns A number representing seconds parsed from the provided duration.
 *
 * @example
 * parse("1s") === 1
 * parse("1m") === 60
 * parse("1h") === 3600
 * parse("1d") === 86400
 */ function parse(s) {
    const original = s;
    if (typeof s === "number") {
        if (s > maxUint32) {
            throw new Error(`invalid duration: ${original}`);
        }
        if (s < 0) {
            throw new Error(`invalid duration: ${original}`);
        }
        if (!Number.isInteger(s)) {
            throw new Error(`invalid duration: ${original}`);
        }
        return s;
    }
    if (typeof s !== "string") {
        throw new Error("can only parse a duration string");
    }
    let d = 0;
    // Special case: if all that is left is "0", this is zero.
    if (s === "0") {
        return 0;
    }
    if (s === "") {
        throw new Error(`invalid duration: ${original}`);
    }
    while(s !== ""){
        let v = 0;
        // The next character must be [0-9]
        if (!integers.includes(s[0])) {
            throw new Error(`invalid duration: ${original}`);
        }
        // Consume [0-9]*
        [v, s] = leadingInt(s);
        // Error on decimal (\.[0-9]*)?
        if (s !== "" && s[0] == ".") {
            // TODO: We could support decimals that turn into non-decimal seconds—e.g.
            // 1.5hours becomes 5400 seconds
            throw new Error(`unsupported decimal duration: ${original}`);
        }
        // Consume unit.
        let i = 0;
        for(; i < s.length; i++){
            const c = s[i];
            if (integers.includes(c)) {
                break;
            }
        }
        if (i == 0) {
            throw new Error(`missing unit in duration: ${original}`);
        }
        const u = s.slice(0, i);
        s = s.slice(i);
        const unit = units.get(u);
        if (typeof unit === "undefined") {
            throw new Error(`unknown unit "${u}" in duration ${original}`);
        }
        if (v > maxUint32 / unit) {
            // overflow
            throw new Error(`invalid duration ${original}`);
        }
        v *= unit;
        d += v;
        if (d > maxUint32) {
            throw new Error(`invalid duration ${original}`);
        }
    }
    return d;
}
;
}}),
"[project]/node_modules/@arcjet/headers/index.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>ArcjetHeaders)
});
function isIterable(val) {
    return typeof val?.[Symbol.iterator] === "function";
}
/**
 * This Fetch API interface allows you to perform various actions on HTTP
 * request and response headers. These actions include retrieving, setting,
 * adding to, and removing. A Headers object has an associated header list,
 * which is initially empty and consists of zero or more name and value pairs.
 *
 * You can add to this using methods like `append()`.
 *
 * In all methods of this interface, header names are matched by
 * case-insensitive byte sequence.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Headers)
 */ class ArcjetHeaders extends Headers {
    constructor(init){
        super();
        if (typeof init !== "undefined" && typeof init !== "string" && init !== null) {
            if (isIterable(init)) {
                for (const [key, value] of init){
                    this.append(key, value);
                }
            } else {
                for (const [key, value] of Object.entries(init)){
                    if (typeof value === "undefined") {
                        continue;
                    }
                    if (Array.isArray(value)) {
                        for (const singleValue of value){
                            this.append(key, singleValue);
                        }
                    } else {
                        this.append(key, value);
                    }
                }
            }
        }
    }
    /**
     * Append a key and value to the headers, while filtering any key named
     * `cookie`.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Headers/append)
     *
     * @param key The key to append in the headers
     * @param value The value to append for the key in the headers
     */ append(key, value) {
        if (typeof key !== "string" || typeof value !== "string") {
            return;
        }
        if (key.toLowerCase() !== "cookie") {
            super.append(key, value);
        }
    }
    /**
     * Set a key and value in the headers, but filtering any key named `cookie`.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Headers/set)
     *
     * @param key The key to set in the headers
     * @param value The value to set for the key in the headers
     */ set(key, value) {
        if (typeof key !== "string" || typeof value !== "string") {
            return;
        }
        if (key.toLowerCase() !== "cookie") {
            super.set(key, value);
        }
    }
}
;
}}),
"[project]/node_modules/@arcjet/runtime/index.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// This code was improved by detection mechanisms in
// https://github.com/unjs/std-env/blob/b4ef16832baf4594ece7796a2c1805712fde70a3/src/runtimes.ts
//
// MIT License
//
// Copyright (c) Pooya Parsa <pooya@pi0.io>
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.
__turbopack_esm__({
    "runtime": (()=>runtime)
});
function runtime() {
    // The detection order matters in this function because some platforms will
    // implement compatibility layers, but we want to detect them accurately.
    // https://developers.cloudflare.com/workers/configuration/compatibility-dates/#global-navigator
    if (typeof navigator !== "undefined" && navigator.userAgent === "Cloudflare-Workers") {
        return "workerd";
    }
    if (typeof Deno !== "undefined") {
        return "deno";
    }
    if (typeof Bun !== "undefined") {
        return "bun";
    }
    if (typeof EdgeRuntime !== "undefined") {
        return "edge-light";
    }
    if (typeof process !== "undefined" && process?.release?.name === "node") {
        return "node";
    }
    // Unknown or unsupported runtime
    return "";
}
;
}}),
"[project]/node_modules/arcjet/index.js [app-rsc] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>arcjet),
    "detectBot": (()=>detectBot),
    "fixedWindow": (()=>fixedWindow),
    "protectSignup": (()=>protectSignup),
    "sensitiveInfo": (()=>sensitiveInfo),
    "shield": (()=>shield),
    "slidingWindow": (()=>slidingWindow),
    "tokenBucket": (()=>tokenBucket),
    "validateEmail": (()=>validateEmail)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$duration$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@arcjet/duration/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$analyze$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@arcjet/analyze/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$protocol$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/@arcjet/protocol/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$runtime$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@arcjet/runtime/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$headers$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@arcjet/headers/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$protocol$2f$convert$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@arcjet/protocol/convert.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
function assert(condition, msg) {
    if (!condition) {
        throw new Error(msg);
    }
}
function nowInSeconds() {
    return Math.floor(Date.now() / 1000);
}
class Cache {
    expires;
    data;
    constructor(){
        this.expires = new Map();
        this.data = new Map();
    }
    get(key) {
        const ttl = this.ttl(key);
        if (ttl > 0) {
            return this.data.get(key);
        } else {
            // Cleanup if expired
            this.expires.delete(key);
            this.data.delete(key);
        }
    }
    set(key, value, expiresAt) {
        this.expires.set(key, expiresAt);
        this.data.set(key, value);
    }
    ttl(key) {
        const now = nowInSeconds();
        const expiresAt = this.expires.get(key) ?? now;
        return expiresAt - now;
    }
}
function errorMessage(err) {
    if (err) {
        if (typeof err === "string") {
            return err;
        }
        if (typeof err === "object" && "message" in err && typeof err.message === "string") {
            return err.message;
        }
    }
    return "Unknown problem";
}
const knownFields = [
    "ip",
    "method",
    "protocol",
    "host",
    "path",
    "headers",
    "body",
    "email",
    "cookies",
    "query"
];
function isUnknownRequestProperty(key) {
    return !knownFields.includes(key);
}
function isEmailType(type) {
    return type === "FREE" || type === "DISPOSABLE" || type === "NO_MX_RECORDS" || type === "NO_GRAVATAR" || type === "INVALID";
}
class Performance {
    log;
    constructor(logger){
        this.log = logger;
    }
    // TODO(#2020): We should no-op this if loglevel is not `debug` to do less work
    measure(label) {
        const start = performance.now();
        return ()=>{
            const end = performance.now();
            const diff = end - start;
            this.log.debug("LATENCY %s: %sms", label, diff.toFixed(3));
        };
    }
}
function toString(value) {
    if (typeof value === "string") {
        return value;
    }
    if (typeof value === "number") {
        return `${value}`;
    }
    if (typeof value === "boolean") {
        return value ? "true" : "false";
    }
    return "<unsupported value>";
}
// This is the Symbol that Vercel defines in their infrastructure to access the
// Context (where available). The Context can contain the `waitUntil` function.
// https://github.com/vercel/vercel/blob/930d7fb892dc26f240f2b950d963931c45e1e661/packages/functions/src/get-context.ts#L6
const SYMBOL_FOR_REQ_CONTEXT = Symbol.for("@vercel/request-context");
function lookupWaitUntil() {
    const fromSymbol = globalThis;
    if (typeof fromSymbol[SYMBOL_FOR_REQ_CONTEXT] === "object" && fromSymbol[SYMBOL_FOR_REQ_CONTEXT] !== null && "get" in fromSymbol[SYMBOL_FOR_REQ_CONTEXT] && typeof fromSymbol[SYMBOL_FOR_REQ_CONTEXT].get === "function") {
        const vercelCtx = fromSymbol[SYMBOL_FOR_REQ_CONTEXT].get();
        if (typeof vercelCtx === "object" && vercelCtx !== null && "waitUntil" in vercelCtx && typeof vercelCtx.waitUntil === "function") {
            return vercelCtx.waitUntil;
        }
    }
}
function toAnalyzeRequest(request) {
    const headers = {};
    if (typeof request.headers !== "undefined") {
        for (const [key, value] of request.headers.entries()){
            headers[key] = value;
        }
    }
    return {
        ...request,
        headers
    };
}
function extraProps(details) {
    const extra = new Map();
    for (const [key, value] of Object.entries(details)){
        if (isUnknownRequestProperty(key)) {
            extra.set(key, toString(value));
        }
    }
    return Object.fromEntries(extra.entries());
}
function createTypeValidator(...types) {
    return (key, value)=>{
        const typeOfValue = typeof value;
        if (!types.includes(typeOfValue)) {
            if (types.length === 1) {
                throw new Error(`invalid type for \`${key}\` - expected ${types[0]}`);
            } else {
                throw new Error(`invalid type for \`${key}\` - expected one of ${types.join(", ")}`);
            }
        } else {
            return false;
        }
    };
}
function createValueValidator(// This uses types to ensure we have at least 2 values
...values) {
    return (key, value)=>{
        // We cast the values to unknown because the optionValue isn't known but
        // we only want to use `values` on string enumerations
        if (!values.includes(value)) {
            throw new Error(`invalid value for \`${key}\` - expected one of ${values.map((value)=>`'${value}'`).join(", ")}`);
        }
    };
}
function createArrayValidator(validate) {
    return (key, value)=>{
        if (Array.isArray(value)) {
            for (const [idx, item] of value.entries()){
                validate(`${key}[${idx}]`, item);
            }
        } else {
            throw new Error(`invalid type for \`${key}\` - expected an array`);
        }
    };
}
function createValidator({ rule, validations }) {
    return (options)=>{
        for (const { key, validate, required } of validations){
            if (required && !Object.hasOwn(options, key)) {
                throw new Error(`\`${rule}\` options error: \`${key}\` is required`);
            }
            const value = options[key];
            // The `required` flag is checked above, so these should only be validated
            // if the value is not undefined.
            if (typeof value !== "undefined") {
                try {
                    validate(key, value);
                } catch (err) {
                    throw new Error(`\`${rule}\` options error: ${errorMessage(err)}`);
                }
            }
        }
    };
}
const validateString = createTypeValidator("string");
const validateNumber = createTypeValidator("number");
const validateBoolean = createTypeValidator("boolean");
const validateFunction = createTypeValidator("function");
const validateStringOrNumber = createTypeValidator("string", "number");
const validateStringArray = createArrayValidator(validateString);
const validateMode = createValueValidator("LIVE", "DRY_RUN");
const validateEmailTypes = createArrayValidator(createValueValidator("DISPOSABLE", "FREE", "NO_MX_RECORDS", "NO_GRAVATAR", "INVALID"));
const validateTokenBucketOptions = createValidator({
    rule: "tokenBucket",
    validations: [
        {
            key: "mode",
            required: false,
            validate: validateMode
        },
        {
            key: "characteristics",
            validate: validateStringArray,
            required: false
        },
        {
            key: "refillRate",
            required: true,
            validate: validateNumber
        },
        {
            key: "interval",
            required: true,
            validate: validateStringOrNumber
        },
        {
            key: "capacity",
            required: true,
            validate: validateNumber
        }
    ]
});
const validateFixedWindowOptions = createValidator({
    rule: "fixedWindow",
    validations: [
        {
            key: "mode",
            required: false,
            validate: validateMode
        },
        {
            key: "characteristics",
            validate: validateStringArray,
            required: false
        },
        {
            key: "max",
            required: true,
            validate: validateNumber
        },
        {
            key: "window",
            required: true,
            validate: validateStringOrNumber
        }
    ]
});
const validateSlidingWindowOptions = createValidator({
    rule: "slidingWindow",
    validations: [
        {
            key: "mode",
            required: false,
            validate: validateMode
        },
        {
            key: "characteristics",
            validate: validateStringArray,
            required: false
        },
        {
            key: "max",
            required: true,
            validate: validateNumber
        },
        {
            key: "interval",
            required: true,
            validate: validateStringOrNumber
        }
    ]
});
const validateSensitiveInfoOptions = createValidator({
    rule: "sensitiveInfo",
    validations: [
        {
            key: "mode",
            required: false,
            validate: validateMode
        },
        {
            key: "allow",
            required: false,
            validate: validateStringArray
        },
        {
            key: "deny",
            required: false,
            validate: validateStringArray
        },
        {
            key: "contextWindowSize",
            required: false,
            validate: validateNumber
        },
        {
            key: "detect",
            required: false,
            validate: validateFunction
        }
    ]
});
const validateEmailOptions = createValidator({
    rule: "validateEmail",
    validations: [
        {
            key: "mode",
            required: false,
            validate: validateMode
        },
        {
            key: "block",
            required: false,
            validate: validateEmailTypes
        },
        {
            key: "allow",
            required: false,
            validate: validateEmailTypes
        },
        {
            key: "deny",
            required: false,
            validate: validateEmailTypes
        },
        {
            key: "requireTopLevelDomain",
            required: false,
            validate: validateBoolean
        },
        {
            key: "allowDomainLiteral",
            required: false,
            validate: validateBoolean
        }
    ]
});
const validateBotOptions = createValidator({
    rule: "detectBot",
    validations: [
        {
            key: "mode",
            required: false,
            validate: validateMode
        },
        {
            key: "allow",
            required: false,
            validate: validateStringArray
        },
        {
            key: "deny",
            required: false,
            validate: validateStringArray
        }
    ]
});
const validateShieldOptions = createValidator({
    rule: "shield",
    validations: [
        {
            key: "mode",
            required: false,
            validate: validateMode
        }
    ]
});
const Priority = {
    SensitiveInfo: 1,
    Shield: 2,
    RateLimit: 3,
    BotDetection: 4,
    EmailValidation: 5
};
function isLocalRule(rule) {
    return "validate" in rule && typeof rule.validate === "function" && "protect" in rule && typeof rule.protect === "function";
}
/**
 * Arcjet token bucket rate limiting rule. Applying this rule sets a token
 * bucket rate limit.
 *
 * This algorithm is based on a bucket filled with a specific number of tokens.
 * Each request withdraws some amount of tokens from the bucket and the bucket
 * is refilled at a fixed rate. Once the bucket is empty, the client is blocked
 * until the bucket refills.
 *
 * This algorithm is useful when you want to allow clients to make a burst of
 * requests and then still be able to make requests at a slower rate.
 *
 * @param {TokenBucketRateLimitOptions} options - The options for the token
 * bucket rate limiting rule.
 * @param {ArcjetMode} options.mode - The block mode of the rule, either
 * `"LIVE"` or `"DRY_RUN"`. `"LIVE"` will block requests when the rate limit is
 * exceeded, and `"DRY_RUN"` will allow all requests while still providing
 * access to the rule results. Defaults to `"DRY_RUN"` if not specified.
 * @param {number} options.refillRate - The number of tokens to add to the
 * bucket at each interval. For example, if you set the interval to 60 and the
 * refill rate to 10, the bucket will refill 10 tokens every 60 seconds.
 * @param {string | number} options.interval - The time interval for the refill
 * rate. This can be a string like `"60s"` for 60 seconds, `"1h45m"` for 1 hour
 * and 45 minutes, or a number like `60` for 60 seconds. Valid string time units
 * are:
 * - `s` for seconds.
 * - `m` for minutes.
 * - `h` for hours.
 * - `d` for days.
 * @param {number} options.capacity - The maximum number of tokens the bucket
 * can hold. The bucket starts at full capacity and will refill until it hits
 * the capacity.
 * @returns {Primitive} The token bucket rule to provide to the SDK in the
 * `rules` option.
 *
 * @example
 * ```ts
 * tokenBucket({ mode: "LIVE", refillRate: 10, interval: "60s", capacity: 100 });
 * ```
 * @example
 * ```ts
 * const aj = arcjet({
 *   key: process.env.ARCJET_KEY,
 *   rules: [
 *     tokenBucket({
 *       mode: "LIVE",
 *       refillRate: 10,
 *       interval: "60s",
 *       capacity: 100,
 *     })
 *   ],
 * });
 * ```
 * @link https://docs.arcjet.com/rate-limiting/concepts
 * @link https://docs.arcjet.com/rate-limiting/algorithms#token-bucket
 * @link https://docs.arcjet.com/rate-limiting/reference
 */ function tokenBucket(options) {
    validateTokenBucketOptions(options);
    const mode = options.mode === "LIVE" ? "LIVE" : "DRY_RUN";
    const characteristics = options.characteristics;
    const refillRate = options.refillRate;
    const interval = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$duration$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.parse(options.interval);
    const capacity = options.capacity;
    return [
        {
            type: "RATE_LIMIT",
            priority: Priority.RateLimit,
            mode,
            characteristics,
            algorithm: "TOKEN_BUCKET",
            refillRate,
            interval,
            capacity
        }
    ];
}
/**
 * Arcjet fixed window rate limiting rule. Applying this rule sets a fixed
 * window rate limit which tracks the number of requests made by a client over a
 * fixed time window.
 *
 * This is the simplest algorithm. It tracks the number of requests made by a
 * client over a fixed time window e.g. 60 seconds. If the client exceeds the
 * limit, they are blocked until the window expires.
 *
 * This algorithm is useful when you want to apply a simple fixed limit in a
 * fixed time window. For example, a simple limit on the total number of
 * requests a client can make. However, it can be susceptible to the stampede
 * problem where a client makes a burst of requests at the start of a window and
 * then is blocked for the rest of the window. The sliding window algorithm can
 * be used to avoid this.
 *
 * @param {FixedWindowRateLimitOptions} options - The options for the fixed
 * window rate limiting rule.
 * @param {ArcjetMode} options.mode - The block mode of the rule, either
 * `"LIVE"` or `"DRY_RUN"`. `"LIVE"` will block requests when the rate limit is
 * exceeded, and `"DRY_RUN"` will allow all requests while still providing
 * access to the rule results. Defaults to `"DRY_RUN"` if not specified.
 * @param {string | number} options.window - The fixed time window. This can be
 * a string like `"60s"` for 60 seconds, `"1h45m"` for 1 hour and 45 minutes, or
 * a number like `60` for 60 seconds. Valid string time units are:
 * - `s` for seconds.
 * - `m` for minutes.
 * - `h` for hours.
 * - `d` for days.
 * @param {number} options.max - The maximum number of requests allowed in the
 * fixed time window.
 * @returns {Primitive} The fixed window rule to provide to the SDK in the
 * `rules` option.
 *
 * @example
 * ```ts
 * fixedWindow({ mode: "LIVE", window: "60s", max: 100 });
 * ```
 * @example
 * ```ts
 * const aj = arcjet({
 *    key: process.env.ARCJET_KEY,
 *   rules: [
 *     fixedWindow({
 *       mode: "LIVE",
 *       window: "60s",
 *       max: 100,
 *     })
 *   ],
 * });
 * ```
 * @link https://docs.arcjet.com/rate-limiting/concepts
 * @link https://docs.arcjet.com/rate-limiting/algorithms#fixed-window
 * @link https://docs.arcjet.com/rate-limiting/reference
 */ function fixedWindow(options) {
    validateFixedWindowOptions(options);
    const mode = options.mode === "LIVE" ? "LIVE" : "DRY_RUN";
    const characteristics = Array.isArray(options.characteristics) ? options.characteristics : undefined;
    const max = options.max;
    const window = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$duration$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.parse(options.window);
    return [
        {
            type: "RATE_LIMIT",
            priority: Priority.RateLimit,
            mode,
            characteristics,
            algorithm: "FIXED_WINDOW",
            max,
            window
        }
    ];
}
/**
 * Arcjet sliding window rate limiting rule. Applying this rule sets a sliding
 * window rate limit which tracks the number of requests made by a client over a
 * sliding window so that the window moves with time.
 *
 * This algorithm is useful to avoid the stampede problem of the fixed window.
 * It provides smoother rate limiting over time and can prevent a client from
 * making a burst of requests at the start of a window and then being blocked
 * for the rest of the window.
 *
 * @param {SlidingWindowRateLimitOptions} options - The options for the sliding
 * window rate limiting rule.
 * @param {ArcjetMode} options.mode - The block mode of the rule, either
 * `"LIVE"` or `"DRY_RUN"`. `"LIVE"` will block requests when the rate limit is
 * exceeded, and `"DRY_RUN"` will allow all requests while still providing
 * access to the rule results. Defaults to `"DRY_RUN"` if not specified.
 * @param {string | number} options.interval - The time interval for the rate
 * limit. This can be a string like `"60s"` for 60 seconds, `"1h45m"` for 1 hour
 * and 45 minutes, or a number like `60` for 60 seconds. Valid string time units
 * are:
 * - `s` for seconds.
 * - `m` for minutes.
 * - `h` for hours.
 * - `d` for days.
 * @param {number} options.max - The maximum number of requests allowed in the
 * sliding time window.
 * @returns {Primitive} The sliding window rule to provide to the SDK in the
 * `rules` option.
 *
 * @example
 * ```ts
 * slidingWindow({ mode: "LIVE", interval: "60s", max: 100 });
 * ```
 * @example
 * ```ts
 * const aj = arcjet({
 *   key: process.env.ARCJET_KEY,
 *   rules: [
 *     slidingWindow({
 *       mode: "LIVE",
 *       interval: "60s",
 *       max: 100,
 *     })
 *   ],
 * });
 * ```
 * @link https://docs.arcjet.com/rate-limiting/concepts
 * @link https://docs.arcjet.com/rate-limiting/algorithms#sliding-window
 * @link https://docs.arcjet.com/rate-limiting/reference
 */ function slidingWindow(options) {
    validateSlidingWindowOptions(options);
    const mode = options.mode === "LIVE" ? "LIVE" : "DRY_RUN";
    const characteristics = Array.isArray(options.characteristics) ? options.characteristics : undefined;
    const max = options.max;
    const interval = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$duration$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.parse(options.interval);
    return [
        {
            type: "RATE_LIMIT",
            priority: Priority.RateLimit,
            mode,
            characteristics,
            algorithm: "SLIDING_WINDOW",
            max,
            interval
        }
    ];
}
function protocolSensitiveInfoEntitiesToAnalyze(entity) {
    if (typeof entity !== "string") {
        throw new Error("invalid entity type");
    }
    if (entity === "EMAIL") {
        return {
            tag: "email"
        };
    }
    if (entity === "PHONE_NUMBER") {
        return {
            tag: "phone-number"
        };
    }
    if (entity === "IP_ADDRESS") {
        return {
            tag: "ip-address"
        };
    }
    if (entity === "CREDIT_CARD_NUMBER") {
        return {
            tag: "credit-card-number"
        };
    }
    return {
        tag: "custom",
        val: entity
    };
}
function analyzeSensitiveInfoEntitiesToString(entity) {
    if (entity.tag === "email") {
        return "EMAIL";
    }
    if (entity.tag === "ip-address") {
        return "IP_ADDRESS";
    }
    if (entity.tag === "credit-card-number") {
        return "CREDIT_CARD_NUMBER";
    }
    if (entity.tag === "phone-number") {
        return "PHONE_NUMBER";
    }
    return entity.val;
}
function convertAnalyzeDetectedSensitiveInfoEntity(detectedEntities) {
    return detectedEntities.map((detectedEntity)=>{
        return {
            ...detectedEntity,
            identifiedType: analyzeSensitiveInfoEntitiesToString(detectedEntity.identifiedType)
        };
    });
}
/**
 * Arcjet sensitive information detection rule. Applying this rule protects
 * against clients sending you sensitive information such as personally
 * identifiable information (PII) that you do not wish to handle. The rule runs
 * entirely locally so no data ever leaves your environment.
 *
 * This rule includes built-in detections for email addresses, credit/debit card
 * numbers, IP addresses, and phone numbers. You can also provide a custom
 * detection function to identify additional sensitive information.
 *
 * @param {SensitiveInfoOptions} options - The options for the sensitive
 * information detection rule.
 * @param {ArcjetMode} options.mode - The block mode of the rule, either
 * `"LIVE"` or `"DRY_RUN"`. `"LIVE"` will block requests when any of the
 * configured sensitive information types are detected, and `"DRY_RUN"` will
 * allow all requests while still providing access to the rule results. Defaults
 * to `"DRY_RUN"` if not specified.
 * @param {Array<ArcjetSensitiveInfoType>} options.deny - The list of sensitive
 * information types to deny. If provided, the sensitive information types in
 * this list will be denied. You may only provide either `allow` or `deny`, not
 * both. Specify one or more of the following:
 *
 * - `"EMAIL"`
 * - `"PHONE_NUMBER"`
 * - `"IP_ADDRESS"`
 * - `"CREDIT_CARD_NUMBER"`
 * @param {Array<ArcjetSensitiveInfoType>} options.allow - The list of sensitive
 * information types to allow. If provided, types in this list will be allowed
 * and all others will be denied. You may only provide either `allow` or `deny`,
 * not both. The same options apply as for `deny`.
 * @param {DetectSensitiveInfoEntities} options.detect - A custom detection
 * function. The function will take a list of tokens and must return a list of
 * either `undefined`, if the corresponding token in the input list is not
 * sensitive, or the name of the entity if it does match. The number of tokens
 * that are provided to the function is controlled by the `contextWindowSize`
 * option, which defaults to `1`. If you need additional context to perform
 * detections then you can increase this value.
 * @param {number} options.contextWindowSize - The number of tokens to provide
 * to the custom detection function. This defaults to 1 if not specified.
 * @returns {Primitive} The sensitive information rule to provide to the SDK in
 * the `rules` option.
 *
 * @example
 * ```ts
 * sensitiveInfo({ mode: "LIVE", deny: ["EMAIL"] });
 * ```
 * @example
 * ```ts
 * const aj = arcjet({
 *   key: process.env.ARCJET_KEY,
 *   rules: [
 *     sensitiveInfo({
 *       mode: "LIVE",
 *       deny: ["EMAIL"],
 *     })
 *   ],
 * });
 * ```
 * @example
 * Custom detection function:
 * ```ts
 * function detectDash(tokens: string[]): Array<"CONTAINS_DASH" | undefined> {
 *   return tokens.map((token) => {
 *     if (token.includes("-")) {
 *       return "CONTAINS_DASH";
 *     }
 *   });
 * }
 *
 * const aj = arcjet({
 *   key: process.env.ARCJET_KEY,
 *   rules: [
 *     sensitiveInfo({
 *       mode: "LIVE",
 *       deny: ["EMAIL", "CONTAINS_DASH"],
 *       detect: detectDash,
 *       contextWindowSize: 2,
 *     })
 *   ],
 * });
 * ```
 * @link https://docs.arcjet.com/sensitive-info/concepts
 * @link https://docs.arcjet.com/sensitive-info/reference
 */ function sensitiveInfo(options) {
    validateSensitiveInfoOptions(options);
    const mode = options.mode === "LIVE" ? "LIVE" : "DRY_RUN";
    if (typeof options.allow !== "undefined" && typeof options.deny !== "undefined") {
        throw new Error("`sensitiveInfo` options error: `allow` and `deny` cannot be provided together");
    }
    if (typeof options.allow === "undefined" && typeof options.deny === "undefined") {
        throw new Error("`sensitiveInfo` options error: either `allow` or `deny` must be specified");
    }
    return [
        {
            type: "SENSITIVE_INFO",
            priority: Priority.SensitiveInfo,
            mode,
            allow: options.allow || [],
            deny: options.deny || [],
            validate (context, details) {},
            async protect (context, details) {
                const body = await context.getBody();
                if (typeof body === "undefined") {
                    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$protocol$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ArcjetRuleResult"]({
                        ttl: 0,
                        state: "NOT_RUN",
                        conclusion: "ERROR",
                        reason: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$protocol$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ArcjetErrorReason"]("Couldn't read the body of the request to perform sensitive info identification.")
                    });
                }
                let convertedDetect = undefined;
                if (typeof options.detect !== "undefined") {
                    const detect = options.detect;
                    convertedDetect = (tokens)=>{
                        return detect(tokens).filter((e)=>typeof e !== "undefined").map(protocolSensitiveInfoEntitiesToAnalyze);
                    };
                }
                let entitiesTag = "allow";
                let entitiesVal = [];
                if (Array.isArray(options.allow)) {
                    entitiesTag = "allow";
                    entitiesVal = options.allow.filter((e)=>typeof e !== "undefined").map(protocolSensitiveInfoEntitiesToAnalyze);
                }
                if (Array.isArray(options.deny)) {
                    entitiesTag = "deny";
                    entitiesVal = options.deny.filter((e)=>typeof e !== "undefined").map(protocolSensitiveInfoEntitiesToAnalyze);
                }
                const entities = {
                    tag: entitiesTag,
                    val: entitiesVal
                };
                const result = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$analyze$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.detectSensitiveInfo(context, body, entities, options.contextWindowSize || 1, convertedDetect);
                const reason = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$protocol$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ArcjetSensitiveInfoReason"]({
                    denied: convertAnalyzeDetectedSensitiveInfoEntity(result.denied),
                    allowed: convertAnalyzeDetectedSensitiveInfoEntity(result.allowed)
                });
                if (result.denied.length === 0) {
                    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$protocol$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ArcjetRuleResult"]({
                        ttl: 0,
                        state: "RUN",
                        conclusion: "ALLOW",
                        reason
                    });
                } else {
                    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$protocol$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ArcjetRuleResult"]({
                        ttl: 0,
                        state: "RUN",
                        conclusion: "DENY",
                        reason
                    });
                }
            }
        }
    ];
}
/**
 * Arcjet email validation rule. Applying this rule allows you to validate &
 * verify an email address.
 *
 * The first step of the analysis is to validate the email address syntax. This
 * runs locally within the SDK and validates the email address is in the correct
 * format. If the email syntax is valid, the SDK will pass the email address to
 * the Arcjet cloud API to verify the email address. This performs several
 * checks, depending on the rule configuration.
 *
 * @param {EmailOptions} options - The options for the email validation rule.
 * @param {ArcjetMode} options.mode - The block mode of the rule, either
 * `"LIVE"` or `"DRY_RUN"`. `"LIVE"` will block email addresses based on the
 * configuration, and `"DRY_RUN"` will allow all requests while still providing
 * access to the rule results. Defaults to `"DRY_RUN"` if not specified.
 * @param {Array<ArcjetEmailType>} options.deny - The list of email types to
 * deny. If provided, the email types in this list will be denied. You may only
 * provide either `allow` or `deny`, not both. Specify one or more of the
 * following:
 *
 * - `"DISPOSABLE"` - Disposable email addresses.
 * - `"FREE"` - Free email addresses.
 * - `"NO_MX_RECORDS"` - Email addresses with no MX records.
 * - `"NO_GRAVATAR"` - Email addresses with no Gravatar.
 * - `"INVALID"` - Invalid email addresses.
 *
 * @param {Array<ArcjetEmailType>} options.allow - The list of email types to
 * allow. If provided, email addresses in this list will be allowed and all
 * others will be denied. You may only provide either `allow` or `deny`, not
 * both. The same options apply as for `deny`.
 * @returns {Primitive} The email rule to provide to the SDK in the `rules`
 * option.
 *
 * @example
 * ```ts
 * validateEmail({ mode: "LIVE", deny: ["DISPOSABLE", "INVALID"] });
 * ```
 * @example
 * ```ts
 * const aj = arcjet({
 *   key: process.env.ARCJET_KEY,
 *   rules: [
 *     validateEmail({
 *       mode: "LIVE",
 *       deny: ["DISPOSABLE", "INVALID"]
 *     })
 *   ],
 * });
 * ```
 * @link https://docs.arcjet.com/email-validation/concepts
 * @link https://docs.arcjet.com/email-validation/reference
 */ function validateEmail(options) {
    validateEmailOptions(options);
    const mode = options.mode === "LIVE" ? "LIVE" : "DRY_RUN";
    if (typeof options.allow !== "undefined" && typeof options.deny !== "undefined") {
        throw new Error("`validateEmail` options error: `allow` and `deny` cannot be provided together");
    }
    if (typeof options.allow !== "undefined" && typeof options.block !== "undefined") {
        throw new Error("`validateEmail` options error: `allow` and `block` cannot be provided together");
    }
    if (typeof options.deny !== "undefined" && typeof options.block !== "undefined") {
        throw new Error("`validateEmail` options error: `deny` and `block` cannot be provided together, `block` is now deprecated so `deny` should be preferred.");
    }
    if (typeof options.allow === "undefined" && typeof options.deny === "undefined" && typeof options.block === "undefined") {
        throw new Error("`validateEmail` options error: either `allow` or `deny` must be specified");
    }
    const allow = options.allow ?? [];
    const deny = options.deny ?? options.block ?? [];
    const requireTopLevelDomain = options.requireTopLevelDomain ?? true;
    const allowDomainLiteral = options.allowDomainLiteral ?? false;
    let config = {
        tag: "deny-email-validation-config",
        val: {
            requireTopLevelDomain,
            allowDomainLiteral,
            deny: []
        }
    };
    if (typeof options.allow !== "undefined") {
        config = {
            tag: "allow-email-validation-config",
            val: {
                requireTopLevelDomain,
                allowDomainLiteral,
                allow: options.allow
            }
        };
    }
    if (typeof options.deny !== "undefined") {
        config = {
            tag: "deny-email-validation-config",
            val: {
                requireTopLevelDomain,
                allowDomainLiteral,
                deny: options.deny
            }
        };
    }
    if (typeof options.block !== "undefined") {
        config = {
            tag: "deny-email-validation-config",
            val: {
                requireTopLevelDomain,
                allowDomainLiteral,
                deny: options.block
            }
        };
    }
    return [
        {
            type: "EMAIL",
            priority: Priority.EmailValidation,
            mode,
            allow,
            deny,
            requireTopLevelDomain,
            allowDomainLiteral,
            validate (context, details) {
                assert(typeof details.email !== "undefined", "ValidateEmail requires `email` to be set.");
            },
            async protect (context, { email }) {
                const result = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$analyze$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.isValidEmail(context, email, config);
                if (result.validity === "valid") {
                    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$protocol$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ArcjetRuleResult"]({
                        ttl: 0,
                        state: "RUN",
                        conclusion: "ALLOW",
                        reason: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$protocol$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ArcjetEmailReason"]({
                            emailTypes: []
                        })
                    });
                } else {
                    const typedEmailTypes = result.blocked.filter(isEmailType);
                    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$protocol$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ArcjetRuleResult"]({
                        ttl: 0,
                        state: "RUN",
                        conclusion: "DENY",
                        reason: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$protocol$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ArcjetEmailReason"]({
                            emailTypes: typedEmailTypes
                        })
                    });
                }
            }
        }
    ];
}
/**
 * Arcjet bot detection rule. Applying this rule allows you to manage traffic by
 * automated clients and bots.
 *
 * Bots can be good (such as search engine crawlers or monitoring agents) or bad
 * (such as scrapers or automated scripts). Arcjet allows you to configure which
 * bots you want to allow or deny by specific bot names e.g. curl, as well as by
 * category e.g. search engine bots.
 *
 * Bots are detected based on various signals such as the user agent, IP
 * address, DNS records, and more.
 *
 * @param {BotOptions} options - The options for the bot rule.
 * @param {ArcjetMode} options.mode - The block mode of the rule, either
 * `"LIVE"` or `"DRY_RUN"`. `"LIVE"` will block detected bots, and `"DRY_RUN"`
 * will allow all requests while still providing access to the rule results.
 * Defaults to `"DRY_RUN"` if not specified.
 * @param {Array<ArcjetWellKnownBot | ArcjetBotCategory>} options.allow - The
 * list of bots to allow. If provided, only the bots in this list will be
 * allowed and any other detected bot will be denied. If empty, all bots will be
 * denied. You may only provide either `allow` or `deny`, not both. You can use
 * specific bots e.g. `"CURL"` will allow the default user-agent of the `curl`
 * tool. You can also use categories e.g. `"CATEGORY:SEARCH_ENGINE"` will allow
 * all search engine bots. See
 * https://docs.arcjet.com/bot-protection/identifying-bots for the full list of
 * bots and categories.
 * @param {Array<ArcjetWellKnownBot | ArcjetBotCategory>} options.deny - The
 * list of bots to deny. If provided, the bots in this list will be denied and
 * all other detected bots will be allowed. You may only provide either `allow`
 * or `deny`, not both. The same options apply as for `allow`.
 * @returns {Primitive} The bot rule to provide to the SDK in the `rules`
 * option.
 *
 * @example
 * Allows search engine bots and curl, denies all other bots
 *
 * ```ts
 * detectBot({ mode: "LIVE", allow: ["CATEGORY:SEARCH_ENGINE", "CURL"] });
 * ```
 * @example
 * Allows search engine bots and curl, denies all other bots
 *
 * ```ts
 * const aj = arcjet({
 *   key: process.env.ARCJET_KEY,
 *   rules: [
 *     detectBot({
 *       mode: "LIVE",
 *       allow: ["CATEGORY:SEARCH_ENGINE", "CURL"]
 *     })
 *   ],
 * });
 * ```
 * @example
 * Denies AI crawlers, allows all other bots
 *
 * ```ts
 * detectBot({ mode: "LIVE", deny: ["CATEGORY:AI"] });
 * ```
 * @example
 * Denies AI crawlers, allows all other bots
 * ```ts
 * const aj = arcjet({
 *   key: process.env.ARCJET_KEY,
 *   rules: [
 *     detectBot({
 *       mode: "LIVE",
 *       deny: ["CATEGORY:AI"]
 *     })
 *   ],
 * });
 * ```
 * @link https://docs.arcjet.com/bot-protection/concepts
 * @link https://docs.arcjet.com/bot-protection/identifying-bots
 * @link https://docs.arcjet.com/bot-protection/reference
 */ function detectBot(options) {
    validateBotOptions(options);
    const mode = options.mode === "LIVE" ? "LIVE" : "DRY_RUN";
    if (typeof options.allow !== "undefined" && typeof options.deny !== "undefined") {
        throw new Error("`detectBot` options error: `allow` and `deny` cannot be provided together");
    }
    if (typeof options.allow === "undefined" && typeof options.deny === "undefined") {
        throw new Error("`detectBot` options error: either `allow` or `deny` must be specified");
    }
    let config = {
        tag: "allowed-bot-config",
        val: {
            entities: [],
            skipCustomDetect: true
        }
    };
    if (typeof options.allow !== "undefined") {
        config = {
            tag: "allowed-bot-config",
            val: {
                entities: options.allow,
                skipCustomDetect: true
            }
        };
    }
    if (typeof options.deny !== "undefined") {
        config = {
            tag: "denied-bot-config",
            val: {
                entities: options.deny,
                skipCustomDetect: true
            }
        };
    }
    return [
        {
            type: "BOT",
            priority: Priority.BotDetection,
            mode,
            allow: options.allow ?? [],
            deny: options.deny ?? [],
            validate (context, details) {
                if (typeof details.headers === "undefined") {
                    throw new Error("bot detection requires `headers` to be set");
                }
                if (typeof details.headers.has !== "function") {
                    throw new Error("bot detection requires `headers` to extend `Headers`");
                }
                if (!details.headers.has("user-agent")) {
                    throw new Error("bot detection requires user-agent header");
                }
            },
            /**
             * Attempts to call the bot detection on the headers.
             */ async protect (context, request) {
                const result = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$analyze$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.detectBot(context, toAnalyzeRequest(request), config);
                // If this is a bot and of a type that we want to block, then block!
                if (result.denied.length > 0) {
                    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$protocol$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ArcjetRuleResult"]({
                        ttl: 60,
                        state: "RUN",
                        conclusion: "DENY",
                        reason: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$protocol$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ArcjetBotReason"]({
                            allowed: result.allowed,
                            denied: result.denied,
                            verified: result.verified,
                            spoofed: result.spoofed
                        })
                    });
                } else {
                    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$protocol$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ArcjetRuleResult"]({
                        ttl: 0,
                        state: "RUN",
                        conclusion: "ALLOW",
                        reason: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$protocol$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ArcjetBotReason"]({
                            allowed: result.allowed,
                            denied: result.denied,
                            verified: result.verified,
                            spoofed: result.spoofed
                        })
                    });
                }
            }
        }
    ];
}
/**
 * Arcjet Shield WAF rule. Applying this rule protects your application against
 * common attacks, including the OWASP Top 10.
 *
 * The Arcjet Shield WAF analyzes every request to your application to detect
 * suspicious activity. Once a certain suspicion threshold is reached,
 * subsequent requests from that client are blocked for a period of time.
 *
 * @param {ShieldOptions} options - The options for the Shield rule.
 * @param {ArcjetMode} options.mode - The block mode of the rule, either
 * `"LIVE"` or `"DRY_RUN"`. `"LIVE"` will block suspicious requests, and
 * `"DRY_RUN"` will allow all requests while still providing access to the rule
 * results. Defaults to `"DRY_RUN"` if not specified.
 * @returns {Primitive} The Shield rule to provide to the SDK in the `rules`
 * option.
 *
 * @example
 * ```ts
 * shield({ mode: "LIVE" });
 * ```
 * @example
 * ```ts
 * const aj = arcjet({
 *   key: process.env.ARCJET_KEY,
 *   rules: [shield({ mode: "LIVE" })],
 * });
 * ```
 * @link https://docs.arcjet.com/shield/concepts
 * @link https://docs.arcjet.com/shield/reference
 */ function shield(options) {
    validateShieldOptions(options);
    const mode = options.mode === "LIVE" ? "LIVE" : "DRY_RUN";
    return [
        {
            type: "SHIELD",
            priority: Priority.Shield,
            mode
        }
    ];
}
/**
 * Arcjet signup form protection rule. Applying this rule combines rate
 * limiting, bot protection, and email validation to protect your signup forms
 * from abuse. Using this rule will configure the following:
 *
 * - Rate limiting - signup forms are a common target for bots. Arcjet’s rate
 *   limiting helps to prevent bots and other automated or malicious clients
 *   from submitting your signup form too many times in a short period of time.
 * - Bot protection - signup forms are usually exclusively used by humans, which
 *   means that any automated submissions to the form are likely to be
 *   fraudulent.
 * - Email validation - email addresses should be validated to ensure the signup
 *   is coming from a legitimate user with a real email address that can
 *   actually receive messages.
 *
 * @param {ProtectSignupOptions} options - The options for the signup form
 * protection rule.
 * @param {ArcjetMode} options.email.mode - The block mode of the rule, either
 * `"LIVE"` or `"DRY_RUN"`. `"LIVE"` will block email addresses based on the
 * configuration, and `"DRY_RUN"` will allow all requests while still providing
 * access to the rule results. Defaults to `"DRY_RUN"` if not specified.
 * @param {Array<ArcjetEmailType>} options.email.deny - The list of email types
 * to deny. If provided, the email types in this list will be denied. You may
 * only provide either `allow` or `deny`, not both. Specify one or more of the
 * following:
 *
 * - `"DISPOSABLE"` - Disposable email addresses.
 * - `"FREE"` - Free email addresses.
 * - `"NO_MX_RECORDS"` - Email addresses with no MX records.
 * - `"NO_GRAVATAR"` - Email addresses with no Gravatar.
 * - `"INVALID"` - Invalid email addresses.
 *
 * @param {Array<ArcjetEmailType>} options.email.allow - The list of email types
 * to allow. If provided, email addresses in this list will be allowed and all
 * others will be denied. You may only provide either `allow` or `deny`, not
 * both. The same options apply as for `deny`.
 * @param {ArcjetMode} options.bots.mode - The block mode of the rule, either
 * `"LIVE"` or `"DRY_RUN"`. `"LIVE"` will block detected bots, and `"DRY_RUN"`
 * will allow all requests while still providing access to the rule results.
 * Defaults to `"DRY_RUN"` if not specified.
 * @param {Array<ArcjetWellKnownBot | ArcjetBotCategory>} options.bots.allow -
 * The list of bots to allow. If provided, only the bots in this list will be
 * allowed and any other detected bot will be denied. If empty, all bots will be
 * denied. You may only provide either `allow` or `deny`, not both. You can use
 * specific bots e.g. `"CURL"` will allow the default user-agent of the `curl`
 * tool. You can also use categories e.g. `"CATEGORY:SEARCH_ENGINE"` will allow
 * all search engine bots. See
 * https://docs.arcjet.com/bot-protection/identifying-bots for the full list of
 * bots and categories.
 * @param {Array<ArcjetWellKnownBot | ArcjetBotCategory>} options.bots.deny -
 * The list of bots to deny. If provided, the bots in this list will be denied
 * and all other detected bots will be allowed. You may only provide either
 * `allow` or `deny`, not both. The same options apply as for `allow`.
 * @param {SlidingWindowRateLimitOptions} options.rateLimit - The options for
 * the sliding window rate limiting rule.
 * @param {ArcjetMode} options.rateLimit.mode - The block mode of the rule,
 * either `"LIVE"` or `"DRY_RUN"`. `"LIVE"` will block requests when the rate
 * limit is exceeded, and `"DRY_RUN"` will allow all requests while still
 * providing access to the rule results. Defaults to `"DRY_RUN"` if not
 * specified.
 * @param {string | number} options.rateLimit.interval - The time interval for
 * the rate limit. This can be a string like `"60s"` for 60 seconds, `"1h45m"`
 * for 1 hour and 45 minutes, or a number like `60` for 60 seconds. Valid string
 * time units are:
 * - `s` for seconds.
 * - `m` for minutes.
 * - `h` for hours.
 * - `d` for days.
 * @param {number} options.rateLimit.max - The maximum number of requests
 * allowed in the sliding time window.
 * @returns {Primitive} The signup form protection rule to provide to the SDK in
 * the `rules` option.
 *
 * @example
 * Our recommended configuration for most signup forms is:
 *
 * - Block emails with invalid syntax, that are from disposable email providers,
 *   or do not have valid MX records configured.
 * - Block all bots.
 * - Apply a rate limit of 5 submissions per 10 minutes from a single IP
 *   address.
 *
 * ```ts
 * const aj = arcjet({
 *   key: process.env.ARCJET_KEY,
 *   rules: [
 *    protectSignup({
 *      email: {
 *        mode: "LIVE",
 *        block: ["DISPOSABLE", "INVALID", "NO_MX_RECORDS"],
 *      },
 *      bots: {
 *        mode: "LIVE",
 *        allow: [], // block all detected bots
 *      },
 *      rateLimit: {
 *        mode: "LIVE",
 *        interval: "10m",
 *        max: 5,
 *      },
 *    }),
 *  ],
 * });
 * ```
 * @link https://docs.arcjet.com/signup-protection/concepts
 * @link https://docs.arcjet.com/signup-protection/reference
 */ function protectSignup(options) {
    return [
        ...slidingWindow(options.rateLimit),
        ...detectBot(options.bots),
        ...validateEmail(options.email)
    ];
}
/**
 * Create a new Arcjet client with the specified {@link ArcjetOptions}.
 *
 * @param options {ArcjetOptions} Arcjet configuration options.
 */ function arcjet(options) {
    // We destructure here to make the function signature neat when viewed by consumers
    const { key, rules } = options;
    const rt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$runtime$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["runtime"])();
    // TODO: Separate the ArcjetOptions from the SDK Options
    // It is currently optional in the options so users can override it via an SDK
    if (typeof options.log === "undefined") {
        throw new Error("Log is required");
    }
    const log = options.log;
    const perf = new Performance(log);
    // TODO(#207): Remove this when we can default the transport so client is not required
    // It is currently optional in the options so the Next SDK can override it for the user
    if (typeof options.client === "undefined") {
        throw new Error("Client is required");
    }
    const client = options.client;
    // A local cache of block decisions. Might be emphemeral per request,
    // depending on the way the runtime works, but it's worth a try.
    // TODO(#132): Support configurable caching
    const blockCache = new Cache();
    const rootRules = rules.flat(1).sort((a, b)=>a.priority - b.priority);
    async function protect(rules, ctx, request) {
        // This goes against the type definition above, but users might call
        // `protect()` with no value and we don't want to crash
        if (typeof request === "undefined") {
            request = {};
        }
        const details = Object.freeze({
            ip: request.ip,
            method: request.method,
            protocol: request.protocol,
            host: request.host,
            path: request.path,
            headers: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$headers$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"](request.headers),
            cookies: request.cookies,
            query: request.query,
            // TODO(#208): Re-add body
            // body: request.body,
            extra: extraProps(request),
            email: typeof request.email === "string" ? request.email : undefined
        });
        const characteristics = options.characteristics ? [
            ...options.characteristics
        ] : [];
        const waitUntil = lookupWaitUntil();
        const baseContext = {
            key,
            log,
            characteristics,
            waitUntil,
            ...ctx
        };
        let fingerprint = "";
        const logFingerprintPerf = perf.measure("fingerprint");
        try {
            fingerprint = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$analyze$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.generateFingerprint(baseContext, toAnalyzeRequest(details));
            log.debug("fingerprint (%s): %s", rt, fingerprint);
        } catch (error) {
            log.error({
                error
            }, "Failed to build fingerprint. Please verify your Characteristics.");
            const decision = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$protocol$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ArcjetErrorDecision"]({
                ttl: 0,
                reason: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$protocol$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ArcjetErrorReason"](`Failed to build fingerprint - ${errorMessage(error)}`),
                // No results because we couldn't create a fingerprint
                results: []
            });
            // TODO: Consider sending this to Report when we have an infallible fingerprint
            return decision;
        } finally{
            logFingerprintPerf();
        }
        const context = Object.freeze({
            ...baseContext,
            fingerprint,
            runtime: rt
        });
        if (rules.length < 1) {
            // TODO(#607): Error if no rules configured after deprecation period
            log.warn("Calling `protect()` with no rules is deprecated. Did you mean to configure the Shield rule?");
        }
        if (rules.length > 10) {
            log.error("Failure running rules. Only 10 rules may be specified.");
            const decision = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$protocol$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ArcjetErrorDecision"]({
                ttl: 0,
                reason: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$protocol$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ArcjetErrorReason"]("Only 10 rules may be specified"),
                // No results because the sorted rules were too long and we don't want
                // to instantiate a ton of NOT_RUN results
                results: []
            });
            client.report(context, details, decision, // No rules because we've determined they were too long and we don't
            // want to try to send them to the server
            []);
            return decision;
        }
        const results = [];
        for(let idx = 0; idx < rules.length; idx++){
            // Default all rules to NOT_RUN/ALLOW before doing anything
            results[idx] = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$protocol$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ArcjetRuleResult"]({
                ttl: 0,
                state: "NOT_RUN",
                conclusion: "ALLOW",
                reason: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$protocol$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ArcjetReason"]()
            });
            // Add top-level characteristics to all Rate Limit rules that don't already have
            // their own set of characteristics.
            const candidate_rule = rules[idx];
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$protocol$2f$convert$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isRateLimitRule"])(candidate_rule)) {
                if (typeof candidate_rule.characteristics === "undefined") {
                    candidate_rule.characteristics = characteristics;
                    rules[idx] = candidate_rule;
                }
            }
        }
        const logLocalPerf = perf.measure("local");
        try {
            // We have our own local cache which we check first. This doesn't work in
            // serverless environments where every request is isolated, but there may be
            // some instances where the instance is not recycled immediately. If so, we
            // can take advantage of that.
            const logCachePerf = perf.measure("cache");
            const existingBlockReason = blockCache.get(fingerprint);
            logCachePerf();
            // If already blocked then we can async log to the API and return the
            // decision immediately.
            if (existingBlockReason) {
                const decision = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$protocol$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ArcjetDenyDecision"]({
                    ttl: blockCache.ttl(fingerprint),
                    reason: existingBlockReason,
                    // All results will be NOT_RUN because we used a cached decision
                    results
                });
                client.report(context, details, decision, rules);
                log.debug({
                    id: decision.id,
                    conclusion: decision.conclusion,
                    fingerprint,
                    reason: existingBlockReason,
                    runtime: rt
                }, "decide: already blocked");
                return decision;
            }
            for (const [idx, rule] of rules.entries()){
                // This re-assignment is a workaround to a TypeScript error with
                // assertions where the name was introduced via a destructure
                let localRule;
                if (isLocalRule(rule)) {
                    localRule = rule;
                } else {
                    continue;
                }
                const logRulePerf = perf.measure(rule.type);
                try {
                    localRule.validate(context, details);
                    results[idx] = await localRule.protect(context, details);
                    // If a rule didn't return a rule result, we need to stub it to avoid
                    // crashing. This should only happen if a user writes a custom local
                    // rule incorrectly.
                    if (typeof results[idx] === "undefined") {
                        results[idx] = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$protocol$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ArcjetRuleResult"]({
                            ttl: 0,
                            state: "RUN",
                            conclusion: "ERROR",
                            reason: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$protocol$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ArcjetErrorReason"]("rule result missing")
                        });
                    }
                    log.debug({
                        id: results[idx].ruleId,
                        rule: rule.type,
                        fingerprint,
                        path: details.path,
                        runtime: rt,
                        ttl: results[idx].ttl,
                        conclusion: results[idx].conclusion,
                        reason: results[idx].reason
                    }, "Local rule result:");
                } catch (err) {
                    log.error("Failure running rule: %s due to %s", rule.type, errorMessage(err));
                    results[idx] = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$protocol$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ArcjetRuleResult"]({
                        ttl: 0,
                        state: "RUN",
                        conclusion: "ERROR",
                        reason: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$protocol$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ArcjetErrorReason"](err)
                    });
                } finally{
                    logRulePerf();
                }
                if (results[idx].isDenied()) {
                    const decision = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$protocol$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ArcjetDenyDecision"]({
                        ttl: results[idx].ttl,
                        reason: results[idx].reason,
                        results
                    });
                    // Only a DENY decision is reported to avoid creating 2 entries for a
                    // request. Upon ALLOW, the `decide` call will create an entry for the
                    // request.
                    client.report(context, details, decision, rules);
                    // If we're not in DRY_RUN mode, we want to cache non-zero TTL results
                    // and return this DENY decision.
                    if (rule.mode !== "DRY_RUN") {
                        if (results[idx].ttl > 0) {
                            log.debug({
                                fingerprint,
                                conclusion: decision.conclusion,
                                reason: decision.reason
                            }, "Caching decision for %d seconds", decision.ttl);
                            blockCache.set(fingerprint, decision.reason, nowInSeconds() + decision.ttl);
                        }
                        return decision;
                    }
                    log.warn(`Dry run mode is enabled for "%s" rule. Overriding decision. Decision was: %s`, rule.type, decision.conclusion);
                }
            }
        } finally{
            logLocalPerf();
        }
        // With no cached values, we take a decision remotely. We use a timeout to
        // fail open.
        const logRemotePerf = perf.measure("remote");
        try {
            const logDediceApiPerf = perf.measure("decideApi");
            const decision = await client.decide(context, details, rules).finally(()=>{
                logDediceApiPerf();
            });
            // If the decision is to block and we have a non-zero TTL, we cache the
            // block locally
            if (decision.isDenied() && decision.ttl > 0) {
                log.debug("decide: Caching block locally for %d seconds", decision.ttl);
                blockCache.set(fingerprint, decision.reason, nowInSeconds() + decision.ttl);
            }
            return decision;
        } catch (err) {
            log.error("Encountered problem getting remote decision: %s", errorMessage(err));
            const decision = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$protocol$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ArcjetErrorDecision"]({
                ttl: 0,
                reason: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$protocol$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ArcjetErrorReason"](err),
                results
            });
            client.report(context, details, decision, rules);
            return decision;
        } finally{
            logRemotePerf();
        }
    }
    // This is a separate function so it can be called recursively
    function withRule(baseRules, rule) {
        const rules = [
            ...baseRules,
            ...rule
        ].sort((a, b)=>a.priority - b.priority);
        return Object.freeze({
            withRule (rule) {
                return withRule(rules, rule);
            },
            async protect (ctx, request) {
                return protect(rules, ctx, request);
            }
        });
    }
    return Object.freeze({
        withRule (rule) {
            return withRule(rootRules, rule);
        },
        async protect (ctx, request) {
            return protect(rootRules, ctx, request);
        }
    });
}
;
}}),
"[project]/node_modules/arcjet/index.js [app-rsc] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$protocol$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@arcjet/protocol/index.js [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$protocol$2f$convert$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@arcjet/protocol/convert.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$analyze$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@arcjet/analyze/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$duration$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@arcjet/duration/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$headers$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@arcjet/headers/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$runtime$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@arcjet/runtime/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$arcjet$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/arcjet/index.js [app-rsc] (ecmascript) <locals>");
}}),
"[project]/node_modules/@arcjet/ip/index.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>findIP)
});
function parseXForwardedFor(value) {
    if (typeof value !== "string") {
        return [];
    }
    const forwardedIps = [];
    // As per MDN X-Forwarded-For Headers documentation at
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Forwarded-For
    // The `x-forwarded-for` header may return one or more IP addresses as
    // "client IP, proxy 1 IP, proxy 2 IP", so we want to split by the comma and
    // trim each item.
    for (const item of value.split(",")){
        forwardedIps.push(item.trim());
    }
    return forwardedIps;
}
function isTrustedProxy(ip, proxies) {
    if (Array.isArray(proxies) && proxies.length > 0) {
        return proxies.includes(ip);
    }
    return false;
}
function isIPv4Tuple(octets) {
    if (typeof octets === "undefined") {
        return false;
    }
    return octets.length === 4;
}
function isIPv6Tuple(octets) {
    if (typeof octets === "undefined") {
        return false;
    }
    return octets.length === 8;
}
function u16FromBytes(bytes) {
    const u8 = new Uint8Array(bytes);
    return new Uint16Array(u8.buffer)[0];
}
function u32FromBytes(bytes) {
    const u8 = new Uint8Array(bytes);
    return new Uint32Array(u8.buffer)[0];
}
// This Parser and "is global" comparisons are a TypeScript implementation of
// similar code in the Rust stdlib with only slight deviations as noted.
//
// We want to mirror Rust's logic as close as possible, because we'll be relying
// on its implementation when we add a Wasm library to determine IPs and only
// falling back to JavaScript in non-Wasm environments.
//
// Parser source:
// https://github.com/rust-lang/rust/blob/07921b50ba6dcb5b2984a1dba039a38d85bffba2/library/core/src/net/parser.rs#L34
// Comparison source:
// https://github.com/rust-lang/rust/blob/87e1447aadaa2899ff6ccabe1fa669eb50fb60a1/library/core/src/net/ip_addr.rs#L749
// https://github.com/rust-lang/rust/blob/87e1447aadaa2899ff6ccabe1fa669eb50fb60a1/library/core/src/net/ip_addr.rs#L1453
//
// Licensed: The MIT License (MIT)
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions: The above copyright
// notice and this permission notice shall be included in all copies or
// substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.
class Parser {
    state;
    constructor(input){
        this.state = input;
    }
    readAtomically(inner) {
        const state = this.state;
        const result = inner(this);
        if (typeof result === "undefined") {
            this.state = state;
        }
        return result;
    }
    peakChar() {
        return this.state[0];
    }
    readChar() {
        const b = this.state[0];
        this.state = this.state.slice(1);
        return b;
    }
    readGivenChar(target) {
        return this.readAtomically((p)=>{
            const c = p.readChar();
            if (c === target) {
                return c;
            }
        });
    }
    readSeparator(sep, index, inner) {
        return this.readAtomically((p)=>{
            if (index > 0) {
                const c = p.readGivenChar(sep);
                if (typeof c === "undefined") {
                    return;
                }
            }
            return inner(p);
        });
    }
    readNumber(radix, maxDigits, allowZeroPrefix = false) {
        return this.readAtomically((p)=>{
            let result = 0;
            let digitCount = 0;
            const hasLeadingZero = p.peakChar() === "0";
            function nextCharAsDigit() {
                return p.readAtomically((p)=>{
                    const c = p.readChar();
                    if (c) {
                        const n = parseInt(c, radix);
                        if (!isNaN(n)) {
                            return n;
                        }
                    }
                });
            }
            for(let digit = nextCharAsDigit(); digit !== undefined; digit = nextCharAsDigit()){
                result = result * radix;
                result = result + digit;
                digitCount += 1;
                if (typeof maxDigits !== "undefined") {
                    if (digitCount > maxDigits) {
                        return;
                    }
                }
            }
            if (digitCount === 0) {
                return;
            } else if (!allowZeroPrefix && hasLeadingZero && digitCount > 1) {
                return;
            } else {
                return result;
            }
        });
    }
    readIPv4Address() {
        return this.readAtomically((p)=>{
            const groups = [];
            for(let idx = 0; idx < 4; idx++){
                const result = p.readSeparator(".", idx, (p)=>{
                    // Disallow octal number in IP string
                    // https://tools.ietf.org/html/rfc6943#section-3.1.1
                    return p.readNumber(10, 3, false);
                });
                if (result === undefined) {
                    return;
                } else {
                    groups.push(result);
                }
            }
            return groups;
        });
    }
    readIPv6Address() {
        // Read a chunk of an IPv6 address into `groups`. Returns the number of
        // groups read, along with a bool indicating if an embedded trailing IPv4
        // address was read. Specifically, read a series of colon-separated IPv6
        // groups (0x0000 - 0xFFFF), with an optional trailing embedded IPv4 address
        const readGroups = (p, groups)=>{
            const limit = groups.length;
            for (const i of groups.keys()){
                // Try to read a trailing embedded IPv4 address. There must be at least
                // two groups left
                if (i < limit - 1) {
                    const ipv4 = p.readSeparator(":", i, (p)=>p.readIPv4Address());
                    if (isIPv4Tuple(ipv4)) {
                        const [one, two, three, four] = ipv4;
                        groups[i + 0] = u16FromBytes([
                            one,
                            two
                        ]);
                        groups[i + 1] = u16FromBytes([
                            three,
                            four
                        ]);
                        return [
                            i + 2,
                            true
                        ];
                    }
                }
                const group = p.readSeparator(":", i, (p)=>p.readNumber(16, 4, true));
                if (typeof group !== "undefined") {
                    groups[i] = group;
                } else {
                    return [
                        i,
                        false
                    ];
                }
            }
            return [
                groups.length,
                false
            ];
        };
        return this.readAtomically((p)=>{
            // Read the front part of the address; either the whole thing, or up
            // to the first ::
            const head = new Uint16Array(8);
            const [headSize, headIPv4] = readGroups(p, head);
            if (headSize === 8) {
                return head;
            }
            // IPv4 part is not allowed before `::`
            if (headIPv4) {
                return;
            }
            // Read `::` if previous code parsed less than 8 groups.
            // `::` indicates one or more groups of 16 bits of zeros.
            if (typeof p.readGivenChar(":") === "undefined") {
                return;
            }
            if (typeof p.readGivenChar(":") === "undefined") {
                return;
            }
            // Read the back part of the address. The :: must contain at least one
            // set of zeroes, so our max length is 7.
            const tail = new Uint16Array(7);
            const limit = 8 - (headSize + 1);
            const [tailSize, _] = readGroups(p, tail.subarray(0, limit));
            head.set(tail.slice(0, tailSize), 8 - tailSize);
            return head;
        });
    }
    readPort() {
        return this.readAtomically((p)=>{
            if (typeof p.readGivenChar(":") !== "undefined") {
                return p.readNumber(10, undefined, true);
            }
        });
    }
    readScopeId() {
        return this.readAtomically((p)=>{
            if (typeof p.readGivenChar("%") !== "undefined") {
                return p.readNumber(10, undefined, true);
            }
        });
    }
}
const IPV4_BROADCAST = u32FromBytes([
    255,
    255,
    255,
    255
]);
function isGlobalIPv4(s, proxies) {
    if (typeof s !== "string") {
        return false;
    }
    const parser = new Parser(s);
    const octets = parser.readIPv4Address();
    if (!isIPv4Tuple(octets)) {
        return false;
    }
    if (isTrustedProxy(s, proxies)) {
        return false;
    }
    // Rust doesn't check the remaining state when parsing an IPv4. However, we
    // want to ensure we have exactly an IP (with optionally a port), so we parse
    // it and then check remaining parser state.
    parser.readPort();
    if (parser.state.length !== 0) {
        return false;
    }
    // "This network"
    if (octets[0] === 0) {
        return false;
    }
    // Private IPv4 address ranges
    if (octets[0] === 10) {
        return false;
    }
    if (octets[0] === 172 && octets[1] >= 16 && octets[1] <= 31) {
        return false;
    }
    if (octets[0] === 192 && octets[1] === 168) {
        return false;
    }
    // Loopback address
    if (octets[0] === 127) {
        return false;
    }
    // Shared range
    if (octets[0] === 100 && (octets[1] & 0b1100_0000) === 0b0100_0000) {
        return false;
    }
    // Link-local range
    if (octets[0] === 169 && octets[1] === 254) {
        return false;
    }
    // addresses reserved for future protocols (`192.0.0.0/24`)
    if (octets[0] === 192 && octets[1] === 0 && octets[2] === 0) {
        return false;
    }
    // Documentation ranges
    if (octets[0] === 192 && octets[1] === 0 && octets[2] === 2) {
        return false;
    }
    if (octets[0] === 198 && octets[1] === 51 && octets[2] === 100) {
        return false;
    }
    if (octets[0] === 203 && octets[1] === 0 && octets[2] === 113) {
        return false;
    }
    // Benchmarking range
    if (octets[0] === 198 && (octets[1] & 0xfe) === 18) {
        return false;
    }
    const isBroadcast = u32FromBytes(octets) === IPV4_BROADCAST;
    // Reserved range
    if ((octets[0] & 240) === 240 && !isBroadcast) {
        return false;
    }
    // Broadcast address
    if (isBroadcast) {
        return false;
    }
    for (const octet of octets){
        if (octet < 0 || octet > 255) {
            return false;
        }
    }
    return true;
}
function isGlobalIPv6(s, proxies) {
    if (typeof s !== "string") {
        return false;
    }
    const parser = new Parser(s);
    const segments = parser.readIPv6Address();
    if (!isIPv6Tuple(segments)) {
        return false;
    }
    if (isTrustedProxy(s, proxies)) {
        return false;
    }
    // Rust doesn't check the remaining state when parsing an IPv6. However, we
    // want to ensure we have exactly an IP (with optionally a scope id), so we
    // parse it and then check remaining parser state.
    // TODO: We don't support an IPv6 address with a port because that seems to
    // require wrapping the address and scope in `[]`, e.g. `[:ffff%1]:8080`
    parser.readScopeId();
    if (parser.state.length !== 0) {
        return false;
    }
    // Unspecified address
    if (segments[0] === 0 && segments[1] === 0 && segments[2] === 0 && segments[3] === 0 && segments[4] === 0 && segments[5] === 0 && segments[6] === 0 && segments[7] === 0) {
        return false;
    }
    // Loopback address
    if (segments[0] === 0 && segments[1] === 0 && segments[2] === 0 && segments[3] === 0 && segments[4] === 0 && segments[5] === 0 && segments[6] === 0 && segments[7] === 0x1) {
        return false;
    }
    // IPv4-mapped Address (`::ffff:0:0/96`)
    if (segments[0] === 0 && segments[1] === 0 && segments[2] === 0 && segments[3] === 0 && segments[4] === 0 && segments[5] === 0xffff) {
        return false;
    }
    // IPv4-IPv6 Translat. (`64:ff9b:1::/48`)
    if (segments[0] === 0x64 && segments[1] === 0xff9b && segments[2] === 1) {
        return false;
    }
    // Discard-Only Address Block (`100::/64`)
    if (segments[0] === 0x100 && segments[1] === 0 && segments[2] === 0 && segments[3] === 0) {
        return false;
    }
    // IETF Protocol Assignments (`2001::/23`)
    if (segments[0] === 0x2001 && segments[1] < 0x200) {
        // Port Control Protocol Anycast (`2001:1::1`)
        if (segments[0] === 0x2001 && segments[1] === 1 && segments[2] === 0 && segments[3] === 0 && segments[4] === 0 && segments[5] === 0 && segments[6] === 0 && segments[7] === 1) {
            return true;
        }
        // Traversal Using Relays around NAT Anycast (`2001:1::2`)
        if (segments[0] === 0x2001 && segments[1] === 1 && segments[2] === 0 && segments[3] === 0 && segments[4] === 0 && segments[5] === 0 && segments[6] === 0 && segments[7] === 2) {
            return true;
        }
        // AMT (`2001:3::/32`)
        if (segments[0] === 0x2001 && segments[1] === 3) {
            return true;
        }
        // AS112-v6 (`2001:4:112::/48`)
        if (segments[0] === 0x2001 && segments[1] === 4 && segments[2] === 0x112) {
            return true;
        }
        // ORCHIDv2 (`2001:20::/28`)
        if (segments[0] === 0x2001 && segments[1] >= 0x20 && segments[1] <= 0x2f) {
            return true;
        }
        // Benchmarking range (and others)
        return false;
    }
    // Documentation range
    if (segments[0] === 0x2001 && segments[1] === 0xdb8) {
        return false;
    }
    // Unique local range
    if ((segments[0] & 0xfe00) === 0xfc00) {
        return false;
    }
    // Unicast link local range
    if ((segments[0] & 0xffc0) === 0xfe80) {
        return false;
    }
    return true;
}
function isGlobalIP(s, proxies) {
    if (isGlobalIPv4(s, proxies)) {
        return true;
    }
    if (isGlobalIPv6(s, proxies)) {
        return true;
    }
    return false;
}
function isHeaders(val) {
    return typeof val.get === "function";
}
function getHeader(headers, headerKey) {
    if (isHeaders(headers)) {
        return headers.get(headerKey);
    } else {
        const headerValue = headers[headerKey];
        if (Array.isArray(headerValue)) {
            return headerValue.join(",");
        } else {
            return headerValue;
        }
    }
}
// Heavily based on https://github.com/pbojinov/request-ip
//
// Licensed: The MIT License (MIT) Copyright (c) 2022 Petar Bojinov -
// petarbojinov+github@gmail.com
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions: The above copyright
// notice and this permission notice shall be included in all copies or
// substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.
function findIP(request, options = {}) {
    const { platform, proxies } = options;
    // Prefer anything available via the platform over headers since headers can
    // be set by users. Only if we don't have an IP available in `request` do we
    // search the `headers`.
    if (isGlobalIP(request.ip, proxies)) {
        return request.ip;
    }
    const socketRemoteAddress = request.socket?.remoteAddress;
    if (isGlobalIP(socketRemoteAddress, proxies)) {
        return socketRemoteAddress;
    }
    const infoRemoteAddress = request.info?.remoteAddress;
    if (isGlobalIP(infoRemoteAddress, proxies)) {
        return infoRemoteAddress;
    }
    // AWS Api Gateway + Lambda
    const requestContextIdentitySourceIP = request.requestContext?.identity?.sourceIp;
    if (isGlobalIP(requestContextIdentitySourceIP, proxies)) {
        return requestContextIdentitySourceIP;
    }
    // Validate we have some object for `request.headers`
    if (typeof request.headers !== "object" || request.headers === null) {
        return "";
    }
    // Platform-specific headers should only be accepted when we can determine
    // that we are running on that platform. For example, the `CF-Connecting-IP`
    // header should only be accepted when running on Cloudflare; otherwise, it
    // can be spoofed.
    if (platform === "cloudflare") {
        // CF-Connecting-IPv6: https://developers.cloudflare.com/fundamentals/reference/http-request-headers/#cf-connecting-ipv6
        const cfConnectingIPv6 = getHeader(request.headers, "cf-connecting-ipv6");
        if (isGlobalIPv6(cfConnectingIPv6, proxies)) {
            return cfConnectingIPv6;
        }
        // CF-Connecting-IP: https://developers.cloudflare.com/fundamentals/reference/http-request-headers/#cf-connecting-ip
        const cfConnectingIP = getHeader(request.headers, "cf-connecting-ip");
        if (isGlobalIP(cfConnectingIP, proxies)) {
            return cfConnectingIP;
        }
        // If we are using a platform check and don't have a Global IP, we exit
        // early with an empty IP since the more generic headers shouldn't be
        // trusted over the platform-specific headers.
        return "";
    }
    // Fly.io: https://fly.io/docs/machines/runtime-environment/#fly_app_name
    if (platform === "fly-io") {
        // Fly-Client-IP: https://fly.io/docs/networking/request-headers/#fly-client-ip
        const flyClientIP = getHeader(request.headers, "fly-client-ip");
        if (isGlobalIP(flyClientIP, proxies)) {
            return flyClientIP;
        }
        // If we are using a platform check and don't have a Global IP, we exit
        // early with an empty IP since the more generic headers shouldn't be
        // trusted over the platform-specific headers.
        return "";
    }
    if (platform === "vercel") {
        // https://vercel.com/docs/edge-network/headers/request-headers#x-real-ip
        // Also used by `@vercel/functions`, see:
        // https://github.com/vercel/vercel/blob/d7536d52c87712b1b3f83e4b0fd535a1fb7e384c/packages/functions/src/headers.ts#L12
        const xRealIP = getHeader(request.headers, "x-real-ip");
        if (isGlobalIP(xRealIP, proxies)) {
            return xRealIP;
        }
        // https://vercel.com/docs/edge-network/headers/request-headers#x-vercel-forwarded-for
        // By default, it seems this will be 1 address, but they discuss trusted
        // proxy forwarding so we try to parse it like normal. See
        // https://vercel.com/docs/edge-network/headers/request-headers#custom-x-forwarded-for-ip
        const xVercelForwardedFor = getHeader(request.headers, "x-vercel-forwarded-for");
        const xVercelForwardedForItems = parseXForwardedFor(xVercelForwardedFor);
        // As per MDN X-Forwarded-For Headers documentation at
        // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Forwarded-For
        // We may find more than one IP in the `x-forwarded-for` header. Since the
        // first IP will be closest to the user (and the most likely to be spoofed),
        // we want to iterate tail-to-head so we reverse the list.
        for (const item of xVercelForwardedForItems.reverse()){
            if (isGlobalIP(item, proxies)) {
                return item;
            }
        }
        // https://vercel.com/docs/edge-network/headers/request-headers#x-forwarded-for
        // By default, it seems this will be 1 address, but they discuss trusted
        // proxy forwarding so we try to parse it like normal. See
        // https://vercel.com/docs/edge-network/headers/request-headers#custom-x-forwarded-for-ip
        const xForwardedFor = getHeader(request.headers, "x-forwarded-for");
        const xForwardedForItems = parseXForwardedFor(xForwardedFor);
        // As per MDN X-Forwarded-For Headers documentation at
        // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Forwarded-For
        // We may find more than one IP in the `x-forwarded-for` header. Since the
        // first IP will be closest to the user (and the most likely to be spoofed),
        // we want to iterate tail-to-head so we reverse the list.
        for (const item of xForwardedForItems.reverse()){
            if (isGlobalIP(item, proxies)) {
                return item;
            }
        }
        // If we are using a platform check and don't have a Global IP, we exit
        // early with an empty IP since the more generic headers shouldn't be
        // trusted over the platform-specific headers.
        return "";
    }
    // Standard headers used by Amazon EC2, Heroku, and others.
    const xClientIP = getHeader(request.headers, "x-client-ip");
    if (isGlobalIP(xClientIP, proxies)) {
        return xClientIP;
    }
    // Load-balancers (AWS ELB) or proxies.
    const xForwardedFor = getHeader(request.headers, "x-forwarded-for");
    const xForwardedForItems = parseXForwardedFor(xForwardedFor);
    // As per MDN X-Forwarded-For Headers documentation at
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Forwarded-For
    // We may find more than one IP in the `x-forwarded-for` header. Since the
    // first IP will be closest to the user (and the most likely to be spoofed),
    // we want to iterate tail-to-head so we reverse the list.
    for (const item of xForwardedForItems.reverse()){
        if (isGlobalIP(item, proxies)) {
            return item;
        }
    }
    // DigitalOcean.
    // DO-Connecting-IP: https://www.digitalocean.com/community/questions/app-platform-client-ip
    const doConnectingIP = getHeader(request.headers, "do-connecting-ip");
    if (isGlobalIP(doConnectingIP, proxies)) {
        return doConnectingIP;
    }
    // Fastly and Firebase hosting header (When forwared to cloud function)
    // Fastly-Client-IP
    const fastlyClientIP = getHeader(request.headers, "fastly-client-ip");
    if (isGlobalIP(fastlyClientIP, proxies)) {
        return fastlyClientIP;
    }
    // Akamai
    // True-Client-IP
    const trueClientIP = getHeader(request.headers, "true-client-ip");
    if (isGlobalIP(trueClientIP, proxies)) {
        return trueClientIP;
    }
    // Default nginx proxy/fcgi; alternative to x-forwarded-for, used by some proxies
    // X-Real-IP
    const xRealIP = getHeader(request.headers, "x-real-ip");
    if (isGlobalIP(xRealIP, proxies)) {
        return xRealIP;
    }
    // Rackspace LB and Riverbed's Stingray?
    const xClusterClientIP = getHeader(request.headers, "x-cluster-client-ip");
    if (isGlobalIP(xClusterClientIP, proxies)) {
        return xClusterClientIP;
    }
    const xForwarded = getHeader(request.headers, "x-forwarded");
    if (isGlobalIP(xForwarded, proxies)) {
        return xForwarded;
    }
    const forwardedFor = getHeader(request.headers, "forwarded-for");
    if (isGlobalIP(forwardedFor, proxies)) {
        return forwardedFor;
    }
    const forwarded = getHeader(request.headers, "forwarded");
    if (isGlobalIP(forwarded, proxies)) {
        return forwarded;
    }
    // Google Cloud App Engine
    // X-Appengine-User-IP: https://cloud.google.com/appengine/docs/standard/reference/request-headers?tab=node.js
    const xAppEngineUserIP = getHeader(request.headers, "x-appengine-user-ip");
    if (isGlobalIP(xAppEngineUserIP, proxies)) {
        return xAppEngineUserIP;
    }
    return "";
}
;
}}),
"[project]/node_modules/@arcjet/env/index.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "apiKey": (()=>apiKey),
    "baseUrl": (()=>baseUrl),
    "isDevelopment": (()=>isDevelopment),
    "logLevel": (()=>logLevel),
    "platform": (()=>platform)
});
function platform(env) {
    if (typeof env["FLY_APP_NAME"] === "string" && env["FLY_APP_NAME"] !== "") {
        return "fly-io";
    }
    if (typeof env["VERCEL"] === "string" && env["VERCEL"] === "1") {
        return "vercel";
    }
}
function isDevelopment(env) {
    return env.NODE_ENV === "development" || env.MODE === "development" || env.ARCJET_ENV === "development";
}
function logLevel(env) {
    const level = env["ARCJET_LOG_LEVEL"];
    switch(level){
        case "debug":
        case "info":
        case "warn":
        case "error":
            return level;
        default:
            // Default to warn if not set
            return "warn";
    }
}
const baseUrlAllowed = [
    "https://decide.arcjet.com",
    "https://decide.arcjettest.com",
    "https://fly.decide.arcjet.com",
    "https://fly.decide.arcjettest.com",
    "https://decide.arcjet.orb.local:4082"
];
function baseUrl(env) {
    // TODO(#90): Remove this conditional before 1.0.0
    if (isDevelopment(env)) {
        if (env["ARCJET_BASE_URL"]) {
            return env["ARCJET_BASE_URL"];
        }
        // If we're running on fly.io, use the Arcjet Decide Service hosted on fly
        // Ref: https://fly.io/docs/machines/runtime-environment/#environment-variables
        if (platform(env) === "fly-io") {
            return "https://fly.decide.arcjet.com";
        }
        return "https://decide.arcjet.com";
    } else {
        // Use ARCJET_BASE_URL if it is set and belongs to our allowlist; otherwise
        // use the hardcoded default.
        if (typeof env["ARCJET_BASE_URL"] === "string" && baseUrlAllowed.includes(env["ARCJET_BASE_URL"])) {
            return env["ARCJET_BASE_URL"];
        }
        // If we're running on fly.io, use the Arcjet Decide Service hosted on fly
        // Ref: https://fly.io/docs/machines/runtime-environment/#environment-variables
        if (platform(env) === "fly-io") {
            return "https://fly.decide.arcjet.com";
        }
        return "https://decide.arcjet.com";
    }
}
function apiKey(env) {
    const key = env["ARCJET_KEY"];
    if (typeof key === "string" && key.startsWith("ajkey_")) {
        return key;
    }
}
;
}}),
"[project]/node_modules/@arcjet/sprintf/index.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>sprintf)
});
function bigintReplacer(key, value) {
    if (typeof value === "bigint") {
        return "[BigInt]";
    }
    return value;
}
// TODO: Deduplicate this and logger implementation
function tryStringify(o) {
    try {
        return JSON.stringify(o, bigintReplacer);
    } catch (e) {
        return `"[Circular]"`;
    }
}
const PERCENT_CODE = 37; /* % */ 
const LOWERCASE_D_CODE = 100; /* d */ 
const LOWERCASE_F_CODE = 102; /* f */ 
const LOWERCASE_I_CODE = 105; /* i */ 
const UPPERCASE_O_CODE = 79; /* O */ 
const LOWERCASE_O_CODE = 111; /* o */ 
const LOWERCASE_J_CODE = 106; /* j */ 
const LOWERCASE_S_CODE = 115; /* s */ 
// Heavily based on https://github.com/pinojs/quick-format-unescaped
//
// The MIT License (MIT)
//
// Copyright (c) 2016-2019 David Mark Clements
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.
function sprintf(str, ...args) {
    if (typeof str !== "string") {
        throw new TypeError("First argument must be a string");
    }
    const argsLength = args.length;
    if (argsLength === 0) {
        return str;
    }
    let output = "";
    let argIdx = 0;
    let lastPosition = -1;
    const strLength = str.length;
    for(let i = 0; i < strLength;){
        if (str.charCodeAt(i) === PERCENT_CODE && i + 1 < strLength) {
            lastPosition = lastPosition > -1 ? lastPosition : 0;
            switch(str.charCodeAt(i + 1)){
                case LOWERCASE_D_CODE:
                case LOWERCASE_F_CODE:
                    {
                        if (argIdx >= argsLength) {
                            break;
                        }
                        const arg = args[argIdx];
                        if (typeof arg !== "number") {
                            break;
                        }
                        if (lastPosition < i) {
                            output += str.slice(lastPosition, i);
                        }
                        output += arg;
                        lastPosition = i + 2;
                        i++;
                        break;
                    }
                case LOWERCASE_I_CODE:
                    {
                        if (argIdx >= argsLength) {
                            break;
                        }
                        const arg = args[argIdx];
                        if (typeof arg !== "number") {
                            break;
                        }
                        if (lastPosition < i) {
                            output += str.slice(lastPosition, i);
                        }
                        output += Math.floor(arg);
                        lastPosition = i + 2;
                        i++;
                        break;
                    }
                case UPPERCASE_O_CODE:
                case LOWERCASE_O_CODE:
                case LOWERCASE_J_CODE:
                    {
                        if (argIdx >= argsLength) {
                            break;
                        }
                        const arg = args[argIdx];
                        if (arg === undefined) {
                            break;
                        }
                        if (lastPosition < i) {
                            output += str.slice(lastPosition, i);
                        }
                        if (typeof arg === "string") {
                            output += `'${arg}'`;
                            lastPosition = i + 2;
                            i++;
                            break;
                        }
                        if (typeof arg === "bigint") {
                            output += `"[BigInt]"`;
                            lastPosition = i + 2;
                            i++;
                            break;
                        }
                        if (typeof arg === "function") {
                            output += arg.name || "<anonymous>";
                            lastPosition = i + 2;
                            i++;
                            break;
                        }
                        output += tryStringify(arg);
                        lastPosition = i + 2;
                        i++;
                        break;
                    }
                case LOWERCASE_S_CODE:
                    {
                        if (argIdx >= argsLength) {
                            break;
                        }
                        const arg = args[argIdx];
                        if (typeof arg !== "string") {
                            break;
                        }
                        if (lastPosition < i) {
                            output += str.slice(lastPosition, i);
                        }
                        output += arg;
                        lastPosition = i + 2;
                        i++;
                        break;
                    }
                case PERCENT_CODE:
                    {
                        if (lastPosition < i) {
                            output += str.slice(lastPosition, i);
                        }
                        output += "%";
                        lastPosition = i + 2;
                        i++;
                        argIdx--;
                        break;
                    }
            }
            ++argIdx;
        }
        ++i;
    }
    if (lastPosition === -1) {
        return str;
    }
    if (lastPosition < strLength) {
        output += str.slice(lastPosition);
    }
    return output;
}
;
}}),
"[project]/node_modules/@arcjet/logger/index.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "Logger": (()=>Logger)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$sprintf$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@arcjet/sprintf/index.js [app-rsc] (ecmascript)");
;
function bigintReplacer(key, value) {
    if (typeof value === "bigint") {
        return "[BigInt]";
    }
    return value;
}
// TODO: Deduplicate this and sprintf implementation
function tryStringify(o) {
    try {
        return JSON.stringify(o, bigintReplacer);
    } catch (e) {
        return "[Circular]";
    }
}
const PREFIX = "✦Aj";
function getMessage(obj, msg, args) {
    // The first argument was the message so juggle the args
    if (typeof obj === "string") {
        args = [
            msg,
            ...args
        ];
        msg = obj;
    }
    // Prefer a string message over `obj.msg`, as per Pino:
    // https://github.com/pinojs/pino/blob/8db130eba0439e61c802448d31eb1998cebfbc98/docs/api.md#message-string
    if (typeof msg === "string") {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$sprintf$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(msg, ...args);
    }
    if (typeof obj === "object" && obj !== null && "msg" in obj && typeof obj.msg === "string") {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$sprintf$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(obj.msg, [
            msg,
            ...args
        ]);
    }
}
function getOutput(obj, msg, args) {
    let output = getMessage(obj, msg, args);
    if (typeof output !== "string") {
        return;
    }
    if (typeof obj === "object" && obj !== null) {
        for (const [key, value] of Object.entries(obj)){
            output += `\n      ${key}: ${tryStringify(value)}`;
        }
    }
    return output;
}
class Logger {
    #logLevel;
    constructor(opts){
        if (typeof opts.level !== "string") {
            throw new Error(`Invalid log level`);
        }
        switch(opts.level){
            case "debug":
                this.#logLevel = 0;
                break;
            case "info":
                this.#logLevel = 1;
                break;
            case "warn":
                this.#logLevel = 2;
                break;
            case "error":
                this.#logLevel = 3;
                break;
            default:
                {
                    throw new Error(`Unknown log level: ${opts.level}`);
                }
        }
    }
    debug(obj, msg, ...args) {
        if (this.#logLevel <= 0) {
            const output = getOutput(obj, msg, args);
            if (typeof output !== "undefined") {
                console.debug(`${PREFIX} DEBUG ${output}`);
            }
        }
    }
    info(obj, msg, ...args) {
        if (this.#logLevel <= 1) {
            const output = getOutput(obj, msg, args);
            if (typeof output !== "undefined") {
                console.info(`${PREFIX} INFO ${output}`);
            }
        }
    }
    warn(obj, msg, ...args) {
        if (this.#logLevel <= 2) {
            const output = getOutput(obj, msg, args);
            if (typeof output !== "undefined") {
                console.warn(`${PREFIX} WARN ${output}`);
            }
        }
    }
    error(obj, msg, ...args) {
        if (this.#logLevel <= 3) {
            const output = getOutput(obj, msg, args);
            if (typeof output !== "undefined") {
                console.error(`${PREFIX} ERROR ${output}`);
            }
        }
    }
}
;
}}),
"[project]/node_modules/@fastify/busboy/deps/streamsearch/sbmh.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
'use strict';
/**
 * Copyright Brian White. All rights reserved.
 *
 * @see https://github.com/mscdex/streamsearch
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 *
 * Based heavily on the Streaming Boyer-Moore-Horspool C++ implementation
 * by Hongli Lai at: https://github.com/FooBarWidget/boyer-moore-horspool
 */ const EventEmitter = __turbopack_require__("[externals]/node:events [external] (node:events, cjs)").EventEmitter;
const inherits = __turbopack_require__("[externals]/node:util [external] (node:util, cjs)").inherits;
function SBMH(needle) {
    if (typeof needle === 'string') {
        needle = Buffer.from(needle);
    }
    if (!Buffer.isBuffer(needle)) {
        throw new TypeError('The needle has to be a String or a Buffer.');
    }
    const needleLength = needle.length;
    if (needleLength === 0) {
        throw new Error('The needle cannot be an empty String/Buffer.');
    }
    if (needleLength > 256) {
        throw new Error('The needle cannot have a length bigger than 256.');
    }
    this.maxMatches = Infinity;
    this.matches = 0;
    this._occ = new Array(256).fill(needleLength) // Initialize occurrence table.
    ;
    this._lookbehind_size = 0;
    this._needle = needle;
    this._bufpos = 0;
    this._lookbehind = Buffer.alloc(needleLength);
    // Populate occurrence table with analysis of the needle,
    // ignoring last letter.
    for(var i = 0; i < needleLength - 1; ++i){
        this._occ[needle[i]] = needleLength - 1 - i;
    }
}
inherits(SBMH, EventEmitter);
SBMH.prototype.reset = function() {
    this._lookbehind_size = 0;
    this.matches = 0;
    this._bufpos = 0;
};
SBMH.prototype.push = function(chunk, pos) {
    if (!Buffer.isBuffer(chunk)) {
        chunk = Buffer.from(chunk, 'binary');
    }
    const chlen = chunk.length;
    this._bufpos = pos || 0;
    let r;
    while(r !== chlen && this.matches < this.maxMatches){
        r = this._sbmh_feed(chunk);
    }
    return r;
};
SBMH.prototype._sbmh_feed = function(data) {
    const len = data.length;
    const needle = this._needle;
    const needleLength = needle.length;
    const lastNeedleChar = needle[needleLength - 1];
    // Positive: points to a position in `data`
    //           pos == 3 points to data[3]
    // Negative: points to a position in the lookbehind buffer
    //           pos == -2 points to lookbehind[lookbehind_size - 2]
    let pos = -this._lookbehind_size;
    let ch;
    if (pos < 0) {
        // Lookbehind buffer is not empty. Perform Boyer-Moore-Horspool
        // search with character lookup code that considers both the
        // lookbehind buffer and the current round's haystack data.
        //
        // Loop until
        //   there is a match.
        // or until
        //   we've moved past the position that requires the
        //   lookbehind buffer. In this case we switch to the
        //   optimized loop.
        // or until
        //   the character to look at lies outside the haystack.
        while(pos < 0 && pos <= len - needleLength){
            ch = this._sbmh_lookup_char(data, pos + needleLength - 1);
            if (ch === lastNeedleChar && this._sbmh_memcmp(data, pos, needleLength - 1)) {
                this._lookbehind_size = 0;
                ++this.matches;
                this.emit('info', true);
                return this._bufpos = pos + needleLength;
            }
            pos += this._occ[ch];
        }
        // No match.
        if (pos < 0) {
            // There's too few data for Boyer-Moore-Horspool to run,
            // so let's use a different algorithm to skip as much as
            // we can.
            // Forward pos until
            //   the trailing part of lookbehind + data
            //   looks like the beginning of the needle
            // or until
            //   pos == 0
            while(pos < 0 && !this._sbmh_memcmp(data, pos, len - pos)){
                ++pos;
            }
        }
        if (pos >= 0) {
            // Discard lookbehind buffer.
            this.emit('info', false, this._lookbehind, 0, this._lookbehind_size);
            this._lookbehind_size = 0;
        } else {
            // Cut off part of the lookbehind buffer that has
            // been processed and append the entire haystack
            // into it.
            const bytesToCutOff = this._lookbehind_size + pos;
            if (bytesToCutOff > 0) {
                // The cut off data is guaranteed not to contain the needle.
                this.emit('info', false, this._lookbehind, 0, bytesToCutOff);
            }
            this._lookbehind.copy(this._lookbehind, 0, bytesToCutOff, this._lookbehind_size - bytesToCutOff);
            this._lookbehind_size -= bytesToCutOff;
            data.copy(this._lookbehind, this._lookbehind_size);
            this._lookbehind_size += len;
            this._bufpos = len;
            return len;
        }
    }
    pos += (pos >= 0) * this._bufpos;
    // Lookbehind buffer is now empty. We only need to check if the
    // needle is in the haystack.
    if (data.indexOf(needle, pos) !== -1) {
        pos = data.indexOf(needle, pos);
        ++this.matches;
        if (pos > 0) {
            this.emit('info', true, data, this._bufpos, pos);
        } else {
            this.emit('info', true);
        }
        return this._bufpos = pos + needleLength;
    } else {
        pos = len - needleLength;
    }
    // There was no match. If there's trailing haystack data that we cannot
    // match yet using the Boyer-Moore-Horspool algorithm (because the trailing
    // data is less than the needle size) then match using a modified
    // algorithm that starts matching from the beginning instead of the end.
    // Whatever trailing data is left after running this algorithm is added to
    // the lookbehind buffer.
    while(pos < len && (data[pos] !== needle[0] || Buffer.compare(data.subarray(pos, pos + len - pos), needle.subarray(0, len - pos)) !== 0)){
        ++pos;
    }
    if (pos < len) {
        data.copy(this._lookbehind, 0, pos, pos + (len - pos));
        this._lookbehind_size = len - pos;
    }
    // Everything until pos is guaranteed not to contain needle data.
    if (pos > 0) {
        this.emit('info', false, data, this._bufpos, pos < len ? pos : len);
    }
    this._bufpos = len;
    return len;
};
SBMH.prototype._sbmh_lookup_char = function(data, pos) {
    return pos < 0 ? this._lookbehind[this._lookbehind_size + pos] : data[pos];
};
SBMH.prototype._sbmh_memcmp = function(data, pos, len) {
    for(var i = 0; i < len; ++i){
        if (this._sbmh_lookup_char(data, pos + i) !== this._needle[i]) {
            return false;
        }
    }
    return true;
};
module.exports = SBMH;
}}),
"[project]/node_modules/@fastify/busboy/deps/dicer/lib/PartStream.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
'use strict';
const inherits = __turbopack_require__("[externals]/node:util [external] (node:util, cjs)").inherits;
const ReadableStream = __turbopack_require__("[externals]/node:stream [external] (node:stream, cjs)").Readable;
function PartStream(opts) {
    ReadableStream.call(this, opts);
}
inherits(PartStream, ReadableStream);
PartStream.prototype._read = function(n) {};
module.exports = PartStream;
}}),
"[project]/node_modules/@fastify/busboy/lib/utils/getLimit.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
'use strict';
module.exports = function getLimit(limits, name, defaultLimit) {
    if (!limits || limits[name] === undefined || limits[name] === null) {
        return defaultLimit;
    }
    if (typeof limits[name] !== 'number' || isNaN(limits[name])) {
        throw new TypeError('Limit ' + name + ' is not a valid number');
    }
    return limits[name];
};
}}),
"[project]/node_modules/@fastify/busboy/deps/dicer/lib/HeaderParser.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
'use strict';
const EventEmitter = __turbopack_require__("[externals]/node:events [external] (node:events, cjs)").EventEmitter;
const inherits = __turbopack_require__("[externals]/node:util [external] (node:util, cjs)").inherits;
const getLimit = __turbopack_require__("[project]/node_modules/@fastify/busboy/lib/utils/getLimit.js [app-rsc] (ecmascript)");
const StreamSearch = __turbopack_require__("[project]/node_modules/@fastify/busboy/deps/streamsearch/sbmh.js [app-rsc] (ecmascript)");
const B_DCRLF = Buffer.from('\r\n\r\n');
const RE_CRLF = /\r\n/g;
const RE_HDR = /^([^:]+):[ \t]?([\x00-\xFF]+)?$/ // eslint-disable-line no-control-regex
;
function HeaderParser(cfg) {
    EventEmitter.call(this);
    cfg = cfg || {};
    const self = this;
    this.nread = 0;
    this.maxed = false;
    this.npairs = 0;
    this.maxHeaderPairs = getLimit(cfg, 'maxHeaderPairs', 2000);
    this.maxHeaderSize = getLimit(cfg, 'maxHeaderSize', 80 * 1024);
    this.buffer = '';
    this.header = {};
    this.finished = false;
    this.ss = new StreamSearch(B_DCRLF);
    this.ss.on('info', function(isMatch, data, start, end) {
        if (data && !self.maxed) {
            if (self.nread + end - start >= self.maxHeaderSize) {
                end = self.maxHeaderSize - self.nread + start;
                self.nread = self.maxHeaderSize;
                self.maxed = true;
            } else {
                self.nread += end - start;
            }
            self.buffer += data.toString('binary', start, end);
        }
        if (isMatch) {
            self._finish();
        }
    });
}
inherits(HeaderParser, EventEmitter);
HeaderParser.prototype.push = function(data) {
    const r = this.ss.push(data);
    if (this.finished) {
        return r;
    }
};
HeaderParser.prototype.reset = function() {
    this.finished = false;
    this.buffer = '';
    this.header = {};
    this.ss.reset();
};
HeaderParser.prototype._finish = function() {
    if (this.buffer) {
        this._parseHeader();
    }
    this.ss.matches = this.ss.maxMatches;
    const header = this.header;
    this.header = {};
    this.buffer = '';
    this.finished = true;
    this.nread = this.npairs = 0;
    this.maxed = false;
    this.emit('header', header);
};
HeaderParser.prototype._parseHeader = function() {
    if (this.npairs === this.maxHeaderPairs) {
        return;
    }
    const lines = this.buffer.split(RE_CRLF);
    const len = lines.length;
    let m, h;
    for(var i = 0; i < len; ++i){
        if (lines[i].length === 0) {
            continue;
        }
        if (lines[i][0] === '\t' || lines[i][0] === ' ') {
            // folded header content
            // RFC2822 says to just remove the CRLF and not the whitespace following
            // it, so we follow the RFC and include the leading whitespace ...
            if (h) {
                this.header[h][this.header[h].length - 1] += lines[i];
                continue;
            }
        }
        const posColon = lines[i].indexOf(':');
        if (posColon === -1 || posColon === 0) {
            return;
        }
        m = RE_HDR.exec(lines[i]);
        h = m[1].toLowerCase();
        this.header[h] = this.header[h] || [];
        this.header[h].push(m[2] || '');
        if (++this.npairs === this.maxHeaderPairs) {
            break;
        }
    }
};
module.exports = HeaderParser;
}}),
"[project]/node_modules/@fastify/busboy/deps/dicer/lib/Dicer.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
'use strict';
const WritableStream = __turbopack_require__("[externals]/node:stream [external] (node:stream, cjs)").Writable;
const inherits = __turbopack_require__("[externals]/node:util [external] (node:util, cjs)").inherits;
const StreamSearch = __turbopack_require__("[project]/node_modules/@fastify/busboy/deps/streamsearch/sbmh.js [app-rsc] (ecmascript)");
const PartStream = __turbopack_require__("[project]/node_modules/@fastify/busboy/deps/dicer/lib/PartStream.js [app-rsc] (ecmascript)");
const HeaderParser = __turbopack_require__("[project]/node_modules/@fastify/busboy/deps/dicer/lib/HeaderParser.js [app-rsc] (ecmascript)");
const DASH = 45;
const B_ONEDASH = Buffer.from('-');
const B_CRLF = Buffer.from('\r\n');
const EMPTY_FN = function() {};
function Dicer(cfg) {
    if (!(this instanceof Dicer)) {
        return new Dicer(cfg);
    }
    WritableStream.call(this, cfg);
    if (!cfg || !cfg.headerFirst && typeof cfg.boundary !== 'string') {
        throw new TypeError('Boundary required');
    }
    if (typeof cfg.boundary === 'string') {
        this.setBoundary(cfg.boundary);
    } else {
        this._bparser = undefined;
    }
    this._headerFirst = cfg.headerFirst;
    this._dashes = 0;
    this._parts = 0;
    this._finished = false;
    this._realFinish = false;
    this._isPreamble = true;
    this._justMatched = false;
    this._firstWrite = true;
    this._inHeader = true;
    this._part = undefined;
    this._cb = undefined;
    this._ignoreData = false;
    this._partOpts = {
        highWaterMark: cfg.partHwm
    };
    this._pause = false;
    const self = this;
    this._hparser = new HeaderParser(cfg);
    this._hparser.on('header', function(header) {
        self._inHeader = false;
        self._part.emit('header', header);
    });
}
inherits(Dicer, WritableStream);
Dicer.prototype.emit = function(ev) {
    if (ev === 'finish' && !this._realFinish) {
        if (!this._finished) {
            const self = this;
            process.nextTick(function() {
                self.emit('error', new Error('Unexpected end of multipart data'));
                if (self._part && !self._ignoreData) {
                    const type = self._isPreamble ? 'Preamble' : 'Part';
                    self._part.emit('error', new Error(type + ' terminated early due to unexpected end of multipart data'));
                    self._part.push(null);
                    process.nextTick(function() {
                        self._realFinish = true;
                        self.emit('finish');
                        self._realFinish = false;
                    });
                    return;
                }
                self._realFinish = true;
                self.emit('finish');
                self._realFinish = false;
            });
        }
    } else {
        WritableStream.prototype.emit.apply(this, arguments);
    }
};
Dicer.prototype._write = function(data, encoding, cb) {
    // ignore unexpected data (e.g. extra trailer data after finished)
    if (!this._hparser && !this._bparser) {
        return cb();
    }
    if (this._headerFirst && this._isPreamble) {
        if (!this._part) {
            this._part = new PartStream(this._partOpts);
            if (this.listenerCount('preamble') !== 0) {
                this.emit('preamble', this._part);
            } else {
                this._ignore();
            }
        }
        const r = this._hparser.push(data);
        if (!this._inHeader && r !== undefined && r < data.length) {
            data = data.slice(r);
        } else {
            return cb();
        }
    }
    // allows for "easier" testing
    if (this._firstWrite) {
        this._bparser.push(B_CRLF);
        this._firstWrite = false;
    }
    this._bparser.push(data);
    if (this._pause) {
        this._cb = cb;
    } else {
        cb();
    }
};
Dicer.prototype.reset = function() {
    this._part = undefined;
    this._bparser = undefined;
    this._hparser = undefined;
};
Dicer.prototype.setBoundary = function(boundary) {
    const self = this;
    this._bparser = new StreamSearch('\r\n--' + boundary);
    this._bparser.on('info', function(isMatch, data, start, end) {
        self._oninfo(isMatch, data, start, end);
    });
};
Dicer.prototype._ignore = function() {
    if (this._part && !this._ignoreData) {
        this._ignoreData = true;
        this._part.on('error', EMPTY_FN);
        // we must perform some kind of read on the stream even though we are
        // ignoring the data, otherwise node's Readable stream will not emit 'end'
        // after pushing null to the stream
        this._part.resume();
    }
};
Dicer.prototype._oninfo = function(isMatch, data, start, end) {
    let buf;
    const self = this;
    let i = 0;
    let r;
    let shouldWriteMore = true;
    if (!this._part && this._justMatched && data) {
        while(this._dashes < 2 && start + i < end){
            if (data[start + i] === DASH) {
                ++i;
                ++this._dashes;
            } else {
                if (this._dashes) {
                    buf = B_ONEDASH;
                }
                this._dashes = 0;
                break;
            }
        }
        if (this._dashes === 2) {
            if (start + i < end && this.listenerCount('trailer') !== 0) {
                this.emit('trailer', data.slice(start + i, end));
            }
            this.reset();
            this._finished = true;
            // no more parts will be added
            if (self._parts === 0) {
                self._realFinish = true;
                self.emit('finish');
                self._realFinish = false;
            }
        }
        if (this._dashes) {
            return;
        }
    }
    if (this._justMatched) {
        this._justMatched = false;
    }
    if (!this._part) {
        this._part = new PartStream(this._partOpts);
        this._part._read = function(n) {
            self._unpause();
        };
        if (this._isPreamble && this.listenerCount('preamble') !== 0) {
            this.emit('preamble', this._part);
        } else if (this._isPreamble !== true && this.listenerCount('part') !== 0) {
            this.emit('part', this._part);
        } else {
            this._ignore();
        }
        if (!this._isPreamble) {
            this._inHeader = true;
        }
    }
    if (data && start < end && !this._ignoreData) {
        if (this._isPreamble || !this._inHeader) {
            if (buf) {
                shouldWriteMore = this._part.push(buf);
            }
            shouldWriteMore = this._part.push(data.slice(start, end));
            if (!shouldWriteMore) {
                this._pause = true;
            }
        } else if (!this._isPreamble && this._inHeader) {
            if (buf) {
                this._hparser.push(buf);
            }
            r = this._hparser.push(data.slice(start, end));
            if (!this._inHeader && r !== undefined && r < end) {
                this._oninfo(false, data, start + r, end);
            }
        }
    }
    if (isMatch) {
        this._hparser.reset();
        if (this._isPreamble) {
            this._isPreamble = false;
        } else {
            if (start !== end) {
                ++this._parts;
                this._part.on('end', function() {
                    if (--self._parts === 0) {
                        if (self._finished) {
                            self._realFinish = true;
                            self.emit('finish');
                            self._realFinish = false;
                        } else {
                            self._unpause();
                        }
                    }
                });
            }
        }
        this._part.push(null);
        this._part = undefined;
        this._ignoreData = false;
        this._justMatched = true;
        this._dashes = 0;
    }
};
Dicer.prototype._unpause = function() {
    if (!this._pause) {
        return;
    }
    this._pause = false;
    if (this._cb) {
        const cb = this._cb;
        this._cb = undefined;
        cb();
    }
};
module.exports = Dicer;
}}),
"[project]/node_modules/@fastify/busboy/lib/utils/decodeText.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
'use strict';
// Node has always utf-8
const utf8Decoder = new TextDecoder('utf-8');
const textDecoders = new Map([
    [
        'utf-8',
        utf8Decoder
    ],
    [
        'utf8',
        utf8Decoder
    ]
]);
function getDecoder(charset) {
    let lc;
    while(true){
        switch(charset){
            case 'utf-8':
            case 'utf8':
                return decoders.utf8;
            case 'latin1':
            case 'ascii':
            case 'us-ascii':
            case 'iso-8859-1':
            case 'iso8859-1':
            case 'iso88591':
            case 'iso_8859-1':
            case 'windows-1252':
            case 'iso_8859-1:1987':
            case 'cp1252':
            case 'x-cp1252':
                return decoders.latin1;
            case 'utf16le':
            case 'utf-16le':
            case 'ucs2':
            case 'ucs-2':
                return decoders.utf16le;
            case 'base64':
                return decoders.base64;
            default:
                if (lc === undefined) {
                    lc = true;
                    charset = charset.toLowerCase();
                    continue;
                }
                return decoders.other.bind(charset);
        }
    }
}
const decoders = {
    utf8: (data, sourceEncoding)=>{
        if (data.length === 0) {
            return '';
        }
        if (typeof data === 'string') {
            data = Buffer.from(data, sourceEncoding);
        }
        return data.utf8Slice(0, data.length);
    },
    latin1: (data, sourceEncoding)=>{
        if (data.length === 0) {
            return '';
        }
        if (typeof data === 'string') {
            return data;
        }
        return data.latin1Slice(0, data.length);
    },
    utf16le: (data, sourceEncoding)=>{
        if (data.length === 0) {
            return '';
        }
        if (typeof data === 'string') {
            data = Buffer.from(data, sourceEncoding);
        }
        return data.ucs2Slice(0, data.length);
    },
    base64: (data, sourceEncoding)=>{
        if (data.length === 0) {
            return '';
        }
        if (typeof data === 'string') {
            data = Buffer.from(data, sourceEncoding);
        }
        return data.base64Slice(0, data.length);
    },
    other: (data, sourceEncoding)=>{
        if (data.length === 0) {
            return '';
        }
        if (typeof data === 'string') {
            data = Buffer.from(data, sourceEncoding);
        }
        if (textDecoders.has(this.toString())) {
            try {
                return textDecoders.get(this).decode(data);
            } catch  {}
        }
        return typeof data === 'string' ? data : data.toString();
    }
};
function decodeText(text, sourceEncoding, destEncoding) {
    if (text) {
        return getDecoder(destEncoding)(text, sourceEncoding);
    }
    return text;
}
module.exports = decodeText;
}}),
"[project]/node_modules/@fastify/busboy/lib/utils/parseParams.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
/* eslint-disable object-property-newline */ 'use strict';
const decodeText = __turbopack_require__("[project]/node_modules/@fastify/busboy/lib/utils/decodeText.js [app-rsc] (ecmascript)");
const RE_ENCODED = /%[a-fA-F0-9][a-fA-F0-9]/g;
const EncodedLookup = {
    '%00': '\x00',
    '%01': '\x01',
    '%02': '\x02',
    '%03': '\x03',
    '%04': '\x04',
    '%05': '\x05',
    '%06': '\x06',
    '%07': '\x07',
    '%08': '\x08',
    '%09': '\x09',
    '%0a': '\x0a',
    '%0A': '\x0a',
    '%0b': '\x0b',
    '%0B': '\x0b',
    '%0c': '\x0c',
    '%0C': '\x0c',
    '%0d': '\x0d',
    '%0D': '\x0d',
    '%0e': '\x0e',
    '%0E': '\x0e',
    '%0f': '\x0f',
    '%0F': '\x0f',
    '%10': '\x10',
    '%11': '\x11',
    '%12': '\x12',
    '%13': '\x13',
    '%14': '\x14',
    '%15': '\x15',
    '%16': '\x16',
    '%17': '\x17',
    '%18': '\x18',
    '%19': '\x19',
    '%1a': '\x1a',
    '%1A': '\x1a',
    '%1b': '\x1b',
    '%1B': '\x1b',
    '%1c': '\x1c',
    '%1C': '\x1c',
    '%1d': '\x1d',
    '%1D': '\x1d',
    '%1e': '\x1e',
    '%1E': '\x1e',
    '%1f': '\x1f',
    '%1F': '\x1f',
    '%20': '\x20',
    '%21': '\x21',
    '%22': '\x22',
    '%23': '\x23',
    '%24': '\x24',
    '%25': '\x25',
    '%26': '\x26',
    '%27': '\x27',
    '%28': '\x28',
    '%29': '\x29',
    '%2a': '\x2a',
    '%2A': '\x2a',
    '%2b': '\x2b',
    '%2B': '\x2b',
    '%2c': '\x2c',
    '%2C': '\x2c',
    '%2d': '\x2d',
    '%2D': '\x2d',
    '%2e': '\x2e',
    '%2E': '\x2e',
    '%2f': '\x2f',
    '%2F': '\x2f',
    '%30': '\x30',
    '%31': '\x31',
    '%32': '\x32',
    '%33': '\x33',
    '%34': '\x34',
    '%35': '\x35',
    '%36': '\x36',
    '%37': '\x37',
    '%38': '\x38',
    '%39': '\x39',
    '%3a': '\x3a',
    '%3A': '\x3a',
    '%3b': '\x3b',
    '%3B': '\x3b',
    '%3c': '\x3c',
    '%3C': '\x3c',
    '%3d': '\x3d',
    '%3D': '\x3d',
    '%3e': '\x3e',
    '%3E': '\x3e',
    '%3f': '\x3f',
    '%3F': '\x3f',
    '%40': '\x40',
    '%41': '\x41',
    '%42': '\x42',
    '%43': '\x43',
    '%44': '\x44',
    '%45': '\x45',
    '%46': '\x46',
    '%47': '\x47',
    '%48': '\x48',
    '%49': '\x49',
    '%4a': '\x4a',
    '%4A': '\x4a',
    '%4b': '\x4b',
    '%4B': '\x4b',
    '%4c': '\x4c',
    '%4C': '\x4c',
    '%4d': '\x4d',
    '%4D': '\x4d',
    '%4e': '\x4e',
    '%4E': '\x4e',
    '%4f': '\x4f',
    '%4F': '\x4f',
    '%50': '\x50',
    '%51': '\x51',
    '%52': '\x52',
    '%53': '\x53',
    '%54': '\x54',
    '%55': '\x55',
    '%56': '\x56',
    '%57': '\x57',
    '%58': '\x58',
    '%59': '\x59',
    '%5a': '\x5a',
    '%5A': '\x5a',
    '%5b': '\x5b',
    '%5B': '\x5b',
    '%5c': '\x5c',
    '%5C': '\x5c',
    '%5d': '\x5d',
    '%5D': '\x5d',
    '%5e': '\x5e',
    '%5E': '\x5e',
    '%5f': '\x5f',
    '%5F': '\x5f',
    '%60': '\x60',
    '%61': '\x61',
    '%62': '\x62',
    '%63': '\x63',
    '%64': '\x64',
    '%65': '\x65',
    '%66': '\x66',
    '%67': '\x67',
    '%68': '\x68',
    '%69': '\x69',
    '%6a': '\x6a',
    '%6A': '\x6a',
    '%6b': '\x6b',
    '%6B': '\x6b',
    '%6c': '\x6c',
    '%6C': '\x6c',
    '%6d': '\x6d',
    '%6D': '\x6d',
    '%6e': '\x6e',
    '%6E': '\x6e',
    '%6f': '\x6f',
    '%6F': '\x6f',
    '%70': '\x70',
    '%71': '\x71',
    '%72': '\x72',
    '%73': '\x73',
    '%74': '\x74',
    '%75': '\x75',
    '%76': '\x76',
    '%77': '\x77',
    '%78': '\x78',
    '%79': '\x79',
    '%7a': '\x7a',
    '%7A': '\x7a',
    '%7b': '\x7b',
    '%7B': '\x7b',
    '%7c': '\x7c',
    '%7C': '\x7c',
    '%7d': '\x7d',
    '%7D': '\x7d',
    '%7e': '\x7e',
    '%7E': '\x7e',
    '%7f': '\x7f',
    '%7F': '\x7f',
    '%80': '\x80',
    '%81': '\x81',
    '%82': '\x82',
    '%83': '\x83',
    '%84': '\x84',
    '%85': '\x85',
    '%86': '\x86',
    '%87': '\x87',
    '%88': '\x88',
    '%89': '\x89',
    '%8a': '\x8a',
    '%8A': '\x8a',
    '%8b': '\x8b',
    '%8B': '\x8b',
    '%8c': '\x8c',
    '%8C': '\x8c',
    '%8d': '\x8d',
    '%8D': '\x8d',
    '%8e': '\x8e',
    '%8E': '\x8e',
    '%8f': '\x8f',
    '%8F': '\x8f',
    '%90': '\x90',
    '%91': '\x91',
    '%92': '\x92',
    '%93': '\x93',
    '%94': '\x94',
    '%95': '\x95',
    '%96': '\x96',
    '%97': '\x97',
    '%98': '\x98',
    '%99': '\x99',
    '%9a': '\x9a',
    '%9A': '\x9a',
    '%9b': '\x9b',
    '%9B': '\x9b',
    '%9c': '\x9c',
    '%9C': '\x9c',
    '%9d': '\x9d',
    '%9D': '\x9d',
    '%9e': '\x9e',
    '%9E': '\x9e',
    '%9f': '\x9f',
    '%9F': '\x9f',
    '%a0': '\xa0',
    '%A0': '\xa0',
    '%a1': '\xa1',
    '%A1': '\xa1',
    '%a2': '\xa2',
    '%A2': '\xa2',
    '%a3': '\xa3',
    '%A3': '\xa3',
    '%a4': '\xa4',
    '%A4': '\xa4',
    '%a5': '\xa5',
    '%A5': '\xa5',
    '%a6': '\xa6',
    '%A6': '\xa6',
    '%a7': '\xa7',
    '%A7': '\xa7',
    '%a8': '\xa8',
    '%A8': '\xa8',
    '%a9': '\xa9',
    '%A9': '\xa9',
    '%aa': '\xaa',
    '%Aa': '\xaa',
    '%aA': '\xaa',
    '%AA': '\xaa',
    '%ab': '\xab',
    '%Ab': '\xab',
    '%aB': '\xab',
    '%AB': '\xab',
    '%ac': '\xac',
    '%Ac': '\xac',
    '%aC': '\xac',
    '%AC': '\xac',
    '%ad': '\xad',
    '%Ad': '\xad',
    '%aD': '\xad',
    '%AD': '\xad',
    '%ae': '\xae',
    '%Ae': '\xae',
    '%aE': '\xae',
    '%AE': '\xae',
    '%af': '\xaf',
    '%Af': '\xaf',
    '%aF': '\xaf',
    '%AF': '\xaf',
    '%b0': '\xb0',
    '%B0': '\xb0',
    '%b1': '\xb1',
    '%B1': '\xb1',
    '%b2': '\xb2',
    '%B2': '\xb2',
    '%b3': '\xb3',
    '%B3': '\xb3',
    '%b4': '\xb4',
    '%B4': '\xb4',
    '%b5': '\xb5',
    '%B5': '\xb5',
    '%b6': '\xb6',
    '%B6': '\xb6',
    '%b7': '\xb7',
    '%B7': '\xb7',
    '%b8': '\xb8',
    '%B8': '\xb8',
    '%b9': '\xb9',
    '%B9': '\xb9',
    '%ba': '\xba',
    '%Ba': '\xba',
    '%bA': '\xba',
    '%BA': '\xba',
    '%bb': '\xbb',
    '%Bb': '\xbb',
    '%bB': '\xbb',
    '%BB': '\xbb',
    '%bc': '\xbc',
    '%Bc': '\xbc',
    '%bC': '\xbc',
    '%BC': '\xbc',
    '%bd': '\xbd',
    '%Bd': '\xbd',
    '%bD': '\xbd',
    '%BD': '\xbd',
    '%be': '\xbe',
    '%Be': '\xbe',
    '%bE': '\xbe',
    '%BE': '\xbe',
    '%bf': '\xbf',
    '%Bf': '\xbf',
    '%bF': '\xbf',
    '%BF': '\xbf',
    '%c0': '\xc0',
    '%C0': '\xc0',
    '%c1': '\xc1',
    '%C1': '\xc1',
    '%c2': '\xc2',
    '%C2': '\xc2',
    '%c3': '\xc3',
    '%C3': '\xc3',
    '%c4': '\xc4',
    '%C4': '\xc4',
    '%c5': '\xc5',
    '%C5': '\xc5',
    '%c6': '\xc6',
    '%C6': '\xc6',
    '%c7': '\xc7',
    '%C7': '\xc7',
    '%c8': '\xc8',
    '%C8': '\xc8',
    '%c9': '\xc9',
    '%C9': '\xc9',
    '%ca': '\xca',
    '%Ca': '\xca',
    '%cA': '\xca',
    '%CA': '\xca',
    '%cb': '\xcb',
    '%Cb': '\xcb',
    '%cB': '\xcb',
    '%CB': '\xcb',
    '%cc': '\xcc',
    '%Cc': '\xcc',
    '%cC': '\xcc',
    '%CC': '\xcc',
    '%cd': '\xcd',
    '%Cd': '\xcd',
    '%cD': '\xcd',
    '%CD': '\xcd',
    '%ce': '\xce',
    '%Ce': '\xce',
    '%cE': '\xce',
    '%CE': '\xce',
    '%cf': '\xcf',
    '%Cf': '\xcf',
    '%cF': '\xcf',
    '%CF': '\xcf',
    '%d0': '\xd0',
    '%D0': '\xd0',
    '%d1': '\xd1',
    '%D1': '\xd1',
    '%d2': '\xd2',
    '%D2': '\xd2',
    '%d3': '\xd3',
    '%D3': '\xd3',
    '%d4': '\xd4',
    '%D4': '\xd4',
    '%d5': '\xd5',
    '%D5': '\xd5',
    '%d6': '\xd6',
    '%D6': '\xd6',
    '%d7': '\xd7',
    '%D7': '\xd7',
    '%d8': '\xd8',
    '%D8': '\xd8',
    '%d9': '\xd9',
    '%D9': '\xd9',
    '%da': '\xda',
    '%Da': '\xda',
    '%dA': '\xda',
    '%DA': '\xda',
    '%db': '\xdb',
    '%Db': '\xdb',
    '%dB': '\xdb',
    '%DB': '\xdb',
    '%dc': '\xdc',
    '%Dc': '\xdc',
    '%dC': '\xdc',
    '%DC': '\xdc',
    '%dd': '\xdd',
    '%Dd': '\xdd',
    '%dD': '\xdd',
    '%DD': '\xdd',
    '%de': '\xde',
    '%De': '\xde',
    '%dE': '\xde',
    '%DE': '\xde',
    '%df': '\xdf',
    '%Df': '\xdf',
    '%dF': '\xdf',
    '%DF': '\xdf',
    '%e0': '\xe0',
    '%E0': '\xe0',
    '%e1': '\xe1',
    '%E1': '\xe1',
    '%e2': '\xe2',
    '%E2': '\xe2',
    '%e3': '\xe3',
    '%E3': '\xe3',
    '%e4': '\xe4',
    '%E4': '\xe4',
    '%e5': '\xe5',
    '%E5': '\xe5',
    '%e6': '\xe6',
    '%E6': '\xe6',
    '%e7': '\xe7',
    '%E7': '\xe7',
    '%e8': '\xe8',
    '%E8': '\xe8',
    '%e9': '\xe9',
    '%E9': '\xe9',
    '%ea': '\xea',
    '%Ea': '\xea',
    '%eA': '\xea',
    '%EA': '\xea',
    '%eb': '\xeb',
    '%Eb': '\xeb',
    '%eB': '\xeb',
    '%EB': '\xeb',
    '%ec': '\xec',
    '%Ec': '\xec',
    '%eC': '\xec',
    '%EC': '\xec',
    '%ed': '\xed',
    '%Ed': '\xed',
    '%eD': '\xed',
    '%ED': '\xed',
    '%ee': '\xee',
    '%Ee': '\xee',
    '%eE': '\xee',
    '%EE': '\xee',
    '%ef': '\xef',
    '%Ef': '\xef',
    '%eF': '\xef',
    '%EF': '\xef',
    '%f0': '\xf0',
    '%F0': '\xf0',
    '%f1': '\xf1',
    '%F1': '\xf1',
    '%f2': '\xf2',
    '%F2': '\xf2',
    '%f3': '\xf3',
    '%F3': '\xf3',
    '%f4': '\xf4',
    '%F4': '\xf4',
    '%f5': '\xf5',
    '%F5': '\xf5',
    '%f6': '\xf6',
    '%F6': '\xf6',
    '%f7': '\xf7',
    '%F7': '\xf7',
    '%f8': '\xf8',
    '%F8': '\xf8',
    '%f9': '\xf9',
    '%F9': '\xf9',
    '%fa': '\xfa',
    '%Fa': '\xfa',
    '%fA': '\xfa',
    '%FA': '\xfa',
    '%fb': '\xfb',
    '%Fb': '\xfb',
    '%fB': '\xfb',
    '%FB': '\xfb',
    '%fc': '\xfc',
    '%Fc': '\xfc',
    '%fC': '\xfc',
    '%FC': '\xfc',
    '%fd': '\xfd',
    '%Fd': '\xfd',
    '%fD': '\xfd',
    '%FD': '\xfd',
    '%fe': '\xfe',
    '%Fe': '\xfe',
    '%fE': '\xfe',
    '%FE': '\xfe',
    '%ff': '\xff',
    '%Ff': '\xff',
    '%fF': '\xff',
    '%FF': '\xff'
};
function encodedReplacer(match) {
    return EncodedLookup[match];
}
const STATE_KEY = 0;
const STATE_VALUE = 1;
const STATE_CHARSET = 2;
const STATE_LANG = 3;
function parseParams(str) {
    const res = [];
    let state = STATE_KEY;
    let charset = '';
    let inquote = false;
    let escaping = false;
    let p = 0;
    let tmp = '';
    const len = str.length;
    for(var i = 0; i < len; ++i){
        const char = str[i];
        if (char === '\\' && inquote) {
            if (escaping) {
                escaping = false;
            } else {
                escaping = true;
                continue;
            }
        } else if (char === '"') {
            if (!escaping) {
                if (inquote) {
                    inquote = false;
                    state = STATE_KEY;
                } else {
                    inquote = true;
                }
                continue;
            } else {
                escaping = false;
            }
        } else {
            if (escaping && inquote) {
                tmp += '\\';
            }
            escaping = false;
            if ((state === STATE_CHARSET || state === STATE_LANG) && char === "'") {
                if (state === STATE_CHARSET) {
                    state = STATE_LANG;
                    charset = tmp.substring(1);
                } else {
                    state = STATE_VALUE;
                }
                tmp = '';
                continue;
            } else if (state === STATE_KEY && (char === '*' || char === '=') && res.length) {
                state = char === '*' ? STATE_CHARSET : STATE_VALUE;
                res[p] = [
                    tmp,
                    undefined
                ];
                tmp = '';
                continue;
            } else if (!inquote && char === ';') {
                state = STATE_KEY;
                if (charset) {
                    if (tmp.length) {
                        tmp = decodeText(tmp.replace(RE_ENCODED, encodedReplacer), 'binary', charset);
                    }
                    charset = '';
                } else if (tmp.length) {
                    tmp = decodeText(tmp, 'binary', 'utf8');
                }
                if (res[p] === undefined) {
                    res[p] = tmp;
                } else {
                    res[p][1] = tmp;
                }
                tmp = '';
                ++p;
                continue;
            } else if (!inquote && (char === ' ' || char === '\t')) {
                continue;
            }
        }
        tmp += char;
    }
    if (charset && tmp.length) {
        tmp = decodeText(tmp.replace(RE_ENCODED, encodedReplacer), 'binary', charset);
    } else if (tmp) {
        tmp = decodeText(tmp, 'binary', 'utf8');
    }
    if (res[p] === undefined) {
        if (tmp) {
            res[p] = tmp;
        }
    } else {
        res[p][1] = tmp;
    }
    return res;
}
module.exports = parseParams;
}}),
"[project]/node_modules/@fastify/busboy/lib/utils/basename.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
'use strict';
module.exports = function basename(path) {
    if (typeof path !== 'string') {
        return '';
    }
    for(var i = path.length - 1; i >= 0; --i){
        switch(path.charCodeAt(i)){
            case 0x2F:
            case 0x5C:
                path = path.slice(i + 1);
                return path === '..' || path === '.' ? '' : path;
        }
    }
    return path === '..' || path === '.' ? '' : path;
};
}}),
"[project]/node_modules/@fastify/busboy/lib/types/multipart.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
'use strict';
// TODO:
//  * support 1 nested multipart level
//    (see second multipart example here:
//     http://www.w3.org/TR/html401/interact/forms.html#didx-multipartform-data)
//  * support limits.fieldNameSize
//     -- this will require modifications to utils.parseParams
const { Readable } = __turbopack_require__("[externals]/node:stream [external] (node:stream, cjs)");
const { inherits } = __turbopack_require__("[externals]/node:util [external] (node:util, cjs)");
const Dicer = __turbopack_require__("[project]/node_modules/@fastify/busboy/deps/dicer/lib/Dicer.js [app-rsc] (ecmascript)");
const parseParams = __turbopack_require__("[project]/node_modules/@fastify/busboy/lib/utils/parseParams.js [app-rsc] (ecmascript)");
const decodeText = __turbopack_require__("[project]/node_modules/@fastify/busboy/lib/utils/decodeText.js [app-rsc] (ecmascript)");
const basename = __turbopack_require__("[project]/node_modules/@fastify/busboy/lib/utils/basename.js [app-rsc] (ecmascript)");
const getLimit = __turbopack_require__("[project]/node_modules/@fastify/busboy/lib/utils/getLimit.js [app-rsc] (ecmascript)");
const RE_BOUNDARY = /^boundary$/i;
const RE_FIELD = /^form-data$/i;
const RE_CHARSET = /^charset$/i;
const RE_FILENAME = /^filename$/i;
const RE_NAME = /^name$/i;
Multipart.detect = /^multipart\/form-data/i;
function Multipart(boy, cfg) {
    let i;
    let len;
    const self = this;
    let boundary;
    const limits = cfg.limits;
    const isPartAFile = cfg.isPartAFile || ((fieldName, contentType, fileName)=>contentType === 'application/octet-stream' || fileName !== undefined);
    const parsedConType = cfg.parsedConType || [];
    const defCharset = cfg.defCharset || 'utf8';
    const preservePath = cfg.preservePath;
    const fileOpts = {
        highWaterMark: cfg.fileHwm
    };
    for(i = 0, len = parsedConType.length; i < len; ++i){
        if (Array.isArray(parsedConType[i]) && RE_BOUNDARY.test(parsedConType[i][0])) {
            boundary = parsedConType[i][1];
            break;
        }
    }
    function checkFinished() {
        if (nends === 0 && finished && !boy._done) {
            finished = false;
            self.end();
        }
    }
    if (typeof boundary !== 'string') {
        throw new Error('Multipart: Boundary not found');
    }
    const fieldSizeLimit = getLimit(limits, 'fieldSize', 1 * 1024 * 1024);
    const fileSizeLimit = getLimit(limits, 'fileSize', Infinity);
    const filesLimit = getLimit(limits, 'files', Infinity);
    const fieldsLimit = getLimit(limits, 'fields', Infinity);
    const partsLimit = getLimit(limits, 'parts', Infinity);
    const headerPairsLimit = getLimit(limits, 'headerPairs', 2000);
    const headerSizeLimit = getLimit(limits, 'headerSize', 80 * 1024);
    let nfiles = 0;
    let nfields = 0;
    let nends = 0;
    let curFile;
    let curField;
    let finished = false;
    this._needDrain = false;
    this._pause = false;
    this._cb = undefined;
    this._nparts = 0;
    this._boy = boy;
    const parserCfg = {
        boundary,
        maxHeaderPairs: headerPairsLimit,
        maxHeaderSize: headerSizeLimit,
        partHwm: fileOpts.highWaterMark,
        highWaterMark: cfg.highWaterMark
    };
    this.parser = new Dicer(parserCfg);
    this.parser.on('drain', function() {
        self._needDrain = false;
        if (self._cb && !self._pause) {
            const cb = self._cb;
            self._cb = undefined;
            cb();
        }
    }).on('part', function onPart(part) {
        if (++self._nparts > partsLimit) {
            self.parser.removeListener('part', onPart);
            self.parser.on('part', skipPart);
            boy.hitPartsLimit = true;
            boy.emit('partsLimit');
            return skipPart(part);
        }
        // hack because streams2 _always_ doesn't emit 'end' until nextTick, so let
        // us emit 'end' early since we know the part has ended if we are already
        // seeing the next part
        if (curField) {
            const field = curField;
            field.emit('end');
            field.removeAllListeners('end');
        }
        part.on('header', function(header) {
            let contype;
            let fieldname;
            let parsed;
            let charset;
            let encoding;
            let filename;
            let nsize = 0;
            if (header['content-type']) {
                parsed = parseParams(header['content-type'][0]);
                if (parsed[0]) {
                    contype = parsed[0].toLowerCase();
                    for(i = 0, len = parsed.length; i < len; ++i){
                        if (RE_CHARSET.test(parsed[i][0])) {
                            charset = parsed[i][1].toLowerCase();
                            break;
                        }
                    }
                }
            }
            if (contype === undefined) {
                contype = 'text/plain';
            }
            if (charset === undefined) {
                charset = defCharset;
            }
            if (header['content-disposition']) {
                parsed = parseParams(header['content-disposition'][0]);
                if (!RE_FIELD.test(parsed[0])) {
                    return skipPart(part);
                }
                for(i = 0, len = parsed.length; i < len; ++i){
                    if (RE_NAME.test(parsed[i][0])) {
                        fieldname = parsed[i][1];
                    } else if (RE_FILENAME.test(parsed[i][0])) {
                        filename = parsed[i][1];
                        if (!preservePath) {
                            filename = basename(filename);
                        }
                    }
                }
            } else {
                return skipPart(part);
            }
            if (header['content-transfer-encoding']) {
                encoding = header['content-transfer-encoding'][0].toLowerCase();
            } else {
                encoding = '7bit';
            }
            let onData, onEnd;
            if (isPartAFile(fieldname, contype, filename)) {
                // file/binary field
                if (nfiles === filesLimit) {
                    if (!boy.hitFilesLimit) {
                        boy.hitFilesLimit = true;
                        boy.emit('filesLimit');
                    }
                    return skipPart(part);
                }
                ++nfiles;
                if (boy.listenerCount('file') === 0) {
                    self.parser._ignore();
                    return;
                }
                ++nends;
                const file = new FileStream(fileOpts);
                curFile = file;
                file.on('end', function() {
                    --nends;
                    self._pause = false;
                    checkFinished();
                    if (self._cb && !self._needDrain) {
                        const cb = self._cb;
                        self._cb = undefined;
                        cb();
                    }
                });
                file._read = function(n) {
                    if (!self._pause) {
                        return;
                    }
                    self._pause = false;
                    if (self._cb && !self._needDrain) {
                        const cb = self._cb;
                        self._cb = undefined;
                        cb();
                    }
                };
                boy.emit('file', fieldname, file, filename, encoding, contype);
                onData = function(data) {
                    if ((nsize += data.length) > fileSizeLimit) {
                        const extralen = fileSizeLimit - nsize + data.length;
                        if (extralen > 0) {
                            file.push(data.slice(0, extralen));
                        }
                        file.truncated = true;
                        file.bytesRead = fileSizeLimit;
                        part.removeAllListeners('data');
                        file.emit('limit');
                        return;
                    } else if (!file.push(data)) {
                        self._pause = true;
                    }
                    file.bytesRead = nsize;
                };
                onEnd = function() {
                    curFile = undefined;
                    file.push(null);
                };
            } else {
                // non-file field
                if (nfields === fieldsLimit) {
                    if (!boy.hitFieldsLimit) {
                        boy.hitFieldsLimit = true;
                        boy.emit('fieldsLimit');
                    }
                    return skipPart(part);
                }
                ++nfields;
                ++nends;
                let buffer = '';
                let truncated = false;
                curField = part;
                onData = function(data) {
                    if ((nsize += data.length) > fieldSizeLimit) {
                        const extralen = fieldSizeLimit - (nsize - data.length);
                        buffer += data.toString('binary', 0, extralen);
                        truncated = true;
                        part.removeAllListeners('data');
                    } else {
                        buffer += data.toString('binary');
                    }
                };
                onEnd = function() {
                    curField = undefined;
                    if (buffer.length) {
                        buffer = decodeText(buffer, 'binary', charset);
                    }
                    boy.emit('field', fieldname, buffer, false, truncated, encoding, contype);
                    --nends;
                    checkFinished();
                };
            }
            /* As of node@2efe4ab761666 (v0.10.29+/v0.11.14+), busboy had become
         broken. Streams2/streams3 is a huge black box of confusion, but
         somehow overriding the sync state seems to fix things again (and still
         seems to work for previous node versions).
      */ part._readableState.sync = false;
            part.on('data', onData);
            part.on('end', onEnd);
        }).on('error', function(err) {
            if (curFile) {
                curFile.emit('error', err);
            }
        });
    }).on('error', function(err) {
        boy.emit('error', err);
    }).on('finish', function() {
        finished = true;
        checkFinished();
    });
}
Multipart.prototype.write = function(chunk, cb) {
    const r = this.parser.write(chunk);
    if (r && !this._pause) {
        cb();
    } else {
        this._needDrain = !r;
        this._cb = cb;
    }
};
Multipart.prototype.end = function() {
    const self = this;
    if (self.parser.writable) {
        self.parser.end();
    } else if (!self._boy._done) {
        process.nextTick(function() {
            self._boy._done = true;
            self._boy.emit('finish');
        });
    }
};
function skipPart(part) {
    part.resume();
}
function FileStream(opts) {
    Readable.call(this, opts);
    this.bytesRead = 0;
    this.truncated = false;
}
inherits(FileStream, Readable);
FileStream.prototype._read = function(n) {};
module.exports = Multipart;
}}),
"[project]/node_modules/@fastify/busboy/lib/utils/Decoder.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
'use strict';
const RE_PLUS = /\+/g;
const HEX = [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
];
function Decoder() {
    this.buffer = undefined;
}
Decoder.prototype.write = function(str) {
    // Replace '+' with ' ' before decoding
    str = str.replace(RE_PLUS, ' ');
    let res = '';
    let i = 0;
    let p = 0;
    const len = str.length;
    for(; i < len; ++i){
        if (this.buffer !== undefined) {
            if (!HEX[str.charCodeAt(i)]) {
                res += '%' + this.buffer;
                this.buffer = undefined;
                --i // retry character
                ;
            } else {
                this.buffer += str[i];
                ++p;
                if (this.buffer.length === 2) {
                    res += String.fromCharCode(parseInt(this.buffer, 16));
                    this.buffer = undefined;
                }
            }
        } else if (str[i] === '%') {
            if (i > p) {
                res += str.substring(p, i);
                p = i;
            }
            this.buffer = '';
            ++p;
        }
    }
    if (p < len && this.buffer === undefined) {
        res += str.substring(p);
    }
    return res;
};
Decoder.prototype.reset = function() {
    this.buffer = undefined;
};
module.exports = Decoder;
}}),
"[project]/node_modules/@fastify/busboy/lib/types/urlencoded.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
'use strict';
const Decoder = __turbopack_require__("[project]/node_modules/@fastify/busboy/lib/utils/Decoder.js [app-rsc] (ecmascript)");
const decodeText = __turbopack_require__("[project]/node_modules/@fastify/busboy/lib/utils/decodeText.js [app-rsc] (ecmascript)");
const getLimit = __turbopack_require__("[project]/node_modules/@fastify/busboy/lib/utils/getLimit.js [app-rsc] (ecmascript)");
const RE_CHARSET = /^charset$/i;
UrlEncoded.detect = /^application\/x-www-form-urlencoded/i;
function UrlEncoded(boy, cfg) {
    const limits = cfg.limits;
    const parsedConType = cfg.parsedConType;
    this.boy = boy;
    this.fieldSizeLimit = getLimit(limits, 'fieldSize', 1 * 1024 * 1024);
    this.fieldNameSizeLimit = getLimit(limits, 'fieldNameSize', 100);
    this.fieldsLimit = getLimit(limits, 'fields', Infinity);
    let charset;
    for(var i = 0, len = parsedConType.length; i < len; ++i){
        if (Array.isArray(parsedConType[i]) && RE_CHARSET.test(parsedConType[i][0])) {
            charset = parsedConType[i][1].toLowerCase();
            break;
        }
    }
    if (charset === undefined) {
        charset = cfg.defCharset || 'utf8';
    }
    this.decoder = new Decoder();
    this.charset = charset;
    this._fields = 0;
    this._state = 'key';
    this._checkingBytes = true;
    this._bytesKey = 0;
    this._bytesVal = 0;
    this._key = '';
    this._val = '';
    this._keyTrunc = false;
    this._valTrunc = false;
    this._hitLimit = false;
}
UrlEncoded.prototype.write = function(data, cb) {
    if (this._fields === this.fieldsLimit) {
        if (!this.boy.hitFieldsLimit) {
            this.boy.hitFieldsLimit = true;
            this.boy.emit('fieldsLimit');
        }
        return cb();
    }
    let idxeq;
    let idxamp;
    let i;
    let p = 0;
    const len = data.length;
    while(p < len){
        if (this._state === 'key') {
            idxeq = idxamp = undefined;
            for(i = p; i < len; ++i){
                if (!this._checkingBytes) {
                    ++p;
                }
                if (data[i] === 0x3D /* = */ ) {
                    idxeq = i;
                    break;
                } else if (data[i] === 0x26 /* & */ ) {
                    idxamp = i;
                    break;
                }
                if (this._checkingBytes && this._bytesKey === this.fieldNameSizeLimit) {
                    this._hitLimit = true;
                    break;
                } else if (this._checkingBytes) {
                    ++this._bytesKey;
                }
            }
            if (idxeq !== undefined) {
                // key with assignment
                if (idxeq > p) {
                    this._key += this.decoder.write(data.toString('binary', p, idxeq));
                }
                this._state = 'val';
                this._hitLimit = false;
                this._checkingBytes = true;
                this._val = '';
                this._bytesVal = 0;
                this._valTrunc = false;
                this.decoder.reset();
                p = idxeq + 1;
            } else if (idxamp !== undefined) {
                // key with no assignment
                ++this._fields;
                let key;
                const keyTrunc = this._keyTrunc;
                if (idxamp > p) {
                    key = this._key += this.decoder.write(data.toString('binary', p, idxamp));
                } else {
                    key = this._key;
                }
                this._hitLimit = false;
                this._checkingBytes = true;
                this._key = '';
                this._bytesKey = 0;
                this._keyTrunc = false;
                this.decoder.reset();
                if (key.length) {
                    this.boy.emit('field', decodeText(key, 'binary', this.charset), '', keyTrunc, false);
                }
                p = idxamp + 1;
                if (this._fields === this.fieldsLimit) {
                    return cb();
                }
            } else if (this._hitLimit) {
                // we may not have hit the actual limit if there are encoded bytes...
                if (i > p) {
                    this._key += this.decoder.write(data.toString('binary', p, i));
                }
                p = i;
                if ((this._bytesKey = this._key.length) === this.fieldNameSizeLimit) {
                    // yep, we actually did hit the limit
                    this._checkingBytes = false;
                    this._keyTrunc = true;
                }
            } else {
                if (p < len) {
                    this._key += this.decoder.write(data.toString('binary', p));
                }
                p = len;
            }
        } else {
            idxamp = undefined;
            for(i = p; i < len; ++i){
                if (!this._checkingBytes) {
                    ++p;
                }
                if (data[i] === 0x26 /* & */ ) {
                    idxamp = i;
                    break;
                }
                if (this._checkingBytes && this._bytesVal === this.fieldSizeLimit) {
                    this._hitLimit = true;
                    break;
                } else if (this._checkingBytes) {
                    ++this._bytesVal;
                }
            }
            if (idxamp !== undefined) {
                ++this._fields;
                if (idxamp > p) {
                    this._val += this.decoder.write(data.toString('binary', p, idxamp));
                }
                this.boy.emit('field', decodeText(this._key, 'binary', this.charset), decodeText(this._val, 'binary', this.charset), this._keyTrunc, this._valTrunc);
                this._state = 'key';
                this._hitLimit = false;
                this._checkingBytes = true;
                this._key = '';
                this._bytesKey = 0;
                this._keyTrunc = false;
                this.decoder.reset();
                p = idxamp + 1;
                if (this._fields === this.fieldsLimit) {
                    return cb();
                }
            } else if (this._hitLimit) {
                // we may not have hit the actual limit if there are encoded bytes...
                if (i > p) {
                    this._val += this.decoder.write(data.toString('binary', p, i));
                }
                p = i;
                if (this._val === '' && this.fieldSizeLimit === 0 || (this._bytesVal = this._val.length) === this.fieldSizeLimit) {
                    // yep, we actually did hit the limit
                    this._checkingBytes = false;
                    this._valTrunc = true;
                }
            } else {
                if (p < len) {
                    this._val += this.decoder.write(data.toString('binary', p));
                }
                p = len;
            }
        }
    }
    cb();
};
UrlEncoded.prototype.end = function() {
    if (this.boy._done) {
        return;
    }
    if (this._state === 'key' && this._key.length > 0) {
        this.boy.emit('field', decodeText(this._key, 'binary', this.charset), '', this._keyTrunc, false);
    } else if (this._state === 'val') {
        this.boy.emit('field', decodeText(this._key, 'binary', this.charset), decodeText(this._val, 'binary', this.charset), this._keyTrunc, this._valTrunc);
    }
    this.boy._done = true;
    this.boy.emit('finish');
};
module.exports = UrlEncoded;
}}),
"[project]/node_modules/@fastify/busboy/lib/main.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
'use strict';
const WritableStream = __turbopack_require__("[externals]/node:stream [external] (node:stream, cjs)").Writable;
const { inherits } = __turbopack_require__("[externals]/node:util [external] (node:util, cjs)");
const Dicer = __turbopack_require__("[project]/node_modules/@fastify/busboy/deps/dicer/lib/Dicer.js [app-rsc] (ecmascript)");
const MultipartParser = __turbopack_require__("[project]/node_modules/@fastify/busboy/lib/types/multipart.js [app-rsc] (ecmascript)");
const UrlencodedParser = __turbopack_require__("[project]/node_modules/@fastify/busboy/lib/types/urlencoded.js [app-rsc] (ecmascript)");
const parseParams = __turbopack_require__("[project]/node_modules/@fastify/busboy/lib/utils/parseParams.js [app-rsc] (ecmascript)");
function Busboy(opts) {
    if (!(this instanceof Busboy)) {
        return new Busboy(opts);
    }
    if (typeof opts !== 'object') {
        throw new TypeError('Busboy expected an options-Object.');
    }
    if (typeof opts.headers !== 'object') {
        throw new TypeError('Busboy expected an options-Object with headers-attribute.');
    }
    if (typeof opts.headers['content-type'] !== 'string') {
        throw new TypeError('Missing Content-Type-header.');
    }
    const { headers, ...streamOptions } = opts;
    this.opts = {
        autoDestroy: false,
        ...streamOptions
    };
    WritableStream.call(this, this.opts);
    this._done = false;
    this._parser = this.getParserByHeaders(headers);
    this._finished = false;
}
inherits(Busboy, WritableStream);
Busboy.prototype.emit = function(ev) {
    if (ev === 'finish') {
        if (!this._done) {
            this._parser?.end();
            return;
        } else if (this._finished) {
            return;
        }
        this._finished = true;
    }
    WritableStream.prototype.emit.apply(this, arguments);
};
Busboy.prototype.getParserByHeaders = function(headers) {
    const parsed = parseParams(headers['content-type']);
    const cfg = {
        defCharset: this.opts.defCharset,
        fileHwm: this.opts.fileHwm,
        headers,
        highWaterMark: this.opts.highWaterMark,
        isPartAFile: this.opts.isPartAFile,
        limits: this.opts.limits,
        parsedConType: parsed,
        preservePath: this.opts.preservePath
    };
    if (MultipartParser.detect.test(parsed[0])) {
        return new MultipartParser(this, cfg);
    }
    if (UrlencodedParser.detect.test(parsed[0])) {
        return new UrlencodedParser(this, cfg);
    }
    throw new Error('Unsupported Content-Type.');
};
Busboy.prototype._write = function(chunk, encoding, cb) {
    this._parser.write(chunk, cb);
};
module.exports = Busboy;
module.exports.default = Busboy;
module.exports.Busboy = Busboy;
module.exports.Dicer = Dicer;
}}),
"[project]/node_modules/@connectrpc/connect-node/dist/esm/node-headers-polyfill.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// Copyright 2021-2024 The Connect Authors
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$undici$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/undici/index.js [app-rsc] (ecmascript)");
;
// The global Headers class was introduced in Node v16.15.0, behind the
// --experimental-fetch flag. It became available by default with Node
// v18.0.0.
// If this code runs in Node < 18, it installs an alternative
// implementation if one has not already been polyfilled.
const [major] = process.versions.node.split(".").map((value)=>parseInt(value, 10));
if (major < 18) {
    if (typeof globalThis.Headers === "undefined") {
        globalThis.Headers = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$undici$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Headers"];
    }
}
}}),
"[project]/node_modules/@connectrpc/connect-node/dist/esm/node-error.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// Copyright 2021-2024 The Connect Authors
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
__turbopack_esm__({
    "H2Code": (()=>H2Code),
    "connectErrorFromH2ResetCode": (()=>connectErrorFromH2ResetCode),
    "connectErrorFromNodeReason": (()=>connectErrorFromNodeReason),
    "getNodeErrorProps": (()=>getNodeErrorProps),
    "unwrapNodeErrorChain": (()=>unwrapNodeErrorChain)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$code$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@connectrpc/connect/dist/esm/code.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$connect$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@connectrpc/connect/dist/esm/connect-error.js [app-rsc] (ecmascript)");
;
function connectErrorFromNodeReason(reason) {
    let code = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$code$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Code"].Internal;
    const chain = unwrapNodeErrorChain(reason).map(getNodeErrorProps);
    if (chain.some((p)=>p.code == "ERR_STREAM_WRITE_AFTER_END")) {
        // We do not want intentional errors from the server to be shadowed
        // by client-side errors.
        // This can occur if the server has written a response with an error
        // and has ended the connection. This response may already sit in a
        // buffer on the client, while it is still writing to the request
        // body.
        // To avoid this problem, we wrap ERR_STREAM_WRITE_AFTER_END as a
        // ConnectError with Code.Aborted. The special meaning of this code
        // in this situation is documented in StreamingConn.send() and in
        // createServerStreamingFn().
        code = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$code$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Code"].Aborted;
    } else if (chain.some((p)=>p.code == "ERR_STREAM_DESTROYED" || p.code == "ERR_HTTP2_INVALID_STREAM" || p.code == "ECONNRESET")) {
        // A handler whose stream is suddenly destroyed usually means the client
        // hung up. This behavior is triggered by the conformance test "cancel_after_begin".
        code = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$code$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Code"].Aborted;
    } else if (chain.some((p)=>p.code == "ETIMEDOUT" || p.code == "ENOTFOUND" || p.code == "EAI_AGAIN" || p.code == "ECONNREFUSED")) {
        // Calling an unresolvable host should raise a ConnectError with
        // Code.Aborted.
        // This behavior is covered by the conformance test "unresolvable_host".
        code = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$code$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Code"].Unavailable;
    }
    const ce = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$connect$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ConnectError"].from(reason, code);
    if (ce !== reason) {
        ce.cause = reason;
    }
    return ce;
}
function unwrapNodeErrorChain(reason) {
    const chain = [];
    for(;;){
        if (!(reason instanceof Error)) {
            break;
        }
        if (chain.includes(reason)) {
            break;
        }
        chain.push(reason);
        if (!("cause" in reason)) {
            break;
        }
        reason = reason.cause;
    }
    return chain;
}
function getNodeErrorProps(reason) {
    const props = {};
    if (reason instanceof Error) {
        if ("code" in reason && typeof reason.code == "string") {
            props.code = reason.code;
        }
        if ("syscall" in reason && typeof reason.syscall == "string") {
            props.syscall = reason.syscall;
        }
    }
    return props;
}
function connectErrorFromH2ResetCode(rstCode) {
    switch(rstCode){
        case H2Code.PROTOCOL_ERROR:
        case H2Code.INTERNAL_ERROR:
        case H2Code.FLOW_CONTROL_ERROR:
        case H2Code.SETTINGS_TIMEOUT:
        case H2Code.FRAME_SIZE_ERROR:
        case H2Code.COMPRESSION_ERROR:
        case H2Code.CONNECT_ERROR:
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$connect$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ConnectError"](`http/2 stream closed with error code ${H2Code[rstCode]} (0x${rstCode.toString(16)})`, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$code$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Code"].Internal);
        case H2Code.REFUSED_STREAM:
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$connect$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ConnectError"](`http/2 stream closed with error code ${H2Code[rstCode]} (0x${rstCode.toString(16)})`, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$code$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Code"].Unavailable);
        case H2Code.CANCEL:
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$connect$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ConnectError"](`http/2 stream closed with error code ${H2Code[rstCode]} (0x${rstCode.toString(16)})`, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$code$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Code"].Canceled);
        case H2Code.ENHANCE_YOUR_CALM:
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$connect$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ConnectError"](`http/2 stream closed with error code ${H2Code[rstCode]} (0x${rstCode.toString(16)})`, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$code$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Code"].ResourceExhausted);
        case H2Code.INADEQUATE_SECURITY:
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$connect$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ConnectError"](`http/2 stream closed with error code ${H2Code[rstCode]} (0x${rstCode.toString(16)})`, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$code$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Code"].PermissionDenied);
        case H2Code.HTTP_1_1_REQUIRED:
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$connect$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ConnectError"](`http/2 stream closed with error code ${H2Code[rstCode]} (0x${rstCode.toString(16)})`, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$code$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Code"].PermissionDenied);
        case H2Code.STREAM_CLOSED:
        default:
            break;
    }
    return undefined;
}
var H2Code;
(function(H2Code) {
    H2Code[H2Code["PROTOCOL_ERROR"] = 1] = "PROTOCOL_ERROR";
    H2Code[H2Code["INTERNAL_ERROR"] = 2] = "INTERNAL_ERROR";
    H2Code[H2Code["FLOW_CONTROL_ERROR"] = 3] = "FLOW_CONTROL_ERROR";
    H2Code[H2Code["SETTINGS_TIMEOUT"] = 4] = "SETTINGS_TIMEOUT";
    H2Code[H2Code["STREAM_CLOSED"] = 5] = "STREAM_CLOSED";
    H2Code[H2Code["FRAME_SIZE_ERROR"] = 6] = "FRAME_SIZE_ERROR";
    H2Code[H2Code["REFUSED_STREAM"] = 7] = "REFUSED_STREAM";
    H2Code[H2Code["CANCEL"] = 8] = "CANCEL";
    H2Code[H2Code["COMPRESSION_ERROR"] = 9] = "COMPRESSION_ERROR";
    H2Code[H2Code["CONNECT_ERROR"] = 10] = "CONNECT_ERROR";
    H2Code[H2Code["ENHANCE_YOUR_CALM"] = 11] = "ENHANCE_YOUR_CALM";
    H2Code[H2Code["INADEQUATE_SECURITY"] = 12] = "INADEQUATE_SECURITY";
    H2Code[H2Code["HTTP_1_1_REQUIRED"] = 13] = "HTTP_1_1_REQUIRED";
})(H2Code || (H2Code = {}));
}}),
"[project]/node_modules/@connectrpc/connect-node/dist/esm/compression.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// Copyright 2021-2024 The Connect Authors
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
__turbopack_esm__({
    "compressionBrotli": (()=>compressionBrotli),
    "compressionGzip": (()=>compressionGzip)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$zlib__$5b$external$5d$__$28$zlib$2c$__cjs$29$__ = __turbopack_import__("[externals]/zlib [external] (zlib, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$util__$5b$external$5d$__$28$util$2c$__cjs$29$__ = __turbopack_import__("[externals]/util [external] (util, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$node$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@connectrpc/connect-node/dist/esm/node-error.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$code$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@connectrpc/connect/dist/esm/code.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$connect$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@connectrpc/connect/dist/esm/connect-error.js [app-rsc] (ecmascript)");
;
;
;
;
const gzip = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$util__$5b$external$5d$__$28$util$2c$__cjs$29$__["promisify"])(__TURBOPACK__imported__module__$5b$externals$5d2f$zlib__$5b$external$5d$__$28$zlib$2c$__cjs$29$__.gzip);
const gunzip = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$util__$5b$external$5d$__$28$util$2c$__cjs$29$__["promisify"])(__TURBOPACK__imported__module__$5b$externals$5d2f$zlib__$5b$external$5d$__$28$zlib$2c$__cjs$29$__.gunzip);
const brotliCompress = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$util__$5b$external$5d$__$28$util$2c$__cjs$29$__["promisify"])(__TURBOPACK__imported__module__$5b$externals$5d2f$zlib__$5b$external$5d$__$28$zlib$2c$__cjs$29$__.brotliCompress);
const brotliDecompress = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$util__$5b$external$5d$__$28$util$2c$__cjs$29$__["promisify"])(__TURBOPACK__imported__module__$5b$externals$5d2f$zlib__$5b$external$5d$__$28$zlib$2c$__cjs$29$__.brotliDecompress);
const compressionGzip = {
    name: "gzip",
    compress (bytes) {
        return gzip(bytes, {});
    },
    decompress (bytes, readMaxBytes) {
        if (bytes.length == 0) {
            return Promise.resolve(new Uint8Array(0));
        }
        return wrapZLibErrors(gunzip(bytes, {
            maxOutputLength: readMaxBytes
        }), readMaxBytes);
    }
};
const compressionBrotli = {
    name: "br",
    compress (bytes) {
        return brotliCompress(bytes, {});
    },
    decompress (bytes, readMaxBytes) {
        if (bytes.length == 0) {
            return Promise.resolve(new Uint8Array(0));
        }
        return wrapZLibErrors(brotliDecompress(bytes, {
            maxOutputLength: readMaxBytes
        }), readMaxBytes);
    }
};
function wrapZLibErrors(promise, readMaxBytes) {
    return promise.catch((e)=>{
        const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$node$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getNodeErrorProps"])(e);
        let code = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$code$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Code"].Internal;
        let message = "decompression failed";
        // eslint-disable-next-line @typescript-eslint/switch-exhaustiveness-check
        switch(props.code){
            case "ERR_BUFFER_TOO_LARGE":
                code = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$code$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Code"].ResourceExhausted;
                message = `message is larger than configured readMaxBytes ${readMaxBytes} after decompression`;
                break;
            case "Z_DATA_ERROR":
            case "ERR_PADDING_2":
                code = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$code$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Code"].InvalidArgument;
                break;
            default:
                if (props.code !== undefined && props.code.startsWith("ERR__ERROR_FORMAT_")) {
                    code = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$code$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Code"].InvalidArgument;
                }
                break;
        }
        return Promise.reject(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$connect$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ConnectError"](message, code, undefined, undefined, e));
    });
}
}}),
"[project]/node_modules/@connectrpc/connect-node/dist/esm/node-universal-header.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// Copyright 2021-2024 The Connect Authors
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
/**
 * Convert a Node.js header object to a fetch API Headers object.
 *
 * This function works for Node.js incoming and outgoing headers, and for the
 * http and the http2 package.
 *
 * HTTP/2 pseudo-headers (:method, :path, etc.) are stripped.
 */ __turbopack_esm__({
    "nodeHeaderToWebHeader": (()=>nodeHeaderToWebHeader),
    "webHeaderToNodeHeaders": (()=>webHeaderToNodeHeaders)
});
function nodeHeaderToWebHeader(nodeHeaders) {
    const header = new Headers();
    for (const [k, v] of Object.entries(nodeHeaders)){
        if (k.startsWith(":")) {
            continue;
        }
        if (v === undefined) {
            continue;
        }
        if (typeof v == "string") {
            header.append(k, v);
        } else if (typeof v == "number") {
            header.append(k, String(v));
        } else {
            for (const e of v){
                header.append(k, e);
            }
        }
    }
    return header;
}
function webHeaderToNodeHeaders(headersInit, defaultNodeHeaders) {
    if (headersInit === undefined && defaultNodeHeaders === undefined) {
        return undefined;
    }
    const o = Object.create(null);
    if (defaultNodeHeaders !== undefined) {
        for (const [key, value] of Object.entries(defaultNodeHeaders)){
            if (Array.isArray(value)) {
                o[key] = value.concat();
            } else if (value !== undefined) {
                o[key] = value;
            }
        }
    }
    if (headersInit !== undefined) {
        if (Array.isArray(headersInit)) {
            for (const [key, value] of headersInit){
                appendWebHeader(o, key, value);
            }
        } else if ("forEach" in headersInit) {
            if (typeof headersInit.forEach == "function") {
                headersInit.forEach((value, key)=>{
                    appendWebHeader(o, key, value);
                });
            }
        } else {
            for (const [key, value] of Object.entries(headersInit)){
                appendWebHeader(o, key, value);
            }
        }
    }
    return o;
}
function appendWebHeader(o, key, value) {
    key = key.toLowerCase();
    const existing = o[key];
    if (Array.isArray(existing)) {
        existing.push(value);
    } else if (existing === undefined) {
        o[key] = value;
    } else {
        o[key] = [
            existing.toString(),
            value
        ];
    }
}
}}),
"[project]/node_modules/@connectrpc/connect-node/dist/esm/http2-session-manager.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// Copyright 2021-2024 The Connect Authors
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
__turbopack_esm__({
    "Http2SessionManager": (()=>Http2SessionManager)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$http2__$5b$external$5d$__$28$http2$2c$__cjs$29$__ = __turbopack_import__("[externals]/http2 [external] (http2, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$node$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@connectrpc/connect-node/dist/esm/node-error.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$connect$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@connectrpc/connect/dist/esm/connect-error.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$code$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@connectrpc/connect/dist/esm/code.js [app-rsc] (ecmascript)");
;
;
;
class Http2SessionManager {
    /**
     * The current state of the connection:
     *
     * - "closed"
     *   The connection is closed, or no connection has been opened yet.
     * - connecting
     *   Currently establishing a connection.
     *
     * - "open"
     *   A connection is open and has open streams. PING frames are sent every
     *   pingIntervalMs, unless a stream received data.
     *   If a PING frame is not responded to within pingTimeoutMs, the connection
     *   and all open streams close.
     *
     * - "idle"
     *   A connection is open, but it does not have any open streams.
     *   If pingIdleConnection is enabled, PING frames are used to keep the
     *   connection alive, similar to an "open" connection.
     *   If a connection is idle for longer than idleConnectionTimeoutMs, it closes.
     *   If a request is made on an idle connection that has not been used for
     *   longer than pingIntervalMs, the connection is verified.
     *
     * - "verifying"
     *   Verifying a connection after a long period of inactivity before issuing a
     *   request. A PING frame is sent, and if it times out within pingTimeoutMs, a
     *   new connection is opened.
     *
     * - "error"
     *   The connection is closed because of a transient error. A connection
     *   may have failed to reach the host, or the connection may have died,
     *   or it may have been aborted.
     */ state() {
        if (this.s.t == "ready") {
            if (this.verifying !== undefined) {
                return "verifying";
            }
            return this.s.streamCount() > 0 ? "open" : "idle";
        }
        return this.s.t;
    }
    /**
     * Returns the error object if the connection is in the "error" state,
     * `undefined` otherwise.
     */ error() {
        if (this.s.t == "error") {
            return this.s.reason;
        }
        return undefined;
    }
    constructor(url, pingOptions, http2SessionOptions){
        var _a, _b, _c, _d;
        this.s = closed();
        this.shuttingDown = [];
        this.authority = new URL(url).origin;
        this.http2SessionOptions = http2SessionOptions;
        this.options = {
            pingIntervalMs: (_a = pingOptions === null || pingOptions === void 0 ? void 0 : pingOptions.pingIntervalMs) !== null && _a !== void 0 ? _a : Number.POSITIVE_INFINITY,
            pingTimeoutMs: (_b = pingOptions === null || pingOptions === void 0 ? void 0 : pingOptions.pingTimeoutMs) !== null && _b !== void 0 ? _b : 1000 * 15,
            pingIdleConnection: (_c = pingOptions === null || pingOptions === void 0 ? void 0 : pingOptions.pingIdleConnection) !== null && _c !== void 0 ? _c : false,
            idleConnectionTimeoutMs: (_d = pingOptions === null || pingOptions === void 0 ? void 0 : pingOptions.idleConnectionTimeoutMs) !== null && _d !== void 0 ? _d : 1000 * 60 * 15
        };
    }
    /**
     * Open a connection if none exists, verify an existing connection if
     * necessary.
     */ async connect() {
        try {
            const ready = await this.gotoReady();
            return ready.streamCount() > 0 ? "open" : "idle";
        } catch (e) {
            return "error";
        }
    }
    /**
     * Issue a request.
     *
     * This method automatically opens a connection if none exists, and verifies
     * an existing connection if necessary. It calls http2.ClientHttp2Session.request(),
     * and keeps track of all open http2.ClientHttp2Stream.
     *
     * Clients must call notifyResponseByteRead() whenever they successfully read
     * data from the http2.ClientHttp2Stream.
     */ async request(method, path, headers, options) {
        // Request sometimes fails with goaway/destroyed
        // errors, we use a loop to retry.
        //
        // This is not expected to happen often, but it is possible that a
        // connection is closed while we are trying to open a stream.
        //
        // Ref: https://github.com/nodejs/help/issues/2105
        for(;;){
            const ready = await this.gotoReady();
            try {
                const stream = ready.conn.request(Object.assign(Object.assign({}, headers), {
                    ":method": method,
                    ":path": path
                }), options);
                ready.registerRequest(stream);
                return stream;
            } catch (e) {
                // Check to see if the connection is closed or destroyed
                // and if so, we try again.
                if (ready.conn.closed || ready.conn.destroyed) {
                    continue;
                }
                throw e;
            }
        }
    }
    /**
     * Notify the manager of a successful read from a http2.ClientHttp2Stream.
     *
     * Clients must call this function whenever they successfully read data from
     * a http2.ClientHttp2Stream obtained from request(). This informs the
     * keep-alive logic that the connection is alive, and prevents it from sending
     * unnecessary PING frames.
     */ notifyResponseByteRead(stream) {
        if (this.s.t == "ready") {
            this.s.responseByteRead(stream);
        }
        for (const s of this.shuttingDown){
            s.responseByteRead(stream);
        }
    }
    /**
     * If there is an open connection, close it. This also closes any open streams.
     */ abort(reason) {
        var _a, _b, _c;
        const err = reason !== null && reason !== void 0 ? reason : new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$connect$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ConnectError"]("connection aborted", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$code$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Code"].Canceled);
        (_b = (_a = this.s).abort) === null || _b === void 0 ? void 0 : _b.call(_a, err);
        for (const s of this.shuttingDown){
            (_c = s.abort) === null || _c === void 0 ? void 0 : _c.call(s, err);
        }
        this.setState(closedOrError(err));
    }
    async gotoReady() {
        if (this.s.t == "ready") {
            if (this.s.isShuttingDown() || this.s.conn.closed || this.s.conn.destroyed) {
                this.setState(connect(this.authority, this.http2SessionOptions));
            } else if (this.s.requiresVerify()) {
                await this.verify(this.s);
            }
        } else if (this.s.t == "closed" || this.s.t == "error") {
            this.setState(connect(this.authority, this.http2SessionOptions));
        }
        while(this.s.t !== "ready"){
            if (this.s.t === "error") {
                throw this.s.reason;
            }
            if (this.s.t === "connecting") {
                await this.s.conn;
            }
        }
        return this.s;
    }
    setState(state) {
        var _a, _b;
        (_b = (_a = this.s).onExitState) === null || _b === void 0 ? void 0 : _b.call(_a);
        if (this.s.t == "ready" && this.s.isShuttingDown()) {
            // Maintain connections that have been asked to shut down.
            const sd = this.s;
            this.shuttingDown.push(sd);
            sd.onClose = sd.onError = ()=>{
                const i = this.shuttingDown.indexOf(sd);
                if (i !== -1) {
                    this.shuttingDown.splice(i, 1);
                }
            };
        }
        switch(state.t){
            case "connecting":
                state.conn.then((value)=>{
                    this.setState(ready(value, this.options));
                }, (reason)=>{
                    this.setState(closedOrError(reason));
                });
                break;
            case "ready":
                state.onClose = ()=>this.setState(closed());
                state.onError = (err)=>this.setState(closedOrError(err));
                break;
            case "closed":
                break;
            case "error":
                break;
        }
        this.s = state;
    }
    verify(stateReady) {
        if (this.verifying !== undefined) {
            return this.verifying;
        }
        this.verifying = stateReady.verify().then((success)=>{
            if (success) {
                return;
            }
            // verify() has destroyed the old connection
            this.setState(connect(this.authority, this.http2SessionOptions));
        }, (reason)=>{
            this.setState(closedOrError(reason));
        }).finally(()=>{
            this.verifying = undefined;
        });
        return this.verifying;
    }
}
function closed() {
    return {
        t: "closed"
    };
}
function error(reason) {
    return {
        t: "error",
        reason
    };
}
function closedOrError(reason) {
    const isCancel = reason instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$connect$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ConnectError"] && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$connect$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ConnectError"].from(reason).code == __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$code$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Code"].Canceled;
    return isCancel ? closed() : error(reason);
}
function connect(authority, http2SessionOptions) {
    let resolve;
    let reject;
    const conn = new Promise((res, rej)=>{
        resolve = res;
        reject = rej;
    });
    const newConn = __TURBOPACK__imported__module__$5b$externals$5d2f$http2__$5b$external$5d$__$28$http2$2c$__cjs$29$__.connect(authority, http2SessionOptions);
    newConn.on("connect", onConnect);
    newConn.on("error", onError);
    function onConnect() {
        resolve === null || resolve === void 0 ? void 0 : resolve(newConn);
        cleanup();
    }
    function onError(err) {
        reject === null || reject === void 0 ? void 0 : reject((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$node$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["connectErrorFromNodeReason"])(err));
        cleanup();
    }
    function cleanup() {
        newConn.off("connect", onConnect);
        newConn.off("error", onError);
    }
    return {
        t: "connecting",
        conn,
        abort (reason) {
            if (!newConn.destroyed) {
                newConn.destroy(undefined, __TURBOPACK__imported__module__$5b$externals$5d2f$http2__$5b$external$5d$__$28$http2$2c$__cjs$29$__.constants.NGHTTP2_CANCEL);
            }
            // According to the documentation, destroy() should immediately terminate
            // the session and the socket, but we still receive a "connect" event.
            // We must not resolve a broken connection, so we reject it manually here.
            reject === null || reject === void 0 ? void 0 : reject(reason);
        },
        onExitState () {
            cleanup();
        }
    };
}
function ready(conn, options) {
    // Users have reported an error "The session has been destroyed" raised
    // from H2SessionManager.request(), see https://github.com/connectrpc/connect-es/issues/683
    // This assertion will show whether the session already died in the
    // "connecting" state.
    assertSessionOpen(conn);
    // Do not block Node.js from exiting on an idle connection.
    // Note that we ref() again for the first stream to open, and unref() again
    // for the last stream to close.
    conn.unref();
    // the last time we were sure that the connection is alive, via a PING
    // response, or via received response bytes
    let lastAliveAt = Date.now();
    // how many streams are currently open on this session
    let streamCount = 0;
    // timer for the keep-alive interval
    let pingIntervalId;
    // timer for waiting for a PING response
    let pingTimeoutId;
    // keep track of GOAWAY - gracefully shut down open streams / wait for connection to error
    let receivedGoAway = false;
    // keep track of GOAWAY with ENHANCE_YOUR_CALM and with debug data too_many_pings
    let receivedGoAwayEnhanceYourCalmTooManyPings = false;
    // timer for closing connections without open streams, must be initialized
    let idleTimeoutId;
    resetIdleTimeout();
    const state = {
        t: "ready",
        conn,
        streamCount () {
            return streamCount;
        },
        requiresVerify () {
            const elapsedMs = Date.now() - lastAliveAt;
            return elapsedMs > options.pingIntervalMs;
        },
        isShuttingDown () {
            return receivedGoAway;
        },
        onClose: undefined,
        onError: undefined,
        registerRequest (stream) {
            streamCount++;
            if (streamCount == 1) {
                conn.ref();
                resetPingInterval(); // reset to ping with the appropriate interval for "open"
                stopIdleTimeout();
            }
            stream.once("response", ()=>{
                lastAliveAt = Date.now();
                resetPingInterval();
            });
            stream.once("close", ()=>{
                streamCount--;
                if (streamCount == 0) {
                    conn.unref();
                    resetPingInterval(); // reset to ping with the appropriate interval for "idle"
                    resetIdleTimeout();
                }
            });
        },
        responseByteRead (stream) {
            if (stream.session !== conn) {
                return;
            }
            if (conn.closed || conn.destroyed) {
                return;
            }
            if (streamCount <= 0) {
                return;
            }
            lastAliveAt = Date.now();
            resetPingInterval();
        },
        verify () {
            conn.ref();
            return new Promise((resolve)=>{
                commonPing(()=>{
                    if (streamCount == 0) conn.unref();
                    resolve(true);
                });
                conn.once("error", ()=>resolve(false));
            });
        },
        abort (reason) {
            if (!conn.destroyed) {
                conn.once("error", ()=>{
                // conn.destroy() may raise an error after onExitState() was called
                // and our error listeners are removed.
                // We attach this one to swallow uncaught exceptions.
                });
                conn.destroy(reason, __TURBOPACK__imported__module__$5b$externals$5d2f$http2__$5b$external$5d$__$28$http2$2c$__cjs$29$__.constants.NGHTTP2_CANCEL);
            }
        },
        onExitState () {
            if (state.isShuttingDown()) {
                // Per the interface, this method is called when the manager is leaving
                // the state. We maintain this connection in the session manager until
                // all streams have finished, so we do not detach event listeners here.
                return;
            }
            cleanup();
            this.onError = undefined;
            this.onClose = undefined;
        }
    };
    // start or restart the ping interval
    function resetPingInterval() {
        stopPingInterval();
        if (streamCount > 0 || options.pingIdleConnection) {
            pingIntervalId = safeSetTimeout(onPingInterval, options.pingIntervalMs);
        }
    }
    function stopPingInterval() {
        clearTimeout(pingIntervalId);
        clearTimeout(pingTimeoutId);
    }
    function onPingInterval() {
        commonPing(resetPingInterval);
    }
    function commonPing(onSuccess) {
        clearTimeout(pingTimeoutId);
        pingTimeoutId = safeSetTimeout(()=>{
            conn.destroy(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$connect$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ConnectError"]("PING timed out", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$code$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Code"].Unavailable), __TURBOPACK__imported__module__$5b$externals$5d2f$http2__$5b$external$5d$__$28$http2$2c$__cjs$29$__.constants.NGHTTP2_CANCEL);
        }, options.pingTimeoutMs);
        conn.ping((err, duration)=>{
            clearTimeout(pingTimeoutId);
            if (err !== null) {
                // We will receive an ERR_HTTP2_PING_CANCEL here if we destroy the
                // connection with a pending ping.
                // We might also see other errors, but they should be picked up by the
                // "error" event listener.
                return;
            }
            if (duration > options.pingTimeoutMs) {
                // setTimeout is not precise, and HTTP/2 pings take less than 1ms in
                // tests.
                conn.destroy(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$connect$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ConnectError"]("PING timed out", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$code$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Code"].Unavailable), __TURBOPACK__imported__module__$5b$externals$5d2f$http2__$5b$external$5d$__$28$http2$2c$__cjs$29$__.constants.NGHTTP2_CANCEL);
                return;
            }
            lastAliveAt = Date.now();
            onSuccess();
        });
    }
    function stopIdleTimeout() {
        clearTimeout(idleTimeoutId);
    }
    function resetIdleTimeout() {
        idleTimeoutId = safeSetTimeout(onIdleTimeout, options.idleConnectionTimeoutMs);
    }
    function onIdleTimeout() {
        conn.close();
        onClose(); // trigger a state change right away, so we are not open to races
    }
    function onGoaway(errorCode, lastStreamID, opaqueData) {
        receivedGoAway = true;
        const tooManyPingsAscii = Buffer.from("too_many_pings", "ascii");
        if (errorCode === __TURBOPACK__imported__module__$5b$externals$5d2f$http2__$5b$external$5d$__$28$http2$2c$__cjs$29$__.constants.NGHTTP2_ENHANCE_YOUR_CALM && opaqueData != null && opaqueData.equals(tooManyPingsAscii)) {
            // double pingIntervalMs, following the last paragraph of https://github.com/grpc/proposal/blob/0ba0c1905050525f9b0aee46f3f23c8e1e515489/A8-client-side-keepalive.md#basic-keepalive
            options.pingIntervalMs = options.pingIntervalMs * 2;
            receivedGoAwayEnhanceYourCalmTooManyPings = true;
        }
        if (errorCode === __TURBOPACK__imported__module__$5b$externals$5d2f$http2__$5b$external$5d$__$28$http2$2c$__cjs$29$__.constants.NGHTTP2_NO_ERROR) {
            const nodeMajor = parseInt(process.versions.node.split(".")[0], 10);
            // Node.js v16 closes a connection on its own when it receives a GOAWAY
            // frame and there are no open streams (emitting a "close" event and
            // destroying the session), but more recent versions do not.
            // Calling close() ourselves is ineffective here - it appears that the
            // method is already being called, see https://github.com/nodejs/node/blob/198affc63973805ce5102d246f6b7822be57f5fc/lib/internal/http2/core.js#L681
            if (streamCount == 0 && nodeMajor >= 18) {
                conn.destroy(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$connect$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ConnectError"]("received GOAWAY without any open streams", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$code$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Code"].Canceled), __TURBOPACK__imported__module__$5b$externals$5d2f$http2__$5b$external$5d$__$28$http2$2c$__cjs$29$__.constants.NGHTTP2_NO_ERROR);
            }
        }
    }
    function onClose() {
        var _a;
        cleanup();
        (_a = state.onClose) === null || _a === void 0 ? void 0 : _a.call(state);
    }
    function onError(err) {
        var _a, _b;
        cleanup();
        if (receivedGoAwayEnhanceYourCalmTooManyPings) {
            // We cannot prevent node from destroying session and streams with its own
            // error that does not carry debug data, but at least we can wrap the error
            // we surface on the manager.
            const ce = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$connect$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ConnectError"](`http/2 connection closed with error code ENHANCE_YOUR_CALM (0x${__TURBOPACK__imported__module__$5b$externals$5d2f$http2__$5b$external$5d$__$28$http2$2c$__cjs$29$__.constants.NGHTTP2_ENHANCE_YOUR_CALM.toString(16)}), too_many_pings, doubled the interval`, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$code$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Code"].ResourceExhausted);
            (_a = state.onError) === null || _a === void 0 ? void 0 : _a.call(state, ce);
        } else {
            (_b = state.onError) === null || _b === void 0 ? void 0 : _b.call(state, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$node$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["connectErrorFromNodeReason"])(err));
        }
    }
    function cleanup() {
        stopPingInterval();
        stopIdleTimeout();
        conn.off("error", onError);
        conn.off("close", onClose);
        conn.off("goaway", onGoaway);
    }
    conn.on("error", onError);
    conn.on("close", onClose);
    conn.on("goaway", onGoaway);
    return state;
}
/**
 * setTimeout(), but simply ignores values larger than the maximum supported
 * value (signed 32-bit integer) instead of calling the callback right away,
 * and does not block Node.js from exiting.
 */ function safeSetTimeout(callback, ms) {
    if (ms > 0x7fffffff) {
        return;
    }
    return setTimeout(callback, ms).unref();
}
function assertSessionOpen(conn) {
    if (conn.connecting) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$connect$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ConnectError"]("expected open session, but it is connecting", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$code$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Code"].Internal);
    }
    if (conn.destroyed) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$connect$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ConnectError"]("expected open session, but it is destroyed", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$code$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Code"].Internal);
    }
    if (conn.closed) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$connect$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ConnectError"]("expected open session, but it is closed", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$code$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Code"].Internal);
    }
}
}}),
"[project]/node_modules/@connectrpc/connect-node/dist/esm/node-universal-client.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// Copyright 2021-2024 The Connect Authors
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
__turbopack_esm__({
    "createNodeHttpClient": (()=>createNodeHttpClient)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$http2__$5b$external$5d$__$28$http2$2c$__cjs$29$__ = __turbopack_import__("[externals]/http2 [external] (http2, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$http__$5b$external$5d$__$28$http$2c$__cjs$29$__ = __turbopack_import__("[externals]/http [external] (http, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$https__$5b$external$5d$__$28$https$2c$__cjs$29$__ = __turbopack_import__("[externals]/https [external] (https, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$node$2d$universal$2d$header$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@connectrpc/connect-node/dist/esm/node-universal-header.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$node$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@connectrpc/connect-node/dist/esm/node-error.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$http2$2d$session$2d$manager$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@connectrpc/connect-node/dist/esm/http2-session-manager.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$connect$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@connectrpc/connect/dist/esm/connect-error.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$code$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@connectrpc/connect/dist/esm/code.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$protocol$2f$signals$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@connectrpc/connect/dist/esm/protocol/signals.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
function createNodeHttpClient(options) {
    var _a;
    if (options.httpVersion == "1.1") {
        return createNodeHttp1Client(options.nodeOptions);
    }
    const sessionProvider = (_a = options.sessionProvider) !== null && _a !== void 0 ? _a : (url)=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$http2$2d$session$2d$manager$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Http2SessionManager"](url);
    return createNodeHttp2Client(sessionProvider);
}
/**
 * Create an HTTP client using the Node.js `http` or `https` package.
 *
 * The HTTP client is a simple function conforming to the type UniversalClientFn.
 * It takes an UniversalClientRequest as an argument, and returns a promise for
 * an UniversalClientResponse.
 */ function createNodeHttp1Client(httpOptions) {
    return async function request(req) {
        const sentinel = createSentinel(req.signal);
        return new Promise((resolve, reject)=>{
            sentinel.catch((e)=>{
                reject(e);
            });
            h1Request(sentinel, req.url, Object.assign(Object.assign({}, httpOptions), {
                headers: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$node$2d$universal$2d$header$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["webHeaderToNodeHeaders"])(req.header, httpOptions === null || httpOptions === void 0 ? void 0 : httpOptions.headers),
                method: req.method
            }), (request)=>{
                void sinkRequest(req, request, sentinel);
                request.on("response", (response)=>{
                    var _a;
                    response.on("error", sentinel.reject);
                    sentinel.catch((reason)=>response.destroy((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$node$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["connectErrorFromNodeReason"])(reason)));
                    const trailer = new Headers();
                    resolve({
                        status: (_a = response.statusCode) !== null && _a !== void 0 ? _a : 0,
                        header: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$node$2d$universal$2d$header$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["nodeHeaderToWebHeader"])(response.headers),
                        body: h1ResponseIterable(sentinel, response, trailer),
                        trailer
                    });
                });
            });
        });
    };
}
/**
 * Create an HTTP client using the Node.js `http2` package.
 *
 * The HTTP client is a simple function conforming to the type UniversalClientFn.
 * It takes an UniversalClientRequest as an argument, and returns a promise for
 * an UniversalClientResponse.
 */ function createNodeHttp2Client(sessionProvider) {
    return function request(req) {
        const sentinel = createSentinel(req.signal);
        const sessionManager = sessionProvider(req.url);
        return new Promise((resolve, reject)=>{
            sentinel.catch((e)=>{
                reject(e);
            });
            h2Request(sentinel, sessionManager, req.url, req.method, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$node$2d$universal$2d$header$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["webHeaderToNodeHeaders"])(req.header), {}, (stream)=>{
                void sinkRequest(req, stream, sentinel);
                stream.on("response", (headers)=>{
                    var _a;
                    const response = {
                        status: (_a = headers[":status"]) !== null && _a !== void 0 ? _a : 0,
                        header: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$node$2d$universal$2d$header$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["nodeHeaderToWebHeader"])(headers),
                        body: h2ResponseIterable(sentinel, stream, sessionManager),
                        trailer: h2ResponseTrailer(stream)
                    };
                    resolve(response);
                });
            });
        });
    };
}
function h1Request(sentinel, url, options, onRequest) {
    let request;
    if (new URL(url).protocol.startsWith("https")) {
        request = __TURBOPACK__imported__module__$5b$externals$5d2f$https__$5b$external$5d$__$28$https$2c$__cjs$29$__.request(url, options);
    } else {
        request = __TURBOPACK__imported__module__$5b$externals$5d2f$http__$5b$external$5d$__$28$http$2c$__cjs$29$__.request(url, options);
    }
    sentinel.catch((reason)=>request.destroy((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$node$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["connectErrorFromNodeReason"])(reason)));
    // Node.js will only send headers with the first request body byte by default.
    // We force it to send headers right away for consistent behavior between
    // HTTP/1.1 and HTTP/2.2 clients.
    request.flushHeaders();
    request.on("error", sentinel.reject);
    request.on("socket", function onRequestSocket(socket) {
        function onSocketConnect() {
            socket.off("connect", onSocketConnect);
            onRequest(request);
        }
        // If readyState is open, then socket is already open due to keepAlive, so
        // the 'connect' event will never fire so call onRequest explicitly
        if (socket.readyState === "open") {
            onRequest(request);
        } else {
            socket.on("connect", onSocketConnect);
        }
    });
}
function h1ResponseIterable(sentinel, response, trailer) {
    const inner = response[Symbol.asyncIterator]();
    return {
        [Symbol.asyncIterator] () {
            return {
                async next () {
                    const r = await sentinel.race(inner.next());
                    if (r.done === true) {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$node$2d$universal$2d$header$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["nodeHeaderToWebHeader"])(response.trailers).forEach((value, key)=>{
                            trailer.set(key, value);
                        });
                        sentinel.resolve();
                        await sentinel;
                    }
                    return r;
                },
                throw (e) {
                    sentinel.reject(e);
                    throw e;
                }
            };
        }
    };
}
function h2Request(sentinel, sm, url, method, headers, options, onStream) {
    const requestUrl = new URL(url);
    if (requestUrl.origin !== sm.authority) {
        const message = `cannot make a request to ${requestUrl.origin}: the http2 session is connected to ${sm.authority}`;
        sentinel.reject(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$connect$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ConnectError"](message, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$code$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Code"].Internal));
        return;
    }
    sm.request(method, requestUrl.pathname + requestUrl.search, headers, {}).then((stream)=>{
        sentinel.catch((reason)=>{
            if (stream.closed) {
                return;
            }
            // Node.js http2 streams that are aborted via an AbortSignal close with
            // an RST_STREAM with code INTERNAL_ERROR.
            // To comply with the mapping between gRPC and HTTP/2 codes, we need to
            // close with code CANCEL.
            // See https://github.com/grpc/grpc/blob/master/doc/PROTOCOL-HTTP2.md#errors
            // See https://www.rfc-editor.org/rfc/rfc7540#section-7
            const rstCode = reason instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$connect$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ConnectError"] && reason.code == __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$code$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Code"].Canceled ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$node$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["H2Code"].CANCEL : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$node$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["H2Code"].INTERNAL_ERROR;
            return new Promise((resolve)=>stream.close(rstCode, resolve));
        });
        stream.on("error", function h2StreamError(e) {
            if (stream.writableEnded && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$node$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["unwrapNodeErrorChain"])(e).map(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$node$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getNodeErrorProps"]).some((p)=>p.code == "ERR_STREAM_WRITE_AFTER_END")) {
                return;
            }
            sentinel.reject(e);
        });
        stream.on("close", function h2StreamClose() {
            const err = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$node$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["connectErrorFromH2ResetCode"])(stream.rstCode);
            if (err) {
                sentinel.reject(err);
            }
        });
        onStream(stream);
    }, (reason)=>{
        sentinel.reject(reason);
    });
}
function h2ResponseTrailer(response) {
    const trailer = new Headers();
    response.on("trailers", (args)=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$node$2d$universal$2d$header$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["nodeHeaderToWebHeader"])(args).forEach((value, key)=>{
            trailer.set(key, value);
        });
    });
    return trailer;
}
function h2ResponseIterable(sentinel, response, sm) {
    const inner = response[Symbol.asyncIterator]();
    return {
        [Symbol.asyncIterator] () {
            return {
                async next () {
                    const r = await sentinel.race(inner.next());
                    if (r.done === true) {
                        sentinel.resolve();
                        await sentinel;
                    }
                    sm === null || sm === void 0 ? void 0 : sm.notifyResponseByteRead(response);
                    return r;
                },
                throw (e) {
                    sentinel.reject(e);
                    throw e;
                }
            };
        }
    };
}
async function sinkRequest(request, nodeRequest, sentinel) {
    if (request.body === undefined) {
        await new Promise((resolve)=>nodeRequest.end(resolve));
        return;
    }
    const it = request.body[Symbol.asyncIterator]();
    return new Promise((resolve)=>{
        writeNext();
        function writeNext() {
            if (sentinel.isRejected()) {
                return;
            }
            it.next().then((r)=>{
                if (r.done === true) {
                    nodeRequest.end(resolve);
                    return;
                }
                nodeRequest.write(r.value, "binary", function(e) {
                    if (e === null || e === undefined) {
                        writeNext();
                        return;
                    }
                    if (it.throw !== undefined) {
                        it.throw((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$node$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["connectErrorFromNodeReason"])(e)).catch(()=>{
                        //
                        });
                    }
                    // If the server responds and closes the connection before the client has written the entire response
                    // body, we get an ERR_STREAM_WRITE_AFTER_END error code from Node.js here.
                    // We do want to notify the iterable of the error condition, but we do not want to reject our sentinel,
                    // because that would also affect the reading side.
                    if (nodeRequest.writableEnded && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$node$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["unwrapNodeErrorChain"])(e).map(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$node$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getNodeErrorProps"]).some((p)=>p.code == "ERR_STREAM_WRITE_AFTER_END")) {
                        return;
                    }
                    sentinel.reject(e);
                });
            }, (e)=>{
                sentinel.reject(e);
            });
        }
    });
}
function createSentinel(signal) {
    let res;
    let rej;
    let resolved = false;
    let rejected = false;
    const p = new Promise((resolve, reject)=>{
        res = resolve;
        rej = reject;
    });
    const c = {
        resolve () {
            if (!resolved && !rejected) {
                resolved = true;
                res === null || res === void 0 ? void 0 : res();
            }
        },
        isResolved () {
            return resolved;
        },
        reject (reason) {
            if (!resolved && !rejected) {
                rejected = true;
                rej === null || rej === void 0 ? void 0 : rej((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$node$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["connectErrorFromNodeReason"])(reason));
            }
        },
        isRejected () {
            return rejected;
        },
        async race (promise) {
            const r = await Promise.race([
                promise,
                p
            ]);
            if (r === undefined && resolved) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$connect$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ConnectError"]("sentinel completed early", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$code$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Code"].Internal);
            }
            return r;
        }
    };
    const s = Object.assign(p, c);
    function onSignalAbort() {
        c.reject((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$protocol$2f$signals$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAbortSignalReason"])(this));
    }
    if (signal) {
        if (signal.aborted) {
            c.reject((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$protocol$2f$signals$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAbortSignalReason"])(signal));
        } else {
            signal.addEventListener("abort", onSignalAbort);
        }
        p.finally(()=>signal.removeEventListener("abort", onSignalAbort)).catch(()=>{
        // We intentionally swallow sentinel rejection - errors must
        // propagate through the request or response iterables.
        });
    }
    return s;
}
}}),
"[project]/node_modules/@connectrpc/connect-node/dist/esm/node-transport-options.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// Copyright 2021-2024 The Connect Authors
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
__turbopack_esm__({
    "validateNodeTransportOptions": (()=>validateNodeTransportOptions)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$compression$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@connectrpc/connect-node/dist/esm/compression.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$node$2d$universal$2d$client$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@connectrpc/connect-node/dist/esm/node-universal-client.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$http2$2d$session$2d$manager$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@connectrpc/connect-node/dist/esm/http2-session-manager.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$http2__$5b$external$5d$__$28$http2$2c$__cjs$29$__ = __turbopack_import__("[externals]/http2 [external] (http2, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$http__$5b$external$5d$__$28$http$2c$__cjs$29$__ = __turbopack_import__("[externals]/http [external] (http, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$https__$5b$external$5d$__$28$https$2c$__cjs$29$__ = __turbopack_import__("[externals]/https [external] (https, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$protocol$2f$limit$2d$io$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@connectrpc/connect/dist/esm/protocol/limit-io.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
function validateNodeTransportOptions(options) {
    var _a, _b, _c, _d;
    let httpClient;
    if (options.httpVersion == "2") {
        let sessionManager;
        if (options.sessionManager) {
            sessionManager = options.sessionManager;
        } else {
            sessionManager = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$http2$2d$session$2d$manager$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Http2SessionManager"](options.baseUrl, {
                pingIntervalMs: options.pingIntervalMs,
                pingIdleConnection: options.pingIdleConnection,
                pingTimeoutMs: options.pingTimeoutMs,
                idleConnectionTimeoutMs: options.idleConnectionTimeoutMs
            }, options.nodeOptions);
        }
        httpClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$node$2d$universal$2d$client$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createNodeHttpClient"])({
            httpVersion: "2",
            sessionProvider: ()=>sessionManager
        });
    } else {
        httpClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$node$2d$universal$2d$client$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createNodeHttpClient"])({
            httpVersion: "1.1",
            nodeOptions: options.nodeOptions
        });
    }
    return Object.assign(Object.assign(Object.assign({}, options), {
        httpClient,
        useBinaryFormat: (_a = options.useBinaryFormat) !== null && _a !== void 0 ? _a : true,
        interceptors: (_b = options.interceptors) !== null && _b !== void 0 ? _b : [],
        sendCompression: (_c = options.sendCompression) !== null && _c !== void 0 ? _c : null,
        acceptCompression: (_d = options.acceptCompression) !== null && _d !== void 0 ? _d : [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$compression$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["compressionGzip"],
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$compression$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["compressionBrotli"]
        ]
    }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$protocol$2f$limit$2d$io$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["validateReadWriteMaxBytes"])(options.readMaxBytes, options.writeMaxBytes, options.compressMinBytes));
}
}}),
"[project]/node_modules/@connectrpc/connect-node/dist/esm/grpc-web-transport.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// Copyright 2021-2024 The Connect Authors
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
__turbopack_esm__({
    "createGrpcWebTransport": (()=>createGrpcWebTransport)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$node$2d$transport$2d$options$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@connectrpc/connect-node/dist/esm/node-transport-options.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$protocol$2d$grpc$2d$web$2f$transport$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@connectrpc/connect/dist/esm/protocol-grpc-web/transport.js [app-rsc] (ecmascript)");
;
;
function createGrpcWebTransport(options) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$protocol$2d$grpc$2d$web$2f$transport$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createTransport"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$node$2d$transport$2d$options$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["validateNodeTransportOptions"])(options));
}
}}),
"[project]/node_modules/@connectrpc/connect-node/dist/esm/grpc-transport.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// Copyright 2021-2024 The Connect Authors
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
__turbopack_esm__({
    "createGrpcTransport": (()=>createGrpcTransport)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$node$2d$transport$2d$options$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@connectrpc/connect-node/dist/esm/node-transport-options.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$protocol$2d$grpc$2f$transport$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@connectrpc/connect/dist/esm/protocol-grpc/transport.js [app-rsc] (ecmascript)");
;
;
function createGrpcTransport(options) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$protocol$2d$grpc$2f$transport$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createTransport"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$node$2d$transport$2d$options$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["validateNodeTransportOptions"])(options));
}
}}),
"[project]/node_modules/@connectrpc/connect-node/dist/esm/connect-transport.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// Copyright 2021-2024 The Connect Authors
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
__turbopack_esm__({
    "createConnectTransport": (()=>createConnectTransport)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$node$2d$transport$2d$options$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@connectrpc/connect-node/dist/esm/node-transport-options.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$protocol$2d$connect$2f$transport$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@connectrpc/connect/dist/esm/protocol-connect/transport.js [app-rsc] (ecmascript)");
;
;
function createConnectTransport(options) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$protocol$2d$connect$2f$transport$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createTransport"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$node$2d$transport$2d$options$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["validateNodeTransportOptions"])(options));
}
}}),
"[project]/node_modules/@connectrpc/connect-node/dist/esm/node-universal-handler.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// Copyright 2021-2024 The Connect Authors
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
__turbopack_esm__({
    "universalRequestFromNodeRequest": (()=>universalRequestFromNodeRequest),
    "universalResponseToNodeResponse": (()=>universalResponseToNodeResponse)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$node$2d$universal$2d$header$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@connectrpc/connect-node/dist/esm/node-universal-header.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$node$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@connectrpc/connect-node/dist/esm/node-error.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$connect$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@connectrpc/connect/dist/esm/connect-error.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$code$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@connectrpc/connect/dist/esm/code.js [app-rsc] (ecmascript)");
var __asyncValues = this && this.__asyncValues || function(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i);
    "TURBOPACK unreachable";
    function verb(n) {
        i[n] = o[n] && function(v) {
            return new Promise(function(resolve, reject) {
                v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
        };
    }
    function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function(v) {
            resolve({
                value: v,
                done: d
            });
        }, reject);
    }
};
var __await = this && this.__await || function(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
};
var __asyncGenerator = this && this.__asyncGenerator || function(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function() {
        return this;
    }, i;
    "TURBOPACK unreachable";
    function awaitReturn(f) {
        return function(v) {
            return Promise.resolve(v).then(f, reject);
        };
    }
    function verb(n, f) {
        if (g[n]) {
            i[n] = function(v) {
                return new Promise(function(a, b) {
                    q.push([
                        n,
                        v,
                        a,
                        b
                    ]) > 1 || resume(n, v);
                });
            };
            if (f) i[n] = f(i[n]);
        }
    }
    function resume(n, v) {
        try {
            step(g[n](v));
        } catch (e) {
            settle(q[0][3], e);
        }
    }
    function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
    }
    function fulfill(value) {
        resume("next", value);
    }
    function reject(value) {
        resume("throw", value);
    }
    function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
    }
};
;
;
;
function universalRequestFromNodeRequest(nodeRequest, ...rest) {
    var _a, _b;
    const nodeResponse = rest.length === 3 ? rest[0] : undefined;
    const parsedJsonBody = rest.length === 3 ? rest[1] : rest[0];
    const contextValues = rest.length === 3 ? rest[2] : rest[1];
    const encrypted = "encrypted" in nodeRequest.socket && nodeRequest.socket.encrypted;
    const protocol = encrypted ? "https" : "http";
    const authority = "authority" in nodeRequest ? nodeRequest.authority : nodeRequest.headers.host;
    const pathname = (_a = nodeRequest.url) !== null && _a !== void 0 ? _a : "";
    if (authority === undefined) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$connect$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ConnectError"]("unable to determine request authority from Node.js server request", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$code$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Code"].Internal);
    }
    const body = parsedJsonBody !== undefined ? parsedJsonBody : asyncIterableFromNodeServerRequest(nodeRequest);
    const abortController = new AbortController();
    if ("stream" in nodeRequest) {
        // HTTP/2 has error codes we want to honor
        nodeRequest.once("close", ()=>{
            const err = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$node$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["connectErrorFromH2ResetCode"])(nodeRequest.stream.rstCode);
            if (err !== undefined) {
                abortController.abort(err);
            } else {
                abortController.abort();
            }
        });
    } else {
        // HTTP/1.1 does not have error codes, but Node.js has ECONNRESET
        const nodeResponsOrRequest = nodeResponse !== null && nodeResponse !== void 0 ? nodeResponse : nodeRequest;
        const onH1Error = (e)=>{
            nodeRequest.off("error", onH1Error);
            nodeResponsOrRequest.off("close", onH1Close);
            abortController.abort((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$node$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["connectErrorFromNodeReason"])(e));
        };
        const onH1Close = ()=>{
            nodeRequest.off("error", onH1Error);
            nodeResponsOrRequest.off("close", onH1Close);
            // When subscribed to the response, this can get called before "error"
            abortController.abort(nodeRequest.errored ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$node$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["connectErrorFromNodeReason"])(nodeRequest.errored) : undefined);
        };
        nodeRequest.once("error", onH1Error);
        // Node emits close on the request as soon as all data is read.
        // We instead subscribe to the response (if available)
        //
        // Ref: https://github.com/nodejs/node/issues/40775
        nodeResponsOrRequest.once("close", onH1Close);
    }
    return {
        httpVersion: nodeRequest.httpVersion,
        method: (_b = nodeRequest.method) !== null && _b !== void 0 ? _b : "",
        url: new URL(pathname, `${protocol}://${authority}`).toString(),
        header: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$node$2d$universal$2d$header$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["nodeHeaderToWebHeader"])(nodeRequest.headers),
        body,
        signal: abortController.signal,
        contextValues: contextValues
    };
}
async function universalResponseToNodeResponse(universalResponse, nodeResponse) {
    var _a, _b, _c;
    const it = (_a = universalResponse.body) === null || _a === void 0 ? void 0 : _a[Symbol.asyncIterator]();
    let isWriteError = false;
    try {
        if (it !== undefined) {
            let chunk = await it.next();
            isWriteError = true;
            // we deliberately send headers after first read, not before,
            // because we have to give the implementation a chance to
            // set response headers
            nodeResponse.writeHead(universalResponse.status, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$node$2d$universal$2d$header$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["webHeaderToNodeHeaders"])(universalResponse.header));
            isWriteError = false;
            for(; chunk.done !== true; chunk = await it.next()){
                isWriteError = true;
                await write(nodeResponse, chunk.value);
                if ("flush" in nodeResponse && typeof nodeResponse.flush == "function") {
                    // The npm package "compression" is an express middleware that is widely used,
                    // for example in next.js. It uses the npm package "compressible" to determine
                    // whether to apply compression to a response. Unfortunately, "compressible"
                    // matches every mime type that ends with "+json", causing our server-streaming
                    // RPCs to be buffered.
                    // The package modifies the response object, and adds a flush() method, which
                    // flushes the underlying gzip or deflate stream from the Node.js zlib module.
                    // The method is added here:
                    // https://github.com/expressjs/compression/blob/ad5113b98cafe1382a0ece30bb4673707ac59ce7/index.js#L70
                    nodeResponse.flush();
                }
                isWriteError = false;
            }
        }
        if (!nodeResponse.headersSent) {
            nodeResponse.writeHead(universalResponse.status, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$node$2d$universal$2d$header$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["webHeaderToNodeHeaders"])(universalResponse.header));
        }
        if (universalResponse.trailer) {
            nodeResponse.addTrailers((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$node$2d$universal$2d$header$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["webHeaderToNodeHeaders"])(universalResponse.trailer));
        }
        await new Promise((resolve)=>{
            // The npm package "compression" crashes when a callback is passed to end()
            // https://github.com/expressjs/compression/blob/ad5113b98cafe1382a0ece30bb4673707ac59ce7/index.js#L115
            nodeResponse.once("end", resolve);
            nodeResponse.end();
        });
    } catch (e) {
        // Report write errors to the handler.
        if (isWriteError) {
            (_b = it === null || it === void 0 ? void 0 : it.throw) === null || _b === void 0 ? void 0 : _b.call(it, e).catch(()=>{});
        }
        throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$node$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["connectErrorFromNodeReason"])(e);
    } finally{
        (_c = it === null || it === void 0 ? void 0 : it.return) === null || _c === void 0 ? void 0 : _c.call(it).catch(()=>{});
    }
}
function asyncIterableFromNodeServerRequest(request) {
    return __asyncGenerator(this, arguments, function* asyncIterableFromNodeServerRequest_1() {
        var _a, e_1, _b, _c;
        const it = request.iterator({
            // Node.js v16 closes request and response when this option isn't disabled.
            // When one of our handlers receives invalid data (such as an unexpected
            // compression flag in a streaming request), we're unable to write the error
            // response.
            // Later major versions have a more sensible behavior - we can revert this
            // workaround once we stop supporting v16.
            destroyOnReturn: false
        });
        try {
            for(var _d = true, it_1 = __asyncValues(it), it_1_1; it_1_1 = yield __await(it_1.next()), _a = it_1_1.done, !_a; _d = true){
                _c = it_1_1.value;
                _d = false;
                const chunk = _c;
                yield yield __await(chunk);
            }
        } catch (e_1_1) {
            e_1 = {
                error: e_1_1
            };
        } finally{
            try {
                if (!_d && !_a && (_b = it_1.return)) yield __await(_b.call(it_1));
            } finally{
                if (e_1) throw e_1.error;
            }
        }
    });
}
function write(stream, data) {
    return new Promise((resolve, reject)=>{
        if (stream.errored) {
            return error(stream.errored);
        }
        stream.once("error", error);
        stream.once("drain", drain);
        // flushed == false: the stream wishes for the calling code to wait for
        // the 'drain' event to be emitted before continuing to write additional
        // data.
        const flushed = stream.write(data, "binary", function(err) {
            if (err && !flushed) {
                // We are never getting a "drain" nor an "error" event if the stream
                // has already ended (ERR_STREAM_WRITE_AFTER_END), so we have to
                // resolve our promise in this callback.
                error(err);
                // However, once we do that (and remove our event listeners), we _do_
                // get an "error" event, which ends up as an uncaught exception.
                // We silence this error specifically with the following listener.
                // All of this seems very fragile.
                stream.once("error", ()=>{
                //
                });
            }
        });
        if (flushed) {
            drain();
        }
        function error(err) {
            stream.off("error", error);
            stream.off("drain", drain);
            reject(err);
        }
        function drain() {
            stream.off("error", error);
            stream.off("drain", drain);
            resolve();
        }
    });
}
}}),
"[project]/node_modules/@connectrpc/connect-node/dist/esm/connect-node-adapter.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// Copyright 2021-2024 The Connect Authors
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
__turbopack_esm__({
    "connectNodeAdapter": (()=>connectNodeAdapter)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$node$2d$universal$2d$handler$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@connectrpc/connect-node/dist/esm/node-universal-handler.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$compression$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@connectrpc/connect-node/dist/esm/compression.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$protocol$2f$universal$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@connectrpc/connect/dist/esm/protocol/universal.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$router$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@connectrpc/connect/dist/esm/router.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$connect$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@connectrpc/connect/dist/esm/connect-error.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$code$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@connectrpc/connect/dist/esm/code.js [app-rsc] (ecmascript)");
;
;
;
;
function connectNodeAdapter(options) {
    var _a;
    if (options.acceptCompression === undefined) {
        options.acceptCompression = [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$compression$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["compressionGzip"],
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$compression$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["compressionBrotli"]
        ];
    }
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$router$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createConnectRouter"])(options);
    options.routes(router);
    const prefix = (_a = options.requestPathPrefix) !== null && _a !== void 0 ? _a : "";
    const paths = new Map();
    for (const uHandler of router.handlers){
        paths.set(prefix + uHandler.requestPath, uHandler);
    }
    return function nodeRequestHandler(req, res) {
        var _a, _b, _c, _d;
        // Strip the query parameter when matching paths.
        const uHandler = paths.get((_b = (_a = req.url) === null || _a === void 0 ? void 0 : _a.split("?", 2)[0]) !== null && _b !== void 0 ? _b : "");
        if (!uHandler) {
            ((_c = options.fallback) !== null && _c !== void 0 ? _c : fallback)(req, res);
            return;
        }
        const uReq = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$node$2d$universal$2d$handler$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["universalRequestFromNodeRequest"])(req, res, undefined, (_d = options.contextValues) === null || _d === void 0 ? void 0 : _d.call(options, req));
        uHandler(uReq).then((uRes)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$node$2d$universal$2d$handler$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["universalResponseToNodeResponse"])(uRes, res)).catch((reason)=>{
            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$connect$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ConnectError"].from(reason).code == __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$code$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Code"].Aborted) {
                return;
            }
            // eslint-disable-next-line no-console
            console.error(`handler for rpc ${uHandler.method.name} of ${uHandler.service.typeName} failed`, reason);
        });
    };
}
const fallback = (request, response)=>{
    response.writeHead(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2f$dist$2f$esm$2f$protocol$2f$universal$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["uResponseNotFound"].status);
    response.end();
};
}}),
"[project]/node_modules/@connectrpc/connect-node/dist/esm/index.js [app-rsc] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// Copyright 2021-2024 The Connect Authors
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
// Polyfill the Headers API for Node versions < 18
__turbopack_esm__({});
;
;
;
;
;
;
;
;
;
}}),
"[project]/node_modules/@connectrpc/connect-node/dist/esm/index.js [app-rsc] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$node$2d$headers$2d$polyfill$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@connectrpc/connect-node/dist/esm/node-headers-polyfill.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$grpc$2d$web$2d$transport$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@connectrpc/connect-node/dist/esm/grpc-web-transport.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$grpc$2d$transport$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@connectrpc/connect-node/dist/esm/grpc-transport.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$connect$2d$transport$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@connectrpc/connect-node/dist/esm/connect-transport.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$compression$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@connectrpc/connect-node/dist/esm/compression.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$connect$2d$node$2d$adapter$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@connectrpc/connect-node/dist/esm/connect-node-adapter.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$node$2d$universal$2d$handler$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@connectrpc/connect-node/dist/esm/node-universal-handler.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$node$2d$universal$2d$client$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@connectrpc/connect-node/dist/esm/node-universal-client.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$http2$2d$session$2d$manager$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@connectrpc/connect-node/dist/esm/http2-session-manager.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/@connectrpc/connect-node/dist/esm/index.js [app-rsc] (ecmascript) <locals>");
}}),
"[project]/node_modules/@arcjet/transport/index.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "createTransport": (()=>createTransport)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@connectrpc/connect-node/dist/esm/index.js [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$http2$2d$session$2d$manager$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@connectrpc/connect-node/dist/esm/http2-session-manager.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$connect$2d$transport$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@connectrpc/connect-node/dist/esm/connect-transport.js [app-rsc] (ecmascript)");
;
function createTransport(baseUrl) {
    // We create our own session manager so we can attempt to pre-connect
    const sessionManager = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$http2$2d$session$2d$manager$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Http2SessionManager"](baseUrl, {
        // AWS Global Accelerator doesn't support PING so we use a very high idle
        // timeout. Ref:
        // https://docs.aws.amazon.com/global-accelerator/latest/dg/introduction-how-it-works.html#about-idle-timeout
        idleConnectionTimeoutMs: 340 * 1000
    });
    // We ignore the promise result because this is an optimistic pre-connect
    sessionManager.connect();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$connectrpc$2f$connect$2d$node$2f$dist$2f$esm$2f$connect$2d$transport$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createConnectTransport"])({
        baseUrl,
        httpVersion: "2",
        sessionManager
    });
}
;
}}),
"[project]/node_modules/@arcjet/next/index.js [app-rsc] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "createMiddleware": (()=>createMiddleware),
    "createRemoteClient": (()=>createRemoteClient),
    "default": (()=>arcjet),
    "request": (()=>request),
    "withArcjet": (()=>withArcjet)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/headers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$env$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@arcjet/env/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$transport$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@arcjet/transport/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$protocol$2f$client$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@arcjet/protocol/client.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$arcjet$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/arcjet/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$logger$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@arcjet/logger/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$headers$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@arcjet/headers/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$ip$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@arcjet/ip/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/server.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
async function request() {
    const hdrs = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["headers"])();
    const cook = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])();
    const cookieEntries = cook.getAll().map((cookie)=>[
            cookie.name,
            cookie.value
        ]);
    return {
        headers: hdrs,
        cookies: Object.fromEntries(cookieEntries)
    };
}
// TODO: Deduplicate with other packages
function errorMessage(err) {
    if (err) {
        if (typeof err === "string") {
            return err;
        }
        if (typeof err === "object" && "message" in err && typeof err.message === "string") {
            return err.message;
        }
    }
    return "Unknown problem";
}
function createRemoteClient(options) {
    // The base URL for the Arcjet API. Will default to the standard production
    // API unless environment variable `ARCJET_BASE_URL` is set.
    const url = options?.baseUrl ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$env$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["baseUrl"])(process.env);
    // The timeout for the Arcjet API in milliseconds. This is set to a low value
    // in production so calls fail open.
    const timeout = options?.timeout ?? ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$env$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isDevelopment"])(process.env) ? 1000 : 500);
    // Transport is the HTTP client that the client uses to make requests.
    const transport = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$transport$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createTransport"])(url);
    const sdkStack = "NEXTJS";
    const sdkVersion = "1.0.0-beta.3";
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$protocol$2f$client$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClient"])({
        transport,
        baseUrl: url,
        timeout,
        sdkStack,
        sdkVersion
    });
}
function isIterable(val) {
    return typeof val?.[Symbol.iterator] === "function";
}
function cookiesToArray(cookies) {
    if (typeof cookies === "undefined") {
        return [];
    }
    if (isIterable(cookies)) {
        return Array.from(cookies).map(([_, cookie])=>cookie);
    } else {
        return Object.entries(cookies).map(([name, value])=>({
                name,
                value: value ?? ""
            }));
    }
}
function cookiesToString(cookies) {
    // This is essentially the implementation of `RequestCookies#toString` in
    // Next.js but normalized for NextApiRequest cookies object
    return cookiesToArray(cookies).map((v)=>`${v.name}=${encodeURIComponent(v.value)}`).join("; ");
}
/**
 * Create a new {@link ArcjetNext} client. Always build your initial client
 * outside of a request handler so it persists across requests. If you need to
 * augment a client inside a handler, call the `withRule()` function on the base
 * client.
 *
 * @param options - Arcjet configuration options to apply to all requests.
 */ function arcjet(options) {
    const client = options.client ?? createRemoteClient();
    const log = options.log ? options.log : new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$logger$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Logger"]({
        level: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$env$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["logLevel"])(process.env)
    });
    function toArcjetRequest(request, props) {
        // We construct an ArcjetHeaders to normalize over Headers
        const headers = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$headers$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"](request.headers);
        let ip = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$ip$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])({
            ip: request.ip,
            socket: request.socket,
            info: request.info,
            requestContext: request.requestContext,
            headers
        }, {
            platform: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$env$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["platform"])(process.env),
            proxies: options.proxies
        });
        if (ip === "") {
            // If the `ip` is empty but we're in development mode, we default the IP
            // so the request doesn't fail.
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$env$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isDevelopment"])(process.env)) {
                log.warn("Using 127.0.0.1 as IP address in development mode");
                ip = "127.0.0.1";
            } else {
                log.warn(`Client IP address is missing. If this is a dev environment set the ARCJET_ENV env var to "development"`);
            }
        }
        const method = request.method ?? "";
        const host = headers.get("host") ?? "";
        let path = "";
        let query = "";
        let protocol = "";
        // TODO(#36): nextUrl has formatting logic when you `toString` but
        // we don't account for that here
        if (typeof request.nextUrl !== "undefined") {
            path = request.nextUrl.pathname ?? "";
            if (typeof request.nextUrl.search !== "undefined") {
                query = request.nextUrl.search;
            }
            if (typeof request.nextUrl.protocol !== "undefined") {
                protocol = request.nextUrl.protocol;
            }
        } else {
            if (typeof request.socket?.encrypted !== "undefined") {
                protocol = request.socket.encrypted ? "https:" : "http:";
            } else {
                protocol = "http:";
            }
            // Do some very simple validation, but also try/catch around URL parsing
            if (typeof request.url !== "undefined" && request.url !== "" && host !== "") {
                try {
                    const url = new URL(request.url, `${protocol}//${host}`);
                    path = url.pathname;
                    query = url.search;
                    protocol = url.protocol;
                } catch  {
                    // If the parsing above fails, just set the path as whatever url we
                    // received.
                    path = request.url ?? "";
                    log.warn('Unable to parse URL. Using "%s" as `path`.', path);
                }
            } else {
                path = request.url ?? "";
            }
        }
        const cookies = cookiesToString(request.cookies);
        const extra = {};
        // If we're running on Vercel, we can add some extra information
        if (process.env["VERCEL"]) {
            // Vercel ID https://vercel.com/docs/concepts/edge-network/headers
            extra["vercel-id"] = headers.get("x-vercel-id") ?? "";
            // Vercel deployment URL
            // https://vercel.com/docs/concepts/edge-network/headers
            extra["vercel-deployment-url"] = headers.get("x-vercel-deployment-url") ?? "";
            // Vercel git commit SHA
            // https://vercel.com/docs/concepts/projects/environment-variables/system-environment-variables
            extra["vercel-git-commit-sha"] = process.env["VERCEL_GIT_COMMIT_SHA"] ?? "";
            extra["vercel-git-commit-sha"] = process.env["VERCEL_GIT_COMMIT_SHA"] ?? "";
        }
        return {
            ...props,
            ...extra,
            ip,
            method,
            protocol,
            host,
            path,
            headers,
            cookies,
            query
        };
    }
    function withClient(aj) {
        return Object.freeze({
            withRule (rule) {
                const client = aj.withRule(rule);
                return withClient(client);
            },
            async protect (request, ...[props]) {
                // TODO(#220): The generic manipulations get really mad here, so we cast
                // Further investigation makes it seem like it has something to do with
                // the definition of `props` in the signature but it's hard to track down
                const req = toArcjetRequest(request, props ?? {});
                const getBody = async ()=>{
                    try {
                        if (typeof request.clone === "function") {
                            const cloned = request.clone();
                            // Awaited to throw if it rejects and we'll just return undefined
                            const body = await cloned.text();
                            return body;
                        } else if (typeof request.body === "string") {
                            return request.body;
                        } else if (typeof request.body !== "undefined" && // BigInt cannot be serialized with JSON.stringify
                        typeof request.body !== "bigint" && // The body will be null if there was no body with the request.
                        // Reference:
                        // https://nextjs.org/docs/pages/building-your-application/routing/api-routes#request-helpers
                        request.body !== null) {
                            return JSON.stringify(request.body);
                        } else {
                            log.warn("no body available");
                            return;
                        }
                    } catch (e) {
                        log.error("failed to get request body: %s", errorMessage(e));
                        return;
                    }
                };
                return aj.protect({
                    getBody
                }, req);
            }
        });
    }
    const aj = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$arcjet$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])({
        ...options,
        client,
        log
    });
    return withClient(aj);
}
/**
 * Protects your Next.js application using Arcjet middleware.
 *
 * @param arcjet An instantiated Arcjet SDK
 * @param middleware Any existing middleware you'd like to be called after
 * Arcjet decides a request is allowed.
 * @returns If the request is allowed, the next middleware or handler will be
 * called. If the request is denied, a `Response` will be returned immediately
 * and the no further middleware or handlers will be called.
 */ function createMiddleware(arcjet, existingMiddleware) {
    return async function middleware(request, event) {
        const decision = await arcjet.protect(request);
        if (decision.isDenied()) {
            // TODO(#222): Content type negotiation using `Accept` header
            if (decision.reason.isRateLimit()) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    code: 429,
                    message: "Too Many Requests"
                }, {
                    status: 429
                });
            } else {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    code: 403,
                    message: "Forbidden"
                }, {
                    status: 403
                });
            }
        } else {
            if (typeof existingMiddleware === "function") {
                return existingMiddleware(request, event);
            } else {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NextResponse"].next();
            }
        }
    };
}
function isNextApiResponse(val) {
    if (val === null) {
        return false;
    }
    if (typeof val !== "object") {
        return false;
    }
    if (!("status" in val)) {
        return false;
    }
    if (!("json" in val)) {
        return false;
    }
    if (typeof val.status !== "function" || typeof val.json !== "function") {
        return false;
    }
    return true;
}
/**
 * Wraps a Next.js page route, edge middleware, or an API route running on the
 * Edge Runtime.
 *
 * @param arcjet An instantiated Arcjet SDK
 * @param handler The request handler to wrap
 * @returns If the request is allowed, the wrapped `handler` will be called. If
 * the request is denied, a `Response` will be returned based immediately and
 * the wrapped `handler` will never be called.
 */ function withArcjet(arcjet, handler) {
    return async (...args)=>{
        const request = args[0];
        const response = args[1];
        const decision = await arcjet.protect(request);
        if (decision.isDenied()) {
            if (isNextApiResponse(response)) {
                // TODO(#222): Content type negotiation using `Accept` header
                if (decision.reason.isRateLimit()) {
                    return response.status(429).json({
                        code: 429,
                        message: "Too Many Requests"
                    });
                } else {
                    return response.status(403).json({
                        code: 403,
                        message: "Forbidden"
                    });
                }
            } else {
                // TODO(#222): Content type negotiation using `Accept` header
                if (decision.reason.isRateLimit()) {
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NextResponse"].json({
                        code: 429,
                        message: "Too Many Requests"
                    }, {
                        status: 429
                    });
                } else {
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NextResponse"].json({
                        code: 403,
                        message: "Forbidden"
                    }, {
                        status: 403
                    });
                }
            }
        } else {
            return handler(...args);
        }
    };
}
;
}}),
"[project]/node_modules/@arcjet/next/index.js [app-rsc] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/headers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$arcjet$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/arcjet/index.js [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$ip$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@arcjet/ip/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$headers$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@arcjet/headers/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$env$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@arcjet/env/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$logger$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@arcjet/logger/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$protocol$2f$client$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@arcjet/protocol/client.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$transport$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@arcjet/transport/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arcjet$2f$next$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/@arcjet/next/index.js [app-rsc] (ecmascript) <locals>");
}}),
"[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/**
 * @license lucide-react v0.476.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_esm__({
    "__iconNode": (()=>__iconNode),
    "default": (()=>ChevronRight)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-rsc] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "m9 18 6-6-6-6",
            key: "mthhwq"
        }
    ]
];
const ChevronRight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])("ChevronRight", __iconNode);
;
 //# sourceMappingURL=chevron-right.js.map
}}),
"[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-rsc] (ecmascript) <export default as ChevronRight>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({
    "ChevronRight": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-rsc] (ecmascript)");
}}),
"[project]/node_modules/lucide-react/dist/esm/icons/car.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/**
 * @license lucide-react v0.476.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_esm__({
    "__iconNode": (()=>__iconNode),
    "default": (()=>Car)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-rsc] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2",
            key: "5owen"
        }
    ],
    [
        "circle",
        {
            cx: "7",
            cy: "17",
            r: "2",
            key: "u2ysq9"
        }
    ],
    [
        "path",
        {
            d: "M9 17h6",
            key: "r8uit2"
        }
    ],
    [
        "circle",
        {
            cx: "17",
            cy: "17",
            r: "2",
            key: "axvx0g"
        }
    ]
];
const Car = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])("Car", __iconNode);
;
 //# sourceMappingURL=car.js.map
}}),
"[project]/node_modules/lucide-react/dist/esm/icons/car.js [app-rsc] (ecmascript) <export default as Car>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({
    "Car": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$car$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$car$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/car.js [app-rsc] (ecmascript)");
}}),
"[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/**
 * @license lucide-react v0.476.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_esm__({
    "__iconNode": (()=>__iconNode),
    "default": (()=>Calendar)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-rsc] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M8 2v4",
            key: "1cmpym"
        }
    ],
    [
        "path",
        {
            d: "M16 2v4",
            key: "4m81vk"
        }
    ],
    [
        "rect",
        {
            width: "18",
            height: "18",
            x: "3",
            y: "4",
            rx: "2",
            key: "1hopcy"
        }
    ],
    [
        "path",
        {
            d: "M3 10h18",
            key: "8toen8"
        }
    ]
];
const Calendar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])("Calendar", __iconNode);
;
 //# sourceMappingURL=calendar.js.map
}}),
"[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-rsc] (ecmascript) <export default as Calendar>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({
    "Calendar": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-rsc] (ecmascript)");
}}),
"[project]/node_modules/lucide-react/dist/esm/icons/shield.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/**
 * @license lucide-react v0.476.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_esm__({
    "__iconNode": (()=>__iconNode),
    "default": (()=>Shield)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-rsc] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
            key: "oel41y"
        }
    ]
];
const Shield = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])("Shield", __iconNode);
;
 //# sourceMappingURL=shield.js.map
}}),
"[project]/node_modules/lucide-react/dist/esm/icons/shield.js [app-rsc] (ecmascript) <export default as Shield>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({
    "Shield": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/shield.js [app-rsc] (ecmascript)");
}}),
"[project]/node_modules/@clerk/nextjs/dist/esm/app-router/server-actions.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ {"7f242e7ea905a8dc9d2da24f9e149b6ff779d9882b":"invalidateCacheAction"} */ __turbopack_esm__({
    "invalidateCacheAction": (()=>invalidateCacheAction)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$encryption$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/app-render/encryption.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/headers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
async function invalidateCacheAction() {
    void (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])()).delete(`__clerk_invalidate_cache_cookie_${Date.now()}`);
}
;
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ invalidateCacheAction
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(invalidateCacheAction, "7f242e7ea905a8dc9d2da24f9e149b6ff779d9882b", null);
}}),
"[project]/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => \"[project]/node_modules/@clerk/nextjs/dist/esm/app-router/keyless-actions.js [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/node_modules/@clerk/nextjs/dist/esm/app-router/server-actions.js [app-rsc] (ecmascript)\", ACTIONS_MODULE2 => \"[project]/actions/car-listing.js [app-rsc] (ecmascript)\", ACTIONS_MODULE3 => \"[project]/actions/home.js [app-rsc] (ecmascript)\" } [app-rsc] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({});
;
;
;
;
;
;
;
;
;
;
;
}}),
"[project]/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => \"[project]/node_modules/@clerk/nextjs/dist/esm/app-router/keyless-actions.js [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/node_modules/@clerk/nextjs/dist/esm/app-router/server-actions.js [app-rsc] (ecmascript)\", ACTIONS_MODULE2 => \"[project]/actions/car-listing.js [app-rsc] (ecmascript)\", ACTIONS_MODULE3 => \"[project]/actions/home.js [app-rsc] (ecmascript)\" } [app-rsc] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$keyless$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@clerk/nextjs/dist/esm/app-router/keyless-actions.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@clerk/nextjs/dist/esm/app-router/server-actions.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$car$2d$listing$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/actions/car-listing.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$home$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/actions/home.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$keyless$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$actions$2f$car$2d$listing$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$actions$2f$home$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__('[project]/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => "[project]/node_modules/@clerk/nextjs/dist/esm/app-router/keyless-actions.js [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/node_modules/@clerk/nextjs/dist/esm/app-router/server-actions.js [app-rsc] (ecmascript)", ACTIONS_MODULE2 => "[project]/actions/car-listing.js [app-rsc] (ecmascript)", ACTIONS_MODULE3 => "[project]/actions/home.js [app-rsc] (ecmascript)" } [app-rsc] (ecmascript) <locals>');
}}),
"[project]/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => \"[project]/node_modules/@clerk/nextjs/dist/esm/app-router/keyless-actions.js [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/node_modules/@clerk/nextjs/dist/esm/app-router/server-actions.js [app-rsc] (ecmascript)\", ACTIONS_MODULE2 => \"[project]/actions/car-listing.js [app-rsc] (ecmascript)\", ACTIONS_MODULE3 => \"[project]/actions/home.js [app-rsc] (ecmascript)\" } [app-rsc] (ecmascript) <exports>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({
    "003b4417bea7217c72ccbae7aeb067968059ac43fa": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$car$2d$listing$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSavedCars"]),
    "003c38c786f479816960b13d9cc1cc38ce1a4ff0c6": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$car$2d$listing$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCarFilters"]),
    "402f3dfb46d3c945246504f34a5ea6ce51b33cf530": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$car$2d$listing$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCars"]),
    "404dcd2caf286ed7472134a99c10bbdeafcfaa8c84": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$home$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["processImageSearch"]),
    "4075c77aa6a0db2c800bfe6e380bef13039d527ebe": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$home$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getFeaturedCars"]),
    "409e5ad48eb997a98fca6799042658673603470dcb": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$car$2d$listing$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["toggleSavedCar"]),
    "409ff24b5a226a48a885dc2ed4d5fdae8e230b35b8": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$car$2d$listing$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCarById"]),
    "7f242e7ea905a8dc9d2da24f9e149b6ff779d9882b": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["invalidateCacheAction"]),
    "7f40cfbd078047d27a88386f3487a0d2ffecdbb010": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$keyless$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteKeylessAction"]),
    "7fc68a6a9a5af732c89679efdbfc7867e2bca50904": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$keyless$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["syncKeylessConfigAction"]),
    "7fe1eaf53a02fd4e431f40acb556bb244590bea70a": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$keyless$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createOrReadKeylessAction"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$car$2d$listing$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/actions/car-listing.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$actions$2f$home$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/actions/home.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@clerk/nextjs/dist/esm/app-router/server-actions.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$keyless$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@clerk/nextjs/dist/esm/app-router/keyless-actions.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$keyless$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$actions$2f$car$2d$listing$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$actions$2f$home$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__('[project]/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => "[project]/node_modules/@clerk/nextjs/dist/esm/app-router/keyless-actions.js [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/node_modules/@clerk/nextjs/dist/esm/app-router/server-actions.js [app-rsc] (ecmascript)", ACTIONS_MODULE2 => "[project]/actions/car-listing.js [app-rsc] (ecmascript)", ACTIONS_MODULE3 => "[project]/actions/home.js [app-rsc] (ecmascript)" } [app-rsc] (ecmascript) <locals>');
}}),
"[project]/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => \"[project]/node_modules/@clerk/nextjs/dist/esm/app-router/keyless-actions.js [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/node_modules/@clerk/nextjs/dist/esm/app-router/server-actions.js [app-rsc] (ecmascript)\", ACTIONS_MODULE2 => \"[project]/actions/car-listing.js [app-rsc] (ecmascript)\", ACTIONS_MODULE3 => \"[project]/actions/home.js [app-rsc] (ecmascript)\" } [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({
    "003b4417bea7217c72ccbae7aeb067968059ac43fa": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$keyless$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$actions$2f$car$2d$listing$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$actions$2f$home$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["003b4417bea7217c72ccbae7aeb067968059ac43fa"]),
    "003c38c786f479816960b13d9cc1cc38ce1a4ff0c6": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$keyless$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$actions$2f$car$2d$listing$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$actions$2f$home$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["003c38c786f479816960b13d9cc1cc38ce1a4ff0c6"]),
    "402f3dfb46d3c945246504f34a5ea6ce51b33cf530": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$keyless$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$actions$2f$car$2d$listing$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$actions$2f$home$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["402f3dfb46d3c945246504f34a5ea6ce51b33cf530"]),
    "404dcd2caf286ed7472134a99c10bbdeafcfaa8c84": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$keyless$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$actions$2f$car$2d$listing$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$actions$2f$home$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["404dcd2caf286ed7472134a99c10bbdeafcfaa8c84"]),
    "4075c77aa6a0db2c800bfe6e380bef13039d527ebe": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$keyless$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$actions$2f$car$2d$listing$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$actions$2f$home$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["4075c77aa6a0db2c800bfe6e380bef13039d527ebe"]),
    "409e5ad48eb997a98fca6799042658673603470dcb": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$keyless$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$actions$2f$car$2d$listing$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$actions$2f$home$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["409e5ad48eb997a98fca6799042658673603470dcb"]),
    "409ff24b5a226a48a885dc2ed4d5fdae8e230b35b8": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$keyless$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$actions$2f$car$2d$listing$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$actions$2f$home$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["409ff24b5a226a48a885dc2ed4d5fdae8e230b35b8"]),
    "7f242e7ea905a8dc9d2da24f9e149b6ff779d9882b": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$keyless$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$actions$2f$car$2d$listing$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$actions$2f$home$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["7f242e7ea905a8dc9d2da24f9e149b6ff779d9882b"]),
    "7f40cfbd078047d27a88386f3487a0d2ffecdbb010": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$keyless$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$actions$2f$car$2d$listing$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$actions$2f$home$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["7f40cfbd078047d27a88386f3487a0d2ffecdbb010"]),
    "7fc68a6a9a5af732c89679efdbfc7867e2bca50904": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$keyless$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$actions$2f$car$2d$listing$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$actions$2f$home$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["7fc68a6a9a5af732c89679efdbfc7867e2bca50904"]),
    "7fe1eaf53a02fd4e431f40acb556bb244590bea70a": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$keyless$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$actions$2f$car$2d$listing$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$actions$2f$home$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["7fe1eaf53a02fd4e431f40acb556bb244590bea70a"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$keyless$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$actions$2f$car$2d$listing$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$actions$2f$home$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__('[project]/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => "[project]/node_modules/@clerk/nextjs/dist/esm/app-router/keyless-actions.js [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/node_modules/@clerk/nextjs/dist/esm/app-router/server-actions.js [app-rsc] (ecmascript)", ACTIONS_MODULE2 => "[project]/actions/car-listing.js [app-rsc] (ecmascript)", ACTIONS_MODULE3 => "[project]/actions/home.js [app-rsc] (ecmascript)" } [app-rsc] (ecmascript) <module evaluation>');
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$keyless$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$actions$2f$car$2d$listing$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$actions$2f$home$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__ = __turbopack_import__('[project]/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => "[project]/node_modules/@clerk/nextjs/dist/esm/app-router/keyless-actions.js [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/node_modules/@clerk/nextjs/dist/esm/app-router/server-actions.js [app-rsc] (ecmascript)", ACTIONS_MODULE2 => "[project]/actions/car-listing.js [app-rsc] (ecmascript)", ACTIONS_MODULE3 => "[project]/actions/home.js [app-rsc] (ecmascript)" } [app-rsc] (ecmascript) <exports>');
}}),

};

//# sourceMappingURL=_82b1bd._.js.map