export const name="waves-duotone";
export const id="dl_b7c143021b94db93a2e4";
export const url=new URL("../icons/waves-duotone.svg?v=ab7d41281a01050e85b92a12c6f2b152a34634c77a13305fd9c31f3e42bc833e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
