export const name="file-magnifying-glass";
export const id="dl_061a5ec647824249a9d8";
export const url=new URL("../icons/file-magnifying-glass.svg?v=a8f09f17f9a0dc76138a62d67c3a7eb18f85dfd74d2cac898a5bb3fb74961a73",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
