export const name="lucid_3-scan-face";
export const id="dl_ce2a00f053054062862a";
export const url=new URL("../icons/lucid_3-scan-face.svg?v=fc19e7e928b3faed744531fd67da060bd66bec1a3cb26b3641c10b27c5096bd9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
