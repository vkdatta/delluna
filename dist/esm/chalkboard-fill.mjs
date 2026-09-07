export const name="chalkboard-fill";
export const id="dl_8fcfd7c269214d799542";
export const url=new URL("../icons/chalkboard-fill.svg?v=63cfba331611dfd7d332f0b9d572a84285eed8b30fad042d0fddf786d7bd8f4f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
