export const name="crop_5_4-fill";
export const id="dl_d2228e121a52bf568942";
export const url=new URL("../icons/crop_5_4-fill.svg?v=a3e723da47a18a4f412abd771d8850e3fb4cd03e0fa62fac9cbb1e9dfb326c9b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
