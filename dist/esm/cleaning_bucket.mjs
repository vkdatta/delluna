export const name="cleaning_bucket";
export const id="dl_803d5b168177926c8850";
export const url=new URL("../icons/cleaning_bucket.svg?v=371af997e669b17f70bef07e241fb382185081122c3acd27b831104b1ec5fe3a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
