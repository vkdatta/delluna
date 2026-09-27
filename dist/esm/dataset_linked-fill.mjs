export const name="dataset_linked-fill";
export const id="dl_270f491185e6dcdc55dd";
export const url=new URL("../icons/dataset_linked-fill.svg?v=e0663e40bc9b9675db35129a40e1928947d42884bc020b59b476a9a7fe703837",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
