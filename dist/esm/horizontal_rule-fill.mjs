export const name="horizontal_rule-fill";
export const id="dl_f2944e380888485e8134";
export const url=new URL("../icons/H/horizontal_rule-fill.svg?v=0d93f3a7c414bfd1265921d144c701b782e897a0a47e4744a606d2e3882a278d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
