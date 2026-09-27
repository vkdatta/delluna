export const name="picture_in_picture";
export const id="dl_c92e46e5678907e0ba93";
export const url=new URL("../icons/picture_in_picture.svg?v=8c10d8610205c6355fe2f76dd838ee169af4f4d773895e6f0c1563eb84371838",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
