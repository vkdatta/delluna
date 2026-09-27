export const name="rv_hookup";
export const id="dl_2d4f065b067470540479";
export const url=new URL("../icons/rv_hookup.svg?v=f770047000475c0b86cbdb4fade2bfc64ffc8e102f5971593306c0e17b26d66d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
