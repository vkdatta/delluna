export const name="add_diamond-fill";
export const id="dl_5f0302eba5983311c454";
export const url=new URL("../icons/add_diamond-fill.svg?v=d27c48b531233f0eb4d49d451b06a792bacfb134bb5d7172defa6b79352311bc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
