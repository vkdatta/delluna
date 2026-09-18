export const name="videocam_off";
export const id="dl_972ca710a10e45019c6e";
export const url=new URL("../icons/videocam_off.svg?v=e49bbab239ebb6d7087ba7bfcd09afe2c048357e70eaa71e6af4a46b9dd35819",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
