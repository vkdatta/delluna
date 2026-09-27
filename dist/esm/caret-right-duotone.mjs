export const name="caret-right-duotone";
export const id="dl_801b8b91f5014b81a3b0";
export const url=new URL("../icons/caret-right-duotone.svg?v=c607fb4dbfcc7b04dcd6bf3926c10afcff83a9bcefb3da36984e7c14f0365d7f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
