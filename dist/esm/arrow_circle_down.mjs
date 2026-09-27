export const name="arrow_circle_down";
export const id="dl_8511bffd764d711dcc5c";
export const url=new URL("../icons/arrow_circle_down.svg?v=1bca4b4f73c1d63a3f1620a71e45a0b05de0eb8ab3cacd54d71dfbca77be8d63",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
