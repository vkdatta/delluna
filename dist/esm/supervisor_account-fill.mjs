export const name="supervisor_account-fill";
export const id="dl_fa32668407556f940a28";
export const url=new URL("../icons/supervisor_account-fill.svg?v=5645c329ff25698cabf4709665701803616e878116af579e2edb7fc543b876c0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
