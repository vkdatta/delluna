export const name="target-light";
export const id="dl_e64420308a125047da05";
export const url=new URL("../icons/target-light.svg?v=d030e4fbc8d611e6b79028b7b884aaf0fe0047196f9cdc5fe1abfd80c78a403d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
