export const name="lucid_3-square-chevron-right";
export const id="dl_1fe0be603e064b628abc";
export const url=new URL("../icons/lucid_3-square-chevron-right.svg?v=9f6a450bf71b5206ae97b17d2cfa4269691791d6eeb59b17a10d36e694dfb14a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
