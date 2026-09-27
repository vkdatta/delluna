export const name="blender";
export const id="dl_9ccaff6116b8ad2fabe3";
export const url=new URL("../icons/blender.svg?v=ac2d8f35a2a4842fc3de5a6b6621e1a6493e2780a49fadc411c15022c10cbba8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
