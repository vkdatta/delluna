export const name="door_sliding";
export const id="dl_3df08d95210a43aeac57";
export const url=new URL("../icons/D/door_sliding.svg?v=b6813795e42114f836ef218fd63d3f5d6bf625c40bf59e4f84f855a968e1f72a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
