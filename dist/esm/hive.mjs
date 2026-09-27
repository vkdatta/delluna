export const name="hive";
export const id="dl_8edffdbc79698bc3d294";
export const url=new URL("../icons/hive.svg?v=59e299fc532447a5a9edb036295eec46994cba73ebb4a6ec4ac9658750e3f26d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
