export const name="text_select_move_forward_word";
export const id="dl_c2c3aac5279e12435d65";
export const url=new URL("../icons/text_select_move_forward_word.svg?v=6c593e376d2fd8e9dee83614f9ceca45b882067183a7caac36167113d8ed230e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
