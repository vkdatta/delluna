export const name="chat-circle-text-bold";
export const id="dl_6fedf046c454479db139";
export const url=new URL("../icons/chat-circle-text-bold.svg?v=259305b66c9ff6a57b4fb7290cc7ad0be20b379967518603847f43a42384ca4f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
