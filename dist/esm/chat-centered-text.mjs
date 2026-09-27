export const name="chat-centered-text";
export const id="dl_ea753dff415042ae81c8";
export const url=new URL("../icons/chat-centered-text.svg?v=12491cfa91d44237be112bd9a0b50008ee16da53ff0843a82b0b242c12f2f8e0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
