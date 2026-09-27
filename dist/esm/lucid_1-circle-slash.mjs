export const name="lucid_1-circle-slash";
export const id="dl_a3d9e5df1a84410d87af";
export const url=new URL("../icons/lucid_1-circle-slash.svg?v=e9edf55c5ea5901815edb764dd9847ba4c838aa3ee199bd15fa1be655b8b5ba4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
