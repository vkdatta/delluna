export const name="cloud-rain-thin";
export const id="dl_cc7e427f2bb74bc68970";
export const url=new URL("../icons/cloud-rain-thin.svg?v=cf570fe32567bf9cbd21329939bb2fb8a88435494795e2e36d95bef2562c60b1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
