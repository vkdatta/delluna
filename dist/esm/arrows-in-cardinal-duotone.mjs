export const name="arrows-in-cardinal-duotone";
export const id="dl_b28d45a29d64403e8502";
export const url=new URL("../icons/arrows-in-cardinal-duotone.svg?v=12ed43d707750b7197d6108eb58d79ba833ac360251063c8e44feb4ea732dfd6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
