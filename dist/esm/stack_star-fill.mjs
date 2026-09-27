export const name="stack_star-fill";
export const id="dl_484904cdfb763e3437af";
export const url=new URL("../icons/stack_star-fill.svg?v=81e2e7f4e09c0348c96d44d5d27bf1efb8763f77fd2d3cd4a6aa15804a4dd0f2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
