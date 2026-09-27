export const name="keyhole-duotone";
export const id="dl_1028b0e2f7e24e90bc39";
export const url=new URL("../icons/keyhole-duotone.svg?v=cbd002d044d419f744d24871d3fce756e86b979a3d6da4f407683fc6083cee73",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
