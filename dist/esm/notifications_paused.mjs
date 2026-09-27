export const name="notifications_paused";
export const id="dl_017b79480b6dd9248881";
export const url=new URL("../icons/notifications_paused.svg?v=5a41a8efead6b7b73f1d27b61ddfd29761d9a1e00124f144d27c988dcf3fbe41",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
