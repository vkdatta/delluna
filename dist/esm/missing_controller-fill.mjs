export const name="missing_controller-fill";
export const id="dl_cf28ff42d17ea85a798b";
export const url=new URL("../icons/missing_controller-fill.svg?v=9e6d3c20bde913fbcd652ad03662108bac5653c2807a43e6ac68ec4acafb2a89",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
