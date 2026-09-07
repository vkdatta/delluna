export const name="car-simple-light";
export const id="dl_351ddbd7b0c1449aa451";
export const url=new URL("../icons/car-simple-light.svg?v=66651dc49b92e24be254d2cf60daf4b7bfb628b3da0267f32fe7d632f6d06e19",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
