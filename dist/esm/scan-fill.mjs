export const name="scan-fill";
export const id="dl_70a66889e7b5b29a7338";
export const url=new URL("../icons/scan-fill.svg?v=8cbfcee7f92f73cf10fd1735770ec9897b2e9e9d1d731947e2493827cbf05867",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
