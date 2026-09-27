export const name="parent_child_dining";
export const id="dl_1c8c8bd5552e51a40183";
export const url=new URL("../icons/parent_child_dining.svg?v=e6f64910ed93f238ee16d97bb2a02cb97a2995201ee9f05b96dcc0a8652e2d94",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
