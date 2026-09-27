export const name="add_triangle-fill";
export const id="dl_91a1dc134414ae5bd742";
export const url=new URL("../icons/add_triangle-fill.svg?v=dc9bf52c1092fc281cbb4d22b8a339446a3e79192435492dc8b55318db748e75",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
