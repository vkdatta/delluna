export const name="ramen_dining";
export const id="dl_b6bdc144efafe9d6053b";
export const url=new URL("../icons/ramen_dining.svg?v=5433fc9f755d3ca99029452fdf02ab061f5f393430ca391135389a57067c6668",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
