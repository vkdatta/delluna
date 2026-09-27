export const name="chat-centered-dots-duotone";
export const id="dl_d6b735e5a1f849ac8bb8";
export const url=new URL("../icons/chat-centered-dots-duotone.svg?v=63bad79ba46025da546e39818c5ad0f68f764304637ae9d40a9a2f74460166cf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
