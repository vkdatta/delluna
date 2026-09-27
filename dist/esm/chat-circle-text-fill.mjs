export const name="chat-circle-text-fill";
export const id="dl_eb13ed6a711f42b6a60c";
export const url=new URL("../icons/chat-circle-text-fill.svg?v=131c347d39beb3ff5d0c5e17907a4aed6e3ad362cd5d468dd7fe7c8e6621fcdc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
