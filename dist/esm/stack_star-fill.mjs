export const name="stack_star-fill";
export const id="dl_92404ddeb871e729f203";
export const url=new URL("../icons/stack_star-fill.svg?v=1f7e6e07b0536f7f0517c51da708af2136a74752c0e5527c5f616df6cfd3c426",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
