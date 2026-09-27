export const name="chat_bubble_off";
export const id="dl_7b3568aa6f38bca4beb4";
export const url=new URL("../icons/chat_bubble_off.svg?v=e33b5fb4efb78f334d751b21d173c034e8b7ddb950e0ee943778210eeeda29e4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
