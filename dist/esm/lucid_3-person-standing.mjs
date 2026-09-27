export const name="lucid_3-person-standing";
export const id="dl_aeede8789c2b47038369";
export const url=new URL("../icons/lucid_3-person-standing.svg?v=4fd9bb4e27939f7d7494c255b279c7a881576128a823076468e13eae645aeb32",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
