# Problem: Substrings Match
You are given two strings - <code>pattern</code> and <code>source</code>. The first string <code>pattern</code> contains only the symbols <code>0</code> and <code>1</code>, and the second string <code>source</code> contains only lowercase English letters.</p>
Let's say that <code>pattern</code> matches a substring <code>source[l..r]</code> of <code>source</code> if the following three conditions are met:
<ul>
<li>they have equal length,</li>
<li>for each <code>0</code> in <code>pattern</code> the corresponding letter in the substring is a vowel,</li>
<li>for each <code>1</code> in <code>pattern</code> the corresponding letter is a consonant.</li>
</ul>
Your task is to calculate the number of substrings of <code>source</code> that match <code>pattern</code>.
<p><strong>Note: In this task we define the vowels as <code>'a'</code>, <code>'e'</code>, <code>'i'</code>, <code>'o'</code>, <code>'u'</code>, and <code>'y'</code>. All other letters are consonants.</strong></p>

## Example
<ul>
<li>For <code>pattern = "010"</code> and <code>source = "amazing"</code>, the output should be <code>solution(pattern, source) = 2</code>.</li>
</ul>
 <details open="">
 <summary>Expand to see the example video.</summary>
<p>

https://github.com/ZikaZaki/js-screentests/assets/101884291/29ba14b2-19ab-4dd9-bce5-2c6eff17e9c3

Your browser does not support playing HTML5 video.
You can <a href="https://codesignal.s3.amazonaws.com/uploads/1637057709407/example.mp4">download the file</a> instead.
</video></p>
<p><i>Note</i>: If you are not able to see the video, use <a href="https://codesignal.s3.amazonaws.com/uploads/1637057709407/example.mp4" target="_blank">this link</a> to access it.</p>
 </details>
<ul>
<li><code>"010"</code> matches <code>source[0..2] = "ama"</code>, because both <code>0</code>s match <code>a</code>, which is a vowel, and <code>1</code> match <code>m</code>, which is a consonant;</li>
<li><code>"010"</code> doesn't match <code>source[1..3] = "maz"</code>, because the first <code>0</code> corresponds to an <code>m</code>, which is a consonant, not a vowel;</li>
<li><code>"010"</code> matches <code>source[2..4] = "azi"</code>, because the first <code>0</code> matches an <code>a</code> (vowel), <code>1</code> matches <code>z</code> (consonant), and the second <code>0</code> matches <code>i</code> (vowel);</li>
<li><code>"010"</code> doesn't match <code>source[3..5] = "zin"</code>, because the first <code>0</code> corresponds to a consonant (<code>z</code>);</li>
<li><code>"010"</code> doesn't match <code>source[4..6] = "ing"</code>, because the second <code>0</code> corresponds to the letter <code>g</code>, which is a consonant.</li>
</ul>
<p>So, there are only <code>2</code> matches.</p>
<ul>
<li>
<p>For <code>pattern = "100"</code> and <code>source = "codesignal"</code>, the output should be <code>solution(pattern, source) = 0</code>.</p>
<p>There are no double vowels in the string <code>"codesignal"</code>, so it's not possible for any of its substrings to match this pattern.</p>
</li>
</ul>
<p><span class="markdown--header" style="color:#2b3b52;font-size:1.4em">Input/Output</span></p>
<ul>
<li>
<p><strong>[execution time limit] 4 seconds (js)</strong></p>
</li>
<li>
<p><strong>[memory limit] 1 GB</strong></p>
</li>
<li>
<p><strong>[input] string pattern</strong></p>
<p>A string of <code>0</code>s and <code>1</code>s.</p>
<p><em>Guaranteed constraints:</em><br>
<code>1 ≤ pattern.length ≤ 10<sup>3</sup></code>.</p>
</li>
<li>
<p><strong>[input] string source</strong></p>
<p>A string of lowercase English letters.</p>
<p><em>Guaranteed constraints:</em><br>
<code>1 ≤ source.length ≤ 10<sup>3</sup></code>.</p>
</li>
<li>
<p><strong>[output] integer</strong></p>
<p>The number of substrings of <code>source</code> that match <code>pattern</code>.</p>
</li>
</ul>
</div>
