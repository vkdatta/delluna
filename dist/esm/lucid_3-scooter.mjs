export const name="lucid_3-scooter";
export const id="dl_9d362a84219f401fab13";
export const url=new URL("../icons/lucid_3-scooter.svg?v=b38690b9f2f613df010282f400c23c1493be13ada634ab436008bdba645f14e8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
