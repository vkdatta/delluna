export const name="arrows-in-cardinal-duotone";
export const id="dl_b28d45a29d64403e8502";
export const url=new URL("../icons/arrows-in-cardinal-duotone.svg?v=c9f868a580764b1f51e2f85ee445035ca7280458a9c9b9fae474c72308465a71",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
