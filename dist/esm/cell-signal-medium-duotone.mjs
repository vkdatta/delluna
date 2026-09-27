export const name="cell-signal-medium-duotone";
export const id="dl_a9e27bcde62845a3bc23";
export const url=new URL("../icons/cell-signal-medium-duotone.svg?v=4081a8c7d0f2d0f8e50db1ca90a311d1dd566627a7c975b3952af11b3df0b42d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
