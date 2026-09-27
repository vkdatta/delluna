export const name="move_selection_left";
export const id="dl_12869b27d79e15e9778d";
export const url=new URL("../icons/move_selection_left.svg?v=ab121a8acfbf614f967c1d9fb10f660d62e03dd5c871c4402a328a190c079ad1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
