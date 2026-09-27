export const name="arrow-fat-up-fill";
export const id="dl_50734ecdd5d44808bf43";
export const url=new URL("../icons/arrow-fat-up-fill.svg?v=fc7b6e9f1f6c11141c46d6ca01a36f38eb2365dda19f5cac82f54556e663531a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
