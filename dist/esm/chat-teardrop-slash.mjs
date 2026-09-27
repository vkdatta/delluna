export const name="chat-teardrop-slash";
export const id="dl_228d30b4438f4f89959e";
export const url=new URL("../icons/chat-teardrop-slash.svg?v=4297e7e744a69351fc4c3af899ef3d453bdb78b91d721275d4d14f738a7f9db3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
