export const name="lucid_2-image-play";
export const id="dl_2441777e769e4132bcf6";
export const url=new URL("../icons/lucid_2-image-play.svg?v=a3c8a38588668dc2feadc7d1ea6e5d7b85e22d05e676125598d66b889833dd17",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
