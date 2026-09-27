export const name="assignment_returned-fill";
export const id="dl_40fe558c9eef51999a09";
export const url=new URL("../icons/assignment_returned-fill.svg?v=17ddc7aad904f07004ee39cc68dbec436b3a0842278a191029bf9b84bcfbfe8b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
