export const name="chat-text-bold";
export const id="dl_b7f780f1294340c39b1f";
export const url=new URL("../icons/chat-text-bold.svg?v=f0404176ec19df88951e27e96fc38a876f2aeb919efbb3a668bc0163a7e71e13",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
