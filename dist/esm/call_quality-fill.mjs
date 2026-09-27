export const name="call_quality-fill";
export const id="dl_b66c3439f42973bfc673";
export const url=new URL("../icons/call_quality-fill.svg?v=4ab288c20958647980b2b1a10b5932d07dc8c90427a9132175fb4df1100bb91b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
