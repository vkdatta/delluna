export const name="folder-simple-thin";
export const id="dl_0193871c846a44bdbac2";
export const url=new URL("../icons/folder-simple-thin.svg?v=0e5a815828dc6559e3b90e7223f5a2028c1daae2a0b416f10875aeb66cd53a7b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
