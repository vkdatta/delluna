export const name="lucid_3-spool";
export const id="dl_7cd7dac745604f5caab4";
export const url=new URL("../icons/lucid_3-spool.svg?v=262f7bebd383a1d0f0286bf79f9e2b7df602a09a4eb9e293fb4e361c7de7a0e5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
