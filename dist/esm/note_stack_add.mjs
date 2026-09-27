export const name="note_stack_add";
export const id="dl_c79478a6a8bba4e5c1f7";
export const url=new URL("../icons/note_stack_add.svg?v=4b1cbd999cc10f6a232ea40a1351dc97cf0e947f37153d139b52768341cb9cfc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
