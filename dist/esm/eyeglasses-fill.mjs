export const name="eyeglasses-fill";
export const id="dl_3246d5c9f07945a68156";
export const url=new URL("../icons/eyeglasses-fill.svg?v=118ccc69ab15ce98ebefe46bd5aecec02ed76fb24b7efca0b8f2073bbb1fbc3d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
