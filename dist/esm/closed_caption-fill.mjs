export const name="closed_caption-fill";
export const id="dl_4712e7aeabed2963f833";
export const url=new URL("../icons/closed_caption-fill.svg?v=bdd306f00682f2744f2c9f8bdde57e800eea970e3af4bc0b0f3524a003ed391f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
