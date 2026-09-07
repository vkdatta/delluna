export const name="user-circle-plus-duotone";
export const id="dl_375350034629410f931d";
export const url=new URL("../icons/U/user-circle-plus-duotone.svg?v=75de36f2fe07ab8d32e57ed77a698204894d6abf76ebdeab1b56f9458574adcd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
