export const name="chat-centered-thin";
export const id="dl_0fb55f86b8dd482e868d";
export const url=new URL("../icons/chat-centered-thin.svg?v=d0f32199bb13477cb66e87d27e485b52e8b774d66db6a54843f3657d9cf0c8d1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
