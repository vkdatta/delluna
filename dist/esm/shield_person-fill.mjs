export const name="shield_person-fill";
export const id="dl_7f2c1fac2df435315502";
export const url=new URL("../icons/shield_person-fill.svg?v=33de7075b8a1f9bf78bb5c5decea7bffeffc30242b17f4abfa64c0d365c6dbb1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
