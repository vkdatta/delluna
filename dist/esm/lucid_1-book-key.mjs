export const name="lucid_1-book-key";
export const id="dl_30bde8b47f814afca5d7";
export const url=new URL("../icons/lucid_1-book-key.svg?v=9bebc0c2347f2f4e667cd09499bd9f3c18b0ea5a7fe412e6b5d0f266caa0965b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
