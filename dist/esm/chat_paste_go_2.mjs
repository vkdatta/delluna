export const name="chat_paste_go_2";
export const id="dl_a962b277e943b79c1c7a";
export const url=new URL("../icons/chat_paste_go_2.svg?v=42c362484dd86732cc1bdbef79ae615cbb34dc0de954e1180cefdb8df69c06bb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
