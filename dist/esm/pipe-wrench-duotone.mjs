export const name="pipe-wrench-duotone";
export const id="dl_8fb096ea249442f1a34c";
export const url=new URL("../icons/pipe-wrench-duotone.svg?v=2874474f19548e6a2a87a1895bb411d407bfed8bc1afe2364aab0fa46f75834a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
