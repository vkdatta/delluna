export const name="chat-teardrop-thin";
export const id="dl_2ce421f425114fc098b7";
export const url=new URL("../icons/chat-teardrop-thin.svg?v=6a11b998abc1ced7cee5faba7e2b379cf30041cfe799551857ddeebf83869c31",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
