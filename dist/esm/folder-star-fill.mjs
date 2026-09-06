export const name="folder-star-fill";
export const id="dl_fdca95f10a054bc28adc";
export const url=new URL("../icons/folder-star-fill.svg?v=2de54e67484b3272d736fbf3136246ae46f44d07a7929d446be45de1e4933c08",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
