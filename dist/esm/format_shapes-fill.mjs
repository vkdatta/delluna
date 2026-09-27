export const name="format_shapes-fill";
export const id="dl_15737fe0b82c04a753d0";
export const url=new URL("../icons/format_shapes-fill.svg?v=9f25583326df558a0b30d5fc9c58200a9cf14a956e4f4a28b4438cc76310d4bd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
