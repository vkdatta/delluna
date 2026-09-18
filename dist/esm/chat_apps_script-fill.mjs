export const name="chat_apps_script-fill";
export const id="dl_6a845b70419a45f49357";
export const url=new URL("../icons/chat_apps_script-fill.svg?v=b7f3e0345256882d549c1ada0864f374c63f903f64564e60a5dcb7771fe84701",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
