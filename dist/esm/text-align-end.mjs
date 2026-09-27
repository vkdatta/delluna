export const name="text-align-end";
export const id="dl_5cb2c064350d46778fb6";
export const url=new URL("../icons/text-align-end.svg?v=612547e2da6b66dd4d3d2d90547ac59255b4b2c787d393419597881ec95a5bed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
