export const name="lucid_3-memory-stick";
export const id="dl_3a54b67eadfc4298928f";
export const url=new URL("../icons/lucid_3-memory-stick.svg?v=bfc7a10852aa61e999db01883109d3ba3e3a8b43bf3a9d8b4ee5d83cc9aba1ae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
