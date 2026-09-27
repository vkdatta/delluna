export const name="laptop_chromebook-fill";
export const id="dl_e1aecf8775e088772f90";
export const url=new URL("../icons/laptop_chromebook-fill.svg?v=181ebc4b61838f2b22ff8298414ad524b24ce9eb0190b6e32d0418f88489fd28",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
