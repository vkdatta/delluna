export const name="chat-circle-text-duotone";
export const id="dl_1cd4cdaef9944c5ba21e";
export const url=new URL("../icons/chat-circle-text-duotone.svg?v=b79360e7852f2e4eb64083131a22e9d4543e6618b43320d610676bc13f4f1597",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
