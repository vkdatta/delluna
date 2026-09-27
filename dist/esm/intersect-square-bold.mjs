export const name="intersect-square-bold";
export const id="dl_6a084f370d124cf086f2";
export const url=new URL("../icons/intersect-square-bold.svg?v=de58d1b3b29a0861f5604479a9acc5ece6810a6f8330b099be996ff028dc26de",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
