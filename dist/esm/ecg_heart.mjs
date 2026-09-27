export const name="ecg_heart";
export const id="dl_b92beae0c4588c3bc15c";
export const url=new URL("../icons/ecg_heart.svg?v=5b37defe589e8397599a6012e55c0b78ecfe34a68a47d1c5f03d69364f799571",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
