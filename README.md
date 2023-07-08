# Key Switches

This is a [KiCad](https://www.kicad.org/) footprint library of mechanical keyboard switches, released under the [MIT License](/LICENSE).

[中文](/readme_zh-TW.md)

## Compatibility Table

| Footprint                                   |         Cherry MX         | Cherry MX Low Profile |         TTC KS32         |  Kailh Choc V1 [^k-choc1]   |  Kailh Choc V2 [^k-choc2]  | Gateron Low Profile [^g-lp] |     THT [^tht]     |      Hot-Swap      | Preview [^preview]                   |
| :------------------------------------------ | :-----------------------: | :-------------------: | :----------------------: | :-------------------------: | :------------------------: | :-------------------------: | :----------------: | :----------------: | :----------------------------------- |
| SW_MX_THT                                   |    :white_check_mark:     |                       |                          |                             |                            |                             | :white_check_mark: |                    | ![](https://i.imgur.com/5enIXui.png) |
| SW_MX_HotSwap_THT                           |    :white_check_mark:     |                       |                          |                             |                            |                             | :white_check_mark: | :white_check_mark: | ![](https://i.imgur.com/gQgppii.jpg) |
| SW_MX_HotSwap_THT_double                    |    :white_check_mark:     |                       |                          |                             |                            |                             | :white_check_mark: | :white_check_mark: | ![](https://i.imgur.com/Se1CHMa.jpg) |
| SW_MX_HotSwap_THT_double_alt1               |    :white_check_mark:     |                       |                          |                             |                            |                             | :white_check_mark: | :white_check_mark: | ![](https://i.imgur.com/pFtTYBV.jpg) |
| SW_MX_HotSwap_THT_double_alt2               |    :white_check_mark:     |                       |                          |                             |                            |                             | :white_check_mark: | :white_check_mark: | ![](https://i.imgur.com/wPHmvjv.jpg) |
| SW_MX_HotSwap_PTH                           |    :white_check_mark:     |                       |                          |                             |                            |                             |   :bulb: [^pth]    | :white_check_mark: | ![](https://i.imgur.com/ySLGt4U.jpg) |
| SW_MX_HotSwap_PTH_double                    |    :white_check_mark:     |                       |                          |                             |                            |                             |   :bulb: [^pth]    | :white_check_mark: | ![](https://i.imgur.com/UiA5tTy.jpg) |
| SW_MX_LowProfile_THT                        |                           |  :white_check_mark:   | :bulb: [^t-ks_vs_c-mxlp] |                             |                            |                             | :white_check_mark: |                    | ![](https://i.imgur.com/prosQX5.jpg) |
| SW_Gateron_LowProfile_THT                   |                           |                       |                          |                             |                            |     :white_check_mark:      | :white_check_mark: |                    | ![](https://i.imgur.com/La8fbI2.png) |
| SW_Gateron_LowProfile_HotSwap_THT           |                           |                       |                          |                             |                            |     :white_check_mark:      | :white_check_mark: | :white_check_mark: | ![](https://i.imgur.com/rRUIFk0.png) |
| SW_Gateron_LowProfile_HotSwap_PTH           |                           |                       |                          |                             |                            |     :white_check_mark:      |   :bulb: [^pth]    | :white_check_mark: | ![](https://i.imgur.com/7FCzjra.png) |
| SW_Kailh_Choc_V1_THT                        |                           |                       |                          |     :white_check_mark:      |                            |                             | :white_check_mark: |                    | ![](https://i.imgur.com/mveqvbo.png) |
| SW_Kailh_Choc_V1_THT_alt1                   |                           |                       |                          |     :white_check_mark:      |                            |                             | :white_check_mark: |                    | ![](https://i.imgur.com/Dbh3t1w.png) |
| SW_Kailh_Choc_V1_HotSwap                    |                           |                       |                          |     :white_check_mark:      |                            |                             |                    | :white_check_mark: | ![](https://i.imgur.com/1nT0rZy.png) |
| SW_Kailh_Choc_V1_HotSwap_THT                |                           |                       |                          |     :white_check_mark:      |                            |                             | :white_check_mark: | :white_check_mark: | ![](https://i.imgur.com/2R0aWFC.png) |
| SW_Kailh_Choc_V1_HotSwap_PTH                |                           |                       |                          |     :white_check_mark:      |                            |                             |   :bulb: [^pth]    | :white_check_mark: | ![](https://i.imgur.com/1LEHowc.png) |
| SW_Kailh_Choc_V2_THT                        |                           |                       |                          |                             |     :white_check_mark:     |                             | :white_check_mark: |                    | ![](https://i.imgur.com/mK65Vrx.jpg) |
| SW_Kailh_Choc_V1V2_THT_Hybrid               |                           |                       |                          | :bulb:[^k-choc1_vs_k-choc2] |     :white_check_mark:     |                             | :white_check_mark: |                    | ![](https://i.imgur.com/DStr5La.jpg) |
| SW_MX_Kailh_Choc_V1V2_THT_Hybrid            | :bulb: [^c-mx_vs_k-choc2] |                       |                          | :bulb:[^k-choc1_vs_k-choc2] |     :white_check_mark:     |                             | :white_check_mark: |                    | ![](https://i.imgur.com/1l7HB0J.png) |
| SW_MX_LowProfile_Kailh_Choc_V1V2_THT_Hybrid |                           |  :white_check_mark:   | :bulb: [^t-ks_vs_c-mxlp] | :bulb:[^k-choc1_vs_k-choc2] | :bulb:[^k-choc2_vs_c-mxlp] |                             | :white_check_mark: |                    | ![](https://i.imgur.com/9mmCyuX.jpg) |

> Most keyboard switches are spaced by 19.05 mm (3/4 inch) from center-to-center.

[^preview]: Preview images are for reference only and may not be updated with the footprints.
[^tht]: THT means through-hole soldering.
[^pth]: PTH means the holes of the Hot-Swap socket are plated, and the switches can be soldered directly without using a socket. However, the soldering difficulty is higher compared to the standard THT edition.
[^k-choc1]: Kailh Choc V1 also known as PG1350.
[^k-choc2]: Kailh Choc V2 also known as PG1350.
[^g-lp]: Gateron Low Profile 1.0 (aka KS-27) and 2.0 (aka KS-33) footprint are compatible.
[^t-ks_vs_c-mxlp]: TTC KS32 and Cherry MX Low Profile are very similar, basically compatible.
[^k-choc1_vs_k-choc2]: The center fix pin of Choc V1 is smaller than Choc V2, however Choc V1 has two additional fix pins ensuring its stability.
[^k-choc2_vs_c-mxlp]: The center fix pin of Choc V2 is smaller than Cherry MX Low Profile, Choc V2 may not be securely fastened.
[^c-mx_vs_k-choc2]: The center fix pin of Cherry MX is smaller than Choc V2, however some Cherry MX has two additional fix pins ensuring its stability.
