export const name="position_bottom_left";
export const id="dl_d47be88f230aa39c1b7d";
export const url=new URL("../icons/position_bottom_left.svg?v=68edfd40ff9c42b8ae0bbf0c4fbb99263afb5861024e9f02e2f20822bc3f173a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
