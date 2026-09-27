export const name="width_full";
export const id="dl_b8def43909ce8f0f97b3";
export const url=new URL("../icons/width_full.svg?v=2b7904484f0779f67f09c075c8ee67a997749625492e37dd32410cddd7ff0740",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
