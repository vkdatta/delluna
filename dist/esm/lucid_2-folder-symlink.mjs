export const name="lucid_2-folder-symlink";
export const id="dl_eead05a4013d446aa8f3";
export const url=new URL("../icons/lucid_2-folder-symlink.svg?v=7ec642915852baafc7aba5a8296f80c7581431b8fa7d87bb974884075d7b73f8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
