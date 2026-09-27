export const name="chats-thin";
export const id="dl_4dfad51befa54ff8aae1";
export const url=new URL("../icons/chats-thin.svg?v=9e68cbd8c307dd7ee3f9fbbb8ee82d626a13491937be0b39c4be055b39fc21d0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
