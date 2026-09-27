export const name="crosshair-simple-bold";
export const id="dl_876cee174b30407a89da";
export const url=new URL("../icons/crosshair-simple-bold.svg?v=f9e157e7cf065534a715d5953d6a258af8c2f982d2604399468f4a7f546e6dbd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
