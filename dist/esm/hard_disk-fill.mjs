export const name="hard_disk-fill";
export const id="dl_f38acc77d81b43dfb604";
export const url=new URL("../icons/hard_disk-fill.svg?v=acc7611dc62079c9f3e6e807508237ed3a63aea03eb8a586c2ac447f8ad308d1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
