export const name="chat-circle-dots-duotone";
export const id="dl_34feae68c3c3446d9498";
export const url=new URL("../icons/chat-circle-dots-duotone.svg?v=a58010e12f4aa13960c681c8e838c3c4ba57506bb8d0a9a85b1d7534629db130",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
