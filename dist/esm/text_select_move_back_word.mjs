export const name="text_select_move_back_word";
export const id="dl_ae4299eb8b3a7dc9d037";
export const url=new URL("../icons/text_select_move_back_word.svg?v=4feb2574e8386978c32ed09cdcae6a205df6cd10c5b36d6b9db3345de531d2a5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
