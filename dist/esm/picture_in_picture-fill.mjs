export const name="picture_in_picture-fill";
export const id="dl_d0adde65a2654bc48012";
export const url=new URL("../icons/picture_in_picture-fill.svg?v=78fbee59c16bbcb1ab3033c78e69ffaa6d7398f7cce9ca5f96a3b210f1a28b0c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
