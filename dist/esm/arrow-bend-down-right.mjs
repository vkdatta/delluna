export const name="arrow-bend-down-right";
export const id="dl_a93cb32b08ce40e9ac7e";
export const url=new URL("../icons/arrow-bend-down-right.svg?v=839957cb45d1d347947750216f7c277b12d4f6e7c1663d5bc5f5cb852ff22a43",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
