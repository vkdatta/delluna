export const name="lucid_2-decimals-arrow-right";
export const id="dl_b93165c2e0fd448c90a8";
export const url=new URL("../icons/lucid_2-decimals-arrow-right.svg?v=c22bb1f08afc5bed864618ef76615d200c04defb8dcbaa82fa1535df1f786fe1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
