export const name="screwdriver-duotone";
export const id="dl_349369b9f52647349c71";
export const url=new URL("../icons/S/screwdriver-duotone.svg?v=a3ac115f928697424046f6412a4c293b126dbaac60ae0546e473fb58d02b8a2d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
