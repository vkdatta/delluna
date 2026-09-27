export const name="mobile_check";
export const id="dl_f3410b9eb367eeca047f";
export const url=new URL("../icons/mobile_check.svg?v=82dfa9e09d8623ede234ed82417584a41c2e6b2e1fce8a586403e8f2e763f3e6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
