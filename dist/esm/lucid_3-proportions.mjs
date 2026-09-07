export const name="lucid_3-proportions";
export const id="dl_c7d97a87897f430eb2c1";
export const url=new URL("../icons/lucid_3-proportions.svg?v=c248b735a881484f79795d5cccaf28c4e311d09975bce2cc4d89d6bcfe46efd0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
