export const name="intersection-duotone";
export const id="dl_9a985ab7a1fe41fab048";
export const url=new URL("../icons/intersection-duotone.svg?v=fc07d8ba4a35e10b0f533026e6f1809f2adac280c15ad520415788dc564afc79",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
