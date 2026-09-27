export const name="av_timer-fill";
export const id="dl_56a2aed89c6abbe583d8";
export const url=new URL("../icons/av_timer-fill.svg?v=58dbeac48e1ca19cc8477b7b3ceff6c8a765c27cf639119a0daa4cdb0fb2dedf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
