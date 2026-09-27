export const name="battery-plus-light";
export const id="dl_552c786ca7eb4b60884b";
export const url=new URL("../icons/battery-plus-light.svg?v=ca6876c7ad07f6e691b18da0d90ca221874fd35ef00635a42ac2b288f7c4aae6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
