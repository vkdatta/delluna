export const name="memory_alt";
export const id="dl_a2ece759bf69bc19390f";
export const url=new URL("../icons/memory_alt.svg?v=c3db34b66b535cc77139ec3a5d6ce7f7eb0dde83c41ae2a6b99cf60a274d7ca8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
