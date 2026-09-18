export const name="scan_delete-fill";
export const id="dl_45dab1b0eca84850aed7";
export const url=new URL("../icons/S/scan_delete-fill.svg?v=4676dfe32fc627a34ded957e5a78aa21fda2aa57464413cb9fca118278b543e9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
