export const name="iframe-fill";
export const id="dl_0df1cb91ffff54f3468f";
export const url=new URL("../icons/iframe-fill.svg?v=0de0bedd58ffbc3d9c2a3673891412aad855d894f416541551e87719600f2d77",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
