export const name="photo_album";
export const id="dl_f200e1b047251ceff1e1";
export const url=new URL("../icons/photo_album.svg?v=f1dfa89f520890954187ffe8c32ce4fcac4fd05114bd9578c79497995b7b8510",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
