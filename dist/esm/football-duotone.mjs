export const name="football-duotone";
export const id="dl_81cbd212bacf4bc9a2ba";
export const url=new URL("../icons/football-duotone.svg?v=a6eddc4dd2d35d0dcec7b34ae1ba00e2cde5671f7e957cc404f3ae16f0cc29a5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
