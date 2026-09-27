export const name="folder-star-thin";
export const id="dl_ba6ba5f3739e41699716";
export const url=new URL("../icons/folder-star-thin.svg?v=11b100563dcb63512f97fc366396b05e2ce078318fc2750b26c9011f956a94fb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
