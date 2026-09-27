export const name="task-fill";
export const id="dl_dc7be9b0915074555937";
export const url=new URL("../icons/task-fill.svg?v=654d03bc3ae9f5c5f2a88535f70e8c67f87b5fa93d9fbb68030957bcfac9d012",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
