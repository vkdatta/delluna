export const name="lucid_1-battery-plus";
export const id="dl_3becbeb0610441c4bf93";
export const url=new URL("../icons/lucid_1-battery-plus.svg?v=f26db46b37f0a458d0104e73c8994842ac04ffbfce5509ffebb9c7b32ff2c64f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
