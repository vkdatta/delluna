export const name="phone-plus-fill";
export const id="dl_a46f9b092a2f46d0b4ef";
export const url=new URL("../icons/phone-plus-fill.svg?v=5af953de3ff099f39c47fe364177915310d345d4b4e3008747b9a29d09c91d11",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
