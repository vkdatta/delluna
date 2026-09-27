export const name="currency-ngn-thin";
export const id="dl_17297fa9d5f64df99fa2";
export const url=new URL("../icons/currency-ngn-thin.svg?v=c625aa0abd23c51c0d7be930bfc96cdf4d018177e3a5d0ac946522f17b20e766",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
