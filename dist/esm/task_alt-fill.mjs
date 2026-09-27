export const name="task_alt-fill";
export const id="dl_6d1e79723566fad8e8c5";
export const url=new URL("../icons/task_alt-fill.svg?v=39bd69f0e166d1a7b10bda458a9646ed7b26474586cb456458967fa24d1a75de",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
