export const name="pipe-wrench-fill";
export const id="dl_435e3264832f4fa08e1d";
export const url=new URL("../icons/pipe-wrench-fill.svg?v=d1693ffc23c6502085a393b3bc950eb9c81eca504f72005a2f71def5a0e8fa61",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
