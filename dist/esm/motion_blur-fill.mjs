export const name="motion_blur-fill";
export const id="dl_da9da461445d35a96d45";
export const url=new URL("../icons/motion_blur-fill.svg?v=617068358434a279ed655b8a3a7ab56a0bb6893773659a57f5e0d8dce0cb0cd4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
