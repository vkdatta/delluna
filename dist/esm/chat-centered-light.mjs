export const name="chat-centered-light";
export const id="dl_2ac2b5b4ff6a485f9bce";
export const url=new URL("../icons/chat-centered-light.svg?v=964aeb159c95fe2b751f7a00c3faaa540a9a07af97682854f2fce12a3813803c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
