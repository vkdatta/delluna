export const name="tablet_android";
export const id="dl_191b5f9d86604c5b0aa2";
export const url=new URL("../icons/tablet_android.svg?v=6b197ad64465c4bfe911aafe702821290eca3cbfe27db393d9d3881c618eba48",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
