export const name="format_underlined_squiggle-fill";
export const id="dl_1a56bc455b8ee9a37477";
export const url=new URL("../icons/format_underlined_squiggle-fill.svg?v=182399522d666086158c09f3d853eabcb9d68c9bb06330233f6e2e3569fe73cc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
