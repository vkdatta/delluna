export const name="slider";
export const id="dl_28da3d9c733545128e90";
export const url=new URL("../icons/slider.svg?v=3c369cbf3c13936e761324c6bc4cd59d3cd2d4efee31774c87029165af1c385e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
