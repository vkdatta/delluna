export const name="square-off";
export const id="dl_4384866b3a0242c1b6b4";
export const url=new URL("../icons/square-off.svg?v=2262124af9b9eb2453fc45c5f72cde6a01c0dc12f32b4be83c3dc52c9510edfb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
