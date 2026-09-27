export const name="lucid_3-scan-face";
export const id="dl_ce2a00f053054062862a";
export const url=new URL("../icons/lucid_3-scan-face.svg?v=ac99524c40b694cb8f9ad496a574506d1a1517d1645a2455a92bf60488d19612",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
