(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b0106600"],{"0829":function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return Nl})),n.d(e,"b",(function(){return Oc})),n.d(e,"c",(function(){return pc})),n.d(e,"d",(function(){return ic})),n.d(e,"e",(function(){return cl})),n.d(e,"f",(function(){return Ac})),n.d(e,"g",(function(){return I})),n.d(e,"h",(function(){return Rc})),n.d(e,"i",(function(){return ll})),n.d(e,"j",(function(){return ul})),n.d(e,"k",(function(){return U})),n.d(e,"l",(function(){return Ll})),n.d(e,"m",(function(){return Ha})),n.d(e,"n",(function(){return at})),n.d(e,"o",(function(){return K})),n.d(e,"p",(function(){return Xa})),n.d(e,"q",(function(){return _})),n.d(e,"r",(function(){return Y})),n.d(e,"s",(function(){return m})),n.d(e,"t",(function(){return Ga})),n.d(e,"u",(function(){return Gl})),n.d(e,"v",(function(){return ru})),n.d(e,"w",(function(){return iu})),n.d(e,"x",(function(){return wc})),n.d(e,"y",(function(){return oc})),n.d(e,"z",(function(){return ac})),n.d(e,"A",(function(){return nc})),n.d(e,"B",(function(){return Kl})),n.d(e,"C",(function(){return eu})),n.d(e,"D",(function(){return Tc})),n.d(e,"E",(function(){return cc})),n.d(e,"F",(function(){return bc})),n.d(e,"G",(function(){return vc})),n.d(e,"H",(function(){return Ic})),n.d(e,"I",(function(){return Al})),n.d(e,"J",(function(){return Sl})),n.d(e,"K",(function(){return mc})),n.d(e,"L",(function(){return Jl})),n.d(e,"M",(function(){return jl})),n.d(e,"N",(function(){return Vl})),n.d(e,"O",(function(){return Bl})),n.d(e,"P",(function(){return ql})),n.d(e,"Q",(function(){return zl})),n.d(e,"R",(function(){return Wl})),n.d(e,"S",(function(){return su})),n.d(e,"T",(function(){return wl})),n.d(e,"U",(function(){return xl})),n.d(e,"V",(function(){return kc})),n.d(e,"W",(function(){return Ec})),n.d(e,"X",(function(){return Yl})),n.d(e,"Y",(function(){return Ql})),n.d(e,"Z",(function(){return vl})),n.d(e,"ab",(function(){return gl})),n.d(e,"bb",(function(){return uc})),n.d(e,"cb",(function(){return lc})),n.d(e,"db",(function(){return tu})),n.d(e,"eb",(function(){return nu})),n.d(e,"fb",(function(){return Hl})),n.d(e,"gb",(function(){return f})),n.d(e,"hb",(function(){return dl})),n.d(e,"ib",(function(){return kl})),n.d(e,"jb",(function(){return Tl})),n.d(e,"kb",(function(){return $l})),n.d(e,"lb",(function(){return xc})),n.d(e,"mb",(function(){return yl}));var i=n("589b"),r=n("22e5"),s=n("e691"),o=n("1fd5"),a=n("8f6b");const c="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
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
 */class l{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}l.UNAUTHENTICATED=new l(null),l.GOOGLE_CREDENTIALS=new l("google-credentials-uid"),l.FIRST_PARTY=new l("first-party-uid"),l.MOCK_USER=new l("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
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
 */
let u="9.6.3";
/**
 * @license
 * Copyright 2017 Google LLC
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
 */const h=new s["b"]("@firebase/firestore");function d(){return h.logLevel}function f(t){h.setLogLevel(t)}function p(t,...e){if(h.logLevel<=s["a"].DEBUG){const n=e.map(y);h.debug(`Firestore (${u}): ${t}`,...n)}}function g(t,...e){if(h.logLevel<=s["a"].ERROR){const n=e.map(y);h.error(`Firestore (${u}): ${t}`,...n)}}function m(t,...e){if(h.logLevel<=s["a"].WARN){const n=e.map(y);h.warn(`Firestore (${u}): ${t}`,...n)}}function y(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */var e}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */function b(t="Unexpected state"){const e=`FIRESTORE (${u}) INTERNAL ASSERTION FAILED: `+t;throw g(e),new Error(e)}function v(t,e){t||b()}function _(t,e){t||b()}function w(t,e){return t}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */const x={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class I extends o["c"]{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */class T{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */class k{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization","Bearer "+t)}}class E{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(l.UNAUTHENTICATED))}shutdown(){}}class S{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class A{constructor(t){this.t=t,this.currentUser=l.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const i=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let r=new T;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new T,t.enqueueRetryable(()=>i(this.currentUser))};const s=()=>{const e=r;t.enqueueRetryable(async()=>{await e.promise,await i(this.currentUser)})},o=t=>{p("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit(t=>o(t)),setTimeout(()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(p("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new T)}},0),s()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(e=>this.i!==t?(p("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(v("string"==typeof e.accessToken),new k(e.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return v(null===t||"string"==typeof t),new l(t)}}class O{constructor(t,e,n){this.type="FirstParty",this.user=l.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",e);const i=t.auth.getAuthHeaderValueForFirstParty([]);i&&this.headers.set("Authorization",i),n&&this.headers.set("X-Goog-Iam-Authorization-Token",n)}}class C{constructor(t,e,n){this.h=t,this.l=e,this.m=n}getToken(){return Promise.resolve(new O(this.h,this.l,this.m))}start(t,e){t.enqueueRetryable(()=>e(l.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class R{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class D{constructor(t){this.g=t,this.forceRefresh=!1,this.appCheck=null}start(t,e){this.o=n=>{t.enqueueRetryable(()=>(t=>(null!=t.error&&p("FirebaseAppCheckTokenProvider","Error getting App Check token; using placeholder token instead. Error: "+t.error.message),e(t.token)))(n))};const n=t=>{p("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.g.onInit(t=>n(t)),setTimeout(()=>{if(!this.appCheck){const t=this.g.getImmediate({optional:!0});t?n(t):p("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(t=>t?(v("string"==typeof t.token),new R(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
 * @license
 * Copyright 2018 Google LLC
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
 */
class N{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.p(t),this.T=t=>e.writeSequenceNumber(t))}p(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.T&&this.T(t),t}}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */function P(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let i=0;i<t;i++)n[i]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */N.I=-1;class M{static A(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const i=P(40);for(let r=0;r<i.length;++r)n.length<20&&i[r]<e&&(n+=t.charAt(i[r]%t.length))}return n}}function L(t,e){return t<e?-1:t>e?1:0}function F(t,e,n){return t.length===e.length&&t.every((t,i)=>n(t,e[i]))}function j(t){return t+"\0"}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */class U{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new I(x.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new I(x.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new I(x.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new I(x.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return U.fromMillis(Date.now())}static fromDate(t){return U.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new U(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?L(this.nanoseconds,t.nanoseconds):L(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */class V{constructor(t){this.timestamp=t}static fromTimestamp(t){return new V(t)}static min(){return new V(new U(0,0))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */function B(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function q(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function z(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */class W{constructor(t,e,n){void 0===e?e=0:e>t.length&&b(),void 0===n?n=t.length-e:n>t.length-e&&b(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===W.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof W?t.forEach(t=>{e.push(t)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let i=0;i<n;i++){const n=t.get(i),r=e.get(i);if(n<r)return-1;if(n>r)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class H extends W{construct(t,e,n){return new H(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new I(x.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter(t=>t.length>0))}return new H(e)}static emptyPath(){return new H([])}}const $=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class K extends W{construct(t,e,n){return new K(t,e,n)}static isValidIdentifier(t){return $.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),K.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new K(["__name__"])}static fromServerFormat(t){const e=[];let n="",i=0;const r=()=>{if(0===n.length)throw new I(x.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let s=!1;for(;i<t.length;){const e=t[i];if("\\"===e){if(i+1===t.length)throw new I(x.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[i+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new I(x.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,i+=2}else"`"===e?(s=!s,i++):"."!==e||s?(n+=e,i++):(r(),i++)}if(r(),s)throw new I(x.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new K(e)}static emptyPath(){return new K([])}}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */class G{constructor(t){this.fields=t,t.sort(K.comparator)}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return F(this.fields,t.fields,(t,e)=>t.isEqual(e))}}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */function Y(){return"undefined"!=typeof atob}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */class Q{constructor(t){this.binaryString=t}static fromBase64String(t){const e=atob(t);return new Q(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new Q(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return L(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Q.EMPTY_BYTE_STRING=new Q("");const J=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function X(t){if(v(!!t),"string"==typeof t){let e=0;const n=J.exec(t);if(v(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const i=new Date(t);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:Z(t.seconds),nanos:Z(t.nanos)}}function Z(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function tt(t){return"string"==typeof t?Q.fromBase64String(t):Q.fromUint8Array(t)}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */function et(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function nt(t){const e=t.mapValue.fields.__previous_value__;return et(e)?nt(e):e}function it(t){const e=X(t.mapValue.fields.__local_write_time__.timestampValue);return new U(e.seconds,e.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */function rt(t){return null==t}function st(t){return 0===t&&1/t==-1/0}function ot(t){return"number"==typeof t&&Number.isInteger(t)&&!st(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */class at{constructor(t){this.path=t}static fromPath(t){return new at(H.fromString(t))}static fromName(t){return new at(H.fromString(t).popFirst(5))}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}isEqual(t){return null!==t&&0===H.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return H.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new at(new H(t.slice()))}}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */function ct(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?et(t)?4:10:b()}function lt(t,e){if(t===e)return!0;const n=ct(t);if(n!==ct(e))return!1;switch(n){case 0:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return it(t).isEqual(it(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=X(t.timestampValue),i=X(e.timestampValue);return n.seconds===i.seconds&&n.nanos===i.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return tt(t.bytesValue).isEqual(tt(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return Z(t.geoPointValue.latitude)===Z(e.geoPointValue.latitude)&&Z(t.geoPointValue.longitude)===Z(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return Z(t.integerValue)===Z(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=Z(t.doubleValue),i=Z(e.doubleValue);return n===i?st(n)===st(i):isNaN(n)&&isNaN(i)}return!1}(t,e);case 9:return F(t.arrayValue.values||[],e.arrayValue.values||[],lt);case 10:return function(t,e){const n=t.mapValue.fields||{},i=e.mapValue.fields||{};if(B(n)!==B(i))return!1;for(const r in n)if(n.hasOwnProperty(r)&&(void 0===i[r]||!lt(n[r],i[r])))return!1;return!0}(t,e);default:return b()}}function ut(t,e){return void 0!==(t.values||[]).find(t=>lt(t,e))}function ht(t,e){if(t===e)return 0;const n=ct(t),i=ct(e);if(n!==i)return L(n,i);switch(n){case 0:return 0;case 1:return L(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=Z(t.integerValue||t.doubleValue),i=Z(e.integerValue||e.doubleValue);return n<i?-1:n>i?1:n===i?0:isNaN(n)?isNaN(i)?0:-1:1}(t,e);case 3:return dt(t.timestampValue,e.timestampValue);case 4:return dt(it(t),it(e));case 5:return L(t.stringValue,e.stringValue);case 6:return function(t,e){const n=tt(t),i=tt(e);return n.compareTo(i)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),i=e.split("/");for(let r=0;r<n.length&&r<i.length;r++){const t=L(n[r],i[r]);if(0!==t)return t}return L(n.length,i.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=L(Z(t.latitude),Z(e.latitude));return 0!==n?n:L(Z(t.longitude),Z(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],i=e.values||[];for(let r=0;r<n.length&&r<i.length;++r){const t=ht(n[r],i[r]);if(t)return t}return L(n.length,i.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){const n=t.fields||{},i=Object.keys(n),r=e.fields||{},s=Object.keys(r);i.sort(),s.sort();for(let o=0;o<i.length&&o<s.length;++o){const t=L(i[o],s[o]);if(0!==t)return t;const e=ht(n[i[o]],r[s[o]]);if(0!==e)return e}return L(i.length,s.length)}(t.mapValue,e.mapValue);default:throw b()}}function dt(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return L(t,e);const n=X(t),i=X(e),r=L(n.seconds,i.seconds);return 0!==r?r:L(n.nanos,i.nanos)}function ft(t){return pt(t)}function pt(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=X(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?tt(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,at.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(t){let e="[",n=!0;for(const i of t.values||[])n?n=!1:e+=",",e+=pt(i);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",i=!0;for(const r of e)i?i=!1:n+=",",n+=`${r}:${pt(t.fields[r])}`;return n+"}"}(t.mapValue):b();var e,n}function gt(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function mt(t){return!!t&&"integerValue"in t}function yt(t){return!!t&&"arrayValue"in t}function bt(t){return!!t&&"nullValue"in t}function vt(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function _t(t){return!!t&&"mapValue"in t}function wt(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return q(t.mapValue.fields,(t,n)=>e.mapValue.fields[t]=wt(n)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=wt(t.arrayValue.values[n]);return e}return Object.assign({},t)}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */class xt{constructor(t){this.value=t}static empty(){return new xt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!_t(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=wt(e)}setAll(t){let e=K.emptyPath(),n={},i=[];t.forEach((t,r)=>{if(!e.isImmediateParentOf(r)){const t=this.getFieldsMap(e);this.applyChanges(t,n,i),n={},i=[],e=r.popLast()}t?n[r.lastSegment()]=wt(t):i.push(r.lastSegment())});const r=this.getFieldsMap(e);this.applyChanges(r,n,i)}delete(t){const e=this.field(t.popLast());_t(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return lt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let i=e.mapValue.fields[t.get(n)];_t(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,n){q(e,(e,n)=>t[e]=n);for(const i of n)delete t[i]}clone(){return new xt(wt(this.value))}}function It(t){const e=[];return q(t.fields,(t,n)=>{const i=new K([t]);if(_t(n)){const t=It(n.mapValue).fields;if(0===t.length)e.push(i);else for(const n of t)e.push(i.child(n))}else e.push(i)}),new G(e)
/**
 * @license
 * Copyright 2017 Google LLC
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
 */}class Tt{constructor(t,e,n,i,r){this.key=t,this.documentType=e,this.version=n,this.data=i,this.documentState=r}static newInvalidDocument(t){return new Tt(t,0,V.min(),xt.empty(),0)}static newFoundDocument(t,e,n){return new Tt(t,1,e,n,0)}static newNoDocument(t,e){return new Tt(t,2,e,xt.empty(),0)}static newUnknownDocument(t,e){return new Tt(t,3,e,xt.empty(),2)}convertToFoundDocument(t,e){return this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=xt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=xt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof Tt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Tt(this.key,this.documentType,this.version,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2019 Google LLC
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
 */class kt{constructor(t,e=null,n=[],i=[],r=null,s=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=i,this.limit=r,this.startAt=s,this.endAt=o,this.R=null}}function Et(t,e=null,n=[],i=[],r=null,s=null,o=null){return new kt(t,e,n,i,r,s,o)}function St(t){const e=w(t);if(null===e.R){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(t=>Dt(t)).join(","),t+="|ob:",t+=e.orderBy.map(t=>function(t){return t.field.canonicalString()+t.dir}(t)).join(","),rt(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=qt(e.startAt)),e.endAt&&(t+="|ub:",t+=qt(e.endAt)),e.R=t}return e.R}function At(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(t=>{return`${(e=t).field.canonicalString()} ${e.op} ${ft(e.value)}`;var e}).join(", ")}]`),rt(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t)).join(", ")}]`),t.startAt&&(e+=", startAt: "+qt(t.startAt)),t.endAt&&(e+=", endAt: "+qt(t.endAt)),`Target(${e})`}function Ot(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let r=0;r<t.orderBy.length;r++)if(!Wt(t.orderBy[r],e.orderBy[r]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let r=0;r<t.filters.length;r++)if(n=t.filters[r],i=e.filters[r],n.op!==i.op||!n.field.isEqual(i.field)||!lt(n.value,i.value))return!1;var n,i;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!$t(t.startAt,e.startAt)&&$t(t.endAt,e.endAt)}function Ct(t){return at.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}class Rt extends class{}{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.P(t,e,n):new Nt(t,e,n):"array-contains"===e?new Ft(t,n):"in"===e?new jt(t,n):"not-in"===e?new Ut(t,n):"array-contains-any"===e?new Vt(t,n):new Rt(t,e,n)}static P(t,e,n){return"in"===e?new Pt(t,n):new Mt(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.v(ht(e,this.value)):null!==e&&ct(this.value)===ct(e)&&this.v(ht(e,this.value))}v(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return b()}}V(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}function Dt(t){return t.field.canonicalString()+t.op.toString()+ft(t.value)}class Nt extends Rt{constructor(t,e,n){super(t,e,n),this.key=at.fromName(n.referenceValue)}matches(t){const e=at.comparator(t.key,this.key);return this.v(e)}}class Pt extends Rt{constructor(t,e){super(t,"in",e),this.keys=Lt("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class Mt extends Rt{constructor(t,e){super(t,"not-in",e),this.keys=Lt("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function Lt(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map(t=>at.fromName(t.referenceValue))}class Ft extends Rt{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return yt(e)&&ut(e.arrayValue,this.value)}}class jt extends Rt{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&ut(this.value.arrayValue,e)}}class Ut extends Rt{constructor(t,e){super(t,"not-in",e)}matches(t){if(ut(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!ut(this.value.arrayValue,e)}}class Vt extends Rt{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!yt(e)||!e.arrayValue.values)&&e.arrayValue.values.some(t=>ut(this.value.arrayValue,t))}}class Bt{constructor(t,e){this.position=t,this.before=e}}function qt(t){return`${t.before?"b":"a"}:${t.position.map(t=>ft(t)).join(",")}`}class zt{constructor(t,e="asc"){this.field=t,this.dir=e}}function Wt(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function Ht(t,e,n){let i=0;for(let r=0;r<t.position.length;r++){const s=e[r],o=t.position[r];if(i=s.field.isKeyField()?at.comparator(at.fromName(o.referenceValue),n.key):ht(o,n.data.field(s.field)),"desc"===s.dir&&(i*=-1),0!==i)break}return t.before?i<=0:i<0}function $t(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.before!==e.before||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!lt(t.position[n],e.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Kt{constructor(t,e=null,n=[],i=[],r=null,s="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=i,this.limit=r,this.limitType=s,this.startAt=o,this.endAt=a,this.S=null,this.D=null,this.startAt,this.endAt}}function Gt(t,e,n,i,r,s,o,a){return new Kt(t,e,n,i,r,s,o,a)}function Yt(t){return new Kt(t)}function Qt(t){return!rt(t.limit)&&"F"===t.limitType}function Jt(t){return!rt(t.limit)&&"L"===t.limitType}function Xt(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Zt(t){for(const e of t.filters)if(e.V())return e.field;return null}function te(t){return null!==t.collectionGroup}function ee(t){const e=w(t);if(null===e.S){e.S=[];const t=Zt(e),n=Xt(e);if(null!==t&&null===n)t.isKeyField()||e.S.push(new zt(t)),e.S.push(new zt(K.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e.S.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.S.push(new zt(K.keyField(),t))}}}return e.S}function ne(t){const e=w(t);if(!e.D)if("F"===e.limitType)e.D=Et(e.path,e.collectionGroup,ee(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const r of ee(e)){const e="desc"===r.dir?"asc":"desc";t.push(new zt(r.field,e))}const n=e.endAt?new Bt(e.endAt.position,!e.endAt.before):null,i=e.startAt?new Bt(e.startAt.position,!e.startAt.before):null;e.D=Et(e.path,e.collectionGroup,t,e.filters,e.limit,n,i)}return e.D}function ie(t,e,n){return new Kt(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function re(t,e){return Ot(ne(t),ne(e))&&t.limitType===e.limitType}function se(t){return`${St(ne(t))}|lt:${t.limitType}`}function oe(t){return`Query(target=${At(ne(t))}; limitType=${t.limitType})`}function ae(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):at.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of t.explicitOrderBy)if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!Ht(t.startAt,ee(t),e))&&(!t.endAt||!Ht(t.endAt,ee(t),e))}(t,e)}function ce(t){return(e,n)=>{let i=!1;for(const r of ee(t)){const t=le(r,e,n);if(0!==t)return t;i=i||r.field.isKeyField()}return 0}}function le(t,e,n){const i=t.field.isKeyField()?at.comparator(e.key,n.key):function(t,e,n){const i=e.data.field(t),r=n.data.field(t);return null!==i&&null!==r?ht(i,r):b()}(t.field,e,n);switch(t.dir){case"asc":return i;case"desc":return-1*i;default:return b()}}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */function ue(t,e){if(t.C){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:st(e)?"-0":e}}function he(t){return{integerValue:""+t}}function de(t,e){return ot(e)?he(e):ue(t,e)}
/**
 * @license
 * Copyright 2018 Google LLC
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
 */class fe{constructor(){this._=void 0}}function pe(t,e,n){return t instanceof ye?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof be?ve(t,e):t instanceof _e?we(t,e):function(t,e){const n=me(t,e),i=Ie(n)+Ie(t.N);return mt(n)&&mt(t.N)?he(i):ue(t.k,i)}(t,e)}function ge(t,e,n){return t instanceof be?ve(t,e):t instanceof _e?we(t,e):n}function me(t,e){return t instanceof xe?mt(n=e)||function(t){return!!t&&"doubleValue"in t}(n)?e:{integerValue:0}:null;var n}class ye extends fe{}class be extends fe{constructor(t){super(),this.elements=t}}function ve(t,e){const n=Te(e);for(const i of t.elements)n.some(t=>lt(t,i))||n.push(i);return{arrayValue:{values:n}}}class _e extends fe{constructor(t){super(),this.elements=t}}function we(t,e){let n=Te(e);for(const i of t.elements)n=n.filter(t=>!lt(t,i));return{arrayValue:{values:n}}}class xe extends fe{constructor(t,e){super(),this.k=t,this.N=e}}function Ie(t){return Z(t.integerValue||t.doubleValue)}function Te(t){return yt(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */class ke{constructor(t,e){this.field=t,this.transform=e}}function Ee(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof be&&e instanceof be||t instanceof _e&&e instanceof _e?F(t.elements,e.elements,lt):t instanceof xe&&e instanceof xe?lt(t.N,e.N):t instanceof ye&&e instanceof ye}(t.transform,e.transform)}class Se{constructor(t,e){this.version=t,this.transformResults=e}}class Ae{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Ae}static exists(t){return new Ae(void 0,t)}static updateTime(t){return new Ae(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Oe(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class Ce{}function Re(t,e,n){t instanceof Le?function(t,e,n){const i=t.value.clone(),r=Ue(t.fieldTransforms,e,n.transformResults);i.setAll(r),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):t instanceof Fe?function(t,e,n){if(!Oe(t.precondition,e))return void e.convertToUnknownDocument(n.version);const i=Ue(t.fieldTransforms,e,n.transformResults),r=e.data;r.setAll(je(t)),r.setAll(i),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function De(t,e,n){t instanceof Le?function(t,e,n){if(!Oe(t.precondition,e))return;const i=t.value.clone(),r=Ve(t.fieldTransforms,n,e);i.setAll(r),e.convertToFoundDocument(Me(e),i).setHasLocalMutations()}(t,e,n):t instanceof Fe?function(t,e,n){if(!Oe(t.precondition,e))return;const i=Ve(t.fieldTransforms,n,e),r=e.data;r.setAll(je(t)),r.setAll(i),e.convertToFoundDocument(Me(e),r).setHasLocalMutations()}(t,e,n):function(t,e){Oe(t.precondition,e)&&e.convertToNoDocument(V.min())}(t,e)}function Ne(t,e){let n=null;for(const i of t.fieldTransforms){const t=e.data.field(i.field),r=me(i.transform,t||null);null!=r&&(null==n&&(n=xt.empty()),n.set(i.field,r))}return n||null}function Pe(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&F(t,e,(t,e)=>Ee(t,e))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}function Me(t){return t.isFoundDocument()?t.version:V.min()}class Le extends Ce{constructor(t,e,n,i=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=i,this.type=0}}class Fe extends Ce{constructor(t,e,n,i,r=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=i,this.fieldTransforms=r,this.type=1}}function je(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const i=t.data.field(n);e.set(n,i)}}),e}function Ue(t,e,n){const i=new Map;v(t.length===n.length);for(let r=0;r<n.length;r++){const s=t[r],o=s.transform,a=e.data.field(s.field);i.set(s.field,ge(o,a,n[r]))}return i}function Ve(t,e,n){const i=new Map;for(const r of t){const t=r.transform,s=n.data.field(r.field);i.set(r.field,pe(t,s,e))}return i}class Be extends Ce{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}}class qe extends Ce{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */class ze{constructor(t){this.count=t}}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */var We,He;function $e(t){switch(t){default:return b();case x.CANCELLED:case x.UNKNOWN:case x.DEADLINE_EXCEEDED:case x.RESOURCE_EXHAUSTED:case x.INTERNAL:case x.UNAVAILABLE:case x.UNAUTHENTICATED:return!1;case x.INVALID_ARGUMENT:case x.NOT_FOUND:case x.ALREADY_EXISTS:case x.PERMISSION_DENIED:case x.FAILED_PRECONDITION:case x.ABORTED:case x.OUT_OF_RANGE:case x.UNIMPLEMENTED:case x.DATA_LOSS:return!0}}function Ke(t){if(void 0===t)return g("GRPC error has no .code"),x.UNKNOWN;switch(t){case We.OK:return x.OK;case We.CANCELLED:return x.CANCELLED;case We.UNKNOWN:return x.UNKNOWN;case We.DEADLINE_EXCEEDED:return x.DEADLINE_EXCEEDED;case We.RESOURCE_EXHAUSTED:return x.RESOURCE_EXHAUSTED;case We.INTERNAL:return x.INTERNAL;case We.UNAVAILABLE:return x.UNAVAILABLE;case We.UNAUTHENTICATED:return x.UNAUTHENTICATED;case We.INVALID_ARGUMENT:return x.INVALID_ARGUMENT;case We.NOT_FOUND:return x.NOT_FOUND;case We.ALREADY_EXISTS:return x.ALREADY_EXISTS;case We.PERMISSION_DENIED:return x.PERMISSION_DENIED;case We.FAILED_PRECONDITION:return x.FAILED_PRECONDITION;case We.ABORTED:return x.ABORTED;case We.OUT_OF_RANGE:return x.OUT_OF_RANGE;case We.UNIMPLEMENTED:return x.UNIMPLEMENTED;case We.DATA_LOSS:return x.DATA_LOSS;default:return b()}}(He=We||(We={}))[He.OK=0]="OK",He[He.CANCELLED=1]="CANCELLED",He[He.UNKNOWN=2]="UNKNOWN",He[He.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",He[He.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",He[He.NOT_FOUND=5]="NOT_FOUND",He[He.ALREADY_EXISTS=6]="ALREADY_EXISTS",He[He.PERMISSION_DENIED=7]="PERMISSION_DENIED",He[He.UNAUTHENTICATED=16]="UNAUTHENTICATED",He[He.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",He[He.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",He[He.ABORTED=10]="ABORTED",He[He.OUT_OF_RANGE=11]="OUT_OF_RANGE",He[He.UNIMPLEMENTED=12]="UNIMPLEMENTED",He[He.INTERNAL=13]="INTERNAL",He[He.UNAVAILABLE=14]="UNAVAILABLE",He[He.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2017 Google LLC
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
 */
class Ge{constructor(t,e){this.comparator=t,this.root=e||Qe.EMPTY}insert(t,e){return new Ge(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Qe.BLACK,null,null))}remove(t){return new Ge(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Qe.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const i=this.comparator(t,n.key);if(0===i)return e+n.left.size;i<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,n)=>(t(e,n),!1))}toString(){const t=[];return this.inorderTraversal((e,n)=>(t.push(`${e}:${n}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Ye(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Ye(this.root,t,this.comparator,!1)}getReverseIterator(){return new Ye(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Ye(this.root,t,this.comparator,!0)}}class Ye{constructor(t,e,n,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!t.isEmpty();)if(r=e?n(t.key,e):1,i&&(r*=-1),r<0)t=this.isReverse?t.left:t.right;else{if(0===r){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Qe{constructor(t,e,n,i,r){this.key=t,this.value=e,this.color=null!=n?n:Qe.RED,this.left=null!=i?i:Qe.EMPTY,this.right=null!=r?r:Qe.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,i,r){return new Qe(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=r?r:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let i=this;const r=n(t,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(t,e,n),null):0===r?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Qe.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),0===e(t,i.key)){if(i.right.isEmpty())return Qe.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Qe.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Qe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw b();if(this.right.isRed())throw b();const t=this.left.check();if(t!==this.right.check())throw b();return t+(this.isRed()?0:1)}}Qe.EMPTY=null,Qe.RED=!0,Qe.BLACK=!1,Qe.EMPTY=new class{constructor(){this.size=0}get key(){throw b()}get value(){throw b()}get color(){throw b()}get left(){throw b()}get right(){throw b()}copy(t,e,n,i,r){return this}insert(t,e,n){return new Qe(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
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
 */
class Je{constructor(t){this.comparator=t,this.data=new Ge(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,n)=>(t(e),!1))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const i=n.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Xe(this.data.getIterator())}getIteratorFrom(t){return new Xe(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(t=>{e=e.add(t)}),e}isEqual(t){if(!(t instanceof Je))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,i=n.getNext().key;if(0!==this.comparator(t,i))return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new Je(this.comparator);return e.data=t,e}}class Xe{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */const Ze=new Ge(at.comparator);function tn(){return Ze}const en=new Ge(at.comparator);function nn(){return en}const rn=new Ge(at.comparator);function sn(){return rn}const on=new Je(at.comparator);function an(...t){let e=on;for(const n of t)e=e.add(n);return e}const cn=new Je(L);function ln(){return cn}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */class un{constructor(t,e,n,i,r){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(t,e){const n=new Map;return n.set(t,hn.createSynthesizedTargetChangeForCurrentChange(t,e)),new un(V.min(),n,ln(),tn(),an())}}class hn{constructor(t,e,n,i,r){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(t,e){return new hn(Q.EMPTY_BYTE_STRING,e,an(),an(),an())}}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */class dn{constructor(t,e,n,i){this.$=t,this.removedTargetIds=e,this.key=n,this.O=i}}class fn{constructor(t,e){this.targetId=t,this.M=e}}class pn{constructor(t,e,n=Q.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=i}}class gn{constructor(){this.F=0,this.L=bn(),this.B=Q.EMPTY_BYTE_STRING,this.U=!1,this.q=!0}get current(){return this.U}get resumeToken(){return this.B}get K(){return 0!==this.F}get j(){return this.q}W(t){t.approximateByteSize()>0&&(this.q=!0,this.B=t)}G(){let t=an(),e=an(),n=an();return this.L.forEach((i,r)=>{switch(r){case 0:t=t.add(i);break;case 2:e=e.add(i);break;case 1:n=n.add(i);break;default:b()}}),new hn(this.B,this.U,t,e,n)}H(){this.q=!1,this.L=bn()}J(t,e){this.q=!0,this.L=this.L.insert(t,e)}Y(t){this.q=!0,this.L=this.L.remove(t)}X(){this.F+=1}Z(){this.F-=1}tt(){this.q=!0,this.U=!0}}class mn{constructor(t){this.et=t,this.nt=new Map,this.st=tn(),this.it=yn(),this.rt=new Je(L)}ot(t){for(const e of t.$)t.O&&t.O.isFoundDocument()?this.ct(e,t.O):this.at(e,t.key,t.O);for(const e of t.removedTargetIds)this.at(e,t.key,t.O)}ut(t){this.forEachTarget(t,e=>{const n=this.ht(e);switch(t.state){case 0:this.lt(e)&&n.W(t.resumeToken);break;case 1:n.Z(),n.K||n.H(),n.W(t.resumeToken);break;case 2:n.Z(),n.K||this.removeTarget(e);break;case 3:this.lt(e)&&(n.tt(),n.W(t.resumeToken));break;case 4:this.lt(e)&&(this.ft(e),n.W(t.resumeToken));break;default:b()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.nt.forEach((t,n)=>{this.lt(n)&&e(n)})}dt(t){const e=t.targetId,n=t.M.count,i=this.wt(e);if(i){const t=i.target;if(Ct(t))if(0===n){const n=new at(t.path);this.at(e,n,Tt.newNoDocument(n,V.min()))}else v(1===n);else this._t(e)!==n&&(this.ft(e),this.rt=this.rt.add(e))}}gt(t){const e=new Map;this.nt.forEach((n,i)=>{const r=this.wt(i);if(r){if(n.current&&Ct(r.target)){const e=new at(r.target.path);null!==this.st.get(e)||this.yt(i,e)||this.at(i,e,Tt.newNoDocument(e,t))}n.j&&(e.set(i,n.G()),n.H())}});let n=an();this.it.forEach((t,e)=>{let i=!0;e.forEachWhile(t=>{const e=this.wt(t);return!e||2===e.purpose||(i=!1,!1)}),i&&(n=n.add(t))});const i=new un(t,e,this.rt,this.st,n);return this.st=tn(),this.it=yn(),this.rt=new Je(L),i}ct(t,e){if(!this.lt(t))return;const n=this.yt(t,e.key)?2:0;this.ht(t).J(e.key,n),this.st=this.st.insert(e.key,e),this.it=this.it.insert(e.key,this.Tt(e.key).add(t))}at(t,e,n){if(!this.lt(t))return;const i=this.ht(t);this.yt(t,e)?i.J(e,1):i.Y(e),this.it=this.it.insert(e,this.Tt(e).delete(t)),n&&(this.st=this.st.insert(e,n))}removeTarget(t){this.nt.delete(t)}_t(t){const e=this.ht(t).G();return this.et.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}X(t){this.ht(t).X()}ht(t){let e=this.nt.get(t);return e||(e=new gn,this.nt.set(t,e)),e}Tt(t){let e=this.it.get(t);return e||(e=new Je(L),this.it=this.it.insert(t,e)),e}lt(t){const e=null!==this.wt(t);return e||p("WatchChangeAggregator","Detected inactive target",t),e}wt(t){const e=this.nt.get(t);return e&&e.K?null:this.et.Et(t)}ft(t){this.nt.set(t,new gn),this.et.getRemoteKeysForTarget(t).forEach(e=>{this.at(t,e,null)})}yt(t,e){return this.et.getRemoteKeysForTarget(t).has(e)}}function yn(){return new Ge(at.comparator)}function bn(){return new Ge(at.comparator)}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */const vn=(()=>{const t={asc:"ASCENDING",desc:"DESCENDING"};return t})(),_n=(()=>{const t={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return t})();class wn{constructor(t,e){this.databaseId=t,this.C=e}}function xn(t,e){return t.C?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function In(t,e){return t.C?e.toBase64():e.toUint8Array()}function Tn(t,e){return xn(t,e.toTimestamp())}function kn(t){return v(!!t),V.fromTimestamp(function(t){const e=X(t);return new U(e.seconds,e.nanos)}(t))}function En(t,e){return function(t){return new H(["projects",t.projectId,"databases",t.database])}(t).child("documents").child(e).canonicalString()}function Sn(t){const e=H.fromString(t);return v(ei(e)),e}function An(t,e){return En(t.databaseId,e.path)}function On(t,e){const n=Sn(e);if(n.get(1)!==t.databaseId.projectId)throw new I(x.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new I(x.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new at(Nn(n))}function Cn(t,e){return En(t.databaseId,e)}function Rn(t){const e=Sn(t);return 4===e.length?H.emptyPath():Nn(e)}function Dn(t){return new H(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Nn(t){return v(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function Pn(t,e,n){return{name:An(t,e),fields:n.value.mapValue.fields}}function Mn(t,e,n){const i=On(t,e.name),r=kn(e.updateTime),s=new xt({mapValue:{fields:e.fields}}),o=Tt.newFoundDocument(i,r,s);return n&&o.setHasCommittedMutations(),n?o.setHasCommittedMutations():o}function Ln(t,e){return"found"in e?function(t,e){v(!!e.found),e.found.name,e.found.updateTime;const n=On(t,e.found.name),i=kn(e.found.updateTime),r=new xt({mapValue:{fields:e.found.fields}});return Tt.newFoundDocument(n,i,r)}(t,e):"missing"in e?function(t,e){v(!!e.missing),v(!!e.readTime);const n=On(t,e.missing),i=kn(e.readTime);return Tt.newNoDocument(n,i)}(t,e):b()}function Fn(t,e){let n;if("targetChange"in e){e.targetChange;const i=function(t){return"NO_CHANGE"===t?0:"ADD"===t?1:"REMOVE"===t?2:"CURRENT"===t?3:"RESET"===t?4:b()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],s=function(t,e){return t.C?(v(void 0===e||"string"==typeof e),Q.fromBase64String(e||"")):(v(void 0===e||e instanceof Uint8Array),Q.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(t){const e=void 0===t.code?x.UNKNOWN:Ke(t.code);return new I(e,t.message||"")}(o);n=new pn(i,r,s,a||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const r=On(t,i.document.name),s=kn(i.document.updateTime),o=new xt({mapValue:{fields:i.document.fields}}),a=Tt.newFoundDocument(r,s,o),c=i.targetIds||[],l=i.removedTargetIds||[];n=new dn(c,l,a.key,a)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const r=On(t,i.document),s=i.readTime?kn(i.readTime):V.min(),o=Tt.newNoDocument(r,s),a=i.removedTargetIds||[];n=new dn([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const r=On(t,i.document),s=i.removedTargetIds||[];n=new dn([],s,r,null)}else{if(!("filter"in e))return b();{e.filter;const t=e.filter;t.targetId;const i=t.count||0,r=new ze(i),s=t.targetId;n=new fn(s,r)}}return n}function jn(t,e){let n;if(e instanceof Le)n={update:Pn(t,e.key,e.value)};else if(e instanceof Be)n={delete:An(t,e.key)};else if(e instanceof Fe)n={update:Pn(t,e.key,e.data),updateMask:ti(e.fieldMask)};else{if(!(e instanceof qe))return b();n={verify:An(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(t=>function(t,e){const n=e.transform;if(n instanceof ye)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof be)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof _e)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof xe)return{fieldPath:e.field.canonicalString(),increment:n.N};throw b()}(0,t))),e.precondition.isNone||(n.currentDocument=function(t,e){return void 0!==e.updateTime?{updateTime:Tn(t,e.updateTime)}:void 0!==e.exists?{exists:e.exists}:b()}(t,e.precondition)),n}function Un(t,e){const n=e.currentDocument?function(t){return void 0!==t.updateTime?Ae.updateTime(kn(t.updateTime)):void 0!==t.exists?Ae.exists(t.exists):Ae.none()}(e.currentDocument):Ae.none(),i=e.updateTransforms?e.updateTransforms.map(e=>function(t,e){let n=null;if("setToServerValue"in e)v("REQUEST_TIME"===e.setToServerValue),n=new ye;else if("appendMissingElements"in e){const t=e.appendMissingElements.values||[];n=new be(t)}else if("removeAllFromArray"in e){const t=e.removeAllFromArray.values||[];n=new _e(t)}else"increment"in e?n=new xe(t,e.increment):b();const i=K.fromServerFormat(e.fieldPath);return new ke(i,n)}(t,e)):[];if(e.update){e.update.name;const r=On(t,e.update.name),s=new xt({mapValue:{fields:e.update.fields}});if(e.updateMask){const t=function(t){const e=t.fieldPaths||[];return new G(e.map(t=>K.fromServerFormat(t)))}(e.updateMask);return new Fe(r,s,t,n,i)}return new Le(r,s,n,i)}if(e.delete){const i=On(t,e.delete);return new Be(i,n)}if(e.verify){const i=On(t,e.verify);return new qe(i,n)}return b()}function Vn(t,e){return t&&t.length>0?(v(void 0!==e),t.map(t=>function(t,e){let n=t.updateTime?kn(t.updateTime):kn(e);return n.isEqual(V.min())&&(n=kn(e)),new Se(n,t.transformResults||[])}(t,e))):[]}function Bn(t,e){return{documents:[Cn(t,e.path)]}}function qn(t,e){const n={structuredQuery:{}},i=e.path;null!==e.collectionGroup?(n.parent=Cn(t,i),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Cn(t,i.popLast()),n.structuredQuery.from=[{collectionId:i.lastSegment()}]);const r=function(t){if(0===t.length)return;const e=t.map(t=>function(t){if("=="===t.op){if(vt(t.value))return{unaryFilter:{field:Qn(t.field),op:"IS_NAN"}};if(bt(t.value))return{unaryFilter:{field:Qn(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(vt(t.value))return{unaryFilter:{field:Qn(t.field),op:"IS_NOT_NAN"}};if(bt(t.value))return{unaryFilter:{field:Qn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Qn(t.field),op:Yn(t.op),value:t.value}}}(t));return 1===e.length?e[0]:{compositeFilter:{op:"AND",filters:e}}}(e.filters);r&&(n.structuredQuery.where=r);const s=function(t){if(0!==t.length)return t.map(t=>function(t){return{field:Qn(t.field),direction:Gn(t.dir)}}(t))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(t,e){return t.C||rt(e)?e:{value:e}}(t,e.limit);return null!==o&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=$n(e.startAt)),e.endAt&&(n.structuredQuery.endAt=$n(e.endAt)),n}function zn(t){let e=Rn(t.parent);const n=t.structuredQuery,i=n.from?n.from.length:0;let r=null;if(i>0){v(1===i);const t=n.from[0];t.allDescendants?r=t.collectionId:e=e.child(t.collectionId)}let s=[];n.where&&(s=Hn(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(t=>function(t){return new zt(Jn(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t)));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,rt(e)?null:e}(n.limit));let c=null;n.startAt&&(c=Kn(n.startAt));let l=null;return n.endAt&&(l=Kn(n.endAt)),Gt(e,r,o,s,a,"F",c,l)}function Wn(t,e){const n=function(t,e){switch(e){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return b()}}(0,e.purpose);return null==n?null:{"goog-listen-tags":n}}function Hn(t){return t?void 0!==t.unaryFilter?[Zn(t)]:void 0!==t.fieldFilter?[Xn(t)]:void 0!==t.compositeFilter?t.compositeFilter.filters.map(t=>Hn(t)).reduce((t,e)=>t.concat(e)):b():[]}function $n(t){return{before:t.before,values:t.position}}function Kn(t){const e=!!t.before,n=t.values||[];return new Bt(n,e)}function Gn(t){return vn[t]}function Yn(t){return _n[t]}function Qn(t){return{fieldPath:t.canonicalString()}}function Jn(t){return K.fromServerFormat(t.fieldPath)}function Xn(t){return Rt.create(Jn(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return b()}}(t.fieldFilter.op),t.fieldFilter.value)}function Zn(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Jn(t.unaryFilter.field);return Rt.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Jn(t.unaryFilter.field);return Rt.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Jn(t.unaryFilter.field);return Rt.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=Jn(t.unaryFilter.field);return Rt.create(r,"!=",{nullValue:"NULL_VALUE"});default:return b()}}function ti(t){const e=[];return t.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function ei(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */function ni(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=ri(e)),e=ii(t.get(n),e);return ri(e)}function ii(t,e){let n=e;const i=t.length;for(let r=0;r<i;r++){const e=t.charAt(r);switch(e){case"\0":n+="";break;case"":n+="";break;default:n+=e}}return n}function ri(t){return t+""}function si(t){const e=t.length;if(v(e>=2),2===e)return v(""===t.charAt(0)&&""===t.charAt(1)),H.emptyPath();const n=e-2,i=[];let r="";for(let s=0;s<e;){const e=t.indexOf("",s);switch((e<0||e>n)&&b(),t.charAt(e+1)){case"":const n=t.substring(s,e);let o;0===r.length?o=n:(r+=n,o=r,r=""),i.push(o);break;case"":r+=t.substring(s,e),r+="\0";break;case"":r+=t.substring(s,e+1);break;default:b()}s=e+2}return new H(i)}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */class oi{constructor(t,e){this.seconds=t,this.nanoseconds=e}}class ai{constructor(t,e,n){this.ownerId=t,this.allowTabSynchronization=e,this.leaseTimestampMs=n}}ai.store="owner",ai.key="owner";class ci{constructor(t,e,n){this.userId=t,this.lastAcknowledgedBatchId=e,this.lastStreamToken=n}}ci.store="mutationQueues",ci.keyPath="userId";class li{constructor(t,e,n,i,r){this.userId=t,this.batchId=e,this.localWriteTimeMs=n,this.baseMutations=i,this.mutations=r}}li.store="mutations",li.keyPath="batchId",li.userMutationsIndex="userMutationsIndex",li.userMutationsKeyPath=["userId","batchId"];class ui{constructor(){}static prefixForUser(t){return[t]}static prefixForPath(t,e){return[t,ni(e)]}static key(t,e,n){return[t,ni(e),n]}}ui.store="documentMutations",ui.PLACEHOLDER=new ui;class hi{constructor(t,e){this.path=t,this.readTime=e}}class di{constructor(t,e){this.path=t,this.version=e}}class fi{constructor(t,e,n,i,r,s){this.unknownDocument=t,this.noDocument=e,this.document=n,this.hasCommittedMutations=i,this.readTime=r,this.parentPath=s}}fi.store="remoteDocuments",fi.readTimeIndex="readTimeIndex",fi.readTimeIndexPath="readTime",fi.collectionReadTimeIndex="collectionReadTimeIndex",fi.collectionReadTimeIndexPath=["parentPath","readTime"];class pi{constructor(t){this.byteSize=t}}pi.store="remoteDocumentGlobal",pi.key="remoteDocumentGlobalKey";class gi{constructor(t,e,n,i,r,s,o){this.targetId=t,this.canonicalId=e,this.readTime=n,this.resumeToken=i,this.lastListenSequenceNumber=r,this.lastLimboFreeSnapshotVersion=s,this.query=o}}gi.store="targets",gi.keyPath="targetId",gi.queryTargetsIndexName="queryTargetsIndex",gi.queryTargetsKeyPath=["canonicalId","targetId"];class mi{constructor(t,e,n){this.targetId=t,this.path=e,this.sequenceNumber=n}}mi.store="targetDocuments",mi.keyPath=["targetId","path"],mi.documentTargetsIndex="documentTargetsIndex",mi.documentTargetsKeyPath=["path","targetId"];class yi{constructor(t,e,n,i){this.highestTargetId=t,this.highestListenSequenceNumber=e,this.lastRemoteSnapshotVersion=n,this.targetCount=i}}yi.key="targetGlobalKey",yi.store="targetGlobal";class bi{constructor(t,e){this.collectionId=t,this.parent=e}}bi.store="collectionParents",bi.keyPath=["collectionId","parent"];class vi{constructor(t,e,n,i){this.clientId=t,this.updateTimeMs=e,this.networkEnabled=n,this.inForeground=i}}vi.store="clientMetadata",vi.keyPath="clientId";class _i{constructor(t,e,n){this.bundleId=t,this.createTime=e,this.version=n}}_i.store="bundles",_i.keyPath="bundleId";class wi{constructor(t,e,n){this.name=t,this.readTime=e,this.bundledQuery=n}}wi.store="namedQueries",wi.keyPath="name";const xi=[ci.store,li.store,ui.store,fi.store,gi.store,ai.store,yi.store,mi.store,vi.store,pi.store,bi.store,_i.store,wi.store],Ii="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Ti{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */class ki{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&b(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new ki((n,i)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,i)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,i)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof ki?e:ki.resolve(e)}catch(t){return ki.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):ki.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):ki.reject(e)}static resolve(t){return new ki((e,n)=>{e(t)})}static reject(t){return new ki((e,n)=>{n(t)})}static waitFor(t){return new ki((e,n)=>{let i=0,r=0,s=!1;t.forEach(t=>{++i,t.next(()=>{++r,s&&r===i&&e()},t=>n(t))}),s=!0,r===i&&e()})}static or(t){let e=ki.resolve(!1);for(const n of t)e=e.next(t=>t?ki.resolve(t):n());return e}static forEach(t,e){const n=[];return t.forEach((t,i)=>{n.push(e.call(this,t,i))}),this.waitFor(n)}}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Ei{constructor(t,e){this.action=t,this.transaction=e,this.aborted=!1,this.It=new T,this.transaction.oncomplete=()=>{this.It.resolve()},this.transaction.onabort=()=>{e.error?this.It.reject(new Oi(t,e.error)):this.It.resolve()},this.transaction.onerror=e=>{const n=Pi(e.target.error);this.It.reject(new Oi(t,n))}}static open(t,e,n,i){try{return new Ei(e,t.transaction(i,n))}catch(t){throw new Oi(e,t)}}get At(){return this.It.promise}abort(t){t&&this.It.reject(t),this.aborted||(p("SimpleDb","Aborting transaction:",t?t.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}store(t){const e=this.transaction.objectStore(t);return new Ri(e)}}class Si{constructor(t,e,n){this.name=t,this.version=e,this.Rt=n,12.2===Si.bt(Object(o["l"])())&&g("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(t){return p("SimpleDb","Removing database:",t),Di(window.indexedDB.deleteDatabase(t)).toPromise()}static Pt(){if(!Object(o["r"])())return!1;if(Si.vt())return!0;const t=Object(o["l"])(),e=Si.bt(t),n=0<e&&e<10,i=Si.Vt(t),r=0<i&&i<4.5;return!(t.indexOf("MSIE ")>0||t.indexOf("Trident/")>0||t.indexOf("Edge/")>0||n||r)}static vt(){var e;return"undefined"!=typeof t&&"YES"===(null===(e=Object({NODE_ENV:"production",BASE_URL:"/"}))||void 0===e?void 0:e.St)}static Dt(t,e){return t.store(e)}static bt(t){const e=t.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=e?e[1].split("_").slice(0,2).join("."):"-1";return Number(n)}static Vt(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}async Ct(t){return this.db||(p("SimpleDb","Opening database:",this.name),this.db=await new Promise((e,n)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=t=>{const n=t.target.result;e(n)},i.onblocked=()=>{n(new Oi(t,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=e=>{const i=e.target.error;"VersionError"===i.name?n(new I(x.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):"InvalidStateError"===i.name?n(new I(x.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+i)):n(new Oi(t,i))},i.onupgradeneeded=t=>{p("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',t.oldVersion);const e=t.target.result;this.Rt.Nt(e,i.transaction,t.oldVersion,this.version).next(()=>{p("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.kt&&(this.db.onversionchange=t=>this.kt(t)),this.db}xt(t){this.kt=t,this.db&&(this.db.onversionchange=e=>t(e))}async runTransaction(t,e,n,i){const r="readonly"===e;let s=0;for(;;){++s;try{this.db=await this.Ct(t);const e=Ei.open(this.db,t,r?"readonly":"readwrite",n),s=i(e).catch(t=>(e.abort(t),ki.reject(t))).toPromise();return s.catch(()=>{}),await e.At,s}catch(t){const e="FirebaseError"!==t.name&&s<3;if(p("SimpleDb","Transaction failed with error:",t.message,"Retrying:",e),this.close(),!e)return Promise.reject(t)}}}close(){this.db&&this.db.close(),this.db=void 0}}class Ai{constructor(t){this.$t=t,this.Ot=!1,this.Mt=null}get isDone(){return this.Ot}get Ft(){return this.Mt}set cursor(t){this.$t=t}done(){this.Ot=!0}Lt(t){this.Mt=t}delete(){return Di(this.$t.delete())}}class Oi extends I{constructor(t,e){super(x.UNAVAILABLE,`IndexedDB transaction '${t}' failed: ${e}`),this.name="IndexedDbTransactionError"}}function Ci(t){return"IndexedDbTransactionError"===t.name}class Ri{constructor(t){this.store=t}put(t,e){let n;return void 0!==e?(p("SimpleDb","PUT",this.store.name,t,e),n=this.store.put(e,t)):(p("SimpleDb","PUT",this.store.name,"<auto-key>",t),n=this.store.put(t)),Di(n)}add(t){return p("SimpleDb","ADD",this.store.name,t,t),Di(this.store.add(t))}get(t){return Di(this.store.get(t)).next(e=>(void 0===e&&(e=null),p("SimpleDb","GET",this.store.name,t,e),e))}delete(t){return p("SimpleDb","DELETE",this.store.name,t),Di(this.store.delete(t))}count(){return p("SimpleDb","COUNT",this.store.name),Di(this.store.count())}Bt(t,e){const n=this.cursor(this.options(t,e)),i=[];return this.Ut(n,(t,e)=>{i.push(e)}).next(()=>i)}qt(t,e){p("SimpleDb","DELETE ALL",this.store.name);const n=this.options(t,e);n.Kt=!1;const i=this.cursor(n);return this.Ut(i,(t,e,n)=>n.delete())}jt(t,e){let n;e?n=t:(n={},e=t);const i=this.cursor(n);return this.Ut(i,e)}Qt(t){const e=this.cursor({});return new ki((n,i)=>{e.onerror=t=>{const e=Pi(t.target.error);i(e)},e.onsuccess=e=>{const i=e.target.result;i?t(i.primaryKey,i.value).next(t=>{t?i.continue():n()}):n()}})}Ut(t,e){const n=[];return new ki((i,r)=>{t.onerror=t=>{r(t.target.error)},t.onsuccess=t=>{const r=t.target.result;if(!r)return void i();const s=new Ai(r),o=e(r.primaryKey,r.value,s);if(o instanceof ki){const t=o.catch(t=>(s.done(),ki.reject(t)));n.push(t)}s.isDone?i():null===s.Ft?r.continue():r.continue(s.Ft)}}).next(()=>ki.waitFor(n))}options(t,e){let n;return void 0!==t&&("string"==typeof t?n=t:e=t),{index:n,range:e}}cursor(t){let e="next";if(t.reverse&&(e="prev"),t.index){const n=this.store.index(t.index);return t.Kt?n.openKeyCursor(t.range,e):n.openCursor(t.range,e)}return this.store.openCursor(t.range,e)}}function Di(t){return new ki((e,n)=>{t.onsuccess=t=>{const n=t.target.result;e(n)},t.onerror=t=>{const e=Pi(t.target.error);n(e)}})}let Ni=!1;function Pi(t){const e=Si.bt(Object(o["l"])());if(e>=12.2&&e<13){const e="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(e)>=0){const t=new I("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${e}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Ni||(Ni=!0,setTimeout(()=>{throw t},0)),t}}return t}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */class Mi extends Ti{constructor(t,e){super(),this.Wt=t,this.currentSequenceNumber=e}}function Li(t,e){const n=w(t);return Si.Dt(n.Wt,e)}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Fi{constructor(t,e,n,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=i}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let i=0;i<this.mutations.length;i++){const e=this.mutations[i];e.key.isEqual(t.key)&&Re(e,t,n[i])}}applyToLocalView(t){for(const e of this.baseMutations)e.key.isEqual(t.key)&&De(e,t,this.localWriteTime);for(const e of this.mutations)e.key.isEqual(t.key)&&De(e,t,this.localWriteTime)}applyToLocalDocumentSet(t){this.mutations.forEach(e=>{const n=t.get(e.key),i=n;this.applyToLocalView(i),n.isValidDocument()||i.convertToNoDocument(V.min())})}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),an())}isEqual(t){return this.batchId===t.batchId&&F(this.mutations,t.mutations,(t,e)=>Pe(t,e))&&F(this.baseMutations,t.baseMutations,(t,e)=>Pe(t,e))}}class ji{constructor(t,e,n,i){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=i}static from(t,e,n){v(t.mutations.length===n.length);let i=sn();const r=t.mutations;for(let s=0;s<r.length;s++)i=i.insert(r[s].key,n[s].version);return new ji(t,e,n,i)}}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Ui{constructor(t,e,n,i,r=V.min(),s=V.min(),o=Q.EMPTY_BYTE_STRING){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o}withSequenceNumber(t){return new Ui(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,e){return new Ui(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new Ui(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Vi{constructor(t){this.Gt=t}}function Bi(t,e){if(e.document)return Mn(t.Gt,e.document,!!e.hasCommittedMutations);if(e.noDocument){const t=at.fromSegments(e.noDocument.path),n=$i(e.noDocument.readTime),i=Tt.newNoDocument(t,n);return e.hasCommittedMutations?i.setHasCommittedMutations():i}if(e.unknownDocument){const t=at.fromSegments(e.unknownDocument.path),n=$i(e.unknownDocument.version);return Tt.newUnknownDocument(t,n)}return b()}function qi(t,e,n){const i=zi(n),r=e.key.path.popLast().toArray();if(e.isFoundDocument()){const n=function(t,e){return{name:An(t,e.key),fields:e.data.value.mapValue.fields,updateTime:xn(t,e.version.toTimestamp())}}(t.Gt,e),s=e.hasCommittedMutations;return new fi(null,null,n,s,i,r)}if(e.isNoDocument()){const t=e.key.path.toArray(),n=Hi(e.version),s=e.hasCommittedMutations;return new fi(null,new hi(t,n),null,s,i,r)}if(e.isUnknownDocument()){const t=e.key.path.toArray(),n=Hi(e.version);return new fi(new di(t,n),null,null,!0,i,r)}return b()}function zi(t){const e=t.toTimestamp();return[e.seconds,e.nanoseconds]}function Wi(t){const e=new U(t[0],t[1]);return V.fromTimestamp(e)}function Hi(t){const e=t.toTimestamp();return new oi(e.seconds,e.nanoseconds)}function $i(t){const e=new U(t.seconds,t.nanoseconds);return V.fromTimestamp(e)}function Ki(t,e){const n=(e.baseMutations||[]).map(e=>Un(t.Gt,e));for(let s=0;s<e.mutations.length-1;++s){const t=e.mutations[s];if(s+1<e.mutations.length&&void 0!==e.mutations[s+1].transform){const n=e.mutations[s+1];t.updateTransforms=n.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const i=e.mutations.map(e=>Un(t.Gt,e)),r=U.fromMillis(e.localWriteTimeMs);return new Fi(e.batchId,r,n,i)}function Gi(t){const e=$i(t.readTime),n=void 0!==t.lastLimboFreeSnapshotVersion?$i(t.lastLimboFreeSnapshotVersion):V.min();let i;var r;return void 0!==t.query.documents?(v(1===(r=t.query).documents.length),i=ne(Yt(Rn(r.documents[0])))):i=function(t){return ne(zn(t))}(t.query),new Ui(i,t.targetId,0,t.lastListenSequenceNumber,e,n,Q.fromBase64String(t.resumeToken))}function Yi(t,e){const n=Hi(e.snapshotVersion),i=Hi(e.lastLimboFreeSnapshotVersion);let r;r=Ct(e.target)?Bn(t.Gt,e.target):qn(t.Gt,e.target);const s=e.resumeToken.toBase64();return new gi(e.targetId,St(e.target),n,s,e.sequenceNumber,i,r)}function Qi(t){const e=zn({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?ie(e,e.limit,"L"):e}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */class Ji{getBundleMetadata(t,e){return Xi(t).get(e).next(t=>{if(t)return{id:(e=t).bundleId,createTime:$i(e.createTime),version:e.version};var e})}saveBundleMetadata(t,e){return Xi(t).put({bundleId:(n=e).id,createTime:Hi(kn(n.createTime)),version:n.version});var n}getNamedQuery(t,e){return Zi(t).get(e).next(t=>{if(t)return{name:(e=t).name,query:Qi(e.bundledQuery),readTime:$i(e.readTime)};var e})}saveNamedQuery(t,e){return Zi(t).put(function(t){return{name:t.name,readTime:Hi(kn(t.readTime)),bundledQuery:t.bundledQuery}}(e))}}function Xi(t){return Li(t,_i.store)}function Zi(t){return Li(t,wi.store)}
/**
 * @license
 * Copyright 2019 Google LLC
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
 */class tr{constructor(){this.zt=new er}addToCollectionParentIndex(t,e){return this.zt.add(e),ki.resolve()}getCollectionParents(t,e){return ki.resolve(this.zt.getEntries(e))}}class er{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e]||new Je(H.comparator),r=!i.has(n);return this.index[e]=i.add(n),r}has(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e];return i&&i.has(n)}getEntries(t){return(this.index[t]||new Je(H.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
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
 */class nr{constructor(){this.Ht=new er}addToCollectionParentIndex(t,e){if(!this.Ht.has(e)){const n=e.lastSegment(),i=e.popLast();t.addOnCommittedListener(()=>{this.Ht.add(e)});const r={collectionId:n,parent:ni(i)};return ir(t).put(r)}return ki.resolve()}getCollectionParents(t,e){const n=[],i=IDBKeyRange.bound([e,""],[j(e),""],!1,!0);return ir(t).Bt(i).next(t=>{for(const i of t){if(i.collectionId!==e)break;n.push(si(i.parent))}return n})}}function ir(t){return Li(t,bi.store)}
/**
 * @license
 * Copyright 2018 Google LLC
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
 */const rr={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class sr{constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}static withCacheSize(t){return new sr(t,sr.DEFAULT_COLLECTION_PERCENTILE,sr.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */function or(t,e,n){const i=t.store(li.store),r=t.store(ui.store),s=[],o=IDBKeyRange.only(n.batchId);let a=0;const c=i.jt({range:o},(t,e,n)=>(a++,n.delete()));s.push(c.next(()=>{v(1===a)}));const l=[];for(const u of n.mutations){const t=ui.key(e,u.key.path,n.batchId);s.push(r.delete(t)),l.push(u.key)}return ki.waitFor(s).next(()=>l)}function ar(t){if(!t)return 0;let e;if(t.document)e=t.document;else if(t.unknownDocument)e=t.unknownDocument;else{if(!t.noDocument)throw b();e=t.noDocument}return JSON.stringify(e).length}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */sr.DEFAULT_COLLECTION_PERCENTILE=10,sr.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,sr.DEFAULT=new sr(41943040,sr.DEFAULT_COLLECTION_PERCENTILE,sr.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),sr.DISABLED=new sr(-1,0,0);class cr{constructor(t,e,n,i){this.userId=t,this.k=e,this.Jt=n,this.referenceDelegate=i,this.Yt={}}static Xt(t,e,n,i){v(""!==t.uid);const r=t.isAuthenticated()?t.uid:"";return new cr(r,e,n,i)}checkEmpty(t){let e=!0;const n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return ur(t).jt({index:li.userMutationsIndex,range:n},(t,n,i)=>{e=!1,i.done()}).next(()=>e)}addMutationBatch(t,e,n,i){const r=hr(t),s=ur(t);return s.add({}).next(o=>{v("number"==typeof o);const a=new Fi(o,e,n,i),c=function(t,e,n){const i=n.baseMutations.map(e=>jn(t.Gt,e)),r=n.mutations.map(e=>jn(t.Gt,e));return new li(e,n.batchId,n.localWriteTime.toMillis(),i,r)}(this.k,this.userId,a),l=[];let u=new Je((t,e)=>L(t.canonicalString(),e.canonicalString()));for(const t of i){const e=ui.key(this.userId,t.key.path,o);u=u.add(t.key.path.popLast()),l.push(s.put(c)),l.push(r.put(e,ui.PLACEHOLDER))}return u.forEach(e=>{l.push(this.Jt.addToCollectionParentIndex(t,e))}),t.addOnCommittedListener(()=>{this.Yt[o]=a.keys()}),ki.waitFor(l).next(()=>a)})}lookupMutationBatch(t,e){return ur(t).get(e).next(t=>t?(v(t.userId===this.userId),Ki(this.k,t)):null)}Zt(t,e){return this.Yt[e]?ki.resolve(this.Yt[e]):this.lookupMutationBatch(t,e).next(t=>{if(t){const n=t.keys();return this.Yt[e]=n,n}return null})}getNextMutationBatchAfterBatchId(t,e){const n=e+1,i=IDBKeyRange.lowerBound([this.userId,n]);let r=null;return ur(t).jt({index:li.userMutationsIndex,range:i},(t,e,i)=>{e.userId===this.userId&&(v(e.batchId>=n),r=Ki(this.k,e)),i.done()}).next(()=>r)}getHighestUnacknowledgedBatchId(t){const e=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let n=-1;return ur(t).jt({index:li.userMutationsIndex,range:e,reverse:!0},(t,e,i)=>{n=e.batchId,i.done()}).next(()=>n)}getAllMutationBatches(t){const e=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return ur(t).Bt(li.userMutationsIndex,e).next(t=>t.map(t=>Ki(this.k,t)))}getAllMutationBatchesAffectingDocumentKey(t,e){const n=ui.prefixForPath(this.userId,e.path),i=IDBKeyRange.lowerBound(n),r=[];return hr(t).jt({range:i},(n,i,s)=>{const[o,a,c]=n,l=si(a);if(o===this.userId&&e.path.isEqual(l))return ur(t).get(c).next(t=>{if(!t)throw b();v(t.userId===this.userId),r.push(Ki(this.k,t))});s.done()}).next(()=>r)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new Je(L);const i=[];return e.forEach(e=>{const r=ui.prefixForPath(this.userId,e.path),s=IDBKeyRange.lowerBound(r),o=hr(t).jt({range:s},(t,i,r)=>{const[s,o,a]=t,c=si(o);s===this.userId&&e.path.isEqual(c)?n=n.add(a):r.done()});i.push(o)}),ki.waitFor(i).next(()=>this.te(t,n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,i=n.length+1,r=ui.prefixForPath(this.userId,n),s=IDBKeyRange.lowerBound(r);let o=new Je(L);return hr(t).jt({range:s},(t,e,r)=>{const[s,a,c]=t,l=si(a);s===this.userId&&n.isPrefixOf(l)?l.length===i&&(o=o.add(c)):r.done()}).next(()=>this.te(t,o))}te(t,e){const n=[],i=[];return e.forEach(e=>{i.push(ur(t).get(e).next(t=>{if(null===t)throw b();v(t.userId===this.userId),n.push(Ki(this.k,t))}))}),ki.waitFor(i).next(()=>n)}removeMutationBatch(t,e){return or(t.Wt,this.userId,e).next(n=>(t.addOnCommittedListener(()=>{this.ee(e.batchId)}),ki.forEach(n,e=>this.referenceDelegate.markPotentiallyOrphaned(t,e))))}ee(t){delete this.Yt[t]}performConsistencyCheck(t){return this.checkEmpty(t).next(e=>{if(!e)return ki.resolve();const n=IDBKeyRange.lowerBound(ui.prefixForUser(this.userId)),i=[];return hr(t).jt({range:n},(t,e,n)=>{if(t[0]===this.userId){const e=si(t[1]);i.push(e)}else n.done()}).next(()=>{v(0===i.length)})})}containsKey(t,e){return lr(t,this.userId,e)}ne(t){return dr(t).get(this.userId).next(t=>t||new ci(this.userId,-1,""))}}function lr(t,e,n){const i=ui.prefixForPath(e,n.path),r=i[1],s=IDBKeyRange.lowerBound(i);let o=!1;return hr(t).jt({range:s,Kt:!0},(t,n,i)=>{const[s,a,c]=t;s===e&&a===r&&(o=!0),i.done()}).next(()=>o)}function ur(t){return Li(t,li.store)}function hr(t){return Li(t,ui.store)}function dr(t){return Li(t,ci.store)}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */class fr{constructor(t){this.se=t}next(){return this.se+=2,this.se}static ie(){return new fr(0)}static re(){return new fr(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */class pr{constructor(t,e){this.referenceDelegate=t,this.k=e}allocateTargetId(t){return this.oe(t).next(e=>{const n=new fr(e.highestTargetId);return e.highestTargetId=n.next(),this.ce(t,e).next(()=>e.highestTargetId)})}getLastRemoteSnapshotVersion(t){return this.oe(t).next(t=>V.fromTimestamp(new U(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(t){return this.oe(t).next(t=>t.highestListenSequenceNumber)}setTargetsMetadata(t,e,n){return this.oe(t).next(i=>(i.highestListenSequenceNumber=e,n&&(i.lastRemoteSnapshotVersion=n.toTimestamp()),e>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=e),this.ce(t,i)))}addTargetData(t,e){return this.ae(t,e).next(()=>this.oe(t).next(n=>(n.targetCount+=1,this.ue(e,n),this.ce(t,n))))}updateTargetData(t,e){return this.ae(t,e)}removeTargetData(t,e){return this.removeMatchingKeysForTargetId(t,e.targetId).next(()=>gr(t).delete(e.targetId)).next(()=>this.oe(t)).next(e=>(v(e.targetCount>0),e.targetCount-=1,this.ce(t,e)))}removeTargets(t,e,n){let i=0;const r=[];return gr(t).jt((s,o)=>{const a=Gi(o);a.sequenceNumber<=e&&null===n.get(a.targetId)&&(i++,r.push(this.removeTargetData(t,a)))}).next(()=>ki.waitFor(r)).next(()=>i)}forEachTarget(t,e){return gr(t).jt((t,n)=>{const i=Gi(n);e(i)})}oe(t){return mr(t).get(yi.key).next(t=>(v(null!==t),t))}ce(t,e){return mr(t).put(yi.key,e)}ae(t,e){return gr(t).put(Yi(this.k,e))}ue(t,e){let n=!1;return t.targetId>e.highestTargetId&&(e.highestTargetId=t.targetId,n=!0),t.sequenceNumber>e.highestListenSequenceNumber&&(e.highestListenSequenceNumber=t.sequenceNumber,n=!0),n}getTargetCount(t){return this.oe(t).next(t=>t.targetCount)}getTargetData(t,e){const n=St(e),i=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]);let r=null;return gr(t).jt({range:i,index:gi.queryTargetsIndexName},(t,n,i)=>{const s=Gi(n);Ot(e,s.target)&&(r=s,i.done())}).next(()=>r)}addMatchingKeys(t,e,n){const i=[],r=yr(t);return e.forEach(e=>{const s=ni(e.path);i.push(r.put(new mi(n,s))),i.push(this.referenceDelegate.addReference(t,n,e))}),ki.waitFor(i)}removeMatchingKeys(t,e,n){const i=yr(t);return ki.forEach(e,e=>{const r=ni(e.path);return ki.waitFor([i.delete([n,r]),this.referenceDelegate.removeReference(t,n,e)])})}removeMatchingKeysForTargetId(t,e){const n=yr(t),i=IDBKeyRange.bound([e],[e+1],!1,!0);return n.delete(i)}getMatchingKeysForTargetId(t,e){const n=IDBKeyRange.bound([e],[e+1],!1,!0),i=yr(t);let r=an();return i.jt({range:n,Kt:!0},(t,e,n)=>{const i=si(t[1]),s=new at(i);r=r.add(s)}).next(()=>r)}containsKey(t,e){const n=ni(e.path),i=IDBKeyRange.bound([n],[j(n)],!1,!0);let r=0;return yr(t).jt({index:mi.documentTargetsIndex,Kt:!0,range:i},([t,e],n,i)=>{0!==t&&(r++,i.done())}).next(()=>r>0)}Et(t,e){return gr(t).get(e).next(t=>t?Gi(t):null)}}function gr(t){return Li(t,gi.store)}function mr(t){return Li(t,yi.store)}function yr(t){return Li(t,mi.store)}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */async function br(t){if(t.code!==x.FAILED_PRECONDITION||t.message!==Ii)throw t;p("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */function vr([t,e],[n,i]){const r=L(t,n);return 0===r?L(e,i):r}class _r{constructor(t){this.he=t,this.buffer=new Je(vr),this.le=0}fe(){return++this.le}de(t){const e=[t,this.fe()];if(this.buffer.size<this.he)this.buffer=this.buffer.add(e);else{const t=this.buffer.last();vr(e,t)<0&&(this.buffer=this.buffer.delete(t).add(e))}}get maxValue(){return this.buffer.last()[0]}}class wr{constructor(t,e){this.garbageCollector=t,this.asyncQueue=e,this.we=!1,this._e=null}start(t){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this.me(t)}stop(){this._e&&(this._e.cancel(),this._e=null)}get started(){return null!==this._e}me(t){const e=this.we?3e5:6e4;p("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this._e=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this._e=null,this.we=!0;try{await t.collectGarbage(this.garbageCollector)}catch(t){Ci(t)?p("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await br(t)}await this.me(t)})}}class xr{constructor(t,e){this.ge=t,this.params=e}calculateTargetCount(t,e){return this.ge.ye(t).next(t=>Math.floor(e/100*t))}nthSequenceNumber(t,e){if(0===e)return ki.resolve(N.I);const n=new _r(e);return this.ge.forEachTarget(t,t=>n.de(t.sequenceNumber)).next(()=>this.ge.pe(t,t=>n.de(t))).next(()=>n.maxValue)}removeTargets(t,e,n){return this.ge.removeTargets(t,e,n)}removeOrphanedDocuments(t,e){return this.ge.removeOrphanedDocuments(t,e)}collect(t,e){return-1===this.params.cacheSizeCollectionThreshold?(p("LruGarbageCollector","Garbage collection skipped; disabled"),ki.resolve(rr)):this.getCacheSize(t).next(n=>n<this.params.cacheSizeCollectionThreshold?(p("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),rr):this.Te(t,e))}getCacheSize(t){return this.ge.getCacheSize(t)}Te(t,e){let n,i,r,o,a,c,l;const u=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(e=>(e>this.params.maximumSequenceNumbersToCollect?(p("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${e}`),i=this.params.maximumSequenceNumbersToCollect):i=e,o=Date.now(),this.nthSequenceNumber(t,i))).next(i=>(n=i,a=Date.now(),this.removeTargets(t,n,e))).next(e=>(r=e,c=Date.now(),this.removeOrphanedDocuments(t,n))).next(t=>(l=Date.now(),d()<=s["a"].DEBUG&&p("LruGarbageCollector",`LRU Garbage Collection\n\tCounted targets in ${o-u}ms\n\tDetermined least recently used ${i} in `+(a-o)+"ms\n"+`\tRemoved ${r} targets in `+(c-a)+"ms\n"+`\tRemoved ${t} documents in `+(l-c)+"ms\n"+`Total Duration: ${l-u}ms`),ki.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:r,documentsRemoved:t})))}}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */class Ir{constructor(t,e){this.db=t,this.garbageCollector=function(t,e){return new xr(t,e)}(this,e)}ye(t){const e=this.Ee(t);return this.db.getTargetCache().getTargetCount(t).next(t=>e.next(e=>t+e))}Ee(t){let e=0;return this.pe(t,t=>{e++}).next(()=>e)}forEachTarget(t,e){return this.db.getTargetCache().forEachTarget(t,e)}pe(t,e){return this.Ie(t,(t,n)=>e(n))}addReference(t,e,n){return Tr(t,n)}removeReference(t,e,n){return Tr(t,n)}removeTargets(t,e,n){return this.db.getTargetCache().removeTargets(t,e,n)}markPotentiallyOrphaned(t,e){return Tr(t,e)}Ae(t,e){return function(t,e){let n=!1;return dr(t).Qt(i=>lr(t,i,e).next(t=>(t&&(n=!0),ki.resolve(!t)))).next(()=>n)}(t,e)}removeOrphanedDocuments(t,e){const n=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let r=0;return this.Ie(t,(s,o)=>{if(o<=e){const e=this.Ae(t,s).next(e=>{if(!e)return r++,n.getEntry(t,s).next(()=>(n.removeEntry(s),yr(t).delete([0,ni(s.path)])))});i.push(e)}}).next(()=>ki.waitFor(i)).next(()=>n.apply(t)).next(()=>r)}removeTarget(t,e){const n=e.withSequenceNumber(t.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(t,n)}updateLimboDocument(t,e){return Tr(t,e)}Ie(t,e){const n=yr(t);let i,r=N.I;return n.jt({index:mi.documentTargetsIndex},([t,n],{path:s,sequenceNumber:o})=>{0===t?(r!==N.I&&e(new at(si(i)),r),r=o,i=s):r=N.I}).next(()=>{r!==N.I&&e(new at(si(i)),r)})}getCacheSize(t){return this.db.getRemoteDocumentCache().getSize(t)}}function Tr(t,e){return yr(t).put(function(t,e){return new mi(0,ni(t.path),e)}(e,t.currentSequenceNumber))}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */class kr{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={}}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[i,r]of n)if(this.equalsFn(i,t))return r}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),i=this.inner[n];if(void 0!==i){for(let n=0;n<i.length;n++)if(this.equalsFn(i[n][0],t))return void(i[n]=[t,e]);i.push([t,e])}else this.inner[n]=[[t,e]]}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],t))return 1===n.length?delete this.inner[e]:n.splice(i,1),!0;return!1}forEach(t){q(this.inner,(e,n)=>{for(const[i,r]of n)t(i,r)})}isEmpty(){return z(this.inner)}}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Er{constructor(){this.changes=new kr(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}getReadTime(t){const e=this.changes.get(t);return e?e.readTime:V.min()}addEntry(t,e){this.assertNotApplied(),this.changes.set(t.key,{document:t,readTime:e})}removeEntry(t,e=null){this.assertNotApplied(),this.changes.set(t,{document:Tt.newInvalidDocument(t),readTime:e})}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?ki.resolve(n.document):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Sr{constructor(t,e){this.k=t,this.Jt=e}addEntry(t,e,n){return Cr(t).put(Rr(e),n)}removeEntry(t,e){const n=Cr(t),i=Rr(e);return n.delete(i)}updateMetadata(t,e){return this.getMetadata(t).next(n=>(n.byteSize+=e,this.Re(t,n)))}getEntry(t,e){return Cr(t).get(Rr(e)).next(t=>this.be(e,t))}Pe(t,e){return Cr(t).get(Rr(e)).next(t=>({document:this.be(e,t),size:ar(t)}))}getEntries(t,e){let n=tn();return this.ve(t,e,(t,e)=>{const i=this.be(t,e);n=n.insert(t,i)}).next(()=>n)}Ve(t,e){let n=tn(),i=new Ge(at.comparator);return this.ve(t,e,(t,e)=>{const r=this.be(t,e);n=n.insert(t,r),i=i.insert(t,ar(e))}).next(()=>({documents:n,Se:i}))}ve(t,e,n){if(e.isEmpty())return ki.resolve();const i=IDBKeyRange.bound(e.first().path.toArray(),e.last().path.toArray()),r=e.getIterator();let s=r.getNext();return Cr(t).jt({range:i},(t,e,i)=>{const o=at.fromSegments(t);for(;s&&at.comparator(s,o)<0;)n(s,null),s=r.getNext();s&&s.isEqual(o)&&(n(s,e),s=r.hasNext()?r.getNext():null),s?i.Lt(s.path.toArray()):i.done()}).next(()=>{for(;s;)n(s,null),s=r.hasNext()?r.getNext():null})}getDocumentsMatchingQuery(t,e,n){let i=tn();const r=e.path.length+1,s={};if(n.isEqual(V.min())){const t=e.path.toArray();s.range=IDBKeyRange.lowerBound(t)}else{const t=e.path.toArray(),i=zi(n);s.range=IDBKeyRange.lowerBound([t,i],!0),s.index=fi.collectionReadTimeIndex}return Cr(t).jt(s,(t,n,s)=>{if(t.length!==r)return;const o=Bi(this.k,n);e.path.isPrefixOf(o.key.path)?ae(e,o)&&(i=i.insert(o.key,o)):s.done()}).next(()=>i)}newChangeBuffer(t){return new Ar(this,!!t&&t.trackRemovals)}getSize(t){return this.getMetadata(t).next(t=>t.byteSize)}getMetadata(t){return Or(t).get(pi.key).next(t=>(v(!!t),t))}Re(t,e){return Or(t).put(pi.key,e)}be(t,e){if(e){const t=Bi(this.k,e);if(!t.isNoDocument()||!t.version.isEqual(V.min()))return t}return Tt.newInvalidDocument(t)}}class Ar extends Er{constructor(t,e){super(),this.De=t,this.trackRemovals=e,this.Ce=new kr(t=>t.toString(),(t,e)=>t.isEqual(e))}applyChanges(t){const e=[];let n=0,i=new Je((t,e)=>L(t.canonicalString(),e.canonicalString()));return this.changes.forEach((r,s)=>{const o=this.Ce.get(r);if(s.document.isValidDocument()){const a=qi(this.De.k,s.document,this.getReadTime(r));i=i.add(r.path.popLast());const c=ar(a);n+=c-o,e.push(this.De.addEntry(t,r,a))}else if(n-=o,this.trackRemovals){const n=qi(this.De.k,Tt.newNoDocument(r,V.min()),this.getReadTime(r));e.push(this.De.addEntry(t,r,n))}else e.push(this.De.removeEntry(t,r))}),i.forEach(n=>{e.push(this.De.Jt.addToCollectionParentIndex(t,n))}),e.push(this.De.updateMetadata(t,n)),ki.waitFor(e)}getFromCache(t,e){return this.De.Pe(t,e).next(t=>(this.Ce.set(e,t.size),t.document))}getAllFromCache(t,e){return this.De.Ve(t,e).next(({documents:t,Se:e})=>(e.forEach((t,e)=>{this.Ce.set(t,e)}),t))}}function Or(t){return Li(t,pi.store)}function Cr(t){return Li(t,fi.store)}function Rr(t){return t.path.toArray()}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */class Dr{constructor(t){this.k=t}Nt(t,e,n,i){v(n<i&&n>=0&&i<=11);const r=new Ei("createOrUpgrade",e);n<1&&i>=1&&(function(t){t.createObjectStore(ai.store)}(t),function(t){t.createObjectStore(ci.store,{keyPath:ci.keyPath}),t.createObjectStore(li.store,{keyPath:li.keyPath,autoIncrement:!0}).createIndex(li.userMutationsIndex,li.userMutationsKeyPath,{unique:!0}),t.createObjectStore(ui.store)}(t),Nr(t),function(t){t.createObjectStore(fi.store)}(t));let s=ki.resolve();return n<3&&i>=3&&(0!==n&&(function(t){t.deleteObjectStore(mi.store),t.deleteObjectStore(gi.store),t.deleteObjectStore(yi.store)}(t),Nr(t)),s=s.next(()=>function(t){const e=t.store(yi.store),n=new yi(0,0,V.min().toTimestamp(),0);return e.put(yi.key,n)}(r))),n<4&&i>=4&&(0!==n&&(s=s.next(()=>function(t,e){return e.store(li.store).Bt().next(n=>{t.deleteObjectStore(li.store),t.createObjectStore(li.store,{keyPath:li.keyPath,autoIncrement:!0}).createIndex(li.userMutationsIndex,li.userMutationsKeyPath,{unique:!0});const i=e.store(li.store),r=n.map(t=>i.put(t));return ki.waitFor(r)})}(t,r))),s=s.next(()=>{!function(t){t.createObjectStore(vi.store,{keyPath:vi.keyPath})}(t)})),n<5&&i>=5&&(s=s.next(()=>this.Ne(r))),n<6&&i>=6&&(s=s.next(()=>(function(t){t.createObjectStore(pi.store)}(t),this.ke(r)))),n<7&&i>=7&&(s=s.next(()=>this.xe(r))),n<8&&i>=8&&(s=s.next(()=>this.$e(t,r))),n<9&&i>=9&&(s=s.next(()=>{!function(t){t.objectStoreNames.contains("remoteDocumentChanges")&&t.deleteObjectStore("remoteDocumentChanges")}(t),function(t){const e=t.objectStore(fi.store);e.createIndex(fi.readTimeIndex,fi.readTimeIndexPath,{unique:!1}),e.createIndex(fi.collectionReadTimeIndex,fi.collectionReadTimeIndexPath,{unique:!1})}(e)})),n<10&&i>=10&&(s=s.next(()=>this.Oe(r))),n<11&&i>=11&&(s=s.next(()=>{!function(t){t.createObjectStore(_i.store,{keyPath:_i.keyPath})}(t),function(t){t.createObjectStore(wi.store,{keyPath:wi.keyPath})}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */(t)})),s}ke(t){let e=0;return t.store(fi.store).jt((t,n)=>{e+=ar(n)}).next(()=>{const n=new pi(e);return t.store(pi.store).put(pi.key,n)})}Ne(t){const e=t.store(ci.store),n=t.store(li.store);return e.Bt().next(e=>ki.forEach(e,e=>{const i=IDBKeyRange.bound([e.userId,-1],[e.userId,e.lastAcknowledgedBatchId]);return n.Bt(li.userMutationsIndex,i).next(n=>ki.forEach(n,n=>{v(n.userId===e.userId);const i=Ki(this.k,n);return or(t,e.userId,i).next(()=>{})}))}))}xe(t){const e=t.store(mi.store),n=t.store(fi.store);return t.store(yi.store).get(yi.key).next(t=>{const i=[];return n.jt((n,r)=>{const s=new H(n),o=function(t){return[0,ni(t)]}(s);i.push(e.get(o).next(n=>n?ki.resolve():(n=>e.put(new mi(0,ni(n),t.highestListenSequenceNumber)))(s)))}).next(()=>ki.waitFor(i))})}$e(t,e){t.createObjectStore(bi.store,{keyPath:bi.keyPath});const n=e.store(bi.store),i=new er,r=t=>{if(i.add(t)){const e=t.lastSegment(),i=t.popLast();return n.put({collectionId:e,parent:ni(i)})}};return e.store(fi.store).jt({Kt:!0},(t,e)=>{const n=new H(t);return r(n.popLast())}).next(()=>e.store(ui.store).jt({Kt:!0},([t,e,n],i)=>{const s=si(e);return r(s.popLast())}))}Oe(t){const e=t.store(gi.store);return e.jt((t,n)=>{const i=Gi(n),r=Yi(this.k,i);return e.put(r)})}}function Nr(t){t.createObjectStore(mi.store,{keyPath:mi.keyPath}).createIndex(mi.documentTargetsIndex,mi.documentTargetsKeyPath,{unique:!0}),t.createObjectStore(gi.store,{keyPath:gi.keyPath}).createIndex(gi.queryTargetsIndexName,gi.queryTargetsKeyPath,{unique:!0}),t.createObjectStore(yi.store)}const Pr="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class Mr{constructor(t,e,n,i,r,s,o,a,c,l){if(this.allowTabSynchronization=t,this.persistenceKey=e,this.clientId=n,this.Me=r,this.window=s,this.document=o,this.Fe=c,this.Le=l,this.Be=null,this.Ue=!1,this.isPrimary=!1,this.networkEnabled=!0,this.qe=null,this.inForeground=!1,this.Ke=null,this.je=null,this.Qe=Number.NEGATIVE_INFINITY,this.We=t=>Promise.resolve(),!Mr.Pt())throw new I(x.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new Ir(this,i),this.Ge=e+"main",this.k=new Vi(a),this.ze=new Si(this.Ge,11,new Dr(this.k)),this.He=new pr(this.referenceDelegate,this.k),this.Jt=new nr,this.Je=function(t,e){return new Sr(t,e)}(this.k,this.Jt),this.Ye=new Ji,this.window&&this.window.localStorage?this.Xe=this.window.localStorage:(this.Xe=null,!1===l&&g("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.Ze().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new I(x.FAILED_PRECONDITION,Pr);return this.tn(),this.en(),this.nn(),this.runTransaction("getHighestListenSequenceNumber","readonly",t=>this.He.getHighestSequenceNumber(t))}).then(t=>{this.Be=new N(t,this.Fe)}).then(()=>{this.Ue=!0}).catch(t=>(this.ze&&this.ze.close(),Promise.reject(t)))}sn(t){return this.We=async e=>{if(this.started)return t(e)},t(this.isPrimary)}setDatabaseDeletedListener(t){this.ze.xt(async e=>{null===e.newVersion&&await t()})}setNetworkEnabled(t){this.networkEnabled!==t&&(this.networkEnabled=t,this.Me.enqueueAndForget(async()=>{this.started&&await this.Ze()}))}Ze(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",t=>Fr(t).put(new vi(this.clientId,Date.now(),this.networkEnabled,this.inForeground)).next(()=>{if(this.isPrimary)return this.rn(t).next(t=>{t||(this.isPrimary=!1,this.Me.enqueueRetryable(()=>this.We(!1)))})}).next(()=>this.on(t)).next(e=>this.isPrimary&&!e?this.cn(t).next(()=>!1):!!e&&this.an(t).next(()=>!0))).catch(t=>{if(Ci(t))return p("IndexedDbPersistence","Failed to extend owner lease: ",t),this.isPrimary;if(!this.allowTabSynchronization)throw t;return p("IndexedDbPersistence","Releasing owner lease after error during lease refresh",t),!1}).then(t=>{this.isPrimary!==t&&this.Me.enqueueRetryable(()=>this.We(t)),this.isPrimary=t})}rn(t){return Lr(t).get(ai.key).next(t=>ki.resolve(this.un(t)))}hn(t){return Fr(t).delete(this.clientId)}async ln(){if(this.isPrimary&&!this.fn(this.Qe,18e5)){this.Qe=Date.now();const t=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",t=>{const e=Li(t,vi.store);return e.Bt().next(t=>{const n=this.dn(t,18e5),i=t.filter(t=>-1===n.indexOf(t));return ki.forEach(i,t=>e.delete(t.clientId)).next(()=>i)})}).catch(()=>[]);if(this.Xe)for(const e of t)this.Xe.removeItem(this.wn(e.clientId))}}nn(){this.je=this.Me.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.Ze().then(()=>this.ln()).then(()=>this.nn()))}un(t){return!!t&&t.ownerId===this.clientId}on(t){return this.Le?ki.resolve(!0):Lr(t).get(ai.key).next(e=>{if(null!==e&&this.fn(e.leaseTimestampMs,5e3)&&!this._n(e.ownerId)){if(this.un(e)&&this.networkEnabled)return!0;if(!this.un(e)){if(!e.allowTabSynchronization)throw new I(x.FAILED_PRECONDITION,Pr);return!1}}return!(!this.networkEnabled||!this.inForeground)||Fr(t).Bt().next(t=>void 0===this.dn(t,5e3).find(t=>{if(this.clientId!==t.clientId){const e=!this.networkEnabled&&t.networkEnabled,n=!this.inForeground&&t.inForeground,i=this.networkEnabled===t.networkEnabled;if(e||n&&i)return!0}return!1}))}).next(t=>(this.isPrimary!==t&&p("IndexedDbPersistence",`Client ${t?"is":"is not"} eligible for a primary lease.`),t))}async shutdown(){this.Ue=!1,this.mn(),this.je&&(this.je.cancel(),this.je=null),this.gn(),this.yn(),await this.ze.runTransaction("shutdown","readwrite",[ai.store,vi.store],t=>{const e=new Mi(t,N.I);return this.cn(e).next(()=>this.hn(e))}),this.ze.close(),this.pn()}dn(t,e){return t.filter(t=>this.fn(t.updateTimeMs,e)&&!this._n(t.clientId))}Tn(){return this.runTransaction("getActiveClients","readonly",t=>Fr(t).Bt().next(t=>this.dn(t,18e5).map(t=>t.clientId)))}get started(){return this.Ue}getMutationQueue(t){return cr.Xt(t,this.k,this.Jt,this.referenceDelegate)}getTargetCache(){return this.He}getRemoteDocumentCache(){return this.Je}getIndexManager(){return this.Jt}getBundleCache(){return this.Ye}runTransaction(t,e,n){p("IndexedDbPersistence","Starting transaction:",t);const i="readonly"===e?"readonly":"readwrite";let r;return this.ze.runTransaction(t,i,xi,i=>(r=new Mi(i,this.Be?this.Be.next():N.I),"readwrite-primary"===e?this.rn(r).next(t=>!!t||this.on(r)).next(e=>{if(!e)throw g(`Failed to obtain primary lease for action '${t}'.`),this.isPrimary=!1,this.Me.enqueueRetryable(()=>this.We(!1)),new I(x.FAILED_PRECONDITION,Ii);return n(r)}).next(t=>this.an(r).next(()=>t)):this.En(r).next(()=>n(r)))).then(t=>(r.raiseOnCommittedEvent(),t))}En(t){return Lr(t).get(ai.key).next(t=>{if(null!==t&&this.fn(t.leaseTimestampMs,5e3)&&!this._n(t.ownerId)&&!this.un(t)&&!(this.Le||this.allowTabSynchronization&&t.allowTabSynchronization))throw new I(x.FAILED_PRECONDITION,Pr)})}an(t){const e=new ai(this.clientId,this.allowTabSynchronization,Date.now());return Lr(t).put(ai.key,e)}static Pt(){return Si.Pt()}cn(t){const e=Lr(t);return e.get(ai.key).next(t=>this.un(t)?(p("IndexedDbPersistence","Releasing primary lease."),e.delete(ai.key)):ki.resolve())}fn(t,e){const n=Date.now();return!(t<n-e)&&(!(t>n)||(g(`Detected an update time that is in the future: ${t} > ${n}`),!1))}tn(){null!==this.document&&"function"==typeof this.document.addEventListener&&(this.Ke=()=>{this.Me.enqueueAndForget(()=>(this.inForeground="visible"===this.document.visibilityState,this.Ze()))},this.document.addEventListener("visibilitychange",this.Ke),this.inForeground="visible"===this.document.visibilityState)}gn(){this.Ke&&(this.document.removeEventListener("visibilitychange",this.Ke),this.Ke=null)}en(){var t;"function"==typeof(null===(t=this.window)||void 0===t?void 0:t.addEventListener)&&(this.qe=()=>{this.mn(),Object(o["v"])()&&navigator.appVersion.match(/Version\/1[45]/)&&this.Me.enterRestrictedMode(!0),this.Me.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.qe))}yn(){this.qe&&(this.window.removeEventListener("pagehide",this.qe),this.qe=null)}_n(t){var e;try{const n=null!==(null===(e=this.Xe)||void 0===e?void 0:e.getItem(this.wn(t)));return p("IndexedDbPersistence",`Client '${t}' ${n?"is":"is not"} zombied in LocalStorage`),n}catch(t){return g("IndexedDbPersistence","Failed to get zombied client id.",t),!1}}mn(){if(this.Xe)try{this.Xe.setItem(this.wn(this.clientId),String(Date.now()))}catch(t){g("Failed to set zombie client id.",t)}}pn(){if(this.Xe)try{this.Xe.removeItem(this.wn(this.clientId))}catch(t){}}wn(t){return`firestore_zombie_${this.persistenceKey}_${t}`}}function Lr(t){return Li(t,ai.store)}function Fr(t){return Li(t,vi.store)}function jr(t,e){let n=t.projectId;return t.isDefaultDatabase||(n+="."+t.database),"firestore/"+e+"/"+n+"/"
/**
 * @license
 * Copyright 2020 Google LLC
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
 */}class Ur{constructor(t,e){this.progress=t,this.In=e}}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Vr{constructor(t,e,n){this.Je=t,this.An=e,this.Jt=n}Rn(t,e){return this.An.getAllMutationBatchesAffectingDocumentKey(t,e).next(n=>this.bn(t,e,n))}bn(t,e,n){return this.Je.getEntry(t,e).next(t=>{for(const e of n)e.applyToLocalView(t);return t})}Pn(t,e){t.forEach((t,n)=>{for(const i of e)i.applyToLocalView(n)})}vn(t,e){return this.Je.getEntries(t,e).next(e=>this.Vn(t,e).next(()=>e))}Vn(t,e){return this.An.getAllMutationBatchesAffectingDocumentKeys(t,e).next(t=>this.Pn(e,t))}getDocumentsMatchingQuery(t,e,n){return function(t){return at.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.Sn(t,e.path):te(e)?this.Dn(t,e,n):this.Cn(t,e,n)}Sn(t,e){return this.Rn(t,new at(e)).next(t=>{let e=nn();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e})}Dn(t,e,n){const i=e.collectionGroup;let r=nn();return this.Jt.getCollectionParents(t,i).next(s=>ki.forEach(s,s=>{const o=function(t,e){return new Kt(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,s.child(i));return this.Cn(t,o,n).next(t=>{t.forEach((t,e)=>{r=r.insert(t,e)})})}).next(()=>r))}Cn(t,e,n){let i,r;return this.Je.getDocumentsMatchingQuery(t,e,n).next(n=>(i=n,this.An.getAllMutationBatchesAffectingQuery(t,e))).next(e=>(r=e,this.Nn(t,r,i).next(t=>{i=t;for(const e of r)for(const t of e.mutations){const n=t.key;let r=i.get(n);null==r&&(r=Tt.newInvalidDocument(n),i=i.insert(n,r)),De(t,r,e.localWriteTime),r.isFoundDocument()||(i=i.remove(n))}}))).next(()=>(i.forEach((t,n)=>{ae(e,n)||(i=i.remove(t))}),i))}Nn(t,e,n){let i=an();for(const s of e)for(const t of s.mutations)t instanceof Fe&&null===n.get(t.key)&&(i=i.add(t.key));let r=n;return this.Je.getEntries(t,i).next(t=>(t.forEach((t,e)=>{e.isFoundDocument()&&(r=r.insert(t,e))}),r))}}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Br{constructor(t,e,n,i){this.targetId=t,this.fromCache=e,this.kn=n,this.xn=i}static $n(t,e){let n=an(),i=an();for(const r of e.docChanges)switch(r.type){case 0:n=n.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new Br(t,e.fromCache,n,i)}}
/**
 * @license
 * Copyright 2019 Google LLC
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
 */class qr{On(t){this.Mn=t}getDocumentsMatchingQuery(t,e,n,i){return function(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}(e)||n.isEqual(V.min())?this.Fn(t,e):this.Mn.vn(t,i).next(r=>{const o=this.Ln(e,r);return(Qt(e)||Jt(e))&&this.Bn(e.limitType,o,i,n)?this.Fn(t,e):(d()<=s["a"].DEBUG&&p("QueryEngine","Re-using previous result from %s to execute query: %s",n.toString(),oe(e)),this.Mn.getDocumentsMatchingQuery(t,e,n).next(t=>(o.forEach(e=>{t=t.insert(e.key,e)}),t)))})}Ln(t,e){let n=new Je(ce(t));return e.forEach((e,i)=>{ae(t,i)&&(n=n.add(i))}),n}Bn(t,e,n,i){if(n.size!==e.size)return!0;const r="F"===t?e.last():e.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Fn(t,e){return d()<=s["a"].DEBUG&&p("QueryEngine","Using full collection scan to execute query:",oe(e)),this.Mn.getDocumentsMatchingQuery(t,e,V.min())}}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */class zr{constructor(t,e,n,i){this.persistence=t,this.Un=e,this.k=i,this.qn=new Ge(L),this.Kn=new kr(t=>St(t),Ot),this.jn=V.min(),this.An=t.getMutationQueue(n),this.Qn=t.getRemoteDocumentCache(),this.He=t.getTargetCache(),this.Wn=new Vr(this.Qn,this.An,this.persistence.getIndexManager()),this.Ye=t.getBundleCache(),this.Un.On(this.Wn)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.qn))}}function Wr(t,e,n,i){return new zr(t,e,n,i)}async function Hr(t,e){const n=w(t);let i=n.An,r=n.Wn;const s=await n.persistence.runTransaction("Handle user change","readonly",t=>{let s;return n.An.getAllMutationBatches(t).next(o=>(s=o,i=n.persistence.getMutationQueue(e),r=new Vr(n.Qn,i,n.persistence.getIndexManager()),i.getAllMutationBatches(t))).next(e=>{const n=[],i=[];let o=an();for(const t of s){n.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){i.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return r.vn(t,o).next(t=>({Gn:t,removedBatchIds:n,addedBatchIds:i}))})});return n.An=i,n.Wn=r,n.Un.On(n.Wn),s}function $r(t,e){const n=w(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",t=>{const i=e.batch.keys(),r=n.Qn.newChangeBuffer({trackRemovals:!0});return function(t,e,n,i){const r=n.batch,s=r.keys();let o=ki.resolve();return s.forEach(t=>{o=o.next(()=>i.getEntry(e,t)).next(e=>{const s=n.docVersions.get(t);v(null!==s),e.version.compareTo(s)<0&&(r.applyToRemoteDocument(e,n),e.isValidDocument()&&i.addEntry(e,n.commitVersion))})}),o.next(()=>t.An.removeMutationBatch(e,r))}(n,t,e,r).next(()=>r.apply(t)).next(()=>n.An.performConsistencyCheck(t)).next(()=>n.Wn.vn(t,i))})}function Kr(t){const e=w(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.He.getLastRemoteSnapshotVersion(t))}function Gr(t,e){const n=w(t),i=e.snapshotVersion;let r=n.qn;return n.persistence.runTransaction("Apply remote event","readwrite-primary",t=>{const s=n.Qn.newChangeBuffer({trackRemovals:!0});r=n.qn;const o=[];e.targetChanges.forEach((s,a)=>{const c=r.get(a);if(!c)return;o.push(n.He.removeMatchingKeys(t,s.removedDocuments,a).next(()=>n.He.addMatchingKeys(t,s.addedDocuments,a)));let l=c.withSequenceNumber(t.currentSequenceNumber);e.targetMismatches.has(a)?l=l.withResumeToken(Q.EMPTY_BYTE_STRING,V.min()).withLastLimboFreeSnapshotVersion(V.min()):s.resumeToken.approximateByteSize()>0&&(l=l.withResumeToken(s.resumeToken,i)),r=r.insert(a,l),function(t,e,n){return 0===t.resumeToken.approximateByteSize()||(e.snapshotVersion.toMicroseconds()-t.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(c,l,s)&&o.push(n.He.updateTargetData(t,l))});let a=tn();if(e.documentUpdates.forEach((i,r)=>{e.resolvedLimboDocuments.has(i)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,i))}),o.push(Yr(t,s,e.documentUpdates,i,void 0).next(t=>{a=t})),!i.isEqual(V.min())){const e=n.He.getLastRemoteSnapshotVersion(t).next(e=>n.He.setTargetsMetadata(t,t.currentSequenceNumber,i));o.push(e)}return ki.waitFor(o).next(()=>s.apply(t)).next(()=>n.Wn.Vn(t,a)).next(()=>a)}).then(t=>(n.qn=r,t))}function Yr(t,e,n,i,r){let s=an();return n.forEach(t=>s=s.add(t)),e.getEntries(t,s).next(t=>{let s=tn();return n.forEach((n,o)=>{const a=t.get(n),c=(null==r?void 0:r.get(n))||i;o.isNoDocument()&&o.version.isEqual(V.min())?(e.removeEntry(n,c),s=s.insert(n,o)):!a.isValidDocument()||o.version.compareTo(a.version)>0||0===o.version.compareTo(a.version)&&a.hasPendingWrites?(e.addEntry(o,c),s=s.insert(n,o)):p("LocalStore","Ignoring outdated watch update for ",n,". Current version:",a.version," Watch version:",o.version)}),s})}function Qr(t,e){const n=w(t);return n.persistence.runTransaction("Get next mutation batch","readonly",t=>(void 0===e&&(e=-1),n.An.getNextMutationBatchAfterBatchId(t,e)))}function Jr(t,e){const n=w(t);return n.persistence.runTransaction("Allocate target","readwrite",t=>{let i;return n.He.getTargetData(t,e).next(r=>r?(i=r,ki.resolve(i)):n.He.allocateTargetId(t).next(r=>(i=new Ui(e,r,0,t.currentSequenceNumber),n.He.addTargetData(t,i).next(()=>i))))}).then(t=>{const i=n.qn.get(t.targetId);return(null===i||t.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.qn=n.qn.insert(t.targetId,t),n.Kn.set(e,t.targetId)),t})}async function Xr(t,e,n){const i=w(t),r=i.qn.get(e),s=n?"readwrite":"readwrite-primary";try{n||await i.persistence.runTransaction("Release target",s,t=>i.persistence.referenceDelegate.removeTarget(t,r))}catch(t){if(!Ci(t))throw t;p("LocalStore",`Failed to update sequence numbers for target ${e}: ${t}`)}i.qn=i.qn.remove(e),i.Kn.delete(r.target)}function Zr(t,e,n){const i=w(t);let r=V.min(),s=an();return i.persistence.runTransaction("Execute query","readonly",t=>function(t,e,n){const i=w(t),r=i.Kn.get(n);return void 0!==r?ki.resolve(i.qn.get(r)):i.He.getTargetData(e,n)}(i,t,ne(e)).next(e=>{if(e)return r=e.lastLimboFreeSnapshotVersion,i.He.getMatchingKeysForTargetId(t,e.targetId).next(t=>{s=t})}).next(()=>i.Un.getDocumentsMatchingQuery(t,e,n?r:V.min(),n?s:an())).next(t=>({documents:t,zn:s})))}function ts(t,e){const n=w(t),i=w(n.He),r=n.qn.get(e);return r?Promise.resolve(r.target):n.persistence.runTransaction("Get target data","readonly",t=>i.Et(t,e).next(t=>t?t.target:null))}function es(t){const e=w(t);return e.persistence.runTransaction("Get new document changes","readonly",t=>function(t,e,n){const i=w(t);let r=tn(),s=zi(n);const o=Cr(e),a=IDBKeyRange.lowerBound(s,!0);return o.jt({index:fi.readTimeIndex,range:a},(t,e)=>{const n=Bi(i.k,e);r=r.insert(n.key,n),s=e.readTime}).next(()=>({In:r,readTime:Wi(s)}))}(e.Qn,t,e.jn)).then(({In:t,readTime:n})=>(e.jn=n,t))}async function ns(t){const e=w(t);return e.persistence.runTransaction("Synchronize last document change read time","readonly",t=>function(t){const e=Cr(t);let n=V.min();return e.jt({index:fi.readTimeIndex,reverse:!0},(t,e,i)=>{e.readTime&&(n=Wi(e.readTime)),i.done()}).next(()=>n)}(t)).then(t=>{e.jn=t})}async function is(t,e,n,i){const r=w(t);let s=an(),o=tn(),a=sn();for(const u of n){const t=e.Hn(u.metadata.name);u.document&&(s=s.add(t)),o=o.insert(t,e.Jn(u)),a=a.insert(t,e.Yn(u.metadata.readTime))}const c=r.Qn.newChangeBuffer({trackRemovals:!0}),l=await Jr(r,function(t){return ne(Yt(H.fromString("__bundle__/docs/"+t)))}(i));return r.persistence.runTransaction("Apply bundle documents","readwrite",t=>Yr(t,c,o,V.min(),a).next(e=>(c.apply(t),e)).next(e=>r.He.removeMatchingKeysForTargetId(t,l.targetId).next(()=>r.He.addMatchingKeys(t,s,l.targetId)).next(()=>r.Wn.Vn(t,e)).next(()=>e)))}async function rs(t,e,n=an()){const i=await Jr(t,ne(Qi(e.bundledQuery))),r=w(t);return r.persistence.runTransaction("Save named query","readwrite",t=>{const s=kn(e.readTime);if(i.snapshotVersion.compareTo(s)>=0)return r.Ye.saveNamedQuery(t,e);const o=i.withResumeToken(Q.EMPTY_BYTE_STRING,s);return r.qn=r.qn.insert(o.targetId,o),r.He.updateTargetData(t,o).next(()=>r.He.removeMatchingKeysForTargetId(t,i.targetId)).next(()=>r.He.addMatchingKeys(t,n,i.targetId)).next(()=>r.Ye.saveNamedQuery(t,e))})}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */class ss{constructor(t){this.k=t,this.Xn=new Map,this.Zn=new Map}getBundleMetadata(t,e){return ki.resolve(this.Xn.get(e))}saveBundleMetadata(t,e){var n;return this.Xn.set(e.id,{id:(n=e).id,version:n.version,createTime:kn(n.createTime)}),ki.resolve()}getNamedQuery(t,e){return ki.resolve(this.Zn.get(e))}saveNamedQuery(t,e){return this.Zn.set(e.name,function(t){return{name:t.name,query:Qi(t.bundledQuery),readTime:kn(t.readTime)}}(e)),ki.resolve()}}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */class os{constructor(){this.ts=new Je(as.es),this.ns=new Je(as.ss)}isEmpty(){return this.ts.isEmpty()}addReference(t,e){const n=new as(t,e);this.ts=this.ts.add(n),this.ns=this.ns.add(n)}rs(t,e){t.forEach(t=>this.addReference(t,e))}removeReference(t,e){this.os(new as(t,e))}cs(t,e){t.forEach(t=>this.removeReference(t,e))}us(t){const e=new at(new H([])),n=new as(e,t),i=new as(e,t+1),r=[];return this.ns.forEachInRange([n,i],t=>{this.os(t),r.push(t.key)}),r}hs(){this.ts.forEach(t=>this.os(t))}os(t){this.ts=this.ts.delete(t),this.ns=this.ns.delete(t)}ls(t){const e=new at(new H([])),n=new as(e,t),i=new as(e,t+1);let r=an();return this.ns.forEachInRange([n,i],t=>{r=r.add(t.key)}),r}containsKey(t){const e=new as(t,0),n=this.ts.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class as{constructor(t,e){this.key=t,this.fs=e}static es(t,e){return at.comparator(t.key,e.key)||L(t.fs,e.fs)}static ss(t,e){return L(t.fs,e.fs)||at.comparator(t.key,e.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */class cs{constructor(t,e){this.Jt=t,this.referenceDelegate=e,this.An=[],this.ds=1,this.ws=new Je(as.es)}checkEmpty(t){return ki.resolve(0===this.An.length)}addMutationBatch(t,e,n,i){const r=this.ds;this.ds++,this.An.length>0&&this.An[this.An.length-1];const s=new Fi(r,e,n,i);this.An.push(s);for(const o of i)this.ws=this.ws.add(new as(o.key,r)),this.Jt.addToCollectionParentIndex(t,o.key.path.popLast());return ki.resolve(s)}lookupMutationBatch(t,e){return ki.resolve(this._s(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,i=this.gs(n),r=i<0?0:i;return ki.resolve(this.An.length>r?this.An[r]:null)}getHighestUnacknowledgedBatchId(){return ki.resolve(0===this.An.length?-1:this.ds-1)}getAllMutationBatches(t){return ki.resolve(this.An.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new as(e,0),i=new as(e,Number.POSITIVE_INFINITY),r=[];return this.ws.forEachInRange([n,i],t=>{const e=this._s(t.fs);r.push(e)}),ki.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new Je(L);return e.forEach(t=>{const e=new as(t,0),i=new as(t,Number.POSITIVE_INFINITY);this.ws.forEachInRange([e,i],t=>{n=n.add(t.fs)})}),ki.resolve(this.ys(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,i=n.length+1;let r=n;at.isDocumentKey(r)||(r=r.child(""));const s=new as(new at(r),0);let o=new Je(L);return this.ws.forEachWhile(t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===i&&(o=o.add(t.fs)),!0)},s),ki.resolve(this.ys(o))}ys(t){const e=[];return t.forEach(t=>{const n=this._s(t);null!==n&&e.push(n)}),e}removeMutationBatch(t,e){v(0===this.ps(e.batchId,"removed")),this.An.shift();let n=this.ws;return ki.forEach(e.mutations,i=>{const r=new as(i.key,e.batchId);return n=n.delete(r),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.ws=n})}ee(t){}containsKey(t,e){const n=new as(e,0),i=this.ws.firstAfterOrEqual(n);return ki.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.An.length,ki.resolve()}ps(t,e){return this.gs(t)}gs(t){return 0===this.An.length?0:t-this.An[0].batchId}_s(t){const e=this.gs(t);return e<0||e>=this.An.length?null:this.An[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */class ls{constructor(t,e){this.Jt=t,this.Ts=e,this.docs=new Ge(at.comparator),this.size=0}addEntry(t,e,n){const i=e.key,r=this.docs.get(i),s=r?r.size:0,o=this.Ts(e);return this.docs=this.docs.insert(i,{document:e.mutableCopy(),size:o,readTime:n}),this.size+=o-s,this.Jt.addToCollectionParentIndex(t,i.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return ki.resolve(n?n.document.mutableCopy():Tt.newInvalidDocument(e))}getEntries(t,e){let n=tn();return e.forEach(t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():Tt.newInvalidDocument(t))}),ki.resolve(n)}getDocumentsMatchingQuery(t,e,n){let i=tn();const r=new at(e.path.child("")),s=this.docs.getIteratorFrom(r);for(;s.hasNext();){const{key:t,value:{document:r,readTime:o}}=s.getNext();if(!e.path.isPrefixOf(t.path))break;o.compareTo(n)<=0||ae(e,r)&&(i=i.insert(r.key,r.mutableCopy()))}return ki.resolve(i)}Es(t,e){return ki.forEach(this.docs,t=>e(t))}newChangeBuffer(t){return new us(this)}getSize(t){return ki.resolve(this.size)}}class us extends Er{constructor(t){super(),this.De=t}applyChanges(t){const e=[];return this.changes.forEach((n,i)=>{i.document.isValidDocument()?e.push(this.De.addEntry(t,i.document,this.getReadTime(n))):this.De.removeEntry(n)}),ki.waitFor(e)}getFromCache(t,e){return this.De.getEntry(t,e)}getAllFromCache(t,e){return this.De.getEntries(t,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */class hs{constructor(t){this.persistence=t,this.Is=new kr(t=>St(t),Ot),this.lastRemoteSnapshotVersion=V.min(),this.highestTargetId=0,this.As=0,this.Rs=new os,this.targetCount=0,this.bs=fr.ie()}forEachTarget(t,e){return this.Is.forEach((t,n)=>e(n)),ki.resolve()}getLastRemoteSnapshotVersion(t){return ki.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return ki.resolve(this.As)}allocateTargetId(t){return this.highestTargetId=this.bs.next(),ki.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.As&&(this.As=e),ki.resolve()}ae(t){this.Is.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.bs=new fr(e),this.highestTargetId=e),t.sequenceNumber>this.As&&(this.As=t.sequenceNumber)}addTargetData(t,e){return this.ae(e),this.targetCount+=1,ki.resolve()}updateTargetData(t,e){return this.ae(e),ki.resolve()}removeTargetData(t,e){return this.Is.delete(e.target),this.Rs.us(e.targetId),this.targetCount-=1,ki.resolve()}removeTargets(t,e,n){let i=0;const r=[];return this.Is.forEach((s,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.Is.delete(s),r.push(this.removeMatchingKeysForTargetId(t,o.targetId)),i++)}),ki.waitFor(r).next(()=>i)}getTargetCount(t){return ki.resolve(this.targetCount)}getTargetData(t,e){const n=this.Is.get(e)||null;return ki.resolve(n)}addMatchingKeys(t,e,n){return this.Rs.rs(e,n),ki.resolve()}removeMatchingKeys(t,e,n){this.Rs.cs(e,n);const i=this.persistence.referenceDelegate,r=[];return i&&e.forEach(e=>{r.push(i.markPotentiallyOrphaned(t,e))}),ki.waitFor(r)}removeMatchingKeysForTargetId(t,e){return this.Rs.us(e),ki.resolve()}getMatchingKeysForTargetId(t,e){const n=this.Rs.ls(e);return ki.resolve(n)}containsKey(t,e){return ki.resolve(this.Rs.containsKey(e))}}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */class ds{constructor(t,e){this.Ps={},this.Be=new N(0),this.Ue=!1,this.Ue=!0,this.referenceDelegate=t(this),this.He=new hs(this),this.Jt=new tr,this.Je=function(t,e){return new ls(t,e)}(this.Jt,t=>this.referenceDelegate.vs(t)),this.k=new Vi(e),this.Ye=new ss(this.k)}start(){return Promise.resolve()}shutdown(){return this.Ue=!1,Promise.resolve()}get started(){return this.Ue}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(){return this.Jt}getMutationQueue(t){let e=this.Ps[t.toKey()];return e||(e=new cs(this.Jt,this.referenceDelegate),this.Ps[t.toKey()]=e),e}getTargetCache(){return this.He}getRemoteDocumentCache(){return this.Je}getBundleCache(){return this.Ye}runTransaction(t,e,n){p("MemoryPersistence","Starting transaction:",t);const i=new fs(this.Be.next());return this.referenceDelegate.Vs(),n(i).next(t=>this.referenceDelegate.Ss(i).next(()=>t)).toPromise().then(t=>(i.raiseOnCommittedEvent(),t))}Ds(t,e){return ki.or(Object.values(this.Ps).map(n=>()=>n.containsKey(t,e)))}}class fs extends Ti{constructor(t){super(),this.currentSequenceNumber=t}}class ps{constructor(t){this.persistence=t,this.Cs=new os,this.Ns=null}static ks(t){return new ps(t)}get xs(){if(this.Ns)return this.Ns;throw b()}addReference(t,e,n){return this.Cs.addReference(n,e),this.xs.delete(n.toString()),ki.resolve()}removeReference(t,e,n){return this.Cs.removeReference(n,e),this.xs.add(n.toString()),ki.resolve()}markPotentiallyOrphaned(t,e){return this.xs.add(e.toString()),ki.resolve()}removeTarget(t,e){this.Cs.us(e.targetId).forEach(t=>this.xs.add(t.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next(t=>{t.forEach(t=>this.xs.add(t.toString()))}).next(()=>n.removeTargetData(t,e))}Vs(){this.Ns=new Set}Ss(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return ki.forEach(this.xs,n=>{const i=at.fromPath(n);return this.$s(t,i).next(t=>{t||e.removeEntry(i)})}).next(()=>(this.Ns=null,e.apply(t)))}updateLimboDocument(t,e){return this.$s(t,e).next(t=>{t?this.xs.delete(e.toString()):this.xs.add(e.toString())})}vs(t){return 0}$s(t,e){return ki.or([()=>ki.resolve(this.Cs.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ds(t,e)])}}
/**
 * @license
 * Copyright 2019 Google LLC
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
 */function gs(t,e){return`firestore_clients_${t}_${e}`}function ms(t,e,n){let i=`firestore_mutations_${t}_${n}`;return e.isAuthenticated()&&(i+="_"+e.uid),i}function ys(t,e){return`firestore_targets_${t}_${e}`}class bs{constructor(t,e,n,i){this.user=t,this.batchId=e,this.state=n,this.error=i}static Os(t,e,n){const i=JSON.parse(n);let r,s="object"==typeof i&&-1!==["pending","acknowledged","rejected"].indexOf(i.state)&&(void 0===i.error||"object"==typeof i.error);return s&&i.error&&(s="string"==typeof i.error.message&&"string"==typeof i.error.code,s&&(r=new I(i.error.code,i.error.message))),s?new bs(t,e,i.state,r):(g("SharedClientState",`Failed to parse mutation state for ID '${e}': ${n}`),null)}Ms(){const t={state:this.state,updateTimeMs:Date.now()};return this.error&&(t.error={code:this.error.code,message:this.error.message}),JSON.stringify(t)}}class vs{constructor(t,e,n){this.targetId=t,this.state=e,this.error=n}static Os(t,e){const n=JSON.parse(e);let i,r="object"==typeof n&&-1!==["not-current","current","rejected"].indexOf(n.state)&&(void 0===n.error||"object"==typeof n.error);return r&&n.error&&(r="string"==typeof n.error.message&&"string"==typeof n.error.code,r&&(i=new I(n.error.code,n.error.message))),r?new vs(t,n.state,i):(g("SharedClientState",`Failed to parse target state for ID '${t}': ${e}`),null)}Ms(){const t={state:this.state,updateTimeMs:Date.now()};return this.error&&(t.error={code:this.error.code,message:this.error.message}),JSON.stringify(t)}}class _s{constructor(t,e){this.clientId=t,this.activeTargetIds=e}static Os(t,e){const n=JSON.parse(e);let i="object"==typeof n&&n.activeTargetIds instanceof Array,r=ln();for(let s=0;i&&s<n.activeTargetIds.length;++s)i=ot(n.activeTargetIds[s]),r=r.add(n.activeTargetIds[s]);return i?new _s(t,r):(g("SharedClientState",`Failed to parse client data for instance '${t}': ${e}`),null)}}class ws{constructor(t,e){this.clientId=t,this.onlineState=e}static Os(t){const e=JSON.parse(t);return"object"==typeof e&&-1!==["Unknown","Online","Offline"].indexOf(e.onlineState)&&"string"==typeof e.clientId?new ws(e.clientId,e.onlineState):(g("SharedClientState","Failed to parse online state: "+t),null)}}class xs{constructor(){this.activeTargetIds=ln()}Fs(t){this.activeTargetIds=this.activeTargetIds.add(t)}Ls(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Ms(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Is{constructor(t,e,n,i,r){this.window=t,this.Me=e,this.persistenceKey=n,this.Bs=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.Us=this.qs.bind(this),this.Ks=new Ge(L),this.started=!1,this.js=[];const s=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=r,this.Qs=gs(this.persistenceKey,this.Bs),this.Ws=function(t){return"firestore_sequence_number_"+t}
/**
 * @license
 * Copyright 2018 Google LLC
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
 */(this.persistenceKey),this.Ks=this.Ks.insert(this.Bs,new xs),this.Gs=new RegExp(`^firestore_clients_${s}_([^_]*)$`),this.zs=new RegExp(`^firestore_mutations_${s}_(\\d+)(?:_(.*))?$`),this.Hs=new RegExp(`^firestore_targets_${s}_(\\d+)$`),this.Js=function(t){return"firestore_online_state_"+t}(this.persistenceKey),this.Ys=function(t){return"firestore_bundle_loaded_"+t}(this.persistenceKey),this.window.addEventListener("storage",this.Us)}static Pt(t){return!(!t||!t.localStorage)}async start(){const t=await this.syncEngine.Tn();for(const n of t){if(n===this.Bs)continue;const t=this.getItem(gs(this.persistenceKey,n));if(t){const e=_s.Os(n,t);e&&(this.Ks=this.Ks.insert(e.clientId,e))}}this.Xs();const e=this.storage.getItem(this.Js);if(e){const t=this.Zs(e);t&&this.ti(t)}for(const n of this.js)this.qs(n);this.js=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(t){this.setItem(this.Ws,JSON.stringify(t))}getAllActiveQueryTargets(){return this.ei(this.Ks)}isActiveQueryTarget(t){let e=!1;return this.Ks.forEach((n,i)=>{i.activeTargetIds.has(t)&&(e=!0)}),e}addPendingMutation(t){this.ni(t,"pending")}updateMutationState(t,e,n){this.ni(t,e,n),this.si(t)}addLocalQueryTarget(t){let e="not-current";if(this.isActiveQueryTarget(t)){const n=this.storage.getItem(ys(this.persistenceKey,t));if(n){const i=vs.Os(t,n);i&&(e=i.state)}}return this.ii.Fs(t),this.Xs(),e}removeLocalQueryTarget(t){this.ii.Ls(t),this.Xs()}isLocalQueryTarget(t){return this.ii.activeTargetIds.has(t)}clearQueryState(t){this.removeItem(ys(this.persistenceKey,t))}updateQueryState(t,e,n){this.ri(t,e,n)}handleUserChange(t,e,n){e.forEach(t=>{this.si(t)}),this.currentUser=t,n.forEach(t=>{this.addPendingMutation(t)})}setOnlineState(t){this.oi(t)}notifyBundleLoaded(){this.ci()}shutdown(){this.started&&(this.window.removeEventListener("storage",this.Us),this.removeItem(this.Qs),this.started=!1)}getItem(t){const e=this.storage.getItem(t);return p("SharedClientState","READ",t,e),e}setItem(t,e){p("SharedClientState","SET",t,e),this.storage.setItem(t,e)}removeItem(t){p("SharedClientState","REMOVE",t),this.storage.removeItem(t)}qs(t){const e=t;if(e.storageArea===this.storage){if(p("SharedClientState","EVENT",e.key,e.newValue),e.key===this.Qs)return void g("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Me.enqueueRetryable(async()=>{if(this.started){if(null!==e.key)if(this.Gs.test(e.key)){if(null==e.newValue){const t=this.ai(e.key);return this.ui(t,null)}{const t=this.hi(e.key,e.newValue);if(t)return this.ui(t.clientId,t)}}else if(this.zs.test(e.key)){if(null!==e.newValue){const t=this.li(e.key,e.newValue);if(t)return this.fi(t)}}else if(this.Hs.test(e.key)){if(null!==e.newValue){const t=this.di(e.key,e.newValue);if(t)return this.wi(t)}}else if(e.key===this.Js){if(null!==e.newValue){const t=this.Zs(e.newValue);if(t)return this.ti(t)}}else if(e.key===this.Ws){const t=function(t){let e=N.I;if(null!=t)try{const n=JSON.parse(t);v("number"==typeof n),e=n}catch(t){g("SharedClientState","Failed to read sequence number from WebStorage",t)}return e}(e.newValue);t!==N.I&&this.sequenceNumberHandler(t)}else if(e.key===this.Ys)return this.syncEngine._i()}else this.js.push(e)})}}get ii(){return this.Ks.get(this.Bs)}Xs(){this.setItem(this.Qs,this.ii.Ms())}ni(t,e,n){const i=new bs(this.currentUser,t,e,n),r=ms(this.persistenceKey,this.currentUser,t);this.setItem(r,i.Ms())}si(t){const e=ms(this.persistenceKey,this.currentUser,t);this.removeItem(e)}oi(t){const e={clientId:this.Bs,onlineState:t};this.storage.setItem(this.Js,JSON.stringify(e))}ri(t,e,n){const i=ys(this.persistenceKey,t),r=new vs(t,e,n);this.setItem(i,r.Ms())}ci(){this.setItem(this.Ys,"value-not-used")}ai(t){const e=this.Gs.exec(t);return e?e[1]:null}hi(t,e){const n=this.ai(t);return _s.Os(n,e)}li(t,e){const n=this.zs.exec(t),i=Number(n[1]),r=void 0!==n[2]?n[2]:null;return bs.Os(new l(r),i,e)}di(t,e){const n=this.Hs.exec(t),i=Number(n[1]);return vs.Os(i,e)}Zs(t){return ws.Os(t)}async fi(t){if(t.user.uid===this.currentUser.uid)return this.syncEngine.mi(t.batchId,t.state,t.error);p("SharedClientState","Ignoring mutation for non-active user "+t.user.uid)}wi(t){return this.syncEngine.gi(t.targetId,t.state,t.error)}ui(t,e){const n=e?this.Ks.insert(t,e):this.Ks.remove(t),i=this.ei(this.Ks),r=this.ei(n),s=[],o=[];return r.forEach(t=>{i.has(t)||s.push(t)}),i.forEach(t=>{r.has(t)||o.push(t)}),this.syncEngine.yi(s,o).then(()=>{this.Ks=n})}ti(t){this.Ks.get(t.clientId)&&this.onlineStateHandler(t.onlineState)}ei(t){let e=ln();return t.forEach((t,n)=>{e=e.unionWith(n.activeTargetIds)}),e}}class Ts{constructor(){this.pi=new xs,this.Ti={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.pi.Fs(t),this.Ti[t]||"not-current"}updateQueryState(t,e,n){this.Ti[t]=e}removeLocalQueryTarget(t){this.pi.Ls(t)}isLocalQueryTarget(t){return this.pi.activeTargetIds.has(t)}clearQueryState(t){delete this.Ti[t]}getAllActiveQueryTargets(){return this.pi.activeTargetIds}isActiveQueryTarget(t){return this.pi.activeTargetIds.has(t)}start(){return this.pi=new xs,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(){}}
/**
 * @license
 * Copyright 2019 Google LLC
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
 */class ks{Ei(t){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
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
 */class Es{constructor(){this.Ii=()=>this.Ai(),this.Ri=()=>this.bi(),this.Pi=[],this.vi()}Ei(t){this.Pi.push(t)}shutdown(){window.removeEventListener("online",this.Ii),window.removeEventListener("offline",this.Ri)}vi(){window.addEventListener("online",this.Ii),window.addEventListener("offline",this.Ri)}Ai(){p("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.Pi)t(0)}bi(){p("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.Pi)t(1)}static Pt(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */const Ss={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
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
 */class As{constructor(t){this.Vi=t.Vi,this.Si=t.Si}Di(t){this.Ci=t}Ni(t){this.ki=t}onMessage(t){this.xi=t}close(){this.Si()}send(t){this.Vi(t)}$i(){this.Ci()}Oi(t){this.ki(t)}Mi(t){this.xi(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Os extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.Fi=e+"://"+t.host,this.Li="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}Bi(t,e,n,i,r){const s=this.Ui(t,e);p("RestConnection","Sending: ",s,n);const o={};return this.qi(o,i,r),this.Ki(t,s,o,n).then(t=>(p("RestConnection","Received: ",t),t),e=>{throw m("RestConnection",t+" failed with error: ",e,"url: ",s,"request:",n),e})}ji(t,e,n,i,r){return this.Bi(t,e,n,i,r)}qi(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+u,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach((e,n)=>t[n]=e),n&&n.headers.forEach((e,n)=>t[n]=e)}Ui(t,e){const n=Ss[t];return`${this.Fi}/v1/${e}:${n}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}Ki(t,e,n,i){return new Promise((r,s)=>{const o=new a["g"];o.listenOnce(a["c"].COMPLETE,()=>{try{switch(o.getLastErrorCode()){case a["a"].NO_ERROR:const e=o.getResponseJson();p("Connection","XHR received:",JSON.stringify(e)),r(e);break;case a["a"].TIMEOUT:p("Connection",'RPC "'+t+'" timed out'),s(new I(x.DEADLINE_EXCEEDED,"Request time out"));break;case a["a"].HTTP_ERROR:const n=o.getStatus();if(p("Connection",'RPC "'+t+'" failed with status:',n,"response text:",o.getResponseText()),n>0){const t=o.getResponseJson().error;if(t&&t.status&&t.message){const e=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(x).indexOf(e)>=0?e:x.UNKNOWN}(t.status);s(new I(e,t.message))}else s(new I(x.UNKNOWN,"Server responded with status "+o.getStatus()))}else s(new I(x.UNAVAILABLE,"Connection failed."));break;default:b()}}finally{p("Connection",'RPC "'+t+'" completed.')}});const c=JSON.stringify(i);o.send(e,"POST",c,n,15)})}Qi(t,e,n){const i=[this.Fi,"/","google.firestore.v1.Firestore","/",t,"/channel"],r=Object(a["h"])(),s=Object(a["i"])(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(c.xmlHttpFactory=new a["d"]({})),this.qi(c.initMessageHeaders,e,n),Object(o["s"])()||Object(o["u"])()||Object(o["o"])()||Object(o["q"])()||Object(o["w"])()||Object(o["n"])()||(c.httpHeadersOverwriteParam="$httpHeaders");const l=i.join("");p("Connection","Creating WebChannel: "+l,c);const u=r.createWebChannel(l,c);let h=!1,d=!1;const f=new As({Vi:t=>{d?p("Connection","Not sending because WebChannel is closed:",t):(h||(p("Connection","Opening WebChannel transport."),u.open(),h=!0),p("Connection","WebChannel sending:",t),u.send(t))},Si:()=>u.close()}),g=(t,e,n)=>{t.listen(e,t=>{try{n(t)}catch(t){setTimeout(()=>{throw t},0)}})};return g(u,a["f"].EventType.OPEN,()=>{d||p("Connection","WebChannel transport opened.")}),g(u,a["f"].EventType.CLOSE,()=>{d||(d=!0,p("Connection","WebChannel transport closed"),f.Oi())}),g(u,a["f"].EventType.ERROR,t=>{d||(d=!0,m("Connection","WebChannel transport errored:",t),f.Oi(new I(x.UNAVAILABLE,"The operation could not be completed")))}),g(u,a["f"].EventType.MESSAGE,t=>{var e;if(!d){const n=t.data[0];v(!!n);const i=n,r=i.error||(null===(e=i[0])||void 0===e?void 0:e.error);if(r){p("Connection","WebChannel received error:",r);const t=r.status;let e=function(t){const e=We[t];if(void 0!==e)return Ke(e)}(t),n=r.message;void 0===e&&(e=x.INTERNAL,n="Unknown error status: "+t+" with message "+r.message),d=!0,f.Oi(new I(e,n)),u.close()}else p("Connection","WebChannel received:",n),f.Mi(n)}}),g(s,a["b"].STAT_EVENT,t=>{t.stat===a["e"].PROXY?p("Connection","Detected buffering proxy"):t.stat===a["e"].NOPROXY&&p("Connection","Detected no buffering proxy")}),setTimeout(()=>{f.$i()},0),f}}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */
/**
 * @license
 * Copyright 2020 Google LLC
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
 */function Cs(){return"undefined"!=typeof window?window:null}function Rs(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */function Ds(t){return new wn(t,!0)}class Ns{constructor(t,e,n=1e3,i=1.5,r=6e4){this.Me=t,this.timerId=e,this.Wi=n,this.Gi=i,this.zi=r,this.Hi=0,this.Ji=null,this.Yi=Date.now(),this.reset()}reset(){this.Hi=0}Xi(){this.Hi=this.zi}Zi(t){this.cancel();const e=Math.floor(this.Hi+this.tr()),n=Math.max(0,Date.now()-this.Yi),i=Math.max(0,e-n);i>0&&p("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Hi} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.Ji=this.Me.enqueueAfterDelay(this.timerId,i,()=>(this.Yi=Date.now(),t())),this.Hi*=this.Gi,this.Hi<this.Wi&&(this.Hi=this.Wi),this.Hi>this.zi&&(this.Hi=this.zi)}er(){null!==this.Ji&&(this.Ji.skipDelay(),this.Ji=null)}cancel(){null!==this.Ji&&(this.Ji.cancel(),this.Ji=null)}tr(){return(Math.random()-.5)*this.Hi}}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Ps{constructor(t,e,n,i,r,s,o,a){this.Me=t,this.nr=n,this.sr=i,this.ir=r,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.rr=0,this.cr=null,this.ar=null,this.stream=null,this.ur=new Ns(t,e)}hr(){return 1===this.state||5===this.state||this.lr()}lr(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.dr()}async stop(){this.hr()&&await this.close(0)}wr(){this.state=0,this.ur.reset()}_r(){this.lr()&&null===this.cr&&(this.cr=this.Me.enqueueAfterDelay(this.nr,6e4,()=>this.mr()))}gr(t){this.yr(),this.stream.send(t)}async mr(){if(this.lr())return this.close(0)}yr(){this.cr&&(this.cr.cancel(),this.cr=null)}pr(){this.ar&&(this.ar.cancel(),this.ar=null)}async close(t,e){this.yr(),this.pr(),this.ur.cancel(),this.rr++,4!==t?this.ur.reset():e&&e.code===x.RESOURCE_EXHAUSTED?(g(e.toString()),g("Using maximum backoff delay to prevent overloading the backend."),this.ur.Xi()):e&&e.code===x.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Tr(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Ni(e)}Tr(){}auth(){this.state=1;const t=this.Er(this.rr),e=this.rr;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([t,n])=>{this.rr===e&&this.Ir(t,n)},e=>{t(()=>{const t=new I(x.UNKNOWN,"Fetching auth token failed: "+e.message);return this.Ar(t)})})}Ir(t,e){const n=this.Er(this.rr);this.stream=this.Rr(t,e),this.stream.Di(()=>{n(()=>(this.state=2,this.ar=this.Me.enqueueAfterDelay(this.sr,1e4,()=>(this.lr()&&(this.state=3),Promise.resolve())),this.listener.Di()))}),this.stream.Ni(t=>{n(()=>this.Ar(t))}),this.stream.onMessage(t=>{n(()=>this.onMessage(t))})}dr(){this.state=5,this.ur.Zi(async()=>{this.state=0,this.start()})}Ar(t){return p("PersistentStream","close with error: "+t),this.stream=null,this.close(4,t)}Er(t){return e=>{this.Me.enqueueAndForget(()=>this.rr===t?e():(p("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Ms extends Ps{constructor(t,e,n,i,r,s){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,i,s),this.k=r}Rr(t,e){return this.ir.Qi("Listen",t,e)}onMessage(t){this.ur.reset();const e=Fn(this.k,t),n=function(t){if(!("targetChange"in t))return V.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?V.min():e.readTime?kn(e.readTime):V.min()}(t);return this.listener.br(e,n)}Pr(t){const e={};e.database=Dn(this.k),e.addTarget=function(t,e){let n;const i=e.target;return n=Ct(i)?{documents:Bn(t,i)}:{query:qn(t,i)},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0?n.resumeToken=In(t,e.resumeToken):e.snapshotVersion.compareTo(V.min())>0&&(n.readTime=xn(t,e.snapshotVersion.toTimestamp())),n}(this.k,t);const n=Wn(this.k,t);n&&(e.labels=n),this.gr(e)}vr(t){const e={};e.database=Dn(this.k),e.removeTarget=t,this.gr(e)}}class Ls extends Ps{constructor(t,e,n,i,r,s){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,i,s),this.k=r,this.Vr=!1}get Sr(){return this.Vr}start(){this.Vr=!1,this.lastStreamToken=void 0,super.start()}Tr(){this.Vr&&this.Dr([])}Rr(t,e){return this.ir.Qi("Write",t,e)}onMessage(t){if(v(!!t.streamToken),this.lastStreamToken=t.streamToken,this.Vr){this.ur.reset();const e=Vn(t.writeResults,t.commitTime),n=kn(t.commitTime);return this.listener.Cr(n,e)}return v(!t.writeResults||0===t.writeResults.length),this.Vr=!0,this.listener.Nr()}kr(){const t={};t.database=Dn(this.k),this.gr(t)}Dr(t){const e={streamToken:this.lastStreamToken,writes:t.map(t=>jn(this.k,t))};this.gr(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Fs extends class{}{constructor(t,e,n,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.ir=n,this.k=i,this.$r=!1}Or(){if(this.$r)throw new I(x.FAILED_PRECONDITION,"The client has already been terminated.")}Bi(t,e,n){return this.Or(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.ir.Bi(t,e,n,i,r)).catch(t=>{throw"FirebaseError"===t.name?(t.code===x.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new I(x.UNKNOWN,t.toString())})}ji(t,e,n){return this.Or(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.ir.ji(t,e,n,i,r)).catch(t=>{throw"FirebaseError"===t.name?(t.code===x.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new I(x.UNKNOWN,t.toString())})}terminate(){this.$r=!0}}class js{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.Mr=0,this.Fr=null,this.Lr=!0}Br(){0===this.Mr&&(this.Ur("Unknown"),this.Fr=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.Fr=null,this.qr("Backend didn't respond within 10 seconds."),this.Ur("Offline"),Promise.resolve())))}Kr(t){"Online"===this.state?this.Ur("Unknown"):(this.Mr++,this.Mr>=1&&(this.jr(),this.qr("Connection failed 1 times. Most recent error: "+t.toString()),this.Ur("Offline")))}set(t){this.jr(),this.Mr=0,"Online"===t&&(this.Lr=!1),this.Ur(t)}Ur(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}qr(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Lr?(g(e),this.Lr=!1):p("OnlineStateTracker",e)}jr(){null!==this.Fr&&(this.Fr.cancel(),this.Fr=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Us{constructor(t,e,n,i,r){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.Qr=[],this.Wr=new Map,this.Gr=new Set,this.zr=[],this.Hr=r,this.Hr.Ei(t=>{n.enqueueAndForget(async()=>{Gs(this)&&(p("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=w(t);e.Gr.add(4),await Bs(e),e.Jr.set("Unknown"),e.Gr.delete(4),await Vs(e)}(this))})}),this.Jr=new js(n,i)}}async function Vs(t){if(Gs(t))for(const e of t.zr)await e(!0)}async function Bs(t){for(const e of t.zr)await e(!1)}function qs(t,e){const n=w(t);n.Wr.has(e.targetId)||(n.Wr.set(e.targetId,e),Ks(n)?$s(n):ho(n).lr()&&Ws(n,e))}function zs(t,e){const n=w(t),i=ho(n);n.Wr.delete(e),i.lr()&&Hs(n,e),0===n.Wr.size&&(i.lr()?i._r():Gs(n)&&n.Jr.set("Unknown"))}function Ws(t,e){t.Yr.X(e.targetId),ho(t).Pr(e)}function Hs(t,e){t.Yr.X(e),ho(t).vr(e)}function $s(t){t.Yr=new mn({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>t.Wr.get(e)||null}),ho(t).start(),t.Jr.Br()}function Ks(t){return Gs(t)&&!ho(t).hr()&&t.Wr.size>0}function Gs(t){return 0===w(t).Gr.size}function Ys(t){t.Yr=void 0}async function Qs(t){t.Wr.forEach((e,n)=>{Ws(t,e)})}async function Js(t,e){Ys(t),Ks(t)?(t.Jr.Kr(e),$s(t)):t.Jr.set("Unknown")}async function Xs(t,e,n){if(t.Jr.set("Online"),e instanceof pn&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const i of e.targetIds)t.Wr.has(i)&&(await t.remoteSyncer.rejectListen(i,n),t.Wr.delete(i),t.Yr.removeTarget(i))}(t,e)}catch(n){p("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await Zs(t,n)}else if(e instanceof dn?t.Yr.ot(e):e instanceof fn?t.Yr.dt(e):t.Yr.ut(e),!n.isEqual(V.min()))try{const e=await Kr(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.Yr.gt(e);return n.targetChanges.forEach((n,i)=>{if(n.resumeToken.approximateByteSize()>0){const r=t.Wr.get(i);r&&t.Wr.set(i,r.withResumeToken(n.resumeToken,e))}}),n.targetMismatches.forEach(e=>{const n=t.Wr.get(e);if(!n)return;t.Wr.set(e,n.withResumeToken(Q.EMPTY_BYTE_STRING,n.snapshotVersion)),Hs(t,e);const i=new Ui(n.target,e,1,n.sequenceNumber);Ws(t,i)}),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){p("RemoteStore","Failed to raise snapshot:",e),await Zs(t,e)}}async function Zs(t,e,n){if(!Ci(e))throw e;t.Gr.add(1),await Bs(t),t.Jr.set("Offline"),n||(n=()=>Kr(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{p("RemoteStore","Retrying IndexedDB access"),await n(),t.Gr.delete(1),await Vs(t)})}function to(t,e){return e().catch(n=>Zs(t,n,e))}async function eo(t){const e=w(t),n=fo(e);let i=e.Qr.length>0?e.Qr[e.Qr.length-1].batchId:-1;for(;no(e);)try{const t=await Qr(e.localStore,i);if(null===t){0===e.Qr.length&&n._r();break}i=t.batchId,io(e,t)}catch(t){await Zs(e,t)}ro(e)&&so(e)}function no(t){return Gs(t)&&t.Qr.length<10}function io(t,e){t.Qr.push(e);const n=fo(t);n.lr()&&n.Sr&&n.Dr(e.mutations)}function ro(t){return Gs(t)&&!fo(t).hr()&&t.Qr.length>0}function so(t){fo(t).start()}async function oo(t){fo(t).kr()}async function ao(t){const e=fo(t);for(const n of t.Qr)e.Dr(n.mutations)}async function co(t,e,n){const i=t.Qr.shift(),r=ji.from(i,e,n);await to(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await eo(t)}async function lo(t,e){e&&fo(t).Sr&&await async function(t,e){if(n=e.code,$e(n)&&n!==x.ABORTED){const n=t.Qr.shift();fo(t).wr(),await to(t,()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e)),await eo(t)}var n}(t,e),ro(t)&&so(t)}async function uo(t,e){const n=w(t);e?(n.Gr.delete(2),await Vs(n)):e||(n.Gr.add(2),await Bs(n),n.Jr.set("Unknown"))}function ho(t){return t.Xr||(t.Xr=function(t,e,n){const i=w(t);return i.Or(),new Ms(e,i.ir,i.authCredentials,i.appCheckCredentials,i.k,n)
/**
 * @license
 * Copyright 2018 Google LLC
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
 */}(t.datastore,t.asyncQueue,{Di:Qs.bind(null,t),Ni:Js.bind(null,t),br:Xs.bind(null,t)}),t.zr.push(async e=>{e?(t.Xr.wr(),Ks(t)?$s(t):t.Jr.set("Unknown")):(await t.Xr.stop(),Ys(t))})),t.Xr}function fo(t){return t.Zr||(t.Zr=function(t,e,n){const i=w(t);return i.Or(),new Ls(e,i.ir,i.authCredentials,i.appCheckCredentials,i.k,n)}(t.datastore,t.asyncQueue,{Di:oo.bind(null,t),Ni:lo.bind(null,t),Nr:ao.bind(null,t),Cr:co.bind(null,t)}),t.zr.push(async e=>{e?(t.Zr.wr(),await eo(t)):(await t.Zr.stop(),t.Qr.length>0&&(p("RemoteStore",`Stopping write stream with ${t.Qr.length} pending writes`),t.Qr=[]))})),t.Zr
/**
 * @license
 * Copyright 2017 Google LLC
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
 */}class po{constructor(t,e,n,i,r){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=i,this.removalCallback=r,this.deferred=new T,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(t=>{})}static createAndSchedule(t,e,n,i,r){const s=Date.now()+n,o=new po(t,e,s,i,r);return o.start(n),o}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new I(x.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function go(t,e){if(g("AsyncQueue",`${e}: ${t}`),Ci(t))return new I(x.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */class mo{constructor(t){this.comparator=t?(e,n)=>t(e,n)||at.comparator(e.key,n.key):(t,e)=>at.comparator(t.key,e.key),this.keyedMap=nn(),this.sortedSet=new Ge(this.comparator)}static emptySet(t){return new mo(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,n)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof mo))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,i=n.getNext().key;if(!t.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new mo;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */class yo{constructor(){this.eo=new Ge(at.comparator)}track(t){const e=t.doc.key,n=this.eo.get(e);n?0!==t.type&&3===n.type?this.eo=this.eo.insert(e,t):3===t.type&&1!==n.type?this.eo=this.eo.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.eo=this.eo.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.eo=this.eo.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.eo=this.eo.remove(e):1===t.type&&2===n.type?this.eo=this.eo.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.eo=this.eo.insert(e,{type:2,doc:t.doc}):b():this.eo=this.eo.insert(e,t)}no(){const t=[];return this.eo.inorderTraversal((e,n)=>{t.push(n)}),t}}class bo{constructor(t,e,n,i,r,s,o,a){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=i,this.mutatedKeys=r,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a}static fromInitialDocuments(t,e,n,i){const r=[];return e.forEach(t=>{r.push({type:0,doc:t})}),new bo(t,e,mo.emptySet(e),r,n,i,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&re(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let i=0;i<e.length;i++)if(e[i].type!==n[i].type||!e[i].doc.isEqual(n[i].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */class vo{constructor(){this.so=void 0,this.listeners=[]}}class _o{constructor(){this.queries=new kr(t=>se(t),re),this.onlineState="Unknown",this.io=new Set}}async function wo(t,e){const n=w(t),i=e.query;let r=!1,s=n.queries.get(i);if(s||(r=!0,s=new vo),r)try{s.so=await n.onListen(i)}catch(t){const n=go(t,`Initialization of query '${oe(e.query)}' failed`);return void e.onError(n)}n.queries.set(i,s),s.listeners.push(e),e.ro(n.onlineState),s.so&&e.oo(s.so)&&ko(n)}async function xo(t,e){const n=w(t),i=e.query;let r=!1;const s=n.queries.get(i);if(s){const t=s.listeners.indexOf(e);t>=0&&(s.listeners.splice(t,1),r=0===s.listeners.length)}if(r)return n.queries.delete(i),n.onUnlisten(i)}function Io(t,e){const n=w(t);let i=!1;for(const r of e){const t=r.query,e=n.queries.get(t);if(e){for(const t of e.listeners)t.oo(r)&&(i=!0);e.so=r}}i&&ko(n)}function To(t,e,n){const i=w(t),r=i.queries.get(e);if(r)for(const s of r.listeners)s.onError(n);i.queries.delete(e)}function ko(t){t.io.forEach(t=>{t.next()})}class Eo{constructor(t,e,n){this.query=t,this.co=e,this.ao=!1,this.uo=null,this.onlineState="Unknown",this.options=n||{}}oo(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new bo(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0)}let e=!1;return this.ao?this.ho(t)&&(this.co.next(t),e=!0):this.lo(t,this.onlineState)&&(this.fo(t),e=!0),this.uo=t,e}onError(t){this.co.error(t)}ro(t){this.onlineState=t;let e=!1;return this.uo&&!this.ao&&this.lo(this.uo,t)&&(this.fo(this.uo),e=!0),e}lo(t,e){if(!t.fromCache)return!0;const n="Offline"!==e;return(!this.options.wo||!n)&&(!t.docs.isEmpty()||"Offline"===e)}ho(t){if(t.docChanges.length>0)return!0;const e=this.uo&&this.uo.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}fo(t){t=bo.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache),this.ao=!0,this.co.next(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */class So{constructor(t,e){this.payload=t,this.byteLength=e}_o(){return"metadata"in this.payload}}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */class Ao{constructor(t){this.k=t}Hn(t){return On(this.k,t)}Jn(t){return t.metadata.exists?Mn(this.k,t.document,!1):Tt.newNoDocument(this.Hn(t.metadata.name),this.Yn(t.metadata.readTime))}Yn(t){return kn(t)}}class Oo{constructor(t,e,n){this.mo=t,this.localStore=e,this.k=n,this.queries=[],this.documents=[],this.progress=Co(t)}yo(t){this.progress.bytesLoaded+=t.byteLength;let e=this.progress.documentsLoaded;return t.payload.namedQuery?this.queries.push(t.payload.namedQuery):t.payload.documentMetadata?(this.documents.push({metadata:t.payload.documentMetadata}),t.payload.documentMetadata.exists||++e):t.payload.document&&(this.documents[this.documents.length-1].document=t.payload.document,++e),e!==this.progress.documentsLoaded?(this.progress.documentsLoaded=e,Object.assign({},this.progress)):null}po(t){const e=new Map,n=new Ao(this.k);for(const i of t)if(i.metadata.queries){const t=n.Hn(i.metadata.name);for(const n of i.metadata.queries){const i=(e.get(n)||an()).add(t);e.set(n,i)}}return e}async complete(){const t=await is(this.localStore,new Ao(this.k),this.documents,this.mo.id),e=this.po(this.documents);for(const n of this.queries)await rs(this.localStore,n,e.get(n.name));return this.progress.taskState="Success",new Ur(Object.assign({},this.progress),t)}}function Co(t){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:t.totalDocuments,totalBytes:t.totalBytes}}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Ro{constructor(t){this.key=t}}class Do{constructor(t){this.key=t}}class No{constructor(t,e){this.query=t,this.To=e,this.Eo=null,this.current=!1,this.Io=an(),this.mutatedKeys=an(),this.Ao=ce(t),this.Ro=new mo(this.Ao)}get bo(){return this.To}Po(t,e){const n=e?e.vo:new yo,i=e?e.Ro:this.Ro;let r=e?e.mutatedKeys:this.mutatedKeys,s=i,o=!1;const a=Qt(this.query)&&i.size===this.query.limit?i.last():null,c=Jt(this.query)&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((t,e)=>{const l=i.get(t),u=ae(this.query,e)?e:null,h=!!l&&this.mutatedKeys.has(l.key),d=!!u&&(u.hasLocalMutations||this.mutatedKeys.has(u.key)&&u.hasCommittedMutations);let f=!1;l&&u?l.data.isEqual(u.data)?h!==d&&(n.track({type:3,doc:u}),f=!0):this.Vo(l,u)||(n.track({type:2,doc:u}),f=!0,(a&&this.Ao(u,a)>0||c&&this.Ao(u,c)<0)&&(o=!0)):!l&&u?(n.track({type:0,doc:u}),f=!0):l&&!u&&(n.track({type:1,doc:l}),f=!0,(a||c)&&(o=!0)),f&&(u?(s=s.add(u),r=d?r.add(t):r.delete(t)):(s=s.delete(t),r=r.delete(t)))}),Qt(this.query)||Jt(this.query))for(;s.size>this.query.limit;){const t=Qt(this.query)?s.last():s.first();s=s.delete(t.key),r=r.delete(t.key),n.track({type:1,doc:t})}return{Ro:s,vo:n,Bn:o,mutatedKeys:r}}Vo(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n){const i=this.Ro;this.Ro=t.Ro,this.mutatedKeys=t.mutatedKeys;const r=t.vo.no();r.sort((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return b()}};return n(t)-n(e)}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */(t.type,e.type)||this.Ao(t.doc,e.doc)),this.So(n);const s=e?this.Do():[],o=0===this.Io.size&&this.current?1:0,a=o!==this.Eo;return this.Eo=o,0!==r.length||a?{snapshot:new bo(this.query,t.Ro,i,r,t.mutatedKeys,0===o,a,!1),Co:s}:{Co:s}}ro(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({Ro:this.Ro,vo:new yo,mutatedKeys:this.mutatedKeys,Bn:!1},!1)):{Co:[]}}No(t){return!this.To.has(t)&&!!this.Ro.has(t)&&!this.Ro.get(t).hasLocalMutations}So(t){t&&(t.addedDocuments.forEach(t=>this.To=this.To.add(t)),t.modifiedDocuments.forEach(t=>{}),t.removedDocuments.forEach(t=>this.To=this.To.delete(t)),this.current=t.current)}Do(){if(!this.current)return[];const t=this.Io;this.Io=an(),this.Ro.forEach(t=>{this.No(t.key)&&(this.Io=this.Io.add(t.key))});const e=[];return t.forEach(t=>{this.Io.has(t)||e.push(new Do(t))}),this.Io.forEach(n=>{t.has(n)||e.push(new Ro(n))}),e}ko(t){this.To=t.zn,this.Io=an();const e=this.Po(t.documents);return this.applyChanges(e,!0)}xo(){return bo.fromInitialDocuments(this.query,this.Ro,this.mutatedKeys,0===this.Eo)}}class Po{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class Mo{constructor(t){this.key=t,this.$o=!1}}class Lo{constructor(t,e,n,i,r,s){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=s,this.Oo={},this.Mo=new kr(t=>se(t),re),this.Fo=new Map,this.Lo=new Set,this.Bo=new Ge(at.comparator),this.Uo=new Map,this.qo=new os,this.Ko={},this.jo=new Map,this.Qo=fr.re(),this.onlineState="Unknown",this.Wo=void 0}get isPrimaryClient(){return!0===this.Wo}}async function Fo(t,e){const n=da(t);let i,r;const s=n.Mo.get(e);if(s)i=s.targetId,n.sharedClientState.addLocalQueryTarget(i),r=s.view.xo();else{const t=await Jr(n.localStore,ne(e)),s=n.sharedClientState.addLocalQueryTarget(t.targetId);i=t.targetId,r=await jo(n,e,i,"current"===s),n.isPrimaryClient&&qs(n.remoteStore,t)}return r}async function jo(t,e,n,i){t.Go=(e,n,i)=>async function(t,e,n,i){let r=e.view.Po(n);r.Bn&&(r=await Zr(t.localStore,e.query,!1).then(({documents:t})=>e.view.Po(t,r)));const s=i&&i.targetChanges.get(e.targetId),o=e.view.applyChanges(r,t.isPrimaryClient,s);return Jo(t,e.targetId,o.Co),o.snapshot}(t,e,n,i);const r=await Zr(t.localStore,e,!0),s=new No(e,r.zn),o=s.Po(r.documents),a=hn.createSynthesizedTargetChangeForCurrentChange(n,i&&"Offline"!==t.onlineState),c=s.applyChanges(o,t.isPrimaryClient,a);Jo(t,n,c.Co);const l=new Po(e,n,s);return t.Mo.set(e,l),t.Fo.has(n)?t.Fo.get(n).push(e):t.Fo.set(n,[e]),c.snapshot}async function Uo(t,e){const n=w(t),i=n.Mo.get(e),r=n.Fo.get(i.targetId);if(r.length>1)return n.Fo.set(i.targetId,r.filter(t=>!re(t,e))),void n.Mo.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await Xr(n.localStore,i.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(i.targetId),zs(n.remoteStore,i.targetId),Yo(n,i.targetId)}).catch(br)):(Yo(n,i.targetId),await Xr(n.localStore,i.targetId,!0))}async function Vo(t,e,n){const i=fa(t);try{const t=await function(t,e){const n=w(t),i=U.now(),r=e.reduce((t,e)=>t.add(e.key),an());let s;return n.persistence.runTransaction("Locally write mutations","readwrite",t=>n.Wn.vn(t,r).next(r=>{s=r;const o=[];for(const t of e){const e=Ne(t,s.get(t.key));null!=e&&o.push(new Fe(t.key,e,It(e.value.mapValue),Ae.exists(!0)))}return n.An.addMutationBatch(t,i,o,e)})).then(t=>(t.applyToLocalDocumentSet(s),{batchId:t.batchId,changes:s}))}(i.localStore,e);i.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let i=t.Ko[t.currentUser.toKey()];i||(i=new Ge(L)),i=i.insert(e,n),t.Ko[t.currentUser.toKey()]=i}(i,t.batchId,n),await ta(i,t.changes),await eo(i.remoteStore)}catch(t){const e=go(t,"Failed to persist write");n.reject(e)}}async function Bo(t,e){const n=w(t);try{const t=await Gr(n.localStore,e);e.targetChanges.forEach((t,e)=>{const i=n.Uo.get(e);i&&(v(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?i.$o=!0:t.modifiedDocuments.size>0?v(i.$o):t.removedDocuments.size>0&&(v(i.$o),i.$o=!1))}),await ta(n,t,e)}catch(t){await br(t)}}function qo(t,e,n){const i=w(t);if(i.isPrimaryClient&&0===n||!i.isPrimaryClient&&1===n){const t=[];i.Mo.forEach((n,i)=>{const r=i.view.ro(e);r.snapshot&&t.push(r.snapshot)}),function(t,e){const n=w(t);n.onlineState=e;let i=!1;n.queries.forEach((t,n)=>{for(const r of n.listeners)r.ro(e)&&(i=!0)}),i&&ko(n)}(i.eventManager,e),t.length&&i.Oo.br(t),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function zo(t,e,n){const i=w(t);i.sharedClientState.updateQueryState(e,"rejected",n);const r=i.Uo.get(e),s=r&&r.key;if(s){let t=new Ge(at.comparator);t=t.insert(s,Tt.newNoDocument(s,V.min()));const n=an().add(s),r=new un(V.min(),new Map,new Je(L),t,n);await Bo(i,r),i.Bo=i.Bo.remove(s),i.Uo.delete(e),Zo(i)}else await Xr(i.localStore,e,!1).then(()=>Yo(i,e,n)).catch(br)}async function Wo(t,e){const n=w(t),i=e.batch.batchId;try{const t=await $r(n.localStore,e);Go(n,i,null),Ko(n,i),n.sharedClientState.updateMutationState(i,"acknowledged"),await ta(n,t)}catch(t){await br(t)}}async function Ho(t,e,n){const i=w(t);try{const t=await function(t,e){const n=w(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",t=>{let i;return n.An.lookupMutationBatch(t,e).next(e=>(v(null!==e),i=e.keys(),n.An.removeMutationBatch(t,e))).next(()=>n.An.performConsistencyCheck(t)).next(()=>n.Wn.vn(t,i))})}(i.localStore,e);Go(i,e,n),Ko(i,e),i.sharedClientState.updateMutationState(e,"rejected",n),await ta(i,t)}catch(n){await br(n)}}async function $o(t,e){const n=w(t);Gs(n.remoteStore)||p("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const t=await function(t){const e=w(t);return e.persistence.runTransaction("Get highest unacknowledged batch id","readonly",t=>e.An.getHighestUnacknowledgedBatchId(t))}(n.localStore);if(-1===t)return void e.resolve();const i=n.jo.get(t)||[];i.push(e),n.jo.set(t,i)}catch(t){const n=go(t,"Initialization of waitForPendingWrites() operation failed");e.reject(n)}}function Ko(t,e){(t.jo.get(e)||[]).forEach(t=>{t.resolve()}),t.jo.delete(e)}function Go(t,e,n){const i=w(t);let r=i.Ko[i.currentUser.toKey()];if(r){const t=r.get(e);t&&(n?t.reject(n):t.resolve(),r=r.remove(e)),i.Ko[i.currentUser.toKey()]=r}}function Yo(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const i of t.Fo.get(e))t.Mo.delete(i),n&&t.Oo.zo(i,n);t.Fo.delete(e),t.isPrimaryClient&&t.qo.us(e).forEach(e=>{t.qo.containsKey(e)||Qo(t,e)})}function Qo(t,e){t.Lo.delete(e.path.canonicalString());const n=t.Bo.get(e);null!==n&&(zs(t.remoteStore,n),t.Bo=t.Bo.remove(e),t.Uo.delete(n),Zo(t))}function Jo(t,e,n){for(const i of n)i instanceof Ro?(t.qo.addReference(i.key,e),Xo(t,i)):i instanceof Do?(p("SyncEngine","Document no longer in limbo: "+i.key),t.qo.removeReference(i.key,e),t.qo.containsKey(i.key)||Qo(t,i.key)):b()}function Xo(t,e){const n=e.key,i=n.path.canonicalString();t.Bo.get(n)||t.Lo.has(i)||(p("SyncEngine","New document in limbo: "+n),t.Lo.add(i),Zo(t))}function Zo(t){for(;t.Lo.size>0&&t.Bo.size<t.maxConcurrentLimboResolutions;){const e=t.Lo.values().next().value;t.Lo.delete(e);const n=new at(H.fromString(e)),i=t.Qo.next();t.Uo.set(i,new Mo(n)),t.Bo=t.Bo.insert(n,i),qs(t.remoteStore,new Ui(ne(Yt(n.path)),i,2,N.I))}}async function ta(t,e,n){const i=w(t),r=[],s=[],o=[];i.Mo.isEmpty()||(i.Mo.forEach((t,a)=>{o.push(i.Go(a,e,n).then(t=>{if(t){i.isPrimaryClient&&i.sharedClientState.updateQueryState(a.targetId,t.fromCache?"not-current":"current"),r.push(t);const e=Br.$n(a.targetId,t);s.push(e)}}))}),await Promise.all(o),i.Oo.br(r),await async function(t,e){const n=w(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",t=>ki.forEach(e,e=>ki.forEach(e.kn,i=>n.persistence.referenceDelegate.addReference(t,e.targetId,i)).next(()=>ki.forEach(e.xn,i=>n.persistence.referenceDelegate.removeReference(t,e.targetId,i)))))}catch(t){if(!Ci(t))throw t;p("LocalStore","Failed to update sequence numbers: "+t)}for(const i of e){const t=i.targetId;if(!i.fromCache){const e=n.qn.get(t),i=e.snapshotVersion,r=e.withLastLimboFreeSnapshotVersion(i);n.qn=n.qn.insert(t,r)}}}(i.localStore,s))}async function ea(t,e){const n=w(t);if(!n.currentUser.isEqual(e)){p("SyncEngine","User change. New user:",e.toKey());const t=await Hr(n.localStore,e);n.currentUser=e,function(t,e){t.jo.forEach(t=>{t.forEach(t=>{t.reject(new I(x.CANCELLED,e))})}),t.jo.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await ta(n,t.Gn)}}function na(t,e){const n=w(t),i=n.Uo.get(e);if(i&&i.$o)return an().add(i.key);{let t=an();const i=n.Fo.get(e);if(!i)return t;for(const e of i){const i=n.Mo.get(e);t=t.unionWith(i.view.bo)}return t}}async function ia(t,e){const n=w(t),i=await Zr(n.localStore,e.query,!0),r=e.view.ko(i);return n.isPrimaryClient&&Jo(n,e.targetId,r.Co),r}async function ra(t){const e=w(t);return es(e.localStore).then(t=>ta(e,t))}async function sa(t,e,n,i){const r=w(t),s=await function(t,e){const n=w(t),i=w(n.An);return n.persistence.runTransaction("Lookup mutation documents","readonly",t=>i.Zt(t,e).next(e=>e?n.Wn.vn(t,e):ki.resolve(null)))}(r.localStore,e);null!==s?("pending"===n?await eo(r.remoteStore):"acknowledged"===n||"rejected"===n?(Go(r,e,i||null),Ko(r,e),function(t,e){w(w(t).An).ee(e)}(r.localStore,e)):b(),await ta(r,s)):p("SyncEngine","Cannot apply mutation batch with id: "+e)}async function oa(t,e){const n=w(t);if(da(n),fa(n),!0===e&&!0!==n.Wo){const t=n.sharedClientState.getAllActiveQueryTargets(),e=await aa(n,t.toArray());n.Wo=!0,await uo(n.remoteStore,!0);for(const i of e)qs(n.remoteStore,i)}else if(!1===e&&!1!==n.Wo){const t=[];let e=Promise.resolve();n.Fo.forEach((i,r)=>{n.sharedClientState.isLocalQueryTarget(r)?t.push(r):e=e.then(()=>(Yo(n,r),Xr(n.localStore,r,!0))),zs(n.remoteStore,r)}),await e,await aa(n,t),function(t){const e=w(t);e.Uo.forEach((t,n)=>{zs(e.remoteStore,n)}),e.qo.hs(),e.Uo=new Map,e.Bo=new Ge(at.comparator)}(n),n.Wo=!1,await uo(n.remoteStore,!1)}}async function aa(t,e,n){const i=w(t),r=[],s=[];for(const o of e){let t;const e=i.Fo.get(o);if(e&&0!==e.length){t=await Jr(i.localStore,ne(e[0]));for(const t of e){const e=i.Mo.get(t),n=await ia(i,e);n.snapshot&&s.push(n.snapshot)}}else{const e=await ts(i.localStore,o);t=await Jr(i.localStore,e),await jo(i,ca(e),o,!1)}r.push(t)}return i.Oo.br(s),r}function ca(t){return Gt(t.path,t.collectionGroup,t.orderBy,t.filters,t.limit,"F",t.startAt,t.endAt)}function la(t){const e=w(t);return w(w(e.localStore).persistence).Tn()}async function ua(t,e,n,i){const r=w(t);if(r.Wo)p("SyncEngine","Ignoring unexpected query state notification.");else if(r.Fo.has(e))switch(n){case"current":case"not-current":{const t=await es(r.localStore),i=un.createSynthesizedRemoteEventForCurrentChange(e,"current"===n);await ta(r,t,i);break}case"rejected":await Xr(r.localStore,e,!0),Yo(r,e,i);break;default:b()}}async function ha(t,e,n){const i=da(t);if(i.Wo){for(const t of e){if(i.Fo.has(t)){p("SyncEngine","Adding an already active target "+t);continue}const e=await ts(i.localStore,t),n=await Jr(i.localStore,e);await jo(i,ca(e),n.targetId,!1),qs(i.remoteStore,n)}for(const t of n)i.Fo.has(t)&&await Xr(i.localStore,t,!1).then(()=>{zs(i.remoteStore,t),Yo(i,t)}).catch(br)}}function da(t){const e=w(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Bo.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=na.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=zo.bind(null,e),e.Oo.br=Io.bind(null,e.eventManager),e.Oo.zo=To.bind(null,e.eventManager),e}function fa(t){const e=w(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Wo.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Ho.bind(null,e),e}function pa(t,e,n){const i=w(t);(async function(t,e,n){try{const i=await e.getMetadata();if(await function(t,e){const n=w(t),i=kn(e.createTime);return n.persistence.runTransaction("hasNewerBundle","readonly",t=>n.Ye.getBundleMetadata(t,e.id)).then(t=>!!t&&t.createTime.compareTo(i)>=0)}(t.localStore,i))return await e.close(),void n._completeWith(function(t){return{taskState:"Success",documentsLoaded:t.totalDocuments,bytesLoaded:t.totalBytes,totalDocuments:t.totalDocuments,totalBytes:t.totalBytes}}(i));n._updateProgress(Co(i));const r=new Oo(i,t.localStore,e.k);let s=await e.Ho();for(;s;){const t=await r.yo(s);t&&n._updateProgress(t),s=await e.Ho()}const o=await r.complete();await ta(t,o.In,void 0),await function(t,e){const n=w(t);return n.persistence.runTransaction("Save bundle","readwrite",t=>n.Ye.saveBundleMetadata(t,e))}(t.localStore,i),n._completeWith(o.progress)}catch(t){m("SyncEngine","Loading bundle failed with "+t),n._failWith(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */)(i,e,n).then(()=>{i.sharedClientState.notifyBundleLoaded()})}class ga{constructor(){this.synchronizeTabs=!1}async initialize(t){this.k=Ds(t.databaseInfo.databaseId),this.sharedClientState=this.Jo(t),this.persistence=this.Yo(t),await this.persistence.start(),this.gcScheduler=this.Xo(t),this.localStore=this.Zo(t)}Xo(t){return null}Zo(t){return Wr(this.persistence,new qr,t.initialUser,this.k)}Yo(t){return new ds(ps.ks,this.k)}Jo(t){return new Ts}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class ma extends ga{constructor(t,e,n){super(),this.tc=t,this.cacheSizeBytes=e,this.forceOwnership=n,this.synchronizeTabs=!1}async initialize(t){await super.initialize(t),await ns(this.localStore),await this.tc.initialize(this,t),await fa(this.tc.syncEngine),await eo(this.tc.remoteStore),await this.persistence.sn(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(this.localStore),Promise.resolve()))}Zo(t){return Wr(this.persistence,new qr,t.initialUser,this.k)}Xo(t){const e=this.persistence.referenceDelegate.garbageCollector;return new wr(e,t.asyncQueue)}Yo(t){const e=jr(t.databaseInfo.databaseId,t.databaseInfo.persistenceKey),n=void 0!==this.cacheSizeBytes?sr.withCacheSize(this.cacheSizeBytes):sr.DEFAULT;return new Mr(this.synchronizeTabs,e,t.clientId,n,t.asyncQueue,Cs(),Rs(),this.k,this.sharedClientState,!!this.forceOwnership)}Jo(t){return new Ts}}class ya extends ma{constructor(t,e){super(t,e,!1),this.tc=t,this.cacheSizeBytes=e,this.synchronizeTabs=!0}async initialize(t){await super.initialize(t);const e=this.tc.syncEngine;this.sharedClientState instanceof Is&&(this.sharedClientState.syncEngine={mi:sa.bind(null,e),gi:ua.bind(null,e),yi:ha.bind(null,e),Tn:la.bind(null,e),_i:ra.bind(null,e)},await this.sharedClientState.start()),await this.persistence.sn(async t=>{await oa(this.tc.syncEngine,t),this.gcScheduler&&(t&&!this.gcScheduler.started?this.gcScheduler.start(this.localStore):t||this.gcScheduler.stop())})}Jo(t){const e=Cs();if(!Is.Pt(e))throw new I(x.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const n=jr(t.databaseInfo.databaseId,t.databaseInfo.persistenceKey);return new Is(e,t.asyncQueue,n,t.clientId,t.initialUser)}}class ba{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>qo(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=ea.bind(null,this.syncEngine),await uo(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new _o}createDatastore(t){const e=Ds(t.databaseInfo.databaseId),n=(i=t.databaseInfo,new Os(i));var i;return function(t,e,n,i){return new Fs(t,e,n,i)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return e=this.localStore,n=this.datastore,i=t.asyncQueue,r=t=>qo(this.syncEngine,t,0),s=Es.Pt()?new Es:new ks,new Us(e,n,i,r,s);var e,n,i,r,s}createSyncEngine(t,e){return function(t,e,n,i,r,s,o){const a=new Lo(t,e,n,i,r,s);return o&&(a.Wo=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=w(t);p("RemoteStore","RemoteStore shutting down."),e.Gr.add(5),await Bs(e),e.Hr.shutdown(),e.Jr.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */function va(t,e=10240){let n=0;return{async read(){if(n<t.byteLength){const i={value:t.slice(n,n+e),done:!1};return n+=e,i}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.reject("unimplemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */
/**
 * @license
 * Copyright 2017 Google LLC
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
 */class _a{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.ec(this.observer.next,t)}error(t){this.observer.error?this.ec(this.observer.error,t):console.error("Uncaught Error in snapshot listener:",t)}nc(){this.muted=!0}ec(t,e){this.muted||setTimeout(()=>{this.muted||t(e)},0)}}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */class wa{constructor(t,e){this.sc=t,this.k=e,this.metadata=new T,this.buffer=new Uint8Array,this.ic=new TextDecoder("utf-8"),this.rc().then(t=>{t&&t._o()?this.metadata.resolve(t.payload.metadata):this.metadata.reject(new Error("The first element of the bundle is not a metadata, it is\n             "+JSON.stringify(null==t?void 0:t.payload)))},t=>this.metadata.reject(t))}close(){return this.sc.cancel()}async getMetadata(){return this.metadata.promise}async Ho(){return await this.getMetadata(),this.rc()}async rc(){const t=await this.oc();if(null===t)return null;const e=this.ic.decode(t),n=Number(e);isNaN(n)&&this.cc(`length string (${e}) is not valid number`);const i=await this.ac(n);return new So(JSON.parse(i),t.length+n)}uc(){return this.buffer.findIndex(t=>t==="{".charCodeAt(0))}async oc(){for(;this.uc()<0;)if(await this.hc())break;if(0===this.buffer.length)return null;const t=this.uc();t<0&&this.cc("Reached the end of bundle when a length string is expected.");const e=this.buffer.slice(0,t);return this.buffer=this.buffer.slice(t),e}async ac(t){for(;this.buffer.length<t;)await this.hc()&&this.cc("Reached the end of bundle when more is expected.");const e=this.ic.decode(this.buffer.slice(0,t));return this.buffer=this.buffer.slice(t),e}cc(t){throw this.sc.cancel(),new Error("Invalid bundle format: "+t)}async hc(){const t=await this.sc.read();if(!t.done){const e=new Uint8Array(this.buffer.length+t.value.length);e.set(this.buffer),e.set(t.value,this.buffer.length),this.buffer=e}return t.done}}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */class xa{constructor(t){this.datastore=t,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(t){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new I(x.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const e=await async function(t,e){const n=w(t),i=Dn(n.k)+"/documents",r={documents:e.map(t=>An(n.k,t))},s=await n.ji("BatchGetDocuments",i,r),o=new Map;s.forEach(t=>{const e=Ln(n.k,t);o.set(e.key.toString(),e)});const a=[];return e.forEach(t=>{const e=o.get(t.toString());v(!!e),a.push(e)}),a}(this.datastore,t);return e.forEach(t=>this.recordVersion(t)),e}set(t,e){this.write(e.toMutation(t,this.precondition(t))),this.writtenDocs.add(t.toString())}update(t,e){try{this.write(e.toMutation(t,this.preconditionForUpdate(t)))}catch(t){this.lastWriteError=t}this.writtenDocs.add(t.toString())}delete(t){this.write(new Be(t,this.precondition(t))),this.writtenDocs.add(t.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const t=this.readVersions;this.mutations.forEach(e=>{t.delete(e.key.toString())}),t.forEach((t,e)=>{const n=at.fromPath(e);this.mutations.push(new qe(n,this.precondition(n)))}),await async function(t,e){const n=w(t),i=Dn(n.k)+"/documents",r={writes:e.map(t=>jn(n.k,t))};await n.Bi("Commit",i,r)}(this.datastore,this.mutations),this.committed=!0}recordVersion(t){let e;if(t.isFoundDocument())e=t.version;else{if(!t.isNoDocument())throw b();e=V.min()}const n=this.readVersions.get(t.key.toString());if(n){if(!e.isEqual(n))throw new I(x.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(t.key.toString(),e)}precondition(t){const e=this.readVersions.get(t.toString());return!this.writtenDocs.has(t.toString())&&e?Ae.updateTime(e):Ae.none()}preconditionForUpdate(t){const e=this.readVersions.get(t.toString());if(!this.writtenDocs.has(t.toString())&&e){if(e.isEqual(V.min()))throw new I(x.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Ae.updateTime(e)}return Ae.exists(!0)}write(t){this.ensureCommitNotCalled(),this.mutations.push(t)}ensureCommitNotCalled(){}}
/**
 * @license
 * Copyright 2019 Google LLC
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
 */class Ia{constructor(t,e,n,i){this.asyncQueue=t,this.datastore=e,this.updateFunction=n,this.deferred=i,this.lc=5,this.ur=new Ns(this.asyncQueue,"transaction_retry")}run(){this.lc-=1,this.fc()}fc(){this.ur.Zi(async()=>{const t=new xa(this.datastore),e=this.dc(t);e&&e.then(e=>{this.asyncQueue.enqueueAndForget(()=>t.commit().then(()=>{this.deferred.resolve(e)}).catch(t=>{this.wc(t)}))}).catch(t=>{this.wc(t)})})}dc(t){try{const e=this.updateFunction(t);return!rt(e)&&e.catch&&e.then?e:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}wc(t){this.lc>0&&this._c(t)?(this.lc-=1,this.asyncQueue.enqueueAndForget(()=>(this.fc(),Promise.resolve()))):this.deferred.reject(t)}_c(t){if("FirebaseError"===t.name){const e=t.code;return"aborted"===e||"failed-precondition"===e||!$e(e)}return!1}}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Ta{constructor(t,e,n,i){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=i,this.user=l.UNAUTHENTICATED,this.clientId=M.A(),this.authCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,async t=>{p("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t}),this.appCheckCredentials.start(n,()=>Promise.resolve())}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new I(x.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new T;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=go(e,"Failed to shutdown persistence");t.reject(n)}}),t.promise}}async function ka(t,e){t.asyncQueue.verifyOperationInProgress(),p("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let i=n.initialUser;t.setCredentialChangeListener(async t=>{i.isEqual(t)||(await Hr(e.localStore,t),i=t)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function Ea(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Sa(t);p("FirestoreClient","Initializing OnlineComponentProvider");const i=await t.getConfiguration();await e.initialize(n,i),t.setCredentialChangeListener(t=>async function(t,e){const n=w(t);n.asyncQueue.verifyOperationInProgress(),p("RemoteStore","RemoteStore received new credentials");const i=Gs(n);n.Gr.add(3),await Bs(n),i&&n.Jr.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Gr.delete(3),await Vs(n)}(e.remoteStore,t)),t.onlineComponents=e}async function Sa(t){return t.offlineComponents||(p("FirestoreClient","Using default OfflineComponentProvider"),await ka(t,new ga)),t.offlineComponents}async function Aa(t){return t.onlineComponents||(p("FirestoreClient","Using default OnlineComponentProvider"),await Ea(t,new ba)),t.onlineComponents}function Oa(t){return Sa(t).then(t=>t.persistence)}function Ca(t){return Sa(t).then(t=>t.localStore)}function Ra(t){return Aa(t).then(t=>t.remoteStore)}function Da(t){return Aa(t).then(t=>t.syncEngine)}async function Na(t){const e=await Aa(t),n=e.eventManager;return n.onListen=Fo.bind(null,e.syncEngine),n.onUnlisten=Uo.bind(null,e.syncEngine),n}function Pa(t){return t.asyncQueue.enqueue(async()=>{const e=await Oa(t),n=await Ra(t);return e.setNetworkEnabled(!0),function(t){const e=w(t);return e.Gr.delete(0),Vs(e)}(n)})}function Ma(t){return t.asyncQueue.enqueue(async()=>{const e=await Oa(t),n=await Ra(t);return e.setNetworkEnabled(!1),async function(t){const e=w(t);e.Gr.add(0),await Bs(e),e.Jr.set("Offline")}(n)})}function La(t,e){const n=new T;return t.asyncQueue.enqueueAndForget(async()=>async function(t,e,n){try{const i=await function(t,e){const n=w(t);return n.persistence.runTransaction("read document","readonly",t=>n.Wn.Rn(t,e))}(t,e);i.isFoundDocument()?n.resolve(i):i.isNoDocument()?n.resolve(null):n.reject(new I(x.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(t){const i=go(t,`Failed to get document '${e} from cache`);n.reject(i)}}(await Ca(t),e,n)),n.promise}function Fa(t,e,n={}){const i=new T;return t.asyncQueue.enqueueAndForget(async()=>function(t,e,n,i,r){const s=new _a({next:s=>{e.enqueueAndForget(()=>xo(t,o));const a=s.docs.has(n);!a&&s.fromCache?r.reject(new I(x.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&s.fromCache&&i&&"server"===i.source?r.reject(new I(x.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):r.resolve(s)},error:t=>r.reject(t)}),o=new Eo(Yt(n.path),s,{includeMetadataChanges:!0,wo:!0});return wo(t,o)}(await Na(t),t.asyncQueue,e,n,i)),i.promise}function ja(t,e){const n=new T;return t.asyncQueue.enqueueAndForget(async()=>async function(t,e,n){try{const i=await Zr(t,e,!0),r=new No(e,i.zn),s=r.Po(i.documents),o=r.applyChanges(s,!1);n.resolve(o.snapshot)}catch(t){const i=go(t,`Failed to execute query '${e} against cache`);n.reject(i)}}(await Ca(t),e,n)),n.promise}function Ua(t,e,n={}){const i=new T;return t.asyncQueue.enqueueAndForget(async()=>function(t,e,n,i,r){const s=new _a({next:n=>{e.enqueueAndForget(()=>xo(t,o)),n.fromCache&&"server"===i.source?r.reject(new I(x.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):r.resolve(n)},error:t=>r.reject(t)}),o=new Eo(n,s,{includeMetadataChanges:!0,wo:!0});return wo(t,o)}(await Na(t),t.asyncQueue,e,n,i)),i.promise}function Va(t,e){const n=new _a(e);return t.asyncQueue.enqueueAndForget(async()=>function(t,e){w(t).io.add(e),e.next()}(await Na(t),n)),()=>{n.nc(),t.asyncQueue.enqueueAndForget(async()=>function(t,e){w(t).io.delete(e)}(await Na(t),n))}}function Ba(t,e){const n=new T;return t.asyncQueue.enqueueAndForget(async()=>{const i=await function(t){return Aa(t).then(t=>t.datastore)}(t);new Ia(t.asyncQueue,i,e,n).run()}),n.promise}function qa(t,e,n,i){const r=function(t,e){let n;return n="string"==typeof t?(new TextEncoder).encode(t):t,function(t,e){return new wa(t,e)}(function(t,e){if(t instanceof Uint8Array)return va(t,e);if(t instanceof ArrayBuffer)return va(new Uint8Array(t),e);if(t instanceof ReadableStream)return t.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(n),e)}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */(n,Ds(e));t.asyncQueue.enqueueAndForget(async()=>{pa(await Da(t),r,i)})}function za(t,e){return t.asyncQueue.enqueue(async()=>function(t,e){const n=w(t);return n.persistence.runTransaction("Get named query","readonly",t=>n.Ye.getNamedQuery(t,e))}(await Ca(t),e))}class Wa{constructor(t,e,n,i,r,s,o,a){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=i,this.ssl=r,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class Ha{constructor(t,e){this.projectId=t,this.database=e||"(default)"}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof Ha&&t.projectId===this.projectId&&t.database===this.database}}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */const $a=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
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
 */function Ka(t,e,n){if(!n)throw new I(x.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Ga(t,e,n,i){if(!0===e&&!0===i)throw new I(x.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Ya(t){if(!at.isDocumentKey(t))throw new I(x.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Qa(t){if(at.isDocumentKey(t))throw new I(x.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Ja(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=t.substring(0,20)+"..."),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":b()}function Xa(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new I(x.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ja(t);throw new I(x.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function Za(t,e){if(e<=0)throw new I(x.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */class tc{constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new I(x.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new I(x.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,Ga("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */class ec{constructor(t,e,n){this._authCredentials=e,this._appCheckCredentials=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new tc({}),this._settingsFrozen=!1,t instanceof Ha?this._databaseId=t:(this._app=t,this._databaseId=function(t){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new I(x.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ha(t.options.projectId)}(t))}get app(){if(!this._app)throw new I(x.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new I(x.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new tc(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new E;switch(t.type){case"gapi":const e=t.client;return v(!("object"!=typeof e||null===e||!e.auth||!e.auth.getAuthHeaderValueForFirstParty)),new C(e,t.sessionIndex||"0",t.iamToken||null);case"provider":return t.client;default:throw new I(x.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=$a.get(t);e&&(p("ComponentProvider","Removing Datastore"),$a.delete(t),e.terminate())}(this),Promise.resolve()}}function nc(t,e,n,i={}){var r;const s=(t=Xa(t,ec))._getSettings();if("firestore.googleapis.com"!==s.host&&s.host!==e&&m("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},s),{host:`${e}:${n}`,ssl:!1})),i.mockUserToken){let e,n;if("string"==typeof i.mockUserToken)e=i.mockUserToken,n=l.MOCK_USER;else{e=Object(o["f"])(i.mockUserToken,null===(r=t._app)||void 0===r?void 0:r.options.projectId);const s=i.mockUserToken.sub||i.mockUserToken.user_id;if(!s)throw new I(x.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new l(s)}t._authCredentials=new S(new k(e,n))}}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */class ic{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new sc(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new ic(this.firestore,t,this._key)}}class rc{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new rc(this.firestore,t,this._query)}}class sc extends rc{constructor(t,e,n){super(t,e,Yt(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new ic(this.firestore,null,new at(t))}withConverter(t){return new sc(this.firestore,t,this._path)}}function oc(t,e,...n){if(t=Object(o["k"])(t),Ka("collection","path",e),t instanceof ec){const i=H.fromString(e,...n);return Qa(i),new sc(t,null,i)}{if(!(t instanceof ic||t instanceof sc))throw new I(x.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(H.fromString(e,...n));return Qa(i),new sc(t.firestore,null,i)}}function ac(t,e){if(t=Xa(t,ec),Ka("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new I(x.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new rc(t,null,function(t){return new Kt(H.emptyPath(),t)}(e))}function cc(t,e,...n){if(t=Object(o["k"])(t),1===arguments.length&&(e=M.A()),Ka("doc","path",e),t instanceof ec){const i=H.fromString(e,...n);return Ya(i),new ic(t,null,new at(i))}{if(!(t instanceof ic||t instanceof sc))throw new I(x.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(H.fromString(e,...n));return Ya(i),new ic(t.firestore,t instanceof sc?t.converter:null,new at(i))}}function lc(t,e){return t=Object(o["k"])(t),e=Object(o["k"])(e),(t instanceof ic||t instanceof sc)&&(e instanceof ic||e instanceof sc)&&t.firestore===e.firestore&&t.path===e.path&&t.converter===e.converter}function uc(t,e){return t=Object(o["k"])(t),e=Object(o["k"])(e),t instanceof rc&&e instanceof rc&&t.firestore===e.firestore&&re(t._query,e._query)&&t.converter===e.converter
/**
 * @license
 * Copyright 2020 Google LLC
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
 */}class hc{constructor(){this.mc=Promise.resolve(),this.gc=[],this.yc=!1,this.Tc=[],this.Ec=null,this.Ic=!1,this.Ac=!1,this.Rc=[],this.ur=new Ns(this,"async_queue_retry"),this.bc=()=>{const t=Rs();t&&p("AsyncQueue","Visibility state changed to "+t.visibilityState),this.ur.er()};const t=Rs();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.bc)}get isShuttingDown(){return this.yc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Pc(),this.vc(t)}enterRestrictedMode(t){if(!this.yc){this.yc=!0,this.Ac=t||!1;const e=Rs();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.bc)}}enqueue(t){if(this.Pc(),this.yc)return new Promise(()=>{});const e=new T;return this.vc(()=>this.yc&&this.Ac?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.gc.push(t),this.Vc()))}async Vc(){if(0!==this.gc.length){try{await this.gc[0](),this.gc.shift(),this.ur.reset()}catch(t){if(!Ci(t))throw t;p("AsyncQueue","Operation failed with retryable error: "+t)}this.gc.length>0&&this.ur.Zi(()=>this.Vc())}}vc(t){const e=this.mc.then(()=>(this.Ic=!0,t().catch(t=>{this.Ec=t,this.Ic=!1;const e=function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */(t);throw g("INTERNAL UNHANDLED ERROR: ",e),t}).then(t=>(this.Ic=!1,t))));return this.mc=e,e}enqueueAfterDelay(t,e,n){this.Pc(),this.Rc.indexOf(t)>-1&&(e=0);const i=po.createAndSchedule(this,t,e,n,t=>this.Sc(t));return this.Tc.push(i),i}Pc(){this.Ec&&b()}verifyOperationInProgress(){}async Dc(){let t;do{t=this.mc,await t}while(t!==this.mc)}Cc(t){for(const e of this.Tc)if(e.timerId===t)return!0;return!1}Nc(t){return this.Dc().then(()=>{this.Tc.sort((t,e)=>t.targetTimeMs-e.targetTimeMs);for(const e of this.Tc)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.Dc()})}kc(t){this.Rc.push(t)}Sc(t){const e=this.Tc.indexOf(t);this.Tc.splice(e,1)}}function dc(t){return function(t,e){if("object"!=typeof t||null===t)return!1;const n=t;for(const i of e)if(i in n&&"function"==typeof n[i])return!0;return!1}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */(t,["next","error","complete"])}class fc{constructor(){this._progressObserver={},this._taskCompletionResolver=new T,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(t,e,n){this._progressObserver={next:t,error:e,complete:n}}catch(t){return this._taskCompletionResolver.promise.catch(t)}then(t,e){return this._taskCompletionResolver.promise.then(t,e)}_completeWith(t){this._updateProgress(t),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(t)}_failWith(t){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(t),this._taskCompletionResolver.reject(t)}_updateProgress(t){this._lastProgress=t,this._progressObserver.next&&this._progressObserver.next(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */const pc=-1;class gc extends ec{constructor(t,e,n){super(t,e,n),this.type="firestore",this._queue=new hc,this._persistenceKey="name"in t?t.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||yc(this),this._firestoreClient.terminate()}}function mc(t){return t._firestoreClient||yc(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function yc(t){var e;const n=t._freezeSettings(),i=function(t,e,n,i){return new Wa(t,e,n,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,i.useFetchStreams)}(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new Ta(t._authCredentials,t._appCheckCredentials,t._queue,i)}function bc(t,e){Sc(t=Xa(t,gc));const n=mc(t),i=t._freezeSettings(),r=new ba;return _c(n,r,new ma(r,i.cacheSizeBytes,null==e?void 0:e.forceOwnership))}function vc(t){Sc(t=Xa(t,gc));const e=mc(t),n=t._freezeSettings(),i=new ba;return _c(e,i,new ya(i,n.cacheSizeBytes))}function _c(t,e,n){const i=new T;return t.asyncQueue.enqueue(async()=>{try{await ka(t,n),await Ea(t,e),i.resolve()}catch(t){if(!function(t){return"FirebaseError"===t.name?t.code===x.FAILED_PRECONDITION||t.code===x.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&t instanceof DOMException)||(22===t.code||20===t.code||11===t.code)}(t))throw t;console.warn("Error enabling offline persistence. Falling back to persistence disabled: "+t),i.reject(t)}}).then(()=>i.promise)}function wc(t){if(t._initialized&&!t._terminated)throw new I(x.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new T;return t._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(t){if(!Si.Pt())return Promise.resolve();const e=t+"main";await Si.delete(e)}(jr(t._databaseId,t._persistenceKey)),e.resolve()}catch(t){e.reject(t)}}),e.promise}function xc(t){return function(t){const e=new T;return t.asyncQueue.enqueueAndForget(async()=>$o(await Da(t),e)),e.promise}(mc(t=Xa(t,gc)))}function Ic(t){return Pa(mc(t=Xa(t,gc)))}function Tc(t){return Ma(mc(t=Xa(t,gc)))}function kc(t,e){const n=mc(t=Xa(t,gc)),i=new fc;return qa(n,t._databaseId,e,i),i}function Ec(t,e){return za(mc(t=Xa(t,gc)),e).then(e=>e?new rc(t,null,e.query):null)}function Sc(t){if(t._initialized||t._terminated)throw new I(x.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */
/**
 * @license
 * Copyright 2020 Google LLC
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
 */class Ac{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new I(x.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new K(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */
class Oc{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Oc(Q.fromBase64String(t))}catch(t){throw new I(x.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new Oc(Q.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */class Cc{constructor(t){this._methodName=t}}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Rc{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new I(x.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new I(x.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return L(this._lat,t._lat)||L(this._long,t._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */const Dc=/^__.*__$/;class Nc{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return null!==this.fieldMask?new Fe(t,this.data,this.fieldMask,e,this.fieldTransforms):new Le(t,this.data,e,this.fieldTransforms)}}class Pc{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return new Fe(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function Mc(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw b()}}class Lc{constructor(t,e,n,i,r,s){this.settings=t,this.databaseId=e,this.k=n,this.ignoreUndefinedProperties=i,void 0===r&&this.xc(),this.fieldTransforms=r||[],this.fieldMask=s||[]}get path(){return this.settings.path}get $c(){return this.settings.$c}Oc(t){return new Lc(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.k,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mc(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),i=this.Oc({path:n,Fc:!1});return i.Lc(t),i}Bc(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),i=this.Oc({path:n,Fc:!1});return i.xc(),i}Uc(t){return this.Oc({path:void 0,Fc:!0})}qc(t){return nl(t,this.settings.methodName,this.settings.Kc||!1,this.path,this.settings.jc)}contains(t){return void 0!==this.fieldMask.find(e=>t.isPrefixOf(e))||void 0!==this.fieldTransforms.find(e=>t.isPrefixOf(e.field))}xc(){if(this.path)for(let t=0;t<this.path.length;t++)this.Lc(this.path.get(t))}Lc(t){if(0===t.length)throw this.qc("Document fields must not be empty");if(Mc(this.$c)&&Dc.test(t))throw this.qc('Document fields cannot begin and end with "__"')}}class Fc{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.k=n||Ds(t)}Qc(t,e,n,i=!1){return new Lc({$c:t,methodName:e,jc:n,path:K.emptyPath(),Fc:!1,Kc:i},this.databaseId,this.k,this.ignoreUndefinedProperties)}}function jc(t){const e=t._freezeSettings(),n=Ds(t._databaseId);return new Fc(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Uc(t,e,n,i,r,s={}){const o=t.Qc(s.merge||s.mergeFields?2:0,e,n,r);Xc("Data must be an object, but it was:",o,i);const a=Qc(i,o);let c,l;if(s.merge)c=new G(o.fieldMask),l=o.fieldTransforms;else if(s.mergeFields){const t=[];for(const i of s.mergeFields){const r=Zc(e,i,n);if(!o.contains(r))throw new I(x.INVALID_ARGUMENT,`Field '${r}' is specified in your field mask but missing from your input data.`);il(t,r)||t.push(r)}c=new G(t),l=o.fieldTransforms.filter(t=>c.covers(t.field))}else c=null,l=o.fieldTransforms;return new Nc(new xt(a),c,l)}class Vc extends Cc{_toFieldTransform(t){if(2!==t.$c)throw 1===t.$c?t.qc(this._methodName+"() can only appear at the top level of your update data"):t.qc(this._methodName+"() cannot be used with set() unless you pass {merge:true}");return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Vc}}function Bc(t,e,n){return new Lc({$c:3,jc:e.settings.jc,methodName:t._methodName,Fc:n},e.databaseId,e.k,e.ignoreUndefinedProperties)}class qc extends Cc{_toFieldTransform(t){return new ke(t.path,new ye)}isEqual(t){return t instanceof qc}}class zc extends Cc{constructor(t,e){super(t),this.Wc=e}_toFieldTransform(t){const e=Bc(this,t,!0),n=this.Wc.map(t=>Yc(t,e)),i=new be(n);return new ke(t.path,i)}isEqual(t){return this===t}}class Wc extends Cc{constructor(t,e){super(t),this.Wc=e}_toFieldTransform(t){const e=Bc(this,t,!0),n=this.Wc.map(t=>Yc(t,e)),i=new _e(n);return new ke(t.path,i)}isEqual(t){return this===t}}class Hc extends Cc{constructor(t,e){super(t),this.Gc=e}_toFieldTransform(t){const e=new xe(t.k,de(t.k,this.Gc));return new ke(t.path,e)}isEqual(t){return this===t}}function $c(t,e,n,i){const r=t.Qc(1,e,n);Xc("Data must be an object, but it was:",r,i);const s=[],a=xt.empty();q(i,(t,i)=>{const c=el(e,t,n);i=Object(o["k"])(i);const l=r.Bc(c);if(i instanceof Vc)s.push(c);else{const t=Yc(i,l);null!=t&&(s.push(c),a.set(c,t))}});const c=new G(s);return new Pc(a,c,r.fieldTransforms)}function Kc(t,e,n,i,r,s){const a=t.Qc(1,e,n),c=[Zc(e,i,n)],l=[r];if(s.length%2!=0)throw new I(x.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let o=0;o<s.length;o+=2)c.push(Zc(e,s[o])),l.push(s[o+1]);const u=[],h=xt.empty();for(let f=c.length-1;f>=0;--f)if(!il(u,c[f])){const t=c[f];let e=l[f];e=Object(o["k"])(e);const n=a.Bc(t);if(e instanceof Vc)u.push(t);else{const i=Yc(e,n);null!=i&&(u.push(t),h.set(t,i))}}const d=new G(u);return new Pc(h,d,a.fieldTransforms)}function Gc(t,e,n,i=!1){return Yc(n,t.Qc(i?4:3,e))}function Yc(t,e){if(Jc(t=Object(o["k"])(t)))return Xc("Unsupported field value:",e,t),Qc(t,e);if(t instanceof Cc)return function(t,e){if(!Mc(e.$c))throw e.qc(t._methodName+"() can only be used with update() and set()");if(!e.path)throw e.qc(t._methodName+"() is not currently supported inside arrays");const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Fc&&4!==e.$c)throw e.qc("Nested arrays are not supported");return function(t,e){const n=[];let i=0;for(const r of t){let t=Yc(r,e.Uc(i));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),i++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=Object(o["k"])(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return de(e.k,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=U.fromDate(t);return{timestampValue:xn(e.k,n)}}if(t instanceof U){const n=new U(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:xn(e.k,n)}}if(t instanceof Rc)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof Oc)return{bytesValue:In(e.k,t._byteString)};if(t instanceof ic){const n=e.databaseId,i=t.firestore._databaseId;if(!i.isEqual(n))throw e.qc(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:En(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e.qc("Unsupported field value: "+Ja(t))}(t,e)}function Qc(t,e){const n={};return z(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):q(t,(t,i)=>{const r=Yc(i,e.Mc(t));null!=r&&(n[t]=r)}),{mapValue:{fields:n}}}function Jc(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof U||t instanceof Rc||t instanceof Oc||t instanceof ic||t instanceof Cc)}function Xc(t,e,n){if(!Jc(n)||!function(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}(n)){const i=Ja(n);throw"an object"===i?e.qc(t+" a custom object"):e.qc(t+" "+i)}}function Zc(t,e,n){if((e=Object(o["k"])(e))instanceof Ac)return e._internalPath;if("string"==typeof e)return el(t,e);throw nl("Field path arguments must be of type string or ",t,!1,void 0,n)}const tl=new RegExp("[~\\*/\\[\\]]");function el(t,e,n){if(e.search(tl)>=0)throw nl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Ac(...e.split("."))._internalPath}catch(i){throw nl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function nl(t,e,n,i,r){const s=i&&!i.isEmpty(),o=void 0!==r;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=" in field "+i),o&&(c+=" in document "+r),c+=")"),new I(x.INVALID_ARGUMENT,a+t+c)}function il(t,e){return t.some(t=>t.isEqual(e))}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */class rl{constructor(t,e,n,i,r){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new ic(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new sl(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(ol("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class sl extends rl{data(){return super.data()}}function ol(t,e){return"string"==typeof e?el(t,e):e instanceof Ac?e._internalPath:e._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */class al{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class cl extends rl{constructor(t,e,n,i,r,s){super(t,e,n,i,s),this._firestore=t,this._firestoreImpl=t,this.metadata=r}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new ll(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(ol("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class ll extends cl{data(t={}){return super.data(t)}}class ul{constructor(t,e,n,i){this._firestore=t,this._userDataWriter=e,this._snapshot=i,this.metadata=new al(i.hasPendingWrites,i.fromCache),this.query=n}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach(n=>{t.call(e,new ll(this._firestore,this._userDataWriter,n.key,n,new al(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new I(x.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map(n=>({type:"added",doc:new ll(t._firestore,t._userDataWriter,n.doc.key,n.doc,new al(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter),oldIndex:-1,newIndex:e++}))}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter(t=>e||3!==t.type).map(e=>{const i=new ll(t._firestore,t._userDataWriter,e.doc.key,e.doc,new al(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let r=-1,s=-1;return 0!==e.type&&(r=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(n=n.add(e.doc),s=n.indexOf(e.doc.key)),{type:hl(e.type),doc:i,oldIndex:r,newIndex:s}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function hl(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return b()}}function dl(t,e){return t instanceof cl&&e instanceof cl?t._firestore===e._firestore&&t._key.isEqual(e._key)&&(null===t._document?null===e._document:t._document.isEqual(e._document))&&t._converter===e._converter:t instanceof ul&&e instanceof ul&&t._firestore===e._firestore&&uc(t.query,e.query)&&t.metadata.isEqual(e.metadata)&&t._snapshot.isEqual(e._snapshot)}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */function fl(t){if(Jt(t)&&0===t.explicitOrderBy.length)throw new I(x.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class pl{}function gl(t,...e){for(const n of e)t=n._apply(t);return t}class ml extends pl{constructor(t,e,n){super(),this.zc=t,this.Hc=e,this.Jc=n,this.type="where"}_apply(t){const e=jc(t.firestore),n=function(t,e,n,i,r,s,o){let a;if(r.isKeyField()){if("array-contains"===s||"array-contains-any"===s)throw new I(x.INVALID_ARGUMENT,`Invalid Query. You can't perform '${s}' queries on documentId().`);if("in"===s||"not-in"===s){Rl(o,s);const e=[];for(const n of o)e.push(Cl(i,t,n));a={arrayValue:{values:e}}}else a=Cl(i,t,o)}else"in"!==s&&"not-in"!==s&&"array-contains-any"!==s||Rl(o,s),a=Gc(n,e,o,"in"===s||"not-in"===s);const c=Rt.create(r,s,a);return function(t,e){if(e.V()){const n=Zt(t);if(null!==n&&!n.isEqual(e.field))throw new I(x.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${e.field.toString()}'`);const i=Xt(t);null!==i&&Dl(t,e.field,i)}const n=function(t,e){for(const n of t.filters)if(e.indexOf(n.op)>=0)return n.op;return null}(t,function(t){switch(t){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(null!==n)throw n===e.op?new I(x.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new I(x.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}(t,c),c}(t._query,"where",e,t.firestore._databaseId,this.zc,this.Hc,this.Jc);return new rc(t.firestore,t.converter,function(t,e){const n=t.filters.concat([e]);return new Kt(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}(t._query,n))}}function yl(t,e,n){const i=e,r=ol("where",t);return new ml(r,i,n)}class bl extends pl{constructor(t,e){super(),this.zc=t,this.Yc=e,this.type="orderBy"}_apply(t){const e=function(t,e,n){if(null!==t.startAt)throw new I(x.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==t.endAt)throw new I(x.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const i=new zt(e,n);return function(t,e){if(null===Xt(t)){const n=Zt(t);null!==n&&Dl(t,n,e.field)}}(t,i),i}(t._query,this.zc,this.Yc);return new rc(t.firestore,t.converter,function(t,e){const n=t.explicitOrderBy.concat([e]);return new Kt(t.path,t.collectionGroup,n,t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(t._query,e))}}function vl(t,e="asc"){const n=e,i=ol("orderBy",t);return new bl(i,n)}class _l extends pl{constructor(t,e,n){super(),this.type=t,this.Xc=e,this.Zc=n}_apply(t){return new rc(t.firestore,t.converter,ie(t._query,this.Xc,this.Zc))}}function wl(t){return Za("limit",t),new _l("limit",t,"F")}function xl(t){return Za("limitToLast",t),new _l("limitToLast",t,"L")}class Il extends pl{constructor(t,e,n){super(),this.type=t,this.ta=e,this.ea=n}_apply(t){const e=Ol(t,this.type,this.ta,this.ea);return new rc(t.firestore,t.converter,function(t,e){return new Kt(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,e,t.endAt)}(t._query,e))}}function Tl(...t){return new Il("startAt",t,!0)}function kl(...t){return new Il("startAfter",t,!1)}class El extends pl{constructor(t,e,n){super(),this.type=t,this.ta=e,this.ea=n}_apply(t){const e=Ol(t,this.type,this.ta,this.ea);return new rc(t.firestore,t.converter,function(t,e){return new Kt(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,e)}(t._query,e))}}function Sl(...t){return new El("endBefore",t,!0)}function Al(...t){return new El("endAt",t,!1)}function Ol(t,e,n,i){if(n[0]=Object(o["k"])(n[0]),n[0]instanceof rl)return function(t,e,n,i,r){if(!i)throw new I(x.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${n}().`);const s=[];for(const o of ee(t))if(o.field.isKeyField())s.push(gt(e,i.key));else{const t=i.data.field(o.field);if(et(t))throw new I(x.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+o.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(null===t){const t=o.field.canonicalString();throw new I(x.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${t}' (used as the orderBy) does not exist.`)}s.push(t)}return new Bt(s,r)}(t._query,t.firestore._databaseId,e,n[0]._document,i);{const r=jc(t.firestore);return function(t,e,n,i,r,s){const o=t.explicitOrderBy;if(r.length>o.length)throw new I(x.INVALID_ARGUMENT,`Too many arguments provided to ${i}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const a=[];for(let c=0;c<r.length;c++){const s=r[c];if(o[c].field.isKeyField()){if("string"!=typeof s)throw new I(x.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${i}(), but got a ${typeof s}`);if(!te(t)&&-1!==s.indexOf("/"))throw new I(x.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${i}() must be a plain document ID, but '${s}' contains a slash.`);const n=t.path.child(H.fromString(s));if(!at.isDocumentKey(n))throw new I(x.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${i}() must result in a valid document path, but '${n}' is not because it contains an odd number of segments.`);const r=new at(n);a.push(gt(e,r))}else{const t=Gc(n,i,s);a.push(t)}}return new Bt(a,s)}(t._query,t.firestore._databaseId,r,e,n,i)}}function Cl(t,e,n){if("string"==typeof(n=Object(o["k"])(n))){if(""===n)throw new I(x.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!te(e)&&-1!==n.indexOf("/"))throw new I(x.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const i=e.path.child(H.fromString(n));if(!at.isDocumentKey(i))throw new I(x.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return gt(t,new at(i))}if(n instanceof ic)return gt(t,n._key);throw new I(x.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ja(n)}.`)}function Rl(t,e){if(!Array.isArray(t)||0===t.length)throw new I(x.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new I(x.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function Dl(t,e,n){if(!n.isEqual(e))throw new I(x.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */class Nl{convertValue(t,e="none"){switch(ct(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Z(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(tt(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw b()}}convertObject(t,e){const n={};return q(t.fields,(t,i)=>{n[t]=this.convertValue(i,e)}),n}convertGeoPoint(t){return new Rc(Z(t.latitude),Z(t.longitude))}convertArray(t,e){return(t.values||[]).map(t=>this.convertValue(t,e))}convertServerTimestamp(t,e){switch(e){case"previous":const n=nt(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(it(t));default:return null}}convertTimestamp(t){const e=X(t);return new U(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=H.fromString(t);v(ei(n));const i=new Ha(n.get(1),n.get(3)),r=new at(n.popFirst(5));return i.isEqual(e)||g(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),r}}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */function Pl(t,e,n){let i;return i=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,i}class Ml extends Nl{constructor(t){super(),this.firestore=t}convertBytes(t){return new Oc(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new ic(this.firestore,null,e)}}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */class Ll{constructor(t,e){this._firestore=t,this._commitHandler=e,this._mutations=[],this._committed=!1,this._dataReader=jc(t)}set(t,e,n){this._verifyNotCommitted();const i=Fl(t,this._firestore),r=Pl(i.converter,e,n),s=Uc(this._dataReader,"WriteBatch.set",i._key,r,null!==i.converter,n);return this._mutations.push(s.toMutation(i._key,Ae.none())),this}update(t,e,n,...i){this._verifyNotCommitted();const r=Fl(t,this._firestore);let s;return s="string"==typeof(e=Object(o["k"])(e))||e instanceof Ac?Kc(this._dataReader,"WriteBatch.update",r._key,e,n,i):$c(this._dataReader,"WriteBatch.update",r._key,e),this._mutations.push(s.toMutation(r._key,Ae.exists(!0))),this}delete(t){this._verifyNotCommitted();const e=Fl(t,this._firestore);return this._mutations=this._mutations.concat(new Be(e._key,Ae.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new I(x.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Fl(t,e){if((t=Object(o["k"])(t)).firestore!==e)throw new I(x.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */
/**
 * @license
 * Copyright 2020 Google LLC
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
 */function jl(t){t=Xa(t,ic);const e=Xa(t.firestore,gc);return Fa(mc(e),t._key).then(n=>Xl(e,t,n))}class Ul extends Nl{constructor(t){super(),this.firestore=t}convertBytes(t){return new Oc(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new ic(this.firestore,null,e)}}function Vl(t){t=Xa(t,ic);const e=Xa(t.firestore,gc),n=mc(e),i=new Ul(e);return La(n,t._key).then(n=>new cl(e,i,t._key,n,new al(null!==n&&n.hasLocalMutations,!0),t.converter))}function Bl(t){t=Xa(t,ic);const e=Xa(t.firestore,gc);return Fa(mc(e),t._key,{source:"server"}).then(n=>Xl(e,t,n))}function ql(t){t=Xa(t,rc);const e=Xa(t.firestore,gc),n=mc(e),i=new Ul(e);return fl(t._query),Ua(n,t._query).then(n=>new ul(e,i,t,n))}function zl(t){t=Xa(t,rc);const e=Xa(t.firestore,gc),n=mc(e),i=new Ul(e);return ja(n,t._query).then(n=>new ul(e,i,t,n))}function Wl(t){t=Xa(t,rc);const e=Xa(t.firestore,gc),n=mc(e),i=new Ul(e);return Ua(n,t._query,{source:"server"}).then(n=>new ul(e,i,t,n))}function Hl(t,e,n){t=Xa(t,ic);const i=Xa(t.firestore,gc),r=Pl(t.converter,e,n);return Jl(i,[Uc(jc(i),"setDoc",t._key,r,null!==t.converter,n).toMutation(t._key,Ae.none())])}function $l(t,e,n,...i){t=Xa(t,ic);const r=Xa(t.firestore,gc),s=jc(r);let a;return a="string"==typeof(e=Object(o["k"])(e))||e instanceof Ac?Kc(s,"updateDoc",t._key,e,n,i):$c(s,"updateDoc",t._key,e),Jl(r,[a.toMutation(t._key,Ae.exists(!0))])}function Kl(t){return Jl(Xa(t.firestore,gc),[new Be(t._key,Ae.none())])}function Gl(t,e){const n=Xa(t.firestore,gc),i=cc(t),r=Pl(t.converter,e);return Jl(n,[Uc(jc(t.firestore),"addDoc",i._key,r,null!==t.converter,{}).toMutation(i._key,Ae.exists(!1))]).then(()=>i)}function Yl(t,...e){var n,i,r;t=Object(o["k"])(t);let s={includeMetadataChanges:!1},a=0;"object"!=typeof e[a]||dc(e[a])||(s=e[a],a++);const c={includeMetadataChanges:s.includeMetadataChanges};if(dc(e[a])){const t=e[a];e[a]=null===(n=t.next)||void 0===n?void 0:n.bind(t),e[a+1]=null===(i=t.error)||void 0===i?void 0:i.bind(t),e[a+2]=null===(r=t.complete)||void 0===r?void 0:r.bind(t)}let l,u,h;if(t instanceof ic)u=Xa(t.firestore,gc),h=Yt(t._key.path),l={next:n=>{e[a]&&e[a](Xl(u,t,n))},error:e[a+1],complete:e[a+2]};else{const n=Xa(t,rc);u=Xa(n.firestore,gc),h=n._query;const i=new Ul(u);l={next:t=>{e[a]&&e[a](new ul(u,i,n,t))},error:e[a+1],complete:e[a+2]},fl(t._query)}return function(t,e,n,i){const r=new _a(i),s=new Eo(e,r,n);return t.asyncQueue.enqueueAndForget(async()=>wo(await Na(t),s)),()=>{r.nc(),t.asyncQueue.enqueueAndForget(async()=>xo(await Na(t),s))}}(mc(u),h,c,l)}function Ql(t,e){return Va(mc(t=Xa(t,gc)),dc(e)?e:{next:e})}function Jl(t,e){return function(t,e){const n=new T;return t.asyncQueue.enqueueAndForget(async()=>Vo(await Da(t),e,n)),n.promise}(mc(t),e)}function Xl(t,e,n){const i=n.docs.get(e._key),r=new Ul(t);return new cl(t,r,e._key,i,new al(n.hasPendingWrites,n.fromCache),e.converter)}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */class Zl extends class{constructor(t,e){this._firestore=t,this._transaction=e,this._dataReader=jc(t)}get(t){const e=Fl(t,this._firestore),n=new Ml(this._firestore);return this._transaction.lookup([e._key]).then(t=>{if(!t||1!==t.length)return b();const i=t[0];if(i.isFoundDocument())return new rl(this._firestore,n,i.key,i,e.converter);if(i.isNoDocument())return new rl(this._firestore,n,e._key,null,e.converter);throw b()})}set(t,e,n){const i=Fl(t,this._firestore),r=Pl(i.converter,e,n),s=Uc(this._dataReader,"Transaction.set",i._key,r,null!==i.converter,n);return this._transaction.set(i._key,s),this}update(t,e,n,...i){const r=Fl(t,this._firestore);let s;return s="string"==typeof(e=Object(o["k"])(e))||e instanceof Ac?Kc(this._dataReader,"Transaction.update",r._key,e,n,i):$c(this._dataReader,"Transaction.update",r._key,e),this._transaction.update(r._key,s),this}delete(t){const e=Fl(t,this._firestore);return this._transaction.delete(e._key),this}}{constructor(t,e){super(t,e),this._firestore=t}get(t){const e=Fl(t,this._firestore),n=new Ul(this._firestore);return super.get(t).then(t=>new cl(this._firestore,n,e._key,t._document,new al(!1,!1),e.converter))}}function tu(t,e){return Ba(mc(t=Xa(t,gc)),n=>e(new Zl(t,n)))}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */function eu(){return new Vc("deleteField")}function nu(){return new qc("serverTimestamp")}function iu(...t){return new zc("arrayUnion",t)}function ru(...t){return new Wc("arrayRemove",t)}function su(t){return new Hc("increment",t)}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */!function(t,e=!0){!function(t){u=t}(i["SDK_VERSION"]),Object(i["_registerComponent"])(new r["a"]("firestore",(t,{options:n})=>{const i=t.getProvider("app").getImmediate(),r=new gc(i,new A(t.getProvider("auth-internal")),new D(t.getProvider("app-check-internal")));return n=Object.assign({useFetchStreams:e},n),r._setSettings(n),r},"PUBLIC")),Object(i["registerVersion"])(c,"3.4.3",t),Object(i["registerVersion"])(c,"3.4.3","esm2017")}()}).call(this,n("4362"))},"0b42":function(t,e,n){var i=n("da84"),r=n("e8b5"),s=n("68ee"),o=n("861d"),a=n("b622"),c=a("species"),l=i.Array;t.exports=function(t){var e;return r(t)&&(e=t.constructor,s(e)&&(e===l||r(e.prototype))?e=void 0:o(e)&&(e=e[c],null===e&&(e=void 0))),void 0===e?l:e}},"159b":function(t,e,n){var i=n("da84"),r=n("fdbc"),s=n("785a"),o=n("17c2"),a=n("9112"),c=function(t){if(t&&t.forEach!==o)try{a(t,"forEach",o)}catch(e){t.forEach=o}};for(var l in r)r[l]&&c(i[l]&&i[l].prototype);c(s)},"17c2":function(t,e,n){"use strict";var i=n("b727").forEach,r=n("a640"),s=r("forEach");t.exports=s?[].forEach:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}},"1dde":function(t,e,n){var i=n("d039"),r=n("b622"),s=n("2d00"),o=r("species");t.exports=function(t){return s>=51||!i((function(){var e=[],n=e.constructor={};return n[o]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"1f5a":function(t,e,n){"use strict";n.d(e,"a",(function(){return l})),n.d(e,"b",(function(){return jt})),n.d(e,"c",(function(){return le})),n.d(e,"d",(function(){return fe})),n.d(e,"e",(function(){return ge})),n.d(e,"f",(function(){return pe})),n.d(e,"g",(function(){return Zt})),n.d(e,"h",(function(){return de})),n.d(e,"i",(function(){return Di})),n.d(e,"j",(function(){return $r})),n.d(e,"k",(function(){return c})),n.d(e,"l",(function(){return Ti})),n.d(e,"m",(function(){return ye})),n.d(e,"n",(function(){return ve})),n.d(e,"o",(function(){return _e})),n.d(e,"p",(function(){return x})),n.d(e,"q",(function(){return Rt})),n.d(e,"r",(function(){return y})),n.d(e,"s",(function(){return Mn})),n.d(e,"t",(function(){return E})),n.d(e,"u",(function(){return sr})),n.d(e,"v",(function(){return ft})),n.d(e,"x",(function(){return ze})),n.d(e,"y",(function(){return Cn})),n.d(e,"z",(function(){return zr})),n.d(e,"A",(function(){return Dn})),n.d(e,"B",(function(){return We})),n.d(e,"C",(function(){return qe})),n.d(e,"D",(function(){return Nt})),n.d(e,"F",(function(){return $e})),n.d(e,"G",(function(){return d})),n.d(e,"H",(function(){return Xe})),n.d(e,"I",(function(){return pn})),n.d(e,"J",(function(){return yn})),n.d(e,"K",(function(){return rr})),n.d(e,"L",(function(){return dt})),n.d(e,"M",(function(){return ii})),n.d(e,"N",(function(){return Ye})),n.d(e,"O",(function(){return Pe})),n.d(e,"P",(function(){return Ai})),n.d(e,"Q",(function(){return qi})),n.d(e,"R",(function(){return nr})),n.d(e,"S",(function(){return In})),n.d(e,"T",(function(){return Me})),n.d(e,"U",(function(){return Oi})),n.d(e,"V",(function(){return Bi})),n.d(e,"W",(function(){return tr})),n.d(e,"X",(function(){return Ze})),n.d(e,"Y",(function(){return Be})),n.d(e,"Z",(function(){return Ge})),n.d(e,"ab",(function(){return Te})),n.d(e,"bb",(function(){return Ne})),n.d(e,"cb",(function(){return Fe})),n.d(e,"db",(function(){return Ke})),n.d(e,"eb",(function(){return Qe})),n.d(e,"fb",(function(){return Si})),n.d(e,"gb",(function(){return Vi})),n.d(e,"hb",(function(){return Xi})),n.d(e,"ib",(function(){return Ae})),n.d(e,"jb",(function(){return rn})),n.d(e,"kb",(function(){return sn})),n.d(e,"lb",(function(){return Ri})),n.d(e,"mb",(function(){return nn})),n.d(e,"nb",(function(){return tn})),n.d(e,"ob",(function(){return He})),n.d(e,"w",(function(){return Is})),n.d(e,"E",(function(){return ws}));var i=n("1fd5"),r=n("589b");function s(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(t);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(t,i[r])&&(n[i[r]]=t[i[r]])}return n}Object.create;Object.create;var o=n("e691"),a=n("22e5");
/**
 * @license
 * Copyright 2021 Google LLC
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
 */
const c={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},l={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};
/**
 * @license
 * Copyright 2020 Google LLC
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
 */
function u(){return{["admin-restricted-operation"]:"This operation is restricted to administrators only.",["argument-error"]:"",["app-not-authorized"]:"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",["app-not-installed"]:"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",["captcha-check-failed"]:"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",["code-expired"]:"The SMS code has expired. Please re-send the verification code to try again.",["cordova-not-ready"]:"Cordova framework is not ready.",["cors-unsupported"]:"This browser is not supported.",["credential-already-in-use"]:"This credential is already associated with a different user account.",["custom-token-mismatch"]:"The custom token corresponds to a different audience.",["requires-recent-login"]:"This operation is sensitive and requires recent authentication. Log in again before retrying this request.",["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",["dynamic-link-not-activated"]:"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",["email-change-needs-verification"]:"Multi-factor users must always have a verified email.",["email-already-in-use"]:"The email address is already in use by another account.",["emulator-config-failed"]:'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',["expired-action-code"]:"The action code has expired.",["cancelled-popup-request"]:"This operation has been cancelled due to another conflicting popup being opened.",["internal-error"]:"An internal AuthError has occurred.",["invalid-app-credential"]:"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",["invalid-app-id"]:"The mobile app identifier is not registed for the current project.",["invalid-user-token"]:"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",["invalid-auth-event"]:"An internal AuthError has occurred.",["invalid-verification-code"]:"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.",["invalid-continue-uri"]:"The continue URL provided in the request is invalid.",["invalid-cordova-configuration"]:"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",["invalid-custom-token"]:"The custom token format is incorrect. Please check the documentation.",["invalid-dynamic-link-domain"]:"The provided dynamic link domain is not configured or authorized for the current project.",["invalid-email"]:"The email address is badly formatted.",["invalid-emulator-scheme"]:"Emulator URL must start with a valid scheme (http:// or https://).",["invalid-api-key"]:"Your API key is invalid, please check you have copied it correctly.",["invalid-cert-hash"]:"The SHA-1 certificate hash provided is invalid.",["invalid-credential"]:"The supplied auth credential is malformed or has expired.",["invalid-message-payload"]:"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-multi-factor-session"]:"The request does not contain a valid proof of first factor successful sign-in.",["invalid-oauth-provider"]:"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",["invalid-oauth-client-id"]:"The OAuth client ID provided is either invalid or does not match the specified API key.",["unauthorized-domain"]:"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",["invalid-action-code"]:"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",["wrong-password"]:"The password is invalid or the user does not have a password.",["invalid-persistence-type"]:"The specified persistence type is invalid. It can only be local, session or none.",["invalid-phone-number"]:"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",["invalid-provider-id"]:"The specified provider ID is invalid.",["invalid-recipient-email"]:"The email corresponding to this action failed to send as the provided recipient email address is invalid.",["invalid-sender"]:"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-verification-id"]:"The verification ID used to create the phone auth credential is invalid.",["invalid-tenant-id"]:"The Auth instance's tenant ID is invalid.",["missing-android-pkg-name"]:"An Android Package Name must be provided if the Android App is required to be installed.",["auth-domain-config-required"]:"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",["missing-app-credential"]:"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",["missing-verification-code"]:"The phone auth credential was created with an empty SMS verification code.",["missing-continue-uri"]:"A continue URL must be provided in the request.",["missing-iframe-start"]:"An internal AuthError has occurred.",["missing-ios-bundle-id"]:"An iOS Bundle ID must be provided if an App Store ID is provided.",["missing-or-invalid-nonce"]:"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",["missing-multi-factor-info"]:"No second factor identifier is provided.",["missing-multi-factor-session"]:"The request is missing proof of first factor successful sign-in.",["missing-phone-number"]:"To send verification codes, provide a phone number for the recipient.",["missing-verification-id"]:"The phone auth credential was created with an empty verification ID.",["app-deleted"]:"This instance of FirebaseApp has been deleted.",["multi-factor-info-not-found"]:"The user does not have a second factor matching the identifier provided.",["multi-factor-auth-required"]:"Proof of ownership of a second factor is required to complete sign-in.",["account-exists-with-different-credential"]:"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",["network-request-failed"]:"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.",["no-auth-event"]:"An internal AuthError has occurred.",["no-such-provider"]:"User was not linked to an account with the given provider.",["null-user"]:"A null user object was provided as the argument for an operation which requires a non-null user object.",["operation-not-allowed"]:"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",["operation-not-supported-in-this-environment"]:'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',["popup-blocked"]:"Unable to establish a connection with the popup. It may have been blocked by the browser.",["popup-closed-by-user"]:"The popup has been closed by the user before finalizing the operation.",["provider-already-linked"]:"User can only be linked to one identity for the given provider.",["quota-exceeded"]:"The project's quota for this operation has been exceeded.",["redirect-cancelled-by-user"]:"The redirect operation has been cancelled by the user before finalizing.",["redirect-operation-pending"]:"A redirect sign-in operation is already pending.",["rejected-credential"]:"The request contains malformed or mismatching credentials.",["second-factor-already-in-use"]:"The second factor is already enrolled on this account.",["maximum-second-factor-count-exceeded"]:"The maximum allowed number of second factors on a user has been exceeded.",["tenant-id-mismatch"]:"The provided tenant ID does not match the Auth instance's tenant ID",["timeout"]:"The operation has timed out.",["user-token-expired"]:"The user's credential is no longer valid. The user must sign in again.",["too-many-requests"]:"We have blocked all requests from this device due to unusual activity. Try again later.",["unauthorized-continue-uri"]:"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",["unsupported-first-factor"]:"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",["unsupported-persistence-type"]:"The current environment does not support the specified persistence type.",["unsupported-tenant-operation"]:"This operation is not supported in a multi-tenant context.",["unverified-email"]:"The operation requires a verified email.",["user-cancelled"]:"The user did not grant your application the permissions it requested.",["user-not-found"]:"There is no user record corresponding to this identifier. The user may have been deleted.",["user-disabled"]:"The user account has been disabled by an administrator.",["user-mismatch"]:"The supplied credentials do not correspond to the previously signed in user.",["user-signed-out"]:"",["weak-password"]:"The password must be 6 characters long or more.",["web-storage-unsupported"]:"This browser is not supported or 3rd party cookies and data may be disabled.",["already-initialized"]:"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance."}}function h(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const d=u,f=h,p=new i["b"]("auth","Firebase",h()),g=new o["b"]("@firebase/auth");function m(t,...e){g.logLevel<=o["a"].ERROR&&g.error(`Auth (${r["SDK_VERSION"]}): ${t}`,...e)}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */function y(t,...e){throw w(t,...e)}function b(t,...e){return w(t,...e)}function v(t,e,n){const r=Object.assign(Object.assign({},f()),{[e]:n}),s=new i["b"]("auth","Firebase",r);return s.create(e,{appName:t.name})}function _(t,e,n){const i=n;if(!(e instanceof i))throw i.name!==e.constructor.name&&y(t,"argument-error"),v(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function w(t,...e){if("string"!==typeof t){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return p.create(t,...e)}function x(t,e,...n){if(!t)throw w(e,...n)}function I(t){const e="INTERNAL ASSERTION FAILED: "+t;throw m(e),new Error(e)}function T(t,e){t||I(e)}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */const k=new Map;function E(t){T(t instanceof Function,"Expected a class definition");let e=k.get(t);return e?(T(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,k.set(t,e),e)}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */function S(t,e){const n=(null===e||void 0===e?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(E);(null===e||void 0===e?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,null===e||void 0===e?void 0:e.popupRedirectResolver)}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */function A(){var t;return"undefined"!==typeof self&&(null===(t=self.location)||void 0===t?void 0:t.href)||""}function O(){return"http:"===C()||"https:"===C()}function C(){var t;return"undefined"!==typeof self&&(null===(t=self.location)||void 0===t?void 0:t.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */function R(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(O()||Object(i["n"])()||"connection"in navigator))||navigator.onLine}function D(){if("undefined"===typeof navigator)return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */class N{constructor(t,e){this.shortDelay=t,this.longDelay=e,T(e>t,"Short delay should be less than long delay!"),this.isMobile=Object(i["s"])()||Object(i["u"])()}get(){return R()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */function P(t,e){T(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */class M{static initialize(t,e,n){this.fetchImpl=t,e&&(this.headersImpl=e),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:void I("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:void I("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:void I("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */const L={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"internal-error",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error"},F=new N(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
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
 */function j(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function U(t,e,n,r,s={}){return V(t,s,async()=>{let s={},o={};r&&("GET"===e?o=r:s={body:JSON.stringify(r)});const a=Object(i["x"])(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),M.fetch()(q(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},s))})}async function V(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},L),e);try{const e=new z(t),i=await Promise.race([n(),e.promise]);e.clearNetworkTimeout();const s=await i.json();if("needConfirmation"in s)throw W(t,"account-exists-with-different-credential",s);if(i.ok&&!("errorMessage"in s))return s;{const e=i.ok?s.errorMessage:s.error.message,[n,o]=e.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw W(t,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw W(t,"email-already-in-use",s);const a=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw v(t,a,o);y(t,a)}}catch(s){if(s instanceof i["c"])throw s;y(t,"network-request-failed")}}async function B(t,e,n,i,r={}){const s=await U(t,e,n,i,r);return"mfaPendingCredential"in s&&y(t,"multi-factor-auth-required",{_serverResponse:s}),s}function q(t,e,n,i){const r=`${e}${n}?${i}`;return t.config.emulator?P(t.config,r):`${t.config.apiScheme}://${r}`}class z{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((t,e)=>{this.timer=setTimeout(()=>e(b(this.auth,"network-request-failed")),F.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function W(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const r=b(t,e,i);return r.customData._tokenResponse=n,r}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */async function H(t,e){return U(t,"POST","/v1/accounts:delete",e)}async function $(t,e){return U(t,"POST","/v1/accounts:update",e)}async function K(t,e){return U(t,"POST","/v1/accounts:lookup",e)}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */function G(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */async function Y(t,e=!1){const n=Object(i["k"])(t),r=await n.getIdToken(e),s=J(r);x(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const o="object"===typeof s.firebase?s.firebase:void 0,a=null===o||void 0===o?void 0:o["sign_in_provider"];return{claims:s,token:r,authTime:G(Q(s.auth_time)),issuedAtTime:G(Q(s.iat)),expirationTime:G(Q(s.exp)),signInProvider:a||null,signInSecondFactor:(null===o||void 0===o?void 0:o["sign_in_second_factor"])||null}}function Q(t){return 1e3*Number(t)}function J(t){const[e,n,r]=t.split(".");if(void 0===e||void 0===n||void 0===r)return m("JWT malformed, contained fewer than 3 sections"),null;try{const t=Object(i["d"])(n);return t?JSON.parse(t):(m("Failed to decode base64 JWT payload"),null)}catch(s){return m("Caught error parsing JWT payload as JSON",s),null}}function X(t){const e=J(t);return x(e,"internal-error"),x("undefined"!==typeof e.exp,"internal-error"),x("undefined"!==typeof e.iat,"internal-error"),Number(e.exp)-Number(e.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */async function Z(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof i["c"]&&tt(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function tt({code:t}){return"auth/user-disabled"===t||"auth/user-token-expired"===t}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */class et{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(t){var e;if(t){const t=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),t}{this.errorBackoff=3e4;const t=null!==(e=this.user.stsTokenManager.expirationTime)&&void 0!==e?e:0,n=t-Date.now()-3e5;return Math.max(0,n)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){return void("auth/network-request-failed"===t.code&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */class nt{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=G(this.lastLoginAt),this.creationTime=G(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
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
 */async function it(t){var e;const n=t.auth,i=await t.getIdToken(),r=await Z(t,K(n,{idToken:i}));x(null===r||void 0===r?void 0:r.users.length,n,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const o=(null===(e=s.providerUserInfo)||void 0===e?void 0:e.length)?ot(s.providerUserInfo):[],a=st(t.providerData,o),c=t.isAnonymous,l=!(t.email&&s.passwordHash)&&!(null===a||void 0===a?void 0:a.length),u=!!c&&l,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new nt(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function rt(t){const e=Object(i["k"])(t);await it(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function st(t,e){const n=t.filter(t=>!e.some(e=>e.providerId===t.providerId));return[...n,...e]}function ot(t){return t.map(t=>{var{providerId:e}=t,n=s(t,["providerId"]);return{providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */async function at(t,e){const n=await V(t,{},async()=>{const n=Object(i["x"])({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:s}=t.config,o=q(t,r,"/v1/token","key="+s),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",M.fetch()(o,{method:"POST",headers:a,body:n})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */class ct{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){x(t.idToken,"internal-error"),x("undefined"!==typeof t.idToken,"internal-error"),x("undefined"!==typeof t.refreshToken,"internal-error");const e="expiresIn"in t&&"undefined"!==typeof t.expiresIn?Number(t.expiresIn):X(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}async getToken(t,e=!1){return x(!this.accessToken||this.refreshToken,t,"user-token-expired"),e||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:n,refreshToken:i,expiresIn:r}=await at(t,e);this.updateTokensAndExpiration(n,i,Number(r))}updateTokensAndExpiration(t,e,n){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(t,e){const{refreshToken:n,accessToken:i,expirationTime:r}=e,s=new ct;return n&&(x("string"===typeof n,"internal-error",{appName:t}),s.refreshToken=n),i&&(x("string"===typeof i,"internal-error",{appName:t}),s.accessToken=i),r&&(x("number"===typeof r,"internal-error",{appName:t}),s.expirationTime=r),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new ct,this.toJSON())}_performRefresh(){return I("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */function lt(t,e){x("string"===typeof t||"undefined"===typeof t,"internal-error",{appName:e})}class ut{constructor(t){var{uid:e,auth:n,stsTokenManager:i}=t,r=s(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.emailVerified=!1,this.isAnonymous=!1,this.tenantId=null,this.providerData=[],this.proactiveRefresh=new et(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.metadata=new nt(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(t){const e=await Z(this,this.stsTokenManager.getToken(this.auth,t));return x(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return Y(this,t)}reload(){return rt(this)}_assign(t){this!==t&&(x(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(t=>Object.assign({},t)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){return new ut(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(t){x(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let n=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),n=!0),e&&await it(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await Z(this,H(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){var n,i,r,s,o,a,c,l;const u=null!==(n=e.displayName)&&void 0!==n?n:void 0,h=null!==(i=e.email)&&void 0!==i?i:void 0,d=null!==(r=e.phoneNumber)&&void 0!==r?r:void 0,f=null!==(s=e.photoURL)&&void 0!==s?s:void 0,p=null!==(o=e.tenantId)&&void 0!==o?o:void 0,g=null!==(a=e._redirectEventId)&&void 0!==a?a:void 0,m=null!==(c=e.createdAt)&&void 0!==c?c:void 0,y=null!==(l=e.lastLoginAt)&&void 0!==l?l:void 0,{uid:b,emailVerified:v,isAnonymous:_,providerData:w,stsTokenManager:I}=e;x(b&&I,t,"internal-error");const T=ct.fromJSON(this.name,I);x("string"===typeof b,t,"internal-error"),lt(u,t.name),lt(h,t.name),x("boolean"===typeof v,t,"internal-error"),x("boolean"===typeof _,t,"internal-error"),lt(d,t.name),lt(f,t.name),lt(p,t.name),lt(g,t.name),lt(m,t.name),lt(y,t.name);const k=new ut({uid:b,auth:t,email:h,emailVerified:v,displayName:u,isAnonymous:_,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:T,createdAt:m,lastLoginAt:y});return w&&Array.isArray(w)&&(k.providerData=w.map(t=>Object.assign({},t))),g&&(k._redirectEventId=g),k}static async _fromIdTokenResponse(t,e,n=!1){const i=new ct;i.updateFromServerResponse(e);const r=new ut({uid:e.localId,auth:t,stsTokenManager:i,isAnonymous:n});return await it(r),r}}
/**
 * @license
 * Copyright 2019 Google LLC
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
 */class ht{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return void 0===e?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}}ht.type="NONE";const dt=ht;
/**
 * @license
 * Copyright 2019 Google LLC
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
 */function ft(t,e,n){return`firebase:${t}:${e}:${n}`}class pt{constructor(t,e,n){this.persistence=t,this.auth=e,this.userKey=n;const{config:i,name:r}=this.auth;this.fullUserKey=ft(this.userKey,i.apiKey,r),this.fullPersistenceKey=ft("persistence",i.apiKey,r),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?ut._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=t,e?this.setCurrentUser(e):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,n="authUser"){if(!e.length)return new pt(E(dt),t,n);const i=(await Promise.all(e.map(async t=>{if(await t._isAvailable())return t}))).filter(t=>t);let r=i[0]||E(dt);const s=ft(n,t.config.apiKey,t.name);let o=null;for(const l of e)try{const e=await l._get(s);if(e){const n=ut._fromJSON(t,e);l!==r&&(o=n),r=l;break}}catch(c){}const a=i.filter(t=>t._shouldAllowMigration);return r._shouldAllowMigration&&a.length?(r=a[0],o&&await r._set(s,o.toJSON()),await Promise.all(e.map(async t=>{if(t!==r)try{await t._remove(s)}catch(c){}})),new pt(r,t,n)):new pt(r,t,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */function gt(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(vt(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(mt(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(wt(e))return"Blackberry";if(xt(e))return"Webos";if(yt(e))return"Safari";if((e.includes("chrome/")||bt(e))&&!e.includes("edge/"))return"Chrome";if(_t(e))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=t.match(e);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function mt(t=Object(i["l"])()){return/firefox\//i.test(t)}function yt(t=Object(i["l"])()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function bt(t=Object(i["l"])()){return/crios\//i.test(t)}function vt(t=Object(i["l"])()){return/iemobile/i.test(t)}function _t(t=Object(i["l"])()){return/android/i.test(t)}function wt(t=Object(i["l"])()){return/blackberry/i.test(t)}function xt(t=Object(i["l"])()){return/webos/i.test(t)}function It(t=Object(i["l"])()){return/iphone|ipad|ipod/i.test(t)}function Tt(t=Object(i["l"])()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(t)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(t)}function kt(t=Object(i["l"])()){var e;return It(t)&&!!(null===(e=window.navigator)||void 0===e?void 0:e.standalone)}function Et(){return Object(i["q"])()&&10===document.documentMode}function St(t=Object(i["l"])()){return It(t)||_t(t)||xt(t)||wt(t)||/windows phone/i.test(t)||vt(t)}function At(){try{return!(!window||window===window.top)}catch(t){return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */function Ot(t,e=[]){let n;switch(t){case"Browser":n=gt(Object(i["l"])());break;case"Worker":n=`${gt(Object(i["l"])())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${r["SDK_VERSION"]}/${s}`}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */class Ct{constructor(t,e){this.app=t,this.config=e,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Dt(this),this.idTokenSubscription=new Dt(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=p,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=e.sdkClientVersion}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=E(e)),this._initializationPromise=this.queue(async()=>{var n,i;if(!this._deleted&&(this.persistenceManager=await pt.create(this,t),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(r){}await this.initializeCurrentUser(e),this.lastNotifiedUid=(null===(i=this.currentUser)||void 0===i?void 0:i.uid)||null,this._deleted||(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();return this.currentUser||t?this.currentUser&&t&&this.currentUser.uid===t.uid?(this._currentUser._assign(t),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(t):void 0}async initializeCurrentUser(t){var e;let n=await this.assertedPersistence.getCurrentUser();if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=null===(e=this.redirectUser)||void 0===e?void 0:e._redirectEventId,r=null===n||void 0===n?void 0:n._redirectEventId,s=await this.tryRedirectSignIn(t);i&&i!==r||!(null===s||void 0===s?void 0:s.user)||(n=s.user)}return n?n._redirectEventId?(x(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)):this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch(n){await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await it(t)}catch(e){if("auth/network-request-failed"!==e.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=D()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const e=t?Object(i["k"])(t):null;return e&&x(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t){if(!this._deleted)return t&&x(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(E(t))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new i["b"]("auth","Firebase",t())}onAuthStateChanged(t,e,n){return this.registerStateListener(this.authStateSubscription,t,e,n)}onIdTokenChanged(t,e,n){return this.registerStateListener(this.idTokenSubscription,t,e,n)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(t=this._currentUser)||void 0===t?void 0:t.toJSON()}}async _setRedirectUser(t,e){const n=await this.getOrInitRedirectPersistenceManager(e);return null===t?n.removeCurrentUser():n.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&E(t)||this._popupRedirectResolver;x(e,this,"argument-error"),this.redirectPersistenceManager=await pt.create(this,[E(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,n;return this._isInitialized&&await this.queue(async()=>{}),(null===(e=this._currentUser)||void 0===e?void 0:e._redirectEventId)===t?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(e=null===(t=this.currentUser)||void 0===t?void 0:t.uid)&&void 0!==e?e:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,n,i){if(this._deleted)return()=>{};const r="function"===typeof e?e:e.next.bind(e),s=this._isInitialized?Promise.resolve():this._initializationPromise;return x(s,this,"internal-error"),s.then(()=>r(this.currentUser)),"function"===typeof e?t.addObserver(e,n,i):t.addObserver(e)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&(this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh()),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return x(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){t&&!this.frameworks.includes(t)&&(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Ot(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const t={["X-Client-Version"]:this.clientVersion};return this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId),t}}function Rt(t){return Object(i["k"])(t)}class Dt{constructor(t){this.auth=t,this.observer=null,this.addObserver=Object(i["g"])(t=>this.observer=t)}get next(){return x(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function Nt(t,e,n){const i=Rt(t);x(i._canInitEmulator,i,"emulator-config-failed"),x(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const r=!!(null===n||void 0===n?void 0:n.disableWarnings),s=Pt(e),{host:o,port:a}=Mt(e),c=null===a?"":":"+a;i.config.emulator={url:`${s}//${o}${c}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||Ft()}function Pt(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Mt(t){const e=Pt(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(i);if(r){const t=r[1];return{host:t,port:Lt(i.substr(t.length+1))}}{const[t,e]=i.split(":");return{host:t,port:Lt(e)}}}function Lt(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Ft(){function t(){const t=document.createElement("p"),e=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",e.position="fixed",e.width="100%",e.backgroundColor="#ffffff",e.border=".1em solid #000000",e.color="#b50000",e.bottom="0px",e.left="0px",e.margin="0px",e.zIndex="10000",e.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}"undefined"!==typeof console&&"function"===typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!==typeof window&&"undefined"!==typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",t):t())}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */class jt{constructor(t,e){this.providerId=t,this.signInMethod=e}toJSON(){return I("not implemented")}_getIdTokenResponse(t){return I("not implemented")}_linkToIdToken(t,e){return I("not implemented")}_getReauthenticationResolver(t){return I("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */async function Ut(t,e){return U(t,"POST","/v1/accounts:resetPassword",j(t,e))}async function Vt(t,e){return U(t,"POST","/v1/accounts:update",e)}async function Bt(t,e){return U(t,"POST","/v1/accounts:update",j(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */async function qt(t,e){return B(t,"POST","/v1/accounts:signInWithPassword",j(t,e))}async function zt(t,e){return U(t,"POST","/v1/accounts:sendOobCode",j(t,e))}async function Wt(t,e){return zt(t,e)}async function Ht(t,e){return zt(t,e)}async function $t(t,e){return zt(t,e)}async function Kt(t,e){return zt(t,e)}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */async function Gt(t,e){return B(t,"POST","/v1/accounts:signInWithEmailLink",j(t,e))}async function Yt(t,e){return B(t,"POST","/v1/accounts:signInWithEmailLink",j(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */class Qt extends jt{constructor(t,e,n,i=null){super("password",n),this._email=t,this._password=e,this._tenantId=i}static _fromEmailAndPassword(t,e){return new Qt(t,e,"password")}static _fromEmailAndCode(t,e,n=null){return new Qt(t,e,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const e="string"===typeof t?JSON.parse(t):t;if((null===e||void 0===e?void 0:e.email)&&(null===e||void 0===e?void 0:e.password)){if("password"===e.signInMethod)return this._fromEmailAndPassword(e.email,e.password);if("emailLink"===e.signInMethod)return this._fromEmailAndCode(e.email,e.password,e.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":return qt(t,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Gt(t,{email:this._email,oobCode:this._password});default:y(t,"internal-error")}}async _linkToIdToken(t,e){switch(this.signInMethod){case"password":return Vt(t,{idToken:e,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Yt(t,{idToken:e,email:this._email,oobCode:this._password});default:y(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */async function Jt(t,e){return B(t,"POST","/v1/accounts:signInWithIdp",j(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */const Xt="http://localhost";class Zt extends jt{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const e=new Zt(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):y("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e="string"===typeof t?JSON.parse(t):t,{providerId:n,signInMethod:i}=e,r=s(e,["providerId","signInMethod"]);if(!n||!i)return null;const o=new Zt(n,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(t){const e=this.buildRequest();return Jt(t,e)}_linkToIdToken(t,e){const n=this.buildRequest();return n.idToken=e,Jt(t,n)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,Jt(t,e)}buildRequest(){const t={requestUri:Xt,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e["id_token"]=this.idToken),this.accessToken&&(e["access_token"]=this.accessToken),this.secret&&(e["oauth_token_secret"]=this.secret),e["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(e["nonce"]=this.nonce),t.postBody=Object(i["x"])(e)}return t}}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */async function te(t,e){return U(t,"POST","/v1/accounts:sendVerificationCode",j(t,e))}async function ee(t,e){return B(t,"POST","/v1/accounts:signInWithPhoneNumber",j(t,e))}async function ne(t,e){const n=await B(t,"POST","/v1/accounts:signInWithPhoneNumber",j(t,e));if(n.temporaryProof)throw W(t,"account-exists-with-different-credential",n);return n}const ie={["USER_NOT_FOUND"]:"user-not-found"};async function re(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return B(t,"POST","/v1/accounts:signInWithPhoneNumber",j(t,n),ie)}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */class se extends jt{constructor(t){super("phone","phone"),this.params=t}static _fromVerification(t,e){return new se({verificationId:t,verificationCode:e})}static _fromTokenResponse(t,e){return new se({phoneNumber:t,temporaryProof:e})}_getIdTokenResponse(t){return ee(t,this._makeVerificationRequest())}_linkToIdToken(t,e){return ne(t,Object.assign({idToken:e},this._makeVerificationRequest()))}_getReauthenticationResolver(t){return re(t,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:t,phoneNumber:e,verificationId:n,verificationCode:i}=this.params;return t&&e?{temporaryProof:t,phoneNumber:e}:{sessionInfo:n,code:i}}toJSON(){const t={providerId:this.providerId};return this.params.phoneNumber&&(t.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(t.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(t.verificationCode=this.params.verificationCode),this.params.verificationId&&(t.verificationId=this.params.verificationId),t}static fromJSON(t){"string"===typeof t&&(t=JSON.parse(t));const{verificationId:e,verificationCode:n,phoneNumber:i,temporaryProof:r}=t;return n||e||i||r?new se({verificationId:e,verificationCode:n,phoneNumber:i,temporaryProof:r}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */function oe(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function ae(t){const e=Object(i["y"])(Object(i["j"])(t))["link"],n=e?Object(i["y"])(Object(i["j"])(e))["deep_link_id"]:null,r=Object(i["y"])(Object(i["j"])(t))["deep_link_id"],s=r?Object(i["y"])(Object(i["j"])(r))["link"]:null;return s||r||n||e||t}class ce{constructor(t){var e,n,r,s,o,a;const c=Object(i["y"])(Object(i["j"])(t)),l=null!==(e=c["apiKey"])&&void 0!==e?e:null,u=null!==(n=c["oobCode"])&&void 0!==n?n:null,h=oe(null!==(r=c["mode"])&&void 0!==r?r:null);x(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=null!==(s=c["continueUrl"])&&void 0!==s?s:null,this.languageCode=null!==(o=c["languageCode"])&&void 0!==o?o:null,this.tenantId=null!==(a=c["tenantId"])&&void 0!==a?a:null}static parseLink(t){const e=ae(t);try{return new ce(e)}catch(n){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */
class le{constructor(){this.providerId=le.PROVIDER_ID}static credential(t,e){return Qt._fromEmailAndPassword(t,e)}static credentialWithLink(t,e){const n=ce.parseLink(e);return x(n,"argument-error"),Qt._fromEmailAndCode(t,n.code,n.tenantId)}}le.PROVIDER_ID="password",le.EMAIL_PASSWORD_SIGN_IN_METHOD="password",le.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
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
 */
class ue{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
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
 */class he extends ue{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}class de extends he{static credentialFromJSON(t){const e="string"===typeof t?JSON.parse(t):t;return x("providerId"in e&&"signInMethod"in e,"argument-error"),Zt._fromParams(e)}credential(t){return this._credential(Object.assign(Object.assign({},t),{nonce:t.rawNonce}))}_credential(t){return x(t.idToken||t.accessToken,"argument-error"),Zt._fromParams(Object.assign(Object.assign({},t),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(t){return de.oauthCredentialFromTaggedObject(t)}static credentialFromError(t){return de.oauthCredentialFromTaggedObject(t.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:n,oauthTokenSecret:i,pendingToken:r,nonce:s,providerId:o}=t;if(!n&&!i&&!e&&!r)return null;if(!o)return null;try{return new de(o)._credential({idToken:e,accessToken:n,nonce:s,pendingToken:r})}catch(a){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */class fe extends he{constructor(){super("facebook.com")}static credential(t){return Zt._fromParams({providerId:fe.PROVIDER_ID,signInMethod:fe.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return fe.credentialFromTaggedObject(t)}static credentialFromError(t){return fe.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return fe.credential(t.oauthAccessToken)}catch(e){return null}}}fe.FACEBOOK_SIGN_IN_METHOD="facebook.com",fe.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
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
 */
class pe extends he{constructor(){super("google.com"),this.addScope("profile")}static credential(t,e){return Zt._fromParams({providerId:pe.PROVIDER_ID,signInMethod:pe.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return pe.credentialFromTaggedObject(t)}static credentialFromError(t){return pe.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:n}=t;if(!e&&!n)return null;try{return pe.credential(e,n)}catch(i){return null}}}pe.GOOGLE_SIGN_IN_METHOD="google.com",pe.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
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
 */
class ge extends he{constructor(){super("github.com")}static credential(t){return Zt._fromParams({providerId:ge.PROVIDER_ID,signInMethod:ge.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return ge.credentialFromTaggedObject(t)}static credentialFromError(t){return ge.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return ge.credential(t.oauthAccessToken)}catch(e){return null}}}ge.GITHUB_SIGN_IN_METHOD="github.com",ge.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
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
 */
const me="http://localhost";class ye extends jt{constructor(t,e){super(t,t),this.pendingToken=e}_getIdTokenResponse(t){const e=this.buildRequest();return Jt(t,e)}_linkToIdToken(t,e){const n=this.buildRequest();return n.idToken=e,Jt(t,n)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,Jt(t,e)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(t){const e="string"===typeof t?JSON.parse(t):t,{providerId:n,signInMethod:i,pendingToken:r}=e;return n&&i&&r&&n===i?new ye(n,r):null}static _create(t,e){return new ye(t,e)}buildRequest(){return{requestUri:me,returnSecureToken:!0,pendingToken:this.pendingToken}}}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */const be="saml.";class ve extends ue{constructor(t){x(t.startsWith(be),"argument-error"),super(t)}static credentialFromResult(t){return ve.samlCredentialFromTaggedObject(t)}static credentialFromError(t){return ve.samlCredentialFromTaggedObject(t.customData||{})}static credentialFromJSON(t){const e=ye.fromJSON(t);return x(e,"argument-error"),e}static samlCredentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{pendingToken:e,providerId:n}=t;if(!e||!n)return null;try{return ye._create(n,e)}catch(i){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */class _e extends he{constructor(){super("twitter.com")}static credential(t,e){return Zt._fromParams({providerId:_e.PROVIDER_ID,signInMethod:_e.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return _e.credentialFromTaggedObject(t)}static credentialFromError(t){return _e.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:n}=t;if(!e||!n)return null;try{return _e.credential(e,n)}catch(i){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */
async function we(t,e){return B(t,"POST","/v1/accounts:signUp",j(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */_e.TWITTER_SIGN_IN_METHOD="twitter.com",_e.PROVIDER_ID="twitter.com";class xe{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,e,n,i=!1){const r=await ut._fromIdTokenResponse(t,n,i),s=Ie(n),o=new xe({user:r,providerId:s,_tokenResponse:n,operationType:e});return o}static async _forOperation(t,e,n){await t._updateTokensIfNecessary(n,!0);const i=Ie(n);return new xe({user:t,providerId:i,_tokenResponse:n,operationType:e})}}function Ie(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */async function Te(t){var e;const n=Rt(t);if(await n._initializationPromise,null===(e=n.currentUser)||void 0===e?void 0:e.isAnonymous)return new xe({user:n.currentUser,providerId:null,operationType:"signIn"});const i=await we(n,{returnSecureToken:!0}),r=await xe._fromIdTokenResponse(n,"signIn",i,!0);return await n._updateCurrentUser(r.user),r}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */class ke extends i["c"]{constructor(t,e,n,i){var r;super(e.code,e.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,ke.prototype),this.customData={appName:t.name,tenantId:null!==(r=t.tenantId)&&void 0!==r?r:void 0,_serverResponse:e.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(t,e,n,i){return new ke(t,e,n,i)}}function Ee(t,e,n,i){const r="reauthenticate"===e?n._getReauthenticationResolver(t):n._getIdTokenResponse(t);return r.catch(n=>{if("auth/multi-factor-auth-required"===n.code)throw ke._fromErrorAndOperation(t,n,e,i);throw n})}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */function Se(t){return new Set(t.map(({providerId:t})=>t).filter(t=>!!t))}
/**
 * @license
 * Copyright 2019 Google LLC
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
 */async function Ae(t,e){const n=Object(i["k"])(t);await Ce(!0,n,e);const{providerUserInfo:r}=await $(n.auth,{idToken:await n.getIdToken(),deleteProvider:[e]}),s=Se(r||[]);return n.providerData=n.providerData.filter(t=>s.has(t.providerId)),s.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function Oe(t,e,n=!1){const i=await Z(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return xe._forOperation(t,"link",i)}async function Ce(t,e,n){await it(e);const i=Se(e.providerData),r=!1===t?"provider-already-linked":"no-such-provider";x(i.has(n)===t,e.auth,r)}
/**
 * @license
 * Copyright 2019 Google LLC
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
 */async function Re(t,e,n=!1){const{auth:i}=t,r="reauthenticate";try{const s=await Z(t,Ee(i,r,e,t),n);x(s.idToken,i,"internal-error");const o=J(s.idToken);x(o,i,"internal-error");const{sub:a}=o;return x(t.uid===a,i,"user-mismatch"),xe._forOperation(t,r,s)}catch(s){throw"auth/user-not-found"===(null===s||void 0===s?void 0:s.code)&&y(i,"user-mismatch"),s}}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */async function De(t,e,n=!1){const i="signIn",r=await Ee(t,i,e),s=await xe._fromIdTokenResponse(t,i,r);return n||await t._updateCurrentUser(s.user),s}async function Ne(t,e){return De(Rt(t),e)}async function Pe(t,e){const n=Object(i["k"])(t);return await Ce(!1,n,e.providerId),Oe(n,e)}async function Me(t,e){return Re(Object(i["k"])(t),e)}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */async function Le(t,e){return B(t,"POST","/v1/accounts:signInWithCustomToken",j(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */async function Fe(t,e){const n=Rt(t),i=await Le(n,{token:e,returnSecureToken:!0}),r=await xe._fromIdTokenResponse(n,"signIn",i);return await n._updateCurrentUser(r.user),r}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */class je{constructor(t,e){this.factorId=t,this.uid=e.mfaEnrollmentId,this.enrollmentTime=new Date(e.enrolledAt).toUTCString(),this.displayName=e.displayName}static _fromServerResponse(t,e){return"phoneInfo"in e?Ue._fromServerResponse(t,e):y(t,"internal-error")}}class Ue extends je{constructor(t){super("phone",t),this.phoneNumber=t.phoneInfo}static _fromServerResponse(t,e){return new Ue(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */function Ve(t,e,n){var i;x((null===(i=n.url)||void 0===i?void 0:i.length)>0,t,"invalid-continue-uri"),x("undefined"===typeof n.dynamicLinkDomain||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(x(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(x(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */async function Be(t,e,n){const r=Object(i["k"])(t),s={requestType:"PASSWORD_RESET",email:e};n&&Ve(r,s,n),await Ht(r,s)}async function qe(t,e,n){await Ut(Object(i["k"])(t),{oobCode:e,newPassword:n})}async function ze(t,e){await Bt(Object(i["k"])(t),{oobCode:e})}async function We(t,e){const n=Object(i["k"])(t),r=await Ut(n,{oobCode:e}),s=r.requestType;switch(x(s,n,"internal-error"),s){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":x(r.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":x(r.mfaInfo,n,"internal-error");default:x(r.email,n,"internal-error")}let o=null;return r.mfaInfo&&(o=je._fromServerResponse(Rt(n),r.mfaInfo)),{data:{email:("VERIFY_AND_CHANGE_EMAIL"===r.requestType?r.newEmail:r.email)||null,previousEmail:("VERIFY_AND_CHANGE_EMAIL"===r.requestType?r.email:r.newEmail)||null,multiFactorInfo:o},operation:s}}async function He(t,e){const{data:n}=await We(Object(i["k"])(t),e);return n.email}async function $e(t,e,n){const i=Rt(t),r=await we(i,{returnSecureToken:!0,email:e,password:n}),s=await xe._fromIdTokenResponse(i,"signIn",r);return await i._updateCurrentUser(s.user),s}function Ke(t,e,n){return Ne(Object(i["k"])(t),le.credential(e,n))}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */async function Ge(t,e,n){const r=Object(i["k"])(t),s={requestType:"EMAIL_SIGNIN",email:e};x(n.handleCodeInApp,r,"argument-error"),n&&Ve(r,s,n),await $t(r,s)}function Ye(t,e){const n=ce.parseLink(e);return"EMAIL_SIGNIN"===(null===n||void 0===n?void 0:n.operation)}async function Qe(t,e,n){const r=Object(i["k"])(t),s=le.credentialWithLink(e,n||A());return x(s._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),Ne(r,s)}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */async function Je(t,e){return U(t,"POST","/v1/accounts:createAuthUri",j(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */async function Xe(t,e){const n=O()?A():"http://localhost",r={identifier:e,continueUri:n},{signinMethods:s}=await Je(Object(i["k"])(t),r);return s||[]}async function Ze(t,e){const n=Object(i["k"])(t),r=await t.getIdToken(),s={requestType:"VERIFY_EMAIL",idToken:r};e&&Ve(n.auth,s,e);const{email:o}=await Wt(n.auth,s);o!==t.email&&await t.reload()}async function tn(t,e,n){const r=Object(i["k"])(t),s=await t.getIdToken(),o={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:s,newEmail:e};n&&Ve(r.auth,o,n);const{email:a}=await Kt(r.auth,o);a!==t.email&&await t.reload()}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */async function en(t,e){return U(t,"POST","/v1/accounts:update",e)}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */async function nn(t,{displayName:e,photoURL:n}){if(void 0===e&&void 0===n)return;const r=Object(i["k"])(t),s=await r.getIdToken(),o={idToken:s,displayName:e,photoUrl:n,returnSecureToken:!0},a=await Z(r,en(r.auth,o));r.displayName=a.displayName||null,r.photoURL=a.photoUrl||null;const c=r.providerData.find(({providerId:t})=>"password"===t);c&&(c.displayName=r.displayName,c.photoURL=r.photoURL),await r._updateTokensIfNecessary(a)}function rn(t,e){return on(Object(i["k"])(t),e,null)}function sn(t,e){return on(Object(i["k"])(t),null,e)}async function on(t,e,n){const{auth:i}=t,r=await t.getIdToken(),s={idToken:r,returnSecureToken:!0};e&&(s.email=e),n&&(s.password=n);const o=await Z(t,Vt(i,s));await t._updateTokensIfNecessary(o,!0)}
/**
 * @license
 * Copyright 2019 Google LLC
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
 */function an(t){var e,n;if(!t)return null;const{providerId:i}=t,r=t.rawUserInfo?JSON.parse(t.rawUserInfo):{},s=t.isNewUser||"identitytoolkit#SignupNewUserResponse"===t.kind;if(!i&&(null===t||void 0===t?void 0:t.idToken)){const i=null===(n=null===(e=J(t.idToken))||void 0===e?void 0:e.firebase)||void 0===n?void 0:n["sign_in_provider"];if(i){const t="anonymous"!==i&&"custom"!==i?i:null;return new cn(s,t)}}if(!i)return null;switch(i){case"facebook.com":return new un(s,r);case"github.com":return new hn(s,r);case"google.com":return new dn(s,r);case"twitter.com":return new fn(s,r,t.screenName||null);case"custom":case"anonymous":return new cn(s,null);default:return new cn(s,i,r)}}class cn{constructor(t,e,n={}){this.isNewUser=t,this.providerId=e,this.profile=n}}class ln extends cn{constructor(t,e,n,i){super(t,e,n),this.username=i}}class un extends cn{constructor(t,e){super(t,"facebook.com",e)}}class hn extends ln{constructor(t,e){super(t,"github.com",e,"string"===typeof(null===e||void 0===e?void 0:e.login)?null===e||void 0===e?void 0:e.login:null)}}class dn extends cn{constructor(t,e){super(t,"google.com",e)}}class fn extends ln{constructor(t,e,n){super(t,"twitter.com",e,n)}}function pn(t){const{user:e,_tokenResponse:n}=t;return e.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:an(n)}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */class gn{constructor(t,e){this.type=t,this.credential=e}static _fromIdtoken(t){return new gn("enroll",t)}static _fromMfaPendingCredential(t){return new gn("signin",t)}toJSON(){const t="enroll"===this.type?"idToken":"pendingCredential";return{multiFactorSession:{[t]:this.credential}}}static fromJSON(t){var e,n;if(null===t||void 0===t?void 0:t.multiFactorSession){if(null===(e=t.multiFactorSession)||void 0===e?void 0:e.pendingCredential)return gn._fromMfaPendingCredential(t.multiFactorSession.pendingCredential);if(null===(n=t.multiFactorSession)||void 0===n?void 0:n.idToken)return gn._fromIdtoken(t.multiFactorSession.idToken)}return null}}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */class mn{constructor(t,e,n){this.session=t,this.hints=e,this.signInResolver=n}static _fromError(t,e){const n=Rt(t),i=e.customData._serverResponse,r=(i.mfaInfo||[]).map(t=>je._fromServerResponse(n,t));x(i.mfaPendingCredential,n,"internal-error");const s=gn._fromMfaPendingCredential(i.mfaPendingCredential);return new mn(s,r,async t=>{const r=await t._process(n,s);delete i.mfaInfo,delete i.mfaPendingCredential;const o=Object.assign(Object.assign({},i),{idToken:r.idToken,refreshToken:r.refreshToken});switch(e.operationType){case"signIn":const t=await xe._fromIdTokenResponse(n,e.operationType,o);return await n._updateCurrentUser(t.user),t;case"reauthenticate":return x(e.user,n,"internal-error"),xe._forOperation(e.user,e.operationType,o);default:y(n,"internal-error")}})}async resolveSignIn(t){const e=t;return this.signInResolver(e)}}function yn(t,e){var n;const r=Object(i["k"])(t),s=e;return x(e.customData.operationType,r,"argument-error"),x(null===(n=s.customData._serverResponse)||void 0===n?void 0:n.mfaPendingCredential,r,"argument-error"),mn._fromError(r,s)}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */function bn(t,e){return U(t,"POST","/v2/accounts/mfaEnrollment:start",j(t,e))}function vn(t,e){return U(t,"POST","/v2/accounts/mfaEnrollment:finalize",j(t,e))}function _n(t,e){return U(t,"POST","/v2/accounts/mfaEnrollment:withdraw",j(t,e))}class wn{constructor(t){this.user=t,this.enrolledFactors=[],t._onReload(e=>{e.mfaInfo&&(this.enrolledFactors=e.mfaInfo.map(e=>je._fromServerResponse(t.auth,e)))})}static _fromUser(t){return new wn(t)}async getSession(){return gn._fromIdtoken(await this.user.getIdToken())}async enroll(t,e){const n=t,i=await this.getSession(),r=await Z(this.user,n._process(this.user.auth,i,e));return await this.user._updateTokensIfNecessary(r),this.user.reload()}async unenroll(t){const e="string"===typeof t?t:t.uid,n=await this.user.getIdToken(),i=await Z(this.user,_n(this.user.auth,{idToken:n,mfaEnrollmentId:e}));this.enrolledFactors=this.enrolledFactors.filter(({uid:t})=>t!==e),await this.user._updateTokensIfNecessary(i);try{await this.user.reload()}catch(r){if("auth/user-token-expired"!==r.code)throw r}}}const xn=new WeakMap;function In(t){const e=Object(i["k"])(t);return xn.has(e)||xn.set(e,wn._fromUser(e)),xn.get(e)}const Tn="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
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
 */class kn{constructor(t,e){this.storageRetriever=t,this.type=e}_isAvailable(){try{return this.storage?(this.storage.setItem(Tn,"1"),this.storage.removeItem(Tn),Promise.resolve(!0)):Promise.resolve(!1)}catch(t){return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */function En(){const t=Object(i["l"])();return yt(t)||It(t)}const Sn=1e3,An=10;class On extends kn{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=En()&&At(),this.fallbackToPolling=St(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const n=this.storage.getItem(e),i=this.localCache[e];n!==i&&t(e,i,n)}}onStorageEvent(t,e=!1){if(!t.key)return void this.forAllChangedKeys((t,e,n)=>{this.notifyListeners(t,n)});const n=t.key;if(e?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const i=this.storage.getItem(n);if(t.newValue!==i)null!==t.newValue?this.storage.setItem(n,t.newValue):this.storage.removeItem(n);else if(this.localCache[n]===t.newValue&&!e)return}const i=()=>{const t=this.storage.getItem(n);(e||this.localCache[n]!==t)&&this.notifyListeners(n,t)},r=this.storage.getItem(n);Et()&&r!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,An):i()}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const i of Array.from(n))i(e?JSON.parse(e):e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,e,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:n}),!0)})},Sn)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}}On.type="LOCAL";const Cn=On;
/**
 * @license
 * Copyright 2020 Google LLC
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
 */class Rn extends kn{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,e){}_removeListener(t,e){}}Rn.type="SESSION";const Dn=Rn;
/**
 * @license
 * Copyright 2019 Google LLC
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
 */function Nn(t){return Promise.all(t.map(async t=>{try{const e=await t;return{fulfilled:!0,value:e}}catch(e){return{fulfilled:!1,reason:e}}}))}
/**
 * @license
 * Copyright 2019 Google LLC
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
 */class Pn{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const e=this.receivers.find(e=>e.isListeningto(t));if(e)return e;const n=new Pn(t);return this.receivers.push(n),n}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:n,eventType:i,data:r}=e.data,s=this.handlersMap[i];if(!(null===s||void 0===s?void 0:s.size))return;e.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const o=Array.from(s).map(async t=>t(e.origin,r)),a=await Nn(o);e.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:a})}_subscribe(t,e){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),e&&0!==this.handlersMap[t].size||delete this.handlersMap[t],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */
function Mn(t="",e=10){let n="";for(let i=0;i<e;i++)n+=Math.floor(10*Math.random());return t+n}
/**
 * @license
 * Copyright 2019 Google LLC
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
 */Pn.receivers=[];class Ln{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,n=50){const i="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,s;return new Promise((o,a)=>{const c=Mn("",20);i.port1.start();const l=setTimeout(()=>{a(new Error("unsupported_event"))},n);s={messageChannel:i,onMessage(t){const e=t;if(e.data.eventId===c)switch(e.data.status){case"ack":clearTimeout(l),r=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),o(e.data.response);break;default:clearTimeout(l),clearTimeout(r),a(new Error("invalid_response"));break}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:t,eventId:c,data:e},[i.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */function Fn(){return window}function jn(t){Fn().location.href=t}
/**
 * @license
 * Copyright 2020 Google LLC.
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
 */function Un(){return"undefined"!==typeof Fn()["WorkerGlobalScope"]&&"function"===typeof Fn()["importScripts"]}async function Vn(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const t=await navigator.serviceWorker.ready;return t.active}catch(t){return null}}function Bn(){var t;return(null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null}function qn(){return Un()?self:null}
/**
 * @license
 * Copyright 2019 Google LLC
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
 */const zn="firebaseLocalStorageDb",Wn=1,Hn="firebaseLocalStorage",$n="fbase_key";class Kn{constructor(t){this.request=t}toPromise(){return new Promise((t,e)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{e(this.request.error)})})}}function Gn(t,e){return t.transaction([Hn],e?"readwrite":"readonly").objectStore(Hn)}function Yn(){const t=indexedDB.deleteDatabase(zn);return new Kn(t).toPromise()}function Qn(){const t=indexedDB.open(zn,Wn);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const e=t.result;try{e.createObjectStore(Hn,{keyPath:$n})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const n=t.result;n.objectStoreNames.contains(Hn)?e(n):(n.close(),await Yn(),e(await Qn()))})})}async function Jn(t,e,n){const i=Gn(t,!0).put({[$n]:e,value:n});return new Kn(i).toPromise()}async function Xn(t,e){const n=Gn(t,!1).get(e),i=await new Kn(n).toPromise();return void 0===i?null:i.value}function Zn(t,e){const n=Gn(t,!0).delete(e);return new Kn(n).toPromise()}const ti=800,ei=3;class ni{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db||(this.db=await Qn()),this.db}async _withRetries(t){let e=0;while(1)try{const e=await this._openDb();return await t(e)}catch(n){if(e++>ei)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Un()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Pn._getInstance(qn()),this.receiver._subscribe("keyChanged",async(t,e)=>{const n=await this._poll();return{keyProcessed:n.includes(e.key)}}),this.receiver._subscribe("ping",async(t,e)=>["keyChanged"])}async initializeSender(){var t,e;if(this.activeServiceWorker=await Vn(),!this.activeServiceWorker)return;this.sender=new Ln(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(t=n[0])||void 0===t?void 0:t.fulfilled)&&(null===(e=n[0])||void 0===e?void 0:e.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(this.sender&&this.activeServiceWorker&&Bn()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch(e){}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Qn();return await Jn(t,Tn,"1"),await Zn(t,Tn),!0}catch(t){}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Jn(n,t,e)),this.localCache[t]=e,this.notifyServiceWorker(t)))}async _get(t){const e=await this._withRetries(e=>Xn(e,t));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(e=>Zn(e,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(t=>{const e=Gn(t,!1).getAll();return new Kn(e).toPromise()});if(!t)return[];if(0!==this.pendingWrites)return[];const e=[],n=new Set;for(const{fbase_key:i,value:r}of t)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),e.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!n.has(i)&&(this.notifyListeners(i,null),e.push(i));return e}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const i of Array.from(n))i(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),ti)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&this.stopPolling()}}ni.type="LOCAL";const ii=ni;
/**
 * @license
 * Copyright 2020 Google LLC
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
 */function ri(t,e){return U(t,"POST","/v2/accounts/mfaSignIn:start",j(t,e))}function si(t,e){return U(t,"POST","/v2/accounts/mfaSignIn:finalize",j(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */async function oi(t){return(await U(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */function ai(){var t,e;return null!==(e=null===(t=document.getElementsByTagName("head"))||void 0===t?void 0:t[0])&&void 0!==e?e:document}function ci(t){return new Promise((e,n)=>{const i=document.createElement("script");i.setAttribute("src",t),i.onload=e,i.onerror=t=>{const e=b("internal-error");e.customData=t,n(e)},i.type="text/javascript",i.charset="UTF-8",ai().appendChild(i)})}function li(t){return`__${t}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */const ui=500,hi=6e4,di=1e12;class fi{constructor(t){this.auth=t,this.counter=di,this._widgets=new Map}render(t,e){const n=this.counter;return this._widgets.set(n,new pi(t,this.auth.name,e||{})),this.counter++,n}reset(t){var e;const n=t||di;null===(e=this._widgets.get(n))||void 0===e||e.delete(),this._widgets.delete(n)}getResponse(t){var e;const n=t||di;return(null===(e=this._widgets.get(n))||void 0===e?void 0:e.getResponse())||""}async execute(t){var e;const n=t||di;return null===(e=this._widgets.get(n))||void 0===e||e.execute(),""}}class pi{constructor(t,e,n){this.params=n,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i="string"===typeof t?document.getElementById(t):t;x(i,"argument-error",{appName:e}),this.container=i,this.isVisible="invisible"!==this.params.size,this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),this.timerId||(this.timerId=window.setTimeout(()=>{this.responseToken=gi(50);const{callback:t,"expired-callback":e}=this.params;if(t)try{t(this.responseToken)}catch(n){}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,e)try{e()}catch(n){}this.isVisible&&this.execute()},hi)},ui))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function gi(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let i=0;i<t;i++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */const mi=li("rcb"),yi=new N(3e4,6e4),bi="https://www.google.com/recaptcha/api.js?";class vi{constructor(){this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!Fn().grecaptcha}load(t,e=""){return x(_i(e),t,"argument-error"),this.shouldResolveImmediately(e)?Promise.resolve(Fn().grecaptcha):new Promise((n,r)=>{const s=Fn().setTimeout(()=>{r(b(t,"network-request-failed"))},yi.get());Fn()[mi]=()=>{Fn().clearTimeout(s),delete Fn()[mi];const i=Fn().grecaptcha;if(!i)return void r(b(t,"internal-error"));const o=i.render;i.render=(t,e)=>{const n=o(t,e);return this.counter++,n},this.hostLanguage=e,n(i)};const o=`${bi}?${Object(i["x"])({onload:mi,render:"explicit",hl:e})}`;ci(o).catch(()=>{clearTimeout(s),r(b(t,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(t){return!!Fn().grecaptcha&&(t===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function _i(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class wi{async load(t){return new fi(t)}clearedOneInstance(){}}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */const xi="recaptcha",Ii={theme:"light",type:"image"};class Ti{constructor(t,e=Object.assign({},Ii),n){this.parameters=e,this.type=xi,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=Rt(n),this.isInvisible="invisible"===this.parameters.size,x("undefined"!==typeof document,this.auth,"operation-not-supported-in-this-environment");const i="string"===typeof t?document.getElementById(t):t;x(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new wi:new vi,this.validateStartingState()}async verify(){this.assertNotDestroyed();const t=await this.render(),e=this.getAssertedRecaptcha(),n=e.getResponse(t);return n||new Promise(n=>{const i=t=>{t&&(this.tokenChangeListeners.delete(i),n(t))};this.tokenChangeListeners.add(i),this.isInvisible&&e.execute(t)})}render(){try{this.assertNotDestroyed()}catch(t){return Promise.reject(t)}return this.renderPromise||(this.renderPromise=this.makeRenderPromise().catch(t=>{throw this.renderPromise=null,t})),this.renderPromise}_reset(){this.assertNotDestroyed(),null!==this.widgetId&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(t=>{this.container.removeChild(t)})}validateStartingState(){x(!this.parameters.sitekey,this.auth,"argument-error"),x(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),x("undefined"!==typeof document,this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(t){return e=>{if(this.tokenChangeListeners.forEach(t=>t(e)),"function"===typeof t)t(e);else if("string"===typeof t){const n=Fn()[t];"function"===typeof n&&n(e)}}}assertNotDestroyed(){x(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let t=this.container;if(!this.isInvisible){const e=document.createElement("div");t.appendChild(e),t=e}this.widgetId=this.getAssertedRecaptcha().render(t,this.parameters)}return this.widgetId}async init(){x(O()&&!Un(),this.auth,"internal-error"),await ki(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const t=await oi(this.auth);x(t,this.auth,"internal-error"),this.parameters.sitekey=t}getAssertedRecaptcha(){return x(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function ki(){let t=null;return new Promise(e=>{"complete"!==document.readyState?(t=()=>e(),window.addEventListener("load",t)):e()}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */class Ei{constructor(t,e){this.verificationId=t,this.onConfirmation=e}confirm(t){const e=se._fromVerification(this.verificationId,t);return this.onConfirmation(e)}}async function Si(t,e,n){const r=Rt(t),s=await Ci(r,e,Object(i["k"])(n));return new Ei(s,t=>Ne(r,t))}async function Ai(t,e,n){const r=Object(i["k"])(t);await Ce(!1,r,"phone");const s=await Ci(r.auth,e,Object(i["k"])(n));return new Ei(s,t=>Pe(r,t))}async function Oi(t,e,n){const r=Object(i["k"])(t),s=await Ci(r.auth,e,Object(i["k"])(n));return new Ei(s,t=>Me(r,t))}async function Ci(t,e,n){var i;const r=await n.verify();try{let s;if(x("string"===typeof r,t,"argument-error"),x(n.type===xi,t,"argument-error"),s="string"===typeof e?{phoneNumber:e}:e,"session"in s){const e=s.session;if("phoneNumber"in s){x("enroll"===e.type,t,"internal-error");const n=await bn(t,{idToken:e.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:r}});return n.phoneSessionInfo.sessionInfo}{x("signin"===e.type,t,"internal-error");const n=(null===(i=s.multiFactorHint)||void 0===i?void 0:i.uid)||s.multiFactorUid;x(n,t,"missing-multi-factor-info");const o=await ri(t,{mfaPendingCredential:e.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:r}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:e}=await te(t,{phoneNumber:s.phoneNumber,recaptchaToken:r});return e}}finally{n._reset()}}async function Ri(t,e){await Oe(Object(i["k"])(t),e)}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */class Di{constructor(t){this.providerId=Di.PROVIDER_ID,this.auth=Rt(t)}verifyPhoneNumber(t,e){return Ci(this.auth,t,Object(i["k"])(e))}static credential(t,e){return se._fromVerification(t,e)}static credentialFromResult(t){const e=t;return Di.credentialFromTaggedObject(e)}static credentialFromError(t){return Di.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{phoneNumber:e,temporaryProof:n}=t;return e&&n?se._fromTokenResponse(e,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
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
 */
function Ni(t,e){return e?E(e):(x(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
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
 */Di.PROVIDER_ID="phone",Di.PHONE_SIGN_IN_METHOD="phone";class Pi extends jt{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Jt(t,this._buildIdpRequest())}_linkToIdToken(t,e){return Jt(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return Jt(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}}function Mi(t){return De(t.auth,new Pi(t),t.bypassAuthState)}function Li(t){const{auth:e,user:n}=t;return x(n,e,"internal-error"),Re(n,new Pi(t),t.bypassAuthState)}async function Fi(t){const{auth:e,user:n}=t;return x(n,e,"internal-error"),Oe(n,new Pi(t),t.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */class ji{constructor(t,e,n,i,r=!1){this.auth=t,this.resolver=n,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}execute(){return new Promise(async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(t){const{urlResponse:e,sessionId:n,postBody:i,tenantId:r,error:s,type:o}=t;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:e,sessionId:n,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(c){this.reject(c)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return Mi;case"linkViaPopup":case"linkViaRedirect":return Fi;case"reauthViaPopup":case"reauthViaRedirect":return Li;default:y(this.auth,"internal-error")}}resolve(t){T(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){T(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */const Ui=new N(2e3,1e4);async function Vi(t,e,n){const i=Rt(t);_(t,e,ue);const r=Ni(i,n),s=new zi(i,"signInViaPopup",e,r);return s.executeNotNull()}async function Bi(t,e,n){const r=Object(i["k"])(t);_(r.auth,e,ue);const s=Ni(r.auth,n),o=new zi(r.auth,"reauthViaPopup",e,s,r);return o.executeNotNull()}async function qi(t,e,n){const r=Object(i["k"])(t);_(r.auth,e,ue);const s=Ni(r.auth,n),o=new zi(r.auth,"linkViaPopup",e,s,r);return o.executeNotNull()}class zi extends ji{constructor(t,e,n,i,r){super(t,e,i,r),this.provider=n,this.authWindow=null,this.pollId=null,zi.currentPopupAction&&zi.currentPopupAction.cancel(),zi.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return x(t,this.auth,"internal-error"),t}async onExecution(){T(1===this.filter.length,"Popup operations only handle one event");const t=Mn();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(b(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return(null===(t=this.authWindow)||void 0===t?void 0:t.associatedEvent)||null}cancel(){this.reject(b(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,zi.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,n;(null===(n=null===(e=this.authWindow)||void 0===e?void 0:e.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(b(this.auth,"popup-closed-by-user"))},2e3):this.pollId=window.setTimeout(t,Ui.get())};t()}}zi.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
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
 */
const Wi="pendingRedirect",Hi=new Map;class $i extends ji{constructor(t,e,n=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,n),this.eventId=null}async execute(){let t=Hi.get(this.auth._key());if(!t){try{const e=await Ki(this.resolver,this.auth),n=e?await super.execute():null;t=()=>Promise.resolve(n)}catch(e){t=()=>Promise.reject(e)}Hi.set(this.auth._key(),t)}return this.bypassAuthState||Hi.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if("signInViaRedirect"===t.type)return super.onAuthEvent(t);if("unknown"!==t.type){if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function Ki(t,e){const n=Ji(e),i=Qi(t);if(!await i._isAvailable())return!1;const r="true"===await i._get(n);return await i._remove(n),r}async function Gi(t,e){return Qi(t)._set(Ji(e),"true")}function Yi(){Hi.clear()}function Qi(t){return E(t._redirectPersistence)}function Ji(t){return ft(Wi,t.config.apiKey,t.name)}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */function Xi(t,e,n){return Zi(t,e,n)}async function Zi(t,e,n){const i=Rt(t);_(t,e,ue);const r=Ni(i,n);return await Gi(r,i),r._openRedirect(i,e,"signInViaRedirect")}function tr(t,e,n){return er(t,e,n)}async function er(t,e,n){const r=Object(i["k"])(t);_(r.auth,e,ue);const s=Ni(r.auth,n);await Gi(s,r.auth);const o=await or(r);return s._openRedirect(r.auth,e,"reauthViaRedirect",o)}function nr(t,e,n){return ir(t,e,n)}async function ir(t,e,n){const r=Object(i["k"])(t);_(r.auth,e,ue);const s=Ni(r.auth,n);await Ce(!1,r,e.providerId),await Gi(s,r.auth);const o=await or(r);return s._openRedirect(r.auth,e,"linkViaRedirect",o)}async function rr(t,e){return await Rt(t)._initializationPromise,sr(t,e,!1)}async function sr(t,e,n=!1){const i=Rt(t),r=Ni(i,e),s=new $i(i,r,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}async function or(t){const e=Mn(t.uid+":::");return t._redirectEventId=e,await t.auth._setRedirectUser(t),await t.auth._persistUserIfCurrent(t),e}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */const ar=6e5;class cr{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(t,n)&&(e=!0,this.sendToConsumer(t,n),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!hr(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){var n;if(t.error&&!ur(t)){const i=(null===(n=t.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";e.onError(b(this.auth,i))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const n=null===e.eventId||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&n}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=ar&&this.cachedEventUids.clear(),this.cachedEventUids.has(lr(t))}saveEventToCache(t){this.cachedEventUids.add(lr(t)),this.lastProcessedEventTime=Date.now()}}function lr(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(t=>t).join("-")}function ur({type:t,error:e}){return"unknown"===t&&"auth/no-auth-event"===(null===e||void 0===e?void 0:e.code)}function hr(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ur(t);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */async function dr(t,e={}){return U(t,"GET","/v1/projects",e)}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */const fr=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,pr=/^https?/;async function gr(t){if(t.config.emulator)return;const{authorizedDomains:e}=await dr(t);for(const i of e)try{if(mr(i))return}catch(n){}y(t,"unauthorized-domain")}function mr(t){const e=A(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const r=new URL(t);return""===r.hostname&&""===i?"chrome-extension:"===n&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):"chrome-extension:"===n&&r.hostname===i}if(!pr.test(n))return!1;if(fr.test(t))return i===t;const r=t.replace(/\./g,"\\."),s=new RegExp("^(.+\\."+r+"|"+r+")$","i");return s.test(i)}
/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const yr=new N(3e4,6e4);function br(){const t=Fn().___jsl;if(null===t||void 0===t?void 0:t.H)for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}function vr(t){return new Promise((e,n)=>{var i,r,s;function o(){br(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{br(),n(b(t,"network-request-failed"))},timeout:yr.get()})}if(null===(r=null===(i=Fn().gapi)||void 0===i?void 0:i.iframes)||void 0===r?void 0:r.Iframe)e(gapi.iframes.getContext());else{if(!(null===(s=Fn().gapi)||void 0===s?void 0:s.load)){const e=li("iframefcb");return Fn()[e]=()=>{gapi.load?o():n(b(t,"network-request-failed"))},ci("https://apis.google.com/js/api.js?onload="+e).catch(t=>n(t))}o()}}).catch(t=>{throw _r=null,t})}let _r=null;function wr(t){return _r=_r||vr(t),_r}
/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const xr=new N(5e3,15e3),Ir="__/auth/iframe",Tr="emulator/auth/iframe",kr={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Er=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Sr(t){const e=t.config;x(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?P(e,Tr):`https://${t.config.authDomain}/${Ir}`,s={apiKey:e.apiKey,appName:t.name,v:r["SDK_VERSION"]},o=Er.get(t.config.apiHost);o&&(s.eid=o);const a=t._getFrameworks();return a.length&&(s.fw=a.join(",")),`${n}?${Object(i["x"])(s).slice(1)}`}async function Ar(t){const e=await wr(t),n=Fn().gapi;return x(n,t,"internal-error"),e.open({where:document.body,url:Sr(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:kr,dontclear:!0},e=>new Promise(async(n,i)=>{await e.restyle({setHideOnLeave:!1});const r=b(t,"network-request-failed"),s=Fn().setTimeout(()=>{i(r)},xr.get());function o(){Fn().clearTimeout(s),n(e)}e.ping(o).then(o,()=>{i(r)})}))}
/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const Or={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Cr=500,Rr=600,Dr="_blank",Nr="http://localhost";class Pr{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(t){}}}function Mr(t,e,n,r=Cr,s=Rr){const o=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l=Object.assign(Object.assign({},Or),{width:r.toString(),height:s.toString(),top:o,left:a}),u=Object(i["l"])().toLowerCase();n&&(c=bt(u)?Dr:n),mt(u)&&(e=e||Nr,l.scrollbars="yes");const h=Object.entries(l).reduce((t,[e,n])=>`${t}${e}=${n},`,"");if(kt(u)&&"_self"!==c)return Lr(e||"",c),new Pr(null);const d=window.open(e||"",c,h);x(d,t,"popup-blocked");try{d.focus()}catch(f){}return new Pr(d)}function Lr(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}
/**
 * @license
 * Copyright 2021 Google LLC
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
 */const Fr="__/auth/handler",jr="emulator/auth/handler";function Ur(t,e,n,s,o,a){x(t.config.authDomain,t,"auth-domain-config-required"),x(t.config.apiKey,t,"invalid-api-key");const c={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:r["SDK_VERSION"],eventId:o};if(e instanceof ue){e.setDefaultLanguage(t.languageCode),c.providerId=e.providerId||"",Object(i["p"])(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[t,e]of Object.entries(a||{}))c[t]=e}if(e instanceof he){const t=e.getScopes().filter(t=>""!==t);t.length>0&&(c.scopes=t.join(","))}t.tenantId&&(c.tid=t.tenantId);const l=c;for(const i of Object.keys(l))void 0===l[i]&&delete l[i];return`${Vr(t)}?${Object(i["x"])(l).slice(1)}`}function Vr({config:t}){return t.emulator?P(t,jr):`https://${t.authDomain}/${Fr}`}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */const Br="webStorageSupport";class qr{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Dn,this._completeRedirectFn=sr}async _openPopup(t,e,n,i){var r;T(null===(r=this.eventManagers[t._key()])||void 0===r?void 0:r.manager,"_initialize() not called before _openPopup()");const s=Ur(t,e,n,A(),i);return Mr(t,s,Mn())}async _openRedirect(t,e,n,i){return await this._originValidation(t),jn(Ur(t,e,n,A(),i)),new Promise(()=>{})}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:t,promise:n}=this.eventManagers[e];return t?Promise.resolve(t):(T(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(t);return this.eventManagers[e]={promise:n},n.catch(()=>{delete this.eventManagers[e]}),n}async initAndGetManager(t){const e=await Ar(t),n=new cr(t);return e.register("authEvent",e=>{x(null===e||void 0===e?void 0:e.authEvent,t,"invalid-auth-event");const i=n.onEvent(e.authEvent);return{status:i?"ACK":"ERROR"}},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:n},this.iframes[t._key()]=e,n}_isIframeWebStorageSupported(t,e){const n=this.iframes[t._key()];n.send(Br,{type:Br},n=>{var i;const r=null===(i=null===n||void 0===n?void 0:n[0])||void 0===i?void 0:i[Br];void 0!==r&&e(!!r),y(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=gr(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return St()||yt()||It()}}const zr=qr;class Wr{constructor(t){this.factorId=t}_process(t,e,n){switch(e.type){case"enroll":return this._finalizeEnroll(t,e.credential,n);case"signin":return this._finalizeSignIn(t,e.credential);default:return I("unexpected MultiFactorSessionType")}}}class Hr extends Wr{constructor(t){super("phone"),this.credential=t}static _fromCredential(t){return new Hr(t)}_finalizeEnroll(t,e,n){return vn(t,{idToken:e,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(t,e){return si(t,{mfaPendingCredential:e,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class $r{constructor(){}static assertion(t){return Hr._fromCredential(t)}}$r.FACTOR_ID="phone";var Kr="@firebase/auth",Gr="0.19.6";
/**
 * @license
 * Copyright 2020 Google LLC
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
 */
class Yr{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),(null===(t=this.auth.currentUser)||void 0===t?void 0:t.uid)||null}async getToken(t){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const e=await this.auth.currentUser.getIdToken(t);return{accessToken:e}}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged(e=>{var n;t((null===(n=e)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){x(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */function Qr(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Jr(t){Object(r["_registerComponent"])(new a["a"]("auth",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),{apiKey:r,authDomain:s}=i.options;return(e=>{x(r&&!r.includes(":"),"invalid-api-key",{appName:e.name}),x(!(null===s||void 0===s?void 0:s.includes(":")),"argument-error",{appName:e.name});const i={apiKey:r,authDomain:s,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ot(t)},o=new Ct(e,i);return S(o,n),o})(i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{const i=t.getProvider("auth-internal");i.initialize()})),Object(r["_registerComponent"])(new a["a"]("auth-internal",t=>{const e=Rt(t.getProvider("auth").getImmediate());return(t=>new Yr(t))(e)},"PRIVATE").setInstantiationMode("EXPLICIT")),Object(r["registerVersion"])(Kr,Gr,Qr(t)),Object(r["registerVersion"])(Kr,Gr,"esm2017")}
/**
 * @license
 * Copyright 2021 Google LLC
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
 */
/**
 * @license
 * Copyright 2021 Google LLC
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
 */
function Xr(){return window}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */Jr("Browser");const Zr=2e3;async function ts(t,e,n){var i;const{BuildInfo:r}=Xr();T(e.sessionId,"AuthEvent did not contain a session ID");const s=await ss(e.sessionId),o={};return It()?o["ibi"]=r.packageName:_t()?o["apn"]=r.packageName:y(t,"operation-not-supported-in-this-environment"),r.displayName&&(o["appDisplayName"]=r.displayName),o["sessionId"]=s,Ur(t,n,e.type,void 0,null!==(i=e.eventId)&&void 0!==i?i:void 0,o)}async function es(t){const{BuildInfo:e}=Xr(),n={};It()?n.iosBundleId=e.packageName:_t()?n.androidPackageName=e.packageName:y(t,"operation-not-supported-in-this-environment"),await dr(t,n)}function ns(t){const{cordova:e}=Xr();return new Promise(n=>{e.plugins.browsertab.isAvailable(i=>{let r=null;i?e.plugins.browsertab.openUrl(t):r=e.InAppBrowser.open(t,Tt()?"_blank":"_system","location=yes"),n(r)})})}async function is(t,e,n){const{cordova:i}=Xr();let r=()=>{};try{await new Promise((s,o)=>{let a=null;function c(){var t;s();const e=null===(t=i.plugins.browsertab)||void 0===t?void 0:t.close;"function"===typeof e&&e(),"function"===typeof(null===n||void 0===n?void 0:n.close)&&n.close()}function l(){a||(a=window.setTimeout(()=>{o(b(t,"redirect-cancelled-by-user"))},Zr))}function u(){"visible"===(null===document||void 0===document?void 0:document.visibilityState)&&l()}e.addPassiveListener(c),document.addEventListener("resume",l,!1),_t()&&document.addEventListener("visibilitychange",u,!1),r=()=>{e.removePassiveListener(c),document.removeEventListener("resume",l,!1),document.removeEventListener("visibilitychange",u,!1),a&&window.clearTimeout(a)}})}finally{r()}}function rs(t){var e,n,i,r,s,o,a,c,l,u;const h=Xr();x("function"===typeof(null===(e=null===h||void 0===h?void 0:h.universalLinks)||void 0===e?void 0:e.subscribe),t,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),x("undefined"!==typeof(null===(n=null===h||void 0===h?void 0:h.BuildInfo)||void 0===n?void 0:n.packageName),t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),x("function"===typeof(null===(s=null===(r=null===(i=null===h||void 0===h?void 0:h.cordova)||void 0===i?void 0:i.plugins)||void 0===r?void 0:r.browsertab)||void 0===s?void 0:s.openUrl),t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),x("function"===typeof(null===(c=null===(a=null===(o=null===h||void 0===h?void 0:h.cordova)||void 0===o?void 0:o.plugins)||void 0===a?void 0:a.browsertab)||void 0===c?void 0:c.isAvailable),t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),x("function"===typeof(null===(u=null===(l=null===h||void 0===h?void 0:h.cordova)||void 0===l?void 0:l.InAppBrowser)||void 0===u?void 0:u.open),t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function ss(t){const e=os(t),n=await crypto.subtle.digest("SHA-256",e),i=Array.from(new Uint8Array(n));return i.map(t=>t.toString(16).padStart(2,"0")).join("")}function os(t){if(T(/[0-9a-zA-Z]+/.test(t),"Can only convert alpha-numeric strings"),"undefined"!==typeof TextEncoder)return(new TextEncoder).encode(t);const e=new ArrayBuffer(t.length),n=new Uint8Array(e);for(let i=0;i<t.length;i++)n[i]=t.charCodeAt(i);return n}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */const as=20;class cs extends cr{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(t=>{this.resolveInialized=t})}addPassiveListener(t){this.passiveListeners.add(t)}removePassiveListener(t){this.passiveListeners.delete(t)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(t){return this.resolveInialized(),this.passiveListeners.forEach(e=>e(t)),super.onEvent(t)}async initialized(){await this.initPromise}}function ls(t,e,n=null){return{type:e,eventId:n,urlResponse:null,sessionId:fs(),postBody:null,tenantId:t.tenantId,error:b(t,"no-auth-event")}}function us(t,e){return ps()._set(gs(t),e)}async function hs(t){const e=await ps()._get(gs(t));return e&&await ps()._remove(gs(t)),e}function ds(t,e){var n,i;const r=ys(e);if(r.includes("/__/auth/callback")){const e=bs(r),s=e["firebaseError"]?ms(decodeURIComponent(e["firebaseError"])):null,o=null===(i=null===(n=null===s||void 0===s?void 0:s["code"])||void 0===n?void 0:n.split("auth/"))||void 0===i?void 0:i[1],a=o?b(o):null;return a?{type:t.type,eventId:t.eventId,tenantId:t.tenantId,error:a,urlResponse:null,sessionId:null,postBody:null}:{type:t.type,eventId:t.eventId,tenantId:t.tenantId,sessionId:t.sessionId,urlResponse:r,postBody:null}}return null}function fs(){const t=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<as;n++){const n=Math.floor(Math.random()*e.length);t.push(e.charAt(n))}return t.join("")}function ps(){return E(Cn)}function gs(t){return ft("authEvent",t.config.apiKey,t.name)}function ms(t){try{return JSON.parse(t)}catch(e){return null}}function ys(t){const e=bs(t),n=e["link"]?decodeURIComponent(e["link"]):void 0,i=bs(n)["link"],r=e["deep_link_id"]?decodeURIComponent(e["deep_link_id"]):void 0,s=bs(r)["link"];return s||r||i||n||t}function bs(t){if(!(null===t||void 0===t?void 0:t.includes("?")))return{};const[e,...n]=t.split("?");return Object(i["y"])(n.join("?"))}
/**
 * @license
 * Copyright 2021 Google LLC
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
 */const vs=500;class _s{constructor(){this._redirectPersistence=Dn,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=sr}async _initialize(t){const e=t._key();let n=this.eventManagers.get(e);return n||(n=new cs(t),this.eventManagers.set(e,n),this.attachCallbackListeners(t,n)),n}_openPopup(t){y(t,"operation-not-supported-in-this-environment")}async _openRedirect(t,e,n,i){rs(t);const r=await this._initialize(t);await r.initialized(),r.resetRedirect(),Yi(),await this._originValidation(t);const s=ls(t,n,i);await us(t,s);const o=await ts(t,s,e),a=await ns(o);return is(t,r,a)}_isIframeWebStorageSupported(t,e){throw new Error("Method not implemented.")}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=es(t)),this.originValidationPromises[e]}attachCallbackListeners(t,e){const{universalLinks:n,handleOpenURL:i,BuildInfo:r}=Xr(),s=setTimeout(async()=>{await hs(t),e.onEvent(xs())},vs),o=async n=>{clearTimeout(s);const i=await hs(t);let r=null;i&&(null===n||void 0===n?void 0:n["url"])&&(r=ds(i,n["url"])),e.onEvent(r||xs())};"undefined"!==typeof n&&"function"===typeof n.subscribe&&n.subscribe(null,o);const a=i,c=r.packageName.toLowerCase()+"://";Xr().handleOpenURL=async t=>{if(t.toLowerCase().startsWith(c)&&o({url:t}),"function"===typeof a)try{a(t)}catch(e){console.error(e)}}}}const ws=_s;function xs(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:b("no-auth-event")}}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */function Is(t,e){Rt(t)._logFramework(e)}},"1fd5":function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return h})),n.d(e,"b",(function(){return E})),n.d(e,"c",(function(){return k})),n.d(e,"d",(function(){return c})),n.d(e,"e",(function(){return O})),n.d(e,"f",(function(){return d})),n.d(e,"g",(function(){return L})),n.d(e,"h",(function(){return R})),n.d(e,"i",(function(){return l})),n.d(e,"j",(function(){return M})),n.d(e,"k",(function(){return V})),n.d(e,"l",(function(){return f})),n.d(e,"m",(function(){return m})),n.d(e,"n",(function(){return y})),n.d(e,"o",(function(){return v})),n.d(e,"p",(function(){return C})),n.d(e,"q",(function(){return _})),n.d(e,"r",(function(){return I})),n.d(e,"s",(function(){return p})),n.d(e,"t",(function(){return g})),n.d(e,"u",(function(){return b})),n.d(e,"v",(function(){return x})),n.d(e,"w",(function(){return w})),n.d(e,"x",(function(){return N})),n.d(e,"y",(function(){return P}));
/**
 * @license
 * Copyright 2017 Google LLC
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
 */
const i=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let r=t.charCodeAt(i);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=63&r|128):55296===(64512&r)&&i+1<t.length&&56320===(64512&t.charCodeAt(i+1))?(r=65536+((1023&r)<<10)+(1023&t.charCodeAt(++i)),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=63&r|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=63&r|128)}return e},r=function(t){const e=[];let n=0,i=0;while(n<t.length){const r=t[n++];if(r<128)e[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=t[n++];e[i++]=String.fromCharCode((31&r)<<6|63&s)}else if(r>239&&r<365){const s=t[n++],o=t[n++],a=t[n++],c=((7&r)<<18|(63&s)<<12|(63&o)<<6|63&a)-65536;e[i++]=String.fromCharCode(55296+(c>>10)),e[i++]=String.fromCharCode(56320+(1023&c))}else{const s=t[n++],o=t[n++];e[i++]=String.fromCharCode((15&r)<<12|(63&s)<<6|63&o)}}return e.join("")},s={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<t.length;r+=3){const e=t[r],s=r+1<t.length,o=s?t[r+1]:0,a=r+2<t.length,c=a?t[r+2]:0,l=e>>2,u=(3&e)<<4|o>>4;let h=(15&o)<<2|c>>6,d=63&c;a||(d=64,s||(h=64)),i.push(n[l],n[u],n[h],n[d])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(i(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):r(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<t.length;){const e=n[t.charAt(r++)],s=r<t.length,o=s?n[t.charAt(r)]:0;++r;const a=r<t.length,c=a?n[t.charAt(r)]:64;++r;const l=r<t.length,u=l?n[t.charAt(r)]:64;if(++r,null==e||null==o||null==c||null==u)throw Error();const h=e<<2|o>>4;if(i.push(h),64!==c){const t=o<<4&240|c>>2;if(i.push(t),64!==u){const t=c<<6&192|u;i.push(t)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},o=function(t){const e=i(t);return s.encodeByteArray(e,!0)},a=function(t){return o(t).replace(/\./g,"")},c=function(t){try{return s.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
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
 */function l(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:void 0===t&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)e.hasOwnProperty(n)&&u(n)&&(t[n]=l(t[n],e[n]));return t}function u(t){return"__proto__"!==t}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */class h{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"===typeof t&&(this.promise.catch(()=>{}),1===t.length?t(e):t(e,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
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
 */function d(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=e||"demo-project",r=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:"https://securetoken.google.com/"+i,aud:i,iat:r,exp:r+3600,auth_time:r,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),c="";return[a(JSON.stringify(n)),a(JSON.stringify(o)),c].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */function f(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function p(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(f())}function g(){try{return"[object process]"===Object.prototype.toString.call(t.process)}catch(e){return!1}}function m(){return"object"===typeof self&&self.self===self}function y(){const t="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof t&&void 0!==t.id}function b(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function v(){return f().indexOf("Electron/")>=0}function _(){const t=f();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function w(){return f().indexOf("MSAppHost/")>=0}function x(){return!g()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function I(){return"object"===typeof indexedDB}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */
const T="FirebaseError";class k extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name=T,Object.setPrototypeOf(this,k.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,E.prototype.create)}}class E{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},i=`${this.service}/${t}`,r=this.errors[t],s=r?S(r,n):"Error",o=`${this.serviceName}: ${s} (${i}).`,a=new k(i,o,n);return a}}function S(t,e){return t.replace(A,(t,n)=>{const i=e[n];return null!=i?String(i):`<${n}?>`})}const A=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
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
 */
/**
 * @license
 * Copyright 2017 Google LLC
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
 */
function O(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function C(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function R(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const r of n){if(!i.includes(r))return!1;const n=t[r],s=e[r];if(D(n)&&D(s)){if(!R(n,s))return!1}else if(n!==s)return!1}for(const r of i)if(!n.includes(r))return!1;return!0}function D(t){return null!==t&&"object"===typeof t}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */function N(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(t=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(t))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function P(t){const e={},n=t.replace(/^\?/,"").split("&");return n.forEach(t=>{if(t){const[n,i]=t.split("=");e[decodeURIComponent(n)]=decodeURIComponent(i)}}),e}function M(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */function L(t,e){const n=new F(t,e);return n.subscribe.bind(n)}class F{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then(()=>{t(this)}).catch(t=>{this.error(t)})}next(t){this.forEachObserver(e=>{e.next(t)})}error(t){this.forEachObserver(e=>{e.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,e,n){let i;if(void 0===t&&void 0===e&&void 0===n)throw new Error("Missing Observer.");i=j(t,["next","error","complete"])?t:{next:t,error:e,complete:n},void 0===i.next&&(i.next=U),void 0===i.error&&(i.error=U),void 0===i.complete&&(i.complete=U);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch(t){}}),this.observers.push(i),r}unsubscribeOne(t){void 0!==this.observers&&void 0!==this.observers[t]&&(delete this.observers[t],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[t])try{e(this.observers[t])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}})}close(t){this.finalized||(this.finalized=!0,void 0!==t&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function j(t,e){if("object"!==typeof t||null===t)return!1;for(const n of e)if(n in t&&"function"===typeof t[n])return!0;return!1}function U(){}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */
/**
 * @license
 * Copyright 2021 Google LLC
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
 */
function V(t){return t&&t._delegate?t._delegate:t}}).call(this,n("c8ba"))},"22e5":function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return l}));var i=n("1fd5");class r{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
/**
 * @license
 * Copyright 2019 Google LLC
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
 */const s="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
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
 */class o{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new i["a"];if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(n){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null===t||void 0===t?void 0:t.identifier),i=null!==(e=null===t||void 0===t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(r){if(i)return null;throw r}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(c(t))try{this.getOrInitializeService({instanceIdentifier:s})}catch(e){}for(const[t,n]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:i});n.resolve(t)}catch(e){}}}}clearInstance(t=s){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...t.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return null!=this.component}isInitialized(t=s){return this.instances.has(t)}getOptions(t=s){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[r,s]of this.instancesDeferred.entries()){const t=this.normalizeInstanceIdentifier(r);n===t&&s.resolve(i)}return i}onInit(t,e){var n;const i=this.normalizeInstanceIdentifier(e),r=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;r.add(t),this.onInitCallbacks.set(i,r);const s=this.instances.get(i);return s&&t(s,i),()=>{r.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const r of n)try{r(t,e)}catch(i){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(t),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(i){}return n||null}normalizeInstanceIdentifier(t=s){return this.component?this.component.multipleInstances?t:s:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(t){return t===s?void 0:t}function c(t){return"EAGER"===t.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
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
 */class l{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){const e=this.getProvider(t.name);e.isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new o(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}},"3db7":function(t,e,n){},4362:function(t,e,n){e.nextTick=function(t){var e=Array.prototype.slice.call(arguments);e.shift(),setTimeout((function(){t.apply(null,e)}),0)},e.platform=e.arch=e.execPath=e.title="browser",e.pid=1,e.browser=!0,e.env={},e.argv=[],e.binding=function(t){throw new Error("No such module. (Possibly not yet loaded)")},function(){var t,i="/";e.cwd=function(){return i},e.chdir=function(e){t||(t=n("df7c")),i=t.resolve(e,i)}}(),e.exit=e.kill=e.umask=e.dlopen=e.uptime=e.memoryUsage=e.uvCounters=function(){},e.features={}},"589b":function(t,e,n){"use strict";n.r(e),n.d(e,"SDK_VERSION",(function(){return Y})),n.d(e,"_DEFAULT_ENTRY_NAME",(function(){return L})),n.d(e,"_addComponent",(function(){return V})),n.d(e,"_addOrOverwriteComponent",(function(){return B})),n.d(e,"_apps",(function(){return j})),n.d(e,"_clearComponents",(function(){return H})),n.d(e,"_components",(function(){return U})),n.d(e,"_getProvider",(function(){return z})),n.d(e,"_registerComponent",(function(){return q})),n.d(e,"_removeServiceInstance",(function(){return W})),n.d(e,"deleteApp",(function(){return Z})),n.d(e,"getApp",(function(){return J})),n.d(e,"getApps",(function(){return X})),n.d(e,"initializeApp",(function(){return Q})),n.d(e,"onLog",(function(){return et})),n.d(e,"registerVersion",(function(){return tt})),n.d(e,"setLogLevel",(function(){return nt}));var i=n("22e5"),r=n("e691"),s=n("1fd5");n.d(e,"FirebaseError",(function(){return s["c"]}));
/**
 * @license
 * Copyright 2019 Google LLC
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
 */
class o{constructor(t){this.container=t}getPlatformInfoString(){const t=this.container.getProviders();return t.map(t=>{if(a(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null}).filter(t=>t).join(" ")}}function a(t){const e=t.getComponent();return"VERSION"===(null===e||void 0===e?void 0:e.type)}const c="@firebase/app",l="0.7.14",u=new r["b"]("@firebase/app"),h="@firebase/app-compat",d="@firebase/analytics-compat",f="@firebase/analytics",p="@firebase/app-check-compat",g="@firebase/app-check",m="@firebase/auth",y="@firebase/auth-compat",b="@firebase/database",v="@firebase/database-compat",_="@firebase/functions",w="@firebase/functions-compat",x="@firebase/installations",I="@firebase/installations-compat",T="@firebase/messaging",k="@firebase/messaging-compat",E="@firebase/performance",S="@firebase/performance-compat",A="@firebase/remote-config",O="@firebase/remote-config-compat",C="@firebase/storage",R="@firebase/storage-compat",D="@firebase/firestore",N="@firebase/firestore-compat",P="firebase",M="9.6.4",L="[DEFAULT]",F={[c]:"fire-core",[h]:"fire-core-compat",[f]:"fire-analytics",[d]:"fire-analytics-compat",[g]:"fire-app-check",[p]:"fire-app-check-compat",[m]:"fire-auth",[y]:"fire-auth-compat",[b]:"fire-rtdb",[v]:"fire-rtdb-compat",[_]:"fire-fn",[w]:"fire-fn-compat",[x]:"fire-iid",[I]:"fire-iid-compat",[T]:"fire-fcm",[k]:"fire-fcm-compat",[E]:"fire-perf",[S]:"fire-perf-compat",[A]:"fire-rc",[O]:"fire-rc-compat",[C]:"fire-gcs",[R]:"fire-gcs-compat",[D]:"fire-fst",[N]:"fire-fst-compat","fire-js":"fire-js",[P]:"fire-js-all"},j=new Map,U=new Map;function V(t,e){try{t.container.addComponent(e)}catch(n){u.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function B(t,e){t.container.addOrOverwriteComponent(e)}function q(t){const e=t.name;if(U.has(e))return u.debug(`There were multiple attempts to register component ${e}.`),!1;U.set(e,t);for(const n of j.values())V(n,t);return!0}function z(t,e){return t.container.getProvider(e)}function W(t,e,n=L){z(t,e).clearInstance(n)}function H(){U.clear()}
/**
 * @license
 * Copyright 2019 Google LLC
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
 */const $={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function."},K=new s["b"]("app","Firebase",$);
/**
 * @license
 * Copyright 2019 Google LLC
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
 */
class G{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new i["a"]("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw K.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
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
 */const Y=M;function Q(t,e={}){if("object"!==typeof e){const t=e;e={name:t}}const n=Object.assign({name:L,automaticDataCollectionEnabled:!1},e),r=n.name;if("string"!==typeof r||!r)throw K.create("bad-app-name",{appName:String(r)});const o=j.get(r);if(o){if(Object(s["h"])(t,o.options)&&Object(s["h"])(n,o.config))return o;throw K.create("duplicate-app",{appName:r})}const a=new i["b"](r);for(const i of U.values())a.addComponent(i);const c=new G(t,n,a);return j.set(r,c),c}function J(t=L){const e=j.get(t);if(!e)throw K.create("no-app",{appName:t});return e}function X(){return Array.from(j.values())}async function Z(t){const e=t.name;j.has(e)&&(j.delete(e),await Promise.all(t.container.getProviders().map(t=>t.delete())),t.isDeleted=!0)}function tt(t,e,n){var r;let s=null!==(r=F[t])&&void 0!==r?r:t;n&&(s+="-"+n);const o=s.match(/\s|\//),a=e.match(/\s|\//);if(o||a){const t=[`Unable to register library "${s}" with version "${e}":`];return o&&t.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&t.push("and"),a&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void u.warn(t.join(" "))}q(new i["a"](s+"-version",()=>({library:s,version:e}),"VERSION"))}function et(t,e){if(null!==t&&"function"!==typeof t)throw K.create("invalid-log-argument");Object(r["d"])(t,e)}function nt(t){Object(r["c"])(t)}
/**
 * @license
 * Copyright 2019 Google LLC
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
 */function it(t){q(new i["a"]("platform-logger",t=>new o(t),"PRIVATE")),tt(c,l,t),tt(c,l,"esm2017"),tt("fire-js","")}it("")},5994:function(t,e,n){"use strict";(function(t){var e=n("7ded"),i=n("1f5a"),r=n("22e5"),s=n("1fd5"),o="@firebase/auth-compat",a="0.2.6";
/**
 * @license
 * Copyright 2020 Google LLC
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
 */
const c=1e3;function l(){var t;return(null===(t=null===self||void 0===self?void 0:self.location)||void 0===t?void 0:t.protocol)||null}function u(){return"http:"===l()||"https:"===l()}function h(t=Object(s["l"])()){return!("file:"!==l()&&"ionic:"!==l()||!t.toLowerCase().match(/iphone|ipad|ipod|android/))}function d(){return Object(s["u"])()||Object(s["t"])()}function f(){return Object(s["q"])()&&11===(null===document||void 0===document?void 0:document.documentMode)}function p(t=Object(s["l"])()){return/Edge\/\d+/.test(t)}function g(t=Object(s["l"])()){return f()||p(t)}function m(){try{const t=self.localStorage,e=i["s"]();if(t)return t["setItem"](e,"1"),t["removeItem"](e),!g()||Object(s["r"])()}catch(t){return y()&&Object(s["r"])()}return!1}function y(){return"undefined"!==typeof t&&"WorkerGlobalScope"in t&&"importScripts"in t}function b(){return(u()||Object(s["n"])()||h())&&!d()&&m()&&!y()}function v(){return h()&&"undefined"!==typeof document}async function _(){return!!v()&&new Promise(t=>{const e=setTimeout(()=>{t(!1)},c);document.addEventListener("deviceready",()=>{clearTimeout(e),t(!0)})})}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */const w={LOCAL:"local",NONE:"none",SESSION:"session"},x=i["p"],I="persistence";function T(t,e){x(Object.values(w).includes(e),t,"invalid-persistence-type"),Object(s["u"])()?x(e!==w.SESSION,t,"unsupported-persistence-type"):Object(s["t"])()?x(e===w.NONE,t,"unsupported-persistence-type"):y()?x(e===w.NONE||e===w.LOCAL&&Object(s["r"])(),t,"unsupported-persistence-type"):x(e===w.NONE||m(),t,"unsupported-persistence-type")}async function k(t){await t._initializationPromise;const e=S(),n=i["v"](I,t.config.apiKey,t.name);(null===e||void 0===e?void 0:e.sessionStorage)&&e.sessionStorage.setItem(n,t._getPersistence())}function E(t,e){const n=S();if(!(null===n||void 0===n?void 0:n.sessionStorage))return[];const r=i["v"](I,t,e),s=n.sessionStorage.getItem(r);switch(s){case w.NONE:return[i["L"]];case w.LOCAL:return[i["M"],i["A"]];case w.SESSION:return[i["A"]];default:return[]}}function S(){return"undefined"!==typeof window?window:null}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */const A=i["p"];class O{constructor(){this.browserResolver=i["t"](i["z"]),this.cordovaResolver=i["t"](i["E"]),this.underlyingResolver=null,this._redirectPersistence=i["A"],this._completeRedirectFn=i["u"]}async _initialize(t){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(t)}async _openPopup(t,e,n,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(t,e,n,i)}async _openRedirect(t,e,n,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(t,e,n,i)}_isIframeWebStorageSupported(t,e){this.assertedUnderlyingResolver._isIframeWebStorageSupported(t,e)}_originValidation(t){return this.assertedUnderlyingResolver._originValidation(t)}get _shouldInitProactively(){return v()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return A(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const t=await _();this.underlyingResolver=t?this.cordovaResolver:this.browserResolver}}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */function C(t){return t.unwrap()}function R(t){return t.wrapped()}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */function D(t){return P(t)}function N(t,e){var n;const r=null===(n=e.customData)||void 0===n?void 0:n._tokenResponse;if("auth/multi-factor-auth-required"===e.code){const n=e;n.resolver=new F(t,i["J"](t,e))}else if(r){const t=P(e),n=e;t&&(n.credential=t,n.tenantId=r.tenantId||void 0,n.email=r.email||void 0,n.phoneNumber=r.phoneNumber||void 0)}}function P(t){const{_tokenResponse:e}=t instanceof s["c"]?t.customData:t;if(!e)return null;if(!(t instanceof s["c"])&&"temporaryProof"in e&&"phoneNumber"in e)return i["i"].credentialFromResult(t);const n=e.providerId;if(!n||n===i["k"].PASSWORD)return null;let r;switch(n){case i["k"].GOOGLE:r=i["f"];break;case i["k"].FACEBOOK:r=i["d"];break;case i["k"].GITHUB:r=i["e"];break;case i["k"].TWITTER:r=i["o"];break;default:const{oauthIdToken:t,oauthAccessToken:s,oauthTokenSecret:o,pendingToken:a,nonce:c}=e;return s||o||t||a?a?n.startsWith("saml.")?i["m"]._create(n,a):i["g"]._fromParams({providerId:n,signInMethod:n,pendingToken:a,idToken:t,accessToken:s}):new i["h"](n).credential({idToken:t,accessToken:s,rawNonce:c}):null}return t instanceof s["c"]?r.credentialFromError(t):r.credentialFromResult(t)}function M(t,e){return e.catch(e=>{throw e instanceof s["c"]&&N(t,e),e}).then(t=>{const e=t.operationType,n=t.user;return{operationType:e,credential:D(t),additionalUserInfo:i["I"](t),user:j.getOrCreate(n)}})}async function L(t,e){const n=await e;return{verificationId:n.verificationId,confirm:e=>M(t,n.confirm(e))}}class F{constructor(t,e){this.resolver=e,this.auth=R(t)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(t){return M(C(this.auth),this.resolver.resolveSignIn(t))}}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */class j{constructor(t){this._delegate=t,this.multiFactor=i["S"](t)}static getOrCreate(t){return j.USER_MAP.has(t)||j.USER_MAP.set(t,new j(t)),j.USER_MAP.get(t)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(t){return this._delegate.getIdTokenResult(t)}getIdToken(t){return this._delegate.getIdToken(t)}linkAndRetrieveDataWithCredential(t){return this.linkWithCredential(t)}async linkWithCredential(t){return M(this.auth,i["O"](this._delegate,t))}async linkWithPhoneNumber(t,e){return L(this.auth,i["P"](this._delegate,t,e))}async linkWithPopup(t){return M(this.auth,i["Q"](this._delegate,t,O))}async linkWithRedirect(t){return await k(i["q"](this.auth)),i["R"](this._delegate,t,O)}reauthenticateAndRetrieveDataWithCredential(t){return this.reauthenticateWithCredential(t)}async reauthenticateWithCredential(t){return M(this.auth,i["T"](this._delegate,t))}reauthenticateWithPhoneNumber(t,e){return L(this.auth,i["U"](this._delegate,t,e))}reauthenticateWithPopup(t){return M(this.auth,i["V"](this._delegate,t,O))}async reauthenticateWithRedirect(t){return await k(i["q"](this.auth)),i["W"](this._delegate,t,O)}sendEmailVerification(t){return i["X"](this._delegate,t)}async unlink(t){return await i["ib"](this._delegate,t),this}updateEmail(t){return i["jb"](this._delegate,t)}updatePassword(t){return i["kb"](this._delegate,t)}updatePhoneNumber(t){return i["lb"](this._delegate,t)}updateProfile(t){return i["mb"](this._delegate,t)}verifyBeforeUpdateEmail(t,e){return i["nb"](this._delegate,t,e)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}j.USER_MAP=new WeakMap;
/**
 * @license
 * Copyright 2020 Google LLC
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
 */
const U=i["p"];class V{constructor(t,e){if(this.app=t,e.isInitialized())return this._delegate=e.getImmediate(),void this.linkUnderlyingAuth();const{apiKey:n}=t.options;U(n,"invalid-api-key",{appName:t.name}),U(n,"invalid-api-key",{appName:t.name});const r="undefined"!==typeof window?O:void 0;this._delegate=e.initialize({options:{persistence:q(n,t.name),popupRedirectResolver:r}}),this._delegate._updateErrorMap(i["G"]),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?j.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(t){this._delegate.languageCode=t}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(t){this._delegate.tenantId=t}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(t,e){i["D"](this._delegate,t,e)}applyActionCode(t){return i["x"](this._delegate,t)}checkActionCode(t){return i["B"](this._delegate,t)}confirmPasswordReset(t,e){return i["C"](this._delegate,t,e)}async createUserWithEmailAndPassword(t,e){return M(this._delegate,i["F"](this._delegate,t,e))}fetchProvidersForEmail(t){return this.fetchSignInMethodsForEmail(t)}fetchSignInMethodsForEmail(t){return i["H"](this._delegate,t)}isSignInWithEmailLink(t){return i["N"](this._delegate,t)}async getRedirectResult(){U(b(),this._delegate,"operation-not-supported-in-this-environment");const t=await i["K"](this._delegate,O);return t?M(this._delegate,Promise.resolve(t)):{credential:null,user:null}}addFrameworkForLogging(t){i["w"](this._delegate,t)}onAuthStateChanged(t,e,n){const{next:i,error:r,complete:s}=B(t,e,n);return this._delegate.onAuthStateChanged(i,r,s)}onIdTokenChanged(t,e,n){const{next:i,error:r,complete:s}=B(t,e,n);return this._delegate.onIdTokenChanged(i,r,s)}sendSignInLinkToEmail(t,e){return i["Z"](this._delegate,t,e)}sendPasswordResetEmail(t,e){return i["Y"](this._delegate,t,e||void 0)}async setPersistence(t){let e;switch(T(this._delegate,t),t){case w.SESSION:e=i["A"];break;case w.LOCAL:const t=await i["t"](i["M"])._isAvailable();e=t?i["M"]:i["y"];break;case w.NONE:e=i["L"];break;default:return i["r"]("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(e)}signInAndRetrieveDataWithCredential(t){return this.signInWithCredential(t)}signInAnonymously(){return M(this._delegate,i["ab"](this._delegate))}signInWithCredential(t){return M(this._delegate,i["bb"](this._delegate,t))}signInWithCustomToken(t){return M(this._delegate,i["cb"](this._delegate,t))}signInWithEmailAndPassword(t,e){return M(this._delegate,i["db"](this._delegate,t,e))}signInWithEmailLink(t,e){return M(this._delegate,i["eb"](this._delegate,t,e))}signInWithPhoneNumber(t,e){return L(this._delegate,i["fb"](this._delegate,t,e))}async signInWithPopup(t){return U(b(),this._delegate,"operation-not-supported-in-this-environment"),M(this._delegate,i["gb"](this._delegate,t,O))}async signInWithRedirect(t){return U(b(),this._delegate,"operation-not-supported-in-this-environment"),await k(this._delegate),i["hb"](this._delegate,t,O)}updateCurrentUser(t){return this._delegate.updateCurrentUser(t)}verifyPasswordResetCode(t){return i["ob"](this._delegate,t)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}function B(t,e,n){let i=t;"function"!==typeof t&&({next:i,error:e,complete:n}=t);const r=i,s=t=>r(t&&j.getOrCreate(t));return{next:s,error:e,complete:n}}function q(t,e){const n=E(t,e);if("undefined"===typeof self||n.includes(i["M"])||n.push(i["M"]),"undefined"!==typeof window)for(const r of[i["y"],i["A"]])n.includes(r)||n.push(r);return n.includes(i["L"])||n.push(i["L"]),n}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */V.Persistence=w;class z{constructor(){this.providerId="phone",this._delegate=new i["i"](C(e["a"].auth()))}static credential(t,e){return i["i"].credential(t,e)}verifyPhoneNumber(t,e){return this._delegate.verifyPhoneNumber(t,e)}unwrap(){return this._delegate}}z.PHONE_SIGN_IN_METHOD=i["i"].PHONE_SIGN_IN_METHOD,z.PROVIDER_ID=i["i"].PROVIDER_ID;
/**
 * @license
 * Copyright 2020 Google LLC
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
 */
const W=i["p"];class H{constructor(t,n,r=e["a"].app()){var s;W(null===(s=r.options)||void 0===s?void 0:s.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new i["l"](t,n,r.auth()),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */const $="auth-compat";function K(t){t.INTERNAL.registerComponent(new r["a"]($,t=>{const e=t.getProvider("app-compat").getImmediate(),n=t.getProvider("auth");return new V(e,n)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:i["a"].EMAIL_SIGNIN,PASSWORD_RESET:i["a"].PASSWORD_RESET,RECOVER_EMAIL:i["a"].RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:i["a"].REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:i["a"].VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:i["a"].VERIFY_EMAIL}},EmailAuthProvider:i["c"],FacebookAuthProvider:i["d"],GithubAuthProvider:i["e"],GoogleAuthProvider:i["f"],OAuthProvider:i["h"],SAMLAuthProvider:i["n"],PhoneAuthProvider:z,PhoneMultiFactorGenerator:i["j"],RecaptchaVerifier:H,TwitterAuthProvider:i["o"],Auth:V,AuthCredential:i["b"],Error:s["c"]}).setInstantiationMode("LAZY").setMultipleInstances(!1)),t.registerVersion(o,a)}K(e["a"])}).call(this,n("c8ba"))},6546:function(t,e,n){"use strict";n("b724")},"65f0":function(t,e,n){var i=n("0b42");t.exports=function(t,e){return new(i(t))(0===e?0:e)}},"7ded":function(t,e,n){"use strict";n.d(e,"a",(function(){return y}));var i=n("1fd5"),r=n("22e5"),s=n("589b"),o=n("e691");
/**
 * @license
 * Copyright 2020 Google LLC
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
 */
class a{constructor(t,e){this._delegate=t,this.firebase=e,Object(s["_addComponent"])(t,new r["a"]("app-compat",()=>this,"PUBLIC")),this.container=t.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this._delegate.automaticDataCollectionEnabled=t}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(t=>{this._delegate.checkDestroyed(),t()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),Object(s["deleteApp"])(this._delegate)))}_getService(t,e=s["_DEFAULT_ENTRY_NAME"]){var n;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(t);return i.isInitialized()||"EXPLICIT"!==(null===(n=i.getComponent())||void 0===n?void 0:n.instantiationMode)||i.initialize(),i.getImmediate({identifier:e})}_removeServiceInstance(t,e=s["_DEFAULT_ENTRY_NAME"]){this._delegate.container.getProvider(t).clearInstance(e)}_addComponent(t){Object(s["_addComponent"])(this._delegate,t)}_addOrOverwriteComponent(t){Object(s["_addOrOverwriteComponent"])(this._delegate,t)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}
/**
 * @license
 * Copyright 2019 Google LLC
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
 */const c={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},l=new i["b"]("app-compat","Firebase",c);
/**
 * @license
 * Copyright 2019 Google LLC
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
 */
function u(t){const e={},n={__esModule:!0,initializeApp:a,app:o,registerVersion:s["registerVersion"],setLogLevel:s["setLogLevel"],onLog:s["onLog"],apps:null,SDK_VERSION:s["SDK_VERSION"],INTERNAL:{registerComponent:u,removeApp:r,useAsService:h,modularAPIs:s}};function r(t){delete e[t]}function o(t){if(t=t||s["_DEFAULT_ENTRY_NAME"],!Object(i["e"])(e,t))throw l.create("no-app",{appName:t});return e[t]}function a(r,o={}){const a=s["initializeApp"](r,o);if(Object(i["e"])(e,a.name))return e[a.name];const c=new t(a,n);return e[a.name]=c,c}function c(){return Object.keys(e).map(t=>e[t])}function u(e){const r=e.name,a=r.replace("-compat","");if(s["_registerComponent"](e)&&"PUBLIC"===e.type){const s=(t=o())=>{if("function"!==typeof t[a])throw l.create("invalid-app-argument",{appName:r});return t[a]()};void 0!==e.serviceProps&&Object(i["i"])(s,e.serviceProps),n[a]=s,t.prototype[a]=function(...t){const n=this._getService.bind(this,r);return n.apply(this,e.multipleInstances?t:[])}}return"PUBLIC"===e.type?n[a]:null}function h(t,e){if("serverAuth"===e)return null;const n=e;return n}return n["default"]=n,Object.defineProperty(n,"apps",{get:c}),o["App"]=t,n}
/**
 * @license
 * Copyright 2019 Google LLC
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
 */function h(){const t=u(a);function e(e){Object(i["i"])(t,e)}return t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:h,extendNamespace:e,createSubscribe:i["g"],ErrorFactory:i["b"],deepExtend:i["i"]}),t}const d=h(),f=new o["b"]("@firebase/app-compat"),p="@firebase/app-compat",g="0.1.15";
/**
 * @license
 * Copyright 2019 Google LLC
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
 */
/**
 * @license
 * Copyright 2019 Google LLC
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
 */
function m(t){Object(s["registerVersion"])(p,g,t)}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */if(Object(i["m"])()&&void 0!==self.firebase){f.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");const t=self.firebase.SDK_VERSION;t&&t.indexOf("LITE")>=0&&f.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ")}const y=d;m()},8418:function(t,e,n){"use strict";var i=n("a04b"),r=n("9bf2"),s=n("5c6c");t.exports=function(t,e,n){var o=i(e);o in t?r.f(t,o,s(0,n)):t[o]=n}},"841c":function(t,e,n){"use strict";n("3db7")},"8f6b":function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return Ai})),n.d(e,"b",(function(){return Ci})),n.d(e,"c",(function(){return Oi})),n.d(e,"d",(function(){return Di})),n.d(e,"e",(function(){return Ri})),n.d(e,"f",(function(){return Ni})),n.d(e,"g",(function(){return Pi})),n.d(e,"h",(function(){return Ei})),n.d(e,"i",(function(){return Si}));var i,r="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof t?t:"undefined"!==typeof self?self:{},s={},o=o||{},a=r||self;function c(){}function l(t){var e=typeof t;return e="object"!=e?e:t?Array.isArray(t)?"array":e:"null","array"==e||"object"==e&&"number"==typeof t.length}function u(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}function h(t){return Object.prototype.hasOwnProperty.call(t,d)&&t[d]||(t[d]=++f)}var d="closure_uid_"+(1e9*Math.random()>>>0),f=0;function p(t,e,n){return t.call.apply(t.bind,arguments)}function g(t,e,n){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,i),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function m(t,e,n){return m=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?p:g,m.apply(null,arguments)}function y(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function b(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(t,n,i){for(var r=Array(arguments.length-2),s=2;s<arguments.length;s++)r[s-2]=arguments[s];return e.prototype[n].apply(t,r)}}function v(){this.s=this.s,this.o=this.o}var _=0,w={};v.prototype.s=!1,v.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0!=_)){var t=h(this);delete w[t]}},v.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const x=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"===typeof t)return"string"!==typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},I=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const i=t.length,r="string"===typeof t?t.split(""):t;for(let s=0;s<i;s++)s in r&&e.call(n,r[s],s,t)};function T(t){t:{var e=qn;const n=t.length,i="string"===typeof t?t.split(""):t;for(let r=0;r<n;r++)if(r in i&&e.call(void 0,i[r],r,t)){e=r;break t}e=-1}return 0>e?null:"string"===typeof t?t.charAt(e):t[e]}function k(t){return Array.prototype.concat.apply([],arguments)}function E(t){const e=t.length;if(0<e){const n=Array(e);for(let i=0;i<e;i++)n[i]=t[i];return n}return[]}function S(t){return/^[\s\xa0]*$/.test(t)}var A,O=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function C(t,e){return-1!=t.indexOf(e)}function R(t,e){return t<e?-1:t>e?1:0}t:{var D=a.navigator;if(D){var N=D.userAgent;if(N){A=N;break t}}A=""}function P(t,e,n){for(const i in t)e.call(n,t[i],i,t)}function M(t){const e={};for(const n in t)e[n]=t[n];return e}var L="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function F(t,e){let n,i;for(let r=1;r<arguments.length;r++){for(n in i=arguments[r],i)t[n]=i[n];for(let e=0;e<L.length;e++)n=L[e],Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}}function j(t){return j[" "](t),t}function U(t){var e=X;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}j[" "]=c;var V,B=C(A,"Opera"),q=C(A,"Trident")||C(A,"MSIE"),z=C(A,"Edge"),W=z||q,H=C(A,"Gecko")&&!(C(A.toLowerCase(),"webkit")&&!C(A,"Edge"))&&!(C(A,"Trident")||C(A,"MSIE"))&&!C(A,"Edge"),$=C(A.toLowerCase(),"webkit")&&!C(A,"Edge");function K(){var t=a.document;return t?t.documentMode:void 0}t:{var G="",Y=function(){var t=A;return H?/rv:([^\);]+)(\)|;)/.exec(t):z?/Edge\/([\d\.]+)/.exec(t):q?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t):$?/WebKit\/(\S+)/.exec(t):B?/(?:Version)[ \/]?(\S+)/.exec(t):void 0}();if(Y&&(G=Y?Y[1]:""),q){var Q=K();if(null!=Q&&Q>parseFloat(G)){V=String(Q);break t}}V=G}var J,X={};function Z(){return U((function(){let t=0;const e=O(String(V)).split("."),n=O("9").split("."),i=Math.max(e.length,n.length);for(let o=0;0==t&&o<i;o++){var r=e[o]||"",s=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],0==r[0].length&&0==s[0].length)break;t=R(0==r[1].length?0:parseInt(r[1],10),0==s[1].length?0:parseInt(s[1],10))||R(0==r[2].length,0==s[2].length)||R(r[2],s[2]),r=r[3],s=s[3]}while(0==t)}return 0<=t}))}if(a.document&&q){var tt=K();J=tt||(parseInt(V,10)||void 0)}else J=void 0;var et=J,nt=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{a.addEventListener("test",c,e),a.removeEventListener("test",c,e)}catch(n){}return t}();function it(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}function rt(t,e){if(it.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,i=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(H){t:{try{j(e.nodeName);var r=!0;break t}catch(s){}r=!1}r||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,i?(this.clientX=void 0!==i.clientX?i.clientX:i.pageX,this.clientY=void 0!==i.clientY?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"===typeof t.pointerType?t.pointerType:st[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&rt.Z.h.call(this)}}it.prototype.h=function(){this.defaultPrevented=!0},b(rt,it);var st={2:"touch",3:"pen",4:"mouse"};rt.prototype.h=function(){rt.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var ot="closure_listenable_"+(1e6*Math.random()|0),at=0;function ct(t,e,n,i,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!i,this.ia=r,this.key=++at,this.ca=this.fa=!1}function lt(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function ut(t){this.src=t,this.g={},this.h=0}function ht(t,e){var n=e.type;if(n in t.g){var i,r=t.g[n],s=x(r,e);(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(lt(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function dt(t,e,n,i){for(var r=0;r<t.length;++r){var s=t[r];if(!s.ca&&s.listener==e&&s.capture==!!n&&s.ia==i)return r}return-1}ut.prototype.add=function(t,e,n,i,r){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=dt(t,e,i,r);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new ct(e,this.src,s,!!i,r),e.fa=n,t.push(e)),e};var ft="closure_lm_"+(1e6*Math.random()|0),pt={};function gt(t,e,n,i,r){if(i&&i.once)return bt(t,e,n,i,r);if(Array.isArray(e)){for(var s=0;s<e.length;s++)gt(t,e[s],n,i,r);return null}return n=kt(n),t&&t[ot]?t.N(e,n,u(i)?!!i.capture:!!i,r):mt(t,e,n,!1,i,r)}function mt(t,e,n,i,r,s){if(!e)throw Error("Invalid event type");var o=u(r)?!!r.capture:!!r,a=It(t);if(a||(t[ft]=a=new ut(t)),n=a.add(e,n,i,o,s),n.proxy)return n;if(i=yt(),n.proxy=i,i.src=t,i.listener=n,t.addEventListener)nt||(r=o),void 0===r&&(r=!1),t.addEventListener(e.toString(),i,r);else if(t.attachEvent)t.attachEvent(wt(e.toString()),i);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(i)}return n}function yt(){function t(n){return e.call(t.src,t.listener,n)}var e=xt;return t}function bt(t,e,n,i,r){if(Array.isArray(e)){for(var s=0;s<e.length;s++)bt(t,e[s],n,i,r);return null}return n=kt(n),t&&t[ot]?t.O(e,n,u(i)?!!i.capture:!!i,r):mt(t,e,n,!0,i,r)}function vt(t,e,n,i,r){if(Array.isArray(e))for(var s=0;s<e.length;s++)vt(t,e[s],n,i,r);else i=u(i)?!!i.capture:!!i,n=kt(n),t&&t[ot]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=dt(s,n,i,r),-1<n&&(lt(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete t.g[e],t.h--)))):t&&(t=It(t))&&(e=t.g[e.toString()],t=-1,e&&(t=dt(e,n,i,r)),(n=-1<t?e[t]:null)&&_t(n))}function _t(t){if("number"!==typeof t&&t&&!t.ca){var e=t.src;if(e&&e[ot])ht(e.i,t);else{var n=t.type,i=t.proxy;e.removeEventListener?e.removeEventListener(n,i,t.capture):e.detachEvent?e.detachEvent(wt(n),i):e.addListener&&e.removeListener&&e.removeListener(i),(n=It(e))?(ht(n,t),0==n.h&&(n.src=null,e[ft]=null)):lt(t)}}}function wt(t){return t in pt?pt[t]:pt[t]="on"+t}function xt(t,e){if(t.ca)t=!0;else{e=new rt(e,this);var n=t.listener,i=t.ia||t.src;t.fa&&_t(t),t=n.call(i,e)}return t}function It(t){return t=t[ft],t instanceof ut?t:null}var Tt="__closure_events_fn_"+(1e9*Math.random()>>>0);function kt(t){return"function"===typeof t?t:(t[Tt]||(t[Tt]=function(e){return t.handleEvent(e)}),t[Tt])}function Et(){v.call(this),this.i=new ut(this),this.P=this,this.I=null}function St(t,e){var n,i=t.I;if(i)for(n=[];i;i=i.I)n.push(i);if(t=t.P,i=e.type||e,"string"===typeof e)e=new it(e,t);else if(e instanceof it)e.target=e.target||t;else{var r=e;e=new it(i,t),F(e,r)}if(r=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];r=At(o,i,!0,e)&&r}if(o=e.g=t,r=At(o,i,!0,e)&&r,r=At(o,i,!1,e)&&r,n)for(s=0;s<n.length;s++)o=e.g=n[s],r=At(o,i,!1,e)&&r}function At(t,e,n,i){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&ht(t.i,o),r=!1!==a.call(c,i)&&r}}return r&&!i.defaultPrevented}b(Et,v),Et.prototype[ot]=!0,Et.prototype.removeEventListener=function(t,e,n,i){vt(this,t,e,n,i)},Et.prototype.M=function(){if(Et.Z.M.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],i=0;i<n.length;i++)lt(n[i]);delete e.g[t],e.h--}}this.I=null},Et.prototype.N=function(t,e,n,i){return this.i.add(String(t),e,!1,n,i)},Et.prototype.O=function(t,e,n,i){return this.i.add(String(t),e,!0,n,i)};var Ot=a.JSON.stringify;function Ct(){var t=Ut;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class Rt{constructor(){this.h=this.g=null}add(t,e){const n=Nt.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}}var Dt,Nt=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new Pt,t=>t.reset());class Pt{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function Mt(t){a.setTimeout(()=>{throw t},0)}function Lt(t,e){Dt||Ft(),jt||(Dt(),jt=!0),Ut.add(t,e)}function Ft(){var t=a.Promise.resolve(void 0);Dt=function(){t.then(Vt)}}var jt=!1,Ut=new Rt;function Vt(){for(var t;t=Ct();){try{t.h.call(t.g)}catch(n){Mt(n)}var e=Nt;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}jt=!1}function Bt(t,e){Et.call(this),this.h=t||1,this.g=e||a,this.j=m(this.kb,this),this.l=Date.now()}function qt(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}function zt(t,e,n){if("function"===typeof t)n&&(t=m(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=m(t.handleEvent,t)}return 2147483647<Number(e)?-1:a.setTimeout(t,e||0)}function Wt(t){t.g=zt(()=>{t.g=null,t.i&&(t.i=!1,Wt(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}b(Bt,Et),i=Bt.prototype,i.da=!1,i.S=null,i.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),St(this,"tick"),this.da&&(qt(this),this.start()))}},i.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},i.M=function(){Bt.Z.M.call(this),qt(this),delete this.g};class Ht extends v{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Wt(this)}M(){super.M(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function $t(t){v.call(this),this.h=t,this.g={}}b($t,v);var Kt=[];function Gt(t,e,n,i){Array.isArray(n)||(n&&(Kt[0]=n.toString()),n=Kt);for(var r=0;r<n.length;r++){var s=gt(e,n[r],i||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function Yt(t){P(t.g,(function(t,e){this.g.hasOwnProperty(e)&&_t(t)}),t),t.g={}}function Qt(){this.g=!0}function Jt(t,e,n,i,r,s){t.info((function(){if(t.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&"type"==h[1]?o+(u+"=")+l+"&":o+(u+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+i+") [attempt "+r+"]: "+e+"\n"+n+"\n"+o}))}function Xt(t,e,n,i,r,s,o){t.info((function(){return"XMLHTTP RESP ("+i+") [ attempt "+r+"]: "+e+"\n"+n+"\n"+s+" "+o}))}function Zt(t,e,n,i){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+ee(t,n)+(i?" "+i:"")}))}function te(t,e){t.info((function(){return"TIMEOUT: "+e}))}function ee(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var i=n[t];if(!(2>i.length)){var r=i[1];if(Array.isArray(r)&&!(1>r.length)){var s=r[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<r.length;o++)r[o]=""}}}return Ot(n)}catch(a){return e}}$t.prototype.M=function(){$t.Z.M.call(this),Yt(this)},$t.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Qt.prototype.Aa=function(){this.g=!1},Qt.prototype.info=function(){};var ne={},ie=null;function re(){return ie=ie||new Et}function se(t){it.call(this,ne.Ma,t)}function oe(t){const e=re();St(e,new se(e,t))}function ae(t,e){it.call(this,ne.STAT_EVENT,t),this.stat=e}function ce(t){const e=re();St(e,new ae(e,t))}function le(t,e){it.call(this,ne.Na,t),this.size=e}function ue(t,e){if("function"!==typeof t)throw Error("Fn must not be null and must be a function");return a.setTimeout((function(){t()}),e)}ne.Ma="serverreachability",b(se,it),ne.STAT_EVENT="statevent",b(ae,it),ne.Na="timingevent",b(le,it);var he={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},de={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function fe(){}function pe(t){return t.h||(t.h=t.i())}function ge(){}fe.prototype.h=null;var me,ye={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function be(){it.call(this,"d")}function ve(){it.call(this,"c")}function _e(){}function we(t,e,n,i){this.l=t,this.j=e,this.m=n,this.X=i||1,this.V=new $t(this),this.P=Ie,t=W?125:void 0,this.W=new Bt(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new xe}function xe(){this.i=null,this.g="",this.h=!1}b(be,it),b(ve,it),b(_e,fe),_e.prototype.g=function(){return new XMLHttpRequest},_e.prototype.i=function(){return{}},me=new _e;var Ie=45e3,Te={},ke={};function Ee(t,e,n){t.K=1,t.v=Je(He(e)),t.s=n,t.U=!0,Se(t,null)}function Se(t,e){t.F=Date.now(),Re(t),t.A=He(t.v);var n=t.A,i=t.X;Array.isArray(i)||(i=[String(i)]),fn(n.h,"t",i),t.C=0,n=t.l.H,t.h=new xe,t.g=vi(t.l,n?e:null,!t.s),0<t.O&&(t.L=new Ht(m(t.Ia,t,t.g),t.O)),Gt(t.V,t.g,"readystatechange",t.gb),e=t.H?M(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),oe(1),Jt(t.j,t.u,t.A,t.m,t.X,t.s)}function Ae(t){return!!t.g&&("GET"==t.u&&2!=t.K&&t.l.Ba)}function Oe(t,e,n){let i,r=!0;for(;!t.I&&t.C<n.length;){if(i=Ce(t,n),i==ke){4==e&&(t.o=4,ce(14),r=!1),Zt(t.j,t.m,null,"[Incomplete Response]");break}if(i==Te){t.o=4,ce(15),Zt(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}Zt(t.j,t.m,i,null),Le(t,i)}Ae(t)&&i!=ke&&i!=Te&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,ce(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),hi(e),e.L=!0,ce(11))):(Zt(t.j,t.m,n,"[Invalid Chunked Response]"),Me(t),Pe(t))}function Ce(t,e){var n=t.C,i=e.indexOf("\n",n);return-1==i?ke:(n=Number(e.substring(n,i)),isNaN(n)?Te:(i+=1,i+n>e.length?ke:(e=e.substr(i,n),t.C=i+n,e)))}function Re(t){t.Y=Date.now()+t.P,De(t,t.P)}function De(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=ue(m(t.eb,t),e)}function Ne(t){t.B&&(a.clearTimeout(t.B),t.B=null)}function Pe(t){0==t.l.G||t.I||pi(t.l,t)}function Me(t){Ne(t);var e=t.L;e&&"function"==typeof e.na&&e.na(),t.L=null,qt(t.W),Yt(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Le(t,e){try{var n=t.l;if(0!=n.G&&(n.g==t||wn(n.i,t)))if(n.I=t.N,!t.J&&wn(n.i,t)&&3==n.G){try{var i=n.Ca.g.parse(e)}catch(l){i=null}if(Array.isArray(i)&&3==i.length){var r=i;if(0==r[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;fi(n),ei(n)}ui(n),ce(18)}}else n.ta=r[1],0<n.ta-n.U&&37500>r[2]&&n.N&&0==n.A&&!n.v&&(n.v=ue(m(n.ab,n),6e3));if(1>=_n(n.i)&&n.ka){try{n.ka()}catch(l){}n.ka=void 0}}else mi(n,11)}else if((t.J||n.g==t)&&fi(n),!S(e))for(r=n.Ca.g.parse(e),e=0;e<r.length;e++){let l=r[e];if(n.U=l[0],l=l[1],2==n.G)if("c"==l[0]){n.J=l[1],n.la=l[2];const e=l[3];null!=e&&(n.ma=e,n.h.info("VER="+n.ma));const r=l[4];null!=r&&(n.za=r,n.h.info("SVER="+n.za));const u=l[5];null!=u&&"number"===typeof u&&0<u&&(i=1.5*u,n.K=i,n.h.info("backChannelRequestTimeoutMs_="+i)),i=n;const h=t.g;if(h){const t=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var s=i.i;!s.g&&(C(t,"spdy")||C(t,"quic")||C(t,"h2"))&&(s.j=s.l,s.g=new Set,s.h&&(xn(s,s.h),s.h=null))}if(i.D){const t=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(i.sa=t,Qe(i.F,i.D,t))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),i=n;var o=t;if(i.oa=bi(i,i.H?i.la:null,i.W),o.J){In(i.i,o);var a=o,c=i.K;c&&a.setTimeout(c),a.B&&(Ne(a),Re(a)),i.g=o}else li(i);0<n.l.length&&ri(n)}else"stop"!=l[0]&&"close"!=l[0]||mi(n,7);else 3==n.G&&("stop"==l[0]||"close"==l[0]?"stop"==l[0]?mi(n,7):ti(n):"noop"!=l[0]&&n.j&&n.j.wa(l),n.A=0)}oe(4)}catch(l){}}function Fe(t){if(t.R&&"function"==typeof t.R)return t.R();if("string"===typeof t)return t.split("");if(l(t)){for(var e=[],n=t.length,i=0;i<n;i++)e.push(t[i]);return e}for(i in e=[],n=0,t)e[n++]=t[i];return e}function je(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(l(t)||"string"===typeof t)I(t,e,void 0);else{if(t.T&&"function"==typeof t.T)var n=t.T();else if(t.R&&"function"==typeof t.R)n=void 0;else if(l(t)||"string"===typeof t){n=[];for(var i=t.length,r=0;r<i;r++)n.push(r)}else for(r in n=[],i=0,t)n[i++]=r;i=Fe(t),r=i.length;for(var s=0;s<r;s++)e.call(void 0,i[s],n&&n[s],t)}}function Ue(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var i=0;i<n;i+=2)this.set(arguments[i],arguments[i+1])}else if(t)if(t instanceof Ue)for(n=t.T(),i=0;i<n.length;i++)this.set(n[i],t.get(n[i]));else for(i in t)this.set(i,t[i])}function Ve(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var i=t.g[e];Be(t.h,i)&&(t.g[n++]=i),e++}t.g.length=n}if(t.i!=t.g.length){var r={};for(n=e=0;e<t.g.length;)i=t.g[e],Be(r,i)||(t.g[n++]=i,r[i]=1),e++;t.g.length=n}}function Be(t,e){return Object.prototype.hasOwnProperty.call(t,e)}i=we.prototype,i.setTimeout=function(t){this.P=t},i.gb=function(t){t=t.target;const e=this.L;e&&3==Gn(t)?e.l():this.Ia(t)},i.Ia=function(t){try{if(t==this.g)t:{const h=Gn(this.g);var e=this.g.Da();const d=this.g.ba();if(!(3>h)&&(3!=h||W||this.g&&(this.h.h||this.g.ga()||Yn(this.g)))){this.I||4!=h||7==e||oe(8==e||0>=d?3:2),Ne(this);var n=this.g.ba();this.N=n;e:if(Ae(this)){var i=Yn(this.g);t="";var r=i.length,s=4==Gn(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){Me(this),Pe(this);var o="";break e}this.h.i=new a.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(i[e],{stream:s&&e==r-1});i.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=200==n,Xt(this.j,this.u,this.A,this.m,this.X,h,n),this.i){if(this.$&&!this.J){e:{if(this.g){var c,l=this.g;if((c=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!S(c)){var u=c;break e}}u=null}if(!(n=u)){this.i=!1,this.o=3,ce(12),Me(this),Pe(this);break t}Zt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Le(this,n)}this.U?(Oe(this,h,o),W&&this.i&&3==h&&(Gt(this.V,this.W,"tick",this.fb),this.W.start())):(Zt(this.j,this.m,o,null),Le(this,o)),4==h&&Me(this),this.i&&!this.I&&(4==h?pi(this.l,this):(this.i=!1,Re(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,ce(12)):(this.o=0,ce(13)),Me(this),Pe(this)}}}catch(h){}},i.fb=function(){if(this.g){var t=Gn(this.g),e=this.g.ga();this.C<e.length&&(Ne(this),Oe(this,t,e),this.i&&4!=t&&Re(this))}},i.cancel=function(){this.I=!0,Me(this)},i.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(te(this.j,this.A),2!=this.K&&(oe(3),ce(17)),Me(this),this.o=2,Pe(this)):De(this,this.Y-t)},i=Ue.prototype,i.R=function(){Ve(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t},i.T=function(){return Ve(this),this.g.concat()},i.get=function(t,e){return Be(this.h,t)?this.h[t]:e},i.set=function(t,e){Be(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e},i.forEach=function(t,e){for(var n=this.T(),i=0;i<n.length;i++){var r=n[i],s=this.get(r);t.call(e,s,r,this)}};var qe=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function ze(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var i=t[n].indexOf("="),r=null;if(0<=i){var s=t[n].substring(0,i);r=t[n].substring(i+1)}else s=t[n];e(s,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function We(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof We){this.g=void 0!==e?e:t.g,$e(this,t.j),this.s=t.s,Ke(this,t.i),Ge(this,t.m),this.l=t.l,e=t.h;var n=new ln;n.i=e.i,e.g&&(n.g=new Ue(e.g),n.h=e.h),Ye(this,n),this.o=t.o}else t&&(n=String(t).match(qe))?(this.g=!!e,$e(this,n[1]||"",!0),this.s=tn(n[2]||""),Ke(this,n[3]||"",!0),Ge(this,n[4]),this.l=tn(n[5]||"",!0),Ye(this,n[6]||"",!0),this.o=tn(n[7]||"")):(this.g=!!e,this.h=new ln(null,this.g))}function He(t){return new We(t)}function $e(t,e,n){t.j=n?tn(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Ke(t,e,n){t.i=n?tn(e,!0):e}function Ge(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Ye(t,e,n){e instanceof ln?(t.h=e,gn(t.h,t.g)):(n||(e=en(e,an)),t.h=new ln(e,t.g))}function Qe(t,e,n){t.h.set(e,n)}function Je(t){return Qe(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Xe(t){return t instanceof We?He(t):new We(t,void 0)}function Ze(t,e,n,i){var r=new We(null,void 0);return t&&$e(r,t),e&&Ke(r,e),n&&Ge(r,n),i&&(r.l=i),r}function tn(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function en(t,e,n){return"string"===typeof t?(t=encodeURI(t).replace(e,nn),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function nn(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(15&t).toString(16)}We.prototype.toString=function(){var t=[],e=this.j;e&&t.push(en(e,rn,!0),":");var n=this.i;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(en(e,rn,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&t.push(":",String(n))),(n=this.l)&&(this.i&&"/"!=n.charAt(0)&&t.push("/"),t.push(en(n,"/"==n.charAt(0)?on:sn,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",en(n,cn)),t.join("")};var rn=/[#\/\?@]/g,sn=/[#\?:]/g,on=/[#\?]/g,an=/[#\?@]/g,cn=/#/g;function ln(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function un(t){t.g||(t.g=new Ue,t.h=0,t.i&&ze(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function hn(t,e){un(t),e=pn(t,e),Be(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,Be(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&Ve(t)))}function dn(t,e){return un(t),e=pn(t,e),Be(t.g.h,e)}function fn(t,e,n){hn(t,e),0<n.length&&(t.i=null,t.g.set(pn(t,e),E(n)),t.h+=n.length)}function pn(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function gn(t,e){e&&!t.j&&(un(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(hn(this,e),fn(this,n,t))}),t)),t.j=e}i=ln.prototype,i.add=function(t,e){un(this),this.i=null,t=pn(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},i.forEach=function(t,e){un(this),this.g.forEach((function(n,i){I(n,(function(n){t.call(e,n,i,this)}),this)}),this)},i.T=function(){un(this);for(var t=this.g.R(),e=this.g.T(),n=[],i=0;i<e.length;i++)for(var r=t[i],s=0;s<r.length;s++)n.push(e[i]);return n},i.R=function(t){un(this);var e=[];if("string"===typeof t)dn(this,t)&&(e=k(e,this.g.get(pn(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=k(e,t[n])}return e},i.set=function(t,e){return un(this),this.i=null,t=pn(this,t),dn(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},i.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e},i.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var i=e[n],r=encodeURIComponent(String(i));i=this.R(i);for(var s=0;s<i.length;s++){var o=r;""!==i[s]&&(o+="="+encodeURIComponent(String(i[s]))),t.push(o)}}return this.i=t.join("&")};var mn=class{constructor(t,e){this.h=t,this.g=e}};function yn(t){this.l=t||bn,a.PerformanceNavigationTiming?(t=a.performance.getEntriesByType("navigation"),t=0<t.length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol)):t=!!(a.g&&a.g.Ea&&a.g.Ea()&&a.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var bn=10;function vn(t){return!!t.h||!!t.g&&t.g.size>=t.j}function _n(t){return t.h?1:t.g?t.g.size:0}function wn(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function xn(t,e){t.g?t.g.add(e):t.h=e}function In(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function Tn(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return E(t.i)}function kn(){}function En(){this.g=new kn}function Sn(t,e,n){const i=n||"";try{je(t,(function(t,n){let r=t;u(t)&&(r=Ot(t)),e.push(i+n+"="+encodeURIComponent(r))}))}catch(r){throw e.push(i+"type="+encodeURIComponent("_badmap")),r}}function An(t,e){const n=new Qt;if(a.Image){const i=new Image;i.onload=y(On,n,i,"TestLoadImage: loaded",!0,e),i.onerror=y(On,n,i,"TestLoadImage: error",!1,e),i.onabort=y(On,n,i,"TestLoadImage: abort",!1,e),i.ontimeout=y(On,n,i,"TestLoadImage: timeout",!1,e),a.setTimeout((function(){i.ontimeout&&i.ontimeout()}),1e4),i.src=t}else e(!1)}function On(t,e,n,i,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(i)}catch(s){}}function Cn(t){this.l=t.$b||null,this.j=t.ib||!1}function Rn(t,e){Et.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Dn,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}yn.prototype.cancel=function(){if(this.i=Tn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}},kn.prototype.stringify=function(t){return a.JSON.stringify(t,void 0)},kn.prototype.parse=function(t){return a.JSON.parse(t,void 0)},b(Cn,fe),Cn.prototype.g=function(){return new Rn(this.l,this.j)},Cn.prototype.i=function(t){return function(){return t}}({}),b(Rn,Et);var Dn=0;function Nn(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}function Pn(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Mn(t)}function Mn(t){t.onreadystatechange&&t.onreadystatechange.call(t)}i=Rn.prototype,i.open=function(t,e){if(this.readyState!=Dn)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Mn(this)},i.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||a).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))},i.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Pn(this)),this.readyState=Dn},i.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Mn(this)),this.g&&(this.readyState=3,Mn(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if("undefined"!==typeof a.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Nn(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))},i.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Pn(this):Mn(this),3==this.readyState&&Nn(this)}},i.Ua=function(t){this.g&&(this.response=this.responseText=t,Pn(this))},i.Ta=function(t){this.g&&(this.response=t,Pn(this))},i.ha=function(){this.g&&Pn(this)},i.setRequestHeader=function(t,e){this.v.append(t,e)},i.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(Rn.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var Ln=a.JSON.parse;function Fn(t){Et.call(this),this.headers=new Ue,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=jn,this.K=this.L=!1}b(Fn,Et);var jn="",Un=/^https?$/i,Vn=["POST","PUT"];function Bn(t){return q&&Z()&&"number"===typeof t.timeout&&void 0!==t.ontimeout}function qn(t){return"content-type"==t.toLowerCase()}function zn(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Wn(t),$n(t)}function Wn(t){t.D||(t.D=!0,St(t,"complete"),St(t,"error"))}function Hn(t){if(t.h&&"undefined"!=typeof o&&(!t.C[1]||4!=Gn(t)||2!=t.ba()))if(t.v&&4==Gn(t))zt(t.Fa,0,t);else if(St(t,"readystatechange"),4==Gn(t)){t.h=!1;try{const o=t.ba();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var i;if(i=0===o){var r=String(t.H).match(qe)[1]||null;if(!r&&a.self&&a.self.location){var s=a.self.location.protocol;r=s.substr(0,s.length-1)}i=!Un.test(r?r.toLowerCase():"")}n=i}if(n)St(t,"complete"),St(t,"success");else{t.m=6;try{var c=2<Gn(t)?t.g.statusText:""}catch(l){c=""}t.j=c+" ["+t.ba()+"]",Wn(t)}}finally{$n(t)}}}function $n(t,e){if(t.g){Kn(t);const i=t.g,r=t.C[0]?c:null;t.g=null,t.C=null,e||St(t,"ready");try{i.onreadystatechange=r}catch(n){}}}function Kn(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(a.clearTimeout(t.A),t.A=null)}function Gn(t){return t.g?t.g.readyState:0}function Yn(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case jn:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(e){return null}}function Qn(t){let e="";return P(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function Jn(t,e,n){t:{for(i in n){var i=!1;break t}i=!0}i||(n=Qn(n),"string"===typeof t?null!=n&&encodeURIComponent(String(n)):Qe(t,e,n))}function Xn(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Zn(t){this.za=0,this.l=[],this.h=new Qt,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Xn("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Xn("baseRetryDelayMs",5e3,t),this.$a=Xn("retryDelaySeedMs",1e4,t),this.Ya=Xn("forwardChannelMaxRetries",2,t),this.ra=Xn("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new yn(t&&t.concurrentRequestLimit),this.Ca=new En,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||!1!==t.Xb}function ti(t){if(ni(t),3==t.G){var e=t.V++,n=He(t.F);Qe(n,"SID",t.J),Qe(n,"RID",e),Qe(n,"TYPE","terminate"),ai(t,n),e=new we(t,t.h,e,void 0),e.K=2,e.v=Je(He(n)),n=!1,a.navigator&&a.navigator.sendBeacon&&(n=a.navigator.sendBeacon(e.v.toString(),"")),!n&&a.Image&&((new Image).src=e.v,n=!0),n||(e.g=vi(e.l,null),e.g.ea(e.v)),e.F=Date.now(),Re(e)}yi(t)}function ei(t){t.g&&(hi(t),t.g.cancel(),t.g=null)}function ni(t){ei(t),t.u&&(a.clearTimeout(t.u),t.u=null),fi(t),t.i.cancel(),t.m&&("number"===typeof t.m&&a.clearTimeout(t.m),t.m=null)}function ii(t,e){t.l.push(new mn(t.Za++,e)),3==t.G&&ri(t)}function ri(t){vn(t.i)||t.m||(t.m=!0,Lt(t.Ha,t),t.C=0)}function si(t,e){return!(_n(t.i)>=t.i.j-(t.m?1:0))&&(t.m?(t.l=e.D.concat(t.l),!0):!(1==t.G||2==t.G||t.C>=(t.Xa?0:t.Ya))&&(t.m=ue(m(t.Ha,t,e),gi(t,t.C)),t.C++,!0))}function oi(t,e){var n;n=e?e.m:t.V++;const i=He(t.F);Qe(i,"SID",t.J),Qe(i,"RID",n),Qe(i,"AID",t.U),ai(t,i),t.o&&t.s&&Jn(i,t.o,t.s),n=new we(t,t.h,n,t.C+1),null===t.o&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=ci(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),xn(t.i,n),Ee(n,i,e)}function ai(t,e){t.j&&je({},(function(t,n){Qe(e,n,t)}))}function ci(t,e,n){n=Math.min(t.l.length,n);var i=t.j?m(t.j.Oa,t.j,t):null;t:{var r=t.l;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=r[0].h,t.push("ofs="+e)):e=0:t.push("ofs="+e);let o=!0;for(let a=0;a<n;a++){let n=r[a].h;const c=r[a].g;if(n-=e,0>n)e=Math.max(0,r[a].h-100),o=!1;else try{Sn(c,t,"req"+n+"_")}catch(s){i&&i(c)}}if(o){i=t.join("&");break t}}}return t=t.l.splice(0,n),e.D=t,i}function li(t){t.g||t.u||(t.Y=1,Lt(t.Ga,t),t.A=0)}function ui(t){return!(t.g||t.u||3<=t.A)&&(t.Y++,t.u=ue(m(t.Ga,t),gi(t,t.A)),t.A++,!0)}function hi(t){null!=t.B&&(a.clearTimeout(t.B),t.B=null)}function di(t){t.g=new we(t,t.h,"rpc",t.Y),null===t.o&&(t.g.H=t.s),t.g.O=0;var e=He(t.oa);Qe(e,"RID","rpc"),Qe(e,"SID",t.J),Qe(e,"CI",t.N?"0":"1"),Qe(e,"AID",t.U),ai(t,e),Qe(e,"TYPE","xmlhttp"),t.o&&t.s&&Jn(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=Je(He(e)),n.s=null,n.U=!0,Se(n,t)}function fi(t){null!=t.v&&(a.clearTimeout(t.v),t.v=null)}function pi(t,e){var n=null;if(t.g==e){fi(t),hi(t),t.g=null;var i=2}else{if(!wn(t.i,e))return;n=e.D,In(t.i,e),i=1}if(t.I=e.N,0!=t.G)if(e.i)if(1==i){n=e.s?e.s.length:0,e=Date.now()-e.F;var r=t.C;i=re(),St(i,new le(i,n,e,r)),ri(t)}else li(t);else if(r=e.o,3==r||0==r&&0<t.I||!(1==i&&si(t,e)||2==i&&ui(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),r){case 1:mi(t,5);break;case 4:mi(t,10);break;case 3:mi(t,6);break;default:mi(t,2)}}function gi(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function mi(t,e){if(t.h.info("Error code "+e),2==e){var n=null;t.j&&(n=null);var i=m(t.jb,t);n||(n=new We("//www.google.com/images/cleardot.gif"),a.location&&"http"==a.location.protocol||$e(n,"https"),Je(n)),An(n.toString(),i)}else ce(2);t.G=0,t.j&&t.j.va(e),yi(t),ni(t)}function yi(t){t.G=0,t.I=-1,t.j&&(0==Tn(t.i).length&&0==t.l.length||(t.i.i.length=0,E(t.l),t.l.length=0),t.j.ua())}function bi(t,e,n){let i=Xe(n);if(""!=i.i)e&&Ke(i,e+"."+i.i),Ge(i,i.m);else{const t=a.location;i=Ze(t.protocol,e?e+"."+t.hostname:t.hostname,+t.port,n)}return t.aa&&P(t.aa,(function(t,e){Qe(i,e,t)})),e=t.D,n=t.sa,e&&n&&Qe(i,e,n),Qe(i,"VER",t.ma),ai(t,i),i}function vi(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new Fn(new Cn({ib:!0})):new Fn(t.qa),e.L=t.H,e}function _i(){}function wi(){if(q&&!(10<=Number(et)))throw Error("Environmental error: no available transport.")}function xi(t,e){Et.call(this),this.g=new Zn(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!S(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!S(e)&&(this.g.D=e,t=this.h,null!==t&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new ki(this)}function Ii(t){be.call(this);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function Ti(){ve.call(this),this.status=1}function ki(t){this.g=t}i=Fn.prototype,i.ea=function(t,e,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():me.g(),this.C=this.u?pe(this.u):pe(me),this.g.onreadystatechange=m(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){return void zn(this,s)}t=n||"";const r=new Ue(this.headers);i&&je(i,(function(t,e){r.set(e,t)})),i=T(r.T()),n=a.FormData&&t instanceof a.FormData,!(0<=x(Vn,e))||i||n||r.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),r.forEach((function(t,e){this.g.setRequestHeader(e,t)}),this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Kn(this),0<this.B&&((this.K=Bn(this.g))?(this.g.timeout=this.B,this.g.ontimeout=m(this.pa,this)):this.A=zt(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){zn(this,s)}},i.pa=function(){"undefined"!=typeof o&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,St(this,"timeout"),this.abort(8))},i.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,St(this,"complete"),St(this,"abort"),$n(this))},i.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),$n(this,!0)),Fn.Z.M.call(this)},i.Fa=function(){this.s||(this.F||this.v||this.l?Hn(this):this.cb())},i.cb=function(){Hn(this)},i.ba=function(){try{return 2<Gn(this)?this.g.status:-1}catch(t){return-1}},i.ga=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},i.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),Ln(e)}},i.Da=function(){return this.m},i.La=function(){return"string"===typeof this.j?this.j:String(this.j)},i=Zn.prototype,i.ma=8,i.G=1,i.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch(e){}},i.Ha=function(t){if(this.m)if(this.m=null,1==this.G){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const r=new we(this,this.h,t,void 0);let s=this.s;if(this.P&&(s?(s=M(s),F(s,this.P)):s=this.P),null===this.o&&(r.H=s),this.ja)t:{for(var e=0,n=0;n<this.l.length;n++){var i=this.l[n];if(i="__data__"in i.g&&(i=i.g.__data__,"string"===typeof i)?i.length:void 0,void 0===i)break;if(e+=i,4096<e){e=n;break t}if(4096===e||n===this.l.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=ci(this,r,e),n=He(this.F),Qe(n,"RID",t),Qe(n,"CVER",22),this.D&&Qe(n,"X-HTTP-Session-Id",this.D),ai(this,n),this.o&&s&&Jn(n,this.o,s),xn(this.i,r),this.Ra&&Qe(n,"TYPE","init"),this.ja?(Qe(n,"$req",e),Qe(n,"SID","null"),r.$=!0,Ee(r,n,null)):Ee(r,n,e),this.G=2}}else 3==this.G&&(t?oi(this,t):0==this.l.length||vn(this.i)||oi(this))},i.Ga=function(){if(this.u=null,di(this),this.$&&!(this.L||null==this.g||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=ue(m(this.bb,this),t)}},i.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,ce(10),ei(this),di(this))},i.ab=function(){null!=this.v&&(this.v=null,ei(this),ui(this),ce(19))},i.jb=function(t){t?(this.h.info("Successfully pinged google.com"),ce(2)):(this.h.info("Failed to ping google.com"),ce(1))},i=_i.prototype,i.xa=function(){},i.wa=function(){},i.va=function(){},i.ua=function(){},i.Oa=function(){},wi.prototype.g=function(t,e){return new xi(t,e)},b(xi,Et),xi.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),Lt(m(t.hb,t,e))),ce(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=bi(t,null,t.W),ri(t)},xi.prototype.close=function(){ti(this.g)},xi.prototype.u=function(t){if("string"===typeof t){var e={};e.__data__=t,ii(this.g,e)}else this.v?(e={},e.__data__=Ot(t),ii(this.g,e)):ii(this.g,t)},xi.prototype.M=function(){this.g.j=null,delete this.j,ti(this.g),delete this.g,xi.Z.M.call(this)},b(Ii,be),b(Ti,ve),b(ki,_i),ki.prototype.xa=function(){St(this.g,"a")},ki.prototype.wa=function(t){St(this.g,new Ii(t))},ki.prototype.va=function(t){St(this.g,new Ti(t))},ki.prototype.ua=function(){St(this.g,"b")},wi.prototype.createWebChannel=wi.prototype.g,xi.prototype.send=xi.prototype.u,xi.prototype.open=xi.prototype.m,xi.prototype.close=xi.prototype.close,he.NO_ERROR=0,he.TIMEOUT=8,he.HTTP_ERROR=6,de.COMPLETE="complete",ge.EventType=ye,ye.OPEN="a",ye.CLOSE="b",ye.ERROR="c",ye.MESSAGE="d",Et.prototype.listen=Et.prototype.N,Fn.prototype.listenOnce=Fn.prototype.O,Fn.prototype.getLastError=Fn.prototype.La,Fn.prototype.getLastErrorCode=Fn.prototype.Da,Fn.prototype.getStatus=Fn.prototype.ba,Fn.prototype.getResponseJson=Fn.prototype.Qa,Fn.prototype.getResponseText=Fn.prototype.ga,Fn.prototype.send=Fn.prototype.ea;var Ei=s.createWebChannelTransport=function(){return new wi},Si=s.getStatEventTarget=function(){return re()},Ai=s.ErrorCode=he,Oi=s.EventType=de,Ci=s.Event=ne,Ri=s.Stat={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},Di=s.FetchXmlHttpFactory=Cn,Ni=s.WebChannel=ge,Pi=s.XhrIo=Fn}).call(this,n("c8ba"))},"99af":function(t,e,n){"use strict";var i=n("23e7"),r=n("da84"),s=n("d039"),o=n("e8b5"),a=n("861d"),c=n("7b0b"),l=n("07fa"),u=n("8418"),h=n("65f0"),d=n("1dde"),f=n("b622"),p=n("2d00"),g=f("isConcatSpreadable"),m=9007199254740991,y="Maximum allowed index exceeded",b=r.TypeError,v=p>=51||!s((function(){var t=[];return t[g]=!1,t.concat()[0]!==t})),_=d("concat"),w=function(t){if(!a(t))return!1;var e=t[g];return void 0!==e?!!e:o(t)},x=!v||!_;i({target:"Array",proto:!0,forced:x},{concat:function(t){var e,n,i,r,s,o=c(this),a=h(o,0),d=0;for(e=-1,i=arguments.length;e<i;e++)if(s=-1===e?o:arguments[e],w(s)){if(r=l(s),d+r>m)throw b(y);for(n=0;n<r;n++,d++)n in s&&u(a,d,s[n])}else{if(d>=m)throw b(y);u(a,d++,s)}return a.length=d,a}})},a640:function(t,e,n){"use strict";var i=n("d039");t.exports=function(t,e){var n=[][t];return!!n&&i((function(){n.call(null,e||function(){throw 1},1)}))}},b0c0:function(t,e,n){var i=n("83ab"),r=n("5e77").EXISTS,s=n("e330"),o=n("9bf2").f,a=Function.prototype,c=s(a.toString),l=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,u=s(l.exec),h="name";i&&!r&&o(a,h,{configurable:!0,get:function(){try{return u(l,c(this))[1]}catch(t){return""}}})},b724:function(t,e,n){},b727:function(t,e,n){var i=n("0366"),r=n("e330"),s=n("44ad"),o=n("7b0b"),a=n("07fa"),c=n("65f0"),l=r([].push),u=function(t){var e=1==t,n=2==t,r=3==t,u=4==t,h=6==t,d=7==t,f=5==t||h;return function(p,g,m,y){for(var b,v,_=o(p),w=s(_),x=i(g,m),I=a(w),T=0,k=y||c,E=e?k(p,I):n||d?k(p,0):void 0;I>T;T++)if((f||T in w)&&(b=w[T],v=x(b,T,_),t))if(e)E[T]=v;else if(v)switch(t){case 3:return!0;case 5:return b;case 6:return T;case 2:l(E,b)}else switch(t){case 4:return!1;case 7:l(E,b)}return h?-1:r||u?u:E}};t.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6),filterReject:u(7)}},bb51:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("div",{staticClass:"allChartArea"},[n("div",{staticClass:"chartArea"},[n("p",[t._v("全体")]),n("div",[n("Chart",{attrs:{"canvas-label-type":"date","label-end-num":"9"}})],1)]),n("div",{staticClass:"chartArea"},[n("p",[t._v("チーム")]),n("div",[n("Chart",{attrs:{"canvas-label-type":"time","label-end-num":"15"}})],1)]),n("div",{staticClass:"chartArea"},[n("p",[t._v("個人")]),n("div",[n("Chart",{attrs:{"canvas-label-type":"time","label-end-num":"30"}})],1)])]),n("div",{staticClass:"tabArea"},[n("div",{staticClass:"tabs"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.isActive,expression:"isActive"}],attrs:{type:"radio",id:"tab1",name:"tab",value:"1"},domProps:{checked:t._q(t.isActive,"1")},on:{change:function(e){t.isActive="1"}}}),t._m(0),n("input",{directives:[{name:"model",rawName:"v-model",value:t.isActive,expression:"isActive"}],attrs:{type:"radio",id:"tab2",name:"tab",value:"2"},domProps:{checked:t._q(t.isActive,"2")},on:{change:function(e){t.isActive="2"}}}),t._m(1)]),n("div",{staticClass:"contents"},["1"===t.isActive?n("div",[t._v(" タイムライン "),n("button",{on:{click:t.getTest}},[t._v("getTest")]),n("button",{on:{click:t.pushTest}},[t._v("pushTest")])]):"2"===t.isActive?n("div",{staticClass:"btnArea"},[n("Btn",{attrs:{"btn-text":"いい感じ","btn-color":"pink",icon:"&#x1f60e;"}}),n("Btn",{attrs:{"btn-text":"なにもわからん","btn-color":"purple",icon:"&#x1f607;"}}),n("Btn",{attrs:{"btn-text":"できた！！","btn-color":"yellow",icon:"&#x1f44d;"}}),n("Btn",{attrs:{"btn-text":"ぴえん","btn-color":"blue",icon:"&#x1f97a;"}}),n("Btn",{attrs:{"btn-text":"天才かも…！？","btn-color":"green",icon:"&#x1f393;"}})],1):t._e()])])])},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("label",{staticClass:"tab",attrs:{for:"tab1"}},[n("p",[t._v("タイムライン")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("label",{staticClass:"tab",attrs:{for:"tab2"}},[n("p",[t._v("投稿する")])])}],s=(n("d3b7"),n("159b"),n("99af"),n("b0c0"),n("7ded")),o="firebase",a="9.6.4";
/**
 * @license
 * Copyright 2020 Google LLC
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
 */
s["a"].registerVersion(o,a,"app-compat");var c=n("0829"),l=n("1fd5"),u=n("22e5");const h="@firebase/firestore-compat",d="0.1.12";
/**
 * @license
 * Copyright 2021 Google LLC
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
 */
function f(t,e){if(void 0===e)return{merge:!1};if(void 0!==e.mergeFields&&void 0!==e.merge)throw new c["g"]("invalid-argument",`Invalid options passed to function ${t}(): You cannot specify both "merge" and "mergeFields".`);return e}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */function p(){if("undefined"===typeof Uint8Array)throw new c["g"]("unimplemented","Uint8Arrays are not available in this environment.")}function g(){if(!Object(c["r"])())throw new c["g"]("unimplemented","Blobs are unavailable in Firestore in this environment.")}class m{constructor(t){this._delegate=t}static fromBase64String(t){return g(),new m(c["b"].fromBase64String(t))}static fromUint8Array(t){return p(),new m(c["b"].fromUint8Array(t))}toBase64(){return g(),this._delegate.toBase64()}toUint8Array(){return p(),this._delegate.toUint8Array()}isEqual(t){return this._delegate.isEqual(t._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */function y(t){return b(t,["next","error","complete"])}function b(t,e){if("object"!==typeof t||null===t)return!1;const n=t;for(const i of e)if(i in n&&"function"===typeof n[i])return!0;return!1}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */class v{enableIndexedDbPersistence(t,e){return Object(c["F"])(t._delegate,{forceOwnership:e})}enableMultiTabIndexedDbPersistence(t){return Object(c["G"])(t._delegate)}clearIndexedDbPersistence(t){return Object(c["x"])(t._delegate)}}class _{constructor(t,e,n){this._delegate=e,this._persistenceProvider=n,this.INTERNAL={delete:()=>this.terminate()},t instanceof c["m"]||(this._appCompat=t)}get _databaseId(){return this._delegate._databaseId}settings(t){const e=this._delegate._getSettings();t.merge||e.host===t.host||Object(c["s"])("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),t.merge&&(t=Object.assign(Object.assign({},e),t),delete t.merge),this._delegate._setSettings(t)}useEmulator(t,e,n={}){Object(c["A"])(this._delegate,t,e,n)}enableNetwork(){return Object(c["H"])(this._delegate)}disableNetwork(){return Object(c["D"])(this._delegate)}enablePersistence(t){let e=!1,n=!1;return t&&(e=!!t.synchronizeTabs,n=!!t.experimentalForceOwningTab,Object(c["t"])("synchronizeTabs",e,"experimentalForceOwningTab",n)),e?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,n)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return Object(c["lb"])(this._delegate)}onSnapshotsInSync(t){return Object(c["Y"])(this._delegate,t)}get app(){if(!this._appCompat)throw new c["g"]("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(t){try{return new M(this,Object(c["y"])(this._delegate,t))}catch(e){throw S(e,"collection()","Firestore.collection()")}}doc(t){try{return new E(this,Object(c["E"])(this._delegate,t))}catch(e){throw S(e,"doc()","Firestore.doc()")}}collectionGroup(t){try{return new D(this,Object(c["z"])(this._delegate,t))}catch(e){throw S(e,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(t){return Object(c["db"])(this._delegate,e=>t(new I(this,e)))}batch(){return Object(c["K"])(this._delegate),new T(new c["l"](this._delegate,t=>Object(c["L"])(this._delegate,t)))}loadBundle(t){return Object(c["V"])(this._delegate,t)}namedQuery(t){return Object(c["W"])(this._delegate,t).then(t=>t?new D(this,t):null)}}class w extends c["a"]{constructor(t){super(),this.firestore=t}convertBytes(t){return new m(new c["b"](t))}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return E.forKey(e,this.firestore,null)}}function x(t){Object(c["gb"])(t)}class I{constructor(t,e){this._firestore=t,this._delegate=e,this._userDataWriter=new w(t)}get(t){const e=L(t);return this._delegate.get(e).then(t=>new C(this._firestore,new c["e"](this._firestore._delegate,this._userDataWriter,t._key,t._document,t.metadata,e.converter)))}set(t,e,n){const i=L(t);return n?(f("Transaction.set",n),this._delegate.set(i,e,n)):this._delegate.set(i,e),this}update(t,e,n,...i){const r=L(t);return 2===arguments.length?this._delegate.update(r,e):this._delegate.update(r,e,n,...i),this}delete(t){const e=L(t);return this._delegate.delete(e),this}}class T{constructor(t){this._delegate=t}set(t,e,n){const i=L(t);return n?(f("WriteBatch.set",n),this._delegate.set(i,e,n)):this._delegate.set(i,e),this}update(t,e,n,...i){const r=L(t);return 2===arguments.length?this._delegate.update(r,e):this._delegate.update(r,e,n,...i),this}delete(t){const e=L(t);return this._delegate.delete(e),this}commit(){return this._delegate.commit()}}class k{constructor(t,e,n){this._firestore=t,this._userDataWriter=e,this._delegate=n}fromFirestore(t,e){const n=new c["i"](this._firestore._delegate,this._userDataWriter,t._key,t._document,t.metadata,null);return this._delegate.fromFirestore(new R(this._firestore,n),null!==e&&void 0!==e?e:{})}toFirestore(t,e){return e?this._delegate.toFirestore(t,e):this._delegate.toFirestore(t)}static getInstance(t,e){const n=k.INSTANCES;let i=n.get(t);i||(i=new WeakMap,n.set(t,i));let r=i.get(e);return r||(r=new k(t,new w(t),e),i.set(e,r)),r}}k.INSTANCES=new WeakMap;class E{constructor(t,e){this.firestore=t,this._delegate=e,this._userDataWriter=new w(t)}static forPath(t,e,n){if(t.length%2!==0)throw new c["g"]("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${t.canonicalString()} has ${t.length}`);return new E(e,new c["d"](e._delegate,n,new c["n"](t)))}static forKey(t,e,n){return new E(e,new c["d"](e._delegate,n,t))}get id(){return this._delegate.id}get parent(){return new M(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(t){try{return new M(this.firestore,Object(c["y"])(this._delegate,t))}catch(e){throw S(e,"collection()","DocumentReference.collection()")}}isEqual(t){return t=Object(l["k"])(t),t instanceof c["d"]&&Object(c["cb"])(this._delegate,t)}set(t,e){e=f("DocumentReference.set",e);try{return e?Object(c["fb"])(this._delegate,t,e):Object(c["fb"])(this._delegate,t)}catch(n){throw S(n,"setDoc()","DocumentReference.set()")}}update(t,e,...n){try{return 1===arguments.length?Object(c["kb"])(this._delegate,t):Object(c["kb"])(this._delegate,t,e,...n)}catch(i){throw S(i,"updateDoc()","DocumentReference.update()")}}delete(){return Object(c["B"])(this._delegate)}onSnapshot(...t){const e=A(t),n=O(t,t=>new C(this.firestore,new c["e"](this.firestore._delegate,this._userDataWriter,t._key,t._document,t.metadata,this._delegate.converter)));return Object(c["X"])(this._delegate,e,n)}get(t){let e;return e="cache"===(null===t||void 0===t?void 0:t.source)?Object(c["N"])(this._delegate):"server"===(null===t||void 0===t?void 0:t.source)?Object(c["O"])(this._delegate):Object(c["M"])(this._delegate),e.then(t=>new C(this.firestore,new c["e"](this.firestore._delegate,this._userDataWriter,t._key,t._document,t.metadata,this._delegate.converter)))}withConverter(t){return new E(this.firestore,t?this._delegate.withConverter(k.getInstance(this.firestore,t)):this._delegate.withConverter(null))}}function S(t,e,n){return t.message=t.message.replace(e,n),t}function A(t){for(const e of t)if("object"===typeof e&&!y(e))return e;return{}}function O(t,e){var n,i;let r;return r=y(t[0])?t[0]:y(t[1])?t[1]:"function"===typeof t[0]?{next:t[0],error:t[1],complete:t[2]}:{next:t[1],error:t[2],complete:t[3]},{next:t=>{r.next&&r.next(e(t))},error:null===(n=r.error)||void 0===n?void 0:n.bind(r),complete:null===(i=r.complete)||void 0===i?void 0:i.bind(r)}}class C{constructor(t,e){this._firestore=t,this._delegate=e}get ref(){return new E(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(t){return this._delegate.data(t)}get(t,e){return this._delegate.get(t,e)}isEqual(t){return Object(c["hb"])(this._delegate,t._delegate)}}class R extends C{data(t){const e=this._delegate.data(t);return Object(c["q"])(void 0!==e,"Document in a QueryDocumentSnapshot should exist"),e}}class D{constructor(t,e){this.firestore=t,this._delegate=e,this._userDataWriter=new w(t)}where(t,e,n){try{return new D(this.firestore,Object(c["ab"])(this._delegate,Object(c["mb"])(t,e,n)))}catch(i){throw S(i,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(t,e){try{return new D(this.firestore,Object(c["ab"])(this._delegate,Object(c["Z"])(t,e)))}catch(n){throw S(n,/(orderBy|where)\(\)/,"Query.$1()")}}limit(t){try{return new D(this.firestore,Object(c["ab"])(this._delegate,Object(c["T"])(t)))}catch(e){throw S(e,"limit()","Query.limit()")}}limitToLast(t){try{return new D(this.firestore,Object(c["ab"])(this._delegate,Object(c["U"])(t)))}catch(e){throw S(e,"limitToLast()","Query.limitToLast()")}}startAt(...t){try{return new D(this.firestore,Object(c["ab"])(this._delegate,Object(c["jb"])(...t)))}catch(e){throw S(e,"startAt()","Query.startAt()")}}startAfter(...t){try{return new D(this.firestore,Object(c["ab"])(this._delegate,Object(c["ib"])(...t)))}catch(e){throw S(e,"startAfter()","Query.startAfter()")}}endBefore(...t){try{return new D(this.firestore,Object(c["ab"])(this._delegate,Object(c["J"])(...t)))}catch(e){throw S(e,"endBefore()","Query.endBefore()")}}endAt(...t){try{return new D(this.firestore,Object(c["ab"])(this._delegate,Object(c["I"])(...t)))}catch(e){throw S(e,"endAt()","Query.endAt()")}}isEqual(t){return Object(c["bb"])(this._delegate,t._delegate)}get(t){let e;return e="cache"===(null===t||void 0===t?void 0:t.source)?Object(c["Q"])(this._delegate):"server"===(null===t||void 0===t?void 0:t.source)?Object(c["R"])(this._delegate):Object(c["P"])(this._delegate),e.then(t=>new P(this.firestore,new c["j"](this.firestore._delegate,this._userDataWriter,this._delegate,t._snapshot)))}onSnapshot(...t){const e=A(t),n=O(t,t=>new P(this.firestore,new c["j"](this.firestore._delegate,this._userDataWriter,this._delegate,t._snapshot)));return Object(c["X"])(this._delegate,e,n)}withConverter(t){return new D(this.firestore,t?this._delegate.withConverter(k.getInstance(this.firestore,t)):this._delegate.withConverter(null))}}class N{constructor(t,e){this._firestore=t,this._delegate=e}get type(){return this._delegate.type}get doc(){return new R(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class P{constructor(t,e){this._firestore=t,this._delegate=e}get query(){return new D(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(t=>new R(this._firestore,t))}docChanges(t){return this._delegate.docChanges(t).map(t=>new N(this._firestore,t))}forEach(t,e){this._delegate.forEach(n=>{t.call(e,new R(this._firestore,n))})}isEqual(t){return Object(c["hb"])(this._delegate,t._delegate)}}class M extends D{constructor(t,e){super(t,e),this.firestore=t,this._delegate=e}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const t=this._delegate.parent;return t?new E(this.firestore,t):null}doc(t){try{return new E(this.firestore,void 0===t?Object(c["E"])(this._delegate):Object(c["E"])(this._delegate,t))}catch(e){throw S(e,"doc()","CollectionReference.doc()")}}add(t){return Object(c["u"])(this._delegate,t).then(t=>new E(this.firestore,t))}isEqual(t){return Object(c["cb"])(this._delegate,t._delegate)}withConverter(t){return new M(this.firestore,t?this._delegate.withConverter(k.getInstance(this.firestore,t)):this._delegate.withConverter(null))}}function L(t){return Object(c["p"])(t,c["d"])}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */class F{constructor(...t){this._delegate=new c["f"](...t)}static documentId(){return new F(c["o"].keyField().canonicalString())}isEqual(t){return t=Object(l["k"])(t),t instanceof c["f"]&&this._delegate._internalPath.isEqual(t._internalPath)}}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */class j{constructor(t){this._delegate=t}static serverTimestamp(){const t=Object(c["eb"])();return t._methodName="FieldValue.serverTimestamp",new j(t)}static delete(){const t=Object(c["C"])();return t._methodName="FieldValue.delete",new j(t)}static arrayUnion(...t){const e=Object(c["w"])(...t);return e._methodName="FieldValue.arrayUnion",new j(e)}static arrayRemove(...t){const e=Object(c["v"])(...t);return e._methodName="FieldValue.arrayRemove",new j(e)}static increment(t){const e=Object(c["S"])(t);return e._methodName="FieldValue.increment",new j(e)}isEqual(t){return this._delegate.isEqual(t._delegate)}}
/**
 * @license
 * Copyright 2021 Google LLC
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
 */const U={Firestore:_,GeoPoint:c["h"],Timestamp:c["k"],Blob:m,Transaction:I,WriteBatch:T,DocumentReference:E,DocumentSnapshot:C,Query:D,QueryDocumentSnapshot:R,QuerySnapshot:P,CollectionReference:M,FieldPath:F,FieldValue:j,setLogLevel:x,CACHE_SIZE_UNLIMITED:c["c"]};function V(t,e){t.INTERNAL.registerComponent(new u["a"]("firestore-compat",t=>{const n=t.getProvider("app-compat").getImmediate(),i=t.getProvider("firestore").getImmediate();return e(n,i)},"PUBLIC").setServiceProps(Object.assign({},U)))}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */function B(t){V(t,(t,e)=>new _(t,e,new v)),t.registerVersion(h,d)}B(s["a"]);n("5994");var q=n("589b");
/**
 * @license
 * Copyright 2017 Google LLC
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
 */
const z="firebasestorage.googleapis.com",W="storageBucket",H=12e4,$=6e5;
/**
 * @license
 * Copyright 2017 Google LLC
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
 */
class K extends l["c"]{constructor(t,e){super(G(t),`Firebase Storage: ${e} (${G(t)})`),this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,K.prototype)}_codeEquals(t){return G(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}\n${this.customData.serverResponse}`:this.message=this._baseMessage}}function G(t){return"storage/"+t}function Y(){const t="An unknown error occurred, please check the error payload for server response.";return new K("unknown",t)}function Q(t){return new K("object-not-found","Object '"+t+"' does not exist.")}function J(t){return new K("quota-exceeded","Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function X(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new K("unauthenticated",t)}function Z(){return new K("unauthorized-app","This app does not have permission to access Firebase Storage on this project.")}function tt(t){return new K("unauthorized","User does not have permission to access '"+t+"'.")}function et(){return new K("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function nt(){return new K("canceled","User canceled the upload/download.")}function it(t){return new K("invalid-url","Invalid URL '"+t+"'.")}function rt(t){return new K("invalid-default-bucket","Invalid default bucket '"+t+"'.")}function st(){return new K("no-default-bucket","No default bucket found. Did you set the '"+W+"' property when initializing the app?")}function ot(){return new K("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function at(){return new K("server-file-wrong-size","Server recorded incorrect upload file size, please retry the upload.")}function ct(){return new K("no-download-url","The given file does not have any download URLs.")}function lt(t){return new K("invalid-argument",t)}function ut(){return new K("app-deleted","The Firebase app was deleted.")}function ht(t){return new K("invalid-root-operation","The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function dt(t,e){return new K("invalid-format","String does not match format '"+t+"': "+e)}function ft(t){throw new K("internal-error","Internal error: "+t)}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */class pt{constructor(t,e){this.bucket=t,this.path_=e}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o"}static makeFromBucketSpec(t,e){let n;try{n=pt.makeFromUrl(t,e)}catch(i){return new pt(t,"")}if(""===n.path)return n;throw rt(t)}static makeFromUrl(t,e){let n=null;const i="([A-Za-z0-9.\\-_]+)";function r(t){"/"===t.path.charAt(t.path.length-1)&&(t.path_=t.path_.slice(0,-1))}const s="(/(.*))?$",o=new RegExp("^gs://"+i+s,"i"),a={bucket:1,path:3};function c(t){t.path_=decodeURIComponent(t.path)}const l="v[A-Za-z0-9_]+",u=e.replace(/[.]/g,"\\."),h="(/([^?#]*).*)?$",d=new RegExp(`^https?://${u}/${l}/b/${i}/o${h}`,"i"),f={bucket:1,path:3},p=e===z?"(?:storage.googleapis.com|storage.cloud.google.com)":e,g="([^?#]*)",m=new RegExp(`^https?://${p}/${i}/${g}`,"i"),y={bucket:1,path:2},b=[{regex:o,indices:a,postModify:r},{regex:d,indices:f,postModify:c},{regex:m,indices:y,postModify:c}];for(let v=0;v<b.length;v++){const e=b[v],i=e.regex.exec(t);if(i){const t=i[e.indices.bucket];let r=i[e.indices.path];r||(r=""),n=new pt(t,r),e.postModify(n);break}}if(null==n)throw it(t);return n}}class gt{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */function mt(t,e,n){let i=1,r=null,s=null,o=!1,a=0;function c(){return 2===a}let l=!1;function u(...t){l||(l=!0,e.apply(null,t))}function h(e){r=setTimeout(()=>{r=null,t(f,c())},e)}function d(){s&&clearTimeout(s)}function f(t,...e){if(l)return void d();if(t)return d(),void u.call(null,t,...e);const n=c()||o;if(n)return d(),void u.call(null,t,...e);let r;i<64&&(i*=2),1===a?(a=2,r=0):r=1e3*(i+Math.random()),h(r)}let p=!1;function g(t){p||(p=!0,d(),l||(null!==r?(t||(a=2),clearTimeout(r),h(0)):t||(a=1)))}return h(0),s=setTimeout(()=>{o=!0,g(!0)},n),g}function yt(t){t(!1)}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */function bt(t){return void 0!==t}function vt(t){return"function"===typeof t}function _t(t){return"object"===typeof t&&!Array.isArray(t)}function wt(t){return"string"===typeof t||t instanceof String}function xt(t){return It()&&t instanceof Blob}function It(){return"undefined"!==typeof Blob}function Tt(t,e,n,i){if(i<e)throw lt(`Invalid value for '${t}'. Expected ${e} or greater.`);if(i>n)throw lt(`Invalid value for '${t}'. Expected ${n} or less.`)}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */function kt(t,e,n){let i=e;return null==n&&(i="https://"+e),`${n}://${i}/v0${t}`}function Et(t){const e=encodeURIComponent;let n="?";for(const i in t)if(t.hasOwnProperty(i)){const r=e(i)+"="+e(t[i]);n=n+r+"&"}return n=n.slice(0,-1),n}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */var St;(function(t){t[t["NO_ERROR"]=0]="NO_ERROR",t[t["NETWORK_ERROR"]=1]="NETWORK_ERROR",t[t["ABORT"]=2]="ABORT"})(St||(St={}));
/**
 * @license
 * Copyright 2017 Google LLC
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
 */
class At{constructor(t,e,n,i,r,s,o,a,c,l,u){this.url_=t,this.method_=e,this.headers_=n,this.body_=i,this.successCodes_=r,this.additionalRetryCodes_=s,this.callback_=o,this.errorCallback_=a,this.timeout_=c,this.progressCallback_=l,this.connectionFactory_=u,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((t,e)=>{this.resolve_=t,this.reject_=e,this.start_()})}start_(){const t=(t,e)=>{if(e)return void t(!1,new Ot(!1,null,!0));const n=this.connectionFactory_();this.pendingConnection_=n;const i=t=>{const e=t.loaded,n=t.lengthComputable?t.total:-1;null!==this.progressCallback_&&this.progressCallback_(e,n)};null!==this.progressCallback_&&n.addUploadProgressListener(i),n.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{null!==this.progressCallback_&&n.removeUploadProgressListener(i),this.pendingConnection_=null;const e=n.getErrorCode()===St.NO_ERROR,r=n.getStatus();if(!e||this.isRetryStatusCode_(r)){const e=n.getErrorCode()===St.ABORT;return void t(!1,new Ot(!1,null,e))}const s=-1!==this.successCodes_.indexOf(r);t(!0,new Ot(s,n))})},e=(t,e)=>{const n=this.resolve_,i=this.reject_,r=e.connection;if(e.wasSuccessCode)try{const t=this.callback_(r,r.getResponse());bt(t)?n(t):n()}catch(s){i(s)}else if(null!==r){const t=Y();t.serverResponse=r.getErrorText(),this.errorCallback_?i(this.errorCallback_(r,t)):i(t)}else if(e.canceled){const t=this.appDelete_?ut():nt();i(t)}else{const t=et();i(t)}};this.canceled_?e(!1,new Ot(!1,null,!0)):this.backoffId_=mt(t,e,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,null!==this.backoffId_&&yt(this.backoffId_),null!==this.pendingConnection_&&this.pendingConnection_.abort()}isRetryStatusCode_(t){const e=t>=500&&t<600,n=[408,429],i=-1!==n.indexOf(t),r=-1!==this.additionalRetryCodes_.indexOf(t);return e||i||r}}class Ot{constructor(t,e,n){this.wasSuccessCode=t,this.connection=e,this.canceled=!!n}}function Ct(t,e){null!==e&&e.length>0&&(t["Authorization"]="Firebase "+e)}function Rt(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(null!==e&&void 0!==e?e:"AppManager")}function Dt(t,e){e&&(t["X-Firebase-GMPID"]=e)}function Nt(t,e){null!==e&&(t["X-Firebase-AppCheck"]=e)}function Pt(t,e,n,i,r,s){const o=Et(t.urlParams),a=t.url+o,c=Object.assign({},t.headers);return Dt(c,e),Ct(c,n),Rt(c,s),Nt(c,i),new At(a,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,r)}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */function Mt(){return"undefined"!==typeof BlobBuilder?BlobBuilder:"undefined"!==typeof WebKitBlobBuilder?WebKitBlobBuilder:void 0}function Lt(...t){const e=Mt();if(void 0!==e){const n=new e;for(let e=0;e<t.length;e++)n.append(t[e]);return n.getBlob()}if(It())return new Blob(t);throw new K("unsupported-environment","This browser doesn't seem to support creating Blobs")}function Ft(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}
/**
 * @license
 * Copyright 2021 Google LLC
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
 */function jt(t){return atob(t)}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */const Ut={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Vt{constructor(t,e){this.data=t,this.contentType=e||null}}function Bt(t,e){switch(t){case Ut.RAW:return new Vt(qt(e));case Ut.BASE64:case Ut.BASE64URL:return new Vt(Wt(t,e));case Ut.DATA_URL:return new Vt($t(e),Kt(e))}throw Y()}function qt(t){const e=[];for(let n=0;n<t.length;n++){let i=t.charCodeAt(n);if(i<=127)e.push(i);else if(i<=2047)e.push(192|i>>6,128|63&i);else if(55296===(64512&i)){const r=n<t.length-1&&56320===(64512&t.charCodeAt(n+1));if(r){const r=i,s=t.charCodeAt(++n);i=65536|(1023&r)<<10|1023&s,e.push(240|i>>18,128|i>>12&63,128|i>>6&63,128|63&i)}else e.push(239,191,189)}else 56320===(64512&i)?e.push(239,191,189):e.push(224|i>>12,128|i>>6&63,128|63&i)}return new Uint8Array(e)}function zt(t){let e;try{e=decodeURIComponent(t)}catch(n){throw dt(Ut.DATA_URL,"Malformed data URL.")}return qt(e)}function Wt(t,e){switch(t){case Ut.BASE64:{const n=-1!==e.indexOf("-"),i=-1!==e.indexOf("_");if(n||i){const e=n?"-":"_";throw dt(t,"Invalid character '"+e+"' found: is it base64url encoded?")}break}case Ut.BASE64URL:{const n=-1!==e.indexOf("+"),i=-1!==e.indexOf("/");if(n||i){const e=n?"+":"/";throw dt(t,"Invalid character '"+e+"' found: is it base64 encoded?")}e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=jt(e)}catch(r){throw dt(t,"Invalid character found")}const i=new Uint8Array(n.length);for(let s=0;s<n.length;s++)i[s]=n.charCodeAt(s);return i}class Ht{constructor(t){this.base64=!1,this.contentType=null;const e=t.match(/^data:([^,]+)?,/);if(null===e)throw dt(Ut.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const n=e[1]||null;null!=n&&(this.base64=Gt(n,";base64"),this.contentType=this.base64?n.substring(0,n.length-";base64".length):n),this.rest=t.substring(t.indexOf(",")+1)}}function $t(t){const e=new Ht(t);return e.base64?Wt(Ut.BASE64,e.rest):zt(e.rest)}function Kt(t){const e=new Ht(t);return e.contentType}function Gt(t,e){const n=t.length>=e.length;return!!n&&t.substring(t.length-e.length)===e}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Yt{constructor(t,e){let n=0,i="";xt(t)?(this.data_=t,n=t.size,i=t.type):t instanceof ArrayBuffer?(e?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),n=this.data_.length):t instanceof Uint8Array&&(e?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),n=t.length),this.size_=n,this.type_=i}size(){return this.size_}type(){return this.type_}slice(t,e){if(xt(this.data_)){const n=this.data_,i=Ft(n,t,e);return null===i?null:new Yt(i)}{const n=new Uint8Array(this.data_.buffer,t,e-t);return new Yt(n,!0)}}static getBlob(...t){if(It()){const e=t.map(t=>t instanceof Yt?t.data_:t);return new Yt(Lt.apply(null,e))}{const e=t.map(t=>wt(t)?Bt(Ut.RAW,t).data:t.data_);let n=0;e.forEach(t=>{n+=t.byteLength});const i=new Uint8Array(n);let r=0;return e.forEach(t=>{for(let e=0;e<t.length;e++)i[r++]=t[e]}),new Yt(i,!0)}}uploadData(){return this.data_}}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */function Qt(t){let e;try{e=JSON.parse(t)}catch(n){return null}return _t(e)?e:null}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */function Jt(t){if(0===t.length)return null;const e=t.lastIndexOf("/");if(-1===e)return"";const n=t.slice(0,e);return n}function Xt(t,e){const n=e.split("/").filter(t=>t.length>0).join("/");return 0===t.length?n:t+"/"+n}function Zt(t){const e=t.lastIndexOf("/",t.length-2);return-1===e?t:t.slice(e+1)}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */function te(t,e){return e}class ee{constructor(t,e,n,i){this.server=t,this.local=e||t,this.writable=!!n,this.xform=i||te}}let ne=null;function ie(t){return!wt(t)||t.length<2?t:Zt(t)}function re(){if(ne)return ne;const t=[];function e(t,e){return ie(e)}t.push(new ee("bucket")),t.push(new ee("generation")),t.push(new ee("metageneration")),t.push(new ee("name","fullPath",!0));const n=new ee("name");function i(t,e){return void 0!==e?Number(e):e}n.xform=e,t.push(n);const r=new ee("size");return r.xform=i,t.push(r),t.push(new ee("timeCreated")),t.push(new ee("updated")),t.push(new ee("md5Hash",null,!0)),t.push(new ee("cacheControl",null,!0)),t.push(new ee("contentDisposition",null,!0)),t.push(new ee("contentEncoding",null,!0)),t.push(new ee("contentLanguage",null,!0)),t.push(new ee("contentType",null,!0)),t.push(new ee("metadata","customMetadata",!0)),ne=t,ne}function se(t,e){function n(){const n=t["bucket"],i=t["fullPath"],r=new pt(n,i);return e._makeStorageReference(r)}Object.defineProperty(t,"ref",{get:n})}function oe(t,e,n){const i={type:"file"},r=n.length;for(let s=0;s<r;s++){const t=n[s];i[t.local]=t.xform(i,e[t.server])}return se(i,t),i}function ae(t,e,n){const i=Qt(e);if(null===i)return null;const r=i;return oe(t,r,n)}function ce(t,e,n,i){const r=Qt(e);if(null===r)return null;if(!wt(r["downloadTokens"]))return null;const s=r["downloadTokens"];if(0===s.length)return null;const o=encodeURIComponent,a=s.split(","),c=a.map(e=>{const r=t["bucket"],s=t["fullPath"],a="/b/"+o(r)+"/o/"+o(s),c=kt(a,n,i),l=Et({alt:"media",token:e});return c+l});return c[0]}function le(t,e){const n={},i=e.length;for(let r=0;r<i;r++){const i=e[r];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}
/**
 * @license
 * Copyright 2019 Google LLC
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
 */const ue="prefixes",he="items";function de(t,e,n){const i={prefixes:[],items:[],nextPageToken:n["nextPageToken"]};if(n[ue])for(const r of n[ue]){const n=r.replace(/\/$/,""),s=t._makeStorageReference(new pt(e,n));i.prefixes.push(s)}if(n[he])for(const r of n[he]){const n=t._makeStorageReference(new pt(e,r["name"]));i.items.push(n)}return i}function fe(t,e,n){const i=Qt(n);if(null===i)return null;const r=i;return de(t,e,r)}class pe{constructor(t,e,n,i){this.url=t,this.method=e,this.handler=n,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */function ge(t){if(!t)throw Y()}function me(t,e){function n(n,i){const r=ae(t,i,e);return ge(null!==r),r}return n}function ye(t,e){function n(n,i){const r=fe(t,e,i);return ge(null!==r),r}return n}function be(t,e){function n(n,i){const r=ae(t,i,e);return ge(null!==r),ce(r,i,t.host,t._protocol)}return n}function ve(t){function e(e,n){let i;return i=401===e.getStatus()?e.getErrorText().includes("Firebase App Check token is invalid")?Z():X():402===e.getStatus()?J(t.bucket):403===e.getStatus()?tt(t.path):n,i.serverResponse=n.serverResponse,i}return e}function _e(t){const e=ve(t);function n(n,i){let r=e(n,i);return 404===n.getStatus()&&(r=Q(t.path)),r.serverResponse=i.serverResponse,r}return n}function we(t,e,n){const i=e.fullServerUrl(),r=kt(i,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new pe(r,s,me(t,n),o);return a.errorHandler=_e(e),a}function xe(t,e,n,i,r){const s={};e.isRoot?s["prefix"]="":s["prefix"]=e.path+"/",n&&n.length>0&&(s["delimiter"]=n),i&&(s["pageToken"]=i),r&&(s["maxResults"]=r);const o=e.bucketOnlyServerUrl(),a=kt(o,t.host,t._protocol),c="GET",l=t.maxOperationRetryTime,u=new pe(a,c,ye(t,e.bucket),l);return u.urlParams=s,u.errorHandler=ve(e),u}function Ie(t,e,n){const i=e.fullServerUrl(),r=kt(i,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new pe(r,s,be(t,n),o);return a.errorHandler=_e(e),a}function Te(t,e,n,i){const r=e.fullServerUrl(),s=kt(r,t.host,t._protocol),o="PATCH",a=le(n,i),c={"Content-Type":"application/json; charset=utf-8"},l=t.maxOperationRetryTime,u=new pe(s,o,me(t,i),l);return u.headers=c,u.body=a,u.errorHandler=_e(e),u}function ke(t,e){const n=e.fullServerUrl(),i=kt(n,t.host,t._protocol),r="DELETE",s=t.maxOperationRetryTime;function o(t,e){}const a=new pe(i,r,o,s);return a.successCodes=[200,204],a.errorHandler=_e(e),a}function Ee(t,e){return t&&t["contentType"]||e&&e.type()||"application/octet-stream"}function Se(t,e,n){const i=Object.assign({},n);return i["fullPath"]=t.path,i["size"]=e.size(),i["contentType"]||(i["contentType"]=Ee(null,e)),i}function Ae(t,e,n,i,r){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let t="";for(let e=0;e<2;e++)t+=Math.random().toString().slice(2);return t}const c=a();o["Content-Type"]="multipart/related; boundary="+c;const l=Se(e,i,r),u=le(l,n),h="--"+c+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+u+"\r\n--"+c+"\r\nContent-Type: "+l["contentType"]+"\r\n\r\n",d="\r\n--"+c+"--",f=Yt.getBlob(h,i,d);if(null===f)throw ot();const p={name:l["fullPath"]},g=kt(s,t.host,t._protocol),m="POST",y=t.maxUploadRetryTime,b=new pe(g,m,me(t,n),y);return b.urlParams=p,b.headers=o,b.body=f.uploadData(),b.errorHandler=ve(e),b}class Oe{constructor(t,e,n,i){this.current=t,this.total=e,this.finalized=!!n,this.metadata=i||null}}function Ce(t,e){let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Status")}catch(r){ge(!1)}const i=e||["active"];return ge(!!n&&-1!==i.indexOf(n)),n}function Re(t,e,n,i,r){const s=e.bucketOnlyServerUrl(),o=Se(e,i,r),a={name:o["fullPath"]},c=kt(s,t.host,t._protocol),l="POST",u={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":""+i.size(),"X-Goog-Upload-Header-Content-Type":o["contentType"],"Content-Type":"application/json; charset=utf-8"},h=le(o,n),d=t.maxUploadRetryTime;function f(t){let e;Ce(t);try{e=t.getResponseHeader("X-Goog-Upload-URL")}catch(n){ge(!1)}return ge(wt(e)),e}const p=new pe(c,l,f,d);return p.urlParams=a,p.headers=u,p.body=h,p.errorHandler=ve(e),p}function De(t,e,n,i){const r={"X-Goog-Upload-Command":"query"};function s(t){const e=Ce(t,["active","final"]);let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Size-Received")}catch(s){ge(!1)}n||ge(!1);const r=Number(n);return ge(!isNaN(r)),new Oe(r,i.size(),"final"===e)}const o="POST",a=t.maxUploadRetryTime,c=new pe(n,o,s,a);return c.headers=r,c.errorHandler=ve(e),c}const Ne=262144;function Pe(t,e,n,i,r,s,o,a){const c=new Oe(0,0);if(o?(c.current=o.current,c.total=o.total):(c.current=0,c.total=i.size()),i.size()!==c.total)throw at();const l=c.total-c.current;let u=l;r>0&&(u=Math.min(u,r));const h=c.current,d=h+u,f=u===l?"upload, finalize":"upload",p={"X-Goog-Upload-Command":f,"X-Goog-Upload-Offset":""+c.current},g=i.slice(h,d);if(null===g)throw ot();function m(t,n){const r=Ce(t,["active","final"]),o=c.current+u,a=i.size();let l;return l="final"===r?me(e,s)(t,n):null,new Oe(o,a,"final"===r,l)}const y="POST",b=e.maxUploadRetryTime,v=new pe(n,y,m,b);return v.headers=p,v.body=g.uploadData(),v.progressCallback=a||null,v.errorHandler=ve(t),v}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */const Me={STATE_CHANGED:"state_changed"},Le={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function Fe(t){switch(t){case"running":case"pausing":case"canceling":return Le.RUNNING;case"paused":return Le.PAUSED;case"success":return Le.SUCCESS;case"canceled":return Le.CANCELED;case"error":return Le.ERROR;default:return Le.ERROR}}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */class je{constructor(t,e,n){const i=vt(t)||null!=e||null!=n;if(i)this.next=t,this.error=null!==e&&void 0!==e?e:void 0,this.complete=null!==n&&void 0!==n?n:void 0;else{const e=t;this.next=e.next,this.error=e.error,this.complete=e.complete}}}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */function Ue(t){return(...e)=>{Promise.resolve().then(()=>t(...e))}}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */let Ve=null;class Be{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=St.NO_ERROR,this.sendPromise_=new Promise(t=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=St.ABORT,t()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=St.NETWORK_ERROR,t()}),this.xhr_.addEventListener("load",()=>{t()})})}send(t,e,n,i){if(this.sent_)throw ft("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(e,t,!0),void 0!==i)for(const r in i)i.hasOwnProperty(r)&&this.xhr_.setRequestHeader(r,i[r].toString());return void 0!==n?this.xhr_.send(n):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw ft("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw ft("cannot .getStatus() before sending");try{return this.xhr_.status}catch(t){return-1}}getResponse(){if(!this.sent_)throw ft("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw ft("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){null!=this.xhr_.upload&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){null!=this.xhr_.upload&&this.xhr_.upload.removeEventListener("progress",t)}}class qe extends Be{initXhr(){this.xhr_.responseType="text"}}function ze(){return Ve?Ve():new qe}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */
class We{constructor(t,e,n=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=t,this._blob=e,this._metadata=n,this._mappings=re(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=t=>{this._request=void 0,this._chunkMultiplier=1,t._codeEquals("canceled")?(this._needToFetchStatus=!0,this.completeTransitions_()):(this._error=t,this._transition("error"))},this._metadataErrorHandler=t=>{this._request=void 0,t._codeEquals("canceled")?this.completeTransitions_():(this._error=t,this._transition("error"))},this._promise=new Promise((t,e)=>{this._resolve=t,this._reject=e,this._start()}),this._promise.then(null,()=>{})}_makeProgressCallback(){const t=this._transferred;return e=>this._updateProgress(t+e)}_shouldDoResumable(t){return t.size()>262144}_start(){"running"===this._state&&void 0===this._request&&(this._resumable?void 0===this._uploadUrl?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this._continueUpload():this._oneShotUpload())}_resolveToken(t){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([e,n])=>{switch(this._state){case"running":t(e,n);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((t,e)=>{const n=Re(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(n,ze,t,e);this._request=i,i.getPromise().then(t=>{this._request=void 0,this._uploadUrl=t,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const t=this._uploadUrl;this._resolveToken((e,n)=>{const i=De(this._ref.storage,this._ref._location,t,this._blob),r=this._ref.storage._makeRequest(i,ze,e,n);this._request=r,r.getPromise().then(t=>{t=t,this._request=void 0,this._updateProgress(t.current),this._needToFetchStatus=!1,t.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const t=Ne*this._chunkMultiplier,e=new Oe(this._transferred,this._blob.size()),n=this._uploadUrl;this._resolveToken((i,r)=>{let s;try{s=Pe(this._ref._location,this._ref.storage,n,this._blob,t,this._mappings,e,this._makeProgressCallback())}catch(a){return this._error=a,void this._transition("error")}const o=this._ref.storage._makeRequest(s,ze,i,r);this._request=o,o.getPromise().then(t=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(t.current),t.finalized?(this._metadata=t.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){const t=Ne*this._chunkMultiplier;t<33554432&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((t,e)=>{const n=we(this._ref.storage,this._ref._location,this._mappings),i=this._ref.storage._makeRequest(n,ze,t,e);this._request=i,i.getPromise().then(t=>{this._request=void 0,this._metadata=t,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((t,e)=>{const n=Ae(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(n,ze,t,e);this._request=i,i.getPromise().then(t=>{this._request=void 0,this._metadata=t,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(t){const e=this._transferred;this._transferred=t,this._transferred!==e&&this._notifyObservers()}_transition(t){if(this._state!==t)switch(t){case"canceling":this._state=t,void 0!==this._request&&this._request.cancel();break;case"pausing":this._state=t,void 0!==this._request&&this._request.cancel();break;case"running":const e="paused"===this._state;this._state=t,e&&(this._notifyObservers(),this._start());break;case"paused":this._state=t,this._notifyObservers();break;case"canceled":this._error=nt(),this._state=t,this._notifyObservers();break;case"error":this._state=t,this._notifyObservers();break;case"success":this._state=t,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const t=Fe(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:t,metadata:this._metadata,task:this,ref:this._ref}}on(t,e,n,i){const r=new je(e||void 0,n||void 0,i||void 0);return this._addObserver(r),()=>{this._removeObserver(r)}}then(t,e){return this._promise.then(t,e)}catch(t){return this.then(null,t)}_addObserver(t){this._observers.push(t),this._notifyObserver(t)}_removeObserver(t){const e=this._observers.indexOf(t);-1!==e&&this._observers.splice(e,1)}_notifyObservers(){this._finishPromise();const t=this._observers.slice();t.forEach(t=>{this._notifyObserver(t)})}_finishPromise(){if(void 0!==this._resolve){let t=!0;switch(Fe(this._state)){case Le.SUCCESS:Ue(this._resolve.bind(null,this.snapshot))();break;case Le.CANCELED:case Le.ERROR:const e=this._reject;Ue(e.bind(null,this._error))();break;default:t=!1;break}t&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(t){const e=Fe(this._state);switch(e){case Le.RUNNING:case Le.PAUSED:t.next&&Ue(t.next.bind(t,this.snapshot))();break;case Le.SUCCESS:t.complete&&Ue(t.complete.bind(t))();break;case Le.CANCELED:case Le.ERROR:t.error&&Ue(t.error.bind(t,this._error))();break;default:t.error&&Ue(t.error.bind(t,this._error))()}}resume(){const t="paused"===this._state||"pausing"===this._state;return t&&this._transition("running"),t}pause(){const t="running"===this._state;return t&&this._transition("pausing"),t}cancel(){const t="running"===this._state||"pausing"===this._state;return t&&this._transition("canceling"),t}}
/**
 * @license
 * Copyright 2019 Google LLC
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
 */class He{constructor(t,e){this._service=t,this._location=e instanceof pt?e:pt.makeFromUrl(e,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,e){return new He(t,e)}get root(){const t=new pt(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Zt(this._location.path)}get storage(){return this._service}get parent(){const t=Jt(this._location.path);if(null===t)return null;const e=new pt(this._location.bucket,t);return new He(this._service,e)}_throwIfRoot(t){if(""===this._location.path)throw ht(t)}}function $e(t,e,n){return t._throwIfRoot("uploadBytesResumable"),new We(t,new Yt(e),n)}function Ke(t){const e={prefixes:[],items:[]};return Ge(t,e).then(()=>e)}async function Ge(t,e,n){const i={pageToken:n},r=await Ye(t,i);e.prefixes.push(...r.prefixes),e.items.push(...r.items),null!=r.nextPageToken&&await Ge(t,e,r.nextPageToken)}function Ye(t,e){null!=e&&"number"===typeof e.maxResults&&Tt("options.maxResults",1,1e3,e.maxResults);const n=e||{},i=xe(t.storage,t._location,"/",n.pageToken,n.maxResults);return t.storage.makeRequestWithTokens(i,ze)}function Qe(t){t._throwIfRoot("getMetadata");const e=we(t.storage,t._location,re());return t.storage.makeRequestWithTokens(e,ze)}function Je(t,e){t._throwIfRoot("updateMetadata");const n=Te(t.storage,t._location,e,re());return t.storage.makeRequestWithTokens(n,ze)}function Xe(t){t._throwIfRoot("getDownloadURL");const e=Ie(t.storage,t._location,re());return t.storage.makeRequestWithTokens(e,ze).then(t=>{if(null===t)throw ct();return t})}function Ze(t){t._throwIfRoot("deleteObject");const e=ke(t.storage,t._location);return t.storage.makeRequestWithTokens(e,ze)}function tn(t,e){const n=Xt(t._location.path,e),i=new pt(t._location.bucket,n);return new He(t.storage,i)}
/**
 * @license
 * Copyright 2017 Google LLC
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
 */function en(t){return/^[A-Za-z]+:\/\//.test(t)}function nn(t,e){return new He(t,e)}function rn(t,e){if(t instanceof cn){const n=t;if(null==n._bucket)throw st();const i=new He(n,n._bucket);return null!=e?rn(i,e):i}return void 0!==e?tn(t,e):t}function sn(t,e){if(e&&en(e)){if(t instanceof cn)return nn(t,e);throw lt("To use ref(service, url), the first argument must be a Storage instance.")}return rn(t,e)}function on(t,e){const n=null===e||void 0===e?void 0:e[W];return null==n?null:pt.makeFromBucketSpec(n,t)}function an(t,e,n,i={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:r}=i;r&&(t._overrideAuthToken="string"===typeof r?r:Object(l["f"])(r,t.app.options.projectId))}class cn{constructor(t,e,n,i,r){this.app=t,this._authProvider=e,this._appCheckProvider=n,this._url=i,this._firebaseVersion=r,this._bucket=null,this._host=z,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=H,this._maxUploadRetryTime=$,this._requests=new Set,this._bucket=null!=i?pt.makeFromBucketSpec(i,this._host):on(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,null!=this._url?this._bucket=pt.makeFromBucketSpec(this._url,t):this._bucket=on(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){Tt("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){Tt("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const e=await t.getToken();if(null!==e)return e.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});if(t){const e=await t.getToken();return e.token}return null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new He(this,t)}_makeRequest(t,e,n,i){if(this._deleted)return new gt(ut());{const r=Pt(t,this._appId,n,i,e,this._firebaseVersion);return this._requests.add(r),r.getPromise().then(()=>this._requests.delete(r),()=>this._requests.delete(r)),r}}async makeRequestWithTokens(t,e){const[n,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,e,n,i).getPromise()}}const ln="@firebase/storage",un="0.9.1",hn="storage";function dn(t,e,n){return t=Object(l["k"])(t),$e(t,e,n)}function fn(t){return t=Object(l["k"])(t),Qe(t)}function pn(t,e){return t=Object(l["k"])(t),Je(t,e)}function gn(t,e){return t=Object(l["k"])(t),Ye(t,e)}function mn(t){return t=Object(l["k"])(t),Ke(t)}function yn(t){return t=Object(l["k"])(t),Xe(t)}function bn(t){return t=Object(l["k"])(t),Ze(t)}function vn(t,e){return t=Object(l["k"])(t),sn(t,e)}function _n(t,e){return tn(t,e)}function wn(t,e,n,i={}){an(t,e,n,i)}
/**
 * @license
 * Copyright 2021 Google LLC
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
 */function xn(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),i=t.getProvider("auth-internal"),r=t.getProvider("app-check-internal");return new cn(n,i,r,e,q["SDK_VERSION"])}function In(){Object(q["_registerComponent"])(new u["a"](hn,xn,"PUBLIC").setMultipleInstances(!0)),Object(q["registerVersion"])(ln,un,""),Object(q["registerVersion"])(ln,un,"esm2017")}In();
/**
 * @license
 * Copyright 2020 Google LLC
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
 */
class Tn{constructor(t,e,n){this._delegate=t,this.task=e,this.ref=n}get bytesTransferred(){return this._delegate.bytesTransferred}get metadata(){return this._delegate.metadata}get state(){return this._delegate.state}get totalBytes(){return this._delegate.totalBytes}}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */class kn{constructor(t,e){this._delegate=t,this._ref=e,this.cancel=this._delegate.cancel.bind(this._delegate),this.catch=this._delegate.catch.bind(this._delegate),this.pause=this._delegate.pause.bind(this._delegate),this.resume=this._delegate.resume.bind(this._delegate)}get snapshot(){return new Tn(this._delegate.snapshot,this,this._ref)}then(t,e){return this._delegate.then(e=>{if(t)return t(new Tn(e,this,this._ref))},e)}on(t,e,n,i){let r=void 0;return e&&(r="function"===typeof e?t=>e(new Tn(t,this,this._ref)):{next:e.next?t=>e.next(new Tn(t,this,this._ref)):void 0,complete:e.complete||void 0,error:e.error||void 0}),this._delegate.on(t,r,n||void 0,i||void 0)}}class En{constructor(t,e){this._delegate=t,this._service=e}get prefixes(){return this._delegate.prefixes.map(t=>new Sn(t,this._service))}get items(){return this._delegate.items.map(t=>new Sn(t,this._service))}get nextPageToken(){return this._delegate.nextPageToken||null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn{constructor(t,e){this._delegate=t,this.storage=e}get name(){return this._delegate.name}get bucket(){return this._delegate.bucket}get fullPath(){return this._delegate.fullPath}toString(){return this._delegate.toString()}child(t){const e=_n(this._delegate,t);return new Sn(e,this.storage)}get root(){return new Sn(this._delegate.root,this.storage)}get parent(){const t=this._delegate.parent;return null==t?null:new Sn(t,this.storage)}put(t,e){return this._throwIfRoot("put"),new kn(dn(this._delegate,t,e),this)}putString(t,e=Ut.RAW,n){this._throwIfRoot("putString");const i=Bt(e,t),r=Object.assign({},n);return null==r["contentType"]&&null!=i.contentType&&(r["contentType"]=i.contentType),new kn(new We(this._delegate,new Yt(i.data,!0),r),this)}listAll(){return mn(this._delegate).then(t=>new En(t,this.storage))}list(t){return gn(this._delegate,t||void 0).then(t=>new En(t,this.storage))}getMetadata(){return fn(this._delegate)}updateMetadata(t){return pn(this._delegate,t)}getDownloadURL(){return yn(this._delegate)}delete(){return this._throwIfRoot("delete"),bn(this._delegate)}_throwIfRoot(t){if(""===this._delegate._location.path)throw ht(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
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
 */class An{constructor(t,e){this.app=t,this._delegate=e}get maxOperationRetryTime(){return this._delegate.maxOperationRetryTime}get maxUploadRetryTime(){return this._delegate.maxUploadRetryTime}ref(t){if(On(t))throw lt("ref() expected a child path but got a URL, use refFromURL instead.");return new Sn(vn(this._delegate,t),this)}refFromURL(t){if(!On(t))throw lt("refFromURL() expected a full URL but got a child path, use ref() instead.");try{pt.makeFromUrl(t,this._delegate.host)}catch(e){throw lt("refFromUrl() expected a valid full URL but got an invalid one.")}return new Sn(vn(this._delegate,t),this)}setMaxUploadRetryTime(t){this._delegate.maxUploadRetryTime=t}setMaxOperationRetryTime(t){this._delegate.maxOperationRetryTime=t}useEmulator(t,e,n={}){wn(this._delegate,t,e,n)}}function On(t){return/^[A-Za-z]+:\/\//.test(t)}const Cn="@firebase/storage-compat",Rn="0.1.9",Dn="storage-compat";function Nn(t,{instanceIdentifier:e}){const n=t.getProvider("app-compat").getImmediate(),i=t.getProvider("storage").getImmediate({identifier:e}),r=new An(n,i);return r}function Pn(t){const e={TaskState:Le,TaskEvent:Me,StringFormat:Ut,Storage:An,Reference:Sn};t.INTERNAL.registerComponent(new u["a"](Dn,Nn,"PUBLIC").setServiceProps(e).setMultipleInstances(!0)),t.registerVersion(Cn,Rn)}Pn(s["a"]);n("e9c4"),JSON.stringify(Object({NODE_ENV:"production",BASE_URL:"/"}).REST_API_URL),JSON.stringify(Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_API_KEY),JSON.stringify(Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_APP_ID),JSON.stringify(Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_AUTH_DOMAIN),JSON.stringify(Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DATABASE_URL),JSON.stringify(Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_MEASUREMENT_ID),JSON.stringify(Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_MESSAGING_SENSOR_ID),JSON.stringify(Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_PROJECT_ID),JSON.stringify(Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_STORAGE_BUCKET),JSON.stringify(Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_API_TEST);var Mn={apiKey:Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_API_KEY,authDomain:Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_AUTH_DOMAIN,databaseURL:Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DATABASE_URL,projectId:Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_PROJECT_ID,storageBucket:Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_STORAGE_BUCKET,messagingSenderId:Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_MESSAGING_SENSOR_ID,appId:Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_APP_ID,measurementId:Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_MEASUREMENT_ID,apiTest:Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_API_TEST};s["a"].initializeApp(Mn);var Ln=s["a"].firestore(),Fn=Ln,jn=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("canvas")},Un=[];const Vn=function(){return"undefined"===typeof window?function(t){return t()}:window.requestAnimationFrame}();function Bn(t,e,n){const i=n||(t=>Array.prototype.slice.call(t));let r=!1,s=[];return function(...n){s=i(n),r||(r=!0,Vn.call(window,()=>{r=!1,t.apply(e,s)}))}}function qn(t,e){let n;return function(){return e?(clearTimeout(n),n=setTimeout(t,e)):t(),e}}const zn=t=>"start"===t?"left":"end"===t?"right":"center",Wn=(t,e,n)=>"start"===t?e:"end"===t?n:(e+n)/2,Hn=(t,e,n)=>"right"===t?n:"center"===t?(e+n)/2:e;function $n(){}const Kn=function(){let t=0;return function(){return t++}}();function Gn(t){return null===t||"undefined"===typeof t}function Yn(t){if(Array.isArray&&Array.isArray(t))return!0;const e=Object.prototype.toString.call(t);return"[object"===e.substr(0,7)&&"Array]"===e.substr(-6)}function Qn(t){return null!==t&&"[object Object]"===Object.prototype.toString.call(t)}const Jn=t=>("number"===typeof t||t instanceof Number)&&isFinite(+t);function Xn(t,e){return Jn(t)?t:e}function Zn(t,e){return"undefined"===typeof t?e:t}const ti=(t,e)=>"string"===typeof t&&t.endsWith("%")?parseFloat(t)/100:t/e,ei=(t,e)=>"string"===typeof t&&t.endsWith("%")?parseFloat(t)/100*e:+t;function ni(t,e,n){if(t&&"function"===typeof t.call)return t.apply(n,e)}function ii(t,e,n,i){let r,s,o;if(Yn(t))if(s=t.length,i)for(r=s-1;r>=0;r--)e.call(n,t[r],r);else for(r=0;r<s;r++)e.call(n,t[r],r);else if(Qn(t))for(o=Object.keys(t),s=o.length,r=0;r<s;r++)e.call(n,t[o[r]],o[r])}function ri(t,e){let n,i,r,s;if(!t||!e||t.length!==e.length)return!1;for(n=0,i=t.length;n<i;++n)if(r=t[n],s=e[n],r.datasetIndex!==s.datasetIndex||r.index!==s.index)return!1;return!0}function si(t){if(Yn(t))return t.map(si);if(Qn(t)){const e=Object.create(null),n=Object.keys(t),i=n.length;let r=0;for(;r<i;++r)e[n[r]]=si(t[n[r]]);return e}return t}function oi(t){return-1===["__proto__","prototype","constructor"].indexOf(t)}function ai(t,e,n,i){if(!oi(t))return;const r=e[t],s=n[t];Qn(r)&&Qn(s)?ci(r,s,i):e[t]=si(s)}function ci(t,e,n){const i=Yn(e)?e:[e],r=i.length;if(!Qn(t))return t;n=n||{};const s=n.merger||ai;for(let o=0;o<r;++o){if(e=i[o],!Qn(e))continue;const r=Object.keys(e);for(let i=0,o=r.length;i<o;++i)s(r[i],t,e,n)}return t}function li(t,e){return ci(t,e,{merger:ui})}function ui(t,e,n){if(!oi(t))return;const i=e[t],r=n[t];Qn(i)&&Qn(r)?li(i,r):Object.prototype.hasOwnProperty.call(e,t)||(e[t]=si(r))}const hi="",di=".";function fi(t,e){const n=t.indexOf(di,e);return-1===n?t.length:n}function pi(t,e){if(e===hi)return t;let n=0,i=fi(e,n);while(t&&i>n)t=t[e.substr(n,i-n)],n=i+1,i=fi(e,n);return t}function gi(t){return t.charAt(0).toUpperCase()+t.slice(1)}const mi=t=>"undefined"!==typeof t,yi=t=>"function"===typeof t,bi=(t,e)=>{if(t.size!==e.size)return!1;for(const n of t)if(!e.has(n))return!1;return!0},vi=Math.PI,_i=2*vi,wi=_i+vi,xi=Number.POSITIVE_INFINITY,Ii=vi/180,Ti=vi/2,ki=vi/4,Ei=2*vi/3,Si=Math.log10,Ai=Math.sign;function Oi(t){const e=Math.pow(10,Math.floor(Si(t))),n=t/e,i=n<=1?1:n<=2?2:n<=5?5:10;return i*e}function Ci(t){const e=[],n=Math.sqrt(t);let i;for(i=1;i<n;i++)t%i===0&&(e.push(i),e.push(t/i));return n===(0|n)&&e.push(n),e.sort((t,e)=>t-e).pop(),e}function Ri(t){return!isNaN(parseFloat(t))&&isFinite(t)}function Di(t,e,n){return Math.abs(t-e)<n}function Ni(t,e){const n=Math.round(t);return n-e<=t&&n+e>=t}function Pi(t,e,n){let i,r,s;for(i=0,r=t.length;i<r;i++)s=t[i][n],isNaN(s)||(e.min=Math.min(e.min,s),e.max=Math.max(e.max,s))}function Mi(t){return t*(vi/180)}function Li(t){return t*(180/vi)}function Fi(t){if(!Jn(t))return;let e=1,n=0;while(Math.round(t*e)/e!==t)e*=10,n++;return n}function ji(t,e){const n=e.x-t.x,i=e.y-t.y,r=Math.sqrt(n*n+i*i);let s=Math.atan2(i,n);return s<-.5*vi&&(s+=_i),{angle:s,distance:r}}function Ui(t,e){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}function Vi(t,e){return(t-e+wi)%_i-vi}function Bi(t){return(t%_i+_i)%_i}function qi(t,e,n,i){const r=Bi(t),s=Bi(e),o=Bi(n),a=Bi(s-r),c=Bi(o-r),l=Bi(r-s),u=Bi(r-o);return r===s||r===o||i&&s===o||a>c&&l<u}function zi(t,e,n){return Math.max(e,Math.min(n,t))}function Wi(t){return zi(t,-32768,32767)}const Hi=t=>0===t||1===t,$i=(t,e,n)=>-Math.pow(2,10*(t-=1))*Math.sin((t-e)*_i/n),Ki=(t,e,n)=>Math.pow(2,-10*t)*Math.sin((t-e)*_i/n)+1,Gi={linear:t=>t,easeInQuad:t=>t*t,easeOutQuad:t=>-t*(t-2),easeInOutQuad:t=>(t/=.5)<1?.5*t*t:-.5*(--t*(t-2)-1),easeInCubic:t=>t*t*t,easeOutCubic:t=>(t-=1)*t*t+1,easeInOutCubic:t=>(t/=.5)<1?.5*t*t*t:.5*((t-=2)*t*t+2),easeInQuart:t=>t*t*t*t,easeOutQuart:t=>-((t-=1)*t*t*t-1),easeInOutQuart:t=>(t/=.5)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2),easeInQuint:t=>t*t*t*t*t,easeOutQuint:t=>(t-=1)*t*t*t*t+1,easeInOutQuint:t=>(t/=.5)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2),easeInSine:t=>1-Math.cos(t*Ti),easeOutSine:t=>Math.sin(t*Ti),easeInOutSine:t=>-.5*(Math.cos(vi*t)-1),easeInExpo:t=>0===t?0:Math.pow(2,10*(t-1)),easeOutExpo:t=>1===t?1:1-Math.pow(2,-10*t),easeInOutExpo:t=>Hi(t)?t:t<.5?.5*Math.pow(2,10*(2*t-1)):.5*(2-Math.pow(2,-10*(2*t-1))),easeInCirc:t=>t>=1?t:-(Math.sqrt(1-t*t)-1),easeOutCirc:t=>Math.sqrt(1-(t-=1)*t),easeInOutCirc:t=>(t/=.5)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1),easeInElastic:t=>Hi(t)?t:$i(t,.075,.3),easeOutElastic:t=>Hi(t)?t:Ki(t,.075,.3),easeInOutElastic(t){const e=.1125,n=.45;return Hi(t)?t:t<.5?.5*$i(2*t,e,n):.5+.5*Ki(2*t-1,e,n)},easeInBack(t){const e=1.70158;return t*t*((e+1)*t-e)},easeOutBack(t){const e=1.70158;return(t-=1)*t*((e+1)*t+e)+1},easeInOutBack(t){let e=1.70158;return(t/=.5)<1?t*t*((1+(e*=1.525))*t-e)*.5:.5*((t-=2)*t*((1+(e*=1.525))*t+e)+2)},easeInBounce:t=>1-Gi.easeOutBounce(1-t),easeOutBounce(t){const e=7.5625,n=2.75;return t<1/n?e*t*t:t<2/n?e*(t-=1.5/n)*t+.75:t<2.5/n?e*(t-=2.25/n)*t+.9375:e*(t-=2.625/n)*t+.984375},easeInOutBounce:t=>t<.5?.5*Gi.easeInBounce(2*t):.5*Gi.easeOutBounce(2*t-1)+.5},Yi={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,A:10,B:11,C:12,D:13,E:14,F:15,a:10,b:11,c:12,d:13,e:14,f:15},Qi="0123456789ABCDEF",Ji=t=>Qi[15&t],Xi=t=>Qi[(240&t)>>4]+Qi[15&t],Zi=t=>(240&t)>>4===(15&t);function tr(t){return Zi(t.r)&&Zi(t.g)&&Zi(t.b)&&Zi(t.a)}function er(t){var e,n=t.length;return"#"===t[0]&&(4===n||5===n?e={r:255&17*Yi[t[1]],g:255&17*Yi[t[2]],b:255&17*Yi[t[3]],a:5===n?17*Yi[t[4]]:255}:7!==n&&9!==n||(e={r:Yi[t[1]]<<4|Yi[t[2]],g:Yi[t[3]]<<4|Yi[t[4]],b:Yi[t[5]]<<4|Yi[t[6]],a:9===n?Yi[t[7]]<<4|Yi[t[8]]:255})),e}function nr(t){var e=tr(t)?Ji:Xi;return t?"#"+e(t.r)+e(t.g)+e(t.b)+(t.a<255?e(t.a):""):t}function ir(t){return t+.5|0}const rr=(t,e,n)=>Math.max(Math.min(t,n),e);function sr(t){return rr(ir(2.55*t),0,255)}function or(t){return rr(ir(255*t),0,255)}function ar(t){return rr(ir(t/2.55)/100,0,1)}function cr(t){return rr(ir(100*t),0,100)}const lr=/^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;function ur(t){const e=lr.exec(t);let n,i,r,s=255;if(e){if(e[7]!==n){const t=+e[7];s=255&(e[8]?sr(t):255*t)}return n=+e[1],i=+e[3],r=+e[5],n=255&(e[2]?sr(n):n),i=255&(e[4]?sr(i):i),r=255&(e[6]?sr(r):r),{r:n,g:i,b:r,a:s}}}function hr(t){return t&&(t.a<255?`rgba(${t.r}, ${t.g}, ${t.b}, ${ar(t.a)})`:`rgb(${t.r}, ${t.g}, ${t.b})`)}const dr=/^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;function fr(t,e,n){const i=e*Math.min(n,1-n),r=(e,r=(e+t/30)%12)=>n-i*Math.max(Math.min(r-3,9-r,1),-1);return[r(0),r(8),r(4)]}function pr(t,e,n){const i=(i,r=(i+t/60)%6)=>n-n*e*Math.max(Math.min(r,4-r,1),0);return[i(5),i(3),i(1)]}function gr(t,e,n){const i=fr(t,1,.5);let r;for(e+n>1&&(r=1/(e+n),e*=r,n*=r),r=0;r<3;r++)i[r]*=1-e-n,i[r]+=e;return i}function mr(t){const e=255,n=t.r/e,i=t.g/e,r=t.b/e,s=Math.max(n,i,r),o=Math.min(n,i,r),a=(s+o)/2;let c,l,u;return s!==o&&(u=s-o,l=a>.5?u/(2-s-o):u/(s+o),c=s===n?(i-r)/u+(i<r?6:0):s===i?(r-n)/u+2:(n-i)/u+4,c=60*c+.5),[0|c,l||0,a]}function yr(t,e,n,i){return(Array.isArray(e)?t(e[0],e[1],e[2]):t(e,n,i)).map(or)}function br(t,e,n){return yr(fr,t,e,n)}function vr(t,e,n){return yr(gr,t,e,n)}function _r(t,e,n){return yr(pr,t,e,n)}function wr(t){return(t%360+360)%360}function xr(t){const e=dr.exec(t);let n,i=255;if(!e)return;e[5]!==n&&(i=e[6]?sr(+e[5]):or(+e[5]));const r=wr(+e[2]),s=+e[3]/100,o=+e[4]/100;return n="hwb"===e[1]?vr(r,s,o):"hsv"===e[1]?_r(r,s,o):br(r,s,o),{r:n[0],g:n[1],b:n[2],a:i}}function Ir(t,e){var n=mr(t);n[0]=wr(n[0]+e),n=br(n),t.r=n[0],t.g=n[1],t.b=n[2]}function Tr(t){if(!t)return;const e=mr(t),n=e[0],i=cr(e[1]),r=cr(e[2]);return t.a<255?`hsla(${n}, ${i}%, ${r}%, ${ar(t.a)})`:`hsl(${n}, ${i}%, ${r}%)`}const kr={x:"dark",Z:"light",Y:"re",X:"blu",W:"gr",V:"medium",U:"slate",A:"ee",T:"ol",S:"or",B:"ra",C:"lateg",D:"ights",R:"in",Q:"turquois",E:"hi",P:"ro",O:"al",N:"le",M:"de",L:"yello",F:"en",K:"ch",G:"arks",H:"ea",I:"ightg",J:"wh"},Er={OiceXe:"f0f8ff",antiquewEte:"faebd7",aqua:"ffff",aquamarRe:"7fffd4",azuY:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"0",blanKedOmond:"ffebcd",Xe:"ff",XeviTet:"8a2be2",bPwn:"a52a2a",burlywood:"deb887",caMtXe:"5f9ea0",KartYuse:"7fff00",KocTate:"d2691e",cSO:"ff7f50",cSnflowerXe:"6495ed",cSnsilk:"fff8dc",crimson:"dc143c",cyan:"ffff",xXe:"8b",xcyan:"8b8b",xgTMnPd:"b8860b",xWay:"a9a9a9",xgYF:"6400",xgYy:"a9a9a9",xkhaki:"bdb76b",xmagFta:"8b008b",xTivegYF:"556b2f",xSange:"ff8c00",xScEd:"9932cc",xYd:"8b0000",xsOmon:"e9967a",xsHgYF:"8fbc8f",xUXe:"483d8b",xUWay:"2f4f4f",xUgYy:"2f4f4f",xQe:"ced1",xviTet:"9400d3",dAppRk:"ff1493",dApskyXe:"bfff",dimWay:"696969",dimgYy:"696969",dodgerXe:"1e90ff",fiYbrick:"b22222",flSOwEte:"fffaf0",foYstWAn:"228b22",fuKsia:"ff00ff",gaRsbSo:"dcdcdc",ghostwEte:"f8f8ff",gTd:"ffd700",gTMnPd:"daa520",Way:"808080",gYF:"8000",gYFLw:"adff2f",gYy:"808080",honeyMw:"f0fff0",hotpRk:"ff69b4",RdianYd:"cd5c5c",Rdigo:"4b0082",ivSy:"fffff0",khaki:"f0e68c",lavFMr:"e6e6fa",lavFMrXsh:"fff0f5",lawngYF:"7cfc00",NmoncEffon:"fffacd",ZXe:"add8e6",ZcSO:"f08080",Zcyan:"e0ffff",ZgTMnPdLw:"fafad2",ZWay:"d3d3d3",ZgYF:"90ee90",ZgYy:"d3d3d3",ZpRk:"ffb6c1",ZsOmon:"ffa07a",ZsHgYF:"20b2aa",ZskyXe:"87cefa",ZUWay:"778899",ZUgYy:"778899",ZstAlXe:"b0c4de",ZLw:"ffffe0",lime:"ff00",limegYF:"32cd32",lRF:"faf0e6",magFta:"ff00ff",maPon:"800000",VaquamarRe:"66cdaa",VXe:"cd",VScEd:"ba55d3",VpurpN:"9370db",VsHgYF:"3cb371",VUXe:"7b68ee",VsprRggYF:"fa9a",VQe:"48d1cc",VviTetYd:"c71585",midnightXe:"191970",mRtcYam:"f5fffa",mistyPse:"ffe4e1",moccasR:"ffe4b5",navajowEte:"ffdead",navy:"80",Tdlace:"fdf5e6",Tive:"808000",TivedBb:"6b8e23",Sange:"ffa500",SangeYd:"ff4500",ScEd:"da70d6",pOegTMnPd:"eee8aa",pOegYF:"98fb98",pOeQe:"afeeee",pOeviTetYd:"db7093",papayawEp:"ffefd5",pHKpuff:"ffdab9",peru:"cd853f",pRk:"ffc0cb",plum:"dda0dd",powMrXe:"b0e0e6",purpN:"800080",YbeccapurpN:"663399",Yd:"ff0000",Psybrown:"bc8f8f",PyOXe:"4169e1",saddNbPwn:"8b4513",sOmon:"fa8072",sandybPwn:"f4a460",sHgYF:"2e8b57",sHshell:"fff5ee",siFna:"a0522d",silver:"c0c0c0",skyXe:"87ceeb",UXe:"6a5acd",UWay:"708090",UgYy:"708090",snow:"fffafa",sprRggYF:"ff7f",stAlXe:"4682b4",tan:"d2b48c",teO:"8080",tEstN:"d8bfd8",tomato:"ff6347",Qe:"40e0d0",viTet:"ee82ee",JHt:"f5deb3",wEte:"ffffff",wEtesmoke:"f5f5f5",Lw:"ffff00",LwgYF:"9acd32"};function Sr(){const t={},e=Object.keys(Er),n=Object.keys(kr);let i,r,s,o,a;for(i=0;i<e.length;i++){for(o=a=e[i],r=0;r<n.length;r++)s=n[r],a=a.replace(s,kr[s]);s=parseInt(Er[o],16),t[a]=[s>>16&255,s>>8&255,255&s]}return t}let Ar;function Or(t){Ar||(Ar=Sr(),Ar.transparent=[0,0,0,0]);const e=Ar[t.toLowerCase()];return e&&{r:e[0],g:e[1],b:e[2],a:4===e.length?e[3]:255}}function Cr(t,e,n){if(t){let i=mr(t);i[e]=Math.max(0,Math.min(i[e]+i[e]*n,0===e?360:1)),i=br(i),t.r=i[0],t.g=i[1],t.b=i[2]}}function Rr(t,e){return t?Object.assign(e||{},t):t}function Dr(t){var e={r:0,g:0,b:0,a:255};return Array.isArray(t)?t.length>=3&&(e={r:t[0],g:t[1],b:t[2],a:255},t.length>3&&(e.a=or(t[3]))):(e=Rr(t,{r:0,g:0,b:0,a:1}),e.a=or(e.a)),e}function Nr(t){return"r"===t.charAt(0)?ur(t):xr(t)}class Pr{constructor(t){if(t instanceof Pr)return t;const e=typeof t;let n;"object"===e?n=Dr(t):"string"===e&&(n=er(t)||Or(t)||Nr(t)),this._rgb=n,this._valid=!!n}get valid(){return this._valid}get rgb(){var t=Rr(this._rgb);return t&&(t.a=ar(t.a)),t}set rgb(t){this._rgb=Dr(t)}rgbString(){return this._valid?hr(this._rgb):this._rgb}hexString(){return this._valid?nr(this._rgb):this._rgb}hslString(){return this._valid?Tr(this._rgb):this._rgb}mix(t,e){const n=this;if(t){const i=n.rgb,r=t.rgb;let s;const o=e===s?.5:e,a=2*o-1,c=i.a-r.a,l=((a*c===-1?a:(a+c)/(1+a*c))+1)/2;s=1-l,i.r=255&l*i.r+s*r.r+.5,i.g=255&l*i.g+s*r.g+.5,i.b=255&l*i.b+s*r.b+.5,i.a=o*i.a+(1-o)*r.a,n.rgb=i}return n}clone(){return new Pr(this.rgb)}alpha(t){return this._rgb.a=or(t),this}clearer(t){const e=this._rgb;return e.a*=1-t,this}greyscale(){const t=this._rgb,e=ir(.3*t.r+.59*t.g+.11*t.b);return t.r=t.g=t.b=e,this}opaquer(t){const e=this._rgb;return e.a*=1+t,this}negate(){const t=this._rgb;return t.r=255-t.r,t.g=255-t.g,t.b=255-t.b,this}lighten(t){return Cr(this._rgb,2,t),this}darken(t){return Cr(this._rgb,2,-t),this}saturate(t){return Cr(this._rgb,1,t),this}desaturate(t){return Cr(this._rgb,1,-t),this}rotate(t){return Ir(this._rgb,t),this}}function Mr(t){return new Pr(t)}const Lr=t=>t instanceof CanvasGradient||t instanceof CanvasPattern;function Fr(t){return Lr(t)?t:Mr(t)}function jr(t){return Lr(t)?t:Mr(t).saturate(.5).darken(.1).hexString()}const Ur=Object.create(null),Vr=Object.create(null);function Br(t,e){if(!e)return t;const n=e.split(".");for(let i=0,r=n.length;i<r;++i){const e=n[i];t=t[e]||(t[e]=Object.create(null))}return t}function qr(t,e,n){return"string"===typeof e?ci(Br(t,e),n):ci(Br(t,""),e)}class zr{constructor(t){this.animation=void 0,this.backgroundColor="rgba(0,0,0,0.1)",this.borderColor="rgba(0,0,0,0.1)",this.color="#666",this.datasets={},this.devicePixelRatio=t=>t.chart.platform.getDevicePixelRatio(),this.elements={},this.events=["mousemove","mouseout","click","touchstart","touchmove"],this.font={family:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",size:12,style:"normal",lineHeight:1.2,weight:null},this.hover={},this.hoverBackgroundColor=(t,e)=>jr(e.backgroundColor),this.hoverBorderColor=(t,e)=>jr(e.borderColor),this.hoverColor=(t,e)=>jr(e.color),this.indexAxis="x",this.interaction={mode:"nearest",intersect:!0},this.maintainAspectRatio=!0,this.onHover=null,this.onClick=null,this.parsing=!0,this.plugins={},this.responsive=!0,this.scale=void 0,this.scales={},this.showLine=!0,this.describe(t)}set(t,e){return qr(this,t,e)}get(t){return Br(this,t)}describe(t,e){return qr(Vr,t,e)}override(t,e){return qr(Ur,t,e)}route(t,e,n,i){const r=Br(this,t),s=Br(this,n),o="_"+e;Object.defineProperties(r,{[o]:{value:r[e],writable:!0},[e]:{enumerable:!0,get(){const t=this[o],e=s[i];return Qn(t)?Object.assign({},e,t):Zn(t,e)},set(t){this[o]=t}}})}}var Wr=new zr({_scriptable:t=>!t.startsWith("on"),_indexable:t=>"events"!==t,hover:{_fallback:"interaction"},interaction:{_scriptable:!1,_indexable:!1}});function Hr(t){return!t||Gn(t.size)||Gn(t.family)?null:(t.style?t.style+" ":"")+(t.weight?t.weight+" ":"")+t.size+"px "+t.family}function $r(t,e,n,i,r){let s=e[r];return s||(s=e[r]=t.measureText(r).width,n.push(r)),s>i&&(i=s),i}function Kr(t,e,n,i){i=i||{};let r=i.data=i.data||{},s=i.garbageCollect=i.garbageCollect||[];i.font!==e&&(r=i.data={},s=i.garbageCollect=[],i.font=e),t.save(),t.font=e;let o=0;const a=n.length;let c,l,u,h,d;for(c=0;c<a;c++)if(h=n[c],void 0!==h&&null!==h&&!0!==Yn(h))o=$r(t,r,s,o,h);else if(Yn(h))for(l=0,u=h.length;l<u;l++)d=h[l],void 0===d||null===d||Yn(d)||(o=$r(t,r,s,o,d));t.restore();const f=s.length/2;if(f>n.length){for(c=0;c<f;c++)delete r[s[c]];s.splice(0,f)}return o}function Gr(t,e,n){const i=t.currentDevicePixelRatio,r=0!==n?Math.max(n/2,.5):0;return Math.round((e-r)*i)/i+r}function Yr(t,e){e=e||t.getContext("2d"),e.save(),e.resetTransform(),e.clearRect(0,0,t.width,t.height),e.restore()}function Qr(t,e,n,i){let r,s,o,a,c;const l=e.pointStyle,u=e.rotation,h=e.radius;let d=(u||0)*Ii;if(l&&"object"===typeof l&&(r=l.toString(),"[object HTMLImageElement]"===r||"[object HTMLCanvasElement]"===r))return t.save(),t.translate(n,i),t.rotate(d),t.drawImage(l,-l.width/2,-l.height/2,l.width,l.height),void t.restore();if(!(isNaN(h)||h<=0)){switch(t.beginPath(),l){default:t.arc(n,i,h,0,_i),t.closePath();break;case"triangle":t.moveTo(n+Math.sin(d)*h,i-Math.cos(d)*h),d+=Ei,t.lineTo(n+Math.sin(d)*h,i-Math.cos(d)*h),d+=Ei,t.lineTo(n+Math.sin(d)*h,i-Math.cos(d)*h),t.closePath();break;case"rectRounded":c=.516*h,a=h-c,s=Math.cos(d+ki)*a,o=Math.sin(d+ki)*a,t.arc(n-s,i-o,c,d-vi,d-Ti),t.arc(n+o,i-s,c,d-Ti,d),t.arc(n+s,i+o,c,d,d+Ti),t.arc(n-o,i+s,c,d+Ti,d+vi),t.closePath();break;case"rect":if(!u){a=Math.SQRT1_2*h,t.rect(n-a,i-a,2*a,2*a);break}d+=ki;case"rectRot":s=Math.cos(d)*h,o=Math.sin(d)*h,t.moveTo(n-s,i-o),t.lineTo(n+o,i-s),t.lineTo(n+s,i+o),t.lineTo(n-o,i+s),t.closePath();break;case"crossRot":d+=ki;case"cross":s=Math.cos(d)*h,o=Math.sin(d)*h,t.moveTo(n-s,i-o),t.lineTo(n+s,i+o),t.moveTo(n+o,i-s),t.lineTo(n-o,i+s);break;case"star":s=Math.cos(d)*h,o=Math.sin(d)*h,t.moveTo(n-s,i-o),t.lineTo(n+s,i+o),t.moveTo(n+o,i-s),t.lineTo(n-o,i+s),d+=ki,s=Math.cos(d)*h,o=Math.sin(d)*h,t.moveTo(n-s,i-o),t.lineTo(n+s,i+o),t.moveTo(n+o,i-s),t.lineTo(n-o,i+s);break;case"line":s=Math.cos(d)*h,o=Math.sin(d)*h,t.moveTo(n-s,i-o),t.lineTo(n+s,i+o);break;case"dash":t.moveTo(n,i),t.lineTo(n+Math.cos(d)*h,i+Math.sin(d)*h);break}t.fill(),e.borderWidth>0&&t.stroke()}}function Jr(t,e,n){return n=n||.5,t&&t.x>e.left-n&&t.x<e.right+n&&t.y>e.top-n&&t.y<e.bottom+n}function Xr(t,e){t.save(),t.beginPath(),t.rect(e.left,e.top,e.right-e.left,e.bottom-e.top),t.clip()}function Zr(t){t.restore()}function ts(t,e,n,i,r){if(!e)return t.lineTo(n.x,n.y);if("middle"===r){const i=(e.x+n.x)/2;t.lineTo(i,e.y),t.lineTo(i,n.y)}else"after"===r!==!!i?t.lineTo(e.x,n.y):t.lineTo(n.x,e.y);t.lineTo(n.x,n.y)}function es(t,e,n,i){if(!e)return t.lineTo(n.x,n.y);t.bezierCurveTo(i?e.cp1x:e.cp2x,i?e.cp1y:e.cp2y,i?n.cp2x:n.cp1x,i?n.cp2y:n.cp1y,n.x,n.y)}function ns(t,e,n,i,r,s={}){const o=Yn(e)?e:[e],a=s.strokeWidth>0&&""!==s.strokeColor;let c,l;for(t.save(),s.translation&&t.translate(s.translation[0],s.translation[1]),Gn(s.rotation)||t.rotate(s.rotation),t.font=r.string,s.color&&(t.fillStyle=s.color),s.textAlign&&(t.textAlign=s.textAlign),s.textBaseline&&(t.textBaseline=s.textBaseline),c=0;c<o.length;++c){if(l=o[c],a&&(s.strokeColor&&(t.strokeStyle=s.strokeColor),Gn(s.strokeWidth)||(t.lineWidth=s.strokeWidth),t.strokeText(l,n,i,s.maxWidth)),t.fillText(l,n,i,s.maxWidth),s.strikethrough||s.underline){const e=t.measureText(l),r=n-e.actualBoundingBoxLeft,o=n+e.actualBoundingBoxRight,a=i-e.actualBoundingBoxAscent,c=i+e.actualBoundingBoxDescent,u=s.strikethrough?(a+c)/2:c;t.strokeStyle=t.fillStyle,t.beginPath(),t.lineWidth=s.decorationWidth||2,t.moveTo(r,u),t.lineTo(o,u),t.stroke()}i+=r.lineHeight}t.restore()}function is(t,e){const{x:n,y:i,w:r,h:s,radius:o}=e;t.arc(n+o.topLeft,i+o.topLeft,o.topLeft,-Ti,vi,!0),t.lineTo(n,i+s-o.bottomLeft),t.arc(n+o.bottomLeft,i+s-o.bottomLeft,o.bottomLeft,vi,Ti,!0),t.lineTo(n+r-o.bottomRight,i+s),t.arc(n+r-o.bottomRight,i+s-o.bottomRight,o.bottomRight,Ti,0,!0),t.lineTo(n+r,i+o.topRight),t.arc(n+r-o.topRight,i+o.topRight,o.topRight,0,-Ti,!0),t.lineTo(n+o.topLeft,i)}const rs=new RegExp(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/),ss=new RegExp(/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/);function os(t,e){const n=(""+t).match(rs);if(!n||"normal"===n[1])return 1.2*e;switch(t=+n[2],n[3]){case"px":return t;case"%":t/=100;break}return e*t}const as=t=>+t||0;function cs(t,e){const n={},i=Qn(e),r=i?Object.keys(e):e,s=Qn(t)?i?n=>Zn(t[n],t[e[n]]):e=>t[e]:()=>t;for(const o of r)n[o]=as(s(o));return n}function ls(t){return cs(t,{top:"y",right:"x",bottom:"y",left:"x"})}function us(t){return cs(t,["topLeft","topRight","bottomLeft","bottomRight"])}function hs(t){const e=ls(t);return e.width=e.left+e.right,e.height=e.top+e.bottom,e}function ds(t,e){t=t||{},e=e||Wr.font;let n=Zn(t.size,e.size);"string"===typeof n&&(n=parseInt(n,10));let i=Zn(t.style,e.style);i&&!(""+i).match(ss)&&(console.warn('Invalid font style specified: "'+i+'"'),i="");const r={family:Zn(t.family,e.family),lineHeight:os(Zn(t.lineHeight,e.lineHeight),n),size:n,style:i,weight:Zn(t.weight,e.weight),string:""};return r.string=Hr(r),r}function fs(t,e,n,i){let r,s,o,a=!0;for(r=0,s=t.length;r<s;++r)if(o=t[r],void 0!==o&&(void 0!==e&&"function"===typeof o&&(o=o(e),a=!1),void 0!==n&&Yn(o)&&(o=o[n%o.length],a=!1),void 0!==o))return i&&!a&&(i.cacheable=!1),o}function ps(t,e){const{min:n,max:i}=t;return{min:n-Math.abs(ei(e,n)),max:i+ei(e,i)}}function gs(t,e,n){n=n||(n=>t[n]<e);let i,r=t.length-1,s=0;while(r-s>1)i=s+r>>1,n(i)?s=i:r=i;return{lo:s,hi:r}}const ms=(t,e,n)=>gs(t,n,i=>t[i][e]<n),ys=(t,e,n)=>gs(t,n,i=>t[i][e]>=n);function bs(t,e,n){let i=0,r=t.length;while(i<r&&t[i]<e)i++;while(r>i&&t[r-1]>n)r--;return i>0||r<t.length?t.slice(i,r):t}const vs=["push","pop","shift","splice","unshift"];function _s(t,e){t._chartjs?t._chartjs.listeners.push(e):(Object.defineProperty(t,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[e]}}),vs.forEach(e=>{const n="_onData"+gi(e),i=t[e];Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value(...e){const r=i.apply(this,e);return t._chartjs.listeners.forEach(t=>{"function"===typeof t[n]&&t[n](...e)}),r}})}))}function ws(t,e){const n=t._chartjs;if(!n)return;const i=n.listeners,r=i.indexOf(e);-1!==r&&i.splice(r,1),i.length>0||(vs.forEach(e=>{delete t[e]}),delete t._chartjs)}function xs(t){const e=new Set;let n,i;for(n=0,i=t.length;n<i;++n)e.add(t[n]);if(e.size===i)return t;const r=[];return e.forEach(t=>{r.push(t)}),r}function Is(t,e=[""],n=t,i,r=(()=>t[0])){mi(i)||(i=Us("_fallback",t));const s={[Symbol.toStringTag]:"Object",_cacheable:!0,_scopes:t,_rootScopes:n,_fallback:i,_getTarget:r,override:r=>Is([r,...t],e,n,i)};return new Proxy(s,{deleteProperty(e,n){return delete e[n],delete e._keys,delete t[0][n],!0},get(n,i){return As(n,i,()=>js(i,e,t,n))},getOwnPropertyDescriptor(t,e){return Reflect.getOwnPropertyDescriptor(t._scopes[0],e)},getPrototypeOf(){return Reflect.getPrototypeOf(t[0])},has(t,e){return Vs(t).includes(e)},ownKeys(t){return Vs(t)},set(t,e,n){const i=t._storage||(t._storage=r());return i[e]=n,delete t[e],delete t._keys,!0}})}function Ts(t,e,n,i){const r={_cacheable:!1,_proxy:t,_context:e,_subProxy:n,_stack:new Set,_descriptors:ks(t,i),setContext:e=>Ts(t,e,n,i),override:r=>Ts(t.override(r),e,n,i)};return new Proxy(r,{deleteProperty(e,n){return delete e[n],delete t[n],!0},get(t,e,n){return As(t,e,()=>Os(t,e,n))},getOwnPropertyDescriptor(e,n){return e._descriptors.allKeys?Reflect.has(t,n)?{enumerable:!0,configurable:!0}:void 0:Reflect.getOwnPropertyDescriptor(t,n)},getPrototypeOf(){return Reflect.getPrototypeOf(t)},has(e,n){return Reflect.has(t,n)},ownKeys(){return Reflect.ownKeys(t)},set(e,n,i){return t[n]=i,delete e[n],!0}})}function ks(t,e={scriptable:!0,indexable:!0}){const{_scriptable:n=e.scriptable,_indexable:i=e.indexable,_allKeys:r=e.allKeys}=t;return{allKeys:r,scriptable:n,indexable:i,isScriptable:yi(n)?n:()=>n,isIndexable:yi(i)?i:()=>i}}const Es=(t,e)=>t?t+gi(e):e,Ss=(t,e)=>Qn(e)&&"adapters"!==t;function As(t,e,n){let i=t[e];return mi(i)||(i=n(),mi(i)&&(t[e]=i)),i}function Os(t,e,n){const{_proxy:i,_context:r,_subProxy:s,_descriptors:o}=t;let a=i[e];return yi(a)&&o.isScriptable(e)&&(a=Cs(e,a,t,n)),Yn(a)&&a.length&&(a=Rs(e,a,t,o.isIndexable)),Ss(e,a)&&(a=Ts(a,r,s&&s[e],o)),a}function Cs(t,e,n,i){const{_proxy:r,_context:s,_subProxy:o,_stack:a}=n;if(a.has(t))throw new Error("Recursion detected: "+[...a].join("->")+"->"+t);return a.add(t),e=e(s,o||i),a.delete(t),Qn(e)&&(e=Ms(r._scopes,r,t,e)),e}function Rs(t,e,n,i){const{_proxy:r,_context:s,_subProxy:o,_descriptors:a}=n;if(mi(s.index)&&i(t))e=e[s.index%e.length];else if(Qn(e[0])){const n=e,i=r._scopes.filter(t=>t!==n);e=[];for(const c of n){const n=Ms(i,r,t,c);e.push(Ts(n,s,o&&o[t],a))}}return e}function Ds(t,e,n){return yi(t)?t(e,n):t}const Ns=(t,e)=>!0===t?e:"string"===typeof t?pi(e,t):void 0;function Ps(t,e,n,i){for(const r of e){const e=Ns(n,r);if(e){t.add(e);const r=Ds(e._fallback,n,e);if(mi(r)&&r!==n&&r!==i)return r}else if(!1===e&&mi(i)&&n!==i)return null}return!1}function Ms(t,e,n,i){const r=e._rootScopes,s=Ds(e._fallback,n,i),o=[...t,...r],a=new Set;a.add(i);let c=Ls(a,o,n,s||n);return null!==c&&((!mi(s)||s===n||(c=Ls(a,o,s,c),null!==c))&&Is([...a],[""],r,s,()=>Fs(e,n,i)))}function Ls(t,e,n,i){while(n)n=Ps(t,e,n,i);return n}function Fs(t,e,n){const i=t._getTarget();e in i||(i[e]={});const r=i[e];return Yn(r)&&Qn(n)?n:r}function js(t,e,n,i){let r;for(const s of e)if(r=Us(Es(s,t),n),mi(r))return Ss(t,r)?Ms(n,i,t,r):r}function Us(t,e){for(const n of e){if(!n)continue;const e=n[t];if(mi(e))return e}}function Vs(t){let e=t._keys;return e||(e=t._keys=Bs(t._scopes)),e}function Bs(t){const e=new Set;for(const n of t)for(const t of Object.keys(n).filter(t=>!t.startsWith("_")))e.add(t);return[...e]}const qs=Number.EPSILON||1e-14,zs=(t,e)=>e<t.length&&!t[e].skip&&t[e],Ws=t=>"x"===t?"y":"x";function Hs(t,e,n,i){const r=t.skip?e:t,s=e,o=n.skip?e:n,a=Ui(s,r),c=Ui(o,s);let l=a/(a+c),u=c/(a+c);l=isNaN(l)?0:l,u=isNaN(u)?0:u;const h=i*l,d=i*u;return{previous:{x:s.x-h*(o.x-r.x),y:s.y-h*(o.y-r.y)},next:{x:s.x+d*(o.x-r.x),y:s.y+d*(o.y-r.y)}}}function $s(t,e,n){const i=t.length;let r,s,o,a,c,l=zs(t,0);for(let u=0;u<i-1;++u)c=l,l=zs(t,u+1),c&&l&&(Di(e[u],0,qs)?n[u]=n[u+1]=0:(r=n[u]/e[u],s=n[u+1]/e[u],a=Math.pow(r,2)+Math.pow(s,2),a<=9||(o=3/Math.sqrt(a),n[u]=r*o*e[u],n[u+1]=s*o*e[u])))}function Ks(t,e,n="x"){const i=Ws(n),r=t.length;let s,o,a,c=zs(t,0);for(let l=0;l<r;++l){if(o=a,a=c,c=zs(t,l+1),!a)continue;const r=a[n],u=a[i];o&&(s=(r-o[n])/3,a["cp1"+n]=r-s,a["cp1"+i]=u-s*e[l]),c&&(s=(c[n]-r)/3,a["cp2"+n]=r+s,a["cp2"+i]=u+s*e[l])}}function Gs(t,e="x"){const n=Ws(e),i=t.length,r=Array(i).fill(0),s=Array(i);let o,a,c,l=zs(t,0);for(o=0;o<i;++o)if(a=c,c=l,l=zs(t,o+1),c){if(l){const t=l[e]-c[e];r[o]=0!==t?(l[n]-c[n])/t:0}s[o]=a?l?Ai(r[o-1])!==Ai(r[o])?0:(r[o-1]+r[o])/2:r[o-1]:r[o]}$s(t,r,s),Ks(t,s,e)}function Ys(t,e,n){return Math.max(Math.min(t,n),e)}function Qs(t,e){let n,i,r,s,o,a=Jr(t[0],e);for(n=0,i=t.length;n<i;++n)o=s,s=a,a=n<i-1&&Jr(t[n+1],e),s&&(r=t[n],o&&(r.cp1x=Ys(r.cp1x,e.left,e.right),r.cp1y=Ys(r.cp1y,e.top,e.bottom)),a&&(r.cp2x=Ys(r.cp2x,e.left,e.right),r.cp2y=Ys(r.cp2y,e.top,e.bottom)))}function Js(t,e,n,i,r){let s,o,a,c;if(e.spanGaps&&(t=t.filter(t=>!t.skip)),"monotone"===e.cubicInterpolationMode)Gs(t,r);else{let n=i?t[t.length-1]:t[0];for(s=0,o=t.length;s<o;++s)a=t[s],c=Hs(n,a,t[Math.min(s+1,o-(i?0:1))%o],e.tension),a.cp1x=c.previous.x,a.cp1y=c.previous.y,a.cp2x=c.next.x,a.cp2y=c.next.y,n=a}e.capBezierPoints&&Qs(t,n)}function Xs(t){let e=t.parentNode;return e&&"[object ShadowRoot]"===e.toString()&&(e=e.host),e}function Zs(t,e,n){let i;return"string"===typeof t?(i=parseInt(t,10),-1!==t.indexOf("%")&&(i=i/100*e.parentNode[n])):i=t,i}const to=t=>window.getComputedStyle(t,null);function eo(t,e){return to(t).getPropertyValue(e)}const no=["top","right","bottom","left"];function io(t,e,n){const i={};n=n?"-"+n:"";for(let r=0;r<4;r++){const s=no[r];i[s]=parseFloat(t[e+"-"+s+n])||0}return i.width=i.left+i.right,i.height=i.top+i.bottom,i}const ro=(t,e,n)=>(t>0||e>0)&&(!n||!n.shadowRoot);function so(t,e){const n=t.native||t,i=n.touches,r=i&&i.length?i[0]:n,{offsetX:s,offsetY:o}=r;let a,c,l=!1;if(ro(s,o,n.target))a=s,c=o;else{const t=e.getBoundingClientRect();a=r.clientX-t.left,c=r.clientY-t.top,l=!0}return{x:a,y:c,box:l}}function oo(t,e){const{canvas:n,currentDevicePixelRatio:i}=e,r=to(n),s="border-box"===r.boxSizing,o=io(r,"padding"),a=io(r,"border","width"),{x:c,y:l,box:u}=so(t,n),h=o.left+(u&&a.left),d=o.top+(u&&a.top);let{width:f,height:p}=e;return s&&(f-=o.width+a.width,p-=o.height+a.height),{x:Math.round((c-h)/f*n.width/i),y:Math.round((l-d)/p*n.height/i)}}function ao(t,e,n){let i,r;if(void 0===e||void 0===n){const s=Xs(t);if(s){const t=s.getBoundingClientRect(),o=to(s),a=io(o,"border","width"),c=io(o,"padding");e=t.width-c.width-a.width,n=t.height-c.height-a.height,i=Zs(o.maxWidth,s,"clientWidth"),r=Zs(o.maxHeight,s,"clientHeight")}else e=t.clientWidth,n=t.clientHeight}return{width:e,height:n,maxWidth:i||xi,maxHeight:r||xi}}const co=t=>Math.round(10*t)/10;function lo(t,e,n,i){const r=to(t),s=io(r,"margin"),o=Zs(r.maxWidth,t,"clientWidth")||xi,a=Zs(r.maxHeight,t,"clientHeight")||xi,c=ao(t,e,n);let{width:l,height:u}=c;if("content-box"===r.boxSizing){const t=io(r,"border","width"),e=io(r,"padding");l-=e.width+t.width,u-=e.height+t.height}return l=Math.max(0,l-s.width),u=Math.max(0,i?Math.floor(l/i):u-s.height),l=co(Math.min(l,o,c.maxWidth)),u=co(Math.min(u,a,c.maxHeight)),l&&!u&&(u=co(l/2)),{width:l,height:u}}function uo(t,e,n){const i=e||1,r=Math.floor(t.height*i),s=Math.floor(t.width*i);t.height=r/i,t.width=s/i;const o=t.canvas;return o.style&&(n||!o.style.height&&!o.style.width)&&(o.style.height=t.height+"px",o.style.width=t.width+"px"),(t.currentDevicePixelRatio!==i||o.height!==r||o.width!==s)&&(t.currentDevicePixelRatio=i,o.height=r,o.width=s,t.ctx.setTransform(i,0,0,i,0,0),!0)}const ho=function(){let t=!1;try{const e={get passive(){return t=!0,!1}};window.addEventListener("test",null,e),window.removeEventListener("test",null,e)}catch(e){}return t}();function fo(t,e){const n=eo(t,e),i=n&&n.match(/^(\d+)(\.\d+)?px$/);return i?+i[1]:void 0}function po(t,e,n,i){return{x:t.x+n*(e.x-t.x),y:t.y+n*(e.y-t.y)}}function go(t,e,n,i){return{x:t.x+n*(e.x-t.x),y:"middle"===i?n<.5?t.y:e.y:"after"===i?n<1?t.y:e.y:n>0?e.y:t.y}}function mo(t,e,n,i){const r={x:t.cp2x,y:t.cp2y},s={x:e.cp1x,y:e.cp1y},o=po(t,r,n),a=po(r,s,n),c=po(s,e,n),l=po(o,a,n),u=po(a,c,n);return po(l,u,n)}const yo=new Map;function bo(t,e){e=e||{};const n=t+JSON.stringify(e);let i=yo.get(n);return i||(i=new Intl.NumberFormat(t,e),yo.set(n,i)),i}function vo(t,e,n){return bo(e,n).format(t)}const _o=function(t,e){return{x(n){return t+t+e-n},setWidth(t){e=t},textAlign(t){return"center"===t?t:"right"===t?"left":"right"},xPlus(t,e){return t-e},leftForLtr(t,e){return t-e}}},wo=function(){return{x(t){return t},setWidth(t){},textAlign(t){return t},xPlus(t,e){return t+e},leftForLtr(t,e){return t}}};function xo(t,e,n){return t?_o(e,n):wo()}function Io(t,e){let n,i;"ltr"!==e&&"rtl"!==e||(n=t.canvas.style,i=[n.getPropertyValue("direction"),n.getPropertyPriority("direction")],n.setProperty("direction",e,"important"),t.prevTextDirection=i)}function To(t,e){void 0!==e&&(delete t.prevTextDirection,t.canvas.style.setProperty("direction",e[0],e[1]))}function ko(t){return"angle"===t?{between:qi,compare:Vi,normalize:Bi}:{between:(t,e,n)=>t>=Math.min(e,n)&&t<=Math.max(n,e),compare:(t,e)=>t-e,normalize:t=>t}}function Eo({start:t,end:e,count:n,loop:i,style:r}){return{start:t%n,end:e%n,loop:i&&(e-t+1)%n===0,style:r}}function So(t,e,n){const{property:i,start:r,end:s}=n,{between:o,normalize:a}=ko(i),c=e.length;let l,u,{start:h,end:d,loop:f}=t;if(f){for(h+=c,d+=c,l=0,u=c;l<u;++l){if(!o(a(e[h%c][i]),r,s))break;h--,d--}h%=c,d%=c}return d<h&&(d+=c),{start:h,end:d,loop:f,style:t.style}}function Ao(t,e,n){if(!n)return[t];const{property:i,start:r,end:s}=n,o=e.length,{compare:a,between:c,normalize:l}=ko(i),{start:u,end:h,loop:d,style:f}=So(t,e,n),p=[];let g,m,y,b=!1,v=null;const _=()=>c(r,y,g)&&0!==a(r,y),w=()=>0===a(s,g)||c(s,y,g),x=()=>b||_(),I=()=>!b||w();for(let T=u,k=u;T<=h;++T)m=e[T%o],m.skip||(g=l(m[i]),g!==y&&(b=c(g,r,s),null===v&&x()&&(v=0===a(g,r)?T:k),null!==v&&I()&&(p.push(Eo({start:v,end:T,loop:d,count:o,style:f})),v=null),k=T,y=g));return null!==v&&p.push(Eo({start:v,end:h,loop:d,count:o,style:f})),p}function Oo(t,e){const n=[],i=t.segments;for(let r=0;r<i.length;r++){const s=Ao(i[r],t.points,e);s.length&&n.push(...s)}return n}function Co(t,e,n,i){let r=0,s=e-1;if(n&&!i)while(r<e&&!t[r].skip)r++;while(r<e&&t[r].skip)r++;r%=e,n&&(s+=r);while(s>r&&t[s%e].skip)s--;return s%=e,{start:r,end:s}}function Ro(t,e,n,i){const r=t.length,s=[];let o,a=e,c=t[e];for(o=e+1;o<=n;++o){const n=t[o%r];n.skip||n.stop?c.skip||(i=!1,s.push({start:e%r,end:(o-1)%r,loop:i}),e=a=n.stop?o:null):(a=o,c.skip&&(e=o)),c=n}return null!==a&&s.push({start:e%r,end:a%r,loop:i}),s}function Do(t,e){const n=t.points,i=t.options.spanGaps,r=n.length;if(!r)return[];const s=!!t._loop,{start:o,end:a}=Co(n,r,s,i);if(!0===i)return No([{start:o,end:a,loop:s}],n,e);const c=a<o?a+r:a,l=!!t._fullLoop&&0===o&&a===r-1;return No(Ro(n,o,c,l),n,e)}function No(t,e,n){return n&&n.setContext&&e?Po(t,e,n):t}function Po(t,e,n){const i=e.length,r=[];let s=t[0].start,o=s;for(const a of t){let t,c,l=e[s%i];for(o=s+1;o<=a.end;o++){const u=e[o%i];c=Mo(n.setContext({type:"segment",p0:l,p1:u})),Lo(c,t)&&(r.push({start:s,end:o-1,loop:a.loop,style:t}),t=c,s=o-1),l=u,t=c}s<o-1&&(r.push({start:s,end:o-1,loop:a.loop,style:c}),s=o-1)}return r}function Mo(t){return{backgroundColor:t.backgroundColor,borderCapStyle:t.borderCapStyle,borderDash:t.borderDash,borderDashOffset:t.borderDashOffset,borderJoinStyle:t.borderJoinStyle,borderWidth:t.borderWidth,borderColor:t.borderColor}}function Lo(t,e){return e&&JSON.stringify(t)!==JSON.stringify(e)}
/*!
 * Chart.js v3.3.2
 * https://www.chartjs.org
 * (c) 2021 Chart.js Contributors
 * Released under the MIT License
 */class Fo{constructor(){this._request=null,this._charts=new Map,this._running=!1,this._lastDate=void 0}_notify(t,e,n,i){const r=e.listeners[i],s=e.duration;r.forEach(i=>i({chart:t,initial:e.initial,numSteps:s,currentStep:Math.min(n-e.start,s)}))}_refresh(){const t=this;t._request||(t._running=!0,t._request=Vn.call(window,()=>{t._update(),t._request=null,t._running&&t._refresh()}))}_update(t=Date.now()){const e=this;let n=0;e._charts.forEach((i,r)=>{if(!i.running||!i.items.length)return;const s=i.items;let o,a=s.length-1,c=!1;for(;a>=0;--a)o=s[a],o._active?(o._total>i.duration&&(i.duration=o._total),o.tick(t),c=!0):(s[a]=s[s.length-1],s.pop());c&&(r.draw(),e._notify(r,i,t,"progress")),s.length||(i.running=!1,e._notify(r,i,t,"complete"),i.initial=!1),n+=s.length}),e._lastDate=t,0===n&&(e._running=!1)}_getAnims(t){const e=this._charts;let n=e.get(t);return n||(n={running:!1,initial:!0,items:[],listeners:{complete:[],progress:[]}},e.set(t,n)),n}listen(t,e,n){this._getAnims(t).listeners[e].push(n)}add(t,e){e&&e.length&&this._getAnims(t).items.push(...e)}has(t){return this._getAnims(t).items.length>0}start(t){const e=this._charts.get(t);e&&(e.running=!0,e.start=Date.now(),e.duration=e.items.reduce((t,e)=>Math.max(t,e._duration),0),this._refresh())}running(t){if(!this._running)return!1;const e=this._charts.get(t);return!!(e&&e.running&&e.items.length)}stop(t){const e=this._charts.get(t);if(!e||!e.items.length)return;const n=e.items;let i=n.length-1;for(;i>=0;--i)n[i].cancel();e.items=[],this._notify(t,e,Date.now(),"complete")}remove(t){return this._charts.delete(t)}}var jo=new Fo;const Uo="transparent",Vo={boolean(t,e,n){return n>.5?e:t},color(t,e,n){const i=Fr(t||Uo),r=i.valid&&Fr(e||Uo);return r&&r.valid?r.mix(i,n).hexString():e},number(t,e,n){return t+(e-t)*n}};class Bo{constructor(t,e,n,i){const r=e[n];i=fs([t.to,i,r,t.from]);const s=fs([t.from,r,i]);this._active=!0,this._fn=t.fn||Vo[t.type||typeof s],this._easing=Gi[t.easing]||Gi.linear,this._start=Math.floor(Date.now()+(t.delay||0)),this._duration=this._total=Math.floor(t.duration),this._loop=!!t.loop,this._target=e,this._prop=n,this._from=s,this._to=i,this._promises=void 0}active(){return this._active}update(t,e,n){const i=this;if(i._active){i._notify(!1);const r=i._target[i._prop],s=n-i._start,o=i._duration-s;i._start=n,i._duration=Math.floor(Math.max(o,t.duration)),i._total+=s,i._loop=!!t.loop,i._to=fs([t.to,e,r,t.from]),i._from=fs([t.from,r,e])}}cancel(){const t=this;t._active&&(t.tick(Date.now()),t._active=!1,t._notify(!1))}tick(t){const e=this,n=t-e._start,i=e._duration,r=e._prop,s=e._from,o=e._loop,a=e._to;let c;if(e._active=s!==a&&(o||n<i),!e._active)return e._target[r]=a,void e._notify(!0);n<0?e._target[r]=s:(c=n/i%2,c=o&&c>1?2-c:c,c=e._easing(Math.min(1,Math.max(0,c))),e._target[r]=e._fn(s,a,c))}wait(){const t=this._promises||(this._promises=[]);return new Promise((e,n)=>{t.push({res:e,rej:n})})}_notify(t){const e=t?"res":"rej",n=this._promises||[];for(let i=0;i<n.length;i++)n[i][e]()}}const qo=["x","y","borderWidth","radius","tension"],zo=["color","borderColor","backgroundColor"];Wr.set("animation",{delay:void 0,duration:1e3,easing:"easeOutQuart",fn:void 0,from:void 0,loop:void 0,to:void 0,type:void 0});const Wo=Object.keys(Wr.animation);Wr.describe("animation",{_fallback:!1,_indexable:!1,_scriptable:t=>"onProgress"!==t&&"onComplete"!==t&&"fn"!==t}),Wr.set("animations",{colors:{type:"color",properties:zo},numbers:{type:"number",properties:qo}}),Wr.describe("animations",{_fallback:"animation"}),Wr.set("transitions",{active:{animation:{duration:400}},resize:{animation:{duration:0}},show:{animations:{colors:{from:"transparent"},visible:{type:"boolean",duration:0}}},hide:{animations:{colors:{to:"transparent"},visible:{type:"boolean",easing:"linear",fn:t=>0|t}}}});class Ho{constructor(t,e){this._chart=t,this._properties=new Map,this.configure(e)}configure(t){if(!Qn(t))return;const e=this._properties;Object.getOwnPropertyNames(t).forEach(n=>{const i=t[n];if(!Qn(i))return;const r={};for(const t of Wo)r[t]=i[t];(Yn(i.properties)&&i.properties||[n]).forEach(t=>{t!==n&&e.has(t)||e.set(t,r)})})}_animateOptions(t,e){const n=e.options,i=Ko(t,n);if(!i)return[];const r=this._createAnimations(i,n);return n.$shared&&$o(t.options.$animations,n).then(()=>{t.options=n},()=>{}),r}_createAnimations(t,e){const n=this._properties,i=[],r=t.$animations||(t.$animations={}),s=Object.keys(e),o=Date.now();let a;for(a=s.length-1;a>=0;--a){const c=s[a];if("$"===c.charAt(0))continue;if("options"===c){i.push(...this._animateOptions(t,e));continue}const l=e[c];let u=r[c];const h=n.get(c);if(u){if(h&&u.active()){u.update(h,l,o);continue}u.cancel()}h&&h.duration?(r[c]=u=new Bo(h,t,c,l),i.push(u)):t[c]=l}return i}update(t,e){if(0===this._properties.size)return void Object.assign(t,e);const n=this._createAnimations(t,e);return n.length?(jo.add(this._chart,n),!0):void 0}}function $o(t,e){const n=[],i=Object.keys(e);for(let r=0;r<i.length;r++){const e=t[i[r]];e&&e.active()&&n.push(e.wait())}return Promise.all(n)}function Ko(t,e){if(!e)return;let n=t.options;if(n)return n.$shared&&(t.options=n=Object.assign({},n,{$shared:!1,$animations:{}})),n;t.options=e}function Go(t,e){const n=t&&t.options||{},i=n.reverse,r=void 0===n.min?e:0,s=void 0===n.max?e:0;return{start:i?s:r,end:i?r:s}}function Yo(t,e,n){if(!1===n)return!1;const i=Go(t,n),r=Go(e,n);return{top:r.end,right:i.end,bottom:r.start,left:i.start}}function Qo(t){let e,n,i,r;return Qn(t)?(e=t.top,n=t.right,i=t.bottom,r=t.left):e=n=i=r=t,{top:e,right:n,bottom:i,left:r}}function Jo(t,e){const n=[],i=t._getSortedDatasetMetas(e);let r,s;for(r=0,s=i.length;r<s;++r)n.push(i[r].index);return n}function Xo(t,e,n,i){const r=t.keys,s="single"===i.mode;let o,a,c,l;if(null!==e){for(o=0,a=r.length;o<a;++o){if(c=+r[o],c===n){if(i.all)continue;break}l=t.values[c],Jn(l)&&(s||0===e||Ai(e)===Ai(l))&&(e+=l)}return e}}function Zo(t){const e=Object.keys(t),n=new Array(e.length);let i,r,s;for(i=0,r=e.length;i<r;++i)s=e[i],n[i]={x:s,y:t[s]};return n}function ta(t,e){const n=t&&t.options.stacked;return n||void 0===n&&void 0!==e.stack}function ea(t,e,n){return`${t.id}.${e.id}.${n.stack||n.type}`}function na(t){const{min:e,max:n,minDefined:i,maxDefined:r}=t.getUserBounds();return{min:i?e:Number.NEGATIVE_INFINITY,max:r?n:Number.POSITIVE_INFINITY}}function ia(t,e,n){const i=t[e]||(t[e]={});return i[n]||(i[n]={})}function ra(t,e,n){for(const i of e.getMatchingVisibleMetas("bar").reverse()){const e=t[i.index];if(n&&e>0||!n&&e<0)return i.index}return null}function sa(t,e){const{chart:n,_cachedMeta:i}=t,r=n._stacks||(n._stacks={}),{iScale:s,vScale:o,index:a}=i,c=s.axis,l=o.axis,u=ea(s,o,i),h=e.length;let d;for(let f=0;f<h;++f){const t=e[f],{[c]:n,[l]:i}=t,s=t._stacks||(t._stacks={});d=s[l]=ia(r,u,n),d[a]=i,d._top=ra(d,o,!0),d._bottom=ra(d,o,!1)}}function oa(t,e){const n=t.scales;return Object.keys(n).filter(t=>n[t].axis===e).shift()}function aa(t,e){return Object.assign(Object.create(t),{active:!1,dataset:void 0,datasetIndex:e,index:e,mode:"default",type:"dataset"})}function ca(t,e,n){return Object.assign(Object.create(t),{active:!1,dataIndex:e,parsed:void 0,raw:void 0,element:n,index:e,mode:"default",type:"data"})}function la(t,e){const n=t.vScale&&t.vScale.axis;if(n){e=e||t._parsed;for(const i of e){const e=i._stacks;if(!e||void 0===e[n]||void 0===e[n][t.index])return;delete e[n][t.index]}}}const ua=t=>"reset"===t||"none"===t,ha=(t,e)=>e?t:Object.assign({},t);class da{constructor(t,e){this.chart=t,this._ctx=t.ctx,this.index=e,this._cachedDataOpts={},this._cachedMeta=this.getMeta(),this._type=this._cachedMeta.type,this.options=void 0,this._parsing=!1,this._data=void 0,this._objectData=void 0,this._sharedOptions=void 0,this._drawStart=void 0,this._drawCount=void 0,this.enableOptionSharing=!1,this.$context=void 0,this._syncList=[],this.initialize()}initialize(){const t=this,e=t._cachedMeta;t.configure(),t.linkScales(),e._stacked=ta(e.vScale,e),t.addElements()}updateIndex(t){this.index!==t&&la(this._cachedMeta),this.index=t}linkScales(){const t=this,e=t.chart,n=t._cachedMeta,i=t.getDataset(),r=(t,e,n,i)=>"x"===t?e:"r"===t?i:n,s=n.xAxisID=Zn(i.xAxisID,oa(e,"x")),o=n.yAxisID=Zn(i.yAxisID,oa(e,"y")),a=n.rAxisID=Zn(i.rAxisID,oa(e,"r")),c=n.indexAxis,l=n.iAxisID=r(c,s,o,a),u=n.vAxisID=r(c,o,s,a);n.xScale=t.getScaleForId(s),n.yScale=t.getScaleForId(o),n.rScale=t.getScaleForId(a),n.iScale=t.getScaleForId(l),n.vScale=t.getScaleForId(u)}getDataset(){return this.chart.data.datasets[this.index]}getMeta(){return this.chart.getDatasetMeta(this.index)}getScaleForId(t){return this.chart.scales[t]}_getOtherScale(t){const e=this._cachedMeta;return t===e.iScale?e.vScale:e.iScale}reset(){this._update("reset")}_destroy(){const t=this._cachedMeta;this._data&&ws(this._data,this),t._stacked&&la(t)}_dataCheck(){const t=this,e=t.getDataset(),n=e.data||(e.data=[]),i=t._data;if(Qn(n))t._data=Zo(n);else if(i!==n){if(i){ws(i,t);const e=t._cachedMeta;la(e),e._parsed=[]}n&&Object.isExtensible(n)&&_s(n,t),t._syncList=[],t._data=n}}addElements(){const t=this,e=t._cachedMeta;t._dataCheck(),t.datasetElementType&&(e.dataset=new t.datasetElementType)}buildOrUpdateElements(t){const e=this,n=e._cachedMeta,i=e.getDataset();let r=!1;e._dataCheck();const s=n._stacked;n._stacked=ta(n.vScale,n),n.stack!==i.stack&&(r=!0,la(n),n.stack=i.stack),e._resyncElements(t),(r||s!==n._stacked)&&sa(e,n._parsed)}configure(){const t=this,e=t.chart.config,n=e.datasetScopeKeys(t._type),i=e.getOptionScopes(t.getDataset(),n,!0);t.options=e.createResolver(i,t.getContext()),t._parsing=t.options.parsing}parse(t,e){const n=this,{_cachedMeta:i,_data:r}=n,{iScale:s,_stacked:o}=i,a=s.axis;let c,l,u,h=0===t&&e===r.length||i._sorted,d=t>0&&i._parsed[t-1];if(!1===n._parsing)i._parsed=r,i._sorted=!0,u=r;else{u=Yn(r[t])?n.parseArrayData(i,r,t,e):Qn(r[t])?n.parseObjectData(i,r,t,e):n.parsePrimitiveData(i,r,t,e);const s=()=>null===l[a]||d&&l[a]<d[a];for(c=0;c<e;++c)i._parsed[c+t]=l=u[c],h&&(s()&&(h=!1),d=l);i._sorted=h}o&&sa(n,u)}parsePrimitiveData(t,e,n,i){const{iScale:r,vScale:s}=t,o=r.axis,a=s.axis,c=r.getLabels(),l=r===s,u=new Array(i);let h,d,f;for(h=0,d=i;h<d;++h)f=h+n,u[h]={[o]:l||r.parse(c[f],f),[a]:s.parse(e[f],f)};return u}parseArrayData(t,e,n,i){const{xScale:r,yScale:s}=t,o=new Array(i);let a,c,l,u;for(a=0,c=i;a<c;++a)l=a+n,u=e[l],o[a]={x:r.parse(u[0],l),y:s.parse(u[1],l)};return o}parseObjectData(t,e,n,i){const{xScale:r,yScale:s}=t,{xAxisKey:o="x",yAxisKey:a="y"}=this._parsing,c=new Array(i);let l,u,h,d;for(l=0,u=i;l<u;++l)h=l+n,d=e[h],c[l]={x:r.parse(pi(d,o),h),y:s.parse(pi(d,a),h)};return c}getParsed(t){return this._cachedMeta._parsed[t]}getDataElement(t){return this._cachedMeta.data[t]}applyStack(t,e,n){const i=this.chart,r=this._cachedMeta,s=e[t.axis],o={keys:Jo(i,!0),values:e._stacks[t.axis]};return Xo(o,s,r.index,{mode:n})}updateRangeFromParsed(t,e,n,i){const r=n[e.axis];let s=null===r?NaN:r;const o=i&&n._stacks[e.axis];i&&o&&(i.values=o,t.min=Math.min(t.min,s),t.max=Math.max(t.max,s),s=Xo(i,r,this._cachedMeta.index,{all:!0})),t.min=Math.min(t.min,s),t.max=Math.max(t.max,s)}getMinMax(t,e){const n=this,i=n._cachedMeta,r=i._parsed,s=i._sorted&&t===i.iScale,o=r.length,a=n._getOtherScale(t),c=e&&i._stacked&&{keys:Jo(n.chart,!0),values:null},l={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY},{min:u,max:h}=na(a);let d,f,p,g;function m(){return p=r[d],f=p[t.axis],g=p[a.axis],!Jn(f)||u>g||h<g}for(d=0;d<o;++d)if(!m()&&(n.updateRangeFromParsed(l,t,p,c),s))break;if(s)for(d=o-1;d>=0;--d)if(!m()){n.updateRangeFromParsed(l,t,p,c);break}return l}getAllParsedValues(t){const e=this._cachedMeta._parsed,n=[];let i,r,s;for(i=0,r=e.length;i<r;++i)s=e[i][t.axis],Jn(s)&&n.push(s);return n}getMaxOverflow(){return!1}getLabelAndValue(t){const e=this,n=e._cachedMeta,i=n.iScale,r=n.vScale,s=e.getParsed(t);return{label:i?""+i.getLabelForValue(s[i.axis]):"",value:r?""+r.getLabelForValue(s[r.axis]):""}}_update(t){const e=this,n=e._cachedMeta;e.configure(),e._cachedDataOpts={},e.update(t||"default"),n._clip=Qo(Zn(e.options.clip,Yo(n.xScale,n.yScale,e.getMaxOverflow())))}update(t){}draw(){const t=this,e=t._ctx,n=t.chart,i=t._cachedMeta,r=i.data||[],s=n.chartArea,o=[],a=t._drawStart||0,c=t._drawCount||r.length-a;let l;for(i.dataset&&i.dataset.draw(e,s,a,c),l=a;l<a+c;++l){const t=r[l];t.active?o.push(t):t.draw(e,s)}for(l=0;l<o.length;++l)o[l].draw(e,s)}getStyle(t,e){const n=e?"active":"default";return void 0===t&&this._cachedMeta.dataset?this.resolveDatasetElementOptions(n):this.resolveDataElementOptions(t||0,n)}getContext(t,e,n){const i=this,r=i.getDataset();let s;if(t>=0&&t<i._cachedMeta.data.length){const e=i._cachedMeta.data[t];s=e.$context||(e.$context=ca(i.getContext(),t,e)),s.parsed=i.getParsed(t),s.raw=r.data[t],s.index=s.dataIndex=t}else s=i.$context||(i.$context=aa(i.chart.getContext(),i.index)),s.dataset=r,s.index=s.datasetIndex=i.index;return s.active=!!e,s.mode=n,s}resolveDatasetElementOptions(t){return this._resolveElementOptions(this.datasetElementType.id,t)}resolveDataElementOptions(t,e){return this._resolveElementOptions(this.dataElementType.id,e,t)}_resolveElementOptions(t,e="default",n){const i=this,r="active"===e,s=i._cachedDataOpts,o=t+"-"+e,a=s[o],c=i.enableOptionSharing&&mi(n);if(a)return ha(a,c);const l=i.chart.config,u=l.datasetElementScopeKeys(i._type,t),h=r?[t+"Hover","hover",t,""]:[t,""],d=l.getOptionScopes(i.getDataset(),u),f=Object.keys(Wr.elements[t]),p=()=>i.getContext(n,r),g=l.resolveNamedOptions(d,f,p,h);return g.$shared&&(g.$shared=c,s[o]=Object.freeze(ha(g,c))),g}_resolveAnimations(t,e,n){const i=this,r=i.chart,s=i._cachedDataOpts,o="animation-"+e,a=s[o];if(a)return a;let c;if(!1!==r.options.animation){const r=i.chart.config,s=r.datasetAnimationScopeKeys(i._type,e),o=r.getOptionScopes(i.getDataset(),s);c=r.createResolver(o,i.getContext(t,n,e))}const l=new Ho(r,c&&c.animations);return c&&c._cacheable&&(s[o]=Object.freeze(l)),l}getSharedOptions(t){if(t.$shared)return this._sharedOptions||(this._sharedOptions=Object.assign({},t))}includeOptions(t,e){return!e||ua(t)||this.chart._animationsDisabled}updateElement(t,e,n,i){ua(i)?Object.assign(t,n):this._resolveAnimations(e,i).update(t,n)}updateSharedOptions(t,e,n){t&&!ua(e)&&this._resolveAnimations(void 0,e).update(t,n)}_setStyle(t,e,n,i){t.active=i;const r=this.getStyle(e,i);this._resolveAnimations(e,n,i).update(t,{options:!i&&this.getSharedOptions(r)||r})}removeHoverStyle(t,e,n){this._setStyle(t,n,"active",!1)}setHoverStyle(t,e,n){this._setStyle(t,n,"active",!0)}_removeDatasetHoverStyle(){const t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!1)}_setDatasetHoverStyle(){const t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!0)}_resyncElements(t){const e=this,n=e._data,i=e._cachedMeta.data;for(const[a,c,l]of e._syncList)e[a](c,l);e._syncList=[];const r=i.length,s=n.length,o=Math.min(s,r);o&&e.parse(0,o),s>r?e._insertElements(r,s-r,t):s<r&&e._removeElements(s,r-s)}_insertElements(t,e,n=!0){const i=this,r=i._cachedMeta,s=r.data,o=t+e;let a;const c=t=>{for(t.length+=e,a=t.length-1;a>=o;a--)t[a]=t[a-e]};for(c(s),a=t;a<o;++a)s[a]=new i.dataElementType;i._parsing&&c(r._parsed),i.parse(t,e),n&&i.updateElements(s,t,e,"reset")}updateElements(t,e,n,i){}_removeElements(t,e){const n=this,i=n._cachedMeta;if(n._parsing){const n=i._parsed.splice(t,e);i._stacked&&la(i,n)}i.data.splice(t,e)}_onDataPush(){const t=arguments.length;this._syncList.push(["_insertElements",this.getDataset().data.length-t,t])}_onDataPop(){this._syncList.push(["_removeElements",this._cachedMeta.data.length-1,1])}_onDataShift(){this._syncList.push(["_removeElements",0,1])}_onDataSplice(t,e){this._syncList.push(["_removeElements",t,e]),this._syncList.push(["_insertElements",t,arguments.length-2])}_onDataUnshift(){this._syncList.push(["_insertElements",0,arguments.length])}}function fa(t){if(!t._cache.$bar){const e=t.getMatchingVisibleMetas("bar");let n=[];for(let i=0,r=e.length;i<r;i++)n=n.concat(e[i].controller.getAllParsedValues(t));t._cache.$bar=xs(n.sort((t,e)=>t-e))}return t._cache.$bar}function pa(t){const e=fa(t);let n,i,r,s,o=t._length;const a=()=>{32767!==r&&-32768!==r&&(mi(s)&&(o=Math.min(o,Math.abs(r-s)||o)),s=r)};for(n=0,i=e.length;n<i;++n)r=t.getPixelForValue(e[n]),a();for(s=void 0,n=0,i=t.ticks.length;n<i;++n)r=t.getPixelForTick(n),a();return o}function ga(t,e,n,i){const r=n.barThickness;let s,o;return Gn(r)?(s=e.min*n.categoryPercentage,o=n.barPercentage):(s=r*i,o=1),{chunk:s/i,ratio:o,start:e.pixels[t]-s/2}}function ma(t,e,n,i){const r=e.pixels,s=r[t];let o=t>0?r[t-1]:null,a=t<r.length-1?r[t+1]:null;const c=n.categoryPercentage;null===o&&(o=s-(null===a?e.end-e.start:a-s)),null===a&&(a=s+s-o);const l=s-(s-Math.min(o,a))/2*c,u=Math.abs(a-o)/2*c;return{chunk:u/i,ratio:n.barPercentage,start:l}}function ya(t,e,n,i){const r=n.parse(t[0],i),s=n.parse(t[1],i),o=Math.min(r,s),a=Math.max(r,s);let c=o,l=a;Math.abs(o)>Math.abs(a)&&(c=a,l=o),e[n.axis]=l,e._custom={barStart:c,barEnd:l,start:r,end:s,min:o,max:a}}function ba(t,e,n,i){return Yn(t)?ya(t,e,n,i):e[n.axis]=n.parse(t,i),e}function va(t,e,n,i){const r=t.iScale,s=t.vScale,o=r.getLabels(),a=r===s,c=[];let l,u,h,d;for(l=n,u=n+i;l<u;++l)d=e[l],h={},h[r.axis]=a||r.parse(o[l],l),c.push(ba(d,h,s,l));return c}function _a(t){return t&&void 0!==t.barStart&&void 0!==t.barEnd}da.defaults={},da.prototype.datasetElementType=null,da.prototype.dataElementType=null;class wa extends da{parsePrimitiveData(t,e,n,i){return va(t,e,n,i)}parseArrayData(t,e,n,i){return va(t,e,n,i)}parseObjectData(t,e,n,i){const{iScale:r,vScale:s}=t,{xAxisKey:o="x",yAxisKey:a="y"}=this._parsing,c="x"===r.axis?o:a,l="x"===s.axis?o:a,u=[];let h,d,f,p;for(h=n,d=n+i;h<d;++h)p=e[h],f={},f[r.axis]=r.parse(pi(p,c),h),u.push(ba(pi(p,l),f,s,h));return u}updateRangeFromParsed(t,e,n,i){super.updateRangeFromParsed(t,e,n,i);const r=n._custom;r&&e===this._cachedMeta.vScale&&(t.min=Math.min(t.min,r.min),t.max=Math.max(t.max,r.max))}getLabelAndValue(t){const e=this,n=e._cachedMeta,{iScale:i,vScale:r}=n,s=e.getParsed(t),o=s._custom,a=_a(o)?"["+o.start+", "+o.end+"]":""+r.getLabelForValue(s[r.axis]);return{label:""+i.getLabelForValue(s[i.axis]),value:a}}initialize(){const t=this;t.enableOptionSharing=!0,super.initialize();const e=t._cachedMeta;e.stack=t.getDataset().stack}update(t){const e=this,n=e._cachedMeta;e.updateElements(n.data,0,n.data.length,t)}updateElements(t,e,n,i){const r=this,s="reset"===i,o=r._cachedMeta.vScale,a=o.getBasePixel(),c=o.isHorizontal(),l=r._getRuler(),u=r.resolveDataElementOptions(e,i),h=r.getSharedOptions(u),d=r.includeOptions(i,h);r.updateSharedOptions(h,i,u);for(let f=e;f<e+n;f++){const e=r.getParsed(f),n=s||Gn(e[o.axis])?{base:a,head:a}:r._calculateBarValuePixels(f),u=r._calculateBarIndexPixels(f,l),p=(e._stacks||{})[o.axis],g={horizontal:c,base:n.base,enableBorderRadius:!p||_a(e._custom)||r.index===p._top||r.index===p._bottom,x:c?n.head:u.center,y:c?u.center:n.head,height:c?u.size:void 0,width:c?void 0:u.size};d&&(g.options=h||r.resolveDataElementOptions(f,i)),r.updateElement(t[f],f,g,i)}}_getStacks(t,e){const n=this,i=n._cachedMeta,r=i.iScale,s=r.getMatchingVisibleMetas(n._type),o=r.options.stacked,a=s.length,c=[];let l,u;for(l=0;l<a;++l){if(u=s[l],"undefined"!==typeof e){const t=u.controller.getParsed(e)[u.controller._cachedMeta.vScale.axis];if(Gn(t)||isNaN(t))continue}if((!1===o||-1===c.indexOf(u.stack)||void 0===o&&void 0===u.stack)&&c.push(u.stack),u.index===t)break}return c.length||c.push(void 0),c}_getStackCount(t){return this._getStacks(void 0,t).length}_getStackIndex(t,e,n){const i=this._getStacks(t,n),r=void 0!==e?i.indexOf(e):-1;return-1===r?i.length-1:r}_getRuler(){const t=this,e=t.options,n=t._cachedMeta,i=n.iScale,r=[];let s,o;for(s=0,o=n.data.length;s<o;++s)r.push(i.getPixelForValue(t.getParsed(s)[i.axis],s));const a=e.barThickness,c=a||pa(i);return{min:c,pixels:r,start:i._startPixel,end:i._endPixel,stackCount:t._getStackCount(),scale:i,grouped:e.grouped,ratio:a?1:e.categoryPercentage*e.barPercentage}}_calculateBarValuePixels(t){const e=this,{vScale:n,_stacked:i}=e._cachedMeta,{base:r,minBarLength:s}=e.options,o=e.getParsed(t),a=o._custom,c=_a(a);let l,u,h=o[n.axis],d=0,f=i?e.applyStack(n,o,i):h;f!==h&&(d=f-h,f=h),c&&(h=a.barStart,f=a.barEnd-a.barStart,0!==h&&Ai(h)!==Ai(a.barEnd)&&(d=0),d+=h);const p=Gn(r)||c?d:r;let g=n.getPixelForValue(p);l=this.chart.getDataVisibility(t)?n.getPixelForValue(d+f):g,u=l-g,void 0!==s&&Math.abs(u)<s&&(u=u<0?-s:s,0===h&&(g-=u/2),l=g+u);const m=r||0;if(g===n.getPixelForValue(m)){const t=n.getLineWidthForValue(m)/2;u>0?(g+=t,u-=t):u<0&&(g-=t,u+=t)}return{size:u,base:g,head:l,center:l+u/2}}_calculateBarIndexPixels(t,e){const n=this,i=e.scale,r=n.options,s=r.skipNull,o=Zn(r.maxBarThickness,1/0);let a,c;if(e.grouped){const i=s?n._getStackCount(t):e.stackCount,l="flex"===r.barThickness?ma(t,e,r,i):ga(t,e,r,i),u=n._getStackIndex(n.index,n._cachedMeta.stack,s?t:void 0);a=l.start+l.chunk*u+l.chunk/2,c=Math.min(o,l.chunk*l.ratio)}else a=i.getPixelForValue(n.getParsed(t)[i.axis],t),c=Math.min(o,e.min*e.ratio);return{base:a-c/2,head:a+c/2,center:a,size:c}}draw(){const t=this,e=t.chart,n=t._cachedMeta,i=n.vScale,r=n.data,s=r.length;let o=0;for(Xr(e.ctx,e.chartArea);o<s;++o)null!==t.getParsed(o)[i.axis]&&r[o].draw(t._ctx);Zr(e.ctx)}}wa.id="bar",wa.defaults={datasetElementType:!1,dataElementType:"bar",categoryPercentage:.8,barPercentage:.9,grouped:!0,animations:{numbers:{type:"number",properties:["x","y","base","width","height"]}}},wa.overrides={interaction:{mode:"index"},scales:{_index_:{type:"category",offset:!0,grid:{offset:!0}},_value_:{type:"linear",beginAtZero:!0}}};class xa extends da{initialize(){this.enableOptionSharing=!0,super.initialize()}parseObjectData(t,e,n,i){const{xScale:r,yScale:s}=t,{xAxisKey:o="x",yAxisKey:a="y"}=this._parsing,c=[];let l,u,h;for(l=n,u=n+i;l<u;++l)h=e[l],c.push({x:r.parse(pi(h,o),l),y:s.parse(pi(h,a),l),_custom:h&&h.r&&+h.r});return c}getMaxOverflow(){const{data:t,_parsed:e}=this._cachedMeta;let n=0;for(let i=t.length-1;i>=0;--i)n=Math.max(n,t[i].size()/2,e[i]._custom);return n>0&&n}getLabelAndValue(t){const e=this,n=e._cachedMeta,{xScale:i,yScale:r}=n,s=e.getParsed(t),o=i.getLabelForValue(s.x),a=r.getLabelForValue(s.y),c=s._custom;return{label:n.label,value:"("+o+", "+a+(c?", "+c:"")+")"}}update(t){const e=this,n=e._cachedMeta.data;e.updateElements(n,0,n.length,t)}updateElements(t,e,n,i){const r=this,s="reset"===i,{iScale:o,vScale:a}=r._cachedMeta,c=r.resolveDataElementOptions(e,i),l=r.getSharedOptions(c),u=r.includeOptions(i,l),h=o.axis,d=a.axis;for(let f=e;f<e+n;f++){const e=t[f],n=!s&&r.getParsed(f),c={},l=c[h]=s?o.getPixelForDecimal(.5):o.getPixelForValue(n[h]),p=c[d]=s?a.getBasePixel():a.getPixelForValue(n[d]);c.skip=isNaN(l)||isNaN(p),u&&(c.options=r.resolveDataElementOptions(f,i),s&&(c.options.radius=0)),r.updateElement(e,f,c,i)}r.updateSharedOptions(l,i,c)}resolveDataElementOptions(t,e){const n=this.getParsed(t);let i=super.resolveDataElementOptions(t,e);i.$shared&&(i=Object.assign({},i,{$shared:!1}));const r=i.radius;return"active"!==e&&(i.radius=0),i.radius+=Zn(n&&n._custom,r),i}}function Ia(t,e,n){let i=1,r=1,s=0,o=0;if(e<_i){const a=t,c=a+e,l=Math.cos(a),u=Math.sin(a),h=Math.cos(c),d=Math.sin(c),f=(t,e,i)=>qi(t,a,c,!0)?1:Math.max(e,e*n,i,i*n),p=(t,e,i)=>qi(t,a,c,!0)?-1:Math.min(e,e*n,i,i*n),g=f(0,l,h),m=f(Ti,u,d),y=p(vi,l,h),b=p(vi+Ti,u,d);i=(g-y)/2,r=(m-b)/2,s=-(g+y)/2,o=-(m+b)/2}return{ratioX:i,ratioY:r,offsetX:s,offsetY:o}}xa.id="bubble",xa.defaults={datasetElementType:!1,dataElementType:"point",animations:{numbers:{type:"number",properties:["x","y","borderWidth","radius"]}}},xa.overrides={scales:{x:{type:"linear"},y:{type:"linear"}},plugins:{tooltip:{callbacks:{title(){return""}}}}};class Ta extends da{constructor(t,e){super(t,e),this.enableOptionSharing=!0,this.innerRadius=void 0,this.outerRadius=void 0,this.offsetX=void 0,this.offsetY=void 0}linkScales(){}parse(t,e){const n=this.getDataset().data,i=this._cachedMeta;let r,s;for(r=t,s=t+e;r<s;++r)i._parsed[r]=+n[r]}_getRotation(){return Mi(this.options.rotation-90)}_getCircumference(){return Mi(this.options.circumference)}_getRotationExtents(){let t=_i,e=-_i;const n=this;for(let i=0;i<n.chart.data.datasets.length;++i)if(n.chart.isDatasetVisible(i)){const r=n.chart.getDatasetMeta(i).controller,s=r._getRotation(),o=r._getCircumference();t=Math.min(t,s),e=Math.max(e,s+o)}return{rotation:t,circumference:e-t}}update(t){const e=this,n=e.chart,{chartArea:i}=n,r=e._cachedMeta,s=r.data,o=e.getMaxBorderWidth()+e.getMaxOffset(s),a=Math.max((Math.min(i.width,i.height)-o)/2,0),c=Math.min(ti(e.options.cutout,a),1),l=e._getRingWeight(e.index),{circumference:u,rotation:h}=e._getRotationExtents(),{ratioX:d,ratioY:f,offsetX:p,offsetY:g}=Ia(h,u,c),m=(i.width-o)/d,y=(i.height-o)/f,b=Math.max(Math.min(m,y)/2,0),v=ei(e.options.radius,b),_=Math.max(v*c,0),w=(v-_)/e._getVisibleDatasetWeightTotal();e.offsetX=p*v,e.offsetY=g*v,r.total=e.calculateTotal(),e.outerRadius=v-w*e._getRingWeightOffset(e.index),e.innerRadius=Math.max(e.outerRadius-w*l,0),e.updateElements(s,0,s.length,t)}_circumference(t,e){const n=this,i=n.options,r=n._cachedMeta,s=n._getCircumference();return e&&i.animation.animateRotate||!this.chart.getDataVisibility(t)||null===r._parsed[t]?0:n.calculateCircumference(r._parsed[t]*s/_i)}updateElements(t,e,n,i){const r=this,s="reset"===i,o=r.chart,a=o.chartArea,c=o.options,l=c.animation,u=(a.left+a.right)/2,h=(a.top+a.bottom)/2,d=s&&l.animateScale,f=d?0:r.innerRadius,p=d?0:r.outerRadius,g=r.resolveDataElementOptions(e,i),m=r.getSharedOptions(g),y=r.includeOptions(i,m);let b,v=r._getRotation();for(b=0;b<e;++b)v+=r._circumference(b,s);for(b=e;b<e+n;++b){const e=r._circumference(b,s),n=t[b],o={x:u+r.offsetX,y:h+r.offsetY,startAngle:v,endAngle:v+e,circumference:e,outerRadius:p,innerRadius:f};y&&(o.options=m||r.resolveDataElementOptions(b,i)),v+=e,r.updateElement(n,b,o,i)}r.updateSharedOptions(m,i,g)}calculateTotal(){const t=this._cachedMeta,e=t.data;let n,i=0;for(n=0;n<e.length;n++){const e=t._parsed[n];null!==e&&!isNaN(e)&&this.chart.getDataVisibility(n)&&(i+=Math.abs(e))}return i}calculateCircumference(t){const e=this._cachedMeta.total;return e>0&&!isNaN(t)?_i*(Math.abs(t)/e):0}getLabelAndValue(t){const e=this,n=e._cachedMeta,i=e.chart,r=i.data.labels||[],s=vo(n._parsed[t],i.options.locale);return{label:r[t]||"",value:s}}getMaxBorderWidth(t){const e=this;let n=0;const i=e.chart;let r,s,o,a,c;if(!t)for(r=0,s=i.data.datasets.length;r<s;++r)if(i.isDatasetVisible(r)){o=i.getDatasetMeta(r),t=o.data,a=o.controller,a!==e&&a.configure();break}if(!t)return 0;for(r=0,s=t.length;r<s;++r)c=a.resolveDataElementOptions(r),"inner"!==c.borderAlign&&(n=Math.max(n,c.borderWidth||0,c.hoverBorderWidth||0));return n}getMaxOffset(t){let e=0;for(let n=0,i=t.length;n<i;++n){const t=this.resolveDataElementOptions(n);e=Math.max(e,t.offset||0,t.hoverOffset||0)}return e}_getRingWeightOffset(t){let e=0;for(let n=0;n<t;++n)this.chart.isDatasetVisible(n)&&(e+=this._getRingWeight(n));return e}_getRingWeight(t){return Math.max(Zn(this.chart.data.datasets[t].weight,1),0)}_getVisibleDatasetWeightTotal(){return this._getRingWeightOffset(this.chart.data.datasets.length)||1}}Ta.id="doughnut",Ta.defaults={datasetElementType:!1,dataElementType:"arc",animation:{animateRotate:!0,animateScale:!1},animations:{numbers:{type:"number",properties:["circumference","endAngle","innerRadius","outerRadius","startAngle","x","y","offset","borderWidth"]}},cutout:"50%",rotation:0,circumference:360,radius:"100%",indexAxis:"r"},Ta.overrides={aspectRatio:1,plugins:{legend:{labels:{generateLabels(t){const e=t.data;return e.labels.length&&e.datasets.length?e.labels.map((e,n)=>{const i=t.getDatasetMeta(0),r=i.controller.getStyle(n);return{text:e,fillStyle:r.backgroundColor,strokeStyle:r.borderColor,lineWidth:r.borderWidth,hidden:!t.getDataVisibility(n),index:n}}):[]}},onClick(t,e,n){n.chart.toggleDataVisibility(e.index),n.chart.update()}},tooltip:{callbacks:{title(){return""},label(t){let e=t.label;const n=": "+t.formattedValue;return Yn(e)?(e=e.slice(),e[0]+=n):e+=n,e}}}}};class ka extends da{initialize(){this.enableOptionSharing=!0,super.initialize()}update(t){const e=this,n=e._cachedMeta,{dataset:i,data:r=[],_dataset:s}=n,o=e.chart._animationsDisabled;let{start:a,count:c}=Ea(n,r,o);e._drawStart=a,e._drawCount=c,Sa(n)&&(a=0,c=r.length),i._decimated=!!s._decimated,i.points=r;const l=e.resolveDatasetElementOptions(t);e.options.showLine||(l.borderWidth=0),l.segment=e.options.segment,e.updateElement(i,void 0,{animated:!o,options:l},t),e.updateElements(r,a,c,t)}updateElements(t,e,n,i){const r=this,s="reset"===i,{iScale:o,vScale:a,_stacked:c}=r._cachedMeta,l=r.resolveDataElementOptions(e,i),u=r.getSharedOptions(l),h=r.includeOptions(i,u),d=o.axis,f=a.axis,p=r.options.spanGaps,g=Ri(p)?p:Number.POSITIVE_INFINITY,m=r.chart._animationsDisabled||s||"none"===i;let y=e>0&&r.getParsed(e-1);for(let b=e;b<e+n;++b){const e=t[b],n=r.getParsed(b),l=m?e:{},p=Gn(n[f]),v=l[d]=o.getPixelForValue(n[d],b),_=l[f]=s||p?a.getBasePixel():a.getPixelForValue(c?r.applyStack(a,n,c):n[f],b);l.skip=isNaN(v)||isNaN(_)||p,l.stop=b>0&&n[d]-y[d]>g,l.parsed=n,h&&(l.options=u||r.resolveDataElementOptions(b,i)),m||r.updateElement(e,b,l,i),y=n}r.updateSharedOptions(u,i,l)}getMaxOverflow(){const t=this,e=t._cachedMeta,n=e.dataset,i=n.options&&n.options.borderWidth||0,r=e.data||[];if(!r.length)return i;const s=r[0].size(t.resolveDataElementOptions(0)),o=r[r.length-1].size(t.resolveDataElementOptions(r.length-1));return Math.max(i,s,o)/2}draw(){const t=this._cachedMeta;t.dataset.updateControlPoints(this.chart.chartArea,t.iScale.axis),super.draw()}}function Ea(t,e,n){const i=e.length;let r=0,s=i;if(t._sorted){const{iScale:o,_parsed:a}=t,c=o.axis,{min:l,max:u,minDefined:h,maxDefined:d}=o.getUserBounds();h&&(r=zi(Math.min(ms(a,o.axis,l).lo,n?i:ms(e,c,o.getPixelForValue(l)).lo),0,i-1)),s=d?zi(Math.max(ms(a,o.axis,u).hi+1,n?0:ms(e,c,o.getPixelForValue(u)).hi+1),r,i)-r:i-r}return{start:r,count:s}}function Sa(t){const{xScale:e,yScale:n,_scaleRanges:i}=t,r={xmin:e.min,xmax:e.max,ymin:n.min,ymax:n.max};if(!i)return t._scaleRanges=r,!0;const s=i.xmin!==e.min||i.xmax!==e.max||i.ymin!==n.min||i.ymax!==n.max;return Object.assign(i,r),s}ka.id="line",ka.defaults={datasetElementType:"line",dataElementType:"point",showLine:!0,spanGaps:!1},ka.overrides={scales:{_index_:{type:"category"},_value_:{type:"linear"}}};class Aa extends da{constructor(t,e){super(t,e),this.innerRadius=void 0,this.outerRadius=void 0}getLabelAndValue(t){const e=this,n=e._cachedMeta,i=e.chart,r=i.data.labels||[],s=vo(n._parsed[t].r,i.options.locale);return{label:r[t]||"",value:s}}update(t){const e=this._cachedMeta.data;this._updateRadius(),this.updateElements(e,0,e.length,t)}_updateRadius(){const t=this,e=t.chart,n=e.chartArea,i=e.options,r=Math.min(n.right-n.left,n.bottom-n.top),s=Math.max(r/2,0),o=Math.max(i.cutoutPercentage?s/100*i.cutoutPercentage:1,0),a=(s-o)/e.getVisibleDatasetCount();t.outerRadius=s-a*t.index,t.innerRadius=t.outerRadius-a}updateElements(t,e,n,i){const r=this,s="reset"===i,o=r.chart,a=r.getDataset(),c=o.options,l=c.animation,u=r._cachedMeta.rScale,h=u.xCenter,d=u.yCenter,f=u.getIndexAngle(0)-.5*vi;let p,g=f;const m=360/r.countVisibleElements();for(p=0;p<e;++p)g+=r._computeAngle(p,i,m);for(p=e;p<e+n;p++){const e=t[p];let n=g,c=g+r._computeAngle(p,i,m),y=o.getDataVisibility(p)?u.getDistanceFromCenterForValue(a.data[p]):0;g=c,s&&(l.animateScale&&(y=0),l.animateRotate&&(n=c=f));const b={x:h,y:d,innerRadius:0,outerRadius:y,startAngle:n,endAngle:c,options:r.resolveDataElementOptions(p,i)};r.updateElement(e,p,b,i)}}countVisibleElements(){const t=this.getDataset(),e=this._cachedMeta;let n=0;return e.data.forEach((e,i)=>{!isNaN(t.data[i])&&this.chart.getDataVisibility(i)&&n++}),n}_computeAngle(t,e,n){return this.chart.getDataVisibility(t)?Mi(this.resolveDataElementOptions(t,e).angle||n):0}}Aa.id="polarArea",Aa.defaults={dataElementType:"arc",animation:{animateRotate:!0,animateScale:!0},animations:{numbers:{type:"number",properties:["x","y","startAngle","endAngle","innerRadius","outerRadius"]}},indexAxis:"r",startAngle:0},Aa.overrides={aspectRatio:1,plugins:{legend:{labels:{generateLabels(t){const e=t.data;return e.labels.length&&e.datasets.length?e.labels.map((e,n)=>{const i=t.getDatasetMeta(0),r=i.controller.getStyle(n);return{text:e,fillStyle:r.backgroundColor,strokeStyle:r.borderColor,lineWidth:r.borderWidth,hidden:!t.getDataVisibility(n),index:n}}):[]}},onClick(t,e,n){n.chart.toggleDataVisibility(e.index),n.chart.update()}},tooltip:{callbacks:{title(){return""},label(t){return t.chart.data.labels[t.dataIndex]+": "+t.formattedValue}}}},scales:{r:{type:"radialLinear",angleLines:{display:!1},beginAtZero:!0,grid:{circular:!0},pointLabels:{display:!1},startAngle:0}}};class Oa extends Ta{}Oa.id="pie",Oa.defaults={cutout:0,rotation:0,circumference:360,radius:"100%"};class Ca extends da{getLabelAndValue(t){const e=this,n=e._cachedMeta.vScale,i=e.getParsed(t);return{label:n.getLabels()[t],value:""+n.getLabelForValue(i[n.axis])}}update(t){const e=this,n=e._cachedMeta,i=n.dataset,r=n.data||[],s=n.iScale.getLabels();if(i.points=r,"resize"!==t){const n=e.resolveDatasetElementOptions(t);e.options.showLine||(n.borderWidth=0);const o={_loop:!0,_fullLoop:s.length===r.length,options:n};e.updateElement(i,void 0,o,t)}e.updateElements(r,0,r.length,t)}updateElements(t,e,n,i){const r=this,s=r.getDataset(),o=r._cachedMeta.rScale,a="reset"===i;for(let c=e;c<e+n;c++){const e=t[c],n=r.resolveDataElementOptions(c,i),l=o.getPointPositionForValue(c,s.data[c]),u=a?o.xCenter:l.x,h=a?o.yCenter:l.y,d={x:u,y:h,angle:l.angle,skip:isNaN(u)||isNaN(h),options:n};r.updateElement(e,c,d,i)}}}Ca.id="radar",Ca.defaults={datasetElementType:"line",dataElementType:"point",indexAxis:"r",showLine:!0,elements:{line:{fill:"start"}}},Ca.overrides={aspectRatio:1,scales:{r:{type:"radialLinear"}}};class Ra extends ka{}Ra.id="scatter",Ra.defaults={showLine:!1,fill:!1},Ra.overrides={interaction:{mode:"point"},plugins:{tooltip:{callbacks:{title(){return""},label(t){return"("+t.label+", "+t.formattedValue+")"}}}},scales:{x:{type:"linear"},y:{type:"linear"}}};var Da=Object.freeze({__proto__:null,BarController:wa,BubbleController:xa,DoughnutController:Ta,LineController:ka,PolarAreaController:Aa,PieController:Oa,RadarController:Ca,ScatterController:Ra});function Na(){throw new Error("This method is not implemented: Check that a complete date adapter is provided.")}class Pa{constructor(t){this.options=t||{}}formats(){return Na()}parse(t,e){return Na()}format(t,e){return Na()}add(t,e,n){return Na()}diff(t,e,n){return Na()}startOf(t,e,n){return Na()}endOf(t,e){return Na()}}Pa.override=function(t){Object.assign(Pa.prototype,t)};var Ma={_date:Pa};function La(t,e){return"native"in t?{x:t.x,y:t.y}:oo(t,e)}function Fa(t,e){const n=t.getSortedVisibleDatasetMetas();let i,r,s;for(let o=0,a=n.length;o<a;++o){({index:i,data:r}=n[o]);for(let t=0,n=r.length;t<n;++t)s=r[t],s.skip||e(s,i,t)}}function ja(t,e,n,i){const{controller:r,data:s,_sorted:o}=t,a=r._cachedMeta.iScale;if(a&&e===a.axis&&o&&s.length){const t=a._reversePixels?ys:ms;if(!i)return t(s,e,n);if(r._sharedOptions){const i=s[0],r="function"===typeof i.getRange&&i.getRange(e);if(r){const i=t(s,e,n-r),o=t(s,e,n+r);return{lo:i.lo,hi:o.hi}}}}return{lo:0,hi:s.length-1}}function Ua(t,e,n,i,r){const s=t.getSortedVisibleDatasetMetas(),o=n[e];for(let a=0,c=s.length;a<c;++a){const{index:t,data:n}=s[a],{lo:c,hi:l}=ja(s[a],e,o,r);for(let e=c;e<=l;++e){const r=n[e];r.skip||i(r,t,e)}}}function Va(t){const e=-1!==t.indexOf("x"),n=-1!==t.indexOf("y");return function(t,i){const r=e?Math.abs(t.x-i.x):0,s=n?Math.abs(t.y-i.y):0;return Math.sqrt(Math.pow(r,2)+Math.pow(s,2))}}function Ba(t,e,n,i){const r=[];if(!Jr(e,t.chartArea,t._minPadding))return r;const s=function(t,n,s){t.inRange(e.x,e.y,i)&&r.push({element:t,datasetIndex:n,index:s})};return Ua(t,n,e,s,!0),r}function qa(t,e,n,i,r){const s=Va(n);let o=Number.POSITIVE_INFINITY,a=[];if(!Jr(e,t.chartArea,t._minPadding))return a;const c=function(n,c,l){if(i&&!n.inRange(e.x,e.y,r))return;const u=n.getCenterPoint(r);if(!Jr(u,t.chartArea,t._minPadding))return;const h=s(e,u);h<o?(a=[{element:n,datasetIndex:c,index:l}],o=h):h===o&&a.push({element:n,datasetIndex:c,index:l})};return Ua(t,n,e,c),a}function za(t,e,n,i){const r=La(e,t),s=[],o=n.axis,a="x"===o?"inXRange":"inYRange";let c=!1;return Fa(t,(t,e,n)=>{t[a](r[o],i)&&s.push({element:t,datasetIndex:e,index:n}),t.inRange(r.x,r.y,i)&&(c=!0)}),n.intersect&&!c?[]:s}var Wa={modes:{index(t,e,n,i){const r=La(e,t),s=n.axis||"x",o=n.intersect?Ba(t,r,s,i):qa(t,r,s,!1,i),a=[];return o.length?(t.getSortedVisibleDatasetMetas().forEach(t=>{const e=o[0].index,n=t.data[e];n&&!n.skip&&a.push({element:n,datasetIndex:t.index,index:e})}),a):[]},dataset(t,e,n,i){const r=La(e,t),s=n.axis||"xy";let o=n.intersect?Ba(t,r,s,i):qa(t,r,s,!1,i);if(o.length>0){const e=o[0].datasetIndex,n=t.getDatasetMeta(e).data;o=[];for(let t=0;t<n.length;++t)o.push({element:n[t],datasetIndex:e,index:t})}return o},point(t,e,n,i){const r=La(e,t),s=n.axis||"xy";return Ba(t,r,s,i)},nearest(t,e,n,i){const r=La(e,t),s=n.axis||"xy";return qa(t,r,s,n.intersect,i)},x(t,e,n,i){return n.axis="x",za(t,e,n,i)},y(t,e,n,i){return n.axis="y",za(t,e,n,i)}}};const Ha=["left","top","right","bottom"];function $a(t,e){return t.filter(t=>t.pos===e)}function Ka(t,e){return t.filter(t=>-1===Ha.indexOf(t.pos)&&t.box.axis===e)}function Ga(t,e){return t.sort((t,n)=>{const i=e?n:t,r=e?t:n;return i.weight===r.weight?i.index-r.index:i.weight-r.weight})}function Ya(t){const e=[];let n,i,r;for(n=0,i=(t||[]).length;n<i;++n)r=t[n],e.push({index:n,box:r,pos:r.position,horizontal:r.isHorizontal(),weight:r.weight});return e}function Qa(t,e){let n,i,r;for(n=0,i=t.length;n<i;++n)r=t[n],r.horizontal?(r.width=r.box.fullSize&&e.availableWidth,r.height=e.hBoxMaxHeight):(r.width=e.vBoxMaxWidth,r.height=r.box.fullSize&&e.availableHeight)}function Ja(t){const e=Ya(t),n=Ga(e.filter(t=>t.box.fullSize),!0),i=Ga($a(e,"left"),!0),r=Ga($a(e,"right")),s=Ga($a(e,"top"),!0),o=Ga($a(e,"bottom")),a=Ka(e,"x"),c=Ka(e,"y");return{fullSize:n,leftAndTop:i.concat(s),rightAndBottom:r.concat(c).concat(o).concat(a),chartArea:$a(e,"chartArea"),vertical:i.concat(r).concat(c),horizontal:s.concat(o).concat(a)}}function Xa(t,e,n,i){return Math.max(t[n],e[n])+Math.max(t[i],e[i])}function Za(t,e){t.top=Math.max(t.top,e.top),t.left=Math.max(t.left,e.left),t.bottom=Math.max(t.bottom,e.bottom),t.right=Math.max(t.right,e.right)}function tc(t,e,n){const i=n.box,r=t.maxPadding;Qn(n.pos)||(n.size&&(t[n.pos]-=n.size),n.size=n.horizontal?i.height:i.width,t[n.pos]+=n.size),i.getPadding&&Za(r,i.getPadding());const s=Math.max(0,e.outerWidth-Xa(r,t,"left","right")),o=Math.max(0,e.outerHeight-Xa(r,t,"top","bottom")),a=s!==t.w,c=o!==t.h;return t.w=s,t.h=o,n.horizontal?{same:a,other:c}:{same:c,other:a}}function ec(t){const e=t.maxPadding;function n(n){const i=Math.max(e[n]-t[n],0);return t[n]+=i,i}t.y+=n("top"),t.x+=n("left"),n("right"),n("bottom")}function nc(t,e){const n=e.maxPadding;function i(t){const i={left:0,top:0,right:0,bottom:0};return t.forEach(t=>{i[t]=Math.max(e[t],n[t])}),i}return i(t?["left","right"]:["top","bottom"])}function ic(t,e,n){const i=[];let r,s,o,a,c,l;for(r=0,s=t.length,c=0;r<s;++r){o=t[r],a=o.box,a.update(o.width||e.w,o.height||e.h,nc(o.horizontal,e));const{same:s,other:u}=tc(e,n,o);c|=s&&i.length,l=l||u,a.fullSize||i.push(o)}return c&&ic(i,e,n)||l}function rc(t,e,n){const i=n.padding;let r,s,o,a,c=e.x,l=e.y;for(r=0,s=t.length;r<s;++r)o=t[r],a=o.box,o.horizontal?(a.left=a.fullSize?i.left:e.left,a.right=a.fullSize?n.outerWidth-i.right:e.left+e.w,a.top=l,a.bottom=l+a.height,a.width=a.right-a.left,l=a.bottom):(a.left=c,a.right=c+a.width,a.top=a.fullSize?i.top:e.top,a.bottom=a.fullSize?n.outerHeight-i.right:e.top+e.h,a.height=a.bottom-a.top,c=a.right);e.x=c,e.y=l}Wr.set("layout",{padding:{top:0,right:0,bottom:0,left:0}});var sc={addBox(t,e){t.boxes||(t.boxes=[]),e.fullSize=e.fullSize||!1,e.position=e.position||"top",e.weight=e.weight||0,e._layers=e._layers||function(){return[{z:0,draw(t){e.draw(t)}}]},t.boxes.push(e)},removeBox(t,e){const n=t.boxes?t.boxes.indexOf(e):-1;-1!==n&&t.boxes.splice(n,1)},configure(t,e,n){e.fullSize=n.fullSize,e.position=n.position,e.weight=n.weight},update(t,e,n,i){if(!t)return;const r=hs(t.options.layout.padding),s=Math.max(e-r.width,0),o=Math.max(n-r.height,0),a=Ja(t.boxes),c=a.vertical,l=a.horizontal;ii(t.boxes,t=>{"function"===typeof t.beforeLayout&&t.beforeLayout()});const u=c.reduce((t,e)=>e.box.options&&!1===e.box.options.display?t:t+1,0)||1,h=Object.freeze({outerWidth:e,outerHeight:n,padding:r,availableWidth:s,availableHeight:o,vBoxMaxWidth:s/2/u,hBoxMaxHeight:o/2}),d=Object.assign({},r);Za(d,hs(i));const f=Object.assign({maxPadding:d,w:s,h:o,x:r.left,y:r.top},r);Qa(c.concat(l),h),ic(a.fullSize,f,h),ic(c,f,h),ic(l,f,h)&&ic(c,f,h),ec(f),rc(a.leftAndTop,f,h),f.x+=f.w,f.y+=f.h,rc(a.rightAndBottom,f,h),t.chartArea={left:f.left,top:f.top,right:f.left+f.w,bottom:f.top+f.h,height:f.h,width:f.w},ii(a.chartArea,e=>{const n=e.box;Object.assign(n,t.chartArea),n.update(f.w,f.h)})}};class oc{acquireContext(t,e){}releaseContext(t){return!1}addEventListener(t,e,n){}removeEventListener(t,e,n){}getDevicePixelRatio(){return 1}getMaximumSize(t,e,n,i){return e=Math.max(0,e||t.width),n=n||t.height,{width:e,height:Math.max(0,i?Math.floor(e/i):n)}}isAttached(t){return!0}}class ac extends oc{acquireContext(t){return t&&t.getContext&&t.getContext("2d")||null}}const cc="$chartjs",lc={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",pointerenter:"mouseenter",pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointerleave:"mouseout",pointerout:"mouseout"},uc=t=>null===t||""===t;function hc(t,e){const n=t.style,i=t.getAttribute("height"),r=t.getAttribute("width");if(t[cc]={initial:{height:i,width:r,style:{display:n.display,height:n.height,width:n.width}}},n.display=n.display||"block",n.boxSizing=n.boxSizing||"border-box",uc(r)){const e=fo(t,"width");void 0!==e&&(t.width=e)}if(uc(i))if(""===t.style.height)t.height=t.width/(e||2);else{const e=fo(t,"height");void 0!==e&&(t.height=e)}return t}const dc=!!ho&&{passive:!0};function fc(t,e,n){t.addEventListener(e,n,dc)}function pc(t,e,n){t.canvas.removeEventListener(e,n,dc)}function gc(t,e){const n=lc[t.type]||t.type,{x:i,y:r}=oo(t,e);return{type:n,chart:e,native:t,x:void 0!==i?i:null,y:void 0!==r?r:null}}function mc(t,e,n){const i=t.canvas,r=i&&Xs(i),s=r||i,o=new MutationObserver(t=>{const e=Xs(s);t.forEach(t=>{for(let i=0;i<t.addedNodes.length;i++){const r=t.addedNodes[i];r!==s&&r!==e||n(t.target)}})});return o.observe(document,{childList:!0,subtree:!0}),o}function yc(t,e,n){const i=t.canvas,r=i&&Xs(i);if(!r)return;const s=new MutationObserver(t=>{t.forEach(t=>{for(let e=0;e<t.removedNodes.length;e++)if(t.removedNodes[e]===i){n();break}})});return s.observe(r,{childList:!0}),s}const bc=new Map;let vc=0;function _c(){const t=window.devicePixelRatio;t!==vc&&(vc=t,bc.forEach((e,n)=>{n.currentDevicePixelRatio!==t&&e()}))}function wc(t,e){bc.size||window.addEventListener("resize",_c),bc.set(t,e)}function xc(t){bc.delete(t),bc.size||window.removeEventListener("resize",_c)}function Ic(t,e,n){const i=t.canvas,r=i&&Xs(i);if(!r)return;const s=Bn((t,e)=>{const i=r.clientWidth;n(t,e),i<r.clientWidth&&n()},window),o=new ResizeObserver(t=>{const e=t[0],n=e.contentRect.width,i=e.contentRect.height;0===n&&0===i||s(n,i)});return o.observe(r),wc(t,s),o}function Tc(t,e,n){n&&n.disconnect(),"resize"===e&&xc(t)}function kc(t,e,n){const i=t.canvas,r=Bn(e=>{null!==t.ctx&&n(gc(e,t))},t,t=>{const e=t[0];return[e,e.offsetX,e.offsetY]});return fc(i,e,r),r}class Ec extends oc{acquireContext(t,e){const n=t&&t.getContext&&t.getContext("2d");return n&&n.canvas===t?(hc(t,e),n):null}releaseContext(t){const e=t.canvas;if(!e[cc])return!1;const n=e[cc].initial;["height","width"].forEach(t=>{const i=n[t];Gn(i)?e.removeAttribute(t):e.setAttribute(t,i)});const i=n.style||{};return Object.keys(i).forEach(t=>{e.style[t]=i[t]}),e.width=e.width,delete e[cc],!0}addEventListener(t,e,n){this.removeEventListener(t,e);const i=t.$proxies||(t.$proxies={}),r={attach:mc,detach:yc,resize:Ic},s=r[e]||kc;i[e]=s(t,e,n)}removeEventListener(t,e){const n=t.$proxies||(t.$proxies={}),i=n[e];if(!i)return;const r={attach:Tc,detach:Tc,resize:Tc},s=r[e]||pc;s(t,e,i),n[e]=void 0}getDevicePixelRatio(){return window.devicePixelRatio}getMaximumSize(t,e,n,i){return lo(t,e,n,i)}isAttached(t){const e=Xs(t);return!(!e||!Xs(e))}}class Sc{constructor(){this.x=void 0,this.y=void 0,this.active=!1,this.options=void 0,this.$animations=void 0}tooltipPosition(t){const{x:e,y:n}=this.getProps(["x","y"],t);return{x:e,y:n}}hasValue(){return Ri(this.x)&&Ri(this.y)}getProps(t,e){const n=this,i=this.$animations;if(!e||!i)return n;const r={};return t.forEach(t=>{r[t]=i[t]&&i[t].active()?i[t]._to:n[t]}),r}}Sc.defaults={},Sc.defaultRoutes=void 0;const Ac={values(t){return Yn(t)?t:""+t},numeric(t,e,n){if(0===t)return"0";const i=this.chart.options.locale;let r,s=t;if(n.length>1){const e=Math.max(Math.abs(n[0].value),Math.abs(n[n.length-1].value));(e<1e-4||e>1e15)&&(r="scientific"),s=Oc(t,n)}const o=Si(Math.abs(s)),a=Math.max(Math.min(-1*Math.floor(o),20),0),c={notation:r,minimumFractionDigits:a,maximumFractionDigits:a};return Object.assign(c,this.options.ticks.format),vo(t,i,c)},logarithmic(t,e,n){if(0===t)return"0";const i=t/Math.pow(10,Math.floor(Si(t)));return 1===i||2===i||5===i?Ac.numeric.call(this,t,e,n):""}};function Oc(t,e){let n=e.length>3?e[2].value-e[1].value:e[1].value-e[0].value;return Math.abs(n)>=1&&t!==Math.floor(t)&&(n=t-Math.floor(t)),n}var Cc={formatters:Ac};function Rc(t,e){const n=t.options.ticks,i=n.maxTicksLimit||Dc(t),r=n.major.enabled?Pc(e):[],s=r.length,o=r[0],a=r[s-1],c=[];if(s>i)return Mc(e,c,r,s/i),c;const l=Nc(r,e,i);if(s>0){let t,n;const i=s>1?Math.round((a-o)/(s-1)):null;for(Lc(e,c,l,Gn(i)?0:o-i,o),t=0,n=s-1;t<n;t++)Lc(e,c,l,r[t],r[t+1]);return Lc(e,c,l,a,Gn(i)?e.length:a+i),c}return Lc(e,c,l),c}function Dc(t){const e=t.options.offset,n=t._tickSize(),i=t._length/n+(e?0:1),r=t._maxLength/n;return Math.floor(Math.min(i,r))}function Nc(t,e,n){const i=Fc(t),r=e.length/n;if(!i)return Math.max(r,1);const s=Ci(i);for(let o=0,a=s.length-1;o<a;o++){const t=s[o];if(t>r)return t}return Math.max(r,1)}function Pc(t){const e=[];let n,i;for(n=0,i=t.length;n<i;n++)t[n].major&&e.push(n);return e}function Mc(t,e,n,i){let r,s=0,o=n[0];for(i=Math.ceil(i),r=0;r<t.length;r++)r===o&&(e.push(t[r]),s++,o=n[s*i])}function Lc(t,e,n,i,r){const s=Zn(i,0),o=Math.min(Zn(r,t.length),t.length);let a,c,l,u=0;n=Math.ceil(n),r&&(a=r-i,n=a/Math.floor(a/n)),l=s;while(l<0)u++,l=Math.round(s+u*n);for(c=Math.max(s,0);c<o;c++)c===l&&(e.push(t[c]),u++,l=Math.round(s+u*n))}function Fc(t){const e=t.length;let n,i;if(e<2)return!1;for(i=t[0],n=1;n<e;++n)if(t[n]-t[n-1]!==i)return!1;return i}Wr.set("scale",{display:!0,offset:!1,reverse:!1,beginAtZero:!1,bounds:"ticks",grace:0,grid:{display:!0,lineWidth:1,drawBorder:!0,drawOnChartArea:!0,drawTicks:!0,tickLength:8,tickWidth:(t,e)=>e.lineWidth,tickColor:(t,e)=>e.color,offset:!1,borderDash:[],borderDashOffset:0,borderWidth:1},title:{display:!1,text:"",padding:{top:4,bottom:4}},ticks:{minRotation:0,maxRotation:50,mirror:!1,textStrokeWidth:0,textStrokeColor:"",padding:3,display:!0,autoSkip:!0,autoSkipPadding:3,labelOffset:0,callback:Cc.formatters.values,minor:{},major:{},align:"center",crossAlign:"near",showLabelBackdrop:!1,backdropColor:"rgba(255, 255, 255, 0.75)",backdropPadding:2}}),Wr.route("scale.ticks","color","","color"),Wr.route("scale.grid","color","","borderColor"),Wr.route("scale.grid","borderColor","","borderColor"),Wr.route("scale.title","color","","color"),Wr.describe("scale",{_fallback:!1,_scriptable:t=>!t.startsWith("before")&&!t.startsWith("after")&&"callback"!==t&&"parser"!==t,_indexable:t=>"borderDash"!==t&&"tickBorderDash"!==t}),Wr.describe("scales",{_fallback:"scale"});const jc=t=>"left"===t?"right":"right"===t?"left":t,Uc=(t,e,n)=>"top"===e||"left"===e?t[e]+n:t[e]-n;function Vc(t,e){const n=[],i=t.length/e,r=t.length;let s=0;for(;s<r;s+=i)n.push(t[Math.floor(s)]);return n}function Bc(t,e,n){const i=t.ticks.length,r=Math.min(e,i-1),s=t._startPixel,o=t._endPixel,a=1e-6;let c,l=t.getPixelForTick(r);if(!(n&&(c=1===i?Math.max(l-s,o-l):0===e?(t.getPixelForTick(1)-l)/2:(l-t.getPixelForTick(r-1))/2,l+=r<e?c:-c,l<s-a||l>o+a)))return l}function qc(t,e){ii(t,t=>{const n=t.gc,i=n.length/2;let r;if(i>e){for(r=0;r<i;++r)delete t.data[n[r]];n.splice(0,i)}})}function zc(t){return t.drawTicks?t.tickLength:0}function Wc(t,e){if(!t.display)return 0;const n=ds(t.font,e),i=hs(t.padding),r=Yn(t.text)?t.text.length:1;return r*n.lineHeight+i.height}function Hc(t,e){return Object.assign(Object.create(t),{scale:e,type:"scale"})}function $c(t,e,n){return Object.assign(Object.create(t),{tick:n,index:e,type:"tick"})}function Kc(t,e,n){let i=zn(t);return(n&&"right"!==e||!n&&"right"===e)&&(i=jc(i)),i}function Gc(t,e,n,i){const{top:r,left:s,bottom:o,right:a}=t;let c,l,u,h=0;return t.isHorizontal()?(l=Wn(i,s,a),u=Uc(t,n,e),c=a-s):(l=Uc(t,n,e),u=Wn(i,o,r),h="left"===n?-Ti:Ti),{titleX:l,titleY:u,maxWidth:c,rotation:h}}class Yc extends Sc{constructor(t){super(),this.id=t.id,this.type=t.type,this.options=void 0,this.ctx=t.ctx,this.chart=t.chart,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this._margins={left:0,right:0,top:0,bottom:0},this.maxWidth=void 0,this.maxHeight=void 0,this.paddingTop=void 0,this.paddingBottom=void 0,this.paddingLeft=void 0,this.paddingRight=void 0,this.axis=void 0,this.labelRotation=void 0,this.min=void 0,this.max=void 0,this._range=void 0,this.ticks=[],this._gridLineItems=null,this._labelItems=null,this._labelSizes=null,this._length=0,this._maxLength=0,this._longestTextCache={},this._startPixel=void 0,this._endPixel=void 0,this._reversePixels=!1,this._userMax=void 0,this._userMin=void 0,this._suggestedMax=void 0,this._suggestedMin=void 0,this._ticksLength=0,this._borderValue=0,this._cache={},this._dataLimitsCached=!1,this.$context=void 0}init(t){const e=this;e.options=t.setContext(e.getContext()),e.axis=t.axis,e._userMin=e.parse(t.min),e._userMax=e.parse(t.max),e._suggestedMin=e.parse(t.suggestedMin),e._suggestedMax=e.parse(t.suggestedMax)}parse(t,e){return t}getUserBounds(){let{_userMin:t,_userMax:e,_suggestedMin:n,_suggestedMax:i}=this;return t=Xn(t,Number.POSITIVE_INFINITY),e=Xn(e,Number.NEGATIVE_INFINITY),n=Xn(n,Number.POSITIVE_INFINITY),i=Xn(i,Number.NEGATIVE_INFINITY),{min:Xn(t,n),max:Xn(e,i),minDefined:Jn(t),maxDefined:Jn(e)}}getMinMax(t){const e=this;let n,{min:i,max:r,minDefined:s,maxDefined:o}=e.getUserBounds();if(s&&o)return{min:i,max:r};const a=e.getMatchingVisibleMetas();for(let c=0,l=a.length;c<l;++c)n=a[c].controller.getMinMax(e,t),s||(i=Math.min(i,n.min)),o||(r=Math.max(r,n.max));return{min:Xn(i,Xn(r,i)),max:Xn(r,Xn(i,r))}}getPadding(){const t=this;return{left:t.paddingLeft||0,top:t.paddingTop||0,right:t.paddingRight||0,bottom:t.paddingBottom||0}}getTicks(){return this.ticks}getLabels(){const t=this.chart.data;return this.options.labels||(this.isHorizontal()?t.xLabels:t.yLabels)||t.labels||[]}beforeLayout(){this._cache={},this._dataLimitsCached=!1}beforeUpdate(){ni(this.options.beforeUpdate,[this])}update(t,e,n){const i=this,r=i.options.ticks,s=r.sampleSize;i.beforeUpdate(),i.maxWidth=t,i.maxHeight=e,i._margins=n=Object.assign({left:0,right:0,top:0,bottom:0},n),i.ticks=null,i._labelSizes=null,i._gridLineItems=null,i._labelItems=null,i.beforeSetDimensions(),i.setDimensions(),i.afterSetDimensions(),i._maxLength=i.isHorizontal()?i.width+n.left+n.right:i.height+n.top+n.bottom,i._dataLimitsCached||(i.beforeDataLimits(),i.determineDataLimits(),i.afterDataLimits(),i._range=ps(i,i.options.grace),i._dataLimitsCached=!0),i.beforeBuildTicks(),i.ticks=i.buildTicks()||[],i.afterBuildTicks();const o=s<i.ticks.length;i._convertTicksToLabels(o?Vc(i.ticks,s):i.ticks),i.configure(),i.beforeCalculateLabelRotation(),i.calculateLabelRotation(),i.afterCalculateLabelRotation(),r.display&&(r.autoSkip||"auto"===r.source)&&(i.ticks=Rc(i,i.ticks),i._labelSizes=null),o&&i._convertTicksToLabels(i.ticks),i.beforeFit(),i.fit(),i.afterFit(),i.afterUpdate()}configure(){const t=this;let e,n,i=t.options.reverse;t.isHorizontal()?(e=t.left,n=t.right):(e=t.top,n=t.bottom,i=!i),t._startPixel=e,t._endPixel=n,t._reversePixels=i,t._length=n-e,t._alignToPixels=t.options.alignToPixels}afterUpdate(){ni(this.options.afterUpdate,[this])}beforeSetDimensions(){ni(this.options.beforeSetDimensions,[this])}setDimensions(){const t=this;t.isHorizontal()?(t.width=t.maxWidth,t.left=0,t.right=t.width):(t.height=t.maxHeight,t.top=0,t.bottom=t.height),t.paddingLeft=0,t.paddingTop=0,t.paddingRight=0,t.paddingBottom=0}afterSetDimensions(){ni(this.options.afterSetDimensions,[this])}_callHooks(t){const e=this;e.chart.notifyPlugins(t,e.getContext()),ni(e.options[t],[e])}beforeDataLimits(){this._callHooks("beforeDataLimits")}determineDataLimits(){}afterDataLimits(){this._callHooks("afterDataLimits")}beforeBuildTicks(){this._callHooks("beforeBuildTicks")}buildTicks(){return[]}afterBuildTicks(){this._callHooks("afterBuildTicks")}beforeTickToLabelConversion(){ni(this.options.beforeTickToLabelConversion,[this])}generateTickLabels(t){const e=this,n=e.options.ticks;let i,r,s;for(i=0,r=t.length;i<r;i++)s=t[i],s.label=ni(n.callback,[s.value,i,t],e);for(i=0;i<r;i++)Gn(t[i].label)&&(t.splice(i,1),r--,i--)}afterTickToLabelConversion(){ni(this.options.afterTickToLabelConversion,[this])}beforeCalculateLabelRotation(){ni(this.options.beforeCalculateLabelRotation,[this])}calculateLabelRotation(){const t=this,e=t.options,n=e.ticks,i=t.ticks.length,r=n.minRotation||0,s=n.maxRotation;let o,a,c,l=r;if(!t._isVisible()||!n.display||r>=s||i<=1||!t.isHorizontal())return void(t.labelRotation=r);const u=t._getLabelSizes(),h=u.widest.width,d=u.highest.height,f=zi(t.chart.width-h,0,t.maxWidth);o=e.offset?t.maxWidth/i:f/(i-1),h+6>o&&(o=f/(i-(e.offset?.5:1)),a=t.maxHeight-zc(e.grid)-n.padding-Wc(e.title,t.chart.options.font),c=Math.sqrt(h*h+d*d),l=Li(Math.min(Math.asin(Math.min((u.highest.height+6)/o,1)),Math.asin(Math.min(a/c,1))-Math.asin(d/c))),l=Math.max(r,Math.min(s,l))),t.labelRotation=l}afterCalculateLabelRotation(){ni(this.options.afterCalculateLabelRotation,[this])}beforeFit(){ni(this.options.beforeFit,[this])}fit(){const t=this,e={width:0,height:0},{chart:n,options:{ticks:i,title:r,grid:s}}=t,o=t._isVisible(),a=t.isHorizontal();if(o){const o=Wc(r,n.options.font);if(a?(e.width=t.maxWidth,e.height=zc(s)+o):(e.height=t.maxHeight,e.width=zc(s)+o),i.display&&t.ticks.length){const{first:n,last:r,widest:s,highest:o}=t._getLabelSizes(),c=2*i.padding,l=Mi(t.labelRotation),u=Math.cos(l),h=Math.sin(l);if(a){const n=i.mirror?0:h*s.width+u*o.height;e.height=Math.min(t.maxHeight,e.height+n+c)}else{const n=i.mirror?0:u*s.width+h*o.height;e.width=Math.min(t.maxWidth,e.width+n+c)}t._calculatePadding(n,r,h,u)}}t._handleMargins(),a?(t.width=t._length=n.width-t._margins.left-t._margins.right,t.height=e.height):(t.width=e.width,t.height=t._length=n.height-t._margins.top-t._margins.bottom)}_calculatePadding(t,e,n,i){const r=this,{ticks:{align:s,padding:o},position:a}=r.options,c=0!==r.labelRotation,l="top"!==a&&"x"===r.axis;if(r.isHorizontal()){const a=r.getPixelForTick(0)-r.left,u=r.right-r.getPixelForTick(r.ticks.length-1);let h=0,d=0;c?l?(h=i*t.width,d=n*e.height):(h=n*t.height,d=i*e.width):"start"===s?d=e.width:"end"===s?h=t.width:(h=t.width/2,d=e.width/2),r.paddingLeft=Math.max((h-a+o)*r.width/(r.width-a),0),r.paddingRight=Math.max((d-u+o)*r.width/(r.width-u),0)}else{let n=e.height/2,i=t.height/2;"start"===s?(n=0,i=t.height):"end"===s&&(n=e.height,i=0),r.paddingTop=n+o,r.paddingBottom=i+o}}_handleMargins(){const t=this;t._margins&&(t._margins.left=Math.max(t.paddingLeft,t._margins.left),t._margins.top=Math.max(t.paddingTop,t._margins.top),t._margins.right=Math.max(t.paddingRight,t._margins.right),t._margins.bottom=Math.max(t.paddingBottom,t._margins.bottom))}afterFit(){ni(this.options.afterFit,[this])}isHorizontal(){const{axis:t,position:e}=this.options;return"top"===e||"bottom"===e||"x"===t}isFullSize(){return this.options.fullSize}_convertTicksToLabels(t){const e=this;e.beforeTickToLabelConversion(),e.generateTickLabels(t),e.afterTickToLabelConversion()}_getLabelSizes(){const t=this;let e=t._labelSizes;if(!e){const n=t.options.ticks.sampleSize;let i=t.ticks;n<i.length&&(i=Vc(i,n)),t._labelSizes=e=t._computeLabelSizes(i,i.length)}return e}_computeLabelSizes(t,e){const{ctx:n,_longestTextCache:i}=this,r=[],s=[];let o,a,c,l,u,h,d,f,p,g,m,y=0,b=0;for(o=0;o<e;++o){if(l=t[o].label,u=this._resolveTickFontOptions(o),n.font=h=u.string,d=i[h]=i[h]||{data:{},gc:[]},f=u.lineHeight,p=g=0,Gn(l)||Yn(l)){if(Yn(l))for(a=0,c=l.length;a<c;++a)m=l[a],Gn(m)||Yn(m)||(p=$r(n,d.data,d.gc,p,m),g+=f)}else p=$r(n,d.data,d.gc,p,l),g=f;r.push(p),s.push(g),y=Math.max(p,y),b=Math.max(g,b)}qc(i,e);const v=r.indexOf(y),_=s.indexOf(b),w=t=>({width:r[t]||0,height:s[t]||0});return{first:w(0),last:w(e-1),widest:w(v),highest:w(_),widths:r,heights:s}}getLabelForValue(t){return t}getPixelForValue(t,e){return NaN}getValueForPixel(t){}getPixelForTick(t){const e=this.ticks;return t<0||t>e.length-1?null:this.getPixelForValue(e[t].value)}getPixelForDecimal(t){const e=this;e._reversePixels&&(t=1-t);const n=e._startPixel+t*e._length;return Wi(e._alignToPixels?Gr(e.chart,n,0):n)}getDecimalForPixel(t){const e=(t-this._startPixel)/this._length;return this._reversePixels?1-e:e}getBasePixel(){return this.getPixelForValue(this.getBaseValue())}getBaseValue(){const{min:t,max:e}=this;return t<0&&e<0?e:t>0&&e>0?t:0}getContext(t){const e=this,n=e.ticks||[];if(t>=0&&t<n.length){const i=n[t];return i.$context||(i.$context=$c(e.getContext(),t,i))}return e.$context||(e.$context=Hc(e.chart.getContext(),e))}_tickSize(){const t=this,e=t.options.ticks,n=Mi(t.labelRotation),i=Math.abs(Math.cos(n)),r=Math.abs(Math.sin(n)),s=t._getLabelSizes(),o=e.autoSkipPadding||0,a=s?s.widest.width+o:0,c=s?s.highest.height+o:0;return t.isHorizontal()?c*i>a*r?a/i:c/r:c*r<a*i?c/i:a/r}_isVisible(){const t=this.options.display;return"auto"!==t?!!t:this.getMatchingVisibleMetas().length>0}_computeGridLineItems(t){const e=this,n=e.axis,i=e.chart,r=e.options,{grid:s,position:o}=r,a=s.offset,c=e.isHorizontal(),l=e.ticks,u=l.length+(a?1:0),h=zc(s),d=[],f=s.setContext(e.getContext()),p=f.drawBorder?f.borderWidth:0,g=p/2,m=function(t){return Gr(i,t,p)};let y,b,v,_,w,x,I,T,k,E,S,A;if("top"===o)y=m(e.bottom),x=e.bottom-h,T=y-g,E=m(t.top)+g,A=t.bottom;else if("bottom"===o)y=m(e.top),E=t.top,A=m(t.bottom)-g,x=y+g,T=e.top+h;else if("left"===o)y=m(e.right),w=e.right-h,I=y-g,k=m(t.left)+g,S=t.right;else if("right"===o)y=m(e.left),k=t.left,S=m(t.right)-g,w=y+g,I=e.left+h;else if("x"===n){if("center"===o)y=m((t.top+t.bottom)/2+.5);else if(Qn(o)){const t=Object.keys(o)[0],n=o[t];y=m(e.chart.scales[t].getPixelForValue(n))}E=t.top,A=t.bottom,x=y+g,T=x+h}else if("y"===n){if("center"===o)y=m((t.left+t.right)/2);else if(Qn(o)){const t=Object.keys(o)[0],n=o[t];y=m(e.chart.scales[t].getPixelForValue(n))}w=y-g,I=w-h,k=t.left,S=t.right}for(b=0;b<u;++b){const t=s.setContext(e.getContext(b)),n=t.lineWidth,r=t.color,o=s.borderDash||[],l=t.borderDashOffset,u=t.tickWidth,h=t.tickColor,f=t.tickBorderDash||[],p=t.tickBorderDashOffset;v=Bc(e,b,a),void 0!==v&&(_=Gr(i,v,n),c?w=I=k=S=_:x=T=E=A=_,d.push({tx1:w,ty1:x,tx2:I,ty2:T,x1:k,y1:E,x2:S,y2:A,width:n,color:r,borderDash:o,borderDashOffset:l,tickWidth:u,tickColor:h,tickBorderDash:f,tickBorderDashOffset:p}))}return e._ticksLength=u,e._borderValue=y,d}_computeLabelItems(t){const e=this,n=e.axis,i=e.options,{position:r,ticks:s}=i,o=e.isHorizontal(),a=e.ticks,{align:c,crossAlign:l,padding:u,mirror:h}=s,d=zc(i.grid),f=d+u,p=h?-u:f,g=-Mi(e.labelRotation),m=[];let y,b,v,_,w,x,I,T,k,E,S,A,O="middle";if("top"===r)x=e.bottom-p,I=e._getXAxisLabelAlignment();else if("bottom"===r)x=e.top+p,I=e._getXAxisLabelAlignment();else if("left"===r){const t=e._getYAxisLabelAlignment(d);I=t.textAlign,w=t.x}else if("right"===r){const t=e._getYAxisLabelAlignment(d);I=t.textAlign,w=t.x}else if("x"===n){if("center"===r)x=(t.top+t.bottom)/2+f;else if(Qn(r)){const t=Object.keys(r)[0],n=r[t];x=e.chart.scales[t].getPixelForValue(n)+f}I=e._getXAxisLabelAlignment()}else if("y"===n){if("center"===r)w=(t.left+t.right)/2-f;else if(Qn(r)){const t=Object.keys(r)[0],n=r[t];w=e.chart.scales[t].getPixelForValue(n)}I=e._getYAxisLabelAlignment(d).textAlign}"y"===n&&("start"===c?O="top":"end"===c&&(O="bottom"));const C=e._getLabelSizes();for(y=0,b=a.length;y<b;++y){v=a[y],_=v.label;const t=s.setContext(e.getContext(y));T=e.getPixelForTick(y)+s.labelOffset,k=e._resolveTickFontOptions(y),E=k.lineHeight,S=Yn(_)?_.length:1;const n=S/2,i=t.color,c=t.textStrokeColor,u=t.textStrokeWidth;let d;if(o?(w=T,A="top"===r?"near"===l||0!==g?-S*E+E/2:"center"===l?-C.highest.height/2-n*E+E:-C.highest.height+E/2:"near"===l||0!==g?E/2:"center"===l?C.highest.height/2-n*E:C.highest.height-S*E,h&&(A*=-1)):(x=T,A=(1-S)*E/2),t.showLabelBackdrop){const e=hs(t.backdropPadding),n=C.heights[y],i=C.widths[y];let r=x+A-e.top,s=w-e.left;switch(O){case"middle":r-=n/2;break;case"bottom":r-=n;break}switch(I){case"center":s-=i/2;break;case"right":s-=i;break}d={left:s,top:r,width:i+e.width,height:n+e.height,color:t.backdropColor}}m.push({rotation:g,label:_,font:k,color:i,strokeColor:c,strokeWidth:u,textOffset:A,textAlign:I,textBaseline:O,translation:[w,x],backdrop:d})}return m}_getXAxisLabelAlignment(){const t=this,{position:e,ticks:n}=t.options,i=-Mi(t.labelRotation);if(i)return"top"===e?"left":"right";let r="center";return"start"===n.align?r="left":"end"===n.align&&(r="right"),r}_getYAxisLabelAlignment(t){const e=this,{position:n,ticks:{crossAlign:i,mirror:r,padding:s}}=e.options,o=e._getLabelSizes(),a=t+s,c=o.widest.width;let l,u;return"left"===n?r?(l="left",u=e.right+s):(u=e.right-a,"near"===i?l="right":"center"===i?(l="center",u-=c/2):(l="left",u=e.left)):"right"===n?r?(l="right",u=e.left+s):(u=e.left+a,"near"===i?l="left":"center"===i?(l="center",u+=c/2):(l="right",u=e.right)):l="right",{textAlign:l,x:u}}_computeLabelArea(){const t=this;if(t.options.ticks.mirror)return;const e=t.chart,n=t.options.position;return"left"===n||"right"===n?{top:0,left:t.left,bottom:e.height,right:t.right}:"top"===n||"bottom"===n?{top:t.top,left:0,bottom:t.bottom,right:e.width}:void 0}drawBackground(){const{ctx:t,options:{backgroundColor:e},left:n,top:i,width:r,height:s}=this;e&&(t.save(),t.fillStyle=e,t.fillRect(n,i,r,s),t.restore())}getLineWidthForValue(t){const e=this,n=e.options.grid;if(!e._isVisible()||!n.display)return 0;const i=e.ticks,r=i.findIndex(e=>e.value===t);if(r>=0){const t=n.setContext(e.getContext(r));return t.lineWidth}return 0}drawGrid(t){const e=this,n=e.options.grid,i=e.ctx,r=e._gridLineItems||(e._gridLineItems=e._computeGridLineItems(t));let s,o;const a=(t,e,n)=>{n.width&&n.color&&(i.save(),i.lineWidth=n.width,i.strokeStyle=n.color,i.setLineDash(n.borderDash||[]),i.lineDashOffset=n.borderDashOffset,i.beginPath(),i.moveTo(t.x,t.y),i.lineTo(e.x,e.y),i.stroke(),i.restore())};if(n.display)for(s=0,o=r.length;s<o;++s){const t=r[s];n.drawOnChartArea&&a({x:t.x1,y:t.y1},{x:t.x2,y:t.y2},t),n.drawTicks&&a({x:t.tx1,y:t.ty1},{x:t.tx2,y:t.ty2},{color:t.tickColor,width:t.tickWidth,borderDash:t.tickBorderDash,borderDashOffset:t.tickBorderDashOffset})}}drawBorder(){const t=this,{chart:e,ctx:n,options:{grid:i}}=t,r=i.setContext(t.getContext()),s=i.drawBorder?r.borderWidth:0;if(!s)return;const o=i.setContext(t.getContext(0)).lineWidth,a=t._borderValue;let c,l,u,h;t.isHorizontal()?(c=Gr(e,t.left,s)-s/2,l=Gr(e,t.right,o)+o/2,u=h=a):(u=Gr(e,t.top,s)-s/2,h=Gr(e,t.bottom,o)+o/2,c=l=a),n.save(),n.lineWidth=r.borderWidth,n.strokeStyle=r.borderColor,n.beginPath(),n.moveTo(c,u),n.lineTo(l,h),n.stroke(),n.restore()}drawLabels(t){const e=this,n=e.options.ticks;if(!n.display)return;const i=e.ctx,r=e._computeLabelArea();r&&Xr(i,r);const s=e._labelItems||(e._labelItems=e._computeLabelItems(t));let o,a;for(o=0,a=s.length;o<a;++o){const t=s[o],e=t.font,n=t.label;t.backdrop&&(i.fillStyle=t.backdrop.color,i.fillRect(t.backdrop.left,t.backdrop.top,t.backdrop.width,t.backdrop.height));let r=t.textOffset;ns(i,n,0,r,e,t)}r&&Zr(i)}drawTitle(){const{ctx:t,options:{position:e,title:n,reverse:i}}=this;if(!n.display)return;const r=ds(n.font),s=hs(n.padding),o=n.align;let a=r.lineHeight/2;"bottom"===e?(a+=s.bottom,Yn(n.text)&&(a+=r.lineHeight*(n.text.length-1))):a+=s.top;const{titleX:c,titleY:l,maxWidth:u,rotation:h}=Gc(this,a,e,o);ns(t,n.text,0,0,r,{color:n.color,maxWidth:u,rotation:h,textAlign:Kc(o,e,i),textBaseline:"middle",translation:[c,l]})}draw(t){const e=this;e._isVisible()&&(e.drawBackground(),e.drawGrid(t),e.drawBorder(),e.drawTitle(),e.drawLabels(t))}_layers(){const t=this,e=t.options,n=e.ticks&&e.ticks.z||0,i=e.grid&&e.grid.z||0;return t._isVisible()&&t.draw===Yc.prototype.draw?[{z:i,draw(e){t.drawBackground(),t.drawGrid(e),t.drawTitle()}},{z:i+1,draw(){t.drawBorder()}},{z:n,draw(e){t.drawLabels(e)}}]:[{z:n,draw(e){t.draw(e)}}]}getMatchingVisibleMetas(t){const e=this,n=e.chart.getSortedVisibleDatasetMetas(),i=e.axis+"AxisID",r=[];let s,o;for(s=0,o=n.length;s<o;++s){const o=n[s];o[i]!==e.id||t&&o.type!==t||r.push(o)}return r}_resolveTickFontOptions(t){const e=this.options.ticks.setContext(this.getContext(t));return ds(e.font)}_maxDigits(){const t=this,e=t._resolveTickFontOptions(0).lineHeight;return(t.isHorizontal()?t.width:t.height)/e}}class Qc{constructor(t,e,n){this.type=t,this.scope=e,this.override=n,this.items=Object.create(null)}isForType(t){return Object.prototype.isPrototypeOf.call(this.type.prototype,t.prototype)}register(t){const e=this,n=Object.getPrototypeOf(t);let i;Zc(n)&&(i=e.register(n));const r=e.items,s=t.id,o=e.scope+"."+s;if(!s)throw new Error("class does not have id: "+t);return s in r||(r[s]=t,Jc(t,o,i),e.override&&Wr.override(t.id,t.overrides)),o}get(t){return this.items[t]}unregister(t){const e=this.items,n=t.id,i=this.scope;n in e&&delete e[n],i&&n in Wr[i]&&(delete Wr[i][n],this.override&&delete Ur[n])}}function Jc(t,e,n){const i=ci(Object.create(null),[n?Wr.get(n):{},Wr.get(e),t.defaults]);Wr.set(e,i),t.defaultRoutes&&Xc(e,t.defaultRoutes),t.descriptors&&Wr.describe(e,t.descriptors)}function Xc(t,e){Object.keys(e).forEach(n=>{const i=n.split("."),r=i.pop(),s=[t].concat(i).join("."),o=e[n].split("."),a=o.pop(),c=o.join(".");Wr.route(s,r,c,a)})}function Zc(t){return"id"in t&&"defaults"in t}class tl{constructor(){this.controllers=new Qc(da,"datasets",!0),this.elements=new Qc(Sc,"elements"),this.plugins=new Qc(Object,"plugins"),this.scales=new Qc(Yc,"scales"),this._typedRegistries=[this.controllers,this.scales,this.elements]}add(...t){this._each("register",t)}remove(...t){this._each("unregister",t)}addControllers(...t){this._each("register",t,this.controllers)}addElements(...t){this._each("register",t,this.elements)}addPlugins(...t){this._each("register",t,this.plugins)}addScales(...t){this._each("register",t,this.scales)}getController(t){return this._get(t,this.controllers,"controller")}getElement(t){return this._get(t,this.elements,"element")}getPlugin(t){return this._get(t,this.plugins,"plugin")}getScale(t){return this._get(t,this.scales,"scale")}removeControllers(...t){this._each("unregister",t,this.controllers)}removeElements(...t){this._each("unregister",t,this.elements)}removePlugins(...t){this._each("unregister",t,this.plugins)}removeScales(...t){this._each("unregister",t,this.scales)}_each(t,e,n){const i=this;[...e].forEach(e=>{const r=n||i._getRegistryForType(e);n||r.isForType(e)||r===i.plugins&&e.id?i._exec(t,r,e):ii(e,e=>{const r=n||i._getRegistryForType(e);i._exec(t,r,e)})})}_exec(t,e,n){const i=gi(t);ni(n["before"+i],[],n),e[t](n),ni(n["after"+i],[],n)}_getRegistryForType(t){for(let e=0;e<this._typedRegistries.length;e++){const n=this._typedRegistries[e];if(n.isForType(t))return n}return this.plugins}_get(t,e,n){const i=e.get(t);if(void 0===i)throw new Error('"'+t+'" is not a registered '+n+".");return i}}var el=new tl;class nl{constructor(){this._init=[]}notify(t,e,n,i){const r=this;"beforeInit"===e&&(r._init=r._createDescriptors(t,!0),r._notify(r._init,t,"install"));const s=i?r._descriptors(t).filter(i):r._descriptors(t),o=r._notify(s,t,e,n);return"destroy"===e&&(r._notify(s,t,"stop"),r._notify(r._init,t,"uninstall")),o}_notify(t,e,n,i){i=i||{};for(const r of t){const t=r.plugin,s=t[n],o=[e,i,r.options];if(!1===ni(s,o,t)&&i.cancelable)return!1}return!0}invalidate(){Gn(this._cache)||(this._oldCache=this._cache,this._cache=void 0)}_descriptors(t){if(this._cache)return this._cache;const e=this._cache=this._createDescriptors(t);return this._notifyStateChanges(t),e}_createDescriptors(t,e){const n=t&&t.config,i=Zn(n.options&&n.options.plugins,{}),r=il(n);return!1!==i||e?sl(t,r,i,e):[]}_notifyStateChanges(t){const e=this._oldCache||[],n=this._cache,i=(t,e)=>t.filter(t=>!e.some(e=>t.plugin.id===e.plugin.id));this._notify(i(e,n),t,"stop"),this._notify(i(n,e),t,"start")}}function il(t){const e=[],n=Object.keys(el.plugins.items);for(let r=0;r<n.length;r++)e.push(el.getPlugin(n[r]));const i=t.plugins||[];for(let r=0;r<i.length;r++){const t=i[r];-1===e.indexOf(t)&&e.push(t)}return e}function rl(t,e){return e||!1!==t?!0===t?{}:t:null}function sl(t,e,n,i){const r=[],s=t.getContext();for(let o=0;o<e.length;o++){const a=e[o],c=a.id,l=rl(n[c],i);null!==l&&r.push({plugin:a,options:ol(t.config,a,l,s)})}return r}function ol(t,e,n,i){const r=t.pluginScopeKeys(e),s=t.getOptionScopes(n,r);return t.createResolver(s,i,[""],{scriptable:!1,indexable:!1,allKeys:!0})}function al(t,e){const n=Wr.datasets[t]||{},i=(e.datasets||{})[t]||{};return i.indexAxis||e.indexAxis||n.indexAxis||"x"}function cl(t,e){let n=t;return"_index_"===t?n=e:"_value_"===t&&(n="x"===e?"y":"x"),n}function ll(t,e){return t===e?"_index_":"_value_"}function ul(t){return"top"===t||"bottom"===t?"x":"left"===t||"right"===t?"y":void 0}function hl(t,e){return"x"===t||"y"===t?t:e.axis||ul(e.position)||t.charAt(0).toLowerCase()}function dl(t,e){const n=Ur[t.type]||{scales:{}},i=e.scales||{},r=al(t.type,e),s=Object.create(null),o=Object.create(null);return Object.keys(i).forEach(t=>{const e=i[t],a=hl(t,e),c=ll(a,r),l=n.scales||{};s[a]=s[a]||t,o[t]=li(Object.create(null),[{axis:a},e,l[a],l[c]])}),t.data.datasets.forEach(n=>{const r=n.type||t.type,a=n.indexAxis||al(r,e),c=Ur[r]||{},l=c.scales||{};Object.keys(l).forEach(t=>{const e=cl(t,a),r=n[e+"AxisID"]||s[e]||e;o[r]=o[r]||Object.create(null),li(o[r],[{axis:e},i[r],l[t]])})}),Object.keys(o).forEach(t=>{const e=o[t];li(e,[Wr.scales[e.type],Wr.scale])}),o}function fl(t){const e=t.options||(t.options={});e.plugins=Zn(e.plugins,{}),e.scales=dl(t,e)}function pl(t){return t=t||{},t.datasets=t.datasets||[],t.labels=t.labels||[],t}function gl(t){return t=t||{},t.data=pl(t.data),fl(t),t}const ml=new Map,yl=new Set;function bl(t,e){let n=ml.get(t);return n||(n=e(),ml.set(t,n),yl.add(n)),n}const vl=(t,e,n)=>{const i=pi(e,n);void 0!==i&&t.add(i)};class _l{constructor(t){this._config=gl(t),this._scopeCache=new Map,this._resolverCache=new Map}get type(){return this._config.type}set type(t){this._config.type=t}get data(){return this._config.data}set data(t){this._config.data=pl(t)}get options(){return this._config.options}set options(t){this._config.options=t}get plugins(){return this._config.plugins}update(){const t=this._config;this.clearCache(),fl(t)}clearCache(){this._scopeCache.clear(),this._resolverCache.clear()}datasetScopeKeys(t){return bl(t,()=>[["datasets."+t,""]])}datasetAnimationScopeKeys(t,e){return bl(`${t}.transition.${e}`,()=>[[`datasets.${t}.transitions.${e}`,"transitions."+e],["datasets."+t,""]])}datasetElementScopeKeys(t,e){return bl(`${t}-${e}`,()=>[[`datasets.${t}.elements.${e}`,"datasets."+t,"elements."+e,""]])}pluginScopeKeys(t){const e=t.id,n=this.type;return bl(`${n}-plugin-${e}`,()=>[["plugins."+e,...t.additionalOptionScopes||[]]])}_cachedScopes(t,e){const n=this._scopeCache;let i=n.get(t);return i&&!e||(i=new Map,n.set(t,i)),i}getOptionScopes(t,e,n){const{options:i,type:r}=this,s=this._cachedScopes(t,n),o=s.get(e);if(o)return o;const a=new Set;e.forEach(e=>{t&&(a.add(t),e.forEach(e=>vl(a,t,e))),e.forEach(t=>vl(a,i,t)),e.forEach(t=>vl(a,Ur[r]||{},t)),e.forEach(t=>vl(a,Wr,t)),e.forEach(t=>vl(a,Vr,t))});const c=[...a];return yl.has(e)&&s.set(e,c),c}chartOptionScopes(){const{options:t,type:e}=this;return[t,Ur[e]||{},Wr.datasets[e]||{},{type:e},Wr,Vr]}resolveNamedOptions(t,e,n,i=[""]){const r={$shared:!0},{resolver:s,subPrefixes:o}=wl(this._resolverCache,t,i);let a=s;if(xl(s,e)){r.$shared=!1,n=yi(n)?n():n;const e=this.createResolver(t,n,o);a=Ts(s,n,e)}for(const c of e)r[c]=a[c];return r}createResolver(t,e,n=[""],i){const{resolver:r}=wl(this._resolverCache,t,n);return Qn(e)?Ts(r,e,void 0,i):r}}function wl(t,e,n){let i=t.get(e);i||(i=new Map,t.set(e,i));const r=n.join();let s=i.get(r);if(!s){const t=Is(e,n);s={resolver:t,subPrefixes:n.filter(t=>!t.toLowerCase().includes("hover"))},i.set(r,s)}return s}function xl(t,e){const{isScriptable:n,isIndexable:i}=ks(t);for(const r of e)if(n(r)&&yi(t[r])||i(r)&&Yn(t[r]))return!0;return!1}var Il="3.3.2";const Tl=["top","bottom","left","right","chartArea"];function kl(t,e){return"top"===t||"bottom"===t||-1===Tl.indexOf(t)&&"x"===e}function El(t,e){return function(n,i){return n[t]===i[t]?n[e]-i[e]:n[t]-i[t]}}function Sl(t){const e=t.chart,n=e.options.animation;e.notifyPlugins("afterRender"),ni(n&&n.onComplete,[t],e)}function Al(t){const e=t.chart,n=e.options.animation;ni(n&&n.onProgress,[t],e)}function Ol(){return"undefined"!==typeof window&&"undefined"!==typeof document}function Cl(t){return Ol()&&"string"===typeof t?t=document.getElementById(t):t&&t.length&&(t=t[0]),t&&t.canvas&&(t=t.canvas),t}const Rl={},Dl=t=>{const e=Cl(t);return Object.values(Rl).filter(t=>t.canvas===e).pop()};class Nl{constructor(t,e){const n=this;this.config=e=new _l(e);const i=Cl(t),r=Dl(i);if(r)throw new Error("Canvas is already in use. Chart with ID '"+r.id+"' must be destroyed before the canvas can be reused.");const s=e.createResolver(e.chartOptionScopes(),n.getContext());this.platform=n._initializePlatform(i,e);const o=n.platform.acquireContext(i,s.aspectRatio),a=o&&o.canvas,c=a&&a.height,l=a&&a.width;this.id=Kn(),this.ctx=o,this.canvas=a,this.width=l,this.height=c,this._options=s,this._aspectRatio=this.aspectRatio,this._layers=[],this._metasets=[],this._stacks=void 0,this.boxes=[],this.currentDevicePixelRatio=void 0,this.chartArea=void 0,this._active=[],this._lastEvent=void 0,this._listeners={},this._responsiveListeners=void 0,this._sortedMetasets=[],this.scales={},this.scale=void 0,this._plugins=new nl,this.$proxies={},this._hiddenIndices={},this.attached=!1,this._animationsDisabled=void 0,this.$context=void 0,this._doResize=qn(()=>this.update("resize"),s.resizeDelay||0),Rl[n.id]=n,o&&a?(jo.listen(n,"complete",Sl),jo.listen(n,"progress",Al),n._initialize(),n.attached&&n.update()):console.error("Failed to create chart: can't acquire context from the given item")}get aspectRatio(){const{options:{aspectRatio:t,maintainAspectRatio:e},width:n,height:i,_aspectRatio:r}=this;return Gn(t)?e&&r?r:i?n/i:null:t}get data(){return this.config.data}set data(t){this.config.data=t}get options(){return this._options}set options(t){this.config.options=t}_initialize(){const t=this;return t.notifyPlugins("beforeInit"),t.options.responsive?t.resize():uo(t,t.options.devicePixelRatio),t.bindEvents(),t.notifyPlugins("afterInit"),t}_initializePlatform(t,e){return e.platform?new e.platform:!Ol()||"undefined"!==typeof OffscreenCanvas&&t instanceof OffscreenCanvas?new ac:new Ec}clear(){return Yr(this.canvas,this.ctx),this}stop(){return jo.stop(this),this}resize(t,e){jo.running(this)?this._resizeBeforeDraw={width:t,height:e}:this._resize(t,e)}_resize(t,e){const n=this,i=n.options,r=n.canvas,s=i.maintainAspectRatio&&n.aspectRatio,o=n.platform.getMaximumSize(r,t,e,s),a=i.devicePixelRatio||n.platform.getDevicePixelRatio();n.width=o.width,n.height=o.height,n._aspectRatio=n.aspectRatio,uo(n,a,!0)&&(n.notifyPlugins("resize",{size:o}),ni(i.onResize,[n,o],n),n.attached&&n._doResize()&&n.render())}ensureScalesHaveIDs(){const t=this.options,e=t.scales||{};ii(e,(t,e)=>{t.id=e})}buildOrUpdateScales(){const t=this,e=t.options,n=e.scales,i=t.scales,r=Object.keys(i).reduce((t,e)=>(t[e]=!1,t),{});let s=[];n&&(s=s.concat(Object.keys(n).map(t=>{const e=n[t],i=hl(t,e),r="r"===i,s="x"===i;return{options:e,dposition:r?"chartArea":s?"bottom":"left",dtype:r?"radialLinear":s?"category":"linear"}}))),ii(s,n=>{const s=n.options,o=s.id,a=hl(o,s),c=Zn(s.type,n.dtype);void 0!==s.position&&kl(s.position,a)===kl(n.dposition)||(s.position=n.dposition),r[o]=!0;let l=null;if(o in i&&i[o].type===c)l=i[o];else{const e=el.getScale(c);l=new e({id:o,type:c,ctx:t.ctx,chart:t}),i[l.id]=l}l.init(s,e)}),ii(r,(t,e)=>{t||delete i[e]}),ii(i,e=>{sc.configure(t,e,e.options),sc.addBox(t,e)})}_updateMetasets(){const t=this,e=t._metasets,n=t.data.datasets.length,i=e.length;if(e.sort((t,e)=>t.index-e.index),i>n){for(let e=n;e<i;++e)t._destroyDatasetMeta(e);e.splice(n,i-n)}t._sortedMetasets=e.slice(0).sort(El("order","index"))}_removeUnreferencedMetasets(){const t=this,{_metasets:e,data:{datasets:n}}=t;e.length>n.length&&delete t._stacks,e.forEach((e,i)=>{0===n.filter(t=>t===e._dataset).length&&t._destroyDatasetMeta(i)})}buildOrUpdateControllers(){const t=this,e=[],n=t.data.datasets;let i,r;for(t._removeUnreferencedMetasets(),i=0,r=n.length;i<r;i++){const r=n[i];let s=t.getDatasetMeta(i);const o=r.type||t.config.type;if(s.type&&s.type!==o&&(t._destroyDatasetMeta(i),s=t.getDatasetMeta(i)),s.type=o,s.indexAxis=r.indexAxis||al(o,t.options),s.order=r.order||0,s.index=i,s.label=""+r.label,s.visible=t.isDatasetVisible(i),s.controller)s.controller.updateIndex(i),s.controller.linkScales();else{const n=el.getController(o),{datasetElementType:r,dataElementType:a}=Wr.datasets[o];Object.assign(n.prototype,{dataElementType:el.getElement(a),datasetElementType:r&&el.getElement(r)}),s.controller=new n(t,i),e.push(s.controller)}}return t._updateMetasets(),e}_resetElements(){const t=this;ii(t.data.datasets,(e,n)=>{t.getDatasetMeta(n).controller.reset()},t)}reset(){this._resetElements(),this.notifyPlugins("reset")}update(t){const e=this,n=e.config;n.update(),e._options=n.createResolver(n.chartOptionScopes(),e.getContext()),ii(e.scales,t=>{sc.removeBox(e,t)});const i=e._animationsDisabled=!e.options.animation;e.ensureScalesHaveIDs(),e.buildOrUpdateScales();const r=new Set(Object.keys(e._listeners)),s=new Set(e.options.events);if(bi(r,s)&&!!this._responsiveListeners===e.options.responsive||(e.unbindEvents(),e.bindEvents()),e._plugins.invalidate(),!1===e.notifyPlugins("beforeUpdate",{mode:t,cancelable:!0}))return;const o=e.buildOrUpdateControllers();e.notifyPlugins("beforeElementsUpdate");let a=0;for(let c=0,l=e.data.datasets.length;c<l;c++){const{controller:t}=e.getDatasetMeta(c),n=!i&&-1===o.indexOf(t);t.buildOrUpdateElements(n),a=Math.max(+t.getMaxOverflow(),a)}e._minPadding=a,e._updateLayout(a),i||ii(o,t=>{t.reset()}),e._updateDatasets(t),e.notifyPlugins("afterUpdate",{mode:t}),e._layers.sort(El("z","_idx")),e._lastEvent&&e._eventHandler(e._lastEvent,!0),e.render()}_updateLayout(t){const e=this;if(!1===e.notifyPlugins("beforeLayout",{cancelable:!0}))return;sc.update(e,e.width,e.height,t);const n=e.chartArea,i=n.width<=0||n.height<=0;e._layers=[],ii(e.boxes,t=>{i&&"chartArea"===t.position||(t.configure&&t.configure(),e._layers.push(...t._layers()))},e),e._layers.forEach((t,e)=>{t._idx=e}),e.notifyPlugins("afterLayout")}_updateDatasets(t){const e=this,n="function"===typeof t;if(!1!==e.notifyPlugins("beforeDatasetsUpdate",{mode:t,cancelable:!0})){for(let i=0,r=e.data.datasets.length;i<r;++i)e._updateDataset(i,n?t({datasetIndex:i}):t);e.notifyPlugins("afterDatasetsUpdate",{mode:t})}}_updateDataset(t,e){const n=this,i=n.getDatasetMeta(t),r={meta:i,index:t,mode:e,cancelable:!0};!1!==n.notifyPlugins("beforeDatasetUpdate",r)&&(i.controller._update(e),r.cancelable=!1,n.notifyPlugins("afterDatasetUpdate",r))}render(){const t=this;!1!==t.notifyPlugins("beforeRender",{cancelable:!0})&&(jo.has(t)?t.attached&&!jo.running(t)&&jo.start(t):(t.draw(),Sl({chart:t})))}draw(){const t=this;let e;if(t._resizeBeforeDraw){const{width:e,height:n}=t._resizeBeforeDraw;t._resize(e,n),t._resizeBeforeDraw=null}if(t.clear(),t.width<=0||t.height<=0)return;if(!1===t.notifyPlugins("beforeDraw",{cancelable:!0}))return;const n=t._layers;for(e=0;e<n.length&&n[e].z<=0;++e)n[e].draw(t.chartArea);for(t._drawDatasets();e<n.length;++e)n[e].draw(t.chartArea);t.notifyPlugins("afterDraw")}_getSortedDatasetMetas(t){const e=this,n=e._sortedMetasets,i=[];let r,s;for(r=0,s=n.length;r<s;++r){const e=n[r];t&&!e.visible||i.push(e)}return i}getSortedVisibleDatasetMetas(){return this._getSortedDatasetMetas(!0)}_drawDatasets(){const t=this;if(!1===t.notifyPlugins("beforeDatasetsDraw",{cancelable:!0}))return;const e=t.getSortedVisibleDatasetMetas();for(let n=e.length-1;n>=0;--n)t._drawDataset(e[n]);t.notifyPlugins("afterDatasetsDraw")}_drawDataset(t){const e=this,n=e.ctx,i=t._clip,r=e.chartArea,s={meta:t,index:t.index,cancelable:!0};!1!==e.notifyPlugins("beforeDatasetDraw",s)&&(Xr(n,{left:!1===i.left?0:r.left-i.left,right:!1===i.right?e.width:r.right+i.right,top:!1===i.top?0:r.top-i.top,bottom:!1===i.bottom?e.height:r.bottom+i.bottom}),t.controller.draw(),Zr(n),s.cancelable=!1,e.notifyPlugins("afterDatasetDraw",s))}getElementsAtEventForMode(t,e,n,i){const r=Wa.modes[e];return"function"===typeof r?r(this,t,n,i):[]}getDatasetMeta(t){const e=this,n=e.data.datasets[t],i=e._metasets;let r=i.filter(t=>t&&t._dataset===n).pop();return r||(r={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null,order:n&&n.order||0,index:t,_dataset:n,_parsed:[],_sorted:!1},i.push(r)),r}getContext(){return this.$context||(this.$context={chart:this,type:"chart"})}getVisibleDatasetCount(){return this.getSortedVisibleDatasetMetas().length}isDatasetVisible(t){const e=this.data.datasets[t];if(!e)return!1;const n=this.getDatasetMeta(t);return"boolean"===typeof n.hidden?!n.hidden:!e.hidden}setDatasetVisibility(t,e){const n=this.getDatasetMeta(t);n.hidden=!e}toggleDataVisibility(t){this._hiddenIndices[t]=!this._hiddenIndices[t]}getDataVisibility(t){return!this._hiddenIndices[t]}_updateDatasetVisibility(t,e){const n=this,i=e?"show":"hide",r=n.getDatasetMeta(t),s=r.controller._resolveAnimations(void 0,i);n.setDatasetVisibility(t,e),s.update(r,{visible:e}),n.update(e=>e.datasetIndex===t?i:void 0)}hide(t){this._updateDatasetVisibility(t,!1)}show(t){this._updateDatasetVisibility(t,!0)}_destroyDatasetMeta(t){const e=this,n=e._metasets&&e._metasets[t];n&&n.controller&&(n.controller._destroy(),delete e._metasets[t])}destroy(){const t=this,{canvas:e,ctx:n}=t;let i,r;for(t.stop(),jo.remove(t),i=0,r=t.data.datasets.length;i<r;++i)t._destroyDatasetMeta(i);t.config.clearCache(),e&&(t.unbindEvents(),Yr(e,n),t.platform.releaseContext(n),t.canvas=null,t.ctx=null),t.notifyPlugins("destroy"),delete Rl[t.id]}toBase64Image(...t){return this.canvas.toDataURL(...t)}bindEvents(){this.bindUserEvents(),this.options.responsive?this.bindResponsiveEvents():this.attached=!0}bindUserEvents(){const t=this,e=t._listeners,n=t.platform,i=(i,r)=>{n.addEventListener(t,i,r),e[i]=r},r=function(e,n,i){e.offsetX=n,e.offsetY=i,t._eventHandler(e)};ii(t.options.events,t=>i(t,r))}bindResponsiveEvents(){const t=this;t._responsiveListeners||(t._responsiveListeners={});const e=t._responsiveListeners,n=t.platform,i=(i,r)=>{n.addEventListener(t,i,r),e[i]=r},r=(i,r)=>{e[i]&&(n.removeEventListener(t,i,r),delete e[i])},s=(e,n)=>{t.canvas&&t.resize(e,n)};let o;const a=()=>{r("attach",a),t.attached=!0,t.resize(),i("resize",s),i("detach",o)};o=()=>{t.attached=!1,r("resize",s),i("attach",a)},n.isAttached(t.canvas)?a():o()}unbindEvents(){const t=this;ii(t._listeners,(e,n)=>{t.platform.removeEventListener(t,n,e)}),t._listeners={},ii(t._responsiveListeners,(e,n)=>{t.platform.removeEventListener(t,n,e)}),t._responsiveListeners=void 0}updateHoverStyle(t,e,n){const i=n?"set":"remove";let r,s,o,a;for("dataset"===e&&(r=this.getDatasetMeta(t[0].datasetIndex),r.controller["_"+i+"DatasetHoverStyle"]()),o=0,a=t.length;o<a;++o){s=t[o];const e=s&&this.getDatasetMeta(s.datasetIndex).controller;e&&e[i+"HoverStyle"](s.element,s.datasetIndex,s.index)}}getActiveElements(){return this._active||[]}setActiveElements(t){const e=this,n=e._active||[],i=t.map(({datasetIndex:t,index:n})=>{const i=e.getDatasetMeta(t);if(!i)throw new Error("No dataset found at index "+t);return{datasetIndex:t,element:i.data[n],index:n}}),r=!ri(i,n);r&&(e._active=i,e._updateHoverStyles(i,n))}notifyPlugins(t,e,n){return this._plugins.notify(this,t,e,n)}_updateHoverStyles(t,e,n){const i=this,r=i.options.hover,s=(t,e)=>t.filter(t=>!e.some(e=>t.datasetIndex===e.datasetIndex&&t.index===e.index)),o=s(e,t),a=n?t:s(t,e);o.length&&i.updateHoverStyle(o,r.mode,!1),a.length&&r.mode&&i.updateHoverStyle(a,r.mode,!0)}_eventHandler(t,e){const n=this,i={event:t,replay:e,cancelable:!0},r=e=>(e.options.events||this.options.events).includes(t.type);if(!1===n.notifyPlugins("beforeEvent",i,r))return;const s=n._handleEvent(t,e);return i.cancelable=!1,n.notifyPlugins("afterEvent",i,r),(s||i.changed)&&n.render(),n}_handleEvent(t,e){const n=this,{_active:i=[],options:r}=n,s=r.hover,o=e;let a=[],c=!1,l=null;return"mouseout"!==t.type&&(a=n.getElementsAtEventForMode(t,s.mode,s,o),l="click"===t.type?n._lastEvent:t),n._lastEvent=null,Jr(t,n.chartArea,n._minPadding)&&(ni(r.onHover,[t,a,n],n),"mouseup"!==t.type&&"click"!==t.type&&"contextmenu"!==t.type||ni(r.onClick,[t,a,n],n)),c=!ri(a,i),(c||e)&&(n._active=a,n._updateHoverStyles(a,i,e)),n._lastEvent=l,c}}const Pl=()=>ii(Nl.instances,t=>t._plugins.invalidate()),Ml=!0;function Ll(t,e,n){const{startAngle:i,pixelMargin:r,x:s,y:o,outerRadius:a,innerRadius:c}=e;let l=r/a;t.beginPath(),t.arc(s,o,a,i-l,n+l),c>r?(l=r/c,t.arc(s,o,c,n+l,i-l,!0)):t.arc(s,o,r,n+Ti,i-Ti),t.closePath(),t.clip()}function Fl(t){return cs(t,["outerStart","outerEnd","innerStart","innerEnd"])}function jl(t,e,n,i){const r=Fl(t.options.borderRadius),s=(n-e)/2,o=Math.min(s,i*e/2),a=t=>{const e=(n-Math.min(s,t))*i/2;return zi(t,0,Math.min(s,e))};return{outerStart:a(r.outerStart),outerEnd:a(r.outerEnd),innerStart:zi(r.innerStart,0,o),innerEnd:zi(r.innerEnd,0,o)}}function Ul(t,e,n,i){return{x:n+t*Math.cos(e),y:i+t*Math.sin(e)}}function Vl(t,e,n,i){const{x:r,y:s,startAngle:o,pixelMargin:a,innerRadius:c}=e,l=Math.max(e.outerRadius+n-a,0),u=c>0?c+n+a:0,h=i-o,d=Math.max(.001,h*l-n/vi)/l,f=(h-d)/2,p=o+f,g=i-f,{outerStart:m,outerEnd:y,innerStart:b,innerEnd:v}=jl(e,u,l,g-p),_=l-m,w=l-y,x=p+m/_,I=g-y/w,T=u+b,k=u+v,E=p+b/T,S=g-v/k;if(t.beginPath(),t.arc(r,s,l,x,I),y>0){const e=Ul(w,I,r,s);t.arc(e.x,e.y,y,I,g+Ti)}const A=Ul(k,g,r,s);if(t.lineTo(A.x,A.y),v>0){const e=Ul(k,S,r,s);t.arc(e.x,e.y,v,g+Ti,S+Math.PI)}if(t.arc(r,s,u,g-v/u,p+b/u,!0),b>0){const e=Ul(T,E,r,s);t.arc(e.x,e.y,b,E+Math.PI,p-Ti)}const O=Ul(_,p,r,s);if(t.lineTo(O.x,O.y),m>0){const e=Ul(_,x,r,s);t.arc(e.x,e.y,m,p-Ti,x)}t.closePath()}function Bl(t,e,n){const{fullCircles:i,startAngle:r,circumference:s}=e;let o=e.endAngle;if(i){Vl(t,e,n,r+_i);for(let e=0;e<i;++e)t.fill();isNaN(s)||(o=r+s%_i,s%_i===0&&(o+=_i))}return Vl(t,e,n,o),t.fill(),o}function ql(t,e,n){const{x:i,y:r,startAngle:s,pixelMargin:o,fullCircles:a}=e,c=Math.max(e.outerRadius-o,0),l=e.innerRadius+o;let u;for(n&&Ll(t,e,s+_i),t.beginPath(),t.arc(i,r,l,s+_i,s,!0),u=0;u<a;++u)t.stroke();for(t.beginPath(),t.arc(i,r,c,s,s+_i),u=0;u<a;++u)t.stroke()}function zl(t,e,n,i){const{options:r}=e,s="inner"===r.borderAlign;r.borderWidth&&(s?(t.lineWidth=2*r.borderWidth,t.lineJoin="round"):(t.lineWidth=r.borderWidth,t.lineJoin="bevel"),e.fullCircles&&ql(t,e,s),s&&Ll(t,e,i),Vl(t,e,n,i),t.stroke())}Object.defineProperties(Nl,{defaults:{enumerable:Ml,value:Wr},instances:{enumerable:Ml,value:Rl},overrides:{enumerable:Ml,value:Ur},registry:{enumerable:Ml,value:el},version:{enumerable:Ml,value:Il},getChart:{enumerable:Ml,value:Dl},register:{enumerable:Ml,value:(...t)=>{el.add(...t),Pl()}},unregister:{enumerable:Ml,value:(...t)=>{el.remove(...t),Pl()}}});class Wl extends Sc{constructor(t){super(),this.options=void 0,this.circumference=void 0,this.startAngle=void 0,this.endAngle=void 0,this.innerRadius=void 0,this.outerRadius=void 0,this.pixelMargin=0,this.fullCircles=0,t&&Object.assign(this,t)}inRange(t,e,n){const i=this.getProps(["x","y"],n),{angle:r,distance:s}=ji(i,{x:t,y:e}),{startAngle:o,endAngle:a,innerRadius:c,outerRadius:l,circumference:u}=this.getProps(["startAngle","endAngle","innerRadius","outerRadius","circumference"],n),h=u>=_i||qi(r,o,a),d=s>=c&&s<=l;return h&&d}getCenterPoint(t){const{x:e,y:n,startAngle:i,endAngle:r,innerRadius:s,outerRadius:o}=this.getProps(["x","y","startAngle","endAngle","innerRadius","outerRadius","circumference"],t),a=(i+r)/2,c=(s+o)/2;return{x:e+Math.cos(a)*c,y:n+Math.sin(a)*c}}tooltipPosition(t){return this.getCenterPoint(t)}draw(t){const e=this,{options:n,circumference:i}=e,r=(n.offset||0)/2;if(e.pixelMargin="inner"===n.borderAlign?.33:0,e.fullCircles=i>_i?Math.floor(i/_i):0,0===i||e.innerRadius<0||e.outerRadius<0)return;t.save();let s=0;if(r){s=r/2;const n=(e.startAngle+e.endAngle)/2;t.translate(Math.cos(n)*s,Math.sin(n)*s),e.circumference>=vi&&(s=r)}t.fillStyle=n.backgroundColor,t.strokeStyle=n.borderColor;const o=Bl(t,e,s);zl(t,e,s,o),t.restore()}}function Hl(t,e,n=e){t.lineCap=Zn(n.borderCapStyle,e.borderCapStyle),t.setLineDash(Zn(n.borderDash,e.borderDash)),t.lineDashOffset=Zn(n.borderDashOffset,e.borderDashOffset),t.lineJoin=Zn(n.borderJoinStyle,e.borderJoinStyle),t.lineWidth=Zn(n.borderWidth,e.borderWidth),t.strokeStyle=Zn(n.borderColor,e.borderColor)}function $l(t,e,n){t.lineTo(n.x,n.y)}function Kl(t){return t.stepped?ts:t.tension||"monotone"===t.cubicInterpolationMode?es:$l}function Gl(t,e,n={}){const i=t.length,{start:r=0,end:s=i-1}=n,{start:o,end:a}=e,c=Math.max(r,o),l=Math.min(s,a),u=r<o&&s<o||r>a&&s>a;return{count:i,start:c,loop:e.loop,ilen:l<c&&!u?i+l-c:l-c}}function Yl(t,e,n,i){const{points:r,options:s}=e,{count:o,start:a,loop:c,ilen:l}=Gl(r,n,i),u=Kl(s);let h,d,f,{move:p=!0,reverse:g}=i||{};for(h=0;h<=l;++h)d=r[(a+(g?l-h:h))%o],d.skip||(p?(t.moveTo(d.x,d.y),p=!1):u(t,f,d,g,s.stepped),f=d);return c&&(d=r[(a+(g?l:0))%o],u(t,f,d,g,s.stepped)),!!c}function Ql(t,e,n,i){const r=e.points,{count:s,start:o,ilen:a}=Gl(r,n,i),{move:c=!0,reverse:l}=i||{};let u,h,d,f,p,g,m=0,y=0;const b=t=>(o+(l?a-t:t))%s,v=()=>{f!==p&&(t.lineTo(m,p),t.lineTo(m,f),t.lineTo(m,g))};for(c&&(h=r[b(0)],t.moveTo(h.x,h.y)),u=0;u<=a;++u){if(h=r[b(u)],h.skip)continue;const e=h.x,n=h.y,i=0|e;i===d?(n<f?f=n:n>p&&(p=n),m=(y*m+e)/++y):(v(),t.lineTo(e,n),d=i,y=0,f=p=n),g=n}v()}function Jl(t){const e=t.options,n=e.borderDash&&e.borderDash.length,i=!t._decimated&&!t._loop&&!e.tension&&"monotone"!==e.cubicInterpolationMode&&!e.stepped&&!n;return i?Ql:Yl}function Xl(t){return t.stepped?go:t.tension||"monotone"===t.cubicInterpolationMode?mo:po}function Zl(t,e,n,i){let r=e._path;r||(r=e._path=new Path2D,e.path(r,n,i)&&r.closePath()),Hl(t,e.options),t.stroke(r)}function tu(t,e,n,i){const{segments:r,options:s}=e,o=Jl(e);for(const a of r)Hl(t,s,a.style),t.beginPath(),o(t,e,a,{start:n,end:n+i-1})&&t.closePath(),t.stroke()}Wl.id="arc",Wl.defaults={borderAlign:"center",borderColor:"#fff",borderRadius:0,borderWidth:2,offset:0,angle:void 0},Wl.defaultRoutes={backgroundColor:"backgroundColor"};const eu="function"===typeof Path2D;function nu(t,e,n,i){eu&&1===e.segments.length?Zl(t,e,n,i):tu(t,e,n,i)}class iu extends Sc{constructor(t){super(),this.animated=!0,this.options=void 0,this._loop=void 0,this._fullLoop=void 0,this._path=void 0,this._points=void 0,this._segments=void 0,this._decimated=!1,this._pointsUpdated=!1,t&&Object.assign(this,t)}updateControlPoints(t,e){const n=this,i=n.options;if((i.tension||"monotone"===i.cubicInterpolationMode)&&!i.stepped&&!n._pointsUpdated){const r=i.spanGaps?n._loop:n._fullLoop;Js(n._points,i,t,r,e),n._pointsUpdated=!0}}set points(t){const e=this;e._points=t,delete e._segments,delete e._path,e._pointsUpdated=!1}get points(){return this._points}get segments(){return this._segments||(this._segments=Do(this,this.options.segment))}first(){const t=this.segments,e=this.points;return t.length&&e[t[0].start]}last(){const t=this.segments,e=this.points,n=t.length;return n&&e[t[n-1].end]}interpolate(t,e){const n=this,i=n.options,r=t[e],s=n.points,o=Oo(n,{property:e,start:r,end:r});if(!o.length)return;const a=[],c=Xl(i);let l,u;for(l=0,u=o.length;l<u;++l){const{start:n,end:u}=o[l],h=s[n],d=s[u];if(h===d){a.push(h);continue}const f=Math.abs((r-h[e])/(d[e]-h[e])),p=c(h,d,f,i.stepped);p[e]=t[e],a.push(p)}return 1===a.length?a[0]:a}pathSegment(t,e,n){const i=Jl(this);return i(t,this,e,n)}path(t,e,n){const i=this,r=i.segments,s=Jl(i);let o=i._loop;e=e||0,n=n||i.points.length-e;for(const a of r)o&=s(t,i,a,{start:e,end:e+n-1});return!!o}draw(t,e,n,i){const r=this,s=r.options||{},o=r.points||[];o.length&&s.borderWidth&&(t.save(),nu(t,r,n,i),t.restore(),r.animated&&(r._pointsUpdated=!1,r._path=void 0))}}function ru(t,e,n,i){const r=t.options,{[n]:s}=t.getProps([n],i);return Math.abs(e-s)<r.radius+r.hitRadius}iu.id="line",iu.defaults={borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",borderWidth:3,capBezierPoints:!0,cubicInterpolationMode:"default",fill:!1,spanGaps:!1,stepped:!1,tension:0},iu.defaultRoutes={backgroundColor:"backgroundColor",borderColor:"borderColor"},iu.descriptors={_scriptable:!0,_indexable:t=>"borderDash"!==t&&"fill"!==t};class su extends Sc{constructor(t){super(),this.options=void 0,this.parsed=void 0,this.skip=void 0,this.stop=void 0,t&&Object.assign(this,t)}inRange(t,e,n){const i=this.options,{x:r,y:s}=this.getProps(["x","y"],n);return Math.pow(t-r,2)+Math.pow(e-s,2)<Math.pow(i.hitRadius+i.radius,2)}inXRange(t,e){return ru(this,t,"x",e)}inYRange(t,e){return ru(this,t,"y",e)}getCenterPoint(t){const{x:e,y:n}=this.getProps(["x","y"],t);return{x:e,y:n}}size(t){t=t||this.options||{};let e=t.radius||0;e=Math.max(e,e&&t.hoverRadius||0);const n=e&&t.borderWidth||0;return 2*(e+n)}draw(t){const e=this,n=e.options;e.skip||n.radius<.1||(t.strokeStyle=n.borderColor,t.lineWidth=n.borderWidth,t.fillStyle=n.backgroundColor,Qr(t,n,e.x,e.y))}getRange(){const t=this.options||{};return t.radius+t.hitRadius}}function ou(t,e){const{x:n,y:i,base:r,width:s,height:o}=t.getProps(["x","y","base","width","height"],e);let a,c,l,u,h;return t.horizontal?(h=o/2,a=Math.min(n,r),c=Math.max(n,r),l=i-h,u=i+h):(h=s/2,a=n-h,c=n+h,l=Math.min(i,r),u=Math.max(i,r)),{left:a,top:l,right:c,bottom:u}}function au(t){let e=t.options.borderSkipped;const n={};return e?(e=t.horizontal?cu(e,"left","right",t.base>t.x):cu(e,"bottom","top",t.base<t.y),n[e]=!0,n):n}function cu(t,e,n,i){return i?(t=lu(t,e,n),t=uu(t,n,e)):t=uu(t,e,n),t}function lu(t,e,n){return t===e?n:t===n?e:t}function uu(t,e,n){return"start"===t?e:"end"===t?n:t}function hu(t,e,n,i){return t?0:Math.max(Math.min(e,i),n)}function du(t,e,n){const i=t.options.borderWidth,r=au(t),s=ls(i);return{t:hu(r.top,s.top,0,n),r:hu(r.right,s.right,0,e),b:hu(r.bottom,s.bottom,0,n),l:hu(r.left,s.left,0,e)}}function fu(t,e,n){const{enableBorderRadius:i}=t.getProps(["enableBorderRadius"]),r=t.options.borderRadius,s=us(r),o=Math.min(e,n),a=au(t),c=i||Qn(r);return{topLeft:hu(!c||a.top||a.left,s.topLeft,0,o),topRight:hu(!c||a.top||a.right,s.topRight,0,o),bottomLeft:hu(!c||a.bottom||a.left,s.bottomLeft,0,o),bottomRight:hu(!c||a.bottom||a.right,s.bottomRight,0,o)}}function pu(t){const e=ou(t),n=e.right-e.left,i=e.bottom-e.top,r=du(t,n/2,i/2),s=fu(t,n/2,i/2);return{outer:{x:e.left,y:e.top,w:n,h:i,radius:s},inner:{x:e.left+r.l,y:e.top+r.t,w:n-r.l-r.r,h:i-r.t-r.b,radius:{topLeft:Math.max(0,s.topLeft-Math.max(r.t,r.l)),topRight:Math.max(0,s.topRight-Math.max(r.t,r.r)),bottomLeft:Math.max(0,s.bottomLeft-Math.max(r.b,r.l)),bottomRight:Math.max(0,s.bottomRight-Math.max(r.b,r.r))}}}}function gu(t,e,n,i){const r=null===e,s=null===n,o=r&&s,a=t&&!o&&ou(t,i);return a&&(r||e>=a.left&&e<=a.right)&&(s||n>=a.top&&n<=a.bottom)}function mu(t){return t.topLeft||t.topRight||t.bottomLeft||t.bottomRight}function yu(t,e){t.rect(e.x,e.y,e.w,e.h)}su.id="point",su.defaults={borderWidth:1,hitRadius:1,hoverBorderWidth:1,hoverRadius:4,pointStyle:"circle",radius:3,rotation:0},su.defaultRoutes={backgroundColor:"backgroundColor",borderColor:"borderColor"};class bu extends Sc{constructor(t){super(),this.options=void 0,this.horizontal=void 0,this.base=void 0,this.width=void 0,this.height=void 0,t&&Object.assign(this,t)}draw(t){const e=this.options,{inner:n,outer:i}=pu(this),r=mu(i.radius)?is:yu;t.save(),i.w===n.w&&i.h===n.h||(t.beginPath(),r(t,i),t.clip(),r(t,n),t.fillStyle=e.borderColor,t.fill("evenodd")),t.beginPath(),r(t,n),t.fillStyle=e.backgroundColor,t.fill(),t.restore()}inRange(t,e,n){return gu(this,t,e,n)}inXRange(t,e){return gu(this,t,null,e)}inYRange(t,e){return gu(this,null,t,e)}getCenterPoint(t){const{x:e,y:n,base:i,horizontal:r}=this.getProps(["x","y","base","horizontal"],t);return{x:r?(e+i)/2:e,y:r?n:(n+i)/2}}getRange(t){return"x"===t?this.width/2:this.height/2}}bu.id="bar",bu.defaults={borderSkipped:"start",borderWidth:0,borderRadius:0,enableBorderRadius:!0,pointStyle:void 0},bu.defaultRoutes={backgroundColor:"backgroundColor",borderColor:"borderColor"};var vu=Object.freeze({__proto__:null,ArcElement:Wl,LineElement:iu,PointElement:su,BarElement:bu});function _u(t,e,n,i,r){const s=r.samples||i;if(s>=n)return t.slice(e,e+n);const o=[],a=(n-2)/(s-2);let c=0;const l=e+n-1;let u,h,d,f,p,g=e;for(o[c++]=t[g],u=0;u<s-2;u++){let i,r=0,s=0;const l=Math.floor((u+1)*a)+1+e,m=Math.min(Math.floor((u+2)*a)+1,n)+e,y=m-l;for(i=l;i<m;i++)r+=t[i].x,s+=t[i].y;r/=y,s/=y;const b=Math.floor(u*a)+1+e,v=Math.floor((u+1)*a)+1+e,{x:_,y:w}=t[g];for(d=f=-1,i=b;i<v;i++)f=.5*Math.abs((_-r)*(t[i].y-w)-(_-t[i].x)*(s-w)),f>d&&(d=f,h=t[i],p=i);o[c++]=h,g=p}return o[c++]=t[l],o}function wu(t,e,n,i){let r,s,o,a,c,l,u,h,d,f,p=0,g=0;const m=[],y=e+n-1,b=t[e].x,v=t[y].x,_=v-b;for(r=e;r<e+n;++r){s=t[r],o=(s.x-b)/_*i,a=s.y;const e=0|o;if(e===c)a<d?(d=a,l=r):a>f&&(f=a,u=r),p=(g*p+s.x)/++g;else{const n=r-1;if(!Gn(l)&&!Gn(u)){const e=Math.min(l,u),i=Math.max(l,u);e!==h&&e!==n&&m.push({...t[e],x:p}),i!==h&&i!==n&&m.push({...t[i],x:p})}r>0&&n!==h&&m.push(t[n]),m.push(s),c=e,g=0,d=f=a,l=u=h=r}}return m}function xu(t){if(t._decimated){const e=t._data;delete t._decimated,delete t._data,Object.defineProperty(t,"data",{value:e})}}function Iu(t){t.data.datasets.forEach(t=>{xu(t)})}function Tu(t,e){const n=e.length;let i,r=0;const{iScale:s}=t,{min:o,max:a,minDefined:c,maxDefined:l}=s.getUserBounds();return c&&(r=zi(ms(e,s.axis,o).lo,0,n-1)),i=l?zi(ms(e,s.axis,a).hi+1,r,n)-r:n-r,{start:r,count:i}}var ku={id:"decimation",defaults:{algorithm:"min-max",enabled:!1},beforeElementsUpdate:(t,e,n)=>{if(!n.enabled)return void Iu(t);const i=t.width;t.data.datasets.forEach((e,r)=>{const{_data:s,indexAxis:o}=e,a=t.getDatasetMeta(r),c=s||e.data;if("y"===fs([o,t.options.indexAxis]))return;if("line"!==a.type)return;const l=t.scales[a.xAxisID];if("linear"!==l.type&&"time"!==l.type)return;if(t.options.parsing)return;let u,{start:h,count:d}=Tu(a,c);if(d<=4*i)xu(e);else{switch(Gn(s)&&(e._data=c,delete e.data,Object.defineProperty(e,"data",{configurable:!0,enumerable:!0,get:function(){return this._decimated},set:function(t){this._data=t}})),n.algorithm){case"lttb":u=_u(c,h,d,i,n);break;case"min-max":u=wu(c,h,d,i);break;default:throw new Error(`Unsupported decimation algorithm '${n.algorithm}'`)}e._decimated=u}})},destroy(t){Iu(t)}};function Eu(t,e){const n=t.getDatasetMeta(e),i=n&&t.isDatasetVisible(e);return i?n.dataset:null}function Su(t){const e=t.options,n=e.fill;let i=Zn(n&&n.target,n);return void 0===i&&(i=!!e.backgroundColor),!1!==i&&null!==i&&(!0===i?"origin":i)}function Au(t,e,n){const i=Su(t);if(Qn(i))return!isNaN(i.value)&&i;let r=parseFloat(i);return Jn(r)&&Math.floor(r)===r?("-"!==i[0]&&"+"!==i[0]||(r=e+r),!(r===e||r<0||r>=n)&&r):["origin","start","end","stack"].indexOf(i)>=0&&i}function Ou(t){const{scale:e={},fill:n}=t;let i,r=null;return"start"===n?r=e.bottom:"end"===n?r=e.top:Qn(n)?r=e.getPixelForValue(n.value):e.getBasePixel&&(r=e.getBasePixel()),Jn(r)?(i=e.isHorizontal(),{x:i?r:null,y:i?null:r}):null}class Cu{constructor(t){this.x=t.x,this.y=t.y,this.radius=t.radius}pathSegment(t,e,n){const{x:i,y:r,radius:s}=this;return e=e||{start:0,end:_i},t.arc(i,r,s,e.end,e.start,!0),!n.bounds}interpolate(t){const{x:e,y:n,radius:i}=this,r=t.angle;return{x:e+Math.cos(r)*i,y:n+Math.sin(r)*i,angle:r}}}function Ru(t){const{scale:e,fill:n}=t,i=e.options,r=e.getLabels().length,s=[],o=i.reverse?e.max:e.min,a=i.reverse?e.min:e.max;let c,l,u;if(u="start"===n?o:"end"===n?a:Qn(n)?n.value:e.getBaseValue(),i.grid.circular)return l=e.getPointPositionForValue(0,o),new Cu({x:l.x,y:l.y,radius:e.getDistanceFromCenterForValue(u)});for(c=0;c<r;++c)s.push(e.getPointPositionForValue(c,u));return s}function Du(t){const e=t.scale||{};return e.getPointPositionForValue?Ru(t):Ou(t)}function Nu(t,e){const{x:n=null,y:i=null}=t||{},r=e.points,s=[];return e.segments.forEach(t=>{const e=r[t.start],o=r[t.end];null!==i?(s.push({x:e.x,y:i}),s.push({x:o.x,y:i})):null!==n&&(s.push({x:n,y:e.y}),s.push({x:n,y:o.y}))}),s}function Pu(t){const{chart:e,scale:n,index:i,line:r}=t,s=[],o=r.segments,a=r.points,c=Lu(e,i);c.push(Vu({x:null,y:n.bottom},r));for(let l=0;l<o.length;l++){const t=o[l];for(let e=t.start;e<=t.end;e++)Fu(s,a[e],c)}return new iu({points:s,options:{}})}const Mu=t=>"line"===t.type&&!t.hidden;function Lu(t,e){const n=[],i=t.getSortedVisibleDatasetMetas();for(let r=0;r<i.length;r++){const t=i[r];if(t.index===e)break;Mu(t)&&n.unshift(t.dataset)}return n}function Fu(t,e,n){const i=[];for(let r=0;r<n.length;r++){const s=n[r],{first:o,last:a,point:c}=ju(s,e,"x");if(!(!c||o&&a))if(o)i.unshift(c);else if(t.push(c),!a)break}t.push(...i)}function ju(t,e,n){const i=t.interpolate(e,n);if(!i)return{};const r=i[n],s=t.segments,o=t.points;let a=!1,c=!1;for(let l=0;l<s.length;l++){const t=s[l],e=o[t.start][n],i=o[t.end][n];if(r>=e&&r<=i){a=r===e,c=r===i;break}}return{first:a,last:c,point:i}}function Uu(t){const{chart:e,fill:n,line:i}=t;if(Jn(n))return Eu(e,n);if("stack"===n)return Pu(t);const r=Du(t);return r instanceof Cu?r:Vu(r,i)}function Vu(t,e){let n=[],i=!1;return Yn(t)?(i=!0,n=t):n=Nu(t,e),n.length?new iu({points:n,options:{tension:0},_loop:i,_fullLoop:i}):null}function Bu(t,e,n){const i=t[e];let r=i.fill;const s=[e];let o;if(!n)return r;while(!1!==r&&-1===s.indexOf(r)){if(!Jn(r))return r;if(o=t[r],!o)return!1;if(o.visible)return r;s.push(r),r=o.fill}return!1}function qu(t,e,n){t.beginPath(),e.path(t),t.lineTo(e.last().x,n),t.lineTo(e.first().x,n),t.closePath(),t.clip()}function zu(t,e,n,i){if(i)return;let r=e[t],s=n[t];return"angle"===t&&(r=Bi(r),s=Bi(s)),{property:t,start:r,end:s}}function Wu(t,e,n,i){return t&&e?i(t[n],e[n]):t?t[n]:e?e[n]:0}function Hu(t,e,n){const i=t.segments,r=t.points,s=e.points,o=[];for(const a of i){const t=zu(n,r[a.start],r[a.end],a.loop);if(!e.segments){o.push({source:a,target:t,start:r[a.start],end:r[a.end]});continue}const i=Oo(e,t);for(const e of i){const i=zu(n,s[e.start],s[e.end],e.loop),c=Ao(a,r,i);for(const r of c)o.push({source:r,target:e,start:{[n]:Wu(t,i,"start",Math.max)},end:{[n]:Wu(t,i,"end",Math.min)}})}}return o}function $u(t,e,n){const{top:i,bottom:r}=e.chart.chartArea,{property:s,start:o,end:a}=n||{};"x"===s&&(t.beginPath(),t.rect(o,i,a-o,r-i),t.clip())}function Ku(t,e,n,i){const r=e.interpolate(n,i);r&&t.lineTo(r.x,r.y)}function Gu(t,e){const{line:n,target:i,property:r,color:s,scale:o}=e,a=Hu(n,i,r);for(const{source:c,target:l,start:u,end:h}of a){const{style:{backgroundColor:e=s}={}}=c;t.save(),t.fillStyle=e,$u(t,o,zu(r,u,h)),t.beginPath();const a=!!n.pathSegment(t,c);a?t.closePath():Ku(t,i,h,r);const d=!!i.pathSegment(t,l,{move:a,reverse:!0}),f=a&&d;f||Ku(t,i,u,r),t.closePath(),t.fill(f?"evenodd":"nonzero"),t.restore()}}function Yu(t,e){const{line:n,target:i,above:r,below:s,area:o,scale:a}=e,c=n._loop?"angle":e.axis;t.save(),"x"===c&&s!==r&&(qu(t,i,o.top),Gu(t,{line:n,target:i,color:r,scale:a,property:c}),t.restore(),t.save(),qu(t,i,o.bottom)),Gu(t,{line:n,target:i,color:s,scale:a,property:c}),t.restore()}function Qu(t,e,n){const i=Uu(e),{line:r,scale:s,axis:o}=e,a=r.options,c=a.fill,l=a.backgroundColor,{above:u=l,below:h=l}=c||{};i&&r.points.length&&(Xr(t,n),Yu(t,{line:r,target:i,above:u,below:h,area:n,scale:s,axis:o}),Zr(t))}var Ju={id:"filler",afterDatasetsUpdate(t,e,n){const i=(t.data.datasets||[]).length,r=[];let s,o,a,c;for(o=0;o<i;++o)s=t.getDatasetMeta(o),a=s.dataset,c=null,a&&a.options&&a instanceof iu&&(c={visible:t.isDatasetVisible(o),index:o,fill:Au(a,o,i),chart:t,axis:s.controller.options.indexAxis,scale:s.vScale,line:a}),s.$filler=c,r.push(c);for(o=0;o<i;++o)c=r[o],c&&!1!==c.fill&&(c.fill=Bu(r,o,n.propagate))},beforeDraw(t,e,n){const i="beforeDraw"===n.drawTime,r=t.getSortedVisibleDatasetMetas(),s=t.chartArea;for(let o=r.length-1;o>=0;--o){const e=r[o].$filler;e&&(e.line.updateControlPoints(s,e.axis),i&&Qu(t.ctx,e,s))}},beforeDatasetsDraw(t,e,n){if("beforeDatasetsDraw"!==n.drawTime)return;const i=t.getSortedVisibleDatasetMetas();for(let r=i.length-1;r>=0;--r){const e=i[r].$filler;e&&Qu(t.ctx,e,t.chartArea)}},beforeDatasetDraw(t,e,n){const i=e.meta.$filler;i&&!1!==i.fill&&"beforeDatasetDraw"===n.drawTime&&Qu(t.ctx,i,t.chartArea)},defaults:{propagate:!0,drawTime:"beforeDatasetDraw"}};const Xu=(t,e)=>{let{boxHeight:n=e,boxWidth:i=e}=t;return t.usePointStyle&&(n=Math.min(n,e),i=Math.min(i,e)),{boxWidth:i,boxHeight:n,itemHeight:Math.max(e,n)}},Zu=(t,e)=>null!==t&&null!==e&&t.datasetIndex===e.datasetIndex&&t.index===e.index;class th extends Sc{constructor(t){super(),this._added=!1,this.legendHitBoxes=[],this._hoveredItem=null,this.doughnutMode=!1,this.chart=t.chart,this.options=t.options,this.ctx=t.ctx,this.legendItems=void 0,this.columnSizes=void 0,this.lineWidths=void 0,this.maxHeight=void 0,this.maxWidth=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.height=void 0,this.width=void 0,this._margins=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(t,e,n){const i=this;i.maxWidth=t,i.maxHeight=e,i._margins=n,i.setDimensions(),i.buildLabels(),i.fit()}setDimensions(){const t=this;t.isHorizontal()?(t.width=t.maxWidth,t.left=0,t.right=t.width):(t.height=t.maxHeight,t.top=0,t.bottom=t.height)}buildLabels(){const t=this,e=t.options.labels||{};let n=ni(e.generateLabels,[t.chart],t)||[];e.filter&&(n=n.filter(n=>e.filter(n,t.chart.data))),e.sort&&(n=n.sort((n,i)=>e.sort(n,i,t.chart.data))),t.options.reverse&&n.reverse(),t.legendItems=n}fit(){const t=this,{options:e,ctx:n}=t;if(!e.display)return void(t.width=t.height=0);const i=e.labels,r=ds(i.font),s=r.size,o=t._computeTitleHeight(),{boxWidth:a,itemHeight:c}=Xu(i,s);let l,u;n.font=r.string,t.isHorizontal()?(l=t.maxWidth,u=t._fitRows(o,s,a,c)+10):(u=t.maxHeight,l=t._fitCols(o,s,a,c)+10),t.width=Math.min(l,e.maxWidth||t.maxWidth),t.height=Math.min(u,e.maxHeight||t.maxHeight)}_fitRows(t,e,n,i){const r=this,{ctx:s,maxWidth:o,options:{labels:{padding:a}}}=r,c=r.legendHitBoxes=[],l=r.lineWidths=[0],u=i+a;let h=t;s.textAlign="left",s.textBaseline="middle";let d=-1,f=-u;return r.legendItems.forEach((t,r)=>{const p=n+e/2+s.measureText(t.text).width;(0===r||l[l.length-1]+p+2*a>o)&&(h+=u,l[l.length-(r>0?0:1)]=0,f+=u,d++),c[r]={left:0,top:f,row:d,width:p,height:i},l[l.length-1]+=p+a}),h}_fitCols(t,e,n,i){const r=this,{ctx:s,maxHeight:o,options:{labels:{padding:a}}}=r,c=r.legendHitBoxes=[],l=r.columnSizes=[],u=o-t;let h=a,d=0,f=0,p=0,g=0,m=0;return r.legendItems.forEach((t,r)=>{const o=n+e/2+s.measureText(t.text).width;r>0&&f+e+2*a>u&&(h+=d+a,l.push({width:d,height:f}),p+=d+a,m++,g=0,d=f=0),d=Math.max(d,o),f+=e+a,c[r]={left:p,top:g,col:m,width:o,height:i},g+=i+a}),h+=d,l.push({width:d,height:f}),h}adjustHitBoxes(){const t=this;if(!t.options.display)return;const e=t._computeTitleHeight(),{legendHitBoxes:n,options:{align:i,labels:{padding:r}}}=t;if(this.isHorizontal()){let s=0,o=Wn(i,t.left+r,t.right-t.lineWidths[s]);for(const a of n)s!==a.row&&(s=a.row,o=Wn(i,t.left+r,t.right-t.lineWidths[s])),a.top+=t.top+e+r,a.left=o,o+=a.width+r}else{let s=0,o=Wn(i,t.top+e+r,t.bottom-t.columnSizes[s].height);for(const a of n)a.col!==s&&(s=a.col,o=Wn(i,t.top+e+r,t.bottom-t.columnSizes[s].height)),a.top=o,a.left+=t.left+r,o+=a.height+r}}isHorizontal(){return"top"===this.options.position||"bottom"===this.options.position}draw(){const t=this;if(t.options.display){const e=t.ctx;Xr(e,t),t._draw(),Zr(e)}}_draw(){const t=this,{options:e,columnSizes:n,lineWidths:i,ctx:r}=t,{align:s,labels:o}=e,a=Wr.color,c=xo(e.rtl,t.left,t.width),l=ds(o.font),{color:u,padding:h}=o,d=l.size,f=d/2;let p;t.drawTitle(),r.textAlign=c.textAlign("left"),r.textBaseline="middle",r.lineWidth=.5,r.font=l.string;const{boxWidth:g,boxHeight:m,itemHeight:y}=Xu(o,d),b=function(t,e,n){if(isNaN(g)||g<=0||isNaN(m)||m<0)return;r.save();const i=Zn(n.lineWidth,1);if(r.fillStyle=Zn(n.fillStyle,a),r.lineCap=Zn(n.lineCap,"butt"),r.lineDashOffset=Zn(n.lineDashOffset,0),r.lineJoin=Zn(n.lineJoin,"miter"),r.lineWidth=i,r.strokeStyle=Zn(n.strokeStyle,a),r.setLineDash(Zn(n.lineDash,[])),o.usePointStyle){const s={radius:g*Math.SQRT2/2,pointStyle:n.pointStyle,rotation:n.rotation,borderWidth:i},o=c.xPlus(t,g/2),a=e+f;Qr(r,s,o,a)}else{const s=e+Math.max((d-m)/2,0),o=c.leftForLtr(t,g),a=us(n.borderRadius);r.beginPath(),Object.values(a).some(t=>0!==t)?is(r,{x:o,y:s,w:g,h:m,radius:a}):r.rect(o,s,g,m),r.fill(),0!==i&&r.stroke()}r.restore()},v=function(t,e,n){ns(r,n.text,t,e+y/2,l,{strikethrough:n.hidden,textAlign:n.textAlign})},_=t.isHorizontal(),w=this._computeTitleHeight();p=_?{x:Wn(s,t.left+h,t.right-i[0]),y:t.top+h+w,line:0}:{x:t.left+h,y:Wn(s,t.top+w+h,t.bottom-n[0].height),line:0},Io(t.ctx,e.textDirection);const x=y+h;t.legendItems.forEach((e,a)=>{r.strokeStyle=e.fontColor||u,r.fillStyle=e.fontColor||u;const l=r.measureText(e.text).width,m=c.textAlign(e.textAlign||(e.textAlign=o.textAlign)),y=g+d/2+l;let I=p.x,T=p.y;c.setWidth(t.width),_?a>0&&I+y+h>t.right&&(T=p.y+=x,p.line++,I=p.x=Wn(s,t.left+h,t.right-i[p.line])):a>0&&T+x>t.bottom&&(I=p.x=I+n[p.line].width+h,p.line++,T=p.y=Wn(s,t.top+w+h,t.bottom-n[p.line].height));const k=c.x(I);b(k,T,e),I=Hn(m,I+g+f,t.right),v(c.x(I),T,e),_?p.x+=y+h:p.y+=x}),To(t.ctx,e.textDirection)}drawTitle(){const t=this,e=t.options,n=e.title,i=ds(n.font),r=hs(n.padding);if(!n.display)return;const s=xo(e.rtl,t.left,t.width),o=t.ctx,a=n.position,c=i.size/2,l=r.top+c;let u,h=t.left,d=t.width;if(this.isHorizontal())d=Math.max(...t.lineWidths),u=t.top+l,h=Wn(e.align,h,t.right-d);else{const n=t.columnSizes.reduce((t,e)=>Math.max(t,e.height),0);u=l+Wn(e.align,t.top,t.bottom-n-e.labels.padding-t._computeTitleHeight())}const f=Wn(a,h,h+d);o.textAlign=s.textAlign(zn(a)),o.textBaseline="middle",o.strokeStyle=n.color,o.fillStyle=n.color,o.font=i.string,ns(o,n.text,f,u,i)}_computeTitleHeight(){const t=this.options.title,e=ds(t.font),n=hs(t.padding);return t.display?e.lineHeight+n.height:0}_getLegendItemAt(t,e){const n=this;let i,r,s;if(t>=n.left&&t<=n.right&&e>=n.top&&e<=n.bottom)for(s=n.legendHitBoxes,i=0;i<s.length;++i)if(r=s[i],t>=r.left&&t<=r.left+r.width&&e>=r.top&&e<=r.top+r.height)return n.legendItems[i];return null}handleEvent(t){const e=this,n=e.options;if(!eh(t.type,n))return;const i=e._getLegendItemAt(t.x,t.y);if("mousemove"===t.type){const r=e._hoveredItem,s=Zu(r,i);r&&!s&&ni(n.onLeave,[t,r,e],e),e._hoveredItem=i,i&&!s&&ni(n.onHover,[t,i,e],e)}else i&&ni(n.onClick,[t,i,e],e)}}function eh(t,e){return!("mousemove"!==t||!e.onHover&&!e.onLeave)||!(!e.onClick||"click"!==t&&"mouseup"!==t)}var nh={id:"legend",_element:th,start(t,e,n){const i=t.legend=new th({ctx:t.ctx,options:n,chart:t});sc.configure(t,i,n),sc.addBox(t,i)},stop(t){sc.removeBox(t,t.legend),delete t.legend},beforeUpdate(t,e,n){const i=t.legend;sc.configure(t,i,n),i.options=n},afterUpdate(t){const e=t.legend;e.buildLabels(),e.adjustHitBoxes()},afterEvent(t,e){e.replay||t.legend.handleEvent(e.event)},defaults:{display:!0,position:"top",align:"center",fullSize:!0,reverse:!1,weight:1e3,onClick(t,e,n){const i=e.datasetIndex,r=n.chart;r.isDatasetVisible(i)?(r.hide(i),e.hidden=!0):(r.show(i),e.hidden=!1)},onHover:null,onLeave:null,labels:{color:t=>t.chart.options.color,boxWidth:40,padding:10,generateLabels(t){const e=t.data.datasets,{labels:{usePointStyle:n,pointStyle:i,textAlign:r,color:s}}=t.legend.options;return t._getSortedDatasetMetas().map(t=>{const o=t.controller.getStyle(n?0:void 0),a=hs(o.borderWidth);return{text:e[t.index].label,fillStyle:o.backgroundColor,fontColor:s,hidden:!t.visible,lineCap:o.borderCapStyle,lineDash:o.borderDash,lineDashOffset:o.borderDashOffset,lineJoin:o.borderJoinStyle,lineWidth:(a.width+a.height)/4,strokeStyle:o.borderColor,pointStyle:i||o.pointStyle,rotation:o.rotation,textAlign:r||o.textAlign,borderRadius:0,datasetIndex:t.index}},this)}},title:{color:t=>t.chart.options.color,display:!1,position:"center",text:""}},descriptors:{_scriptable:t=>!t.startsWith("on"),labels:{_scriptable:t=>!["generateLabels","filter","sort"].includes(t)}}};class ih extends Sc{constructor(t){super(),this.chart=t.chart,this.options=t.options,this.ctx=t.ctx,this._padding=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(t,e){const n=this,i=n.options;if(n.left=0,n.top=0,!i.display)return void(n.width=n.height=n.right=n.bottom=0);n.width=n.right=t,n.height=n.bottom=e;const r=Yn(i.text)?i.text.length:1;n._padding=hs(i.padding);const s=r*ds(i.font).lineHeight+n._padding.height;n.isHorizontal()?n.height=s:n.width=s}isHorizontal(){const t=this.options.position;return"top"===t||"bottom"===t}_drawArgs(t){const{top:e,left:n,bottom:i,right:r,options:s}=this,o=s.align;let a,c,l,u=0;return this.isHorizontal()?(c=Wn(o,n,r),l=e+t,a=r-n):("left"===s.position?(c=n+t,l=Wn(o,i,e),u=-.5*vi):(c=r-t,l=Wn(o,e,i),u=.5*vi),a=i-e),{titleX:c,titleY:l,maxWidth:a,rotation:u}}draw(){const t=this,e=t.ctx,n=t.options;if(!n.display)return;const i=ds(n.font),r=i.lineHeight,s=r/2+t._padding.top,{titleX:o,titleY:a,maxWidth:c,rotation:l}=t._drawArgs(s);ns(e,n.text,0,0,i,{color:n.color,maxWidth:c,rotation:l,textAlign:zn(n.align),textBaseline:"middle",translation:[o,a]})}}function rh(t,e){const n=new ih({ctx:t.ctx,options:e,chart:t});sc.configure(t,n,e),sc.addBox(t,n),t.titleBlock=n}var sh={id:"title",_element:ih,start(t,e,n){rh(t,n)},stop(t){const e=t.titleBlock;sc.removeBox(t,e),delete t.titleBlock},beforeUpdate(t,e,n){const i=t.titleBlock;sc.configure(t,i,n),i.options=n},defaults:{align:"center",display:!1,font:{weight:"bold"},fullSize:!0,padding:10,position:"top",text:"",weight:2e3},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}};const oh={average(t){if(!t.length)return!1;let e,n,i=0,r=0,s=0;for(e=0,n=t.length;e<n;++e){const n=t[e].element;if(n&&n.hasValue()){const t=n.tooltipPosition();i+=t.x,r+=t.y,++s}}return{x:i/s,y:r/s}},nearest(t,e){if(!t.length)return!1;let n,i,r,s=e.x,o=e.y,a=Number.POSITIVE_INFINITY;for(n=0,i=t.length;n<i;++n){const i=t[n].element;if(i&&i.hasValue()){const t=i.getCenterPoint(),n=Ui(e,t);n<a&&(a=n,r=i)}}if(r){const t=r.tooltipPosition();s=t.x,o=t.y}return{x:s,y:o}}};function ah(t,e){return e&&(Yn(e)?Array.prototype.push.apply(t,e):t.push(e)),t}function ch(t){return("string"===typeof t||t instanceof String)&&t.indexOf("\n")>-1?t.split("\n"):t}function lh(t,e){const{element:n,datasetIndex:i,index:r}=e,s=t.getDatasetMeta(i).controller,{label:o,value:a}=s.getLabelAndValue(r);return{chart:t,label:o,parsed:s.getParsed(r),raw:t.data.datasets[i].data[r],formattedValue:a,dataset:s.getDataset(),dataIndex:r,datasetIndex:i,element:n}}function uh(t,e){const n=t._chart.ctx,{body:i,footer:r,title:s}=t,{boxWidth:o,boxHeight:a}=e,c=ds(e.bodyFont),l=ds(e.titleFont),u=ds(e.footerFont),h=s.length,d=r.length,f=i.length,p=hs(e.padding);let g=p.height,m=0,y=i.reduce((t,e)=>t+e.before.length+e.lines.length+e.after.length,0);if(y+=t.beforeBody.length+t.afterBody.length,h&&(g+=h*l.lineHeight+(h-1)*e.titleSpacing+e.titleMarginBottom),y){const t=e.displayColors?Math.max(a,c.lineHeight):c.lineHeight;g+=f*t+(y-f)*c.lineHeight+(y-1)*e.bodySpacing}d&&(g+=e.footerMarginTop+d*u.lineHeight+(d-1)*e.footerSpacing);let b=0;const v=function(t){m=Math.max(m,n.measureText(t).width+b)};return n.save(),n.font=l.string,ii(t.title,v),n.font=c.string,ii(t.beforeBody.concat(t.afterBody),v),b=e.displayColors?o+2:0,ii(i,t=>{ii(t.before,v),ii(t.lines,v),ii(t.after,v)}),b=0,n.font=u.string,ii(t.footer,v),n.restore(),m+=p.width,{width:m,height:g}}function hh(t,e){const{y:n,height:i}=e;return n<i/2?"top":n>t.height-i/2?"bottom":"center"}function dh(t,e,n,i){const{x:r,width:s}=i,o=n.caretSize+n.caretPadding;return"left"===t&&r+s+o>e.width||("right"===t&&r-s-o<0||void 0)}function fh(t,e,n,i){const{x:r,width:s}=n,{width:o,chartArea:{left:a,right:c}}=t;let l="center";return"center"===i?l=r<=(a+c)/2?"left":"right":r<=s/2?l="left":r>=o-s/2&&(l="right"),dh(l,t,e,n)&&(l="center"),l}function ph(t,e,n){const i=e.yAlign||hh(t,n);return{xAlign:e.xAlign||fh(t,e,n,i),yAlign:i}}function gh(t,e){let{x:n,width:i}=t;return"right"===e?n-=i:"center"===e&&(n-=i/2),n}function mh(t,e,n){let{y:i,height:r}=t;return"top"===e?i+=n:i-="bottom"===e?r+n:r/2,i}function yh(t,e,n,i){const{caretSize:r,caretPadding:s,cornerRadius:o}=t,{xAlign:a,yAlign:c}=n,l=r+s,u=o+s;let h=gh(e,a);const d=mh(e,c,l);return"center"===c?"left"===a?h+=l:"right"===a&&(h-=l):"left"===a?h-=u:"right"===a&&(h+=u),{x:zi(h,0,i.width-e.width),y:zi(d,0,i.height-e.height)}}function bh(t,e,n){const i=hs(n.padding);return"center"===e?t.x+t.width/2:"right"===e?t.x+t.width-i.right:t.x+i.left}function vh(t){return ah([],ch(t))}function _h(t,e,n){return Object.assign(Object.create(t),{tooltip:e,tooltipItems:n,type:"tooltip"})}function wh(t,e){const n=e&&e.dataset&&e.dataset.tooltip&&e.dataset.tooltip.callbacks;return n?t.override(n):t}class xh extends Sc{constructor(t){super(),this.opacity=0,this._active=[],this._chart=t._chart,this._eventPosition=void 0,this._size=void 0,this._cachedAnimations=void 0,this._tooltipItems=[],this.$animations=void 0,this.$context=void 0,this.options=t.options,this.dataPoints=void 0,this.title=void 0,this.beforeBody=void 0,this.body=void 0,this.afterBody=void 0,this.footer=void 0,this.xAlign=void 0,this.yAlign=void 0,this.x=void 0,this.y=void 0,this.height=void 0,this.width=void 0,this.caretX=void 0,this.caretY=void 0,this.labelColors=void 0,this.labelPointStyles=void 0,this.labelTextColors=void 0}initialize(t){this.options=t,this._cachedAnimations=void 0,this.$context=void 0}_resolveAnimations(){const t=this,e=t._cachedAnimations;if(e)return e;const n=t._chart,i=t.options.setContext(t.getContext()),r=i.enabled&&n.options.animation&&i.animations,s=new Ho(t._chart,r);return r._cacheable&&(t._cachedAnimations=Object.freeze(s)),s}getContext(){const t=this;return t.$context||(t.$context=_h(t._chart.getContext(),t,t._tooltipItems))}getTitle(t,e){const n=this,{callbacks:i}=e,r=i.beforeTitle.apply(n,[t]),s=i.title.apply(n,[t]),o=i.afterTitle.apply(n,[t]);let a=[];return a=ah(a,ch(r)),a=ah(a,ch(s)),a=ah(a,ch(o)),a}getBeforeBody(t,e){return vh(e.callbacks.beforeBody.apply(this,[t]))}getBody(t,e){const n=this,{callbacks:i}=e,r=[];return ii(t,t=>{const e={before:[],lines:[],after:[]},s=wh(i,t);ah(e.before,ch(s.beforeLabel.call(n,t))),ah(e.lines,s.label.call(n,t)),ah(e.after,ch(s.afterLabel.call(n,t))),r.push(e)}),r}getAfterBody(t,e){return vh(e.callbacks.afterBody.apply(this,[t]))}getFooter(t,e){const n=this,{callbacks:i}=e,r=i.beforeFooter.apply(n,[t]),s=i.footer.apply(n,[t]),o=i.afterFooter.apply(n,[t]);let a=[];return a=ah(a,ch(r)),a=ah(a,ch(s)),a=ah(a,ch(o)),a}_createItems(t){const e=this,n=e._active,i=e._chart.data,r=[],s=[],o=[];let a,c,l=[];for(a=0,c=n.length;a<c;++a)l.push(lh(e._chart,n[a]));return t.filter&&(l=l.filter((e,n,r)=>t.filter(e,n,r,i))),t.itemSort&&(l=l.sort((e,n)=>t.itemSort(e,n,i))),ii(l,n=>{const i=wh(t.callbacks,n);r.push(i.labelColor.call(e,n)),s.push(i.labelPointStyle.call(e,n)),o.push(i.labelTextColor.call(e,n))}),e.labelColors=r,e.labelPointStyles=s,e.labelTextColors=o,e.dataPoints=l,l}update(t,e){const n=this,i=n.options.setContext(n.getContext()),r=n._active;let s,o=[];if(r.length){const t=oh[i.position].call(n,r,n._eventPosition);o=n._createItems(i),n.title=n.getTitle(o,i),n.beforeBody=n.getBeforeBody(o,i),n.body=n.getBody(o,i),n.afterBody=n.getAfterBody(o,i),n.footer=n.getFooter(o,i);const e=n._size=uh(n,i),a=Object.assign({},t,e),c=ph(n._chart,i,a),l=yh(i,a,c,n._chart);n.xAlign=c.xAlign,n.yAlign=c.yAlign,s={opacity:1,x:l.x,y:l.y,width:e.width,height:e.height,caretX:t.x,caretY:t.y}}else 0!==n.opacity&&(s={opacity:0});n._tooltipItems=o,n.$context=void 0,s&&n._resolveAnimations().update(n,s),t&&i.external&&i.external.call(n,{chart:n._chart,tooltip:n,replay:e})}drawCaret(t,e,n,i){const r=this.getCaretPosition(t,n,i);e.lineTo(r.x1,r.y1),e.lineTo(r.x2,r.y2),e.lineTo(r.x3,r.y3)}getCaretPosition(t,e,n){const{xAlign:i,yAlign:r}=this,{cornerRadius:s,caretSize:o}=n,{x:a,y:c}=t,{width:l,height:u}=e;let h,d,f,p,g,m;return"center"===r?(g=c+u/2,"left"===i?(h=a,d=h-o,p=g+o,m=g-o):(h=a+l,d=h+o,p=g-o,m=g+o),f=h):(d="left"===i?a+s+o:"right"===i?a+l-s-o:this.caretX,"top"===r?(p=c,g=p-o,h=d-o,f=d+o):(p=c+u,g=p+o,h=d+o,f=d-o),m=p),{x1:h,x2:d,x3:f,y1:p,y2:g,y3:m}}drawTitle(t,e,n){const i=this,r=i.title,s=r.length;let o,a,c;if(s){const l=xo(n.rtl,i.x,i.width);for(t.x=bh(i,n.titleAlign,n),e.textAlign=l.textAlign(n.titleAlign),e.textBaseline="middle",o=ds(n.titleFont),a=n.titleSpacing,e.fillStyle=n.titleColor,e.font=o.string,c=0;c<s;++c)e.fillText(r[c],l.x(t.x),t.y+o.lineHeight/2),t.y+=o.lineHeight+a,c+1===s&&(t.y+=n.titleMarginBottom-a)}}_drawColorBox(t,e,n,i,r){const s=this,o=s.labelColors[n],a=s.labelPointStyles[n],{boxHeight:c,boxWidth:l}=r,u=ds(r.bodyFont),h=bh(s,"left",r),d=i.x(h),f=c<u.lineHeight?(u.lineHeight-c)/2:0,p=e.y+f;if(r.usePointStyle){const e={radius:Math.min(l,c)/2,pointStyle:a.pointStyle,rotation:a.rotation,borderWidth:1},n=i.leftForLtr(d,l)+l/2,s=p+c/2;t.strokeStyle=r.multiKeyBackground,t.fillStyle=r.multiKeyBackground,Qr(t,e,n,s),t.strokeStyle=o.borderColor,t.fillStyle=o.backgroundColor,Qr(t,e,n,s)}else{t.lineWidth=o.borderWidth||1,t.strokeStyle=o.borderColor,t.setLineDash(o.borderDash||[]),t.lineDashOffset=o.borderDashOffset||0;const e=i.leftForLtr(d,l),n=i.leftForLtr(i.xPlus(d,1),l-2),s=us(o.borderRadius);Object.values(s).some(t=>0!==t)?(t.beginPath(),t.fillStyle=r.multiKeyBackground,is(t,{x:e,y:p,w:l,h:c,radius:s}),t.fill(),t.stroke(),t.fillStyle=o.backgroundColor,t.beginPath(),is(t,{x:n,y:p+1,w:l-2,h:c-2,radius:s}),t.fill()):(t.fillStyle=r.multiKeyBackground,t.fillRect(e,p,l,c),t.strokeRect(e,p,l,c),t.fillStyle=o.backgroundColor,t.fillRect(n,p+1,l-2,c-2))}t.fillStyle=s.labelTextColors[n]}drawBody(t,e,n){const i=this,{body:r}=i,{bodySpacing:s,bodyAlign:o,displayColors:a,boxHeight:c,boxWidth:l}=n,u=ds(n.bodyFont);let h=u.lineHeight,d=0;const f=xo(n.rtl,i.x,i.width),p=function(n){e.fillText(n,f.x(t.x+d),t.y+h/2),t.y+=h+s},g=f.textAlign(o);let m,y,b,v,_,w,x;for(e.textAlign=o,e.textBaseline="middle",e.font=u.string,t.x=bh(i,g,n),e.fillStyle=n.bodyColor,ii(i.beforeBody,p),d=a&&"right"!==g?"center"===o?l/2+1:l+2:0,v=0,w=r.length;v<w;++v){for(m=r[v],y=i.labelTextColors[v],e.fillStyle=y,ii(m.before,p),b=m.lines,a&&b.length&&(i._drawColorBox(e,t,v,f,n),h=Math.max(u.lineHeight,c)),_=0,x=b.length;_<x;++_)p(b[_]),h=u.lineHeight;ii(m.after,p)}d=0,h=u.lineHeight,ii(i.afterBody,p),t.y-=s}drawFooter(t,e,n){const i=this,r=i.footer,s=r.length;let o,a;if(s){const c=xo(n.rtl,i.x,i.width);for(t.x=bh(i,n.footerAlign,n),t.y+=n.footerMarginTop,e.textAlign=c.textAlign(n.footerAlign),e.textBaseline="middle",o=ds(n.footerFont),e.fillStyle=n.footerColor,e.font=o.string,a=0;a<s;++a)e.fillText(r[a],c.x(t.x),t.y+o.lineHeight/2),t.y+=o.lineHeight+n.footerSpacing}}drawBackground(t,e,n,i){const{xAlign:r,yAlign:s}=this,{x:o,y:a}=t,{width:c,height:l}=n,u=i.cornerRadius;e.fillStyle=i.backgroundColor,e.strokeStyle=i.borderColor,e.lineWidth=i.borderWidth,e.beginPath(),e.moveTo(o+u,a),"top"===s&&this.drawCaret(t,e,n,i),e.lineTo(o+c-u,a),e.quadraticCurveTo(o+c,a,o+c,a+u),"center"===s&&"right"===r&&this.drawCaret(t,e,n,i),e.lineTo(o+c,a+l-u),e.quadraticCurveTo(o+c,a+l,o+c-u,a+l),"bottom"===s&&this.drawCaret(t,e,n,i),e.lineTo(o+u,a+l),e.quadraticCurveTo(o,a+l,o,a+l-u),"center"===s&&"left"===r&&this.drawCaret(t,e,n,i),e.lineTo(o,a+u),e.quadraticCurveTo(o,a,o+u,a),e.closePath(),e.fill(),i.borderWidth>0&&e.stroke()}_updateAnimationTarget(t){const e=this,n=e._chart,i=e.$animations,r=i&&i.x,s=i&&i.y;if(r||s){const i=oh[t.position].call(e,e._active,e._eventPosition);if(!i)return;const o=e._size=uh(e,t),a=Object.assign({},i,e._size),c=ph(n,t,a),l=yh(t,a,c,n);r._to===l.x&&s._to===l.y||(e.xAlign=c.xAlign,e.yAlign=c.yAlign,e.width=o.width,e.height=o.height,e.caretX=i.x,e.caretY=i.y,e._resolveAnimations().update(e,l))}}draw(t){const e=this,n=e.options.setContext(e.getContext());let i=e.opacity;if(!i)return;e._updateAnimationTarget(n);const r={width:e.width,height:e.height},s={x:e.x,y:e.y};i=Math.abs(i)<.001?0:i;const o=hs(n.padding),a=e.title.length||e.beforeBody.length||e.body.length||e.afterBody.length||e.footer.length;n.enabled&&a&&(t.save(),t.globalAlpha=i,e.drawBackground(s,t,r,n),Io(t,n.textDirection),s.y+=o.top,e.drawTitle(s,t,n),e.drawBody(s,t,n),e.drawFooter(s,t,n),To(t,n.textDirection),t.restore())}getActiveElements(){return this._active||[]}setActiveElements(t,e){const n=this,i=n._active,r=t.map(({datasetIndex:t,index:e})=>{const i=n._chart.getDatasetMeta(t);if(!i)throw new Error("Cannot find a dataset at index "+t);return{datasetIndex:t,element:i.data[e],index:e}}),s=!ri(i,r),o=n._positionChanged(r,e);(s||o)&&(n._active=r,n._eventPosition=e,n.update(!0))}handleEvent(t,e){const n=this,i=n.options,r=n._active||[];let s=!1,o=[];"mouseout"!==t.type&&(o=n._chart.getElementsAtEventForMode(t,i.mode,i,e),i.reverse&&o.reverse());const a=n._positionChanged(o,t);return s=e||!ri(o,r)||a,s&&(n._active=o,(i.enabled||i.external)&&(n._eventPosition={x:t.x,y:t.y},n.update(!0,e))),s}_positionChanged(t,e){const{caretX:n,caretY:i,options:r}=this,s=oh[r.position].call(this,t,e);return!1!==s&&(n!==s.x||i!==s.y)}}xh.positioners=oh;var Ih={id:"tooltip",_element:xh,positioners:oh,afterInit(t,e,n){n&&(t.tooltip=new xh({_chart:t,options:n}))},beforeUpdate(t,e,n){t.tooltip&&t.tooltip.initialize(n)},reset(t,e,n){t.tooltip&&t.tooltip.initialize(n)},afterDraw(t){const e=t.tooltip,n={tooltip:e};!1!==t.notifyPlugins("beforeTooltipDraw",n)&&(e&&e.draw(t.ctx),t.notifyPlugins("afterTooltipDraw",n))},afterEvent(t,e){if(t.tooltip){const n=e.replay;t.tooltip.handleEvent(e.event,n)&&(e.changed=!0)}},defaults:{enabled:!0,external:null,position:"average",backgroundColor:"rgba(0,0,0,0.8)",titleColor:"#fff",titleFont:{weight:"bold"},titleSpacing:2,titleMarginBottom:6,titleAlign:"left",bodyColor:"#fff",bodySpacing:2,bodyFont:{},bodyAlign:"left",footerColor:"#fff",footerSpacing:2,footerMarginTop:6,footerFont:{weight:"bold"},footerAlign:"left",padding:6,caretPadding:2,caretSize:5,cornerRadius:6,boxHeight:(t,e)=>e.bodyFont.size,boxWidth:(t,e)=>e.bodyFont.size,multiKeyBackground:"#fff",displayColors:!0,borderColor:"rgba(0,0,0,0)",borderWidth:0,animation:{duration:400,easing:"easeOutQuart"},animations:{numbers:{type:"number",properties:["x","y","width","height","caretX","caretY"]},opacity:{easing:"linear",duration:200}},callbacks:{beforeTitle:$n,title(t){if(t.length>0){const e=t[0],n=e.chart.data.labels,i=n?n.length:0;if(this&&this.options&&"dataset"===this.options.mode)return e.dataset.label||"";if(e.label)return e.label;if(i>0&&e.dataIndex<i)return n[e.dataIndex]}return""},afterTitle:$n,beforeBody:$n,beforeLabel:$n,label(t){if(this&&this.options&&"dataset"===this.options.mode)return t.label+": "+t.formattedValue||t.formattedValue;let e=t.dataset.label||"";e&&(e+=": ");const n=t.formattedValue;return Gn(n)||(e+=n),e},labelColor(t){const e=t.chart.getDatasetMeta(t.datasetIndex),n=e.controller.getStyle(t.dataIndex);return{borderColor:n.borderColor,backgroundColor:n.backgroundColor,borderWidth:n.borderWidth,borderDash:n.borderDash,borderDashOffset:n.borderDashOffset,borderRadius:0}},labelTextColor(){return this.options.bodyColor},labelPointStyle(t){const e=t.chart.getDatasetMeta(t.datasetIndex),n=e.controller.getStyle(t.dataIndex);return{pointStyle:n.pointStyle,rotation:n.rotation}},afterLabel:$n,afterBody:$n,beforeFooter:$n,footer:$n,afterFooter:$n}},defaultRoutes:{bodyFont:"font",footerFont:"font",titleFont:"font"},descriptors:{_scriptable:t=>"filter"!==t&&"itemSort"!==t&&"external"!==t,_indexable:!1,callbacks:{_scriptable:!1,_indexable:!1},animation:{_fallback:!1},animations:{_fallback:"animation"}},additionalOptionScopes:["interaction"]},Th=Object.freeze({__proto__:null,Decimation:ku,Filler:Ju,Legend:nh,Title:sh,Tooltip:Ih});const kh=(t,e,n)=>"string"===typeof e?t.push(e)-1:isNaN(e)?null:n;function Eh(t,e,n){const i=t.indexOf(e);if(-1===i)return kh(t,e,n);const r=t.lastIndexOf(e);return i!==r?n:i}const Sh=(t,e)=>null===t?null:zi(Math.round(t),0,e);class Ah extends Yc{constructor(t){super(t),this._startValue=void 0,this._valueRange=0}parse(t,e){if(Gn(t))return null;const n=this.getLabels();return e=isFinite(e)&&n[e]===t?e:Eh(n,t,Zn(e,t)),Sh(e,n.length-1)}determineDataLimits(){const t=this,{minDefined:e,maxDefined:n}=t.getUserBounds();let{min:i,max:r}=t.getMinMax(!0);"ticks"===t.options.bounds&&(e||(i=0),n||(r=t.getLabels().length-1)),t.min=i,t.max=r}buildTicks(){const t=this,e=t.min,n=t.max,i=t.options.offset,r=[];let s=t.getLabels();s=0===e&&n===s.length-1?s:s.slice(e,n+1),t._valueRange=Math.max(s.length-(i?0:1),1),t._startValue=t.min-(i?.5:0);for(let o=e;o<=n;o++)r.push({value:o});return r}getLabelForValue(t){const e=this,n=e.getLabels();return t>=0&&t<n.length?n[t]:t}configure(){const t=this;super.configure(),t.isHorizontal()||(t._reversePixels=!t._reversePixels)}getPixelForValue(t){const e=this;return"number"!==typeof t&&(t=e.parse(t)),null===t?NaN:e.getPixelForDecimal((t-e._startValue)/e._valueRange)}getPixelForTick(t){const e=this,n=e.ticks;return t<0||t>n.length-1?null:e.getPixelForValue(n[t].value)}getValueForPixel(t){const e=this;return Math.round(e._startValue+e.getDecimalForPixel(t)*e._valueRange)}getBasePixel(){return this.bottom}}function Oh(t,e){const n=[],i=1e-14,{bounds:r,step:s,min:o,max:a,precision:c,count:l,maxTicks:u,maxDigits:h,includeBounds:d}=t,f=s||1,p=u-1,{min:g,max:m}=e,y=!Gn(o),b=!Gn(a),v=!Gn(l),_=(m-g)/(h+1);let w,x,I,T,k=Oi((m-g)/p/f)*f;if(k<i&&!y&&!b)return[{value:g},{value:m}];T=Math.ceil(m/k)-Math.floor(g/k),T>p&&(k=Oi(T*k/p/f)*f),Gn(c)||(w=Math.pow(10,c),k=Math.ceil(k*w)/w),"ticks"===r?(x=Math.floor(g/k)*k,I=Math.ceil(m/k)*k):(x=g,I=m),y&&b&&s&&Ni((a-o)/s,k/1e3)?(T=Math.min((a-o)/k,u),k=(a-o)/T,x=o,I=a):v?(x=y?o:x,I=b?a:I,T=l-1,k=(I-x)/T):(T=(I-x)/k,T=Di(T,Math.round(T),k/1e3)?Math.round(T):Math.ceil(T));const E=Math.max(Fi(k),Fi(x));w=Math.pow(10,Gn(c)?E:c),x=Math.round(x*w)/w,I=Math.round(I*w)/w;let S=0;for(y&&(d&&x!==o?(n.push({value:o}),x<o&&S++,Di(Math.round((x+S*k)*w)/w,o,Ch(o,_,t))&&S++):x<o&&S++);S<T;++S)n.push({value:Math.round((x+S*k)*w)/w});return b&&d&&I!==a?Di(n[n.length-1].value,a,Ch(a,_,t))?n[n.length-1].value=a:n.push({value:a}):b&&I!==a||n.push({value:I}),n}function Ch(t,e,{horizontal:n,minRotation:i}){const r=Mi(i),s=(n?Math.sin(r):Math.cos(r))||.001,o=.75*e*(""+t).length;return Math.min(e/s,o)}Ah.id="category",Ah.defaults={ticks:{callback:Ah.prototype.getLabelForValue}};class Rh extends Yc{constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._endValue=void 0,this._valueRange=0}parse(t,e){return Gn(t)||("number"===typeof t||t instanceof Number)&&!isFinite(+t)?null:+t}handleTickRangeOptions(){const t=this,{beginAtZero:e}=t.options,{minDefined:n,maxDefined:i}=t.getUserBounds();let{min:r,max:s}=t;const o=t=>r=n?r:t,a=t=>s=i?s:t;if(e){const t=Ai(r),e=Ai(s);t<0&&e<0?a(0):t>0&&e>0&&o(0)}r===s&&(a(s+1),e||o(r-1)),t.min=r,t.max=s}getTickLimit(){const t=this,e=t.options.ticks;let n,{maxTicksLimit:i,stepSize:r}=e;return r?n=Math.ceil(t.max/r)-Math.floor(t.min/r)+1:(n=t.computeTickLimit(),i=i||11),i&&(n=Math.min(i,n)),n}computeTickLimit(){return Number.POSITIVE_INFINITY}buildTicks(){const t=this,e=t.options,n=e.ticks;let i=t.getTickLimit();i=Math.max(2,i);const r={maxTicks:i,bounds:e.bounds,min:e.min,max:e.max,precision:n.precision,step:n.stepSize,count:n.count,maxDigits:t._maxDigits(),horizontal:t.isHorizontal(),minRotation:n.minRotation||0,includeBounds:!1!==n.includeBounds},s=t._range||t,o=Oh(r,s);return"ticks"===e.bounds&&Pi(o,t,"value"),e.reverse?(o.reverse(),t.start=t.max,t.end=t.min):(t.start=t.min,t.end=t.max),o}configure(){const t=this,e=t.ticks;let n=t.min,i=t.max;if(super.configure(),t.options.offset&&e.length){const t=(i-n)/Math.max(e.length-1,1)/2;n-=t,i+=t}t._startValue=n,t._endValue=i,t._valueRange=i-n}getLabelForValue(t){return vo(t,this.chart.options.locale)}}class Dh extends Rh{determineDataLimits(){const t=this,{min:e,max:n}=t.getMinMax(!0);t.min=Jn(e)?e:0,t.max=Jn(n)?n:1,t.handleTickRangeOptions()}computeTickLimit(){const t=this,e=t.isHorizontal(),n=e?t.width:t.height,i=Mi(t.options.ticks.minRotation),r=(e?Math.sin(i):Math.cos(i))||.001,s=t._resolveTickFontOptions(0);return Math.ceil(n/Math.min(40,s.lineHeight/r))}getPixelForValue(t){return null===t?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getValueForPixel(t){return this._startValue+this.getDecimalForPixel(t)*this._valueRange}}function Nh(t){const e=t/Math.pow(10,Math.floor(Si(t)));return 1===e}function Ph(t,e){const n=Math.floor(Si(e.max)),i=Math.ceil(e.max/Math.pow(10,n)),r=[];let s=Xn(t.min,Math.pow(10,Math.floor(Si(e.min)))),o=Math.floor(Si(s)),a=Math.floor(s/Math.pow(10,o)),c=o<0?Math.pow(10,Math.abs(o)):1;do{r.push({value:s,major:Nh(s)}),++a,10===a&&(a=1,++o,c=o>=0?1:c),s=Math.round(a*Math.pow(10,o)*c)/c}while(o<n||o===n&&a<i);const l=Xn(t.max,s);return r.push({value:l,major:Nh(s)}),r}Dh.id="linear",Dh.defaults={ticks:{callback:Cc.formatters.numeric}};class Mh extends Yc{constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._valueRange=0}parse(t,e){const n=Rh.prototype.parse.apply(this,[t,e]);if(0!==n)return Jn(n)&&n>0?n:null;this._zero=!0}determineDataLimits(){const t=this,{min:e,max:n}=t.getMinMax(!0);t.min=Jn(e)?Math.max(0,e):null,t.max=Jn(n)?Math.max(0,n):null,t.options.beginAtZero&&(t._zero=!0),t.handleTickRangeOptions()}handleTickRangeOptions(){const t=this,{minDefined:e,maxDefined:n}=t.getUserBounds();let i=t.min,r=t.max;const s=t=>i=e?i:t,o=t=>r=n?r:t,a=(t,e)=>Math.pow(10,Math.floor(Si(t))+e);i===r&&(i<=0?(s(1),o(10)):(s(a(i,-1)),o(a(r,1)))),i<=0&&s(a(r,-1)),r<=0&&o(a(i,1)),t._zero&&t.min!==t._suggestedMin&&i===a(t.min,0)&&s(a(i,-1)),t.min=i,t.max=r}buildTicks(){const t=this,e=t.options,n={min:t._userMin,max:t._userMax},i=Ph(n,t);return"ticks"===e.bounds&&Pi(i,t,"value"),e.reverse?(i.reverse(),t.start=t.max,t.end=t.min):(t.start=t.min,t.end=t.max),i}getLabelForValue(t){return void 0===t?"0":vo(t,this.chart.options.locale)}configure(){const t=this,e=t.min;super.configure(),t._startValue=Si(e),t._valueRange=Si(t.max)-Si(e)}getPixelForValue(t){const e=this;return void 0!==t&&0!==t||(t=e.min),null===t||isNaN(t)?NaN:e.getPixelForDecimal(t===e.min?0:(Si(t)-e._startValue)/e._valueRange)}getValueForPixel(t){const e=this,n=e.getDecimalForPixel(t);return Math.pow(10,e._startValue+n*e._valueRange)}}function Lh(t){const e=t.ticks;if(e.display&&t.display){const t=hs(e.backdropPadding);return Zn(e.font&&e.font.size,Wr.font.size)+t.height}return 0}function Fh(t,e,n){return Yn(n)?{w:Kr(t,t.font,n),h:n.length*e}:{w:t.measureText(n).width,h:e}}function jh(t,e,n,i,r){return t===i||t===r?{start:e-n/2,end:e+n/2}:t<i||t>r?{start:e-n,end:e}:{start:e,end:e+n}}function Uh(t){const e={l:0,r:t.width,t:0,b:t.height-t.paddingTop},n={};let i,r,s;const o=[],a=[],c=t.getLabels().length;for(i=0;i<c;i++){const c=t.options.pointLabels.setContext(t.getContext(i));a[i]=c.padding,s=t.getPointPosition(i,t.drawingArea+a[i]);const l=ds(c.font);t.ctx.font=l.string,r=Fh(t.ctx,l.lineHeight,t._pointLabels[i]),o[i]=r;const u=t.getIndexAngle(i),h=Li(u),d=jh(h,s.x,r.w,0,180),f=jh(h,s.y,r.h,90,270);d.start<e.l&&(e.l=d.start,n.l=u),d.end>e.r&&(e.r=d.end,n.r=u),f.start<e.t&&(e.t=f.start,n.t=u),f.end>e.b&&(e.b=f.end,n.b=u)}t._setReductions(t.drawingArea,e,n),t._pointLabelItems=[];const l=t.options,u=Lh(l),h=t.getDistanceFromCenterForValue(l.ticks.reverse?t.min:t.max);for(i=0;i<c;i++){const e=0===i?u/2:0,n=t.getPointPosition(i,h+e+a[i]),r=Li(t.getIndexAngle(i)),s=o[i];Bh(r,s,n);const c=Vh(r);let l;l="left"===c?n.x:"center"===c?n.x-s.w/2:n.x-s.w;const d=l+s.w;t._pointLabelItems[i]={x:n.x,y:n.y,textAlign:c,left:l,top:n.y,right:d,bottom:n.y+s.h}}}function Vh(t){return 0===t||180===t?"center":t<180?"left":"right"}function Bh(t,e,n){90===t||270===t?n.y-=e.h/2:(t>270||t<90)&&(n.y-=e.h)}function qh(t,e){const{ctx:n,options:{pointLabels:i}}=t;for(let r=e-1;r>=0;r--){const e=i.setContext(t.getContext(r)),s=ds(e.font),{x:o,y:a,textAlign:c,left:l,top:u,right:h,bottom:d}=t._pointLabelItems[r],{backdropColor:f}=e;if(!Gn(f)){const t=hs(e.backdropPadding);n.fillStyle=f,n.fillRect(l-t.left,u-t.top,h-l+t.width,d-u+t.height)}ns(n,t._pointLabels[r],o,a+s.lineHeight/2,s,{color:e.color,textAlign:c,textBaseline:"middle"})}}function zh(t,e,n,i){const{ctx:r}=t;if(n)r.arc(t.xCenter,t.yCenter,e,0,_i);else{let n=t.getPointPosition(0,e);r.moveTo(n.x,n.y);for(let s=1;s<i;s++)n=t.getPointPosition(s,e),r.lineTo(n.x,n.y)}}function Wh(t,e,n,i){const r=t.ctx,s=e.circular,{color:o,lineWidth:a}=e;!s&&!i||!o||!a||n<0||(r.save(),r.strokeStyle=o,r.lineWidth=a,r.setLineDash(e.borderDash),r.lineDashOffset=e.borderDashOffset,r.beginPath(),zh(t,n,s,i),r.closePath(),r.stroke(),r.restore())}function Hh(t){return Ri(t)?t:0}Mh.id="logarithmic",Mh.defaults={ticks:{callback:Cc.formatters.logarithmic,major:{enabled:!0}}};class $h extends Rh{constructor(t){super(t),this.xCenter=void 0,this.yCenter=void 0,this.drawingArea=void 0,this._pointLabels=[],this._pointLabelItems=[]}setDimensions(){const t=this;t.width=t.maxWidth,t.height=t.maxHeight,t.paddingTop=Lh(t.options)/2,t.xCenter=Math.floor(t.width/2),t.yCenter=Math.floor((t.height-t.paddingTop)/2),t.drawingArea=Math.min(t.height-t.paddingTop,t.width)/2}determineDataLimits(){const t=this,{min:e,max:n}=t.getMinMax(!1);t.min=Jn(e)&&!isNaN(e)?e:0,t.max=Jn(n)&&!isNaN(n)?n:0,t.handleTickRangeOptions()}computeTickLimit(){return Math.ceil(this.drawingArea/Lh(this.options))}generateTickLabels(t){const e=this;Rh.prototype.generateTickLabels.call(e,t),e._pointLabels=e.getLabels().map((t,n)=>{const i=ni(e.options.pointLabels.callback,[t,n],e);return i||0===i?i:""})}fit(){const t=this,e=t.options;e.display&&e.pointLabels.display?Uh(t):t.setCenterPoint(0,0,0,0)}_setReductions(t,e,n){const i=this;let r=e.l/Math.sin(n.l),s=Math.max(e.r-i.width,0)/Math.sin(n.r),o=-e.t/Math.cos(n.t),a=-Math.max(e.b-(i.height-i.paddingTop),0)/Math.cos(n.b);r=Hh(r),s=Hh(s),o=Hh(o),a=Hh(a),i.drawingArea=Math.max(t/2,Math.min(Math.floor(t-(r+s)/2),Math.floor(t-(o+a)/2))),i.setCenterPoint(r,s,o,a)}setCenterPoint(t,e,n,i){const r=this,s=r.width-e-r.drawingArea,o=t+r.drawingArea,a=n+r.drawingArea,c=r.height-r.paddingTop-i-r.drawingArea;r.xCenter=Math.floor((o+s)/2+r.left),r.yCenter=Math.floor((a+c)/2+r.top+r.paddingTop)}getIndexAngle(t){const e=_i/this.getLabels().length,n=this.options.startAngle||0;return Bi(t*e+Mi(n))}getDistanceFromCenterForValue(t){const e=this;if(Gn(t))return NaN;const n=e.drawingArea/(e.max-e.min);return e.options.reverse?(e.max-t)*n:(t-e.min)*n}getValueForDistanceFromCenter(t){if(Gn(t))return NaN;const e=this,n=t/(e.drawingArea/(e.max-e.min));return e.options.reverse?e.max-n:e.min+n}getPointPosition(t,e){const n=this,i=n.getIndexAngle(t)-Ti;return{x:Math.cos(i)*e+n.xCenter,y:Math.sin(i)*e+n.yCenter,angle:i}}getPointPositionForValue(t,e){return this.getPointPosition(t,this.getDistanceFromCenterForValue(e))}getBasePosition(t){return this.getPointPositionForValue(t||0,this.getBaseValue())}getPointLabelPosition(t){const{left:e,top:n,right:i,bottom:r}=this._pointLabelItems[t];return{left:e,top:n,right:i,bottom:r}}drawBackground(){const t=this,{backgroundColor:e,grid:{circular:n}}=t.options;if(e){const i=t.ctx;i.save(),i.beginPath(),zh(t,t.getDistanceFromCenterForValue(t._endValue),n,t.getLabels().length),i.closePath(),i.fillStyle=e,i.fill(),i.restore()}}drawGrid(){const t=this,e=t.ctx,n=t.options,{angleLines:i,grid:r}=n,s=t.getLabels().length;let o,a,c;if(n.pointLabels.display&&qh(t,s),r.display&&t.ticks.forEach((e,n)=>{if(0!==n){a=t.getDistanceFromCenterForValue(e.value);const i=r.setContext(t.getContext(n-1));Wh(t,i,a,s)}}),i.display){for(e.save(),o=t.getLabels().length-1;o>=0;o--){const r=i.setContext(t.getContext(o)),{color:s,lineWidth:l}=r;l&&s&&(e.lineWidth=l,e.strokeStyle=s,e.setLineDash(r.borderDash),e.lineDashOffset=r.borderDashOffset,a=t.getDistanceFromCenterForValue(n.ticks.reverse?t.min:t.max),c=t.getPointPosition(o,a),e.beginPath(),e.moveTo(t.xCenter,t.yCenter),e.lineTo(c.x,c.y),e.stroke())}e.restore()}}drawBorder(){}drawLabels(){const t=this,e=t.ctx,n=t.options,i=n.ticks;if(!i.display)return;const r=t.getIndexAngle(0);let s,o;e.save(),e.translate(t.xCenter,t.yCenter),e.rotate(r),e.textAlign="center",e.textBaseline="middle",t.ticks.forEach((r,a)=>{if(0===a&&!n.reverse)return;const c=i.setContext(t.getContext(a)),l=ds(c.font);if(s=t.getDistanceFromCenterForValue(t.ticks[a].value),c.showLabelBackdrop){o=e.measureText(r.label).width,e.fillStyle=c.backdropColor;const t=hs(c.backdropPadding);e.fillRect(-o/2-t.left,-s-l.size/2-t.top,o+t.width,l.size+t.height)}ns(e,r.label,0,-s,l,{color:c.color})}),e.restore()}drawTitle(){}}$h.id="radialLinear",$h.defaults={display:!0,animate:!0,position:"chartArea",angleLines:{display:!0,lineWidth:1,borderDash:[],borderDashOffset:0},grid:{circular:!1},startAngle:0,ticks:{showLabelBackdrop:!0,callback:Cc.formatters.numeric},pointLabels:{backdropColor:void 0,backdropPadding:2,display:!0,font:{size:10},callback(t){return t},padding:5}},$h.defaultRoutes={"angleLines.color":"borderColor","pointLabels.color":"color","ticks.color":"color"},$h.descriptors={angleLines:{_fallback:"grid"}};const Kh={millisecond:{common:!0,size:1,steps:1e3},second:{common:!0,size:1e3,steps:60},minute:{common:!0,size:6e4,steps:60},hour:{common:!0,size:36e5,steps:24},day:{common:!0,size:864e5,steps:30},week:{common:!1,size:6048e5,steps:4},month:{common:!0,size:2628e6,steps:12},quarter:{common:!1,size:7884e6,steps:4},year:{common:!0,size:3154e7}},Gh=Object.keys(Kh);function Yh(t,e){return t-e}function Qh(t,e){if(Gn(e))return null;const n=t._adapter,{parser:i,round:r,isoWeekday:s}=t._parseOpts;let o=e;return"function"===typeof i&&(o=i(o)),Jn(o)||(o="string"===typeof i?n.parse(o,i):n.parse(o)),null===o?null:(r&&(o="week"!==r||!Ri(s)&&!0!==s?n.startOf(o,r):n.startOf(o,"isoWeek",s)),+o)}function Jh(t,e,n,i){const r=Gh.length;for(let s=Gh.indexOf(t);s<r-1;++s){const t=Kh[Gh[s]],r=t.steps?t.steps:Number.MAX_SAFE_INTEGER;if(t.common&&Math.ceil((n-e)/(r*t.size))<=i)return Gh[s]}return Gh[r-1]}function Xh(t,e,n,i,r){for(let s=Gh.length-1;s>=Gh.indexOf(n);s--){const n=Gh[s];if(Kh[n].common&&t._adapter.diff(r,i,n)>=e-1)return n}return Gh[n?Gh.indexOf(n):0]}function Zh(t){for(let e=Gh.indexOf(t)+1,n=Gh.length;e<n;++e)if(Kh[Gh[e]].common)return Gh[e]}function td(t,e,n){if(n){if(n.length){const{lo:i,hi:r}=gs(n,e),s=n[i]>=e?n[i]:n[r];t[s]=!0}}else t[e]=!0}function ed(t,e,n,i){const r=t._adapter,s=+r.startOf(e[0].value,i),o=e[e.length-1].value;let a,c;for(a=s;a<=o;a=+r.add(a,1,i))c=n[a],c>=0&&(e[c].major=!0);return e}function nd(t,e,n){const i=[],r={},s=e.length;let o,a;for(o=0;o<s;++o)a=e[o],r[a]=o,i.push({value:a,major:!1});return 0!==s&&n?ed(t,i,r,n):i}class id extends Yc{constructor(t){super(t),this._cache={data:[],labels:[],all:[]},this._unit="day",this._majorUnit=void 0,this._offsets={},this._normalized=!1,this._parseOpts=void 0}init(t,e){const n=t.time||(t.time={}),i=this._adapter=new Ma._date(t.adapters.date);li(n.displayFormats,i.formats()),this._parseOpts={parser:n.parser,round:n.round,isoWeekday:n.isoWeekday},super.init(t),this._normalized=e.normalized}parse(t,e){return void 0===t?null:Qh(this,t)}beforeLayout(){super.beforeLayout(),this._cache={data:[],labels:[],all:[]}}determineDataLimits(){const t=this,e=t.options,n=t._adapter,i=e.time.unit||"day";let{min:r,max:s,minDefined:o,maxDefined:a}=t.getUserBounds();function c(t){o||isNaN(t.min)||(r=Math.min(r,t.min)),a||isNaN(t.max)||(s=Math.max(s,t.max))}o&&a||(c(t._getLabelBounds()),"ticks"===e.bounds&&"labels"===e.ticks.source||c(t.getMinMax(!1))),r=Jn(r)&&!isNaN(r)?r:+n.startOf(Date.now(),i),s=Jn(s)&&!isNaN(s)?s:+n.endOf(Date.now(),i)+1,t.min=Math.min(r,s-1),t.max=Math.max(r+1,s)}_getLabelBounds(){const t=this.getLabelTimestamps();let e=Number.POSITIVE_INFINITY,n=Number.NEGATIVE_INFINITY;return t.length&&(e=t[0],n=t[t.length-1]),{min:e,max:n}}buildTicks(){const t=this,e=t.options,n=e.time,i=e.ticks,r="labels"===i.source?t.getLabelTimestamps():t._generate();"ticks"===e.bounds&&r.length&&(t.min=t._userMin||r[0],t.max=t._userMax||r[r.length-1]);const s=t.min,o=t.max,a=bs(r,s,o);return t._unit=n.unit||(i.autoSkip?Jh(n.minUnit,t.min,t.max,t._getLabelCapacity(s)):Xh(t,a.length,n.minUnit,t.min,t.max)),t._majorUnit=i.major.enabled&&"year"!==t._unit?Zh(t._unit):void 0,t.initOffsets(r),e.reverse&&a.reverse(),nd(t,a,t._majorUnit)}initOffsets(t){const e=this;let n,i,r=0,s=0;e.options.offset&&t.length&&(n=e.getDecimalForValue(t[0]),r=1===t.length?1-n:(e.getDecimalForValue(t[1])-n)/2,i=e.getDecimalForValue(t[t.length-1]),s=1===t.length?i:(i-e.getDecimalForValue(t[t.length-2]))/2);const o=t.length<3?.5:.25;r=zi(r,0,o),s=zi(s,0,o),e._offsets={start:r,end:s,factor:1/(r+1+s)}}_generate(){const t=this,e=t._adapter,n=t.min,i=t.max,r=t.options,s=r.time,o=s.unit||Jh(s.minUnit,n,i,t._getLabelCapacity(n)),a=Zn(s.stepSize,1),c="week"===o&&s.isoWeekday,l=Ri(c)||!0===c,u={};let h,d,f=n;if(l&&(f=+e.startOf(f,"isoWeek",c)),f=+e.startOf(f,l?"day":o),e.diff(i,n,o)>1e5*a)throw new Error(n+" and "+i+" are too far apart with stepSize of "+a+" "+o);const p="data"===r.ticks.source&&t.getDataTimestamps();for(h=f,d=0;h<i;h=+e.add(h,a,o),d++)td(u,h,p);return h!==i&&"ticks"!==r.bounds&&1!==d||td(u,h,p),Object.keys(u).sort((t,e)=>t-e).map(t=>+t)}getLabelForValue(t){const e=this,n=e._adapter,i=e.options.time;return i.tooltipFormat?n.format(t,i.tooltipFormat):n.format(t,i.displayFormats.datetime)}_tickFormatFunction(t,e,n,i){const r=this,s=r.options,o=s.time.displayFormats,a=r._unit,c=r._majorUnit,l=a&&o[a],u=c&&o[c],h=n[e],d=c&&u&&h&&h.major,f=r._adapter.format(t,i||(d?u:l)),p=s.ticks.callback;return p?ni(p,[f,e,n],r):f}generateTickLabels(t){let e,n,i;for(e=0,n=t.length;e<n;++e)i=t[e],i.label=this._tickFormatFunction(i.value,e,t)}getDecimalForValue(t){const e=this;return null===t?NaN:(t-e.min)/(e.max-e.min)}getPixelForValue(t){const e=this,n=e._offsets,i=e.getDecimalForValue(t);return e.getPixelForDecimal((n.start+i)*n.factor)}getValueForPixel(t){const e=this,n=e._offsets,i=e.getDecimalForPixel(t)/n.factor-n.end;return e.min+i*(e.max-e.min)}_getLabelSize(t){const e=this,n=e.options.ticks,i=e.ctx.measureText(t).width,r=Mi(e.isHorizontal()?n.maxRotation:n.minRotation),s=Math.cos(r),o=Math.sin(r),a=e._resolveTickFontOptions(0).size;return{w:i*s+a*o,h:i*o+a*s}}_getLabelCapacity(t){const e=this,n=e.options.time,i=n.displayFormats,r=i[n.unit]||i.millisecond,s=e._tickFormatFunction(t,0,nd(e,[t],e._majorUnit),r),o=e._getLabelSize(s),a=Math.floor(e.isHorizontal()?e.width/o.w:e.height/o.h)-1;return a>0?a:1}getDataTimestamps(){const t=this;let e,n,i=t._cache.data||[];if(i.length)return i;const r=t.getMatchingVisibleMetas();if(t._normalized&&r.length)return t._cache.data=r[0].controller.getAllParsedValues(t);for(e=0,n=r.length;e<n;++e)i=i.concat(r[e].controller.getAllParsedValues(t));return t._cache.data=t.normalize(i)}getLabelTimestamps(){const t=this,e=t._cache.labels||[];let n,i;if(e.length)return e;const r=t.getLabels();for(n=0,i=r.length;n<i;++n)e.push(Qh(t,r[n]));return t._cache.labels=t._normalized?e:t.normalize(e)}normalize(t){return xs(t.sort(Yh))}}function rd(t,e,n){let i,r,s,o;if(n)i=Math.floor(e),r=Math.ceil(e),s=t[i],o=t[r];else{const n=gs(t,e);s=n.lo,o=n.hi,i=t[s],r=t[o]}const a=r-i;return a?s+(o-s)*(e-i)/a:s}id.id="time",id.defaults={bounds:"data",adapters:{},time:{parser:!1,unit:!1,round:!1,isoWeekday:!1,minUnit:"millisecond",displayFormats:{}},ticks:{source:"auto",major:{enabled:!1}}};class sd extends id{constructor(t){super(t),this._table=[],this._maxIndex=void 0}initOffsets(){const t=this,e=t._getTimestampsForTable();t._table=t.buildLookupTable(e),t._maxIndex=t._table.length-1,super.initOffsets(e)}buildLookupTable(t){const e=this,{min:n,max:i}=e;if(!t.length)return[{time:n,pos:0},{time:i,pos:1}];const r=[n];let s,o,a;for(s=0,o=t.length;s<o;++s)a=t[s],a>n&&a<i&&r.push(a);return r.push(i),r}_getTimestampsForTable(){const t=this;let e=t._cache.all||[];if(e.length)return e;const n=t.getDataTimestamps(),i=t.getLabelTimestamps();return e=n.length&&i.length?t.normalize(n.concat(i)):n.length?n:i,e=t._cache.all=e,e}getPixelForValue(t,e){const n=this,i=n._offsets,r=n._normalized&&n._maxIndex>0&&!Gn(e)?e/n._maxIndex:n.getDecimalForValue(t);return n.getPixelForDecimal((i.start+r)*i.factor)}getDecimalForValue(t){return rd(this._table,t)/this._maxIndex}getValueForPixel(t){const e=this,n=e._offsets,i=e.getDecimalForPixel(t)/n.factor-n.end;return rd(e._table,i*this._maxIndex,!0)}}sd.id="timeseries",sd.defaults=id.defaults;var od=Object.freeze({__proto__:null,CategoryScale:Ah,LinearScale:Dh,LogarithmicScale:Mh,RadialLinearScale:$h,TimeScale:id,TimeSeriesScale:sd});const ad=[Da,vu,Th,od];Nl.register(...ad);var cd=Nl,ld={props:["canvasLabelType","labelEndNum"],data:function(){return{canvasLabel:"",labelArr:[]}},methods:{labelCheck:function(){switch(this.canvasLabelType){case"date":this.canvasLabel="日";for(var t=parseInt(this.labelEndNum,10),e=0;e<7;e++)this.labelArr.push(t),t-=1;this.labelArr=this.labelArr.reverse();break;case"time":this.canvasLabel="時";for(var n=parseInt(this.labelEndNum,10),i=0;i<7;i++)this.labelArr.push(n),n-=1;this.labelArr=this.labelArr.reverse();break}},renderChart:function(){this.labelCheck();var t=this.$el;new cd(t,{type:"line",data:{labels:this.labelArr,datasets:[{label:this.canvasLabel,data:[12,19,3,5,2,3,7],backgroundColor:["rgba(255, 99, 132, 0.2)","rgba(54, 162, 235, 0.2)","rgba(255, 206, 86, 0.2)","rgba(75, 192, 192, 0.2)","rgba(153, 102, 255, 0.2)","rgba(255, 159, 64, 0.2)"],borderColor:["rgba(255,99,132,1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)","rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)","rgba(255, 159, 64, 1)"],borderWidth:1}]},options:{scales:{yAxes:[{ticks:{beginAtZero:!0}}]}}})}},mounted:function(){this.renderChart()}},ud=ld,hd=(n("ec2d"),n("2877")),dd=Object(hd["a"])(ud,jn,Un,!1,null,"78107e5b",null),fd=dd.exports,pd=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"btnBase",class:t.btnColor},[n("div",{staticClass:"btnTextArea"},[n("p",{staticClass:"icon",domProps:{innerHTML:t._s(t.icon)}}),n("p",{staticClass:"btnText"},[t._v(t._s(t.btnText))])])])},gd=[],md={props:{btnText:{type:String,required:!0},btnColor:{type:String,required:!0},icon:{type:String,required:!1,default:""}}},yd=md,bd=(n("6546"),Object(hd["a"])(yd,pd,gd,!1,null,"d32d650a",null)),vd=bd.exports;console.log(Fn.apiTest);var _d={name:"home",components:{Chart:fd,Btn:vd},data:function(){return{isActive:"1"}},methods:{getTest:function(){Fn.collection("test").get().then((function(t){t.forEach((function(t){console.log("".concat(t.id," => ").concat(t.data().name))}))}))},pushTest:function(){Fn.collection("test").add({name:"mikan"}).then((function(){console.log("Document successfully written!")})).catch((function(t){console.error("Error writing document: ",t)}))}}},wd=_d,xd=(n("841c"),Object(hd["a"])(wd,i,r,!1,null,"63d46bef",null));e["default"]=xd.exports},df7c:function(t,e,n){(function(t){function n(t,e){for(var n=0,i=t.length-1;i>=0;i--){var r=t[i];"."===r?t.splice(i,1):".."===r?(t.splice(i,1),n++):n&&(t.splice(i,1),n--)}if(e)for(;n--;n)t.unshift("..");return t}function i(t){"string"!==typeof t&&(t+="");var e,n=0,i=-1,r=!0;for(e=t.length-1;e>=0;--e)if(47===t.charCodeAt(e)){if(!r){n=e+1;break}}else-1===i&&(r=!1,i=e+1);return-1===i?"":t.slice(n,i)}function r(t,e){if(t.filter)return t.filter(e);for(var n=[],i=0;i<t.length;i++)e(t[i],i,t)&&n.push(t[i]);return n}e.resolve=function(){for(var e="",i=!1,s=arguments.length-1;s>=-1&&!i;s--){var o=s>=0?arguments[s]:t.cwd();if("string"!==typeof o)throw new TypeError("Arguments to path.resolve must be strings");o&&(e=o+"/"+e,i="/"===o.charAt(0))}return e=n(r(e.split("/"),(function(t){return!!t})),!i).join("/"),(i?"/":"")+e||"."},e.normalize=function(t){var i=e.isAbsolute(t),o="/"===s(t,-1);return t=n(r(t.split("/"),(function(t){return!!t})),!i).join("/"),t||i||(t="."),t&&o&&(t+="/"),(i?"/":"")+t},e.isAbsolute=function(t){return"/"===t.charAt(0)},e.join=function(){var t=Array.prototype.slice.call(arguments,0);return e.normalize(r(t,(function(t,e){if("string"!==typeof t)throw new TypeError("Arguments to path.join must be strings");return t})).join("/"))},e.relative=function(t,n){function i(t){for(var e=0;e<t.length;e++)if(""!==t[e])break;for(var n=t.length-1;n>=0;n--)if(""!==t[n])break;return e>n?[]:t.slice(e,n-e+1)}t=e.resolve(t).substr(1),n=e.resolve(n).substr(1);for(var r=i(t.split("/")),s=i(n.split("/")),o=Math.min(r.length,s.length),a=o,c=0;c<o;c++)if(r[c]!==s[c]){a=c;break}var l=[];for(c=a;c<r.length;c++)l.push("..");return l=l.concat(s.slice(a)),l.join("/")},e.sep="/",e.delimiter=":",e.dirname=function(t){if("string"!==typeof t&&(t+=""),0===t.length)return".";for(var e=t.charCodeAt(0),n=47===e,i=-1,r=!0,s=t.length-1;s>=1;--s)if(e=t.charCodeAt(s),47===e){if(!r){i=s;break}}else r=!1;return-1===i?n?"/":".":n&&1===i?"/":t.slice(0,i)},e.basename=function(t,e){var n=i(t);return e&&n.substr(-1*e.length)===e&&(n=n.substr(0,n.length-e.length)),n},e.extname=function(t){"string"!==typeof t&&(t+="");for(var e=-1,n=0,i=-1,r=!0,s=0,o=t.length-1;o>=0;--o){var a=t.charCodeAt(o);if(47!==a)-1===i&&(r=!1,i=o+1),46===a?-1===e?e=o:1!==s&&(s=1):-1!==e&&(s=-1);else if(!r){n=o+1;break}}return-1===e||-1===i||0===s||1===s&&e===i-1&&e===n+1?"":t.slice(e,i)};var s="b"==="ab".substr(-1)?function(t,e,n){return t.substr(e,n)}:function(t,e,n){return e<0&&(e=t.length+e),t.substr(e,n)}}).call(this,n("4362"))},e691:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return l})),n.d(e,"c",(function(){return u})),n.d(e,"d",(function(){return h}));
/**
 * @license
 * Copyright 2017 Google LLC
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
 */
const i=[];var r;(function(t){t[t["DEBUG"]=0]="DEBUG",t[t["VERBOSE"]=1]="VERBOSE",t[t["INFO"]=2]="INFO",t[t["WARN"]=3]="WARN",t[t["ERROR"]=4]="ERROR",t[t["SILENT"]=5]="SILENT"})(r||(r={}));const s={debug:r.DEBUG,verbose:r.VERBOSE,info:r.INFO,warn:r.WARN,error:r.ERROR,silent:r.SILENT},o=r.INFO,a={[r.DEBUG]:"log",[r.VERBOSE]:"log",[r.INFO]:"info",[r.WARN]:"warn",[r.ERROR]:"error"},c=(t,e,...n)=>{if(e<t.logLevel)return;const i=(new Date).toISOString(),r=a[e];if(!r)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[r](`[${i}]  ${t.name}:`,...n)};class l{constructor(t){this.name=t,this._logLevel=o,this._logHandler=c,this._userLogHandler=null,i.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in r))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"===typeof t?s[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!==typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,r.DEBUG,...t),this._logHandler(this,r.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,r.VERBOSE,...t),this._logHandler(this,r.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,r.INFO,...t),this._logHandler(this,r.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,r.WARN,...t),this._logHandler(this,r.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,r.ERROR,...t),this._logHandler(this,r.ERROR,...t)}}function u(t){i.forEach(e=>{e.setLogLevel(t)})}function h(t,e){for(const n of i){let i=null;e&&e.level&&(i=s[e.level]),n.userLogHandler=null===t?null:(e,n,...s)=>{const o=s.map(t=>{if(null==t)return null;if("string"===typeof t)return t;if("number"===typeof t||"boolean"===typeof t)return t.toString();if(t instanceof Error)return t.message;try{return JSON.stringify(t)}catch(e){return null}}).filter(t=>t).join(" ");n>=(null!==i&&void 0!==i?i:e.logLevel)&&t({level:r[n].toLowerCase(),message:o,args:s,type:e.name})}}}},e86b:function(t,e,n){},e8b5:function(t,e,n){var i=n("c6b6");t.exports=Array.isArray||function(t){return"Array"==i(t)}},e9c4:function(t,e,n){var i=n("23e7"),r=n("da84"),s=n("d066"),o=n("2ba4"),a=n("e330"),c=n("d039"),l=r.Array,u=s("JSON","stringify"),h=a(/./.exec),d=a("".charAt),f=a("".charCodeAt),p=a("".replace),g=a(1..toString),m=/[\uD800-\uDFFF]/g,y=/^[\uD800-\uDBFF]$/,b=/^[\uDC00-\uDFFF]$/,v=function(t,e,n){var i=d(n,e-1),r=d(n,e+1);return h(y,t)&&!h(b,r)||h(b,t)&&!h(y,i)?"\\u"+g(f(t,0),16):t},_=c((function(){return'"\\udf06\\ud834"'!==u("\udf06\ud834")||'"\\udead"'!==u("\udead")}));u&&i({target:"JSON",stat:!0,forced:_},{stringify:function(t,e,n){for(var i=0,r=arguments.length,s=l(r);i<r;i++)s[i]=arguments[i];var a=o(u,null,s);return"string"==typeof a?p(a,m,v):a}})},ec2d:function(t,e,n){"use strict";n("e86b")}}]);
//# sourceMappingURL=chunk-b0106600.44eadccf.js.map