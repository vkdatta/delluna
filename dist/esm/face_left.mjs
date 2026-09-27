export const name="face_left";
export const id="dl_4edc642cd3e18d89883e";
export const url=new URL("../icons/face_left.svg?v=36df9d71275da1becb1ba6d5a154ded77c565afaee19e8b41980851b4eae89f5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
