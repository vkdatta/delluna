export const name="width_normal-fill";
export const id="dl_94ede816b5284c21bcd6";
export const url=new URL("../icons/width_normal-fill.svg?v=69f2805c78c40744b92e83e53388617d3e8a73a15ab64532f260d52176cbf7be",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
