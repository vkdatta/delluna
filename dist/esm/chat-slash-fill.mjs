export const name="chat-slash-fill";
export const id="dl_6e7d81cb47b14deeb48f";
export const url=new URL("../icons/chat-slash-fill.svg?v=1866e814f56387b676853d8ee34f920b84b33fd84a59b46628ac085f8acc6748",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
