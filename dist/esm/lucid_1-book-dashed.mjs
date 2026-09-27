export const name="lucid_1-book-dashed";
export const id="dl_80bfd42d1a0e4dbb861b";
export const url=new URL("../icons/lucid_1-book-dashed.svg?v=cc06224595dc0a540f172f1af498c06b92ef1b5caf1546f02b97bcfbf94c2e47",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
