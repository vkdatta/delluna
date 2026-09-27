export const name="next_plan-fill";
export const id="dl_ea1de0d3e4ae54b5b1f6";
export const url=new URL("../icons/next_plan-fill.svg?v=97b980c38c0c4d9c04df0a2256633057af18fe1ad145c04bf52416db867f94ee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
