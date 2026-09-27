export const name="person-arms-spread";
export const id="dl_286a2e2a394f4a86aa0b";
export const url=new URL("../icons/person-arms-spread.svg?v=d448d1f46dae95fdbbf13ce2f399202aff21cd01d03656d9b78cc65e9199ed5f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
