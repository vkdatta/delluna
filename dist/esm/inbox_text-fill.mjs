export const name="inbox_text-fill";
export const id="dl_9c3ca6950b2453c1f791";
export const url=new URL("../icons/inbox_text-fill.svg?v=7efbe89f20ea4a740fdc7a71b23043016f04e608f0cb9e982b34c493042957c6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
