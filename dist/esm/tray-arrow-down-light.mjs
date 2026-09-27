export const name="tray-arrow-down-light";
export const id="dl_be13dda6f86d2be18220";
export const url=new URL("../icons/tray-arrow-down-light.svg?v=b8489d5190c0f90c3505a9033d752909f98e9bac129f138276a3ab3874e62197",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
