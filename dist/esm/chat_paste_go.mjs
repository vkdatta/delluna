export const name="chat_paste_go";
export const id="dl_11a9112fc430e99751cb";
export const url=new URL("../icons/chat_paste_go.svg?v=c2b94f57f5e7d51a85556d64b8ae7f13e3d51cd75b3d2ebf987dd4d74731a910",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
