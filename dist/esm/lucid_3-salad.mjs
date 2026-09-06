export const name="lucid_3-salad";
export const id="dl_53eeb309ba414c199892";
export const url=new URL("../icons/lucid_3-salad.svg?v=a68a7e523c0e1b7484ba5a93b05cd139d2392d63fab2e60136a70378fcaa30dc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
