export const name="hide_image";
export const id="dl_4e06cd8cfeab7ae026af";
export const url=new URL("../icons/hide_image.svg?v=5f00df3d10679aac81fc43981195e7097d26fb1a0c5af5bfdde320907a76c7e2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
