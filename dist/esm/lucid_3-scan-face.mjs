export const name="lucid_3-scan-face";
export const id="dl_ce2a00f053054062862a";
export const url=new URL("../icons/lucid_3-scan-face.svg?v=ca77b35ee72f020d2cf6256f03f4106d54c844678fa3f4d57f36ee577dbf6867",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
