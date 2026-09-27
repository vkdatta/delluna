export const name="lock-key-open-fill";
export const id="dl_ed52b268a26046debb9b";
export const url=new URL("../icons/lock-key-open-fill.svg?v=a55c6751200adbd1d5d00327d813253025b0c204a4a87b5e9860aeb5265fa72a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
