// TODO:
// - Add more tribes:
// - Suquamish


var tribes = {
    type: "FeatureCollection",
    name: "tribes",
    crs: { type: "name", properties: { name: "urn:ogc:def:crs:OGC:1.3:CRS84" } },
    features: [
        {
            type: "Feature",
            properties: {
                name: "Duwamish",
                type: "tribe",
                about: {
                    "photo": "19PqBvS4IGloPcHCPRmPW4yaLlF0bDwYg",
                    "tribeName": "Duwamish",
                    "tribeDesc": "The Duwamish are a Lushootseed-speaking Native American people in western Washington, and the indigenous people of metropolitan Seattle, where they have been living since the end of the last glacial period (c. 8000 BCE, 10,000 years ago). The modern Duwamish descend from at least two separate groups: the Duwamish, and the Hachuamish, being the largest. Traditionally, the Duwuamish spoke a subdialect of the southern dialect of Lushootseed, which is a Salishan dialect continuum that is spoken throught the Puget Sound region of Washington. Duwamish people today are enrolled in several different tribes, including(but not limited to) the federally- recognized Muckleshoot Indian Tribe and Suquamish Tribe, and the epynomous Duwamish Tribe, which has not received federal recognition."
                },
                artifacts: [
                    {
                        "photo": "1tUNkkdc6E9sBapR_PpiBTOSUgyf1Cst8",
                        "blurb": "The Duwamish People are represented by the Killer Whale, the Eagle, and the Raven."
                    },
                    {
                        "photo": "1MaVrOeJwMVUeoFgs8rIwkdPPtpJ48RPC",
                        "blurb": "Traditional fire-making kit."
                    },
                    {
                        "photo": "18DoHcApBe4DVKYES1bsE4vydigdyk0TS",
                        "blurb": "This was a dual-purposed carving tool used often to either carve wood and build tools, or cut up the food to be cooked within the kitchen."
                    }
                ],
                exhibit: {
                    "photo": "171n6AcpbVima3XhCVpajc0-ayqRwn8la",
                    "location": "MOHAI 2nd Floor<br>True Northwest: The Seattle Journey"
                }
            },
            geometry: { type: "Point", coordinates: [-122.335, 47.526] }
        },
        {
            type: "Feature",
            properties: {
                name: "Upper Skagit",
                type: "tribe",
                about: {
                    "photo": "1HzQ6uqitCZWfqa-p1to13d9QjnAYbol1",
                    "tribeName": "Upper Skagit",
                    "tribeDesc": "The Skagit (/ˈskædʒɪt/ SKAJ-it) Lushootseed: sqaǰətabš (SKAH-juh-tahbsh) (″People Who Hide″ or ″People Who Run and Hide Upriver [the Skagit River]″) refers to either of two modern-day tribes of Lushootseed-speaking Native American people living in the state of Washington: the Upper Skagit tribe, and the Lower Skagit band of the Swinomish tribe. The Upper Skagit and Lower Skagit both speak subdialects of Northern Lushootseed. The Upper Skagit speak Skagit. As of 1977, there were an estimated 100 speakers of Skagit. <br><br> The Upper Skagit Tribe, an indigenous nation located in the Pacific Northwest, has a rich and intricate history that spans thousands of years. Their ancestral lands encompass the scenic Skagit River and the breathtaking Cascade Mountains, which have played a crucial role in shaping their culture and way of life. The Upper Skagit Tribe possesses a deep connection to the land, relying on the river's salmon runs, the forests' resources, and the mountains' protection. Throughout their history, they have weathered challenges brought by European settlement and the subsequent impacts on their sovereignty and cultural practices. Despite these adversities, the Upper Skagit Tribe has persevered, working diligently to reclaim and revitalize their ancestral language, traditions, and ceremonies. Today, they continue to honor their heritage, promote cultural preservation, engage in environmental stewardship, and foster community development, ensuring a vibrant future for their people while maintaining a profound connection to their ancestral lands."
                },
                artifacts: [
                    {
                        "photo": "1ipaVXQWXpBsi7U0QIBHi16JtzUhY0Jmq",
                        "blurb": "The Skagit atlatl, an ancient spear-throwing device, provides an intriguing glimpse into the artistic power, spiritual beliefs and technology of Salish people living in the early years of the first millennium."
                    }
                ],
                exhibit: {
                    "photo": "171n6AcpbVima3XhCVpajc0-ayqRwn8la",
                    "location": "MOHAI 2nd Floor<br>True Northwest: The Seattle Journey"
                }
            },
            geometry: {
                type: "Point", coordinates: [-121.855, 48.5]
            }
        },
        {
            type: "Feature",
            properties: {
                name: "Lower Skagit",
                type: "tribe",
                about: {
                    "photo": "1HzQ6uqitCZWfqa-p1to13d9QjnAYbol1",
                    "tribeName": "Lower Skagit",
                    "tribeDesc": "<b>Note: The picture on the right is specific to the Upper Skagit tribe.</b><br><br>The Skagit (/ˈskædʒɪt/ SKAJ-it) Lushootseed: sqaǰətabš (SKAH-juh-tahbsh) (″People Who Hide″ or ″People Who Run and Hide Upriver [the Skagit River]″) refers to either of two modern-day tribes of Lushootseed-speaking Native American people living in the state of Washington: the Upper Skagit tribe, and the Lower Skagit band of the Swinomish tribe. The Upper Skagit and Lower Skagit both speak subdialects of Northern Lushootseed. As of 1977, there were an estimated 100 speakers of Skagit.[1] The Lower Skagit speak Swinomish, the subdialect of the Swinomish people. Traditionally, Skagit referred only to the Lower Skagit on Whidbey Island.However, after colonization, the word Skagit was used to refer to both groups. <br><br> The Lower Skagit Tribe, a sovereign Native American nation, shares a parallel history with their Upper Skagit counterparts in the Pacific Northwest. Inhabiting the lower reaches of the Skagit River, their ancestral lands have been a source of sustenance and inspiration for generations. Like the Upper Skagit Tribe, the Lower Skagit Tribe has faced challenges due to European exploration and settlement, leading to disruptions in their traditional way of life. Nevertheless, they have remained resilient, preserving their cultural heritage and adapting to the changing times. The Lower Skagit Tribe holds deep reverence for their native language, striving to keep it alive through language revitalization efforts. They maintain a strong connection to their ancestral lands, engaging in environmental conservation and sustainable practices. With a focus on community development and the well-being of their people, the Lower Skagit Tribe is a testament to the strength and resilience of Native American cultures in the face of adversity."
                },
                artifacts: [
                    {
                        "photo": "1ipaVXQWXpBsi7U0QIBHi16JtzUhY0Jmq",
                        "blurb": "The Skagit atlatl, an ancient spear-throwing device, provides an intriguing glimpse into the artistic power, spiritual beliefs and technology of Salish people living in the early years of the first millennium."
                    }
                ],
                exhibit: {
                    "photo": "171n6AcpbVima3XhCVpajc0-ayqRwn8la",
                    "location": "MOHAI 2nd Floor<br>True Northwest: The Seattle Journey"
                }
            },
            geometry: {
                type: "Point", coordinates: [-122.604, 48.2]
            }
        },
        {
            type: "Feature",
            properties: {
                name: "Stillaguamish",
                type: "tribe",
                about: {
                    "photo": "1DpZ7G3lS21LLXn3WvJGwwKpGb3h00JtM",
                    "tribeName": "Stillaguamish",
                    "tribeDesc": "The Stillaguamish people, belonging to the Coast Salish culture, have a rich history intertwined with the lands surrounding the Stillaguamish River in what is now Washington State. Their cultural heritage is deeply rooted in the Pacific Northwest region. The Stillaguamish tribe, like other Coast Salish tribes, spoke the Lushootseed language. For generations, they flourished along the river, relying on the abundant resources provided by the river, forests, and coastal areas. The Stillaguamish people possessed a deep spiritual connection to the natural world and practiced sustainable resource management. They had a complex social structure with a strong emphasis on kinship ties and communal living. They excelled in traditional arts, such as basket weaving, carving, and intricate beadwork, reflecting their cultural richness and artistic talents. With the arrival of European settlers, the Stillaguamish people faced numerous challenges, including the loss of their ancestral lands and cultural disruption. Despite these adversities, the Stillaguamish tribe has demonstrated resilience by actively preserving their cultural traditions, engaging in language revitalization efforts, and working towards the protection of their sovereignty and ancestral lands. Today, the Stillaguamish people continue to embrace their cultural heritage, advocate for their rights, and nurture a sense of community, ensuring a vibrant future for generations to come."
                },
                artifacts: [
                    {
                        "photo": "1UwXYnfkdrSl8AAaYGU2Ilvv6xUoi9Fku",
                        "blurb": "Canoes of the stillaguamish tribe were carved from cedar."
                    }
                ],
                exhibit: {
                    "photo": "171n6AcpbVima3XhCVpajc0-ayqRwn8la",
                    "location": "MOHAI 2nd Floor<br>True Northwest: The Seattle Journey"
                }
            },
            geometry: {
                type: "Point", coordinates: [-122.083, 48.212]
            }
        },
        {
            type: "Feature",
            properties: {
                name: "Snohomish",
                type: "tribe",
                about: {
                    "photo": "1JOMkqNVkgv-0qiXbI-Bt-ReZ_KN1kZwL",
                    "tribeName": "Snohomish",
                    "tribeDesc": "The Snohomish tribe, belonging to the Coast Salish culture, has a rich history deeply rooted in the Pacific Northwest region of what is now Washington State. They were part of the larger Salish-speaking tribes that inhabited the coastal areas and inland waterways. The Snohomish people thrived along the Snohomish River and its surrounding lands for centuries, relying on the abundant natural resources provided by the river, forests, and coastal areas. Their culture was characterized by a deep respect for nature, communal living, and intricate artistic traditions, including basketry and woodcarving. They had a complex social structure with strong kinship ties and a robust oral tradition, passing down their history, customs, and stories from one generation to the next. However, with the arrival of European settlers in the 19th century, the Snohomish tribe faced significant challenges, including the loss of their ancestral lands and disruptions to their way of life. Despite these hardships, the tribe has worked diligently to preserve their cultural heritage and reclaim their sovereignty, actively engaging in cultural revitalization efforts, language preservation, and fostering a sense of community pride and resilience. Today, the Snohomish tribe continues to thrive, carrying their traditions forward and advocating for the rights and well-being of their people."
                },
                artifacts: [
                    {
                        "photo": "1CaXavgpft7P2ZHKDR9S_iU9A2gHKbwR3",
                        "blurb": "William we ah lup, a Salish man smoking salmon."
                    }
                ],
                exhibit: {
                    "photo": "171n6AcpbVima3XhCVpajc0-ayqRwn8la",
                    "location": "MOHAI 2nd Floor<br>True Northwest: The Seattle Journey"
                }
            },
            geometry: {
                type: "Point", coordinates: [-122.190, 48.004]
            }
        },
        {
            type: "Feature",
            properties: {
                name: "Skykomish",
                type: "tribe",
                about: {
                    "photo": "1IYV217MyIHl-pY0AfCN3rfn8g2KAgLJI",
                    "tribeName": "Skykomish",
                    "tribeDesc": "The Skykomish tribe, also known as the Skykomish Indian Tribe, is a Native American tribe with a rich history rooted in the Pacific Northwest region of the United States. The tribe's ancestral lands encompassed the Skykomish River Valley, situated in present-day Washington State. For centuries, the Skykomish people thrived in harmony with the natural environment, relying on the abundant resources provided by the lush forests, bountiful rivers, and diverse wildlife of the region. They developed a deep spiritual connection to the land, with traditions and customs deeply tied to their natural surroundings. The arrival of European explorers and settlers in the 19th century brought significant changes to the Skykomish tribe's way of life. The signing of treaties with the United States government, including the Point Elliott Treaty of 1855, led to the establishment of reservations and the loss of much of their ancestral lands. Despite the challenges and hardships faced, the Skykomish tribe has persevered, maintaining their cultural heritage and continuing to advocate for their rights, sovereignty, and the preservation of their ancestral lands. Today, the Skykomish tribe strives to foster a strong sense of community, revitalize their traditional practices, and ensure a vibrant future for their people."
                },
                artifacts: [
                ],
                exhibit: {
                    "photo": "171n6AcpbVima3XhCVpajc0-ayqRwn8la",
                    "location": "MOHAI 2nd Floor<br>True Northwest: The Seattle Journey"
                }
            },
            geometry: {
                type: "Point", coordinates: [-121.791, 47.861]
            }
        },
        {
            type: "Feature",
            properties: {
                name: "Snoqualmie",
                type: "tribe",
                about: {
                    "photo": "1BxJ52BQuooAZjVLdPpiqceaUKJCF7R34",
                    "tribeName": "Snoqualmie",
                    "tribeDesc": "The Snoqualmie Tribe, an indigenous nation from the Pacific Northwest, holds a rich cultural legacy deeply tied to the lands surrounding the Snoqualmie River and the Cascade Mountains in Washington State. For centuries, the Snoqualmie people thrived as skilled hunters, gatherers, and fishermen, relying on the region's abundant natural resources. They embraced a deep spiritual connection to their ancestral lands and maintained a harmonious relationship with the environment. European settlement and forced assimilation policies brought challenges to their way of life, but the Snoqualmie Tribe has demonstrated resilience, preserving their cultural heritage and traditions. Today, they actively engage in cultural revitalization efforts, environmental stewardship, and community development, ensuring the strength and vitality of their people and perpetuating the rich cultural tapestry of the Pacific Northwest."
                },
                artifacts: [
                ],
                exhibit: {
                    "photo": "171n6AcpbVima3XhCVpajc0-ayqRwn8la",
                    "location": "MOHAI 2nd Floor<br>True Northwest: The Seattle Journey"
                }
            },
            geometry: {
                type: "Point", coordinates: [-121.930, 47.648]
            }
        },
        {
            type: "Feature",
            properties: {
                name: "Sammamish",
                type: "tribe",
                about: {
                    "photo": "11Y1D0o0shR9Ut3CpyleUyUHtFER3gpqj",
                    "tribeName": "Sammamish",
                    "tribeDesc": "The Sammamish Tribe, a Native American community originating from the Puget Sound region of Washington State, has a rich and enduring history deeply rooted in the lands surrounding Lake Sammamish. For countless generations, they thrived as skilled hunters, gatherers, and fishers, relying on the diverse resources of the forests, rivers, and the lake itself. The Sammamish people possessed a deep connection to their ancestral lands, fostering a profound respect for nature and a harmonious relationship with the environment. European contact brought significant challenges to their way of life, but the Sammamish Tribe has persevered, maintaining their cultural heritage and traditions. Today, they actively engage in cultural revitalization efforts, community development, and environmental stewardship, ensuring a vibrant future for their people and the preservation of their unique heritage within the vibrant tapestry of the Pacific Northwest."
                },
                artifacts: [
                    {
                        "photo": "1cYqWgLbT0Cj7V9ZSKAKF0yC6prlmpbkR",
                        "blurb": "This canoe is from the south end of Lake Sammamish and made in the late 1890s. It was traded to a settler family that kept it in a barn and cut notches on the side for their paddles and painted it."
                    }
                ],
                exhibit: {
                    "photo": "171n6AcpbVima3XhCVpajc0-ayqRwn8la",
                    "location": "MOHAI 2nd Floor<br>True Northwest: The Seattle Journey"
                }
            },
            geometry: {
                type: "Point", coordinates: [-122.049, 47.574]
            }
        },
        {
            type: "Feature",
            properties: {
                name: "Chimakum",
                type: "tribe",
                about: {
                    "photo": "1skOIEXZ8x81ointUwZ-8LwN_CrfCgHc-",
                    "tribeName": "Chimakum",
                    "tribeDesc": "The Chimakum Tribe, an indigenous group of the Olympic Peninsula in Washington State, holds a vital place in the region's history. Skilled hunters, gatherers, and fishermen, they flourished along the eastern coast, relying on the abundant resources of the land and sea. With complex social structures, they crafted intricate artwork, including canoes, totem poles, and ceremonial regalia. Sadly, the arrival of European settlers in the 18th and 19th centuries led to devastating consequences, resulting in the tribe's decline and ultimate extinction. However, the Chimakum Tribe's cultural legacy lives on through archaeological discoveries, historical records, and ongoing efforts to preserve their heritage, ensuring their significant contributions to the indigenous tapestry of the Pacific Northwest are recognized and remembered."
                },
                artifacts: [
                    {
                        "photo": "1NHU-5s_Lrg-QDgm6u3WZzQaLIcNsR8e0",
                        "blurb": "Photograph of a Chimakum woman by Edward S. Curtis."
                    }
                ],
                exhibit: {
                    "photo": "171n6AcpbVima3XhCVpajc0-ayqRwn8la",
                    "location": "MOHAI 2nd Floor<br>True Northwest: The Seattle Journey"
                }
            },
            geometry: {
                type: "Point", coordinates: [-122.738, 47.967]
            }
        },
        {
            type: "Feature",
            properties: {
                name: "S'Klallam",
                type: "tribe",
                about: {
                    "photo": "1wDOj00A2RRZDPBsquCSLnj_7ckEy1ixQ",
                    "tribeName": "S'Klallam",
                    "tribeDesc": "Inhabiting this area for more than 10,000 years, the S’Klallams possessed a rich social and religious culture based on the abundant natural resources of the Northwest Coast. They moved from village to village in their traditional territory during the spring, summer and fall, for fishing and resource gathering, and settled into more permanent longhouses for the winter months. The inhabitants hunted game and subsisted on the wealth of shellfish, herring, and salmon. They were craftspeople skilled in woodcarving and basket making, and they fashioned ceremonial masks, serving dishes and utensils, and storage boxes from cedar, and woven mats, rope, and clothing from cedar bark."
                },
                artifacts: [
                    {
                        "photo": "1AAd23-RLS3-1QUTzrEcBheJ7vqt7NoKN",
                        "blurb": "A photograph of drums used during Intertribal protocols."
                    },
                    {
                        "photo": "1G3bbzx3ptZQU46-h60OwPmzvcYBorHO2",
                        "blurb": "Carved Canoe made by people of the Jamestown S’klallam tribe."
                    }
                ],
                exhibit: {
                    "photo": "171n6AcpbVima3XhCVpajc0-ayqRwn8la",
                    "location": "MOHAI 2nd Floor<br>True Northwest: The Seattle Journey"
                }
            },
            geometry: {
                type: "Point", coordinates: [-123.197, 48.090]
            }
        },
        {
            type: "Feature",
            properties: {
                name: "Skokomish",
                type: "tribe",
                about: {
                    "photo": "1EPuNGPoZv1hK57I-4hLszbENoP3NTW7m",
                    "tribeName": "Skokomish",
                    "tribeDesc": "What is now known as the Skokomish Tribe actually was primarily composed of Twana Indians, a Salishan people whose aboriginal territory encompassed the Hood Canal drainage basin in western Washington State. The tribe’s first recorded direct contact with European culture came in 1792 and resulted in a devastating smallpox epidemic that took the lives of many. There were nine Twana communities, the largest being known as the Skokomish, or “big river people.” The Twana subsisted on hunting, fishing and gathering activities, practicing a nomadic life-style during warmer weather and resettling at permanent sites during the winter. Twana descendants live on the Skokomish Reservation, and all have become known as the Skokomish Tribe."
                },
                artifacts: [
                    {
                        "photo": "1S09ceJSrAFSEnZMGOEznDby9U7YD_oYb",
                        "blurb": "Skokomish twined basket of red cedar bark, bear grass, cattail leaf, ca. 1890."
                    }
                ],
                exhibit: {
                    "photo": "171n6AcpbVima3XhCVpajc0-ayqRwn8la",
                    "location": "MOHAI 2nd Floor<br>True Northwest: The Seattle Journey"
                }
            },
            geometry: {
                type: "Point", coordinates: [-123.216, 47.383]
            }
        },
        {
            type: "Feature",
            properties: {
                name: "Squaxin",
                type: "tribe",
                about: {
                    "photo": "1aHMnEnG9GLhV4e-7ukCwd567NXqWWbrI",
                    "tribeName": "Squaxin",
                    "tribeDesc": "The Squaxin tribe, belonging to the Coast Salish culture, has a rich history deeply rooted in the Puget Sound region of what is now Washington State. They are part of the larger Salish-speaking tribes that inhabited the coastal areas and inland waterways. The Squaxin people spoke the Lushootseed language, which was shared among many Coast Salish tribes. For countless generations, the Squaxin tribe thrived in harmony with the natural environment, relying on the diverse resources provided by the forests, rivers, and ocean. They had a deeply spiritual connection to the land, and their cultural practices and traditions were closely tied to the cycles of nature. The Squaxin tribe exhibited a complex social structure with a strong emphasis on communal living and a profound respect for their ancestors and elders. They possessed a rich artistic tradition, excelling in woodcarving, basketry, and intricate beadwork. With the arrival of European settlers, the Squaxin people faced significant challenges, including the loss of their ancestral lands and disruption of their way of life. However, they have persevered, actively working to preserve their cultural heritage, promote tribal sovereignty, and advocate for the well-being of their community. Today, the Squaxin tribe continues to honor their traditions, engage in cultural revitalization efforts, and maintain a strong sense of cultural identity and unity."
                },
                artifacts: [
                    {
                        "photo": "1VHzjJM01icf508cYMAIxz6j7rvUre38_",
                        "blurb": "This cedar bough basket was one of several recovered from an ancient Squi-Aitl aquatic resources processing site near the head of Eld Inlet."
                    }
                ],
                exhibit: {
                    "photo": "171n6AcpbVima3XhCVpajc0-ayqRwn8la",
                    "location": "MOHAI 2nd Floor<br>True Northwest: The Seattle Journey"
                }
            },
            geometry: {
                type: "Point", coordinates: [-123.022, 47.061]
            }
        },
        {
            type: "Feature",
            properties: {
                name: "Nisqually",
                type: "tribe",
                about: {
                    "photo": "1StIm6bfccDzKV2U6x_4B_pp1U-TQ2kNl",
                    "tribeName": "Nisqually",
                    "tribeDesc": "The Nisqually tribe, belonging to the Coast Salish culture, has a rich history deeply connected to the lands surrounding the Nisqually River in what is now Washington State. They are part of the larger Salish-speaking tribes that inhabited the coastal areas and inland waterways of the Pacific Northwest. The Nisqually people spoke the Lushootseed language, which was shared among several Coast Salish tribes. For countless generations, the Nisqually tribe thrived in harmony with the natural environment, relying on the abundant resources provided by the river, forests, and coastal areas. Their culture emphasized a deep reverence for nature, communal living, and a strong sense of kinship. The Nisqually people developed rich artistic traditions, excelling in basket weaving, woodcarving, and traditional storytelling. With the arrival of European settlers, the Nisqually tribe faced significant challenges, including the loss of their ancestral lands and disruption of their way of life. They endured forced relocations and encroachments on their sovereignty. Despite these hardships, the Nisqually tribe has shown resilience, actively working to preserve their cultural heritage, revitalize their language, and protect their rights and lands. Today, the Nisqually tribe continues to thrive, maintaining a deep connection to their traditions, advocating for their community, and ensuring a prosperous future for their people."
                },
                artifacts: [
                    {
                        "photo": "1_fRkyLrqRZ63etmwUVFmgguLbefQFWuW",
                        "blurb": "Woven cedar work from the Nisqually tribe."
                    }
                ],
                exhibit: {
                    "photo": "171n6AcpbVima3XhCVpajc0-ayqRwn8la",
                    "location": "MOHAI 2nd Floor<br>True Northwest: The Seattle Journey"
                }
            },
            geometry: {
                type: "Point", coordinates: [-122.702, 47.053]
            }
        },
        {
            type: "Feature",
            properties: {
                name: "Puyallup",
                type: "tribe",
                about: {
                    "photo": "1pw6JJ_a4ApPPt3EBIeUplEx_MEEkykWk",
                    "tribeName": "Puyallup",
                    "tribeDesc": "The Puyallup tribe, belonging to the Coast Salish culture, has a rich history deeply rooted in the Puget Sound region of what is now Washington State. They are part of the larger Salish-speaking tribes that inhabited the coastal areas and inland waterways of the Pacific Northwest. The Puyallup people spoke the Lushootseed language, which was shared among several Coast Salish tribes. For countless generations, the Puyallup tribe thrived in harmony with the natural environment, relying on the abundant resources provided by the river, forests, and coastal areas. Their culture was characterized by a deep connection to the land and a profound respect for the cycles of nature. The Puyallup people engaged in sustainable resource management, demonstrating a strong sense of stewardship. They had a rich artistic tradition, excelling in basket weaving, woodcarving, and intricate beadwork. With the arrival of European settlers, the Puyallup tribe faced significant challenges, including the loss of their ancestral lands and disruption of their way of life. They endured forced relocations and battles for sovereignty. However, the Puyallup tribe has shown resilience, actively working to preserve their cultural heritage, revitalize their language, and assert their rights and self-governance. Today, the Puyallup tribe continues to thrive, embracing their traditions, advocating for social and environmental justice, and nurturing a strong sense of community for future generations."
                },
                artifacts: [
                    {
                        "photo": "1-WDrbd8wbz_cyJqAXTgNuyVTycXCJD13",
                        "blurb": "This basket was made by members of the Puyallup Tribe in the early twentieth century. It is part of the Karshner Center's extensive collection of American Indian baskets."
                    }
                ],
                exhibit: {
                    "photo": "171n6AcpbVima3XhCVpajc0-ayqRwn8la",
                    "location": "MOHAI 2nd Floor<br>True Northwest: The Seattle Journey"
                }
            },
            geometry: {
                type: "Point", coordinates: [-122.420, 47.226]
            }
        },
        {
            type: "Feature",
            properties: {
                name: "Suquamish",
                type: "tribe",
                about: {
                    "photo": "1ZwxVh9CnlU9vzuIoVicwNDT7zvp_YBN5",
                    "tribeName": "Suquamish",
                    "tribeDesc": "The Suquamish tribe, belonging to the Coast Salish culture, has a rich history deeply rooted in the Puget Sound region of what is now Washington State. They are part of the larger Salish-speaking tribes that inhabited the coastal areas and inland waterways of the Pacific Northwest. The Suquamish people spoke the Lushootseed language, which was shared among several Coast Salish tribes. For countless generations, the Suquamish tribe thrived in harmony with the natural environment, relying on the abundant resources provided by the waters, forests, and estuaries. Their culture was deeply intertwined with the land and sea, and they had a profound respect for nature and the interconnection of all living beings. The Suquamish people had a rich artistic tradition, excelling in basket weaving, woodcarving, and traditional dances. They possessed a complex social structure, with a strong emphasis on kinship and communal living. With the arrival of European settlers, the Suquamish tribe faced significant challenges, including the loss of their ancestral lands, forced relocations, and cultural disruptions. However, they have persevered, actively working to preserve their cultural heritage, revitalize their language, and assert their sovereignty and self-governance. Today, the Suquamish tribe continues to thrive, honoring their traditions, advocating for their community, and serving as stewards of the land and waterways for future generations."
                },
                artifacts: [
                    {
                        "photo": "1YQLxNW65sjU26lba95oeKQVzSwrpOXg2",
                        "blurb": "Suquamish Summer Cattail Mat Shelters."
                    },
                    {
                        "photo": "12PX8D_RvOKgJ6GN-B0lN2XBQcscUCBHr",
                        "blurb": "Suquamish basket weavers weaving baskets."
                    }
                ],
                exhibit: {
                    "photo": "171n6AcpbVima3XhCVpajc0-ayqRwn8la",
                    "location": "MOHAI 2nd Floor<br>True Northwest: The Seattle Journey"
                }
            },
            geometry: {
                type: "Point", coordinates: [-122.613, 47.661]
            }
        },

    ]
}