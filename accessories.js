const phoneCases = [
    {
        id: 1,
        name: "phoneCase1",
        customer: "customer1",
        descr: "kaiinakakkmnak",
        price: 30.99,
        inStock: 1,
        imgSrc: "./images/Accessories/Phone-Cases/1-IphoneCase-Silicone-Case-Iphone 15.jpg"
    },
    {
        id: 2,
        name: "phoneCase2",
        customer: "customer2",
        descr: "kaiinakakkmnak-jjsjs",
        price: 22.67,
        inStock: 5,
        imgSrc: "./images/Accessories/Phone-Cases/2-SamsungCase-Silicone-Case -- SamsungGalaxy A15 5G CAse.jpg"
    },
    {
        id: 3,
        name: "phoneCase3",
        customer: "customer3",
        descr: "kaiinakakkmnak-kslirms",
        price: 40.99,
        inStock: 10,
        imgSrc: "./images/Accessories/Phone-Cases/3-GooglePixelCase--GooglePixel3.jpg"
    },
    {
        id: 4,
        name: "phoneCase4",
        customer: "customer4",
        descr: "kaiinakakkmnak-sjnuens",
        price: 10.45,
        inStock: 9,
        imgSrc: "./images/Accessories/Phone-Cases/3-GooglePixelCase.jpg"
    },
    {
        id: 5,
        name: "phoneCase5",
        customer: "customer5",
        descr: "kaiinakakkmnak-hsneunahja",
        price: 5.66,
        inStock: 0,
        imgSrc: "./images/Accessories/Phone-Cases/4-RedmiCase -- Redmi-A5.jpg"
    },
]

const variousAccessories = [
    {
        id: 1,
        name: "Mouse",
        customer: "customer1",
        descr: "Wireless Mouse for Computers and Laptops, chargeable with ergonomic design and adjustable DPI settings.",
        price: 50000,
        inStock: 15,
        imgSrc: "./images/Accessories/various-accessories/1-Wireless-Mouse.jpg"
    },

    {
        id: 2,
        name: "Hard Drive 1TB",
        customer: "customer2",
        descr: "Hard Drive for Data Storage and Backupof 1 TB, SATA SSD.",
        price: 700000,
        inStock: 10,
        imgSrc: "./images/Accessories/various-accessories/2-HardDrive-1TB-SATA-SSD.webp"
    },

    {
        id: 3,
        name: "Hard Drive 512GB",
        customer: "customer3",
        descr: "Hard Drive for Data Storage and Backup of 512 GB, SATA SSD.",
        price: 400000,
        inStock: 5,
        imgSrc: "./images/Accessories/various-accessories/3-HardDrive-512GB-SATA-SSD.jpg"
    },

    {
        id: 4,
        name: "Hard Drive Cover",
        customer: "customer4",
        descr: "Hard Drive Cover for Data Storage and Backup, made of durable materials to protect your hard drive from dust, scratches, and impacts.",
        price: 100000,
        inStock: 20,
        imgSrc: "./images/Accessories/various-accessories/4-HardDrive-Cover-SSD-M2.avif"
    },

    {
        id: 5,
        name: "Hard Driver 256GB",
        customer: "customer5",
        descr: "Hard Drive for Data Storage and Backup of 256 GB, SATA SSD.",
        price: 230000,
        inStock: 15,
        imgSrc: "./images/Accessories/various-accessories/5-HardDriver-SATA-SSD-256GB.avif"
    },

    {
        id: 6,
        name: "Laptop Stand V6.1",
        customer: "customer6",
        descr: "Laptop Stand V6.1, made of durable materials to protect your laptop from overheating and improve your posture while working.",
        price: 150000,
        inStock: 25,
        imgSrc: "./images/Accessories/various-accessories/6-LaptopStandV6.1.webp"
    },

    {
        id: 7,
        name: "Mouse Cabled",
        customer: "customer7",
        descr: "Mouse Cabled, made of durable materials to protect your mouse from wear and tear.",
        price: 35000,
        inStock: 50,
        imgSrc: "./images/Accessories/various-accessories/7-Mouse-Cabled.jpg"
    },

    {
        id: 8,
        name: "Multi Card Reader",
        customer: "customer8",
        descr: "Multi Card Reader to use with different types of memory cards.",
        price: 45000,
        inStock: 25,
        imgSrc: "./images/Accessories/various-accessories/8-Multi-Card-Reader.jpg"
    },

    {
        id: 9,
        name: "Multiple USB Port",
        customer: "customer9",
        descr: "Multiple USB Port to connect multiple USB devices to your computer.",
        price: 60000,
        inStock: 20,
        imgSrc: "./images/Accessories/various-accessories/9-Multiple-USB-Port.jpg"
    },

    {
        id: 10,
        name: "Multiple USB Port",
        customer: "customer10",
        descr: "Multiple USB Port to connect multiple USB devices to your computer.",
        price: 70000,
        inStock: 20,
        imgSrc: "./images/Accessories/various-accessories/10-Multiple-USB-Port-2.png"
    },

    {
        id: 11,
        name: "WIFI USB Adapter",
        customer: "customer11",
        descr: "WIFI USB Adapter to connect your computer to a wireless network.",
        price: 50000,
        inStock: 15,
        imgSrc: "./images/Accessories/various-accessories/11-WIFI-USB-Adapter.avif"
    },

    {
        id: 12,
        name: "USB to SATA Cable",
        customer: "customer12",
        descr: "USB to SATA Cable to connect your computer to a SATA hard drive.",
        price: 30000,
        inStock: 10,
        imgSrc: "./images/Accessories/various-accessories/12-USB-to-SATA-Cable.jpg"
    },

    {
        id: 13,
        name: "SanDisk Cruzer Blade 16GB",
        customer: "customer13",
        descr: "SanDisk Cruzer Blade 16GB USB Flash Drive, made of durable materials to protect your data from loss and damage.",
        price: 25000,
        inStock: 30,
        imgSrc: "./images/Accessories/various-accessories/13-SanDisk-Cruzer.jpg"
    },

    {
        id: 14,
        name: "Portable WIFI Hotspot",
        customer: "customer14",
        descr: "Portable WIFI Hotspot to connect your devices to a wireless network.",
        price: 60000,
        inStock: 10,
        imgSrc: "./images/Accessories/various-accessories/14-Portable-WIFI-Hotspot.avif"
    },

    {
        id: 15,
        name: "M2 SSD 512GB",
        customer: "customer15",
        descr: "M2 SSD 512GB, made of durable materials to protect your data from loss and damage.",
        price: 250000,
        inStock: 15,
        imgSrc: "./images/Accessories/various-accessories/15-M2-SSD.jpg"
    }
]