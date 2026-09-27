export const name="traffic-signal-duotone";
export const id="dl_c527e387ad69b70ef340";
export const url=new URL("../icons/traffic-signal-duotone.svg?v=9e6d6b1773ca65bc99daeb96ff88542e1a7483a98b9404b60938557a6f4c1416",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
