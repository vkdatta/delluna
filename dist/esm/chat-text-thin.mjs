export const name="chat-text-thin";
export const id="dl_14dc5c482ec94d849483";
export const url=new URL("../icons/chat-text-thin.svg?v=594e363ad1351e924821c9681a2220aa93c249b9849e98825dd9c2fdcce2b715",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
