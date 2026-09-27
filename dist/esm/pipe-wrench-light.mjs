export const name="pipe-wrench-light";
export const id="dl_44b157fe813b4d8c9290";
export const url=new URL("../icons/pipe-wrench-light.svg?v=1b6a389a26e5486bf7f8c2b5ca1c4a8091b70cf7cd52061162bb20f1adc77790",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
