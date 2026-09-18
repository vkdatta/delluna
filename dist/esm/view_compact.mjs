export const name="view_compact";
export const id="dl_ccb47d8a31d94cd5932e";
export const url=new URL("../icons/V/view_compact.svg?v=7a4b5d094def3abdf6c2d41e192e57a457a2227be87bee30cff444226b0ca91f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
