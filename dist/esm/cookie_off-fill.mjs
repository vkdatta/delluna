export const name="cookie_off-fill";
export const id="dl_d790abc80827eaa961e1";
export const url=new URL("../icons/cookie_off-fill.svg?v=92fad3879917663590710afe5159d62bdf3c47706b9c3ad336480d59440aa08f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
