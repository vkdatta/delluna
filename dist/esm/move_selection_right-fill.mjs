export const name="move_selection_right-fill";
export const id="dl_8d89f01b3b7ec322f38c";
export const url=new URL("../icons/move_selection_right-fill.svg?v=dc6b787d04fff608cae5efbf08f40bec6cd871f125fb7ab639dc1576c6155227",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
