export const name="folder_check_2-fill";
export const id="dl_0bfbea3c43a18218ea5a";
export const url=new URL("../icons/folder_check_2-fill.svg?v=6f285a2f0cd48b4377ab8a98fb41ec7f814573f7a8ca6870baca6183600da2af",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
