export const name="caret-circle-up-thin";
export const id="dl_6bd4e2c314744748ab4d";
export const url=new URL("../icons/caret-circle-up-thin.svg?v=8c9a5d1e7808494309af3c2b19eb3c1e15066797f83b4e536d31beea09c2a6ea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
