export const name="router_off-fill";
export const id="dl_aa581088f19115d2e37c";
export const url=new URL("../icons/router_off-fill.svg?v=cc42aca12dffd65363ee06df04eeb952a2814b946ebab398007add7118a3dd5e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
