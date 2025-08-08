// Enhanced font styles for fancy text generation with proper Unicode mappings
export const fancyTextStyles = [
  // Mathematical Alphanumeric Symbols
  {
    name: "Bold",
    key: "bold",
    sample: "𝐇𝐞𝐥𝐥𝐨",
    lowercase: "𝐚𝐛𝐜𝐝𝐞𝐟𝐠𝐡𝐢𝐣𝐤𝐥𝐦𝐧𝐨𝐩𝐪𝐫𝐬𝐭𝐮𝐯𝐰𝐱𝐲𝐳",
    uppercase: "𝐀𝐁𝐂𝐃𝐄𝐅𝐆𝐇𝐈𝐉𝐊𝐋𝐌𝐍𝐎𝐏𝐐𝐑𝐒𝐓𝐔𝐕𝐖𝐗𝐘𝐙",
    numbers: "𝟎𝟏𝟐𝟑𝟒𝟓𝟔𝟕𝟖𝟗"
  },
  {
    name: "Italic",
    key: "italic",
    sample: "𝐻𝑒𝓁𝓁𝑜",
    lowercase: "𝒶𝒷𝒸𝒹𝑒𝒻𝑔𝒽𝒾𝒿𝓀𝓁𝓂𝓃𝑜𝓅𝓆𝓇𝓈𝓉𝓊𝓋𝓌𝓍𝓎𝓏",
    uppercase: "𝒜𝐵𝒞𝒟𝐸𝐹𝒢𝐻𝐼𝒥𝒦𝐿𝑀𝒩𝒪𝒫𝒬𝑅𝒮𝒯𝒰𝒱𝒲𝒳𝒴𝒵",
    numbers: "0123456789"
  },
  {
    name: "Bold Italic",
    key: "bold_italic",
    sample: "𝑯𝒆𝒍𝒍𝒐",
    lowercase: "𝒂𝒃𝒄𝒅𝒆𝒇𝒈𝒉𝒊𝒋𝒌𝒍𝒎𝒏𝒐𝒑𝒒𝒓𝒔𝒕𝒖𝒗𝒘𝒙𝒚𝒛",
    uppercase: "𝑨𝑩𝑪𝑫𝑬𝑭𝑮𝑯𝑰𝑱𝑲𝑳𝑴𝑵𝑶𝑷𝑸𝑹𝑺𝑻𝑼𝑽𝑾𝑿𝒀𝒁",
    numbers: "0123456789"
  },
  {
    name: "Script",
    key: "script",
    sample: "𝐻𝑒𝓁𝓁𝑜",
    lowercase: "𝒶𝒷𝒸𝒹𝑒𝒻𝑔𝒽𝒾𝒿𝓀𝓁𝓂𝓃𝑜𝓅𝓆𝓇𝓈𝓉𝓊𝓋𝓌𝓍𝓎𝓏",
    uppercase: "𝒜𝐵𝒞𝒟𝐸𝐹𝒢𝐻𝐼𝒥𝒦𝐿𝑀𝒩𝒪𝒫𝒬𝑅𝒮𝒯𝒰𝒱𝒲𝒳𝒴𝒵",
    numbers: "0123456789"
  },
  {
    name: "Script Bold",
    key: "script_bold",
    sample: "𝓗𝓮𝓵𝓵𝓸",
    lowercase: "𝓪𝓫𝓬𝓭𝓮𝓯𝓰𝓱𝓲𝓳𝓴𝓵𝓶𝓷𝓸𝓹𝓺𝓻𝓼𝓽𝓾𝓿𝔀𝔁𝔂𝔃",
    uppercase: "𝓐𝓑𝓒𝓓𝓔𝓕𝓖𝓗𝓘𝓙𝓚𝓛𝓜𝓝𝓞𝓟𝓠𝓡𝓢𝓣𝓤𝓥𝓦𝓧𝓨𝓩",
    numbers: "0123456789"
  },
  {
    name: "Gothic",
    key: "gothic",
    sample: "𝔥𝔢𝔩𝔩𝔬",
    lowercase: "𝔞𝔟𝔠𝔡𝔢𝔣𝔤𝔥𝔦𝔧𝔨𝔩𝔪𝔫𝔬𝔭𝔮𝔯𝔰𝔱𝔲𝔳𝔴𝔵𝔶𝔷",
    uppercase: "𝔄𝔅ℭ𝔇𝔈𝔉𝔊ℌℑ𝔍𝔎𝔏𝔐𝔑𝔒𝔓𝔔ℜ𝔖𝔗𝔘𝔙𝔚𝔛𝔜ℨ",
    numbers: "0123456789"
  },
  {
    name: "Gothic Bold",
    key: "gothic_bold",
    sample: "𝖍𝖊𝖑𝖑𝖔",
    lowercase: "𝖆𝖇𝖈𝖉𝖊𝖋𝖌𝖍𝖎𝖏𝖐𝖑𝖒𝖓𝖔𝖕𝖖𝖗𝖘𝖙𝖚𝖛𝖜𝖝𝖞𝖟",
    uppercase: "𝕬𝕭𝕮𝕯𝕰𝕱𝕲𝕳𝕴𝕵𝕶𝕷𝕸𝕹𝕺𝕻𝕼𝕽𝕾𝕿𝖀𝖁𝖂𝖃𝖄𝖅",
    numbers: "0123456789"
  },
  {
    name: "Double Struck",
    key: "double_struck",
    sample: "ℍ𝕖𝕝𝕝𝕠",
    lowercase: "𝕒𝕓𝕔𝕕𝕖𝕗𝕘𝕙𝕚𝕛𝕜𝕝𝕞𝕟𝕠𝕡𝕢𝕣𝕤𝕥𝕦𝕧𝕨𝕩𝕪𝕫",
    uppercase: "𝔸𝔹ℂ𝔻𝔼𝔽𝔾ℍ𝕀𝕁𝕂𝕃𝕄ℕ𝕆ℙℚℝ𝕊𝕋𝕌𝕍𝕎𝕏𝕐ℤ",
    numbers: "𝟘𝟙𝟚𝟛𝟜𝟝𝟞𝟟𝟠𝟡"
  },
  {
    name: "Sans Serif",
    key: "sans_serif",
    sample: "𝖧𝖾𝗅𝗅𝗈",
    lowercase: "𝖺𝖻𝖼𝖽𝖾𝖿𝗀𝗁𝗂𝗃𝗄𝗅𝗆𝗇𝗈𝗉𝗊𝗋𝗌𝗍𝗎𝗏𝗐𝗑𝗒𝗓",
    uppercase: "𝖠𝖡𝖢𝖣𝖤𝖥𝖦𝖧𝖨𝖩𝖪𝖫𝖬𝖭𝖮𝖯𝖰𝖱𝖲𝖳𝖴𝖵𝖶𝖷𝖸𝖹",
    numbers: "𝟢𝟣𝟤𝟥𝟦𝟧𝟨𝟩𝟪𝟫"
  },
  {
    name: "Sans Serif Bold",
    key: "sans_serif_bold",
    sample: "𝗛𝗲𝗹𝗹𝗼",
    lowercase: "𝗮𝗯𝗰𝗱𝗲𝗳𝗴𝗵𝗶𝗷𝗸𝗹𝗺𝗻𝗼𝗽𝗾𝗿𝘀𝘁𝘂𝘃𝘄𝘅𝘆𝘇",
    uppercase: "𝗔𝗕𝗖𝗗𝗘𝗙𝗚𝗛𝗜𝗝𝗞𝗟𝗠𝗡𝗢𝗣𝗤𝗥𝗦𝗧𝗨𝗩𝗪𝗫𝗬𝗭",
    numbers: "𝟬𝟭𝟮𝟯𝟰𝟱𝟲𝟳𝟴𝟵"
  },
  {
    name: "Sans Serif Italic",
    key: "sans_serif_italic",
    sample: "𝘏𝘦𝘭𝘭𝘰",
    lowercase: "𝘢𝘣𝘤𝘥𝘦𝘧𝘨𝘩𝘪𝘫𝘬𝘭𝘮𝘯𝘰𝘱𝘲𝘳𝘴𝘵𝘶𝘷𝘸𝘹𝘺𝘻",
    uppercase: "𝘈𝘉𝘊𝘋𝘌𝘍𝘎𝘏𝘐𝘑𝘒𝘓𝘔𝘕𝘖𝘗𝘘𝘙𝘚𝘛𝘜𝘝𝘞𝘟𝘠𝘡",
    numbers: "0123456789"
  },
  {
    name: "Sans Serif Bold Italic",
    key: "sans_serif_bold_italic",
    sample: "𝙃𝙚𝙡𝙡𝙤",
    lowercase: "𝙖𝙗𝙘𝙙𝙚𝙛𝙜𝙝𝙞𝙟𝙠𝙡𝙢𝙣𝙤𝙥𝙦𝙧𝙨𝙩𝙪𝙫𝙬𝙭𝙮𝙯",
    uppercase: "𝘼𝘽𝘾𝘿𝙀𝙁𝙂𝙃𝙄𝙅𝙆𝙇𝙈𝙉𝙊𝙋𝙌𝙍𝙎𝙏𝙐𝙑𝙒𝙓𝙔𝙕",
    numbers: "0123456789"
  },
  {
    name: "Monospace",
    key: "monospace",
    sample: "𝙷𝚎𝚕𝚕𝚘",
    lowercase: "𝚊𝚋𝚌𝚍𝚎𝚏𝚐𝚑𝚒𝚓𝚔𝚕𝚖𝚗𝚘𝚙𝚚𝚛𝚜𝚝𝚞𝚟𝚠𝚡𝚢𝚣",
    uppercase: "𝙰𝙱𝙲𝙳𝙴𝙵𝙶𝙷𝙸𝙹𝙺𝙻𝙼𝙽𝙾𝙿𝚀𝚁𝚂𝚃𝚄𝚅𝚆𝚇𝚈𝚉",
    numbers: "𝟶𝟷𝟸𝟹𝟺𝟻𝟼𝟽𝟾𝟿"
  },

  // Enclosed Characters
  {
    name: "Circled",
    key: "circled",
    sample: "Ⓗⓔⓛⓛⓞ",
    lowercase: "ⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩ",
    uppercase: "ⒶⒷⒸⒹⒺⒻⒼⒽⒾⒿⓀⓁⓂⓃⓄⓅⓆⓇⓈⓉⓊⓋⓌⓍⓎⓏ",
    numbers: "⓪①②③④⑤⑥⑦⑧⑨"
  },
  {
    name: "Circled Negative",
    key: "circled_negative",
    sample: "🅗🅔🅛🅛🅞",
    lowercase: "🅐🅑🅒🅓🅔🅕🅖🅗🅘🅙🅚🅛🅜🅝🅞🅟🅠🅡🅢🅣🅤🅥🅦🅧🅨🅩",
    uppercase: "🅐🅑🅒🅓🅔🅕🅖🅗🅘🅙🅚🅛🅜🅝🅞🅟🅠🅡🅢🅣🅤🅥🅦🅧🅨🅩",
    numbers: "⓿❶❷❸❹❺❻❼❽❾"
  },
  {
    name: "Squared",
    key: "squared",
    sample: "🄷🄴🄻🄻🄾",
    lowercase: "🄰🄱🄲🄳🄴🄵🄶🄷🄸🄹🄺🄻🄼🄽🄾🄿🅀🅁🅂🅃🅄🅅🅆🅇🅈🅉",
    uppercase: "🄰🄱🄲🄳🄴🄵🄶🄷🄸🄹🄺🄻🄼🄽🄾🄿🅀🅁🅂🅃🅄🅅🅆🅇🅈🅉",
    numbers: "0123456789"
  },
  {
    name: "Squared Negative",
    key: "squared_negative",
    sample: "🅷🅴🅻🅻🅾",
    lowercase: "🅰🅱🅲🅳🅴🅵🅶🅷🅸🅹🅺🅻🅼🅽🅾🅿🆀🆁🆂🆃🆄🆅🆆🆇🆈🆉",
    uppercase: "🅰🅱🅲🅳🅴🅵🅶🅷🅸🅹🅺🅻🅼🅽🅾🅿🆀🆁🆂🆃🆄🆅🆆🆇🆈🆉",
    numbers: "0123456789"
  },

  // Fullwidth
  {
    name: "Fullwidth",
    key: "fullwidth",
    sample: "Ｈｅｌｌｏ",
    lowercase: "ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ",
    uppercase: "ＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ",
    numbers: "０１２３４５６７８９"
  },

  // Small Caps
  {
    name: "Small Caps",
    key: "small_caps",
    sample: "ʜᴇʟʟᴏ",
    lowercase: "ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘǫʀꜱᴛᴜᴠᴡxʏᴢ",
    uppercase: "ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘǫʀꜱᴛᴜᴠᴡxʏᴢ",
    numbers: "0123456789"
  },

  // Superscript
  {
    name: "Superscript",
    key: "superscript",
    sample: "ᴴᵉˡˡᵒ",
    lowercase: "ᵃᵇᶜᵈᵉᶠᵍʰⁱʲᵏˡᵐⁿᵒᵖᵠʳˢᵗᵘᵛʷˣʸᶻ",
    uppercase: "ᴬᴮᶜᴰᴱᶠᴳᴴᴵᴶᴷᴸᴹᴺᴼᴾᵠᴿˢᵀᵁⱽᵂˣʸᶻ",
    numbers: "⁰¹²³⁴⁵⁶⁷⁸⁹"
  },

  // Subscript
  {
    name: "Subscript",
    key: "subscript",
    sample: "ₕₑₗₗₒ",
    lowercase: "ₐᵦᶜᵈₑᶠᵍₕᵢⱼₖₗₘₙₒₚᵩᵣₛₜᵤᵥwₓᵧᶻ",
    uppercase: "ₐᵦᶜᵈₑᶠᵍₕᵢⱼₖₗₘₙₒₚᵩᵣₛₜᵤᵥwₓᵧᶻ",
    numbers: "₀₁₂₃₄₅₆₇₈₉"
  },

  // Strikethrough
  {
    name: "Strikethrough",
    key: "strikethrough",
    sample: "H̶e̶l̶l̶o̶",
    lowercase: "a̶b̶c̶d̶e̶f̶g̶h̶i̶j̶k̶l̶m̶n̶o̶p̶q̶r̶s̶t̶u̶v̶w̶x̶y̶z̶",
    uppercase: "A̶B̶C̶D̶E̶F̶G̶H̶I̶J̶K̶L̶M̶N̶O̶P̶Q̶R̶S̶T̶U̶V̶W̶X̶Y̶Z̶",
    numbers: "0̶1̶2̶3̶4̶5̶6̶7̶8̶9̶"
  },

  // Underline
  {
    name: "Underline",
    key: "underline",
    sample: "H̲e̲l̲l̲o̲",
    lowercase: "a̲b̲c̲d̲e̲f̲g̲h̲i̲j̲k̲l̲m̲n̲o̲p̲q̲r̲s̲t̲u̲v̲w̲x̲y̲z̲",
    uppercase: "A̲B̲C̲D̲E̲F̲G̲H̲I̲J̲K̲L̲M̲N̲O̲P̲Q̲R̲S̲T̲U̲V̲W̲X̲Y̲Z̲",
    numbers: "0̲1̲2̲3̲4̲5̲6̲7̲8̲9̲"
  },

  // Overline
  {
    name: "Overline",
    key: "overline",
    sample: "H̅e̅l̅l̅o̅",
    lowercase: "a̅b̅c̅d̅e̅f̅g̅h̅i̅j̅k̅l̅m̅n̅o̅p̅q̅r̅s̅t̅u̅v̅w̅x̅y̅z̅",
    uppercase: "A̅B̅C̅D̅E̅F̅G̅H̅I̅J̅K̅L̅M̅N̅O̅P̅Q̅R̅S̅T̅U̅V̅W̅X̅Y̅Z̅",
    numbers: "0̅1̅2̅3̅4̅5̅6̅7̅8̅9̅"
  },

  // Dotted
  {
    name: "Dotted",
    key: "dotted",
    sample: "Ḧëḷḷö",
    lowercase: "äḅċḋëḟġḧïjḳḷṁṅöṗqṛṡẗüṿẅẍÿż",
    uppercase: "ÄḂĊḊËḞĠḦÏJḲḶṀṄÖṖQṘṠṪÜṾẄẌŸŻ",
    numbers: "0̤1̤2̤3̤4̤5̤6̤7̤8̤9̤"
  },

  // Wavy
  {
    name: "Wavy",
    key: "wavy",
    sample: "H̃ẽl̃l̃õ",
    lowercase: "ãb̃c̃d̃ẽf̃g̃h̃ĩj̃k̃l̃m̃ñõp̃q̃r̃s̃t̃ũṽw̃x̃ỹz̃",
    uppercase: "ÃB̃C̃D̃ẼF̃G̃H̃ĨJ̃K̃L̃M̃ÑÕP̃Q̃R̃S̃T̃ŨṼW̃X̃ỸZ̃",
    numbers: "0̃1̃2̃3̃4̃5̃6̃7̃8̃9̃"
  },

  // Upside Down
  {
    name: "Upside Down",
    key: "upside_down",
    sample: "ollǝH",
    lowercase: "ɐqɔpǝɟƃɥᴉɾʞlɯuodbɹsʇnʌʍxʎz",
    uppercase: "ɐqɔpǝɟƃɥᴉɾʞlɯuodbɹsʇnʌʍxʎz",
    numbers: "0123456789",
    reverse: true
  },

  // Bubble Text
  {
    name: "Bubble Text",
    key: "bubble_text",
    sample: "Ⓗⓔⓛⓛⓞ",
    lowercase: "ⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩ",
    uppercase: "ⒶⒷⒸⒹⒺⒻⒼⒽⒾⒿⓀⓁⓂⓃⓄⓅⓆⓇⓈⓉⓊⓋⓌⓍⓎⓏ",
    numbers: "⓪①②③④⑤⑥⑦⑧⑨"
  },

  // Aesthetic
  {
    name: "Aesthetic",
    key: "aesthetic",
    sample: "H҉e҉l҉l҉o҉",
    lowercase: "a҉b҉c҉d҉e҉f҉g҉h҉i҉j҉k҉l҉m҉n҉o҉p҉q҉r҉s҉t҉u҉v҉w҉x҉y҉z҉",
    uppercase: "A҉B҉C҉D҉E҉F҉G҉H҉I҉J҉K҉L҉M҉N҉O҉P҉Q҉R҉S҉T҉U҉V҉W҉X҉Y҉Z҉",
    numbers: "0҉1҉2҉3҉4҉5҉6҉7҉8҉9҉"
  },

  // Glitch
  {
    name: "Glitch",
    key: "glitch",
    sample: "H̴̢̛e̸̢̛l̵̢̛l̶̢̛o̷̢",
    lowercase: "a̴̢̛b̸̢̛c̵̢̛d̶̢̛e̷̢̛f̸̢̛g̴̢̛h̵̢̛i̶̢̛j̷̢̛k̸̢̛l̴̢̛m̵̢̛n̶̢̛o̷̢p̸̢̛q̴̢̛r̵̢̛s̶̢̛t̷̢̛u̸̢v̴̢̛w̵̢̛x̶̢̛y̷̢̛z̸̢̛",
    uppercase: "A̴̢̛B̸̢̛C̵̢̛D̶̢̛E̷̢̛F̸̢̛G̴̢̛H̵̢̛I̶̢̛J̷̢̛K̸̢̛L̴̢̛M̵̢̛N̶̢̛O̷̢P̸̢̛Q̴̢̛R̵̢̛S̶̢̛T̷̢̛U̸̢V̴̢̛W̵̢̛X̶̢̛Y̷̢̛Z̸̢̛",
    numbers: "0̴̢̛1̸̢̛2̵̢̛3̶̢̛4̷̢̛5̸̢̛6̴̢̛7̵̢̛8̶̢̛9̷̢̛"
  },

  // Zalgo
  {
    name: "Zalgo",
    key: "zalgo",
    sample: "H̸̢̛̗̰̮e̸̢̛̗̰̮l̸̢̛̗̰̮l̸̢̛̗̰̮ơ̸̢̗̰̮",
    lowercase: "a̸̢̛̗̰̮b̸̢̛̗̰̮c̸̢̛̗̰̮d̸̢̛̗̰̮e̸̢̛̗̰̮f̸̢̛̗̰̮g̸̢̛̗̰̮h̸̢̛̗̰̮i̸̢̛̗̰̮j̸̢̛̗̰̮k̸̢̛̗̰̮l̸̢̛̗̰̮m̸̢̛̗̰̮n̸̢̛̗̰̮ơ̸̢̗̰̮p̸̢̛̗̰̮q̸̢̛̗̰̮r̸̢̛̗̰̮s̸̢̛̗̰̮t̸̢̛̗̰̮ư̸̢̗̰̮v̸̢̛̗̰̮w̸̢̛̗̰̮x̸̢̛̗̰̮y̸̢̛̗̰̮z̸̢̛̗̰̮",
    uppercase: "A̸̢̛̗̰̮B̸̢̛̗̰̮C̸̢̛̗̰̮D̸̢̛̗̰̮E̸̢̛̗̰̮F̸̢̛̗̰̮G̸̢̛̗̰̮H̸̢̛̗̰̮I̸̢̛̗̰̮J̸̢̛̗̰̮K̸̢̛̗̰̮L̸̢̛̗̰̮M̸̢̛̗̰̮N̸̢̛̗̰̮Ơ̸̢̗̰̮P̸̢̛̗̰̮Q̸̢̛̗̰̮R̸̢̛̗̰̮S̸̢̛̗̰̮T̸̢̛̗̰̮Ư̸̢̗̰̮V̸̢̛̗̰̮W̸̢̛̗̰̮X̸̢̛̗̰̮Y̸̢̛̗̰̮Z̸̢̛̗̰̮",
    numbers: "0̸̢̛̗̰̮1̸̢̛̗̰̮2̸̢̛̗̰̮3̸̢̛̗̰̮4̸̢̛̗̰̮5̸̢̛̗̰̮6̸̢̛̗̰̮7̸̢̛̗̰̮8̸̢̛̗̰̮9̸̢̛̗̰̮"
  },

  // Asian Inspired
  {
    name: "Japanese Style",
    key: "japanese",
    sample: "んモ乚乚の",
    lowercase: "ム乃ᄃり乇キムんノﾌズ乚ᄊ刀のｱゐ尺丂ｲひ√Wﾒﾘ乙",
    uppercase: "ム乃ᄃり乇キムんノﾌズ乚ᄊ刀のｱゐ尺丂ｲひ√Wﾒﾘ乙",
    numbers: "0123456789"
  },

  // Decorative
  {
    name: "Stars",
    key: "stars",
    sample: "⭐H⭐e⭐l⭐l⭐o⭐",
    lowercase: "⭐a⭐b⭐c⭐d⭐e⭐f⭐g⭐h⭐i⭐j⭐k⭐l⭐m⭐n⭐o⭐p⭐q⭐r⭐s⭐t⭐u⭐v⭐w⭐x⭐y⭐z⭐",
    uppercase: "⭐A⭐B⭐C⭐D⭐E⭐F⭐G⭐H⭐I⭐J⭐K⭐L⭐M⭐N⭐O⭐P⭐Q⭐R⭐S⭐T⭐U⭐V⭐W⭐X⭐Y⭐Z⭐",
    numbers: "⭐0⭐1⭐2⭐3⭐4⭐5⭐6⭐7⭐8⭐9⭐",
    separator: "⭐"
  },

  {
    name: "Hearts",
    key: "hearts",
    sample: "♥H♥e♥l♥l♥o♥",
    lowercase: "♥a♥b♥c♥d♥e♥f♥g♥h♥i♥j♥k♥l♥m♥n♥o♥p♥q♥r♥s♥t♥u♥v♥w♥x♥y♥z♥",
    uppercase: "♥A♥B♥C♥D♥E♥F♥G♥H♥I♥J♥K♥L♥M♥N♥O♥P♥Q♥R♥S♥T♥U♥V♥W♥X♥Y♥Z♥",
    numbers: "♥0♥1♥2♥3♥4♥5♥6♥7♥8♥9♥",
    separator: "♥"
  },

  {
    name: "Fire",
    key: "fire",
    sample: "🔥H🔥e🔥l🔥l🔥o🔥",
    lowercase: "🔥a🔥b🔥c🔥d🔥e🔥f🔥g🔥h🔥i🔥j🔥k🔥l🔥m🔥n🔥o🔥p🔥q🔥r🔥s🔥t🔥u🔥v🔥w🔥x🔥y🔥z🔥",
    uppercase: "🔥A🔥B🔥C🔥D🔥E🔥F🔥G🔥H🔥I🔥J🔥K🔥L🔥M🔥N🔥O🔥P🔥Q🔥R🔥S🔥T🔥U🔥V🔥W🔥X🔥Y🔥Z🔥",
    numbers: "🔥0🔥1🔥2🔥3🔥4🔥5🔥6🔥7🔥8🔥9🔥",
    separator: "🔥"
  },

  {
    name: "Lightning",
    key: "lightning",
    sample: "⚡H⚡e⚡l⚡l⚡o⚡",
    lowercase: "⚡a⚡b⚡c⚡d⚡e⚡f⚡g⚡h⚡i⚡j⚡k⚡l⚡m⚡n⚡o⚡p⚡q⚡r⚡s⚡t⚡u⚡v⚡w⚡x⚡y⚡z⚡",
    uppercase: "⚡A⚡B⚡C⚡D⚡E⚡F⚡G⚡H⚡I⚡J⚡K⚡L⚡M⚡N⚡O⚡P⚡Q⚡R⚡S⚡T⚡U⚡V⚡W⚡X⚡Y⚡Z⚡",
    numbers: "⚡0⚡1⚡2⚡3⚡4⚡5⚡6⚡7⚡8⚡9⚡",
    separator: "⚡"
  },

  {
    name: "Sparkles",
    key: "sparkles",
    sample: "✨H✨e✨l✨l✨o✨",
    lowercase: "✨a✨b✨c✨d✨e✨f✨g✨h✨i✨j✨k✨l✨m✨n✨o✨p✨q✨r✨s✨t✨u✨v✨w✨x✨y✨z✨",
    uppercase: "✨A✨B✨C✨D✨E✨F✨G✨H✨I✨J✨K✨L✨M✨N✨O✨P✨Q✨R✨S✨T✨U✨V✨W✨X✨Y✨Z✨",
    numbers: "✨0✨1✨2✨3✨4✨5✨6✨7✨8✨9✨",
    separator: "✨"
  },

  // Brackets
  {
    name: "Square Brackets",
    key: "square_brackets",
    sample: "[H][e][l][l][o]",
    lowercase: "[a][b][c][d][e][f][g][h][i][j][k][l][m][n][o][p][q][r][s][t][u][v][w][x][y][z]",
    uppercase: "[A][B][C][D][E][F][G][H][I][J][K][L][M][N][O][P][Q][R][S][T][U][V][W][X][Y][Z]",
    numbers: "[0][1][2][3][4][5][6][7][8][9]",
    prefix: "[",
    suffix: "]"
  },

  {
    name: "Parentheses",
    key: "parentheses",
    sample: "(H)(e)(l)(l)(o)",
    lowercase: "(a)(b)(c)(d)(e)(f)(g)(h)(i)(j)(k)(l)(m)(n)(o)(p)(q)(r)(s)(t)(u)(v)(w)(x)(y)(z)",
    uppercase: "(A)(B)(C)(D)(E)(F)(G)(H)(I)(J)(K)(L)(M)(N)(O)(P)(Q)(R)(S)(T)(U)(V)(W)(X)(Y)(Z)",
    numbers: "(0)(1)(2)(3)(4)(5)(6)(7)(8)(9)",
    prefix: "(",
    suffix: ")"
  },

  {
    name: "Curly Brackets",
    key: "curly_brackets",
    sample: "{H}{e}{l}{l}{o}",
    lowercase: "{a}{b}{c}{d}{e}{f}{g}{h}{i}{j}{k}{l}{m}{n}{o}{p}{q}{r}{s}{t}{u}{v}{w}{x}{y}{z}",
    uppercase: "{A}{B}{C}{D}{E}{F}{G}{H}{I}{J}{K}{L}{M}{N}{O}{P}{Q}{R}{S}{T}{U}{V}{W}{X}{Y}{Z}",
    numbers: "{0}{1}{2}{3}{4}{5}{6}{7}{8}{9}",
    prefix: "{",
    suffix: "}"
  },

  // Geometric
  {
    name: "Triangles",
    key: "triangles",
    sample: "▲H▲e▲l▲l▲o▲",
    lowercase: "▲a▲b▲c▲d▲e▲f▲g▲h▲i▲j▲k▲l▲m▲n▲o▲p▲q▲r▲s▲t▲u▲v▲w▲x▲y▲z▲",
    uppercase: "▲A▲B▲C▲D▲E▲F▲G▲H▲I▲J▲K▲L▲M▲N▲O▲P▲Q▲R▲S▲T▲U▲V▲W▲X▲Y▲Z▲",
    numbers: "▲0▲1▲2▲3▲4▲5▲6▲7▲8▲9▲",
    separator: "▲"
  },

  {
    name: "Circles",
    key: "circles",
    sample: "●H●e●l●l●o●",
    lowercase: "●a●b●c●d●e●f●g●h●i●j●k●l●m●n●o●p●q●r●s●t●u●v●w●x●y●z●",
    uppercase: "●A●B●C●D●E●F●G●H●I●J●K●L●M●N●O●P●Q●R●S●T●U●V●W●X●Y●Z●",
    numbers: "●0●1●2●3●4●5●6●7●8●9●",
    separator: "●"
  },

  {
    name: "Squares",
    key: "squares",
    sample: "■H■e■l■l■o■",
    lowercase: "■a■b■c■d■e■f■g■h■i■j■k■l■m■n■o■p■q■r■s■t■u■v■w■x■y■z■",
    uppercase: "■A■B■C■D■E■F■G■H■I■J■K■L■M■N■O■P■Q■R■S■T■U■V■W■X■Y■Z■",
    numbers: "■0■1■2■3■4■5■6■7■8■9■",
    separator: "■"
  },

  // Lines and Dots
  {
    name: "Dots",
    key: "dots",
    sample: "•H•e•l•l•o•",
    lowercase: "•a•b•c•d•e•f•g•h•i•j•k•l•m•n•o•p•q•r•s•t•u•v•w•x•y•z•",
    uppercase: "•A•B•C•D•E•F•G•H•I•J•K•L•M•N•O•P•Q•R•S•T•U•V•W•X•Y•Z•",
    numbers: "•0•1•2•3•4•5•6•7•8•9•",
    separator: "•"
  },

  {
    name: "Lines",
    key: "lines",
    sample: "|H|e|l|l|o|",
    lowercase: "|a|b|c|d|e|f|g|h|i|j|k|l|m|n|o|p|q|r|s|t|u|v|w|x|y|z|",
    uppercase: "|A|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z|",
    numbers: "|0|1|2|3|4|5|6|7|8|9|",
    separator: "|"
  },

  {
    name: "Waves",
    key: "waves",
    sample: "~H~e~l~l~o~",
    lowercase: "~a~b~c~d~e~f~g~h~i~j~k~l~m~n~o~p~q~r~s~t~u~v~w~x~y~z~",
    uppercase: "~A~B~C~D~E~F~G~H~I~J~K~L~M~N~O~P~Q~R~S~T~U~V~W~X~Y~Z~",
    numbers: "~0~1~2~3~4~5~6~7~8~9~",
    separator: "~"
  },

  {
    name: "Arrows",
    key: "arrows",
    sample: "→H→e→l→l→o→",
    lowercase: "→a→b→c→d→e→f→g→h→i→j→k→l→m→n→o→p→q→r→s→t→u→v→w→x→y→z→",
    uppercase: "→A→B→C→D→E→F→G→H→I→J→K→L→M→N→O→P→Q→R→S→T→U→V→W→X→Y→Z→",
    numbers: "→0→1→2→3→4→5→6→7→8→9→",
    separator: "→"
  }
];

// Enhanced text conversion function
export function convertText(text, styleObj) {
  if (!text || !styleObj) return text;
  
  const lowercaseAlphabet = 'abcdefghijklmnopqrstuvwxyz';
  const uppercaseAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numbers = '0123456789';
  let result = '';
  
  // Handle upside down text specially
  if (styleObj.reverse) {
    text = text.split('').reverse().join('');
  }
  
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    let convertedChar = char;
    
    // Handle lowercase letters
    if (lowercaseAlphabet.includes(char)) {
      const index = lowercaseAlphabet.indexOf(char);
      if (styleObj.lowercase && index < styleObj.lowercase.length) {
        convertedChar = styleObj.lowercase.charAt(index);
      }
    }
    // Handle uppercase letters
    else if (uppercaseAlphabet.includes(char)) {
      const index = uppercaseAlphabet.indexOf(char);
      if (styleObj.uppercase && index < styleObj.uppercase.length) {
        convertedChar = styleObj.uppercase.charAt(index);
      }
    }
    // Handle numbers
    else if (numbers.includes(char)) {
      const index = numbers.indexOf(char);
      if (styleObj.numbers && index < styleObj.numbers.length) {
        convertedChar = styleObj.numbers.charAt(index);
      }
    }
    
    // Apply separators, prefixes, or suffixes if they exist
    if (styleObj.separator && char !== ' ') {
      result += styleObj.separator + convertedChar + styleObj.separator;
    } else if (styleObj.prefix && styleObj.suffix && char !== ' ') {
      result += styleObj.prefix + convertedChar + styleObj.suffix;
    } else {
      result += convertedChar;
    }
  }
  
  return result;
}