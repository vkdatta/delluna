export const name="chat-circle-text-bold";
export const id="dl_6fedf046c454479db139";
export const url=new URL("../icons/chat-circle-text-bold.svg?v=aa7b35520cce2b0bfdd10af6b862e1c565635c9baed962c919c3748e9f140662",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
