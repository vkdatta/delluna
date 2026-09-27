export const name="fingerprint-light";
export const id="dl_a93c39646e9a4f06a16a";
export const url=new URL("../icons/fingerprint-light.svg?v=5e93ac1981ab10018d24a9fb88018a5c4ff2aad1c9fe483928901aeb3f7ec967",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
