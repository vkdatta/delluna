export const name="number-seven-light";
export const id="dl_c5bec27b949446bd988f";
export const url=new URL("../icons/number-seven-light.svg?v=4a44fe17296186091dc5a42130dab2134aa6270d5fecff34e7936c0b88272ba8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
