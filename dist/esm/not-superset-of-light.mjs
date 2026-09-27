export const name="not-superset-of-light";
export const id="dl_ea48be04ced442ee8de9";
export const url=new URL("../icons/not-superset-of-light.svg?v=ca0b02b3349f70cc73edd3fe04efae44a9550e6b0eb47ec0d62dbd37d268cac0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
