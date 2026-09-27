export const name="arrows-out-cardinal";
export const id="dl_9f00c7d53dbb43ff9cc9";
export const url=new URL("../icons/arrows-out-cardinal.svg?v=eadb036ee15da14d01371edba7797aca6f3957f4c41d0724927a74d862765ea2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
