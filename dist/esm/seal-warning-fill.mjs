export const name="seal-warning-fill";
export const id="dl_58bb1409d86dd18b9ff3";
export const url=new URL("../icons/seal-warning-fill.svg?v=0eedf5feaa84404bae556c044bd1a268edfc5e21cfdb0017bf67d1b10968fad5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
