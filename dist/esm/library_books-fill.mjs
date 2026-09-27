export const name="library_books-fill";
export const id="dl_e4052025c9b0d04ce3db";
export const url=new URL("../icons/library_books-fill.svg?v=b0882517cddb87a02b2786db75d746579e8fe1268f311ae68ec7cbce0e90e445",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
