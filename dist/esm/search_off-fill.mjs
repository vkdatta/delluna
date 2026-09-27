export const name="search_off-fill";
export const id="dl_6d3461fd15ea914c2a60";
export const url=new URL("../icons/search_off-fill.svg?v=5b00ae8883cfe32f1a8001deb794bbb7f910e0e37efa8d0861ecc8804a21a20c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
