export const name="chat_apps_script";
export const id="dl_78790ccd0361b6d440a4";
export const url=new URL("../icons/chat_apps_script.svg?v=6f9d61398ae06243b110cae3e661d62dabd271b033a7b2b16de657b505114e39",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
