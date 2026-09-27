export const name="chat_dashed";
export const id="dl_a35911bfc374b331166d";
export const url=new URL("../icons/chat_dashed.svg?v=d7462837d89b8b340bf08609755b034270123c0e9fe4c9e882409b22e45a601a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
