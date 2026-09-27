export const name="dual_screen-fill";
export const id="dl_d1ad2f16089f89e3543a";
export const url=new URL("../icons/dual_screen-fill.svg?v=ae88fb3479a247e96be364be04f6d51ff6fdad3cae5c65d3f7fbbc29956b3615",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
