export const name="intersection-duotone";
export const id="dl_9a985ab7a1fe41fab048";
export const url=new URL("../icons/intersection-duotone.svg?v=518244719381e46930bc3eae44056275a0b258a980f0a3bbe837122dfa711c39",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
