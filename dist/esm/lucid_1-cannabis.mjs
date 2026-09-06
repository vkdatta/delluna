export const name="lucid_1-cannabis";
export const id="dl_e6e5aabf860144c3806c";
export const url=new URL("../icons/lucid_1-cannabis.svg?v=c70bdb8445ae33d681dd75a791530f5db82207c9cc231bfd78f4180c269c900a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
