export const name="switch_access-fill";
export const id="dl_61cd58ba107f468d93ce";
export const url=new URL("../icons/switch_access-fill.svg?v=c98cc94569746a2858503b7519699c49a776ed8a924d691521c9cdf92921b363",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
