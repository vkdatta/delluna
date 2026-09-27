export const name="circle-notch-bold";
export const id="dl_2e95edad079f42b5a2f1";
export const url=new URL("../icons/circle-notch-bold.svg?v=fbcde37fabc8ffa3f1c1a3c42424b1812711893b430a134e3b8ba6477f90271e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
