export const englishWords  = [
  "apple", "banana", "car", "dog", "elephant",
  "fish", "grape", "hat", "ice", "jungle",
  "kite", "lion", "mouse", "night", "orange",
  "penguin", "queen", "river", "sun", "tree",
  "umbrella", "violin", "whale", "xray", "yogurt", "zebra",
  "book", "chair", "desk", "flower", "garden", "house",
  "island", "juice", "key", "lamp", "mountain", "notebook",
  "ocean", "pencil", "quiet", "road", "star", "table",
  "umbrella", "village", "window", "yard", "zoo", "airplane",
  "bottle", "camera", "dance", "engine", "forest", "glove",
  "hotel", "internet", "jacket", "knife", "lemon", "mirror",
  "number", "orange", "piano", "queen", "rocket", "school",
  "train", "unicorn", "voice", "water", "xylophone", "yellow",
  "zipper", "ant", "ball", "cat", "door", "egg", "frog",
  "goat", "hill", "icecream", "jungle", "kangaroo", "lamp",
  "moon", "nest", "owl", "pig", "quilt", "rain", "snake",
  "tiger", "umbrella", "vase", "wolf", "xray", "yacht",
  "zebra"
];


export const laoWords = [
   "ໝາ", "ແມວ", "ປາ", "ໄມ້", "ນໍ້າ",
  "ແດດ", "ເຮືອນ", "ພໍ່", "ແມ່", "ເດັກ",
  "ໜັງສື", "ການຮຽນ", "ຂ້ອຍ", "ເຈົ້າ", "ອາຫານ",
  "ເງິນ", "ວັດ", "ລົດ", "ທາງ", "ເມືອງ",
  "ປ້າຍ", "ເສື້ອ", "ກະເປົາ", "ເຄື່ອງ", "ກອງ", "ປຸ້ມ",
  "ຂົນຕົນ", "ທົ່ວໄປ", "ຈອກ", "ຮ້ານ", "ຕູ້", "ພັກຜ່ອນ",
  "ຫຼຽນ", "ໄຟຟ້າ", "ຂອງຫຼິ້ນ", "ຄົນ", "ອາກາດ", "ດອກໄມ້",
  "ປາກ", "ເສື້ອກັນໜາວ", "ລະດັບ", "ເກມ", "ສະເພາະ", "ຫຼຽນ",
  "ພາຍໃນ", "ຫໍ", "ພັກຜ່ອນ", "ຕົວລະຄອນ", "ເຮືອນຫວາງ",
  "ຂອງເກມ", "ການຂຽນ", "ພາຍນອກ", "ໂຕະ", "ດອກໄມ້ຫຼຽນ",
  "ຂົນຕົນ", "ສະຫວັນ", "ເຈົ້າຂອງ", "ການຮຽນ", "ສະຖານທີ່", "ຄວາມສຸກ",
  "ພັກຜ່ອນ", "ເມືອງ", "ການດຳເນີນ", "ການເຄື່ອນໄຫວ", "ພະນັກງານ", "ຮ່ວມມື",
  "ເກມຕ່າງໆ", "ເວລາ", "ຄວາມຮູ້", "ຄວາມຄິດ", "ສະຖານະ", "ອິນເຕີເນັດ",
  "ປະເທດ", "ເສື້ອກັນໜາວ", "ລູກຄ້າ", "ເຈົ້າພະຍາດ", "ສະເພາະການ",
  "ການທົດສອບ", "ການເລືອກ", "ຄຳເຫັນ", "ເວລາເກີນ", "ສະຫມັກຫຼິ້ນ", "ຄວາມເຫັນ"
];

// export function generateWords(count: number): string[] {
//   const shuffled = [...wordList].sort(() => Math.random() - 0.5);
//   return shuffled.slice(0, count);
// }

export function generateWords(count: number, lang: "en" | "lo"): string[] {
  const wordList = lang === "lo" ? laoWords : englishWords;
  const shuffled = [...wordList].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}
