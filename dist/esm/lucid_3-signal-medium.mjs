export const name="lucid_3-signal-medium";
export const id="dl_2da688009cf64004b400";
export const url=new URL("../icons/lucid_3-signal-medium.svg?v=c450161e95da36904225127e031fd74a078149cbceaf95b3e11e2324974530a6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
