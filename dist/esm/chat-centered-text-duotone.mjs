export const name="chat-centered-text-duotone";
export const id="dl_b48ef5454a8941bfa3c6";
export const url=new URL("../icons/chat-centered-text-duotone.svg?v=1a8de1e1ab812432a10f8766a255d2857ccc0800e716ad36a5de6a2c36164157",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
