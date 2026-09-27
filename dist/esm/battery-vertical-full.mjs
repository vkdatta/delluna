export const name="battery-vertical-full";
export const id="dl_2b0f40cf80294679878f";
export const url=new URL("../icons/battery-vertical-full.svg?v=e510deccfc8511e9c564f09ccdbc03084ea547db42dba618155e1a090a6eaf0e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
