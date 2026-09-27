export const name="gradient-duotone";
export const id="dl_f8f5833abb5f4e1daaaf";
export const url=new URL("../icons/gradient-duotone.svg?v=b80f08aafb3c55954ad568d4aa85abd69474ea01ef9eb519afdcd855f20322a6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
