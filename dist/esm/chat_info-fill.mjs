export const name="chat_info-fill";
export const id="dl_fbdfd177bfe641e2a633";
export const url=new URL("../icons/C/chat_info-fill.svg?v=0d782d44361d1c5b275bd425d26955602873301a371c3263d7509ed27e7edd6d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
