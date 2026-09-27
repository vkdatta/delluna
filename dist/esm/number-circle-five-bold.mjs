export const name="number-circle-five-bold";
export const id="dl_1fbfdd1922ed434986d0";
export const url=new URL("../icons/number-circle-five-bold.svg?v=f392b86ccb60de3a9ad8f9452e8647734bea7792e5e621568a291c57f3e9501a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
