export const name="hand-palm-duotone";
export const id="dl_7374308e592e4869995c";
export const url=new URL("../icons/hand-palm-duotone.svg?v=5e25caf68f0a57105c787e1c8c1d3bc64721e692356b05db301331c0ae002aed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
