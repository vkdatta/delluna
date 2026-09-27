export const name="caret-circle-up-thin";
export const id="dl_6bd4e2c314744748ab4d";
export const url=new URL("../icons/caret-circle-up-thin.svg?v=7bb2f95587e6c40406dc60a778bf210a9ba6815a9d85c8deeb5af8730a20303d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
