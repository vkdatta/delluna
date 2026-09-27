export const name="chat-centered-text";
export const id="dl_ea753dff415042ae81c8";
export const url=new URL("../icons/chat-centered-text.svg?v=30cb183c847596f9e9d420d7ee74eb0ef4fb155ef2d6cf50b3670f2bdc36a4e0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
