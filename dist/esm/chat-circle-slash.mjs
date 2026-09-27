export const name="chat-circle-slash";
export const id="dl_aa3d5679c56b4c8ba6f5";
export const url=new URL("../icons/chat-circle-slash.svg?v=1997e3fa8ca3f7eb8420d649a0e8b9f2d6071eb5ed273445e7b09b64daccb8b5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
