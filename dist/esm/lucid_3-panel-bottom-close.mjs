export const name="lucid_3-panel-bottom-close";
export const id="dl_9d3f9cbac47b4e749b67";
export const url=new URL("../icons/lucid_3-panel-bottom-close.svg?v=452e667a64a474ff129ba875368eee3eae112bc0ef96e16e873c82707c53cb92",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
