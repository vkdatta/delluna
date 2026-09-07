export const name="heartbeat-thin";
export const id="dl_ae5e619b6b0a4cacb36e";
export const url=new URL("../icons/heartbeat-thin.svg?v=b932fd6f8a209dfbb571928bfbe52f263c332f49fdca1668f974a51c3038ea4b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
