export const name="track";
export const id="dl_3d11649ae6974ebc9749";
export const url=new URL("../icons/track.svg?v=6bb2f4b1bc1fe47e691cb89b3df30d6b946dd6fbca9dcd53d84ddbcf9fdf7bfb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
