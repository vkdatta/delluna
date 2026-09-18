export const name="touch_app";
export const id="dl_37795edb2d90427a9d84";
export const url=new URL("../icons/touch_app.svg?v=dda2add51c642fd778334ce1fcae7f4c0d44477b8e5371715c2fe7710eb59281",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
