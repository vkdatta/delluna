export const name="align-left-thin";
export const id="dl_3c23fd36b2384723bff7";
export const url=new URL("../icons/align-left-thin.svg?v=5a5ad760a2b9c1377abac73232221296beec8a8b0378ee928ac3ef71f88e0af4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
