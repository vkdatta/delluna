export const name="text_select_move_back_word";
export const id="dl_f05d58c1600d4a57bea8";
export const url=new URL("../icons/text_select_move_back_word.svg?v=6529886ac0971c68f2a3ba185ce9672d7c557c86559294d2634ae20222b38130",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
