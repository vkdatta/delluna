export const name="lucid_2-image-play";
export const id="dl_2441777e769e4132bcf6";
export const url=new URL("../icons/lucid_2-image-play.svg?v=2c4446d520aefe7c6371eedfb022ac3d9175635fdae3d389ace4ffa3d68558b6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
