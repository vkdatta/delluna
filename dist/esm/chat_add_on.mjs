export const name="chat_add_on";
export const id="dl_1ea05b88a357015dd2a7";
export const url=new URL("../icons/chat_add_on.svg?v=18d6a8f4c82efa3924f1a6fc876881802da81125d4c2b2b919239a141447e05a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
