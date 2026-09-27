export const name="minor_crash";
export const id="dl_5240739ffd0370bf90c7";
export const url=new URL("../icons/minor_crash.svg?v=3778b6ce5749bc9b23ed7d41446d7c9473703a8bdb114d81d5d470c143cc8265",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
