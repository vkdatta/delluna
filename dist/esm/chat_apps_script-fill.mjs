export const name="chat_apps_script-fill";
export const id="dl_05e0c93ffe7e7cd8bb7d";
export const url=new URL("../icons/chat_apps_script-fill.svg?v=d3ff4d18cb5132fc75a979cd76baa3aa3a918aab9f9b8fc3fe6e83efc67134c9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
