export const name="approval_delegation_off";
export const id="dl_8af14b4655aa4bedb6c0";
export const url=new URL("../icons/A/approval_delegation_off.svg?v=c70aa1dd19f269033eb909b37ad2a0f887d5a5ebf6fb25330832b17074e3fbb8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
