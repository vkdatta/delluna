export const name="move_down-fill";
export const id="dl_6aa0e26b24cccd6e7ce7";
export const url=new URL("../icons/move_down-fill.svg?v=30b0ea664ac554e45d2d793584450da1815385f0c2a005249409bc16c243246e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
