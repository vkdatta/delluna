export const name="check-circle-light";
export const id="dl_1b70de51c3c94635812a";
export const url=new URL("../icons/check-circle-light.svg?v=6bc3ef79a187b218b3bb925cf09bcb8ac8da687611fec45de24dd5c86d20b3f9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
