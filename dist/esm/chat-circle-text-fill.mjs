export const name="chat-circle-text-fill";
export const id="dl_eb13ed6a711f42b6a60c";
export const url=new URL("../icons/chat-circle-text-fill.svg?v=151178dbebb30d17ebc6b36878213426a9e7f66fb05b275ddfbc259f8cbe385d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
