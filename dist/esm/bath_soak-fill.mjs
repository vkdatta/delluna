export const name="bath_soak-fill";
export const id="dl_789566605bd3a0a2d501";
export const url=new URL("../icons/bath_soak-fill.svg?v=a2b27788ff1a26aa962c01bdaddfbbc038925f787656a61eb4a142808cefe8ca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
