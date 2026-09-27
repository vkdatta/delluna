export const name="avocado-duotone";
export const id="dl_531199348831400e9c22";
export const url=new URL("../icons/avocado-duotone.svg?v=1fdbddccc2d151033b78d9d76aef6e87b723c3fdb6a9d83ad6346fb865b73239",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
