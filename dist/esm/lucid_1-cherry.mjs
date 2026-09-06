export const name="lucid_1-cherry";
export const id="dl_a0200f452ad14bf79276";
export const url=new URL("../icons/lucid_1-cherry.svg?v=c34b4488ed3819a1ecae6a2068884a775e2d2483f7a2b271f7537cde423e264d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
