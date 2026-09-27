export const name="blender";
export const id="dl_96f7aee8a1ae457c61cd";
export const url=new URL("../icons/blender.svg?v=f0ec0f1e57bbac3ab65b8b0ad052475c757678c0de7cf79af61c15da38950041",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
