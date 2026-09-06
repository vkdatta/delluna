export const name="lucid_1-check-check";
export const id="dl_5aae1239dd184ad3bfc1";
export const url=new URL("../icons/lucid_1-check-check.svg?v=1e30cd9d57643265b77c0b7e6dc0b3d46e2e21cad6a8b6a2458294fc8983cd61",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
