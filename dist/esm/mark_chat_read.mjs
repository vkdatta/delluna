export const name="mark_chat_read";
export const id="dl_cd3e1f51ba3b4f169112";
export const url=new URL("../icons/mark_chat_read.svg?v=e0946ae0ae057fa05a7f6eff71e9d5e994b65ca224237392261420a9732dcf50",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
