export const name="confetti";
export const id="dl_f6b1a86277b74696a326";
export const url=new URL("../icons/confetti.svg?v=10d993e5f81f36eb7c1f5caf7ba109e990ad43ef6b6a117e422eede41cfd7b49",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
