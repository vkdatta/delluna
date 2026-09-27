export const name="chat-bold";
export const id="dl_e5764a0e6eb6491d9598";
export const url=new URL("../icons/chat-bold.svg?v=e6c025e4d872afa37e1e27ef7e8313dcbef1b67407bfcbb56f1af287fb346e6e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
