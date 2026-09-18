export const name="star_shine-fill";
export const id="dl_780f48727ee94288bc1a";
export const url=new URL("../icons/S/star_shine-fill.svg?v=b6a69114965435f1a315558ade8d0676e205ddf67363e07b084840929141a425",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
