export const name="healing-fill";
export const id="dl_ed1a16debf1743a09d2a";
export const url=new URL("../icons/H/healing-fill.svg?v=f22b1187cdd78521eedde2a454e5746a3a24cb7ff5ebaa806968a9a312062ca0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
