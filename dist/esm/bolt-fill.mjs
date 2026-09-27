export const name="bolt-fill";
export const id="dl_4151058c978771349262";
export const url=new URL("../icons/bolt-fill.svg?v=2c6353dd267f6d8d745d57902ab98b81e8f19ba6b27cf808ab908f9a75ebde02",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
