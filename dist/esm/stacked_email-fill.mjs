export const name="stacked_email-fill";
export const id="dl_701c47e2ea2d6bdcd73a";
export const url=new URL("../icons/stacked_email-fill.svg?v=236a4aad61b1c17964ed090934c5b19c81afb0ff8293e586e3cb260a11ce2169",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
