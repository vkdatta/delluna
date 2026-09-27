export const name="envelope-open-fill";
export const id="dl_fedec23456b1466bb182";
export const url=new URL("../icons/envelope-open-fill.svg?v=50dbcd053babbaa4e260d006f80afd803299f390c4db78f4bd7ddca554fed65e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
