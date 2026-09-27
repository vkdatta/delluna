export const name="lucid_1-arrow-big-down";
export const id="dl_f4ac0b4d3e7540d7bdc7";
export const url=new URL("../icons/lucid_1-arrow-big-down.svg?v=1b300ad2ec5912a81716282fe3a37bb88f2c2a440d50dc65a3c221b3bdba7f46",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
