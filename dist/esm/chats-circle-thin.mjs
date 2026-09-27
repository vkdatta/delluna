export const name="chats-circle-thin";
export const id="dl_18db3886df414d23ab79";
export const url=new URL("../icons/chats-circle-thin.svg?v=9b90c311aac39cdffe130dbc4c2996d1649078852eab6172ce5921f516de1dcd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
