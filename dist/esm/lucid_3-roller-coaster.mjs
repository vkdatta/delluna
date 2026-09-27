export const name="lucid_3-roller-coaster";
export const id="dl_5295c19238154c1e9822";
export const url=new URL("../icons/lucid_3-roller-coaster.svg?v=b7abfd2de83896cc9d970e7f03725806d67e0d56dd79479aaffc4a4f49d2eb76",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
