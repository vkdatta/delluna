export const name="lowercase";
export const id="dl_26321b83f73cced823cb";
export const url=new URL("../icons/lowercase.svg?v=c58aed020683185d3fa821d0931543fd2b5794ada84b2bc17e502b8d04cec343",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
