export const name="deployed_code";
export const id="dl_46b6f3baecb1ed64d6fa";
export const url=new URL("../icons/deployed_code.svg?v=be53244055fb0b19d1f86f9a83fbfec338ebc43c9c2a514bd30c05418cf40c87",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
