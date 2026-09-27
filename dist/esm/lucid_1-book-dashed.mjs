export const name="lucid_1-book-dashed";
export const id="dl_80bfd42d1a0e4dbb861b";
export const url=new URL("../icons/lucid_1-book-dashed.svg?v=82d76fc77d54b552e871d2be895805afdd5c6bf48cb8dc47bfc3af3f22ad5595",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
