export const name="chat-circle-text-thin";
export const id="dl_0b4d9dbcee3a47e39a8a";
export const url=new URL("../icons/chat-circle-text-thin.svg?v=eee2c7a294980bdf482df5279a1e13a2fa0f116f6546ffa849dafdff71ca665d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
