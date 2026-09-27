export const name="tag-chevron-fill";
export const id="dl_4fb24897e5dc1ad04a2a";
export const url=new URL("../icons/tag-chevron-fill.svg?v=ecd888f721714812447192f683b6b47b82037934981bdcb21f3a87689a52d3b2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
