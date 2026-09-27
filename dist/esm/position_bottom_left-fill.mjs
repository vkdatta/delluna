export const name="position_bottom_left-fill";
export const id="dl_173f2a3a2f62a4aa2343";
export const url=new URL("../icons/position_bottom_left-fill.svg?v=4356e5259219236abe6d7a19e92673c21e8041f6d099ab48b96f33dfd76f46d1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
