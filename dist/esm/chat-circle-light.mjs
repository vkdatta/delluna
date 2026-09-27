export const name="chat-circle-light";
export const id="dl_20989725c3d6432a8ce3";
export const url=new URL("../icons/chat-circle-light.svg?v=b7611b431ec26a47b9956cf12cfb5538514c52e09665d8c3cbaea6cc639e209a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
