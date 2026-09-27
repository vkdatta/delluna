export const name="gpp_bad-fill";
export const id="dl_7a7e0c2efbb4aac4d16e";
export const url=new URL("../icons/gpp_bad-fill.svg?v=6b7cb31e314dc1187706e52fb99ec1594281806e7ae5ae1efca9508a793b9e61",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
