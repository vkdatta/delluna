export const name="arrow-clockwise-thin";
export const id="dl_8b2ad88ee1aa4ab29c0c";
export const url=new URL("../icons/arrow-clockwise-thin.svg?v=da03be5f23b6b3131775de1e2d189a4bc90abcd1b44de0d8978ce960f41786f5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
