export const name="picture_in_picture_off-fill";
export const id="dl_3086ab1a32166f2aa5f0";
export const url=new URL("../icons/picture_in_picture_off-fill.svg?v=c82c2d438b7fa24c7218aef27465b8030c1d922a21247eef089f9ddb60a2164c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
