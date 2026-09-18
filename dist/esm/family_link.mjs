export const name="family_link";
export const id="dl_fdf626ddf2644f50b58f";
export const url=new URL("../icons/family_link.svg?v=6236524a5c1900669d2c18c924ed33a4ccd5e9d772f69ab37aefe168999162e0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
