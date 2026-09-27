export const name="chats-teardrop-thin";
export const id="dl_52b83839d25d426aba74";
export const url=new URL("../icons/chats-teardrop-thin.svg?v=1d498ff1a57015d5229bb2ebd30a6f6948b1efc668ed87dfd46fd613281c1913",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
