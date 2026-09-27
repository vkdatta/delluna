export const name="chat";
export const id="dl_279407b6ba224f43954c";
export const url=new URL("../icons/chat.svg?v=86b9486a4cb380e0cf6ade40817c26f72f7f9daa8d050222d92d9d093e327f08",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
