export const name="lucid_1-book-plus";
export const id="dl_64d2e0aa23324a6bb349";
export const url=new URL("../icons/lucid_1-book-plus.svg?v=90a1bfc8a8c50fb338855bb2fe13bb945db938f1e4c426220484cd0bd51e8549",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
