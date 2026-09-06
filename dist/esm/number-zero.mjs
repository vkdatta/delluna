export const name="number-zero";
export const id="dl_4ce6867c8a8545d9a496";
export const url=new URL("../icons/number-zero.svg?v=7920cd58971e29dd31288b0340f4dd6281accdabb530cdfa3b5cdef953ae4e23",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
