export const name="sticker";
export const id="dl_ba49875b9453340bb3ad";
export const url=new URL("../icons/sticker.svg?v=fbeb871f17fc712e5f645af9e18b8699336121dba2185dbde2d681814721dfd8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
