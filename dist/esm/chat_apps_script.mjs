export const name="chat_apps_script";
export const id="dl_8707be3fc5feaf9897aa";
export const url=new URL("../icons/chat_apps_script.svg?v=8fa7395b72761f00137e76291ae344e51a077492a3836c75c88a487d6c3c201f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
