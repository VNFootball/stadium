var allData = [
    {
        id: 1,
        stadium_name: "Mỹ Đình National",
        team: "Vietnam",
		logo: "https://upload.wikimedia.org/wikipedia/en/1/1d/Vietnam_Football_Federation_logo.svg",
        capacity: 40192,
        latitude: 21.0204473094572,
        longitude: 105.763818752448,
        league: "National"
    },
    {
        id: 2,
        stadium_name: "Bà Rịa",
        team: "Bà Rịa Vũng Tàu",
		logo: "https://vpf.vn/wp-content/uploads/2019/12/Ba-Ria-Vung-Tau.png",
        capacity: 10000,
        latitude: "10.508280906552368",
        longitude: "107.17421702662749",
        league: "V.League 2"
    },
    {
        id: 3,
        stadium_name: "Bình Phước",
        team: "Bình Phước",
		logo: "https://upload.wikimedia.org/wikipedia/en/3/32/Binh_Phuoc_FC_logo.png",
        capacity: 10000,
        latitude: "11.824614114457905",
        longitude: "106.95799179972113",
        league: "V.League 2"
    },
    {
        id: 4,
        stadium_name: "Ninh Thuận",
        team: "Bình Thuận",
		logo: "https://upload.wikimedia.org/wikipedia/en/f/f6/Binh_Thuan_FC_logo.svg",
        capacity: 6000,
        latitude: "11.576735030177076",
        longitude: "108.98156208709382",
        league: "V.League 2"
    },
    {
        id: 5,
        stadium_name: "Hòa Bình",
        team: "Hòa Bình",
		logo: "https://upload.wikimedia.org/wikipedia/en/6/6e/Hoa_Binh_FC_logo.svg",
        capacity: 3600,
        latitude: "20.816983807139138",
        longitude: "105.33989721748566",
        league: "V.League 2"
    },
    {
        id: 6,
        stadium_name: "Tự Do",
        team: "Huế",
		logo: "https://upload.wikimedia.org/wikipedia/en/6/6a/Hue_FC_crest.svg",
        capacity: 16000,
        latitude: "16.467316676037413",
        longitude: "107.59768229088345",
        league: "V.League 2"
    },
    {
        id: 7,
        stadium_name: "Long An",
        team: "Long An",
		logo: "https://upload.wikimedia.org/wikipedia/en/b/b2/Long_An_FC_crest.svg",
        capacity: 20000,
        latitude: "10.536241299427438",
        longitude: "106.40823435003853",
        league: "V.League 2"
    },
    {
        id: 8,
        stadium_name: "Ninh Bình",
        team: "Phù Đổng",
		logo: "https://vpf.vn/wp-content/uploads/2019/01/Phu-Dong.jpg",
        capacity: 20000,
        capacity: 22000,
        latitude: "20.258652754928907",
        longitude: "105.96907322141335",
        league: "V.League 2"
    },
    {
        id: 9,
        stadium_name: "Việt Trì",
        team: "Phú Thọ",
		logo: "https://upload.wikimedia.org/wikipedia/en/2/25/Phu_Tho_FC_logo.svg",
        capacity: 18000,
        latitude: "21.305659356691375",
        longitude: "105.41330041309301",
        league: "V.League 2"
    },
    {
        id: 10,
        stadium_name: "PVF",
        team: "PVF-CAND",
		logo: "https://upload.wikimedia.org/wikipedia/en/8/8d/PVF-CAND_FC_logo.svg",
        capacity: 4500,
        latitude: "20.927647509756895",
        longitude: "105.94567383717047",
        league: "V.League 2"
    },
    {
        id: 11,
        stadium_name: "Tam Kỳ",
        team: "Quảng Nam",
		logo: "https://upload.wikimedia.org/wikipedia/en/c/c3/Quang_Nam_FC_logo.svg",
        capacity: 15000,
        latitude: "15.56031190470625",
        longitude: 108.506636078829,
        league: "V.League 2"
    },
    {
        id: 12,
        stadium_name: "Bình Dương",
        team: "Becamex Bình Dương",
		logo: "https://upload.wikimedia.org/wikipedia/en/d/dd/Logo_of_Becamex_B%C3%ACnh_D%C6%B0%C6%A1ng_FC.svg",
        capacity: 15000,
        latitude: "10.97061250277609",
        longitude: 106.671739592398,
        league: "V.League 1"
    },
    {
        id: 13,
        stadium_name: "Hàng Đẫy",
        team: "Công an Hà Nội",
		logo: "https://upload.wikimedia.org/wikipedia/en/1/10/CAHN_FC_logo.svg",
        capacity: 19500,
        latitude: 21.029845,
        longitude: 105.832973,
        league: "V.League 1"
    },
    {
        id: 14,
        stadium_name: "Thanh Hóa",
        team: "Đông Á Thanh Hóa",
		logo: "https://upload.wikimedia.org/wikipedia/en/c/cb/DATHFC_logo.svg",
        capacity: 14000,
        latitude: "19.79934792237392",
        longitude: "105.7728596019813",
        league: "V.League 1"
    },
    {
        id: 34,
        stadium_name: "Hàng Đẫy",
        team: "Hà Nội",
        capacity: 19500,
		logo: "https://upload.wikimedia.org/wikipedia/en/a/af/HN_FC_Logo.svg",
        latitude: 21.02947444151557,
        longitude: 105.83245380898698,
        league: "V.League 1"
    },
    {
        id: 16,
        stadium_name: "Lạch Tray",
        team: "Hải Phòng",
		logo: "https://upload.wikimedia.org/wikipedia/en/a/ad/Haiphong_FC_Logo_%282022-present%29.svg",
        capacity: 30000,
        latitude: "20.852058201527925",
        longitude: "106.68889632463711",
        league: "V.League 1"
    },
    {
        id: 17,
        stadium_name: "Pleiku",
        team: "Hoàng Anh Gia Lai",
		logo: "https://upload.wikimedia.org/wikipedia/en/f/f1/Hoang_Anh_Gia_Lai_FC_logo.svg",
        capacity: 10000,
        latitude: "13.979184803692522",
        longitude: "108.00498997377393",
        league: "V.League 1"
    },
    {
        id: 18,
        stadium_name: "Hà Tĩnh",
        team: "Hồng Lĩnh Hà Tĩnh",
		logo: "https://upload.wikimedia.org/wikipedia/en/0/09/Hong_Linh_Ha_Tinh_FC_logo.svg",
        capacity: 10000,
        latitude: "18.333343687489286",
        longitude: "105.90785187421314",
        league: "V.League 1"
    },
    {
        id: 19,
        stadium_name: "19/8 Nha Trang",
        team: "Khánh Hòa",
		logo: "https://upload.wikimedia.org/wikipedia/en/5/55/Khanh_Hoa_FC_crest.svg",
        capacity: 18000,
        latitude: "12.250547545924583",
        longitude: "109.19303427108684",
        league: "V.League 1"
    },
    {
        id: 20,
        stadium_name: "Hòa Xuân",
        team: "SHB Đà Nẵng",
		logo: "https://upload.wikimedia.org/wikipedia/en/5/54/SHB_Danang_logo.svg",
        capacity: 20500,
        latitude: "15.999305073490977",
        longitude: "108.22353396968828",
        league: "V.League 1"
    },
    {
        id: 21,
        stadium_name: "Vinh",
        team: "Sông Lam Nghệ An",
		logo: "https://upload.wikimedia.org/wikipedia/en/7/70/SLNA_FC_logo.svg",
        capacity: 20000,
        latitude: "18.669109749748053",
        longitude: "105.6691463654532",
        league: "V.League 1"
    },
    {
        id: 22,
        stadium_name: "Thiên Trường",
        team: "Thép Xanh Nam Định",
		logo: "https://upload.wikimedia.org/wikipedia/en/9/9f/Nam_Dinh_FC_logo.svg",
        capacity: 22000,
        latitude: "20.43650727263646",
        longitude: 106.180005430061,
        league: "V.League 1"
    },
    {
        id: 23,
        stadium_name: "Quy Nhơn",
        team: "TopenLand Bình Định",
		logo: "https://vpf.vn/wp-content/uploads/2018/10/Binh-Dinh.png",
        capacity: 16000,
        latitude: "13.774613029142063",
        longitude: "109.22857180434579",
        league: "V.League 1"
    },
    {
        id: 24,
        stadium_name: "Thống Nhất",
        team: "Hồ Chí Minh City",
		logo: "https://upload.wikimedia.org/wikipedia/en/7/7d/HCMCFC_logo.svg",
        capacity: 15000,
        latitude: "10.76071689230983",
        longitude: 106.66344155246,
        league: "V.League 1"
    },
    {
        id: 35,
        stadium_name: "Hàng Đẫy",
        team: "Viettel",
		logo: "https://upload.wikimedia.org/wikipedia/en/a/a1/Viettel_Football_Club_Logo.svg",
        capacity: 19500,
        latitude: 21.030535945606438,
        longitude: 105.8328400648008,
        league: "V.League 1"
    },
    {
        id: 36,
        stadium_name: "PVF",
        team: "PVF",
		logo: "https://scontent.xx.fbcdn.net/v/t39.30808-6/294638514_5084469361664005_7758219298468274371_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=PasWDYWOIKQAX_5YPhJ&_nc_ht=scontent.fhan3-3.fna&oh=00_AfB-eRTDQgsYdt_-Tw3nI7PX0GUegTp7FDaeFLHhBMXA3w&oe=6500CDC9&_nc_fr=fhan3c03",
        capacity: 4500,
        latitude: 20.92730671164155,
        longitude: 105.94613537028135,
        league: "Second Division"
    },
    {
        id: 38,
        stadium_name: "Tam Kỳ",
        team: "Quảng Nam Youth",
		logo: "https://upload.wikimedia.org/wikipedia/en/c/c3/Quang_Nam_FC_logo.svg",
        capacity: 15000,
        latitude: 15.55957756703429,
        longitude: 108.50668240827746,
        league: "Second Division"
    },
    {
        id: 25,
        stadium_name: "Đà Lạt",
        team: "Lâm Đồng",
		logo: "https://scontent.fhan3-3.fna.fbcdn.net/v/t39.30808-6/343416757_2251247168401412_7486719035364879447_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=KWcmGi4N90sAX9jccE-&_nc_ht=scontent.fhan3-3.fna&oh=00_AfA1qPVup0GnHfGmO1CfMvm2xmkvjxcP_5vgevQM7omU8g&oe=65005A70",
        capacity: 20000,
        latitude: 11.959497011059,
        longitude: 108.432433162482,
        league: "Second Division",
        "undefined": ", "
    },
    {
        id: 26,
        stadium_name: "Quang Ninh Sports Training Center",
        team: "Luxury Hạ Long",
		logo: "https://scontent.fhan3-1.fna.fbcdn.net/v/t39.30808-6/277676498_471438188101199_5171951075031985485_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=KPoZWLwJcfoAX_Hvhg7&_nc_ht=scontent.fhan3-1.fna&oh=00_AfBzPRMzvhRK6zJz_F9n8qpNzhyCuqPSp6qGkjQpYSPijw&oe=64FFE6F9",
        capacity: 0,
        latitude: 20.9877551065303,
        longitude: 106.893251851204,
        league: "Second Division",
        "undefined": ", "
    },
    {
        id: 37,
        stadium_name: "Hòa Xuân",
        team: "SHB Đà Nẵng Youth",
		logo: "https://upload.wikimedia.org/wikipedia/en/5/54/SHB_Danang_logo.svg",
        capacity: 20500,
        latitude: 15.998875955761152,
        longitude: 108.22386716064935,
        league: "Second Division"
    },
    {
        id: 27,
        stadium_name: "Kon Tum",
        team: "Gama Vĩnh Phúc",
		logo: "https://scontent.fhan3-5.fna.fbcdn.net/v/t39.30808-6/335078199_161170210079752_6876348529978155598_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=azjzhF-kIPIAX_K_1CP&_nc_ht=scontent.fhan3-5.fna&oh=00_AfCQiyU-3wcOv3VR-XdSXH_tjXdL9m9Cn7Ny-slcZJciEA&oe=64FFC3B9",
        capacity: 11000,
        latitude: 14.3642690597046,
        longitude: 108.016261850478,
        league: "Second Division"
    },
    {
        id: 28,
        stadium_name: "Buôn Ma Thuột",
        team: "Đắk Lắk",
		logo: "https://scontent.fhan4-3.fna.fbcdn.net/v/t39.30808-6/311113823_419354580382005_5222221498050143330_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=_VcFHSNXc0wAX8SYlkN&_nc_ht=scontent.fhan4-3.fna&oh=00_AfCcDB-JXBfcCsp-wIKZY0DE8U_I_30rKur7_jLbTKAPAQ&oe=650149FD",
        capacity: 20000,
        latitude: 12.6777632788186,
        longitude: 108.042607877036,
        league: "Second Division"
    },
    {
        id: 29,
        stadium_name: "Tân Hiệp",
        team: "Gia Định",
		logo: "https://scontent.fhan4-3.fna.fbcdn.net/v/t39.30808-6/257219040_2131617996995908_5102902037968090337_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=TUlHRWTHz9YAX8VYgyh&_nc_ht=scontent.fhan4-3.fna&oh=00_AfD8tBgwW8JfFAu3Xk_GNzbzB9iZI0u1djQ6SGU8grUIeQ&oe=6500A513",
        capacity: 0,
        latitude: 10.9059623866273,
        longitude: 106.586499054655,
        league: "Second Division"
    },
    {
        id: 30,
        stadium_name: "Đồng Nai",
        team: "Đồng Nai",
		logo: "https://scontent.fhan3-2.fna.fbcdn.net/v/t39.30808-6/279781482_386097900193608_6992583564675830301_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=TgYxXmK43RgAX8vLMk-&_nc_ht=scontent.fhan3-2.fna&oh=00_AfCqjsmNbkjGjczR_RhRJ1-5o9TLXXa1cYkLxJ2cjDuWYQ&oe=6500C1AE",
        capacity: 30000,
        latitude: 10.9617138188138,
        longitude: 106.862879171837,
        league: "Second Division"
    },
    {
        id: 31,
        stadium_name: "Vĩnh Long",
        team: "Vĩnh Long",
		logo: "https://scontent.fhan4-2.fna.fbcdn.net/v/t1.6435-9/181510610_152539550209620_8834614712996183557_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=mjgTylMygxMAX-7Bxs-&_nc_ht=scontent.fhan4-2.fna&oh=00_AfD33Md-ICevL0BbqS_5ohOHFLC7tglkXaYTCpsP5Tgg9A&oe=6522E15B",
        capacity: 10000,
        latitude: 10.2464709557213,
        longitude: 105.961218047575,
        league: "Second Division"
    },
    {
        id: 32,
        stadium_name: "Tiền Giang",
        team: "Tiền Giang",
		logo: "https://scontent.fhan4-3.fna.fbcdn.net/v/t39.30808-6/305387701_448956917286434_4649121521821744651_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=QjnSrWj5pP8AX9-GN3w&_nc_ht=scontent.fhan4-3.fna&oh=00_AfAKJekJtqEbD_ZeaEZz6oqtT_nokKYD1h6QPUMER3fD-A&oe=64FF550D",
        capacity: 15000,
        latitude: 10.3572348025935,
        longitude: 106.351119391105,
        league: "Second Division"
    },
    {
        id: 39,
        stadium_name: "Thống Nhất",
        team: "Hồ Chí Minh City Youth",
		logo: "https://upload.wikimedia.org/wikipedia/commons/9/90/TP_Ho_Chi_Minh_logo.png",
        capacity: 15000,
        latitude: 10.7611389333413,
        longitude: 106.66300039709989,
        league: "Second Division"
    },
    {
        id: 15,
        stadium_name: "Đồng Tháp",
        team: "Đồng Tháp",
		logo: "https://dongthapfc.org/wp-content/uploads/2022/10/Logo-dfc.png",
        capacity: 20000,
        latitude: 10.4646357682763,
        longitude: 105.642697401138,
        league: "Second Division"
    },
    {
        id: 33,
        stadium_name: "Kiên Giang",
        team: "Dugong Kiên Giang",
		logo: "https://scontent.fhan4-1.fna.fbcdn.net/v/t39.30808-6/341709604_1293804951208476_6616081628683169071_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=cu48tKiu_KIAX9GGjwc&_nc_oc=AQksgoLlbidhJC6gU5kTBg78DOeJu4woP0LngjqzxxinfHrdg43cUOy_RK1IDS24EfA&_nc_ht=scontent.fhan4-1.fna&oh=00_AfD_qxp39jU86QLA0lf4e2rZg1fNuPTsl1M0IoPptHmBxQ&oe=64FF8538",
        capacity: 8000,
        latitude: 9.96360173070786,
        longitude: 105.118282981741,
        league: "Second Division"
    }
];

var myData = [
    {
        id: 1,
        stadium_name: "Mỹ Đình National",
        team: "Vietnam",
		logo: "https://upload.wikimedia.org/wikipedia/en/1/1d/Vietnam_Football_Federation_logo.svg",
        capacity: 40192,
        latitude: 21.0204473094572,
        longitude: 105.763818752448,
        league: "National"
    },
    {
        id: 2,
        stadium_name: "Bà Rịa",
        team: "Bà Rịa Vũng Tàu",
		logo: "https://vpf.vn/wp-content/uploads/2019/12/Ba-Ria-Vung-Tau.png",
        capacity: 10000,
        latitude: "10.508280906552368",
        longitude: "107.17421702662749",
        league: "V.League 2"
    },
    {
        id: 3,
        stadium_name: "Bình Phước",
        team: "Bình Phước",
		logo: "https://upload.wikimedia.org/wikipedia/en/3/32/Binh_Phuoc_FC_logo.png",
        capacity: 10000,
        latitude: "11.824614114457905",
        longitude: "106.95799179972113",
        league: "V.League 2"
    },
    {
        id: 4,
        stadium_name: "Ninh Thuận",
        team: "Bình Thuận",
		logo: "https://upload.wikimedia.org/wikipedia/en/f/f6/Binh_Thuan_FC_logo.svg",
        capacity: 6000,
        latitude: "11.576735030177076",
        longitude: "108.98156208709382",
        league: "V.League 2"
    },
    {
        id: 5,
        stadium_name: "Hòa Bình",
        team: "Hòa Bình",
		logo: "https://upload.wikimedia.org/wikipedia/en/6/6e/Hoa_Binh_FC_logo.svg",
        capacity: 3600,
        latitude: "20.816983807139138",
        longitude: "105.33989721748566",
        league: "V.League 2"
    },
    {
        id: 6,
        stadium_name: "Tự Do",
        team: "Huế",
		logo: "https://upload.wikimedia.org/wikipedia/en/6/6a/Hue_FC_crest.svg",
        capacity: 16000,
        latitude: "16.467316676037413",
        longitude: "107.59768229088345",
        league: "V.League 2"
    },
    {
        id: 7,
        stadium_name: "Long An",
        team: "Long An",
		logo: "https://upload.wikimedia.org/wikipedia/en/b/b2/Long_An_FC_crest.svg",
        capacity: 20000,
        latitude: "10.536241299427438",
        longitude: "106.40823435003853",
        league: "V.League 2"
    },
    {
        id: 8,
        stadium_name: "Ninh Bình",
        team: "Phù Đổng",
		logo: "https://vpf.vn/wp-content/uploads/2019/01/Phu-Dong.jpg",
        capacity: 20000,
        capacity: 22000,
        latitude: "20.258652754928907",
        longitude: "105.96907322141335",
        league: "V.League 2"
    },
    {
        id: 9,
        stadium_name: "Việt Trì",
        team: "Phú Thọ",
		logo: "https://upload.wikimedia.org/wikipedia/en/2/25/Phu_Tho_FC_logo.svg",
        capacity: 18000,
        latitude: "21.305659356691375",
        longitude: "105.41330041309301",
        league: "V.League 2"
    },
    {
        id: 10,
        stadium_name: "PVF",
        team: "PVF-CAND",
		logo: "https://upload.wikimedia.org/wikipedia/en/8/8d/PVF-CAND_FC_logo.svg",
        capacity: 4500,
        latitude: "20.927647509756895",
        longitude: "105.94567383717047",
        league: "V.League 2"
    },
    {
        id: 11,
        stadium_name: "Tam Kỳ",
        team: "Quảng Nam",
		logo: "https://upload.wikimedia.org/wikipedia/en/c/c3/Quang_Nam_FC_logo.svg",
        capacity: 15000,
        latitude: "15.56031190470625",
        longitude: 108.506636078829,
        league: "V.League 2"
    },
    {
        id: 12,
        stadium_name: "Bình Dương",
        team: "Becamex Bình Dương",
		logo: "https://upload.wikimedia.org/wikipedia/en/d/dd/Logo_of_Becamex_B%C3%ACnh_D%C6%B0%C6%A1ng_FC.svg",
        capacity: 15000,
        latitude: "10.97061250277609",
        longitude: 106.671739592398,
        league: "V.League 1"
    },
    {
        id: 13,
        stadium_name: "Hàng Đẫy",
        team: "Công an Hà Nội",
		logo: "https://upload.wikimedia.org/wikipedia/en/1/10/CAHN_FC_logo.svg",
        capacity: 19500,
        latitude: 21.029845,
        longitude: 105.832973,
        league: "V.League 1"
    },
    {
        id: 14,
        stadium_name: "Thanh Hóa",
        team: "Đông Á Thanh Hóa",
		logo: "https://upload.wikimedia.org/wikipedia/en/c/cb/DATHFC_logo.svg",
        capacity: 14000,
        latitude: "19.79934792237392",
        longitude: "105.7728596019813",
        league: "V.League 1"
    },
    {
        id: 34,
        stadium_name: "Hàng Đẫy",
        team: "Hà Nội",
        capacity: 19500,
		logo: "https://upload.wikimedia.org/wikipedia/en/a/af/HN_FC_Logo.svg",
        latitude: 21.02947444151557,
        longitude: 105.83245380898698,
        league: "V.League 1"
    },
    {
        id: 16,
        stadium_name: "Lạch Tray",
        team: "Hải Phòng",
		logo: "https://upload.wikimedia.org/wikipedia/en/a/ad/Haiphong_FC_Logo_%282022-present%29.svg",
        capacity: 30000,
        latitude: "20.852058201527925",
        longitude: "106.68889632463711",
        league: "V.League 1"
    },
    {
        id: 17,
        stadium_name: "Pleiku",
        team: "Hoàng Anh Gia Lai",
		logo: "https://upload.wikimedia.org/wikipedia/en/f/f1/Hoang_Anh_Gia_Lai_FC_logo.svg",
        capacity: 10000,
        latitude: "13.979184803692522",
        longitude: "108.00498997377393",
        league: "V.League 1"
    },
    {
        id: 18,
        stadium_name: "Hà Tĩnh",
        team: "Hồng Lĩnh Hà Tĩnh",
		logo: "https://upload.wikimedia.org/wikipedia/en/0/09/Hong_Linh_Ha_Tinh_FC_logo.svg",
        capacity: 10000,
        latitude: "18.333343687489286",
        longitude: "105.90785187421314",
        league: "V.League 1"
    },
    {
        id: 19,
        stadium_name: "19/8 Nha Trang",
        team: "Khánh Hòa",
		logo: "https://upload.wikimedia.org/wikipedia/en/5/55/Khanh_Hoa_FC_crest.svg",
        capacity: 18000,
        latitude: "12.250547545924583",
        longitude: "109.19303427108684",
        league: "V.League 1"
    },
    {
        id: 20,
        stadium_name: "Hòa Xuân",
        team: "SHB Đà Nẵng",
		logo: "https://upload.wikimedia.org/wikipedia/en/5/54/SHB_Danang_logo.svg",
        capacity: 20500,
        latitude: "15.999305073490977",
        longitude: "108.22353396968828",
        league: "V.League 1"
    },
    {
        id: 21,
        stadium_name: "Vinh",
        team: "Sông Lam Nghệ An",
		logo: "https://upload.wikimedia.org/wikipedia/en/7/70/SLNA_FC_logo.svg",
        capacity: 20000,
        latitude: "18.669109749748053",
        longitude: "105.6691463654532",
        league: "V.League 1"
    },
    {
        id: 22,
        stadium_name: "Thiên Trường",
        team: "Thép Xanh Nam Định",
		logo: "https://upload.wikimedia.org/wikipedia/en/9/9f/Nam_Dinh_FC_logo.svg",
        capacity: 22000,
        latitude: "20.43650727263646",
        longitude: 106.180005430061,
        league: "V.League 1"
    },
    {
        id: 23,
        stadium_name: "Quy Nhơn",
        team: "TopenLand Bình Định",
		logo: "https://vpf.vn/wp-content/uploads/2018/10/Binh-Dinh.png",
        capacity: 16000,
        latitude: "13.774613029142063",
        longitude: "109.22857180434579",
        league: "V.League 1"
    },
    {
        id: 24,
        stadium_name: "Thống Nhất",
        team: "Hồ Chí Minh City",
		logo: "https://upload.wikimedia.org/wikipedia/en/7/7d/HCMCFC_logo.svg",
        capacity: 15000,
        latitude: "10.76071689230983",
        longitude: 106.66344155246,
        league: "V.League 1"
    },
    {
        id: 35,
        stadium_name: "Hàng Đẫy",
        team: "Viettel",
		logo: "https://upload.wikimedia.org/wikipedia/en/a/a1/Viettel_Football_Club_Logo.svg",
        capacity: 19500,
        latitude: 21.030535945606438,
        longitude: 105.8328400648008,
        league: "V.League 1"
    },
    {
        id: 36,
        stadium_name: "PVF",
        team: "PVF",
		logo: "https://scontent.xx.fbcdn.net/v/t39.30808-6/294638514_5084469361664005_7758219298468274371_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=PasWDYWOIKQAX_5YPhJ&_nc_ht=scontent.fhan3-3.fna&oh=00_AfB-eRTDQgsYdt_-Tw3nI7PX0GUegTp7FDaeFLHhBMXA3w&oe=6500CDC9&_nc_fr=fhan3c03",
        capacity: 4500,
        latitude: 20.92730671164155,
        longitude: 105.94613537028135,
        league: "Second Division"
    },
    {
        id: 38,
        stadium_name: "Tam Kỳ",
        team: "Quảng Nam Youth",
		logo: "https://upload.wikimedia.org/wikipedia/en/c/c3/Quang_Nam_FC_logo.svg",
        capacity: 15000,
        latitude: 15.55957756703429,
        longitude: 108.50668240827746,
        league: "Second Division"
    },
    {
        id: 25,
        stadium_name: "Đà Lạt",
        team: "Lâm Đồng",
		logo: "https://scontent.fhan3-3.fna.fbcdn.net/v/t39.30808-6/343416757_2251247168401412_7486719035364879447_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=KWcmGi4N90sAX9jccE-&_nc_ht=scontent.fhan3-3.fna&oh=00_AfA1qPVup0GnHfGmO1CfMvm2xmkvjxcP_5vgevQM7omU8g&oe=65005A70",
        capacity: 20000,
        latitude: 11.959497011059,
        longitude: 108.432433162482,
        league: "Second Division",
        "undefined": ", "
    },
    {
        id: 26,
        stadium_name: "Quang Ninh Sports Training Center",
        team: "Luxury Hạ Long",
		logo: "https://scontent.fhan3-1.fna.fbcdn.net/v/t39.30808-6/277676498_471438188101199_5171951075031985485_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=KPoZWLwJcfoAX_Hvhg7&_nc_ht=scontent.fhan3-1.fna&oh=00_AfBzPRMzvhRK6zJz_F9n8qpNzhyCuqPSp6qGkjQpYSPijw&oe=64FFE6F9",
        capacity: 0,
        latitude: 20.9877551065303,
        longitude: 106.893251851204,
        league: "Second Division",
        "undefined": ", "
    },
    {
        id: 37,
        stadium_name: "Hòa Xuân",
        team: "SHB Đà Nẵng Youth",
		logo: "https://upload.wikimedia.org/wikipedia/en/5/54/SHB_Danang_logo.svg",
        capacity: 20500,
        latitude: 15.998875955761152,
        longitude: 108.22386716064935,
        league: "Second Division"
    },
    {
        id: 27,
        stadium_name: "Kon Tum",
        team: "Gama Vĩnh Phúc",
		logo: "https://scontent.fhan3-5.fna.fbcdn.net/v/t39.30808-6/335078199_161170210079752_6876348529978155598_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=azjzhF-kIPIAX_K_1CP&_nc_ht=scontent.fhan3-5.fna&oh=00_AfCQiyU-3wcOv3VR-XdSXH_tjXdL9m9Cn7Ny-slcZJciEA&oe=64FFC3B9",
        capacity: 11000,
        latitude: 14.3642690597046,
        longitude: 108.016261850478,
        league: "Second Division"
    },
    {
        id: 28,
        stadium_name: "Buôn Ma Thuột",
        team: "Đắk Lắk",
		logo: "https://scontent.fhan4-3.fna.fbcdn.net/v/t39.30808-6/311113823_419354580382005_5222221498050143330_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=_VcFHSNXc0wAX8SYlkN&_nc_ht=scontent.fhan4-3.fna&oh=00_AfCcDB-JXBfcCsp-wIKZY0DE8U_I_30rKur7_jLbTKAPAQ&oe=650149FD",
        capacity: 20000,
        latitude: 12.6777632788186,
        longitude: 108.042607877036,
        league: "Second Division"
    },
    {
        id: 29,
        stadium_name: "Tân Hiệp",
        team: "Gia Định",
		logo: "https://scontent.fhan4-3.fna.fbcdn.net/v/t39.30808-6/257219040_2131617996995908_5102902037968090337_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=TUlHRWTHz9YAX8VYgyh&_nc_ht=scontent.fhan4-3.fna&oh=00_AfD8tBgwW8JfFAu3Xk_GNzbzB9iZI0u1djQ6SGU8grUIeQ&oe=6500A513",
        capacity: 0,
        latitude: 10.9059623866273,
        longitude: 106.586499054655,
        league: "Second Division"
    },
    {
        id: 30,
        stadium_name: "Đồng Nai",
        team: "Đồng Nai",
		logo: "https://scontent.fhan3-2.fna.fbcdn.net/v/t39.30808-6/279781482_386097900193608_6992583564675830301_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=TgYxXmK43RgAX8vLMk-&_nc_ht=scontent.fhan3-2.fna&oh=00_AfCqjsmNbkjGjczR_RhRJ1-5o9TLXXa1cYkLxJ2cjDuWYQ&oe=6500C1AE",
        capacity: 30000,
        latitude: 10.9617138188138,
        longitude: 106.862879171837,
        league: "Second Division"
    },
    {
        id: 31,
        stadium_name: "Vĩnh Long",
        team: "Vĩnh Long",
		logo: "https://scontent.fhan4-2.fna.fbcdn.net/v/t1.6435-9/181510610_152539550209620_8834614712996183557_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=mjgTylMygxMAX-7Bxs-&_nc_ht=scontent.fhan4-2.fna&oh=00_AfD33Md-ICevL0BbqS_5ohOHFLC7tglkXaYTCpsP5Tgg9A&oe=6522E15B",
        capacity: 10000,
        latitude: 10.2464709557213,
        longitude: 105.961218047575,
        league: "Second Division"
    },
    {
        id: 32,
        stadium_name: "Tiền Giang",
        team: "Tiền Giang",
		logo: "https://scontent.fhan4-3.fna.fbcdn.net/v/t39.30808-6/305387701_448956917286434_4649121521821744651_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=QjnSrWj5pP8AX9-GN3w&_nc_ht=scontent.fhan4-3.fna&oh=00_AfAKJekJtqEbD_ZeaEZz6oqtT_nokKYD1h6QPUMER3fD-A&oe=64FF550D",
        capacity: 15000,
        latitude: 10.3572348025935,
        longitude: 106.351119391105,
        league: "Second Division"
    },
    {
        id: 39,
        stadium_name: "Thống Nhất",
        team: "Hồ Chí Minh City Youth",
		logo: "https://upload.wikimedia.org/wikipedia/commons/9/90/TP_Ho_Chi_Minh_logo.png",
        capacity: 15000,
        latitude: 10.7611389333413,
        longitude: 106.66300039709989,
        league: "Second Division"
    },
    {
        id: 15,
        stadium_name: "Đồng Tháp",
        team: "Đồng Tháp",
		logo: "https://dongthapfc.org/wp-content/uploads/2022/10/Logo-dfc.png",
        capacity: 20000,
        latitude: 10.4646357682763,
        longitude: 105.642697401138,
        league: "Second Division"
    },
    {
        id: 33,
        stadium_name: "Kiên Giang",
        team: "Dugong Kiên Giang",
		logo: "https://scontent.fhan4-1.fna.fbcdn.net/v/t39.30808-6/341709604_1293804951208476_6616081628683169071_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=cu48tKiu_KIAX9GGjwc&_nc_oc=AQksgoLlbidhJC6gU5kTBg78DOeJu4woP0LngjqzxxinfHrdg43cUOy_RK1IDS24EfA&_nc_ht=scontent.fhan4-1.fna&oh=00_AfD_qxp39jU86QLA0lf4e2rZg1fNuPTsl1M0IoPptHmBxQ&oe=64FF8538",
        capacity: 8000,
        latitude: 9.96360173070786,
        longitude: 105.118282981741,
        league: "Second Division"
    }
];