export const name="keyboard_lock-fill";
export const id="dl_3e9aa36d7c7fd084492e";
export const url=new URL("../icons/keyboard_lock-fill.svg?v=ac482205009286707f9d7bd3bc454b16ca3f0c7611a3b1eabf6a63208a9e125d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
