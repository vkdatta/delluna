export const name="moon_stars-fill";
export const id="dl_acb22072890a8b506544";
export const url=new URL("../icons/moon_stars-fill.svg?v=855ea1ed5816eb846c9bc5cfacbf34ced4163749e52e6e35a41194f3f5b7da33",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
