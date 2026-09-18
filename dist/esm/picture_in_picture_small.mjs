export const name="picture_in_picture_small";
export const id="dl_d82ffb9d88f649269712";
export const url=new URL("../icons/picture_in_picture_small.svg?v=94f4f570b0935fc3d90473f1689edc9e06e112205764f1e0011aa8bd4c54fb32",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
