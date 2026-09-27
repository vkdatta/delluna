export const name="picture_in_picture_off";
export const id="dl_41c19f8d8cc18bef0f21";
export const url=new URL("../icons/picture_in_picture_off.svg?v=726b3599c9d03d07d3633b6b6d14477a9a67de5671314dcbeaed83c77c0c1649",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
