export const name="quick_reorder-fill";
export const id="dl_849f0a80a32f9bd319df";
export const url=new URL("../icons/quick_reorder-fill.svg?v=51252ad65b852c1e897f2aa26b614e3608beb0d9fb1bac255faac9bc55bb4b0d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
