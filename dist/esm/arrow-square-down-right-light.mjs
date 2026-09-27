export const name="arrow-square-down-right-light";
export const id="dl_d56e67b0f7d6483eacad";
export const url=new URL("../icons/arrow-square-down-right-light.svg?v=77325db9f5e720a454666dcbda019c6dac34bf6c0434219120f55f0fb634aa78",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
