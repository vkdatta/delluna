export const name="lucid_3-square-arrow-right";
export const id="dl_ffb095a64bdf4caa92b7";
export const url=new URL("../icons/lucid_3-square-arrow-right.svg?v=0d81572e73f69158aab6bc8214fdb100b209d55c6ad463f1815b97c8652ab408",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
