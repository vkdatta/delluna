export const name="at-fill";
export const id="dl_a8946391bc9e481b9675";
export const url=new URL("../icons/at-fill.svg?v=bcc1d83827d5ff72a49befb2e03820284372e2e5b401847346ce0e70aa5918a6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
