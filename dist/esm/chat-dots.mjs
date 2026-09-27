export const name="chat-dots";
export const id="dl_f84f159f922b4ff78061";
export const url=new URL("../icons/chat-dots.svg?v=2a2141cec86bcdfaa924a333d88b8528a3a4a4bbc6630ae37413b76f86789242",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
