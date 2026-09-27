export const name="supervisor_account";
export const id="dl_2d305a5a6846abcde61a";
export const url=new URL("../icons/supervisor_account.svg?v=267667ea0fca3a3a0079be837a7ac56a3d33f7838d83591ce1b494e93158e944",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
