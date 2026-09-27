export const name="arrow-right-thin";
export const id="dl_3e74be9e232f4377a7c0";
export const url=new URL("../icons/arrow-right-thin.svg?v=0ac55fd096c57748fe06d35b2df90a5c692656a756eefec0acddaba0e9f14e24",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
