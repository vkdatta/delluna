export const name="add_comment-fill";
export const id="dl_02e1b820b25e16d539c3";
export const url=new URL("../icons/add_comment-fill.svg?v=6995c1a00ea7520968faf73f517f76aaa5d7694ef8dd7c43a829917ee30d347d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
