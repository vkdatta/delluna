export const name="crop_2_3-fill";
export const id="dl_2e6c83f044defb0eefb0";
export const url=new URL("../icons/crop_2_3-fill.svg?v=f259d5ee0e968ee91a5443d34f2ccea85b6fd2004f69cef1422b7ff973617565",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
