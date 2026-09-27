export const name="chat-teardrop-text-light";
export const id="dl_38a260cd266647159914";
export const url=new URL("../icons/chat-teardrop-text-light.svg?v=8f84ccad961c9cc1707a17963c791d355ebc74c55cadac5cae3b0abed770e6eb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
