export const name="filter_center_focus-fill";
export const id="dl_ef4663e60cf61860034d";
export const url=new URL("../icons/filter_center_focus-fill.svg?v=fce3b5595441320e71d617a04df15bfc500e9ba4f27dcca9e7198b0deb6f14d4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
