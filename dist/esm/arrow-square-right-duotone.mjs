export const name="arrow-square-right-duotone";
export const id="dl_71ffcacd98ff442d9738";
export const url=new URL("../icons/arrow-square-right-duotone.svg?v=0696d550f1de38864bede5456091b98c95c9ef16cfec1a8a8733e785cdda7fa1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
