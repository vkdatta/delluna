export const name="exclude-square-light";
export const id="dl_2127b483c182462a8723";
export const url=new URL("../icons/exclude-square-light.svg?v=7a518c809f00d300206b6730b47ef4044fd9878b4af75f0f427cd15ccd9b8a48",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
