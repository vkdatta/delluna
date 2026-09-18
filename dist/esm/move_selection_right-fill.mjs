export const name="move_selection_right-fill";
export const id="dl_528eb933983e41978a1d";
export const url=new URL("../icons/move_selection_right-fill.svg?v=51e1011b221700e960f2def58883aafadd306803d0166b89a24039153d6d9d9a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
