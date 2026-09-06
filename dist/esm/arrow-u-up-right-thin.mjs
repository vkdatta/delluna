export const name="arrow-u-up-right-thin";
export const id="dl_c373d2de3c7f44bf92ba";
export const url=new URL("../icons/arrow-u-up-right-thin.svg?v=b9a6a7c1fefbb1bc9cacc27402a533881f4cb931bc9aa1114844ede1a54b9839",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
