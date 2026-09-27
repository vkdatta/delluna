export const name="counter_0-fill";
export const id="dl_eb9f7d3235f3f1f2991a";
export const url=new URL("../icons/counter_0-fill.svg?v=f7aa6efaa2d5ee3f9707c9f2fa504cd5239b3a26fd82144edc05c552e7ebe397",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
