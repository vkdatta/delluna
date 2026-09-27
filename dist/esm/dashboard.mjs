export const name="dashboard";
export const id="dl_9e41244869ac84590d14";
export const url=new URL("../icons/dashboard.svg?v=5e3df429d7574c46ead396ce80b7d0f7f855a9e2969f0d94764ee7cfc3788a0a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
