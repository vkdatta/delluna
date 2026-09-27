export const name="arrows_up_down_circle";
export const id="dl_83c5a8a0c7735fa6c23b";
export const url=new URL("../icons/arrows_up_down_circle.svg?v=33a340393d76e43b9ed300c098ce538341bf670ca650ace7edb5b04651d5f7f4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
