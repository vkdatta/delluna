export const name="dataset";
export const id="dl_aae1452965a4212793d9";
export const url=new URL("../icons/dataset.svg?v=1910ed8a8df153b4a2b6adc070b44440bcb080e861dac21b0d4b11809a2d06dd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
