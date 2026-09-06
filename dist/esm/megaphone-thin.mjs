export const name="megaphone-thin";
export const id="dl_38d0f6ab76414155a24f";
export const url=new URL("../icons/megaphone-thin.svg?v=6f177288b791cdda87955754db2fcd2b25f635f6cd89ac8ffb3b643d6fb45cd5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
