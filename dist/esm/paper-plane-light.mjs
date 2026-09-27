export const name="paper-plane-light";
export const id="dl_971d0203c42c43b5895c";
export const url=new URL("../icons/paper-plane-light.svg?v=0be7881bbee9309278053d002fa8a5396c9d6c4405750cdb8048cc136c09a4d8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
