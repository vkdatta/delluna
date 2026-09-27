export const name="chalkboard-fill";
export const id="dl_8fcfd7c269214d799542";
export const url=new URL("../icons/chalkboard-fill.svg?v=28d8ddef5c35600445162d896113167dc9613e717ea645e1f26d55034794c426",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
