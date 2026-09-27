export const name="chat";
export const id="dl_279407b6ba224f43954c";
export const url=new URL("../icons/chat.svg?v=4f008db3ed79d92133f467648d120cf4efc1da4051027a3657869459e9720132",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
