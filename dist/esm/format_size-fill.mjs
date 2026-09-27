export const name="format_size-fill";
export const id="dl_0ffe9c79938bcff2f01a";
export const url=new URL("../icons/format_size-fill.svg?v=a2c9ef81468cffbc7423a1c35ac9ab615ed222a888d13cc572df49780bc1b1b9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
