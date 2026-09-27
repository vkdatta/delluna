export const name="deployed_code_history";
export const id="dl_32b1d0fb4534a3dce8f8";
export const url=new URL("../icons/deployed_code_history.svg?v=9a019bfd1d9c48f68cef231910e2671f093cacb8070d82e0a86419bb3680e0b7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
