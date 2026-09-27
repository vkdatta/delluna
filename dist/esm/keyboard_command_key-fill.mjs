export const name="keyboard_command_key-fill";
export const id="dl_f9cba015fc5701ac050b";
export const url=new URL("../icons/keyboard_command_key-fill.svg?v=fb64fb22c5568d25afe3893f110719cd0675f731f61f4430cbc1e7a51b76aebf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
