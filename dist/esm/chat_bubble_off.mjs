export const name="chat_bubble_off";
export const id="dl_67579c516a59a37b1e06";
export const url=new URL("../icons/chat_bubble_off.svg?v=d17daa57bc01172191a327ca4251564581a099856a971269c7d501a11227246f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
