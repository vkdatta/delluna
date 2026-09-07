export const name="chart-line-up-fill";
export const id="dl_0a78d5ad2d73452a897a";
export const url=new URL("../icons/chart-line-up-fill.svg?v=a2cb143280fca34c428684ee17674accf22733ff79e040b89510a03b068fceb9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
