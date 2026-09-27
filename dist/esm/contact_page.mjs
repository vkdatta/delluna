export const name="contact_page";
export const id="dl_142aba3bf8cbe59e504b";
export const url=new URL("../icons/contact_page.svg?v=4f66f7826dbef4e953121b4101620598cb551fbb9db84a56799026326fb3d998",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
