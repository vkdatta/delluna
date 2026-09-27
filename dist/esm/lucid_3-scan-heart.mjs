export const name="lucid_3-scan-heart";
export const id="dl_6b5e635b6b1740ad9973";
export const url=new URL("../icons/lucid_3-scan-heart.svg?v=8ee5cf2aafe68e49bf954f42384e13824351e0eb0a75b687a92b47edef456bf8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
