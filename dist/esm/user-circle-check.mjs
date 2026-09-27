export const name="user-circle-check";
export const id="dl_fe8858bbc0ef827c46d1";
export const url=new URL("../icons/user-circle-check.svg?v=2dc1ec8990ab727531e0c845b542a9772ff165933e63c991dfcadbd5321de807",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
