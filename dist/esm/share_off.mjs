export const name="share_off";
export const id="dl_75d072c624ac18b96bbb";
export const url=new URL("../icons/share_off.svg?v=869bbfda35acedadb1c5b484dc956f75e867bfd4587c9565e974430af4a6a211",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
