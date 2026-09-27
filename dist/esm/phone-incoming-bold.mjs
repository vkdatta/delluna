export const name="phone-incoming-bold";
export const id="dl_d99c9d8cbc80494fb300";
export const url=new URL("../icons/phone-incoming-bold.svg?v=e7b4373d7815c7353a6d9d4c9708e9d27e6024cbc2de022771872c5d446f7bcc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
