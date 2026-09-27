export const name="cheese-bold";
export const id="dl_86330c3639a3461086a2";
export const url=new URL("../icons/cheese-bold.svg?v=f5ca9b4614c3011fe3ab65d163a80ea53f14c92aa9fa145cc4b7afb4c817bc82",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
