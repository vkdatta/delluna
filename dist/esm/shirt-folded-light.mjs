export const name="shirt-folded-light";
export const id="dl_e8e62557ac7db94eee9d";
export const url=new URL("../icons/shirt-folded-light.svg?v=a4f1fe9600184924a0c32287effaf672f20937787421cab8484478c3ffffd224",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
