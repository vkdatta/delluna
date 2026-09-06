export const name="cloud-check-thin";
export const id="dl_9984ce274c8d416b99c8";
export const url=new URL("../icons/cloud-check-thin.svg?v=76d159c22cfc7e58fd4d83d93d1ac5b20a5a36dd7d4fe7b134eb6ef5a7f1766c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
