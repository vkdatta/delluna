export const name="intersect-three-thin";
export const id="dl_16f0b7fb3ca04ebb9814";
export const url=new URL("../icons/intersect-three-thin.svg?v=395f04ca5f8e3a18d0eda75e6f4f670f3980fda2fa9072577c7da3f5778e3276",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
