export const name="mop";
export const id="dl_69d3b7931fb647d79641";
export const url=new URL("../icons/mop.svg?v=821c94d5fd624b35782a8c2569ae26f5309afd4db06fde072aa36ec313f177cb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
