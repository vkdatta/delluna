export const name="savings-fill";
export const id="dl_9b3af65312e145a58497";
export const url=new URL("../icons/S/savings-fill.svg?v=e755e08eec246c68857519e84831a1e5544803cac26b2d0d859c214a93863cab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
