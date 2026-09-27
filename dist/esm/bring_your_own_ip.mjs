export const name="bring_your_own_ip";
export const id="dl_cfbe70d73b8650a37038";
export const url=new URL("../icons/bring_your_own_ip.svg?v=42a39fa83b3fee7fd3be0df36b6bb01fba3f2400142894d7a2817de0ee94c282",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
