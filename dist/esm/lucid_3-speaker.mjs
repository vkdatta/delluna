export const name="lucid_3-speaker";
export const id="dl_b5bba228384846679c0f";
export const url=new URL("../icons/lucid_3-speaker.svg?v=a7471a2b36878b14e30c0ba8696f3430347671bbc8ab9bf2e4ea00270fd5251f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
