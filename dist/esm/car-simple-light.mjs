export const name="car-simple-light";
export const id="dl_351ddbd7b0c1449aa451";
export const url=new URL("../icons/car-simple-light.svg?v=46abc562382088b1e857ad8473702f0beb65f5769d8db7a7880b18cd3f5e5f40",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
