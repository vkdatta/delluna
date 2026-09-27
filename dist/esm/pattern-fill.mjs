export const name="pattern-fill";
export const id="dl_cf98e96bc146810320e6";
export const url=new URL("../icons/pattern-fill.svg?v=f4225487b81ffa982c47d33b86ba4b77b3f54b7161f46a7cab0bf6166ee10e98",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
