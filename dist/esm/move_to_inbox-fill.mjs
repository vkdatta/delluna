export const name="move_to_inbox-fill";
export const id="dl_96343da277ebaa29dfdc";
export const url=new URL("../icons/move_to_inbox-fill.svg?v=73aa8589e08eb86ff136aada7929851e05a325a0fc8c4e1b778a64b0edcbb8a5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
