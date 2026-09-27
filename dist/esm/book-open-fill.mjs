export const name="book-open-fill";
export const id="dl_320644072af84426a782";
export const url=new URL("../icons/book-open-fill.svg?v=3d451318b992e6b24fae853eabf063b68afa25f2ce9d41bd512d3cc46b0953ed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
