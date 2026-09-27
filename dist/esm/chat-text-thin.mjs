export const name="chat-text-thin";
export const id="dl_14dc5c482ec94d849483";
export const url=new URL("../icons/chat-text-thin.svg?v=525459386465ce92e7c3dec979f35bba4f9fcce0af94aba3bd9909dc81cc7406",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
