export const name="tag-plus";
export const id="dl_b547a71f3b314c4cb2d5";
export const url=new URL("../icons/tag-plus.svg?v=ec2efc58bf6206d55a6642d63318a6e28247e1d8545649eb467e8d3e3b7d1f5d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
