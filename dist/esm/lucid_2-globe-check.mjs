export const name="lucid_2-globe-check";
export const id="dl_5f6ddde44f4c4ac89020";
export const url=new URL("../icons/lucid_2-globe-check.svg?v=ade9af0d83ba7aff64f1ea707ee62b042626bf33bb82536036d246ce1380797a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
