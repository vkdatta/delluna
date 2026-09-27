export const name="eco-fill";
export const id="dl_9d15dbd119890aee5ac0";
export const url=new URL("../icons/eco-fill.svg?v=b2c82cdb732e9c612db90843523b2044d4b2e6a2a87c9c5e6d7a6a7ab16bb7f4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
