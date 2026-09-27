export const name="tree-deciduous";
export const id="dl_7aa48a8efcae4143ac29";
export const url=new URL("../icons/tree-deciduous.svg?v=5a23548ef16f72e44f0f29b9a1a484cdcdb458a9c852b43e659c20646faf34b9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
