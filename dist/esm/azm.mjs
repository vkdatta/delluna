export const name="azm";
export const id="dl_d26cfc7b79be14eeec3a";
export const url=new URL("../icons/azm.svg?v=47bc92d50bbfa95e9df4d00c7c9c86df117d7922a014cbfe5578d26342c6600f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
