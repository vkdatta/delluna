export const name="number-circle-three-light";
export const id="dl_571423a324f84e81bb2b";
export const url=new URL("../icons/number-circle-three-light.svg?v=43d227e80e30e0a62143f6727547aab07e0c729b91847fb254e5f2445f78bdf6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
