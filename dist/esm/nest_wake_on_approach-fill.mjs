export const name="nest_wake_on_approach-fill";
export const id="dl_5e30acf6746333bd9587";
export const url=new URL("../icons/nest_wake_on_approach-fill.svg?v=2a5e15ab6160d0437a2b67acd7ccf4815f5260c9eab2bbfad3856be2bdae80a7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
