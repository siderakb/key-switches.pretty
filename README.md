# Key Switches

This is a [KiCad](https://www.kicad.org/) footprint library of mechanical keyboard switches.

> A part of [ErgoSNM keyboard](https://github.com/ziteh/ergo-snm-keyboard) project.  

## Compatibility Table

| Footprint                                   |     Cherry MX      | Cherry MX Low Profile |   TTC KS32   |   Kailh Choc V1    |   Kailh Choc V2    | Gateron Low Profile |     THT *(1)*      |      Hot-Swap      | Note         |
| :------------------------------------------ | :----------------: | :-------------------: | :----------: | :----------------: | :----------------: | :-----------------: | :----------------: | :----------------: | :----------- |
| SW_MX_THT                                   | :white_check_mark: |                       |              |                    |                    |                     | :white_check_mark: |                    |              |
| SW_MX_HotSwap_THT                           | :white_check_mark: |                       |              |                    |                    |                     | :white_check_mark: | :white_check_mark: |              |
| SW_MX_HotSwap_THT_double                    | :white_check_mark: |                       |              |                    |                    |                     | :white_check_mark: | :white_check_mark: | Double sided |
| SW_MX_HotSwap_THT_double_alt1               | :white_check_mark: |                       |              |                    |                    |                     | :white_check_mark: | :white_check_mark: | Double sided |
| SW_MX_HotSwap_THT_double_alt2               | :white_check_mark: |                       |              |                    |                    |                     | :white_check_mark: | :white_check_mark: | Double sided |
| SW_MX_HotSwap_PTH                           | :white_check_mark: |                       |              |                    |                    |                     |    :bulb: *(2)*    | :white_check_mark: |              |
| SW_MX_HotSwap_PTH_double                    | :white_check_mark: |                       |              |                    |                    |                     |    :bulb: *(2)*    | :white_check_mark: | Double sided |
| SW_MX_LowProfile_THT                        |                    |  :white_check_mark:   | :bulb: *(3)* |                    |                    |                     | :white_check_mark: |                    |              |
| SW_Gateron_LowProfile_HotSwap_THT           |                    |                       |              |                    |                    | :white_check_mark:  | :white_check_mark: | :white_check_mark: |              |
| SW_Kailh_Choc_V1_THT                        |                    |                       |              | :white_check_mark: |                    |                     | :white_check_mark: |                    |              |
| SW_Kailh_Choc_V1_HotSwap                    |                    |                       |              | :white_check_mark: |                    |                     |                    | :white_check_mark: |              |
| SW_Kailh_Choc_V1_HotSwap_THT                |                    |                       |              | :white_check_mark: |                    |                     | :white_check_mark: | :white_check_mark: |              |
| SW_Kailh_Choc_V2_THT                        |                    |                       |              |                    | :white_check_mark: |                     | :white_check_mark: |                    |              |
| SW_Kailh_Choc_V1V2_THT_Hybrid               |                    |                       |              |    :bulb: *(4)*    | :white_check_mark: |                     | :white_check_mark: |                    | Hybrid       |
| SW_MX_Kailh_Choc_V1V2_THT_Hybrid            |    :bulb: *(6)*    |                       |              |    :bulb: *(4)*    | :white_check_mark: |                     | :white_check_mark: |                    | Hybrid       |
| SW_MX_LowProfile_Kailh_Choc_V1V2_THT_Hybrid |                    |  :white_check_mark:   | :bulb: *(3)* |    :bulb: *(4)*    |    :bulb: *(5)*    |                     | :white_check_mark: |                    | Hybrid       |

1. **THT** means through-hole soldering.
2. **PTH** means the holes of Hot-Swap socket are plated, the switches can be soldered without socket.
3. *TTC KS32* and *Cherry MX Low Profile* are very similar, basically compatible.
4. The center fix pin of *Choc V1* is smaller than *Choc V2*, however *Choc V1* has two additional fix pins ensuring its stability.
5. The center fix pin of *Choc V2* is smaller than *Cherry MX Low Profile*, *Choc V2* may not be securely fastened.
6. The center fix pin of *Cherry MX* is smaller than *Choc V2*, however some *Cherry MX* has two additional fix pins ensuring its stability.

## Footprints List

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
| SW_Gateron_LowProfile_HotSwap_THT           | ![](https://i.imgur.com/5gt9NUf.jpg) |
| SW_Kailh_Choc_V1_THT                        | ![](https://i.imgur.com/sl01MNS.jpg) |
| SW_Kailh_Choc_V1_HotSwap                    | ![](https://i.imgur.com/1nT0rZy.png) |
| SW_Kailh_Choc_V1_HotSwap_THT                | ![](https://i.imgur.com/2R0aWFC.png) |
| SW_Kailh_Choc_V2_THT                        | ![](https://i.imgur.com/mK65Vrx.jpg) |
| SW_Kailh_Choc_V1V2_THT_Hybrid               | ![](https://i.imgur.com/DStr5La.jpg) |
| SW_MX_Kailh_Choc_V1V2_THT_Hybrid            | ![](https://i.imgur.com/1l7HB0J.png) |
| SW_MX_LowProfile_Kailh_Choc_V1V2_THT_Hybrid | ![](https://i.imgur.com/9mmCyuX.jpg) |


> Most keyboard switches are spaced by 19.05 mm (3/4 inch) from center-to-center.  
