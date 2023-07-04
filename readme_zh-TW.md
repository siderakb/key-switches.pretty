# Key Switches

此為機械鍵盤鍵軸的 [KiCad](https://www.kicad.org/) Footprint 庫。

[English](/README.md)

## 兼容表

| Footprint                                   |     Cherry MX      | Cherry MX Low Profile |   TTC KS32   | Kailh Choc V1 *(7)* | Kailh Choc V2 *(8)* | Gateron Low Profile *(9)* |     THT *(1)*      |      Hot-Swap      | 備註   |
| :------------------------------------------ | :----------------: | :-------------------: | :----------: | :-----------------: | :-----------------: | :-----------------------: | :----------------: | :----------------: | :----- |
| SW_MX_THT                                   | :white_check_mark: |                       |              |                     |                     |                           | :white_check_mark: |                    |        |
| SW_MX_HotSwap_THT                           | :white_check_mark: |                       |              |                     |                     |                           | :white_check_mark: | :white_check_mark: |        |
| SW_MX_HotSwap_THT_double                    | :white_check_mark: |                       |              |                     |                     |                           | :white_check_mark: | :white_check_mark: | 雙面   |
| SW_MX_HotSwap_THT_double_alt1               | :white_check_mark: |                       |              |                     |                     |                           | :white_check_mark: | :white_check_mark: | 雙面   |
| SW_MX_HotSwap_THT_double_alt2               | :white_check_mark: |                       |              |                     |                     |                           | :white_check_mark: | :white_check_mark: | 雙面   |
| SW_MX_HotSwap_PTH                           | :white_check_mark: |                       |              |                     |                     |                           |    :bulb: *(2)*    | :white_check_mark: |        |
| SW_MX_HotSwap_PTH_double                    | :white_check_mark: |                       |              |                     |                     |                           |    :bulb: *(2)*    | :white_check_mark: | 雙面   |
| SW_MX_LowProfile_THT                        |                    |  :white_check_mark:   | :bulb: *(3)* |                     |                     |                           | :white_check_mark: |                    |        |
| SW_Gateron_LowProfile_THT                   |                    |                       |              |                     |                     |    :white_check_mark:     | :white_check_mark: |                    |        |
| SW_Gateron_LowProfile_HotSwap_THT           |                    |                       |              |                     |                     |    :white_check_mark:     | :white_check_mark: | :white_check_mark: |        |
| SW_Gateron_LowProfile_HotSwap_PTH           |                    |                       |              |                     |                     |    :white_check_mark:     | :white_check_mark: | :white_check_mark: |        |
| SW_Kailh_Choc_V1_THT                        |                    |                       |              | :white_check_mark:  |                     |                           | :white_check_mark: |                    |        |
| SW_Kailh_Choc_V1_HotSwap                    |                    |                       |              | :white_check_mark:  |                     |                           |                    | :white_check_mark: |        |
| SW_Kailh_Choc_V1_HotSwap_THT                |                    |                       |              | :white_check_mark:  |                     |                           | :white_check_mark: | :white_check_mark: |        |
| SW_Kailh_Choc_V2_THT                        |                    |                       |              |                     | :white_check_mark:  |                           | :white_check_mark: |                    |        |
| SW_Kailh_Choc_V1V2_THT_Hybrid               |                    |                       |              |    :bulb: *(4)*     | :white_check_mark:  |                           | :white_check_mark: |                    | 混合型 |
| SW_MX_Kailh_Choc_V1V2_THT_Hybrid            |    :bulb: *(6)*    |                       |              |    :bulb: *(4)*     | :white_check_mark:  |                           | :white_check_mark: |                    | 混合型 |
| SW_MX_LowProfile_Kailh_Choc_V1V2_THT_Hybrid |                    |  :white_check_mark:   | :bulb: *(3)* |    :bulb: *(4)*     |    :bulb: *(5)*     |                           | :white_check_mark: |                    | 混合型 |

1. **THT** 代表通孔焊接。
2. **PTH** 代表熱插拔座的孔壁有電鍍，鍵軸也可以在無熱插拔座的情況下直接焊接。
3. *TTC KS32* 與 *Cherry MX Low Profile* 非常相似，基本上兼容。
4. *Choc V1* 的中央固定銷比 *Choc V2* 還小，但是 *Choc V1* 有另外兩個固定銷，所以足夠穩定。
5. *Choc V2* 的中央固定銷比 *Cherry MX Low Profile* 還小，*Choc V2* 可能無法固定得很穩。
6. *Cherry MX* 的中央固定銷比 *Choc V2* 還小，但是有些 *Cherry MX* 有另外兩個固定銷，所以足夠穩定。
7. *Kailh Choc V1* 也稱為 PG1350.
8. *Kailh Choc V2* 也稱為 PG1353.
9. *Gateron Low Profile* 1.0（又名 KS-27）與 2.0（又名 KS-33）的 Footprint 互相兼容。
10. 大多數的鍵盤鍵軸之間以 19.05 mm（3/4 寸）的中心距彼此間隔。

## Footprints 清單

| Footprint                                   |               Preview                |
| :------------------------------------------ | :----------------------------------: |
| SW_MX_THT                                   | ![](https://i.imgur.com/5enIXui.png) |
| SW_MX_HotSwap_THT                           | ![](https://i.imgur.com/gQgppii.jpg) |
| SW_MX_HotSwap_THT_double                    | ![](https://i.imgur.com/Se1CHMa.jpg) |
| SW_MX_HotSwap_THT_double_alt1               | ![](https://i.imgur.com/pFtTYBV.jpg) |
| SW_MX_HotSwap_THT_double_alt2               | ![](https://i.imgur.com/wPHmvjv.jpg) |
| SW_MX_HotSwap_PHT                           | ![](https://i.imgur.com/ySLGt4U.jpg) |
| SW_MX_HotSwap_PHT_double                    | ![](https://i.imgur.com/UiA5tTy.jpg) |
| SW_MX_LowProfile_THT                        | ![](https://i.imgur.com/prosQX5.jpg) |
| SW_Gateron_LowProfile_THT                   | ![](https://i.imgur.com/La8fbI2.png) |
| SW_Gateron_LowProfile_HotSwap_THT           | ![](https://i.imgur.com/rRUIFk0.png) |
| SW_Gateron_LowProfile_HotSwap_PTH           | ![](https://i.imgur.com/7FCzjra.png) |
| SW_Kailh_Choc_V1_THT                        | ![](https://i.imgur.com/sl01MNS.jpg) |
| SW_Kailh_Choc_V1_HotSwap                    | ![](https://i.imgur.com/1nT0rZy.png) |
| SW_Kailh_Choc_V1_HotSwap_THT                | ![](https://i.imgur.com/2R0aWFC.png) |
| SW_Kailh_Choc_V2_THT                        | ![](https://i.imgur.com/mK65Vrx.jpg) |
| SW_Kailh_Choc_V1V2_THT_Hybrid               | ![](https://i.imgur.com/DStr5La.jpg) |
| SW_MX_Kailh_Choc_V1V2_THT_Hybrid            | ![](https://i.imgur.com/1l7HB0J.png) |
| SW_MX_LowProfile_Kailh_Choc_V1V2_THT_Hybrid | ![](https://i.imgur.com/9mmCyuX.jpg) |

## 授權許可

此 Footprint 庫以 [MIT License](/LICENSE) 發佈。
