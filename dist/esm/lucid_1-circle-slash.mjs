export const name="lucid_1-circle-slash";
export const id="dl_a3d9e5df1a84410d87af";
export const url=new URL("../icons/lucid_1-circle-slash.svg?v=ba27d5c887366ea787af0a20f001bbccb70c9bb63e8d1a19dc15221113bef741",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
