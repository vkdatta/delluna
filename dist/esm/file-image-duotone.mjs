export const name="file-image-duotone";
export const id="dl_32f97d4af89f4b97aef5";
export const url=new URL("../icons/file-image-duotone.svg?v=1497ced443096e5c07c3ae89891c46952bd9aa9a05fae7e148c19d5839a482d2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
