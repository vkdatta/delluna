export const name="devices_fold_2";
export const id="dl_0283d697ca906a7712c5";
export const url=new URL("../icons/devices_fold_2.svg?v=43b91d3aa2a644c8b34e818a7acd5c8f50263caf37a4d413e7d497d66edf8973",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
