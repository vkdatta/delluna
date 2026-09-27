export const name="chat_bubble-fill";
export const id="dl_71f7126cea49f9425d1a";
export const url=new URL("../icons/chat_bubble-fill.svg?v=3f17599b867a53d9f05579e8edaa8f5904cbde04c557b391e24dfbc71947042a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
