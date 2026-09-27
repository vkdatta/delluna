export const name="camera-rotate-bold";
export const id="dl_9e29b35abec742e8a16b";
export const url=new URL("../icons/camera-rotate-bold.svg?v=028b8cc0ab729f2368611341468984705a40df9b59268422185391b07219e58c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
