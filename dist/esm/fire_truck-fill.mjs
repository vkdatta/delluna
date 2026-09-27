export const name="fire_truck-fill";
export const id="dl_f7e7f10295d258b44179";
export const url=new URL("../icons/fire_truck-fill.svg?v=185a65f1332e78cb0ee8f30d8813ebafd024cfe651d420816680dc6d237ff701",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
