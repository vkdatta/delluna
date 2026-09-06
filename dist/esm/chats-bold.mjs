export const name="chats-bold";
export const id="dl_18cfd5d1bd3c4acf831a";
export const url=new URL("../icons/chats-bold.svg?v=d28c08b774a903da4244d95624966c4f630b7ad072ba2a7eabe1d91187438dfe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
