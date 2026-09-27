export const name="graph_3";
export const id="dl_fdc79b188c863cd0ab4c";
export const url=new URL("../icons/graph_3.svg?v=04051be2451278ddd88d5d03566bf9a1b4dd345b2881376306cb928457dfaa5e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
