export const name="graduation-cap-thin";
export const id="dl_487674823ca949deb619";
export const url=new URL("../icons/graduation-cap-thin.svg?v=988a000f776ecb91922348f3b3c2ce20bdd8b6e4d4bcd872b0ae6c790c4d7b0e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
