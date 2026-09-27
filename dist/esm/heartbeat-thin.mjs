export const name="heartbeat-thin";
export const id="dl_ae5e619b6b0a4cacb36e";
export const url=new URL("../icons/heartbeat-thin.svg?v=b31c35b559da63047d9ff53a3853d1c72e970bf331a67d29bdc3511de9480f43",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
