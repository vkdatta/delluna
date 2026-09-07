export const name="export-fill";
export const id="dl_615a5c266da1433eb7ff";
export const url=new URL("../icons/export-fill.svg?v=7d5ddac3f992a6ff4af227f61557b79b71b4071e437b24a0d171c7e077aabcaa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
