export const name="chat-circle-bold";
export const id="dl_cec50afca4b343288841";
export const url=new URL("../icons/chat-circle-bold.svg?v=41bb380c6f3d92853a7d8da89658ed1c03153cd036484c6c2423bcfa3a2d57f4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
