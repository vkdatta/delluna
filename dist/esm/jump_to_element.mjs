export const name="jump_to_element";
export const id="dl_f6c660acadc4b7800eae";
export const url=new URL("../icons/jump_to_element.svg?v=3af9706f3f33b45bd13effa7ecbb1db79da04d5e6865bf48a15a40570cb4b9ed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
