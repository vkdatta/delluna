export const name="tree-evergreen-fill";
export const id="dl_32e367687279ec6a25cf";
export const url=new URL("../icons/tree-evergreen-fill.svg?v=8fc06ea7abd93ed224faaa8c9321f744bb483ff9a384f6add7ae9acbcb9ce185",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
