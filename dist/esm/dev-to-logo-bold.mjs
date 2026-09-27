export const name="dev-to-logo-bold";
export const id="dl_458a009888164903a71b";
export const url=new URL("../icons/dev-to-logo-bold.svg?v=0ba327c13ec73e6d58534445dec123d6cc986217eb27217fa47882cd86640b8b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
