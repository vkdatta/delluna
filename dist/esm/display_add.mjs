export const name="display_add";
export const id="dl_fbe78be4ff864f64be82";
export const url=new URL("../icons/D/display_add.svg?v=90d7e60a691421af55deef500ff0164bfebdc0225fd3b25ec300cb453f21ab3f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
