export const name="arrow-up-thin";
export const id="dl_c48ff22a299341b88c3a";
export const url=new URL("../icons/arrow-up-thin.svg?v=e0158f5e701041aff5de4974a7d38d9550f68b73768dd1caf5f1e06231611c1b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
