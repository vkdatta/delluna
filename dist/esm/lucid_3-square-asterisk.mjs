export const name="lucid_3-square-asterisk";
export const id="dl_8a9b3816483c4ae2985b";
export const url=new URL("../icons/lucid_3-square-asterisk.svg?v=660e16b42047a62ce9bdfad95527539cef571a87b8a0ad7a96d17e0abdd900bd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
