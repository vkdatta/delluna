export const name="move_selection_down";
export const id="dl_5ccbdf6e143e45f5ae46";
export const url=new URL("../icons/move_selection_down.svg?v=385c40a3db7f333be25d97f967f22f6c752894fb66cfa487428caa9d22d0d033",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
