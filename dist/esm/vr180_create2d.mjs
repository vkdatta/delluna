export const name="vr180_create2d";
export const id="dl_e0fa28ef1d54e10a2095";
export const url=new URL("../icons/vr180_create2d.svg?v=b39975f6f8df456e925a62dc80f69a9fce12005405962b9e3f76a546ea3284ca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
