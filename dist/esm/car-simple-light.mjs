export const name="car-simple-light";
export const id="dl_351ddbd7b0c1449aa451";
export const url=new URL("../icons/car-simple-light.svg?v=f5a4bf66e7e796030bfca19baeb8ec55ac53d764f38266601be4d62c6c5d89b7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
