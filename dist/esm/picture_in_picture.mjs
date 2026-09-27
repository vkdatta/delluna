export const name="picture_in_picture";
export const id="dl_e5ec08a17fe1018ebc0c";
export const url=new URL("../icons/picture_in_picture.svg?v=07f6227db128fae054cab11412dc2f4d770b816cb8f32adcd353ab4b08815f09",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
