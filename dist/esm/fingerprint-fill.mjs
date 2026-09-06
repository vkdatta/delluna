export const name="fingerprint-fill";
export const id="dl_3e2d2a8aa72a435ab50f";
export const url=new URL("../icons/fingerprint-fill.svg?v=802bd3f3b8e6406f7939fb3df1cb3d1cd26291bbdaa17bf28b932f0770703c37",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
