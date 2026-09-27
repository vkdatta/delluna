export const name="chart-bar-horizontal-light";
export const id="dl_dc1b17a5d8914c839e6f";
export const url=new URL("../icons/chart-bar-horizontal-light.svg?v=f44672fc592f7d9d4918110f1c04035ceb788b40c2a138f9c16ea6160bb44469",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
