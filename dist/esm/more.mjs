export const name="more";
export const id="dl_09a50ab9dfea75b9f2ea";
export const url=new URL("../icons/more.svg?v=3d555979fca8b276ab3f590d074ff4f6d9b2b9bcd502de9c4842cb16f790379b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
