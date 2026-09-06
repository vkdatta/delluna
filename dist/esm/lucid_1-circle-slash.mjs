export const name="lucid_1-circle-slash";
export const id="dl_a3d9e5df1a84410d87af";
export const url=new URL("../icons/lucid_1-circle-slash.svg?v=59ae7f31c25e1c1f19125999713e06369e4e4a33a9c9537eda4f94a7fda7b052",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
