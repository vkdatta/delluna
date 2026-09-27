export const name="edit_document-fill";
export const id="dl_3117aa80bbe557a37d70";
export const url=new URL("../icons/edit_document-fill.svg?v=3258b81cef03de0bf40ee0e761f444556aa1d3823d8a5cff0747112d7a0509f1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
