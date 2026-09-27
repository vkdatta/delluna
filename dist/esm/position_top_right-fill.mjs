export const name="position_top_right-fill";
export const id="dl_fd724bcfa7cd0dc3d430";
export const url=new URL("../icons/position_top_right-fill.svg?v=f4cdd18afab85a52df0387a064b1dc871323aba3b9b3efea6531060ec7a53246",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
