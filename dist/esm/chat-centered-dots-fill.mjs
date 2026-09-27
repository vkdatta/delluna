export const name="chat-centered-dots-fill";
export const id="dl_f2e1251915f5469e98ed";
export const url=new URL("../icons/chat-centered-dots-fill.svg?v=522eb0eaae2869c5e13b4b9bee0f5958fbc4c04826cc4a70ed4f5c8faae3f04b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
