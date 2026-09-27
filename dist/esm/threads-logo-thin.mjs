export const name="threads-logo-thin";
export const id="dl_21dd5b4364aec0de7ed4";
export const url=new URL("../icons/threads-logo-thin.svg?v=ac8446e1e1db096cc888daac1438e6bc748b10231f5a2c1439c5a0f5e02da9b0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
