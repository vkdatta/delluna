export const name="sweep-fill";
export const id="dl_e65811235b3a9811e0ae";
export const url=new URL("../icons/sweep-fill.svg?v=8e141d2bf0dbe4dd452a4a273d2b35030a063caafa34d4b69063b2cd5472444d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
