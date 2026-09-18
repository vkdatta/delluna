export const name="chat_paste_go_2";
export const id="dl_966157c7a9e54dae88e2";
export const url=new URL("../icons/chat_paste_go_2.svg?v=6c3980a7e7d59caa012f14d951d348229bca206d172e7418036ac5d0e756a717",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
