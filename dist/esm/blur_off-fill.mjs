export const name="blur_off-fill";
export const id="dl_1143ae6a2af8a9884223";
export const url=new URL("../icons/blur_off-fill.svg?v=83610c2561b049c7897e268c126337bfe42f6ddff17470d794d99b5fc5aad77d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
