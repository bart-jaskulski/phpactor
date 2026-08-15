window.BENCHMARK_DATA = {
  "lastUpdate": 1786815471543,
  "repoUrl": "https://github.com/bart-jaskulski/phpactor",
  "entries": {
    "Phpactor Benchmarks": [
      {
        "commit": {
          "author": {
            "email": "daniel@dantleech.com",
            "name": "Daniel Leech",
            "username": "dantleech"
          },
          "committer": {
            "email": "daniel@dantleech.com",
            "name": "Daniel Leech",
            "username": "dantleech"
          },
          "distinct": true,
          "id": "f67b7753b966c874735a064978dd89837a369f59",
          "message": "Bump CL",
          "timestamp": "2026-08-15T12:52:59+01:00",
          "tree_id": "9bad45f8d35e20b583318510994f7ea0cc10a9b1",
          "url": "https://github.com/bart-jaskulski/phpactor/commit/f67b7753b966c874735a064978dd89837a369f59"
        },
        "date": 1786815470858,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "WorseLocalVariableCompletorBench::benchComplete (short)",
            "value": 2.4168356164383384,
            "range": "± 2.04%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "WorseLocalVariableCompletorBench::benchComplete (long)",
            "value": 22.65700391389409,
            "range": "± 2.21%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "ClassMemberCompletorBench::benchComplete (short)",
            "value": 9.974358121330695,
            "range": "± 3.48%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "ClassMemberCompletorBench::benchComplete (long)",
            "value": 156.7153992172227,
            "range": "± 1.16%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "ConfigLoaderBench::benchJsonLoadConfig",
            "value": 0.03435616438356134,
            "range": "± 1.56%",
            "unit": "ms",
            "extra": "30 iterations, 50 revs"
          },
          {
            "name": "ConfigLoaderBench::benchJsonLoadConfigWithBuilder",
            "value": 0.03575796477495103,
            "range": "± 8.25%",
            "unit": "ms",
            "extra": "30 iterations, 50 revs"
          },
          {
            "name": "ConfigLoaderBench::benchJsonLoadConfigWithNonExistingYaml",
            "value": 0.05882277886497063,
            "range": "± 20.00%",
            "unit": "ms",
            "extra": "30 iterations, 50 revs"
          },
          {
            "name": "ConfigLoaderBench::benchJsonPlainPhp",
            "value": 0.020869863013698524,
            "range": "± 0.90%",
            "unit": "ms",
            "extra": "30 iterations, 50 revs"
          },
          {
            "name": "ConfigLoaderBench::benchYamlLoadConfig",
            "value": 0.09087150684931607,
            "range": "± 1.29%",
            "unit": "ms",
            "extra": "30 iterations, 50 revs"
          },
          {
            "name": "PhpactorParserBench::benchParse",
            "value": 0.05762888454011742,
            "range": "± 5.84%",
            "unit": "ms",
            "extra": "33 iterations, 50 revs"
          },
          {
            "name": "PhpactorParserBench::benchAssert",
            "value": 18.748536986301204,
            "range": "± 1.71%",
            "unit": "ms",
            "extra": "10 iterations, 5 revs"
          },
          {
            "name": "LexerBench::benchLex",
            "value": 597,
            "range": "± 0.00%",
            "unit": "μs",
            "extra": "1 iterations, 1 revs"
          },
          {
            "name": "LexerBench::benchLex (1)",
            "value": 1464,
            "range": "± 0.00%",
            "unit": "μs",
            "extra": "1 iterations, 1 revs"
          },
          {
            "name": "ImportNameProviderBench::benchDiagnostics",
            "value": 12.219953033268139,
            "range": "± 1.10%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "ImportNameProviderBench::benchCodeActions",
            "value": 12.345534246575225,
            "range": "± 1.30%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "WorkspaceIndexBench::benchUpdate (length: 1)",
            "value": 0.07721643835616211,
            "range": "± 2.33%",
            "unit": "ms",
            "extra": "10 iterations, 10 revs"
          },
          {
            "name": "WorkspaceIndexBench::benchUpdate (length: 1001)",
            "value": 0.07759256360078112,
            "range": "± 2.31%",
            "unit": "ms",
            "extra": "10 iterations, 10 revs"
          },
          {
            "name": "WorkspaceIndexBench::benchUpdate (length: 2001)",
            "value": 0.07620215264187899,
            "range": "± 1.95%",
            "unit": "ms",
            "extra": "10 iterations, 10 revs"
          },
          {
            "name": "WorkspaceIndexBench::benchUpdate (length: 3001)",
            "value": 0.07795283757338373,
            "range": "± 2.06%",
            "unit": "ms",
            "extra": "10 iterations, 10 revs"
          },
          {
            "name": "WorkspaceIndexBench::benchUpdate (length: 4001)",
            "value": 0.0753127201565546,
            "range": "± 4.08%",
            "unit": "ms",
            "extra": "10 iterations, 10 revs"
          },
          {
            "name": "WorkspaceIndexBench::benchUpdate (length: 5001)",
            "value": 0.07722485322896198,
            "range": "± 1.80%",
            "unit": "ms",
            "extra": "10 iterations, 10 revs"
          },
          {
            "name": "WorkspaceIndexBench::benchUpdate (length: 6001)",
            "value": 0.07639452054794732,
            "range": "± 2.43%",
            "unit": "ms",
            "extra": "10 iterations, 10 revs"
          },
          {
            "name": "TokenExpanderBench::benchExpandTokenizedString",
            "value": 1.6048704500978506,
            "range": "± 3.16%",
            "unit": "μs",
            "extra": "33 iterations, 10000 revs"
          },
          {
            "name": "TokenExpanderBench::benchExpandStringWithNoTokens",
            "value": 0.058056947162426285,
            "range": "± 2.91%",
            "unit": "μs",
            "extra": "33 iterations, 10000 revs"
          },
          {
            "name": "SearchBench::benchBareFileSearch (A)",
            "value": 0.1412563600782778,
            "range": "± 3.10%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "SearchBench::benchBareFileSearch (Request)",
            "value": 0.1395616438356164,
            "range": "± 5.24%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "SearchBench::benchFullFileSearch (A)",
            "value": 0.13720939334637955,
            "range": "± 3.86%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "SearchBench::benchFullFileSearch (Request)",
            "value": 0.13307827788649707,
            "range": "± 1.25%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "IndexedReferenceFinderBench::benchBareFileSearch",
            "value": 1107020,
            "range": "± 0.00%",
            "unit": "μs",
            "extra": "1 iterations, 1 revs"
          },
          {
            "name": "ClassRecordShortNameBench::benchShortName",
            "value": 0.09304305283757369,
            "range": "± 3.30%",
            "unit": "μs",
            "extra": "33 iterations, 1000 revs"
          },
          {
            "name": "EfficientLineColsBench::benchLineCols",
            "value": 317,
            "range": "± 0.00%",
            "unit": "μs",
            "extra": "1 iterations, 1 revs"
          },
          {
            "name": "EfficientLineColsBench::benchLineColsUtf16Positions",
            "value": 320,
            "range": "± 0.00%",
            "unit": "μs",
            "extra": "1 iterations, 1 revs"
          },
          {
            "name": "EfficientLineColsBench::benchIneffificentLineCols",
            "value": 319,
            "range": "± 0.00%",
            "unit": "μs",
            "extra": "1 iterations, 1 revs"
          },
          {
            "name": "SelfReflectClassBench::benchMethodsAndProperties",
            "value": 0.9842643835616609,
            "range": "± 1.12%",
            "unit": "ms",
            "extra": "5 iterations, 10 revs"
          },
          {
            "name": "SelfReflectClassBench::benchFrames",
            "value": 1.423477690802343,
            "range": "± 1.23%",
            "unit": "ms",
            "extra": "5 iterations, 10 revs"
          },
          {
            "name": "DiagnosticsBench::benchDiagnostics (lots_of_missing_methods.test)",
            "value": 62462.81604696569,
            "range": "± 0.84%",
            "unit": "μs",
            "extra": "5 iterations, 1 revs"
          },
          {
            "name": "DiagnosticsBench::benchDiagnostics (lots_of_new_generic_objects.test)",
            "value": 26891.015655577423,
            "range": "± 0.31%",
            "unit": "μs",
            "extra": "5 iterations, 1 revs"
          },
          {
            "name": "DiagnosticsBench::benchDiagnostics (lots_of_new_objects.test)",
            "value": 23531.16438356173,
            "range": "± 0.87%",
            "unit": "μs",
            "extra": "5 iterations, 1 revs"
          },
          {
            "name": "DiagnosticsBench::benchDiagnostics (method_chain.test)",
            "value": 29686.000000000036,
            "range": "± 0.90%",
            "unit": "μs",
            "extra": "5 iterations, 1 revs"
          },
          {
            "name": "DiagnosticsBench::benchDiagnostics (phpstan.test)",
            "value": 741936.3796477437,
            "range": "± 0.74%",
            "unit": "μs",
            "extra": "5 iterations, 1 revs"
          },
          {
            "name": "ReflectionStubsBench::test_classes_and_methods",
            "value": 5.991,
            "range": "± 0.00%",
            "unit": "ms",
            "extra": "1 iterations, 1 revs"
          },
          {
            "name": "PhpUnitReflectClassBench::test_case",
            "value": 15937.322896282014,
            "range": "± 1.47%",
            "unit": "μs",
            "extra": "5 iterations, 1 revs"
          },
          {
            "name": "PhpUnitReflectClassBench::test_case_methods_and_properties",
            "value": 256.1417612524462,
            "range": "± 135.84%",
            "unit": "ms",
            "extra": "5 iterations, 1 revs"
          },
          {
            "name": "PhpUnitReflectClassBench::test_case_method_frames",
            "value": 247.56473385518277,
            "range": "± 0.36%",
            "unit": "ms",
            "extra": "5 iterations, 1 revs"
          },
          {
            "name": "AnalyserBench::benchAnalyse",
            "value": 112617,
            "range": "± 0.00%",
            "unit": "μs",
            "extra": "1 iterations, 1 revs"
          },
          {
            "name": "ReflectPropertyBench::property",
            "value": 1.5456438356164166,
            "range": "± 1.56%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "ReflectPropertyBench::property_return_type",
            "value": 3.0002074363992723,
            "range": "± 1.35%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "YiiBench::benchMembers",
            "value": 535992.2152641909,
            "range": "± 0.49%",
            "unit": "μs",
            "extra": "5 iterations, 1 revs"
          },
          {
            "name": "ReflectMethodBench::method",
            "value": 1.666401174168285,
            "range": "± 1.52%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "ReflectMethodBench::method_return_type",
            "value": 3.0134285714285696,
            "range": "± 15.14%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "ReflectMethodBench::method_inferred_return_type",
            "value": 2.1626966731898225,
            "range": "± 1.61%",
            "unit": "ms",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "CarbonReflectBench::benchCarbonReflection",
            "value": 77893.30528375949,
            "range": "± 0.43%",
            "unit": "μs",
            "extra": "5 iterations, 1 revs"
          },
          {
            "name": "ClassSearchBench::benchClassSearch",
            "value": 121585.3307240681,
            "range": "± 1.39%",
            "unit": "μs",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "CompleteBench::benchComplete",
            "value": 177592.00195694715,
            "range": "± 200.14%",
            "unit": "μs",
            "extra": "10 iterations, 1 revs"
          },
          {
            "name": "BaseLineBench::benchVersion",
            "value": 99.70747260274084,
            "range": "± 1.00%",
            "unit": "ms",
            "extra": "4 iterations, 2 revs"
          },
          {
            "name": "BaseLineBench::benchRpcEcho",
            "value": 107.25204011741732,
            "range": "± 0.52%",
            "unit": "ms",
            "extra": "4 iterations, 2 revs"
          }
        ]
      }
    ]
  }
}