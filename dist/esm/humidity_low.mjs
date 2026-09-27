export const name="humidity_low";
export const id="dl_c823db8727abd92481da";
export const url=new URL("../icons/humidity_low.svg?v=22fa8fed041c3f69423d6342dff562b0fb05e317b4a1934e6f6b08fca9222282",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
