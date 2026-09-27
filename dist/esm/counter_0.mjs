export const name="counter_0";
export const id="dl_8fb2c4873b71f2fe3a47";
export const url=new URL("../icons/counter_0.svg?v=5eb0f543781461a616b174a67247fa558fef6fb4f7b54699ac096f922b08987e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
