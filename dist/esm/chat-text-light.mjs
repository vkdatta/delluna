export const name="chat-text-light";
export const id="dl_a0fe5206979a4844be49";
export const url=new URL("../icons/chat-text-light.svg?v=06976c6dc03ca6643712e9e5233abab329625e98daff44efc9bb41ad364edb23",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
