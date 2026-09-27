export const name="coffee-bold";
export const id="dl_7a84f274e616478297f7";
export const url=new URL("../icons/coffee-bold.svg?v=b67134c313d64d44fca44b22418830271a7b0088fb4cf323411941f3396e691b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
