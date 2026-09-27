export const name="chat-centered-dots-duotone";
export const id="dl_d6b735e5a1f849ac8bb8";
export const url=new URL("../icons/chat-centered-dots-duotone.svg?v=e391f366293ff9f67af25c0a9320cd927643b07da2fe58dcd604a27ffdfa28e0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
