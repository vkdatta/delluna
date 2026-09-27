export const name="chat-centered-dots";
export const id="dl_35f6aac523fe4e66b056";
export const url=new URL("../icons/chat-centered-dots.svg?v=8267bcf74905b1612ed475f5fbf4ff8eb2e1ef876753c621e38d198d5595f765",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
