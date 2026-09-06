export const name="lucid_2-fishing-rod";
export const id="dl_ae11d52ebba644c3ac13";
export const url=new URL("../icons/lucid_2-fishing-rod.svg?v=126bce5d041fa6407e1be6d9ad710edce7d5b18ca000f1de55462e37679e92ed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
