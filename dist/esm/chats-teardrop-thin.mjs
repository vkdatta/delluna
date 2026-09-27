export const name="chats-teardrop-thin";
export const id="dl_52b83839d25d426aba74";
export const url=new URL("../icons/chats-teardrop-thin.svg?v=c7ae282a53ab6846d387412209cb4c34abcf83381cad80a624917c746376409c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
