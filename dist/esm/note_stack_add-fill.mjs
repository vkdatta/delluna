export const name="note_stack_add-fill";
export const id="dl_5671a7d18beee5621287";
export const url=new URL("../icons/note_stack_add-fill.svg?v=fe3d154f00a0c054b8b9c8d42e104bfb39268dd69f5647228bb87247d81063a8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
