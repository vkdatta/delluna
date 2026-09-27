export const name="star-of-david-duotone";
export const id="dl_2db92afc934aadef3614";
export const url=new URL("../icons/star-of-david-duotone.svg?v=27558cf6f8280a88945c7b801858fb8553568e7cea38b0c0e3211750abbdc304",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
