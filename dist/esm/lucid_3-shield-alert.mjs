export const name="lucid_3-shield-alert";
export const id="dl_727acaccf92e4ad19909";
export const url=new URL("../icons/lucid_3-shield-alert.svg?v=02011cb4cd3eb6c88cd2cf768bcfe96e4dc45688caf3c8e0eb5fe1a25c97af5b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
