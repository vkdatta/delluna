export const name="manage_accounts-fill";
export const id="dl_4273623147a83333be0d";
export const url=new URL("../icons/manage_accounts-fill.svg?v=361928c9f2a7c2e372c98f224c0b6734c9debc9b1e3ddcd47854dce4589a1429",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
