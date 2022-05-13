# icu-perf
ICU performance test results. Maintained by ICU-TC.

## Performance Test Methodology

The performance tests execution and time measurment is a layered process.

* API invocation iteration: A performance test invocation for an API under
  tests iterates over the full test data and calls the API once for each test
  data item. The test data item can be a character, word, line, or the
  entirety of the test data.
* Loops: Calibration runs determine how many of the API invocation iterations
  can be executed within a given time, typically 5 seconds. The resulting
  number is called loops.
* Passes: Pre-defined number of performance test tries, typically ten passes.
  At each pass the API invocation iteration is executed in loops as often as
  determined by the calibration.
  
## Example: ICU character property APIs such as isAlpha(), etc.

* Test data: the test data for all ICU character property APIs are all code
  points from x0 to x10FFFF, i.e. 1,114,112 code points.
  Each API invocation iteration iterates 1,114,112 times and calls isAlpha()
  once at each iteration with the respective code point.
* Loops: For illustration, let's assume that the calibration phase determines
  that the above 1,114,112 iterations can be repeated 1,000 times within
  5 seconds.
* Passes: Each pass runs 1,600 loops of 1,114,112 iterations and records the
  execution time of the 1,600 loops. If the number of passes is set to 10,
  we get 10 performance numbers.
* Final calculation: The minimum number among the passes is selected and
  divided by loops*iterations.
  In this example: "minimum pass"/(1,000 * 1,114,112). The result is the average
  execution time of one call of isAlpha() from the fastest pass.
  
## Performance Test Charts

The performance tests are all run on Ubuntu and broken out by feature.

* [Charperf](https://unicode-org.github.io/icu-perf/results/charperf/)
  Performance tests for character property APIs, cf. the charts.
  The measured time is for one call of the respective character property API.
  
* [Utfperf](https://unicode-org.github.io/icu-perf/results/utfperf/)
  Performance tests for Unicode converters: ucnv_fromUnicode(),
  ucnv_toUnicode(), ucnv_convertEx().
  The measured time is processing time of a codepoint in the input string.

* [Usetperf](https://unicode-org.github.io/icu-perf/results/usetperf/)
  Performance tests for Uniset APIs add(), contains(),
  UnicodeSetIterator::get().
  Time measured is relative to the size of the USet, which is small
  (containing U_TITLECASE_LETTER characters) or large (containing
  U_UNASSIGNED codepoints).
  Also tests UnicodeSet::applyPattern() for three pre-defined pattern of
  different complexity.
  
The following performance tests are additionally broken out by type of test
data processed.

* Collperf:
  Performance tests for the ICU collation feature. The time measured
  is per line of the test data for the KeyGen test and for the entire operation
  of the two more complex qsort and BinarySearch test scenarios.

  * [TestNames_Asian](https://unicode-org.github.io/icu-perf/results/collperf/TestNames_Asian/)
  * [TestNames_Chinese](https://unicode-org.github.io/icu-perf/results/collperf/TestNames_Chinese/)
  * [TestNames_Japanese](https://unicode-org.github.io/icu-perf/results/collperf/TestNames_Japanese/)
  * [TestNames_Japanese_h](https://unicode-org.github.io/icu-perf/results/collperf/TestNames_Japanese_h/)
  * [TestNames_Japanese_k](https://unicode-org.github.io/icu-perf/results/collperf/TestNames_Japanese_k/)
  * [TestNames_Korean](https://unicode-org.github.io/icu-perf/results/collperf/TestNames_Korean/)
  * [TestNames_Latin](https://unicode-org.github.io/icu-perf/results/collperf/TestNames_Latin/)
  * [TestNames_Russian](https://unicode-org.github.io/icu-perf/results/collperf/TestNames_Russian/)
  * [TestNames_SerbianSH](https://unicode-org.github.io/icu-perf/results/collperf/TestNames_SerbianSH/)
  * [TestNames_SerbianSR](https://unicode-org.github.io/icu-perf/results/collperf/TestNames_SerbianSR/)
  * [TestNames_Simplified_Chinese](https://unicode-org.github.io/icu-perf/results/collperf/TestNames_Simplified_Chinese/)
  * [TestNames_Thai](https://unicode-org.github.io/icu-perf/results/collperf/TestNames_Thai/)

* NormPerf:
  Performance tests for ICU normalization. The time measured is per character
  from the test data.

  * [TestNames_Asian](https://unicode-org.github.io/icu-perf/results/normperf/TestNames_Asian/)
  * [TestNames_Chinese](https://unicode-org.github.io/icu-perf/results/normperf/TestNames_Chinese/)
  * [TestNames_Japanese](https://unicode-org.github.io/icu-perf/results/normperf/TestNames_Japanese/)
  * [TestNames_Japanese_h](https://unicode-org.github.io/icu-perf/results/normperf/TestNames_Japanese_h/)
  * [TestNames_Japanese_k](https://unicode-org.github.io/icu-perf/results/normperf/TestNames_Japanese_k/)
  * [TestNames_Korean](https://unicode-org.github.io/icu-perf/results/normperf/TestNames_Korean/)
  * [TestNames_Latin](https://unicode-org.github.io/icu-perf/results/normperf/TestNames_Latin/)
  * [TestNames_Russian](https://unicode-org.github.io/icu-perf/results/normperf/TestNames_Russian/)
  * [TestNames_SerbianSH](https://unicode-org.github.io/icu-perf/results/normperf/TestNames_SerbianSH/)
  * [TestNames_SerbianSR](https://unicode-org.github.io/icu-perf/results/normperf/TestNames_SerbianSR/)
  * [TestNames_Thai](https://unicode-org.github.io/icu-perf/results/normperf/TestNames_Thai/)
  * [th18057](https://unicode-org.github.io/icu-perf/results/normperf/th18057/)
  * [thesis](https://unicode-org.github.io/icu-perf/results/normperf/thesis/)
  * [vfear11](https://unicode-org.github.io/icu-perf/results/normperf/vfear11a/)

* Ustrperf:
  Performance tests for a variety of Unicode string functions or operators:
  constructors, assignments (setTo, =), charAt(), concatenate (+), indexOf().
  Time measures is per line of the test data.

  * [TestNames_Asian](https://unicode-org.github.io/icu-perf/results/ustrperf/TestNames_Asian/)
  * [TestNames_Chinese](https://unicode-org.github.io/icu-perf/results/ustrperf/TestNames_Chinese/)
  * [TestNames_Japanese_h](https://unicode-org.github.io/icu-perf/results/ustrperf/TestNames_Japanese_h/)
  * [TestNames_Japanese_k](https://unicode-org.github.io/icu-perf/results/ustrperf/TestNames_Japanese_k/)
  * [TestNames_Korean](https://unicode-org.github.io/icu-perf/results/ustrperf/TestNames_Korean/)
  * [TestNames_Latin](https://unicode-org.github.io/icu-perf/results/ustrperf/TestNames_Latin/)
  * [TestNames_Russian](https://unicode-org.github.io/icu-perf/results/ustrperf/TestNames_Russian/)
  * [TestNames_SerbianSH](https://unicode-org.github.io/icu-perf/results/ustrperf/TestNames_SerbianSH/)
  * [TestNames_SerbianSR](https://unicode-org.github.io/icu-perf/results/ustrperf/TestNames_SerbianSR/)
  * [TestNames_Simplified_Chinese](https://unicode-org.github.io/icu-perf/results/ustrperf/TestNames_Simplified_Chinese/)
  * [TestNames_Thai](https://unicode-org.github.io/icu-perf/results/ustrperf/TestNames_Thai/)
  * [th18057](https://unicode-org.github.io/icu-perf/results/ustrperf/th18057/)

# LICENSE

See [LICENSE](./LICENSE)

```
SPDX-License-Identifier: Unicode-DFS-2016
```
