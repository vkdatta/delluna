export const name="exclamation-mark-thin";
export const id="dl_0637c17bcbb94a9a8820";
export const url=new URL("../icons/exclamation-mark-thin.svg?v=1e2747d0424dae2899169dc9b862fca49a7a54fa8a67759dd8d8edf57515cb82",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
