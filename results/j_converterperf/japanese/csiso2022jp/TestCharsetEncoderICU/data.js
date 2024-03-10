window.BENCHMARK_DATA = {
  "lastUpdate": 1710043408903,
  "repoUrl": "https://github.com/unicode-org/icu",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "allenwtsu@google.com",
            "name": "allenwtsu",
            "username": "allensu05"
          },
          "committer": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "distinct": true,
          "id": "929cf40ecbf464bb133113995185c7353f2e106d",
          "message": "ICU-22059 Add one Thai word into the Thai dictionary\n\nSee #2112",
          "timestamp": "2022-06-27T09:27:56-07:00",
          "tree_id": "06e8f81c97ab94be546a5187c8e251db670d5e2f",
          "url": "https://github.com/unicode-org/icu/commit/929cf40ecbf464bb133113995185c7353f2e106d"
        },
        "date": 1656347378525,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 39.20946273942756,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nrunge@google.com",
            "name": "gnrunge",
            "username": "gnrunge"
          },
          "committer": {
            "email": "41129501+gnrunge@users.noreply.github.com",
            "name": "Norbert Runge",
            "username": "gnrunge"
          },
          "distinct": true,
          "id": "58060eafdc69ac7a060e8b80d942246adc471f0f",
          "message": "ICU-22036 Adds ICU4J date formatting performance test, which is last of the\nICU4J performance tests.",
          "timestamp": "2022-06-29T12:02:29-07:00",
          "tree_id": "c282c6da7f45a320f8d00b465f596b5b55770b50",
          "url": "https://github.com/unicode-org/icu/commit/58060eafdc69ac7a060e8b80d942246adc471f0f"
        },
        "date": 1656529457128,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 40.140850858333906,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cyndy_ishida@apple.com",
            "name": "Cyndy Ishida",
            "username": "cyndyishida"
          },
          "committer": {
            "email": "cyndy_ishida@apple.com",
            "name": "Cyndy Ishida",
            "username": "cyndyishida"
          },
          "distinct": true,
          "id": "e2ae4f5324e863a92bf79892ef1a2e0d6b183af7",
          "message": "ICU-22054 Remove declarations for unimplemented APIs\n\nThis patch also includes marking `=delete` on specific `normal` member functions, as opposed to compiler generated functions,\nbased on the description of such functions' surrounding comments.",
          "timestamp": "2022-07-01T08:57:10-07:00",
          "tree_id": "fda6935be0dbf84c2fec7832622127bc05ca0b48",
          "url": "https://github.com/unicode-org/icu/commit/e2ae4f5324e863a92bf79892ef1a2e0d6b183af7"
        },
        "date": 1656691138062,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 36.028513358720716,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "daschuer@mixxx.org",
            "name": "Daniel Schürmann",
            "username": "daschuer"
          },
          "committer": {
            "email": "103115900+rp9-next@users.noreply.github.com",
            "name": "rp9-next",
            "username": "rp9-next"
          },
          "distinct": true,
          "id": "9f358ccb2472866a849aa4f393ef4528448c3e9d",
          "message": "ICU-22010 Add early check for AX_CHECK_COMPILE_FLAG\n\nThis helps to avoid missleading error message:\n\n```\n./source/configure: line 7981: syntax error near unexpected token 'newline'\n./source/configure: line 7981: 'AX_CHECK_COMPILE_FLAG('\n```",
          "timestamp": "2022-07-12T13:30:01+05:30",
          "tree_id": "cb81138f619f83e5a8667ed95e034c4d81ae9b8b",
          "url": "https://github.com/unicode-org/icu/commit/9f358ccb2472866a849aa4f393ef4528448c3e9d"
        },
        "date": 1657612914523,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 44.46724779182023,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "62772518+richgillam@users.noreply.github.com",
            "name": "Rich Gillam",
            "username": "richgillam"
          },
          "committer": {
            "email": "62772518+richgillam@users.noreply.github.com",
            "name": "Rich Gillam",
            "username": "richgillam"
          },
          "distinct": true,
          "id": "721d41153ec4f80cd8556ac57dc023d169ef9dd2",
          "message": "ICU-22071 Fixed DateTimePatternGenerator to respect the locale's \"rg\" subtag (when it has one) when determining the hour cycle.",
          "timestamp": "2022-07-12T10:55:03-07:00",
          "tree_id": "c8298bfaaccafa158a689ec1bfd5c56a0cc8f44d",
          "url": "https://github.com/unicode-org/icu/commit/721d41153ec4f80cd8556ac57dc023d169ef9dd2"
        },
        "date": 1657648620068,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 44.27027984836168,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "62772518+richgillam@users.noreply.github.com",
            "name": "Rich Gillam",
            "username": "richgillam"
          },
          "committer": {
            "email": "62772518+richgillam@users.noreply.github.com",
            "name": "Rich Gillam",
            "username": "richgillam"
          },
          "distinct": true,
          "id": "4f6f087f2eaa4011237ee0c4e4cf2b1e47ea70fc",
          "message": "ICU-22085 Fix old typo on calculating path size in loadTestData() and add a few small changes to support running ICU unit tests in Xcode.",
          "timestamp": "2022-07-14T08:53:16-07:00",
          "tree_id": "35a3d64dc578f2aac68d1255b7f91072d95f1e29",
          "url": "https://github.com/unicode-org/icu/commit/4f6f087f2eaa4011237ee0c4e4cf2b1e47ea70fc"
        },
        "date": 1657814109683,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 44.901638508631855,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "william.marlow@ibm.com",
            "name": "William Marlow",
            "username": "lux01"
          },
          "committer": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "distinct": true,
          "id": "9a7b0e08d0bb8ed11775c76f935eabc155fdc795",
          "message": "ICU-22086 Add ibm-clang_r/ibm-clang++_r to runConfigureICU",
          "timestamp": "2022-07-14T17:38:59Z",
          "tree_id": "0fedd85fc633e091452763491c5688581ca32177",
          "url": "https://github.com/unicode-org/icu/commit/9a7b0e08d0bb8ed11775c76f935eabc155fdc795"
        },
        "date": 1657820447035,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 32.06194596378309,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pedberg@unicode.org",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "committer": {
            "email": "42151464+pedberg-icu@users.noreply.github.com",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "distinct": true,
          "id": "6394a48d067134a99faca4c7329accee0c580301",
          "message": "ICU-21957 integrate CLDR release-42-m2 (mid milestone) to ICU main for 72",
          "timestamp": "2022-07-14T10:56:39-07:00",
          "tree_id": "313c19455be6773aa335e6e10e0b9518d142b996",
          "url": "https://github.com/unicode-org/icu/commit/6394a48d067134a99faca4c7329accee0c580301"
        },
        "date": 1657821507555,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 38.64548187732647,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "62772518+richgillam@users.noreply.github.com",
            "name": "Rich Gillam",
            "username": "richgillam"
          },
          "committer": {
            "email": "62772518+richgillam@users.noreply.github.com",
            "name": "Rich Gillam",
            "username": "richgillam"
          },
          "distinct": true,
          "id": "a8594a401f3241b19f9b8b61bf786fde917b4c72",
          "message": "ICU-22056 Add a new unum_hasAttribute() method.",
          "timestamp": "2022-07-15T16:03:56-07:00",
          "tree_id": "1db5acef8d7251a4829b61c61c686f5822486667",
          "url": "https://github.com/unicode-org/icu/commit/a8594a401f3241b19f9b8b61bf786fde917b4c72"
        },
        "date": 1657926392462,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 38.70081519322279,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hsivonen@hsivonen.fi",
            "name": "Henri Sivonen",
            "username": "hsivonen"
          },
          "committer": {
            "email": "shane@unicode.org",
            "name": "Shane F. Carr",
            "username": "sffc"
          },
          "distinct": true,
          "id": "9c72bf975890a1edacce046a2e55e88023a86389",
          "message": "ICU-22087 Export a non-recursive canonical decomposition supplement for ICU4X",
          "timestamp": "2022-07-18T10:05:10-07:00",
          "tree_id": "cf9c0091bce7abf7054b71884fd644acc42cae16",
          "url": "https://github.com/unicode-org/icu/commit/9c72bf975890a1edacce046a2e55e88023a86389"
        },
        "date": 1658164021234,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 37.90973100733973,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "62772518+richgillam@users.noreply.github.com",
            "name": "Rich Gillam",
            "username": "richgillam"
          },
          "committer": {
            "email": "62772518+richgillam@users.noreply.github.com",
            "name": "Rich Gillam",
            "username": "richgillam"
          },
          "distinct": true,
          "id": "9d230f923c51bb72af9420e8cf53a019894a8e52",
          "message": "ICU-21939 Fix bogus \"conflicting fields\" error in DateIntervalFormat.",
          "timestamp": "2022-07-18T15:16:40-07:00",
          "tree_id": "c0319f3181cebd91a769eaebd21495a02b16a9cb",
          "url": "https://github.com/unicode-org/icu/commit/9d230f923c51bb72af9420e8cf53a019894a8e52"
        },
        "date": 1658182706333,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 40.61811732064862,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nrunge@google.com",
            "name": "gnrunge",
            "username": "gnrunge"
          },
          "committer": {
            "email": "41129501+gnrunge@users.noreply.github.com",
            "name": "Norbert Runge",
            "username": "gnrunge"
          },
          "distinct": true,
          "id": "86166e0a2dd1119e086d04b8973dc486b4af8dcc",
          "message": "ICU-22075 Adds a random waiting period (0 - 179 secs) to each test that runs as\npart of a high concurrency performance test setup. This will disperse commits\nof performance test results into the data branch over a wider time frame and\ndrastically reduces the chance of data uploads failing after ten unsuccesful\ncommit attempts.\n\nTest runs showed a huge drop in failed commits/retry, from a high of 113\nwithout wait down to only 4 with the extra wait.\n\nICU-22075 Add comment explaining the rationale of the random\nsleep period prior to test execution.",
          "timestamp": "2022-07-22T08:14:58-07:00",
          "tree_id": "e00a8df1e80c75ce21faf8a38134eaaa9b3b31d3",
          "url": "https://github.com/unicode-org/icu/commit/86166e0a2dd1119e086d04b8973dc486b4af8dcc"
        },
        "date": 1658503196837,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 50.17171143870063,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hsivonen@hsivonen.fi",
            "name": "Henri Sivonen",
            "username": "hsivonen"
          },
          "committer": {
            "email": "shane@unicode.org",
            "name": "Shane F. Carr",
            "username": "sffc"
          },
          "distinct": true,
          "id": "c258f3d6f81a2514b76d72c5deae8cbc295aecd6",
          "message": "ICU-22095 Export ICU4X normalization data with tries only without Unicode sets",
          "timestamp": "2022-07-25T15:54:29-07:00",
          "tree_id": "1e4ac369923311e8ac0922960bbb1cc63650003f",
          "url": "https://github.com/unicode-org/icu/commit/c258f3d6f81a2514b76d72c5deae8cbc295aecd6"
        },
        "date": 1658789859209,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 36.99206176209447,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "62772518+richgillam@users.noreply.github.com",
            "name": "Rich Gillam",
            "username": "richgillam"
          },
          "committer": {
            "email": "62772518+richgillam@users.noreply.github.com",
            "name": "Rich Gillam",
            "username": "richgillam"
          },
          "distinct": true,
          "id": "58a51495dd1c94d29cda93ffc29a904d77e50d31",
          "message": "ICU-22088 Various fixes to make dealing with NUMBERING_SYSTEM formatters easier.",
          "timestamp": "2022-07-28T16:18:01-07:00",
          "tree_id": "69c47d1745ae982673f69de39b18f9c44cdc75b7",
          "url": "https://github.com/unicode-org/icu/commit/58a51495dd1c94d29cda93ffc29a904d77e50d31"
        },
        "date": 1659050402107,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 32.22815627498697,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pedberg@unicode.org",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "committer": {
            "email": "42151464+pedberg-icu@users.noreply.github.com",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "distinct": true,
          "id": "dcd19ae9bc0914f8be439a2de1a5fbc17e7b5447",
          "message": "ICU-21957 integrate CLDR release-42-alpha0 (first with Survey Tool data) to ICU main for 72 (#2142)",
          "timestamp": "2022-07-29T15:32:45-07:00",
          "tree_id": "6e9b3f20e3d80a16de21313da72a5cb5b6ac2361",
          "url": "https://github.com/unicode-org/icu/commit/dcd19ae9bc0914f8be439a2de1a5fbc17e7b5447"
        },
        "date": 1659134504112,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 38.11492776992658,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "103115900+rp9-next@users.noreply.github.com",
            "name": "rp9-next",
            "username": "rp9-next"
          },
          "committer": {
            "email": "103115900+rp9-next@users.noreply.github.com",
            "name": "rp9-next",
            "username": "rp9-next"
          },
          "distinct": true,
          "id": "4cf4116dadd2f34c20d9df42b1272cac7dcb30c4",
          "message": "ICU-22074 Increase the valgrind CI timeout",
          "timestamp": "2022-08-01T12:51:55+05:30",
          "tree_id": "5219374afb583705529f150783e07b0ac009b0c1",
          "url": "https://github.com/unicode-org/icu/commit/4cf4116dadd2f34c20d9df42b1272cac7dcb30c4"
        },
        "date": 1659338787687,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 32.91168601778217,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pedberg@unicode.org",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "committer": {
            "email": "42151464+pedberg-icu@users.noreply.github.com",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "distinct": true,
          "id": "0266970e977b9e2488dfbf788cc280be3a0338ca",
          "message": "ICU-21957 integrate CLDR release-42-alpha1 to ICU main for 72",
          "timestamp": "2022-08-05T09:39:58-07:00",
          "tree_id": "ae5c1572c4ed62ac177b5a843ecc6451b53749b2",
          "url": "https://github.com/unicode-org/icu/commit/0266970e977b9e2488dfbf788cc280be3a0338ca"
        },
        "date": 1659717856270,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 38.488176725953764,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pedberg@unicode.org",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "committer": {
            "email": "42151464+pedberg-icu@users.noreply.github.com",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "distinct": true,
          "id": "d99abb6d65fd48db3bbf6aad523e7aaa793781ec",
          "message": "ICU-21957 integrate CLDR release-42-alpha1b to ICU main for 72",
          "timestamp": "2022-08-09T16:05:20-07:00",
          "tree_id": "114745d9b1092b441127d501c28853c12f8182a3",
          "url": "https://github.com/unicode-org/icu/commit/d99abb6d65fd48db3bbf6aad523e7aaa793781ec"
        },
        "date": 1660086530711,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 38.023416980962196,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nmihai_2000@yahoo.com",
            "name": "Mihai Nita",
            "username": "mihnita"
          },
          "committer": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "distinct": true,
          "id": "0eecb25011de051c57f68c75d767ad3586de7859",
          "message": "ICU-22101 Error prone reports \"StringSplitter\" error in PluralRules.java\n\nString.split(String) and Pattern.split(CharSequence) have surprising behaviour.\n\"a::b:\".split(\":\") produces [\"a\", \"b\"], when one would expect [\"a\", \"\", \"b\", \"\"]\n\nThe recommended fix is to use the Guava Splitter, or setting an explicit limit:\nString.split(String,int limit) and Pattern.split(CharSequence,int limit)",
          "timestamp": "2022-08-11T08:27:19-07:00",
          "tree_id": "724c7700b37e1fcbaf574d25414c4370ec250537",
          "url": "https://github.com/unicode-org/icu/commit/0eecb25011de051c57f68c75d767ad3586de7859"
        },
        "date": 1660231848177,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 39.89179070028284,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "elango@unicode.org",
            "name": "Elango Cheran",
            "username": "echeran"
          },
          "committer": {
            "email": "elango@unicode.org",
            "name": "Elango",
            "username": "echeran"
          },
          "distinct": true,
          "id": "3ef03a408714cf0be1f6be62e3fad57757403da3",
          "message": "ICU-21947 Replace FixedDecimal with DecimalQuantity in PluralRule sample parsing\n\nSee #2007",
          "timestamp": "2022-08-11T15:10:37-07:00",
          "tree_id": "2216414cc87171c10282454fcf0a35d917a80fbd",
          "url": "https://github.com/unicode-org/icu/commit/3ef03a408714cf0be1f6be62e3fad57757403da3"
        },
        "date": 1660256186409,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 45.44207937729709,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "62772518+richgillam@users.noreply.github.com",
            "name": "Rich Gillam",
            "username": "richgillam"
          },
          "committer": {
            "email": "62772518+richgillam@users.noreply.github.com",
            "name": "Rich Gillam",
            "username": "richgillam"
          },
          "distinct": true,
          "id": "8492a8291670aa0af0f3fa6c088ddaf4ff373833",
          "message": "ICU-22105 Fixed the unit-conversion logic to work correctly with negative temperature values.",
          "timestamp": "2022-08-16T10:18:24-07:00",
          "tree_id": "ade7eb2c651708551e62d475d3987927dec81353",
          "url": "https://github.com/unicode-org/icu/commit/8492a8291670aa0af0f3fa6c088ddaf4ff373833"
        },
        "date": 1660670521593,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 44.11153750992811,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hsivonen@hsivonen.fi",
            "name": "Henri Sivonen",
            "username": "hsivonen"
          },
          "committer": {
            "email": "elango@unicode.org",
            "name": "Elango",
            "username": "echeran"
          },
          "distinct": true,
          "id": "59615c93f694227eaacf242d22a549c316557cdf",
          "message": "ICU-22115 Merge passthrough and canonical combining class data into the NFD trie for ICU4X",
          "timestamp": "2022-08-16T15:53:56-07:00",
          "tree_id": "4f51bc73e1477d7f636740f5506076ee6756f1af",
          "url": "https://github.com/unicode-org/icu/commit/59615c93f694227eaacf242d22a549c316557cdf"
        },
        "date": 1660690572853,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 32.25320000871477,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "y.umaoka@gmail.com",
            "name": "yumaoka",
            "username": "yumaoka"
          },
          "committer": {
            "email": "yumaoka@users.noreply.github.com",
            "name": "Yoshito Umaoka",
            "username": "yumaoka"
          },
          "distinct": true,
          "id": "26733782601ec384b8070019a8121795f01000cd",
          "message": "ICU-22118 tzdata2022b updates in icu code\n\nSee #2157",
          "timestamp": "2022-08-18T19:12:31-04:00",
          "tree_id": "5db269c3b030282c375195f2c01fbe94b8459a95",
          "url": "https://github.com/unicode-org/icu/commit/26733782601ec384b8070019a8121795f01000cd"
        },
        "date": 1660864458572,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 32.508129107367694,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "andy.heninger@gmail.com",
            "name": "Andy Heninger",
            "username": "aheninger"
          },
          "committer": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "distinct": true,
          "id": "b95c6b1f3eb12eb84c2dabe438fe36be55a0772c",
          "message": "ICU-21946 RBBI Break Cache Optimizations\n\nAdjust RuleBasedBreakIterator::BreakCache::populateNear() to retain the cache\nthe cache contents in additional cases where are still useful, resulting in\nimproved performance.\n\nThis change is related to PR #2039, which addressed the same problem. This one\nretains the cache contents in more situations.",
          "timestamp": "2022-08-20T16:16:30-07:00",
          "tree_id": "4d8c5b400952f14136ae2a89ba22db2a736a2745",
          "url": "https://github.com/unicode-org/icu/commit/b95c6b1f3eb12eb84c2dabe438fe36be55a0772c"
        },
        "date": 1661037556257,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 39.42760116203033,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "richard.purdie@linuxfoundation.org",
            "name": "Richard Purdie",
            "username": "rpurdie"
          },
          "committer": {
            "email": "srl295@gmail.com",
            "name": "Steven R. Loomis",
            "username": "srl295"
          },
          "distinct": true,
          "id": "4ac7cd13938d44137bbf3949bcb7b63ff8bfaf23",
          "message": "ICU-22109 icu-config hardcodes build paths unnecessarily\n\nThe makefile hardcodes paths to the build directory into icu-config. It doesn’t\nneed to do this and it unnecessarily breaks build reproducibility. This patch\nmakes a simple change to avoid this.\n\nSigned-off-by: Richard Purdie <richard.purdie@linuxfoundation.org>",
          "timestamp": "2022-08-22T15:02:39-05:00",
          "tree_id": "2f9a426bc80fc925c0774e0e8263f93d45635d65",
          "url": "https://github.com/unicode-org/icu/commit/4ac7cd13938d44137bbf3949bcb7b63ff8bfaf23"
        },
        "date": 1661198840585,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 37.855219430179716,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pedberg@unicode.org",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "committer": {
            "email": "42151464+pedberg-icu@users.noreply.github.com",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "distinct": true,
          "id": "ca9bdb97801cb1d0383c36b66b43bf0587b7697a",
          "message": "ICU-21957 integrate CLDR release-42-alpha2 to ICU main for 72",
          "timestamp": "2022-08-22T13:07:59-07:00",
          "tree_id": "b48551e7f45f096b68a791d5158448659d5c0d62",
          "url": "https://github.com/unicode-org/icu/commit/ca9bdb97801cb1d0383c36b66b43bf0587b7697a"
        },
        "date": 1661199130046,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 38.00019710193609,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "allenwtsu@google.com",
            "name": "allenwtsu",
            "username": "allensu05"
          },
          "committer": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "distinct": true,
          "id": "8c669a7c2e6da8a1fbff1c5054bfffccb115c769",
          "message": "ICU-22012 Add more Japanese words into the dictionary",
          "timestamp": "2022-08-23T10:18:45-07:00",
          "tree_id": "9f7136671717ceea712b975ae541f65937d4ab53",
          "url": "https://github.com/unicode-org/icu/commit/8c669a7c2e6da8a1fbff1c5054bfffccb115c769"
        },
        "date": 1661275425265,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 37.552627424509865,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pedberg@unicode.org",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "committer": {
            "email": "42151464+pedberg-icu@users.noreply.github.com",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "distinct": true,
          "id": "49d192fefe09fcc38547203487cf4e63d2dad61f",
          "message": "ICU-22112 word break updates for @,colon; colon tailorings for fi,sv\n\nSee #2159",
          "timestamp": "2022-08-23T12:45:55-07:00",
          "tree_id": "860bf4fdbcdb8953fab05089e4b3d0b92fbd27bc",
          "url": "https://github.com/unicode-org/icu/commit/49d192fefe09fcc38547203487cf4e63d2dad61f"
        },
        "date": 1661284214748,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 40.33527923914088,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ccornelius@google.com",
            "name": "Craig Cornelius",
            "username": "sven-oly"
          },
          "committer": {
            "email": "cwcornelius@gmail.com",
            "name": "Craig Cornelius",
            "username": "sven-oly"
          },
          "distinct": true,
          "id": "37e295627156bc334e1f1e88807025fac984da0e",
          "message": "ICU-21957 ICU4J API status and change report",
          "timestamp": "2022-08-26T11:33:50-07:00",
          "tree_id": "22673db46dd386a73e7498417bba169e1e62c780",
          "url": "https://github.com/unicode-org/icu/commit/37e295627156bc334e1f1e88807025fac984da0e"
        },
        "date": 1661539133498,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 38.373988901110316,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "yumaoka@users.noreply.github.com",
            "name": "Yoshito Umaoka",
            "username": "yumaoka"
          },
          "committer": {
            "email": "yumaoka@users.noreply.github.com",
            "name": "Yoshito Umaoka",
            "username": "yumaoka"
          },
          "distinct": true,
          "id": "3e6219ba4d309acb7f48deca96100127ade8d084",
          "message": "ICU-21957 BRS72 organize import statements",
          "timestamp": "2022-08-30T19:34:01-04:00",
          "tree_id": "b0d2f65c1c26b0904a5b30ddac24f9151758e67f",
          "url": "https://github.com/unicode-org/icu/commit/3e6219ba4d309acb7f48deca96100127ade8d084"
        },
        "date": 1661902698001,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 31.97260474075697,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "y.umaoka@gmail.com",
            "name": "yumaoka",
            "username": "yumaoka"
          },
          "committer": {
            "email": "yumaoka@users.noreply.github.com",
            "name": "Yoshito Umaoka",
            "username": "yumaoka"
          },
          "distinct": true,
          "id": "3d935f2d493bc613d9884a7878d04fb5515f5005",
          "message": "ICU-21957 BRS72 Updating currency numeric code data.",
          "timestamp": "2022-08-30T19:34:49-04:00",
          "tree_id": "f1ca2d572a984c9eac3146ef873f3cd4e95cdb74",
          "url": "https://github.com/unicode-org/icu/commit/3d935f2d493bc613d9884a7878d04fb5515f5005"
        },
        "date": 1661903468731,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 38.43263371286219,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "62772518+richgillam@users.noreply.github.com",
            "name": "Rich Gillam",
            "username": "richgillam"
          },
          "committer": {
            "email": "62772518+richgillam@users.noreply.github.com",
            "name": "Rich Gillam",
            "username": "richgillam"
          },
          "distinct": true,
          "id": "5334e2819d769c5992dae2c07a999b90e26db308",
          "message": "ICU-21958 ICU 70 API Promotions",
          "timestamp": "2022-08-31T15:38:22-07:00",
          "tree_id": "3e789d667b6ae477513c5444f8705583ac00b853",
          "url": "https://github.com/unicode-org/icu/commit/5334e2819d769c5992dae2c07a999b90e26db308"
        },
        "date": 1661985700891,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 38.13387127057028,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "committer": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "distinct": true,
          "id": "8050af54847348504a879564c28008203510201d",
          "message": "ICU-21980 Unicode 15 update 2022aug30",
          "timestamp": "2022-08-31T16:15:42-07:00",
          "tree_id": "95cbedfa8185c379bfc37eb45bca48716bae6869",
          "url": "https://github.com/unicode-org/icu/commit/8050af54847348504a879564c28008203510201d"
        },
        "date": 1661987915703,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 32.54162522316021,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "yumaoka@users.noreply.github.com",
            "name": "Yoshito Umaoka",
            "username": "yumaoka"
          },
          "committer": {
            "email": "yumaoka@users.noreply.github.com",
            "name": "Yoshito Umaoka",
            "username": "yumaoka"
          },
          "distinct": true,
          "id": "9acba58c493123234b9c3ed4326d35d8f73cbcc1",
          "message": "ICU-22116 Updating minimum Java runtime support to Java 8",
          "timestamp": "2022-09-01T13:02:27-04:00",
          "tree_id": "3effaf2286da632e64849215f3216eb05a4448f1",
          "url": "https://github.com/unicode-org/icu/commit/9acba58c493123234b9c3ed4326d35d8f73cbcc1"
        },
        "date": 1662051934698,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 39.74324887402044,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "62772518+richgillam@users.noreply.github.com",
            "name": "Rich Gillam",
            "username": "richgillam"
          },
          "committer": {
            "email": "62772518+richgillam@users.noreply.github.com",
            "name": "Rich Gillam",
            "username": "richgillam"
          },
          "distinct": true,
          "id": "4ab713b1c6fb604d3854e7781bee2051878d6814",
          "message": "ICU-22081 Added missing copyright notice to PersonName.java.",
          "timestamp": "2022-09-01T13:36:05-07:00",
          "tree_id": "30653b09944911ad017a064338ff8254052c36ae",
          "url": "https://github.com/unicode-org/icu/commit/4ab713b1c6fb604d3854e7781bee2051878d6814"
        },
        "date": 1662064726415,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 44.52774440286611,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nrunge@google.com",
            "name": "gnrunge",
            "username": "gnrunge"
          },
          "committer": {
            "email": "41129501+gnrunge@users.noreply.github.com",
            "name": "Norbert Runge",
            "username": "gnrunge"
          },
          "distinct": true,
          "id": "baa104b50b51218b35e4bd629aa45f3ea88a4a96",
          "message": "ICU-21957 Clean-up of TODO and logKnownIssue entries (BRS task):\n\nRemoved logKnownIssue(ICU-21322) in plurults.cpp, ICU-21322 is done and the\nentire if-statement was commented out.\n\nReplaced CLDR-13700 with CLDR-13701 in several TODOs. 13700 is a duplicate of\n13701.\n\nLikewise for CLDR-14502 --> CLDR-14582.\n\nPR#1999 from ICU 71 release missed some of the cases.",
          "timestamp": "2022-09-02T09:54:57-07:00",
          "tree_id": "91b7432c24997b436155399ab6c285c33f6ed5ee",
          "url": "https://github.com/unicode-org/icu/commit/baa104b50b51218b35e4bd629aa45f3ea88a4a96"
        },
        "date": 1662137942196,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 32.31384151783212,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "elango@unicode.org",
            "name": "Elango Cheran",
            "username": "echeran"
          },
          "committer": {
            "email": "elango@unicode.org",
            "name": "Elango",
            "username": "echeran"
          },
          "distinct": true,
          "id": "6e3a9230563b97cb925723a6d9e91888396f2035",
          "message": "ICU-22116 Update CI job for ICU4J to use Java 8 instead of Java 7\n\nSee #2173",
          "timestamp": "2022-09-06T09:09:22-07:00",
          "tree_id": "c82f414f17d7a8f69e9a123155d5900893e5f77e",
          "url": "https://github.com/unicode-org/icu/commit/6e3a9230563b97cb925723a6d9e91888396f2035"
        },
        "date": 1662480873014,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 37.96446804303805,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nrunge@google.com",
            "name": "gnrunge",
            "username": "gnrunge"
          },
          "committer": {
            "email": "41129501+gnrunge@users.noreply.github.com",
            "name": "Norbert Runge",
            "username": "gnrunge"
          },
          "distinct": true,
          "id": "00003dcbf2065d79fa45f8d53ef779861f71adb5",
          "message": "ICU-21957 Update TODO ticket reference: CLDR-13044 (done) ---> ICU-21420 (open).",
          "timestamp": "2022-09-06T09:14:07-07:00",
          "tree_id": "4d26f8c373ecc777e50d8ad362170299340629a3",
          "url": "https://github.com/unicode-org/icu/commit/00003dcbf2065d79fa45f8d53ef779861f71adb5"
        },
        "date": 1662481403827,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 49.44827054403912,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "roubert@google.com",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "committer": {
            "email": "fredrik@roubert.name",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "distinct": true,
          "id": "030fa1a4791ee7c2f58505ebb61253c3032916ec",
          "message": "ICU-21148 Consistently use standard lowercase true/false everywhere.\n\nThis is the normal standard way in C, C++ as well as Java and there's no\nlonger any reason for ICU to be different. The various internal macros\nproviding custom boolean constants can all be deleted and code as well\nas documentation can be updated to use lowercase true/false everywhere.",
          "timestamp": "2022-09-07T20:56:33+02:00",
          "tree_id": "849f746cda1267d213f8ae31b557ea7d847f3acc",
          "url": "https://github.com/unicode-org/icu/commit/030fa1a4791ee7c2f58505ebb61253c3032916ec"
        },
        "date": 1662577198603,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 31.626007084714193,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cyndy_ishida@apple.com",
            "name": "Cyndy Ishida",
            "username": "cyndyishida"
          },
          "committer": {
            "email": "42151464+pedberg-icu@users.noreply.github.com",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "distinct": true,
          "id": "03b94e9cb3045072c73d50938ee0e14597d24ce0",
          "message": "ICU-22068 Cleanup inconsistent annotations between declarations and definitions\n\nThis cleans up inconsistent annotations between declared APIs in headers\nvs defined implementations in cpp's. This better ensures the API's\nreferenceable in headers represent what is exposed and defined in the\nultimate binary library's symbol table.",
          "timestamp": "2022-09-08T08:34:56-07:00",
          "tree_id": "a65dc75f11c10725ce59a87a1d3376169142f030",
          "url": "https://github.com/unicode-org/icu/commit/03b94e9cb3045072c73d50938ee0e14597d24ce0"
        },
        "date": 1662651468595,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 40.647394154673144,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "103115900+rp9-next@users.noreply.github.com",
            "name": "rp9-next",
            "username": "rp9-next"
          },
          "committer": {
            "email": "42151464+pedberg-icu@users.noreply.github.com",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "distinct": true,
          "id": "bebcd6b8bb3239b2288fcf279ad1a1b5b3b68d1d",
          "message": "ICU-22114 Update pipeline workflows to use macOS-latest",
          "timestamp": "2022-09-08T09:02:31-07:00",
          "tree_id": "6d3af8477fed20b557199ee7fe82c616f56eb3b8",
          "url": "https://github.com/unicode-org/icu/commit/bebcd6b8bb3239b2288fcf279ad1a1b5b3b68d1d"
        },
        "date": 1662653213035,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 42.03624775686105,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cyndy_ishida@apple.com",
            "name": "Cyndy Ishida",
            "username": "cyndyishida"
          },
          "committer": {
            "email": "42151464+pedberg-icu@users.noreply.github.com",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "distinct": true,
          "id": "48124d170635f4abcd7440c5beeb6ea9878de32b",
          "message": "ICU-22072 Update Darwin Specific Macros\n\n* Update `U_PF_IPHONE` to be 0 when building for macOS/macCatalyst.\n* add macro definition for `attribute((visibility(\"hidden\")))` for cases\n  where internal structs exist within exposed classes.",
          "timestamp": "2022-09-08T09:08:57-07:00",
          "tree_id": "0dafe5b7ad2082eb0fdf56246a27bbef07669cd9",
          "url": "https://github.com/unicode-org/icu/commit/48124d170635f4abcd7440c5beeb6ea9878de32b"
        },
        "date": 1662653922187,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 32.80631016935051,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pedberg@unicode.org",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "committer": {
            "email": "42151464+pedberg-icu@users.noreply.github.com",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "distinct": true,
          "id": "1de1e36d6f6050d05b2db027f4c64ae6823eae2a",
          "message": "ICU-21957 integrate CLDR release-42-alpha3 to ICU main for 72",
          "timestamp": "2022-09-08T18:19:10-07:00",
          "tree_id": "43c37bedd13165396856bfd9fd7a067a73e93291",
          "url": "https://github.com/unicode-org/icu/commit/1de1e36d6f6050d05b2db027f4c64ae6823eae2a"
        },
        "date": 1662686656173,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 40.410470308239624,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pedberg@unicode.org",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "committer": {
            "email": "42151464+pedberg-icu@users.noreply.github.com",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "distinct": true,
          "id": "d3a753a0d4a3e6e9d4b5392ec7a0777d229c71f5",
          "message": "ICU-21957 BRS 72rc, update urename.h",
          "timestamp": "2022-09-08T18:19:30-07:00",
          "tree_id": "0c076a705771be959218146920f7658d04800557",
          "url": "https://github.com/unicode-org/icu/commit/d3a753a0d4a3e6e9d4b5392ec7a0777d229c71f5"
        },
        "date": 1662687041290,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 40.5576384889263,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "committer": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "distinct": true,
          "id": "5de6ee0c61b38feb4e35b842bc81d9d8030d2afa",
          "message": "ICU-21959 fix DateIntervalFormat general usage example",
          "timestamp": "2022-09-08T18:59:19-07:00",
          "tree_id": "0397c38bdb1077ee68baebac985ebe4ad514188a",
          "url": "https://github.com/unicode-org/icu/commit/5de6ee0c61b38feb4e35b842bc81d9d8030d2afa"
        },
        "date": 1662689120071,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 34.517254353871955,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "44496574+floratmin@users.noreply.github.com",
            "name": "floratmin",
            "username": "floratmin"
          },
          "committer": {
            "email": "shane@unicode.org",
            "name": "Shane F. Carr",
            "username": "sffc"
          },
          "distinct": true,
          "id": "1dfe456fe8a98de1f8ea966c45ef157f16160da6",
          "message": "ICU-21983 Fix fraction precision skeleton\n\nSee #2058",
          "timestamp": "2022-09-08T20:17:48-07:00",
          "tree_id": "3d308762dd0f304b04e153e238616d745d769ee9",
          "url": "https://github.com/unicode-org/icu/commit/1dfe456fe8a98de1f8ea966c45ef157f16160da6"
        },
        "date": 1662693647602,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 40.10229615680002,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pedberg@unicode.org",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "committer": {
            "email": "42151464+pedberg-icu@users.noreply.github.com",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "distinct": true,
          "id": "baee21aa7ac4ad952dd93c3430326f35cc54941b",
          "message": "ICU-22125 Add note about future deprecation to MeasureUnit createMetricTon/getMetricTon/METRIC_TON",
          "timestamp": "2022-09-08T20:59:07-07:00",
          "tree_id": "0de5e44d6f2ee5329452d8a04fed8b26ad09528d",
          "url": "https://github.com/unicode-org/icu/commit/baee21aa7ac4ad952dd93c3430326f35cc54941b"
        },
        "date": 1662696266743,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 37.77275588235624,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ftang@chromium.org",
            "name": "Frank Tang",
            "username": "FrankYFTang"
          },
          "committer": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "distinct": true,
          "id": "b9fdd2a7cfcf77454762ce9479bdfc40fe14168e",
          "message": "ICU-22025 Rename the enum type for Hebrew calendar to Month",
          "timestamp": "2022-09-09T01:29:06-07:00",
          "tree_id": "7fa42099194411991193f0d32c484edf4a92baa6",
          "url": "https://github.com/unicode-org/icu/commit/b9fdd2a7cfcf77454762ce9479bdfc40fe14168e"
        },
        "date": 1662712463066,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 45.80764993004511,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shane@unicode.org",
            "name": "Shane Carr",
            "username": "sffc"
          },
          "committer": {
            "email": "shane@unicode.org",
            "name": "Shane F. Carr",
            "username": "sffc"
          },
          "distinct": true,
          "id": "e4df3043677bf7fc10ec03c8cc37142fc46a7fda",
          "message": "ICU-21957 Update double-conversion to 256ac809561b756645e73ab7127c2aaaeabaa427\n\nSee #2179",
          "timestamp": "2022-09-09T15:47:12-07:00",
          "tree_id": "ca2a638aaa9226a53a37118d05ee384d7996789f",
          "url": "https://github.com/unicode-org/icu/commit/e4df3043677bf7fc10ec03c8cc37142fc46a7fda"
        },
        "date": 1662764087537,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 42.39816534102895,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "krlmlr@users.noreply.github.com",
            "name": "Kirill Müller",
            "username": "krlmlr"
          },
          "committer": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "distinct": true,
          "id": "a48ae42864e8fcb702a5dfb6f6a076e4dde7e397",
          "message": "ICU-22117 Replace uprv_strncpy() by uprv_memcpy()\n\nThis fixes a warning on gcc 9.4.0, which is triggered because the third argument to strncpy() depends on the length of the second argument (but should actually indicate the buffer size). Replacing by memcpy() seems harmless because a null terminator is appended further below, and the buffer is sized to be \"large enough\" elsewhere.\n\nSee https://github.com/duckdb/duckdb/issues/4391 for details.\n\nFixing the warning is important for us, because the checks in the duckdb repository treat all warnings as errors.",
          "timestamp": "2022-09-09T17:07:53-07:00",
          "tree_id": "5204a95a33d0eb3b78a5a30a3fee3cee294a0da7",
          "url": "https://github.com/unicode-org/icu/commit/a48ae42864e8fcb702a5dfb6f6a076e4dde7e397"
        },
        "date": 1662768974076,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 38.79465394677387,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "committer": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "distinct": true,
          "id": "99dee47fb783b1839af5cc742797ba5cdf8924ac",
          "message": "ICU-21959 add the uemoji feature to ICU Data Build Tool chapter",
          "timestamp": "2022-09-12T08:57:06-07:00",
          "tree_id": "5d7f297d26373540044bd9d1355a8b92bf240108",
          "url": "https://github.com/unicode-org/icu/commit/99dee47fb783b1839af5cc742797ba5cdf8924ac"
        },
        "date": 1662998528282,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 37.0777676379955,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pedberg@unicode.org",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "committer": {
            "email": "42151464+pedberg-icu@users.noreply.github.com",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "distinct": true,
          "id": "cfd99f3f3f309fc224a43377395085bea58b58cb",
          "message": "ICU-22143 Increase COMPACT_MAX_DIGITS from 15 to 20, needed for new ja data",
          "timestamp": "2022-09-12T17:17:19-07:00",
          "tree_id": "587d6e1872cc987a2bd6e5d4d8f00882be138e94",
          "url": "https://github.com/unicode-org/icu/commit/cfd99f3f3f309fc224a43377395085bea58b58cb"
        },
        "date": 1663028399587,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 31.315704684375405,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pedberg@unicode.org",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "committer": {
            "email": "42151464+pedberg-icu@users.noreply.github.com",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "distinct": true,
          "id": "06259cc6c33d220108d68818a9cdaec8942f9552",
          "message": "ICU-21957 integrate CLDR release-42-beta1 to ICU main for 72",
          "timestamp": "2022-09-13T11:18:37-07:00",
          "tree_id": "cb8a27062497043f6cc5be9122738e0d43981cad",
          "url": "https://github.com/unicode-org/icu/commit/06259cc6c33d220108d68818a9cdaec8942f9552"
        },
        "date": 1663093374528,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 38.15618493742622,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nmihai_2000@yahoo.com",
            "name": "Mihai Nita",
            "username": "mihnita"
          },
          "committer": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "distinct": true,
          "id": "db5903479332caf213e3d6813dfa75ed7e91720c",
          "message": "ICU-22124 Adding a tech preview implementation of MessageFormat v2\n\nSee #2170",
          "timestamp": "2022-09-15T10:32:13-07:00",
          "tree_id": "5bf067f7e5996c2571bf2c901465dd8757b4af77",
          "url": "https://github.com/unicode-org/icu/commit/db5903479332caf213e3d6813dfa75ed7e91720c"
        },
        "date": 1663263345879,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 39.552501035419866,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pedberg@unicode.org",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "committer": {
            "email": "42151464+pedberg-icu@users.noreply.github.com",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "distinct": true,
          "id": "b7340487995b6db9e70567690d2d14870739e97f",
          "message": "ICU-21957 fix NumberFormatterSettings::unitDisplayCase status, remove FormattedNumber:getGender",
          "timestamp": "2022-09-16T08:34:28-07:00",
          "tree_id": "9b37f45d9b4d6104f4c533de4df87c275083a6b9",
          "url": "https://github.com/unicode-org/icu/commit/b7340487995b6db9e70567690d2d14870739e97f"
        },
        "date": 1663342642558,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 37.01140999637507,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shane@unicode.org",
            "name": "Shane F. Carr",
            "username": "sffc"
          },
          "committer": {
            "email": "42151464+pedberg-icu@users.noreply.github.com",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "distinct": true,
          "id": "9dc1c020a19a5b950af3e6304b97e7396b92aaaf",
          "message": "ICU-20512 Add extra matchers to handle empty currency symbols",
          "timestamp": "2022-09-16T09:00:50-07:00",
          "tree_id": "24a6fbc2a421138fe4900be8283523091a3cfbc7",
          "url": "https://github.com/unicode-org/icu/commit/9dc1c020a19a5b950af3e6304b97e7396b92aaaf"
        },
        "date": 1663344272208,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 48.376678701764746,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "62772518+richgillam@users.noreply.github.com",
            "name": "Rich Gillam",
            "username": "richgillam"
          },
          "committer": {
            "email": "62772518+richgillam@users.noreply.github.com",
            "name": "Rich Gillam",
            "username": "richgillam"
          },
          "distinct": true,
          "id": "498abf69611ca32ed41c5811f82ab7dfcb244757",
          "message": "ICU-21125 Improvements to resource fallback:\n\n- Added code to use the parentLocales data in supplementalData.xml to determine the \"parent locale ID\" to use when\n  the requested resource bundle is not present (ICU-21126).\n- Added code to change the parent-chain search path to handle the script better (ICU-21125; algorithm was described\n  in CLDR-15265):\n  - The base search patch is now ll_Ssss_RR -> ll_RR -> ll_Ssss -> ll -> root\n  - If the requested script is not the default script for the requested language and region, we automatically\n    avoid fallbacks that will implicitly change the script.\n- Added new code to the CLDR-to-ICU data generation tool to generate source code, and used it to generate the lookup\n  tables for the new resource-fallback logic (we can't use the existing resource files for this, since that would\n  involve opening a resource bundle while trying to open another resource bundle).  The data-generation stuff is\n  intended to be generic enough to allow for us to generate more static data tables in the future.\n- Commented out a few collator tests, and changed one resource bundle test, because they're incompatible with the\n  new fallback logic (specifically, the default-script logic).",
          "timestamp": "2022-09-16T14:26:50-07:00",
          "tree_id": "4e378c360728a7aa22646c603405ea06d07168d3",
          "url": "https://github.com/unicode-org/icu/commit/498abf69611ca32ed41c5811f82ab7dfcb244757"
        },
        "date": 1663363882010,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 38.804471694805585,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "y.umaoka@gmail.com",
            "name": "yumaoka",
            "username": "yumaoka"
          },
          "committer": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "distinct": true,
          "id": "17435c4533c173b228d60e47413f35c1c6a9d748",
          "message": "ICU-22151 Update timezone-region supplementation mapping data for Jan Mayen and some others",
          "timestamp": "2022-09-16T16:49:42-07:00",
          "tree_id": "b53cde68b9a46dfbf1b6ce2fe8afcb340e7a4275",
          "url": "https://github.com/unicode-org/icu/commit/17435c4533c173b228d60e47413f35c1c6a9d748"
        },
        "date": 1663372369611,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 38.83577122823105,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pedberg@unicode.org",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "committer": {
            "email": "42151464+pedberg-icu@users.noreply.github.com",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "distinct": true,
          "id": "e646ea23e9988fff220ae8c135adf577dfe4c65c",
          "message": "ICU-20512 ICU4J: just add test of parse with empty curr symbol, code already works",
          "timestamp": "2022-09-16T19:01:06-07:00",
          "tree_id": "99ac611eaa8870e031f49960b83b84848d839c25",
          "url": "https://github.com/unicode-org/icu/commit/e646ea23e9988fff220ae8c135adf577dfe4c65c"
        },
        "date": 1663380215514,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 44.58917769177432,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pedberg@unicode.org",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "committer": {
            "email": "42151464+pedberg-icu@users.noreply.github.com",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "distinct": true,
          "id": "b403a10e514d7317999c78a53e300b15c85616a5",
          "message": "ICU-21957 integrate CLDR release-42-beta1b to ICU main for 72",
          "timestamp": "2022-09-19T14:43:59-07:00",
          "tree_id": "04722e603f2a579cf386a39865f6ee0178114e18",
          "url": "https://github.com/unicode-org/icu/commit/b403a10e514d7317999c78a53e300b15c85616a5"
        },
        "date": 1663624039702,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 37.90245511662216,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nmihai_2000@yahoo.com",
            "name": "Mihai Nita",
            "username": "mihnita"
          },
          "committer": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "distinct": true,
          "id": "f5367befba65cc6a94cea5ff557bf72f1af9254c",
          "message": "ICU-22124 Update the MessageFormat v2 links to the main branch",
          "timestamp": "2022-09-20T16:47:38-07:00",
          "tree_id": "6a3c5be851b439f5e83d53d6b21a2431eedb8e83",
          "url": "https://github.com/unicode-org/icu/commit/f5367befba65cc6a94cea5ff557bf72f1af9254c"
        },
        "date": 1663718355398,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 39.74463470372556,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "younies.mahmoud@gmail.com",
            "name": "Younies Mahmoud",
            "username": "younies"
          },
          "committer": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "distinct": true,
          "id": "dbfe83010856a58698edf68476ef693236f49a5a",
          "message": "ICU-22122 Support Locale Tags (ms, mu and rg)\n\nSee #2182",
          "timestamp": "2022-09-20T16:51:24-07:00",
          "tree_id": "4817fd24c8d0124c0b6375b844fafa8a93c32998",
          "url": "https://github.com/unicode-org/icu/commit/dbfe83010856a58698edf68476ef693236f49a5a"
        },
        "date": 1663718717668,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 32.20136858844035,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rp9.next@gmail.com",
            "name": "Rahul Pandey",
            "username": "rp9-next"
          },
          "committer": {
            "email": "103115900+rp9-next@users.noreply.github.com",
            "name": "Rahul Pandey",
            "username": "rp9-next"
          },
          "distinct": true,
          "id": "b08e51fa911c03c9b98eed36594b1c1970e2ccf9",
          "message": "ICU-21957 BRS72RC Update version number and regenerate configure",
          "timestamp": "2022-09-21T12:06:18+05:30",
          "tree_id": "1cdef136e269849dc95bf823bc26c3cf34ced39d",
          "url": "https://github.com/unicode-org/icu/commit/b08e51fa911c03c9b98eed36594b1c1970e2ccf9"
        },
        "date": 1663742309283,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 38.23176850024108,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nmihai_2000@yahoo.com",
            "name": "Mihai Nita",
            "username": "mihnita"
          },
          "committer": {
            "email": "cwcornelius@gmail.com",
            "name": "Craig Cornelius",
            "username": "sven-oly"
          },
          "distinct": true,
          "id": "b23d6c1afe339a09da31943f5fe104cd3f2689ff",
          "message": "ICU-22124 Tag the default constructor of OrderedMap as internal/deprecated\n\nICU-22124 Tag the default constructor of OrderedMap as internal/deprecated\r\n\r\nFix for apireport, see #2193",
          "timestamp": "2022-09-21T11:50:09-07:00",
          "tree_id": "2d04f8c14ced0ad2bb157e2c6f7df13de67bcf0d",
          "url": "https://github.com/unicode-org/icu/commit/b23d6c1afe339a09da31943f5fe104cd3f2689ff"
        },
        "date": 1663786416515,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 41.27711390419582,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ccornelius@google.com",
            "name": "Craig Cornelius",
            "username": "sven-oly"
          },
          "committer": {
            "email": "cwcornelius@gmail.com",
            "name": "Craig Cornelius",
            "username": "sven-oly"
          },
          "distinct": true,
          "id": "4f707beadeb1bccdbe15fc45c7fa03b13141a959",
          "message": "ICU-21957 Update ICU4J & ICU4C Change Reports BRS#19 and BRS#20\n\nSee #2193",
          "timestamp": "2022-09-21T16:16:28-07:00",
          "tree_id": "525225c26a294115e70799ecf39e6a85b6810271",
          "url": "https://github.com/unicode-org/icu/commit/4f707beadeb1bccdbe15fc45c7fa03b13141a959"
        },
        "date": 1663802422551,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 39.79788017796926,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "y.umaoka@gmail.com",
            "name": "yumaoka",
            "username": "yumaoka"
          },
          "committer": {
            "email": "yumaoka@users.noreply.github.com",
            "name": "Yoshito Umaoka",
            "username": "yumaoka"
          },
          "distinct": true,
          "id": "329c95e3b9df2d22fb20b02044a035fb509ef5f4",
          "message": "ICU-21957 BRS72 Cleanup import statements",
          "timestamp": "2022-09-22T08:07:12-04:00",
          "tree_id": "fd306139753f0b8e767268d57390120887aa73d9",
          "url": "https://github.com/unicode-org/icu/commit/329c95e3b9df2d22fb20b02044a035fb509ef5f4"
        },
        "date": 1663848730527,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 49.09093686389135,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pedberg@unicode.org",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "committer": {
            "email": "42151464+pedberg-icu@users.noreply.github.com",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "distinct": true,
          "id": "0c9d6f6b856c698bf8631c3971ff1fd8581b402b",
          "message": "ICU-21957 Fix status tags for U_HIDDEN, unum_hasAttribute",
          "timestamp": "2022-09-22T10:50:22-07:00",
          "tree_id": "284aa4e537dcb92e7f3c21d350654e469bc666fb",
          "url": "https://github.com/unicode-org/icu/commit/0c9d6f6b856c698bf8631c3971ff1fd8581b402b"
        },
        "date": 1663869243602,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 36.78099715205101,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "yumaoka@users.noreply.github.com",
            "name": "Yoshito Umaoka",
            "username": "yumaoka"
          },
          "committer": {
            "email": "yumaoka@users.noreply.github.com",
            "name": "Yoshito Umaoka",
            "username": "yumaoka"
          },
          "distinct": true,
          "id": "b5acb0ffc2fee16bf09bb657b19278c60f9f03e0",
          "message": "ICU-21957 Fixed java compiler warnings",
          "timestamp": "2022-09-22T16:37:56-04:00",
          "tree_id": "29fa83c5f6eaf9f033d4bd23b94f0a6101619241",
          "url": "https://github.com/unicode-org/icu/commit/b5acb0ffc2fee16bf09bb657b19278c60f9f03e0"
        },
        "date": 1663879288641,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 43.84711808033767,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "yumaoka@users.noreply.github.com",
            "name": "Yoshito Umaoka",
            "username": "yumaoka"
          },
          "committer": {
            "email": "yumaoka@users.noreply.github.com",
            "name": "Yoshito Umaoka",
            "username": "yumaoka"
          },
          "distinct": true,
          "id": "306be3ddf6160ac4799a20dc67704891101dc9bd",
          "message": "ICU-21957 BRS72 J API signature file",
          "timestamp": "2022-09-22T16:39:47-04:00",
          "tree_id": "b9e110ee3d076db6c0277539125e2e7d750e8cc0",
          "url": "https://github.com/unicode-org/icu/commit/306be3ddf6160ac4799a20dc67704891101dc9bd"
        },
        "date": 1663879868033,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 37.93717881036631,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "yumaoka@users.noreply.github.com",
            "name": "Yoshito Umaoka",
            "username": "yumaoka"
          },
          "committer": {
            "email": "yumaoka@users.noreply.github.com",
            "name": "Yoshito Umaoka",
            "username": "yumaoka"
          },
          "distinct": true,
          "id": "ef706cddf1aa4a94b796411925bbf4be63a110a8",
          "message": "ICU-21957 BRS72 ICU4J serialization test data",
          "timestamp": "2022-09-22T16:49:16-04:00",
          "tree_id": "7a931aa92a3a77163857f33bf61fc2279fb77205",
          "url": "https://github.com/unicode-org/icu/commit/ef706cddf1aa4a94b796411925bbf4be63a110a8"
        },
        "date": 1663880668823,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 32.52424580734227,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pedberg@unicode.org",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "committer": {
            "email": "42151464+pedberg-icu@users.noreply.github.com",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "distinct": true,
          "id": "cd12cebb8768edc4d47c158c903be40c32af4cde",
          "message": "ICU-21879 Fix UserGuide link to info in Korean transliteration",
          "timestamp": "2022-09-22T13:54:40-07:00",
          "tree_id": "92eec4df02a7500358b90dad09e005b9fd90cac1",
          "url": "https://github.com/unicode-org/icu/commit/cd12cebb8768edc4d47c158c903be40c32af4cde"
        },
        "date": 1663881705554,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 31.990085204756536,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ccornelius@google.com",
            "name": "Craig Cornelius",
            "username": "sven-oly"
          },
          "committer": {
            "email": "cwcornelius@gmail.com",
            "name": "Craig Cornelius",
            "username": "sven-oly"
          },
          "distinct": true,
          "id": "7c1f8d675b2424e07942010cfd86feabaa83a6cc",
          "message": "ICU-21957 update API Changes in ICU4C 72",
          "timestamp": "2022-09-22T14:55:24-07:00",
          "tree_id": "c83ef7f23364370852bacc7dbe033e770de8dd2b",
          "url": "https://github.com/unicode-org/icu/commit/7c1f8d675b2424e07942010cfd86feabaa83a6cc"
        },
        "date": 1663884005777,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 41.23635175214586,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pedberg@unicode.org",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "committer": {
            "email": "42151464+pedberg-icu@users.noreply.github.com",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "distinct": true,
          "id": "8f5529f30d25b282dfd7b12f87b1b69ab704a0eb",
          "message": "ICU-20894 Add UserGuide info on date pattern chars B, b",
          "timestamp": "2022-09-22T16:14:44-07:00",
          "tree_id": "1d83d348bba378665bf1005bb1d2c53b30ca1bb6",
          "url": "https://github.com/unicode-org/icu/commit/8f5529f30d25b282dfd7b12f87b1b69ab704a0eb"
        },
        "date": 1663888651937,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 38.11390112559486,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nmihai_2000@yahoo.com",
            "name": "Mihai Nita",
            "username": "mihnita"
          },
          "committer": {
            "email": "cwcornelius@gmail.com",
            "name": "Craig Cornelius",
            "username": "sven-oly"
          },
          "distinct": true,
          "id": "123e5c1cd6f033a1f52f71c879cf93228d2f7387",
          "message": "ICU-21957 Change the internal/deprecated javadoc tags",
          "timestamp": "2022-09-22T16:31:38-07:00",
          "tree_id": "2500781058c4d621fcfeec34ef1ac2ccc9f7fcae",
          "url": "https://github.com/unicode-org/icu/commit/123e5c1cd6f033a1f52f71c879cf93228d2f7387"
        },
        "date": 1663889807148,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 48.41205307139001,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nmihai_2000@yahoo.com",
            "name": "Mihai Nita",
            "username": "mihnita"
          },
          "committer": {
            "email": "cwcornelius@gmail.com",
            "name": "Craig Cornelius",
            "username": "sven-oly"
          },
          "distinct": true,
          "id": "123e5c1cd6f033a1f52f71c879cf93228d2f7387",
          "message": "ICU-21957 Change the internal/deprecated javadoc tags",
          "timestamp": "2022-09-22T16:31:38-07:00",
          "tree_id": "2500781058c4d621fcfeec34ef1ac2ccc9f7fcae",
          "url": "https://github.com/unicode-org/icu/commit/123e5c1cd6f033a1f52f71c879cf93228d2f7387"
        },
        "date": 1663890707433,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 44.34647901381482,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "62772518+richgillam@users.noreply.github.com",
            "name": "Rich Gillam",
            "username": "richgillam"
          },
          "committer": {
            "email": "62772518+richgillam@users.noreply.github.com",
            "name": "Rich Gillam",
            "username": "richgillam"
          },
          "distinct": true,
          "id": "2f07ce2c6cdae63cea58efb98deeed8fe5f4e8c5",
          "message": "ICU-22158 Make TestAlgorithmicParentFallback() test more robust to different default locales.",
          "timestamp": "2022-09-23T13:37:42-07:00",
          "tree_id": "fcd14af32a7124526598b13771c483a8314acedd",
          "url": "https://github.com/unicode-org/icu/commit/2f07ce2c6cdae63cea58efb98deeed8fe5f4e8c5"
        },
        "date": 1663965621210,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 49.202302966369324,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "62772518+richgillam@users.noreply.github.com",
            "name": "Rich Gillam",
            "username": "richgillam"
          },
          "committer": {
            "email": "62772518+richgillam@users.noreply.github.com",
            "name": "Rich Gillam",
            "username": "richgillam"
          },
          "distinct": true,
          "id": "e5980f1dcb9c3700c2d5b9b4d7f3641279cf01c6",
          "message": "ICU-22081 Fix table in PersonNameFormatter Javadoc.",
          "timestamp": "2022-09-26T16:17:17-07:00",
          "tree_id": "7e8bb38007c260785083dae5351b83062631707e",
          "url": "https://github.com/unicode-org/icu/commit/e5980f1dcb9c3700c2d5b9b4d7f3641279cf01c6"
        },
        "date": 1664234500672,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 32.98199442750448,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "committer": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "distinct": true,
          "id": "e72233f8b7526bbb840ae7742948a892686acfee",
          "message": "ICU-21959 fix file-level doxygen issues",
          "timestamp": "2022-09-27T15:58:43-07:00",
          "tree_id": "e935fae45795ccdd00637839bd409b521f5265ff",
          "url": "https://github.com/unicode-org/icu/commit/e72233f8b7526bbb840ae7742948a892686acfee"
        },
        "date": 1664319711009,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 38.34424938743468,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pedberg@unicode.org",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "committer": {
            "email": "42151464+pedberg-icu@users.noreply.github.com",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "distinct": true,
          "id": "49b08b414d5cb03901eaeca5e223ec835f59d3c5",
          "message": "ICU-21958 integrate CLDR release-42-beta2 to ICU main for 72",
          "timestamp": "2022-09-29T10:12:36-07:00",
          "tree_id": "9f70acc7afe174eafa0a00cbe205f70fc144472d",
          "url": "https://github.com/unicode-org/icu/commit/49b08b414d5cb03901eaeca5e223ec835f59d3c5"
        },
        "date": 1664471715154,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 33.49151755909475,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "y.umaoka@gmail.com",
            "name": "yumaoka",
            "username": "yumaoka"
          },
          "committer": {
            "email": "yumaoka@users.noreply.github.com",
            "name": "Yoshito Umaoka",
            "username": "yumaoka"
          },
          "distinct": true,
          "id": "702e529d31acf4a2ae225147876be7ac99c11a74",
          "message": "ICU-22165 Update ICU tzdata to 2022d",
          "timestamp": "2022-09-30T15:56:00-04:00",
          "tree_id": "0ac7309770029b5e6a07ef9634629c85e5de1c75",
          "url": "https://github.com/unicode-org/icu/commit/702e529d31acf4a2ae225147876be7ac99c11a74"
        },
        "date": 1664568067556,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 32.564107166687876,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pedberg@unicode.org",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "committer": {
            "email": "42151464+pedberg-icu@users.noreply.github.com",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "distinct": true,
          "id": "fe17bab2bb1499a30f10453228ab31173f0d2e83",
          "message": "ICU-21958 integrate CLDR release-42-beta3 to ICU main for 72",
          "timestamp": "2022-10-06T08:40:32-07:00",
          "tree_id": "d7afe17aae18d2fa4edc38a5a0d269d7ca13be5b",
          "url": "https://github.com/unicode-org/icu/commit/fe17bab2bb1499a30f10453228ab31173f0d2e83"
        },
        "date": 1665070990891,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 47.549014109288095,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ccornelius@google.com",
            "name": "Craig Cornelius",
            "username": "sven-oly"
          },
          "committer": {
            "email": "cwcornelius@gmail.com",
            "name": "Craig Cornelius",
            "username": "sven-oly"
          },
          "distinct": true,
          "id": "599ecdc4a181062c47ea500a72145c40e42982d8",
          "message": "ICU-21958 Improved process for Releasing ICU API Docs",
          "timestamp": "2022-10-06T09:07:55-07:00",
          "tree_id": "d63d033e13575c68686acb09a088dff586018ce8",
          "url": "https://github.com/unicode-org/icu/commit/599ecdc4a181062c47ea500a72145c40e42982d8"
        },
        "date": 1665072718105,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 32.012399927656475,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ccornelius@google.com",
            "name": "Craig Cornelius",
            "username": "sven-oly"
          },
          "committer": {
            "email": "cwcornelius@gmail.com",
            "name": "Craig Cornelius",
            "username": "sven-oly"
          },
          "distinct": true,
          "id": "be9a07907c7bc452bdcf9ec8b3511338718aa2cf",
          "message": "ICU-21958 Fix typo in displayoptions.h documentation",
          "timestamp": "2022-10-06T11:21:21-07:00",
          "tree_id": "2071800fd38dfad3febb25135d4322865b313800",
          "url": "https://github.com/unicode-org/icu/commit/be9a07907c7bc452bdcf9ec8b3511338718aa2cf"
        },
        "date": 1665080723233,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 41.65897969110324,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "felipe@felipegasper.com",
            "name": "Felipe Gasper",
            "username": "FGasper"
          },
          "committer": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "distinct": true,
          "id": "ff4ecd9f5017b940a7a29e5a25a70289dc3652db",
          "message": "ICU-22170 Fix typo in resource bundle documentation.\n\nhttps://unicode-org.atlassian.net/browse/ICU-22170",
          "timestamp": "2022-10-06T13:00:31-07:00",
          "tree_id": "7cbd9ccfdce9b92a9b79154d1263690414f6ac98",
          "url": "https://github.com/unicode-org/icu/commit/ff4ecd9f5017b940a7a29e5a25a70289dc3652db"
        },
        "date": 1665086700700,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 38.08972522911963,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ccornelius@google.com",
            "name": "Craig Cornelius",
            "username": "sven-oly"
          },
          "committer": {
            "email": "cwcornelius@gmail.com",
            "name": "Craig Cornelius",
            "username": "sven-oly"
          },
          "distinct": true,
          "id": "c203003b173fb867db26ebb2e838ca142400d1bb",
          "message": "ICU-21958 Revise C++ API Change reports\n\nAfter updating icu4c displayoptions.h",
          "timestamp": "2022-10-07T09:57:56-07:00",
          "tree_id": "09efaf3a4e405b24546df4f4bf982b08910341a3",
          "url": "https://github.com/unicode-org/icu/commit/c203003b173fb867db26ebb2e838ca142400d1bb"
        },
        "date": 1665162149714,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 39.85861515360452,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jharkawat@microsoft.com",
            "name": "JALAJ HARKAWAT",
            "username": "jalaj-microsoft"
          },
          "committer": {
            "email": "103115900+rp9-next@users.noreply.github.com",
            "name": "Rahul Pandey",
            "username": "rp9-next"
          },
          "distinct": true,
          "id": "ea4fca604f975b88753abbcdbb8b80f707709894",
          "message": "ICU-21958 BRS72GA Update version number",
          "timestamp": "2022-10-11T22:19:20+05:30",
          "tree_id": "3c93225b8f8f2a7abbef6c56c17e697624e85860",
          "url": "https://github.com/unicode-org/icu/commit/ea4fca604f975b88753abbcdbb8b80f707709894"
        },
        "date": 1665507242501,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 38.15436011975674,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pedberg@unicode.org",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "committer": {
            "email": "42151464+pedberg-icu@users.noreply.github.com",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "distinct": true,
          "id": "c6c01f4b79bcd46377b71506d466ef0f54e21ec2",
          "message": "ICU-21958 integrate CLDR release-42-beta4 to ICU main for 72",
          "timestamp": "2022-10-11T19:44:30-07:00",
          "tree_id": "b299f9a7baebb8658bf821519d2ddc91ef1be6ef",
          "url": "https://github.com/unicode-org/icu/commit/c6c01f4b79bcd46377b71506d466ef0f54e21ec2"
        },
        "date": 1665542941749,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 32.3162026762164,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "y.umaoka@gmail.com",
            "name": "yumaoka",
            "username": "yumaoka"
          },
          "committer": {
            "email": "yumaoka@users.noreply.github.com",
            "name": "Yoshito Umaoka",
            "username": "yumaoka"
          },
          "distinct": true,
          "id": "a620057d76c2a107f04f924d13678b5aa4bfb0d0",
          "message": "ICU-21958 BRS72 Updated ISO currency data URLs",
          "timestamp": "2022-10-12T12:37:52-04:00",
          "tree_id": "c75f8e572065d8dac1beb717d1357487b82b1730",
          "url": "https://github.com/unicode-org/icu/commit/a620057d76c2a107f04f924d13678b5aa4bfb0d0"
        },
        "date": 1665592876409,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 46.36476875465824,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "y.umaoka@gmail.com",
            "name": "yumaoka",
            "username": "yumaoka"
          },
          "committer": {
            "email": "yumaoka@users.noreply.github.com",
            "name": "Yoshito Umaoka",
            "username": "yumaoka"
          },
          "distinct": true,
          "id": "00a4cdbd5be8efabc7141ad7eec3b457b415fcef",
          "message": "ICU-22178 Update ICU tzdata to 2022e",
          "timestamp": "2022-10-12T21:07:34-04:00",
          "tree_id": "fb525902cbff3e9a7be2469d45821cc35074267b",
          "url": "https://github.com/unicode-org/icu/commit/00a4cdbd5be8efabc7141ad7eec3b457b415fcef"
        },
        "date": 1665623534235,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 39.59916778503972,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srl295@gmail.com",
            "name": "Steven R. Loomis",
            "username": "srl295"
          },
          "committer": {
            "email": "srl295@gmail.com",
            "name": "Steven R. Loomis",
            "username": "srl295"
          },
          "distinct": true,
          "id": "954d999126e5960cb32e80ce642870735949760f",
          "message": "ICU-21755 commit checker: skip No Time To Do This\n\n- also, verify that ALL resolutions are accounted for.",
          "timestamp": "2022-10-13T12:05:17-05:00",
          "tree_id": "05c4bb3a5c032f31313cfc3d3853f5521bf712da",
          "url": "https://github.com/unicode-org/icu/commit/954d999126e5960cb32e80ce642870735949760f"
        },
        "date": 1665680912234,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 40.07157954647393,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nrunge@google.com",
            "name": "gnrunge",
            "username": "gnrunge"
          },
          "committer": {
            "email": "41129501+gnrunge@users.noreply.github.com",
            "name": "Norbert Runge",
            "username": "gnrunge"
          },
          "distinct": true,
          "id": "f949713ce8647a1b35031ed81e578b3a19cb05c6",
          "message": "ICU-22177 Replace angular brackets in include with double quotes.",
          "timestamp": "2022-10-13T13:51:05-07:00",
          "tree_id": "aeb72421b7346d9a5a1af2131d06fd709c95b12c",
          "url": "https://github.com/unicode-org/icu/commit/f949713ce8647a1b35031ed81e578b3a19cb05c6"
        },
        "date": 1665694494486,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 37.880740605505125,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pedberg@unicode.org",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "committer": {
            "email": "42151464+pedberg-icu@users.noreply.github.com",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "distinct": true,
          "id": "ff3514f257ea10afe7e710e9f946f68d256704b1",
          "message": "ICU-21958 integrate CLDR release-42-beta5 to ICU main for 72",
          "timestamp": "2022-10-13T16:23:11-07:00",
          "tree_id": "1434057e6698a7015f43aae6e113805e7d938078",
          "url": "https://github.com/unicode-org/icu/commit/ff3514f257ea10afe7e710e9f946f68d256704b1"
        },
        "date": 1665703571038,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 39.72571960630816,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shane@unicode.org",
            "name": "Shane F. Carr",
            "username": "sffc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "649c5f0176b2f737155130b2fa63a2f5c9b7d07a",
          "message": "ICU-22189 Merge maint/maint-72 to main (#2235)",
          "timestamp": "2022-10-20T13:53:44-07:00",
          "tree_id": "247df49532cbacf779bb05db3c4f257ea7cf9ef0",
          "url": "https://github.com/unicode-org/icu/commit/649c5f0176b2f737155130b2fa63a2f5c9b7d07a"
        },
        "date": 1666299358719,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 32.22577394637453,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "103115900+rp9-next@users.noreply.github.com",
            "name": "rp9-next",
            "username": "rp9-next"
          },
          "committer": {
            "email": "fredrik@roubert.name",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "distinct": true,
          "id": "511b4111f2f1d97a70d08c6a885c333a8542a729",
          "message": "ICU-22190 Add public PGP Key\n\nSee #2236",
          "timestamp": "2022-10-20T23:29:13+02:00",
          "tree_id": "ba77322f3b9d45d1dc97c474231d3dbd2a211139",
          "url": "https://github.com/unicode-org/icu/commit/511b4111f2f1d97a70d08c6a885c333a8542a729"
        },
        "date": 1666301476253,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 39.50472142553642,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "roubert@google.com",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "committer": {
            "email": "fredrik@roubert.name",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "distinct": true,
          "id": "d453c12bfacde783b7e985cdb4eb15c6db277f78",
          "message": "ICU-22190 Update KEYS with additional public key\n\nSee #2237",
          "timestamp": "2022-10-21T02:13:32+02:00",
          "tree_id": "0fc2e58be4144d2ed6f6e966dda6667392347a4b",
          "url": "https://github.com/unicode-org/icu/commit/d453c12bfacde783b7e985cdb4eb15c6db277f78"
        },
        "date": 1666311450229,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 32.42494617411791,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "roubert@google.com",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "committer": {
            "email": "cwcornelius@gmail.com",
            "name": "Craig Cornelius",
            "username": "sven-oly"
          },
          "distinct": true,
          "id": "fbb4a5a167192d2d918ee0020e8e084c299de97d",
          "message": "ICU-22190 Update KEYS with additional signature data.",
          "timestamp": "2022-10-24T12:39:23-07:00",
          "tree_id": "031c0f6d3b697be99f016d7a0f08de1467a3af78",
          "url": "https://github.com/unicode-org/icu/commit/fbb4a5a167192d2d918ee0020e8e084c299de97d"
        },
        "date": 1666640656672,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 32.524737663266826,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "andy.heninger@gmail.com",
            "name": "Andy Heninger",
            "username": "aheninger"
          },
          "committer": {
            "email": "andy.heninger@gmail.com",
            "name": "Andy Heninger",
            "username": "aheninger"
          },
          "distinct": true,
          "id": "866254ef12750bda67b86cc685d07e7906765aac",
          "message": "ICU-21180 BreakIterator, change all NULL to nulptr\n\nIn the C++ break iterator code, change all use of NULL to nullptr.\nThis is in preparation for follow-on PRs to improve out-of-memory error handling\nin Break Iterators, keeping use of nullptr consistent between old and new\nor updated code.",
          "timestamp": "2022-10-26T18:55:48-07:00",
          "tree_id": "f96afd8a247d599df392b27c6be44b2aa97565f5",
          "url": "https://github.com/unicode-org/icu/commit/866254ef12750bda67b86cc685d07e7906765aac"
        },
        "date": 1666835869960,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 33.32325741776556,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "vital.had@gmail.com",
            "name": "Sergey Fedorov",
            "username": "barracuda156"
          },
          "committer": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "distinct": true,
          "id": "2b77e39fbbe08468aaa9102843b172a200019a9c",
          "message": "ICU-22191 writesrc.cpp: fix cinttypes header and place after C headers",
          "timestamp": "2022-10-28T08:41:22-07:00",
          "tree_id": "f82402c905121c4f1ffdb84918196b7ff9f31496",
          "url": "https://github.com/unicode-org/icu/commit/2b77e39fbbe08468aaa9102843b172a200019a9c"
        },
        "date": 1666971950508,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 39.76594993714468,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "elango@unicode.org",
            "name": "Elango Cheran",
            "username": "echeran"
          },
          "committer": {
            "email": "elango@unicode.org",
            "name": "Elango Cheran",
            "username": "echeran"
          },
          "distinct": true,
          "id": "e0f2d491aa35739e699a52803a1c968fd2e96397",
          "message": "ICU-22194 Fix typo in doc for BreakIterator rules update",
          "timestamp": "2022-10-28T14:37:49-07:00",
          "tree_id": "5d31f29279e1c1e35d3f099ab5fe34fdfed99b7a",
          "url": "https://github.com/unicode-org/icu/commit/e0f2d491aa35739e699a52803a1c968fd2e96397"
        },
        "date": 1666993365742,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 46.93148153553052,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ftang@chromium.org",
            "name": "Frank Tang",
            "username": "FrankYFTang"
          },
          "committer": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "distinct": true,
          "id": "9f3feed545bf6acf6c9811c125e2c17b9e9d4a3e",
          "message": "ICU-22160 clean up Calendar code\n\nRemove unnecessary BuddhistCalendar::handleComputeMonthStart\nRemove unnecessary include",
          "timestamp": "2022-10-31T08:41:54-07:00",
          "tree_id": "857aad0e45023a84ad0ca41f441fc9b0ce7de298",
          "url": "https://github.com/unicode-org/icu/commit/9f3feed545bf6acf6c9811c125e2c17b9e9d4a3e"
        },
        "date": 1667231131700,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 47.17037173720357,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ftang@chromium.org",
            "name": "Frank Tang",
            "username": "FrankYFTang"
          },
          "committer": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "distinct": true,
          "id": "294b26eb7aa2385a5232bb151320fa06e5266add",
          "message": "ICU-22159 Merge inDaylightTime to Calendar\n\nAll the subclass implementation of inDaylightTime are the same\nso just move to a base class implementation.",
          "timestamp": "2022-10-31T08:42:51-07:00",
          "tree_id": "121ade60a8dfe56a33501abdbb49999b88717c4b",
          "url": "https://github.com/unicode-org/icu/commit/294b26eb7aa2385a5232bb151320fa06e5266add"
        },
        "date": 1667231593898,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 39.80024054510333,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "committer": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "distinct": true,
          "id": "436f5a7df59c4780dedc0149c6756c16f4c803ce",
          "message": "ICU-22194 runConfigureICU computer->compiler\n\n@josephshen found that the help text here has the wrong word, and I dropped the ball on his PR #2217 :-(",
          "timestamp": "2022-10-31T16:18:18-07:00",
          "tree_id": "451b22446725ab19d85013e389d39011e4932d3e",
          "url": "https://github.com/unicode-org/icu/commit/436f5a7df59c4780dedc0149c6756c16f4c803ce"
        },
        "date": 1667258510634,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 45.72239879236769,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "y.umaoka@gmail.com",
            "name": "yumaoka",
            "username": "yumaoka"
          },
          "committer": {
            "email": "yumaoka@users.noreply.github.com",
            "name": "Yoshito Umaoka",
            "username": "yumaoka"
          },
          "distinct": true,
          "id": "2d19377a8d5eb459acce1911919f8a76d37d1405",
          "message": "ICU-22196 TZ Database 2022f updates",
          "timestamp": "2022-11-01T20:21:18-04:00",
          "tree_id": "55628e3f94f78702d84fdce814fb936e691dc99e",
          "url": "https://github.com/unicode-org/icu/commit/2d19377a8d5eb459acce1911919f8a76d37d1405"
        },
        "date": 1667348675841,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 49.966263185480805,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "andy.heninger@gmail.com",
            "name": "Andy Heninger",
            "username": "aheninger"
          },
          "committer": {
            "email": "andy.heninger@gmail.com",
            "name": "Andy Heninger",
            "username": "aheninger"
          },
          "distinct": true,
          "id": "67a7e2caf063b5e591dbe738d3329607c8a2ba85",
          "message": "ICU-21180 RuleBasedBreakIterator, refactor init.\n\nIn class RuleBasedBreakIterator, refactor how object initialization is handled\nby the various constructors, taking advantage of C++11's ability to directly\ninitialize data members in the class declaration.\n\nThis will simplify ongoing maintenance of the code by eliminating the need\nto keep initialization lists synchronized with the class data members.\nThis is being done now in preparation for additional changes to fix problems\nwith the handling of memory allocation failures.",
          "timestamp": "2022-11-02T16:25:41-07:00",
          "tree_id": "21e27911b19a90c1ccfd226a7716b68991ea5f18",
          "url": "https://github.com/unicode-org/icu/commit/67a7e2caf063b5e591dbe738d3329607c8a2ba85"
        },
        "date": 1667431692733,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 32.517362872019625,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jshin@chromium.org",
            "name": "Jungshik Shin",
            "username": "jungshik"
          },
          "committer": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "distinct": true,
          "id": "05dc2ac924a0acd3f9a7ca65e8a6078f8f62d299",
          "message": "ICU-22119 Add lw=phrase for Korean using line_*_phrase_cj\n\nbrkitr/ko.txt is created to use line_*_.cj.txt for both\nlw=phrase and lw != phrase cases for Korean. This is the simplest\nway to fix ICU-22119 taking advantage of the fact that ICU\ndoes not have a Korean dictionary so we don't have to worry about\nadding the list of Korean particles to keep them attached to the\npreceeding word.\n\nThe downside is that it only works when the locale is ko or ja while\nit should work in any locale. Another is it makes ICU deviate from\nCSS3 by using the same CJ (conditonal Japanese) rules for Korean as\nwell. However, CSS3 spec is wrong on that point and should be changed.\nSee https://unicode-org.atlassian.net/browse/CLDR-4931 .",
          "timestamp": "2022-11-07T22:30:49Z",
          "tree_id": "194d3e6ae08e801ae8dc90e8fbf4188494fdfa6c",
          "url": "https://github.com/unicode-org/icu/commit/05dc2ac924a0acd3f9a7ca65e8a6078f8f62d299"
        },
        "date": 1667860443625,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 39.850640216662626,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "committer": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "distinct": true,
          "id": "b00562e989af75bd68d326f1d5fc06ae1fae1036",
          "message": "ICU-22191 writesrc.cpp: enable PRI formatting constants on all compilers",
          "timestamp": "2022-11-09T04:38:00Z",
          "tree_id": "4d1d88b3e519c9ddacde6cd5e7c7875d3a193cab",
          "url": "https://github.com/unicode-org/icu/commit/b00562e989af75bd68d326f1d5fc06ae1fae1036"
        },
        "date": 1667968831688,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 38.09905899323888,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ftang@chromium.org",
            "name": "Frank Tang",
            "username": "FrankYFTang"
          },
          "committer": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "distinct": true,
          "id": "b0ab1171ad3c577325c878e40c2c8cdce1354f60",
          "message": "ICU-10752 Spread (s|g)etRelativeYear to subclass\n\nRemove the switch statment implementaiton in\nCalendar::(g|s)etRelatedYear\nand move the code into each subclass as proper OOP style.",
          "timestamp": "2022-11-09T13:18:24-08:00",
          "tree_id": "461f511a96b20fb97b7aa89c970d083bc79a89d0",
          "url": "https://github.com/unicode-org/icu/commit/b0ab1171ad3c577325c878e40c2c8cdce1354f60"
        },
        "date": 1668028966560,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 43.47908193520365,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ftang@chromium.org",
            "name": "Frank Tang",
            "username": "FrankYFTang"
          },
          "committer": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "distinct": true,
          "id": "9c1fb785b30ad8ce3177f1a6dab13ba224ef54f9",
          "message": "ICU-22164 Replace switch+getType with subclass\n\nSee #2215\n\nfix",
          "timestamp": "2022-11-11T14:49:16-08:00",
          "tree_id": "73d8753f29e0fd31bc6b0aaa0d0c66b5e01658a2",
          "url": "https://github.com/unicode-org/icu/commit/9c1fb785b30ad8ce3177f1a6dab13ba224ef54f9"
        },
        "date": 1668207225939,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 40.85730969876573,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kobrineli@ispras.ru",
            "name": "Eli Kobrin",
            "username": "kobrineli"
          },
          "committer": {
            "email": "62772518+richgillam@users.noreply.github.com",
            "name": "Rich Gillam",
            "username": "richgillam"
          },
          "distinct": true,
          "id": "8b7ef3d9088c130cf0ef8973b30ceb39a40b605a",
          "message": "ICU-22198 Fix stack buffer overflow.",
          "timestamp": "2022-11-16T11:29:32-08:00",
          "tree_id": "c884bed743fc9d9f7b2c3133f5b3f804d75a7f82",
          "url": "https://github.com/unicode-org/icu/commit/8b7ef3d9088c130cf0ef8973b30ceb39a40b605a"
        },
        "date": 1668627279400,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 45.4467497938972,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ftang@chromium.org",
            "name": "Frank Tang",
            "username": "FrankYFTang"
          },
          "committer": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "distinct": true,
          "id": "da5d3e0c5bea073bcf7d6c1e493211007c5112ea",
          "message": "ICU-22206 Fix unsafe mix of UBool\n\nFix \"unsafe mix of type 'UBool' and type 'bool' in operation:",
          "timestamp": "2022-11-18T10:36:55-08:00",
          "tree_id": "7bacd4bae7440ab1d91fe5c047ee2ac3344ad20b",
          "url": "https://github.com/unicode-org/icu/commit/da5d3e0c5bea073bcf7d6c1e493211007c5112ea"
        },
        "date": 1668796799813,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 39.68780052415259,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ftang@chromium.org",
            "name": "Frank Tang",
            "username": "FrankYFTang"
          },
          "committer": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "distinct": true,
          "id": "3654e945b68d5042cbf6254dd559a7ba794a76b3",
          "message": "ICU-22201 Add test to verify ICU-22043 on Java",
          "timestamp": "2022-11-21T17:42:16-08:00",
          "tree_id": "91f8c2a8bf92a8cfb345ec9401e2595a8f84c042",
          "url": "https://github.com/unicode-org/icu/commit/3654e945b68d5042cbf6254dd559a7ba794a76b3"
        },
        "date": 1669081605767,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 38.331607897098415,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "vichang@google.com",
            "name": "Victor Chang",
            "username": "gvictor"
          },
          "committer": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "distinct": true,
          "id": "194236a1b4ba692a2ba4775cb7dbb2c6a0248f03",
          "message": "ICU-22214 Fix set pointer to false in sprpdata.c",
          "timestamp": "2022-11-28T14:48:18-08:00",
          "tree_id": "6501209b0409064a1b8342212a8b15a867576753",
          "url": "https://github.com/unicode-org/icu/commit/194236a1b4ba692a2ba4775cb7dbb2c6a0248f03"
        },
        "date": 1669675929867,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 32.362271598379635,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shane@unicode.org",
            "name": "Shane F. Carr",
            "username": "sffc"
          },
          "committer": {
            "email": "shane@unicode.org",
            "name": "Shane F. Carr",
            "username": "sffc"
          },
          "distinct": true,
          "id": "a2854b615aa3876e15cda03eabbb6faf2e260fc2",
          "message": "ICU-22093 ICU4C: Add SimpleNumber and SimpleNumberFormatter\n\nSee #2241",
          "timestamp": "2022-11-28T20:28:50-08:00",
          "tree_id": "6671c62eaa101f144181dba98b1427b44c9f85bb",
          "url": "https://github.com/unicode-org/icu/commit/a2854b615aa3876e15cda03eabbb6faf2e260fc2"
        },
        "date": 1669696319754,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 43.121290108774396,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "y.umaoka@gmail.com",
            "name": "yumaoka",
            "username": "yumaoka"
          },
          "committer": {
            "email": "yumaoka@users.noreply.github.com",
            "name": "Yoshito Umaoka",
            "username": "yumaoka"
          },
          "distinct": true,
          "id": "cecd19e9ba46db107b02a9de62b2ae34e199360b",
          "message": "ICU-22217 TZ Database 2022g updates",
          "timestamp": "2022-11-30T22:08:08-05:00",
          "tree_id": "e19f9bc448a7622e50cd56b6c57a23e6534d0ced",
          "url": "https://github.com/unicode-org/icu/commit/cecd19e9ba46db107b02a9de62b2ae34e199360b"
        },
        "date": 1669864254533,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 38.15196967611357,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "manishsmail@gmail.com",
            "name": "Manish Goregaokar",
            "username": "Manishearth"
          },
          "committer": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "distinct": true,
          "id": "d02b30fc3f665677a775950b550179a8b3b736b2",
          "message": "ICU-20115 ICU4C: Move SimpleDateFormat over to SimpleNumberFormatter",
          "timestamp": "2022-12-01T09:40:55-08:00",
          "tree_id": "ce7707da3b9edf6f880f231053c5b9626e5701e9",
          "url": "https://github.com/unicode-org/icu/commit/d02b30fc3f665677a775950b550179a8b3b736b2"
        },
        "date": 1669916632656,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 46.15998119110731,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tushuhei@google.com",
            "name": "Shuhei Iitsuka",
            "username": "tushuhei"
          },
          "committer": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "distinct": true,
          "id": "b6b7b045e9cef2c942efd267bb89c5a545017f0c",
          "message": "ICU-22100 Incorporate BudouX into ICU (C++)",
          "timestamp": "2022-12-02T10:11:06-08:00",
          "tree_id": "d416d38810869c31b830dee6a216b33a43dbc907",
          "url": "https://github.com/unicode-org/icu/commit/b6b7b045e9cef2c942efd267bb89c5a545017f0c"
        },
        "date": 1670004924597,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 37.68009121647215,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "amy@amyspark.me",
            "name": "L. E. Segovia",
            "username": "amyspark"
          },
          "committer": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "distinct": true,
          "id": "e7aad77f31640666262e9ae1d098929920bd9a4b",
          "message": "ICU-22204 toolutil: Fix crash when trying to generate MinGW assembly",
          "timestamp": "2022-12-02T10:42:24-08:00",
          "tree_id": "ff8eff2e96f3b8edcb7eb3669fb9ca89f3991845",
          "url": "https://github.com/unicode-org/icu/commit/e7aad77f31640666262e9ae1d098929920bd9a4b"
        },
        "date": 1670006811023,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 36.98268523160401,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "amy@amyspark.me",
            "name": "L. E. Segovia",
            "username": "amyspark"
          },
          "committer": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "distinct": true,
          "id": "ba8e4087ca1b086d0e83a685654ff69a0005f1a9",
          "message": "ICU-22203 Windows: enable C-code generation with overridden entry point",
          "timestamp": "2022-12-02T11:45:09-08:00",
          "tree_id": "386e221678647a5c982c13fcfc3a40ff1bcd84ef",
          "url": "https://github.com/unicode-org/icu/commit/ba8e4087ca1b086d0e83a685654ff69a0005f1a9"
        },
        "date": 1670010553331,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 39.8546845731716,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pedberg@unicode.org",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "committer": {
            "email": "42151464+pedberg-icu@users.noreply.github.com",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "distinct": true,
          "id": "7e083e34fbdfc12e4d12adaa593a8da21a8ef2c5",
          "message": "ICU-22220 BRS73RC Update version number to 73.0.1",
          "timestamp": "2022-12-04T21:14:41-08:00",
          "tree_id": "f188442a34cb1a848905317a6cda67d7971c9507",
          "url": "https://github.com/unicode-org/icu/commit/7e083e34fbdfc12e4d12adaa593a8da21a8ef2c5"
        },
        "date": 1670217500761,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 31.57252547423767,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "committer": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "distinct": true,
          "id": "0cbf969cf75539b3423554595c8756e7923c2653",
          "message": "ICU-22193 fix some CI test failures",
          "timestamp": "2022-12-13T11:18:44-08:00",
          "tree_id": "6652128a523a2e696a3682d783591d3799ef231f",
          "url": "https://github.com/unicode-org/icu/commit/0cbf969cf75539b3423554595c8756e7923c2653"
        },
        "date": 1670959367123,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 32.648431125643164,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "elango@unicode.org",
            "name": "Elango Cheran",
            "username": "echeran"
          },
          "committer": {
            "email": "elango@unicode.org",
            "name": "Elango Cheran",
            "username": "echeran"
          },
          "distinct": true,
          "id": "57c9313eb7da760f27922fec7ce40f515232e7e7",
          "message": "ICU-22193 Use Ubuntu 20.04 for jobs failing in migration to 22.04",
          "timestamp": "2022-12-14T20:04:45Z",
          "tree_id": "e14c5268f7dcd929919029260ca7a00697f3723f",
          "url": "https://github.com/unicode-org/icu/commit/57c9313eb7da760f27922fec7ce40f515232e7e7"
        },
        "date": 1671048508595,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 39.86969666621436,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "elango@unicode.org",
            "name": "Elango Cheran",
            "username": "echeran"
          },
          "committer": {
            "email": "elango@unicode.org",
            "name": "Elango Cheran",
            "username": "echeran"
          },
          "distinct": true,
          "id": "45e98d4f67e6d88c29d70fb8f5322d549066f76d",
          "message": "ICU-12811 Build ICU4J using Maven\n\nSee #2251",
          "timestamp": "2022-12-15T00:48:31Z",
          "tree_id": "47f397196d5494ea204df32d02f60eaab06d4ef5",
          "url": "https://github.com/unicode-org/icu/commit/45e98d4f67e6d88c29d70fb8f5322d549066f76d"
        },
        "date": 1671065566302,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 48.209012392907724,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "roubert@google.com",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "committer": {
            "email": "fredrik@roubert.name",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "distinct": true,
          "id": "2a6f06cb4c80474fe751401adbdf84c4c54414d0",
          "message": "ICU-22193 Make run-with-stubdata work with ubuntu-latest.\n\nIt remains unknown when and why this changed, but nowadays the required\ndata files are to be found in a subdirectory named \"build\".",
          "timestamp": "2022-12-16T10:06:32+09:00",
          "tree_id": "d3bb990e60097bd173df7b28d16e354f99beae33",
          "url": "https://github.com/unicode-org/icu/commit/2a6f06cb4c80474fe751401adbdf84c4c54414d0"
        },
        "date": 1671153029850,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 32.131206235894744,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "elango@unicode.org",
            "name": "Elango Cheran",
            "username": "echeran"
          },
          "committer": {
            "email": "elango@unicode.org",
            "name": "Elango Cheran",
            "username": "echeran"
          },
          "distinct": true,
          "id": "f6353aeedcfa4b5907f1037a9d924660ff8f4d87",
          "message": "ICU-12811 Make CI jobs for Maven run serially to avoid CI cache race condition",
          "timestamp": "2022-12-17T12:59:35-05:00",
          "tree_id": "0392e4c95b704e3f6885fc5bed37e19012ad8259",
          "url": "https://github.com/unicode-org/icu/commit/f6353aeedcfa4b5907f1037a9d924660ff8f4d87"
        },
        "date": 1671300145479,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 32.80815359971655,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "roubert@google.com",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "committer": {
            "email": "fredrik@roubert.name",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "distinct": true,
          "id": "82115c060f14dc68601ccd66bcb2fa6e6918d926",
          "message": "ICU-22193 Make clang-release-build-and-test work with ubuntu-latest.\n\nContemporary implementations of the C++ standard library also use the\n@deprecated annotation in its header files and these then get included\nby the preprocessor when preprocessing the ICU header files, like this:\n\n  /// @deprecated Non-standard. Use `is_null_pointer` instead.\n\nIn order to work as expected, testtagsguards.sh must therefore be\nupdated to ignore @deprecated annotations unless they're for ICU.",
          "timestamp": "2022-12-19T10:56:01+09:00",
          "tree_id": "ad9a42e55c0d1d045b196e9d43b859fcf6e2d39d",
          "url": "https://github.com/unicode-org/icu/commit/82115c060f14dc68601ccd66bcb2fa6e6918d926"
        },
        "date": 1671415075129,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 37.927115354060916,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "elango@unicode.org",
            "name": "Elango Cheran",
            "username": "echeran"
          },
          "distinct": true,
          "id": "44480c4ba430eef36056a66867e5abad892c5e96",
          "message": "ICU-22193 Bump junit from 4.12 to 4.13.1 in /icu4j/maven-build\n\nBumps [junit](https://github.com/junit-team/junit4) from 4.12 to 4.13.1.\n- [Release notes](https://github.com/junit-team/junit4/releases)\n- [Changelog](https://github.com/junit-team/junit4/blob/main/doc/ReleaseNotes4.12.md)\n- [Commits](https://github.com/junit-team/junit4/compare/r4.12...r4.13.1)\n\n---\nupdated-dependencies:\n- dependency-name: junit:junit\n  dependency-type: direct:production\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2022-12-19T10:48:04-08:00",
          "tree_id": "1c007e81782e26919c8569d7c3a839bb535a3b0f",
          "url": "https://github.com/unicode-org/icu/commit/44480c4ba430eef36056a66867e5abad892c5e96"
        },
        "date": 1671475883871,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 49.322097984436375,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "allenwtsu@google.com",
            "name": "allenwtsu",
            "username": "allensu05"
          },
          "committer": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "distinct": true,
          "id": "90caafbcd437e04147106d8e35a29b189977f0b7",
          "message": "ICU-22100 Incorporate BudouX into ICU (Java)\n\nSee #2214",
          "timestamp": "2022-12-20T14:27:04-08:00",
          "tree_id": "b0f1243db09796adc0ab6a1402cb26cea8d97484",
          "url": "https://github.com/unicode-org/icu/commit/90caafbcd437e04147106d8e35a29b189977f0b7"
        },
        "date": 1671575389825,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 50.28925749489862,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "roubert@google.com",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "committer": {
            "email": "fredrik@roubert.name",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "distinct": true,
          "id": "dcac8ac4c1c450b291276e6c84b29f8b5844cf48",
          "message": "ICU-22233 Use separate Bazel cache keys per OS.",
          "timestamp": "2022-12-22T14:43:22+09:00",
          "tree_id": "1277c3ad5ffcd596586185975df17ac4dd2b2ede",
          "url": "https://github.com/unicode-org/icu/commit/dcac8ac4c1c450b291276e6c84b29f8b5844cf48"
        },
        "date": 1671687943114,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 32.83044080513697,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tkoeppe@google.com",
            "name": "Thomas Köppe",
            "username": "tkoeppe"
          },
          "committer": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "distinct": true,
          "id": "0c6d7fc98d0bf6967d2eb952cc686771c2cac78b",
          "message": "ICU-22222 Add explicit instantiation declarations\n\nWe exclude these declarations from MSVC, where they don't work because\nthe don't interact well with the U_I18N_API import/export macros",
          "timestamp": "2023-01-07T00:03:38Z",
          "tree_id": "735d5cc385901dc54bbd88e8ab504e957dc72a50",
          "url": "https://github.com/unicode-org/icu/commit/0c6d7fc98d0bf6967d2eb952cc686771c2cac78b"
        },
        "date": 1673050064466,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 32.70115977848754,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "allenwtsu@google.com",
            "name": "allenwtsu",
            "username": "allensu05"
          },
          "committer": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "distinct": true,
          "id": "80fb309c8a5f865767ef72f85ea1bf70c29e2b39",
          "message": "ICU-22100 Remove unicode blocks from Japanese ML phrase breaking\n\nSee #2278",
          "timestamp": "2023-01-09T17:38:51-08:00",
          "tree_id": "f43d7fa47d78eff1cfd536e76ebc55ca2905a0ce",
          "url": "https://github.com/unicode-org/icu/commit/80fb309c8a5f865767ef72f85ea1bf70c29e2b39"
        },
        "date": 1673314883999,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 32.8568806253144,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pedberg@unicode.org",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "committer": {
            "email": "42151464+pedberg-icu@users.noreply.github.com",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "distinct": true,
          "id": "8d411e9b6aba9d15577341663ca2a70dd806e5a7",
          "message": "ICU-22220 integrate CLDR release-43-m0 to ICU main for 73, update maven-build files",
          "timestamp": "2023-01-10T11:32:24-08:00",
          "tree_id": "4c8e7eed718809007e0c1ebcbff8394214003f45",
          "url": "https://github.com/unicode-org/icu/commit/8d411e9b6aba9d15577341663ca2a70dd806e5a7"
        },
        "date": 1673379443085,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 39.52612198342894,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pedberg@unicode.org",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "committer": {
            "email": "42151464+pedberg-icu@users.noreply.github.com",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "distinct": true,
          "id": "ad82a6693acdab6adde7499853bb9bb5befc6fc3",
          "message": "ICU-22220 integrate root exemplarCities chnages for CLDR release-43-m0 to ICU main",
          "timestamp": "2023-01-12T08:57:35-08:00",
          "tree_id": "e154680212a1754592fc958909b26f7ae8f91b4f",
          "url": "https://github.com/unicode-org/icu/commit/ad82a6693acdab6adde7499853bb9bb5befc6fc3"
        },
        "date": 1673542968432,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 46.471831910459,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shane@unicode.org",
            "name": "Shane F. Carr",
            "username": "sffc"
          },
          "committer": {
            "email": "shane@unicode.org",
            "name": "Shane F. Carr",
            "username": "sffc"
          },
          "distinct": true,
          "id": "89c1700424ee903718fad955c240017d6431d0eb",
          "message": "ICU-22093 Polish for SimpleNumberFormatter\n\nSee #2277",
          "timestamp": "2023-01-12T11:38:27-06:00",
          "tree_id": "283a2331ea8afbfeeeb7839b7168bd93a6c70077",
          "url": "https://github.com/unicode-org/icu/commit/89c1700424ee903718fad955c240017d6431d0eb"
        },
        "date": 1673545336226,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 43.480762920216314,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "elango@unicode.org",
            "name": "Elango Cheran",
            "username": "echeran"
          },
          "committer": {
            "email": "elango@unicode.org",
            "name": "Elango Cheran",
            "username": "echeran"
          },
          "distinct": true,
          "id": "2007e135f1e78711247b2f0ab440dec54307cfe9",
          "message": "ICU-12811 Add CI workflow to retain caches that are flaky/costly to init\n\nSee #2281",
          "timestamp": "2023-01-13T12:36:48-08:00",
          "tree_id": "2a21451602d4cf3110e614b1f01632ea5d99cabf",
          "url": "https://github.com/unicode-org/icu/commit/2007e135f1e78711247b2f0ab440dec54307cfe9"
        },
        "date": 1673642505338,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 32.247502325439584,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "elango@unicode.org",
            "name": "Elango Cheran",
            "username": "echeran"
          },
          "committer": {
            "email": "elango@unicode.org",
            "name": "Elango Cheran",
            "username": "echeran"
          },
          "distinct": true,
          "id": "e7530bd9ff2e7317710a1611f6d6de264143bf6a",
          "message": "ICU-12811 Fix CI cache retain workflow's cron schedule string",
          "timestamp": "2023-01-13T14:57:51-08:00",
          "tree_id": "8f682b0352a1e935f54d6bf6533a94d6ee722c88",
          "url": "https://github.com/unicode-org/icu/commit/e7530bd9ff2e7317710a1611f6d6de264143bf6a"
        },
        "date": 1673651235273,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 32.270744378374175,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "elango@unicode.org",
            "name": "Elango Cheran",
            "username": "echeran"
          },
          "committer": {
            "email": "elango@unicode.org",
            "name": "Elango Cheran",
            "username": "echeran"
          },
          "distinct": true,
          "id": "1b292fa92463e81881f0cf3d6f8da4d92d3a5ad3",
          "message": "ICU-22233 Fix CI cache name for Bazel build",
          "timestamp": "2023-01-17T10:50:47-08:00",
          "tree_id": "eb0733b35209e1bb1f35b9bb8d51ea47ec253cb3",
          "url": "https://github.com/unicode-org/icu/commit/1b292fa92463e81881f0cf3d6f8da4d92d3a5ad3"
        },
        "date": 1673981670611,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 32.025549647767754,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "elango@unicode.org",
            "name": "Elango Cheran",
            "username": "echeran"
          },
          "committer": {
            "email": "elango@unicode.org",
            "name": "Elango Cheran",
            "username": "echeran"
          },
          "distinct": true,
          "id": "d4ac09edbdc25feb06b3a011cbbb150b243d91f2",
          "message": "ICU-12811 Replace local-maven-repo with data jar contents\n\nSee #2275",
          "timestamp": "2023-01-17T11:09:29-08:00",
          "tree_id": "6c93956c5a721a7c04b0e8045b60c405e9cb0169",
          "url": "https://github.com/unicode-org/icu/commit/d4ac09edbdc25feb06b3a011cbbb150b243d91f2"
        },
        "date": 1673982732809,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 48.34563902352623,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "elango@unicode.org",
            "name": "Elango Cheran",
            "username": "echeran"
          },
          "committer": {
            "email": "elango@unicode.org",
            "name": "Elango Cheran",
            "username": "echeran"
          },
          "distinct": true,
          "id": "a7f4531bfaf4e7ca93fea518b5c1734cd6ffdc1a",
          "message": "ICU-12811 Fix localespi tests when run by Maven on Java 8\n\nSee #2283",
          "timestamp": "2023-01-17T13:17:29-08:00",
          "tree_id": "ab7208fb8048e6124c55b6e56967b3743e83b787",
          "url": "https://github.com/unicode-org/icu/commit/a7f4531bfaf4e7ca93fea518b5c1734cd6ffdc1a"
        },
        "date": 1673990582613,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 33.1654850529504,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ftang@chromium.org",
            "name": "Frank Tang",
            "username": "FrankYFTang"
          },
          "committer": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "distinct": true,
          "id": "cd1b772cbfb54f7f995ddeeea59788d55d51a68f",
          "message": "ICU-22027 Add C++ Calendar API for Temporal\n\nAPI proposal\nhttps://docs.google.com/document/d/1UYriEzzExiLhi2RD3zjTsI5UQHv1dXaFqrct7yXNdCA/edit#heading=h.x9obor85vpx9\n\nDesign Doc\nhttps://docs.google.com/document/d/15ViyC9s0k3VEDwBmAkKxxz4IadZ6QrAIoETkdkF0cVA/\n\nICU-22027 Adjust API to remove the mention of M00L for now.",
          "timestamp": "2023-01-17T15:08:08-08:00",
          "tree_id": "2f12d4892565296d13ab321bd16ecabbf49e1693",
          "url": "https://github.com/unicode-org/icu/commit/cd1b772cbfb54f7f995ddeeea59788d55d51a68f"
        },
        "date": 1673997065652,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 39.78550131646596,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "committer": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "distinct": true,
          "id": "da5b047dbedf4026dd95638296d25f539561c986",
          "message": "ICU-22242 Test to show incorrect calculation of 1890\n\nSee #2270",
          "timestamp": "2023-01-18T12:05:34-08:00",
          "tree_id": "25d17fe75737df672323a556d02261f1d97667e3",
          "url": "https://github.com/unicode-org/icu/commit/da5b047dbedf4026dd95638296d25f539561c986"
        },
        "date": 1674072607185,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 32.71114210250203,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ftang@chromium.org",
            "name": "Frank Tang",
            "username": "FrankYFTang"
          },
          "committer": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "distinct": true,
          "id": "bb0e745e25c99cc57055caf45c81b95ef63b25d4",
          "message": "ICU-22058 make pointer argument in floorDivide optional\n\nCheck the third argument and not set if it is a nullptr",
          "timestamp": "2023-01-18T20:24:48-08:00",
          "tree_id": "e8313c3668e355649f80e591a4e4f7eae184d1f8",
          "url": "https://github.com/unicode-org/icu/commit/bb0e745e25c99cc57055caf45c81b95ef63b25d4"
        },
        "date": 1674102584057,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 32.829574631910745,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ftang@chromium.org",
            "name": "Frank Tang",
            "username": "FrankYFTang"
          },
          "committer": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "distinct": true,
          "id": "de9cb9a133c3538030fd2d2275756e15e8320c4b",
          "message": "ICU-12725 Update u_isIDStart and u_isIDPart to TR31\n\nICU-12725 move to uprops.cpp\n\nICU-12725 change dependency\n\nICU-12725 Fix Java implementation",
          "timestamp": "2023-01-25T12:02:53-08:00",
          "tree_id": "979f490b1438a16993f1ef99b28304a5cf07b5fb",
          "url": "https://github.com/unicode-org/icu/commit/de9cb9a133c3538030fd2d2275756e15e8320c4b"
        },
        "date": 1674677152726,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 39.88759747769157,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ftang@chromium.org",
            "name": "Frank Tang",
            "username": "FrankYFTang"
          },
          "committer": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "distinct": true,
          "id": "de0a28644b26e2a85ccb916480d338e6404ec3d6",
          "message": "ICU-22251 Move sprintf to snprintf.\n\nSee #2291",
          "timestamp": "2023-01-25T23:23:29-08:00",
          "tree_id": "f024d8521b725c1f346bb12f9c76b84e930456dc",
          "url": "https://github.com/unicode-org/icu/commit/de0a28644b26e2a85ccb916480d338e6404ec3d6"
        },
        "date": 1674718095483,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 42.347993590608944,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nmihai_2000@yahoo.com",
            "name": "Mihai Nita",
            "username": "mihnita"
          },
          "committer": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "distinct": true,
          "id": "76df897b77fd938abc29c9121dde794300a171e6",
          "message": "ICU-22226 Fix Calendar.getFirstDayOfWeek to honor -u-fw",
          "timestamp": "2023-01-31T00:26:30-08:00",
          "tree_id": "2b05b7fc6cbcaa271e487783d48b1a21413679ba",
          "url": "https://github.com/unicode-org/icu/commit/76df897b77fd938abc29c9121dde794300a171e6"
        },
        "date": 1675153741364,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 32.89236806800343,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "allenwtsu@google.com",
            "name": "allenwtsu",
            "username": "allensu05"
          },
          "committer": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "distinct": true,
          "id": "0b3b83a80966f638fae1704a6a6042596af2a757",
          "message": "ICU-22100 Improve Japanese phrase breaking performance\n\nSee #2287",
          "timestamp": "2023-01-31T00:29:41-08:00",
          "tree_id": "aa9a9bdc146e2022b3285d78f1b6d0411cfff53c",
          "url": "https://github.com/unicode-org/icu/commit/0b3b83a80966f638fae1704a6a6042596af2a757"
        },
        "date": 1675154428928,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 47.740960578918155,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ftang@chromium.org",
            "name": "Frank Tang",
            "username": "FrankYFTang"
          },
          "committer": {
            "email": "fredrik@roubert.name",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "distinct": true,
          "id": "a47717934aee8e9581aefa68a917f60a3348375c",
          "message": "ICU-22252 Suppress Calendar Consistency\n\nSee #2298",
          "timestamp": "2023-02-03T16:38:50+01:00",
          "tree_id": "392f6888a8313682ef77f357b1874f8bbc63990e",
          "url": "https://github.com/unicode-org/icu/commit/a47717934aee8e9581aefa68a917f60a3348375c"
        },
        "date": 1675439026688,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 46.27939011773897,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "roubert@google.com",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "committer": {
            "email": "fredrik@roubert.name",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "distinct": true,
          "id": "2e0d30cfcf43490d0d3a0026139256a7328a0183",
          "message": "ICU-21833 Replace NULL with nullptr in all C++ code.",
          "timestamp": "2023-02-03T20:20:38+01:00",
          "tree_id": "63ac5877ca5497b3d64ffd8ac4e7d89d80f68bc2",
          "url": "https://github.com/unicode-org/icu/commit/2e0d30cfcf43490d0d3a0026139256a7328a0183"
        },
        "date": 1675452295130,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 44.880605579058184,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "summersnow9403@gmail.com",
            "name": "HanatoK",
            "username": "HanatoK"
          },
          "committer": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "distinct": true,
          "id": "fcd6e384bd283fc960f543ef9ff92ed775406671",
          "message": "ICU-22194 Change CharacterIterator.DONE to CharacterIterator::DONE in\ndoc\n\nIn C++, the enum inside a class should be accessed by \"::\" instead of\n\".\".",
          "timestamp": "2023-02-03T12:01:51-08:00",
          "tree_id": "b8c2b713545549e678ff146f32156a79933b05e5",
          "url": "https://github.com/unicode-org/icu/commit/fcd6e384bd283fc960f543ef9ff92ed775406671"
        },
        "date": 1675454716195,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 32.76585704191748,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "roubert@google.com",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "committer": {
            "email": "fredrik@roubert.name",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "distinct": true,
          "id": "5560ee8870b41c94c0f89e363f31f57c1014de99",
          "message": "ICU-21833 Replace nullptr with 0 when assigning to UChar.\n\nThis bug was originally introduced by ICU-4844 which erroneously\nassigned NULL to UChar (which happens to work, even though it's\nconceptually wrong).",
          "timestamp": "2023-02-03T22:04:36+01:00",
          "tree_id": "65b67180cf3f4e4c30b5327ca64bc0d7c81524df",
          "url": "https://github.com/unicode-org/icu/commit/5560ee8870b41c94c0f89e363f31f57c1014de99"
        },
        "date": 1675458613540,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 39.5792277261262,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "allenwtsu@google.com",
            "name": "allenwtsu",
            "username": "allensu05"
          },
          "committer": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "distinct": true,
          "id": "3f05361b4192d6d337c3dacc63a91f53c966da3e",
          "message": "ICU-22100 Modify ML model to improve Japanese phrase breaking performance",
          "timestamp": "2023-02-03T13:07:53-08:00",
          "tree_id": "cd9867e63b7e7efbccbbc7b9093e57b6664d2cfc",
          "url": "https://github.com/unicode-org/icu/commit/3f05361b4192d6d337c3dacc63a91f53c966da3e"
        },
        "date": 1675458911465,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 40.084744762038824,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "richard_gillam@apple.com",
            "name": "Rich Gillam",
            "username": "richgillam"
          },
          "committer": {
            "email": "62772518+richgillam@users.noreply.github.com",
            "name": "Rich Gillam",
            "username": "richgillam"
          },
          "distinct": true,
          "id": "08f14db4c45f6cbcf5b6b5d45131c98b7b64b57c",
          "message": "ICU-22249 Fixed endless loop in ICUResourceBundle when you ask for a locale with a nonstandard parent and that locale\nis also the system default locale.",
          "timestamp": "2023-02-03T16:49:24-08:00",
          "tree_id": "8557245915c10c3a3c16f545d62f41e69b952160",
          "url": "https://github.com/unicode-org/icu/commit/08f14db4c45f6cbcf5b6b5d45131c98b7b64b57c"
        },
        "date": 1675472055833,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 49.40225249980007,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "roubert@google.com",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "committer": {
            "email": "fredrik@roubert.name",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "distinct": true,
          "id": "2de88f9d9c07f7e693449f94858d96053222acea",
          "message": "ICU-21833 Replace UChar with char16_t in all C++ code.",
          "timestamp": "2023-02-06T19:27:44+01:00",
          "tree_id": "412b7cd21e471cc5d02327b90b8fda073771a4a7",
          "url": "https://github.com/unicode-org/icu/commit/2de88f9d9c07f7e693449f94858d96053222acea"
        },
        "date": 1675708292774,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 38.08675474486307,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "roubert@google.com",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "committer": {
            "email": "fredrik@roubert.name",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "distinct": true,
          "id": "9fd2742dfa5d78f3a5d14c603c85ed3dcf88a197",
          "message": "ICU-21833 Replace UChar with char16_t in C++ code.",
          "timestamp": "2023-02-06T21:53:20+01:00",
          "tree_id": "691c225ac134d26e5a69d43c0a300f27b295c040",
          "url": "https://github.com/unicode-org/icu/commit/9fd2742dfa5d78f3a5d14c603c85ed3dcf88a197"
        },
        "date": 1675716911792,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 32.03748003429945,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ftang@chromium.org",
            "name": "Frank Tang",
            "username": "FrankYFTang"
          },
          "committer": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "distinct": true,
          "id": "0264f411b8e0d7ede4bba157b42193fde5ebc150",
          "message": "ICU-22257 Add \"Test ICU4J with only little-endian ICU4C data\"\n\nAutomate \"Test ICU4J with only little-endian ICU4C data\" as stated in\nhttps://unicode-org.github.io/icu/processes/release/tasks/integration.html#test-icu4j-with-only-little-endian-icu4c-data\n\nUpdate .ci-builds/.azure-exhaustive-tests.yml\n\nCo-authored-by: Markus Scherer <markus.icu@gmail.com>",
          "timestamp": "2023-02-06T14:32:33-08:00",
          "tree_id": "ddbd22ca64745e12b860d426e7ace5b4f2d88d54",
          "url": "https://github.com/unicode-org/icu/commit/0264f411b8e0d7ede4bba157b42193fde5ebc150"
        },
        "date": 1675722965400,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 42.60919541175582,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pedberg@unicode.org",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "committer": {
            "email": "42151464+pedberg-icu@users.noreply.github.com",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "distinct": true,
          "id": "87fc840bf7750cee0884a133e2efb976c9714f30",
          "message": "ICU-22220 CLDR release-43-alpha0 (with SurveyTool data) to ICU main",
          "timestamp": "2023-02-06T14:46:14-08:00",
          "tree_id": "6440201cdfe62f73b439452e53765529e410775f",
          "url": "https://github.com/unicode-org/icu/commit/87fc840bf7750cee0884a133e2efb976c9714f30"
        },
        "date": 1675724268420,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 39.97544602192617,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ftang@chromium.org",
            "name": "Frank Tang",
            "username": "FrankYFTang"
          },
          "committer": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "distinct": true,
          "id": "638acd0c389aa386acd62f61bc32808549fa4f20",
          "message": "ICU-21374 Add a CFI build bot for ICU4C\n\nAdd the github action bot to build with cfi\nAlso fix all the known issues which require the change from C style cast to\nstatic_cast inside the i18n and common directory while we are sure about\nthe object. and use\nC++ style dynamic_cast for base-to-derive cast in other code inside i18n\nand common and in test code or tool.\nChange to use const_cast for casting between const / non-const",
          "timestamp": "2023-02-06T15:47:14-08:00",
          "tree_id": "0b3dadee331155ccd574dabffa6b1587e9b378a2",
          "url": "https://github.com/unicode-org/icu/commit/638acd0c389aa386acd62f61bc32808549fa4f20"
        },
        "date": 1675727619702,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 32.4150519268858,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "committer": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "distinct": true,
          "id": "39dfee39b88a09fcafb33992a5495c4117490644",
          "message": "ICU-22257 BRS doc: J with little-endian data automatic",
          "timestamp": "2023-02-06T17:52:40-08:00",
          "tree_id": "f7b750f20376f0be1ea10ec21548b44276a631e2",
          "url": "https://github.com/unicode-org/icu/commit/39dfee39b88a09fcafb33992a5495c4117490644"
        },
        "date": 1675735282718,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 32.586809934713024,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ftang@chromium.org",
            "name": "Frank Tang",
            "username": "FrankYFTang"
          },
          "committer": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "distinct": true,
          "id": "3f093b602a2de85c95249a057ab0bc5528bbda82",
          "message": "ICU-22266 update OS version to 22.04 from 18.04\n\nUpdate configuration in main/.ci-builds from the deprecated 18.04\nto the newest 22.04\n\nSince vangrind has issue under 22.04 use 20.04 for vangrind for now.\n\nAlso use apt-get instead of apt since apt does not have a stable\ncommandline interface.",
          "timestamp": "2023-02-08T13:43:14-08:00",
          "tree_id": "cdf7cfee32d593132cafd9a0c17b0fe01060b715",
          "url": "https://github.com/unicode-org/icu/commit/3f093b602a2de85c95249a057ab0bc5528bbda82"
        },
        "date": 1675893337055,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 46.27300864897873,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "elango@unicode.org",
            "name": "Elango Cheran",
            "username": "echeran"
          },
          "committer": {
            "email": "elango@unicode.org",
            "name": "Elango Cheran",
            "username": "echeran"
          },
          "distinct": true,
          "id": "f1e02f149fcaffcc7cea1be21363f0cb2d59f4a9",
          "message": "ICU-22194 Update DateTime skeleton docs with link to symbols table",
          "timestamp": "2023-02-09T11:34:53-05:00",
          "tree_id": "7abdedb361d7651a4ceed1bef1f04fce741f7a9c",
          "url": "https://github.com/unicode-org/icu/commit/f1e02f149fcaffcc7cea1be21363f0cb2d59f4a9"
        },
        "date": 1675960629817,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 32.066333364934145,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "manishsmail@gmail.com",
            "name": "Manish Goregaokar",
            "username": "Manishearth"
          },
          "committer": {
            "email": "shane@unicode.org",
            "name": "Shane F. Carr",
            "username": "sffc"
          },
          "distinct": true,
          "id": "9f108554af3eea7739dd07598c8e681926dc9755",
          "message": "ICU-22270 icuexportdata: Add property and property value names/aliases",
          "timestamp": "2023-02-09T15:44:48-08:00",
          "tree_id": "b51aea8d52b7d05eb29fabf01da950694fda57d0",
          "url": "https://github.com/unicode-org/icu/commit/9f108554af3eea7739dd07598c8e681926dc9755"
        },
        "date": 1675986841183,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 44.4433323921883,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "richard_gillam@apple.com",
            "name": "Rich Gillam",
            "username": "richgillam"
          },
          "committer": {
            "email": "62772518+richgillam@users.noreply.github.com",
            "name": "Rich Gillam",
            "username": "richgillam"
          },
          "distinct": true,
          "id": "288c4c7555915ce7b1fb675d94ddd495058fc039",
          "message": "ICU-22220 ICU 73 API promotions (promoting ICU 71 and earlier)",
          "timestamp": "2023-02-09T16:44:56-08:00",
          "tree_id": "e313f0c03ca432bb9e7db57ab537d0cc87d4dc7f",
          "url": "https://github.com/unicode-org/icu/commit/288c4c7555915ce7b1fb675d94ddd495058fc039"
        },
        "date": 1675990095455,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 43.85285022686592,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ftang@chromium.org",
            "name": "Frank Tang",
            "username": "FrankYFTang"
          },
          "committer": {
            "email": "shane@unicode.org",
            "name": "Shane F. Carr",
            "username": "sffc"
          },
          "distinct": true,
          "id": "ec2d4b346edab4b803a85464a4ff170bf28cb417",
          "message": "ICU-22251 Move sprintf to snprintf.\n\nSee #2291",
          "timestamp": "2023-02-09T17:38:32-08:00",
          "tree_id": "12cdd6a87c85ce8ed9bb454ea638ac0b1f3137b2",
          "url": "https://github.com/unicode-org/icu/commit/ec2d4b346edab4b803a85464a4ff170bf28cb417"
        },
        "date": 1675993489549,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 36.46399387562585,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "elango@unicode.org",
            "name": "Elango Cheran",
            "username": "echeran"
          },
          "committer": {
            "email": "elango@unicode.org",
            "name": "Elango Cheran",
            "username": "echeran"
          },
          "distinct": true,
          "id": "b20c97009c29a6c230b834a02dea93bc7c2c1e7b",
          "message": "ICU-22194 Add User Guide doc for MessageFormat 2.0 tech preview impl\n\nSee #2313",
          "timestamp": "2023-02-10T21:17:59-05:00",
          "tree_id": "beea462ce3cb4c5c6e8d5e465956091c0c65bedc",
          "url": "https://github.com/unicode-org/icu/commit/b20c97009c29a6c230b834a02dea93bc7c2c1e7b"
        },
        "date": 1676082074058,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 38.1802088845482,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ftang@chromium.org",
            "name": "Frank Tang",
            "username": "FrankYFTang"
          },
          "committer": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "distinct": true,
          "id": "32bc47eefe0c74ea4b7479595ae804673428491f",
          "message": "ICU-22257 Revert PR 2302\n\nSince the same work has been done in PR 1884 before.",
          "timestamp": "2023-02-13T12:37:11-08:00",
          "tree_id": "6b0fcd8acb42bf22e8ceaf2bf810cc1048965a11",
          "url": "https://github.com/unicode-org/icu/commit/32bc47eefe0c74ea4b7479595ae804673428491f"
        },
        "date": 1676320840288,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 46.334118254633104,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "committer": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "distinct": true,
          "id": "47b321f1fa6a5bafcc69a8bb01215773a577fedc",
          "message": "ICU-22277 correct collation error return of uninitialized length value while previous code return error\n\nSee #2320",
          "timestamp": "2023-02-13T14:24:33-08:00",
          "tree_id": "97737c89c28e20f49abfba94a136e7b313ce2dc6",
          "url": "https://github.com/unicode-org/icu/commit/47b321f1fa6a5bafcc69a8bb01215773a577fedc"
        },
        "date": 1676327345878,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 39.94502584132829,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nmihai_2000@yahoo.com",
            "name": "Mihai Nita",
            "username": "mihnita"
          },
          "committer": {
            "email": "nmihai_2000@yahoo.com",
            "name": "Mihai Nita",
            "username": "mihnita"
          },
          "distinct": true,
          "id": "461bcef128dabde84e796700c1634128dbd74d1b",
          "message": "ICU-22194 Fix javadoc error (self-closing element not allowed)",
          "timestamp": "2023-02-13T16:30:28-08:00",
          "tree_id": "21aa5ca2b55432a11f067d6f5e6b2c6dcd7de029",
          "url": "https://github.com/unicode-org/icu/commit/461bcef128dabde84e796700c1634128dbd74d1b"
        },
        "date": 1676334921916,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 32.08821905667367,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "committer": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "distinct": true,
          "id": "c91c2fbdc5c20fbbb62e4aeca24e887a074b2c6b",
          "message": "ICU-22257 BRS doc: J with little-endian data automatic since ICU 70",
          "timestamp": "2023-02-13T17:12:04-08:00",
          "tree_id": "218d2e4d87b573bb862b9bed78e6b77905949e88",
          "url": "https://github.com/unicode-org/icu/commit/c91c2fbdc5c20fbbb62e4aeca24e887a074b2c6b"
        },
        "date": 1676337334744,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 39.83032008338343,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "committer": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "distinct": true,
          "id": "331172f0a34c5447541b115122251ea3fb1426d7",
          "message": "ICU-22262 Automate environment test\n\nSee #2309",
          "timestamp": "2023-02-15T15:24:19-08:00",
          "tree_id": "b7b5e63e6193e6eaaa6858f36acf341829c51aed",
          "url": "https://github.com/unicode-org/icu/commit/331172f0a34c5447541b115122251ea3fb1426d7"
        },
        "date": 1676504303095,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 39.814305120092015,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ftang@chromium.org",
            "name": "Frank Tang",
            "username": "FrankYFTang"
          },
          "committer": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "distinct": true,
          "id": "cb87c0893bab7b68eab6d129a28e0673149c1665",
          "message": "ICU-22269 Parallelize uconfig* tests\n\n1. Shorten job name uconfig_variation-check-unit-tests to uconfig-unit-tests\n2. Shorten job name uconfig_variation-check-all-header-tests to uconfig-header-tests\n3. use 11 jobs to run each of them in parallel to reduce the ~1hrs run to about 6-8 mins\n\nCo-authored-by: Markus Scherer <markus.icu@gmail.com>",
          "timestamp": "2023-02-15T16:52:14-08:00",
          "tree_id": "033ec82ca5a92d88b78c4373bec6578d1d192813",
          "url": "https://github.com/unicode-org/icu/commit/cb87c0893bab7b68eab6d129a28e0673149c1665"
        },
        "date": 1676508931524,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 39.60916356502722,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ftang@chromium.org",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "committer": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "distinct": true,
          "id": "a4c6b2a3595853dac07bb39c81a812bf1eb7d4f5",
          "message": "ICU-22262 Document environment test automation",
          "timestamp": "2023-02-15T16:53:02-08:00",
          "tree_id": "c8e121ab5c02e5fd51a14fa5744e35c3689cb22b",
          "url": "https://github.com/unicode-org/icu/commit/a4c6b2a3595853dac07bb39c81a812bf1eb7d4f5"
        },
        "date": 1676509992219,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 32.576854710512556,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "elango@unicode.org",
            "name": "Elango Cheran",
            "username": "echeran"
          },
          "committer": {
            "email": "elango@unicode.org",
            "name": "Elango Cheran",
            "username": "echeran"
          },
          "distinct": true,
          "id": "bd065d4704bb212dfe3414c9d1ef105fb2a4df75",
          "message": "ICU-22220 Automate BRS tasks\n\nSee #2318",
          "timestamp": "2023-02-15T21:18:58-05:00",
          "tree_id": "811adba53a48b4f444702294bf9c98c462633c37",
          "url": "https://github.com/unicode-org/icu/commit/bd065d4704bb212dfe3414c9d1ef105fb2a4df75"
        },
        "date": 1676514144827,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 42.66522146237681,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pedberg@unicode.org",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "committer": {
            "email": "42151464+pedberg-icu@users.noreply.github.com",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "distinct": true,
          "id": "d469e628f391d1d464e980eb257c595fdb5a2a3a",
          "message": "ICU-22220 CLDR release-43-alpha1 to ICU main",
          "timestamp": "2023-02-21T11:39:48-08:00",
          "tree_id": "139994bd1a780ac4496fcb075f619aacce918cee",
          "url": "https://github.com/unicode-org/icu/commit/d469e628f391d1d464e980eb257c595fdb5a2a3a"
        },
        "date": 1677009868451,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 37.558775212462436,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mnita@google.com",
            "name": "Mihai Nita",
            "username": "mihnita"
          },
          "committer": {
            "email": "nmihai_2000@yahoo.com",
            "name": "Mihai Nita",
            "username": "mihnita"
          },
          "distinct": true,
          "id": "015222105a614dbf09e187a06cbc5d97839fe287",
          "message": "ICU-12811 Refactor test-framework to not depend on core\n\nFixing the maven-build projects",
          "timestamp": "2023-02-21T14:16:19-08:00",
          "tree_id": "8d1dbbaf15df0b4821f1dcdc349c7417738c54fd",
          "url": "https://github.com/unicode-org/icu/commit/015222105a614dbf09e187a06cbc5d97839fe287"
        },
        "date": 1677018018555,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 46.68411518387539,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "roubert@google.com",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "committer": {
            "email": "fredrik@roubert.name",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "distinct": true,
          "id": "a3cbe809091807b406cf526635cb866270a20da2",
          "message": "ICU-21833 Replace U_OVERRIDE with override everywhere.",
          "timestamp": "2023-02-22T18:28:07+01:00",
          "tree_id": "e908dabb0e71b134ca3d429594088298ca114087",
          "url": "https://github.com/unicode-org/icu/commit/a3cbe809091807b406cf526635cb866270a20da2"
        },
        "date": 1677087070685,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 46.493622802445856,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pedberg@unicode.org",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "committer": {
            "email": "42151464+pedberg-icu@users.noreply.github.com",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "distinct": true,
          "id": "f924741bf2d7a2810a47ec44dd24e66f4979f03e",
          "message": "ICU-22220 BRS 73rc update urename.h pass 1",
          "timestamp": "2023-02-22T10:30:25-08:00",
          "tree_id": "063ed2669cbe165196f736e33b56fe82c0a90fc0",
          "url": "https://github.com/unicode-org/icu/commit/f924741bf2d7a2810a47ec44dd24e66f4979f03e"
        },
        "date": 1677090904537,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 39.61501899414889,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ftang@chromium.org",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "committer": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "distinct": true,
          "id": "c3b8ffa11e4509d9c7993c04933346efc944a9a5",
          "message": "ICU-22291 doc automate \"Test samples (C) on Linux\"\n\nJust realize the task is already automated in \r\n.github/workflows/icu_ci.yml\r\nas \"icu4c-test-samples:\" but we should document that.",
          "timestamp": "2023-02-22T11:41:18-08:00",
          "tree_id": "639e18fc313bed872e640e7958d15d598d3484d2",
          "url": "https://github.com/unicode-org/icu/commit/c3b8ffa11e4509d9c7993c04933346efc944a9a5"
        },
        "date": 1677095047246,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 43.61403243835714,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "roubert@google.com",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "committer": {
            "email": "fredrik@roubert.name",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "distinct": true,
          "id": "ea2cb8549efa2d60d17ca59517606626cc1626e8",
          "message": "ICU-21833 Replace U_FINAL with final everywhere.",
          "timestamp": "2023-02-22T22:39:41+01:00",
          "tree_id": "fd419258901e8fcb56d02745a36fa887f1adeb89",
          "url": "https://github.com/unicode-org/icu/commit/ea2cb8549efa2d60d17ca59517606626cc1626e8"
        },
        "date": 1677102316481,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 32.17635721319801,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "committer": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "distinct": true,
          "id": "d86b1cebe192004759b6c875b0f831b97ccdae34",
          "message": "ICU-22220 update root collation from CLDR 43",
          "timestamp": "2023-02-22T17:13:13-08:00",
          "tree_id": "a8524f42361f61a8d752effc0f6ac4b89edecd2c",
          "url": "https://github.com/unicode-org/icu/commit/d86b1cebe192004759b6c875b0f831b97ccdae34"
        },
        "date": 1677115275851,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 39.44279151947438,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "manishsmail@gmail.com",
            "name": "Manish Goregaokar",
            "username": "Manishearth"
          },
          "committer": {
            "email": "shane@unicode.org",
            "name": "Shane F. Carr",
            "username": "sffc"
          },
          "distinct": true,
          "id": "0f4e084208f8486aef6200be91e59a24848ea552",
          "message": "ICU-22270 Add support for General_Category_Mask in icuexport",
          "timestamp": "2023-02-24T11:42:13-08:00",
          "tree_id": "ad18d73322c27efe8e6227aa829db90a205b6f7f",
          "url": "https://github.com/unicode-org/icu/commit/0f4e084208f8486aef6200be91e59a24848ea552"
        },
        "date": 1677268053254,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 33.948388509922935,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "manishsmail@gmail.com",
            "name": "Manish Goregaokar",
            "username": "Manishearth"
          },
          "committer": {
            "email": "shane@unicode.org",
            "name": "Shane F. Carr",
            "username": "sffc"
          },
          "distinct": true,
          "id": "d3c94cc062ef83e05b6b1dc1dd699c543efff39a",
          "message": "ICU-22270 Use hex for mask properties",
          "timestamp": "2023-02-24T14:06:31-08:00",
          "tree_id": "976d0d3e6f2e9953fd64a711eb20e7a10931b9f4",
          "url": "https://github.com/unicode-org/icu/commit/d3c94cc062ef83e05b6b1dc1dd699c543efff39a"
        },
        "date": 1677276581831,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 43.73888405748567,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "manishsmail@gmail.com",
            "name": "Manish Goregaokar",
            "username": "Manishearth"
          },
          "committer": {
            "email": "shane@unicode.org",
            "name": "Shane F. Carr",
            "username": "sffc"
          },
          "distinct": true,
          "id": "ea2711d9b0ad236d41f78d120ecb39c3adc4bed5",
          "message": "ICU-22270 Use hex for mask properties",
          "timestamp": "2023-02-24T14:10:00-08:00",
          "tree_id": "022bfe333fbcb7031efd16cf25902ca3be191309",
          "url": "https://github.com/unicode-org/icu/commit/ea2711d9b0ad236d41f78d120ecb39c3adc4bed5"
        },
        "date": 1677277456775,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 37.54747130057944,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rob_dereycke@hotmail.com",
            "name": "Rob De Reycke",
            "username": "Robbos"
          },
          "committer": {
            "email": "yumaoka@users.noreply.github.com",
            "name": "Yoshito Umaoka",
            "username": "yumaoka"
          },
          "distinct": true,
          "id": "e8bc04d5dfd4a463608ccbb47efca7de222d66a5",
          "message": "ICU-21386 uprv_tzname() should find the correct Olson ID when /etc/localtime is a \"double\" link\n\nSee #2323",
          "timestamp": "2023-02-25T16:48:43-05:00",
          "tree_id": "cf677fdd3ad52417f47b3117537a40b9cfca574c",
          "url": "https://github.com/unicode-org/icu/commit/e8bc04d5dfd4a463608ccbb47efca7de222d66a5"
        },
        "date": 1677362169144,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 32.635348844824456,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pedberg@unicode.org",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "committer": {
            "email": "42151464+pedberg-icu@users.noreply.github.com",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "distinct": true,
          "id": "18f6a3a6e242dce81486382420c9e3400c231660",
          "message": "ICU-22220 CLDR release-43-alpha2 to ICU main",
          "timestamp": "2023-02-27T11:09:02-08:00",
          "tree_id": "99e8d79097963a625bfbeccd7cdccc4895e03f20",
          "url": "https://github.com/unicode-org/icu/commit/18f6a3a6e242dce81486382420c9e3400c231660"
        },
        "date": 1677525212587,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 32.67309158595492,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "committer": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "distinct": true,
          "id": "80414a247b652f0e1215adef2799da689f162533",
          "message": "ICU-22224 Enable UBSAN and fix breakage\n\nSee #2324",
          "timestamp": "2023-02-27T17:31:49-08:00",
          "tree_id": "5a78919db64968a78c2cb0c33cf8c48583906e72",
          "url": "https://github.com/unicode-org/icu/commit/80414a247b652f0e1215adef2799da689f162533"
        },
        "date": 1677548149215,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 32.09453982483466,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "committer": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "distinct": true,
          "id": "d8e80fea88fe5b48d305444e19c07ddaee4952eb",
          "message": "ICU-21833 remove pre-C++11 code; U_SIZEOF_UCHAR=2",
          "timestamp": "2023-03-01T15:23:34-08:00",
          "tree_id": "e5f398604863be223e30b7161b88a49d44a183b0",
          "url": "https://github.com/unicode-org/icu/commit/d8e80fea88fe5b48d305444e19c07ddaee4952eb"
        },
        "date": 1677713225729,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 44.55519649837353,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "committer": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "distinct": true,
          "id": "28643799377ecf654564f6f31854b02788cebe33",
          "message": "ICU-21833 replace U_NOEXCEPT with C++11 standard noexcept",
          "timestamp": "2023-03-01T15:24:34-08:00",
          "tree_id": "270c042f0a59e17ed55a92489897e2ee8f42f78e",
          "url": "https://github.com/unicode-org/icu/commit/28643799377ecf654564f6f31854b02788cebe33"
        },
        "date": 1677714181330,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 38.40932908225639,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "committer": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "distinct": true,
          "id": "79ab90b5f9373935b8ae1308cf1148fdc1a04d7b",
          "message": "ICU-6065 UnicodeSet::closeOver(simple case folding)\n\nSee #2322",
          "timestamp": "2023-03-02T08:12:57-08:00",
          "tree_id": "0461660238861886ae746869c846c22750a92157",
          "url": "https://github.com/unicode-org/icu/commit/79ab90b5f9373935b8ae1308cf1148fdc1a04d7b"
        },
        "date": 1677773874858,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 31.94582613910827,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "committer": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "distinct": true,
          "id": "b6dcc95d3c7c370ed993f7e2b7972adc48364293",
          "message": "ICU-21833 remove redundant void parameter lists\n\nSee #2351",
          "timestamp": "2023-03-02T09:31:57-08:00",
          "tree_id": "7ee8d0e0daf0d493fb83f78e9ae7c7212991c124",
          "url": "https://github.com/unicode-org/icu/commit/b6dcc95d3c7c370ed993f7e2b7972adc48364293"
        },
        "date": 1677778458603,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 38.34218365933456,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "richard_gillam@apple.com",
            "name": "Rich Gillam",
            "username": "richgillam"
          },
          "committer": {
            "email": "62772518+richgillam@users.noreply.github.com",
            "name": "Rich Gillam",
            "username": "richgillam"
          },
          "distinct": true,
          "id": "797a01ee2baec8f97f747016092142cad58f241d",
          "message": "ICU-22287 Move PersonName/PersonNameFormatter API from Tech Preview to @draft",
          "timestamp": "2023-03-02T11:22:09-08:00",
          "tree_id": "8612a76645597566da79bcf8934b1fc50f7ca308",
          "url": "https://github.com/unicode-org/icu/commit/797a01ee2baec8f97f747016092142cad58f241d"
        },
        "date": 1677785086009,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 32.05048575203295,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ccornelius@google.com",
            "name": "Craig",
            "username": "sven-oly"
          },
          "committer": {
            "email": "cwcornelius@gmail.com",
            "name": "Craig Cornelius",
            "username": "sven-oly"
          },
          "distinct": true,
          "id": "461ec392a5b0779434d8e8e4751216af547ee08e",
          "message": "ICU-22220 ICU4J API change report",
          "timestamp": "2023-03-03T19:47:31Z",
          "tree_id": "9df1568e5bee95e936fef335c1dacabc5740f014",
          "url": "https://github.com/unicode-org/icu/commit/461ec392a5b0779434d8e8e4751216af547ee08e"
        },
        "date": 1677873629201,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 37.93944630395766,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ccornelius@google.com",
            "name": "Craig Cornelius",
            "username": "sven-oly"
          },
          "committer": {
            "email": "cwcornelius@gmail.com",
            "name": "Craig Cornelius",
            "username": "sven-oly"
          },
          "distinct": true,
          "id": "5c07ee700b0e5a122e70d948a05edc6a0f1360fe",
          "message": "ICU-22220 ICU4C APIChangeReport for ICU73\n\nSee #2347",
          "timestamp": "2023-03-04T02:17:48Z",
          "tree_id": "ddb8d5686dfff87ca047e1b546b8df5a3c6fb1f9",
          "url": "https://github.com/unicode-org/icu/commit/5c07ee700b0e5a122e70d948a05edc6a0f1360fe"
        },
        "date": 1677896464109,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 46.022338532973336,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ccornelius@google.com",
            "name": "Craig",
            "username": "sven-oly"
          },
          "committer": {
            "email": "cwcornelius@gmail.com",
            "name": "Craig Cornelius",
            "username": "sven-oly"
          },
          "distinct": true,
          "id": "bca85d4641978596cbefb0269ebd7f9834345d67",
          "message": "ICU-22220 Update ICU4J API status",
          "timestamp": "2023-03-04T02:18:24Z",
          "tree_id": "9cce2afd94c02304e7f988156cd28466dbfec93e",
          "url": "https://github.com/unicode-org/icu/commit/bca85d4641978596cbefb0269ebd7f9834345d67"
        },
        "date": 1677897503692,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 39.83473918500361,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pedberg@unicode.org",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "committer": {
            "email": "42151464+pedberg-icu@users.noreply.github.com",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "distinct": true,
          "id": "3748ef8f8adca873fbd2081f0d0435020807ce46",
          "message": "ICU-22220 adjust #ifndef U_HIDE_DRAFT_API for virtual methods, fix conditionalized enums",
          "timestamp": "2023-03-06T11:01:50-08:00",
          "tree_id": "7334f7b2571c2ffbf95ae22ab0372614169df9f2",
          "url": "https://github.com/unicode-org/icu/commit/3748ef8f8adca873fbd2081f0d0435020807ce46"
        },
        "date": 1678129490855,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 37.36480296286059,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ccornelius@google.com",
            "name": "Craig Cornelius",
            "username": "sven-oly"
          },
          "committer": {
            "email": "cwcornelius@gmail.com",
            "name": "Craig Cornelius",
            "username": "sven-oly"
          },
          "distinct": true,
          "id": "2b714406eb5f163620a76b0f298b74b00c6be458",
          "message": "ICU-22220 Add a step to instructions and fix an obsolete path.\n\nSee #2348",
          "timestamp": "2023-03-06T19:29:02Z",
          "tree_id": "ee6bd428c9c3bde8260557987e0fd0382a21a7af",
          "url": "https://github.com/unicode-org/icu/commit/2b714406eb5f163620a76b0f298b74b00c6be458"
        },
        "date": 1678131207020,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 31.936789094794076,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "manishsmail@gmail.com",
            "name": "Manish Goregaokar",
            "username": "Manishearth"
          },
          "committer": {
            "email": "elango@unicode.org",
            "name": "Elango Cheran",
            "username": "echeran"
          },
          "distinct": true,
          "id": "be6428690dc9b2e0e4a622691eb4c1101647cd2d",
          "message": "ICU-22270 expose uproperty values in icuexportdata",
          "timestamp": "2023-03-06T20:13:55-05:00",
          "tree_id": "d41ef0ddbefd8d1546bc80da0c12dce51dfdbe08",
          "url": "https://github.com/unicode-org/icu/commit/be6428690dc9b2e0e4a622691eb4c1101647cd2d"
        },
        "date": 1678151899936,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 37.954219399467824,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "manishsmail@gmail.com",
            "name": "Manish Goregaokar",
            "username": "Manishearth"
          },
          "committer": {
            "email": "elango@unicode.org",
            "name": "Elango Cheran",
            "username": "echeran"
          },
          "distinct": true,
          "id": "6046af063ddd7ed9cbab601a3c6304ad9070545d",
          "message": "ICU-22270 expose uproperty values in icuexportdata",
          "timestamp": "2023-03-06T20:14:27-05:00",
          "tree_id": "2c4fe8d1d04e3e6a00de50dadaee671e3593097c",
          "url": "https://github.com/unicode-org/icu/commit/6046af063ddd7ed9cbab601a3c6304ad9070545d"
        },
        "date": 1678152695495,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 45.64011378827909,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "yumaoka@users.noreply.github.com",
            "name": "Yoshito Umaoka",
            "username": "yumaoka"
          },
          "committer": {
            "email": "yumaoka@users.noreply.github.com",
            "name": "Yoshito Umaoka",
            "username": "yumaoka"
          },
          "distinct": true,
          "id": "9e16711b54d055cad10f7dc59f19d124ca6618be",
          "message": "ICU-22220 BRS73 Updating the Unicode data files and software license",
          "timestamp": "2023-03-06T22:31:39-05:00",
          "tree_id": "b445950bcb8afaecd9204e706cc9e6440566de97",
          "url": "https://github.com/unicode-org/icu/commit/9e16711b54d055cad10f7dc59f19d124ca6618be"
        },
        "date": 1678160457588,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 38.83147039009362,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "richard_gillam@apple.com",
            "name": "Rich Gillam",
            "username": "richgillam"
          },
          "committer": {
            "email": "62772518+richgillam@users.noreply.github.com",
            "name": "Rich Gillam",
            "username": "richgillam"
          },
          "distinct": true,
          "id": "e5854c84a11036d2dcc8591156d7b7adf9e77c1e",
          "message": "ICU-22265 Update PersonNameFormatter and its associated classes so that the behavior matches that of the\nPersonNameFormatter in CLDR.  Added a new test that tests the ICU PersonNameFormatter against a comprehensive\nset of test results from the CLDR PersonNameFormatter.",
          "timestamp": "2023-03-08T13:56:17-08:00",
          "tree_id": "a9eeeade485dd6d785922569acf3675497ebcf57",
          "url": "https://github.com/unicode-org/icu/commit/e5854c84a11036d2dcc8591156d7b7adf9e77c1e"
        },
        "date": 1678312873411,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 38.31716567796281,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "committer": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "distinct": true,
          "id": "57e4b0cd17f2fd29dcb8e98628c8d4f7395c9c77",
          "message": "ICU-22299 deprecate redundant UnicodeSet.CASE",
          "timestamp": "2023-03-09T08:40:08-08:00",
          "tree_id": "87751c12e28dd20e1772e736e4f28db8ba2bd105",
          "url": "https://github.com/unicode-org/icu/commit/57e4b0cd17f2fd29dcb8e98628c8d4f7395c9c77"
        },
        "date": 1678380297268,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 33.002555191631586,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mnita@google.com",
            "name": "Mihai Nita",
            "username": "mihnita"
          },
          "committer": {
            "email": "nmihai_2000@yahoo.com",
            "name": "Mihai Nita",
            "username": "mihnita"
          },
          "distinct": true,
          "id": "a36619060c382d759838417a6488f537ff964878",
          "message": "ICU-22279 Fix invalid new Locale in testing",
          "timestamp": "2023-03-09T22:19:44-08:00",
          "tree_id": "548869efed4bd060cc3696eb4fe729bdc050e335",
          "url": "https://github.com/unicode-org/icu/commit/a36619060c382d759838417a6488f537ff964878"
        },
        "date": 1678429330635,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 45.14046969289624,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shenlebantongying@gmail.com",
            "name": "shenleban tongying",
            "username": "shenlebantongying"
          },
          "committer": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "distinct": true,
          "id": "ed011f2e3158c1205ec4517ead92a880fdc80f45",
          "message": "ICU-22247 remove historical mention of old versions",
          "timestamp": "2023-03-13T14:05:21-07:00",
          "tree_id": "32c116556e9c368e31eb75cb804ebc9c74642a1c",
          "url": "https://github.com/unicode-org/icu/commit/ed011f2e3158c1205ec4517ead92a880fdc80f45"
        },
        "date": 1678741705709,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 45.08446473207602,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "elango@unicode.org",
            "name": "Elango Cheran",
            "username": "echeran"
          },
          "committer": {
            "email": "elango@unicode.org",
            "name": "Elango Cheran",
            "username": "echeran"
          },
          "distinct": true,
          "id": "64b4cde6636b726c91db2a46103247b1129e2ea5",
          "message": "ICU-22256 Add helper code to dump Bidi_Mirroring_Glyph data to file\n\nCo-authored-by: Markus Scherer <markus.icu@gmail.com>",
          "timestamp": "2023-03-13T18:59:19-04:00",
          "tree_id": "a6f1843e9e2ea2231abebdad1ccaf98577cb86e7",
          "url": "https://github.com/unicode-org/icu/commit/64b4cde6636b726c91db2a46103247b1129e2ea5"
        },
        "date": 1678748597460,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 32.106137369750755,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shane@unicode.org",
            "name": "Shane F. Carr",
            "username": "sffc"
          },
          "committer": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "distinct": true,
          "id": "2a9d0ccdb2e65c05eb828c62a751efbd39761b39",
          "message": "ICU-22283 Add additional ERoundingMode variants\n\nSee #2329",
          "timestamp": "2023-03-14T00:51:42-07:00",
          "tree_id": "69a18752b20204c428f7db6a2e67879ba13e8b14",
          "url": "https://github.com/unicode-org/icu/commit/2a9d0ccdb2e65c05eb828c62a751efbd39761b39"
        },
        "date": 1678780884260,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 44.691629856035554,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pedberg@unicode.org",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "committer": {
            "email": "42151464+pedberg-icu@users.noreply.github.com",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "distinct": true,
          "id": "2c20fa45fb379a7ac5cdfb498f10294494f23d94",
          "message": "ICU-22220 CLDR release-43-beta0 to ICU main",
          "timestamp": "2023-03-14T09:53:14-07:00",
          "tree_id": "81e123266d4d55b021612b512339c11739220a69",
          "url": "https://github.com/unicode-org/icu/commit/2c20fa45fb379a7ac5cdfb498f10294494f23d94"
        },
        "date": 1678813104933,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 32.369180465943884,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nmihai_2000@yahoo.com",
            "name": "Mihai Nita",
            "username": "mihnita"
          },
          "committer": {
            "email": "nmihai_2000@yahoo.com",
            "name": "Mihai Nita",
            "username": "mihnita"
          },
          "distinct": true,
          "id": "b399c67d5af748662275e1fa1d26d123caad3ed0",
          "message": "ICU-12811 Fix cldrUtils (add ElapsedTime and UnicodeMap*)",
          "timestamp": "2023-03-14T12:39:13-07:00",
          "tree_id": "433d13691d197b9a0d9440d74d9dad8a2c2641f4",
          "url": "https://github.com/unicode-org/icu/commit/b399c67d5af748662275e1fa1d26d123caad3ed0"
        },
        "date": 1678823021319,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 34.24837281287595,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nmihai_2000@yahoo.com",
            "name": "Mihai Nita",
            "username": "mihnita"
          },
          "committer": {
            "email": "nmihai_2000@yahoo.com",
            "name": "Mihai Nita",
            "username": "mihnita"
          },
          "distinct": true,
          "id": "97510de5d428edc7f866fac9bb11d73d91ec714d",
          "message": "ICU-22280 Replace markdown in javadoc with proper tags",
          "timestamp": "2023-03-14T12:48:58-07:00",
          "tree_id": "137506b34a093e7f6d85cfe618c9dd76e0d6f49f",
          "url": "https://github.com/unicode-org/icu/commit/97510de5d428edc7f866fac9bb11d73d91ec714d"
        },
        "date": 1678824388126,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 39.53828761967648,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "committer": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "distinct": true,
          "id": "2d9fa3fa9971c095b92f375dd0fe0a398d1dc6a8",
          "message": "ICU-22285 omit the gb2312 & big5han collation tailorings by default",
          "timestamp": "2023-03-14T15:20:03-07:00",
          "tree_id": "557e489f98737e764ca5acf98fca003cb63d88a0",
          "url": "https://github.com/unicode-org/icu/commit/2d9fa3fa9971c095b92f375dd0fe0a398d1dc6a8"
        },
        "date": 1678832911184,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 48.78855549462106,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ayzhao@google.com",
            "name": "Alan Zhao",
            "username": "alanzhao1"
          },
          "committer": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "distinct": true,
          "id": "7ed7d42f58bc6ba24324e6be14db3e6a60e46355",
          "message": "ICU-22298 Include <utility> in measunit.h\n\nmeasunit.h uses std::pair, std::make_pair, and std::move, all of which\nare declared in the <utility> header. This still compiles because many\nimplementations of the C++ standard library have <utility> as a\ntransitive dependency of other C++ standard library headers; however,\nthese transitive includes are not guaranteed to exist and will not exist\nin some contexts (e.g. building against LLVM's libc++ with -fmodules).",
          "timestamp": "2023-03-14T17:08:53-07:00",
          "tree_id": "9b9b458f20bb13b1646353dffe3fb46ed298f6aa",
          "url": "https://github.com/unicode-org/icu/commit/7ed7d42f58bc6ba24324e6be14db3e6a60e46355"
        },
        "date": 1678839547312,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 41.4630634831145,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bugagashenkj@gmail.com",
            "name": "Ivan Tymoshenko",
            "username": "ivan-tymoshenko"
          },
          "committer": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "distinct": true,
          "id": "2c46fb7f610fef5e4d0a32881d8dc46d08265123",
          "message": "ICU-22286 Speed up substring equality comparison",
          "timestamp": "2023-03-15T11:10:48-07:00",
          "tree_id": "71649bae687245b52542f0a90999bb2fd9aaf461",
          "url": "https://github.com/unicode-org/icu/commit/2c46fb7f610fef5e4d0a32881d8dc46d08265123"
        },
        "date": 1678904065027,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 39.94331313196212,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "amy@amyspark.me",
            "name": "L. E. Segovia",
            "username": "amyspark"
          },
          "committer": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "distinct": true,
          "id": "167f8855a2dfbe854a86f25f1dca80d295d3dbb7",
          "message": "ICU-22210 toolutil: Add NASM generator",
          "timestamp": "2023-03-15T16:42:09-07:00",
          "tree_id": "17def8c6c864c187c6b7cd1155adea94ed05a70e",
          "url": "https://github.com/unicode-org/icu/commit/167f8855a2dfbe854a86f25f1dca80d295d3dbb7"
        },
        "date": 1678923990933,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 33.645612504849,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "amy@amyspark.me",
            "name": "L. E. Segovia",
            "username": "amyspark"
          },
          "committer": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "distinct": true,
          "id": "62375dca3aad27e394312af3e8b785336b8a8f94",
          "message": "ICU-22205 toolutil: Fix MASM generation for x86-64 and ARM64",
          "timestamp": "2023-03-15T16:48:54-07:00",
          "tree_id": "a20423699df056bc33174102d5aa6362f6c9eeaf",
          "url": "https://github.com/unicode-org/icu/commit/62375dca3aad27e394312af3e8b785336b8a8f94"
        },
        "date": 1678925151969,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 32.129499739899025,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "elango@unicode.org",
            "name": "Elango Cheran",
            "username": "echeran"
          },
          "committer": {
            "email": "elango@unicode.org",
            "name": "Elango Cheran",
            "username": "echeran"
          },
          "distinct": true,
          "id": "06506023c5dc61886cf97c0f7aa2a8658a479d7b",
          "message": "ICU-22194 Add CI job to generate Github Pages using Github Actions",
          "timestamp": "2023-03-15T20:00:06-04:00",
          "tree_id": "04340890576db0a0a6b45aad1e4ed4063be43e3e",
          "url": "https://github.com/unicode-org/icu/commit/06506023c5dc61886cf97c0f7aa2a8658a479d7b"
        },
        "date": 1678926376937,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 33.76724121475729,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pedberg@unicode.org",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "committer": {
            "email": "42151464+pedberg-icu@users.noreply.github.com",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "distinct": true,
          "id": "3db74e8ae7375bb48361ea625bb0f82c465d35d3",
          "message": "ICU-22220 CLDR release-43-beta2 to ICU main",
          "timestamp": "2023-03-15T20:52:34-07:00",
          "tree_id": "79487b3791c8b00b19164aaded6453b464d6bfdd",
          "url": "https://github.com/unicode-org/icu/commit/3db74e8ae7375bb48361ea625bb0f82c465d35d3"
        },
        "date": 1678938957246,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 32.206151424681565,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ccornelius@google.com",
            "name": "Craig Cornelius",
            "username": "sven-oly"
          },
          "committer": {
            "email": "cwcornelius@gmail.com",
            "name": "Craig Cornelius",
            "username": "sven-oly"
          },
          "distinct": true,
          "id": "3b030512ff836522d0a294b6206dcf8b50eab725",
          "message": "ICU-22220 Update ICU4J samples instructions\n\nSee #2360",
          "timestamp": "2023-03-16T08:39:14-07:00",
          "tree_id": "a6d70cb26d691722b57927afbd13c81dcabc3c6f",
          "url": "https://github.com/unicode-org/icu/commit/3b030512ff836522d0a294b6206dcf8b50eab725"
        },
        "date": 1678981706271,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 32.329225008668935,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "committer": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "distinct": true,
          "id": "0684f8644ca37153e8dbb25940d82bc14078e712",
          "message": "ICU-22285 how to include gb2312 & big5han collation tailorings",
          "timestamp": "2023-03-16T14:14:38-07:00",
          "tree_id": "4ae2a89f2eeb1a36b8a41a34f22fba0f6a79668f",
          "url": "https://github.com/unicode-org/icu/commit/0684f8644ca37153e8dbb25940d82bc14078e712"
        },
        "date": 1679001427315,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 37.76611317837792,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pedberg@unicode.org",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "committer": {
            "email": "42151464+pedberg-icu@users.noreply.github.com",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "distinct": true,
          "id": "d73b4417e196825f87e7440a1f74e318a8ca19c2",
          "message": "ICU-22186 Add unit tests for Croatia currency change from HRK to EUR",
          "timestamp": "2023-03-16T14:49:42-07:00",
          "tree_id": "ada4dccda4089860f4438a90bd5b89441cfd17d9",
          "url": "https://github.com/unicode-org/icu/commit/d73b4417e196825f87e7440a1f74e318a8ca19c2"
        },
        "date": 1679003649923,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 48.837586820395686,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pedberg@unicode.org",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "committer": {
            "email": "42151464+pedberg-icu@users.noreply.github.com",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "distinct": true,
          "id": "cdeae44c6bf33fe147c97161695f70778ab4c380",
          "message": "ICU-10297 Add tests showing that display name bug in ticket no longer exists",
          "timestamp": "2023-03-16T15:31:12-07:00",
          "tree_id": "2014f172234f61a4906ae661652ac44fa65fedae",
          "url": "https://github.com/unicode-org/icu/commit/cdeae44c6bf33fe147c97161695f70778ab4c380"
        },
        "date": 1679006293177,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 31.915485494196197,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ftang@chromium.org",
            "name": "Frank Tang",
            "username": "FrankYFTang"
          },
          "committer": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "distinct": true,
          "id": "3d31e7263322588a9d004042305577c8171d9629",
          "message": "ICU-22307 Fix crash inside TimeZone\n\nReturn while the status fail without checking and cause crash",
          "timestamp": "2023-03-16T17:05:02-07:00",
          "tree_id": "95d6f04c31f8ef34a527bfade5adc575f082df94",
          "url": "https://github.com/unicode-org/icu/commit/3d31e7263322588a9d004042305577c8171d9629"
        },
        "date": 1679011694297,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 42.33439559308669,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "103115900+rp9-next@users.noreply.github.com",
            "name": "Rahul Pandey",
            "username": "rp9-next"
          },
          "committer": {
            "email": "103115900+rp9-next@users.noreply.github.com",
            "name": "Rahul Pandey",
            "username": "rp9-next"
          },
          "distinct": true,
          "id": "7a670998b0cbb217c30fae74b69c0b001cb6071e",
          "message": "ICU-22220 BRS73RC Update version number and regenerate configure v73.1\n\nSee #2375",
          "timestamp": "2023-03-17T09:48:06+05:30",
          "tree_id": "c6bde867bb9d17171e8602b7f9b351af157e2ef9",
          "url": "https://github.com/unicode-org/icu/commit/7a670998b0cbb217c30fae74b69c0b001cb6071e"
        },
        "date": 1679026840717,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 38.16369663996912,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "committer": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "distinct": true,
          "id": "34eaffc66899da1ff5c4773c898bc4e27a8f8007",
          "message": "ICU-22308 stubdata empty pointerTOC alignas(16)",
          "timestamp": "2023-03-17T08:11:26-07:00",
          "tree_id": "92bf62de979f4b370217ee22e0e777ea7d18f29a",
          "url": "https://github.com/unicode-org/icu/commit/34eaffc66899da1ff5c4773c898bc4e27a8f8007"
        },
        "date": 1679066208258,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 34.08065767932091,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pedberg@unicode.org",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "committer": {
            "email": "42151464+pedberg-icu@users.noreply.github.com",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "distinct": true,
          "id": "dd1d4de29b3083a548d1b7a9b2f6f8cb86cca87a",
          "message": "ICU-21653 utext_current32 should handle access callback that changes chunk size",
          "timestamp": "2023-03-17T08:45:00-07:00",
          "tree_id": "ad91c9531eb9ab0eef75282b1ab1b4cd86e72c24",
          "url": "https://github.com/unicode-org/icu/commit/dd1d4de29b3083a548d1b7a9b2f6f8cb86cca87a"
        },
        "date": 1679068399460,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 32.615137906768446,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "committer": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "distinct": true,
          "id": "74641a344e231c01570ed99025ef4319a2186be6",
          "message": "ICU-12725 adjust API docs for new impl != JDK",
          "timestamp": "2023-03-17T08:48:42-07:00",
          "tree_id": "be6d51e4869ff2f00298db834c887868e9b47b07",
          "url": "https://github.com/unicode-org/icu/commit/74641a344e231c01570ed99025ef4319a2186be6"
        },
        "date": 1679069168413,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 48.300056053065354,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pedberg@unicode.org",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "committer": {
            "email": "42151464+pedberg-icu@users.noreply.github.com",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "distinct": true,
          "id": "70ed5b4702fc4e1526478260a3674855df5ea134",
          "message": "ICU-21940 DateFormatSymbols::assignArray should handle null srcArray",
          "timestamp": "2023-03-17T08:52:19-07:00",
          "tree_id": "d98fea6e0f7f9944a79314bd513a7a042af1fc18",
          "url": "https://github.com/unicode-org/icu/commit/70ed5b4702fc4e1526478260a3674855df5ea134"
        },
        "date": 1679070232380,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 37.683154432538366,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pandeyrah@microsoft.com",
            "name": "Rahul Pandey",
            "username": "rp9-next"
          },
          "committer": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "distinct": true,
          "id": "3076874c3231047f55c561e1dd797137e764efea",
          "message": "ICU-22301 Add azure CI tests to be run post merge\n\nSee #2363",
          "timestamp": "2023-03-17T08:57:01-07:00",
          "tree_id": "e08301f68d681be212cb45ee1fdc186741b2cdcc",
          "url": "https://github.com/unicode-org/icu/commit/3076874c3231047f55c561e1dd797137e764efea"
        },
        "date": 1679070976347,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 37.39852158562143,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kirill@korins.ky",
            "name": "Kirill A. Korinsky",
            "username": "catap"
          },
          "committer": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "distinct": true,
          "id": "f2459c16dccd26e0cc07580e43e06e852dfc3104",
          "message": "ICU-22211 macOS PPC should use `.p2align 4` instead `.balign 16`\n\nAn attempt to build ICU on old macOS with PowerPC leads to an issue:\n```\n./out/tmp/icudt72b_dat.S:7:Unknown pseudo-op: .balign\n./out/tmp/icudt72b_dat.S:7:Rest of line ignored. 1st junk character valued 49 (1).\n```\n\nWhy? Because `as` is too old.\n\nAnyway, switch back to `.p2align` fix a build and allows to pass all tests.\n\nSee: https://trac.macports.org/ticket/66258\n\nSigned-off-by: Kirill A. Korinsky <kirill@korins.ky>",
          "timestamp": "2023-03-17T09:10:21-07:00",
          "tree_id": "f494b28370b81547138598de04ce1cf627d5f5a1",
          "url": "https://github.com/unicode-org/icu/commit/f2459c16dccd26e0cc07580e43e06e852dfc3104"
        },
        "date": 1679071881782,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 39.533570849986745,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ccornelius@google.com",
            "name": "Craig",
            "username": "sven-oly"
          },
          "committer": {
            "email": "cwcornelius@gmail.com",
            "name": "Craig Cornelius",
            "username": "sven-oly"
          },
          "distinct": true,
          "id": "21581f4ec59b52338065866960dc2b155a428700",
          "message": "ICU-22220 ICU 73 API Changes 4J & 4C",
          "timestamp": "2023-03-17T11:56:41-07:00",
          "tree_id": "a12cd998a82a75cd53d97a64ec7421c595ff05d8",
          "url": "https://github.com/unicode-org/icu/commit/21581f4ec59b52338065866960dc2b155a428700"
        },
        "date": 1679079674667,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 32.697745382794146,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ccornelius@google.com",
            "name": "Craig",
            "username": "sven-oly"
          },
          "committer": {
            "email": "cwcornelius@gmail.com",
            "name": "Craig Cornelius",
            "username": "sven-oly"
          },
          "distinct": true,
          "id": "a518312ce2b6bf9e96451b73d6e890cf07409872",
          "message": "ICU-22220 Add usimplenumberformatter and SimpleNumberFormatter to docmain.h",
          "timestamp": "2023-03-17T21:03:29-07:00",
          "tree_id": "e53af4b72ac1a4c23d81729cd4ae6a44d5bf5fa8",
          "url": "https://github.com/unicode-org/icu/commit/a518312ce2b6bf9e96451b73d6e890cf07409872"
        },
        "date": 1679112462056,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 36.58322873819814,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pedberg@unicode.org",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "committer": {
            "email": "42151464+pedberg-icu@users.noreply.github.com",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "distinct": true,
          "id": "e612a4f2ab3773cc120f32ebe71c62362b9c78b7",
          "message": "ICU-22220 BRS 73rc update urename.h pass 2",
          "timestamp": "2023-03-20T13:32:31-07:00",
          "tree_id": "5482e3c5d37cfcc087d81d1617fca2117d5ad0d2",
          "url": "https://github.com/unicode-org/icu/commit/e612a4f2ab3773cc120f32ebe71c62362b9c78b7"
        },
        "date": 1679344578259,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 39.930320453136446,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shane@unicode.org",
            "name": "Shane F. Carr",
            "username": "sffc"
          },
          "committer": {
            "email": "shane@unicode.org",
            "name": "Shane F. Carr",
            "username": "sffc"
          },
          "distinct": true,
          "id": "fa5a6c15191dea895837ccfb2d658d315e23e6e4",
          "message": "ICU-22288 Remove unnecessary assertion in ICU4J NumberRangeFormatter\n\nSee #2377",
          "timestamp": "2023-03-21T12:34:34-05:00",
          "tree_id": "f19c73a6aeacf6481bd6415f005559bcc89e4e08",
          "url": "https://github.com/unicode-org/icu/commit/fa5a6c15191dea895837ccfb2d658d315e23e6e4"
        },
        "date": 1679420300801,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 32.60254900731875,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "yumaoka@users.noreply.github.com",
            "name": "Yoshito Umaoka",
            "username": "yumaoka"
          },
          "committer": {
            "email": "yumaoka@users.noreply.github.com",
            "name": "Yoshito Umaoka",
            "username": "yumaoka"
          },
          "distinct": true,
          "id": "49e8b992962c048a31bc542d915a9daa6f4b3dc5",
          "message": "ICU-22220 BRS73 Clean up Java import statements",
          "timestamp": "2023-03-21T15:35:52-04:00",
          "tree_id": "af2d0660599b43060cbd604b64fa84e6e65323bf",
          "url": "https://github.com/unicode-org/icu/commit/49e8b992962c048a31bc542d915a9daa6f4b3dc5"
        },
        "date": 1679427597857,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 32.726335176807666,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rp9.next@gmail.com",
            "name": "Rahul Pandey",
            "username": "rp9-next"
          },
          "committer": {
            "email": "103115900+rp9-next@users.noreply.github.com",
            "name": "Rahul Pandey",
            "username": "rp9-next"
          },
          "distinct": true,
          "id": "68f5ef835bd69221bf1c23ba65228d0cae7e5647",
          "message": "ICU-22220 BRS73RC Regenerate configure files and fix broken links in comments",
          "timestamp": "2023-03-22T12:38:41+05:30",
          "tree_id": "4606a4c58c5a129161edf4bf043d632e809c413e",
          "url": "https://github.com/unicode-org/icu/commit/68f5ef835bd69221bf1c23ba65228d0cae7e5647"
        },
        "date": 1679469131044,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 41.039111881718455,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "elango@unicode.org",
            "name": "Elango Cheran",
            "username": "echeran"
          },
          "committer": {
            "email": "elango@unicode.org",
            "name": "Elango Cheran",
            "username": "echeran"
          },
          "distinct": true,
          "id": "1d507acacd2957a605cc28b5a48b52fab6ec4c4a",
          "message": "ICU-22256 Add helper code to dump Bidi_Mirroring_Glyph data to file\n\nSee #2391",
          "timestamp": "2023-03-22T16:33:17-04:00",
          "tree_id": "c7d00ce72b3005fc91485405c876d3b2711d247f",
          "url": "https://github.com/unicode-org/icu/commit/1d507acacd2957a605cc28b5a48b52fab6ec4c4a"
        },
        "date": 1679517448970,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 31.72024175285922,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "yumaoka@users.noreply.github.com",
            "name": "Yoshito Umaoka",
            "username": "yumaoka"
          },
          "committer": {
            "email": "yumaoka@users.noreply.github.com",
            "name": "Yoshito Umaoka",
            "username": "yumaoka"
          },
          "distinct": true,
          "id": "6ddf63ed926c7d934ffa01a1c841cec300207aae",
          "message": "ICU-22220 BRS73 Fix API doc tagging problems",
          "timestamp": "2023-03-22T19:41:42-04:00",
          "tree_id": "3f60d7c82f1405f739d1598380417a96a6f3b5ef",
          "url": "https://github.com/unicode-org/icu/commit/6ddf63ed926c7d934ffa01a1c841cec300207aae"
        },
        "date": 1679529055355,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 42.880756168423744,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "elango@unicode.org",
            "name": "Elango Cheran",
            "username": "echeran"
          },
          "committer": {
            "email": "elango@unicode.org",
            "name": "Elango Cheran",
            "username": "echeran"
          },
          "distinct": true,
          "id": "bfa5f4e6ae177860d867af047d759a88076d7c38",
          "message": "ICU-22270 Fix hex number formatting in icuexportdata",
          "timestamp": "2023-03-22T20:02:57-04:00",
          "tree_id": "1871a864c2c92520f92724f78601a4cf4c2de6ad",
          "url": "https://github.com/unicode-org/icu/commit/bfa5f4e6ae177860d867af047d759a88076d7c38"
        },
        "date": 1679530737999,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 32.12527411023384,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "elango@unicode.org",
            "name": "Elango Cheran",
            "username": "echeran"
          },
          "committer": {
            "email": "elango@unicode.org",
            "name": "Elango Cheran",
            "username": "echeran"
          },
          "distinct": true,
          "id": "ac596798e808b971edad48c78d9539459dd8e9d2",
          "message": "ICU-22270 Fix hex number formatting in icuexportdata",
          "timestamp": "2023-03-22T20:03:03-04:00",
          "tree_id": "a48d167828547b3d2018080f8b4cf985b123ff8b",
          "url": "https://github.com/unicode-org/icu/commit/ac596798e808b971edad48c78d9539459dd8e9d2"
        },
        "date": 1679531236672,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 31.910562871512898,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "elango@unicode.org",
            "name": "Elango Cheran",
            "username": "echeran"
          },
          "committer": {
            "email": "elango@unicode.org",
            "name": "Elango Cheran",
            "username": "echeran"
          },
          "distinct": true,
          "id": "4a30076686bfc7e8f08dc9e9081ecc0dacb4752d",
          "message": "ICU-22220 BRS 73rc ICU4J API signature data file",
          "timestamp": "2023-03-23T08:45:26-07:00",
          "tree_id": "a8609615ebcf9d175f035d3394598a72696338bf",
          "url": "https://github.com/unicode-org/icu/commit/4a30076686bfc7e8f08dc9e9081ecc0dacb4752d"
        },
        "date": 1679586679494,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 34.578803802726526,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "elango@unicode.org",
            "name": "Elango Cheran",
            "username": "echeran"
          },
          "committer": {
            "email": "elango@unicode.org",
            "name": "Elango Cheran",
            "username": "echeran"
          },
          "distinct": true,
          "id": "cb65f7573978edecd8a598ab4137327ed7000844",
          "message": "ICU-22220 BRS 73rc ICU4J Serialization test data for ICU 73.1",
          "timestamp": "2023-03-23T08:45:38-07:00",
          "tree_id": "a44935926111d32d475f7b1f25e0f34eef09aa7c",
          "url": "https://github.com/unicode-org/icu/commit/cb65f7573978edecd8a598ab4137327ed7000844"
        },
        "date": 1679587324126,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 32.36902063117727,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srl295@gmail.com",
            "name": "Steven R. Loomis",
            "username": "srl295"
          },
          "committer": {
            "email": "srl295@gmail.com",
            "name": "Steven R. Loomis",
            "username": "srl295"
          },
          "distinct": true,
          "id": "4b5a6edc9514543436d0c5b39cbac37fc802957c",
          "message": "ICU-21755 commit-checker: update Tip\n\n- improve recommendation on no-commit-found case for ICU and CLDR\n- for CLDR-15423",
          "timestamp": "2023-03-23T11:16:25-05:00",
          "tree_id": "7933e0290d78ef64241338ffa547f60ffb83c55c",
          "url": "https://github.com/unicode-org/icu/commit/4b5a6edc9514543436d0c5b39cbac37fc802957c"
        },
        "date": 1679589170579,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 38.151357353359415,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "y.umaoka@gmail.com",
            "name": "yumaoka",
            "username": "yumaoka"
          },
          "committer": {
            "email": "yumaoka@users.noreply.github.com",
            "name": "Yoshito Umaoka",
            "username": "yumaoka"
          },
          "distinct": true,
          "id": "b31579920e11fe42eca67ccebe58d9dfd33edd80",
          "message": "ICU-22327 Update tzdata to 2023a",
          "timestamp": "2023-03-23T13:56:40-04:00",
          "tree_id": "c505f625913b6a0f0e88d34bd308788dfe5c2ac8",
          "url": "https://github.com/unicode-org/icu/commit/b31579920e11fe42eca67ccebe58d9dfd33edd80"
        },
        "date": 1679594424297,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 38.14860473392882,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "y.umaoka@gmail.com",
            "name": "yumaoka",
            "username": "yumaoka"
          },
          "committer": {
            "email": "yumaoka@users.noreply.github.com",
            "name": "Yoshito Umaoka",
            "username": "yumaoka"
          },
          "distinct": true,
          "id": "b31579920e11fe42eca67ccebe58d9dfd33edd80",
          "message": "ICU-22327 Update tzdata to 2023a",
          "timestamp": "2023-03-23T13:56:40-04:00",
          "tree_id": "c505f625913b6a0f0e88d34bd308788dfe5c2ac8",
          "url": "https://github.com/unicode-org/icu/commit/b31579920e11fe42eca67ccebe58d9dfd33edd80"
        },
        "date": 1679597777904,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 32.75765917824939,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "uioptt24@gmail.com",
            "name": "Ho Cheung",
            "username": "gz83"
          },
          "committer": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "distinct": true,
          "id": "84e47620692be90950d090f2f4722494b020ad96",
          "message": "ICU-22295 Remove deprecated RBBI LBCMNoChain option\n\nICU-22295 Remove deprecated RBBI LBCMNoChain option\n\nICU-22295 Remove deprecated RBBI LBCMNoChain option",
          "timestamp": "2023-03-24T12:59:44-07:00",
          "tree_id": "0f7695aef1a4eea2d432cb5fb46151e81b51d3e4",
          "url": "https://github.com/unicode-org/icu/commit/84e47620692be90950d090f2f4722494b020ad96"
        },
        "date": 1679688272030,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 49.410884222358845,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "y.umaoka@gmail.com",
            "name": "yumaoka",
            "username": "yumaoka"
          },
          "committer": {
            "email": "yumaoka@users.noreply.github.com",
            "name": "Yoshito Umaoka",
            "username": "yumaoka"
          },
          "distinct": true,
          "id": "a6e9f518590f97dd77ab51e794c7ba9955c679a0",
          "message": "ICU-22334 Update ICU tzdata to 2023b for ICU 73.1 release",
          "timestamp": "2023-03-24T16:23:50-04:00",
          "tree_id": "471e078e91f90ea52ff0487049742a6d014a6468",
          "url": "https://github.com/unicode-org/icu/commit/a6e9f518590f97dd77ab51e794c7ba9955c679a0"
        },
        "date": 1679690151753,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 31.624067869447362,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "elango@unicode.org",
            "name": "Elango Cheran",
            "username": "echeran"
          },
          "committer": {
            "email": "elango@unicode.org",
            "name": "Elango Cheran",
            "username": "echeran"
          },
          "distinct": true,
          "id": "3867acf1099428fdc394bcf97755863a9d715c13",
          "message": "ICU-22330 build and test ICU4J with Java 17",
          "timestamp": "2023-03-24T14:00:02-07:00",
          "tree_id": "1702b1a40e5a0c6400655ab04a0d7a52301861f4",
          "url": "https://github.com/unicode-org/icu/commit/3867acf1099428fdc394bcf97755863a9d715c13"
        },
        "date": 1679692028918,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 40.10786030924062,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "committer": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "distinct": true,
          "id": "22bbc7e12e2f6b49410c3665dee2dc202e578213",
          "message": "ICU-22308 add alignas(16) to the data entry point definition\nnot just to its struct declaration.",
          "timestamp": "2023-03-28T14:20:21-07:00",
          "tree_id": "9c0257311f94ca8f15a1d602ea60f289d1311d88",
          "url": "https://github.com/unicode-org/icu/commit/22bbc7e12e2f6b49410c3665dee2dc202e578213"
        },
        "date": 1680038727879,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 48.57226796996489,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ccornelius@google.com",
            "name": "Craig Cornelius",
            "username": "sven-oly"
          },
          "committer": {
            "email": "cwcornelius@gmail.com",
            "name": "Craig Cornelius",
            "username": "sven-oly"
          },
          "distinct": true,
          "id": "dfdf9141e577d61e340442a3ffbfdb80cd935587",
          "message": "ICU-22220 Add step for updating API Doc table\n\nSee #2400",
          "timestamp": "2023-03-29T11:25:39-07:00",
          "tree_id": "ae2677a51d30b6a763421ed7508d7970a25ee93b",
          "url": "https://github.com/unicode-org/icu/commit/dfdf9141e577d61e340442a3ffbfdb80cd935587"
        },
        "date": 1680114592682,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 38.295234376298986,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "y.umaoka@gmail.com",
            "name": "yumaoka",
            "username": "yumaoka"
          },
          "committer": {
            "email": "yumaoka@users.noreply.github.com",
            "name": "Yoshito Umaoka",
            "username": "yumaoka"
          },
          "distinct": true,
          "id": "9f774e2b8c8da3910ba43109e51c940cc8ab1696",
          "message": "ICU-22339 Update ICU tzdata to 2023c for ICU 73.1 release",
          "timestamp": "2023-03-29T17:31:51-04:00",
          "tree_id": "339722d5cd8153d0c6d43b643c34ce8898e83419",
          "url": "https://github.com/unicode-org/icu/commit/9f774e2b8c8da3910ba43109e51c940cc8ab1696"
        },
        "date": 1680125767961,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 40.36207919010411,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "62772518+richgillam@users.noreply.github.com",
            "name": "Rich Gillam",
            "username": "richgillam"
          },
          "committer": {
            "email": "62772518+richgillam@users.noreply.github.com",
            "name": "Rich Gillam",
            "username": "richgillam"
          },
          "distinct": true,
          "id": "c7029502947779b27562ff50a0b9af41fb30efa1",
          "message": "ICU-22340 Fix it so that UNUM_NUMBERING_SYSTEM again always returns a RuleBasedNumberFormat.",
          "timestamp": "2023-03-29T16:31:55-07:00",
          "tree_id": "13d2084dc5d365ca263203d30b7ada8c1ed77c42",
          "url": "https://github.com/unicode-org/icu/commit/c7029502947779b27562ff50a0b9af41fb30efa1"
        },
        "date": 1680133018612,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 41.771073232462534,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "roubert@google.com",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "committer": {
            "email": "fredrik@roubert.name",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "distinct": true,
          "id": "95d905a9e9236dc5b9f44b2e1ba30aafa7c0db62",
          "message": "ICU-22190 Add information about the KEYS file to the Publish document.",
          "timestamp": "2023-03-30T14:06:15+02:00",
          "tree_id": "b4b1f0e81dc5de77468d7d1542fdfb80e8711dec",
          "url": "https://github.com/unicode-org/icu/commit/95d905a9e9236dc5b9f44b2e1ba30aafa7c0db62"
        },
        "date": 1680178229705,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 39.70238660946053,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pedberg@unicode.org",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "committer": {
            "email": "42151464+pedberg-icu@users.noreply.github.com",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "distinct": true,
          "id": "c125cf67f033b74ba56b0787f1cad75fd64d7454",
          "message": "ICU-22337 restore strict parsing length tolerance for non-abutting numeric date fields",
          "timestamp": "2023-03-30T13:52:40-07:00",
          "tree_id": "a8a6b79b603cd36a62522883685776cedb0bf255",
          "url": "https://github.com/unicode-org/icu/commit/c125cf67f033b74ba56b0787f1cad75fd64d7454"
        },
        "date": 1680210027555,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 42.38145110275269,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pedberg@unicode.org",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "committer": {
            "email": "42151464+pedberg-icu@users.noreply.github.com",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "distinct": true,
          "id": "2c584abf7e4143731f90fa317481e2fb0890ffa5",
          "message": "ICU-22221 rebase CLDR 43-beta4 import onto latest maint/maint-73 (new zoneinfo64)",
          "timestamp": "2023-03-30T15:43:22-07:00",
          "tree_id": "f9130260a324ea309babf5eb9478f0eac80ec9d4",
          "url": "https://github.com/unicode-org/icu/commit/2c584abf7e4143731f90fa317481e2fb0890ffa5"
        },
        "date": 1680216415454,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 32.15095903194668,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ftang@chromium.org",
            "name": "Frank Tang",
            "username": "FrankYFTang"
          },
          "committer": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "distinct": true,
          "id": "981c182a7f3583fe262552d5bdea2c9f83f0d5b2",
          "message": "ICU-22297 Speed up valgrind tests\n\nRemove the valgrind build in azure pipeline which is slow (about 50-75\nmins to run) and replace with a set in github action that run 17\ntesting jobs in parallel to speed it up to about 25 mins the longest.",
          "timestamp": "2023-04-05T16:42:32-07:00",
          "tree_id": "935fe91a68cfb34b2f718107e9251a426c260231",
          "url": "https://github.com/unicode-org/icu/commit/981c182a7f3583fe262552d5bdea2c9f83f0d5b2"
        },
        "date": 1680738809337,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 44.27128362753035,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "committer": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "distinct": true,
          "id": "f4687fc25abb660b5c497536a7042c33d4c010c5",
          "message": "ICU-22221 update root collation again from CLDR 43",
          "timestamp": "2023-04-06T08:20:03-07:00",
          "tree_id": "62ce7fb5b0e606c85bb47af599b3021d287d5ba1",
          "url": "https://github.com/unicode-org/icu/commit/f4687fc25abb660b5c497536a7042c33d4c010c5"
        },
        "date": 1680794705211,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 37.6781207662753,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "62772518+richgillam@users.noreply.github.com",
            "name": "Rich Gillam",
            "username": "richgillam"
          },
          "committer": {
            "email": "42151464+pedberg-icu@users.noreply.github.com",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "distinct": true,
          "id": "7d4e57dff198e838c9a7dd844544a4c342859340",
          "message": "ICU-22340 Fix it so that UNUM_NUMBERING_SYSTEM again always returns a RuleBasedNumberFormat.\n\n(cherry picked from commit c7029502947779b27562ff50a0b9af41fb30efa1)",
          "timestamp": "2023-04-07T10:13:51-07:00",
          "tree_id": "e19dba025100a123fa354a7d32e6d7a50af1013f",
          "url": "https://github.com/unicode-org/icu/commit/7d4e57dff198e838c9a7dd844544a4c342859340"
        },
        "date": 1680888233142,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 47.0618420953871,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pedberg@unicode.org",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "committer": {
            "email": "42151464+pedberg-icu@users.noreply.github.com",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "distinct": true,
          "id": "80f94a636efc4dabb8e83a80ae7ec7ab6c8456e7",
          "message": "ICU-22221 CLDR release-43-beta5 to ICU maint/maint-73",
          "timestamp": "2023-04-07T11:15:47-07:00",
          "tree_id": "9ef42ecb6a67d93ef44eccf7a9f6c79d74acccf5",
          "url": "https://github.com/unicode-org/icu/commit/80f94a636efc4dabb8e83a80ae7ec7ab6c8456e7"
        },
        "date": 1680891619629,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 31.53893148595457,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srl295@gmail.com",
            "name": "Steven R. Loomis",
            "username": "srl295"
          },
          "committer": {
            "email": "srl295@gmail.com",
            "name": "Steven R. Loomis",
            "username": "srl295"
          },
          "distinct": true,
          "id": "58c674a72eca18a0883e8e0e9258107ed48e303d",
          "message": "ICU-22309 update CONTRIBUTING.md\n\n- fix broken links\n- move all content into CONTRIBUTING.md from https://icu.unicode.org/processes/contribute\n- no process change\n\nCo-authored-by: Markus Scherer <markus.icu@gmail.com>",
          "timestamp": "2023-04-10T12:23:25-05:00",
          "tree_id": "e9a67f982b256a842c163cedd38dbb2cffc78cac",
          "url": "https://github.com/unicode-org/icu/commit/58c674a72eca18a0883e8e0e9258107ed48e303d"
        },
        "date": 1681147589476,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 32.65853881461765,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "committer": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "distinct": true,
          "id": "0d2a03dbba2f867c1cce2291a4832e1791cd8b5e",
          "message": "ICU-22338 getProperty(Value)Name accepts nameChoice above 1",
          "timestamp": "2023-04-10T17:50:12-07:00",
          "tree_id": "e991e34fa892919dc36ef45f47385ac60504a482",
          "url": "https://github.com/unicode-org/icu/commit/0d2a03dbba2f867c1cce2291a4832e1791cd8b5e"
        },
        "date": 1681174397239,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 32.88785729633397,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rp9.next@gmail.com",
            "name": "Rahul Pandey",
            "username": "rp9-next"
          },
          "committer": {
            "email": "103115900+rp9-next@users.noreply.github.com",
            "name": "Rahul Pandey",
            "username": "rp9-next"
          },
          "distinct": true,
          "id": "69e1d707f872ef861930ddc7d186b3eea9ac2918",
          "message": "ICU-22221 BRS73GA: Update version number to 73.1",
          "timestamp": "2023-04-11T15:46:18+05:30",
          "tree_id": "247bc918ed0fafb7a3d8649fde3a062295a915d4",
          "url": "https://github.com/unicode-org/icu/commit/69e1d707f872ef861930ddc7d186b3eea9ac2918"
        },
        "date": 1681208399659,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 39.898795396827424,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pedberg@unicode.org",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "committer": {
            "email": "42151464+pedberg-icu@users.noreply.github.com",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "distinct": true,
          "id": "5861e1fd52f1d7673eee38bc3c965aa18b336062",
          "message": "ICU-22221 update cldr-icu instructions, and ICU tag for integration",
          "timestamp": "2023-04-11T11:38:40-07:00",
          "tree_id": "132de1bb16b7d3f8fb2631203f0d909ae439be64",
          "url": "https://github.com/unicode-org/icu/commit/5861e1fd52f1d7673eee38bc3c965aa18b336062"
        },
        "date": 1681238884409,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 33.60305523338522,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srl295@gmail.com",
            "name": "Steven R. Loomis",
            "username": "srl295"
          },
          "committer": {
            "email": "srl295@gmail.com",
            "name": "Steven R. Loomis",
            "username": "srl295"
          },
          "distinct": true,
          "id": "312bae866003461bcd4022855ac7ec60546b81f7",
          "message": "ICU-21964 use a single LICENSE file\n\n- make the icu4c and icu4j LICENSE files symlinks\n- fix paths",
          "timestamp": "2023-04-12T14:36:09-05:00",
          "tree_id": "082e0a6a51ed4e15aa2c631bfe0c0510d565ec59",
          "url": "https://github.com/unicode-org/icu/commit/312bae866003461bcd4022855ac7ec60546b81f7"
        },
        "date": 1681328813380,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 48.05248711532245,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ftang@chromium.org",
            "name": "Frank Tang",
            "username": "FrankYFTang"
          },
          "committer": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "distinct": true,
          "id": "cbb25bb186595641bc2ce9dc3f35f23d33fbcf87",
          "message": "ICU-22349 Change to use just -j value in make to \"not limit the number of jobs that can run simultaneously\"\n\nSee #2422",
          "timestamp": "2023-04-12T15:47:06-07:00",
          "tree_id": "68632a76a8468e0e26e808b1cea7ee70b4910407",
          "url": "https://github.com/unicode-org/icu/commit/cbb25bb186595641bc2ce9dc3f35f23d33fbcf87"
        },
        "date": 1681340449546,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 41.534193003738444,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "103115900+rp9-next@users.noreply.github.com",
            "name": "rp9-next",
            "username": "rp9-next"
          },
          "committer": {
            "email": "103115900+rp9-next@users.noreply.github.com",
            "name": "Rahul Pandey",
            "username": "rp9-next"
          },
          "distinct": true,
          "id": "12c5fe04c06961676abc35b4e9ca5d0bdddd45f7",
          "message": "ICU-22351 Update PGP key information for release signing",
          "timestamp": "2023-04-13T08:17:47+05:30",
          "tree_id": "03d5a685a37890828ed2b9d9e53798abaf3334bd",
          "url": "https://github.com/unicode-org/icu/commit/12c5fe04c06961676abc35b4e9ca5d0bdddd45f7"
        },
        "date": 1681354805802,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 40.554248846897174,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ftang@chromium.org",
            "name": "Frank Tang",
            "username": "FrankYFTang"
          },
          "committer": {
            "email": "103115900+rp9-next@users.noreply.github.com",
            "name": "Rahul Pandey",
            "username": "rp9-next"
          },
          "distinct": true,
          "id": "4b515504fdee138bbcb5fcabb6ed7ed18f544135",
          "message": "ICU-22349 Build cygwin with -j  to run multiple cores\n\nSee #2421",
          "timestamp": "2023-04-13T11:48:01+05:30",
          "tree_id": "9249dab7ae36363e3cfaa7b79d6a1dbd91de7986",
          "url": "https://github.com/unicode-org/icu/commit/4b515504fdee138bbcb5fcabb6ed7ed18f544135"
        },
        "date": 1681367298794,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 32.060522856695506,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srl295@gmail.com",
            "name": "Steven R. Loomis",
            "username": "srl295"
          },
          "committer": {
            "email": "srl295@gmail.com",
            "name": "Steven R. Loomis",
            "username": "srl295"
          },
          "distinct": true,
          "id": "1e60df0f8206f136fd614a97b1ec901de94117c4",
          "message": "ICU-22341 commit checker: umbrella, explanations\n\n- support Umbrella ticket type (no commits)\n- explain why commit policy was applied",
          "timestamp": "2023-04-13T12:20:12-05:00",
          "tree_id": "1367d59a75c844a1250fd629b0865c7e4dce8df9",
          "url": "https://github.com/unicode-org/icu/commit/1e60df0f8206f136fd614a97b1ec901de94117c4"
        },
        "date": 1681407064660,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 40.707854948418436,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shane@unicode.org",
            "name": "Shane F. Carr",
            "username": "sffc"
          },
          "committer": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "distinct": true,
          "id": "2a2995951bb2226b998ed8e30d7709e80012cdd5",
          "message": "ICU-20926 Add tests for identity behavior in DateIntervalFormat\n\nSee #2245",
          "timestamp": "2023-04-17T14:57:50-07:00",
          "tree_id": "9549904e7dd0c5637aeb562b041323217deae87b",
          "url": "https://github.com/unicode-org/icu/commit/2a2995951bb2226b998ed8e30d7709e80012cdd5"
        },
        "date": 1681769241238,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 32.7928430601061,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ftang@chromium.org",
            "name": "Frank Tang",
            "username": "FrankYFTang"
          },
          "committer": {
            "email": "103115900+rp9-next@users.noreply.github.com",
            "name": "Rahul Pandey",
            "username": "rp9-next"
          },
          "distinct": true,
          "id": "85fd7389e0fdd89b5a0aafe07429dd2452f1d310",
          "message": "ICU-22349 Speed up pre-merge CI\n\nSee #2420",
          "timestamp": "2023-04-19T08:06:59+05:30",
          "tree_id": "d4d1708e8d9e0574d02ea37967030c10232cea0e",
          "url": "https://github.com/unicode-org/icu/commit/85fd7389e0fdd89b5a0aafe07429dd2452f1d310"
        },
        "date": 1681872070818,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 32.440341590830315,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "y.umaoka@gmail.com",
            "name": "yumaoka",
            "username": "yumaoka"
          },
          "committer": {
            "email": "yumaoka@users.noreply.github.com",
            "name": "Yoshito Umaoka",
            "username": "yumaoka"
          },
          "distinct": true,
          "id": "295f0f2a43e05be92d417090240702cc087c595d",
          "message": "ICU-22333 Exclude EhaustivePersonNameFormatterTest also from releaseJarCheck target.",
          "timestamp": "2023-04-20T11:40:17-04:00",
          "tree_id": "d39cf2de3989e1bd8dc2fbe05e518f9bfcec5876",
          "url": "https://github.com/unicode-org/icu/commit/295f0f2a43e05be92d417090240702cc087c595d"
        },
        "date": 1682006186491,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 41.80669735057547,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "roubert@google.com",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "committer": {
            "email": "fredrik@roubert.name",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "distinct": true,
          "id": "09f4459a77a8dbc12f15e02f6820a994636773b5",
          "message": "ICU-22221 Add the -R flag to less to display ANSI colors.\n\nWithout this flag, any ANSI color escape sequences in the Maven error\nlog will be displayed in their escaped form, which isn't very readable.",
          "timestamp": "2023-04-20T17:57:22+02:00",
          "tree_id": "cd5967983aa370d57e06368ae3ae19d5d4537067",
          "url": "https://github.com/unicode-org/icu/commit/09f4459a77a8dbc12f15e02f6820a994636773b5"
        },
        "date": 1682008001224,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 32.25809314161637,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ftang@chromium.org",
            "name": "Frank Tang",
            "username": "FrankYFTang"
          },
          "committer": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "distinct": true,
          "id": "5be2ea84e59e63e4d68ebcd4082996d6db3af9f0",
          "message": "ICU-22349 Bump the cygwin timeout to 50 minutes",
          "timestamp": "2023-04-20T19:32:34-07:00",
          "tree_id": "a4299e363ed4dfa61dd3e105076e6b7566daaae7",
          "url": "https://github.com/unicode-org/icu/commit/5be2ea84e59e63e4d68ebcd4082996d6db3af9f0"
        },
        "date": 1682044956038,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 32.891935627061116,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srl295@gmail.com",
            "name": "Steven R. Loomis",
            "username": "srl295"
          },
          "committer": {
            "email": "srl295@gmail.com",
            "name": "Steven R. Loomis",
            "username": "srl295"
          },
          "distinct": true,
          "id": "ec3aef8feca208fa9c9c624dd591cfc982f826d2",
          "message": "ICU-22309 update CONTRIBUTING.md for new process\n\n- see https://github.com/unicode-org/.github/blob/main/.github/CONTRIBUTING.md",
          "timestamp": "2023-04-24T13:55:48-05:00",
          "tree_id": "cc589453ba99873a3421d14a22767492711e1249",
          "url": "https://github.com/unicode-org/icu/commit/ec3aef8feca208fa9c9c624dd591cfc982f826d2"
        },
        "date": 1682363156130,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 47.085301417055405,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "roubert@google.com",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "committer": {
            "email": "fredrik@roubert.name",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "distinct": true,
          "id": "4fd9d6ce9a951e66e727b296138f22cd05479de1",
          "message": "ICU-22356 Use ConstChar16Ptr to safely cast from UChar* to char16_t*.\n\nThis is necessary for this header file to be usable by clients that\ndefine UCHAR_TYPE as a type not compatible with char16_t, eg. uint16_t.",
          "timestamp": "2023-04-24T23:56:49+02:00",
          "tree_id": "2f0ee2671c534967bbe737d437a82479794a917a",
          "url": "https://github.com/unicode-org/icu/commit/4fd9d6ce9a951e66e727b296138f22cd05479de1"
        },
        "date": 1682374329981,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 40.01041836467819,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ftang@chromium.org",
            "name": "Frank Tang",
            "username": "FrankYFTang"
          },
          "committer": {
            "email": "103115900+rp9-next@users.noreply.github.com",
            "name": "Rahul Pandey",
            "username": "rp9-next"
          },
          "distinct": true,
          "id": "85fd7389e0fdd89b5a0aafe07429dd2452f1d310",
          "message": "ICU-22349 Speed up pre-merge CI\n\nSee #2420",
          "timestamp": "2023-04-19T08:06:59+05:30",
          "tree_id": "d4d1708e8d9e0574d02ea37967030c10232cea0e",
          "url": "https://github.com/unicode-org/icu/commit/85fd7389e0fdd89b5a0aafe07429dd2452f1d310"
        },
        "date": 1682421567855,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 32.63432246490253,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shane@unicode.org",
            "name": "Shane F. Carr",
            "username": "sffc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "62f493827fdc7a0b0c8b8b0e879f14ae4b9866dc",
          "message": "ICU-22369 Merge maint/maint-73 into main (#2437)",
          "timestamp": "2023-04-27T16:19:55-07:00",
          "tree_id": "a75fc27e6b4fcadb54bfa537c2072f62771a20e0",
          "url": "https://github.com/unicode-org/icu/commit/62f493827fdc7a0b0c8b8b0e879f14ae4b9866dc"
        },
        "date": 1682637852049,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 45.13247264283344,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "robertbastian@google.com",
            "name": "Robert Bastian",
            "username": "robertbastian"
          },
          "committer": {
            "email": "shane@unicode.org",
            "name": "Shane F. Carr",
            "username": "sffc"
          },
          "distinct": true,
          "id": "6c05042cbcf447eefd49da70c4d94359c336e60d",
          "message": "ICU-22373 Export segmentation dictionaries",
          "timestamp": "2023-05-02T07:29:27-07:00",
          "tree_id": "b704f2e6895b6f4a1c0b2e8ed23553914dc7f83a",
          "url": "https://github.com/unicode-org/icu/commit/6c05042cbcf447eefd49da70c4d94359c336e60d"
        },
        "date": 1683038320455,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 38.144531697095424,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "robertbastian@google.com",
            "name": "Robert Bastian",
            "username": "robertbastian"
          },
          "committer": {
            "email": "shane@unicode.org",
            "name": "Shane F. Carr",
            "username": "sffc"
          },
          "distinct": true,
          "id": "6342f9140a4c8179667a1757461bd8fe1d6bf4b9",
          "message": "ICU-22373 Export segmentation dictionaries\n\n(cherry picked from commit 6c05042cbcf447eefd49da70c4d94359c336e60d)",
          "timestamp": "2023-05-02T10:45:59-07:00",
          "tree_id": "e0be65e7e334c1d888674977da978a7f50e2222a",
          "url": "https://github.com/unicode-org/icu/commit/6342f9140a4c8179667a1757461bd8fe1d6bf4b9"
        },
        "date": 1683049840753,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 32.19373763348976,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nmihai_2000@yahoo.com",
            "name": "Mihai Nita",
            "username": "mihnita"
          },
          "committer": {
            "email": "nmihai_2000@yahoo.com",
            "name": "Mihai Nita",
            "username": "mihnita"
          },
          "distinct": true,
          "id": "0e4b10b1121a26fe4d1653d740f5a15bad9c48f0",
          "message": "ICU-22378 Fix temperature format ignoring -u-mu-fahrenhe",
          "timestamp": "2023-05-03T09:24:53-07:00",
          "tree_id": "062c1b22153ce55dbe44c2e7876c84761b658492",
          "url": "https://github.com/unicode-org/icu/commit/0e4b10b1121a26fe4d1653d740f5a15bad9c48f0"
        },
        "date": 1683131638150,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 50.10677436218521,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nmihai_2000@yahoo.com",
            "name": "Mihai Nita",
            "username": "mihnita"
          },
          "committer": {
            "email": "nmihai_2000@yahoo.com",
            "name": "Mihai Nita",
            "username": "mihnita"
          },
          "distinct": true,
          "id": "00bb6789b3895e4ed13701ab1cfaf6954a2d54fe",
          "message": "ICU-22323 Remove broken link from the Chinese Calendar documentation",
          "timestamp": "2023-05-03T10:51:22-07:00",
          "tree_id": "d5a3943d80732201af43afd611f74e2f6474fdec",
          "url": "https://github.com/unicode-org/icu/commit/00bb6789b3895e4ed13701ab1cfaf6954a2d54fe"
        },
        "date": 1683136974895,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 42.66657879080475,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "vichang@google.com",
            "name": "Victor Chang",
            "username": "gvictor"
          },
          "committer": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "distinct": true,
          "id": "530ca9817641c6a90c9c8c5028996de1d559e4a8",
          "message": "ICU-22371 Fix ULocale.getISOLanguages() API docs",
          "timestamp": "2023-05-03T11:13:32-07:00",
          "tree_id": "4c0c892bf64dfe4a34ef1a0a7b2b2404e1bc60d7",
          "url": "https://github.com/unicode-org/icu/commit/530ca9817641c6a90c9c8c5028996de1d559e4a8"
        },
        "date": 1683138697447,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 44.79948081892964,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pedberg@unicode.org",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "committer": {
            "email": "42151464+pedberg-icu@users.noreply.github.com",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "distinct": true,
          "id": "5618203821839cad2286a67682fb1940c8ce586f",
          "message": "ICU-22360 revert portions of #2159 which included @ in ALetter for wordbreak, update tests",
          "timestamp": "2023-05-06T21:36:46-07:00",
          "tree_id": "d8b965506e7bbeb71df2856099dabe5527aafa02",
          "url": "https://github.com/unicode-org/icu/commit/5618203821839cad2286a67682fb1940c8ce586f"
        },
        "date": 1683434860557,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 32.89938140474566,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "roubert@google.com",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "committer": {
            "email": "fredrik@roubert.name",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "distinct": true,
          "id": "e1e1c5feaf67652d9f124b23749a430d3278fe7b",
          "message": "ICU-22349 Use -l with make -j to limit jobs based on load average.\n\nIt has been proposed that make running too many parallel jobs recently\nhas led to resource exhaustion in our CI, so that some kind of limit\nwould be helpful to set.\n\nThe load average 2.5 limit choosen here is simply the limit used as an\nexample in the make documentation, as we don't really have any way of\npicking an initial value that's certain to be better.\n\nhttps://www.gnu.org/software/make/manual/html_node/Parallel.html\n\nSee #2421\nSee #2422",
          "timestamp": "2023-05-11T00:50:59+02:00",
          "tree_id": "70da6711d369c3bf0ac406c287b6bf192d4757a5",
          "url": "https://github.com/unicode-org/icu/commit/e1e1c5feaf67652d9f124b23749a430d3278fe7b"
        },
        "date": 1683759601799,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 37.375188107622876,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pedberg@unicode.org",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "committer": {
            "email": "42151464+pedberg-icu@users.noreply.github.com",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "distinct": true,
          "id": "d205e03352d0b2339d6b99d35e143e0843029cfa",
          "message": "ICU-22325 CLDR release-43-1-beta1 to ICU main",
          "timestamp": "2023-05-10T18:08:25-07:00",
          "tree_id": "21e686796049898b1f55d5588ea1ed312e280032",
          "url": "https://github.com/unicode-org/icu/commit/d205e03352d0b2339d6b99d35e143e0843029cfa"
        },
        "date": 1683767885404,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 32.16107903756489,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "41129501+gnrunge@users.noreply.github.com",
            "name": "Norbert Runge",
            "username": "gnrunge"
          },
          "committer": {
            "email": "41129501+gnrunge@users.noreply.github.com",
            "name": "Norbert Runge",
            "username": "gnrunge"
          },
          "distinct": true,
          "id": "ba1c7006b7b5acd734538b9997102d7f46203576",
          "message": "ICU-22384 Limit execution of performance tests\n\nRun the tests only on the main branch of the unicode-org/icu repository. This avoids diluting the performance charts with performance results from the maintenance branches. Also, the performance tests won't execute on forked directories anymore, on which they fail after execution anyway, thus using GitHub resources without purpose.",
          "timestamp": "2023-05-11T23:02:31-07:00",
          "tree_id": "c052171b524a44e1631c9a523bdbcb2de64532a5",
          "url": "https://github.com/unicode-org/icu/commit/ba1c7006b7b5acd734538b9997102d7f46203576"
        },
        "date": 1683871715725,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 51.706454624987494,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pedberg@unicode.org",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "committer": {
            "email": "42151464+pedberg-icu@users.noreply.github.com",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "distinct": true,
          "id": "6e72d908665fa9bc69e0853b1851d3eb8acbf843",
          "message": "ICU-22360 revert portions of #2159 which included @ in ALetter for wordbreak, update tests\n\n(cherry picked from commit 5618203821839cad2286a67682fb1940c8ce586f)",
          "timestamp": "2023-05-12T13:04:33-07:00",
          "tree_id": "4fbe12156aa08d96c28abd1200afd0595a9ddec3",
          "url": "https://github.com/unicode-org/icu/commit/6e72d908665fa9bc69e0853b1851d3eb8acbf843"
        },
        "date": 1683922036654,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 48.94058862813283,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pedberg@unicode.org",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "committer": {
            "email": "42151464+pedberg-icu@users.noreply.github.com",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "distinct": true,
          "id": "7f5d679a982cf8fc9308a01159a1ccb071c7b508",
          "message": "ICU-22357 Update gb18030 mappings for the -2022 version\n\nSee #2430",
          "timestamp": "2023-05-18T08:51:47-07:00",
          "tree_id": "7a1da39fadce0c7c60f622464bae85df659e4269",
          "url": "https://github.com/unicode-org/icu/commit/7f5d679a982cf8fc9308a01159a1ccb071c7b508"
        },
        "date": 1684425733500,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 39.960653164270155,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "roubert@google.com",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "committer": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "distinct": true,
          "id": "18182903cdabff007d90be4fd6b3743e753f5e22",
          "message": "ICU-22356 Use ConstChar16Ptr to safely cast from UChar* to char16_t*.\n\nThis is necessary for this header file to be usable by clients that\ndefine UCHAR_TYPE as a type not compatible with char16_t, eg. uint16_t.",
          "timestamp": "2023-05-18T10:47:55-07:00",
          "tree_id": "38ff36de982b5159afbc7c6833f55027bd2015b3",
          "url": "https://github.com/unicode-org/icu/commit/18182903cdabff007d90be4fd6b3743e753f5e22"
        },
        "date": 1684432325897,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 38.00447750230742,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pedberg@unicode.org",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "committer": {
            "email": "42151464+pedberg-icu@users.noreply.github.com",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "distinct": true,
          "id": "8d2c78d160dcb831a11efd2d4e5ec1ef081a19bf",
          "message": "ICU-22357 Rename gb18030.ucm to add -2022, follow-on to PR #2430",
          "timestamp": "2023-05-25T09:25:35-07:00",
          "tree_id": "028575b3795ebd11bd5d40e9ef3d4b519b18a984",
          "url": "https://github.com/unicode-org/icu/commit/8d2c78d160dcb831a11efd2d4e5ec1ef081a19bf"
        },
        "date": 1685032171370,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 32.20418896278352,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "manishsmail@gmail.com",
            "name": "Manish Goregaokar",
            "username": "Manishearth"
          },
          "committer": {
            "email": "shane@unicode.org",
            "name": "Shane F. Carr",
            "username": "sffc"
          },
          "distinct": true,
          "id": "43cd3ce6470be5817749b9e0c4da9f0e14fb1b58",
          "message": "ICU-22372 Fix headers in icuexportdata",
          "timestamp": "2023-05-25T10:09:07-07:00",
          "tree_id": "a934f5d3f0dc70611fd53ad4750bf193060c07a8",
          "url": "https://github.com/unicode-org/icu/commit/43cd3ce6470be5817749b9e0c4da9f0e14fb1b58"
        },
        "date": 1685036339380,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 44.05063302828559,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "62772518+richgillam@users.noreply.github.com",
            "name": "Rich Gillam",
            "username": "richgillam"
          },
          "committer": {
            "email": "62772518+richgillam@users.noreply.github.com",
            "name": "Rich Gillam",
            "username": "richgillam"
          },
          "distinct": true,
          "id": "5ef4fa29899dfc8ea71dc563002b34edcffe2e4f",
          "message": "ICU-22379 Update ICU PersonNameFormatter to match the spec change requested by CLDR-16623",
          "timestamp": "2023-05-25T16:43:33-07:00",
          "tree_id": "cfc8d8ed92d966af5aa5510b40ae1bfd0a105e92",
          "url": "https://github.com/unicode-org/icu/commit/5ef4fa29899dfc8ea71dc563002b34edcffe2e4f"
        },
        "date": 1685059124807,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 31.463771238811596,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "62772518+richgillam@users.noreply.github.com",
            "name": "Rich Gillam",
            "username": "richgillam"
          },
          "committer": {
            "email": "62772518+richgillam@users.noreply.github.com",
            "name": "Rich Gillam",
            "username": "richgillam"
          },
          "distinct": true,
          "id": "b5f8aaf0103a98c76232639546a1e401aa354727",
          "message": "ICU-22379 Update ICU PersonNameFormatter to match the spec change requested by CLDR-16623\n\n(cherry picked from commit 11f85eb4c219aa9138abd408077f00664e8496e5)",
          "timestamp": "2023-05-25T17:44:10-07:00",
          "tree_id": "d329bf5d1f069a63d6d4cd21c2b5e095d1c95228",
          "url": "https://github.com/unicode-org/icu/commit/b5f8aaf0103a98c76232639546a1e401aa354727"
        },
        "date": 1685061994431,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 48.044304957186085,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nvinson234@gmail.com",
            "name": "Nicholas Vinson",
            "username": "nvinson"
          },
          "committer": {
            "email": "fredrik@roubert.name",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "distinct": true,
          "id": "0fb1b5588e604cb013b605e38895d8fb3866bffb",
          "message": "ICU-22377 Fix va_end errors found by gcc -fanalyzer\n\nFixes missing call to ‘va_end’ errors.\n\nSigned-off-by: Nicholas Vinson <nvinson234@gmail.com>",
          "timestamp": "2023-05-26T15:50:21+02:00",
          "tree_id": "0df58514c8318f3d781631e1536d2e8d005292f0",
          "url": "https://github.com/unicode-org/icu/commit/0fb1b5588e604cb013b605e38895d8fb3866bffb"
        },
        "date": 1685109619988,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 31.969784158564376,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pedberg@unicode.org",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "committer": {
            "email": "42151464+pedberg-icu@users.noreply.github.com",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "distinct": true,
          "id": "130bdd47480ee1bf4ac7edc5188c997e1058e481",
          "message": "ICU-22357 Update gb18030 mappings for the -2022 version\n\n(cherry picked from commit 7f5d679a982cf8fc9308a01159a1ccb071c7b508)",
          "timestamp": "2023-05-26T12:34:06-07:00",
          "tree_id": "c058851e55b012b7fd4e0d029bc7a35bd6ff7ba7",
          "url": "https://github.com/unicode-org/icu/commit/130bdd47480ee1bf4ac7edc5188c997e1058e481"
        },
        "date": 1685130128488,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 42.6023057294275,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "manishsmail@gmail.com",
            "name": "Manish Goregaokar",
            "username": "Manishearth"
          },
          "committer": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "distinct": true,
          "id": "8bbb8f506ea0f4c2fe5ea5fd1cdadbd53d11ced6",
          "message": "ICU-22403 Fix icuexportdata out-of-bounds during decomposition",
          "timestamp": "2023-05-26T13:27:55-07:00",
          "tree_id": "a6e5ee837a7db2fa3da2efd7831214d119e2784c",
          "url": "https://github.com/unicode-org/icu/commit/8bbb8f506ea0f4c2fe5ea5fd1cdadbd53d11ced6"
        },
        "date": 1685133442537,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 45.459173254545085,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shane@unicode.org",
            "name": "Shane F. Carr",
            "username": "sffc"
          },
          "committer": {
            "email": "shane@unicode.org",
            "name": "Shane F. Carr",
            "username": "sffc"
          },
          "distinct": true,
          "id": "de26ea8c6a37c4f6e1382560fb8f791f7cecaa2b",
          "message": "ICU-22322 Revert extra parallelism for data-filter test in .azure-pipelines.yml\n\nSee #2471",
          "timestamp": "2023-05-26T13:39:11-07:00",
          "tree_id": "661eaf1a4ee4fa0f6d79244e29c7b4b7cbbc431d",
          "url": "https://github.com/unicode-org/icu/commit/de26ea8c6a37c4f6e1382560fb8f791f7cecaa2b"
        },
        "date": 1685134831467,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 32.069223649052006,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "elango@unicode.org",
            "name": "Elango Cheran",
            "username": "echeran"
          },
          "committer": {
            "email": "elango@unicode.org",
            "name": "Elango Cheran",
            "username": "echeran"
          },
          "distinct": true,
          "id": "5435007e6a25bd8d365e8a3e560f40f14961d2b9",
          "message": "ICU-21697 Convert ICU Site pages to markdown for Github Pages\n\nSee #1785",
          "timestamp": "2023-05-30T16:18:32-07:00",
          "tree_id": "363563a66f490b7b613093e83ffdcd4393faa1eb",
          "url": "https://github.com/unicode-org/icu/commit/5435007e6a25bd8d365e8a3e560f40f14961d2b9"
        },
        "date": 1685489402619,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 39.73396623018051,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jharkawat@microsoft.com",
            "name": "JALAJ HARKAWAT",
            "username": "jalaj-microsoft"
          },
          "committer": {
            "email": "103115900+rp9-next@users.noreply.github.com",
            "name": "Rahul Pandey",
            "username": "rp9-next"
          },
          "distinct": true,
          "id": "90d7ea8196110f8f32e60e7e79b472bd9c82e35e",
          "message": "ICU-22389 BRS73: Update version number to 73.2",
          "timestamp": "2023-06-01T14:52:29+05:30",
          "tree_id": "28764dbc64980c86c5b412c770edb81c931a9562",
          "url": "https://github.com/unicode-org/icu/commit/90d7ea8196110f8f32e60e7e79b472bd9c82e35e"
        },
        "date": 1685611507371,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 37.8034870555869,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "vichang@google.com",
            "name": "Victor Chang",
            "username": "gvictor"
          },
          "committer": {
            "email": "mark@unicode.org",
            "name": "Mark Davis",
            "username": "macchiati"
          },
          "distinct": true,
          "id": "a18c8f83e3adbfd70b6b229c2afdb3f05e3586a6",
          "message": "ICU-22390 Speed-up ICU4J Transliterator.<clinit>\n\nIt reduces the method runtime by approx. 60%.",
          "timestamp": "2023-06-01T05:32:56-07:00",
          "tree_id": "6926aedc2b59e9504ba3010360d64ec117d952e6",
          "url": "https://github.com/unicode-org/icu/commit/a18c8f83e3adbfd70b6b229c2afdb3f05e3586a6"
        },
        "date": 1685622951309,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 39.93096757671093,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "y.umaoka@gmail.com",
            "name": "yumaoka",
            "username": "yumaoka"
          },
          "committer": {
            "email": "yumaoka@users.noreply.github.com",
            "name": "Yoshito Umaoka",
            "username": "yumaoka"
          },
          "distinct": true,
          "id": "1119ae4885559e7665f7464d64b7f64e5f1b2344",
          "message": "ICU-22333 Exclude EhaustivePersonNameFormatterTest also from releaseJarCheck target.",
          "timestamp": "2023-06-01T11:39:40-04:00",
          "tree_id": "b61e76e13ae9e26f74b88ff7434d7aef602a78a0",
          "url": "https://github.com/unicode-org/icu/commit/1119ae4885559e7665f7464d64b7f64e5f1b2344"
        },
        "date": 1685634655716,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 44.60668671782898,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "manishsmail@gmail.com",
            "name": "Manish Goregaokar",
            "username": "Manishearth"
          },
          "committer": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "distinct": true,
          "id": "7d0d24e7da64009429544c54a059fe158539df57",
          "message": "ICU-22372 Fix headers in icuexportdata",
          "timestamp": "2023-06-01T08:47:31-07:00",
          "tree_id": "56ffd99c2d1b61176a51d0301eb741409dce352d",
          "url": "https://github.com/unicode-org/icu/commit/7d0d24e7da64009429544c54a059fe158539df57"
        },
        "date": 1685635541724,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 32.586795724494756,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "committer": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "distinct": true,
          "id": "f4234577ad723ec27c251a5b88733728aad212e8",
          "message": "ICU-22404 initial changes.txt for Unicode 15.1\n\nSee #2490\r\n- copy 15.0 change log to the top, unchanged\r\n- adjust changes.txt for 15.1, incl. diffs from CLDR 43 root collation update",
          "timestamp": "2023-06-04T20:16:39-07:00",
          "tree_id": "f5884e4e3844adf95356942ec886bd2e02dd3df7",
          "url": "https://github.com/unicode-org/icu/commit/f4234577ad723ec27c251a5b88733728aad212e8"
        },
        "date": 1685935275455,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 45.32647686420288,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "committer": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "distinct": true,
          "id": "e2fde33b4bea1ef865eadf48981b092273442fd7",
          "message": "ICU-22396 Fix tool until ICU4J add Temporal Calendar API\n\nSee #2488",
          "timestamp": "2023-06-05T15:26:53-07:00",
          "tree_id": "af9b1e861010ebe168965a04492d760e194ddcac",
          "url": "https://github.com/unicode-org/icu/commit/e2fde33b4bea1ef865eadf48981b092273442fd7"
        },
        "date": 1686004683594,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 48.88009976846752,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "42151464+pedberg-icu@users.noreply.github.com",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "680f521746a3bd6a86f25f25ee50a62d88b489cf",
          "message": "ICU-22389 Cherry-pick CLDR 43.1 data from main to maint-73 (#2495)",
          "timestamp": "2023-06-07T19:19:55-07:00",
          "tree_id": "0b0e97b8941c68d18e1f5b98fda41ce081935ec1",
          "url": "https://github.com/unicode-org/icu/commit/680f521746a3bd6a86f25f25ee50a62d88b489cf"
        },
        "date": 1686191211946,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 32.97219818102548,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pnacht@google.com",
            "name": "Pedro Kaj Kjellerup Nacht",
            "username": "pnacht"
          },
          "committer": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "distinct": true,
          "id": "7a101d68eab556c1b3bc0adf65998362ee941589",
          "message": "ICU-22350 Fix broken performance CI\n\nSigned-off-by: Pedro Kaj Kjellerup Nacht <pnacht@google.com>",
          "timestamp": "2023-06-13T16:41:39-07:00",
          "tree_id": "52a670393d4cc28f78185c88be7644a582ea1007",
          "url": "https://github.com/unicode-org/icu/commit/7a101d68eab556c1b3bc0adf65998362ee941589"
        },
        "date": 1686700314508,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 32.51657367465379,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ftang@chromium.org",
            "name": "Frank Tang",
            "username": "FrankYFTang"
          },
          "committer": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "distinct": true,
          "id": "f00ff4f5e31d43f4813c219e980b0a8653574356",
          "message": "ICU-22406 Add LIBRARY_DATA_DIR",
          "timestamp": "2023-06-13T22:01:59-07:00",
          "tree_id": "68e406d5283a2f5d7e253101873925d03b3b2886",
          "url": "https://github.com/unicode-org/icu/commit/f00ff4f5e31d43f4813c219e980b0a8653574356"
        },
        "date": 1686719473900,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 38.970792193485956,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "roubert@google.com",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "committer": {
            "email": "fredrik@roubert.name",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "distinct": true,
          "id": "53e04868558469dc394ac8a58c7ac58e231972f2",
          "message": "ICU-22389 Add missing git lfs install to instructions.",
          "timestamp": "2023-06-14T15:08:35+02:00",
          "tree_id": "226fd3ae5027aba47419cd2e9fe693111f63e492",
          "url": "https://github.com/unicode-org/icu/commit/53e04868558469dc394ac8a58c7ac58e231972f2"
        },
        "date": 1686748268599,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 32.11874252562823,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "roubert@google.com",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "committer": {
            "email": "fredrik@roubert.name",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "distinct": true,
          "id": "e567b50df853b7307d25f45f1ecf5df912b78ec9",
          "message": "ICU-22389 Set STRIP_FROM_PATH to enable Doxygen out-of-source builds.\n\nWithout this flag, the full path to the source directory will be\nincluded in the output generated by Doxygen.",
          "timestamp": "2023-06-14T15:08:59+02:00",
          "tree_id": "e2a959e4d182c234303af31d1351cf037eebe1ba",
          "url": "https://github.com/unicode-org/icu/commit/e567b50df853b7307d25f45f1ecf5df912b78ec9"
        },
        "date": 1686749785146,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 39.67747522281654,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ftang@chromium.org",
            "name": "Frank Tang",
            "username": "FrankYFTang"
          },
          "committer": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "distinct": true,
          "id": "9411a940ea878969d80da7ef4d74cae5b6d953bc",
          "message": "ICU-22414 Fix bogus locale in collation res fallback",
          "timestamp": "2023-06-14T11:30:00-07:00",
          "tree_id": "1b645cbefa8a6ec47a76e4ba7f610900fe62fd03",
          "url": "https://github.com/unicode-org/icu/commit/9411a940ea878969d80da7ef4d74cae5b6d953bc"
        },
        "date": 1686767574893,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 48.29493435593233,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pnacht@google.com",
            "name": "Pedro Kaj Kjellerup Nacht",
            "username": "pnacht"
          },
          "committer": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "distinct": true,
          "id": "758099ab3b87a2404dcc297ff88260d7a09eccf7",
          "message": "ICU-22410 Add security policy\n\nSigned-off-by: Pedro Kaj Kjellerup Nacht <pnacht@google.com>\nCo-authored-by: Markus Scherer <markus.icu@gmail.com>",
          "timestamp": "2023-06-14T13:54:42-07:00",
          "tree_id": "f3a27970e172a59c0b79eec7686e648895d5012b",
          "url": "https://github.com/unicode-org/icu/commit/758099ab3b87a2404dcc297ff88260d7a09eccf7"
        },
        "date": 1686776291907,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 32.74405555385405,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "elango@unicode.org",
            "name": "Elango Cheran",
            "username": "echeran"
          },
          "committer": {
            "email": "elango@unicode.org",
            "name": "Elango Cheran",
            "username": "echeran"
          },
          "distinct": true,
          "id": "c94469b9a0fe2e717a8cb95edc4b2336e3082161",
          "message": "ICU-22323 Correct alt='ascii' paths, point Readme.txt to .md",
          "timestamp": "2023-06-15T11:25:32-07:00",
          "tree_id": "b06dab4b3f15e138e58ebde191d673d672e6a1b3",
          "url": "https://github.com/unicode-org/icu/commit/c94469b9a0fe2e717a8cb95edc4b2336e3082161"
        },
        "date": 1686854210003,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 39.0899448606489,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pnacht@google.com",
            "name": "Pedro Kaj Kjellerup Nacht",
            "username": "pnacht"
          },
          "committer": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "distinct": true,
          "id": "7a101d68eab556c1b3bc0adf65998362ee941589",
          "message": "ICU-22350 Fix broken performance CI\n\nSigned-off-by: Pedro Kaj Kjellerup Nacht <pnacht@google.com>",
          "timestamp": "2023-06-13T16:41:39-07:00",
          "tree_id": "52a670393d4cc28f78185c88be7644a582ea1007",
          "url": "https://github.com/unicode-org/icu/commit/7a101d68eab556c1b3bc0adf65998362ee941589"
        },
        "date": 1687260207755,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 47.80127313134857,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hsivonen@hsivonen.fi",
            "name": "Henri Sivonen",
            "username": "hsivonen"
          },
          "committer": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "distinct": true,
          "id": "3fec4e718eed62d2b6a2a13fe5b9b82435cc9707",
          "message": "ICU-22260 Allow relative datetime formatting without context adjustment with UCONFIG_NO_BREAK_ITERATION",
          "timestamp": "2023-06-20T18:48:01-07:00",
          "tree_id": "5701096dc270afbde3ad099d14ad16be05848f5b",
          "url": "https://github.com/unicode-org/icu/commit/3fec4e718eed62d2b6a2a13fe5b9b82435cc9707"
        },
        "date": 1687312775866,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 32.598230242080156,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ftang@chromium.org",
            "name": "Frank Tang",
            "username": "FrankYFTang"
          },
          "committer": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "distinct": true,
          "id": "e83b0715a15714d3de6b25b1787245abb7500a5f",
          "message": "ICU-22368 Reduce ~200K langInfo.res size by encode LSR into 32bits int.\n\nSee #2458",
          "timestamp": "2023-06-22T01:18:41-07:00",
          "tree_id": "f3264d02b6b8b5f5b457f0579e47f812f792451b",
          "url": "https://github.com/unicode-org/icu/commit/e83b0715a15714d3de6b25b1787245abb7500a5f"
        },
        "date": 1687423027086,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 32.61275610725885,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ftang@chromium.org",
            "name": "Frank Tang",
            "username": "FrankYFTang"
          },
          "committer": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "distinct": true,
          "id": "26bd70e301bceed47a05b0689f8a48248ec10baf",
          "message": "ICU-22421 Remove two unused internal methods in gregorian cal\n\nRemove pinDayOfMonth() and yearLength(int32_t year)\nfrom GregorianCalendar.\n\nThese two methods are\n1. Unused by any code inside ICU, not in source/{common,i18n,test}.\n2. Marked as @internal in the header.\n3. Wrap inside #ifndef U_HIDE_INTERNAL_API block in the header\n4. In \"protected:\" section.\n5. No ICU4J counterpart.\n\nThe yearLength(int32_t year) dup the functionality as\nhandleGetYearLength of the same class and that one is the correct one to\nbe keep and used..\nThere is another yearLength() w/o the year as parameter should NOT be\nremoved and still needed internally.",
          "timestamp": "2023-06-22T15:44:05-07:00",
          "tree_id": "7d56078c3fff737c253268d856ca5c00ba7d261f",
          "url": "https://github.com/unicode-org/icu/commit/26bd70e301bceed47a05b0689f8a48248ec10baf"
        },
        "date": 1687474501763,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 32.11985722033598,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ftang@chromium.org",
            "name": "Frank Tang",
            "username": "FrankYFTang"
          },
          "committer": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "distinct": true,
          "id": "a9f75708929a2bd14f941f36aa36a7189d76a389",
          "message": "ICU-22412 Fix C API ucal_(g|s)etGregorianChange for iso8601 calendar\n\nSee #2510",
          "timestamp": "2023-06-22T15:44:37-07:00",
          "tree_id": "4fca3922a70bb6c49fcf1c00dc88cbbd7bc48b3c",
          "url": "https://github.com/unicode-org/icu/commit/a9f75708929a2bd14f941f36aa36a7189d76a389"
        },
        "date": 1687475559364,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 47.172844933257366,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "vichang@google.com",
            "name": "Victor Chang",
            "username": "gvictor"
          },
          "committer": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "distinct": true,
          "id": "83ee7e662f8b027e653f5e8b7afd73738782c088",
          "message": "ICU-22390 Transliterator.<clinit> can be optimized - part 2\n\nWIDTH_FIX instance could be lazily initialized, because it's used\nonly if transliterate() is called on the AnyTransliterator instance,\nbut apparently not used by other Transliterator instance.",
          "timestamp": "2023-06-27T11:25:43-07:00",
          "tree_id": "027a15f4548f8c7c1ac95506a236d995de9870e5",
          "url": "https://github.com/unicode-org/icu/commit/83ee7e662f8b027e653f5e8b7afd73738782c088"
        },
        "date": 1687890558051,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 32.87965911942017,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shane@unicode.org",
            "name": "Shane F. Carr",
            "username": "sffc"
          },
          "committer": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "distinct": true,
          "id": "4a255c4301f99183d2dae99f4ddd1ce6d60f8b35",
          "message": "ICU-21239 Improve docs for MeasureUnit default constructor",
          "timestamp": "2023-06-27T11:27:25-07:00",
          "tree_id": "5376b9db51ec6af5e68ff75d58687d8f948ddddf",
          "url": "https://github.com/unicode-org/icu/commit/4a255c4301f99183d2dae99f4ddd1ce6d60f8b35"
        },
        "date": 1687892018683,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 32.33939149806955,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ftang@chromium.org",
            "name": "Frank Tang",
            "username": "FrankYFTang"
          },
          "committer": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "distinct": true,
          "id": "f1b13a850a92557d6f6430ee0f867c3bcfbecbd5",
          "message": "ICU-22354 Revert benchmark-action changes\n\nRevert the change of benchmark-action in\nhttps://github.com/unicode-org/icu/pull/2428 which cause\npost merge test brekage.\n\nSee https://github.com/unicode-org/icu/actions/runs/5393383252/jobs/9793048045\nfor the problem",
          "timestamp": "2023-06-27T14:53:04-07:00",
          "tree_id": "7ec46ee1a0240ad833328079d8aaf73b6c005a72",
          "url": "https://github.com/unicode-org/icu/commit/f1b13a850a92557d6f6430ee0f867c3bcfbecbd5"
        },
        "date": 1687903490018,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 46.72641184429111,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jakewharton@gmail.com",
            "name": "Jake Wharton",
            "username": "JakeWharton"
          },
          "committer": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "distinct": true,
          "id": "adbcfb1e077db0ac47676b861ce70b10176ec7a6",
          "message": "ICU-22426 Do not create nested StringBuilder when appending",
          "timestamp": "2023-06-29T15:01:24-07:00",
          "tree_id": "d708b459c948ef01ce96f9f1246c44610b1f5f48",
          "url": "https://github.com/unicode-org/icu/commit/adbcfb1e077db0ac47676b861ce70b10176ec7a6"
        },
        "date": 1688077236574,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 40.79992027667146,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ftang@chromium.org",
            "name": "Frank Tang",
            "username": "FrankYFTang"
          },
          "committer": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "distinct": true,
          "id": "1b15a4e9db345b67ad284b92801f3fd99fe56e69",
          "message": "ICU-22424 Fix Calendar::clear(UCAL_MONTH)\n\nMake the calling of clear(UCAL_MONTH or UCAL_ORDINAL_MONTH) clear both fields.",
          "timestamp": "2023-06-30T00:48:34-07:00",
          "tree_id": "7a890e6c298e85f65b9044e9b7c464700d7f3c3e",
          "url": "https://github.com/unicode-org/icu/commit/1b15a4e9db345b67ad284b92801f3fd99fe56e69"
        },
        "date": 1688111796155,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 32.12798491959862,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jw@squareup.com",
            "name": "Jake Wharton",
            "username": "JakeWharton"
          },
          "committer": {
            "email": "yumaoka@users.noreply.github.com",
            "name": "Yoshito Umaoka",
            "username": "yumaoka"
          },
          "distinct": true,
          "id": "cd6ff4a64d2b6bca5c6ccc50d2d15a19fcdf2fa1",
          "message": "ICU-22425 Eliminate double map lookup for common case of present argument\n\nIn the uncommon case where the map lookup returns null, only then perform a second map lookup to determine whether it was an absent value or explicit null.",
          "timestamp": "2023-07-06T17:17:49+03:00",
          "tree_id": "bf532455650c6ba8f13f505281198e6274b68bec",
          "url": "https://github.com/unicode-org/icu/commit/cd6ff4a64d2b6bca5c6ccc50d2d15a19fcdf2fa1"
        },
        "date": 1688653686065,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 39.622257041109194,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pedberg@unicode.org",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "committer": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "distinct": true,
          "id": "70d308731ae01a4187fe49f7ae1c8e1ad1570be6",
          "message": "ICU-22325 BRS 74 front-load update version to 74.0.1",
          "timestamp": "2023-07-10T16:45:41-07:00",
          "tree_id": "d8cc5bf0d7548806dcc1445da79c881e06d6c46a",
          "url": "https://github.com/unicode-org/icu/commit/70d308731ae01a4187fe49f7ae1c8e1ad1570be6"
        },
        "date": 1689033333939,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 38.768169397624995,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shane@unicode.org",
            "name": "Shane F. Carr",
            "username": "sffc"
          },
          "committer": {
            "email": "shane@unicode.org",
            "name": "Shane F. Carr",
            "username": "sffc"
          },
          "distinct": true,
          "id": "034a8086049336e105179d98c6f7492ee4e6b47e",
          "message": "ICU-20898 Improve number skeleton rounding increment docs\n\nSee #2475",
          "timestamp": "2023-07-13T18:41:05+02:00",
          "tree_id": "797bd0b27ddcb31a228faa17e9f638741ebe7ff2",
          "url": "https://github.com/unicode-org/icu/commit/034a8086049336e105179d98c6f7492ee4e6b47e"
        },
        "date": 1689267202747,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 37.38529180133415,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ftang@chromium.org",
            "name": "Frank Tang",
            "username": "FrankYFTang"
          },
          "committer": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "distinct": true,
          "id": "5826bf7ed7f45afd18793c491313b86e2b9385ba",
          "message": "ICU-22434 Not calling setFirstDayOfWeek(MONDAY) if the locale has fw\n\nThe Calendar constructor already take care of the fw override.\nWe should not set the first day of week for iso8601 to Monday if\nwe have a fw keyword/type in the locale.\n\nICU-22434 Fix incorrect calendar keyword extraction",
          "timestamp": "2023-07-13T09:49:32-07:00",
          "tree_id": "a375506ffaf4e7b361bc909f4de15008e7abd541",
          "url": "https://github.com/unicode-org/icu/commit/5826bf7ed7f45afd18793c491313b86e2b9385ba"
        },
        "date": 1689268388508,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 41.01220413861827,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "elango@unicode.org",
            "name": "Elango Cheran",
            "username": "echeran"
          },
          "committer": {
            "email": "elango@unicode.org",
            "name": "Elango Cheran",
            "username": "echeran"
          },
          "distinct": true,
          "id": "2e45e6ec0e84a1c01812015a254ea31b286316fb",
          "message": "ICU-22404 Unicode 15.1 beta data files & API constants\n\nSee #2492\n\nCo-authored-by: Andy Heninger <andy.heninger@gmail.com>\nCo-authored-by: Robin Leroy <egg.robin.leroy@gmail.com>",
          "timestamp": "2023-07-13T19:26:14-07:00",
          "tree_id": "56d55c3d7693da95923625d70f80d539ee552592",
          "url": "https://github.com/unicode-org/icu/commit/2e45e6ec0e84a1c01812015a254ea31b286316fb"
        },
        "date": 1689302340418,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 48.79652792431316,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "technicalcute@gmail.com",
            "name": "Jiawen Geng",
            "username": "gengjiawen"
          },
          "committer": {
            "email": "fredrik@roubert.name",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "distinct": true,
          "id": "c7e967c456ceff6436607ca2a3da034320ca34c3",
          "message": "ICU-22401 fix build on MSVC with cpp20",
          "timestamp": "2023-07-14T14:31:40+02:00",
          "tree_id": "cef2de2169d0ee3ac2f561216cd86344355b9ab2",
          "url": "https://github.com/unicode-org/icu/commit/c7e967c456ceff6436607ca2a3da034320ca34c3"
        },
        "date": 1689338508655,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 38.3159744014689,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pnacht@google.com",
            "name": "Pedro Kaj Kjellerup Nacht",
            "username": "pnacht"
          },
          "committer": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "distinct": true,
          "id": "281a2a77ec8acc723f3603ad3d892e34b9ac2a29",
          "message": "ICU-22350 Give maven.yml packages:write\n\nSigned-off-by: Pedro Kaj Kjellerup Nacht <pnacht@google.com>",
          "timestamp": "2023-07-20T08:12:16-07:00",
          "tree_id": "ba2b603c4e289458016d16a5b62686f7be65d0d4",
          "url": "https://github.com/unicode-org/icu/commit/281a2a77ec8acc723f3603ad3d892e34b9ac2a29"
        },
        "date": 1689866679762,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 49.90616998261535,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "62772518+richgillam@users.noreply.github.com",
            "name": "Rich Gillam",
            "username": "richgillam"
          },
          "committer": {
            "email": "62772518+richgillam@users.noreply.github.com",
            "name": "Rich Gillam",
            "username": "richgillam"
          },
          "distinct": true,
          "id": "85e75ecc13d9bbb324bc87cb5194e6982486f2d1",
          "message": "ICU-22304 Miscellanous PersonNameFormatter fixes; made ExhaustivePersonNameFormatterTest into a real unit test.",
          "timestamp": "2023-07-20T10:52:37-07:00",
          "tree_id": "bc5617b796004d916f8e1d4cfdab37c479a0c190",
          "url": "https://github.com/unicode-org/icu/commit/85e75ecc13d9bbb324bc87cb5194e6982486f2d1"
        },
        "date": 1689876524037,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 40.870110219874185,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shane@unicode.org",
            "name": "Shane F. Carr",
            "username": "sffc"
          },
          "committer": {
            "email": "shane@unicode.org",
            "name": "Shane F. Carr",
            "username": "sffc"
          },
          "distinct": true,
          "id": "2238f1c2c1279a83af4aae7f6eaec44d667f0c98",
          "message": "ICU-20297 Improve discoverability of currency formatting",
          "timestamp": "2023-07-23T09:23:13-07:00",
          "tree_id": "44a268be510bfe054933a46b370170c3e7f3ea23",
          "url": "https://github.com/unicode-org/icu/commit/2238f1c2c1279a83af4aae7f6eaec44d667f0c98"
        },
        "date": 1690129989483,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 47.33697274562461,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ftang@chromium.org",
            "name": "Frank Tang",
            "username": "FrankYFTang"
          },
          "committer": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "distinct": true,
          "id": "03e98c04f3f1b0a66cc7dcdb5c1ce09d0c4986e4",
          "message": "ICU-22442 Sync the spelling of NEHASSA to ICU4J NEHASSE\n\nICU4J has that as part of public API but ++ is private\nso we should sync to the ICU4J one.",
          "timestamp": "2023-07-27T09:56:31-07:00",
          "tree_id": "0b5784c751989767fd537d0de515458e21fa9520",
          "url": "https://github.com/unicode-org/icu/commit/03e98c04f3f1b0a66cc7dcdb5c1ce09d0c4986e4"
        },
        "date": 1690477727473,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 32.87708686915047,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ftang@chromium.org",
            "name": "Frank Tang",
            "username": "FrankYFTang"
          },
          "committer": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "distinct": true,
          "id": "73b61ceece7811e3e50bf8f8803bb6dca6828893",
          "message": "ICU-22444 Remove \"unknown\" from Calendar.getKeywordValuesForLocale\n\nRemove CalType enum value UNKNOWN and use null for unknown CalType\nThis value is an internal enum and the only place use it is inside Calendar.java\nUse null for that instead (same as C++)",
          "timestamp": "2023-07-27T17:07:01-07:00",
          "tree_id": "30a39dea4aa3d7c298e12e68c578e9708d7b0f01",
          "url": "https://github.com/unicode-org/icu/commit/73b61ceece7811e3e50bf8f8803bb6dca6828893"
        },
        "date": 1690504267874,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 50.78808178451092,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ftang@chromium.org",
            "name": "Frank Tang",
            "username": "FrankYFTang"
          },
          "committer": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "distinct": true,
          "id": "19bac42f984aa3df9467135f45b7727e7fa31e81",
          "message": "ICU-22446 Fix incorrect Hebrew ORDINAL MONTH bug",
          "timestamp": "2023-07-27T22:18:00-07:00",
          "tree_id": "626d36faefa9611e01e8132eb590b82d61122926",
          "url": "https://github.com/unicode-org/icu/commit/19bac42f984aa3df9467135f45b7727e7fa31e81"
        },
        "date": 1690522285110,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 32.52764936952231,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dragan@unicode.org",
            "name": "DraganBesevic",
            "username": "DraganBesevic"
          },
          "committer": {
            "email": "42151464+pedberg-icu@users.noreply.github.com",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "distinct": true,
          "id": "1f07d2b29f192695a5d6f9b8a084862425b3f3d3",
          "message": "ICU-22325 Integrate CLDR 44.1 to ICU, add personName testdata, fix RBBITestMonkey",
          "timestamp": "2023-07-28T16:53:50-07:00",
          "tree_id": "54b30a91307a011563948e88573131fba52420a5",
          "url": "https://github.com/unicode-org/icu/commit/1f07d2b29f192695a5d6f9b8a084862425b3f3d3"
        },
        "date": 1690589218907,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 50.49070875817492,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ftang@chromium.org",
            "name": "Frank Tang",
            "username": "FrankYFTang"
          },
          "committer": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "distinct": true,
          "id": "d511cad90d3144ab7324f4368261249ff27a9f59",
          "message": "ICU-22407 Implement Java Temporal Calendar API\n\nSee #2526",
          "timestamp": "2023-07-28T18:17:38-07:00",
          "tree_id": "3ca05f99e25564f615c60db5305c9105e1533ec5",
          "url": "https://github.com/unicode-org/icu/commit/d511cad90d3144ab7324f4368261249ff27a9f59"
        },
        "date": 1690594227044,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 42.98854505314473,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ftang@chromium.org",
            "name": "Frank Tang",
            "username": "FrankYFTang"
          },
          "committer": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "distinct": true,
          "id": "9511fff62aa962246aaa142a743d86234c760911",
          "message": "ICU-22407 Suppress Calendar Consistency\n\nSimilar to changes to C++ in\nhttps://github.com/unicode-org/icu/pull/2298",
          "timestamp": "2023-07-31T20:57:01-07:00",
          "tree_id": "89ff2d5af07893e60580f5651b4d5712738bc6e6",
          "url": "https://github.com/unicode-org/icu/commit/9511fff62aa962246aaa142a743d86234c760911"
        },
        "date": 1690862963062,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 39.30955788197477,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ftang@chromium.org",
            "name": "Frank Tang",
            "username": "FrankYFTang"
          },
          "committer": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "distinct": true,
          "id": "6ba5a1a1b76a7d7dfb79e2a2db40c0cd6c401411",
          "message": "ICU-22365 C API for ULocaleBuilder\n\nSee #2520\n\nICU-22365 Fix comments",
          "timestamp": "2023-08-03T14:11:12-07:00",
          "tree_id": "c3a5b82dc4184091283bdea640ab3c2e816b53dd",
          "url": "https://github.com/unicode-org/icu/commit/6ba5a1a1b76a7d7dfb79e2a2db40c0cd6c401411"
        },
        "date": 1691097396467,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 38.81226890849321,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "richard_gillam@apple.com",
            "name": "Rich Gillam",
            "username": "richgillam"
          },
          "committer": {
            "email": "62772518+richgillam@users.noreply.github.com",
            "name": "Rich Gillam",
            "username": "richgillam"
          },
          "distinct": true,
          "id": "89b952dffde5e1e49697ab2a477374b1a1387a5a",
          "message": "ICU-22362 Fix the name order derivation code in PersonNameFormatter to match the CLDR spec.",
          "timestamp": "2023-08-04T12:34:20-07:00",
          "tree_id": "63894886cce73116e6506f5bf6e1d0338de31303",
          "url": "https://github.com/unicode-org/icu/commit/89b952dffde5e1e49697ab2a477374b1a1387a5a"
        },
        "date": 1691178374917,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 40.47666152383066,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "richard_gillam@apple.com",
            "name": "Rich Gillam",
            "username": "richgillam"
          },
          "committer": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "distinct": true,
          "id": "720e5741ccaa112c4faafffdedeb7459b66c5673",
          "message": "ICU-22362 Fix build error in exhaustive tests resulting from last PersonName change.",
          "timestamp": "2023-08-04T18:44:00-07:00",
          "tree_id": "8c935ae46d180a82badbb8d09daee03d69b9082b",
          "url": "https://github.com/unicode-org/icu/commit/720e5741ccaa112c4faafffdedeb7459b66c5673"
        },
        "date": 1691200248857,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 46.263897472642036,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "egg.robin.leroy@gmail.com",
            "name": "Robin Leroy",
            "username": "eggrobin"
          },
          "committer": {
            "email": "egg.robin.leroy@gmail.com",
            "name": "Robin Leroy",
            "username": "eggrobin"
          },
          "distinct": true,
          "id": "47e47ec439aee36ab4abbaa018a4d8a53fe3154d",
          "message": "ICU-22433 uppercase decomposed greek to decomposed greek and precomposed greek to precomposed greek.",
          "timestamp": "2023-08-08T22:20:20+02:00",
          "tree_id": "2e8e9441fccb5142764b957374c7dde47bf80e83",
          "url": "https://github.com/unicode-org/icu/commit/47e47ec439aee36ab4abbaa018a4d8a53fe3154d"
        },
        "date": 1691527235728,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 39.01892163338583,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "richard_gillam@apple.com",
            "name": "Rich Gillam",
            "username": "richgillam"
          },
          "committer": {
            "email": "62772518+richgillam@users.noreply.github.com",
            "name": "Rich Gillam",
            "username": "richgillam"
          },
          "distinct": true,
          "id": "56850c9a42eab1a28c65e0c177accd9ea9272a5d",
          "message": "ICU-22402 Add support in ICU and in the CLDR-to-ICU tool for the new nativeSpaceReplacement and parameterDefault\nresources for PersonNameFormatter in CLDR. Regenerated the ICU4J data resources as well as the ICU4C resources\nto include the new resources.",
          "timestamp": "2023-08-08T14:42:02-07:00",
          "tree_id": "cd236353f48d24d9672525c7419db8b180222a96",
          "url": "https://github.com/unicode-org/icu/commit/56850c9a42eab1a28c65e0c177accd9ea9272a5d"
        },
        "date": 1691532080992,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 38.58001773013325,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ftang@chromium.org",
            "name": "Frank Tang",
            "username": "FrankYFTang"
          },
          "committer": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "distinct": true,
          "id": "ca1435c3ea7314d9636e59a9b87d95df6dd7f8a9",
          "message": "ICU-22453 Fix non null terminated buffer issue.\n\nSee #2543",
          "timestamp": "2023-08-09T15:36:04-07:00",
          "tree_id": "3299c8d1611921acdf14a65c1045fb6e26cf082a",
          "url": "https://github.com/unicode-org/icu/commit/ca1435c3ea7314d9636e59a9b87d95df6dd7f8a9"
        },
        "date": 1691621092687,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 41.30334262227358,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "egg.robin.leroy@gmail.com",
            "name": "Robin Leroy",
            "username": "eggrobin"
          },
          "committer": {
            "email": "egg.robin.leroy@gmail.com",
            "name": "Robin Leroy",
            "username": "eggrobin"
          },
          "distinct": true,
          "id": "86193b1b982528ab1a4407e80cd3bdac2e23fc26",
          "message": "ICU-22404 Improve documentation of segmentation rules",
          "timestamp": "2023-08-10T03:01:20+02:00",
          "tree_id": "5f10e968738ce16dc4e4ca46654093d68e80a29d",
          "url": "https://github.com/unicode-org/icu/commit/86193b1b982528ab1a4407e80cd3bdac2e23fc26"
        },
        "date": 1691630084745,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 39.486901028575694,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "egg.robin.leroy@gmail.com",
            "name": "Robin Leroy",
            "username": "eggrobin"
          },
          "committer": {
            "email": "egg.robin.leroy@gmail.com",
            "name": "Robin Leroy",
            "username": "eggrobin"
          },
          "distinct": true,
          "id": "a6fc915e05cd00252fada5c38fc29f26968c6002",
          "message": "ICU-22404 Strip default ignorable code points in the skeleton for confusable detection",
          "timestamp": "2023-08-10T17:55:14+02:00",
          "tree_id": "0214079f29ca8235045d39b705c20d4acfb468b4",
          "url": "https://github.com/unicode-org/icu/commit/a6fc915e05cd00252fada5c38fc29f26968c6002"
        },
        "date": 1691683076447,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 50.35439633806418,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pedberg@unicode.org",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "committer": {
            "email": "42151464+pedberg-icu@users.noreply.github.com",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "distinct": true,
          "id": "cc2ddc0d113aa4db6efa6b071eca172e4a72f6cd",
          "message": "ICU-22325 Convert cldr-icu-readme to md, update it, point to it from older docs",
          "timestamp": "2023-08-10T14:03:06-07:00",
          "tree_id": "d7dbb7808f644aed0e2b891de9cadc3844eba560",
          "url": "https://github.com/unicode-org/icu/commit/cc2ddc0d113aa4db6efa6b071eca172e4a72f6cd"
        },
        "date": 1691702047026,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 32.97060753407654,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "richard_gillam@apple.com",
            "name": "Rich Gillam",
            "username": "richgillam"
          },
          "committer": {
            "email": "62772518+richgillam@users.noreply.github.com",
            "name": "Rich Gillam",
            "username": "richgillam"
          },
          "distinct": true,
          "id": "ca3fd47f4cd6102e91b7d88607dcea0be7648d87",
          "message": "ICU-22402 Add options to PersonNameFormatter and update nativeSpaceReplacement logic",
          "timestamp": "2023-08-10T15:15:49-07:00",
          "tree_id": "1e7171c17d71ea9a4f84afb4f42cb84a00629d29",
          "url": "https://github.com/unicode-org/icu/commit/ca3fd47f4cd6102e91b7d88607dcea0be7648d87"
        },
        "date": 1691706712227,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 34.877427597754185,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "chachoi@blackberry.com",
            "name": "James Choi",
            "username": "chachoi"
          },
          "committer": {
            "email": "62772518+richgillam@users.noreply.github.com",
            "name": "Rich Gillam",
            "username": "richgillam"
          },
          "distinct": true,
          "id": "b70b2d0433d5004f72b5d7590a82879673527ae0",
          "message": "ICU-22363 Add support for QNX 7.1\n\nSigned-off-by: James Choi <chachoi@blackberry.com>",
          "timestamp": "2023-08-10T17:46:01-07:00",
          "tree_id": "a41aa016f03b75259a403b5549008671b4835d54",
          "url": "https://github.com/unicode-org/icu/commit/b70b2d0433d5004f72b5d7590a82879673527ae0"
        },
        "date": 1691714921401,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 31.927267620401647,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "richard_gillam@apple.com",
            "name": "Rich Gillam",
            "username": "richgillam"
          },
          "committer": {
            "email": "42151464+pedberg-icu@users.noreply.github.com",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "distinct": true,
          "id": "d91859de21c22ad41c9eda5e11dfa214d58e46fc",
          "message": "ICU-22363 Add copyright notices to new QNX build files",
          "timestamp": "2023-08-11T12:44:28-07:00",
          "tree_id": "63315a338d0fb3df69d723fa71db06b4ca61f594",
          "url": "https://github.com/unicode-org/icu/commit/d91859de21c22ad41c9eda5e11dfa214d58e46fc"
        },
        "date": 1691783926068,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 32.765902277602066,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "y.umaoka@gmail.com",
            "name": "yumaoka",
            "username": "yumaoka"
          },
          "committer": {
            "email": "yumaoka@users.noreply.github.com",
            "name": "Yoshito Umaoka",
            "username": "yumaoka"
          },
          "distinct": true,
          "id": "6338b704ff9ed73757e11f6917cf835aee7ec0e4",
          "message": "ICU-22452 API for resolving preferred IANA zone ID from a zone ID.",
          "timestamp": "2023-08-11T17:00:05-04:00",
          "tree_id": "8823388b80cb41d8f0b455c058ddd80e059140d3",
          "url": "https://github.com/unicode-org/icu/commit/6338b704ff9ed73757e11f6917cf835aee7ec0e4"
        },
        "date": 1691788481020,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 42.71045139778095,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "committer": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "distinct": true,
          "id": "81a6edb2870abee08ecbbc7d28407081277e134f",
          "message": "ICU-22404 Unicode 15.1 data 20230811 plus UTS46 fix",
          "timestamp": "2023-08-16T14:25:22-07:00",
          "tree_id": "bb64cbbdf1ae6ba4650b7ebd52a2522930389ba5",
          "url": "https://github.com/unicode-org/icu/commit/81a6edb2870abee08ecbbc7d28407081277e134f"
        },
        "date": 1692222435605,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 39.2485453714009,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ftang@chromium.org",
            "name": "Frank Tang",
            "username": "FrankYFTang"
          },
          "committer": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "distinct": true,
          "id": "27181e36a6bed372482e5a11c25009fa4dd971f1",
          "message": "ICU-22435 Add C API for Locale \n\nSee #2531",
          "timestamp": "2023-08-17T12:15:47-07:00",
          "tree_id": "df38124fc9221054d4d0427422e9a1842fc06d98",
          "url": "https://github.com/unicode-org/icu/commit/27181e36a6bed372482e5a11c25009fa4dd971f1"
        },
        "date": 1692300468967,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 49.136983514130215,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ftang@chromium.org",
            "name": "Frank Tang",
            "username": "FrankYFTang"
          },
          "committer": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "distinct": true,
          "id": "ffc449de6243b17857b5d67854bdec723bf06f21",
          "message": "ICU-20777 Merge the likelySubtags implemention\n\nChange testdata/likelySubtags.txt to consider FAIL line\n\nICU-20777 Fix Java Tests\n\nICU-20777 Fix all issues\n\nICU-20777 Incase timeout\n\nICU-20777\n\nICU-20777 Skip Data Driven test",
          "timestamp": "2023-08-18T09:35:54-07:00",
          "tree_id": "c3e30331616dbbed862e21a941a266410240f79e",
          "url": "https://github.com/unicode-org/icu/commit/ffc449de6243b17857b5d67854bdec723bf06f21"
        },
        "date": 1692377337465,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 43.90507179753182,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nmihai_2000@yahoo.com",
            "name": "Mihai Nita",
            "username": "mihnita"
          },
          "committer": {
            "email": "nmihai_2000@yahoo.com",
            "name": "Mihai Nita",
            "username": "mihnita"
          },
          "distinct": true,
          "id": "a7a2fdbcf257fa22c7a24cfae838675dafd5e071",
          "message": "ICU-22324 Script moving folders to maven structure",
          "timestamp": "2023-08-18T20:58:16-07:00",
          "tree_id": "96a79ac750efc3947bb08a8d52bb81896b783086",
          "url": "https://github.com/unicode-org/icu/commit/a7a2fdbcf257fa22c7a24cfae838675dafd5e071"
        },
        "date": 1692417767940,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 31.701753671534174,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "roubert@google.com",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "committer": {
            "email": "fredrik@roubert.name",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "distinct": true,
          "id": "1fc560c07f34165a56b109b1a3c4be27d345a4ad",
          "message": "ICU-22465 Change .s to .data() for replacing TinyString with CharString.\n\nThis was forgotten by ICU-7496 which replaced the local TinyString data\ntype with the shared CharString data type, but as it's in code heavily\nnested in #ifdef's it hasn't been noticed until now.",
          "timestamp": "2023-08-21T15:57:20+02:00",
          "tree_id": "966093ae5aeb7a7004e6267c7a180025cf1b5425",
          "url": "https://github.com/unicode-org/icu/commit/1fc560c07f34165a56b109b1a3c4be27d345a4ad"
        },
        "date": 1692626986854,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 32.88220880053625,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srl295@gmail.com",
            "name": "Steven R. Loomis",
            "username": "srl295"
          },
          "committer": {
            "email": "srl295@gmail.com",
            "name": "Steven R. Loomis",
            "username": "srl295"
          },
          "distinct": true,
          "id": "248b1c2a13fc7fc346e9e9419c4794df8a590ad9",
          "message": "ICU-22309 update to LICENSE v3, Readme.md, CONTRIBUTING.md\n\n- LICENSE is now the v3 license with the correct year and title\n- README.md now has the required features and drops Terms of Use\n- CONTRIBUTING.md now matches the updated language",
          "timestamp": "2023-08-21T11:48:04-05:00",
          "tree_id": "ebf670f363b6ef1b0628ce3d13b5d3270995cc65",
          "url": "https://github.com/unicode-org/icu/commit/248b1c2a13fc7fc346e9e9419c4794df8a590ad9"
        },
        "date": 1692638032693,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 49.840301644995535,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "richard_gillam@apple.com",
            "name": "Rich Gillam",
            "username": "richgillam"
          },
          "committer": {
            "email": "62772518+richgillam@users.noreply.github.com",
            "name": "Rich Gillam",
            "username": "richgillam"
          },
          "distinct": true,
          "id": "52177cc8c78901b2085bc1d8beb0df10c24afadb",
          "message": "ICU-22364 Modify ulocimp_getRegionForSupplementalData() to ignore the subdivision code, rather than requiring it to\nbe \"zzzz\".",
          "timestamp": "2023-08-21T14:06:00-04:00",
          "tree_id": "e29ce619c8e481125566a8a151323b4684b511f8",
          "url": "https://github.com/unicode-org/icu/commit/52177cc8c78901b2085bc1d8beb0df10c24afadb"
        },
        "date": 1692641791984,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 44.82137830082578,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ftang@chromium.org",
            "name": "Frank Tang",
            "username": "FrankYFTang"
          },
          "committer": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "distinct": true,
          "id": "667ee72b7c2921d28b935af4e620832054452a09",
          "message": "ICU-22457 count() of getUnicodeKeywords is incorrect\n\nThe count() is incorrect if the Locale contains extension which is not -u-\nfor example -x-, -t-.\n\nCurrently, this PR only contains tests to show the problem.\n\nICU-22457 Fix the enum_count",
          "timestamp": "2023-08-21T14:44:10-07:00",
          "tree_id": "f6dec3a2cb7bd8ab9f252016e48591c596b1a679",
          "url": "https://github.com/unicode-org/icu/commit/667ee72b7c2921d28b935af4e620832054452a09"
        },
        "date": 1692654447947,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 43.769689727408725,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ftang@chromium.org",
            "name": "Frank Tang",
            "username": "FrankYFTang"
          },
          "committer": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "distinct": true,
          "id": "5d6d197a03c100428cd523346ace880ef9e56fe5",
          "message": "ICU-22466 Fix incorrect memory read while the locale is bogus\n\nICU-22466 Fix illegal read\n\nICU-22466 Fix memory issue",
          "timestamp": "2023-08-22T09:22:12-07:00",
          "tree_id": "6d844428e019275808c91ed0d9ae6633ec07eb3a",
          "url": "https://github.com/unicode-org/icu/commit/5d6d197a03c100428cd523346ace880ef9e56fe5"
        },
        "date": 1692721480627,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 32.05206437526571,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pedberg@apple.com",
            "name": "Peter Edberg",
            "username": "pedberg"
          },
          "committer": {
            "email": "42151464+pedberg-icu@users.noreply.github.com",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "distinct": true,
          "id": "2270c174a5839b97a3bab9f9e67db7594778a905",
          "message": "ICU-22325 CLDR release-44-alpha1 to main:\n  - binaries, binary-as-source, CLDR data sources;\n  - CLDR test data & dtd, ICU lib/tool/test source updates.",
          "timestamp": "2023-08-22T14:40:51-07:00",
          "tree_id": "73386c8714dd865d71e0a70c780302b83a4289d4",
          "url": "https://github.com/unicode-org/icu/commit/2270c174a5839b97a3bab9f9e67db7594778a905"
        },
        "date": 1692741092670,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 48.382346723180945,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nmihai_2000@yahoo.com",
            "name": "Mihai Nita",
            "username": "mihnita"
          },
          "committer": {
            "email": "nmihai_2000@yahoo.com",
            "name": "Mihai Nita",
            "username": "mihnita"
          },
          "distinct": true,
          "id": "fb0f36203affeddff8e1456bce634d996466659e",
          "message": "ICU-22324 Small fixes for script moving folders to maven structure\n\n- Symlinks to LICENSE, so that it is included in the .jar files\n- Fixed version in the jar manifests (s/73/74/)\n- Added Main-Class, Export-Package, some *-Title and *-Description\n\nAt this point the .jar files (including manifests) produced by ant / maven\nare byte to byte identical, except for some small differences that are\nexpected and can be explained (will cover them in the email to the team)",
          "timestamp": "2023-08-22T16:19:43-07:00",
          "tree_id": "7b67f9a79cb3c9fea9b04b72dd0cf90e42ffcf95",
          "url": "https://github.com/unicode-org/icu/commit/fb0f36203affeddff8e1456bce634d996466659e"
        },
        "date": 1692747290714,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 50.297542314303385,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "egg.robin.leroy@gmail.com",
            "name": "Robin Leroy",
            "username": "eggrobin"
          },
          "committer": {
            "email": "egg.robin.leroy@gmail.com",
            "name": "Robin Leroy",
            "username": "eggrobin"
          },
          "distinct": true,
          "id": "f79fe9347a2db853b1114ab3846ced39c86cc09d",
          "message": "ICU-22332 bidiSkeleton and LTR- and RTL-confusabilities",
          "timestamp": "2023-08-23T15:56:02+02:00",
          "tree_id": "f522c1c6196216eafeed48e5d7c855a327567abf",
          "url": "https://github.com/unicode-org/icu/commit/f79fe9347a2db853b1114ab3846ced39c86cc09d"
        },
        "date": 1692799134493,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 39.70719430771536,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ftang@chromium.org",
            "name": "Frank Tang",
            "username": "FrankYFTang"
          },
          "committer": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "distinct": true,
          "id": "706044b0a20ce0464a2c13950f1d875203b89a61",
          "message": "ICU-20777 Remove the generation of likelySubtags.res",
          "timestamp": "2023-08-23T15:47:50-07:00",
          "tree_id": "4bdf449b1844eb111fd90762d972312bf6170ab7",
          "url": "https://github.com/unicode-org/icu/commit/706044b0a20ce0464a2c13950f1d875203b89a61"
        },
        "date": 1692831545564,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 35.8037332493539,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ftang@chromium.org",
            "name": "Frank Tang",
            "username": "FrankYFTang"
          },
          "committer": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "distinct": true,
          "id": "ea0dbd4c4166831278a2004511a1f252d77b983d",
          "message": "ICU-22462 Rename to PersonNameConsistencyTest\n\nRename ExhaustivePersonNameFormatterTest to PersonNameConsistencyTest\nAlways run. Paramaterize the test so each test file are run in their\nown test case and report the failure/success separately",
          "timestamp": "2023-08-24T11:45:27-07:00",
          "tree_id": "6ebfdeda6c30a504e083255f5909305041026c46",
          "url": "https://github.com/unicode-org/icu/commit/ea0dbd4c4166831278a2004511a1f252d77b983d"
        },
        "date": 1692903687114,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 39.56944730580589,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "richard_gillam@apple.com",
            "name": "Rich Gillam",
            "username": "richgillam"
          },
          "committer": {
            "email": "62772518+richgillam@users.noreply.github.com",
            "name": "Rich Gillam",
            "username": "richgillam"
          },
          "distinct": true,
          "id": "8817c25c1eac3a0a1b66ac7437e24977e2b93887",
          "message": "ICU-22449 Fixed SimpleDateFormat (in C++ and Java) to correctly honor the rg and hc subtags in the locale when choosing the hour cycle.",
          "timestamp": "2023-08-28T13:30:45-04:00",
          "tree_id": "d259744fa5ac21eacdd19f424a44dc2ec95eb1d6",
          "url": "https://github.com/unicode-org/icu/commit/8817c25c1eac3a0a1b66ac7437e24977e2b93887"
        },
        "date": 1693244607956,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 37.20249947237783,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ftang@chromium.org",
            "name": "Frank Tang",
            "username": "FrankYFTang"
          },
          "committer": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "distinct": true,
          "id": "29a6ffc350c7d3a16420e4da375ddb2d618b7637",
          "message": "ICU-22365 call u_terminateChars in ULocale(Builder)?",
          "timestamp": "2023-08-28T15:35:36-07:00",
          "tree_id": "3dc109a223c722afabebf0787f9890671dfc8f9a",
          "url": "https://github.com/unicode-org/icu/commit/29a6ffc350c7d3a16420e4da375ddb2d618b7637"
        },
        "date": 1693262959556,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 39.92659504261715,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "richard_gillam@apple.com",
            "name": "Rich Gillam",
            "username": "richgillam"
          },
          "committer": {
            "email": "62772518+richgillam@users.noreply.github.com",
            "name": "Rich Gillam",
            "username": "richgillam"
          },
          "distinct": true,
          "id": "0cc2d9ed4c98ae34fc4f572f874a75e5ad298623",
          "message": "ICU-22471 Bring ICU4J PersonNameFormatter up to date\n\n- Bring in the latest version of the CLDR PersonNameFormatter test data.\n- Fix PersonNameConsistencyTest to recognize the new “givenFirst” and “surnameFirst” keywords used in the test data files.\n- Fix tokenization code in InitialModifier to use a BreakIterator.  Add unit test.\n- Add support for the “retain” modifier.  Add unit test.\n- Remove the “log known failure” logic for all of the PersonNameConsistencyTest data files that pass now.",
          "timestamp": "2023-08-29T12:54:56-04:00",
          "tree_id": "e70f6cb762bddfbb0016cf2e1e7f93bec7610c66",
          "url": "https://github.com/unicode-org/icu/commit/0cc2d9ed4c98ae34fc4f572f874a75e5ad298623"
        },
        "date": 1693328704807,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 50.68670092712576,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nmihai_2000@yahoo.com",
            "name": "Mihai Nita",
            "username": "mihnita"
          },
          "committer": {
            "email": "nmihai_2000@yahoo.com",
            "name": "Mihai Nita",
            "username": "mihnita"
          },
          "distinct": true,
          "id": "2207e2c3dfc4142fecba922c7818a36924ece782",
          "message": "ICU-22324 Exclude tools/build from jdk > 8",
          "timestamp": "2023-08-29T14:35:47-07:00",
          "tree_id": "849fc901661cf510cb8f057045c3b78ada4a5fc5",
          "url": "https://github.com/unicode-org/icu/commit/2207e2c3dfc4142fecba922c7818a36924ece782"
        },
        "date": 1693345233756,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 39.489236983361245,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ftang@chromium.org",
            "name": "Frank Tang",
            "username": "FrankYFTang"
          },
          "committer": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "distinct": true,
          "id": "02d5e7190305deae8adf71da4e10710f1bc391e7",
          "message": "ICU-22342 Implement ExternalBreakEngineAPI\n\nICU-22342 Fix comments",
          "timestamp": "2023-08-30T11:43:16-07:00",
          "tree_id": "c98cb9466a96fe03f1edd189ac38c39e53783378",
          "url": "https://github.com/unicode-org/icu/commit/02d5e7190305deae8adf71da4e10710f1bc391e7"
        },
        "date": 1693422461340,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 41.87778821999629,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ftang@chromium.org",
            "name": "Frank Tang",
            "username": "FrankYFTang"
          },
          "committer": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "distinct": true,
          "id": "35bae683a5d35b330a2f9ac5ab244db8c1d281fd",
          "message": "ICU-22475 Fix double free in Locale under OOM\n\nSee #2567",
          "timestamp": "2023-08-30T12:35:15-07:00",
          "tree_id": "2cbec7424603be004316857a509d82ae609ed9ef",
          "url": "https://github.com/unicode-org/icu/commit/35bae683a5d35b330a2f9ac5ab244db8c1d281fd"
        },
        "date": 1693426149962,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 32.83645646197882,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pnacht@google.com",
            "name": "Pedro Kaj Kjellerup Nacht",
            "username": "pnacht"
          },
          "committer": {
            "email": "elango@unicode.org",
            "name": "Elango Cheran",
            "username": "echeran"
          },
          "distinct": true,
          "id": "95f25839f4b4bd25ceb779f885b0158b8a8ab685",
          "message": "ICU-22423 Add scorecard.yml\n\nSigned-off-by: Pedro Kaj Kjellerup Nacht <pnacht@google.com>",
          "timestamp": "2023-08-30T15:11:50-07:00",
          "tree_id": "679112f772059518c90ed00309b6fbb9695c592b",
          "url": "https://github.com/unicode-org/icu/commit/95f25839f4b4bd25ceb779f885b0158b8a8ab685"
        },
        "date": 1693434208505,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 32.51634848006568,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nmihai_2000@yahoo.com",
            "name": "Mihai Nita",
            "username": "mihnita"
          },
          "committer": {
            "email": "nmihai_2000@yahoo.com",
            "name": "Mihai Nita",
            "username": "mihnita"
          },
          "distinct": true,
          "id": "d501225db2bfed4fee3049827d6e9076dae2d1ad",
          "message": "ICU-22477 Fix the performance tests after the maven folder changes",
          "timestamp": "2023-08-31T19:38:20-07:00",
          "tree_id": "5f82cab6498d273366e12d6fbe2623b6776e97d0",
          "url": "https://github.com/unicode-org/icu/commit/d501225db2bfed4fee3049827d6e9076dae2d1ad"
        },
        "date": 1693536053829,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 40.74796734047972,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ftang@chromium.org",
            "name": "Frank Tang",
            "username": "FrankYFTang"
          },
          "committer": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "distinct": true,
          "id": "869713b65fd11bf8bf3c758a4dd75bdaa8d717ca",
          "message": "ICU-22479 Improve collator_compare_fuzzer\n\nSee #2574",
          "timestamp": "2023-09-01T17:57:30-07:00",
          "tree_id": "ad70b7ad728a1fa30f0b23b60b83173862278c5c",
          "url": "https://github.com/unicode-org/icu/commit/869713b65fd11bf8bf3c758a4dd75bdaa8d717ca"
        },
        "date": 1693617031347,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 40.77208824815888,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nmihai_2000@yahoo.com",
            "name": "Mihai Nita",
            "username": "mihnita"
          },
          "committer": {
            "email": "nmihai_2000@yahoo.com",
            "name": "Mihai Nita",
            "username": "mihnita"
          },
          "distinct": true,
          "id": "5fb2a6ad06f5fbf621eb04b04687b9cf0f4986c0",
          "message": "ICU-22324 Mavenization, updating the cldr-to-icu scripts and instructions",
          "timestamp": "2023-09-05T10:24:23-07:00",
          "tree_id": "25d6e51fdc281738220c92ef5e23ab5a3491faeb",
          "url": "https://github.com/unicode-org/icu/commit/5fb2a6ad06f5fbf621eb04b04687b9cf0f4986c0"
        },
        "date": 1693935499955,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 32.12262903228992,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ftang@chromium.org",
            "name": "Frank Tang",
            "username": "FrankYFTang"
          },
          "committer": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "distinct": true,
          "id": "aa70ba6746f5a692c14a8a40ec4588669e8efdc7",
          "message": "ICU-22479 Add a new fuzzer to test more Locale methods\n\nSee #2576",
          "timestamp": "2023-09-05T12:08:39-07:00",
          "tree_id": "839c852baaaf1d9690320375c193b6dd1da95518",
          "url": "https://github.com/unicode-org/icu/commit/aa70ba6746f5a692c14a8a40ec4588669e8efdc7"
        },
        "date": 1693942739548,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 40.804527376620534,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "richard_gillam@apple.com",
            "name": "Rich Gillam",
            "username": "richgillam"
          },
          "committer": {
            "email": "62772518+richgillam@users.noreply.github.com",
            "name": "Rich Gillam",
            "username": "richgillam"
          },
          "distinct": true,
          "id": "21f74b369898a3d63e01ca4b8590ed630094e657",
          "message": "ICU-22455 Implemented algorithm in CLDR-16981 to preserve regional unit overrides when they don't conflict\nwith the ms subtag.",
          "timestamp": "2023-09-05T16:52:18-04:00",
          "tree_id": "333f5bca04f57f0df757e7b27d0d3fccc53ea99a",
          "url": "https://github.com/unicode-org/icu/commit/21f74b369898a3d63e01ca4b8590ed630094e657"
        },
        "date": 1693947785870,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 40.4693200412079,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ftang@chromium.org",
            "name": "Frank Tang",
            "username": "FrankYFTang"
          },
          "committer": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "distinct": true,
          "id": "fab5faa3aadf7617df038b372ba21106a4ab1f27",
          "message": "ICU-22479 Limit the collator_compare_fuzzer\n\nTest only first 4K bytes of data, which means compare two\nUnicodeString each with 1024 Unicodes at most.\n\nAvoid finding timeout issue due to large amount of data.",
          "timestamp": "2023-09-05T14:10:33-07:00",
          "tree_id": "3ada1f707a6526ada85c140f9dab17883849a449",
          "url": "https://github.com/unicode-org/icu/commit/fab5faa3aadf7617df038b372ba21106a4ab1f27"
        },
        "date": 1693949167248,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 32.89257058068912,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ftang@chromium.org",
            "name": "Frank Tang",
            "username": "FrankYFTang"
          },
          "committer": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "distinct": true,
          "id": "c294c3272c9cb18e35e5827cf37f9f5c6e1c8b58",
          "message": "ICU-22365 Add adoptULocale and buildULocale to ULocaleBuilder\n\nAdd two methods related to ULocale to ULocaleBuilder API\n\nvoid ulocbld_adoptULocale(ULocaleBuilder* builder, ULocale* locale);\nULocale* ulocbld_buildULocale(ULocaleBuilder* builder, UErrorCode* err);\n\nICU TC approved this in 2023-08-31",
          "timestamp": "2023-09-05T16:37:39-07:00",
          "tree_id": "f768296b9afca9c608ebcb559cea263d79e01451",
          "url": "https://github.com/unicode-org/icu/commit/c294c3272c9cb18e35e5827cf37f9f5c6e1c8b58"
        },
        "date": 1693957584496,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 49.20717745260807,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "richard_gillam@apple.com",
            "name": "Rich Gillam",
            "username": "richgillam"
          },
          "committer": {
            "email": "62772518+richgillam@users.noreply.github.com",
            "name": "Rich Gillam",
            "username": "richgillam"
          },
          "distinct": true,
          "id": "b6a4eb8a654148627a9d92d29489d509acec4675",
          "message": "ICU-22325 Promoted all @draft ICU 72 APIs to @stable ICU 72.",
          "timestamp": "2023-09-06T14:03:05-07:00",
          "tree_id": "e710f1232c1b9ebdb534790ed4fb5d4321d0daaa",
          "url": "https://github.com/unicode-org/icu/commit/b6a4eb8a654148627a9d92d29489d509acec4675"
        },
        "date": 1694034780874,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 32.53240509799821,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "richard_gillam@apple.com",
            "name": "Rich Gillam",
            "username": "richgillam"
          },
          "committer": {
            "email": "62772518+richgillam@users.noreply.github.com",
            "name": "Rich Gillam",
            "username": "richgillam"
          },
          "distinct": true,
          "id": "8c7a78f663ac9cf263055ff080c564c81a9f87e3",
          "message": "ICU-22471 Made PersonName.FieldModifier.RETAIN @internal, at least until we find we need it in the API.",
          "timestamp": "2023-09-06T14:32:14-07:00",
          "tree_id": "c4434445e44dc67e4076bd594133831b6f814dfd",
          "url": "https://github.com/unicode-org/icu/commit/8c7a78f663ac9cf263055ff080c564c81a9f87e3"
        },
        "date": 1694036841020,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 51.07488809265236,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ssb22@cam.ac.uk",
            "name": "Silas S. Brown",
            "username": "ssb22"
          },
          "committer": {
            "email": "yumaoka@users.noreply.github.com",
            "name": "Yoshito Umaoka",
            "username": "yumaoka"
          },
          "distinct": true,
          "id": "7ae7b156983474a52d99bb5c579106a99d02efb1",
          "message": "ICU-22323 update comment: it is now only two word lists, not three",
          "timestamp": "2023-09-07T21:34:25-04:00",
          "tree_id": "c7b2d23767d3ac3110c4458085fe8ebae6277611",
          "url": "https://github.com/unicode-org/icu/commit/7ae7b156983474a52d99bb5c579106a99d02efb1"
        },
        "date": 1694137170200,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 38.45236114928578,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pedberg@unicode.org",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "committer": {
            "email": "42151464+pedberg-icu@users.noreply.github.com",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "distinct": true,
          "id": "612cfbbfe424f441a6dc940632cdf55de0081d2d",
          "message": "ICU-22325 BRS 74rc update rename.h #1",
          "timestamp": "2023-09-07T22:21:55-07:00",
          "tree_id": "784b25c2e4fe7a9be928bff34bd30678f736cb20",
          "url": "https://github.com/unicode-org/icu/commit/612cfbbfe424f441a6dc940632cdf55de0081d2d"
        },
        "date": 1694151084447,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 41.05627073372511,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "richard_gillam@apple.com",
            "name": "Rich Gillam",
            "username": "richgillam"
          },
          "committer": {
            "email": "62772518+richgillam@users.noreply.github.com",
            "name": "Rich Gillam",
            "username": "richgillam"
          },
          "distinct": true,
          "id": "916452befcc002c8fa7111ee889a7002d9a9148d",
          "message": "ICU-22169 Fixed ures_getFunctionalEquivalent() to check the resource bundles' %%Parent resources when ascending\nthe parent tree.",
          "timestamp": "2023-09-11T12:58:41-07:00",
          "tree_id": "3a11a05ee832be1548b752afa833aecc65bef67a",
          "url": "https://github.com/unicode-org/icu/commit/916452befcc002c8fa7111ee889a7002d9a9148d"
        },
        "date": 1694463040657,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 39.52677063138893,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "richard_gillam@apple.com",
            "name": "Rich Gillam",
            "username": "richgillam"
          },
          "committer": {
            "email": "62772518+richgillam@users.noreply.github.com",
            "name": "Rich Gillam",
            "username": "richgillam"
          },
          "distinct": true,
          "id": "687feb1eaa9cf1dec0dbf780f37fad570c435d1a",
          "message": "ICU-22478 Fix log spew in PersonNameConsistencyTest.",
          "timestamp": "2023-09-11T13:34:31-07:00",
          "tree_id": "b1c4d92d609077b333f6b03f4df7efa4038d6f4e",
          "url": "https://github.com/unicode-org/icu/commit/687feb1eaa9cf1dec0dbf780f37fad570c435d1a"
        },
        "date": 1694465093394,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 31.567743077390887,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ftang@chromium.org",
            "name": "Frank Tang",
            "username": "FrankYFTang"
          },
          "committer": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "distinct": true,
          "id": "35645abdcb5ad7ffa9bb4fba9debff05d300c29d",
          "message": "ICU-22494 Avoid adding empty or duplicate variants during locale canoncalization.\n\nIt change the failure case (see the bug) from 35s to 0.126s on a very\nfast developement machine.",
          "timestamp": "2023-09-11T15:25:37-07:00",
          "tree_id": "31113b191914a2519e1ce4ebe4d13044158adeef",
          "url": "https://github.com/unicode-org/icu/commit/35645abdcb5ad7ffa9bb4fba9debff05d300c29d"
        },
        "date": 1694472014446,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 32.42200257977933,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ftang@chromium.org",
            "name": "Frank Tang",
            "username": "FrankYFTang"
          },
          "committer": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "distinct": true,
          "id": "68a61daa959c03f4c624d73802d98730c35ad3da",
          "message": "ICU-22497 Fix buffer-overflow READ for toLanguateTag",
          "timestamp": "2023-09-12T15:21:26-07:00",
          "tree_id": "a8f6062fcab29dc7434a37170ebc8650f83ae659",
          "url": "https://github.com/unicode-org/icu/commit/68a61daa959c03f4c624d73802d98730c35ad3da"
        },
        "date": 1694558437483,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 38.30200408029808,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ccornelius@google.com",
            "name": "Craig",
            "username": "sven-oly"
          },
          "committer": {
            "email": "cwcornelius@gmail.com",
            "name": "Craig Cornelius",
            "username": "sven-oly"
          },
          "distinct": true,
          "id": "6d178fd0026ea5c996d0621780412a16b8ee1780",
          "message": "ICU-22325 Update ICU4C API Change Reports - frontload\nChange version on uspoof.h from \"74.0\" to \"74\"",
          "timestamp": "2023-09-12T16:15:11-07:00",
          "tree_id": "66dd53b09b29df73ae462426faf623b8e61885e0",
          "url": "https://github.com/unicode-org/icu/commit/6d178fd0026ea5c996d0621780412a16b8ee1780"
        },
        "date": 1694561296800,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 50.50114072750207,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dragan@unicode.org",
            "name": "DraganBesevic",
            "username": "DraganBesevic"
          },
          "committer": {
            "email": "131725218+DraganBesevic@users.noreply.github.com",
            "name": "DraganBesevic",
            "username": "DraganBesevic"
          },
          "distinct": true,
          "id": "bb7352990e01fe6e484fe98a3edd1bdd3f3499b4",
          "message": "ICU-22325 CLDR 44 alpha2 integration to ICU part three, source files changes",
          "timestamp": "2023-09-13T11:06:53-07:00",
          "tree_id": "c693fd6e9eab9ca8c36ccd1362c5dcb8bdca4f52",
          "url": "https://github.com/unicode-org/icu/commit/bb7352990e01fe6e484fe98a3edd1bdd3f3499b4"
        },
        "date": 1694628553467,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 40.68737264614947,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ftang@chromium.org",
            "name": "Frank Tang",
            "username": "FrankYFTang"
          },
          "committer": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "distinct": true,
          "id": "9fb9bd4950091c518b76c6cbfe0120e7953f4956",
          "message": "ICU-22342 Rename fillBreak to fillBreaks",
          "timestamp": "2023-09-14T10:04:57-07:00",
          "tree_id": "3fa630db6f9c23629fb2f2d93349b7f73affe757",
          "url": "https://github.com/unicode-org/icu/commit/9fb9bd4950091c518b76c6cbfe0120e7953f4956"
        },
        "date": 1694713026028,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 40.929511296705336,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ftang@chromium.org",
            "name": "Frank Tang",
            "username": "FrankYFTang"
          },
          "committer": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "distinct": true,
          "id": "9e9bc3695fe4c1ad32d6d1d48ab878b2d5d4fde5",
          "message": "ICU-22489 Clarify the default setting of Collator\n\nSee #2595",
          "timestamp": "2023-09-14T10:05:36-07:00",
          "tree_id": "57a0436eb589fe45f13a02b60eac8dbf960a587e",
          "url": "https://github.com/unicode-org/icu/commit/9e9bc3695fe4c1ad32d6d1d48ab878b2d5d4fde5"
        },
        "date": 1694714017083,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 41.460809954352314,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "elango@unicode.org",
            "name": "Elango Cheran",
            "username": "echeran"
          },
          "committer": {
            "email": "elango@unicode.org",
            "name": "Elango Cheran",
            "username": "echeran"
          },
          "distinct": true,
          "id": "832997c57e7ad4a128447d8c90ee338d90a0faf3",
          "message": "ICU-22325 Disable tests as workaround for failures following CI changes\n\nSee #2601",
          "timestamp": "2023-09-15T09:46:23-07:00",
          "tree_id": "a48e6c696f2019b5ed215dd5f721c75b7c779ff5",
          "url": "https://github.com/unicode-org/icu/commit/832997c57e7ad4a128447d8c90ee338d90a0faf3"
        },
        "date": 1694796631206,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 32.170652789183684,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ftang@chromium.org",
            "name": "Frank Tang",
            "username": "FrankYFTang"
          },
          "committer": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "distinct": true,
          "id": "386e9a10db28af620658ca0c635e1d98915f6306",
          "message": "ICU-22504 Fix buffer overflow write error",
          "timestamp": "2023-09-15T11:01:37-07:00",
          "tree_id": "dd8900ffcfa28b0b45dcf3243ee9c3512c13efdd",
          "url": "https://github.com/unicode-org/icu/commit/386e9a10db28af620658ca0c635e1d98915f6306"
        },
        "date": 1694801486748,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 32.21116863117814,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ftang@chromium.org",
            "name": "Frank Tang",
            "username": "FrankYFTang"
          },
          "committer": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "distinct": true,
          "id": "84ae742ea01565054a4cccd7fbaed51753ecd80d",
          "message": "ICU-22479 Add fuzzer for Calendar API",
          "timestamp": "2023-09-15T11:02:55-07:00",
          "tree_id": "be03255559302f5652a521bd2017d39621a510a9",
          "url": "https://github.com/unicode-org/icu/commit/84ae742ea01565054a4cccd7fbaed51753ecd80d"
        },
        "date": 1694802702410,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 40.89948204276277,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pedberg@unicode.org",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "committer": {
            "email": "62772518+richgillam@users.noreply.github.com",
            "name": "Rich Gillam",
            "username": "richgillam"
          },
          "distinct": true,
          "id": "28572ab67eeedc6e49e15fdf7bb96e7392193e55",
          "message": "ICU-22325 CLDR release-44-alpha3 to main part 3 (ICU sources: lib, tools, tests)",
          "timestamp": "2023-09-15T14:02:20-07:00",
          "tree_id": "6e3dba62b142d0816cffd49e48861e541ef10281",
          "url": "https://github.com/unicode-org/icu/commit/28572ab67eeedc6e49e15fdf7bb96e7392193e55"
        },
        "date": 1694812437476,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 39.279001645544234,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "richard_gillam@apple.com",
            "name": "Rich Gillam",
            "username": "richgillam"
          },
          "committer": {
            "email": "62772518+richgillam@users.noreply.github.com",
            "name": "Rich Gillam",
            "username": "richgillam"
          },
          "distinct": true,
          "id": "71a483d174958a6a9102e8bef8382eae60c2f58b",
          "message": "ICU-22495 Added support for \"genitive\" and \"vocative\" field modifiers; cleaned up PersonNameConsistencyTest. Fixed\nbug in implementation of \"retain\" keyword.",
          "timestamp": "2023-09-15T15:04:01-07:00",
          "tree_id": "1409b992a87ed5b75d90eb061e19e2bf159405c0",
          "url": "https://github.com/unicode-org/icu/commit/71a483d174958a6a9102e8bef8382eae60c2f58b"
        },
        "date": 1694815602727,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 40.58053062702892,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "richard_gillam@apple.com",
            "name": "Rich Gillam",
            "username": "richgillam"
          },
          "committer": {
            "email": "62772518+richgillam@users.noreply.github.com",
            "name": "Rich Gillam",
            "username": "richgillam"
          },
          "distinct": true,
          "id": "14ca2b0e6da14ef45aadf5067deb562fc6c70a52",
          "message": "ICU-22313 Various fixes for duration formatting:\n- Changed the C++ and Java interfaces to that the URBNF_DURATION ruleset is marked deprecated.\n- Fixed a bug in RuleBasedNumberFormat in both Java and C++ that caused the existing duration-formatting rules to produce bogus results when used on a non-integral value.\n\n(Earlier versions of this PR added code to use a MeasureFormat under the covers when a caller used\nunum_open(UNUM_DURATION).  I took that out because of backward compatibility concerns, so we're still using RBNF\nin the C API.  I'm hoping to add a \"real\" duration formatter in ICU 75.)",
          "timestamp": "2023-09-15T16:27:58-07:00",
          "tree_id": "49d55842d905b80745e303e46f0edca62c774223",
          "url": "https://github.com/unicode-org/icu/commit/14ca2b0e6da14ef45aadf5067deb562fc6c70a52"
        },
        "date": 1694821428788,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 32.150856532198866,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ftang@chromium.org",
            "name": "Frank Tang",
            "username": "FrankYFTang"
          },
          "committer": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "distinct": true,
          "id": "d082de574ff13873123c55212ad20cf258ffb283",
          "message": "ICU-22479 Add Fuzzer for DateFormat",
          "timestamp": "2023-09-15T17:47:17-07:00",
          "tree_id": "7c0cf52cd0941fb7b95d52c57bcbf88b98b19c5f",
          "url": "https://github.com/unicode-org/icu/commit/d082de574ff13873123c55212ad20cf258ffb283"
        },
        "date": 1694827732154,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 32.09718270484412,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "committer": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "distinct": true,
          "id": "d8659b476d4703b18bb9ea040798c1e62ff3329e",
          "message": "ICU-22404 new properties IDS_Unary_Operator, ID_Compat_Math_*, NFKC_SCF",
          "timestamp": "2023-09-16T14:41:51-07:00",
          "tree_id": "56f8034d279d1b6ce890ccbb147a36bc1ecb9bc8",
          "url": "https://github.com/unicode-org/icu/commit/d8659b476d4703b18bb9ea040798c1e62ff3329e"
        },
        "date": 1694901361662,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 32.1101845064514,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ftang@chromium.org",
            "name": "Frank Tang",
            "username": "FrankYFTang"
          },
          "committer": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "distinct": true,
          "id": "f3b869cbb0b9ced42d7ca4e24626a868a14ddcfc",
          "message": "ICU-22512 Fix broken TestHebrewCalendarInTemporalLeapYear\n\nFix broken test mistakenly landed in\nhttps://github.com/unicode-org/icu/pull/2274\n\nSome important steps were missed in the last landing.",
          "timestamp": "2023-09-19T09:47:03-07:00",
          "tree_id": "afc0a65feefd9db03da5d6f6d355803f8e103d54",
          "url": "https://github.com/unicode-org/icu/commit/f3b869cbb0b9ced42d7ca4e24626a868a14ddcfc"
        },
        "date": 1695142825300,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 32.86437983590073,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ftang@chromium.org",
            "name": "Frank Tang",
            "username": "FrankYFTang"
          },
          "committer": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "distinct": true,
          "id": "6df1babae26f363d3140af7c50a9956e8f80a12c",
          "message": "ICU-22479 Add Fuzzer for ListFormat",
          "timestamp": "2023-09-19T15:52:42-07:00",
          "tree_id": "6a18cb16063677dbf64588f91737bd90c4bde94a",
          "url": "https://github.com/unicode-org/icu/commit/6df1babae26f363d3140af7c50a9956e8f80a12c"
        },
        "date": 1695164808504,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 45.53658095298245,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ftang@chromium.org",
            "name": "Frank Tang",
            "username": "FrankYFTang"
          },
          "committer": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "distinct": true,
          "id": "990779c4bf935d2741ef6514f4d070231c388d05",
          "message": "ICU-22509 Limit the dateStyle and timeStyle in fuzzer to only valid enum",
          "timestamp": "2023-09-19T15:54:04-07:00",
          "tree_id": "e95a6e47e94ba513f1f90645a8b2da0058d6d92a",
          "url": "https://github.com/unicode-org/icu/commit/990779c4bf935d2741ef6514f4d070231c388d05"
        },
        "date": 1695165806155,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 32.436894489189754,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ftang@chromium.org",
            "name": "Frank Tang",
            "username": "FrankYFTang"
          },
          "committer": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "distinct": true,
          "id": "c4a596e18e008139e3be91043247ab8d01bd6b58",
          "message": "ICU-22508 Reject NaN as input to Calendar::setTime\n\nFix DateFormat::format issue",
          "timestamp": "2023-09-19T15:55:02-07:00",
          "tree_id": "68c6ded527d29408fb82ffc68617dc45f1bf3170",
          "url": "https://github.com/unicode-org/icu/commit/c4a596e18e008139e3be91043247ab8d01bd6b58"
        },
        "date": 1695166790387,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 45.68133981716123,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "yumaoka@users.noreply.github.com",
            "name": "Yoshito Umaoka",
            "username": "yumaoka"
          },
          "committer": {
            "email": "yumaoka@users.noreply.github.com",
            "name": "Yoshito Umaoka",
            "username": "yumaoka"
          },
          "distinct": true,
          "id": "2f7090256abe90d58c8d7c7f9533ea52f25bbe1a",
          "message": "ICU-22502 Fix TestPersonNames failure on Windows",
          "timestamp": "2023-09-19T22:54:46-04:00",
          "tree_id": "15a6d3465f64a16f847b39d688ee9da85aa9cbfd",
          "url": "https://github.com/unicode-org/icu/commit/2f7090256abe90d58c8d7c7f9533ea52f25bbe1a"
        },
        "date": 1695179234128,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 40.80469756623434,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nmihai_2000@yahoo.com",
            "name": "Mihai Nita",
            "username": "mihnita"
          },
          "committer": {
            "email": "nmihai_2000@yahoo.com",
            "name": "Mihai Nita",
            "username": "mihnita"
          },
          "distinct": true,
          "id": "9be9ed3231f6cf79190128af6eee6dfc2e6b573c",
          "message": "ICU-22324 Mavenization, resolve some of the release tasks",
          "timestamp": "2023-09-20T10:27:12-07:00",
          "tree_id": "e38d8cf616c6007928b0021a3c414811f441cee8",
          "url": "https://github.com/unicode-org/icu/commit/9be9ed3231f6cf79190128af6eee6dfc2e6b573c"
        },
        "date": 1695231996933,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 47.61995494201023,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "elango@unicode.org",
            "name": "Elango Cheran",
            "username": "echeran"
          },
          "committer": {
            "email": "elango@unicode.org",
            "name": "Elango Cheran",
            "username": "echeran"
          },
          "distinct": true,
          "id": "f4227f5d544e9fe4b9883639f1915399f9c7c9df",
          "message": "ICU-22324 Include all unit tests, move tests needing multiple components",
          "timestamp": "2023-09-20T10:51:19-07:00",
          "tree_id": "3ce41cc9aa236f66cebe0e042da34ef11dfd4745",
          "url": "https://github.com/unicode-org/icu/commit/f4227f5d544e9fe4b9883639f1915399f9c7c9df"
        },
        "date": 1695233982700,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 47.604010804069404,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ftang@chromium.org",
            "name": "Frank Tang",
            "username": "FrankYFTang"
          },
          "committer": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "distinct": true,
          "id": "87d606c39ac1d89c380bce6cce568fa14011a7d1",
          "message": "ICU-22509 Fix the RelativeDateFormat to reject unsupported dateStyle",
          "timestamp": "2023-09-20T12:02:57-07:00",
          "tree_id": "0952a4a3bbad09ab9868af1f8ef8bb40ed4242c6",
          "url": "https://github.com/unicode-org/icu/commit/87d606c39ac1d89c380bce6cce568fa14011a7d1"
        },
        "date": 1695239242033,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 40.96527858335236,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "richard_gillam@apple.com",
            "name": "Rich Gillam",
            "username": "richgillam"
          },
          "committer": {
            "email": "62772518+richgillam@users.noreply.github.com",
            "name": "Rich Gillam",
            "username": "richgillam"
          },
          "distinct": true,
          "id": "2ca7c49662cfa0455c211f310998302a2e0d64d9",
          "message": "ICU-22464 Fix Java DateFormatSymbols to copy abbreviated day period names to the other sizes when appropriate.",
          "timestamp": "2023-09-20T13:46:00-07:00",
          "tree_id": "4a794fa8d1c86e664b4256c938f9df1d394bb9a2",
          "url": "https://github.com/unicode-org/icu/commit/2ca7c49662cfa0455c211f310998302a2e0d64d9"
        },
        "date": 1695243599190,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 32.102065724104,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ftang@chromium.org",
            "name": "Frank Tang",
            "username": "FrankYFTang"
          },
          "committer": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "distinct": true,
          "id": "6a42197331c23ed7e09d040f6deaa7c352c02cca",
          "message": "ICU-22510 Fix Calendar::set to check the field is valid.",
          "timestamp": "2023-09-20T13:50:56-07:00",
          "tree_id": "d9e1f7b63caf181062360853a456a6662a56a0c6",
          "url": "https://github.com/unicode-org/icu/commit/6a42197331c23ed7e09d040f6deaa7c352c02cca"
        },
        "date": 1695245647061,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 47.298176932946355,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "62772518+richgillam@users.noreply.github.com",
            "name": "Rich Gillam",
            "username": "richgillam"
          },
          "committer": {
            "email": "62772518+richgillam@users.noreply.github.com",
            "name": "Rich Gillam",
            "username": "richgillam"
          },
          "distinct": true,
          "id": "1b980e5999f53ac562775f22a6f5072170072c43",
          "message": "ICU-21877 Fixed it so that getAllChildrenWithFallback() correctly calls its sink with every possible resource the\none the user requested might be inheriting elements from.",
          "timestamp": "2023-09-20T14:09:21-07:00",
          "tree_id": "c3a2af18a4835b7385aa1983941221737bf89239",
          "url": "https://github.com/unicode-org/icu/commit/1b980e5999f53ac562775f22a6f5072170072c43"
        },
        "date": 1695246889533,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 42.00067645634676,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ftang@chromium.org",
            "name": "Frank Tang",
            "username": "FrankYFTang"
          },
          "committer": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "distinct": true,
          "id": "4fcf8d22b9e547a8ca115742c50e880440f599ba",
          "message": "ICU-22507 Fix stack overflow in ChineseCalendar::isLeapMonthBetween\n\nRewrite the recursive call to while loop to avoid stack overflow\nwhen the two values have big gap.\nInclude tests to verify the problem in unit test.",
          "timestamp": "2023-09-20T23:56:15-07:00",
          "tree_id": "dc89729b42b8289f8b2b694145f0424471f1b300",
          "url": "https://github.com/unicode-org/icu/commit/4fcf8d22b9e547a8ca115742c50e880440f599ba"
        },
        "date": 1695279594215,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 31.55719570338472,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "elango@unicode.org",
            "name": "Elango Cheran",
            "username": "echeran"
          },
          "committer": {
            "email": "elango@unicode.org",
            "name": "Elango Cheran",
            "username": "echeran"
          },
          "distinct": true,
          "id": "f14b24a845f7ff36519bdee5f64181f7ee389091",
          "message": "ICU-22324 Allow single Maven cache creation and multiple read-only usage",
          "timestamp": "2023-09-21T08:39:05-07:00",
          "tree_id": "d7e6f90de38a03010299d5dc678ac5f161bfb68a",
          "url": "https://github.com/unicode-org/icu/commit/f14b24a845f7ff36519bdee5f64181f7ee389091"
        },
        "date": 1695311495372,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 44.65077535181772,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ccornelius@google.com",
            "name": "Craig",
            "username": "sven-oly"
          },
          "committer": {
            "email": "cwcornelius@gmail.com",
            "name": "Craig Cornelius",
            "username": "sven-oly"
          },
          "distinct": true,
          "id": "263db44a3ae848a7364d3fefc6af0b6b0827ba9f",
          "message": "ICU-22325 BRS#19 ICU4J 74 Status and Change Report\nChange FormattedNumber.getNounClass to @stable ICU 72",
          "timestamp": "2023-09-21T13:21:20-07:00",
          "tree_id": "4aab45e6a43d3dd241c5435cfb9272f534ced3d6",
          "url": "https://github.com/unicode-org/icu/commit/263db44a3ae848a7364d3fefc6af0b6b0827ba9f"
        },
        "date": 1695328393884,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 49.988952686600285,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ftang@chromium.org",
            "name": "Frank Tang",
            "username": "FrankYFTang"
          },
          "committer": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "distinct": true,
          "id": "77bc51e03e6de0a92ef063da85903ddadce97043",
          "message": "ICU-22479 Add fuzzer for RelativeTimeFormatFuzzer\n\nAnd also fix a bug by checking the unit",
          "timestamp": "2023-09-21T14:50:35-07:00",
          "tree_id": "fe32fa4aa78adcf2f9f1fd708a09f787b6098b61",
          "url": "https://github.com/unicode-org/icu/commit/77bc51e03e6de0a92ef063da85903ddadce97043"
        },
        "date": 1695334236242,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 41.39204932552405,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ccornelius@google.com",
            "name": "Craig",
            "username": "sven-oly"
          },
          "committer": {
            "email": "cwcornelius@gmail.com",
            "name": "Craig Cornelius",
            "username": "sven-oly"
          },
          "distinct": true,
          "id": "c3544278cbecdc561d926cb0bd6b3a3cfa28a61d",
          "message": "ICU-22325 BRS#13: urename.h",
          "timestamp": "2023-09-21T16:45:25-07:00",
          "tree_id": "cccde14430d2efeeb80421467a496cb712145417",
          "url": "https://github.com/unicode-org/icu/commit/c3544278cbecdc561d926cb0bd6b3a3cfa28a61d"
        },
        "date": 1695345660082,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 40.79842017724706,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mnita@google.com",
            "name": "Mihai Nita",
            "username": "mihnita"
          },
          "committer": {
            "email": "nmihai_2000@yahoo.com",
            "name": "Mihai Nita",
            "username": "mihnita"
          },
          "distinct": true,
          "id": "501fe1b74a6027709cb72e6b58fba189db541fd6",
          "message": "ICU-22324 Mavenization, preparing for maven central deployment",
          "timestamp": "2023-09-21T18:21:06-07:00",
          "tree_id": "b1e35c68e2dc4f7cab75f20b41f2c38a0f4edd8b",
          "url": "https://github.com/unicode-org/icu/commit/501fe1b74a6027709cb72e6b58fba189db541fd6"
        },
        "date": 1695347193246,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 49.6389865788771,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ftang@chromium.org",
            "name": "Frank Tang",
            "username": "FrankYFTang"
          },
          "committer": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "distinct": true,
          "id": "cdcea0c3787dcb47fbc6741221145712ffeb07ac",
          "message": "ICU-22479 Enahnce the fuzzer for ListFormatter\n\nAdd the testing for invalid type and width.\nAlso test formatStringsToValue",
          "timestamp": "2023-09-21T21:21:21-07:00",
          "tree_id": "f82d15eeec7a049a784c41dbc07ecda670564efb",
          "url": "https://github.com/unicode-org/icu/commit/cdcea0c3787dcb47fbc6741221145712ffeb07ac"
        },
        "date": 1695357611668,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 39.73692308687508,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "roubert@google.com",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "committer": {
            "email": "fredrik@roubert.name",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "distinct": true,
          "id": "6e0468d3bfa2f6b795eee09e286bf3cf2193495e",
          "message": "ICU-22498 Write directly to sink (instead of into legacy buffers).",
          "timestamp": "2023-09-22T15:01:42+02:00",
          "tree_id": "e874aa4d7f505738a032ce26bc22e7ec74caa328",
          "url": "https://github.com/unicode-org/icu/commit/6e0468d3bfa2f6b795eee09e286bf3cf2193495e"
        },
        "date": 1695388501198,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 32.962143196568555,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nmihai_2000@yahoo.com",
            "name": "Mihai Nita",
            "username": "mihnita"
          },
          "committer": {
            "email": "nmihai_2000@yahoo.com",
            "name": "Mihai Nita",
            "username": "mihnita"
          },
          "distinct": true,
          "id": "8c4af504a0b36a21d098bc2dc3880c39c549c3db",
          "message": "ICU-22324 Mavenization, minimize the places that need a version",
          "timestamp": "2023-09-22T13:08:25-07:00",
          "tree_id": "65ca19624039aae16f103c2f2fa8ecc1e7a12617",
          "url": "https://github.com/unicode-org/icu/commit/8c4af504a0b36a21d098bc2dc3880c39c549c3db"
        },
        "date": 1695414320230,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 40.885589056261765,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "younies.mahmoud@gmail.com",
            "name": "Younies Mahmoud",
            "username": "younies"
          },
          "committer": {
            "email": "younies.mahmoud@gmail.com",
            "name": "Younies Mahmoud",
            "username": "younies"
          },
          "distinct": true,
          "id": "c4689841c001a0b98e5b59adaab34656bd2a998f",
          "message": "ICU-22463 Fix the conversion from gasoline-equivalent units to kilograms-per-meter-squared-per-second\n\nSee #2616",
          "timestamp": "2023-09-23T06:48:25+02:00",
          "tree_id": "336d1d0d2a8eb26799aff8af2dd936b63e5ae43d",
          "url": "https://github.com/unicode-org/icu/commit/c4689841c001a0b98e5b59adaab34656bd2a998f"
        },
        "date": 1695445349027,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 32.027945258177354,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "roubert@google.com",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "committer": {
            "email": "fredrik@roubert.name",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "distinct": true,
          "id": "6d1999fbb9fd8dbca901b692cda6acb147982673",
          "message": "ICU-21289 Switch to using CharString for calling uloc_getKeywordValue().",
          "timestamp": "2023-09-25T19:02:41+02:00",
          "tree_id": "0f4fa991e436494e54f2ee7cfa1a8f347f15d8c1",
          "url": "https://github.com/unicode-org/icu/commit/6d1999fbb9fd8dbca901b692cda6acb147982673"
        },
        "date": 1695662282367,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 38.054935235985624,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ftang@chromium.org",
            "name": "Frank Tang",
            "username": "FrankYFTang"
          },
          "committer": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "distinct": true,
          "id": "c1475f4bbdf230bd2ed277ad97d667869291e58b",
          "message": "ICU-22516 Return error while the style is invalid\n\nTo avoid later unknown address in icu_74::UnicodeString::copyFrom",
          "timestamp": "2023-09-25T15:43:49-07:00",
          "tree_id": "0e1409de3b8bbf02ada2ac7210546d7a42cf04f8",
          "url": "https://github.com/unicode-org/icu/commit/c1475f4bbdf230bd2ed277ad97d667869291e58b"
        },
        "date": 1695682646243,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 45.73047131982243,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "roubert@google.com",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "committer": {
            "email": "fredrik@roubert.name",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "distinct": true,
          "id": "2df1ab724040dc9cb25a4df7f0244cfe79ffef62",
          "message": "ICU-21289 Switch to using CharString for calling uloc_canonicalize().",
          "timestamp": "2023-09-26T00:52:13+02:00",
          "tree_id": "829501061a49bd823f23b5b1b63e368989891653",
          "url": "https://github.com/unicode-org/icu/commit/2df1ab724040dc9cb25a4df7f0244cfe79ffef62"
        },
        "date": 1695684491832,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 43.230314331321914,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "roubert@google.com",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "committer": {
            "email": "fredrik@roubert.name",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "distinct": true,
          "id": "9bce52f003496527b2e37e31ae08521cd35212ac",
          "message": "ICU-21289 Switch to using CharString for calling uloc_toLanguageTag().",
          "timestamp": "2023-09-26T13:26:11+02:00",
          "tree_id": "6946ee770cbe8066d20610ca6cbfa72cf94cab1d",
          "url": "https://github.com/unicode-org/icu/commit/9bce52f003496527b2e37e31ae08521cd35212ac"
        },
        "date": 1695728648262,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 40.96917277247593,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "elango@unicode.org",
            "name": "Elango Cheran",
            "username": "echeran"
          },
          "committer": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "distinct": true,
          "id": "99026f01cc79bdd25f2ed7e5dabd44ce6026e427",
          "message": "ICU-22325 BRS74RC: Update version number to 74.1\n\nSee #2613",
          "timestamp": "2023-09-26T08:21:21-07:00",
          "tree_id": "92ade653ecaf31bab4eda9eac23f2699a7ae2fc9",
          "url": "https://github.com/unicode-org/icu/commit/99026f01cc79bdd25f2ed7e5dabd44ce6026e427"
        },
        "date": 1695742306543,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 32.11948213313058,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "roubert@google.com",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "committer": {
            "email": "fredrik@roubert.name",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "distinct": true,
          "id": "96dcaf7da81f0676519946f601117b9825ba0d06",
          "message": "ICU-21289 Switch to using CharString for calling uloc_forLanguageTag().",
          "timestamp": "2023-09-26T17:52:51+02:00",
          "tree_id": "ddccfb24540afd8a7df5ae389869d3c89d75546a",
          "url": "https://github.com/unicode-org/icu/commit/96dcaf7da81f0676519946f601117b9825ba0d06"
        },
        "date": 1695744461258,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 47.241704150193705,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "roubert@google.com",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "committer": {
            "email": "fredrik@roubert.name",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "distinct": true,
          "id": "037449fff8db873afdd2e3c6ed5d24db604ffe64",
          "message": "ICU-21289 Switch to using CharString for calling uloc_getParent().",
          "timestamp": "2023-09-26T23:41:24+02:00",
          "tree_id": "dae404fab21a5ef1a9671ff79ca87baaea872d16",
          "url": "https://github.com/unicode-org/icu/commit/037449fff8db873afdd2e3c6ed5d24db604ffe64"
        },
        "date": 1695765211885,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 47.840585462178716,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nmihai_2000@yahoo.com",
            "name": "Mihai Nita",
            "username": "mihnita"
          },
          "committer": {
            "email": "nmihai_2000@yahoo.com",
            "name": "Mihai Nita",
            "username": "mihnita"
          },
          "distinct": true,
          "id": "87fe057838515e660be4cbdf5b735d5ecdd4c4e1",
          "message": "ICU-22324 Mavenization, add -SNAPSHOT back to the maven version",
          "timestamp": "2023-09-27T06:46:31-07:00",
          "tree_id": "50a88d129978e323dcef0ba35a1ef7eba23022b2",
          "url": "https://github.com/unicode-org/icu/commit/87fe057838515e660be4cbdf5b735d5ecdd4c4e1"
        },
        "date": 1695823193759,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 40.65702322863753,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "committer": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "distinct": true,
          "id": "c670bbd5b099da2e24acb04a0a57704e158b5f96",
          "message": "ICU-22420 GB18030 change 3 mappings for GBK/web compat",
          "timestamp": "2023-09-27T08:37:24-07:00",
          "tree_id": "dba05c65b2bd66fb02b4011fc2ecb084c4bb7e52",
          "url": "https://github.com/unicode-org/icu/commit/c670bbd5b099da2e24acb04a0a57704e158b5f96"
        },
        "date": 1695829916532,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 40.89254287888228,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mnita@google.com",
            "name": "Mihai Nita",
            "username": "mihnita"
          },
          "committer": {
            "email": "nmihai_2000@yahoo.com",
            "name": "Mihai Nita",
            "username": "mihnita"
          },
          "distinct": true,
          "id": "7a0373411ea44e682565f91c6dfd1aa00135b6c0",
          "message": "ICU-22324 Mavenization, building the CLDR utilities",
          "timestamp": "2023-09-27T11:01:06-07:00",
          "tree_id": "00c765052b5dc1249d0645baa37e7b3b9c8ea8df",
          "url": "https://github.com/unicode-org/icu/commit/7a0373411ea44e682565f91c6dfd1aa00135b6c0"
        },
        "date": 1695838506652,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 39.04325312450984,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mnita@google.com",
            "name": "Mihai Nita",
            "username": "mihnita"
          },
          "committer": {
            "email": "nmihai_2000@yahoo.com",
            "name": "Mihai Nita",
            "username": "mihnita"
          },
          "distinct": true,
          "id": "aa377d7366231b244a0b6288be5378bef8280dbe",
          "message": "ICU-22324 Mavenization, script to generate serial test data",
          "timestamp": "2023-09-27T16:11:39-07:00",
          "tree_id": "76652cec81f6d2fce31258130f4f67a10400ccce",
          "url": "https://github.com/unicode-org/icu/commit/aa377d7366231b244a0b6288be5378bef8280dbe"
        },
        "date": 1695858162436,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 37.35881853798947,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "egg.robin.leroy@gmail.com",
            "name": "Robin Leroy",
            "username": "eggrobin"
          },
          "committer": {
            "email": "egg.robin.leroy@gmail.com",
            "name": "Robin Leroy",
            "username": "eggrobin"
          },
          "distinct": true,
          "id": "9ed8532d2dd25afd15841a80aac010a6c3d0638e",
          "message": "ICU-22332 document advanced usage of bidi confusability\n\nCo-authored-by: Markus Scherer <markus.icu@gmail.com>",
          "timestamp": "2023-09-28T02:22:05+02:00",
          "tree_id": "4c87988086e4b6959a97f1346437736843dd2da9",
          "url": "https://github.com/unicode-org/icu/commit/9ed8532d2dd25afd15841a80aac010a6c3d0638e"
        },
        "date": 1695861424203,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 44.62948553643764,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "committer": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "distinct": true,
          "id": "bfbf578f1c83fbda60d68ef2739f381ad6c61866",
          "message": "ICU-22325 docmain ICU 74 new C services",
          "timestamp": "2023-09-27T17:55:37-07:00",
          "tree_id": "b17718641046e4a76a94c8410ac51a2ec632ac4d",
          "url": "https://github.com/unicode-org/icu/commit/bfbf578f1c83fbda60d68ef2739f381ad6c61866"
        },
        "date": 1695863281106,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 44.592153852828766,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shane@unicode.org",
            "name": "Shane F. Carr",
            "username": "sffc"
          },
          "committer": {
            "email": "shane@unicode.org",
            "name": "Shane F. Carr",
            "username": "sffc"
          },
          "distinct": true,
          "id": "acfe1c299b010026b98f315eb3960f19086590c1",
          "message": "ICU-22325 Update double-conversion to v3.3.0",
          "timestamp": "2023-09-28T14:31:16+02:00",
          "tree_id": "333ec8533860e613066e4a98f8bbd5116376dd53",
          "url": "https://github.com/unicode-org/icu/commit/acfe1c299b010026b98f315eb3960f19086590c1"
        },
        "date": 1695905303304,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 39.1798778244673,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ftang@chromium.org",
            "name": "Frank Tang",
            "username": "FrankYFTang"
          },
          "committer": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "distinct": true,
          "id": "07137b64e454dfda7ab0c46eaaa55d6bfc29e399",
          "message": "ICU-22521 Return U_INTERNAL_PROGRAM_ERROR instead of % 0\n\nWhen the gap is 0, return status as U_INTERNAL_PROGRAM_ERROR\nand avoid the operation of \"% gap\"",
          "timestamp": "2023-09-28T14:23:07-07:00",
          "tree_id": "b5dfc3acc475ba088d23eb5f55b3be8500c8ae92",
          "url": "https://github.com/unicode-org/icu/commit/07137b64e454dfda7ab0c46eaaa55d6bfc29e399"
        },
        "date": 1695936994746,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 39.093174291925465,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mnita@google.com",
            "name": "Mihai Nita",
            "username": "mihnita"
          },
          "committer": {
            "email": "42151464+pedberg-icu@users.noreply.github.com",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "distinct": true,
          "id": "76b9e089be35dbcbd374111ad9eadccd0d8907bb",
          "message": "ICU-22324 Mavenization, publish the root pom to Maven",
          "timestamp": "2023-09-28T17:32:30-07:00",
          "tree_id": "589208cb6a7823818d2f3a1816b1242246266144",
          "url": "https://github.com/unicode-org/icu/commit/76b9e089be35dbcbd374111ad9eadccd0d8907bb"
        },
        "date": 1695948353174,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 40.61315433589163,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dragan@unicode.org",
            "name": "DraganBesevic",
            "username": "DraganBesevic"
          },
          "committer": {
            "email": "131725218+DraganBesevic@users.noreply.github.com",
            "name": "DraganBesevic",
            "username": "DraganBesevic"
          },
          "distinct": true,
          "id": "38643e14e50a1f0679ea7de8e863b8b7f64d0354",
          "message": "ICU-22325 CLDR 44 beta1 integration to ICU part two, source files generated or copied from CLDR",
          "timestamp": "2023-09-29T20:29:49-07:00",
          "tree_id": "956f9614a307d72908fe603565e2060626d806e4",
          "url": "https://github.com/unicode-org/icu/commit/38643e14e50a1f0679ea7de8e863b8b7f64d0354"
        },
        "date": 1696045318348,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 40.87393411677222,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "atnbueno@gmail.com",
            "name": "Antonio Bueno",
            "username": "atnbueno"
          },
          "committer": {
            "email": "elango@unicode.org",
            "name": "Elango Cheran",
            "username": "echeran"
          },
          "distinct": true,
          "id": "f24e0a0ff36ae214415898917f17290bd4211c38",
          "message": "ICU-22323 Describe date field symbol `ee` as `02`, not `2`\n\nSee #2636",
          "timestamp": "2023-10-02T12:29:59-07:00",
          "tree_id": "d4e8e4129146536afb4b188917f54aecc86e97f9",
          "url": "https://github.com/unicode-org/icu/commit/f24e0a0ff36ae214415898917f17290bd4211c38"
        },
        "date": 1696275851562,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 38.93529949361045,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "yumaoka@users.noreply.github.com",
            "name": "Yoshito Umaoka",
            "username": "yumaoka"
          },
          "committer": {
            "email": "yumaoka@users.noreply.github.com",
            "name": "Yoshito Umaoka",
            "username": "yumaoka"
          },
          "distinct": true,
          "id": "3446660d27d71490999872271e60d06854747d60",
          "message": "ICU-22325 BRS74 Clean up import statements",
          "timestamp": "2023-10-02T17:22:26-04:00",
          "tree_id": "4d5745100d0a7c74083a9cfe1a3e408ce3f57f3c",
          "url": "https://github.com/unicode-org/icu/commit/3446660d27d71490999872271e60d06854747d60"
        },
        "date": 1696283945085,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 38.553516826453915,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ccornelius@google.com",
            "name": "Craig Cornelius",
            "username": "sven-oly"
          },
          "committer": {
            "email": "cwcornelius@gmail.com",
            "name": "Craig Cornelius",
            "username": "sven-oly"
          },
          "distinct": true,
          "id": "e73d9736c9cd9fb3a7ab45b3a51a98dec3d6b5bc",
          "message": "ICU-22325 Update docs.md to change `ant` commands to new scripts",
          "timestamp": "2023-10-02T16:04:02-07:00",
          "tree_id": "eed108fd5609a081e068ce26859ed797dba28b6b",
          "url": "https://github.com/unicode-org/icu/commit/e73d9736c9cd9fb3a7ab45b3a51a98dec3d6b5bc"
        },
        "date": 1696289031400,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 40.35778443878461,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "committer": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "distinct": true,
          "id": "f6d09d514dbe09366265dbc5381a7e2eddb577c6",
          "message": "ICU-22527 add Measure::operator!=()",
          "timestamp": "2023-10-02T17:03:28-07:00",
          "tree_id": "866a0b99be396c014ff865082ffa6b129da2c3bb",
          "url": "https://github.com/unicode-org/icu/commit/f6d09d514dbe09366265dbc5381a7e2eddb577c6"
        },
        "date": 1696293136505,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 39.15817957221488,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ftang@chromium.org",
            "name": "Frank Tang",
            "username": "FrankYFTang"
          },
          "committer": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "distinct": true,
          "id": "05b0e7abaf1e46c7d66c46ee997a0bf9eff7e36a",
          "message": "ICU-22517 Limit the closure expansion loop and return error\n\nTo avoid very slow return from the constructor, we return\nerror while the Collation rule expand too big.\nAdd a soft limit to limit to the number of loop needed for 8 Hanguls\n  Necessary number of loop: H(0)=0; H(i)=3H(i-1)+2.\n  Where i is the length of Hangul in the rule.\n  H(1) = 2, H(2) = 8, H(3)=26, H(4)=80, H(5) = 242 ...",
          "timestamp": "2023-10-02T19:06:38-07:00",
          "tree_id": "da708510595a1a6f0cc9512e6b55e6fc23011f8b",
          "url": "https://github.com/unicode-org/icu/commit/05b0e7abaf1e46c7d66c46ee997a0bf9eff7e36a"
        },
        "date": 1696299545497,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 48.61817822823382,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ccornelius@google.com",
            "name": "Craig",
            "username": "sven-oly"
          },
          "committer": {
            "email": "cwcornelius@gmail.com",
            "name": "Craig Cornelius",
            "username": "sven-oly"
          },
          "distinct": true,
          "id": "dff59b61f9e0fc240add56e5ededc446ea7cb8b9",
          "message": "ICU-22325 ICU4C update APIChangeReport 73 -> 74",
          "timestamp": "2023-10-03T07:21:20-07:00",
          "tree_id": "428750079b7680e284db954289a7c99acc73ff84",
          "url": "https://github.com/unicode-org/icu/commit/dff59b61f9e0fc240add56e5ededc446ea7cb8b9"
        },
        "date": 1696344156303,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 32.943665334085985,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pedberg@unicode.org",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "committer": {
            "email": "42151464+pedberg-icu@users.noreply.github.com",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "distinct": true,
          "id": "e1af930c6ad54100767c21a883f88f529336c4ad",
          "message": "ICU-22325 BRS 74rc move cldr testdata to consistent place, adjust test & tools to match",
          "timestamp": "2023-10-03T10:24:27-07:00",
          "tree_id": "8831e6e445ed11d32938335e76c577dafbd6999b",
          "url": "https://github.com/unicode-org/icu/commit/e1af930c6ad54100767c21a883f88f529336c4ad"
        },
        "date": 1696354657175,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 38.988342931357494,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nmihai_2000@yahoo.com",
            "name": "Mihai Nita",
            "username": "mihnita"
          },
          "committer": {
            "email": "nmihai_2000@yahoo.com",
            "name": "Mihai Nita",
            "username": "mihnita"
          },
          "distinct": true,
          "id": "e6f7ef7ef41882ae87d4608b3c5e27fefb5d2a8f",
          "message": "ICU-22324 Mavenization, remove maven proof of concept and ant script",
          "timestamp": "2023-10-03T10:58:25-07:00",
          "tree_id": "0da6bd5e956eaed17379ad557f0078abe3ed776f",
          "url": "https://github.com/unicode-org/icu/commit/e6f7ef7ef41882ae87d4608b3c5e27fefb5d2a8f"
        },
        "date": 1696356680567,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 38.900210771221374,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "yumaoka@users.noreply.github.com",
            "name": "Yoshito Umaoka",
            "username": "yumaoka"
          },
          "committer": {
            "email": "yumaoka@users.noreply.github.com",
            "name": "Yoshito Umaoka",
            "username": "yumaoka"
          },
          "distinct": true,
          "id": "3cc4e1aac692f3c23c4e06c62c2a9c7102e4dafb",
          "message": "ICU-22325 BRS74 Updating ICU4J serialization test data",
          "timestamp": "2023-10-03T15:20:03-04:00",
          "tree_id": "f47598b1ff9adb8fbf0696284f910fef9d3b1b3a",
          "url": "https://github.com/unicode-org/icu/commit/3cc4e1aac692f3c23c4e06c62c2a9c7102e4dafb"
        },
        "date": 1696361697238,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 38.160430728103954,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nmihai_2000@yahoo.com",
            "name": "Mihai Nita",
            "username": "mihnita"
          },
          "committer": {
            "email": "nmihai_2000@yahoo.com",
            "name": "Mihai Nita",
            "username": "mihnita"
          },
          "distinct": true,
          "id": "e09adbf05a136cc2e59159300d74e0ec81401e41",
          "message": "ICU-22324 Mavenization: removed license links (error on Windows)\n\nSee #2652",
          "timestamp": "2023-10-03T12:47:48-07:00",
          "tree_id": "5a0d192b434f566dfd30a84be0f7faead76e146a",
          "url": "https://github.com/unicode-org/icu/commit/e09adbf05a136cc2e59159300d74e0ec81401e41"
        },
        "date": 1696364156062,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 34.504362259108554,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shane@unicode.org",
            "name": "Shane F. Carr",
            "username": "sffc"
          },
          "committer": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "distinct": true,
          "id": "fc386c3a9a7b7bc68a746e51319388eafcaf2c2b",
          "message": "ICU-22149 Be more graceful with missing lang bundle data\n\nSee #2635",
          "timestamp": "2023-10-03T14:20:26-07:00",
          "tree_id": "f852d38a7ca70692df4baee0de32bbaba84a59a6",
          "url": "https://github.com/unicode-org/icu/commit/fc386c3a9a7b7bc68a746e51319388eafcaf2c2b"
        },
        "date": 1696369580576,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 35.244390492396676,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "roubert@google.com",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "committer": {
            "email": "fredrik@roubert.name",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "distinct": true,
          "id": "c58706989552debfb3a555664b01553664518855",
          "message": "ICU-22527 Add -Wambiguous-reversed-operator test code.",
          "timestamp": "2023-10-04T00:05:31+02:00",
          "tree_id": "4aaaa92f5ccab10a66d03ef7988a035c43ad3f9c",
          "url": "https://github.com/unicode-org/icu/commit/c58706989552debfb3a555664b01553664518855"
        },
        "date": 1696371600489,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 32.05440595254982,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "y.umaoka@gmail.com",
            "name": "yumaoka",
            "username": "yumaoka"
          },
          "committer": {
            "email": "yumaoka@users.noreply.github.com",
            "name": "Yoshito Umaoka",
            "username": "yumaoka"
          },
          "distinct": true,
          "id": "1651e63b338a947b5979a219c5ecaa1e38e5fea5",
          "message": "ICU-22325 BRS74 ICU4J API signature file",
          "timestamp": "2023-10-04T12:11:07-04:00",
          "tree_id": "bf91f0563fb1c4520317c6f4024a639f9c6117f9",
          "url": "https://github.com/unicode-org/icu/commit/1651e63b338a947b5979a219c5ecaa1e38e5fea5"
        },
        "date": 1696436579380,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 40.61856091117823,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ftang@chromium.org",
            "name": "Frank Tang",
            "username": "FrankYFTang"
          },
          "committer": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "distinct": true,
          "id": "d82ad9975d46f901b01fd277becc0e4f458b8f7c",
          "message": "ICU-22526 Allow GMT-23:59 time zone\n\nECMA402 now allow offset timezone from -23:59 to 23:59.\nWe need to lower the minimum ZONE_OFFSET value to -23:59",
          "timestamp": "2023-10-04T14:43:36-07:00",
          "tree_id": "8874ee6f66b2e4e728081582c76d65ca567db66c",
          "url": "https://github.com/unicode-org/icu/commit/d82ad9975d46f901b01fd277becc0e4f458b8f7c"
        },
        "date": 1696456609918,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 38.105122331709694,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dragan@unicode.org",
            "name": "DraganBesevic",
            "username": "DraganBesevic"
          },
          "committer": {
            "email": "131725218+DraganBesevic@users.noreply.github.com",
            "name": "DraganBesevic",
            "username": "DraganBesevic"
          },
          "distinct": true,
          "id": "597e3110a5a129f6ad644c8dff0f04bacd565bc5",
          "message": "ICU-22325 CLDR 44 beta2 integration to ICU part three, source files changes",
          "timestamp": "2023-10-04T15:18:56-07:00",
          "tree_id": "84367251f03ce690b8856ecbf753a3b291bd5689",
          "url": "https://github.com/unicode-org/icu/commit/597e3110a5a129f6ad644c8dff0f04bacd565bc5"
        },
        "date": 1696459280797,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 39.59736845908742,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nmihai_2000@yahoo.com",
            "name": "Mihai Nita",
            "username": "mihnita"
          },
          "committer": {
            "email": "nmihai_2000@yahoo.com",
            "name": "Mihai Nita",
            "username": "mihnita"
          },
          "distinct": true,
          "id": "1b5542da42a984f40f828871ad9674cadf04509d",
          "message": "ICU-22324 Mavenization: fix the with_full_javadoc profile\n\nSee #2658",
          "timestamp": "2023-10-04T16:29:18-07:00",
          "tree_id": "5d7f5d9df12241531ff31ed4f7b820d1bbeeca92",
          "url": "https://github.com/unicode-org/icu/commit/1b5542da42a984f40f828871ad9674cadf04509d"
        },
        "date": 1696462885123,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 40.74613458151426,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "elango@unicode.org",
            "name": "Elango Cheran",
            "username": "echeran"
          },
          "committer": {
            "email": "elango@unicode.org",
            "name": "Elango Cheran",
            "username": "echeran"
          },
          "distinct": true,
          "id": "623cb1acccfca1a6cbe02322a8fbd53ba3a3dd4e",
          "message": "ICU-22324 Update BRS task docs",
          "timestamp": "2023-10-04T21:05:20-07:00",
          "tree_id": "d9bcb9b86391eb2600da12544dcb8d0e70b0b212",
          "url": "https://github.com/unicode-org/icu/commit/623cb1acccfca1a6cbe02322a8fbd53ba3a3dd4e"
        },
        "date": 1696479495083,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 39.059687878991326,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "elango@unicode.org",
            "name": "Elango Cheran",
            "username": "echeran"
          },
          "committer": {
            "email": "elango@unicode.org",
            "name": "Elango Cheran",
            "username": "echeran"
          },
          "distinct": true,
          "id": "cc777ef48c27ae9f3c180be8354b9034118ccd6a",
          "message": "ICU-22324 Remove Ant build's `shared` directory",
          "timestamp": "2023-10-05T08:43:18-07:00",
          "tree_id": "8e67d2fa4cd27bc5317a7059bf04ea273cda4737",
          "url": "https://github.com/unicode-org/icu/commit/cc777ef48c27ae9f3c180be8354b9034118ccd6a"
        },
        "date": 1696521603414,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 40.2220236396406,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "elango@unicode.org",
            "name": "Elango Cheran",
            "username": "echeran"
          },
          "committer": {
            "email": "elango@unicode.org",
            "name": "Elango Cheran",
            "username": "echeran"
          },
          "distinct": true,
          "id": "deab8eef82c2005d7690b8dd9e95b24ca325d10b",
          "message": "ICU-22324 Update Maven migration scripts\n\nSee #2661",
          "timestamp": "2023-10-05T13:43:31-07:00",
          "tree_id": "4b8a78b881153ab8a31bfad79a3f13891cb5187a",
          "url": "https://github.com/unicode-org/icu/commit/deab8eef82c2005d7690b8dd9e95b24ca325d10b"
        },
        "date": 1696540165355,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 32.454331994609326,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "elango@unicode.org",
            "name": "Elango Cheran",
            "username": "echeran"
          },
          "committer": {
            "email": "elango@unicode.org",
            "name": "Elango Cheran",
            "username": "echeran"
          },
          "distinct": true,
          "id": "2e9d1288dd2f627227ff7a34c64905d3c92eb643",
          "message": "ICU-22324 Add docs for Maven usage\n\nSee #2655",
          "timestamp": "2023-10-05T13:43:38-07:00",
          "tree_id": "2f025ce0b82847c0f504ec2b26037c576055de66",
          "url": "https://github.com/unicode-org/icu/commit/2e9d1288dd2f627227ff7a34c64905d3c92eb643"
        },
        "date": 1696540606966,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 32.005947318403,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nmihai_2000@yahoo.com",
            "name": "Mihai Nita",
            "username": "mihnita"
          },
          "committer": {
            "email": "nmihai_2000@yahoo.com",
            "name": "Mihai Nita",
            "username": "mihnita"
          },
          "distinct": true,
          "id": "049c8ad36518d75bfefa63f3647cfee8b35c5ac0",
          "message": "ICU-22534 Script preparing the GitHub icu4j release files\n\nSee #2665",
          "timestamp": "2023-10-06T16:49:26-07:00",
          "tree_id": "d482652aa9019a6fdf01855022c2f428212567c6",
          "url": "https://github.com/unicode-org/icu/commit/049c8ad36518d75bfefa63f3647cfee8b35c5ac0"
        },
        "date": 1696636983167,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 48.03092217129775,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dakusan@castledragmire.com",
            "name": "Jeffrey Riaboy",
            "username": "dakusan"
          },
          "committer": {
            "email": "elango@unicode.org",
            "name": "Elango Cheran",
            "username": "echeran"
          },
          "distinct": true,
          "id": "cdbf0ef6dfb478d04bb0f661c4f86e1ae7ea7075",
          "message": "ICU-22529 Update services.md\n\nAll external links were incorrectly pointing to the current directory with .md as the file extension.\n\nChanged all links to be \"../\" with the .md extension removed",
          "timestamp": "2023-10-09T13:01:06-07:00",
          "tree_id": "adda7df8cb5659be82be4aa9a7a54b276c34d46a",
          "url": "https://github.com/unicode-org/icu/commit/cdbf0ef6dfb478d04bb0f661c4f86e1ae7ea7075"
        },
        "date": 1696882519913,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 40.89832307424103,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sarvesharora@microsoft.com",
            "name": "Sarvesh Arora",
            "username": "arorasarvesh"
          },
          "committer": {
            "email": "103115900+rp9-next@users.noreply.github.com",
            "name": "Rahul Pandey",
            "username": "rp9-next"
          },
          "distinct": true,
          "id": "bd9e5ed620edda29b9e00ca471c3cd4e2eef4e26",
          "message": "ICU-21991 added VS2022 checks and changed windows SDK version",
          "timestamp": "2023-10-12T14:36:27+05:30",
          "tree_id": "e94b19085fb57812d95d001f77445b66499d337b",
          "url": "https://github.com/unicode-org/icu/commit/bd9e5ed620edda29b9e00ca471c3cd4e2eef4e26"
        },
        "date": 1697102365700,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 31.780965849711304,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ftang@chromium.org",
            "name": "Frank Tang",
            "username": "FrankYFTang"
          },
          "committer": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "distinct": true,
          "id": "cb7b1b6506e6bbd4f241d7f9b9e0d23b892e398f",
          "message": "ICU-22548 Reduce the loop limit to fail faster\n\nReduce the error return from about 100s to 30s to avoid\nfuzzer 60s timeout error.\nAlso add a include file to fix uint8_t build breakage.",
          "timestamp": "2023-10-13T16:29:29-07:00",
          "tree_id": "1cf986850337444eb611569ab37daef3c7d515ee",
          "url": "https://github.com/unicode-org/icu/commit/cb7b1b6506e6bbd4f241d7f9b9e0d23b892e398f"
        },
        "date": 1697240748073,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 40.628134941856814,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mohd.akram@outlook.com",
            "name": "Mohamed Akram",
            "username": "mohd-akram"
          },
          "committer": {
            "email": "62772518+richgillam@users.noreply.github.com",
            "name": "Rich Gillam",
            "username": "richgillam"
          },
          "distinct": true,
          "id": "3d1dee683743c4578ced479c10b1fbe25aeacc9a",
          "message": "ICU-22528 Improve date formatting performance",
          "timestamp": "2023-10-13T18:43:04-07:00",
          "tree_id": "446db9fd9d2084fb39744715ad742d12747aa403",
          "url": "https://github.com/unicode-org/icu/commit/3d1dee683743c4578ced479c10b1fbe25aeacc9a"
        },
        "date": 1697248827822,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 41.16645140043122,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ftang@chromium.org",
            "name": "Frank Tang",
            "username": "FrankYFTang"
          },
          "committer": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "distinct": true,
          "id": "cdab88ff4ef53342482a81f276af91567ddc4ff5",
          "message": "ICU-22513 Return error if days is too large in IslamicUmalquraCalendar\n\nIf the year is too large it may overflow the int32_t variable and cause\nslow or infinity loop, return error if the year is too large that the\nconversion to day may overflow int32_t. Limit the value to max value of\nint32_t divide by 400.",
          "timestamp": "2023-10-26T17:09:41-07:00",
          "tree_id": "4cbb2afadc7ff44c575612d67ca5a3a0f270e0dd",
          "url": "https://github.com/unicode-org/icu/commit/cdab88ff4ef53342482a81f276af91567ddc4ff5"
        },
        "date": 1698366913247,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 38.51759811881651,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shane@unicode.org",
            "name": "Shane F. Carr",
            "username": "sffc"
          },
          "committer": {
            "email": "shane@unicode.org",
            "name": "Shane F. Carr",
            "username": "sffc"
          },
          "distinct": true,
          "id": "e04f4427dc838279f458fdc94fca26171af7a12c",
          "message": "ICU-22559 Hardcode the macroregions in XLikelySubtags and add a debug assertion\n\nSee #2688",
          "timestamp": "2023-10-27T14:18:51-07:00",
          "tree_id": "27d0ffdcb1715aa465bf3371821ac7ef19034957",
          "url": "https://github.com/unicode-org/icu/commit/e04f4427dc838279f458fdc94fca26171af7a12c"
        },
        "date": 1698442459971,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 32.00975747286449,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ftang@chromium.org",
            "name": "Frank Tang",
            "username": "FrankYFTang"
          },
          "committer": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "distinct": true,
          "id": "92eeb45811055e0f055c21ac28e536a41156e57f",
          "message": "ICU-22547 fix addLikelySubtags for 4 chars script code\n\nAlso fix ICU-22546 to correct the comments in the API doc\nand add additional unit tests",
          "timestamp": "2023-10-27T17:29:05-07:00",
          "tree_id": "6e48d66768f9fad7e84f559dc01d0c709a977e30",
          "url": "https://github.com/unicode-org/icu/commit/92eeb45811055e0f055c21ac28e536a41156e57f"
        },
        "date": 1698453713514,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 43.74664646071587,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shane@unicode.org",
            "name": "Shane F. Carr",
            "username": "sffc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b070c932ad3541e33ffb52f202b3bafb6f6c5118",
          "message": "ICU-22560 Merge ICU 74 maintenance branch to main (#2689)",
          "timestamp": "2023-10-30T13:50:52-07:00",
          "tree_id": "685233430c7a0ac58ad12feb2254e1367cc00247",
          "url": "https://github.com/unicode-org/icu/commit/b070c932ad3541e33ffb52f202b3bafb6f6c5118"
        },
        "date": 1698699931327,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 32.61803480441972,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "y.umaoka@gmail.com",
            "name": "yumaoka",
            "username": "yumaoka"
          },
          "committer": {
            "email": "nmihai_2000@yahoo.com",
            "name": "Mihai Nita",
            "username": "mihnita"
          },
          "distinct": true,
          "id": "a7c7d8f214926ef23d2b54500ab77d95e5ea0068",
          "message": "ICU-22561 Added maven-gpg-plugin in pom.xml to sign artifacts for maven central release.",
          "timestamp": "2023-10-30T19:51:44-07:00",
          "tree_id": "d036564712e564ff038d3e3ae718297daa440b74",
          "url": "https://github.com/unicode-org/icu/commit/a7c7d8f214926ef23d2b54500ab77d95e5ea0068"
        },
        "date": 1698721556659,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 39.13331608806265,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ftang@chromium.org",
            "name": "Frank Tang",
            "username": "FrankYFTang"
          },
          "committer": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "distinct": true,
          "id": "1bb711ad20427182566d769471fe0cda951fe297",
          "message": "ICU-22540 Add new CLDR units ronto, ronna, quecto, and quetta",
          "timestamp": "2023-10-31T14:58:52-07:00",
          "tree_id": "d5cd4dce7a9d55b7f5df27fdb641e44663eeb9d3",
          "url": "https://github.com/unicode-org/icu/commit/1bb711ad20427182566d769471fe0cda951fe297"
        },
        "date": 1698791378222,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 46.843682273956034,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ftang@chromium.org",
            "name": "Frank Tang",
            "username": "FrankYFTang"
          },
          "committer": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "distinct": true,
          "id": "fa6a4661ba002c1c1ee68cbf5c7ac9af75132d07",
          "message": "ICU-22545 Fix addLikelySubtags for pseudo Locales",
          "timestamp": "2023-10-31T15:00:34-07:00",
          "tree_id": "1cd1cc90cd4cad01544f57fa822debf95fb014de",
          "url": "https://github.com/unicode-org/icu/commit/fa6a4661ba002c1c1ee68cbf5c7ac9af75132d07"
        },
        "date": 1698792148802,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 43.821412880420105,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mnita@google.com",
            "name": "Mihai Nita",
            "username": "mihnita"
          },
          "committer": {
            "email": "nmihai_2000@yahoo.com",
            "name": "Mihai Nita",
            "username": "mihnita"
          },
          "distinct": true,
          "id": "091fcf6f82d3e2a3b956637bc44bd6c5650e8b85",
          "message": "ICU-22533 Don't mention 'Release Candidate' in javadoc",
          "timestamp": "2023-11-09T16:09:55-08:00",
          "tree_id": "c6ce532f15b0af2ac634dccf8f8edadd4bf811d4",
          "url": "https://github.com/unicode-org/icu/commit/091fcf6f82d3e2a3b956637bc44bd6c5650e8b85"
        },
        "date": 1699575717048,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 49.89634053954686,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "elango@unicode.org",
            "name": "Elango Cheran",
            "username": "echeran"
          },
          "committer": {
            "email": "elango@unicode.org",
            "name": "Elango Cheran",
            "username": "echeran"
          },
          "distinct": true,
          "id": "511e5efe562667dfe3f57c8d4cd8eb3af5b2137b",
          "message": "ICU-22533 Update BRS instructions for tagging release",
          "timestamp": "2023-11-10T15:33:31-08:00",
          "tree_id": "3fc88a64ac768951fe26db0482c36fc94d1f049a",
          "url": "https://github.com/unicode-org/icu/commit/511e5efe562667dfe3f57c8d4cd8eb3af5b2137b"
        },
        "date": 1699659854795,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 28.136300921004555,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ftang@chromium.org",
            "name": "Frank Tang",
            "username": "FrankYFTang"
          },
          "committer": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "distinct": true,
          "id": "102ed8b6bd5a80b556349f62275c4edb60fd100b",
          "message": "ICU-22563 Limit the size for calendar fuzzer\n\nLimit to 1000 bytes of valid test data so the fuzzer will\nnot timeout because of running many operations.\n\nICU-22563 fix comment",
          "timestamp": "2023-11-16T14:55:00-08:00",
          "tree_id": "1b8dacfb6e0a1158df30ccdd82822783f277bf56",
          "url": "https://github.com/unicode-org/icu/commit/102ed8b6bd5a80b556349f62275c4edb60fd100b"
        },
        "date": 1700176177629,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 28.61455603636081,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ftang@chromium.org",
            "name": "Frank Tang",
            "username": "FrankYFTang"
          },
          "committer": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "distinct": true,
          "id": "8d3d214ad7f76b7d0650f19a871a0e7d58a5986f",
          "message": "ICU-22531 Remove X from XLikelySubtags*",
          "timestamp": "2023-11-17T14:49:39-08:00",
          "tree_id": "9a9d59df81f551204a6ceda1d13d61ee96b6f874",
          "url": "https://github.com/unicode-org/icu/commit/8d3d214ad7f76b7d0650f19a871a0e7d58a5986f"
        },
        "date": 1700262147870,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 28.01545217527313,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ftang@chromium.org",
            "name": "Frank Tang",
            "username": "FrankYFTang"
          },
          "committer": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "distinct": true,
          "id": "757d2cd90a434b35596d04fc89421dd0add33952",
          "message": "ICU-22555 Fix infinity loop in RuleBasedCollator constructor\n\nFix C++ and Java code.\nAdd unit tests for both C++ and Java.",
          "timestamp": "2023-11-29T11:31:27-08:00",
          "tree_id": "5f0f43f87175d11f696b1ffae7072536ce107d03",
          "url": "https://github.com/unicode-org/icu/commit/757d2cd90a434b35596d04fc89421dd0add33952"
        },
        "date": 1701286962260,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 28.369288949708082,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ftang@chromium.org",
            "name": "Frank Tang",
            "username": "FrankYFTang"
          },
          "committer": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "distinct": true,
          "id": "5d3e84afc0a67abeb34af3384768104af7872523",
          "message": "ICU-22549 Add RuleBasedBreakIterator fuzzer",
          "timestamp": "2023-11-29T11:55:09-08:00",
          "tree_id": "7c2e7c8ce244098a3356d663ac357ec6877e6c48",
          "url": "https://github.com/unicode-org/icu/commit/5d3e84afc0a67abeb34af3384768104af7872523"
        },
        "date": 1701288873735,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 28.20010936265078,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ftang@chromium.org",
            "name": "Frank Tang",
            "username": "FrankYFTang"
          },
          "committer": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "distinct": true,
          "id": "276d3dc8658f6fcb6c71cb0a74eba4244c270e2d",
          "message": "ICU-22493 Implement First Day Override in Calendar",
          "timestamp": "2023-11-29T11:55:51-08:00",
          "tree_id": "0e64e50c2b7eca8f027976e5192cf86fff2f1be3",
          "url": "https://github.com/unicode-org/icu/commit/276d3dc8658f6fcb6c71cb0a74eba4244c270e2d"
        },
        "date": 1701289362588,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 28.164045186987025,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ftang@chromium.org",
            "name": "Frank Tang",
            "username": "FrankYFTang"
          },
          "committer": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "distinct": true,
          "id": "0bfa5f4c44ef3344982a23c1e1aa1bd6af6f8427",
          "message": "ICU-22549 Add DateTimePatternGenerator fuzzer\n\nSee #2708",
          "timestamp": "2023-11-29T14:45:21-08:00",
          "tree_id": "32717b9001f415957dd8723f0681946ad8568594",
          "url": "https://github.com/unicode-org/icu/commit/0bfa5f4c44ef3344982a23c1e1aa1bd6af6f8427"
        },
        "date": 1701298617768,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 28.226345689888692,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "elango@unicode.org",
            "name": "Elango Cheran",
            "username": "echeran"
          },
          "committer": {
            "email": "elango@unicode.org",
            "name": "Elango Cheran",
            "username": "echeran"
          },
          "distinct": true,
          "id": "2adf957de2d747b6e14cff8e0a5791c2fa484f40",
          "message": "ICU-22314 Refactor GH CI jobs into workflows triggered by modified paths",
          "timestamp": "2023-11-29T17:59:41-05:00",
          "tree_id": "1ef2c5ffddff54534094eb0d65dc08683dc50ffb",
          "url": "https://github.com/unicode-org/icu/commit/2adf957de2d747b6e14cff8e0a5791c2fa484f40"
        },
        "date": 1701299357736,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 28.20373544001091,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ftang@chromium.org",
            "name": "Frank Tang",
            "username": "FrankYFTang"
          },
          "committer": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "distinct": true,
          "id": "ba4e8f2ef7feed2fe43c5e84a4540c793a2843c8",
          "message": "ICU-22549 Add Fuzer for Unicode property API",
          "timestamp": "2023-11-29T16:30:46-08:00",
          "tree_id": "24d9fc61a2c28f5094841212c5918969151e2d7a",
          "url": "https://github.com/unicode-org/icu/commit/ba4e8f2ef7feed2fe43c5e84a4540c793a2843c8"
        },
        "date": 1701304929819,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 28.144071515790486,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "roubert@google.com",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "committer": {
            "email": "fredrik@roubert.name",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "distinct": true,
          "id": "78b1a3fc46f182c9277b532ac6f65f4bc35f230c",
          "message": "ICU-22522 Update the Azure CI from Clang 14 to Clang 16.",
          "timestamp": "2023-11-30T15:34:36+01:00",
          "tree_id": "0208ff4a672164a56f3ab8c7f3ecd6f9322e1d4b",
          "url": "https://github.com/unicode-org/icu/commit/78b1a3fc46f182c9277b532ac6f65f4bc35f230c"
        },
        "date": 1701355640960,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 28.059391567489488,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ftang@chromium.org",
            "name": "Frank Tang",
            "username": "FrankYFTang"
          },
          "committer": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "distinct": true,
          "id": "368d67316c8413b7c8539e050acdbf8e64daf9e3",
          "message": "ICU-22549 Add UnicodeSet fuzzer",
          "timestamp": "2023-11-30T08:32:09-08:00",
          "tree_id": "18cbd3c57a2579aab308f879f9dfd0dc99e33a1e",
          "url": "https://github.com/unicode-org/icu/commit/368d67316c8413b7c8539e050acdbf8e64daf9e3"
        },
        "date": 1701362581213,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 29.5635274562681,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ftang@chromium.org",
            "name": "Frank Tang",
            "username": "FrankYFTang"
          },
          "committer": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "distinct": true,
          "id": "e8e19454dac630d874fa980cfa8de8495c7bd268",
          "message": "ICU-22549 Add fuzzer for NumberFormatter",
          "timestamp": "2023-12-01T15:04:22-08:00",
          "tree_id": "d75c8643351c5109f01dc32a19ce96afb6642360",
          "url": "https://github.com/unicode-org/icu/commit/e8e19454dac630d874fa980cfa8de8495c7bd268"
        },
        "date": 1701472993790,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 28.307113659975627,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ftang@chromium.org",
            "name": "Frank Tang",
            "username": "FrankYFTang"
          },
          "committer": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "distinct": true,
          "id": "83327fb92ca5831df8ab78d5f706fae4ba25eb11",
          "message": "ICU-22549 Add Fuzzer for TimeZone",
          "timestamp": "2023-12-01T15:04:51-08:00",
          "tree_id": "c8601a6f3a7edba5a0c4a9c752186d3d0c6e4374",
          "url": "https://github.com/unicode-org/icu/commit/83327fb92ca5831df8ab78d5f706fae4ba25eb11"
        },
        "date": 1701474111737,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 28.61932098581445,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ftang@chromium.org",
            "name": "Frank Tang",
            "username": "FrankYFTang"
          },
          "committer": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "distinct": true,
          "id": "d93c7b60fca892802bbffa6df9e42ff5e738e125",
          "message": "ICU-22568 return TimeZomeFormat::createInstance for bogus locale",
          "timestamp": "2023-12-01T15:10:41-08:00",
          "tree_id": "b506d22547fc9a112f53dd889a233313dc617264",
          "url": "https://github.com/unicode-org/icu/commit/d93c7b60fca892802bbffa6df9e42ff5e738e125"
        },
        "date": 1701474891042,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 28.112424363468982,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "roubert@google.com",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "committer": {
            "email": "fredrik@roubert.name",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "distinct": true,
          "id": "394ebaaee0eda33a4baa440aebb12868556997a1",
          "message": "ICU-22522 Update configure files from configure.ac using autoreconf.",
          "timestamp": "2023-12-04T16:17:20+01:00",
          "tree_id": "6bd082273dc007d520d25ab199e297a3344d0af1",
          "url": "https://github.com/unicode-org/icu/commit/394ebaaee0eda33a4baa440aebb12868556997a1"
        },
        "date": 1701703724018,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 28.171736785183466,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "richard_gillam@apple.com",
            "name": "Rich Gillam",
            "username": "richgillam"
          },
          "committer": {
            "email": "62772518+richgillam@users.noreply.github.com",
            "name": "Rich Gillam",
            "username": "richgillam"
          },
          "distinct": true,
          "id": "bcae6f2a437f3e58eb5afb8568f88b286a389e37",
          "message": "ICU-22575 Change AvailableFormatsSink to allow locales to inherit availableFormats items from the root locale.",
          "timestamp": "2023-12-04T12:47:50-08:00",
          "tree_id": "a6ca9466535d8b759e17aeeef210da7671712c80",
          "url": "https://github.com/unicode-org/icu/commit/bcae6f2a437f3e58eb5afb8568f88b286a389e37"
        },
        "date": 1701723517580,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 28.192345403447735,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ftang@chromium.org",
            "name": "Frank Tang",
            "username": "FrankYFTang"
          },
          "committer": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "distinct": true,
          "id": "b246489074aa20dff7e5bbb99050ba437eec988d",
          "message": "ICU-22588 Limit test data to avoid meaningless timeout",
          "timestamp": "2023-12-05T16:24:02-08:00",
          "tree_id": "ebd4d101fe3a9d58153f388f4821fdea519f4789",
          "url": "https://github.com/unicode-org/icu/commit/b246489074aa20dff7e5bbb99050ba437eec988d"
        },
        "date": 1701823440832,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 28.446273840967056,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ftang@chromium.org",
            "name": "Frank Tang",
            "username": "FrankYFTang"
          },
          "committer": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "distinct": true,
          "id": "2a3cb99f6e7aaf75fc88c536e95b34c60af1fd87",
          "message": "ICU-22589 Avoid timeout in TimeZone test",
          "timestamp": "2023-12-05T16:24:33-08:00",
          "tree_id": "e0296c97e01eb455b2f0d2215875ccbe04ad7fb9",
          "url": "https://github.com/unicode-org/icu/commit/2a3cb99f6e7aaf75fc88c536e95b34c60af1fd87"
        },
        "date": 1701824087546,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 28.15632272533002,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "y.umaoka@gmail.com",
            "name": "yumaoka",
            "username": "yumaoka"
          },
          "committer": {
            "email": "nmihai_2000@yahoo.com",
            "name": "Mihai Nita",
            "username": "mihnita"
          },
          "distinct": true,
          "id": "da83309900e90509d6d559e4ad5f9a2a0a1cef6b",
          "message": "ICU-22595 GitHub release file generation script to include javadoc for each artifact in addition to full javadoc",
          "timestamp": "2023-12-07T10:37:15-08:00",
          "tree_id": "7739ff175cf22e7965eb192ad49dd11697ac658d",
          "url": "https://github.com/unicode-org/icu/commit/da83309900e90509d6d559e4ad5f9a2a0a1cef6b"
        },
        "date": 1701975167913,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 28.224317525721194,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "andy.heninger@gmail.com",
            "name": "Andy Heninger",
            "username": "aheninger"
          },
          "committer": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "distinct": true,
          "id": "e6892996b1541564965a8eb0151a0bcabbd88ffc",
          "message": "ICU-22584 Fix RBBI rule builder stack overflow.\n\nThe problem was found by fuzz testing.\n\nA rule consisting of a long literal string produces a large, unbalanced parse tree,\none node per string element. Deleting the tree was recursive, once per node, resulting\nin deep recursion.\n\nThis PR changes node deletion to use an iterative (non-recursive) approach.\n\nThis change only affects rule building. There is no change to the RBBI run time\nusing pre-built rules.",
          "timestamp": "2023-12-08T12:49:26-08:00",
          "tree_id": "1468d96e3a369e3aa0d59b567cbf8088e05cccc7",
          "url": "https://github.com/unicode-org/icu/commit/e6892996b1541564965a8eb0151a0bcabbd88ffc"
        },
        "date": 1702069187315,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 28.239301826777147,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rp9.next@gmail.com",
            "name": "Rahul Pandey",
            "username": "rp9-next"
          },
          "committer": {
            "email": "nmihai_2000@yahoo.com",
            "name": "Mihai Nita",
            "username": "mihnita"
          },
          "distinct": true,
          "id": "665d9dbbe993b89c074c3463500237f8c99a4ac3",
          "message": "ICU-22534 BRS 75 front-load update version to 75.0.1\n\nSee #2726",
          "timestamp": "2023-12-08T14:32:40-08:00",
          "tree_id": "82548d317d2baa371e96c050243c26478a6906ba",
          "url": "https://github.com/unicode-org/icu/commit/665d9dbbe993b89c074c3463500237f8c99a4ac3"
        },
        "date": 1702075988895,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 28.122651856580422,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ftang@chromium.org",
            "name": "Frank Tang",
            "username": "FrankYFTang"
          },
          "committer": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "distinct": true,
          "id": "73f972f7ff1a7799e70195cfbceff2ac32229169",
          "message": "ICU-22581 Fix RBBI leakage\n\nDuplicate variable references in the rule should not cause leakage",
          "timestamp": "2023-12-08T15:47:51-08:00",
          "tree_id": "5eee268cb2b2845dea6d6194d74a77e8f1321363",
          "url": "https://github.com/unicode-org/icu/commit/73f972f7ff1a7799e70195cfbceff2ac32229169"
        },
        "date": 1702081022310,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 28.134686289126766,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ftang@chromium.org",
            "name": "Frank Tang",
            "username": "FrankYFTang"
          },
          "committer": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "distinct": true,
          "id": "4da7ffaa3648386704e1e4c6cbd1447bbac1678f",
          "message": "ICU-22580 Address infinity loop in RBBI\n\nICU-22580 Fix tests",
          "timestamp": "2023-12-11T11:34:47-08:00",
          "tree_id": "65ec517d38129a313f31ec5d9991d34816c8ae0b",
          "url": "https://github.com/unicode-org/icu/commit/4da7ffaa3648386704e1e4c6cbd1447bbac1678f"
        },
        "date": 1702324010886,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 28.344822745990417,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ftang@chromium.org",
            "name": "Frank Tang",
            "username": "FrankYFTang"
          },
          "committer": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "distinct": true,
          "id": "7d3cd7cba5a08304eec8f193ef070a89dd3bd31e",
          "message": "ICU-22584 Fix def of nullptr\n\nICU-22584 fix",
          "timestamp": "2023-12-11T14:35:10-08:00",
          "tree_id": "7b73a5291b341a91932409910d0fe194ad848e5c",
          "url": "https://github.com/unicode-org/icu/commit/7d3cd7cba5a08304eec8f193ef070a89dd3bd31e"
        },
        "date": 1702334893773,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 28.05806131272206,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ftang@chromium.org",
            "name": "Frank Tang",
            "username": "FrankYFTang"
          },
          "committer": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "distinct": true,
          "id": "8b14c0579190eea71c030899581b1004ab665c77",
          "message": "ICU-22585 Fix infinity loop while unicode set contains single surrogate",
          "timestamp": "2023-12-11T15:33:12-08:00",
          "tree_id": "96c2fec2a75ad720208cd2a7612003124173534d",
          "url": "https://github.com/unicode-org/icu/commit/8b14c0579190eea71c030899581b1004ab665c77"
        },
        "date": 1702338272391,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 28.20547458395271,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ftang@chromium.org",
            "name": "Frank Tang",
            "username": "FrankYFTang"
          },
          "committer": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "distinct": true,
          "id": "4a7d61d2617b2c165d2a58841d99762757f70f75",
          "message": "ICU-22579 Fix Null deref while Unicode Set only has string",
          "timestamp": "2023-12-12T14:39:12-08:00",
          "tree_id": "cebbbfc602168758597444336d5838e860d95fbe",
          "url": "https://github.com/unicode-org/icu/commit/4a7d61d2617b2c165d2a58841d99762757f70f75"
        },
        "date": 1702421413299,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 28.396190170240445,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "roubert@google.com",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "committer": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "distinct": true,
          "id": "1bc059e7d6159a6c6daf6adfcb2a94768ad554c9",
          "message": "ICU-21107 Update configure files from configure.ac using autoreconf.",
          "timestamp": "2023-12-14T09:36:22-08:00",
          "tree_id": "341da52e22b44900a76bb29a7dbcd986e0ee0689",
          "url": "https://github.com/unicode-org/icu/commit/1bc059e7d6159a6c6daf6adfcb2a94768ad554c9"
        },
        "date": 1702576002735,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 28.526956051823927,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "roubert@google.com",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "committer": {
            "email": "fredrik@roubert.name",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "distinct": true,
          "id": "e112f896a215e79ea249a715f128c73c1da04e7a",
          "message": "ICU-22576 Use standard alignof() with modern C.",
          "timestamp": "2023-12-14T19:11:29+01:00",
          "tree_id": "0db256688fe42baf082b42d5fae5e6dd880e10f9",
          "url": "https://github.com/unicode-org/icu/commit/e112f896a215e79ea249a715f128c73c1da04e7a"
        },
        "date": 1702578137709,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 28.34036229248023,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "roubert@google.com",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "committer": {
            "email": "fredrik@roubert.name",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "distinct": true,
          "id": "e2d1d3ed43773549b31e201501d28a8f98bba9b5",
          "message": "ICU-22592 Rename source file that should not be directly compiled.",
          "timestamp": "2023-12-14T20:11:50+01:00",
          "tree_id": "4844eb11f6154cbdb58fdb1a3cbe128caf6d292a",
          "url": "https://github.com/unicode-org/icu/commit/e2d1d3ed43773549b31e201501d28a8f98bba9b5"
        },
        "date": 1702581804783,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 28.01957678844935,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "roubert@google.com",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "committer": {
            "email": "fredrik@roubert.name",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "distinct": true,
          "id": "6f2e37ecb5db4c511473b38f5309d7fcd048ac51",
          "message": "ICU-22590 Delete useless source file.",
          "timestamp": "2023-12-14T20:41:44+01:00",
          "tree_id": "a08c0b43d9f46a32a2e41895b7e7dc10e5ac73c6",
          "url": "https://github.com/unicode-org/icu/commit/6f2e37ecb5db4c511473b38f5309d7fcd048ac51"
        },
        "date": 1702583965175,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 28.005320184752616,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "roubert@google.com",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "committer": {
            "email": "fredrik@roubert.name",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "distinct": true,
          "id": "391e3b85fed0319e6c63588e9d9e69685542a8f2",
          "message": "ICU-22591 Delete obsolete source file.",
          "timestamp": "2023-12-14T20:42:00+01:00",
          "tree_id": "42ba0f42d26d6092ecc9810fa38560cb113e0412",
          "url": "https://github.com/unicode-org/icu/commit/391e3b85fed0319e6c63588e9d9e69685542a8f2"
        },
        "date": 1702584669908,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 28.72038395959638,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "roubert@google.com",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "committer": {
            "email": "fredrik@roubert.name",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "distinct": true,
          "id": "99f6be43458a2339186cc527d979ec9f0bbad313",
          "message": "ICU-22593 Add missing layout/ prefix for Layout Engine header files.",
          "timestamp": "2023-12-14T23:51:10+01:00",
          "tree_id": "bb6b87c5270d1c315ccbfbdcf18336d22a07bc32",
          "url": "https://github.com/unicode-org/icu/commit/99f6be43458a2339186cc527d979ec9f0bbad313"
        },
        "date": 1702594912147,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 28.033798684859057,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ftang@chromium.org",
            "name": "Frank Tang",
            "username": "FrankYFTang"
          },
          "committer": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "distinct": true,
          "id": "19af9e7ce3869cbe959e8e85b89abc8a28592309",
          "message": "ICU-22602 Fix stack overflow inside flattenVariables\n\nLimit the recursive call of flattenVariables to maximum depth 3500\nsince Java on my machine throw stack overflow exception around 3900.",
          "timestamp": "2023-12-14T15:14:21-08:00",
          "tree_id": "cb8d379e142f7d5b63e79f9ea26c5e267a863ce2",
          "url": "https://github.com/unicode-org/icu/commit/19af9e7ce3869cbe959e8e85b89abc8a28592309"
        },
        "date": 1702596482345,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 28.073580570582223,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nmihai_2000@yahoo.com",
            "name": "Mihai Nita",
            "username": "mihnita"
          },
          "committer": {
            "email": "nmihai_2000@yahoo.com",
            "name": "Mihai Nita",
            "username": "mihnita"
          },
          "distinct": true,
          "id": "e76094c55a0fe4bc6f5307102698e0fc632bf89d",
          "message": "ICU-22605 Exclude the data files from the -sources.jar",
          "timestamp": "2023-12-15T09:08:22-08:00",
          "tree_id": "8ee8d12124d3163af2a54194543e145f7ebfd7bf",
          "url": "https://github.com/unicode-org/icu/commit/e76094c55a0fe4bc6f5307102698e0fc632bf89d"
        },
        "date": 1702660321876,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 28.211101351880735,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ftang@chromium.org",
            "name": "Frank Tang",
            "username": "FrankYFTang"
          },
          "committer": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "distinct": true,
          "id": "77759422ddbe8603e1c9c909c0c006eb0775535d",
          "message": "ICU-22549 Add Normalizer2 Fuzzer\n\nICU-22549 Remove unnecessary include files",
          "timestamp": "2023-12-15T11:30:33-08:00",
          "tree_id": "f1bae80903c7e8c74dcc4cb52e9e05f131f7f13d",
          "url": "https://github.com/unicode-org/icu/commit/77759422ddbe8603e1c9c909c0c006eb0775535d"
        },
        "date": 1702670078841,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 28.524140180479833,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ftang@chromium.org",
            "name": "Frank Tang",
            "username": "FrankYFTang"
          },
          "committer": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "distinct": true,
          "id": "5cf5ec1adbd2332b3cc289b5b1f5ca8324275fc3",
          "message": "ICU-22549 Add TimeZoneNames fuzzer",
          "timestamp": "2023-12-15T11:30:45-08:00",
          "tree_id": "9adc7082a05fb360ee47cf198c123c829d86f83a",
          "url": "https://github.com/unicode-org/icu/commit/5cf5ec1adbd2332b3cc289b5b1f5ca8324275fc3"
        },
        "date": 1702670671229,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 28.281610267087796,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ftang@chromium.org",
            "name": "Frank Tang",
            "username": "FrankYFTang"
          },
          "committer": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "distinct": true,
          "id": "7bef50e71d6ae7a58c5547092feb110ec71810ab",
          "message": "ICU-22609 Fix nulldef w/ bogus locale in DateFormat::create*",
          "timestamp": "2023-12-15T16:14:56-08:00",
          "tree_id": "68dc6b3791d7d9eaf1b9eb8a272d7a618e257b40",
          "url": "https://github.com/unicode-org/icu/commit/7bef50e71d6ae7a58c5547092feb110ec71810ab"
        },
        "date": 1702686890583,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 28.178824288251622,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ftang@chromium.org",
            "name": "Frank Tang",
            "username": "FrankYFTang"
          },
          "committer": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "distinct": true,
          "id": "4ba5d9191bc20e33773ee1ff0b7a96b2b2de8359",
          "message": "ICU-22549 Add DateFormatSymbols fuzzer",
          "timestamp": "2023-12-15T16:17:38-08:00",
          "tree_id": "0b8ff175a81f70716149a310b18c5be4ce6bd3f1",
          "url": "https://github.com/unicode-org/icu/commit/4ba5d9191bc20e33773ee1ff0b7a96b2b2de8359"
        },
        "date": 1702688105707,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 28.262337455784518,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ftang@chromium.org",
            "name": "Frank Tang",
            "username": "FrankYFTang"
          },
          "committer": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "distinct": true,
          "id": "11d1148e5680fe62456659af85b37f690612ba73",
          "message": "ICU-22549 Improve fuzzer to test more locale\n\nWe found bogus locale cause crash in DateFormat so here\nwe enhance the fuzzer to also test locale name which are not\nreturn by the available locale list.",
          "timestamp": "2023-12-18T13:31:06-08:00",
          "tree_id": "6408ab517d2e1a3cc6b80abb260b057428f7512e",
          "url": "https://github.com/unicode-org/icu/commit/11d1148e5680fe62456659af85b37f690612ba73"
        },
        "date": 1702935751220,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 28.659109956484627,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ftang@chromium.org",
            "name": "Frank Tang",
            "username": "FrankYFTang"
          },
          "committer": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "distinct": true,
          "id": "838227ce9570921e0aa75a399fdff47862d34f61",
          "message": "ICU-22614 Fix buffer overflow in TimeZoneNames\n\nSee #2752",
          "timestamp": "2023-12-18T16:26:06-08:00",
          "tree_id": "962109c774b87bf4dc255ee952fb4b976335eacd",
          "url": "https://github.com/unicode-org/icu/commit/838227ce9570921e0aa75a399fdff47862d34f61"
        },
        "date": 1702947141990,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 29.270034392860893,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "roubert@google.com",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "committer": {
            "email": "fredrik@roubert.name",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "distinct": true,
          "id": "85b7f5fda245e3832803ec4ec2540a2d2ea959d0",
          "message": "ICU-22604 Use 'void' for empty C parameter lists (-Wstrict-prototypes).",
          "timestamp": "2023-12-19T09:27:01+09:00",
          "tree_id": "ad1d34f0badf61b279bc70e0ef1d4753b866bf40",
          "url": "https://github.com/unicode-org/icu/commit/85b7f5fda245e3832803ec4ec2540a2d2ea959d0"
        },
        "date": 1702948063670,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 28.38125674539442,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "roubert@google.com",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "committer": {
            "email": "fredrik@roubert.name",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "distinct": true,
          "id": "1384d9f3959470974470267eab722614b71e02d8",
          "message": "ICU-22532 Remove redundant 'void' from empty C++ parameter lists.\n\nhttps://releases.llvm.org/16.0.0/tools/clang/tools/extra/docs/clang-tidy/checks/modernize/redundant-void-arg.html",
          "timestamp": "2023-12-19T09:27:18+09:00",
          "tree_id": "50eb51f43a937b8afd14c9f05d419cac3865d52b",
          "url": "https://github.com/unicode-org/icu/commit/1384d9f3959470974470267eab722614b71e02d8"
        },
        "date": 1702948804946,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 28.11202830995683,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ftang@chromium.org",
            "name": "Frank Tang",
            "username": "FrankYFTang"
          },
          "committer": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "distinct": true,
          "id": "fc6e282d98668dea248c847f9cf13a0a4b55443a",
          "message": "ICU-22549 Limit Normalizer2 Fuzzer for 5K of input\n\nTo avoid timeout",
          "timestamp": "2023-12-19T13:58:03-08:00",
          "tree_id": "b6c96857821b0eb92b74e403a33d2102e7c6d385",
          "url": "https://github.com/unicode-org/icu/commit/fc6e282d98668dea248c847f9cf13a0a4b55443a"
        },
        "date": 1703023788358,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 28.182804986792835,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "roubert@google.com",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "committer": {
            "email": "fredrik@roubert.name",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "distinct": true,
          "id": "ef78f2a86359c3aff05eec5ab6de5dbc28c69190",
          "message": "ICU-21107 Update configure files from configure.ac using autoreconf.",
          "timestamp": "2023-12-21T09:31:55+09:00",
          "tree_id": "5fcc9d9c6426758cb4f935b6dc4d8caf5e73c193",
          "url": "https://github.com/unicode-org/icu/commit/ef78f2a86359c3aff05eec5ab6de5dbc28c69190"
        },
        "date": 1703124884653,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 28.155067313719258,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ftang@chromium.org",
            "name": "Frank Tang",
            "username": "FrankYFTang"
          },
          "committer": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "distinct": true,
          "id": "23dd2b8b5499506a9ff541c9c2f8bf7701cf93b8",
          "message": "ICU-22549 Add PluralRule Fuzzer",
          "timestamp": "2023-12-21T14:21:33-08:00",
          "tree_id": "5ccead0f9023e30c98546f9ce98c71be6bff5aee",
          "url": "https://github.com/unicode-org/icu/commit/23dd2b8b5499506a9ff541c9c2f8bf7701cf93b8"
        },
        "date": 1703197992138,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 28.18337209816264,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "roubert@google.com",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "committer": {
            "email": "fredrik@roubert.name",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "distinct": true,
          "id": "daa0171501f47962bb41e9fc1bb7e1a1e7148ab0",
          "message": "ICU-22608 Add necessary using statements for namespace icu.",
          "timestamp": "2023-12-22T08:12:47+09:00",
          "tree_id": "bd144ab4491415949b4791324098d0bd37ef335a",
          "url": "https://github.com/unicode-org/icu/commit/daa0171501f47962bb41e9fc1bb7e1a1e7148ab0"
        },
        "date": 1703200971303,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 28.614457319274038,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "roubert@google.com",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "committer": {
            "email": "fredrik@roubert.name",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "distinct": true,
          "id": "887005b68a689cc1d9f2b13e8e23dd4bfeaaf5f5",
          "message": "ICU-22520 Remove unnecessary copying of statically allocated strings.",
          "timestamp": "2023-12-22T08:43:55+09:00",
          "tree_id": "8882ca817ed66a753f3f867b66959bd6cea767cd",
          "url": "https://github.com/unicode-org/icu/commit/887005b68a689cc1d9f2b13e8e23dd4bfeaaf5f5"
        },
        "date": 1703203082830,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 28.06055498112814,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srl295@gmail.com",
            "name": "Steven R. Loomis",
            "username": "srl295"
          },
          "committer": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "distinct": true,
          "id": "9d3e12b8202e030f5993a195bf8d1332485206c6",
          "message": "ICU-22601 v74.2 fix dangling LICENSE file\n\n- 'git archive' works on a subtree so did not include LICENSE\n- we copy the LICENSE file from the build dir\n- broken by ICU-22309",
          "timestamp": "2023-12-22T09:28:09-08:00",
          "tree_id": "931a9c4fb66c66d728da81bc3c2ded4dbfc13534",
          "url": "https://github.com/unicode-org/icu/commit/9d3e12b8202e030f5993a195bf8d1332485206c6"
        },
        "date": 1703266695601,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 29.107864710715525,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "roubert@google.com",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "committer": {
            "email": "fredrik@roubert.name",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "distinct": true,
          "id": "9a91599fd44333a65ae3b1519b577b848f4c46d6",
          "message": "ICU-22520 Replace uprv_malloc() / uprv_free() with icu::LocalPointer.",
          "timestamp": "2023-12-23T10:42:55+09:00",
          "tree_id": "ec2f281b502d22e57b51c02ffe87b3eeeaf07ed6",
          "url": "https://github.com/unicode-org/icu/commit/9a91599fd44333a65ae3b1519b577b848f4c46d6"
        },
        "date": 1703296343559,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 28.207784745726947,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "roubert@google.com",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "committer": {
            "email": "fredrik@roubert.name",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "distinct": true,
          "id": "03a870a23cc07fab7e937919b5095b7ec2b98553",
          "message": "ICU-22520 Replace uprv_malloc() / uprv_free() with icu::CharString.",
          "timestamp": "2023-12-28T10:27:35+09:00",
          "tree_id": "8c8283296e42f5bcf3a0bcb6e7dd3432d6bfb8c6",
          "url": "https://github.com/unicode-org/icu/commit/03a870a23cc07fab7e937919b5095b7ec2b98553"
        },
        "date": 1703727448724,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 28.265893504269027,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "roubert@google.com",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "committer": {
            "email": "fredrik@roubert.name",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "distinct": true,
          "id": "7eb56fee1ec2ce125c92f3a38003f743cb738992",
          "message": "ICU-22520 Remove now superfluous intermediate buffers.",
          "timestamp": "2023-12-28T11:13:38+09:00",
          "tree_id": "dec5277fd6c69f542fda90c5bdad4f5231862e7e",
          "url": "https://github.com/unicode-org/icu/commit/7eb56fee1ec2ce125c92f3a38003f743cb738992"
        },
        "date": 1703730249889,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 28.00811070383177,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "manishsmail@gmail.com",
            "name": "Manish Goregaokar",
            "username": "Manishearth"
          },
          "committer": {
            "email": "shane@unicode.org",
            "name": "Shane F. Carr",
            "username": "sffc"
          },
          "distinct": true,
          "id": "74abcfe288b4b25b8255e65c9cafbe8f89319bf4",
          "message": "ICU-22481 Add toml support to gendict\n\n(and use it in CI)",
          "timestamp": "2023-12-27T22:59:57-08:00",
          "tree_id": "bef361841b7a432f18296e39bafdc5b6b3ce2f8c",
          "url": "https://github.com/unicode-org/icu/commit/74abcfe288b4b25b8255e65c9cafbe8f89319bf4"
        },
        "date": 1703747503678,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 28.461782967958467,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "roubert@google.com",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "committer": {
            "email": "fredrik@roubert.name",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "distinct": true,
          "id": "02740597ce6a90d14ee2bb9b1a66e16ed5543328",
          "message": "ICU-22520 Replace char arrays with icu::CharString.",
          "timestamp": "2023-12-29T11:30:57+09:00",
          "tree_id": "2b97a4f8909dae952a07d05e7f9ee3737e84a0c9",
          "url": "https://github.com/unicode-org/icu/commit/02740597ce6a90d14ee2bb9b1a66e16ed5543328"
        },
        "date": 1703817630713,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 28.069049715430307,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shane@unicode.org",
            "name": "Shane F. Carr",
            "username": "sffc"
          },
          "committer": {
            "email": "shane@unicode.org",
            "name": "Shane F. Carr",
            "username": "sffc"
          },
          "distinct": true,
          "id": "1a60a038e14f0c56f50052c03fe76c4933cda339",
          "message": "ICU-21952 Add withoutLocale functions to LocalizedNumber[Range]Formatter\n\nSee #2483",
          "timestamp": "2023-12-28T22:04:02-08:00",
          "tree_id": "3acc1dc6c4403976a6da569cc0bbfd32999a1b4a",
          "url": "https://github.com/unicode-org/icu/commit/1a60a038e14f0c56f50052c03fe76c4933cda339"
        },
        "date": 1703831381887,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 28.052393461996164,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "committer": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "distinct": true,
          "id": "52ff51e82c74adc52629b411d8cf6718c45e2210",
          "message": "ICU-22549 Revert \"Improve fuzzer to test more locale\"\n\nSee #2770",
          "timestamp": "2024-01-03T14:19:32-08:00",
          "tree_id": "76faf473235822d1cadbae0db235856c8933cd20",
          "url": "https://github.com/unicode-org/icu/commit/52ff51e82c74adc52629b411d8cf6718c45e2210"
        },
        "date": 1704321515362,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 28.116512627537762,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "roubert@google.com",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "committer": {
            "email": "fredrik@roubert.name",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "distinct": true,
          "id": "539e8f41a35fec30fba4cfb3a65ea4db67978f85",
          "message": "ICU-22532 Compiler warning: conversion from 'double' to 'int32_t'.\n\nThe definition of kOneDay is 1.0 * U_MILLIS_PER_DAY so there's no\nreason whatsoever to not just use U_MILLIS_PER_DAY directly here.",
          "timestamp": "2024-01-04T09:40:40+09:00",
          "tree_id": "25d2437641ab75a247edd9732303544139770b89",
          "url": "https://github.com/unicode-org/icu/commit/539e8f41a35fec30fba4cfb3a65ea4db67978f85"
        },
        "date": 1704329451966,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 28.24690587393753,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ftang@chromium.org",
            "name": "Frank Tang",
            "username": "FrankYFTang"
          },
          "committer": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "distinct": true,
          "id": "cfba9a8caf6cb6ab39eb4ca5702c78f97989bcde",
          "message": "ICU-22549 Reland PR2770 w/ fix\n\nReland PR2770 w/ the fix that null termination the input to Locale\nconstuctor.",
          "timestamp": "2024-01-05T01:18:10-08:00",
          "tree_id": "3f6b34bc29d24edb76e878374b92031d49dd1d6e",
          "url": "https://github.com/unicode-org/icu/commit/cfba9a8caf6cb6ab39eb4ca5702c78f97989bcde"
        },
        "date": 1704447423208,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 28.131364624253695,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ftang@chromium.org",
            "name": "Frank Tang",
            "username": "FrankYFTang"
          },
          "committer": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "distinct": true,
          "id": "3f054adaf3ca34d55338e56773088bd589600583",
          "message": "ICU-22549 Fix fuzzer to call Locale with null-terminiate string",
          "timestamp": "2024-01-05T01:18:48-08:00",
          "tree_id": "9b7b8cde8751e8ca3e3d1feaf306bf9f1a706c09",
          "url": "https://github.com/unicode-org/icu/commit/3f054adaf3ca34d55338e56773088bd589600583"
        },
        "date": 1704448150966,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 28.2565120065077,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "roubert@google.com",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "committer": {
            "email": "fredrik@roubert.name",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "distinct": true,
          "id": "87ca0234476c62f7d42ab43bb4f5e17ca329f5d0",
          "message": "ICU-22520 Replace char arrays with icu::CharString.",
          "timestamp": "2024-01-10T12:19:44+09:00",
          "tree_id": "051272f95789f629f03907ef8763fbbb7aff961a",
          "url": "https://github.com/unicode-org/icu/commit/87ca0234476c62f7d42ab43bb4f5e17ca329f5d0"
        },
        "date": 1704857358113,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 28.16041984084615,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "roubert@google.com",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "committer": {
            "email": "fredrik@roubert.name",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "distinct": true,
          "id": "906093f31b44316ba7da24972f95a0510355e61d",
          "message": "ICU-22520 Make icu::CharString comparable with itself.",
          "timestamp": "2024-01-10T17:30:32+09:00",
          "tree_id": "23c5a2293028696211e169684baf57e36ec7dc42",
          "url": "https://github.com/unicode-org/icu/commit/906093f31b44316ba7da24972f95a0510355e61d"
        },
        "date": 1704876043410,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 28.570476194930222,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ftang@chromium.org",
            "name": "Frank Tang",
            "username": "FrankYFTang"
          },
          "committer": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "distinct": true,
          "id": "23d1fc5989c87d5a0572eed54f7c1000f1e3e71b",
          "message": "ICU-22549 Fix incorrect pointer\n\nRemove the adjustment of data pointer to avoid buffer-overflow\nFix bug https://bugs.chromium.org/p/oss-fuzz/issues/detail?id=65632",
          "timestamp": "2024-01-10T12:36:39-08:00",
          "tree_id": "0b452a9ffd9f1b9168ca3f579299dcff87f6a506",
          "url": "https://github.com/unicode-org/icu/commit/23d1fc5989c87d5a0572eed54f7c1000f1e3e71b"
        },
        "date": 1704919723919,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 28.01046347295315,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "roubert@google.com",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "committer": {
            "email": "fredrik@roubert.name",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "distinct": true,
          "id": "a837e0d3991e05db61dfbd35ee985976109092d5",
          "message": "ICU-22532 Set a value for _POSIX_C_SOURCE to get symlink() declared.\n\nISO C99 and later do not support implicit function declarations.",
          "timestamp": "2024-01-11T17:35:28+09:00",
          "tree_id": "8a3d055b1a7b5613d68bfa5913908d0eda3c9963",
          "url": "https://github.com/unicode-org/icu/commit/a837e0d3991e05db61dfbd35ee985976109092d5"
        },
        "date": 1704962867275,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 28.087981756282595,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "y.umaoka@gmail.com",
            "name": "yumaoka",
            "username": "yumaoka"
          },
          "committer": {
            "email": "yumaoka@users.noreply.github.com",
            "name": "Yoshito Umaoka",
            "username": "yumaoka"
          },
          "distinct": true,
          "id": "dc7014fda6d6f08b3ddf468bddd62548c8c6263f",
          "message": "ICU-22620 tz2023d updates",
          "timestamp": "2024-01-11T11:41:23-05:00",
          "tree_id": "324b428a5eb44f9b51c10f09c8bda35c1923126b",
          "url": "https://github.com/unicode-org/icu/commit/dc7014fda6d6f08b3ddf468bddd62548c8c6263f"
        },
        "date": 1704991923445,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 28.19128585681552,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ftang@chromium.org",
            "name": "Frank Tang",
            "username": "FrankYFTang"
          },
          "committer": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "distinct": true,
          "id": "509405c9f2ee99a56a3fc77ba8de4799cec28d7c",
          "message": "ICU-22626 Fix leakage when 2 '=' in PluralRules\n\nSee #2782",
          "timestamp": "2024-01-12T09:36:29-08:00",
          "tree_id": "ddfdfc694910b45a4719331b731180fd916366a0",
          "url": "https://github.com/unicode-org/icu/commit/509405c9f2ee99a56a3fc77ba8de4799cec28d7c"
        },
        "date": 1705081695488,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 28.25020002112636,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "roubert@google.com",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "committer": {
            "email": "fredrik@roubert.name",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "distinct": true,
          "id": "ab72ab1d4a3c3f9beeb7d92b0c7817ca93dfdb04",
          "message": "ICU-22520 Replace char arrays with icu::CharString & icu::MemoryPool.",
          "timestamp": "2024-01-13T17:05:58+09:00",
          "tree_id": "371968f83db3ff8f1becc9ff5b5797046b90f0b7",
          "url": "https://github.com/unicode-org/icu/commit/ab72ab1d4a3c3f9beeb7d92b0c7817ca93dfdb04"
        },
        "date": 1705133741421,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 28.382305911212466,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "roubert@google.com",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "committer": {
            "email": "fredrik@roubert.name",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "distinct": true,
          "id": "078b88a11abe97766824a0f0e712fa876bbb08b4",
          "message": "ICU-21107 Specify language standard versions C11 & C++17 also for MSVC.\n\nThere were until now no versions specified at all, relying on the\ndefault (or commandline overrides) to be sufficiently recent.",
          "timestamp": "2024-01-16T22:22:05+09:00",
          "tree_id": "20e7b34047139c0cf8057270309bb6431861e19a",
          "url": "https://github.com/unicode-org/icu/commit/078b88a11abe97766824a0f0e712fa876bbb08b4"
        },
        "date": 1705412076540,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 32.09652864301577,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "roubert@google.com",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "committer": {
            "email": "fredrik@roubert.name",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "distinct": true,
          "id": "2d65456a3bb3f874df4c14ca1584598517bfe611",
          "message": "ICU-21107 Specify language standard versions C11 & C++17 also for Bazel.\n\nThis is copied (with C11 added) from:\n\nhttps://github.com/tensorflow/tensorflow/blob/v2.15.0/.bazelrc\n\nThere were until now no versions specified at all, relying on the\ndefault (or commandline overrides) to be sufficiently recent.",
          "timestamp": "2024-01-17T16:26:57+09:00",
          "tree_id": "a0f1e5e082d14396e30841240765d74b49075823",
          "url": "https://github.com/unicode-org/icu/commit/2d65456a3bb3f874df4c14ca1584598517bfe611"
        },
        "date": 1705477055576,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 28.02582931231518,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "roubert@google.com",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "committer": {
            "email": "fredrik@roubert.name",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "distinct": true,
          "id": "4a8cd80973a29a48d4876160406a3fb6004d13bd",
          "message": "ICU-21107 Clarify the C11 & C++17 requirement in the userguide.",
          "timestamp": "2024-01-17T17:48:10+09:00",
          "tree_id": "1eea726aa6877c37f4697232e587e613eee6790b",
          "url": "https://github.com/unicode-org/icu/commit/4a8cd80973a29a48d4876160406a3fb6004d13bd"
        },
        "date": 1705481479274,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 28.15601069975671,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nmihai_2000@yahoo.com",
            "name": "Mihai Nita",
            "username": "mihnita"
          },
          "committer": {
            "email": "nmihai_2000@yahoo.com",
            "name": "Mihai Nita",
            "username": "mihnita"
          },
          "distinct": true,
          "id": "47b9a517be000559499dcfcb2ed62eace740e194",
          "message": "ICU-21107 Specify language standard versions C11 & C++17 also for MSVC\n\nICU-21107 Specify language standard versions C11 & C++17 also for MSVC",
          "timestamp": "2024-01-17T09:26:22-08:00",
          "tree_id": "662e3a8cfae8854367b76031cf58a4ae6db8185b",
          "url": "https://github.com/unicode-org/icu/commit/47b9a517be000559499dcfcb2ed62eace740e194"
        },
        "date": 1705513040300,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 28.38980169361009,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "roubert@google.com",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "committer": {
            "email": "fredrik@roubert.name",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "distinct": true,
          "id": "981057143ceb68bcf6dc6c81a3c279645f98d6a9",
          "message": "ICU-21107 Remove CI jobs using MSVC too old to support C11.\n\nVersions before VS 2019 don't have C11 standard library features:\n\nhttps://learn.microsoft.com/en-us/cpp/overview/visual-cpp-language-conformance?view=msvc-170#c-standard-library-features-1",
          "timestamp": "2024-01-18T13:03:45+09:00",
          "tree_id": "d7a42b277b0c3c249d6c4692067638899dd6c15e",
          "url": "https://github.com/unicode-org/icu/commit/981057143ceb68bcf6dc6c81a3c279645f98d6a9"
        },
        "date": 1705550840269,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 28.219436055499397,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "roubert@google.com",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "committer": {
            "email": "fredrik@roubert.name",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "distinct": true,
          "id": "d0672fa8ab11a9795ad7d42f20e63dd2307cd8e2",
          "message": "ICU-21107 Simplify type_traits expressions for C++17.",
          "timestamp": "2024-01-18T20:28:39+09:00",
          "tree_id": "0893fe1623c3207c625e372bb155877aa123d8e3",
          "url": "https://github.com/unicode-org/icu/commit/d0672fa8ab11a9795ad7d42f20e63dd2307cd8e2"
        },
        "date": 1705578055576,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 28.106046907761428,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "roubert@google.com",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "committer": {
            "email": "fredrik@roubert.name",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "distinct": true,
          "id": "ca53838b8363589816b1464140128c2963a3881d",
          "message": "ICU-22576 Remove now obsolete pre-C11 backward compatibility code.",
          "timestamp": "2024-01-19T08:05:24+09:00",
          "tree_id": "2154f68dd394fa6c651518a6ef0b269ed454d4c3",
          "url": "https://github.com/unicode-org/icu/commit/ca53838b8363589816b1464140128c2963a3881d"
        },
        "date": 1705620286011,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 28.13529298426127,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "roubert@google.com",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "committer": {
            "email": "fredrik@roubert.name",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "distinct": true,
          "id": "c5160765d40cf18751f4b3407e1cc7e8800c1cbe",
          "message": "ICU-22639 Clone the calendar so we don't mess with the real one.",
          "timestamp": "2024-01-19T08:07:22+09:00",
          "tree_id": "392cd07c74d4cd17a45694c2bd1cf12de9aeeff5",
          "url": "https://github.com/unicode-org/icu/commit/c5160765d40cf18751f4b3407e1cc7e8800c1cbe"
        },
        "date": 1705621097295,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 28.112634018069983,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "roubert@google.com",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "committer": {
            "email": "fredrik@roubert.name",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "distinct": true,
          "id": "7b690aa8c797ca3fead7821200f1b1b10093bcfc",
          "message": "ICU-22639 Revert now obsolete bug workarounds.\n\nThis reverts changes from commit 47b9a517be000559499dcfcb2ed62eace740e194.\nThis reverts changes from commit 214ae60d9425e5cc78580d0dddf3bbbe4c80e991.",
          "timestamp": "2024-01-19T13:11:49+09:00",
          "tree_id": "9c5b90e11bb0ac463376ac7cccc1376f7f71a481",
          "url": "https://github.com/unicode-org/icu/commit/7b690aa8c797ca3fead7821200f1b1b10093bcfc"
        },
        "date": 1705638244455,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 28.0550194473518,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ftang@chromium.org",
            "name": "Frank Tang",
            "username": "FrankYFTang"
          },
          "committer": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "distinct": true,
          "id": "3eb8923b9730efeae10a92f8054f63495fe8a95f",
          "message": "ICU-22638 Use parseNumber to fix buffer-overflow\n\nSee #2795",
          "timestamp": "2024-01-19T01:43:35-08:00",
          "tree_id": "eae3867ff6963eb9947bc1f0897e722ef88616e8",
          "url": "https://github.com/unicode-org/icu/commit/3eb8923b9730efeae10a92f8054f63495fe8a95f"
        },
        "date": 1705658821761,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 28.149312304269824,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ftang@chromium.org",
            "name": "Frank Tang",
            "username": "FrankYFTang"
          },
          "committer": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "distinct": true,
          "id": "c8336085bb7489650c449f05c13be7b6a660fd89",
          "message": "ICU-22637 Rewrite custom timezone parser\n\nSee #2792",
          "timestamp": "2024-01-19T01:44:52-08:00",
          "tree_id": "f26273c3c36ce63d5c80fabed5cea318955aa21f",
          "url": "https://github.com/unicode-org/icu/commit/c8336085bb7489650c449f05c13be7b6a660fd89"
        },
        "date": 1705659525173,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 28.194933455331448,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "roubert@google.com",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "committer": {
            "email": "fredrik@roubert.name",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "distinct": true,
          "id": "7cec4a9308b0d693b08f0bc35a2a08ce6d5f4646",
          "message": "ICU-21107 Replace use of adapter and binder classes removed in C++17.",
          "timestamp": "2024-01-19T19:49:44+09:00",
          "tree_id": "8d10c33edb1e82c9049488e3e35ed8814a73ce0d",
          "url": "https://github.com/unicode-org/icu/commit/7cec4a9308b0d693b08f0bc35a2a08ce6d5f4646"
        },
        "date": 1705662086344,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 28.265035250203763,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ftang@chromium.org",
            "name": "Frank Tang",
            "username": "FrankYFTang"
          },
          "committer": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "distinct": true,
          "id": "9832f48e229010e2a5d413eb8d48cacc3cafbdcd",
          "message": "ICU-22636 Return U_BRK_RULE_SYNTAX when status number is too large\n\nSee #2793",
          "timestamp": "2024-01-19T17:16:54-08:00",
          "tree_id": "1f0a7cf45c1ed76faa6c21a5a7eb870fdcf5c630",
          "url": "https://github.com/unicode-org/icu/commit/9832f48e229010e2a5d413eb8d48cacc3cafbdcd"
        },
        "date": 1705714008072,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 28.619470398101235,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "roubert@google.com",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "committer": {
            "email": "fredrik@roubert.name",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "distinct": true,
          "id": "9167d6beaf4be16f2f88ec9997563d21d4251757",
          "message": "ICU-21107 Update configure files from configure.ac using autoreconf.",
          "timestamp": "2024-01-22T12:30:24+09:00",
          "tree_id": "5199ff2a053426e21ec1340797831ad7a4213258",
          "url": "https://github.com/unicode-org/icu/commit/9167d6beaf4be16f2f88ec9997563d21d4251757"
        },
        "date": 1705895262627,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 30.70265447212584,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "roubert@google.com",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "committer": {
            "email": "fredrik@roubert.name",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "distinct": true,
          "id": "49a7a1e76d720a265daf420d4d271dd0d30cbc16",
          "message": "ICU-22520 Update urename.h with ulocimp_getParent().\n\nThis was forgotten in commit 037449fff8db873afdd2e3c6ed5d24db604ffe64.",
          "timestamp": "2024-01-22T12:30:37+09:00",
          "tree_id": "21a2cde30084f1beb8471fc422d62ba35a9e0917",
          "url": "https://github.com/unicode-org/icu/commit/49a7a1e76d720a265daf420d4d271dd0d30cbc16"
        },
        "date": 1705896067212,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 28.549088051604024,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ftang@chromium.org",
            "name": "Frank Tang",
            "username": "FrankYFTang"
          },
          "committer": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "distinct": true,
          "id": "7c48842e239e509a419a04e7d25fdbf1196eb90a",
          "message": "ICU-22637 Accept non-ASCII digit to fix mistake",
          "timestamp": "2024-01-22T14:00:12-08:00",
          "tree_id": "103f0cbd51a907fd2defd2a7044ed7a84d7b3909",
          "url": "https://github.com/unicode-org/icu/commit/7c48842e239e509a419a04e7d25fdbf1196eb90a"
        },
        "date": 1705967860797,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 28.785502475087103,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "roubert@google.com",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "committer": {
            "email": "fredrik@roubert.name",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "distinct": true,
          "id": "5eded36279b89b00420d37acdbdfcf57e2cdd76d",
          "message": "ICU-22520 Bugfix: Use macro parameter name instead of variable name.",
          "timestamp": "2024-01-23T13:00:26+09:00",
          "tree_id": "59c90c02a4a698226f65d7b5c2ee959524b51eae",
          "url": "https://github.com/unicode-org/icu/commit/5eded36279b89b00420d37acdbdfcf57e2cdd76d"
        },
        "date": 1705983509206,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 28.209814093635135,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "roubert@google.com",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "committer": {
            "email": "fredrik@roubert.name",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "distinct": true,
          "id": "e81b8727aaafa306858565c0e4116703c4893459",
          "message": "ICU-22532 Move the definition of _POSIX_C_SOURCE to the Makefile.\n\nThis is already set in Makefile.in and therefore results in a macro\nredefined warning if also defined in the source file. It seems that\nsetting this in the Makefile was how it was originally intended do be\ndone (but then it was just never updated there).",
          "timestamp": "2024-01-23T13:00:54+09:00",
          "tree_id": "9a6422a3f0dee226460d2bc21a04a4489dc5d0f3",
          "url": "https://github.com/unicode-org/icu/commit/e81b8727aaafa306858565c0e4116703c4893459"
        },
        "date": 1705984234839,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 28.19488560734452,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ftang@chromium.org",
            "name": "Frank Tang",
            "username": "FrankYFTang"
          },
          "committer": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "distinct": true,
          "id": "f7f9dbb88d34011c1fc9aee53e9ce6fda20bfb1e",
          "message": "ICU-22641 Change const refs in the class to const pointers\n\nThe function may return nullptr, we cannot just deref the return value.\nChange them to const pointer instead.",
          "timestamp": "2024-01-23T13:39:49-08:00",
          "tree_id": "272d629ce9dbff52e51470b04d03f4392b487b0c",
          "url": "https://github.com/unicode-org/icu/commit/f7f9dbb88d34011c1fc9aee53e9ce6fda20bfb1e"
        },
        "date": 1706046658187,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 28.127919837693046,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "elango@unicode.org",
            "name": "Elango Cheran",
            "username": "echeran"
          },
          "committer": {
            "email": "elango@unicode.org",
            "name": "Elango Cheran",
            "username": "echeran"
          },
          "distinct": true,
          "id": "400d97e7d206ffae77c294faeb9e2aa3850c6c23",
          "message": "ICU-22533 Update Maven CLI instructions for multi-module ICU4J\n\nSee #2791",
          "timestamp": "2024-01-23T13:59:56-08:00",
          "tree_id": "e634878e4f29d0755bdf5063ebaffc4befeef719",
          "url": "https://github.com/unicode-org/icu/commit/400d97e7d206ffae77c294faeb9e2aa3850c6c23"
        },
        "date": 1706047638081,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 28.359694024135354,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ftang@chromium.org",
            "name": "Frank Tang",
            "username": "FrankYFTang"
          },
          "committer": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "distinct": true,
          "id": "8f80c62aa2a3307d0d6248fbb2116851edcdcce4",
          "message": "ICU-22638 Fix cast overflow issue",
          "timestamp": "2024-01-25T12:11:56-08:00",
          "tree_id": "492c598550f87b2b9b0f1f5eb9b3a758be6cb673",
          "url": "https://github.com/unicode-org/icu/commit/8f80c62aa2a3307d0d6248fbb2116851edcdcce4"
        },
        "date": 1706214092442,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 29.676388958232927,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ftang@chromium.org",
            "name": "Frank Tang",
            "username": "FrankYFTang"
          },
          "committer": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "distinct": true,
          "id": "e1415d1282b058e701d41d75e42b0bffed5f8477",
          "message": "ICU-22635 Avoid integer-overflow for invalid large UChar32",
          "timestamp": "2024-01-29T11:57:12-08:00",
          "tree_id": "037f96ae21f0c3b9d50004e2ca03d6b8ca93c720",
          "url": "https://github.com/unicode-org/icu/commit/e1415d1282b058e701d41d75e42b0bffed5f8477"
        },
        "date": 1706558961724,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 28.05411327864396,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "roubert@google.com",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "committer": {
            "email": "fredrik@roubert.name",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "distinct": true,
          "id": "ae9cc8cbd1f0f70d429ceb1c5c369d5481829661",
          "message": "ICU-22520 Replace char arrays with icu::CharString.",
          "timestamp": "2024-01-30T12:04:53+01:00",
          "tree_id": "0ece6fb5f0d2ea395bfe0105bb8acbb92608419d",
          "url": "https://github.com/unicode-org/icu/commit/ae9cc8cbd1f0f70d429ceb1c5c369d5481829661"
        },
        "date": 1706613039246,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 28.116338429327435,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ftang@chromium.org",
            "name": "Frank Tang",
            "username": "FrankYFTang"
          },
          "committer": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "distinct": true,
          "id": "9515e82741875b09fbd223573fb5e6d23fad6023",
          "message": "ICU-22633 Fix Integer-overflow in icu_75::Calendar::add\n\nSee #2805",
          "timestamp": "2024-02-01T13:49:41-08:00",
          "tree_id": "b72fd7a042249c6199b503abc8f52b98afa24697",
          "url": "https://github.com/unicode-org/icu/commit/9515e82741875b09fbd223573fb5e6d23fad6023"
        },
        "date": 1706877722512,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 28.490146017623637,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "roubert@google.com",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "committer": {
            "email": "fredrik@roubert.name",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "distinct": true,
          "id": "6562a7df85f6aa9c3f028e6f9523de3f9ec3fa7f",
          "message": "ICU-22627 Delete obsolete test case letest/api/ScriptTest.",
          "timestamp": "2024-02-02T15:55:27+01:00",
          "tree_id": "c6ec0ba46d243b006649efd89d94c963c871254f",
          "url": "https://github.com/unicode-org/icu/commit/6562a7df85f6aa9c3f028e6f9523de3f9ec3fa7f"
        },
        "date": 1706886440116,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 28.940207278587305,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ftang@chromium.org",
            "name": "Frank Tang",
            "username": "FrankYFTang"
          },
          "committer": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "distinct": true,
          "id": "b8271577b66f0a29409d40b686505e917538c1e8",
          "message": "ICU-22649 Fix possible leakage by using LocalUResourceBundlePointer",
          "timestamp": "2024-02-02T10:24:21-08:00",
          "tree_id": "c1bd16adf0d830bd97276ba436eab5aab194fc98",
          "url": "https://github.com/unicode-org/icu/commit/b8271577b66f0a29409d40b686505e917538c1e8"
        },
        "date": 1706898982217,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 28.475436996690835,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "roubert@google.com",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "committer": {
            "email": "fredrik@roubert.name",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "distinct": true,
          "id": "6fa113eaa8e73088399995ac79fdc332a7499c1c",
          "message": "ICU-22651 Refactor U_DEFINE_LOCAL_OPEN_POINTER into a template.",
          "timestamp": "2024-02-05T14:15:15+01:00",
          "tree_id": "d629c9f9201fe85e1c9a2514b5ce1db420b7841d",
          "url": "https://github.com/unicode-org/icu/commit/6fa113eaa8e73088399995ac79fdc332a7499c1c"
        },
        "date": 1707139624053,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 28.29843593187115,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "roubert@google.com",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "committer": {
            "email": "fredrik@roubert.name",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "distinct": true,
          "id": "835b009314ed49778a4d664f770c4a9e2a15fa75",
          "message": "ICU-22520 Make ulocimp_get*() internal to ulocimp_getSubtags().\n\nThese functions now no longer have any other callers so they can be made\ninternal to the compilation unit of ulocimp_getSubtags(), thus bringing\nthem back to how they originally were intended to be used (and making\nthe comment above them true once again).\n\nThis also makes it possible to remove the temporary icu::CharString\nobjects that previously were returned to callers and instead write\ndirectly to icu::ByteSink, making the code both simpler and less\nwasteful (also that how this was once intended).",
          "timestamp": "2024-02-06T13:12:55+01:00",
          "tree_id": "5aaae898059a68c8783a483ae59fb89eb5ef486f",
          "url": "https://github.com/unicode-org/icu/commit/835b009314ed49778a4d664f770c4a9e2a15fa75"
        },
        "date": 1707222294438,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 28.239640703844522,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "roubert@google.com",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "committer": {
            "email": "fredrik@roubert.name",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "distinct": true,
          "id": "d28e12b1f22491b451642dd84299e9f321c422ab",
          "message": "ICU-22520 Replace char arrays with icu::CharString.",
          "timestamp": "2024-02-06T19:53:53+01:00",
          "tree_id": "4c91f99c22c8ec1dc81ce14a6cb4bb3a4bfe2e29",
          "url": "https://github.com/unicode-org/icu/commit/d28e12b1f22491b451642dd84299e9f321c422ab"
        },
        "date": 1707246177905,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 27.9989700150393,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pedberg@unicode.org",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "committer": {
            "email": "42151464+pedberg-icu@users.noreply.github.com",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "distinct": true,
          "id": "43ab3d1de8a06f93bd07fa4b9d5168e1df440783",
          "message": "ICU-22583 BRS 75rc CLDR 45-alpha0 to ICU main part 4 (fix to get new unitPrefixes data)",
          "timestamp": "2024-02-06T18:07:44-08:00",
          "tree_id": "503d6ee43c8f57e8d44b1fb5fb72bb4b1c0c4430",
          "url": "https://github.com/unicode-org/icu/commit/43ab3d1de8a06f93bd07fa4b9d5168e1df440783"
        },
        "date": 1707272279429,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 28.173803475134264,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "roubert@google.com",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "committer": {
            "email": "fredrik@roubert.name",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "distinct": true,
          "id": "56509e88bfd9e1e48d2541373b1beeb12844ab58",
          "message": "ICU-22651 Move LocalOpenPointer into an internal nested namespace.",
          "timestamp": "2024-02-07T14:27:17+01:00",
          "tree_id": "04d9809965c9d4d76bf3639bdba6b050e9263219",
          "url": "https://github.com/unicode-org/icu/commit/56509e88bfd9e1e48d2541373b1beeb12844ab58"
        },
        "date": 1707313521107,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 28.13457586459289,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "roubert@google.com",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "committer": {
            "email": "fredrik@roubert.name",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "distinct": true,
          "id": "a6efa924ad04f7e3c7ad325237bf026b39abe4e8",
          "message": "ICU-22520 Let ulocimp_getRegionForSupplementalData() return CharString.",
          "timestamp": "2024-02-07T14:27:40+01:00",
          "tree_id": "1506023d9bf4a704e5f9fea58c84f3a8dca7c264",
          "url": "https://github.com/unicode-org/icu/commit/a6efa924ad04f7e3c7ad325237bf026b39abe4e8"
        },
        "date": 1707314276599,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 27.905115613850654,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "committer": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "distinct": true,
          "id": "0b66fada30eeb572a75f7266db56326600c437a2",
          "message": "ICU-22633 Fix integer overflow inside Calendar code\n\nSee #2806",
          "timestamp": "2024-02-07T10:58:41-08:00",
          "tree_id": "65a74dc2d406474c298c0a40ec731d351f5ee698",
          "url": "https://github.com/unicode-org/icu/commit/0b66fada30eeb572a75f7266db56326600c437a2"
        },
        "date": 1707332884853,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 28.1484584615118,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "roubert@google.com",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "committer": {
            "email": "fredrik@roubert.name",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "distinct": true,
          "id": "a210fc8351141c2e0547db1020f19dfd11c62462",
          "message": "ICU-22651 Add a docstring for LocalOpenPointer.",
          "timestamp": "2024-02-07T21:47:13+01:00",
          "tree_id": "7aa0e42d2f2f7c37a21414f9661c3e075ca9619d",
          "url": "https://github.com/unicode-org/icu/commit/a210fc8351141c2e0547db1020f19dfd11c62462"
        },
        "date": 1707339519357,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 28.009075288751163,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "roubert@google.com",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "committer": {
            "email": "fredrik@roubert.name",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "distinct": true,
          "id": "699555a5bd43b439aba370288fa90f5fcb0705f8",
          "message": "ICU-22520 Use a ByteSink append buffer instead of a local CharString.\n\nThese functions that eventually write their output to a ByteSink need a\nsmall temporary buffer for processing the subtag they're about to write\nand currently use a local CharString object to provide this buffer,\nwhich then gets written to the ByteSink and discarded.\n\nThis intermediate step is unnecessary as a ByteSink can provide an\nappend buffer which can be used instead, eliminating the need to\nallocate a local temporary buffer and to copy the data around.\n\nThis approach also makes it natural to split the processing into two\nsteps, first calculating the length of the subtag, then processing it,\nwhich makes it possible to return early when no output is requested.",
          "timestamp": "2024-02-08T00:38:09+01:00",
          "tree_id": "687e9039d6c4bc244a46afe4c68d2213490bed86",
          "url": "https://github.com/unicode-org/icu/commit/699555a5bd43b439aba370288fa90f5fcb0705f8"
        },
        "date": 1707349646344,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 28.11056692102567,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "egg.robin.leroy@gmail.com",
            "name": "Robin Leroy",
            "username": "eggrobin"
          },
          "committer": {
            "email": "egg.robin.leroy@gmail.com",
            "name": "Robin Leroy",
            "username": "eggrobin"
          },
          "distinct": true,
          "id": "ba1208e49b10c808651cd40bc05e0138c5291194",
          "message": "ICU-22518 Add a flag to export the output of the reference implementation from the old segmentation monkey tests",
          "timestamp": "2024-02-08T04:54:33+01:00",
          "tree_id": "b81baf84994204a358f7267689b22f0f54f25627",
          "url": "https://github.com/unicode-org/icu/commit/ba1208e49b10c808651cd40bc05e0138c5291194"
        },
        "date": 1707365025927,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 29.668691507376945,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "roubert@google.com",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "committer": {
            "email": "fredrik@roubert.name",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "distinct": true,
          "id": "63ae786bf79e10568b8d20ad770c38e17c053e20",
          "message": "ICU-22520 Refactor function macros into inline functions.\n\nThis is to facilitate further refactoring of the locale code.",
          "timestamp": "2024-02-08T14:24:48+01:00",
          "tree_id": "075a9bcb2f9fdc9f53963a349456eb9ec23eead8",
          "url": "https://github.com/unicode-org/icu/commit/63ae786bf79e10568b8d20ad770c38e17c053e20"
        },
        "date": 1707399304351,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 27.288633061985777,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "y.umaoka@gmail.com",
            "name": "yumaoka",
            "username": "yumaoka"
          },
          "committer": {
            "email": "yumaoka@users.noreply.github.com",
            "name": "Yoshito Umaoka",
            "username": "yumaoka"
          },
          "distinct": true,
          "id": "cd251ee62e08dd634162a269c54374be99b51c86",
          "message": "ICU-22659 tzdata2024a updates in ICU repo",
          "timestamp": "2024-02-08T15:00:39-05:00",
          "tree_id": "efd70214f351f283616c21f52d058f86192e9e92",
          "url": "https://github.com/unicode-org/icu/commit/cd251ee62e08dd634162a269c54374be99b51c86"
        },
        "date": 1707423048706,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 28.555719040434965,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ftang@chromium.org",
            "name": "Frank Tang",
            "username": "FrankYFTang"
          },
          "committer": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "distinct": true,
          "id": "abcb80fd536b4505d8f74209aca71656a7aa54e7",
          "message": "ICU-22615 Test TimeZoneNames API will not assert with non ASCII.\n\nAdd tests and return error when the ID is non ASCII",
          "timestamp": "2024-02-08T23:37:14-08:00",
          "tree_id": "90ed3c527ea7ff05be9931355803f818ebf1ea90",
          "url": "https://github.com/unicode-org/icu/commit/abcb80fd536b4505d8f74209aca71656a7aa54e7"
        },
        "date": 1707464846621,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 28.090174546164118,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pedberg@unicode.org",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "committer": {
            "email": "42151464+pedberg-icu@users.noreply.github.com",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "distinct": true,
          "id": "2c16b037cf6a9c7b01addbd4ca2873f164485f39",
          "message": "ICU-22557 Add kxv_IN to build-icu-data.xml, update generate stubs",
          "timestamp": "2024-02-09T09:40:52-08:00",
          "tree_id": "b673ae1bea308a76a3e0d999945aa2dd9b3199b1",
          "url": "https://github.com/unicode-org/icu/commit/2c16b037cf6a9c7b01addbd4ca2873f164485f39"
        },
        "date": 1707501146663,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 28.124628530715466,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "roubert@google.com",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "committer": {
            "email": "fredrik@roubert.name",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "distinct": true,
          "id": "61fdbe0d0699e8b5678e1bb7a36020203eac729f",
          "message": "ICU-22520 Refactor code to remove the use of goto for error handling.\n\nThis is to facilitate further refactoring of the locale code, goto\ndoesn't play all too well with C++ memory handling.",
          "timestamp": "2024-02-09T18:47:22+01:00",
          "tree_id": "a75c950f6f286e7d652771b556f786ddac923676",
          "url": "https://github.com/unicode-org/icu/commit/61fdbe0d0699e8b5678e1bb7a36020203eac729f"
        },
        "date": 1707502933370,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 28.05603625451156,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "roubert@google.com",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "committer": {
            "email": "fredrik@roubert.name",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "distinct": true,
          "id": "69c8e12642fb628e7b6643720c34e1eb83899859",
          "message": "ICU-22520 Remove local custom code for parsing variant subtags.\n\nNow when the parseTagString() helper function just is a wrapper over\nulocimp_getSubtags() it can be replaced by calling that function\ndirectly instead and letting it handle variant subtags as well.",
          "timestamp": "2024-02-09T20:26:09+01:00",
          "tree_id": "cd8533c16f9a8b5c3fa3750e01d986705cd967be",
          "url": "https://github.com/unicode-org/icu/commit/69c8e12642fb628e7b6643720c34e1eb83899859"
        },
        "date": 1707507466914,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 28.581554247072624,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "roubert@google.com",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "committer": {
            "email": "fredrik@roubert.name",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "distinct": true,
          "id": "939f08f2743dc7ec752e3a74758ccde0bb7a91d4",
          "message": "ICU-22520 Use C++ function signatures for internal C++ functions.\n\nSome of this code was originally written as C code and some of this code\nwas originally written as C++ code but made to resemble the then already\nexisting code that had once been C code. Changing it all to normal C++\nnow will make it easier and safer to work with going forward.\n\n· Use unnamed namespace instead of static.\n· Use reference instead of non-nullable pointer.\n· Use bool instead of UBool.\n· Use constexpr for static data.\n· Use U_EXPORT instead of U_CAPI or U_CFUNC.\n· Use the default calling convention instead of U_EXPORT2.",
          "timestamp": "2024-02-12T21:44:06+01:00",
          "tree_id": "a5ce266887bc2a225e1a34fc014831da5bc0dc59",
          "url": "https://github.com/unicode-org/icu/commit/939f08f2743dc7ec752e3a74758ccde0bb7a91d4"
        },
        "date": 1707771230503,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 28.13578497417261,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ftang@chromium.org",
            "name": "Frank Tang",
            "username": "FrankYFTang"
          },
          "committer": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "distinct": true,
          "id": "b24b251bca2f4decd0d25ece718e9adeaa63c468",
          "message": "ICU-22633 Fix more int overflow issues in calendar",
          "timestamp": "2024-02-13T17:24:18-08:00",
          "tree_id": "6b64c9452543823e502731cc5dfedc1f40956812",
          "url": "https://github.com/unicode-org/icu/commit/b24b251bca2f4decd0d25ece718e9adeaa63c468"
        },
        "date": 1707874464299,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 28.216789239871336,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "committer": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "distinct": true,
          "id": "164a56b73613159111d32dbb8497c6f5e96fa5cf",
          "message": "ICU-22533 move custom normalization page from Sites to GitHub",
          "timestamp": "2024-02-14T09:35:14-08:00",
          "tree_id": "9b052ccbe6d8b023daf30b675cda347af43813b8",
          "url": "https://github.com/unicode-org/icu/commit/164a56b73613159111d32dbb8497c6f5e96fa5cf"
        },
        "date": 1707932371599,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 28.081991829771674,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "committer": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "distinct": true,
          "id": "90b2eed71aa31ff5d4859502f92922f419d5b510",
          "message": "ICU-22533 compact norm16 tables\n\nSee #2827",
          "timestamp": "2024-02-14T14:49:43-08:00",
          "tree_id": "0b8939e79071e9ea20e3823a83e7bbf11a6fd317",
          "url": "https://github.com/unicode-org/icu/commit/90b2eed71aa31ff5d4859502f92922f419d5b510"
        },
        "date": 1707951459529,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 28.251432447586495,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "103115900+rp9-next@users.noreply.github.com",
            "name": "Rahul Pandey",
            "username": "rp9-next"
          },
          "committer": {
            "email": "103115900+rp9-next@users.noreply.github.com",
            "name": "Rahul Pandey",
            "username": "rp9-next"
          },
          "distinct": true,
          "id": "df46d089d545bbb25cce9e01f94c154e3124917d",
          "message": "ICU-22314 Refactor Azure CI into workflows conditional on modified paths\n\nSee #2701",
          "timestamp": "2024-02-16T15:23:47+05:30",
          "tree_id": "5897e253e9b21b8c0482b4b2ab8812069f68b761",
          "url": "https://github.com/unicode-org/icu/commit/df46d089d545bbb25cce9e01f94c154e3124917d"
        },
        "date": 1708077368955,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 28.243945146475273,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "elango@unicode.org",
            "name": "Elango Cheran",
            "username": "echeran"
          },
          "committer": {
            "email": "103115900+rp9-next@users.noreply.github.com",
            "name": "Rahul Pandey",
            "username": "rp9-next"
          },
          "distinct": true,
          "id": "8acebe4a0c6986814c03497ee303becfb3c153c5",
          "message": "ICU-22314 Add PR triggers for Azure pipelines\n\nSee #2835",
          "timestamp": "2024-02-21T13:38:48+05:30",
          "tree_id": "577bf466d30579d5773c3ed56eb306dcb2ab6406",
          "url": "https://github.com/unicode-org/icu/commit/8acebe4a0c6986814c03497ee303becfb3c153c5"
        },
        "date": 1708503157515,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 28.212098596791108,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "diegogy@google.com",
            "name": "Diego Gutierrez Yepiz",
            "username": "Diego1149"
          },
          "committer": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "distinct": true,
          "id": "f3e50a7624384e325b9fb2c133a887c505308301",
          "message": "ICU-22582 Avoid synchronizing in RuleBasedBreakIterator and ULocale unless strictly necessary\n\nSee #2775",
          "timestamp": "2024-02-21T09:38:41-08:00",
          "tree_id": "98e355fecc333b6d0e2b66ac110db362a12d214d",
          "url": "https://github.com/unicode-org/icu/commit/f3e50a7624384e325b9fb2c133a887c505308301"
        },
        "date": 1708537416719,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 28.135940852532336,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "elango@unicode.org",
            "name": "Elango Cheran",
            "username": "echeran"
          },
          "committer": {
            "email": "elango@unicode.org",
            "name": "Elango Cheran",
            "username": "echeran"
          },
          "distinct": true,
          "id": "4633254f9ea434bb48a30fbcc98812eb561ff4eb",
          "message": "ICU-22314 Move Cygwin test to post-merge pipeline",
          "timestamp": "2024-02-22T11:23:17-08:00",
          "tree_id": "032c3b808d111452bbfae8a504696914a4339296",
          "url": "https://github.com/unicode-org/icu/commit/4633254f9ea434bb48a30fbcc98812eb561ff4eb"
        },
        "date": 1708629991526,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 28.217397488529944,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shane@unicode.org",
            "name": "Shane F. Carr",
            "username": "sffc"
          },
          "committer": {
            "email": "shane@unicode.org",
            "name": "Shane F. Carr",
            "username": "sffc"
          },
          "distinct": true,
          "id": "fd5d6c97b1d0cff4a07db3c7e7ab04b20099e124",
          "message": "ICU-22532 Improve commit checker instructions\n\nSee #2622",
          "timestamp": "2024-02-23T16:38:14-06:00",
          "tree_id": "60a62e4a47c60e625c4950bc7593f7307213164f",
          "url": "https://github.com/unicode-org/icu/commit/fd5d6c97b1d0cff4a07db3c7e7ab04b20099e124"
        },
        "date": 1708728592467,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 28.70839488547177,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "103115900+rp9-next@users.noreply.github.com",
            "name": "Rahul Pandey",
            "username": "rp9-next"
          },
          "committer": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "distinct": true,
          "id": "3c82e6857c0bc0bbe93c0cdeaf03be3844dcad96",
          "message": "ICU-22676 Undefine move32 since it is interpreted system call with MSVC ARM64",
          "timestamp": "2024-02-26T08:55:31-08:00",
          "tree_id": "f5c231cecb726a1439e4834962579f491c072de0",
          "url": "https://github.com/unicode-org/icu/commit/3c82e6857c0bc0bbe93c0cdeaf03be3844dcad96"
        },
        "date": 1708967192849,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 28.130189903378547,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srl295@gmail.com",
            "name": "Steven R. Loomis",
            "username": "srl295"
          },
          "committer": {
            "email": "srl295@gmail.com",
            "name": "Steven R. Loomis",
            "username": "srl295"
          },
          "distinct": true,
          "id": "ea1c6da07fa345dd485408caee51703bc95c0454",
          "message": "ICU-22677 update LICENSE and README.md and pom.xml\n\n- https://github.com/unicode-org/.github/issues/15\n- use Unicode-3.0 in pom instead of raw license link\n- https://github.com/unicode-org/.github/issues/15",
          "timestamp": "2024-02-26T14:34:59-06:00",
          "tree_id": "f428ed2e6edb51b10fcbfb60669bba6fa40e4b79",
          "url": "https://github.com/unicode-org/icu/commit/ea1c6da07fa345dd485408caee51703bc95c0454"
        },
        "date": 1708980358556,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 28.1331564928154,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "alta.liepa@gmail.com",
            "name": "Rūdolfs Mazurs",
            "username": "Mazurs"
          },
          "committer": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "distinct": true,
          "id": "394341edba31196937036560c8f5a61736cd5636",
          "message": "ICU-22646 Update collation test for Latvian locale\n\nThis test is also relevant to issues ICU-12765 ICU-13508 ICU-20532",
          "timestamp": "2024-02-26T14:09:40-08:00",
          "tree_id": "00d620e77dd2a3017b0eb0b5f62e154f1bc2a707",
          "url": "https://github.com/unicode-org/icu/commit/394341edba31196937036560c8f5a61736cd5636"
        },
        "date": 1708986002333,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 28.5351975227502,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nmihai_2000@yahoo.com",
            "name": "Mihai Nita",
            "username": "mihnita"
          },
          "committer": {
            "email": "nmihai_2000@yahoo.com",
            "name": "Mihai Nita",
            "username": "mihnita"
          },
          "distinct": true,
          "id": "201af462fc1f939f569c70e748f63bb36dd4b2a4",
          "message": "ICU-22675 Migrate from deprecated boxed primitive constructors to their replacements",
          "timestamp": "2024-02-26T16:39:05-08:00",
          "tree_id": "7d9554fa01f6c1eb18e6ec91fd12152f134d2e60",
          "url": "https://github.com/unicode-org/icu/commit/201af462fc1f939f569c70e748f63bb36dd4b2a4"
        },
        "date": 1708994613891,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 28.093734726212933,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "roubert@google.com",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "committer": {
            "email": "fredrik@roubert.name",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "distinct": true,
          "id": "314f03eeaf7473bf86a29ece677050709138ca22",
          "message": "ICU-22532 Don't dereference nullptr (-Wtautological-undefined-compare).",
          "timestamp": "2024-02-27T14:11:38+01:00",
          "tree_id": "df28a8598aeca97427d249d0b72fad1880561c00",
          "url": "https://github.com/unicode-org/icu/commit/314f03eeaf7473bf86a29ece677050709138ca22"
        },
        "date": 1709040355388,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 28.086208565953243,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srl295@gmail.com",
            "name": "Steven R. Loomis",
            "username": "srl295"
          },
          "committer": {
            "email": "srl295@gmail.com",
            "name": "Steven R. Loomis",
            "username": "srl295"
          },
          "distinct": true,
          "id": "6d15faab4806df96e6cba4a6bb0e9a2e67b4c630",
          "message": "ICU-22677 update CONTRIBUTING.md\n\n- https://github.com/unicode-org/.github/issues/12",
          "timestamp": "2024-02-26T11:44:35-06:00",
          "tree_id": "de4512e32457c48a61848ad3c63ceb31c2f5cc13",
          "url": "https://github.com/unicode-org/icu/commit/6d15faab4806df96e6cba4a6bb0e9a2e67b4c630"
        },
        "date": 1709045706456,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 28.19272552836934,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ftang@chromium.org",
            "name": "Frank Tang",
            "username": "FrankYFTang"
          },
          "committer": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "distinct": true,
          "id": "ec800e7407493f65f3f5aee9bc7a657bb25850f1",
          "message": "ICU-22633 Return error if era is out of range",
          "timestamp": "2024-02-27T10:56:28-08:00",
          "tree_id": "b0ca1cbed057e4ae50b219bf5a7e09476612e60d",
          "url": "https://github.com/unicode-org/icu/commit/ec800e7407493f65f3f5aee9bc7a657bb25850f1"
        },
        "date": 1709060968338,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 28.463147271274412,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "elango@unicode.org",
            "name": "Elango Cheran",
            "username": "echeran"
          },
          "committer": {
            "email": "elango@unicode.org",
            "name": "Elango Cheran",
            "username": "echeran"
          },
          "distinct": true,
          "id": "3df505b5116218a7a4be976ba6bd8f802d84a7ff",
          "message": "ICU-22532 Increase Github Actions CI parallelism from 2 to 4",
          "timestamp": "2024-02-27T10:58:09-08:00",
          "tree_id": "4d130cf878d425c7f4f0e10ee2c31848590a3829",
          "url": "https://github.com/unicode-org/icu/commit/3df505b5116218a7a4be976ba6bd8f802d84a7ff"
        },
        "date": 1709061832974,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 28.3117508798114,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "elango@unicode.org",
            "name": "Elango Cheran",
            "username": "echeran"
          },
          "committer": {
            "email": "elango@unicode.org",
            "name": "Elango Cheran",
            "username": "echeran"
          },
          "distinct": true,
          "id": "c2b328267e2c92a7482775c3450bcfd9c3ba3d08",
          "message": "ICU-22532 Increase timeout for exhaustive ICU4J tests",
          "timestamp": "2024-02-27T10:58:18-08:00",
          "tree_id": "42ba8185b0e2d649253444fc20aee39ed6eedc3e",
          "url": "https://github.com/unicode-org/icu/commit/c2b328267e2c92a7482775c3450bcfd9c3ba3d08"
        },
        "date": 1709062254884,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 28.19672958213843,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "committer": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "distinct": true,
          "id": "d1fa15bc1f91335427c9718bfa3609bdae4a9d38",
          "message": "ICU-22571 add Aran script code variant",
          "timestamp": "2024-02-27T14:23:59-08:00",
          "tree_id": "babe607f8fe1499e5a7e94262bccbda62fa5d69b",
          "url": "https://github.com/unicode-org/icu/commit/d1fa15bc1f91335427c9718bfa3609bdae4a9d38"
        },
        "date": 1709073296860,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 28.126090957387326,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ccornelius@google.com",
            "name": "Craig",
            "username": "sven-oly"
          },
          "committer": {
            "email": "cwcornelius@gmail.com",
            "name": "Craig Cornelius",
            "username": "sven-oly"
          },
          "distinct": true,
          "id": "d271d3f269fc06059ddbcb7681567eed7acf35ea",
          "message": "ICU-21952 fix draft version of withoutLocale to ICU 75",
          "timestamp": "2024-02-27T17:03:46-08:00",
          "tree_id": "bf3eaeadd4f31dcc79b2e3fcb1ab637c4627cad1",
          "url": "https://github.com/unicode-org/icu/commit/d271d3f269fc06059ddbcb7681567eed7acf35ea"
        },
        "date": 1709128567773,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 28.2041496791708,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shane@unicode.org",
            "name": "Shane F. Carr",
            "username": "sffc"
          },
          "committer": {
            "email": "shane@unicode.org",
            "name": "Shane F. Carr",
            "username": "sffc"
          },
          "distinct": true,
          "id": "fd5d6c97b1d0cff4a07db3c7e7ab04b20099e124",
          "message": "ICU-22532 Improve commit checker instructions\n\nSee #2622",
          "timestamp": "2024-02-23T16:38:14-06:00",
          "tree_id": "60a62e4a47c60e625c4950bc7593f7307213164f",
          "url": "https://github.com/unicode-org/icu/commit/fd5d6c97b1d0cff4a07db3c7e7ab04b20099e124"
        },
        "date": 1709132374776,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 28.19020745602924,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "dragan@unicode.org",
            "name": "DraganBesevic",
            "username": "DraganBesevic"
          },
          "committer": {
            "email": "131725218+DraganBesevic@users.noreply.github.com",
            "name": "DraganBesevic",
            "username": "DraganBesevic"
          },
          "distinct": true,
          "id": "a1925abf4f070541d7fb795acdc5be0e7cae6211",
          "message": "ICU-22534 CLDR 45 alpha2 integration to ICU",
          "timestamp": "2024-02-28T08:28:08-08:00",
          "tree_id": "0abd28798029ee7d35b38061fcda8f5b1de32c78",
          "url": "https://github.com/unicode-org/icu/commit/a1925abf4f070541d7fb795acdc5be0e7cae6211"
        },
        "date": 1709139172249,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 28.13161244204219,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "elango@unicode.org",
            "name": "Elango Cheran",
            "username": "echeran"
          },
          "committer": {
            "email": "elango@unicode.org",
            "name": "Elango Cheran",
            "username": "echeran"
          },
          "distinct": true,
          "id": "0d7cedc0dd7cbe595ba415bbad226262a5358a3d",
          "message": "ICU-22532 Trigger CI workflows when workflow definitions change",
          "timestamp": "2024-02-28T12:50:43-05:00",
          "tree_id": "fb2b0a51f868dc33626949c35cb4fd4a7f59aaaa",
          "url": "https://github.com/unicode-org/icu/commit/0d7cedc0dd7cbe595ba415bbad226262a5358a3d"
        },
        "date": 1709143283306,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 28.00129622024426,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ftang@chromium.org",
            "name": "Frank Tang",
            "username": "FrankYFTang"
          },
          "committer": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "distinct": true,
          "id": "ceca6c412016f3b7581db2a4385a4a34d38878d9",
          "message": "ICU-22274 display tz db version on the test machine.",
          "timestamp": "2024-02-28T11:07:32-08:00",
          "tree_id": "2742a04788fee4f5ebfd1baf1bec021addaf7dea",
          "url": "https://github.com/unicode-org/icu/commit/ceca6c412016f3b7581db2a4385a4a34d38878d9"
        },
        "date": 1709147900538,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 28.115659154762305,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ccornelius@google.com",
            "name": "Craig",
            "username": "sven-oly"
          },
          "committer": {
            "email": "cwcornelius@gmail.com",
            "name": "Craig Cornelius",
            "username": "sven-oly"
          },
          "distinct": true,
          "id": "09ccfb99566673e8dd731d723e6987ee704a123c",
          "message": "ICU-22534 ICU4J 75 frontload: API status update",
          "timestamp": "2024-02-28T11:38:41-08:00",
          "tree_id": "d99284d713d0ebde9e8c2cb4228d719bf46c07d0",
          "url": "https://github.com/unicode-org/icu/commit/09ccfb99566673e8dd731d723e6987ee704a123c"
        },
        "date": 1709150065522,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 28.20366195757095,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ftang@chromium.org",
            "name": "Frank Tang",
            "username": "FrankYFTang"
          },
          "committer": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "distinct": true,
          "id": "0563859d8cf7c0d3dfea3b576adca25667d77c17",
          "message": "ICU-22679 Optimize calendar code for edge cases\n\nSee #2853",
          "timestamp": "2024-02-28T17:08:24-08:00",
          "tree_id": "9dda80fe6701d9733fcad429d95e8d4934836be9",
          "url": "https://github.com/unicode-org/icu/commit/0563859d8cf7c0d3dfea3b576adca25667d77c17"
        },
        "date": 1709169564930,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 28.008888505489296,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pedberg@unicode.org",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "committer": {
            "email": "42151464+pedberg-icu@users.noreply.github.com",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "distinct": true,
          "id": "7d636aecf7b71724e19a1c4cb6b148eb60fe32e1",
          "message": "ICU-22655 Implement \"special\" conversion for speed-beaufort, part 1 icu4j",
          "timestamp": "2024-02-28T12:57:33-08:00",
          "tree_id": "0749e3e9d3e5cab4cf126ca2fad0c21fe6492ab4",
          "url": "https://github.com/unicode-org/icu/commit/7d636aecf7b71724e19a1c4cb6b148eb60fe32e1"
        },
        "date": 1709215309243,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 28.35083813123024,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ccornelius@google.com",
            "name": "Craig",
            "username": "sven-oly"
          },
          "committer": {
            "email": "cwcornelius@gmail.com",
            "name": "Craig Cornelius",
            "username": "sven-oly"
          },
          "distinct": true,
          "id": "96fb7ae73a78aec7e1a5f3a51e830fa44e0d12df",
          "message": "ICU-22534 ICU4J 75 frontload API change report",
          "timestamp": "2024-02-29T08:49:43-08:00",
          "tree_id": "1e9219cff79569154a8a687958c3f398d584af06",
          "url": "https://github.com/unicode-org/icu/commit/96fb7ae73a78aec7e1a5f3a51e830fa44e0d12df"
        },
        "date": 1709225659816,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 27.994670203197387,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "roubert@google.com",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "committer": {
            "email": "fredrik@roubert.name",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "distinct": true,
          "id": "137b4c9e47bfb8db4d65f92082c366735f3afcf2",
          "message": "ICU-22556 Update configure files from configure.ac using autoreconf.",
          "timestamp": "2024-02-29T19:43:43+01:00",
          "tree_id": "42b58894ebe7e8ff60bb7834b62f8d38cd537f64",
          "url": "https://github.com/unicode-org/icu/commit/137b4c9e47bfb8db4d65f92082c366735f3afcf2"
        },
        "date": 1709232902746,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 28.194443932146438,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "devnexen@gmail.com",
            "name": "David Carlier",
            "username": "devnexen"
          },
          "committer": {
            "email": "fredrik@roubert.name",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "distinct": true,
          "id": "35353f2d7fcc3041ea4ebf03974146026cff2e43",
          "message": "ICU-22671 format_date should use c++ nullptr instead of 0 for udat_open/DateFormat::create\n\n- [x] Required: Issue filed: https://unicode-org.atlassian.net/browse/ICU-22671\n- [x] Required: The PR title must be prefixed with a JIRA Issue number. <!-- For example: \"ICU-1234 Fix xyz\" -->\n- [x] Required: The PR description must include the link to the Jira Issue, for example by completing the URL in the first checklist item\n- [x] Required: Each commit message must be prefixed with a JIRA Issue number. <!-- For example: \"ICU-1234 Fix xyz\" -->\n- [ ] Issue accepted (done by Technical Committee after discussion)\n- [ ] Tests included, if applicable\n- [ ] API docs and/or User Guide docs changed or added, if applicable",
          "timestamp": "2024-02-29T20:02:20+01:00",
          "tree_id": "87eb69e1268f5ed4c01bde0e688a6763d9d6eb61",
          "url": "https://github.com/unicode-org/icu/commit/35353f2d7fcc3041ea4ebf03974146026cff2e43"
        },
        "date": 1709234087983,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 28.162106597944476,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "roubert@google.com",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "committer": {
            "email": "fredrik@roubert.name",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "distinct": true,
          "id": "929cd9bb4f8c24e0f41e82f9c18bc1abd8b9019b",
          "message": "ICU-22520 Standardize return on error for all locale functions.\n\n· No function should do anything if an error has already occurred.\n· On error, a value of 0, nullptr, {}, etc., should be returned.\n· Values shouldn't have overloaded meanings (eg. index or found).\n· Values that are never used should not be returned at all.",
          "timestamp": "2024-02-29T20:42:03+01:00",
          "tree_id": "daece93bdabb4edb08a320d09120ccbf862a1aaf",
          "url": "https://github.com/unicode-org/icu/commit/929cd9bb4f8c24e0f41e82f9c18bc1abd8b9019b"
        },
        "date": 1709236278463,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 28.11156014440738,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ftang@chromium.org",
            "name": "Frank Tang",
            "username": "FrankYFTang"
          },
          "committer": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "distinct": true,
          "id": "aa3e49fa9a706e332528e807fe327b99f271f61b",
          "message": "ICU-22274 Add zdump info while env test fail",
          "timestamp": "2024-02-29T14:36:14-08:00",
          "tree_id": "329040e8e7af4b84568bb10d0ac6a2d676478b17",
          "url": "https://github.com/unicode-org/icu/commit/aa3e49fa9a706e332528e807fe327b99f271f61b"
        },
        "date": 1709246868037,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 31.974277068611677,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shane@unicode.org",
            "name": "Shane F. Carr",
            "username": "sffc"
          },
          "committer": {
            "email": "markus.icu@gmail.com",
            "name": "Markus Scherer",
            "username": "markusicu"
          },
          "distinct": true,
          "id": "71b9b88200db7524f9693a3c8c9d3a5cb9d3d84a",
          "message": "ICU-22319 Fix number range semanticallyEquivalent\n\nSee #2385",
          "timestamp": "2024-03-04T08:23:00-08:00",
          "tree_id": "9fe77b95af0f062eecf225a96aca74cfd9cc5375",
          "url": "https://github.com/unicode-org/icu/commit/71b9b88200db7524f9693a3c8c9d3a5cb9d3d84a"
        },
        "date": 1709569786041,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 28.150798791255077,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ftang@chromium.org",
            "name": "Frank Tang",
            "username": "FrankYFTang"
          },
          "committer": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "distinct": true,
          "id": "37526240e1be1ec8036f4a80772185ca83b1e3b2",
          "message": "ICU-22274 Mark known issue for 3 timezones for EnvTest\n\ntz2024a change \"Asia/Qostanay\" \"Asia/Almaty\" but test machines has\nnot yet update their zoneinfo to 2024a so we mark them as known issues\n\nextern long timezone; in <time.h> (set man tzset on Linux shell)\nreturns wrong value when TZ=America/Scoresbysund",
          "timestamp": "2024-03-04T11:06:39-08:00",
          "tree_id": "4d200ef8898218e9b9c1d2ede05e99852eea5e10",
          "url": "https://github.com/unicode-org/icu/commit/37526240e1be1ec8036f4a80772185ca83b1e3b2"
        },
        "date": 1709579739808,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 28.10003769734622,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ftang@chromium.org",
            "name": "Frank Tang",
            "username": "FrankYFTang"
          },
          "committer": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "distinct": true,
          "id": "73744ea41f03b20a9d6dc6ed09a56781e89dacb4",
          "message": "ICU-22633 Fix overflow cause by large AM PM value\n\nFix https://bugs.chromium.org/p/oss-fuzz/issues/detail?id=66771",
          "timestamp": "2024-03-04T13:48:24-08:00",
          "tree_id": "3ded34e62e794fcf69617141e91ea325fc6602da",
          "url": "https://github.com/unicode-org/icu/commit/73744ea41f03b20a9d6dc6ed09a56781e89dacb4"
        },
        "date": 1709589631364,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 28.461279700428754,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "roubert@google.com",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "committer": {
            "email": "fredrik@roubert.name",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "distinct": true,
          "id": "232362bf17948316c6a50035b8d79a31bb304ffa",
          "message": "ICU-22520 Use operator* instead of calling std::optional::value().\n\nThere's a subtle difference between these two ways of accessing the\nvalue of an optional and that is that the value() method can throw an\nexception if there isn't any value, but operator* won't do that (it's\njust undefined behavior if there isn't any value).\n\nICU4C code never tries to access any optional value without first\nchecking that it exists, but the ability of the value() method to throw\nan exception in case there wasn't any such check first is the reason why\nstd::exception symbols previously could show up in debug builds.\n\nThis reverts the changes that were made to dependencies.txt by\ncommit dc70b5a056b618c014c71e8bfd45f3dd9145e9fe.",
          "timestamp": "2024-03-04T23:40:15+01:00",
          "tree_id": "44e638be633151a9d900c294538752dcc64edc5d",
          "url": "https://github.com/unicode-org/icu/commit/232362bf17948316c6a50035b8d79a31bb304ffa"
        },
        "date": 1709592540950,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 28.425240402804583,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "richard_gillam@apple.com",
            "name": "Rich Gillam",
            "username": "richgillam"
          },
          "committer": {
            "email": "62772518+richgillam@users.noreply.github.com",
            "name": "Rich Gillam",
            "username": "richgillam"
          },
          "distinct": true,
          "id": "c610d7f986d9f2ccd0084adef4ed4a6cd09ccbd1",
          "message": "ICU-22534 Promote (almost) all @draft ICU 73 APIs to @stable ICU 73",
          "timestamp": "2024-03-04T18:05:29-08:00",
          "tree_id": "18952de2fc86ef071519ee54af784ec2638d7717",
          "url": "https://github.com/unicode-org/icu/commit/c610d7f986d9f2ccd0084adef4ed4a6cd09ccbd1"
        },
        "date": 1709605016966,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 28.237461327497805,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "roubert@google.com",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "committer": {
            "email": "fredrik@roubert.name",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "distinct": true,
          "id": "02a1bfc59f1bf1e42b5d1b6c47748dfa630db691",
          "message": "ICU-22520 Refactor CheckedArrayByteSink & u_terminateChars into helper.\n\nThe repeated sequence of allocating a CheckedArrayByteSink, calling some\nfunction that writes into this, then checking for overflow and returning\nthrough u_terminateChars() can all be moved into a single shared helper\nfunction.",
          "timestamp": "2024-03-05T20:09:54+01:00",
          "tree_id": "85abd6c4dac2643292ea7b98160cb22c4ab4e08a",
          "url": "https://github.com/unicode-org/icu/commit/02a1bfc59f1bf1e42b5d1b6c47748dfa630db691"
        },
        "date": 1709666401705,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 28.39279692396038,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ccornelius@google.com",
            "name": "Craig",
            "username": "sven-oly"
          },
          "committer": {
            "email": "cwcornelius@gmail.com",
            "name": "Craig Cornelius",
            "username": "sven-oly"
          },
          "distinct": true,
          "id": "7bc202ae87394fd12879439bde0d5dacc4409f46",
          "message": "ICU-22534 BRS#27 scrub closed issues (frontload)",
          "timestamp": "2024-03-05T11:15:28-08:00",
          "tree_id": "23afc2cd20403935b2ed192e8a1d98d77ab71d01",
          "url": "https://github.com/unicode-org/icu/commit/7bc202ae87394fd12879439bde0d5dacc4409f46"
        },
        "date": 1709668007783,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 28.19928493364078,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "roubert@google.com",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "committer": {
            "email": "fredrik@roubert.name",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "distinct": true,
          "id": "53568e8dfc4cf2b7a93e196b9d098d98767d7d14",
          "message": "ICU-22520 Refactor CharString & CharStringByteSink into helper.\n\nThe repeated sequence of allocating a CharString and CharStringByteSink,\nbefore calling some function that writes into this, can be moved into a\nsingle shared helper function which then is used to give all ulocimp.h\nfunctions that write to ByteSink an overload that instead returns a\nCharString, to make call sites look like perfectly normal C++ code.",
          "timestamp": "2024-03-05T23:44:50+01:00",
          "tree_id": "05f2d9648d01aee7166cb6265e5e15e4d42a7e38",
          "url": "https://github.com/unicode-org/icu/commit/53568e8dfc4cf2b7a93e196b9d098d98767d7d14"
        },
        "date": 1709679280674,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 28.473800316156453,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "roubert@google.com",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "committer": {
            "email": "fredrik@roubert.name",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "distinct": true,
          "id": "c0c46988c5f64ddea9c48df18c50b3aec2738414",
          "message": "ICU-22612 Update configure files from configure.ac using autoreconf.",
          "timestamp": "2024-03-06T10:56:53+01:00",
          "tree_id": "d2dd5735c9db9f01bc99a2229b5ba695336746b3",
          "url": "https://github.com/unicode-org/icu/commit/c0c46988c5f64ddea9c48df18c50b3aec2738414"
        },
        "date": 1709719563488,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 28.135612232357666,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ftang@chromium.org",
            "name": "Frank Tang",
            "username": "FrankYFTang"
          },
          "committer": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "distinct": true,
          "id": "e0a711c0a4c7684651cbd02ae247590aa551bc54",
          "message": "ICU-22633 Fix Hebrew overflow issue",
          "timestamp": "2024-03-06T14:52:19-08:00",
          "tree_id": "b7fdb0b7e1a286ccee7480ec69d92328383e36b7",
          "url": "https://github.com/unicode-org/icu/commit/e0a711c0a4c7684651cbd02ae247590aa551bc54"
        },
        "date": 1709766159386,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 28.27935452428515,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ccornelius@google.com",
            "name": "Craig",
            "username": "sven-oly"
          },
          "committer": {
            "email": "fredrik@roubert.name",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "distinct": true,
          "id": "89cf56333f3361470e4250e594c16c96b9634549",
          "message": "ICU-22534 BRS#27 fix CI-Exhaustive-Main breakage for locale qaa",
          "timestamp": "2024-03-07T13:47:49+01:00",
          "tree_id": "94a75a796461a1fdb8406e8ebea6cbf7cadf6836",
          "url": "https://github.com/unicode-org/icu/commit/89cf56333f3361470e4250e594c16c96b9634549"
        },
        "date": 1709816298141,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 28.54325204682726,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "103115900+rp9-next@users.noreply.github.com",
            "name": "Rahul Pandey",
            "username": "rp9-next"
          },
          "committer": {
            "email": "fredrik@roubert.name",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "distinct": true,
          "id": "a0cdb9cda5d0bcd86c06ae7a73fa45682cf90dea",
          "message": "ICU-22597 Add MSVC build bot to build ICU4C without exceptions\n\nSee #2829",
          "timestamp": "2024-03-07T16:14:16+01:00",
          "tree_id": "64d107e417ae3502d6d6d12430367dd052d7d031",
          "url": "https://github.com/unicode-org/icu/commit/a0cdb9cda5d0bcd86c06ae7a73fa45682cf90dea"
        },
        "date": 1709824729387,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 28.256209254034328,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "roubert@google.com",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "committer": {
            "email": "fredrik@roubert.name",
            "name": "Fredrik Roubert",
            "username": "roubert"
          },
          "distinct": true,
          "id": "3a88e99a2735d1689e9fe05ad8811b09d5559094",
          "message": "ICU-22520 Add a StringByteSink<CharString> template specialization.\n\nThis makes it possible to call public functions that take a string class\nas a template parameter and return an object of that class (implemented\nthrough the StringByteSink helper class) also with the CharString class,\neven though this class doesn't actually provide the public API required\nby StringByteSink.\n\nThis makes it possible to use such more modern APIs also internally.",
          "timestamp": "2024-03-07T17:35:48+01:00",
          "tree_id": "94bde9b96a2121e8d67db79865f6813e78bbe032",
          "url": "https://github.com/unicode-org/icu/commit/3a88e99a2735d1689e9fe05ad8811b09d5559094"
        },
        "date": 1709829992673,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 28.153000369421463,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ccornelius@google.com",
            "name": "Craig",
            "username": "sven-oly"
          },
          "committer": {
            "email": "cwcornelius@gmail.com",
            "name": "Craig Cornelius",
            "username": "sven-oly"
          },
          "distinct": true,
          "id": "ebaf3e9f7584103f39bb74219b048d1d98ec40ef",
          "message": "ICU-22534 BRS#19 Update ICU4C API Change Report (frontloading)",
          "timestamp": "2024-03-07T14:37:06-08:00",
          "tree_id": "6e78186f138c4a25e6ba161beaf8e3effe6c4e44",
          "url": "https://github.com/unicode-org/icu/commit/ebaf3e9f7584103f39bb74219b048d1d98ec40ef"
        },
        "date": 1709851564563,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 28.04347427378838,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ftang@chromium.org",
            "name": "Frank Tang",
            "username": "FrankYFTang"
          },
          "committer": {
            "email": "ftang@google.com",
            "name": "Frank Yung-Fong Tang",
            "username": "FrankYFTang"
          },
          "distinct": true,
          "id": "784056dfdbb38e88d5d768c1cc4b5e32ba3b72b3",
          "message": "ICU-22633 Fix overflow in Chinese calendar\n\nFix issue found by https://bugs.chromium.org/p/oss-fuzz/issues/detail?id=67256",
          "timestamp": "2024-03-07T16:03:00-08:00",
          "tree_id": "c96e10303abd6485e847030e7f713e193d12cd6f",
          "url": "https://github.com/unicode-org/icu/commit/784056dfdbb38e88d5d768c1cc4b5e32ba3b72b3"
        },
        "date": 1709856821863,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 28.186800193627533,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "richard_gillam@apple.com",
            "name": "Rich Gillam",
            "username": "richgillam"
          },
          "committer": {
            "email": "62772518+richgillam@users.noreply.github.com",
            "name": "Rich Gillam",
            "username": "richgillam"
          },
          "distinct": true,
          "id": "4c664b2180fc0d8b597f59a6747a7665a118d833",
          "message": "ICU-22534 Changed ExternalBreakEngine so that it's surrounded by U_HIDE_INTERNAL_API instead of U_HIDE_DRAFT_API.",
          "timestamp": "2024-03-08T17:49:33-08:00",
          "tree_id": "85ddcf2bb416aee6596da800f59e7ffe6c429e46",
          "url": "https://github.com/unicode-org/icu/commit/4c664b2180fc0d8b597f59a6747a7665a118d833"
        },
        "date": 1709949497450,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 28.189947938677715,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "pedberg@unicode.org",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "committer": {
            "email": "42151464+pedberg-icu@users.noreply.github.com",
            "name": "Peter Edberg",
            "username": "pedberg-icu"
          },
          "distinct": true,
          "id": "ceee4f0b46415f325a9afbe890dea1434446bb4e",
          "message": "ICU-22655 Implement \"special\" conversion for speed-beaufort, part 2 icu4c",
          "timestamp": "2024-03-09T19:52:42-08:00",
          "tree_id": "5914cfd2fb3673b0027b118b8dd93a3685f161a0",
          "url": "https://github.com/unicode-org/icu/commit/ceee4f0b46415f325a9afbe890dea1434446bb4e"
        },
        "date": 1710043321009,
        "tool": "ndjson",
        "benches": [
          {
            "name": "TestCharsetEncoderICU",
            "value": 28.103201092343205,
            "unit": "ns/iter",
            "biggerIsBetter": false
          }
        ]
      }
    ]
  }
}