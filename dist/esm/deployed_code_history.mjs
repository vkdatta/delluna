export const name="deployed_code_history";
export const id="dl_6c02d51dafe91879cc7c";
export const url=new URL("../icons/deployed_code_history.svg?v=0724f9836aa533c06b6463d29f2a51f0fee8da359cdfd64aaeb935260a45eec6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
