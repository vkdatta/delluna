export const name="task_alt-fill";
export const id="dl_2b01f0788db84d65974f";
export const url=new URL("../icons/T/task_alt-fill.svg?v=e916e9825436fa785c79b7f4517edde2e74d5cfdf1121fd7bbfbe98c7cf91dbe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
