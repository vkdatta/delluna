export const name="globe-stand-fill";
export const id="dl_a20c84183cc14afd9a24";
export const url=new URL("../icons/globe-stand-fill.svg?v=4970bd4c6a50ae67837f701924804793ee0126c7333a2e4c459d347c4a12c7cc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
