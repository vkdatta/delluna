export const name="lucid_2-image-play";
export const id="dl_2441777e769e4132bcf6";
export const url=new URL("../icons/lucid_2-image-play.svg?v=61c7bef6d889c519f1a413df778517da332309fe494bf04c037c01c668d3ac99",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
