export const name="exclude-fill";
export const id="dl_4ed7a21c605f4fdb837f";
export const url=new URL("../icons/exclude-fill.svg?v=2c0b516dad3642fbc3d3740045dc874e512deaa200aceb43b88a7bf3d65fb1d3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
