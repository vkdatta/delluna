export const name="lucid_1-arrow-big-down";
export const id="dl_f4ac0b4d3e7540d7bdc7";
export const url=new URL("../icons/lucid_1-arrow-big-down.svg?v=d9fcc51e805ea0f55e43a09749489480dbaa0ddfafc14f8ff1528bfb888959e0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
