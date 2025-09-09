# Portfolio
This is my personal portfolio website
├── README.md
├── faizan.jpg
├── frontend resume.pdf
├── index.html
├── script.js
└── style.css


/README.md:
--------------------------------------------------------------------------------
1 | # Portfolio
2 | This is my personal portfolio website
3 | 


--------------------------------------------------------------------------------
/faizan.jpg:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/faizankhan005/Portfolio/889de3dac89875320f804cf086bfb32416a10dc9/faizan.jpg


--------------------------------------------------------------------------------
/frontend resume.pdf:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/faizankhan005/Portfolio/889de3dac89875320f804cf086bfb32416a10dc9/frontend resume.pdf


--------------------------------------------------------------------------------
/index.html:
--------------------------------------------------------------------------------
  1 | <!DOCTYPE html>
  2 | <html lang="en">
  3 |   <head>
  4 |     <meta charset="UTF-8" />
  5 |     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  6 |     <title>Faizan Khan - Full Stack Developer</title>
  7 |     <script src="https://cdn.tailwindcss.com"></script>
  8 |     <link
  9 |       href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
 10 |       rel="stylesheet"
 11 |     />
 12 |     <link href="style.css" rel="stylesheet" />
 13 |     
 14 |   </head>
 15 |   <body class="bg-gray-50">
 16 |     <!-- Navigation Bar -->
 17 |     <nav class="bg-white shadow-lg fixed w-full top-0 z-50">
 18 |       <div class="max-w-7xl mx-auto px-4">
 19 |         <div class="flex justify-between items-center py-4">
 20 |           <div class="flex items-center space-x-3">
 21 |             <!-- Small DP -->
 22 |             <img
 23 |               src="faizan.jpg"
 24 |               alt="Faizan Khan"
 25 |               class="w-10 h-10 rounded-full border-2 border-purple-600"
 26 |             />
 27 | 
 28 |             <!-- Name -->
 29 |             <div class="text-2xl font-bold text-purple-600">Faizan Khan</div>
 30 |           </div>
 31 | 
 32 |           <div class="hidden md:flex space-x-8">
 33 |             <a
 34 |               href="#home"
 35 |               class="text-gray-700 hover:text-purple-600 transition duration-300"
 36 |               >Home</a
 37 |             >
 38 |             <a
 39 |               href="#about"
 40 |               class="text-gray-700 hover:text-purple-600 transition duration-300"
 41 |               >About</a
 42 |             >
 43 |             <a
 44 |               href="#skills"
 45 |               class="text-gray-700 hover:text-purple-600 transition duration-300"
 46 |               >Skills</a
 47 |             >
 48 |             <a
 49 |               href="#portfolio"
 50 |               class="text-gray-700 hover:text-purple-600 transition duration-300"
 51 |               >Portfolio</a
 52 |             >
 53 |             <a
 54 |               href="#contact"
 55 |               class="text-gray-700 hover:text-purple-600 transition duration-300"
 56 |               >Contact</a
 57 |             >
 58 |           </div>
 59 |           <div class="flex space-x-3">
 60 |             <button
 61 |               onclick="openModal('loginModal')"
 62 |               class="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition duration-300"
 63 |             >
 64 |               Login
 65 |             </button>
 66 |             <button
 67 |               onclick="openModal('registerModal')"
 68 |               class="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition duration-300"
 69 |             >
 70 |               Register
 71 |             </button>
 72 |           </div>
 73 |         </div>
 74 |       </div>
 75 |     </nav>
 76 | 
 77 |     <!-- Hero Section -->
 78 |     <section id="home" class="gradient-bg text-white pt-24 pb-16">
 79 |       <div class="max-w-7xl mx-auto px-4 text-center">
 80 |         <div class="py-20">
 81 |           <h1 class="text-5xl font-bold mb-6">Faizan Khan</h1>
 82 |           <h2 class="text-2xl mb-8">Full Stack Developer</h2>
 83 |           <p class="text-xl mb-8 max-w-2xl mx-auto">
 84 |             Passionate Computer Science Engineering student specializing in
 85 |             Frontend, Backend, and Full Stack Development
 86 |           </p>
 87 |           <div class="flex justify-center space-x-4">
 88 |             <!-- Download CV -->
 89 |             <a
 90 |               href="frontend resume.pdf"
 91 |               download
 92 |               class="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300 flex items-center"
 93 |             >
 94 |               <i class="fas fa-download mr-2"></i> Download CV
 95 |             </a>
 96 | 
 97 |             <!-- WhatsApp Contact -->
 98 |             <a
 99 |               href="https://wa.me/919671636548?text=Hello%20Faizan!%20I%20am%20interested%20in%20your%20profile."
100 |               target="_blank"
101 |               class="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition duration-300 flex items-center"
102 |             >
103 |               <i class="fas fa-envelope mr-2"></i> Contact Me
104 |             </a>
105 |           </div>
106 |         </div>
107 |       </div>
108 |     </section>
109 | 
110 |     <!-- About Section -->
111 |     <section id="about" class="py-16 bg-white">
112 |       <div class="max-w-7xl mx-auto px-4">
113 |         <div class="text-center mb-12">
114 |           <h2 class="text-4xl font-bold text-gray-800 mb-4">About Me</h2>
115 |           <div class="w-20 h-1 bg-purple-600 mx-auto"></div>
116 |         </div>
117 |         <div class="grid md:grid-cols-2 gap-12 items-center">
118 |           <div
119 |             class="w-80 h-80 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full mx-auto flex items-center justify-center overflow-hidden"
120 |           >
121 |             <img
122 |               src="faizan.jpg"
123 |               alt="Profile Photo"
124 |               class="w-full h-full object-cover rounded-full"
125 |             />
126 |           </div>
127 | 
128 |           <div>
129 |             <h3 class="text-2xl font-bold mb-6 text-gray-800">
130 |               Computer Science Engineering Student
131 |             </h3>
132 |             <div class="space-y-4 text-gray-600">
133 |               <p class="flex items-center">
134 |                 <i class="fas fa-graduation-cap text-purple-600 mr-3"></i
135 |                 ><strong>Education:</strong> B.Tech in Computer Science &
136 |                 Engineering
137 |               </p>
138 |               <p class="flex items-center">
139 |                 <i class="fas fa-university text-purple-600 mr-3"></i
140 |                 ><strong>University: </strong> Ch Devi Lal University
141 |               </p>
142 |               <p class="flex items-center">
143 |                 <i class="fas fa-code text-purple-600 mr-3"></i
144 |                 ><strong>Specialization:</strong> Full Stack Development
145 |               </p>
146 |               <p class="flex items-center">
147 |                 <i class="fas fa-laptop-code text-purple-600 mr-3"></i
148 |                 ><strong>Focus Areas:</strong> Frontend, Backend & Database
149 |                 Management
150 |               </p>
151 |             </div>
152 |             <p class="mt-6 text-gray-700 leading-relaxed">
153 |               I'm a passionate full-stack developer with expertise in modern web
154 |               technologies. Currently pursuing my B.Tech in Computer Science
155 |               Engineering, I love creating efficient, scalable web applications
156 |               and constantly learning new technologies.
157 |             </p>
158 |           </div>
159 |         </div>
160 |       </div>
161 |     </section>
162 | 
163 |     <!-- Skills Section -->
164 |     <section id="skills" class="py-16 bg-gray-100">
165 |       <div class="max-w-7xl mx-auto px-4">
166 |         <div class="text-center mb-12">
167 |           <h2 class="text-4xl font-bold text-gray-800 mb-4">My Skills</h2>
168 |           <div class="w-20 h-1 bg-purple-600 mx-auto"></div>
169 |         </div>
170 | 
171 |         <!-- Frontend Skills -->
172 |         <div class="mb-12">
173 |           <h3 class="text-2xl font-bold text-center mb-8 text-gray-800">
174 |             Frontend Development
175 |           </h3>
176 |           <div class="grid md:grid-cols-4 gap-6">
177 |             <div
178 |               class="skill-card bg-white p-6 rounded-lg shadow-md text-center"
179 |             >
180 |               <i class="fab fa-html5 text-orange-500 text-4xl mb-4"></i>
181 |               <h4 class="text-lg font-semibold">HTML5</h4>
182 |             </div>
183 |             <div
184 |               class="skill-card bg-white p-6 rounded-lg shadow-md text-center"
185 |             >
186 |               <i class="fab fa-css3-alt text-blue-500 text-4xl mb-4"></i>
187 |               <h4 class="text-lg font-semibold">CSS3</h4>
188 |             </div>
189 |             <div
190 |               class="skill-card bg-white p-6 rounded-lg shadow-md text-center"
191 |             >
192 |               <i class="fab fa-js text-yellow-500 text-4xl mb-4"></i>
193 |               <h4 class="text-lg font-semibold">JavaScript</h4>
194 |             </div>
195 |             <div
196 |               class="skill-card bg-white p-6 rounded-lg shadow-md text-center"
197 |             >
198 |               <i class="fab fa-react text-blue-400 text-4xl mb-4"></i>
199 |               <h4 class="text-lg font-semibold">React JS</h4>
200 |             </div>
201 |           </div>
202 |           <div class="flex justify-center mt-6">
203 |             <div
204 |               class="skill-card bg-white p-6 rounded-lg shadow-md text-center"
205 |             >
206 |               <i class="fas fa-wind text-teal-500 text-4xl mb-4"></i>
207 |               <h4 class="text-lg font-semibold">Tailwind CSS</h4>
208 |             </div>
209 |           </div>
210 |         </div>
211 | 
212 |         <!-- Backend Skills -->
213 |         <div class="mb-12">
214 |           <h3 class="text-2xl font-bold text-center mb-8 text-gray-800">
215 |             Backend Development
216 |           </h3>
217 |           <div class="grid md:grid-cols-3 gap-6">
218 |             <div
219 |               class="skill-card bg-white p-6 rounded-lg shadow-md text-center"
220 |             >
221 |               <i class="fab fa-node-js text-green-500 text-4xl mb-4"></i>
222 |               <h4 class="text-lg font-semibold">Node.js</h4>
223 |             </div>
224 |             <div
225 |               class="skill-card bg-white p-6 rounded-lg shadow-md text-center"
226 |             >
227 |               <i class="fas fa-server text-gray-600 text-4xl mb-4"></i>
228 |               <h4 class="text-lg font-semibold">Express.js</h4>
229 |             </div>
230 |             <div
231 |               class="skill-card bg-white p-6 rounded-lg shadow-md text-center"
232 |             >
233 |               <i class="fas fa-code text-purple-600 text-4xl mb-4"></i>
234 |               <h4 class="text-lg font-semibold">RESTful APIs</h4>
235 |             </div>
236 |           </div>
237 |         </div>
238 | 
239 |         <!-- Database Skills -->
240 |         <div>
241 |           <h3 class="text-2xl font-bold text-center mb-8 text-gray-800">
242 |             Database Management
243 |           </h3>
244 |           <div class="grid md:grid-cols-3 gap-6">
245 |             <div
246 |               class="skill-card bg-white p-6 rounded-lg shadow-md text-center"
247 |             >
248 |               <i class="fas fa-leaf text-green-600 text-4xl mb-4"></i>
249 |               <h4 class="text-lg font-semibold">MongoDB</h4>
250 |             </div>
251 |             <div
252 |               class="skill-card bg-white p-6 rounded-lg shadow-md text-center"
253 |             >
254 |               <i class="fas fa-database text-blue-600 text-4xl mb-4"></i>
255 |               <h4 class="text-lg font-semibold">SQL</h4>
256 |             </div>
257 |             <div
258 |               class="skill-card bg-white p-6 rounded-lg shadow-md text-center"
259 |             >
260 |               <i class="fas fa-cogs text-gray-600 text-4xl mb-4"></i>
261 |               <h4 class="text-lg font-semibold">Database Design</h4>
262 |             </div>
263 |           </div>
264 |         </div>
265 |       </div>
266 |     </section>
267 | 
268 |     <!-- Portfolio Section -->
269 |     <section id="portfolio" class="py-16 bg-white">
270 |       <div class="max-w-7xl mx-auto px-4">
271 |         <div class="text-center mb-12">
272 |           <h2 class="text-4xl font-bold text-gray-800 mb-4">Portfolio</h2>
273 |           <div class="w-20 h-1 bg-purple-600 mx-auto"></div>
274 |           <p class="text-gray-600 mt-4">
275 |             Here are some of my recent projects showcasing my full-stack
276 |             development skills
277 |           </p>
278 |         </div>
279 |         <div class="grid md:grid-cols-3 gap-8">
280 |           <!-- Project 1 -->
281 |           <div
282 |             class="bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300"
283 |           >
284 |             <div
285 |               class="h-48 bg-gradient-to-br from-purple-400 to-blue-500 flex items-center justify-center"
286 |             >
287 |               <i class="fas fa-shopping-cart text-white text-6xl"></i>
288 |             </div>
289 |             <div class="p-6">
290 |               <h3 class="text-xl font-bold mb-2">E-Commerce Platform</h3>
291 |               <p class="text-gray-600 mb-4">
292 |                 Full-stack e-commerce solution with React, Node.js, and MongoDB
293 |               </p>
294 |               <div class="flex flex-wrap gap-2 mb-4">
295 |                 <span
296 |                   class="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm"
297 |                   >React</span
298 |                 >
299 |                 <span
300 |                   class="bg-green-100 text-green-800 px-2 py-1 rounded text-sm"
301 |                   >Node.js</span
302 |                 >
303 |                 <span
304 |                   class="bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm"
305 |                   >MongoDB</span
306 |                 >
307 |               </div>
308 |               <button
309 |                 class="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition duration-300"
310 |               >
311 |                 View Project
312 |               </button>
313 |             </div>
314 |           </div>
315 | 
316 |           <!-- Project 2 -->
317 |           <div
318 |             class="bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300"
319 |           >
320 |             <div
321 |               class="h-48 bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center"
322 |             >
323 |               <i class="fas fa-tasks text-white text-6xl"></i>
324 |             </div>
325 |             <div class="p-6">
326 |               <h3 class="text-xl font-bold mb-2">Task Management App</h3>
327 |               <p class="text-gray-600 mb-4">
328 |                 Responsive task management application with real-time updates
329 |               </p>
330 |               <div class="flex flex-wrap gap-2 mb-4">
331 |                 <span
332 |                   class="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm"
333 |                   >React</span
334 |                 >
335 |                 <span
336 |                   class="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm"
337 |                   >JavaScript</span
338 |                 >
339 |                 <span
340 |                   class="bg-teal-100 text-teal-800 px-2 py-1 rounded text-sm"
341 |                   >Tailwind</span
342 |                 >
343 |               </div>
344 |               <button
345 |                 class="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition duration-300"
346 |               >
347 |                 View Project
348 |               </button>
349 |             </div>
350 |           </div>
351 | 
352 |           <!-- Project 3 -->
353 |           <div
354 |             class="bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300"
355 |           >
356 |             <div
357 |               class="h-48 bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center"
358 |             >
359 |               <i class="fas fa-chart-bar text-white text-6xl"></i>
360 |             </div>
361 |             <div class="p-6">
362 |               <h3 class="text-xl font-bold mb-2">Analytics Dashboard</h3>
363 |               <p class="text-gray-600 mb-4">
364 |                 Data visualization dashboard with interactive charts and graphs
365 |               </p>
366 |               <div class="flex flex-wrap gap-2 mb-4">
367 |                 <span
368 |                   class="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm"
369 |                   >React</span
370 |                 >
371 |                 <span
372 |                   class="bg-green-100 text-green-800 px-2 py-1 rounded text-sm"
373 |                   >Express</span
374 |                 >
375 |                 <span
376 |                   class="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm"
377 |                   >SQL</span
378 |                 >
379 |               </div>
380 |               <button
381 |                 class="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition duration-300"
382 |               >
383 |                 View Project
384 |               </button>
385 |             </div>
386 |           </div>
387 |         </div>
388 |       </div>
389 |     </section>
390 | 
391 |     <!-- Contact Section -->
392 |     <section id="contact" class="py-16 bg-gray-100">
393 |   <div class="max-w-7xl mx-auto px-4">
394 |     <!-- Section Title -->
395 |     <div class="text-center mb-12">
396 |       <h2 class="text-4xl font-bold text-gray-800 mb-4">Get In Touch</h2>
397 |       <div class="w-20 h-1 bg-purple-600 mx-auto"></div>
398 |       <p class="text-gray-600 mt-4">
399 |         Let's discuss your next project or collaboration opportunity
400 |       </p>
401 |     </div>
402 | 
403 |     <div class="grid md:grid-cols-2 gap-12">
404 |       <!-- Contact Info -->
405 |       <div>
406 |         <h3 class="text-2xl font-bold mb-6 text-gray-800">
407 |           Contact Information
408 |         </h3>
409 |         <div class="space-y-4">
410 |           <!-- Email -->
411 |           <a href="mailto:mrfaizankhan005@gmail.com" class="flex items-center hover:text-purple-600 transition">
412 |             <i class="fas fa-envelope text-purple-600 text-xl mr-4"></i>
413 |             <span>mrfaizankhan005@gmail.com</span>
414 |           </a>
415 | 
416 |           <!-- Phone -->
417 |           <a href="tel:+919671636548" class="flex items-center hover:text-purple-600 transition">
418 |             <i class="fas fa-phone text-purple-600 text-xl mr-4"></i>
419 |             <span>+91 9671636548</span>
420 |           </a>
421 | 
422 |           <!-- Location -->
423 |           <a href="https://www.google.com/maps/place/Haryana,+India" target="_blank" class="flex items-center hover:text-purple-600 transition">
424 |             <i class="fas fa-map-marker-alt text-purple-600 text-xl mr-4"></i>
425 |             <span>Haryana, India</span>
426 |           </a>
427 | 
428 |           <!-- LinkedIn -->
429 |           <a href="https://linkedin.com/in/faizan05" target="_blank" class="flex items-center hover:text-purple-600 transition">
430 |             <i class="fab fa-linkedin text-purple-600 text-xl mr-4"></i>
431 |             <span>linkedin.com/in/faizan05</span>
432 |           </a>
433 | 
434 |           <!-- GitHub -->
435 |           <a href="https://github.com/faizan005" target="_blank" class="flex items-center hover:text-purple-600 transition">
436 |             <i class="fab fa-github text-purple-600 text-xl mr-4"></i>
437 |             <span>github.com/faizan005</span>
438 |           </a>
439 | 
440 |           <!-- Instagram -->
441 |           <a href="https://instagram.com/ur_faizan05" target="_blank" class="flex items-center hover:text-purple-600 transition">
442 |             <i class="fab fa-instagram text-purple-600 text-xl mr-4"></i>
443 |             <span>instagram.com/ur_faizan05</span>
444 |           </a>
445 |         </div>
446 |       </div>
447 | 
448 |       <!-- Contact Form -->
449 |       <div>
450 |         <form id="contactForm" class="space-y-4">
451 |           <input
452 |             type="text"
453 |             id="name"
454 |             placeholder="Your Name"
455 |             class="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent"
456 |             required
457 |           />
458 |           <input
459 |             type="email"
460 |             id="email"
461 |             placeholder="Your Email"
462 |             class="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent"
463 |             required
464 |           />
465 |           <input
466 |             type="text"
467 |             id="subject"
468 |             placeholder="Subject"
469 |             class="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent"
470 |             required
471 |           />
472 |           <textarea
473 |             id="message"
474 |             placeholder="Your Message"
475 |             rows="5"
476 |             class="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent"
477 |             required
478 |           ></textarea>
479 |           <button
480 |             type="submit"
481 |             class="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition duration-300"
482 |           >
483 |             Send Message
484 |           </button>
485 |         </form>
486 |       </div>
487 |     </div>
488 |   </div>
489 | </section>
490 | 
491 |     <!-- Footer -->
492 |     <footer class="bg-gray-800 text-white py-8">
493 |       <div class="max-w-7xl mx-auto px-4 text-center">
494 |         <p>&copy; 2024 Faizan Khan. All rights reserved.</p>
495 |         <p class="mt-2 text-gray-400">
496 |           Full Stack Developer | Computer Science Engineering
497 |         </p>
498 |       </div>
499 |     </footer>
500 | 
501 |     <!-- Login Modal -->
502 |     <div id="loginModal" class="modal">
503 |       <div class="bg-white rounded-lg p-8 max-w-md w-full mx-4">
504 |         <div class="flex justify-between items-center mb-6">
505 |           <h2 class="text-2xl font-bold text-gray-800">Login</h2>
506 |           <button
507 |             onclick="closeModal('loginModal')"
508 |             class="text-gray-500 hover:text-gray-700"
509 |           >
510 |             <i class="fas fa-times text-xl"></i>
511 |           </button>
512 |         </div>
513 |         <form>
514 |           <div class="mb-4">
515 |             <label class="block text-gray-700 text-sm font-bold mb-2"
516 |               >Email</label
517 |             >
518 |             <input
519 |               type="email"
520 |               class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
521 |               placeholder="Enter your email"
522 |             />
523 |           </div>
524 |           <div class="mb-6">
525 |             <label class="block text-gray-700 text-sm font-bold mb-2"
526 |               >Password</label
527 |             >
528 |             <input
529 |               type="password"
530 |               class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
531 |               placeholder="Enter your password"
532 |             />
533 |           </div>
534 |           <button
535 |             type="submit"
536 |             class="w-full bg-purple-600 text-white p-3 rounded-lg hover:bg-purple-700 transition duration-300"
537 |           >
538 |             Login
539 |           </button>
540 |           <p class="text-center mt-4 text-sm text-gray-600">
541 |             Don't have an account?
542 |             <button
543 |               type="button"
544 |               onclick="closeModal('loginModal'); openModal('registerModal')"
545 |               class="text-purple-600 hover:underline"
546 |             >
547 |               Register here
548 |             </button>
549 |           </p>
550 |         </form>
551 |       </div>
552 |     </div>
553 | 
554 |     <!-- Register Modal -->
555 |     <div id="registerModal" class="modal">
556 |       <div class="bg-white rounded-lg p-8 max-w-md w-full mx-4">
557 |         <div class="flex justify-between items-center mb-6">
558 |           <h2 class="text-2xl font-bold text-gray-800">Register</h2>
559 |           <button
560 |             onclick="closeModal('registerModal')"
561 |             class="text-gray-500 hover:text-gray-700"
562 |           >
563 |             <i class="fas fa-times text-xl"></i>
564 |           </button>
565 |         </div>
566 |         <form>
567 |           <div class="mb-4">
568 |             <label class="block text-gray-700 text-sm font-bold mb-2"
569 |               >Full Name</label
570 |             >
571 |             <input
572 |               type="text"
573 |               class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
574 |               placeholder="Enter your full name"
575 |             />
576 |           </div>
577 |           <div class="mb-4">
578 |             <label class="block text-gray-700 text-sm font-bold mb-2"
579 |               >Email</label
580 |             >
581 |             <input
582 |               type="email"
583 |               class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
584 |               placeholder="Enter your email"
585 |             />
586 |           </div>
587 |           <div class="mb-4">
588 |             <label class="block text-gray-700 text-sm font-bold mb-2"
589 |               >Password</label
590 |             >
591 |             <input
592 |               type="password"
593 |               class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
594 |               placeholder="Create a password"
595 |             />
596 |           </div>
597 |           <div class="mb-6">
598 |             <label class="block text-gray-700 text-sm font-bold mb-2"
599 |               >Confirm Password</label
600 |             >
601 |             <input
602 |               type="password"
603 |               class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
604 |               placeholder="Confirm your password"
605 |             />
606 |           </div>
607 |           <button
608 |             type="submit"
609 |             class="w-full bg-gray-600 text-white p-3 rounded-lg hover:bg-gray-700 transition duration-300"
610 |           >
611 |             Register
612 |           </button>
613 |           <p class="text-center mt-4 text-sm text-gray-600">
614 |             Already have an account?
615 |             <button
616 |               type="button"
617 |               onclick="closeModal('registerModal'); openModal('loginModal')"
618 |               class="text-purple-600 hover:underline"
619 |             >
620 |               Login here
621 |             </button>
622 |           </p>
623 |         </form>
624 |       </div>
625 |     </div>
626 |     <script>
627 |       
628 |       document
629 |         .getElementById("contactForm")
630 |         .addEventListener("submit", function (e) {
631 |           e.preventDefault();
632 | 
633 |           // Get form values
634 |           let name = document.getElementById("name").value;
635 |           let email = document.getElementById("email").value;
636 |           let subject = document.getElementById("subject").value;
637 |           let message = document.getElementById("message").value;
638 | 
639 |           // WhatsApp number (with country code, no + or spaces)
640 |           let phoneNumber = "919671636548"; // your number
641 | 
642 |           // Format message
643 |           let whatsappMessage = `New Message from Portfolio Website:%0A
644 | 👤 Name: ${name}%0A
645 | 📧 Email: ${email}%0A
646 | 📝 Subject: ${subject}%0A
647 | 💬 Message: ${message}`;
648 | 
649 |           // Open WhatsApp
650 |           let url = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;
651 |           window.open(url, "_blank");
652 |         });
653 |     </script>
654 | 
655 |     <script src="script.js"></script>
656 |   </body>
657 | </html>
658 | 
659 | 
660 | 
661 | 


--------------------------------------------------------------------------------
/script.js:
--------------------------------------------------------------------------------
 1 | 
 2 | // Modal functionality
 3 |       function openModal(modalId) {
 4 |         document.getElementById(modalId).classList.add("show");
 5 |       }
 6 | 
 7 |       function closeModal(modalId) {
 8 |         document.getElementById(modalId).classList.remove("show");
 9 |       }
10 | 
11 |       // Close modal when clicking outside
12 |       window.onclick = function (event) {
13 |         if (event.target.classList.contains("modal")) {
14 |           event.target.classList.remove("show");
15 |         }
16 |       };
17 | 
18 |       // Smooth scrolling for navigation links
19 |       document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
20 |         anchor.addEventListener("click", function (e) {
21 |           e.preventDefault();
22 |           const target = document.querySelector(this.getAttribute("href"));
23 |           if (target) {
24 |             target.scrollIntoView({
25 |               behavior: "smooth",
26 |               block: "start",
27 |             });
28 |           }
29 |         });
30 |       });
31 | 
32 |       // Form submission handlers
33 |       document.querySelectorAll("form").forEach((form) => {
34 |         form.addEventListener("submit", function (e) {
35 |           e.preventDefault();
36 |           alert("Form submitted! (This is a demo)");
37 |         });
38 |       });
39 | 
40 |       


--------------------------------------------------------------------------------
/style.css:
--------------------------------------------------------------------------------
 1 | .gradient-bg {
 2 |   background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
 3 | }
 4 | .modal {
 5 |   display: none;
 6 |   position: fixed;
 7 |   z-index: 1000;
 8 |   left: 0;
 9 |   top: 0;
10 |   width: 100%;
11 |   height: 100%;
12 |   background-color: rgba(0, 0, 0, 0.5);
13 | }
14 | .modal.show {
15 |   display: flex;
16 |   align-items: center;
17 |   justify-content: center;
18 | }
19 | .skill-card:hover {
20 |   transform: translateY(-5px);
21 |   transition: all 0.3s ease;
22 | }
23 | 
