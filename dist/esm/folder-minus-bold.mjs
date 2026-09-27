export const name="folder-minus-bold";
export const id="dl_73a8cdd03f704cabb628";
export const url=new URL("../icons/folder-minus-bold.svg?v=96ac3c51929fc3298e1bf0c781222cafa39ecb2553dba62eee609895be1179f6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
