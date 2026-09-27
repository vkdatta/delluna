export const name="chat-dots-fill";
export const id="dl_13c097829bc445578327";
export const url=new URL("../icons/chat-dots-fill.svg?v=d1f357c0b03982bc96c681575079b34c9b76c368e5e4ba97bbc77dcb0973e7c4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
