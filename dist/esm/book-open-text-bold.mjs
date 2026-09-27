export const name="book-open-text-bold";
export const id="dl_65aec23e4a804876b78e";
export const url=new URL("../icons/book-open-text-bold.svg?v=24ecf2fd71f90296f6743a7c48583d291e7167c5ae43575cfda5b3cc5d9946ac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
