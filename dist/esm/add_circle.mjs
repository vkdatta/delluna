export const name="add_circle";
export const id="dl_9045cd1864f73d0a1a53";
export const url=new URL("../icons/add_circle.svg?v=40eb8ea87448dd9d4bd440e1d1dd6cfbdd6d94aaae572f40bf335a035db823a1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
