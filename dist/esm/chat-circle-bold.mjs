export const name="chat-circle-bold";
export const id="dl_cec50afca4b343288841";
export const url=new URL("../icons/chat-circle-bold.svg?v=aa7dbb555218eeaa6dd975750de2baace901bc00f89bee76ccf3d4ae05b81462",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
