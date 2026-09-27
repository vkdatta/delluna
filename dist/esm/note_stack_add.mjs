export const name="note_stack_add";
export const id="dl_4d0fd6eecf9f07140b56";
export const url=new URL("../icons/note_stack_add.svg?v=7a58c15cf3a04de70fa12785f0e0de8a4641c957c968480db6227f97fa842697",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
