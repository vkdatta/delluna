export const name="touchpad_mouse-fill";
export const id="dl_316a24d830e14350a183";
export const url=new URL("../icons/touchpad_mouse-fill.svg?v=ec0e6a7668b1d8a98a6071b0aad248215ff7f08e8a450533d969ec02c8da158f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
