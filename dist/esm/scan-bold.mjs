export const name="scan-bold";
export const id="dl_02d7ba3a4488c695c1bf";
export const url=new URL("../icons/scan-bold.svg?v=5425e43d5748ee5c7616cfb22de512f34c450f0564c089c9bdb5ca60be7dac6c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
