export const name="person-simple-circle-duotone";
export const id="dl_fa5d3d8dad3640459874";
export const url=new URL("../icons/person-simple-circle-duotone.svg?v=ee34f971a5517b7408c76201512ae6c1728ac7a16818d92afd80c31bceb20519",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
