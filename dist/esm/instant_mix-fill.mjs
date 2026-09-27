export const name="instant_mix-fill";
export const id="dl_cbcb37bc38285208ca27";
export const url=new URL("../icons/instant_mix-fill.svg?v=af803d316eab3d068cb6cff7181943336171669770680048c6523660a17bb93b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
