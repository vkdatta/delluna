export const name="chat_apps_script-fill";
export const id="dl_4570fb671a3557582948";
export const url=new URL("../icons/chat_apps_script-fill.svg?v=94b549b79588f78afeb2ac746551505a5f16e96b66ab30e31e020b34481dfd15",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
