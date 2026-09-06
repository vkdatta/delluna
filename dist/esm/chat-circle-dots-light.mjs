export const name="chat-circle-dots-light";
export const id="dl_d3955ff194b046d78bea";
export const url=new URL("../icons/chat-circle-dots-light.svg?v=25d56cf3136335ab88c138925761929dfa35cf8ee3f44f96bb3e391f06ec4a14",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
