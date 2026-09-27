export const name="contrast_circle-fill";
export const id="dl_427c5380cd9e1a551d38";
export const url=new URL("../icons/contrast_circle-fill.svg?v=37a3b8d8dfebc83ca6fe407c617fbb8226a44d84bdda546d7aa96a414b262416",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
