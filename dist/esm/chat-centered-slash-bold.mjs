export const name="chat-centered-slash-bold";
export const id="dl_0a182617461d48a0aa81";
export const url=new URL("../icons/chat-centered-slash-bold.svg?v=8e689322e80836af947503d94b60ffa162fb8448c2e3179806f2d10ea7aacb7b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
