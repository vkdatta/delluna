export const name="user-lock";
export const id="dl_dc5fa1bb7321412089c2";
export const url=new URL("../icons/user-lock.svg?v=c484205fa78ed16d390c5c632359fcd9b724a7e04ad6e3c5422a45618f9e0002",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
