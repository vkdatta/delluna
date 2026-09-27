export const name="chat-dots-duotone";
export const id="dl_2c420bd460724ed39ad7";
export const url=new URL("../icons/chat-dots-duotone.svg?v=2617d1e63a33793c3e9e995c96ee5854f6c83bdacac666ec456eeb89b4e7c8d6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
