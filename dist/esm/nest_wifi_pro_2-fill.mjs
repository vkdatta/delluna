export const name="nest_wifi_pro_2-fill";
export const id="dl_ccae8b0dd5c785f06d30";
export const url=new URL("../icons/nest_wifi_pro_2-fill.svg?v=ee4234206313ddf5d8456bfebbb427a588ec04c935ae16ba9735eb1d55d65f5d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
