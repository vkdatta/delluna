export const name="notification";
export const id="dl_9c259aa9f0534653a5ab";
export const url=new URL("../icons/notification.svg?v=d7999d80c027f8fc90a1c5c6c94ca48087e3ec17ef51dee3eb8ea96b0aead242",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
