export const name="briefcase-bold";
export const id="dl_c2dbd1c7725e416389ba";
export const url=new URL("../icons/briefcase-bold.svg?v=d7164d117d1b69d9e24cdfb355c0fae5b859245c592de201abed6865696db7b7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
