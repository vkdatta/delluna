export const name="chat-teardrop-text-bold";
export const id="dl_fa1c2bd060314f8fbf31";
export const url=new URL("../icons/chat-teardrop-text-bold.svg?v=99dd75a031fc3aedcff3e7da27d2eb0e5ce3e7073adab14d31fa021627e9b3f8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
