export const name="chat-circle-thin";
export const id="dl_286f30c85f474e428b16";
export const url=new URL("../icons/chat-circle-thin.svg?v=596ea2875b5107e6b91f30243b0f89551147e3bd831f2e0e83b2dfa1104d1ed3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
