export const name="chat-centered-text-duotone";
export const id="dl_b48ef5454a8941bfa3c6";
export const url=new URL("../icons/chat-centered-text-duotone.svg?v=c3470b49f05f2128199e3c36c7b4b9bd9ddc40a6cd91e0a889bba1eb6ed92958",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
