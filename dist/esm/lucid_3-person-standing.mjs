export const name="lucid_3-person-standing";
export const id="dl_aeede8789c2b47038369";
export const url=new URL("../icons/lucid_3-person-standing.svg?v=e9c4b3164b5814248e34fd82e969cbaa00984441cb65dfc65db3090c6747b56d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
