export const name="move_selection_left";
export const id="dl_8eaebad705e040d69cc2";
export const url=new URL("../icons/move_selection_left.svg?v=97b16e40a661b0b0964acc5c7c4bfec832823943300cc07e64364bcf6a1280dc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
