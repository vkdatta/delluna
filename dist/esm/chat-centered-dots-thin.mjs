export const name="chat-centered-dots-thin";
export const id="dl_43cc1c05794644eb911c";
export const url=new URL("../icons/chat-centered-dots-thin.svg?v=e0b5301ba456fbc3b95d95c5e0e28960d1b0c753998fd4f28e8abf7a6124bdcf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
