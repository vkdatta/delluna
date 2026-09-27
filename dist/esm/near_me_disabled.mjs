export const name="near_me_disabled";
export const id="dl_af36e6ec1beb261c915f";
export const url=new URL("../icons/near_me_disabled.svg?v=bc05df3b9d8cfc16ad4d40bc3e1dbe1c321697b6fac05ca4cfd45d0aa360c4a5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
