export const name="browse_gallery";
export const id="dl_03c4d2a07a9271f781b1";
export const url=new URL("../icons/browse_gallery.svg?v=2d5ca5d4b6106fff9d9964997859dfffc54990097606b025fbdfee89c5cdd75a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
