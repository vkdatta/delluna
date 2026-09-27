export const name="bicycle-light";
export const id="dl_ff8a2c2f0a95438496f7";
export const url=new URL("../icons/bicycle-light.svg?v=2306707487b6ad9628a3d4d28ca5b908b1cb43c35c1edf3a55c7f4462d444f46",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
