export const name="chat-bold";
export const id="dl_e5764a0e6eb6491d9598";
export const url=new URL("../icons/chat-bold.svg?v=872b0f80afa51b4d1e127d0f290ba2ddf8b3ca64008632521e2412a2a409863a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
