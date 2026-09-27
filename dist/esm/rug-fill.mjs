export const name="rug-fill";
export const id="dl_73f274ac614349698988";
export const url=new URL("../icons/rug-fill.svg?v=26c62523801fc78a0d5dd70a3c4d05e83e3b7d66683cdc2d6b76f963838ab5f6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
