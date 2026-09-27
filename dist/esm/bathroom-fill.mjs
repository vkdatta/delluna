export const name="bathroom-fill";
export const id="dl_757341c8cfd7e5d58a09";
export const url=new URL("../icons/bathroom-fill.svg?v=99d2f0f7588062f5071eca078fe9fda7cabe31a465da6cf89fad2795b3118059",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
