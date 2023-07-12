
# Problem: ShapeArea
<div class="-flex -padding-16 -space-v-16">
  <div class="markdown -arial"><p>Below we will define an <code>n</code>-interesting polygon. Your task is to find the area of a polygon for a given <code>n</code>.</p>
<p>A <code>1</code>-interesting polygon is just a square with a side of length <code>1</code>. An <code>n</code>-interesting polygon is obtained by taking the <code>n - 1</code>-interesting polygon and appending <code>1</code>-interesting polygons to its rim, side by side. You can see the <code>1</code>-, <code>2</code>-, <code>3</code>- and <code>4</code>-interesting polygons in the picture below.</p>
<p><img src="https://codesignal.s3.amazonaws.com/uploads/1664318501/area.png?raw=true" alt="" title="Examples"></p>
<p><span class="markdown--header" style="color:#2b3b52;font-size:1.4em">Example</span></p>
<ul>
<li>For <code>n = 2</code>, the output should be<br>
<code>solution(n) = 5</code>;</li>
<li>For <code>n = 3</code>, the output should be<br>
<code>solution(n) = 13</code>.</li>
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
<p><strong>[input] integer n</strong></p>
<p><em>Guaranteed constraints:</em><br>
<code>1 ≤ n &lt; 10<sup>4</sup></code>.</p>
</li>
<li>
<p><strong>[output] integer</strong></p>
<p>The area of the <code>n</code>-interesting polygon.</p>
</li>
</ul>
</div></div>
