export const name="note_stack_add";
export const id="dl_b3d1298a426f46d3a330";
export const url=new URL("../icons/N/note_stack_add.svg?v=c2417988b06246246c218ab0c96edafaae17c3ee3921c3460a402d3880456b50",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
