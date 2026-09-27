export const name="counter_4";
export const id="dl_99e8517074a4232dc923";
export const url=new URL("../icons/counter_4.svg?v=30450d6943e3fae05d88235b3058006761b379be60e1a71899e64eefb405f996",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
