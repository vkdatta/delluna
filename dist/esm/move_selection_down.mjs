export const name="move_selection_down";
export const id="dl_bec32e1d8d1fc3d32154";
export const url=new URL("../icons/move_selection_down.svg?v=092fb04c01064c8a135eea4f704f1273d0cf31580a0e11a0941e7604ce3e55db",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
