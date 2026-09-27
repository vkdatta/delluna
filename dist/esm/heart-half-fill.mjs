export const name="heart-half-fill";
export const id="dl_44b0ec5bdb3e4513a14d";
export const url=new URL("../icons/heart-half-fill.svg?v=b64aaaed969d8e51d85eaa59b395e3689e0960a027376338b5b64a5a4efefdd0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
