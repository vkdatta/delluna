export const name="battery_share-fill";
export const id="dl_eb17935db92346229430";
export const url=new URL("../icons/B/battery_share-fill.svg?v=5ced0f0d0c94cc9fcc6ae6587b6e3b95eed0f21f10134bec0126b0cc6b149e3a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
