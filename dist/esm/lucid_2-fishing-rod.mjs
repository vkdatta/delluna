export const name="lucid_2-fishing-rod";
export const id="dl_ae11d52ebba644c3ac13";
export const url=new URL("../icons/lucid_2-fishing-rod.svg?v=d1177fccaead99f8c0181f955ada03575f39b7b71222ea7becd283bc7b69eb5a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
