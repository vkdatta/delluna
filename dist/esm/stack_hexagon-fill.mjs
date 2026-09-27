export const name="stack_hexagon-fill";
export const id="dl_618c11db47d8017ac55b";
export const url=new URL("../icons/stack_hexagon-fill.svg?v=afb87f4682f5c16eb7241e1ee3a9500fa0c43f8a8eb600ddde5fd2048cbf7334",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
