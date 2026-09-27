export const name="battery-vertical-medium";
export const id="dl_3776d2ed125b488484cb";
export const url=new URL("../icons/battery-vertical-medium.svg?v=06ef32f94149e6591d6f137f1b23e99e15e7c8bf4330daca008226ad30c303b6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
