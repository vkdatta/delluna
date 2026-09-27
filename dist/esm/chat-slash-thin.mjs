export const name="chat-slash-thin";
export const id="dl_cea7b2fbffe543caa4e2";
export const url=new URL("../icons/chat-slash-thin.svg?v=2fdc06a66589516d02312123b669b2b64a023852c8bcde0330c175acd6f8a8cd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
