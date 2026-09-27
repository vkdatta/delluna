export const name="no_accounts";
export const id="dl_71d9e603e4ed86662f9d";
export const url=new URL("../icons/no_accounts.svg?v=c5227dce9685dabf6418db542e8caacf38d065580e515ee1e3f3e2efd6c920b1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
