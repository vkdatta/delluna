export const name="headphones-fill";
export const id="dl_69a36b39aa7f4c4ab59e";
export const url=new URL("../icons/headphones-fill.svg?v=35db98ea0b59f4c8c81902d066a8f6db58680f99e48d1a36e6e167e3ef1a6751",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
