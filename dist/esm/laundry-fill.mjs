export const name="laundry-fill";
export const id="dl_9cd1d29f1d55a299f8f4";
export const url=new URL("../icons/laundry-fill.svg?v=18c00c43bb00efade11d78b84287eaa0dcdb03abcc4a6a23371f61ba4b52f9f5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
