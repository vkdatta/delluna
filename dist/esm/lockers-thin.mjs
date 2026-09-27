export const name="lockers-thin";
export const id="dl_fa7d6a9655f34f73be55";
export const url=new URL("../icons/lockers-thin.svg?v=f561232b41956fb7dfb625e3bc8d159df73ac87b4096d3efb314aadf83d7566c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
