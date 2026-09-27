export const name="chat-slash-thin";
export const id="dl_cea7b2fbffe543caa4e2";
export const url=new URL("../icons/chat-slash-thin.svg?v=1604f2940f3453ba396490a3780649817d67e8afdc6b560a91b90327400aa214",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
