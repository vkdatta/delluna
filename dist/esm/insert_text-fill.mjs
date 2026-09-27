export const name="insert_text-fill";
export const id="dl_7416cd340bea69217bd7";
export const url=new URL("../icons/insert_text-fill.svg?v=cb925564e222e56759fc401e973b2a25383bc60859c1679426d9cdb5eb5c41a9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
