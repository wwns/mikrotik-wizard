const i18nData = window.i18nData;

const fullDeviceCatalog = [
  { name: "CRS106-1C-5S", type: "switch", arch: "mipsbe", cpu: "QCA8511", ram: "128 MB", flash: "16 MB", price: "$59.00", ports: ["combo1", "sfp1", "sfp2", "sfp3", "sfp4", "sfp5"] },
  { name: "CRS326-24G-2S+RM", type: "switch", arch: "arm", cpu: "98DX3236", ram: "512 MB", flash: "16 MB", price: "$209.00", l3hw: true, ports: [...Array.from({length: 24}, (_, i) => `ether${i+1}`), "sfp-sfpplus1", "sfp-sfpplus2"] },
  { name: "CSS326-24G-2S+RM", type: "switch", arch: "swos", cpu: "--", ram: "2 MB", flash: "2 MB", price: "$159.00", ports: [...Array.from({length: 24}, (_, i) => `ether${i+1}`), "sfp-sfpplus1", "sfp-sfpplus2"] },
  { name: "CSS106-5G-1S (RB260GS)", type: "switch", arch: "swos", cpu: "--", ram: "128 KB", flash: "128 KB", price: "$39.95", ports: ["ether1", "ether2", "ether3", "ether4", "ether5", "sfp1"] },
  { name: "CSS106-1G-4P-1S (RB260GSP)", type: "switch", arch: "swos", cpu: "--", ram: "128 KB", flash: "128 KB", price: "$55.95", poe: true, ports: ["ether1", "ether2", "ether3", "ether4", "ether5", "sfp1"] },
  { name: "CRS112-8P-4S-IN", type: "switch", arch: "mipsbe", cpu: "QCA8511", ram: "128 MB", flash: "16 MB", price: "$209.00", poe: true, ports: [...Array.from({length: 8}, (_, i) => `ether${i+1}`), "sfp1", "sfp2", "sfp3", "sfp4"] },
  { name: "CRS304-4XG-IN", type: "switch", arch: "arm64", cpu: "98DX2528", ram: "512 MB", flash: "32 MB", price: "$199.00", l3hw: true, ports: ["ether1 (10G)", "ether2 (10G)", "ether3 (10G)", "ether4 (10G)"] },
  { name: "CRS305-1G-4S+IN", type: "switch", arch: "arm", cpu: "98DX3236", ram: "512 MB", flash: "16 MB", price: "$149.00", l3hw: true, ports: ["ether1", "sfp-sfpplus1", "sfp-sfpplus2", "sfp-sfpplus3", "sfp-sfpplus4"] },
  { name: "CRS309-1G-8S+IN", type: "switch", arch: "arm", cpu: "98DX8208", ram: "512 MB", flash: "16 MB", price: "$269.00", l3hw: true, ports: ["ether1", ...Array.from({length: 8}, (_, i) => `sfp-sfpplus${i+1}`)] },
  { name: "CRS310-1G-5S-4S+IN", type: "switch", arch: "arm", cpu: "98DX226S", ram: "256 MB", flash: "16 MB", price: "$199.00", l3hw: true, ports: ["ether1", "sfp1", "sfp2", "sfp3", "sfp4", "sfp5", "sfp-sfpplus1", "sfp-sfpplus2", "sfp-sfpplus3", "sfp-sfpplus4"] },
  { name: "CRS310-8G+2S+IN", type: "switch", arch: "arm", cpu: "98DX226S", ram: "256 MB", flash: "32 MB", price: "$219.00", l3hw: true, ports: [...Array.from({length: 8}, (_, i) => `ether${i+1} (2.5G)`), "sfp-sfpplus1", "sfp-sfpplus2"] },
  { name: "CRS312-4C+8XG-RM", type: "switch", arch: "mipsbe", cpu: "QCA9531", ram: "64 MB", flash: "16 MB", price: "$699.00", ports: ["combo1", "combo2", "combo3", "combo4", ...Array.from({length: 8}, (_, i) => `ether${i+1} (10G)`)] },
  { name: "CRS317-1G-16S+RM", type: "switch", arch: "arm", cpu: "98DX8216", ram: "1 GB", flash: "16 MB", price: "$499.00", l3hw: true, ports: ["ether1", ...Array.from({length: 16}, (_, i) => `sfp-sfpplus${i+1}`)] },
  { name: "CRS318-1Fi-15Fr-2S-OUT (netPower 15FR)", type: "switch", arch: "arm", cpu: "98DX224S", ram: "256 MB", flash: "16 MB", price: "$169.00", poe: true, ports: [...Array.from({length: 16}, (_, i) => `ether${i+1}`), "sfp-sfpplus1", "sfp-sfpplus2"] },
  { name: "CRS320-8P-8B-4S+RM", type: "switch", arch: "arm", cpu: "98DX226S", ram: "256 MB", flash: "32 MB", price: "$489.00", poe: true, l3hw: true, ports: [...Array.from({length: 16}, (_, i) => `ether${i+1}`), "sfp-sfpplus1", "sfp-sfpplus2", "sfp-sfpplus3", "sfp-sfpplus4"] },
  { name: "CRS326-24G-2S+IN", type: "switch", arch: "arm", cpu: "98DX3236", ram: "512 MB", flash: "16 MB", l3hw: true, ports: [...Array.from({length: 24}, (_, i) => `ether${i+1}`), "sfp-sfpplus1", "sfp-sfpplus2"] },
  { name: "CRS326-24S+2Q+RM", type: "switch", arch: "mipsbe", cpu: "QCA9531", ram: "128 MB", flash: "32 MB", price: "$599.00", ports: [...Array.from({length: 24}, (_, i) => `sfp-sfpplus${i+1}`), "qsfp1", "qsfp2"] },
  { name: "CRS326-4C+20G+2Q+RM", type: "switch", arch: "mipsbe", cpu: "QCA9531", ram: "128 MB", flash: "32 MB", price: "$999.00", ports: ["combo1", "combo2", "combo3", "combo4", ...Array.from({length: 20}, (_, i) => `ether${i+1}`), "qsfp1", "qsfp2"] },
  { name: "CRS328-24P-4S+RM", type: "switch", arch: "arm", cpu: "98DX3236", ram: "512 MB", flash: "16 MB", price: "$489.00", poe: true, l3hw: true, ports: [...Array.from({length: 24}, (_, i) => `ether${i+1}`), "sfp-sfpplus1", "sfp-sfpplus2", "sfp-sfpplus3", "sfp-sfpplus4"] },
  { name: "CRS328-4C-20S-4S+RM", type: "switch", arch: "arm", cpu: "98DX3236", ram: "512 MB", flash: "16 MB", price: "$449.00", l3hw: true, ports: ["combo1", "combo2", "combo3", "combo4", ...Array.from({length: 20}, (_, i) => `sfp${i+1}`), "sfp-sfpplus1", "sfp-sfpplus2", "sfp-sfpplus3", "sfp-sfpplus4"] },
  { name: "CRS354-48G-4S+2Q+RM", type: "switch", arch: "mipsbe", cpu: "QCA9531", ram: "128 MB", flash: "32 MB", price: "$599.00", ports: [...Array.from({length: 48}, (_, i) => `ether${i+1}`), "sfp-sfpplus1", "sfp-sfpplus2", "sfp-sfpplus3", "sfp-sfpplus4", "qsfp1", "qsfp2"] },
  { name: "CRS354-48P-4S+2Q+RM", type: "switch", arch: "mipsbe", cpu: "QCA9531", ram: "128 MB", flash: "32 MB", price: "$999.00", poe: true, ports: [...Array.from({length: 48}, (_, i) => `ether${i+1}`), "sfp-sfpplus1", "sfp-sfpplus2", "sfp-sfpplus3", "sfp-sfpplus4", "qsfp1", "qsfp2"] },
  { name: "CRS418-8P-8G-2S+RM", type: "switch", arch: "arm64", cpu: "IPQ-8072", ram: "1 GB", flash: "128 MB", price: "$449.00", poe: true, l3hw: true, ports: [...Array.from({length: 16}, (_, i) => `ether${i+1}`), "sfp-sfpplus1", "sfp-sfpplus2"] },
  { name: "CRS504-4XQ-IN", type: "switch", arch: "mipsbe", cpu: "QCA9531", ram: "64 MB", flash: "16 MB", price: "$799.00", ports: ["qsfp28-1", "qsfp28-2", "qsfp28-3", "qsfp28-4"] },
  { name: "CRS504-4XQ-OUT", type: "switch", arch: "mipsbe", cpu: "QCA9531", ram: "128 MB", flash: "32 MB", price: "$899.00", ports: ["qsfp28-1", "qsfp28-2", "qsfp28-3", "qsfp28-4"] },
  { name: "CRS510-8XS-2XQ-IN", type: "switch", arch: "mipsbe", cpu: "QCA9531", ram: "128 MB", flash: "32 MB", price: "$999.00", ports: [...Array.from({length: 8}, (_, i) => `sfp28-${i+1}`), "qsfp28-1", "qsfp28-2"] },
  { name: "CRS518-16XS-2XQ-RM", type: "switch", arch: "mipsbe", cpu: "QCA9531", ram: "64 MB", flash: "16 MB", price: "$1595.00", ports: [...Array.from({length: 16}, (_, i) => `sfp28-${i+1}`), "qsfp28-1", "qsfp28-2"] },
  { name: "CRS520-4XS-16XQ-RM", type: "switch", arch: "arm64", cpu: "AL52400", ram: "4 GB", flash: "128 MB", price: "$2195.00", l3hw: true, ports: ["sfp28-1", "sfp28-2", "sfp28-3", "sfp28-4", ...Array.from({length: 16}, (_, i) => `qsfp28-${i+1}`)] },
  { name: "CSS318-16G-2S+IN", type: "switch", arch: "swos", cpu: "--", ram: "16 MB", flash: "16 MB", price: "$139.00", ports: [...Array.from({length: 16}, (_, i) => `ether${i+1}`), "sfp-sfpplus1", "sfp-sfpplus2"] },
  { name: "CSS610-8G-2S+IN", type: "switch", arch: "swos", cpu: "--", ram: "64 KB", flash: "64 KB", price: "$119.00", ports: [...Array.from({length: 8}, (_, i) => `ether${i+1}`), "sfp-sfpplus1", "sfp-sfpplus2"] },
  { name: "CSS610-8P-2S+IN", type: "switch", arch: "swos", cpu: "--", ram: "64 KB", flash: "64 KB", price: "$229.00", poe: true, ports: [...Array.from({length: 8}, (_, i) => `ether${i+1}`), "sfp-sfpplus1", "sfp-sfpplus2"] },
  { name: "CRS310-1G-5S-4S+OUT (netFiber 9)", type: "switch", arch: "arm", cpu: "98DX226S", ram: "256 MB", flash: "16 MB", price: "$249.00", l3hw: true, ports: ["ether1", "sfp1", "sfp2", "sfp3", "sfp4", "sfp5", "sfp-sfpplus1", "sfp-sfpplus2", "sfp-sfpplus3", "sfp-sfpplus4"] },
  { name: "CRS318-16P-2S+OUT (netPower 16P)", type: "switch", arch: "arm", cpu: "98DX226S", ram: "256 MB", flash: "16 MB", price: "$279.00", poe: true, l3hw: true, ports: [...Array.from({length: 16}, (_, i) => `ether${i+1}`), "sfp-sfpplus1", "sfp-sfpplus2"] },
  { name: "CSS610-1Gi-7R-2S+OUT (netPower Lite 7R)", type: "switch", arch: "swos", cpu: "--", ram: "64 KB", flash: "64 KB", price: "$139.00", poe: true, ports: [...Array.from({length: 8}, (_, i) => `ether${i+1}`), "sfp-sfpplus1", "sfp-sfpplus2"] },

  { name: "RB1100Dx4 (Dude Edition)", type: "router", arch: "arm", cpu: "AL21400", ram: "1 GB", flash: "128 MB", price: "$385.00", ports: [...Array.from({length: 13}, (_, i) => `ether${i+1}`)] },
  { name: "RB1100x4 (RB1100AHx4)", type: "router", arch: "arm", cpu: "AL21400", ram: "1 GB", flash: "128 MB", price: "$329.00", ports: [...Array.from({length: 13}, (_, i) => `ether${i+1}`)] },
  { name: "RB4011iGS+5HacQ2HnD-IN", type: "router", arch: "arm", cpu: "AL21400", ram: "1 GB", flash: "512 MB", wifi: "WiFi 5", wifiDriver: "legacy", poe: true, ports: [...Array.from({length: 10}, (_, i) => `ether${i+1}`), "sfp-sfpplus1"] },
  { name: "RB4011iGS+RM", type: "router", arch: "arm", cpu: "AL21400", ram: "1 GB", flash: "512 MB", price: "$219.00", poe: true, ports: [...Array.from({length: 10}, (_, i) => `ether${i+1}`), "sfp-sfpplus1"] },
  { name: "RB450Gx4", type: "router", arch: "arm", cpu: "IPQ-4019", ram: "1 GB", flash: "512 MB", poe: true, ports: ["ether1", "ether2", "ether3", "ether4", "ether5"] },
  { name: "RB5009UG+S+IN", type: "router", arch: "arm64", cpu: "88F7040", ram: "1 GB", flash: "1 GB", price: "$219.00", l3hw: true, ports: ["ether1 (2.5G)", "ether2", "ether3", "ether4", "ether5", "ether6", "ether7", "ether8", "sfp-sfpplus1"] },
  { name: "RB5009UPr+S+IN", type: "router", arch: "arm64", cpu: "88F7040", ram: "1 GB", flash: "1 GB", price: "$299.00", poe: true, l3hw: true, ports: ["ether1 (2.5G)", "ether2", "ether3", "ether4", "ether5", "ether6", "ether7", "ether8", "sfp-sfpplus1"] },
  { name: "RB5009UPr+S+OUT", type: "router", arch: "arm64", cpu: "88F7040", ram: "1 GB", flash: "1 GB", price: "$319.00", poe: true, l3hw: true, ports: ["ether1 (2.5G)", "ether2", "ether3", "ether4", "ether5", "ether6", "ether7", "ether8", "sfp-sfpplus1"] },

  { name: "RB750Gr3 (hEX)", type: "router", arch: "mmips", cpu: "MT7621A", ram: "256 MB", flash: "16 MB", price: "$59.95", ports: ["ether1", "ether2", "ether3", "ether4", "ether5"] },
  { name: "RB750r2 (hEX lite)", type: "router", arch: "mipsbe", cpu: "QCA9533", ram: "64 MB", flash: "16 MB", price: "$39.95", ports: ["ether1", "ether2", "ether3", "ether4", "ether5"] },
  { name: "RB750UPr2 (hEX PoE lite)", type: "router", arch: "mipsbe", cpu: "QCA9531", ram: "64 MB", flash: "16 MB", price: "$59.95", poe: true, ports: ["ether1", "ether2", "ether3", "ether4", "ether5"] },
  { name: "E50UG (hEX refresh)", type: "router", arch: "arm", cpu: "EN7562CT", ram: "512 MB", flash: "128 MB", price: "$59.95", ports: ["ether1", "ether2", "ether3", "ether4", "ether5"] },
  { name: "RB760iGS (hEX S)", type: "router", arch: "mmips", cpu: "MT7621A", ram: "256 MB", flash: "16 MB", price: "$79.00", poe: true, ports: ["ether1", "ether2", "ether3", "ether4", "ether5", "sfp1"] },
  { name: "E60iUGS (hEX S 2025)", type: "router", arch: "arm", cpu: "EN7562CT", ram: "512 MB", flash: "128 MB", price: "$69.00", poe: true, ports: ["ether1", "ether2", "ether3", "ether4", "ether5", "sfp1"] },
  { name: "RB960PGS (hEX PoE)", type: "router", arch: "mipsbe", cpu: "QCA9557", ram: "128 MB", flash: "16 MB", price: "$89.00", poe: true, ports: ["ether1", "ether2", "ether3", "ether4", "ether5", "sfp1"] },
  { name: "RB960PGS-PB (PowerBox Pro)", type: "router", arch: "mipsbe", cpu: "QCA9557", ram: "128 MB", flash: "16 MB", price: "$109.00", poe: true, ports: ["ether1", "ether2", "ether3", "ether4", "ether5", "sfp1"] },
  { name: "L009UiGS-RM", type: "router", arch: "arm", cpu: "IPQ-5018", ram: "512 MB", flash: "128 MB", price: "$119.00", poe: true, ports: ["ether1", "ether2", "ether3", "ether4", "ether5", "ether6", "ether7", "ether8", "sfp1"] },
  { name: "L009UiGS-2HaxD-IN", type: "router", arch: "arm", cpu: "IPQ-5018", ram: "512 MB", flash: "128 MB", wifi: "WiFi 6", wifiDriver: "wifi", poe: true, ports: ["ether1", "ether2", "ether3", "ether4", "ether5", "ether6", "ether7", "ether8", "sfp1"] },
  { name: "RB941-2nD (hAP lite)", type: "router", arch: "smips", cpu: "QCA9533", ram: "32 MB", flash: "16 MB", wifi: "WiFi 4", wifiDriver: "legacy", ports: ["ether1", "ether2", "ether3", "ether4"] },
  { name: "RB941-2nD-TC (hAP lite TC)", type: "router", arch: "smips", cpu: "QCA9533", ram: "32 MB", flash: "16 MB", wifi: "WiFi 4", wifiDriver: "legacy", ports: ["ether1", "ether2", "ether3", "ether4"] },
  { name: "RB951Ui-2HnD", type: "router", arch: "mipsbe", cpu: "AR9344", ram: "128 MB", flash: "128 MB", wifi: "WiFi 4", wifiDriver: "legacy", poe: true, ports: ["ether1", "ether2", "ether3", "ether4", "ether5"] },
  { name: "RB951Ui-2nD (hAP)", type: "router", arch: "mipsbe", cpu: "QCA9531", ram: "64 MB", flash: "16 MB", wifi: "WiFi 4", wifiDriver: "legacy", poe: true, ports: ["ether1", "ether2", "ether3", "ether4", "ether5"] },
  { name: "RB952Ui-5ac2nD (hAP ac lite)", type: "router", arch: "mipsbe", cpu: "QCA9531", ram: "64 MB", flash: "16 MB", wifi: "WiFi 5", wifiDriver: "legacy", poe: true, ports: ["ether1", "ether2", "ether3", "ether4", "ether5"] },
  { name: "RB952Ui-5ac2nD-TC (hAP ac lite TC)", type: "router", arch: "mipsbe", cpu: "QCA9531", ram: "64 MB", flash: "16 MB", wifi: "WiFi 5", wifiDriver: "legacy", poe: true, ports: ["ether1", "ether2", "ether3", "ether4", "ether5"] },
  { name: "RB962UiGS-5HacT2HnT (hAP ac)", type: "router", arch: "mipsbe", cpu: "QCA9558", ram: "128 MB", flash: "16 MB", wifi: "WiFi 5", wifiDriver: "legacy", poe: true, ports: ["ether1", "ether2", "ether3", "ether4", "ether5", "sfp1"] },
  { name: "RBD52G-5HacD2HnD-TC (hAP ac²)", type: "router", arch: "arm", cpu: "IPQ-4018", ram: "128 MB", flash: "16 MB", wifi: "WiFi 5", wifiDriver: "wifi", ports: ["ether1", "ether2", "ether3", "ether4", "ether5"] },
  { name: "RBD53iG-5HacD2HnD (hAP ac³)", type: "router", arch: "arm", cpu: "IPQ-4019", ram: "256 MB", flash: "128 MB", wifi: "WiFi 5", wifiDriver: "wifi", poe: true, ports: ["ether1", "ether2", "ether3", "ether4", "ether5"] },
  { name: "C52iG-5HaxD2HaxD-TC (hAP ax²)", type: "router", arch: "arm64", cpu: "IPQ-6010", ram: "1 GB", flash: "128 MB", wifi: "WiFi 6", wifiDriver: "wifi", poe: true, ports: ["ether1", "ether2", "ether3", "ether4", "ether5"] },
  { name: "C53UiG+5HPaxD2HPaxD (hAP ax³)", type: "router", arch: "arm64", cpu: "IPQ-6010", ram: "1 GB", flash: "128 MB", wifi: "WiFi 6", wifiDriver: "wifi", poe: true, ports: ["ether1 (2.5G)", "ether2", "ether3", "ether4", "ether5"] },
  { name: "L41G-2axD (hAP ax lite)", type: "router", arch: "arm", cpu: "IPQ-5010", ram: "256 MB", flash: "128 MB", wifi: "WiFi 6", wifiDriver: "wifi", ports: ["ether1", "ether2", "ether3", "ether4"] },
  { name: "L41G-2axD&FG621-EA (hAP ax lite LTE6)", type: "router", arch: "arm", cpu: "IPQ-5010", ram: "256 MB", flash: "128 MB", wifi: "WiFi 6", wifiDriver: "wifi", ports: ["ether1", "ether2", "ether3", "ether4"] },

  { name: "CCR2004-16G-2S+PC", type: "router", arch: "arm64", cpu: "AL32400", ram: "4 GB", flash: "128 MB", price: "$465.00", ports: [...Array.from({length: 16}, (_, i) => `ether${i+1}`), "sfp-sfpplus1", "sfp-sfpplus2"] },
  { name: "CCR2004-16G-2S+", type: "router", arch: "arm64", cpu: "AL32400", ram: "4 GB", flash: "128 MB", ports: [...Array.from({length: 16}, (_, i) => `ether${i+1}`), "sfp-sfpplus1", "sfp-sfpplus2"] },
  { name: "CCR2004-1G-12S+2XS", type: "router", arch: "arm64", cpu: "AL32400", ram: "4 GB", flash: "128 MB", price: "$595.00", ports: ["ether1", ...Array.from({length: 12}, (_, i) => `sfp-sfpplus${i+1}`), "sfp28-1", "sfp28-2"] },
  { name: "CCR2004-1G-2XS-PCIe", type: "router", arch: "arm64", cpu: "AL52400", ram: "4 GB", flash: "128 MB", price: "$199.00", ports: ["ether1", "sfp28-1", "sfp28-2"] },
  { name: "CCR2116-12G-4S+", type: "router", arch: "arm64", cpu: "AL73400", ram: "16 GB", flash: "128 MB", price: "$995.00", l3hw: true, ports: [...Array.from({length: 13}, (_, i) => `ether${i+1}`), "sfp-sfpplus1", "sfp-sfpplus2", "sfp-sfpplus3", "sfp-sfpplus4"] },
  { name: "CCR2216-1G-12XS-2XQ", type: "router", arch: "arm64", cpu: "AL73400", ram: "16 GB", flash: "128 MB", price: "$2795.00", l3hw: true, ports: ["ether1", ...Array.from({length: 12}, (_, i) => `sfp28-${i+1}`), "qsfp28-1", "qsfp28-2"] },

  { name: "Chateau 5G R16 (D53G-5HacD2HnD)", type: "router", arch: "arm", cpu: "IPQ-4019", ram: "256 MB", flash: "16 MB", wifi: "WiFi 5", wifiDriver: "wifi", ports: ["ether1", "ether2", "ether3", "ether4", "ether5"] },
  { name: "Chateau 5G R17 ax (S53UG+5HaxD2HaxD)", type: "router", arch: "arm64", cpu: "IPQ-6010", ram: "1 GB", flash: "128 MB", wifi: "WiFi 6", wifiDriver: "wifi", ports: ["ether1 (2.5G)", "ether2", "ether3", "ether4"] },
  { name: "Chateau LTE12 (2025)", type: "router", arch: "arm", cpu: "IPQ-4019", ram: "256 MB", flash: "32 MB", wifi: "WiFi 5", wifiDriver: "wifi", ports: ["ether1", "ether2", "ether3", "ether4", "ether5"] },
  { name: "Chateau LTE6 (D53G-5HacD2HnD)", type: "router", arch: "arm", cpu: "IPQ-4019", ram: "256 MB", flash: "16 MB", wifi: "WiFi 5", wifiDriver: "wifi", ports: ["ether1", "ether2", "ether3", "ether4", "ether5"] },
  { name: "Chateau LTE6 ax (S53UG+5HaxD2HaxD)", type: "router", arch: "arm64", cpu: "IPQ-6010", ram: "1 GB", flash: "128 MB", wifi: "WiFi 6", wifiDriver: "wifi", ports: ["ether1 (2.5G)", "ether2", "ether3", "ether4"] },
  { name: "Chateau LTE6-US", type: "router", arch: "arm", cpu: "IPQ-4019", ram: "256 MB", flash: "16 MB", wifi: "WiFi 5", wifiDriver: "wifi", ports: ["ether1", "ether2", "ether3", "ether4", "ether5"] },
  { name: "Chateau PRO ax (H53UiG-5HaxQ2HaxQ)", type: "router", arch: "arm64", cpu: "IPQ-8072A", ram: "1 GB", flash: "128 MB", wifi: "WiFi 6", wifiDriver: "wifi", poe: true, ports: ["ether1", "ether2", "ether3", "ether4", "ether5"] },
  { name: "Chateau LTE18 ax (S53UG+5HaxD2HaxD)", type: "router", arch: "arm64", cpu: "IPQ-6010", ram: "1 GB", flash: "128 MB", wifi: "WiFi 6", wifiDriver: "wifi", ports: ["ether1 (2.5G)", "ether2", "ether3", "ether4"] },

  { name: "RB911G-5HPnD", type: "router", arch: "mipsbe", cpu: "AR9342", ram: "64 MB", flash: "128 MB", wifi: "WiFi 4", wifiDriver: "legacy", ports: ["ether1"] },
  { name: "RB911G-5HPnD-QRT (QRT 5)", type: "router", arch: "mipsbe", cpu: "AR9342", ram: "64 MB", flash: "128 MB", wifi: "WiFi 4", wifiDriver: "legacy", ports: ["ether1"] },
  { name: "RB912UAG-2HPnD", type: "router", arch: "mipsbe", cpu: "AR9342", ram: "64 MB", flash: "128 MB", wifi: "WiFi 4", wifiDriver: "legacy", ports: ["ether1"] },
  { name: "RB912UAG-5HPnD", type: "router", arch: "mipsbe", cpu: "AR9342", ram: "64 MB", flash: "128 MB", wifi: "WiFi 4", wifiDriver: "legacy", ports: ["ether1"] },
  { name: "RB912UAG-5HPnD-OUT (BaseBox 5)", type: "router", arch: "mipsbe", cpu: "AR9342", ram: "64 MB", flash: "128 MB", wifi: "WiFi 4", wifiDriver: "legacy", ports: ["ether1"] },
  { name: "RB922UAGS-5HPacD", type: "router", arch: "mipsbe", cpu: "QCA9557", ram: "128 MB", flash: "128 MB", wifi: "WiFi 5", wifiDriver: "legacy", ports: ["ether1", "sfp1"] },
  { name: "RB922UAGS-5HPacD-NM (NetMetal 5)", type: "router", arch: "mipsbe", cpu: "QCA9557", ram: "128 MB", flash: "128 MB", wifi: "WiFi 5", wifiDriver: "legacy", ports: ["ether1", "sfp1"] },
  { name: "L23UGSR-5HaxD2HaxD", type: "router", arch: "arm", cpu: "IPQ-5010", ram: "256 MB", flash: "128 MB", wifi: "WiFi 6", wifiDriver: "wifi", ports: ["ether1", "sfp1"] },
  { name: "LtAP LR8G LTE6 kit", type: "router", arch: "mmips", cpu: "MT7621AT", ram: "128 MB", flash: "16 MB", wifi: "WiFi 4", wifiDriver: "legacy", ports: ["ether1"] },
  { name: "LtAP LTE6 kit", type: "router", arch: "mmips", cpu: "MT7621AT", ram: "128 MB", flash: "16 MB", wifi: "WiFi 4", wifiDriver: "legacy", ports: ["ether1"] },
  { name: "LtAP mini (RB912R-2nD-LTm)", type: "router", arch: "mipsbe", cpu: "QCA9531", ram: "64 MB", flash: "16 MB", wifi: "WiFi 4", wifiDriver: "legacy", ports: ["ether1"] },
  { name: "LtAP mini LTE kit 2024", type: "router", arch: "mipsbe", cpu: "QCA9531", ram: "64 MB", flash: "16 MB", wifi: "WiFi 4", wifiDriver: "legacy", ports: ["ether1"] },
  { name: "RBM33G", type: "router", arch: "mmips", cpu: "MT7621A", ram: "256 MB", flash: "16 MB", ports: ["ether1", "ether2", "ether3"] }
];

let currentLang = "pl";
let nodes = [];
let links = [];
let pendingConnection = null;
let currentConfiguringNodeIndex = null;
let canvasZoom = 1;
let canvasPanX = 0;
let canvasPanY = 0;

const WIFI_CHANNELS = {
  band5: [
    { group: "UNII-1 (bez DFS)", items: [[36,5180],[40,5200],[44,5220],[48,5240]] },
    { group: "UNII-2 (wymaga DFS)", items: [[52,5260],[56,5280],[60,5300],[64,5320]], dfs: true },
    { group: "UNII-2e (wymaga DFS)", items: [[100,5500],[104,5520],[108,5540],[112,5560],[116,5580],[120,5600],[124,5620],[128,5640],[132,5660],[136,5680],[140,5700],[144,5720]], dfs: true },
    { group: "UNII-3 (bez DFS)", items: [[149,5745],[153,5765],[157,5785],[161,5805],[165,5825]] }
  ],
  band24: [
    { group: "2.4 GHz", items: [[1,2412],[2,2417],[3,2422],[4,2427],[5,2432],[6,2437],[7,2442],[8,2447],[9,2452],[10,2457],[11,2462],[12,2467],[13,2472]] }
  ]
};

const i18n = i18nData;
function t(key) { return i18n[currentLang]?.[key] || key; }
function setT(id, key) { const el = document.getElementById(id); if(el) el.innerText = t(key); }

function renderCatalog(devices = fullDeviceCatalog) {
  const container = document.getElementById("catalogList");
  if (!container) return;

  container.innerHTML = "";

  devices.forEach((d) => {
    const card = document.createElement("div");
    card.className = "device-card";

    const arch = String(d.arch || "mips").toLowerCase();
    const badgeMap = {
      arm64: "badge-arm64",
      arm: "badge-arm",
      mipsbe: "badge-mips",
      mmips: "badge-mips",
      swos: "badge-swos",
      tile: "badge-tile"
    };
    const badgeCls = badgeMap[arch] || "badge-mips";

    card.innerHTML = `
      <div class="name">
        <span>${d.name}</span>
        <span class="badge ${badgeCls}">${d.arch || "mips"}</span>
      </div>
      <div class="specs">
        CPU: <b>${d.cpu}</b> | RAM: ${d.ram} | Flash: ${d.flash}<br>
        Ports: ${d.ports.length} ${d.wifi ? ' | 📶 ' + d.wifi : ''} ${d.l3hw ? ' | ⚡L3HW' : ''} ${d.price ? ' | ' + d.price : ''}
      </div>
    `;
    card.onclick = () => addDeviceNode(d);
    container.appendChild(card);
  });
}

function filterDevices() {
  const q = document.getElementById("devFilter").value.toLowerCase();
  const s = document.getElementById("seriesFilter").value;
  const filtered = fullDeviceCatalog.filter(d => {
    const matchesQ = d.name.toLowerCase().includes(q) || d.cpu.toLowerCase().includes(q);
    const matchesS = (s === "ALL") || (d.type === s);
    return matchesQ && matchesS;
  });
  renderCatalog(filtered);
}

function addInternetGlobe() {
  const id = "globe_" + Date.now();
  const node = {
    id,
    isGlobe: true,
    identity: "ISP_PROVIDER",
    ispType: "orange",
    x: 80,
    y: 80,
    ports: [
      { name: "rj45-wan", label: "RJ45 (Copper)", role: "uplink" },
      { name: "sfp-wan", label: "SFP/SFP+ (Fiber)", role: "uplink" }
    ]
  };
  nodes.push(node);
  renderCanvas();
}

function addDeviceNode(device) {
  const id = "node_" + Date.now() + "_" + Math.floor(Math.random()*1000);
  const nodeIndex = nodes.filter(n => !n.isGlobe).length + 1;
  const cleanName = device.name.split(" ")[0].replace(/[^a-zA-Z0-9]/g, "_") + "_" + nodeIndex;

  const node = {
    id,
    isGlobe: false,
    identity: cleanName,
    device,
    x: 120 + (nodes.length * 40),
    y: 120 + (nodes.length * 40),
    ports: device.ports.map((p, i) => ({
      name: p.split(" ")[0],
      rawName: p,
      role: i === 0 ? "wan" : "access",
      pvid: 10
    })),
    vlans: [
      { id: 10, name: "LAN_Office", ip: `192.168.10.${nodeIndex}/24`, subnet: "192.168.10.0/24" },
      { id: 20, name: "Guests", ip: `192.168.20.${nodeIndex}/24`, subnet: "192.168.20.0/24" }
    ],
    wifi: device.wifi ? {
      enabled: true,
      mode: "ap",
      pass: "HasloWPA3_2026!",
      security: device.wifiDriver === "legacy" ? "wpa2-psk" : "wpa2-psk,wpa3-psk",
      vlan: 10,
      country: "poland",
      hideSsid: false,
      clientIsolation: false,
      driver: device.wifiDriver || "wifi",
      band5: {
        enabled: device.wifi !== "WiFi 4",
        ssid: "MikroTik_5G_" + cleanName,
        width: "20/40/80mhz",
        frequencies: "5180,5200,5220,5240",
        ft: "yes"
      },
      band24: {
        enabled: true,
        ssid: "MikroTik_2G_" + cleanName,
        width: "20/40mhz",
        frequencies: "2412,2437,2462,2472",
        ft: "no"
      }
    } : null,
    vpn: {
      enabled: false,
      proto: "wireguard",
      mode: "server",
      port: 13231,
      subnet: "172.16.0.1/24",
      secret: "SuperTajneHasloVPN_2026!",
      username: "vpnuser",
      remoteHost: "",
      peerPublicKey: "",
      allowedAddress: "172.16.0.2/32"
    },
    netMgmt: {
      poolRange: `192.168.10.100-192.168.10.200`,
      leaseTime: "12h",
      domain: "lan.mikrotik",
      authoritative: "yes",
      priV4: "1.1.1.1",
      secV4: "1.0.0.1",
      priV6: "2606:4700:4700::1111",
      secV6: "2606:4700:4700::1001",
      dohMode: "none",
      dnsRedirect: "yes",
      cloudDdns: true,
      proxyEnabled: false,
      socksEnabled: false
    },
    consoles: {
      xbox: { enabled: false, ip: `192.168.10.50` },
      ps5: { enabled: false, ip: `192.168.10.51` }
    },
    features: {
      firewall: true,
      fasttrack: true,
      rawProtection: true,
      isolateVlans: true,
      securingServices: true,
      dnsProtection: true,
      l3hw: device.l3hw || false
    }
  };

  nodes.push(node);
  renderCanvas();
}

function renderCanvas() {
  const canvas = document.getElementById("canvas");
  if(!canvas) return;
  
  const nodesElements = canvas.querySelectorAll(".node");
  nodesElements.forEach(n => n.remove());

  nodes.forEach((node, nIdx) => {
    const el = document.createElement("div");
    const isSelected = pendingConnection && pendingConnection.nodeIdx === nIdx;
    el.className = `node ${node.isGlobe ? 'node-globe' : ''} ${isSelected ? 'connecting' : ''}`;
    el.id = node.id;
    el.style.left = node.x + "px";
    el.style.top = node.y + "px";

    if (node.isGlobe) {
      el.innerHTML = `
        <div class="node-title">
          <span>🌐 ${node.identity}</span>
          <button class="btn btn-danger btn-sm" onclick="removeNode(${nIdx})" style="padding:2px 6px;">✕</button>
        </div>
        <div class="node-subtitle" style="color:#38bdf8;">${t("isp_title")}</div>
        
        <div style="margin-bottom:8px;">
          <label style="font-size:10px; color:var(--muted); display:block; margin-bottom:2px;">Operator / Link Type:</label>
          <select onchange="updateGlobeIsp(${nIdx}, this.value)" style="width:100%; background:#020617; border:1px solid #0284c7; color:#fff; font-size:11px; padding:4px; border-radius:4px;">
            <option value="orange" ${node.ispType === 'orange' ? 'selected' : ''}>Orange FTTH (PPPoE + VLAN 35)</option>
            <option value="tmobile" ${node.ispType === 'tmobile' ? 'selected' : ''}>T-Mobile FTTH (DHCP / VLAN 35)</option>
            <option value="dhcp" ${node.ispType === 'dhcp' ? 'selected' : ''}>Standard DHCP Client (Dynamic IP)</option>
            <option value="static" ${node.ispType === 'static' ? 'selected' : ''}>Static Public IP</option>
          </select>
        </div>

        <div style="font-size:10px; color:var(--muted); margin-bottom:4px; font-weight:bold;">UPLINK PORT:</div>
        <div class="port-matrix" style="grid-template-columns: 1fr 1fr;">
          ${node.ports.map((p, pIdx) => {
            const isPortSelected = pendingConnection && pendingConnection.nodeIdx === nIdx && pendingConnection.portIdx === pIdx;
            const hasLink = links.some(l => (l.srcNodeId === node.id && l.srcPort === p.name) || (l.dstNodeId === node.id && l.dstPort === p.name));
            return `
              <div class="port-btn port-uplink ${isPortSelected ? 'selected' : ''}"
                   id="btn-${node.id}-${p.name}"
                   onclick="handlePortClick(${nIdx}, ${pIdx})"
                   title="${p.name} — ${hasLink ? 'LINKED' : p.label}">
                <div class="pname">${p.name.toUpperCase()}</div>
                <div class="prole">${hasLink ? 'LINKED' : 'WAN'}</div>
              </div>
            `;
          }).join("")}
        </div>
      `;
    } else {
      el.innerHTML = `
        <div class="node-title">
          <span>${node.identity}</span>
          <button class="btn btn-danger btn-sm" onclick="removeNode(${nIdx})" style="padding:2px 6px;">✕</button>
        </div>
        <div class="node-subtitle">${node.device.name} [${node.device.arch.toUpperCase()}]</div>

        <div style="font-size:10px; color:var(--muted); margin-bottom:4px; font-weight:bold;">
          ${t("ports_heading")}
        </div>
        <div class="port-matrix">
          ${node.ports.map((p, pIdx) => {
            const isPortSelected = pendingConnection && pendingConnection.nodeIdx === nIdx && pendingConnection.portIdx === pIdx;
            const activeLink = links.find(l => (l.srcNodeId === node.id && l.srcPort === p.name) || (l.dstNodeId === node.id && l.dstPort === p.name));
            let roleClass = `port-${p.role}`;
            let roleText = p.role.toUpperCase();
            let shortRoleText = p.role === 'uplink' ? 'WAN' : p.role === 'trunk' ? 'TRK' : p.role === 'disabled' ? 'OFF' : 'ACC';
            let vlanClickAttr = "";

            if (activeLink) {
              if (activeLink.isWan) {
                roleClass = 'port-uplink';
                roleText = 'WAN ISP';
                shortRoleText = 'WAN';
              } else {
                roleClass = 'port-trunk';
                roleText = 'LINK L2';
                shortRoleText = 'TRK';
              }
            } else if (p.role === 'access') {
              const vlanDef = node.vlans.find(v => v.id === p.pvid) || node.vlans[0];
              roleClass = `port-vlan-${vlanDef.id}`;
              roleText = `VLAN${vlanDef.id} ${vlanDef.name}`;
              shortRoleText = `V${vlanDef.id}`;
              vlanClickAttr = `onclick="event.stopPropagation(); cyclePortVlan(${nIdx}, ${pIdx})" title="Kliknij, aby zmienić VLAN — ${roleText}"`;
            }

            const shortName = p.name.replace('ether','ETH').replace('sfp-sfpplus','SFP').toUpperCase();
            const poeIcon = node.device.poe && p.name.includes("ether")
              ? '<span style="color:#facc15; font-size:9px; margin-left:2px;" title="PoE Out">⚡</span>'
              : "";

            return `
              <div class="port-btn ${roleClass} ${isPortSelected ? 'selected' : ''}"
                   id="btn-${node.id}-${p.name}"
                   onclick="handlePortClick(${nIdx}, ${pIdx})"
                   title="${p.name} — ${roleText}">
                <div class="pname">${shortName}${poeIcon}</div>
                <div class="prole" ${vlanClickAttr} style="${vlanClickAttr ? 'cursor:pointer; text-decoration:underline dotted;' : ''}">${shortRoleText}</div>
              </div>
            `;
          }).join("")}
        </div>

        <div class="module-btn-grid">
          ${node.wifi ? `
            <button class="btn btn-wifi btn-module" onclick="openWifiModal(${nIdx})" title="${t("btn_wifi")}">
              ${t("btn_wifi")}
            </button>
          ` : ''}
          <button class="btn btn-module" style="background:#db2777; color:#fff;" onclick="openVlanModal(${nIdx})" title="${t("vlan_button")}">
            ${t("vlan_button")}
          </button>
          <button class="btn btn-vpn btn-module" onclick="openVpnModal(${nIdx})" title="${t("btn_vpn")}">
            ${t("btn_vpn")}
          </button>
          <button class="btn btn-net btn-module" onclick="openNetModal(${nIdx})" title="${t("btn_net")}">
            ${t("btn_net")}
          </button>
          <button class="btn btn-console btn-module" onclick="openConsoleModal(${nIdx})" title="${t("btn_console")}">
            ${t("btn_console")}
          </button>
        </div>

        <div style="font-size:10px; color:var(--muted); margin-bottom:4px; font-weight:bold;">${t("modules_heading")}</div>
        <div class="node-options">
          <label class="has-tip">
            <input type="checkbox" ${node.features.firewall ? 'checked' : ''} onchange="toggleFeature(${nIdx}, 'firewall')"> ${t("fw_filter")}
            <span class="tip-icon">?</span>
            <span class="tooltip-text">${t("tip_fw")}</span>
          </label>
          
          <label class="has-tip">
            <input type="checkbox" ${node.features.fasttrack ? 'checked' : ''} onchange="toggleFeature(${nIdx}, 'fasttrack')"> ${t("fasttrack")}
            <span class="tip-icon">?</span>
            <span class="tooltip-text">${t("tip_fasttrack")}</span>
          </label>

          <label class="has-tip">
            <input type="checkbox" ${node.features.rawProtection ? 'checked' : ''} onchange="toggleFeature(${nIdx}, 'rawProtection')"> ${t("raw_ddos")}
            <span class="tip-icon">?</span>
            <span class="tooltip-text">${t("tip_raw")}</span>
          </label>

          <label class="has-tip">
            <input type="checkbox" ${node.features.isolateVlans ? 'checked' : ''} onchange="toggleFeature(${nIdx}, 'isolateVlans')"> ${t("vlan_iso")}
            <span class="tip-icon">?</span>
            <span class="tooltip-text">${t("tip_vlan_iso")}</span>
          </label>

          <label class="has-tip">
            <input type="checkbox" ${node.features.securingServices ? 'checked' : ''} onchange="toggleFeature(${nIdx}, 'securingServices')"> ${t("hardening")}
            <span class="tip-icon">?</span>
            <span class="tooltip-text">${t("tip_hardening")}</span>
          </label>

          <label class="has-tip">
            <input type="checkbox" ${node.features.dnsProtection ? 'checked' : ''} onchange="toggleFeature(${nIdx}, 'dnsProtection')"> ${t("dns_guard")}
            <span class="tip-icon">?</span>
            <span class="tooltip-text">${t("tip_dns_guard")}</span>
          </label>

          ${node.device.l3hw ? `
            <label class="has-tip">
              <input type="checkbox" ${node.features.l3hw ? 'checked' : ''} onchange="toggleFeature(${nIdx}, 'l3hw')"> ${t("l3hw")}
              <span class="tip-icon">?</span>
              <span class="tooltip-text">${t("tip_l3hw")}</span>
            </label>
          ` : ''}
        </div>
      `;
    }

    el.onmousedown = (e) => {
      if (e.button !== 0 || e.altKey) return;
      if (e.target.closest(".port-btn") || e.target.tagName === 'BUTTON' || e.target.tagName === 'SELECT' || e.target.tagName === 'INPUT' || e.target.tagName === 'LABEL') return;
      const nodeRect = el.getBoundingClientRect();
      const shiftX = (e.clientX - nodeRect.left) / canvasZoom;
      const shiftY = (e.clientY - nodeRect.top) / canvasZoom;

      function moveAt(clientX, clientY) {
        const rect = canvas.getBoundingClientRect();
        node.x = (clientX - rect.left) / canvasZoom - shiftX;
        node.y = (clientY - rect.top) / canvasZoom - shiftY;
        el.style.left = node.x + "px";
        el.style.top = node.y + "px";
        drawCables();
      }
      function onMouseMove(e) { moveAt(e.clientX, e.clientY); }
      document.addEventListener("mousemove", onMouseMove);
      document.onmouseup = () => {
        document.removeEventListener("mousemove", onMouseMove);
        document.onmouseup = null;
      };
    };

    canvas.appendChild(el);
  });

  drawCables();
  renderPatchPanel();
}

const wifiModalChannels = { band5: [], band24: [] };
let editingVlans = [];

const dnsPresets = {
  cloudflare: { priV4: "1.1.1.1", secV4: "1.0.0.1", priV6: "2606:4700:4700::1111", secV6: "2606:4700:4700::1001", doh: "cloudflare" },
  google: { priV4: "8.8.8.8", secV4: "8.8.4.4", priV6: "2001:4860:4860::8888", secV6: "2001:4860:4860::8844", doh: "google" },
  quad9: { priV4: "9.9.9.9", secV4: "149.112.112.112", priV6: "2620:fe::fe", secV6: "2620:fe::9", doh: "quad9" },
  opendns: { priV4: "208.67.222.222", secV4: "208.67.220.220", priV6: "2620:119:35::35", secV6: "2620:119:53::53", doh: "none" },
  adguard: { priV4: "94.140.14.14", secV4: "94.140.15.15", priV6: "2a10:50c0::ad1:ff", secV6: "2a10:50c0::ad2:ff", doh: "none" },
  controld: { priV4: "76.76.2.0", secV4: "76.76.10.0", priV6: "2606:1a40::", secV6: "2606:1a40:1::", doh: "none" },
  orange: { priV4: "194.204.159.1", secV4: "194.204.152.34", priV6: "", secV6: "", doh: "none" },
  play: { priV4: "62.179.1.62", secV4: "62.179.1.63", priV6: "", secV6: "", doh: "none" },
  plus: { priV4: "212.2.96.53", secV4: "212.2.96.54", priV6: "", secV6: "", doh: "none" },
  tmobile: { priV4: "213.158.194.1", secV4: "213.158.194.2", priV6: "", secV6: "", doh: "none" },
  netia: { priV4: "213.241.79.37", secV4: "213.241.79.38", priV6: "", secV6: "", doh: "none" },
  vectra: { priV4: "109.241.1.1", secV4: "109.241.2.2", priV6: "", secV6: "", doh: "none" },
  inea: { priV4: "62.21.99.94", secV4: "62.21.99.95", priV6: "", secV6: "", doh: "none" }
};

function applyDnsPreset(key) {
  if (key === "custom" || !dnsPresets[key]) return;
  const preset = dnsPresets[key];
  document.getElementById("net_dns_pri_v4").value = preset.priV4;
  document.getElementById("net_dns_sec_v4").value = preset.secV4;
  document.getElementById("net_dns_pri_v6").value = preset.priV6;
  document.getElementById("net_dns_sec_v6").value = preset.secV6;
  document.getElementById("net_doh_enabled").value = preset.doh;
}

function detectDnsPresetKey(net) {
  const key = Object.keys(dnsPresets).find((presetKey) => {
    const preset = dnsPresets[presetKey];
    return preset.priV4 === net.priV4 && preset.secV4 === net.secV4;
  });
  return key || "custom";
}

function findWifiChannelInfo(band, freq) {
  for (const g of WIFI_CHANNELS[band]) {
    const found = g.items.find(([, f]) => f === freq);
    if (found) return { ch: found[0], dfs: !!g.dfs };
  }
  return { ch: "?", dfs: false };
}

function populateChannelPicker(band) {
  const picker = document.getElementById(`wifi_${band}_channel_picker`);
  const used = wifiModalChannels[band];
  let html = "";
  WIFI_CHANNELS[band].forEach(g => {
    const opts = g.items.filter(([, f]) => !used.includes(f))
      .map(([ch, f]) => `<option value="${f}">Ch ${ch} (${f} MHz)${g.dfs ? ' [DFS]' : ''}</option>`).join("");
    if (opts) html += `<optgroup label="${g.group}">${opts}</optgroup>`;
  });
  picker.innerHTML = html;
}

function renderChannelChips(band) {
  const container = document.getElementById(`wifi_${band}_channel_chips`);
  container.innerHTML = wifiModalChannels[band].map(freq => {
    const info = findWifiChannelInfo(band, freq);
    return `<span class="channel-chip${info.dfs ? ' dfs' : ''}">Ch ${info.ch} (${freq})<button type="button" onclick="removeWifiChannel('${band}', ${freq})">✕</button></span>`;
  }).join("");
  document.getElementById(`wifi_${band}_freq`).value = wifiModalChannels[band].join(",");
}

function addWifiChannel(band) {
  const picker = document.getElementById(`wifi_${band}_channel_picker`);
  const freq = parseInt(picker.value, 10);
  if (!freq) return;
  if (!wifiModalChannels[band].includes(freq)) {
    wifiModalChannels[band].push(freq);
    wifiModalChannels[band].sort((a, b) => a - b);
  }
  populateChannelPicker(band);
  renderChannelChips(band);
}

function removeWifiChannel(band, freq) {
  wifiModalChannels[band] = wifiModalChannels[band].filter(f => f !== freq);
  populateChannelPicker(band);
  renderChannelChips(band);
}

function openWifiModal(nodeIdx) {
  currentConfiguringNodeIndex = nodeIdx;
  const node = nodes[nodeIdx];
  const titleEl = document.getElementById("wifiModalTitle");
  if(titleEl) titleEl.innerText = `${t("wifi_title")} - ${node.identity}`;
  document.getElementById("wifi_mode_select").value = node.wifi.mode || "ap";
  document.getElementById("wifi_pass_input").value = node.wifi.pass;

  const isLegacy = node.wifi.driver === "legacy";
  const secSelect = document.getElementById("wifi_security_select");
  document.getElementById("t_sec_opt_mixed").disabled = isLegacy;
  document.getElementById("t_sec_opt_wpa3").disabled = isLegacy;
  secSelect.value = isLegacy ? "wpa2-psk" : (node.wifi.security || "wpa2-psk,wpa3-psk");
  if (isLegacy) secSelect.value = "wpa2-psk";

  const vlanSelect = document.getElementById("wifi_vlan_select");
  vlanSelect.innerHTML = node.vlans.map(v => `<option value="${v.id}" ${v.id === node.wifi.vlan ? 'selected' : ''}>${v.name} (VLAN ${v.id})</option>`).join("");

  document.getElementById("wifi_country_select").value = node.wifi.country || "poland";
  document.getElementById("wifi_hide_ssid").checked = !!node.wifi.hideSsid;
  document.getElementById("wifi_isolate").checked = !!node.wifi.clientIsolation;

  const b5 = node.wifi.band5;
  document.getElementById("wifi_band5_enabled").checked = !!b5.enabled;
  document.getElementById("wifi_band5_ssid").value = b5.ssid;
  document.getElementById("wifi_band5_width").value = b5.width;
  document.getElementById("wifi_band5_ft").checked = b5.ft === "yes";
  wifiModalChannels.band5 = (b5.frequencies || "").split(",").map(s => parseInt(s.trim(), 10)).filter(Boolean);

  const b24 = node.wifi.band24;
  document.getElementById("wifi_band24_enabled").checked = !!b24.enabled;
  document.getElementById("wifi_band24_ssid").value = b24.ssid;
  document.getElementById("wifi_band24_width").value = b24.width;
  document.getElementById("wifi_band24_ft").checked = b24.ft === "yes";
  wifiModalChannels.band24 = (b24.frequencies || "").split(",").map(s => parseInt(s.trim(), 10)).filter(Boolean);

  populateChannelPicker("band5");
  populateChannelPicker("band24");
  renderChannelChips("band5");
  renderChannelChips("band24");

  document.getElementById("wifi-modal").style.display = "flex";
}

function saveWifiConfig() {
  if (currentConfiguringNodeIndex !== null) {
    const node = nodes[currentConfiguringNodeIndex];
    node.wifi.mode = document.getElementById("wifi_mode_select").value;
    node.wifi.pass = document.getElementById("wifi_pass_input").value || "HasloWPA3_2026!";
    node.wifi.security = document.getElementById("wifi_security_select").value;
    node.wifi.vlan = parseInt(document.getElementById("wifi_vlan_select").value, 10) || node.vlans[0].id;
    node.wifi.country = document.getElementById("wifi_country_select").value;
    node.wifi.hideSsid = document.getElementById("wifi_hide_ssid").checked;
    node.wifi.clientIsolation = document.getElementById("wifi_isolate").checked;

    node.wifi.band5.enabled = document.getElementById("wifi_band5_enabled").checked;
    node.wifi.band5.ssid = document.getElementById("wifi_band5_ssid").value || "MikroTik_5G";
    node.wifi.band5.width = document.getElementById("wifi_band5_width").value;
    node.wifi.band5.frequencies = document.getElementById("wifi_band5_freq").value.trim() || "5180,5200,5220,5240";
    node.wifi.band5.ft = document.getElementById("wifi_band5_ft").checked ? "yes" : "no";

    node.wifi.band24.enabled = document.getElementById("wifi_band24_enabled").checked;
    node.wifi.band24.ssid = document.getElementById("wifi_band24_ssid").value || "MikroTik_2G";
    node.wifi.band24.width = document.getElementById("wifi_band24_width").value;
    node.wifi.band24.frequencies = document.getElementById("wifi_band24_freq").value.trim() || "2412,2437,2462,2472";
    node.wifi.band24.ft = document.getElementById("wifi_band24_ft").checked ? "yes" : "no";

    if (!node.wifi.band5.enabled && !node.wifi.band24.enabled) {
      alert("Musisz włączyć przynajmniej jedno pasmo (5 GHz lub 2.4 GHz).");
      return;
    }

    closeModal('wifi-modal');
    renderCanvas();
  }
}

function cidrToPoolRange(cidr) {
  const [ip, prefixStr] = (cidr || "172.16.0.1/24").split('/');
  const prefix = parseInt(prefixStr || '24', 10);
  const parts = ip.split('.').map(Number);
  const ipInt = ((parts[0] << 24) + (parts[1] << 16) + (parts[2] << 8) + parts[3]) >>> 0;
  const mask = prefix === 0 ? 0 : (~0 << (32 - prefix)) >>> 0;
  const network = (ipInt & mask) >>> 0;
  const broadcast = (network | (~mask >>> 0)) >>> 0;
  const toIp = n => [(n >>> 24) & 255, (n >>> 16) & 255, (n >>> 8) & 255, n & 255].join('.');
  return {
    gateway: ip,
    networkCidr: `${toIp(network)}/${prefix}`,
    poolStart: toIp(network + 2),
    poolEnd: toIp(broadcast - 1)
  };
}

function openVpnModal(nodeIdx) {
  currentConfiguringNodeIndex = nodeIdx;
  const node = nodes[nodeIdx];
  const titleEl = document.getElementById("vpnModalTitle");
  if(titleEl) titleEl.innerText = `${t("vpn_title")} - ${node.identity}`;
  document.getElementById("vpn_proto_select").value = node.vpn.proto || "wireguard";
  document.getElementById("vpn_mode_select").value = node.vpn.mode || "server";
  document.getElementById("vpn_subnet_input").value = node.vpn.subnet || "172.16.0.1/24";
  document.getElementById("vpn_secret_input").value = node.vpn.secret || "SuperTajneHasloVPN_2026!";
  document.getElementById("vpn_username_input").value = node.vpn.username || "vpnuser";
  document.getElementById("vpn_remote_host_input").value = node.vpn.remoteHost || "";
  document.getElementById("vpn_wg_pubkey_input").value = node.vpn.peerPublicKey || "";
  document.getElementById("vpn_wg_allowed_input").value = node.vpn.allowedAddress || "172.16.0.2/32";
  updateVpnFormFields();
  document.getElementById("vpn-modal").style.display = "flex";
}

function updateVpnFormFields() {
  const proto = document.getElementById("vpn_proto_select").value;
  const mode = document.getElementById("vpn_mode_select").value;
  const portInput = document.getElementById("vpn_port_input");

  const secretLabelStr = proto === "wireguard" ? t("vpn_wg_key") :
                         proto === "ipsec" ? t("vpn_ipsec_key") :
                         proto === "ovpn" ? t("vpn_ovpn_key") :
                         proto === "l2tp" ? t("vpn_l2tp_key") : t("vpn_sstp_key");

  setT("t_vpn_secret_label", secretLabelStr); // Bezpieczne użycie naszej funkcji DOM

  if (proto === "wireguard") {
    if(portInput) portInput.value = 13231;
  } else if (proto === "ipsec") {
    if(portInput) portInput.value = 500;
  } else if (proto === "ovpn") {
    if(portInput) portInput.value = 1194;
  } else if (proto === "l2tp") {
    if(portInput) portInput.value = 1701;
  } else if (proto === "sstp") {
    if(portInput) portInput.value = 443;
  }

  const isWg = proto === "wireguard";
  const needsUsername = proto === "ovpn" || proto === "l2tp" || proto === "sstp";
  const needsRemoteHost = mode === "client";

  document.getElementById("vpn_wg_pubkey_group").style.display = isWg ? "block" : "none";
  document.getElementById("vpn_wg_allowed_group").style.display = isWg ? "block" : "none";
  document.getElementById("vpn_username_group").style.display = needsUsername ? "block" : "none";
  document.getElementById("vpn_remote_host_group").style.display = needsRemoteHost ? "block" : "none";
  document.getElementById("vpn_secret_group").style.display = isWg ? "none" : "block";

  if (isWg) {
    setT("t_vpn_wg_pubkey_label", mode === "server" ? "vpn_wg_pubkey_client_label" : "vpn_wg_pubkey_server_label");
  }
}

function saveVpnConfig() {
  if (currentConfiguringNodeIndex !== null) {
    const node = nodes[currentConfiguringNodeIndex];
    node.vpn.enabled = true;
    node.vpn.proto = document.getElementById("vpn_proto_select").value;
    node.vpn.mode = document.getElementById("vpn_mode_select").value;
    node.vpn.port = parseInt(document.getElementById("vpn_port_input").value, 10) || 13231;
    node.vpn.subnet = document.getElementById("vpn_subnet_input").value || "172.16.0.1/24";
    node.vpn.secret = document.getElementById("vpn_secret_input").value || "SuperTajneHasloVPN_2026!";
    node.vpn.username = document.getElementById("vpn_username_input").value.trim() || "vpnuser";
    node.vpn.remoteHost = document.getElementById("vpn_remote_host_input").value.trim();
    node.vpn.peerPublicKey = document.getElementById("vpn_wg_pubkey_input").value.trim();
    node.vpn.allowedAddress = document.getElementById("vpn_wg_allowed_input").value.trim() || "172.16.0.2/32";
    closeModal('vpn-modal');
    renderCanvas();
  }
}

function openConsoleModal(nodeIdx) {
  currentConfiguringNodeIndex = nodeIdx;
  const node = nodes[nodeIdx];
  const titleEl = document.getElementById("consoleModalTitle");
  if(titleEl) titleEl.innerText = `${t("console_title")} - ${node.identity}`;

  document.getElementById("console_xbox_enabled").checked = !!node.consoles.xbox.enabled;
  document.getElementById("console_xbox_ip").value = node.consoles.xbox.ip;
  document.getElementById("console_ps5_enabled").checked = !!node.consoles.ps5.enabled;
  document.getElementById("console_ps5_ip").value = node.consoles.ps5.ip;

  document.getElementById("console-modal").style.display = "flex";
}

function saveConsoleConfig() {
  if (currentConfiguringNodeIndex !== null) {
    const node = nodes[currentConfiguringNodeIndex];
    node.consoles.xbox.enabled = document.getElementById("console_xbox_enabled").checked;
    node.consoles.xbox.ip = document.getElementById("console_xbox_ip").value.trim() || "192.168.10.50";
    node.consoles.ps5.enabled = document.getElementById("console_ps5_enabled").checked;
    node.consoles.ps5.ip = document.getElementById("console_ps5_ip").value.trim() || "192.168.10.51";
    closeModal('console-modal');
    renderCanvas();
  }
}

function openNetModal(nodeIdx) {
  currentConfiguringNodeIndex = nodeIdx;
  const node = nodes[nodeIdx];
  const titleEl = document.getElementById("netModalTitle");
  if(titleEl) titleEl.innerText = `${t("net_title")} - ${node.identity}`;
  document.getElementById("net_pool_input").value = node.netMgmt.poolRange;
  document.getElementById("net_lease_input").value = node.netMgmt.leaseTime;
  document.getElementById("net_domain_input").value = node.netMgmt.domain;
  document.getElementById("net_dhcp_auth").value = node.netMgmt.authoritative;

  document.getElementById("net_dns_pri_v4").value = node.netMgmt.priV4 || "1.1.1.1";
  document.getElementById("net_dns_sec_v4").value = node.netMgmt.secV4 || "1.0.0.1";
  document.getElementById("net_dns_pri_v6").value = node.netMgmt.priV6 || "";
  document.getElementById("net_dns_sec_v6").value = node.netMgmt.secV6 || "";
  document.getElementById("dns_provider_select").value = detectDnsPresetKey(node.netMgmt);

  document.getElementById("net_doh_enabled").value = node.netMgmt.dohMode;
  document.getElementById("net_dns_redirect").value = node.netMgmt.dnsRedirect;
  document.getElementById("net_cloud_ddns").checked = node.netMgmt.cloudDdns;
  document.getElementById("net_proxy_enabled").checked = node.netMgmt.proxyEnabled;
  document.getElementById("net_socks_enabled").checked = node.netMgmt.socksEnabled;
  document.getElementById("net-modal").style.display = "flex";
}

function saveNetConfig() {
  if (currentConfiguringNodeIndex !== null) {
    const node = nodes[currentConfiguringNodeIndex];
    node.netMgmt.poolRange = document.getElementById("net_pool_input").value.trim();
    node.netMgmt.leaseTime = document.getElementById("net_lease_input").value;
    node.netMgmt.domain = document.getElementById("net_domain_input").value;
    node.netMgmt.authoritative = document.getElementById("net_dhcp_auth").value;
    
    node.netMgmt.priV4 = document.getElementById("net_dns_pri_v4").value.trim();
    node.netMgmt.secV4 = document.getElementById("net_dns_sec_v4").value.trim();
    node.netMgmt.priV6 = document.getElementById("net_dns_pri_v6").value.trim();
    node.netMgmt.secV6 = document.getElementById("net_dns_sec_v6").value.trim();
    
    node.netMgmt.dohMode = document.getElementById("net_doh_enabled").value;
    node.netMgmt.dnsRedirect = document.getElementById("net_dns_redirect").value;
    node.netMgmt.cloudDdns = document.getElementById("net_cloud_ddns").checked;
    node.netMgmt.proxyEnabled = document.getElementById("net_proxy_enabled").checked;
    node.netMgmt.socksEnabled = document.getElementById("net_socks_enabled").checked;
    closeModal('net-modal');
    renderCanvas();
  }
}

function openVlanModal(nodeIdx) {
  const node = nodes[nodeIdx];
  if (!node || node.isGlobe) return;
  currentConfiguringNodeIndex = nodeIdx;
  const title = document.getElementById("vlanModalTitle");
  if (title) title.innerText = `${t("vlan_title")} - ${node.identity}`;
  editingVlans = node.vlans.map(vlan => ({ ...vlan }));
  renderVlanRows();
  document.getElementById("vlan-modal").style.display = "flex";
}

function renderVlanRows() {
  const container = document.getElementById("vlan_list_container");
  container.innerHTML = "";
  editingVlans.forEach((vlan, index) => {
    const row = document.createElement("div");
    row.style.cssText = "display:grid;grid-template-columns:80px 1fr 1.5fr auto;gap:8px;background:#020617;padding:10px;border:1px solid var(--border);border-radius:6px;align-items:end;";
    row.innerHTML = `
      <div class="form-group" style="margin:0;">
        <label>${t("vlan_id")}</label>
        <input type="number" min="1" max="4094" value="${escapeHtml(vlan.id)}" onchange="updateEditingVlan(${index}, 'id', this.value)" ${index === 0 ? `disabled title="${t("vlan_primary_id_locked")}"` : ""}>
      </div>
      <div class="form-group" style="margin:0;">
        <label>${t("vlan_name")}</label>
        <input type="text" value="${escapeHtml(vlan.name)}" onchange="updateEditingVlan(${index}, 'name', this.value)">
      </div>
      <div class="form-group" style="margin:0;">
        <label>${t("vlan_gateway")}</label>
        <input type="text" value="${escapeHtml(vlan.ip)}" onchange="updateEditingVlan(${index}, 'ip', this.value)" placeholder="192.168.30.1/24">
      </div>
      <button class="btn btn-danger btn-sm" style="height:30px;width:30px;padding:0;font-size:14px;" onclick="removeVlanRow(${index})" aria-label="${t("vlan_delete")}" title="${t("vlan_delete")}">✕</button>
    `;
    container.appendChild(row);
  });
}

function updateEditingVlan(index, field, value) {
  const vlan = editingVlans[index];
  if (!vlan) return;
  if (field === "id") {
    vlan.id = value === "" ? NaN : Number(value);
  } else if (field === "name") {
    vlan.name = value.trim();
  } else if (field === "ip") {
    vlan.ip = value.trim();
    vlan.subnet = ipv4CidrToNetwork(vlan.ip) || "";
  }
}

function addVlanRow() {
  const usedIds = new Set(editingVlans.map(vlan => vlan.id));
  let newId = 30;
  while (usedIds.has(newId) && newId <= 4094) newId += 10;
  if (newId > 4094) {
    newId = 2;
    while (usedIds.has(newId) && newId <= 4094) newId++;
    if (newId > 4094) {
      alert(t("err_vlan_no_ids"));
      return;
    }
  }

  const usedSubnets = new Set(editingVlans.map(vlan => vlan.subnet));
  let octet = 30;
  while (octet <= 254 && usedSubnets.has(`192.168.${octet}.0/24`)) octet++;
  if (octet > 254) {
    alert(t("err_vlan_no_subnet"));
    return;
  }

  editingVlans.push({
    id: newId,
    name: `VLAN_${newId}`,
    ip: `192.168.${octet}.1/24`,
    subnet: `192.168.${octet}.0/24`
  });
  renderVlanRows();
}

function removeVlanRow(index) {
  if (editingVlans.length <= 1) {
    alert(t("err_vlan_last_required"));
    return;
  }
  editingVlans.splice(index, 1);
  renderVlanRows();
}

function saveVlanConfig() {
  if (currentConfiguringNodeIndex === null) return;
  const node = nodes[currentConfiguringNodeIndex];
  if (!node || node.isGlobe) return;

  const ids = editingVlans.map(vlan => vlan.id);
  if (ids.some(id => !Number.isInteger(id) || id < 1 || id > 4094)) {
    alert(t("err_vlan_id_range"));
    return;
  }
  if (new Set(ids).size !== ids.length) {
    alert(t("err_vlan_id_duplicate"));
    return;
  }
  if (editingVlans.some(vlan => !/^[A-Za-z0-9_-]{1,32}$/.test(vlan.name))) {
    alert(t("err_vlan_name"));
    return;
  }

  const subnetDetails = [];
  for (const vlan of editingVlans) {
    const details = parseIpv4Cidr(vlan.ip);
    if (!details) {
      alert(t("err_vlan_gateway").replace("{name}", vlan.name));
      return;
    }
    vlan.subnet = details.cidr;
    subnetDetails.push(details);
  }
  for (let i = 0; i < subnetDetails.length; i++) {
    for (let j = i + 1; j < subnetDetails.length; j++) {
      const first = subnetDetails[i];
      const second = subnetDetails[j];
      if (first.network <= second.broadcast && second.network <= first.broadcast) {
        alert(t("err_vlan_overlap"));
        return;
      }
    }
  }
  if (new Set(editingVlans.map(vlan => vlan.subnet)).size !== editingVlans.length) {
    alert(t("err_vlan_duplicate_subnet"));
    return;
  }

  const oldPrimarySubnet = node.vlans[0]?.subnet;
  const oldDefaultPool = oldPrimarySubnet
    ? deriveDefaultPoolRange(oldPrimarySubnet, node.vlans[0].ip)
    : "";
  node.vlans = editingVlans.map(vlan => ({ ...vlan }));
  const availableIds = node.vlans.map(vlan => vlan.id);
  node.ports.forEach(port => {
    if (!availableIds.includes(port.pvid)) port.pvid = availableIds[0];
  });
  if (node.wifi && !availableIds.includes(node.wifi.vlan)) {
    node.wifi.vlan = availableIds[0];
  }
  if (node.netMgmt.poolRange === oldDefaultPool) {
    node.netMgmt.poolRange = deriveDefaultPoolRange(node.vlans[0].subnet, node.vlans[0].ip);
  }

  closeModal("vlan-modal");
  renderCanvas();
}

function closeModal(id) {
  document.getElementById(id).style.display = "none";
  currentConfiguringNodeIndex = null;
}

function toggleFeature(nodeIdx, feat) {
  nodes[nodeIdx].features[feat] = !nodes[nodeIdx].features[feat];
}

function updateGlobeIsp(nodeIdx, isp) {
  const globeNode = nodes[nodeIdx];
  globeNode.ispType = isp;
  links.forEach(l => {
    if (l.isWan && (l.srcNodeId === globeNode.id || l.dstNodeId === globeNode.id)) {
      l.ispType = isp;
    }
  });
  renderCanvas();
}

function checkPortCompatibility(port1, port2) {
  const name1 = port1.toLowerCase();
  const name2 = port2.toLowerCase();
  if (name1.includes("combo") || name2.includes("combo")) return true;

  const isFiber1 = /sfp|qsfp|fiber/.test(name1);
  const isFiber2 = /sfp|qsfp|fiber/.test(name2);
  const isCopper1 = /ether|rj45/.test(name1);
  const isCopper2 = /ether|rj45/.test(name2);
  return !((isFiber1 && isCopper2) || (isCopper1 && isFiber2));
}

function handlePortClick(nodeIdx, portIdx) {
  const node = nodes[nodeIdx];
  if (!node || !node.ports[portIdx]) return;
  const port = node.ports[portIdx];
  const statusLabel = document.getElementById("wireStatus");

  if (!pendingConnection) {
    pendingConnection = { nodeIdx, portIdx, nodeId: node.id, nodeName: node.identity, portName: port.name, isGlobe: node.isGlobe };
    if (statusLabel) {
      statusLabel.innerHTML = t("wire_status_selected").replace("{node}", node.identity).replace("{port}", port.name);
    }
    renderCanvas();
  } else {
    if (pendingConnection.nodeId === node.id) {
      if (pendingConnection.portIdx === portIdx) {
        pendingConnection = null;
        if (statusLabel) statusLabel.innerHTML = t("wire_status_canceled");
        renderCanvas();
        return;
      }
      alert(t("err_port_same_device"));
      return;
    }

    if (pendingConnection.isGlobe && node.isGlobe) {
      alert(t("err_two_isp"));
      pendingConnection = null;
      renderCanvas();
      return;
    }

    if (!checkPortCompatibility(pendingConnection.portName, port.name)) {
      alert(t("err_port_mismatch"));
      pendingConnection = null;
      renderCanvas();
      return;
    }

    const sourceNode = nodes[pendingConnection.nodeIdx];
    const sourcePort = sourceNode?.ports[pendingConnection.portIdx];
    if (!sourceNode || !sourcePort) {
      pendingConnection = null;
      renderCanvas();
      return;
    }
    const occupied = links.some(link =>
      (link.srcNodeId === sourceNode.id && link.srcPort === sourcePort.name) ||
      (link.dstNodeId === sourceNode.id && link.dstPort === sourcePort.name) ||
      (link.srcNodeId === node.id && link.srcPort === port.name) ||
      (link.dstNodeId === node.id && link.dstPort === port.name)
    );
    if (occupied) {
      alert(t("err_port_occupied"));
      pendingConnection = null;
      renderCanvas();
      return;
    }

    const isWan = pendingConnection.isGlobe || node.isGlobe;
    const globeNode = pendingConnection.isGlobe ? nodes[pendingConnection.nodeIdx] : (node.isGlobe ? node : null);
    const peerLinks = isWan ? [] : links.filter(link =>
      (link.srcNodeId === sourceNode.id && link.dstNodeId === node.id) ||
      (link.srcNodeId === node.id && link.dstNodeId === sourceNode.id)
    );
    let isBonding = false;

    if (peerLinks.length > 0) {
      const hasSwOsEndpoint = sourceNode.device.arch === "swos" || node.device.arch === "swos";
      if (hasSwOsEndpoint) {
        alert(t("lacp_swos"));
        pendingConnection = null;
        renderCanvas();
        return;
      }
      if (!peerLinks.every(link => link.isBonding) &&
          !confirm(t("lacp_confirm"))) {
        alert(t("lacp_cancel"));
        pendingConnection = null;
        renderCanvas();
        return;
      }
      isBonding = true;
      peerLinks.forEach(link => { link.isBonding = true; });
    }

    links.push({
      id: `link_${Date.now()}_${Math.floor(Math.random() * 1000000)}`,
      srcNodeId: pendingConnection.nodeId,
      srcNodeName: pendingConnection.nodeName,
      srcPort: pendingConnection.portName,
      dstNodeId: node.id,
      dstNodeName: node.identity,
      dstPort: port.name,
      isWan: isWan,
      ispType: globeNode ? globeNode.ispType : null,
      isBonding
    });

    if (isWan) {
      const routerNode = pendingConnection.isGlobe ? node : nodes[pendingConnection.nodeIdx];
      const routerPortIdx = pendingConnection.isGlobe ? portIdx : pendingConnection.portIdx;
      routerNode.ports[routerPortIdx].role = "wan";
    } else {
      nodes[pendingConnection.nodeIdx].ports[pendingConnection.portIdx].role = "trunk";
      node.ports[portIdx].role = "trunk";
    }

    if (statusLabel) {
      statusLabel.innerHTML = t("wire_status_linked")
        .replace("{srcNode}", pendingConnection.nodeName)
        .replace("{srcPort}", pendingConnection.portName)
        .replace("{dstNode}", node.identity)
        .replace("{dstPort}", port.name);
    }
    pendingConnection = null;
    renderCanvas();
  }
}

function removeLink(linkId) {
  links = links.filter(l => l.id !== linkId);
  renderCanvas();
}

function highlightLink(linkId, state) {
  const path = document.getElementById(`path-${linkId}`);
  if (!path) return;
  if (state) {
    path.dataset.origStroke = path.getAttribute("stroke");
    path.dataset.origWidth = path.getAttribute("stroke-width");
    path.setAttribute("stroke", "#bef264");
    path.setAttribute("stroke-width", "8");
    path.setAttribute("filter", "drop-shadow(0 0 10px rgba(190, 242, 100, 0.9))");
    return;
  }
  path.setAttribute("stroke", path.dataset.origStroke || (path.dataset.isWan === "true" ? "#22d3ee" : "#c084fc"));
  path.setAttribute("stroke-width", path.dataset.origWidth || (path.dataset.isWan === "true" ? "5" : "4"));
  path.setAttribute("filter", path.dataset.origFilter || "none");
}

function drawCables() {
  const svg = document.getElementById("svg-layer");
  if(!svg) return;
  svg.innerHTML = "";

  links.forEach(l => {
    const srcEl = document.getElementById(`btn-${l.srcNodeId}-${l.srcPort}`);
    const dstEl = document.getElementById(`btn-${l.dstNodeId}-${l.dstPort}`);

    if (srcEl && dstEl) {
      const r1 = srcEl.getBoundingClientRect();
      const r2 = dstEl.getBoundingClientRect();
      const canvasRect = document.getElementById("canvas").getBoundingClientRect();

      const x1 = (r1.left + r1.width / 2 - canvasRect.left) / canvasZoom;
      const y1 = (r1.top + r1.height / 2 - canvasRect.top) / canvasZoom;
      const x2 = (r2.left + r2.width / 2 - canvasRect.left) / canvasZoom;
      const y2 = (r2.top + r2.height / 2 - canvasRect.top) / canvasZoom;

      const dx = Math.abs(x1 - x2) * 0.4;
      const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
      const d = `M ${x1} ${y1} C ${x1 + dx} ${y1}, ${x2 - dx} ${y2}, ${x2} ${y2}`;

      path.setAttribute("id", `path-${l.id}`);
      path.setAttribute("d", d);
      path.setAttribute("stroke", l.isWan ? "#22d3ee" : "#c084fc");
      path.setAttribute("stroke-width", l.isWan ? "5" : (l.isBonding ? "6" : "4"));
      if (l.isBonding) path.setAttribute("stroke-dasharray", "8, 4");
      path.setAttribute("fill", "none");
      path.setAttribute("stroke-linecap", "round");
      const dropFilter = l.isWan
        ? "drop-shadow(0 0 8px rgba(34, 211, 238, 0.8))"
        : "drop-shadow(0 0 6px rgba(192, 132, 252, 0.6))";
      path.setAttribute("filter", dropFilter);
      path.setAttribute("pointer-events", "stroke");
      path.dataset.origFilter = dropFilter;
      path.dataset.isWan = String(l.isWan);
      path.addEventListener("mouseenter", () => highlightLink(l.id, true));
      path.addEventListener("mouseleave", () => highlightLink(l.id, false));

      svg.appendChild(path);

      const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
      text.setAttribute("x", (x1 + x2) / 2);
      text.setAttribute("y", (y1 + y2) / 2 - 8);
      text.setAttribute("fill", l.isWan ? "#a5f3fc" : (l.isBonding ? "#fde68a" : "#e9d5ff"));
      text.setAttribute("font-size", "10px");
      text.setAttribute("font-family", "monospace");
      text.setAttribute("text-anchor", "middle");
      text.textContent = l.isWan
        ? `WAN Uplink (${l.ispType.toUpperCase()})`
        : (l.isBonding ? `LACP Bond (${l.srcPort} ⇄ ${l.dstPort})` : `${l.srcPort} ⇄ ${l.dstPort}`);
      svg.appendChild(text);
    }
  });
}

function renderPatchPanel() {
  const container = document.getElementById("linksList");
  if(!container) return;
  document.getElementById("linkCount").innerText = `(${links.length})`;
  if (links.length === 0) {
    container.innerHTML = `<span style="color:var(--muted)">${t("patch_empty")}</span>`;
    return;
  }

  container.innerHTML = links.map(l => `
    <div class="link-item ${l.isWan ? 'wan-link' : ''}" title="${l.srcNodeName} [${l.srcPort}] ⇄ ${l.dstNodeName} [${l.dstPort}]"
         onmouseenter="highlightLink('${l.id}', true)" onmouseleave="highlightLink('${l.id}', false)">
      <div style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 230px; cursor: help;">
        <span style="color:${l.isWan ? '#22d3ee' : '#d8b4fe'}; font-weight:bold;">${l.srcNodeName}</span> [${l.srcPort}]
        <span style="color:var(--accent)"> ${l.isBonding ? '☍' : '⇄'} </span>
        <span style="color:${l.isWan ? '#22d3ee' : '#d8b4fe'}; font-weight:bold;">${l.dstNodeName}</span> [${l.dstPort}]
      </div>
      <button class="btn btn-danger btn-sm" onclick="removeLink('${l.id}')" style="padding:1px 5px; font-size:10px; flex-shrink: 0;">${t("disconnect")}</button>
    </div>
  `).join("");
}

function removeNode(idx) {
  const node = nodes[idx];
  links = links.filter(l => l.srcNodeId !== node.id && l.dstNodeId !== node.id);
  nodes.splice(idx, 1);
  renderCanvas();
}

function clearCanvas() {
  nodes = [];
  links = [];
  pendingConnection = null;
  renderCanvas();
  const cb = document.getElementById("consoleBoxes");
  if(cb) cb.innerHTML = `<div style="color:var(--muted); padding:25px;" id="t_console_placeholder">${t("console_placeholder")}</div>`;
}

function saveProject() {
  const project = {
    format: "mikrotik-network-designer",
    version: 1,
    nodes,
    links
  };
  const url = URL.createObjectURL(new Blob([JSON.stringify(project, null, 2)], {
    type: "application/json;charset=utf-8"
  }));
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = "mikrotik-network-project.json";
  anchor.click();
  window.setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function validateProject(project) {
  const isRecord = value => value !== null && typeof value === "object" && !Array.isArray(value);
  if (!isRecord(project) ||
      project.format !== "mikrotik-network-designer" ||
      project.version !== 1 ||
      !Array.isArray(project.nodes) ||
      !Array.isArray(project.links)) {
    throw new Error("Plik nie jest obsługiwanym projektem MikroTik.");
  }

  const nodeIds = new Set();
  const restoredNodes = project.nodes.map(savedNode => {
    if (!isRecord(savedNode) ||
        typeof savedNode.id !== "string" ||
        !/^(?:node_\d+_\d+|globe_\d+)$/.test(savedNode.id) ||
        nodeIds.has(savedNode.id) ||
        typeof savedNode.isGlobe !== "boolean" ||
        typeof savedNode.identity !== "string" ||
        !/^[A-Za-z0-9_-]{1,32}$/.test(savedNode.identity) ||
        !Number.isFinite(savedNode.x) ||
        !Number.isFinite(savedNode.y) ||
        !Array.isArray(savedNode.ports)) {
      throw new Error("Projekt zawiera nieprawidłowy węzeł.");
    }
    nodeIds.add(savedNode.id);

    if (savedNode.isGlobe) {
      if (savedNode.identity !== "ISP_PROVIDER" ||
          !["orange", "tmobile", "dhcp", "static"].includes(savedNode.ispType) ||
          savedNode.ports.length !== 2 ||
          !savedNode.ports.every(port => isRecord(port) && ["rj45-wan", "sfp-wan"].includes(port.name))) {
        throw new Error("Projekt zawiera nieprawidłowy węzeł ISP.");
      }
      return {
        ...savedNode,
        ports: [
          { name: "rj45-wan", label: "RJ45 (Copper)", role: "uplink" },
          { name: "sfp-wan", label: "SFP/SFP+ (Fiber)", role: "uplink" }
        ]
      };
    }

    const device = fullDeviceCatalog.find(item => item.name === savedNode.device?.name);
    if (!device ||
        !Array.isArray(savedNode.vlans) ||
        savedNode.vlans.length === 0 ||
        !isRecord(savedNode.netMgmt) ||
        !isRecord(savedNode.features) ||
        !isRecord(savedNode.vpn) ||
        !isRecord(savedNode.consoles)) {
      throw new Error(`Projekt zawiera nieprawidłową konfigurację urządzenia ${savedNode.identity}.`);
    }

    const vlanIds = new Set();
    const vlans = savedNode.vlans.map(vlan => {
      if (!isRecord(vlan) ||
          !Number.isInteger(vlan.id) ||
          vlan.id < 1 ||
          vlan.id > 4094 ||
          vlanIds.has(vlan.id) ||
          typeof vlan.name !== "string" ||
          !/^[A-Za-z0-9_-]{1,32}$/.test(vlan.name) ||
          typeof vlan.ip !== "string") {
        throw new Error(`Projekt zawiera nieprawidłowy VLAN na urządzeniu ${savedNode.identity}.`);
      }
      const subnet = ipv4CidrToNetwork(vlan.ip);
      if (!subnet) throw new Error(`Projekt zawiera nieprawidłowy adres VLAN na urządzeniu ${savedNode.identity}.`);
      vlanIds.add(vlan.id);
      return { ...vlan, subnet };
    });

    const savedPorts = new Map(savedNode.ports.map(port => [port?.name, port]));
    const ports = device.ports.map((rawName, index) => {
      const name = rawName.split(" ")[0];
      const savedPort = savedPorts.get(name);
      if (!savedPort ||
          !["wan", "access", "trunk", "disabled"].includes(savedPort.role) ||
          !Number.isInteger(savedPort.pvid) ||
          !vlanIds.has(savedPort.pvid)) {
        throw new Error(`Projekt zawiera nieprawidłowy port ${name} na urządzeniu ${savedNode.identity}.`);
      }
      return { name, rawName, role: savedPort.role, pvid: savedPort.pvid };
    });
    if (savedPorts.size !== ports.length) {
      throw new Error(`Projekt zawiera nieznany port na urządzeniu ${savedNode.identity}.`);
    }
    return { ...savedNode, device, vlans, ports };
  });

  const nodesById = new Map(restoredNodes.map(node => [node.id, node]));
  const linkIds = new Set();
  const connectedPorts = new Set();
  const restoredLinks = project.links.map(link => {
    if (!isRecord(link) ||
        typeof link.id !== "string" ||
        !/^link_\d+(?:_\d+)?$/.test(link.id) ||
        linkIds.has(link.id) ||
        typeof link.srcNodeId !== "string" ||
        typeof link.dstNodeId !== "string" ||
        link.srcNodeId === link.dstNodeId ||
        typeof link.srcPort !== "string" ||
        typeof link.dstPort !== "string" ||
        typeof link.isWan !== "boolean") {
      throw new Error("Projekt zawiera nieprawidłowe połączenie.");
    }
    linkIds.add(link.id);

    const source = nodesById.get(link.srcNodeId);
    const destination = nodesById.get(link.dstNodeId);
    const sourcePort = source?.ports.find(port => port.name === link.srcPort);
    const destinationPort = destination?.ports.find(port => port.name === link.dstPort);
    if (!source || !destination || !sourcePort || !destinationPort) {
      throw new Error("Połączenie wskazuje nieistniejące urządzenie lub port.");
    }
    if (!checkPortCompatibility(sourcePort.name, destinationPort.name)) {
      throw new Error("Projekt zawiera połączenie między niezgodnymi typami portów.");
    }
    const sourceKey = `${source.id}:${sourcePort.name}`;
    const destinationKey = `${destination.id}:${destinationPort.name}`;
    if (connectedPorts.has(sourceKey) || connectedPorts.has(destinationKey)) {
      throw new Error("Port nie może należeć do więcej niż jednego połączenia.");
    }
    connectedPorts.add(sourceKey);
    connectedPorts.add(destinationKey);

    const isWan = source.isGlobe || destination.isGlobe;
    if (isWan !== link.isWan || (source.isGlobe && destination.isGlobe)) {
      throw new Error("Typ połączenia nie zgadza się z podłączonymi urządzeniami.");
    }
    if (link.isBonding === true &&
        (isWan || source.isGlobe || destination.isGlobe ||
         source.device.arch === "swos" || destination.device.arch === "swos")) {
      throw new Error("Projekt zawiera agregację LACP nieobsługiwaną przez te urządzenia.");
    }
    return {
      id: link.id,
      srcNodeId: source.id,
      srcNodeName: source.identity,
      srcPort: sourcePort.name,
      dstNodeId: destination.id,
      dstNodeName: destination.identity,
      dstPort: destinationPort.name,
      isWan,
      ispType: isWan ? (source.isGlobe ? source.ispType : destination.ispType) : null,
      isBonding: !isWan && link.isBonding === true
    };
  });
  const linkGroups = new Map();
  restoredLinks.forEach(link => {
    const pair = [link.srcNodeId, link.dstNodeId].sort().join(":");
    const group = linkGroups.get(pair) || { total: 0, bonding: 0 };
    group.total++;
    if (link.isBonding) group.bonding++;
    linkGroups.set(pair, group);
  });
  if ([...linkGroups.values()].some(group =>
    group.bonding > 0 && (group.bonding < 2 || group.bonding !== group.total)
  )) {
    throw new Error("Wszystkie kable między urządzeniami w agregacji muszą należeć do tej samej grupy LACP.");
  }
  return { nodes: restoredNodes, links: restoredLinks };
}

async function loadProject(event) {
  const input = event.target;
  const file = input.files?.[0];
  if (!file) return;

  try {
    const parsed = JSON.parse(await file.text());
    const restored = validateProject(parsed);
    nodes = restored.nodes;
    links = restored.links;
    pendingConnection = null;
    currentConfiguringNodeIndex = null;
    renderCanvas();
    const output = document.getElementById("consoleBoxes");
    if (output) output.innerHTML = `<div style="color:var(--muted); padding:25px;" id="t_console_placeholder">${t("console_placeholder")}</div>`;
  } catch (error) {
    alert(`Nie udało się wczytać projektu: ${error.message}`);
  } finally {
    input.value = "";
  }
}

function deriveDefaultPoolRange(subnetCidr, gatewayCidr = "") {
  const range = parseIpv4CidrRange(subnetCidr);
  if (!range) return "";
  const firstHost = range.network + 1;
  const lastHost = range.broadcast - 1;
  const gateway = parseIpv4CidrRange(gatewayCidr)?.address;
  let start = Math.max(range.network + 100, firstHost);
  let end = Math.min(range.network + 200, lastHost);

  if (start > end) {
    start = firstHost;
    end = lastHost;
  }
  if (gateway !== undefined && gateway >= start && gateway <= end) {
    if (gateway - start < end - gateway) start = gateway + 1;
    else end = gateway - 1;
  }
  if (start > end) return "";
  return `${numberToIpv4(start)}-${numberToIpv4(end)}`;
}

function numberToIpv4(value) {
  const address = value >>> 0;
  return [
    (address >>> 24) & 255,
    (address >>> 16) & 255,
    (address >>> 8) & 255,
    address & 255
  ].join(".");
}

function parseIpv4CidrRange(cidr) {
  const match = /^(\d{1,3}(?:\.\d{1,3}){3})\/(\d{1,2})$/.exec(cidr);
  if (!match) return null;
  const octets = match[1].split(".").map(Number);
  const prefix = Number(match[2]);
  if (octets.some(octet => octet > 255) || prefix < 1 || prefix > 30) return null;

  const address = octets.reduce((value, octet) => (value * 256) + octet, 0) >>> 0;
  const mask = (0xffffffff << (32 - prefix)) >>> 0;
  const network = (address & mask) >>> 0;
  const broadcast = (network | (~mask >>> 0)) >>> 0;
  return { address, network, broadcast, prefix };
}

function parseIpv4Cidr(cidr) {
  const range = parseIpv4CidrRange(cidr);
  if (!range || range.address === range.network || range.address === range.broadcast) return null;
  return {
    ...range,
    cidr: `${numberToIpv4(range.network)}/${range.prefix}`
  };
}

function ipv4CidrToNetwork(cidr) {
  return parseIpv4Cidr(cidr)?.cidr || null;
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, character => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#39;"
  })[character]);
}

function getBand5String(device, driver) {
  if (driver === "wifi") return device.wifi === "WiFi 6" ? "5ghz-ax" : "5ghz-ac";
  return "5ghz-a/n/ac";
}

function getBand24String(device, driver) {
  if (driver === "wifi") return device.wifi === "WiFi 6" ? "2ghz-ax" : "2ghz-n";
  return "2ghz-b/g/n";
}

function cyclePortVlan(nodeIdx, portIdx) {
  const node = nodes[nodeIdx];
  const port = node.ports[portIdx];
  const vlanIds = node.vlans.map(v => v.id);
  const currentIdx = vlanIds.indexOf(port.pvid);
  port.pvid = vlanIds[(currentIdx + 1) % vlanIds.length];
  renderCanvas();
}

function generateAllScripts() {
  const container = document.getElementById("consoleBoxes");
  if(!container) return;
  container.innerHTML = "";

  const routerNodes = nodes.filter(n => !n.isGlobe);
  if (routerNodes.length === 0) {
    container.innerHTML = `<div style="color:var(--muted); padding:20px;" id="t_console_placeholder">${t("console_placeholder")}</div>`;
    return;
  }

  routerNodes.forEach((node) => {
    const nodeLinks = links.filter(l => l.srcNodeId === node.id || l.dstNodeId === node.id);
    const wanLink = nodeLinks.find(l => l.isWan);
    const localTrunkLinks = nodeLinks.filter(link => !link.isWan);
    const trunkPorts = localTrunkLinks.map(link =>
      link.srcNodeId === node.id ? link.srcPort : link.dstPort
    );
    const bondingGroups = new Map();
    localTrunkLinks.filter(link => link.isBonding).forEach(link => {
      const peerId = link.srcNodeId === node.id ? link.dstNodeId : link.srcNodeId;
      if (!bondingGroups.has(peerId)) bondingGroups.set(peerId, []);
      bondingGroups.get(peerId).push(link);
    });
    const bondMemberPorts = new Set([...bondingGroups.values()].flatMap(group =>
      group.map(link => link.srcNodeId === node.id ? link.srcPort : link.dstPort)
    ));
    const bondInterfaces = [...bondingGroups.entries()].map(([peerId, group]) => {
      const peerIndex = nodes.findIndex(item => item.id === peerId);
      const localIndex = nodes.findIndex(item => item.id === node.id);
      const lowIndex = Math.min(localIndex, peerIndex) + 1;
      const highIndex = Math.max(localIndex, peerIndex) + 1;
      return {
        name: `bond_${lowIndex}_${highIndex}`,
        slaves: group.map(link => link.srcNodeId === node.id ? link.srcPort : link.dstPort)
      };
    });
    const regularTrunkPorts = trunkPorts.filter(port => !bondMemberPorts.has(port));
    const bridgeTrunkInterfaces = [
      ...regularTrunkPorts,
      ...bondInterfaces.map(bond => bond.name)
    ];
    
    let wanPort = null;
    let ispType = "dhcp";
    if (wanLink) {
      wanPort = (wanLink.srcNodeId === node.id) ? wanLink.srcPort : wanLink.dstPort;
      ispType = wanLink.ispType;
    }

    const accessPorts = node.ports.filter(p => !trunkPorts.includes(p.name) && p.name !== wanPort);
    const feats = node.features;
    const net = node.netMgmt;

    let dnsServersList = [net.priV4, net.secV4].filter(Boolean);
    if (net.priV6) dnsServersList.push(net.priV6);
    if (net.secV6) dnsServersList.push(net.secV6);
    const dnsFormatted = dnsServersList.join(",");

    let c = `# =====================================================================\n`;
    c += `# MIKROTIK ROUTEROS v7 MASTER CONFIGURATION SCRIPT\n`;
    c += `# Router: ${node.identity} (${node.device.name})\n`;
    c += `# CPU: ${node.device.cpu} | Arch: ${node.device.arch.toUpperCase()}\n`;
    c += `# Language: ${currentLang.toUpperCase()} | Full Enterprise Deployment\n`;
    c += `# =====================================================================\n\n`;

    c += `/system identity set name="${node.identity}"\n\n`;

    c += `# --- 1. INTERFACE LISTS ---\n`;
    c += `/interface list add name=WAN comment="Public Internet Access"\n`;
    c += `/interface list add name=LAN comment="Internal Subnets"\n\n`;

    c += `# --- 2. SINGLE BRIDGE & PORTS ---\n`;
    c += `/interface bridge add name=bridge1 vlan-filtering=no protocol-mode=rstp\n`;
    c += `/interface list member add interface=bridge1 list=LAN\n\n`;

    if (bondInterfaces.length) {
      c += `/interface bonding\n`;
      bondInterfaces.forEach(bond => {
        c += `add name=${bond.name} mode=802.3ad slaves=${bond.slaves.join(",")} transmit-hash-policy=layer-2-and-3 comment="LACP link aggregation"\n`;
      });
      c += `\n`;
    }

    c += `/interface bridge port\n`;
    bridgeTrunkInterfaces.forEach(p => {
      c += `add bridge=bridge1 interface=${p} frame-types=admit-only-vlan-tagged ingress-filtering=yes hw=yes comment="TRUNK L2"\n`;
    });
    accessPorts.forEach(p => {
      const vlanDef = node.vlans.find(v => v.id === p.pvid) || node.vlans[0];
      c += `add bridge=bridge1 interface=${p.name} pvid=${vlanDef.id} frame-types=admit-only-untagged-and-priority-tagged ingress-filtering=yes hw=yes comment="Access ${vlanDef.name} VLAN ${vlanDef.id}"\n`;
    });

    let actualWanInterface = wanPort || "ether1";
    if (wanPort) {
      c += `\n# --- 3. WAN INTERNET ACCESS (${ispType.toUpperCase()}) ---\n`;
      if (ispType === "orange") {
        c += `/interface vlan add interface=${wanPort} name=vlan35-orange vlan-id=35 comment="Orange FTTH VLAN"\n`;
        c += `/interface pppoe-client add interface=vlan35-orange name=pppoe-orange user="login@neostrada.pl" password="twoje_haslo" add-default-route=yes use-peer-dns=no disabled=no\n`;
        c += `/interface list member add interface=pppoe-orange list=WAN\n`;
        actualWanInterface = "pppoe-orange";
        c += `/ip firewall mangle add chain=forward protocol=tcp tcp-flags=syn action=change-mss new-mss=clamp-to-pmtu comment="Clamp TCP MSS for PPPoE"\n`;
      } else if (ispType === "tmobile") {
        c += `/interface vlan add interface=${wanPort} name=vlan35-tmobile vlan-id=35 comment="T-Mobile FTTH VLAN"\n`;
        c += `/ip dhcp-client add interface=vlan35-tmobile add-default-route=yes use-peer-dns=no disabled=no\n`;
        c += `/interface list member add interface=vlan35-tmobile list=WAN\n`;
        actualWanInterface = "vlan35-tmobile";
      } else if (ispType === "dhcp") {
        c += `/ip dhcp-client add interface=${wanPort} add-default-route=yes use-peer-dns=no disabled=no\n`;
        c += `/interface list member add interface=${wanPort} list=WAN\n`;
      } else if (ispType === "static") {
        c += `/ip address add address=198.51.100.2/24 interface=${wanPort} comment="Static Public IP"\n`;
        c += `/ip route add gateway=198.51.100.1 comment="Default Gateway"\n`;
        c += `/interface list member add interface=${wanPort} list=WAN\n`;
      }
    }

    c += `\n# --- 4. VIRTUAL VLAN INTERFACES (CPU L3) ---\n`;
    node.vlans.forEach(v => {
      c += `/interface vlan add interface=bridge1 name=vlan${v.id}_${v.name} vlan-id=${v.id}\n`;
      c += `/ip address add address=${v.ip} interface=vlan${v.id}_${v.name}\n`;
      c += `/interface list member add interface=vlan${v.id}_${v.name} list=LAN\n`;
    });

    c += `\n# --- 5. BRIDGE VLAN TABLE ---\n/interface bridge vlan\n`;
    const taggedList = ["bridge1", ...bridgeTrunkInterfaces].join(",");
    node.vlans.forEach(v => {
      const untaggedPorts = accessPorts.filter(p => p.pvid === v.id).map(p => p.name);
      const untaggedClause = untaggedPorts.length ? ` untagged=${untaggedPorts.join(",")}` : "";
      c += `add bridge=bridge1 tagged=${taggedList}${untaggedClause} vlan-ids=${v.id} comment="${v.name}"\n`;
    });

    c += `\n# --- 6. NETWORK MANAGEMENT: IP POOLS & DHCP SERVER ---\n`;
    node.vlans.forEach((v, vIdx) => {
      const poolName = `pool_vlan${v.id}`;
      const netMask = v.subnet;
      const gatewayIp = v.ip.split('/')[0];
      const poolRange = vIdx === 0 ? net.poolRange : deriveDefaultPoolRange(v.subnet, v.ip);

      c += `/ip pool add name=${poolName} ranges=${poolRange} comment="Pool for ${v.name}"\n`;
      c += `/ip dhcp-server add address-pool=${poolName} interface=vlan${v.id}_${v.name} name=dhcp_vlan${v.id} lease-time=${net.leaseTime} authoritative=${net.authoritative} disabled=no\n`;
      c += `/ip dhcp-server network add address=${netMask} gateway=${gatewayIp} dns-server=${gatewayIp},${net.priV4} domain="${net.domain}" comment="Network ${v.name}"\n`;
    });

    c += `\n# --- 7. NETWORK MANAGEMENT: DNS RESOLVER & DOH ---\n`;
    c += `/ip dns set allow-remote-requests=yes cache-max-ttl=1d max-concurrent-queries=1000 servers="${dnsFormatted}"\n`;
    if (net.dohMode === "cloudflare") {
      c += `/ip dns set use-doh-server="https://1.1.1.1/dns-query" verify-doh-cert=yes\n`;
    } else if (net.dohMode === "quad9") {
      c += `/ip dns set use-doh-server="https://dns.quad9.net/dns-query" verify-doh-cert=yes\n`;
    } else if (net.dohMode === "google") {
      c += `/ip dns set use-doh-server="https://dns.google/dns-query" verify-doh-cert=yes\n`;
    }

    c += `\n# --- 8. CLOUD DDNS, PROXY, SOCKS & ARP ---\n`;
    if (net.cloudDdns) c += `/ip cloud set ddns-enabled=yes update-time=yes\n`;
    if (net.proxyEnabled) c += `/ip proxy set enabled=yes port=8080 max-cache-size=none\n`;
    if (net.socksEnabled) c += `/ip socks set enabled=yes port=1080 version=5\n`;
    const arpBase = node.vlans[0].subnet.split('.').slice(0, 3).join('.');
    c += `/ip arp add address=${arpBase}.254 mac-address=00:00:00:00:00:00 interface=bridge1 comment="Static ARP Template"\n`;

    if (node.wifi && node.wifi.enabled) {
      const w = node.wifi;
      c += `\n# --- 9. WIRELESS / WIFI ARCHITECTURE (${w.mode.toUpperCase()}) ---\n`;
      const isolateClause = w.clientIsolation ? ' isolate=yes' : '';
      const hideClause = w.hideSsid ? 'yes' : 'no';

      if (w.driver === "wifi") {
        if (w.mode === "ap") {
          if (w.band5.enabled) {
            const b = w.band5;
            const ftParams = b.ft === "yes" ? 'ft=yes ft-over-ds=yes' : 'ft=no';
            c += `/interface wifi security add name=sec5_${node.identity} authentication-types=${w.security} passphrase="${w.pass}" ${ftParams} group-key-update=1h wps=disable comment="5GHz Security"\n`;
            c += `/interface wifi channel add name=chan5_${node.identity} band=${getBand5String(node.device, w.driver)} width=${b.width} frequency=${b.frequencies} skip-dfs-channels=all\n`;
            c += `/interface wifi configuration add name=cfg5_${node.identity} ssid="${b.ssid}" country="${w.country}" security=sec5_${node.identity} channel=chan5_${node.identity} datapath.vlan-id=${w.vlan} datapath.bridge=bridge1 hide-ssid=${hideClause}\n`;
            c += `/interface wifi set [ find default-name=wifi1 ] configuration=cfg5_${node.identity} mode=ap disabled=no\n`;
            c += `/interface bridge port add bridge=bridge1 interface=wifi1 pvid=${w.vlan} ingress-filtering=yes${isolateClause}\n\n`;
          }
          if (w.band24.enabled) {
            const b = w.band24;
            const ftParams = b.ft === "yes" ? 'ft=yes ft-over-ds=yes' : 'ft=no';
            c += `/interface wifi security add name=sec24_${node.identity} authentication-types=${w.security} passphrase="${w.pass}" ${ftParams} group-key-update=1h wps=disable comment="2.4GHz Security"\n`;
            c += `/interface wifi channel add name=chan24_${node.identity} band=${getBand24String(node.device, w.driver)} width=${b.width} frequency=${b.frequencies} skip-dfs-channels=all\n`;
            c += `/interface wifi configuration add name=cfg24_${node.identity} ssid="${b.ssid}" country="${w.country}" security=sec24_${node.identity} channel=chan24_${node.identity} datapath.vlan-id=${w.vlan} datapath.bridge=bridge1 hide-ssid=${hideClause}\n`;
            c += `/interface wifi set [ find default-name=wifi2 ] configuration=cfg24_${node.identity} mode=ap disabled=no\n`;
            c += `/interface bridge port add bridge=bridge1 interface=wifi2 pvid=${w.vlan} ingress-filtering=yes${isolateClause}\n\n`;
          }
        } else {
          const primary = w.band5.enabled ? w.band5 : w.band24;
          c += `/interface wifi security add name=sec_${node.identity} authentication-types=${w.security} passphrase="${w.pass}" ft=no group-key-update=1h wps=disable\n`;
          if (w.mode === "station-bridge") {
            c += `/interface wifi set [ find default-name=wifi1 ] mode=station-bridge ssid="${primary.ssid}" security=sec_${node.identity} disabled=no\n`;
            c += `/interface bridge port add bridge=bridge1 interface=wifi1 comment="Transparent CPE Station Bridge"\n`;
          } else if (w.mode === "repeater") {
            c += `/interface wifi set [ find default-name=wifi1 ] mode=station ssid="${primary.ssid}" security=sec_${node.identity} disabled=no\n`;
            c += `/interface wifi add name="wifi-repeater" master-interface=wifi1 configuration.mode=ap configuration.ssid="${primary.ssid}_Ext" security=sec_${node.identity} disabled=no\n`;
            c += `/interface bridge port add bridge=bridge1 interface=wifi-repeater comment="Repeater Virtual AP"\n`;
          } else if (w.mode === "capsman") {
            c += `/interface wifi cap set enabled=yes discovery-interfaces=bridge1 caps-man-addresses=127.0.0.1\n`;
          }
        }
      } else {
        if (w.mode === "ap") {
          if (w.band5.enabled) {
            const b = w.band5;
            const freq5 = b.frequencies.split(',')[0].trim();
            c += `/interface wireless security-profiles add name=sec5_${node.identity} mode=dynamic-keys authentication-types=wpa2-psk unicast-ciphers=aes-ccm group-ciphers=aes-ccm wpa2-pre-shared-key="${w.pass}"\n`;
            c += `/interface wireless set [ find default-name=wlan2 ] ssid="${b.ssid}" band=${getBand5String(node.device, w.driver)} channel-width=${b.width} frequency=${freq5} scan-list=${b.frequencies} country=${w.country} security-profile=sec5_${node.identity} mode=ap-bridge hide-ssid=${hideClause} disabled=no\n`;
            c += `/interface bridge port add bridge=bridge1 interface=wlan2 pvid=${w.vlan} ingress-filtering=yes${isolateClause}\n\n`;
          }
          if (w.band24.enabled) {
            const b = w.band24;
            const freq24 = b.frequencies.split(',')[0].trim();
            c += `/interface wireless security-profiles add name=sec24_${node.identity} mode=dynamic-keys authentication-types=wpa2-psk unicast-ciphers=aes-ccm group-ciphers=aes-ccm wpa2-pre-shared-key="${w.pass}"\n`;
            c += `/interface wireless set [ find default-name=wlan1 ] ssid="${b.ssid}" band=${getBand24String(node.device, w.driver)} channel-width=${b.width} frequency=${freq24} scan-list=${b.frequencies} country=${w.country} security-profile=sec24_${node.identity} mode=ap-bridge hide-ssid=${hideClause} disabled=no\n`;
            c += `/interface bridge port add bridge=bridge1 interface=wlan1 pvid=${w.vlan} ingress-filtering=yes${isolateClause}\n\n`;
          }
        } else {
          const primary = w.band5.enabled ? w.band5 : w.band24;
          const primaryBandStr = w.band5.enabled ? getBand5String(node.device, w.driver) : getBand24String(node.device, w.driver);
          const wMode = (w.mode === "station-bridge") ? "station-bridge" : "ap-bridge";
          c += `/interface wireless security-profiles add name=sec_${node.identity} mode=dynamic-keys authentication-types=wpa2-psk unicast-ciphers=aes-ccm group-ciphers=aes-ccm wpa2-pre-shared-key="${w.pass}"\n`;
          c += `/interface wireless set [ find default-name=wlan1 ] ssid="${primary.ssid}" band=${primaryBandStr} country=${w.country} security-profile=sec_${node.identity} mode=${wMode} hide-ssid=${hideClause} disabled=no\n`;
          c += `/interface bridge port add bridge=bridge1 interface=wlan1 pvid=${w.vlan} ingress-filtering=yes${isolateClause}\n`;
        }
      }
    }

    if (node.vpn && node.vpn.enabled) {
      const v = node.vpn;
      const vid = node.identity.replace(/[^a-zA-Z0-9]/g, "_");
      const pool = cidrToPoolRange(v.subnet);
      const isServer = v.mode === "server";
      c += `\n# --- 10. VIRTUAL PRIVATE NETWORKS (${v.proto.toUpperCase()}) ---\n`;

      if (v.proto === "wireguard") {
        c += `/interface wireguard add name=wg_${vid} listen-port=${v.port} comment="WireGuard VPN"\n`;
        c += `# Klucz prywatny generuje sie automatycznie - odczytaj klucz publiczny przez: /interface wireguard print\n`;
        c += `/ip address add address=${v.subnet} interface=wg_${vid}\n`;
        c += `/interface list member add interface=wg_${vid} list=LAN\n`;
        if (isServer) {
          c += `/interface wireguard peers add interface=wg_${vid} public-key="${v.peerPublicKey || "WKLEJ_KLUCZ_PUBLICZNY_KLIENTA"}" allowed-address=${v.allowedAddress} comment="Client Peer"\n`;
        } else {
          c += `/interface wireguard peers add interface=wg_${vid} endpoint-address=${v.remoteHost || "vpn.twojadomena.pl"} endpoint-port=${v.port} public-key="${v.peerPublicKey || "WKLEJ_KLUCZ_PUBLICZNY_SERWERA"}" allowed-address=${v.allowedAddress} persistent-keepalive=25s\n`;
        }
      } else if (v.proto === "ipsec") {
        c += `/ip ipsec profile add name=ike2_prof_${vid} dh-group=ecp256,modp2048 enc-algorithm=aes-256,aes-128 hash-algorithm=sha256\n`;
        c += `/ip ipsec proposal add name=ike2_prop_${vid} enc-algorithms=aes-256-gcm,aes-128-gcm pfs-group=none\n`;
        c += `/ip ipsec policy group add name=ike2_grp_${vid}\n`;
        if (isServer) {
          c += `/ip pool add name=ike2_pool_${vid} ranges=${pool.poolStart}-${pool.poolEnd}\n`;
          c += `/ip ipsec mode-config add name=ike2_conf_${vid} address-pool=ike2_pool_${vid} address-prefix-length=32 system-dns=no\n`;
          c += `/ip ipsec policy add group=ike2_grp_${vid} proposal=ike2_prop_${vid} template=yes src-address=0.0.0.0/0 dst-address=${pool.networkCidr}\n`;
          c += `/ip ipsec peer add name=ike2_peer_${vid} exchange-mode=ike2 passive=yes profile=ike2_prof_${vid}\n`;
          c += `/ip ipsec identity add peer=ike2_peer_${vid} auth-method=pre-shared-key secret="${v.secret}" generate-policy=port-strict mode-config=ike2_conf_${vid} policy-template-group=ike2_grp_${vid}\n`;
        } else {
          c += `/ip ipsec mode-config add name=ike2_conf_${vid} responder=no\n`;
          c += `/ip ipsec policy add group=ike2_grp_${vid} proposal=ike2_prop_${vid} template=yes\n`;
          c += `/ip ipsec peer add name=ike2_peer_${vid} address=${v.remoteHost || "203.0.113.5"} exchange-mode=ike2 profile=ike2_prof_${vid}\n`;
          c += `/ip ipsec identity add peer=ike2_peer_${vid} auth-method=pre-shared-key secret="${v.secret}" generate-policy=port-strict mode-config=ike2_conf_${vid} policy-template-group=ike2_grp_${vid}\n`;
        }
      } else if (v.proto === "ovpn") {
        if (isServer) {
          c += `/certificate add name=ovpn_ca_${vid} common-name=ovpn_ca_${vid} key-usage=key-cert-sign,crl-sign\n`;
          c += `/certificate sign ovpn_ca_${vid}\n`;
          c += `/certificate add name=ovpn_srv_${vid} common-name=ovpn_srv_${vid}\n`;
          c += `/certificate sign ovpn_srv_${vid} ca=ovpn_ca_${vid}\n`;
          c += `/ip pool add name=ovpn_pool_${vid} ranges=${pool.poolStart}-${pool.poolEnd}\n`;
          c += `/ppp profile add name=ovpn_prof_${vid} local-address=${pool.gateway} remote-address=ovpn_pool_${vid}\n`;
          c += `/interface ovpn-server server set enabled=yes port=${v.port} certificate=ovpn_srv_${vid} auth=sha256 cipher=aes256-gcm default-profile=ovpn_prof_${vid} require-client-certificate=no\n`;
          c += `/ppp secret add name=${v.username} password="${v.secret}" profile=ovpn_prof_${vid} service=ovpn\n`;
        } else {
          c += `/interface ovpn-client add name=ovpn_${vid} connect-to=${v.remoteHost || "vpn.twojadomena.pl"} port=${v.port} user=${v.username} password="${v.secret}" cipher=aes256-gcm disabled=no\n`;
        }
      } else if (v.proto === "l2tp") {
        if (isServer) {
          c += `/ip pool add name=l2tp_pool_${vid} ranges=${pool.poolStart}-${pool.poolEnd}\n`;
          c += `/ppp profile add name=l2tp_prof_${vid} local-address=${pool.gateway} remote-address=l2tp_pool_${vid}\n`;
          c += `/interface l2tp-server server set enabled=yes default-profile=l2tp_prof_${vid} use-ipsec=required ipsec-secret="${v.secret}"\n`;
          c += `/ppp secret add name=${v.username} password="${v.secret}" profile=l2tp_prof_${vid} service=l2tp\n`;
        } else {
          c += `/interface l2tp-client add name=l2tp_${vid} connect-to=${v.remoteHost || "vpn.twojadomena.pl"} user=${v.username} password="${v.secret}" use-ipsec=yes ipsec-secret="${v.secret}" disabled=no\n`;
        }
      } else if (v.proto === "sstp") {
        if (isServer) {
          c += `/certificate add name=sstp_ca_${vid} common-name=sstp_ca_${vid} key-usage=key-cert-sign,crl-sign\n`;
          c += `/certificate sign sstp_ca_${vid}\n`;
          c += `/certificate add name=sstp_srv_${vid} common-name=sstp_srv_${vid}\n`;
          c += `/certificate sign sstp_srv_${vid} ca=sstp_ca_${vid}\n`;
          c += `/ip pool add name=sstp_pool_${vid} ranges=${pool.poolStart}-${pool.poolEnd}\n`;
          c += `/ppp profile add name=sstp_prof_${vid} local-address=${pool.gateway} remote-address=sstp_pool_${vid}\n`;
          c += `/interface sstp-server server set enabled=yes port=${v.port} certificate=sstp_srv_${vid} default-profile=sstp_prof_${vid} authentication=mschap2 pfs=yes\n`;
          c += `/ppp secret add name=${v.username} password="${v.secret}" profile=sstp_prof_${vid} service=sstp\n`;
        } else {
          c += `/interface sstp-client add name=sstp_${vid} connect-to=${v.remoteHost || "vpn.twojadomena.pl"} port=${v.port} user=${v.username} password="${v.secret}" verify-server-certificate=no disabled=no\n`;
        }
      }
    }

    if (feats.rawProtection) {
      c += `\n# --- 11. RAW FIREWALL (Anti-DDoS / Scan Defense) ---\n`;
      c += `/ip firewall raw\n`;
      c += `add chain=prerouting action=drop tcp-flags=syn,fin protocol=tcp comment="Drop TCP SYN+FIN Scan"\n`;
      c += `add chain=prerouting action=drop tcp-flags=syn,rst protocol=tcp comment="Drop TCP SYN+RST Scan"\n`;
      c += `add chain=prerouting action=drop tcp-flags=fin,rst protocol=tcp comment="Drop TCP FIN+RST Scan"\n`;
      c += `add chain=prerouting action=accept connection-state=not-track comment="Accept Untracked"\n`;
    }

    if (feats.firewall) {
      c += `\n# --- 12. STATEFUL FIREWALL FILTER & NAT (Official MikroTik Filter Standard) ---\n`;
      c += `/ip firewall filter\n`;
      c += `# Input Chain (Router Protection)\n`;
      c += `add chain=input action=accept connection-state=established,related,untracked comment="Accept established,related,untracked"\n`;
      c += `add chain=input action=drop connection-state=invalid comment="Drop invalid packets"\n`;
      c += `add chain=input action=accept protocol=icmp limit=5,10:packet comment="Accept ICMP rate-limited"\n`;
      c += `add chain=input action=drop protocol=icmp comment="Drop excess ICMP"\n`;

      if (node.vpn && node.vpn.enabled) {
        const proto = node.vpn.proto;
        if (proto === "wireguard") c += `add chain=input action=accept protocol=udp dst-port=${node.vpn.port} comment="Allow WireGuard VPN"\n`;
        if (proto === "ipsec") c += `add chain=input action=accept protocol=udp dst-port=500,4500 comment="Allow IPsec IKE2"\nadd chain=input action=accept protocol=ipsec-esp comment="Allow IPsec ESP"\n`;
        if (proto === "ovpn") c += `add chain=input action=accept protocol=tcp dst-port=${node.vpn.port} comment="Allow OpenVPN"\n`;
        if (proto === "l2tp") c += `add chain=input action=accept protocol=udp dst-port=1701,500,4500 comment="Allow L2TP/IPsec"\n`;
        if (proto === "sstp") c += `add chain=input action=accept protocol=tcp dst-port=${node.vpn.port} comment="Allow SSTP"\n`;
      }

      c += `add chain=input action=accept in-interface-list=LAN comment="Allow trusted LAN to Router"\n`;
      c += `add chain=input action=drop comment="Drop all other input traffic"\n\n`;

      c += `# Forward Chain (Traffic between clients & WAN)\n`;
      if (feats.fasttrack) {
        c += `add chain=forward action=fasttrack-connection connection-state=established,related hw-offload=yes comment="FastTrack established,related"\n`;
      }
      c += `add chain=forward action=accept connection-state=established,related,untracked comment="Accept established,related,untracked"\n`;
      c += `add chain=forward action=drop connection-state=invalid comment="Drop invalid packets"\n`;

      if (feats.isolateVlans && node.vlans.length > 1) {
        c += `\n# Inter-VLAN Traffic Isolation\n`;
        for (let i = 0; i < node.vlans.length; i++) {
          for (let j = i + 1; j < node.vlans.length; j++) {
            const v1 = node.vlans[i];
            const v2 = node.vlans[j];
            c += `add chain=forward action=drop in-interface=vlan${v1.id}_${v1.name} out-interface=vlan${v2.id}_${v2.name} comment="Isolate ${v1.name} from ${v2.name}"\n`;
            c += `add chain=forward action=drop in-interface=vlan${v2.id}_${v2.name} out-interface=vlan${v1.id}_${v1.name} comment="Isolate ${v2.name} from ${v1.name}"\n`;
          }
        }
      }

      c += `add chain=forward action=accept in-interface-list=LAN out-interface-list=WAN comment="Accept LAN to WAN traffic"\n`;
      c += `add chain=forward action=accept connection-nat-state=dstnat in-interface-list=WAN comment="Accept Port Forwarding / DST-NAT"\n`;
      c += `add chain=forward action=drop connection-nat-state=!dstnat in-interface-list=WAN comment="Drop all incoming from WAN that is not DSTNATed"\n`;
      c += `add chain=forward action=drop comment="Drop all other forward traffic"\n`;

      c += `\n# --- NAT MASQUERADE & TRANSPARENT DNS ---\n/ip firewall nat\n`;
      c += `add chain=srcnat out-interface-list=WAN action=masquerade comment="Default Masquerade for WAN Interface List"\n`;
      if (net.dnsRedirect === "yes") {
        c += `add chain=dstnat protocol=udp dst-port=53 in-interface-list=LAN action=redirect comment="Force Router DNS (Anti-Bypass UDP)"\n`;
        c += `add chain=dstnat protocol=tcp dst-port=53 in-interface-list=LAN action=redirect comment="Force Router DNS (Anti-Bypass TCP)"\n`;
      }
    }

    if (node.consoles && (node.consoles.xbox.enabled || node.consoles.ps5.enabled)) {
      c += `\n# --- 12b. GAME CONSOLE PORT FORWARDING ---\n/ip firewall nat\n`;
      if (node.consoles.xbox.enabled) {
        const ip = node.consoles.xbox.ip;
        const xboxPorts = [
          ["udp", "88"], ["udp", "3074"], ["tcp", "3074"], ["udp", "53"], ["tcp", "53"],
          ["tcp", "80"], ["udp", "500"], ["udp", "3544"], ["udp", "4500"]
        ];
        xboxPorts.forEach(([proto, port]) => {
          c += `add action=dst-nat chain=dstnat comment=xboxConsole_${node.identity} protocol=${proto} dst-port=${port} in-interface=${actualWanInterface} to-addresses=${ip} to-ports=${port}\n`;
        });
      }
      if (node.consoles.ps5.enabled) {
        const ip = node.consoles.ps5.ip;
        const ps5Ports = [
          ["tcp", "1935"], ["tcp", "3478-3480"], ["udp", "3478-3479"], ["tcp", "3074"], ["udp", "3074"]
        ];
        ps5Ports.forEach(([proto, port]) => {
          c += `add action=dst-nat chain=dstnat comment=ps5Console_${node.identity} protocol=${proto} dst-port=${port} in-interface=${actualWanInterface} to-addresses=${ip} to-ports=${port}\n`;
        });
      }
    }

    if (feats.securingServices) {
      c += `\n# --- 13. SECURING YOUR ROUTER (Hardening) ---\n`;
      c += `/ip service set telnet disabled=yes\n`;
      c += `/ip service set ftp disabled=yes\n`;
      c += `/ip service set www disabled=yes\n`;
      c += `/ip service set api disabled=yes\n`;
      c += `/ip service set api-ssl disabled=yes\n`;
      c += `/ip service set winbox address=192.168.0.0/16,10.0.0.0/8 comment="Restrict Winbox to LAN Subnets"\n`;
      c += `/ip service set ssh address=192.168.0.0/16,10.0.0.0/8\n`;
      c += `/tool mac-server set allowed-interface-list=none\n`;
      c += `/tool mac-server mac-winbox set allowed-interface-list=LAN\n`;
      c += `/ip neighbor discovery-settings set discover-interface-list=LAN\n`;
    }

    if (feats.l3hw && node.device.l3hw) {
      c += `\n# --- 14. HARDWARE L3 ROUTING OFFLOAD (Marvell Switch Chip) ---\n`;
      c += `/ip settings set rp-filter=loose\n`;
    }

    c += `\n# --- 15. SAFE ENABLING OF BRIDGE VLAN FILTERING ---\n`;
    c += `/interface bridge set bridge1 vlan-filtering=yes\n`;

    const box = document.createElement("div");
    box.className = "script-box";
    box.innerHTML = `
      <div class="script-header">
        <span>${node.identity} (${node.device.name})</span>
        <div>
          <button class="btn btn-secondary btn-sm" onclick="downloadRSC('${node.identity}', this)">${t("download_rsc")}</button>
          <button class="btn btn-sm" onclick="copyScript(this)">${t("copy_script")}</button>
        </div>
      </div>
      <pre>${c}</pre>
    `;
    container.appendChild(box);
  });
}

function copyScript(btn) {
  const text = btn.closest(".script-box").querySelector("pre").innerText;
  navigator.clipboard.writeText(text).then(() => alert(t("copied")));
}

function downloadRSC(name, btn) {
  const text = btn.closest(".script-box").querySelector("pre").innerText;
  const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = `${name}.rsc`;
  a.click();
}

function applyStaticTranslations() {
  const lang = i18n[currentLang] || i18n.pl;
  const langSelect = document.getElementById("langSelect");
  if (langSelect) langSelect.value = currentLang;

  document.querySelectorAll("[id^='t_']").forEach((el) => {
    const key = el.id.replace(/^t_/, "");
    if (Object.prototype.hasOwnProperty.call(lang, key)) {
      el.innerHTML = lang[key];
    }
  });
  document.querySelectorAll("[data-i18n-title]").forEach((el) => {
    el.title = t(el.dataset.i18nTitle);
  });

  const status = document.getElementById("wireStatus");
  if (status && !status.dataset.userText) {
    status.innerHTML = t("wire_status_default");
  }
}

function changeLanguage(lang) {
  currentLang = i18n[lang] ? lang : "pl";
  applyStaticTranslations();
  renderCanvas();
  renderCatalog(fullDeviceCatalog);
  if (document.getElementById("vlan-modal")?.style.display === "flex") {
    const title = document.getElementById("vlanModalTitle");
    const node = currentConfiguringNodeIndex === null ? null : nodes[currentConfiguringNodeIndex];
    if (title && node) title.innerText = `${t("vlan_title")} - ${node.identity}`;
    renderVlanRows();
  }
  if (document.getElementById("consoleBoxes")) {
    const oldText = document.getElementById("consoleBoxes").innerHTML;
    if (!oldText || oldText.includes("console_placeholder") || oldText.includes("WYGENEROWANE SKRYPTY")) {
      generateAllScripts();
    }
  }
}

function initOutputResizer() {
  const resizer = document.getElementById("output-resizer");
  const output = document.getElementById("output");
  if (!resizer || !output) return;

  let dragging = false;
  let startY = 0;
  let startHeight = 0;

  resizer.addEventListener("mousedown", (e) => {
    dragging = true;
    startY = e.clientY;
    startHeight = output.getBoundingClientRect().height;
    resizer.classList.add("dragging");
    document.body.style.userSelect = "none";
    e.preventDefault();
  });

  window.addEventListener("mousemove", (e) => {
    if (!dragging) return;
    const delta = startY - e.clientY;
    const maxHeight = window.innerHeight - 150;
    const minHeight = 220;
    const nextHeight = Math.min(Math.max(startHeight + delta, minHeight), maxHeight);
    output.style.height = `${nextHeight}px`;
  });

  window.addEventListener("mouseup", () => {
    dragging = false;
    resizer.classList.remove("dragging");
    document.body.style.userSelect = "";
  });
}

function applyCanvasTransform() {
  const canvas = document.getElementById("canvas");
  if (!canvas) return;
  canvas.style.transformOrigin = "0 0";
  canvas.style.transform = `translate(${canvasPanX}px, ${canvasPanY}px) scale(${canvasZoom})`;
}

function initPanZoom() {
  const container = document.getElementById("canvas-container");
  if (!container) return;

  container.addEventListener("wheel", (event) => {
    event.preventDefault();
    const rect = container.getBoundingClientRect();
    const pointerX = event.clientX - rect.left + container.scrollLeft;
    const pointerY = event.clientY - rect.top + container.scrollTop;
    const worldX = (pointerX - canvasPanX) / canvasZoom;
    const worldY = (pointerY - canvasPanY) / canvasZoom;
    const nextZoom = Math.min(2.5, Math.max(0.3, canvasZoom * (event.deltaY > 0 ? 0.9 : 1.1)));

    canvasPanX = pointerX - worldX * nextZoom;
    canvasPanY = pointerY - worldY * nextZoom;
    canvasZoom = nextZoom;
    applyCanvasTransform();
  }, { passive: false });

  let panStart = null;
  container.addEventListener("mousedown", (event) => {
    if (event.button !== 1 && !(event.button === 0 && event.altKey)) return;
    panStart = {
      x: event.clientX,
      y: event.clientY,
      panX: canvasPanX,
      panY: canvasPanY
    };
    container.style.cursor = "grabbing";
    event.preventDefault();
  });

  window.addEventListener("mousemove", (event) => {
    if (!panStart) return;
    canvasPanX = panStart.panX + event.clientX - panStart.x;
    canvasPanY = panStart.panY + event.clientY - panStart.y;
    applyCanvasTransform();
  });

  window.addEventListener("mouseup", () => {
    if (!panStart) return;
    panStart = null;
    container.style.cursor = "";
  });
}

const globalHandlers = {
  addInternetGlobe,
  filterDevices,
  clearCanvas,
  saveProject,
  loadProject,
  generateAllScripts,
  closeModal,
  saveNetConfig,
  addWifiChannel,
  saveWifiConfig,
  saveVpnConfig,
  saveConsoleConfig,
  openWifiModal,
  openVpnModal,
  openConsoleModal,
  openNetModal,
  updateGlobeIsp,
  toggleFeature,
  handlePortClick,
  checkPortCompatibility,
  highlightLink,
  removeLink,
  removeNode,
  cyclePortVlan,
  openVlanModal,
  addVlanRow,
  removeVlanRow,
  saveVlanConfig,
  updateEditingVlan,
  downloadRSC,
  copyScript,
  changeLanguage,
  applyStaticTranslations,
  applyDnsPreset,
  detectDnsPresetKey
};

Object.assign(window, globalHandlers);

window.addEventListener("DOMContentLoaded", () => {
  applyStaticTranslations();
  renderCatalog(fullDeviceCatalog);
  renderCanvas();
  initOutputResizer();
  initPanZoom();
});
