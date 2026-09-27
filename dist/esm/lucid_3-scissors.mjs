export const name="lucid_3-scissors";
export const id="dl_298000f037314a6da436";
export const url=new URL("../icons/lucid_3-scissors.svg?v=bc702211e8d1b0d0852bb38e289c218263bfb2d60321d1f1127b74d9526253b4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
