export const name="chat-circle-text";
export const id="dl_2b098d4926b24f8b85c8";
export const url=new URL("../icons/chat-circle-text.svg?v=223e392535a75f618ceca6f268e7104cd2cb28bdc3b621c23aaeca6b34cdfe76",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
