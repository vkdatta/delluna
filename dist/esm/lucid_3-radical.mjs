export const name="lucid_3-radical";
export const id="dl_77bdb454d04a4939a122";
export const url=new URL("../icons/lucid_3-radical.svg?v=a2c919bd040bca0cd289eeb70b1e44e456ce7939e22b9aeacaa0b4caab4d2039",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
