export const name="lucid_1-bot-message-square";
export const id="dl_427de9f91a174671b976";
export const url=new URL("../icons/lucid_1-bot-message-square.svg?v=cd3b648337cabd5386720f9027cead405e3072ac8d2e96fa4f0d5286fb252022",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
