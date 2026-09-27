export const name="chat_paste_go";
export const id="dl_1a074eda0a2215d0a74a";
export const url=new URL("../icons/chat_paste_go.svg?v=0df8ac1dc4d937771962b2cca64a65d32d2c10e2ddaa3cc21cc42b666cee758c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
