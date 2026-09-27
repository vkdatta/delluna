export const name="chat-circle-text-bold";
export const id="dl_6fedf046c454479db139";
export const url=new URL("../icons/chat-circle-text-bold.svg?v=048fb7b123f79fd21dded03c892e1f9bb18818dadf07a228ad5f884302b83aef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
