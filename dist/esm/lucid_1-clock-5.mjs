export const name="lucid_1-clock-5";
export const id="dl_e542410c6cbf467b873e";
export const url=new URL("../icons/lucid_1-clock-5.svg?v=dff169e34697813b735a6a16a0950d6c928ad0397bd2c914568efd1695108ca3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
