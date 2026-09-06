export const name="lucid_3-rotate-3d";
export const id="dl_ce9112d62ff64fc1a47d";
export const url=new URL("../icons/lucid_3-rotate-3d.svg?v=c696902ad496cbf980325772275985f8c64ca84ee763ddc0467ef3f3ed702352",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
