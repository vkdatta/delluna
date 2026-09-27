export const name="users-fill";
export const id="dl_6eaa9733ab9fef7f684a";
export const url=new URL("../icons/users-fill.svg?v=ed2928a761423f7c6b0efd6ccd9bcef28559c74159f596749eb1edac534956f4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
