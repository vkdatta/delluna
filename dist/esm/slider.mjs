export const name="slider";
export const id="dl_28da3d9c733545128e90";
export const url=new URL("../icons/slider.svg?v=8352e69ba1d042b0512eb959fabbbc2ba5f2701490c7eedd48fe5eccf00f4cfd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
