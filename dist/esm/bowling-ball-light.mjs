export const name="bowling-ball-light";
export const id="dl_160931d596e84f33a01f";
export const url=new URL("../icons/bowling-ball-light.svg?v=7fa72c8d00e264576c77d046be7f95e211554513c8c6e47d26cdd1d5905e8601",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
