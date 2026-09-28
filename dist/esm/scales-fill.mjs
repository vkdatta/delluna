export const name="scales-fill";
export const id="dl_943ec5231094d3b2ca0d";
export const url=new URL("../icons/scales-fill.svg?v=819cda55e5eba2727fe2026b28ef693b9a3c949f7df0908636f62dea9d699592",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
