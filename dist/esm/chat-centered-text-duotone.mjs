export const name="chat-centered-text-duotone";
export const id="dl_b48ef5454a8941bfa3c6";
export const url=new URL("../icons/chat-centered-text-duotone.svg?v=3772bbc4cdb37c592daed8d0b9a2be736e21958ff9e668403a912a212f2745cc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
