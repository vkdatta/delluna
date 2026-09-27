export const name="chat-circle-dots-duotone";
export const id="dl_34feae68c3c3446d9498";
export const url=new URL("../icons/chat-circle-dots-duotone.svg?v=e9d961a0a78b663a719962193d006ad4a75d2d9fd2253816ebd71666025c8f34",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
