export const name="speed_0_75";
export const id="dl_028f85f6d3764b6735f9";
export const url=new URL("../icons/speed_0_75.svg?v=f86bcbb1d12e74523dcfccc4210e5b8d780f0e67e2bde2fe62ba13c9fdc288d6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
