export const name="chat-circle-light";
export const id="dl_20989725c3d6432a8ce3";
export const url=new URL("../icons/chat-circle-light.svg?v=3c0ba1cd74a9bc4b9d2f04558934ff05a944a1f7b6b91bc76e959dbb269e4d97",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
