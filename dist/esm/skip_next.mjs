export const name="skip_next";
export const id="dl_0d01a73ce890338ae1e5";
export const url=new URL("../icons/skip_next.svg?v=689918ac2f721e3a58b51d82995e300bcc2303fe4bb71399ceb69a06c9da0d0a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
