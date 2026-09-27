export const name="folder-simple-lock-fill";
export const id="dl_f23787123dc742cdae05";
export const url=new URL("../icons/folder-simple-lock-fill.svg?v=b8f63b34786f589297d9c2b877e5d7dea2ad4b03b184702b387cc23179845afd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
