export const name="mobile_rotate-fill";
export const id="dl_451c85fd9aa1403404ed";
export const url=new URL("../icons/mobile_rotate-fill.svg?v=ff920e3b70f80218430e3b5ade2b03c8fb2e2502a04364885c46a27712b68fa2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
