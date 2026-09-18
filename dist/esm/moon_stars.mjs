export const name="moon_stars";
export const id="dl_cdc45ebd4eee44a99f8e";
export const url=new URL("../icons/moon_stars.svg?v=9b41fc060aa2a6ab8b29c31a4c59fda889a122c19ae3c00f99986ddac2143154",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
