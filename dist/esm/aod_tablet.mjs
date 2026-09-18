export const name="aod_tablet";
export const id="dl_631f0657ed7543a7a710";
export const url=new URL("../icons/aod_tablet.svg?v=3b83141f6de296fa5320dd444bd6d008e69bb597cac946a8df6514a40469966b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
