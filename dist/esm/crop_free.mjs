export const name="crop_free";
export const id="dl_10accac172d4d17bccc1";
export const url=new URL("../icons/crop_free.svg?v=30f8ca624cc966ffbda8e22459ee089a96c71c40dab851dc724951d002a34415",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
