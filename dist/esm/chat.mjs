export const name="chat";
export const id="dl_279407b6ba224f43954c";
export const url=new URL("../icons/chat.svg?v=1b8e07e27bf357e6497a5db06dd4ea17bcac4577a63756ac38b4149b507a3f44",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
