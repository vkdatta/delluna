export const name="code_blocks";
export const id="dl_5a71c1b3d5544d968090";
export const url=new URL("../icons/code_blocks.svg?v=c75392268fc5e2736e9b5032ed2fb6716a13b01de28d777c44e57940df50e65a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
