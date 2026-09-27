export const name="file-ppt";
export const id="dl_39e1ff0474f84f069f4f";
export const url=new URL("../icons/file-ppt.svg?v=8f411d15b3a7947309d10cc2c5403f88cea2acd359e0d92d8cd89afc317765c2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
