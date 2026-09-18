export const name="keyboard_double_arrow_left-fill";
export const id="dl_ce97dcbde0604e9d9677";
export const url=new URL("../icons/keyboard_double_arrow_left-fill.svg?v=fa33baec0baca99c372af660a980b009ec734b9e8c69ebecb0c13e61f640203a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
