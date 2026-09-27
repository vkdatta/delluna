export const name="train-regional-duotone";
export const id="dl_a6f18cd7edb4e8ffbb9a";
export const url=new URL("../icons/train-regional-duotone.svg?v=5e6e05a6a395cdc1290eb5f2419fe74391f60cb54df1dfc44ae365ba0e77efc3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
