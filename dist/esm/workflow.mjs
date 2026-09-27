export const name="workflow";
export const id="dl_5f8a5bf2cabc4368a1df";
export const url=new URL("../icons/workflow.svg?v=50270fc2e490f0a2d28251200106cdef0daca2eba70929fd73da5a77ab4be68d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
