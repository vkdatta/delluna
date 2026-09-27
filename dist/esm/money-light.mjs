export const name="money-light";
export const id="dl_e87b90a1fffd4d248949";
export const url=new URL("../icons/money-light.svg?v=03d1e3c2e2ba132639e59162d5612e83be01fd2e093f7377e1027d8058cc6f0d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
