export const name="paper-plane-fill";
export const id="dl_acd87fd173964c3c931b";
export const url=new URL("../icons/paper-plane-fill.svg?v=adfada0c5fee26934c41b3649660f01321dbabd658df1f36a80767362c4940dd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
