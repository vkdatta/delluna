export const name="scrollable_header";
export const id="dl_7d876522d552493cbb94";
export const url=new URL("../icons/S/scrollable_header.svg?v=209911be556434a244427771f9296ce8d161a4a2b25e77a7248949204e2f4f36",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
