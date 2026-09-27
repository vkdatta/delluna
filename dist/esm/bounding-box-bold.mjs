export const name="bounding-box-bold";
export const id="dl_134a9d38def045588264";
export const url=new URL("../icons/bounding-box-bold.svg?v=014ed1ade6caed26f00b0da655b27412c567e61fcf3095fd4b59ffee1eecb3d5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
