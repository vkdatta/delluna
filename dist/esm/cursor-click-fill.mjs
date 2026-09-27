export const name="cursor-click-fill";
export const id="dl_e9a977c09d8e4ab09f08";
export const url=new URL("../icons/cursor-click-fill.svg?v=4a392bd01825206e7fb67cfb6ed15a799eefcee728f270108863722f1b78ae97",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
