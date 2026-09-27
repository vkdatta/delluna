export const name="chat_paste_go_2-fill";
export const id="dl_b26cab6bfa75e2c10675";
export const url=new URL("../icons/chat_paste_go_2-fill.svg?v=2b1f7371bb39dd8a9e57c354e57c1c6c3158f70c44c2527a44689eab4d9a80a2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
