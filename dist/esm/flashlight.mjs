export const name="flashlight";
export const id="dl_747722f7223f40bbb480";
export const url=new URL("../icons/flashlight.svg?v=d8ecfd4e22f05407438d49af00a2fd773b644832a36ceda313fee8e1c249968e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
