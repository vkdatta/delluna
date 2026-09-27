export const name="chat_paste_go";
export const id="dl_7a847791ea4d323cc016";
export const url=new URL("../icons/chat_paste_go.svg?v=a4bfaeccb6c22be871573ed978a0e0bc430a59a8b2f1cacac3fe7d74b6879cdb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
