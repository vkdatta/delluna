export const name="chat-centered-dots";
export const id="dl_35f6aac523fe4e66b056";
export const url=new URL("../icons/chat-centered-dots.svg?v=d6ab03b99fbd8fa258a170617959d81bb81a75a11255cdf0534a2fb5bde704ec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
