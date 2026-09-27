export const name="splitscreen";
export const id="dl_d7c827abb77b49f74420";
export const url=new URL("../icons/splitscreen.svg?v=d28242547b32fdfba8ac97c7621ece4d8fcabc0b369c1020e6ac923b7a452741",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
