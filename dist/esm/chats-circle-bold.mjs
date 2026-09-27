export const name="chats-circle-bold";
export const id="dl_5c238479f6c5468bb53d";
export const url=new URL("../icons/chats-circle-bold.svg?v=0ec0fdf4fb23bf213df417b5fd2e84dc1b8af6eb0762102ad2089eb13b47c485",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
