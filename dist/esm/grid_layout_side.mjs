export const name="grid_layout_side";
export const id="dl_05c12cbac64e4f0fa08c";
export const url=new URL("../icons/grid_layout_side.svg?v=4d398f0117d57ee0e6806a557c31933a8eb791ab2a762fc7e39f03db576b8bb5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
