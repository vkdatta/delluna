export const name="nest_farsight_dual-fill";
export const id="dl_3599a189a8df81092c99";
export const url=new URL("../icons/nest_farsight_dual-fill.svg?v=42c6c60dcfe61858141ce72baf2dfa573d8be0695d02c4e24297603c81faaeda",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
