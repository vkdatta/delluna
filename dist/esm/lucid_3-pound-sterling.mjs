export const name="lucid_3-pound-sterling";
export const id="dl_bf86bd18377d4b84885e";
export const url=new URL("../icons/lucid_3-pound-sterling.svg?v=5ecab1f4ee62ab14adadaf14eaed1de41a2e65f90f15f298e0117b4f7e0f022b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
