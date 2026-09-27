export const name="lucid_1-asterisk";
export const id="dl_542ce640b5804a54af7c";
export const url=new URL("../icons/lucid_1-asterisk.svg?v=9874dbf50dc9a9e4a645845eb21ff5f6564006ecc09aba06028a188dd15efa91",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
