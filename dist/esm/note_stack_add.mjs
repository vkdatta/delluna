export const name="note_stack_add";
export const id="dl_c73afed9f6420a168900";
export const url=new URL("../icons/note_stack_add.svg?v=10d35a416cb686ec25e56593a618e27ca14609c5d383fd102f11483653ef70af",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
