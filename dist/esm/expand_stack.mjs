export const name="expand_stack";
export const id="dl_90afe000f0af13d0b46a";
export const url=new URL("../icons/expand_stack.svg?v=2f80d8815e3bfff77024fa73802fa711e02f87ee4a805a06efcff6973a5c77bc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
