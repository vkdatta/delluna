export const name="panorama-fill";
export const id="dl_8f4984984f4941eab545";
export const url=new URL("../icons/panorama-fill.svg?v=e82d1e72128ea9b580ef4c2f2db7b02946058a0d044bd48fb12e1ffd8d955967",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
