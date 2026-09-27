export const name="tooltip-fill";
export const id="dl_e86e4bcf16b21ed69d31";
export const url=new URL("../icons/tooltip-fill.svg?v=8f3f0f7ece3c52dbde7a491b2c2f4cdcc1feb16b4b842834a22ecc0f7350ad0c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
