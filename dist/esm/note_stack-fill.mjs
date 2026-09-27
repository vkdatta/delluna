export const name="note_stack-fill";
export const id="dl_d71690cbc23c1932f2eb";
export const url=new URL("../icons/note_stack-fill.svg?v=eeba83d5829bcb941353a7b86fbaa402a6105fa3885483647af758053aeaa3d2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
