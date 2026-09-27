export const name="search_off";
export const id="dl_8aa6478e575d86bdb8a9";
export const url=new URL("../icons/search_off.svg?v=b73fdd4366959a3e05ba474620ab8571fb3b4c5f7047b05a18b2684f69174da5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
