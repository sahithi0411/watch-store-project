import './index.css'
import Header from '../Header'
import { useNavigate } from 'react-router'

const watcheList = [
                //APPLES
    {
        id: 1,
        name: 'Apple Watch SE 3',
        brand: 'Apple',
        category: 'Mens & Womens',
        price: '₹25,900',
        rating: '★★★★☆',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSX2BsxQMIDfYshKguNzce1bEbEg2quYHN8xdv3BPntO4yWuAfSKbBPm_tE543EQ1Vt8h73eoCzUDDMGdzu-JXgDAKP-8zHdCnTI6lXBktkbx7_SPUOGA3tHenES3viAn9Z-6pQEyXxGPs9&usqp=CAc',
    },
    {
        id: 2,
        name: 'Apple Watch Series 11 GPS',
        brand: 'Apple',
        category: 'Boys',
        price: '₹40,999',
        rating: '★★★☆☆',
        imageUrl: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSmijttViYHnJqgtS7HYaZymCwa-5Qu4phRULGfg1PmNpdYN8ao58pvksTh4he1kSz2Nlr0MGkofrT-b0L0xTS_O6-WvVlg8DuQY4Ei2OGAen29gwKfDlSiCnMNR4pF5Dp_ZU54Ng&usqp=CAc',
    },
    {
        id: 3,
        name: 'Apple Watch Series 11',
        brand: 'Apple',
        category: 'Boys',
        price: '₹46,900',
        rating: '★★★★☆',
        imageUrl: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-card-40-s11-202509_GEO_IN_FMT_WHH?wid=508&hei=472&fmt=jpeg&qlt=90&.v=RGt6QnVpU0piVDZnRHZnWmNNbHB2K0dXbkZ3bnI5S1V4Y3dWbzdFMEYrYnNPK21NTmFtSkpWQ3ZBMFB1WTlMTzltWDc4aXJHcmduU0dwUHg2UmFtWXoyTkNERHVqSk12b05selRrakVBT3ZFcXo2Y2lWRzhkbVFKT0gvRFZBUHY',
    },
    {
        id: 4,
        name: 'Apple Watch SE 3',
        brand: 'Apple',
        category: 'Girls',
        price: '₹25,900',
        rating: '★★★★★',
        imageUrl: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-card-40-se-202603?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=dFQyNjEycitpbFBFNXA5RHpaQjc1dmtmTUxrN0k3bXk5Rkc5ZUE1R0JqZzJzUm9kdjFCbFNETWhUL0NFUjdrYWpXMmN1SUZuRTA3ZHE2K3NlL08vSGIxL2Q2OVdrdU5zSjVnbHRXUEVDNVk',
    },
    {
        id: 5,
        name: 'Apple Watch Series 11',
        brand: 'Apple',
        category: 'Mens & Womens',
        price: '₹46,900',
        rating: '★★★★☆',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ6qcLmSXdsQ2QsvUk_MA2qlS5x7E8b5s4kA&s',
    },
    {
        id: 6,
        name: 'Apple Series 1 Unisex',
        brand: 'Apple',
        category: 'Grils',
        price: '₹23,900',
        rating: '★★★★★',
        imageUrl: 'https://assets.myntassets.com/assets/images/1758368/2017/2/14/11487064101198-Apple-Series-1-Unisex-Navy-42-mm-Smart-Watch-9541487064101099-2.jpg',
    },
    {
        id: 7,
        name: 'Apple Series 1 Unisex',
        brand: 'Apple',
        category: 'Boys',
        price: '₹23,900',
        rating: '★★★★☆',
        imageUrl: 'https://static.bhphoto.com/images/multiple_images/images500x500/1473355889_IMG_683144.jpg',
    },
    {
        id: 8,
        name: 'Apple Watch SE 3',
        brand: 'Apple',
        category: 'Grils',
        price: '₹25,900',
        rating: '★★★★★',
        imageUrl: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-card-40-se-202603_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=dFQyNjEycitpbFBFNXA5RHpaQjc1a2YwVXZvYWdoa2NXQndKNFdmSlMzdWZaQno4VzdyOTRhQU93VEhhWjgvSHg4ZHpEbm5XWGdaM3BiNVRDaG55Uk9OM1JTVGtKUFFWc0NQZFFxTkdlYUJBU25Ob2N5dVQyQmxkN0IyWWVHdW0',
    },
    {
        id: 9,
        name: 'Apple Watch Series 1 Smartwatch',
        brand: 'Apple',
        category: 'Mens & Womens',
        price: '₹21,900',
        rating: '★★★☆☆',
        imageUrl: 'https://i.gadgets360cdn.com/products/wearables/large/1551968928_832_apple_watch-series-1-smartwatch.jpg?downsize=*:180',
    },
    {
        id: 10,
        name: 'Apple Watch Series 3 Smartwatch',
        brand: 'Apple',
        category: 'Mens & Womens',
        price: '₹25,900',
        rating: '★★★★☆',
        imageUrl: 'https://e7.pngegg.com/pngimages/327/13/png-clipart-apple-watch-series-3-iphone-smartwatch-apple-electronics-apple-watch-thumbnail.png',
    },
    {
        id: 11,
        name: 'Apple Watch Ultra 2 GPS+LTE with Alpine Loop - S',
        brand: 'Apple',
        category: 'Boys',
        price: '₹74,090',
        rating: '★★★★★',
        imageUrl: 'https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/Communication/Wearable%20Devices/Images/309274_0_nps6tg.png?tr=w-600',
    },
    {
        id: 12,
        name: 'Iphone Watch Series 2025 3 Gps And Cellular',
        brand: 'Apple',
        category: 'Mens & Womens',
        price: '₹44,090',
        rating: '★★★☆☆',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW_d-A8l5ISxcvZkSxxE5C2hCFBLs4r6YbnA&s',
    },

            // TITAN
    {
        id: 1,
        name: 'Titan Womens Lagan Chic',
        brand: 'Titan',
        category: 'Grils',
        price: '₹1,995',
        rating: '★★★★☆',
        imageUrl: 'https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwf87788bb/images/Titan/Catalog/2656WL01_1.jpg?sw=360&sh=360',
    },
    {
        id: 2,
        name: 'Titan Karishma Quartz Analog Green Dial Golden ',
        brand: 'Titan',
        category: 'Boys',
        price: '₹3,995',
        rating: '★★★★★',
        imageUrl: 'https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw1daa219c/images/Titan/Catalog/10058YM04_1.jpg?sw=360&sh=360',
    },
    {
        id: 3,
        name: 'Titan AiRA Women Smartwatch',
        brand: 'Titan',
        category: 'Grils',
        price: ' ₹7,499',
        rating: '★★★★★',
        imageUrl: 'https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw1b4fab1b/images/Titan/Catalog/95416KM01K_1.jpg?sw=360&sh=360',
    },
    {
        id: 4,
        name: 'Titan Quartz Analog ',
        brand: 'Titan',
        category: 'Boys',
        price: '₹2,795',
        rating: '★★★★☆',
        imageUrl: 'https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw673df0c2/images/Titan/Catalog/1578SM04_1.jpg?sw=600&sh=600',
    },
    {
        id: 5,
        name: 'Titan Karishma Quartz Analog Brown Dial Brown Stainless',
        brand: 'Titan',
        category: 'Girls',
        price: '₹3,995',
        rating: '★★★☆☆',
        imageUrl: 'https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw9127769c/images/Titan/Catalog/2760QM02_1.jpg?sw=600&sh=600',
    },
    {
        id: 6,
        name: 'Titan Quartz Multifunction Black Dial Leather',
        brand: 'Titan',
        category: 'Boys',
        price: '₹6,795',
        rating: '★★★★☆',
        imageUrl: 'https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwb2512c66/images/Titan/Catalog/1733KL03_2.jpg?sw=600&sh=600',
    },
   {
        id: 7,
        name: 'Titan RagGrilsa Showstopper Quartz Analog',
        brand: 'Titan',
        category: 'Girls',
        price: '₹6,795',
        rating: '★★★☆☆',
        imageUrl: 'https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwf10491b8/images/Titan/Catalog/95272WM01_1.jpg?sw=600&sh=600',
    },
    {
        id: 8,
        name: 'Titan Neo Splash Quartz Multifunction Black',
        brand: 'Titan',
        category: 'Boys',
        price: '₹8,295',
        rating: '★★★★★',
        imageUrl: 'https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw96b986ec/images/Titan/Catalog/1805QM04_1.jpg?sw=600&sh=600',
    },
    {
        id: 9,
        name: 'Sonata Poze Quartz Analog White Dial Rose Gold Color',
        brand: 'Titan',
        category: 'Grils',
        price: '₹1,495',
        rating: '★★★☆☆',
        imageUrl: 'https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw284bae00/images/Sonata/Catalog/SP80087WM01_1.jpg?sw=600&sh=600',
    },
    {
        id: 10,
        name: 'Titan Minimals Quartz Analog',
        brand: 'Titan',
        category: 'Boys',
        price: '₹4,495',
        rating: '★★★★☆',
        imageUrl: 'https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw14cc62a4/images/Titan/Catalog/1806NM01_1.jpg?sw=600&sh=600',
    },
    {
        id: 11,
        name: 'Vyb Diva By Fastrack Quartz Analog Rose Gold Dial Rose Gold',
        brand: 'Titan',
        category: 'Grils',
        price: '₹1,850',
        rating: '★★★☆☆',
        imageUrl: 'https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw3e784553/images/Fastrack/Catalog/FV60092WM01_1.jpg?sw=600&sh=600',
    },
    {
        id: 12,
        name: 'Titan Celestor 2.0 Smartwatch',
        brand: 'Titan',
        category: 'Boys',
        price: '₹11,499',
        rating: '★★★★★',
        imageUrl: 'https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwd5fa0150/images/Titan/Catalog/90248AP02C_1.jpg?sw=600&sh=600',
    },
                // FASTRACK
    {
        id: 1,
        name: 'Fastrack Astor FR2 Pro Smart Watch',
        brand: 'Fastrack',
        category: 'Boys',
        price: '₹3,499',
        rating: '★★★☆☆',
        imageUrl: 'https://www.fastrack.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw8178fcf1/images/Fastrack/Catalog/38156NM01_1.jpg?sw=360&sh=360',
    },
    {
        id: 2,
        name: 'Fastrack Optimus 2 Pro',
        brand: 'Fastrack',
        category: 'Boys',
        price: '₹4,499',
        rating: '★★★★★',
        imageUrl: 'https://www.fastrack.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw5a755061/images/Fastrack/Catalog/38153NP01_1.jpg?sw=600&sh=600',
    },
    {
        id: 3,
        name: 'Fastrack Stunners Quartz Analog',
        brand: 'Fastrack',
        category: 'Grils',
        price: '₹2,195',
        rating: '★★★☆☆',
        imageUrl: 'https://www.fastrack.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwd7fc2cb0/images/Fastrack/Catalog/6282SM02_1.jpg?sw=600&sh=600',
    },
    {
        id: 4,
        name: 'Fastrack Stunners Quartz Analog Blue',
        brand: 'Fastrack',
        category: 'Boys',
        price: '₹2,495',
        rating: '★★★★★',
        imageUrl: 'https://www.fastrack.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw54d801ce/images/Fastrack/Catalog/3255NL03_1.jpg?sw=600&sh=600',
    },
    {
        id: 5,
        name: 'Fastrack Stunners Quartz Analog Black',
        brand: 'Fastrack',
        category: 'Grils',
        price: '₹2,695',
        rating: '★★★☆☆',
        imageUrl: 'https://www.fastrack.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw88f02a35/images/Fastrack/Catalog/68065QM02_1.jpg?sw=600&sh=600',
    },
    {
        id: 6,
        name: 'Fastrack Opulence Sun Moon Chronograph Black Dial Black',
        brand: 'Fastrack',
        category: 'Boys',
        price: '₹6,795',
        rating: '★★★★★',
        imageUrl: 'https://www.fastrack.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw2c78f78e/images/Fastrack/Catalog/3315KM01_1.jpg?sw=600&sh=600',
    },
    {
        id: 7,
        name: 'Vyb Spotlight By Fastrack Quartz',
        brand: 'Fastrack',
        category: 'Grils',
        price: '₹1,995',
        rating: '★★★★☆',
        imageUrl: 'https://www.fastrack.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw5c526532/images/Fastrack/Catalog/FV60062WM01W_1.jpg?sw=600&sh=600',
    },
    {
        id: 8,
        name: 'Fastrack New Astor FS1 PRO Smartwatch',
        brand: 'Fastrack',
        category: 'Boys',
        price: '₹2,499',
        rating: '★★★★☆',
        imageUrl: 'https://www.fastrack.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw8a8d659e/images/Fastrack/Catalog/38151PP01K_1.jpg?sw=600&sh=600',
    },
    {
        id: 9,
        name: 'Fastrack Stunners Quartz Analog Silver Dial Metal',
        brand: 'Fastrack',
        category: 'Grils',
        price: '₹1,795',
        rating: '★★★☆☆',
        imageUrl: 'https://www.fastrack.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw0172bf2f/images/Fastrack/Catalog/6267SM01_1.jpg?sw=600&sh=600',
    },
    {
        id: 10,
        name: 'Fastrack VOX CirQ Smartwatch',
        brand: 'Fastrack',
        category: 'Boys',
        price: '₹2,699',
        rating: '★★★★☆',
        imageUrl: 'https://www.fastrack.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw846ee464/images/Fastrack/Catalog/38183PP01K_1.jpg?sw=600&sh=600',
    },
    {
        id: 11,
        name: 'Fastrack Stunners Quartz Analog Silver Dial Rose Gold',
        brand: 'Fastrack',
        category: 'Grils',
        price: '₹2,895',
        rating: '★★★☆☆',
        imageUrl: 'https://www.fastrack.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw4c0cf7da/images/Fastrack/Catalog/68064WM01_1.jpg?sw=600&sh=600',
    },
    {
        id: 12,
        name: 'Fastrack Ryz Women Smartwatch with 1.72" Super Ultra VU Display',
        brand: 'Fastrack',
        category: 'Grils',
        price: '₹2,499',
        rating: '★★★★★',
        imageUrl: 'https://www.fastrack.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw4e3403de/images/Fastrack/Catalog/68062PP02K_1.jpg?sw=600&sh=600',
    },
                // ROLEX
    {
        id: 1,
        name: 'Lady-Datejust',
        brand: 'Roles',
        category: 'Grils',
        price: '₹724,499',
        rating: '★★★★★',
        imageUrl: 'https://media.rolex.com/image/upload/q_auto/f_auto/t_v7-cover-majesty-landscape/c_limit,w_1200/v1/a677b2c664f6/catalogue/2026/upright-c/m279160-0013',
    },
    {
        id: 2,
        name: 'Submariner Date',
        brand: 'Rolex',
        category: 'Boys',
        price: '₹1,755,000',
        rating: '★★★★☆',
        imageUrl: 'https://media.rolex.com/image/upload/q_auto/f_auto/t_v7-cover-majesty-landscape/c_limit,w_1200/v1/a677b2c664f6/catalogue/2026/upright-c/m126613lb-0002',
    },
    {
        id: 3,
        name: 'Lady-Datejust',
        brand: 'Rolex',
        category: 'Grils',
        price: '₹4,796,000',
        rating: '★★★★★',
        imageUrl: 'https://media.rolex.com/image/upload/q_auto/f_auto/t_v7-cover-majesty-landscape/c_limit,w_1200/v1/a677b2c664f6/catalogue/2026/upright-c/m279135rbr-0001',
    },
    {
        id: 4,
        name: 'Cosmograph Daytona',
        brand: 'Rolex',
        category: 'Boys',
        price: '₹7,838,000',
        rating: '★★★★★',
        imageUrl: 'https://media.rolex.com/image/upload/q_auto/f_auto/t_v7-cover-majesty-landscape/c_limit,w_1200/v1/a677b2c664f6/catalogue/2026/upright-c/m126506-0001',
    },
    {
        id: 5,
        name: 'Lady-Datejust',
        brand: 'Rolex',
        category: 'Grils',
        price: '₹3,76,000',
        rating: '★★★★☆',
        imageUrl: 'https://media.rolex.com/image/upload/q_auto:eco/f_auto/c_limit,w_1920/v1/rolexcom/094398bf1f99/collection/watches-grid/popin-cards/m279135rbr-0001/m279135rbr-0001_v01',
    },
    {
        id: 6,
        name: 'GMT-Master II',
        brand: 'Rolex',
        category: 'Boys',
        price: '₹1,091,500',
        rating: '★★★★☆',
        imageUrl: 'https://media.rolex.com/image/upload/q_auto/f_auto/t_v7-cover-majesty-landscape/c_limit,w_1200/v1/a677b2c664f6/catalogue/2026/upright-c/m126710blnr-0003',
    },
    {
        id: 7,
        name: 'Lady-Datejust',
        brand: 'Rolex',
        category: 'Grils',
        price: '₹3,776,000',
        rating: '★★★★☆',
        imageUrl: 'https://media.rolex.com/image/upload/q_auto/f_auto/t_v7-cover-majesty-landscape/c_limit,w_1200/v1/a677b2c664f6/catalogue/2026/upright-c/m279139rbr-0008',
    },
    {
        id: 8,
        name: 'Yacht-Master 42',
        brand: 'Rolex',
        category: 'Boys',
        price: '₹3,369,000',
        rating: '★★★★★',
        imageUrl: 'https://media.rolex.com/image/upload/q_auto/f_auto/t_v7-cover-majesty-landscape/c_limit,w_1200/v1/a677b2c664f6/catalogue/2026/upright-c/m226658-0001',
    },
    {
        id: 9,
        name: 'Lady-Datejust',
        brand: 'Rolex',
        category: 'Grils',
        price: '₹847,000',
        rating: '★★★★☆',
        imageUrl: 'https://media.rolex.com/image/upload/q_auto/f_auto/t_v7-cover-majesty-landscape/c_limit,w_1200/v1/a677b2c664f6/catalogue/2026/upright-c/m279174-0002',
    },
    {
        id: 10,
        name: 'Air-King',
        brand: 'Rolex',
        category: 'Boys',
        price: '₹755,500',
        rating: '★★★★★',
        imageUrl: 'https://media.rolex.com/image/upload/q_auto/f_auto/t_v7-cover-majesty-landscape/c_limit,w_1200/v1/a677b2c664f6/catalogue/2026/upright-c/m126900-0001',
    },
    {
        id: 11,
        name: 'Lady-Datejust',
        brand: 'Rolex',
        category: 'Grils',
        price: '₹4,735,000',
        rating: '★★★★★',
        imageUrl: 'https://media.rolex.com/image/upload/q_auto/f_auto/t_v7-cover-majesty-landscape/c_limit,w_1200/v1/a677b2c664f6/catalogue/2026/upright-c/m279135rbr-0020',
    },
    {
        id: 12,
        name: 'Day-Date 40',
        brand: 'Rolex',
        category: 'Boys',
        price: '₹4,450,000',
        rating: '★★★★☆',
        imageUrl: 'https://media.rolex.com/image/upload/q_auto/f_auto/t_v7/c_limit,w_1920/v1/a677b2c664f6/catalogue/2026/upright-c/m228238-0069',
    },
                //CASIO
    {
        id: 1,
        name: 'G-STEEL GST-B1000 Series',
        brand: 'Casio',
        category: 'Boys',
        price: '₹29,995',
        rating: '★★★★★',
        imageUrl: 'https://www.casio.com/content/dam/casio/product-info/locales/in/en/timepiece/product/watch/G/GS/GST/gst-b1000d-1a/assets/GST-B1000D-1A.png.transform/main-visual-pc/image.png',
    },
    {
        id: 2,
        name: 'GMA-S140PG-7A',
        brand: 'Casio',
        category: 'Grils',
        price: '₹8,795 ',
        rating: '★★★★☆',
        imageUrl: 'https://www.casio.com/content/dam/casio/product-info/locales/in/en/timepiece/product/watch/G/GM/GMA/gma-s140pg-7a/assets/GMA-S140PG-7A.png.transform/main-visual-pc/image.png',
    },
    {
        id: 3,
        name: 'GST-B1000D-2A',
        brand: 'Casio',
        category: 'Boys',
        price: '₹29,995',
        rating: '★★★★★',
        imageUrl: 'https://www.casio.com/content/dam/casio/product-info/locales/in/en/timepiece/product/watch/G/GS/GST/gst-b1000d-2a/assets/GST-B1000D-2A.png.transform/main-visual-pc/image.png',
    },
    {
        id: 4,
        name: 'GM-S114GEM-1A2',
        brand: 'Casio',
        category: 'Grils',
        price: '₹23,995',
        rating: '★★★★☆',
        imageUrl: 'https://www.casio.com/content/dam/casio/product-info/locales/in/en/timepiece/product/watch/G/GM/GMS/gm-s114gem-1a2/assets/GM-S114GEM-1A2.png.transform/main-visual-pc/image.png',
    },
    {
        id: 5,
        name: 'GM-S2110BP-5A',
        brand: 'Casio',
        category: 'Mens & Womens',
        price: '₹21,995',
        rating: '★★★★★',
        imageUrl: 'https://www.casio.com/content/dam/casio/product-info/locales/in/en/timepiece/product/watch/G/GM/GMS/gm-s2110bp-5a/assets/GM-S2110BP-5A.png.transform/main-visual-pc/image.png',
    },
    {
        id: 6,
        name: 'GMA-S2100MD-4A',
        brand: 'Casio',
        category: 'Grils',
        price: '₹9,295',
        rating: '★★★★☆',
        imageUrl: 'https://www.casio.com/content/dam/casio/product-info/locales/in/en/timepiece/product/watch/G/GM/GMA/gma-s2100md-4a/assets/GMA-S2100MD-4A.png.transform/main-visual-pc/image.png',
    },
    {
        id: 7,
        name: 'ECB-2300D-1A',
        brand: 'Casio',
        category: 'Boys',
        price: '₹21,995',
        rating: '★★★★★',
        imageUrl: 'https://www.casio.com/content/dam/casio/product-info/locales/in/en/timepiece/product/watch/E/EC/ECB/ecb-2300d-1a/assets/ECB-2300D-1A.png.transform/main-visual-pc/image.png',
    },
    {
        id: 8,
        name: 'GMA-S2100MD-1A',
        brand: 'Casio',
        category: 'Grils',
        price: '₹9,295',
        rating: '★★★★☆',
        imageUrl: 'https://www.casio.com/content/dam/casio/product-info/locales/in/en/timepiece/product/watch/G/GM/GMA/gma-s2100md-1a/assets/GMA-S2100MD-1A.png.transform/main-visual-pc/image.png',
    },
    {
        id: 9,
        name: 'ECB-S10NIS-7A',
        brand: 'Casio',
        category: 'Boys',
        price: '₹26,995',
        rating: '★★★★★',
        imageUrl: 'https://www.casio.com/content/dam/casio/product-info/locales/in/en/timepiece/product/watch/E/EC/ECB/ecb-s10nis-7a/assets/ECB-S10NIS-7A.png.transform/main-visual-pc/image.png',
    },
    {
        id: 10,
        name: 'GMA-P2100BA-7A',
        brand: 'Casio',
        category: 'Grils',
        price: '₹8,495',
        rating: '★★★☆☆',
        imageUrl: 'https://www.casio.com/content/dam/casio/product-info/locales/in/en/timepiece/product/watch/G/GM/GMA/gma-p2100ba-7a/assets/GMA-P2100BA-7A.png.transform/main-visual-pc/image.png',
    },
    {
        id: 11,
        name: 'EFK-100D-3A',
        brand: 'Casio',
        category: 'Boys',
        price: '₹25,995',
        rating: '★★★★☆',
        imageUrl: 'https://www.casio.com/content/dam/casio/product-info/locales/in/en/timepiece/product/watch/E/EF/efk/efk-100d-3a/assets/EFK-100D-3A.png.transform/main-visual-pc/image.png',
    },
    {
        id: 12,
        name: 'GM-S2100BC-1A',
        brand: 'Casio',
        category: 'Grils',
        price: '₹13,995',
        rating: '★★★☆☆',
        imageUrl: 'https://www.casio.com/content/dam/casio/product-info/locales/in/en/timepiece/product/watch/G/GM/GMS/gm-s2100bc-1a/assets/GM-S2100BC-1A.png.transform/main-visual-pc/image.png',
    },
]

const uniqueWatches = watcheList.filter(
    (watch, index, self) =>
        index ===
        self.findIndex(
            eachItem =>
                eachItem.name === watch.name &&
                eachItem.brand === watch.brand
        )
)

const Products = () => {
    const navigate = useNavigate()
    const onClickAddToCart = watch => {
    const existingCart =
      JSON.parse(localStorage.getItem('cartItem')) || []

    const updatedCart = [...existingCart, watch]

    localStorage.setItem(
      'cartItem',
      JSON.stringify(updatedCart)
    )
  }
    return (
        <>
            <Header />
            <div className='product-card'>
                <h1 className='heading'>Trending Watches</h1>
                <ul className='product-list'>
                    {uniqueWatches.map(eachWatch => (
                        <li className='product-conariner' key={eachWatch.id}>
                            <img
                               src={eachWatch.imageUrl}
                               alt={eachWatch.name}
                               className='watch-image'
                            />
                            <h1 className='watch-name'>
                                {eachWatch.name}
                            </h1>
                            <p className='watch-brand'>
                                Brand: {eachWatch.brand}
                            </p>
                            <p className='watch-category'>
                                Category: {eachWatch.category}
                            </p>
                            <p className='watch-price'>
                                Price: {eachWatch.price}
                            </p>
                            <p className='watch-rating'>
                                Rating: {eachWatch.rating}
                            </p>
                            <div className='button-card'>
                                <button className='buy-btn' type='button' onClick={() => 
                                    navigate('/buynow')}>
                                    Buy Now
                                </button>
                                <button type='button' className='cart-btn' onClick={() =>
                                        onClickAddToCart(eachWatch)}
                                >
                                    Add To Cart
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}
export default Products