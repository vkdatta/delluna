export const name="chat-teardrop-dots-duotone";
export const id="dl_1b15b97117184794b9c9";
export const url=new URL("../icons/chat-teardrop-dots-duotone.svg?v=a5bfc418bd1ebdfd7efb063c9c8bf4127423d11149c65f6aa4f1e2a33d2c4eee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
