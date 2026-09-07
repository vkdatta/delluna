export const name="crosshair-simple-fill";
export const id="dl_6c5da3710c184d37907a";
export const url=new URL("../icons/crosshair-simple-fill.svg?v=f81f539d4f9cca8d6586121e3e5949de02e00cf0b538b57e80e0ac2c7e2f56b0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
