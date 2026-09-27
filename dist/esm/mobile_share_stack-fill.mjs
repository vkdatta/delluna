export const name="mobile_share_stack-fill";
export const id="dl_6d0ea0baa896c63fb441";
export const url=new URL("../icons/mobile_share_stack-fill.svg?v=2129e517bb21b9550f1a5099715a6fac538d69cdceab04d4f0da6a996f00c6e6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
