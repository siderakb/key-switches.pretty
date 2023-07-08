# Key Switches

此為機械鍵盤鍵軸的 [KiCad](https://www.kicad.org/) Footprint 庫，以 [MIT 授權許可](/LICENSE)發佈。

[English](/README.md)

## 兼容表

| Footprint                                   |         Cherry MX         | Cherry MX Low Profile |         TTC KS32         |  Kailh Choc V1 [^k-choc1]   |  Kailh Choc V2 [^k-choc2]  | Gateron Low Profile [^g-lp] |     THT [^tht]     |       熱插拔       | 預覽 [^preview]                      |
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

> 大多數的鍵盤鍵軸之間以 19.05 mm（3/4 寸）的中心距彼此間隔。

[^preview]: 預覽圖片僅供參考，不一定會隨 Footprint 更新。
[^tht]: THT 代表通孔焊接。
[^pth]: PTH 代表熱插拔座的孔壁有電鍍，鍵軸也可以在無熱插拔座的情況下直接焊接，但是其焊接難度會比標準 THT 版本更高。
[^k-choc1]: Kailh Choc V1 也稱為 PG1350。
[^k-choc2]: Kailh Choc V2 也稱為 PG1353。
[^g-lp]: Gateron Low Profile  1.0（又名 KS-27）與 2.0（又名 KS-33）的 Footprint 互相兼容。
[^t-ks_vs_c-mxlp]: TTC KS32 與 Cherry MX Low Profile 非常相似，基本上兼容。
[^k-choc1_vs_k-choc2]: Choc V1 的中央固定銷比 Choc V2 還小，但是 Choc V1 有另外兩個固定銷，所以足夠穩定。
[^k-choc2_vs_c-mxlp]: Choc V2 的中央固定銷比 Cherry MX Low Profile 還小，Choc V2 可能無法固定得很穩。
[^c-mx_vs_k-choc2]: Cherry MX 的中央固定銷比 Choc V2 還小，但是有些 Cherry MX 有另外兩個固定銷，所以足夠穩定。
