export const name="call_to_action-fill";
export const id="dl_d4fd7b95e55595110811";
export const url=new URL("../icons/call_to_action-fill.svg?v=6c7f7d55a455564d74a71feba0116a6112b5240b9146b0850e98b69402e78345",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
