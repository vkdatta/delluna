export const name="chat-centered-dots-thin";
export const id="dl_43cc1c05794644eb911c";
export const url=new URL("../icons/chat-centered-dots-thin.svg?v=dc2d2542f2efd945a9493afd26e3d58c26a75e9c319049e794ad3f7b0b869b8e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
