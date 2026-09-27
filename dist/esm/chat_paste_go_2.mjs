export const name="chat_paste_go_2";
export const id="dl_fd86498428d84985571d";
export const url=new URL("../icons/chat_paste_go_2.svg?v=42fec338bab85dccae1fee949cc66bcb2f29f01506c429742282b44791bf6caa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
