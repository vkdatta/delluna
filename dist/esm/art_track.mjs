export const name="art_track";
export const id="dl_be9b80a4439547cdb526";
export const url=new URL("../icons/art_track.svg?v=860f9f142946c680e80abe11c6cc0c3140c538de8a72b5f2a2185cff3daaac43",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
