export const name="add_card";
export const id="dl_540fa23a8f5697c259a7";
export const url=new URL("../icons/add_card.svg?v=3693a2768e46c6c56c071875e44988bee82e82a6e556eb0146dc0b4dd3b4325c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
