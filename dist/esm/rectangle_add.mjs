export const name="rectangle_add";
export const id="dl_bbb49508c189a4e1c915";
export const url=new URL("../icons/rectangle_add.svg?v=6ff49d59f30f13815ce3f781756034322736e2dc8cb153ce8d8d669f696333aa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
