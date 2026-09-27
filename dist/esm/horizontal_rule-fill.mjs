export const name="horizontal_rule-fill";
export const id="dl_48a4f4c2886197e3312a";
export const url=new URL("../icons/horizontal_rule-fill.svg?v=15df281e56aeeafdcf87abc88c8b183299c127d07dece253a5c69ce4c3e041a6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
