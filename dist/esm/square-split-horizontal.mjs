export const name="square-split-horizontal";
export const id="dl_7acd7e23aa264c4284cc";
export const url=new URL("../icons/square-split-horizontal.svg?v=c9aa42ddcf3ba030151761f06efbcb08b84fe00be8437710851a87a19e98f7ba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
